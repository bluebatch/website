import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "node:crypto";
import { sendMetaEvent } from "@/lib/server/meta-capi";
import { mapLead } from "@/lib/server/lead-mapping";
import { upsertContact, hubspotConfigured } from "@/lib/server/hubspot-lead";

export const runtime = "nodejs";

// Nachgelagertes Tracking für Meeting-Buchungen. Der HubSpot-Meeting-Embed legt
// den Kontakt + das Meeting selbst an; wir setzen hier NUR die Attribution nach
// (reines Property-Update, KEIN Formular-Event) und feuern das Meta-"Lead".
const META_EVENT_NAME = "Lead";

interface Attribution {
  fbclid?: string | null;
  utm?: Record<string, string>;
}

interface Payload {
  email?: string;
  firstname?: string;
  lastname?: string;
  attribution?: Attribution;
  pageUri?: string;
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

  const mapped = mapLead(body.attribution?.utm ?? {}, body.attribution?.fbclid);

  // 1) HubSpot: reines Property-Update am (schon gebuchten) Kontakt — kein Form-Event.
  if (hubspotConfigured()) {
    const props: Record<string, string> = {
      lead_source: mapped.lead_source,
      lead_medium: mapped.lead_medium,
    };
    if (mapped.lead_campaign) props.lead_campaign = mapped.lead_campaign;
    if (mapped.lead_content) props.lead_content = mapped.lead_content;
    if (body.firstname?.trim()) props.firstname = body.firstname.trim();
    if (body.lastname?.trim()) props.lastname = body.lastname.trim();
    await upsertContact(email, props);
  }

  // 2) Meta-CAPI: eigenes "Lead" für die Buchung (eigene, zufällige event_id — es ist
  // eine eigenständige Conversion, kein Duplikat des Formular-Leads).
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    undefined;
  await sendMetaEvent({
    eventId: randomUUID(),
    eventName: META_EVENT_NAME,
    contentName: "Terminbuchung",
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
}
