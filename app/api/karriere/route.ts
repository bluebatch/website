import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Bewerbungen laufen bewusst NICHT über /api/contact. Dort feuert jeder Submit
// ein Meta-"Lead"-Event und setzt die lead_*-Properties — Bewerber würden damit
// die Ads-Optimierung und das Sales-Reporting verwässern. Hier also: eigenes
// HubSpot-Formular, kein Meta-Event, keine lead_*-Attribution.
const PORTAL_ID = "146998643";

// Solange das dedizierte Karriere-Formular in HubSpot noch nicht existiert,
// fällt der Submit auf das Default-Kontaktformular zurück. Sobald die GUID
// vorliegt: HUBSPOT_KARRIERE_FORM_GUID setzen, hier ist nichts zu ändern.
const DEFAULT_FORM_GUID = "e1b4ea1a-3744-4219-80d0-1cb837bdc384";
const FORM_GUID = process.env.HUBSPOT_KARRIERE_FORM_GUID || DEFAULT_FORM_GUID;
const SUBMIT_URL = `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

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
