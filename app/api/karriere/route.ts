import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Bewerbungen laufen bewusst NICHT über /api/contact. Dort feuert jeder Submit
// ein Meta-"Lead"-Event, und ein Bewerber als Meta-Conversion verzerrt die
// Ads-Optimierung. Hier also: eigenes HubSpot-Formular "Bewerbung-mit-utm",
// kein Meta-Event. Die Submission-API adressiert das Formular über die GUID,
// nicht über die kurze Embed-ID aus dem Einbettungscode.
const PORTAL_ID = "146998643";
const FORM_GUID = "9ff50a22-af98-49e8-aefa-6e3602a314ca";
const SUBMIT_URL = `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

// Attribution ist hier konstant, nicht aus UTM-Parametern gemappt: eine
// Bewerbung kommt immer über die Website herein. lead_content="Bewerbung"
// macht Bewerber in HubSpot mit einem Filter von Sales-Leads trennbar.
const LEAD_ATTRIBUTION = {
  lead_source: "inbound",
  lead_medium: "website",
  lead_content: "Bewerbung",
} as const;

interface Payload {
  firstname?: string;
  lastname?: string;
  email?: string;
  position?: string; // beworbene Stelle bzw. "Initiativbewerbung"
  profileUrl?: string; // LinkedIn, GitHub oder Portfolio
  message?: string;
  pageUri?: string;
  pageName?: string;
}

type Field = { name: string; value: string };

export async function POST(req: NextRequest) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  if (!email) {
    return NextResponse.json({ error: "email required" }, { status: 400 });
  }

  // Jedes Feld hier muss auch AUF dem Formular liegen. HubSpot verwirft Felder,
  // die das Formular nicht führt, kommentarlos und antwortet trotzdem mit 200 —
  // ein Tippfehler im Feldnamen fällt also nicht auf, der Wert fehlt einfach.
  const fields: Field[] = [];
  const push = (name: string, value?: string) => {
    if (value && value.trim()) fields.push({ name, value: value.trim() });
  };
  push("email", email);
  push("firstname", body.firstname);
  push("lastname", body.lastname);
  push("stelle", body.position);
  push("hs_linkedin_handle", body.profileUrl);
  push("warum_du_zu_uns_passt", body.message);
  for (const [name, value] of Object.entries(LEAD_ATTRIBUTION)) push(name, value);

  // hubspotutk ist ein First-Party-Cookie auf unserer Domain und kommt daher
  // automatisch mit dem Request — HubSpot hängt die Bewerbung so an die Session.
  const hutk = req.cookies.get("hubspotutk")?.value;
  const context: Record<string, string> = {};
  if (hutk) context.hutk = hutk;
  if (body.pageUri) context.pageUri = body.pageUri;
  if (body.pageName) context.pageName = body.pageName;

  try {
    const res = await fetch(SUBMIT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fields,
        ...(Object.keys(context).length ? { context } : {}),
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      return NextResponse.json(
        { ok: false, error: "hubspot_error", status: res.status, detail },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "network" }, { status: 502 });
  }
}
