import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

// Reuse des Onboarding-HubSpot-Tokens (Private-App, Scopes:
// crm.objects.contacts.write/read, crm.objects.notes.write).
const TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const BASE = "https://api.hubapi.com";

// Eine Funnel-Submission: alle Game-Antworten + optional gewählter Termin.
interface Payload {
  funnel?: string; // Slug der Landingpage, z. B. "claude-cowork-schulung"
  funnelTitle?: string; // Klartext fürs Note
  email?: string;
  selectedDate?: string; // gewählter Termin (Klartext) — leer bei reinem Request
  note?: string; // freie Nachricht des Users
  answers?: Record<string, string | string[]>; // alle Game-Antworten
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

async function searchContactId(email: string): Promise<string | null> {
  const res = await hs(`/crm/v3/objects/contacts/search`, {
    method: "POST",
    body: JSON.stringify({
      filterGroups: [
        { filters: [{ propertyName: "email", operator: "EQ", value: email }] },
      ],
      properties: ["email"],
      limit: 1,
    }),
  });
  if (!res.ok) return null;
  const json = (await res.json().catch(() => null)) as
    | { results?: Array<{ id?: string }> }
    | null;
  return json?.results?.[0]?.id ?? null;
}

async function ensureContact(
  email: string,
  extra: Record<string, string> = {},
): Promise<string | null> {
  const existing = await searchContactId(email);
  if (existing) return existing;
  const res = await hs("/crm/v3/objects/contacts", {
    method: "POST",
    body: JSON.stringify({
      properties: { email, lead_source: "landingpage_funnel", ...extra },
    }),
  });
  if (!res.ok) return null;
  const json = (await res.json().catch(() => null)) as { id?: string } | null;
  return json?.id ?? null;
}

function fmtAnswer(value: string | string[]): string {
  return Array.isArray(value) ? value.join(", ") : value;
}

function buildNoteBody(p: Payload): string {
  const head = p.funnelTitle ?? p.funnel ?? "Landingpage-Funnel";
  const lines: string[] = [];
  if (p.email) lines.push(`<strong>E-Mail:</strong> ${p.email}`);
  if (p.selectedDate)
    lines.push(`<strong>Gewählter Termin:</strong> ${p.selectedDate}`);
  for (const [k, v] of Object.entries(p.answers ?? {})) {
    const val = fmtAnswer(v);
    if (val && val.trim()) lines.push(`<strong>${k}:</strong> ${val}`);
  }
  if (p.note?.trim()) lines.push(`<strong>Nachricht:</strong> ${p.note.trim()}`);
  if (p.utm_source) lines.push(`<strong>utm_source:</strong> ${p.utm_source}`);
  if (p.utm_campaign)
    lines.push(`<strong>utm_campaign:</strong> ${p.utm_campaign}`);
  return `<p><strong>Anmeldung — ${head}</strong></p><p>${lines.join("<br>")}</p>`;
}

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
    // Note ist nice-to-have, kein harter Fehler.
  });
}

export async function POST(req: NextRequest) {
  // Ohne Token ein No-Op — der Funnel darf nie brechen.
  if (!TOKEN) {
    return NextResponse.json({ ok: false, skipped: "no_token" });
  }

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

  const utm: Record<string, string> = {};
  if (body.utm_source?.trim()) utm.utm_source = body.utm_source.trim();
  if (body.utm_campaign?.trim()) utm.utm_campaign = body.utm_campaign.trim();

  try {
    const contactId = await ensureContact(email, utm);
    if (contactId) await createNote(contactId, buildNoteBody(body));
    return NextResponse.json({ ok: true, contactId });
  } catch {
    // HubSpot-Fehler nicht an den User durchreichen.
    return NextResponse.json(
      { ok: false, error: "hubspot_error" },
      { status: 502 },
    );
  }
}
