import { NextRequest, NextResponse } from "next/server";
import {
  ensureCompany,
  ensureContact,
  associate,
  createNote,
  hubspotConfigured,
} from "@/lib/server/hubspot-lead";

export const runtime = "nodejs";

// Quelle, die wir beim Anlegen setzen. Muss als Property `lead_source` (Dropdown)
// sowohl auf Company als auch auf Contact in HubSpot existieren.
const LEAD_SOURCE = "meta_ai_onboarding";

interface OnboardingSettings {
  erp?: string;
  crm?: string;
  buchhaltung?: string;
  logistik?: string;
  hasApi?: string;
  aiExperience?: string;
}

interface Payload {
  stage?: "domain" | "email";
  domain?: string;
  email?: string;
  settings?: OnboardingSettings;
  utm_source?: string;
  utm_campaign?: string;
}

/** Baut den Note-Text aus den Wizard-Eingaben. */
function buildNoteBody(
  domain: string | undefined,
  email: string,
  s: OnboardingSettings = {},
): string {
  const rows: Array<[string, string | undefined]> = [
    ["Domain", domain],
    ["E-Mail", email],
    ["ERP", s.erp],
    ["CRM", s.crm],
    ["Buchhaltung", s.buchhaltung],
    ["Logistik", s.logistik],
    ["API vorhanden", s.hasApi],
    ["KI-Erfahrung", s.aiExperience],
  ];
  const lines = rows
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `<strong>${k}:</strong> ${v}`);
  return `<p><strong>KI-Onboarding-Wizard — Eingaben</strong></p><p>${lines.join("<br>")}</p>`;
}

export async function POST(req: NextRequest) {
  // Ohne Token wird die Route zum No-Op, damit der Wizard nie bricht.
  if (!hubspotConfigured()) {
    return NextResponse.json({ ok: false, skipped: "no_token" });
  }

  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  const domain = body.domain?.trim().toLowerCase();
  const email = body.email?.trim().toLowerCase();

  // lead_source + UTM-Attribution (nur was da ist), wird beim Anlegen mitgesetzt.
  const props: Record<string, string> = { lead_source: LEAD_SOURCE };
  if (body.utm_source?.trim()) props.utm_source = body.utm_source.trim();
  if (body.utm_campaign?.trim()) props.utm_campaign = body.utm_campaign.trim();

  try {
    // Schritt 1: Domain hinterlegt → Company anlegen (auch ohne Mail, damit der
    // Vertrieb bei Abbrechern den Ansprechpartner selbst recherchieren kann).
    if (body.stage === "domain" && domain) {
      const companyId = await ensureCompany(domain, props);
      return NextResponse.json({ ok: true, companyId });
    }

    // Schritt 5: Mail hinterlegt → Contact anlegen, an Company hängen und die
    // Wizard-Settings als Note am Contact hinterlegen (für den manuellen Report).
    if (body.stage === "email" && email) {
      const contactId = await ensureContact(email, props);
      let companyId: string | null = null;
      if (domain) {
        companyId = await ensureCompany(domain, props);
        if (contactId && companyId) await associate(contactId, companyId);
      }
      if (contactId) {
        await createNote(buildNoteBody(domain, email, body.settings), {
          object: "contacts",
          id: contactId,
        });
      }
      return NextResponse.json({ ok: true, contactId, companyId });
    }

    return NextResponse.json({ error: "invalid stage/payload" }, { status: 400 });
  } catch {
    return NextResponse.json({ ok: false, error: "hubspot_error" }, { status: 502 });
  }
}
