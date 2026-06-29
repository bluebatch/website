// Server-seitige HubSpot-Lead-Logik. Single source of truth — genutzt von
// /api/hubspot/lead (Wizard) UND vom Chat-Proxy. Idempotent: sucht erst per
// Domain/E-Mail, legt nur an wenn nicht vorhanden. Wirft nie hart.

const TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const BASE = "https://api.hubapi.com";

export function hubspotConfigured(): boolean {
  return Boolean(TOKEN);
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

/**
 * Legt ein CRM-Objekt an. Schlägt der Create fehl (z.B. weil ein Property wie
 * lead_source kein gültiger Dropdown-Wert ist), wird einmal nur mit den
 * Kern-Properties (`core`) neu versucht, damit der Lead nicht still verloren geht.
 */
async function createObject(
  object: "companies" | "contacts",
  props: Record<string, string>,
  core: string[],
): Promise<string | null> {
  let res = await hs(`/crm/v3/objects/${object}`, {
    method: "POST",
    body: JSON.stringify({ properties: props }),
  });
  if (!res.ok) {
    const coreProps = Object.fromEntries(
      Object.entries(props).filter(([k]) => core.includes(k)),
    );
    res = await hs(`/crm/v3/objects/${object}`, {
      method: "POST",
      body: JSON.stringify({ properties: coreProps }),
    });
  }
  if (!res.ok) return null;
  const json = (await res.json().catch(() => null)) as { id?: string } | null;
  return json?.id ?? null;
}

/** Findet die Company per Domain oder legt sie neu an. `props` setzt z.B. lead_source/UTM. */
export async function ensureCompany(
  domain: string,
  props: Record<string, string> = {},
): Promise<string | null> {
  const existing = await searchId("companies", "domain", domain);
  if (existing) return existing;
  return createObject("companies", { domain, name: domain, ...props }, ["domain", "name"]);
}

/**
 * Findet eine Company per Name oder legt sie neu an (ohne Domain). Für Leads, die
 * nur ihren Firmennamen nennen ("wir sind Bioraum"), damit überhaupt ein Lead
 * entsteht. Domain kann später nachgereicht werden.
 */
export async function ensureCompanyByName(
  name: string,
  props: Record<string, string> = {},
): Promise<string | null> {
  const existing = await searchId("companies", "name", name);
  if (existing) return existing;
  return createObject("companies", { name, ...props }, ["name"]);
}

/** Findet den Contact per E-Mail oder legt ihn neu an. `props` setzt z.B. lead_source/UTM. */
export async function ensureContact(
  email: string,
  props: Record<string, string> = {},
): Promise<string | null> {
  const existing = await searchId("contacts", "email", email);
  if (existing) return existing;
  return createObject("contacts", { email, ...props }, ["email"]);
}

/** Verknüpft Contact ↔ Company (v4 Default-Association). Nice-to-have, kein harter Fehler. */
export async function associate(contactId: string, companyId: string): Promise<void> {
  await hs(
    `/crm/v4/objects/contacts/${contactId}/associations/default/companies/${companyId}`,
    { method: "PUT" },
  ).catch(() => {});
}

// HubSpot-defined Association-Type-IDs für Notes: Contact = 202, Company = 190.
const NOTE_ASSOC_TYPE = { contacts: 202, companies: 190 } as const;

/** Legt eine Note an und hängt sie an einen Contact oder eine Company. */
export async function createNote(
  body: string,
  target: { object: "contacts" | "companies"; id: string },
): Promise<void> {
  await hs("/crm/v3/objects/notes", {
    method: "POST",
    body: JSON.stringify({
      properties: { hs_note_body: body, hs_timestamp: Date.now() },
      associations: [
        {
          to: { id: target.id },
          types: [
            {
              associationCategory: "HUBSPOT_DEFINED",
              associationTypeId: NOTE_ASSOC_TYPE[target.object],
            },
          ],
        },
      ],
    }),
  }).catch(() => {});
}
