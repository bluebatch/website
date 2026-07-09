import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { sendMetaEvent } from "@/lib/server/meta-capi";
import { mapLead } from "@/lib/server/lead-mapping";

export const runtime = "nodejs";

// Meta-Standard-Event beim Formular-Submit. Muss zum Optimierungsziel der
// Meta-Kampagne passen (die optimiert auf "Lead").
const META_EVENT_NAME = "Lead";

// Zentraler Kontakt-/Lead-Endpunkt der Seite. Wir submitten serverseitig gegen ein
// *headless* HubSpot-Formular (nur API-Ziel, nicht auf der Seite eingebettet).
// Zwei Gründe für die Forms-API statt der reinen CRM-API:
//   1. Wir mappen die Meta-/UTM-Attribution auf eure Dropdowns lead_source/lead_medium.
//   2. Über den hubspotutk-Cookie im `context` bekommt HubSpot die *native* Quelle-
//      Attribution ("Ursprüngliche Quelle"), sobald Marketing-Consent vorliegt.
const PORTAL_ID = "146998643";
const FORM_GUID = "e1b4ea1a-3744-4219-80d0-1cb837bdc384";
const SUBMIT_URL = `https://api-eu1.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`;

interface Attribution {
  fbclid?: string | null;
  // utm enthält utm_*, hsa_* und ggf. fbclid — so wie MetaAdsTracker es ablegt.
  utm?: Record<string, string>;
}

interface Payload {
  firstname?: string;
  lastname?: string;
  phone?: string;
  email?: string;
  message?: string; // freies Anliegen → HubSpot-Property ihre_anfrage
  contentName?: string; // Label fürs Meta-CAPI-Event (content_name)
  attribution?: Attribution;
  pageUri?: string;
  pageName?: string;
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

  const utm = body.attribution?.utm ?? {};
  const mapped = mapLead(utm, body.attribution?.fbclid);

  const fields: Array<{ name: string; value: string }> = [];
  const push = (name: string, value?: string) => {
    if (value && value.trim()) fields.push({ name, value: value.trim() });
  };
  push("email", email);
  push("firstname", body.firstname);
  push("lastname", body.lastname);
  push("phone", body.phone);
  push("ihre_anfrage", body.message);
  push("lead_source", mapped.lead_source);
  push("lead_medium", mapped.lead_medium);
  push("lead_campaign", mapped.lead_campaign);
  push("lead_content", mapped.lead_content);

  // hubspotutk ist ein First-Party-Cookie auf unserer Domain und kommt daher
  // automatisch mit dem Request — kein manuelles Durchreichen nötig.
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

    // Meta-CAPI serverseitig mitfeuern (früher ein separater Client-Call an
    // /api/fb-events). Läuft nur nach erfolgreichem HubSpot-Submit. sendMetaEvent
    // wirft nie — Tracking-Fehler dürfen den Lead nicht kippen.
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      undefined;
    await sendMetaEvent({
      eventId: randomUUID(),
      eventName: META_EVENT_NAME,
      contentName: body.contentName,
      email,
      firstName: body.firstname,
      lastName: body.lastname,
      eventSourceUrl: body.pageUri,
      fbc: req.cookies.get("_fbc")?.value,
      fbp: req.cookies.get("_fbp")?.value,
      ip,
      userAgent: req.headers.get("user-agent") ?? undefined,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "network" }, { status: 502 });
  }
}
