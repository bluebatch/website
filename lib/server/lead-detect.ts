// Erkennt Lead-Signale (Firma/Domain/E-Mail/Intent) UND die Qualifizierung (Branche,
// Tools, Pain, Volumen, Rolle) aus dem GESAMTEN bisherigen User-Verlauf und feuert
// serverseitig + hidden:
//   Domain/Firma → Meta "Lead"            + HubSpot Company (per Domain oder Name)
//   E-Mail       → Meta "CompleteRegistration" + HubSpot Contact (+ assoziieren)
// Die Qualifizierungs-Notiz wird pro Turn upgesertet (vorhandene aktualisieren), damit
// später genannte Probleme nachgetragen werden. Alles best-effort, Fehler werden
// geschluckt, der Chat läuft weiter.

import { generateText } from "ai";
import { openwebui, LEAD_MODEL } from "@/lib/openwebui";
import { sendMetaEvent } from "@/lib/server/meta-capi";
import {
  ensureCompany,
  ensureCompanyByName,
  ensureContact,
  associate,
  upsertNote,
  hubspotConfigured,
} from "@/lib/server/hubspot-lead";

const LEAD_SOURCE = "homepage_chat";

// Meta-Standard-Eventnamen — gleiche Semantik wie das Enum der Website.
const META_LEAD = "Lead";
const META_REGISTRATION = "CompleteRegistration";

// Marker im Notiz-Body, damit wir die richtige Notiz pro Turn wiederfinden + updaten.
const QUAL_MARKER = "Homepage-Chat — Qualifizierung";

export interface RequestMeta {
  ip?: string;
  userAgent?: string;
  fbp?: string;
  fbc?: string;
  eventSourceUrl?: string;
  utmSource?: string;
  utmCampaign?: string;
}

export interface LeadData {
  // Signale
  domain?: string;
  email?: string;
  company?: string;
  intent?: boolean;
  // Qualifizierung
  branche?: string;
  tools?: string[];
  pain?: string;
  volumen?: string;
  rolle?: string;
}

const COMMON_TLDS = new Set([
  "de", "com", "net", "org", "io", "eu", "at", "ch", "info", "shop", "online",
  "biz", "co", "ai", "app", "dev", "gmbh", "ag", "tech", "store", "digital",
]);

const EMAIL_RE = /[a-z0-9._%+-]+@([a-z0-9.-]+\.[a-z]{2,24})/i;
const DOMAIN_RE =
  /\b((?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+([a-z]{2,24}))\b/gi;

/** Verlässliche Regex-Extraktion von E-Mail und Domain aus dem Verlauf. */
export function regexSignals(text: string): { domain?: string; email?: string } {
  const out: { domain?: string; email?: string } = {};

  const email = text.match(EMAIL_RE);
  if (email) {
    out.email = email[0].toLowerCase();
    out.domain = email[1].toLowerCase();
  }

  if (!out.domain) {
    DOMAIN_RE.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = DOMAIN_RE.exec(text)) !== null) {
      const tld = m[2].toLowerCase();
      if (COMMON_TLDS.has(tld)) {
        out.domain = m[1].toLowerCase().replace(/^www\./, "");
        break;
      }
    }
  }

  return out;
}

/** Eine LLM-Extraktion über den gesamten User-Verlauf: Signale + Qualifizierung. */
async function extractAll(transcript: string): Promise<LeadData> {
  try {
    const { text: raw } = await generateText({
      model: openwebui(LEAD_MODEL),
      temperature: 0,
      maxTokens: 350,
      system:
        "Du extrahierst Lead-Infos aus den bisherigen Aussagen eines Website-Besuchers. " +
        "Antworte AUSSCHLIESSLICH mit JSON, keine Erklärung. Schema: " +
        '{"company": string|null, "domain": string|null, "email": string|null, ' +
        '"intent": boolean, "branche": string|null, "tools": string[]|null, ' +
        '"pain": string|null, "volumen": string|null, "rolle": string|null}. ' +
        "company=Firmenname ohne Rechtsform, domain=genannte Domain, email=genannte E-Mail, " +
        "intent=echtes Kauf-/Kontaktinteresse, branche=Branche/Tätigkeit, tools=genannte " +
        "Systeme/ERP/Software, pain=wo manuelle Arbeit/Schmerz sitzt, volumen=Mengenangaben, " +
        "rolle=Funktion der Person. Nur was wirklich gesagt wurde, sonst null.",
      prompt: transcript,
    });
    const p = JSON.parse(raw.replace(/```json|```/g, "").trim()) as Record<string, unknown>;
    const str = (v: unknown): string | undefined =>
      typeof v === "string" && v.trim() ? v.trim() : undefined;

    const out: LeadData = {};
    out.company = str(p.company);
    const dom = str(p.domain);
    if (dom)
      out.domain = dom.toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0];
    if (typeof p.email === "string" && p.email.includes("@")) out.email = p.email.trim().toLowerCase();
    if (typeof p.intent === "boolean") out.intent = p.intent;
    out.branche = str(p.branche);
    if (Array.isArray(p.tools)) {
      const t = p.tools.filter((x): x is string => typeof x === "string" && x.trim().length > 0);
      if (t.length) out.tools = t;
    }
    out.pain = str(p.pain);
    out.volumen = str(p.volumen);
    out.rolle = str(p.rolle);
    return out;
  } catch {
    return {};
  }
}

/** Baut den HubSpot-Notiz-Text. Gibt null zurück, wenn nichts Brauchbares drin ist. */
function buildQualNote(d: LeadData): string | null {
  const rows: Array<[string, string | undefined]> = [
    ["Firma", d.company],
    ["Branche", d.branche],
    ["Tools/Systeme", d.tools?.join(", ")],
    ["Pain/Prozess", d.pain],
    ["Volumen", d.volumen],
    ["Rolle", d.rolle],
  ];
  const lines = rows
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `<strong>${k}:</strong> ${v}`);
  if (!lines.length) return null;
  return `<p><strong>${QUAL_MARKER}</strong></p><p>${lines.join("<br>")}</p>`;
}

/**
 * Erkennt + feuert auf Basis des gesamten User-Verlaufs. `sessionId` macht die
 * Meta-event_id deterministisch (Dedup), HubSpot-Company/Contact sind idempotent,
 * die Qualifizierungs-Notiz wird upgesertet.
 */
export async function detectAndFireLead(
  transcript: string,
  sessionId: string,
  meta: RequestMeta,
): Promise<LeadData> {
  const rx = regexSignals(transcript);
  const llm = await extractAll(transcript);

  const domain = rx.domain ?? llm.domain;
  const email = rx.email ?? llm.email;
  const company = llm.company;
  const data: LeadData = { ...llm, domain, email, company };

  if (!domain && !email && !company) return data;

  const utm: Record<string, string> = { lead_source: LEAD_SOURCE };
  if (meta.utmSource) utm.utm_source = meta.utmSource;
  if (meta.utmCampaign) utm.utm_campaign = meta.utmCampaign;

  // Meta-Events laufen parallel und brauchen keine HubSpot-IDs.
  const metaTasks: Promise<unknown>[] = [];
  if (domain || company) {
    metaTasks.push(
      sendMetaEvent({
        eventId: `${sessionId}:lead`,
        eventName: META_LEAD,
        contentName: company ?? "homepage_chat",
        eventSourceUrl: meta.eventSourceUrl,
        fbp: meta.fbp,
        fbc: meta.fbc,
        ip: meta.ip,
        userAgent: meta.userAgent,
      }),
    );
  }
  if (email) {
    metaTasks.push(
      sendMetaEvent({
        eventId: `${sessionId}:registration`,
        eventName: META_REGISTRATION,
        email,
        contentName: company ?? "homepage_chat",
        eventSourceUrl: meta.eventSourceUrl,
        fbp: meta.fbp,
        fbc: meta.fbc,
        ip: meta.ip,
        userAgent: meta.userAgent,
      }),
    );
  }

  // HubSpot: Company/Contact (idempotent), dann Qualifizierungs-Notiz upserten.
  const hubspotTask = (async () => {
    if (!hubspotConfigured()) return;
    let companyId: string | null = null;
    let contactId: string | null = null;

    if (domain) {
      const props: Record<string, string> = { ...utm };
      if (company) props.name = company;
      companyId = await ensureCompany(domain, props);
    } else if (company) {
      companyId = await ensureCompanyByName(company, utm);
    }
    if (email) contactId = await ensureContact(email, utm);
    if (contactId && companyId) await associate(contactId, companyId);

    const note = buildQualNote(data);
    if (note) {
      if (companyId) await upsertNote({ object: "companies", id: companyId }, note, QUAL_MARKER);
      else if (contactId) await upsertNote({ object: "contacts", id: contactId }, note, QUAL_MARKER);
    }
  })();

  await Promise.allSettled([...metaTasks, hubspotTask]);
  return data;
}
