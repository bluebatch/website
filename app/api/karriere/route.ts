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

// Felder, die jedes unserer HubSpot-Formulare kennt. Alles darüber hinaus
// (z.B. ein eigenes "position"-Property) wird optimistisch mitgeschickt und
// beim Retry weggelassen — sonst gingen Bewerbungen verloren, nur weil das
// Formular ein Feld noch nicht führt.
const CORE_FIELDS = ["email", "firstname", "lastname", "ihre_anfrage"];

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

/** Baut den Freitext, der auch im Fallback-Formular die ganze Bewerbung enthält. */
function buildMessage(body: Payload): string {
  const parts: string[] = [];
  if (body.position?.trim()) parts.push(`Bewerbung als: ${body.position.trim()}`);
  if (body.profileUrl?.trim()) parts.push(`Profil: ${body.profileUrl.trim()}`);
  if (body.message?.trim()) parts.push(body.message.trim());
  return parts.join("\n\n");
}

function submit(fields: Field[], context: Record<string, string>) {
  return fetch(SUBMIT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fields,
      ...(Object.keys(context).length ? { context } : {}),
    }),
  });
}

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

  const fields: Field[] = [];
  const push = (name: string, value?: string) => {
    if (value && value.trim()) fields.push({ name, value: value.trim() });
  };
  push("email", email);
  push("firstname", body.firstname);
  push("lastname", body.lastname);
  push("ihre_anfrage", buildMessage(body));
  push("position", body.position);
  for (const [name, value] of Object.entries(LEAD_ATTRIBUTION)) push(name, value);

  // hubspotutk ist ein First-Party-Cookie auf unserer Domain und kommt daher
  // automatisch mit dem Request — HubSpot hängt die Bewerbung so an die Session.
  const hutk = req.cookies.get("hubspotutk")?.value;
  const context: Record<string, string> = {};
  if (hutk) context.hutk = hutk;
  if (body.pageUri) context.pageUri = body.pageUri;
  if (body.pageName) context.pageName = body.pageName;

  try {
    let res = await submit(fields, context);
    if (!res.ok) {
      // Zweiter Versuch nur mit den Standardfeldern (s. CORE_FIELDS).
      res = await submit(
        fields.filter((f) => CORE_FIELDS.includes(f.name)),
        context,
      );
    }
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
