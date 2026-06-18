import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Private-App-Token mit Scopes: crm.objects.companies.write,
// crm.objects.contacts.write (+ die zugehörigen read-Scopes).
const TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const BASE = "https://api.hubapi.com";

// Quelle, die wir beim Anlegen setzen. Muss als Property `lead_source`
// (Dropdown) sowohl auf Company als auch auf Contact in HubSpot existieren.
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

function hs(path: string, init: RequestInit) {
  return fetch(`${BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  });
}

async function searchId(
  object: "companies" | "contacts",
  propertyName: string,
  value: string,
): Promise<string | null> {
  const res = await hs(`/crm/v3/objects/${object}/search`, {
    method: "POST",
    body: JSON.stringify({
      filterGroups: [{ filters: [{ propertyName, operator: "EQ", value }] }],
      properties: [propertyName],
      limit: 1,
    }),
  });
  if (!res.ok) return null;
  const json = (await res.json().catch(() => null)) as
    | { results?: Array<{ id?: string }> }
    | null;
  return json?.results?.[0]?.id ?? null;
}

/** Findet die Company per Domain oder legt sie neu an (mit Quelle/UTM). */
async function ensureCompany(
  domain: string,
  extra: Record<string, string> = {},
): Promise<string | null> {
  const existing = await searchId("companies", "domain", domain);
  if (existing) return existing;
  const res = await hs("/crm/v3/objects/companies", {
    method: "POST",
    body: JSON.stringify({
      properties: { domain, name: domain, lead_source: LEAD_SOURCE, ...extra },
    }),
  });
  if (!res.ok) return null;
  const json = (await res.json().catch(() => null)) as { id?: string } | null;
  return json?.id ?? null;
}

/** Findet den Contact per E-Mail oder legt ihn neu an (mit Quelle/UTM). */
async function ensureContact(
  email: string,
  extra: Record<string, string> = {},
): Promise<string | null> {
  const existing = await searchId("contacts", "email", email);
  if (existing) return existing;
  const res = await hs("/crm/v3/objects/contacts", {
    method: "POST",
    body: JSON.stringify({
      properties: { email, lead_source: LEAD_SOURCE, ...extra },
    }),
  });
  if (!res.ok) return null;
  const json = (await res.json().catch(() => null)) as { id?: string } | null;
  return json?.id ?? null;
}

/** Verknüpft Contact ↔ Company über die Default-Association (v4). */
async function associate(contactId: string, companyId: string): Promise<void> {
  await hs(
    `/crm/v4/objects/contacts/${contactId}/associations/default/companies/${companyId}`,
    { method: "PUT" },
  ).catch(() => {
    // Verknüpfung ist nice-to-have, kein harter Fehler
  });
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

/** Legt eine Note an und hängt sie an den Contact (HubSpot-defined Note→Contact = 202). */
async function createNote(contactId: string, body: string): Promise<void> {
  await hs("/crm/v3/objects/notes", {
    method: "POST",
    body: JSON.stringify({
      properties: { hs_note_body: body, hs_timestamp: Date.now() },
      associations: [
        {
          to: { id: contactId },
          types: [
            { associationCategory: "HUBSPOT_DEFINED", associationTypeId: 202 },
          ],
        },
      ],
    }),
  }).catch(() => {
    // Note ist nice-to-have, kein harter Fehler
  });
}

export async function POST(req: NextRequest) {
  // Ohne Token wird die Route zum No-Op, damit der Wizard nie bricht.
  if (!TOKEN) {
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

  // UTM-Attribution (nur was da ist), wird beim Anlegen mitgesetzt.
  const utm: Record<string, string> = {};
  if (body.utm_source?.trim()) utm.utm_source = body.utm_source.trim();
  if (body.utm_campaign?.trim()) utm.utm_campaign = body.utm_campaign.trim();

  try {
    // Schritt 1: Domain hinterlegt → Company anlegen (auch ohne Mail, damit der
    // Vertrieb bei Abbrechern den Ansprechpartner selbst recherchieren kann).
    if (body.stage === "domain" && domain) {
      const companyId = await ensureCompany(domain, utm);
      return NextResponse.json({ ok: true, companyId });
    }

    // Schritt 5: Mail hinterlegt → Contact anlegen, an Company hängen und die
    // Wizard-Settings als Note am Contact hinterlegen (für den manuellen Report).
    if (body.stage === "email" && email) {
      const contactId = await ensureContact(email, utm);
      let companyId: string | null = null;
      if (domain) {
        companyId = await ensureCompany(domain, utm);
        if (contactId && companyId) await associate(contactId, companyId);
      }
      if (contactId) {
        await createNote(contactId, buildNoteBody(domain, email, body.settings));
      }
      return NextResponse.json({ ok: true, contactId, companyId });
    }

    return NextResponse.json({ error: "invalid stage/payload" }, { status: 400 });
  } catch {
    // Wir surfacen HubSpot-Fehler nicht an den User — der Wizard läuft weiter.
    return NextResponse.json({ ok: false, error: "hubspot_error" }, { status: 502 });
  }
}
