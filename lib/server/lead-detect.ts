// Erkennt in einer Chat-Nachricht Lead-Signale (Domain/E-Mail/Firma/Intent) und
// feuert serverseitig + hidden dieselben Events wie das Domain-Feld:
//   Domain → Meta "Lead"               + HubSpot ensureCompany
//   E-Mail → Meta "CompleteRegistration" + HubSpot ensureContact (+ assoziieren)
//
// Robust: Regex ist die verlässliche Primärquelle (deckt "meine Domain ist abc.de"
// und E-Mails ab), das Mini-Model ergänzt nur Fuzzy-Fälle ("ich bin von Müller
// Großhandel"). Alles best-effort — Fehler werden geschluckt, der Chat läuft weiter.

import { generateText } from "ai";
import { openwebui, LEAD_MODEL } from "@/lib/openwebui";
import { sendMetaEvent } from "@/lib/server/meta-capi";
import {
  ensureCompany,
  ensureContact,
  associate,
  createNote,
  hubspotConfigured,
} from "@/lib/server/hubspot-lead";

const LEAD_SOURCE = "homepage_chat";

// Meta-Standard-Eventnamen — gleiche Semantik wie das Enum der Website.
const META_LEAD = "Lead";
const META_REGISTRATION = "CompleteRegistration";

export interface RequestMeta {
  ip?: string;
  userAgent?: string;
  fbp?: string;
  fbc?: string;
  eventSourceUrl?: string;
  utmSource?: string;
  utmCampaign?: string;
}

export interface LeadSignals {
  domain?: string;
  email?: string;
  company?: string;
  intent?: boolean;
}

const COMMON_TLDS = new Set([
  "de", "com", "net", "org", "io", "eu", "at", "ch", "info", "shop", "online",
  "biz", "co", "ai", "app", "dev", "gmbh", "ag", "tech", "store", "digital",
]);

const EMAIL_RE = /[a-z0-9._%+-]+@([a-z0-9.-]+\.[a-z]{2,24})/i;
const DOMAIN_RE =
  /\b((?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+([a-z]{2,24}))\b/gi;

/** Verlässliche Regex-Extraktion von E-Mail und Domain. */
export function regexSignals(text: string): LeadSignals {
  const out: LeadSignals = {};

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

/** Best-effort Fuzzy-Erkennung von Firmenname / Kaufinteresse via Mini-Model. */
async function classify(text: string): Promise<LeadSignals> {
  try {
    const { text: raw } = await generateText({
      model: openwebui(LEAD_MODEL),
      temperature: 0,
      maxTokens: 200,
      system:
        "Du extrahierst Lead-Signale aus einer einzelnen Chat-Nachricht eines " +
        "Website-Besuchers. Antworte AUSSCHLIESSLICH mit JSON, keine Erklärung. " +
        'Schema: {"company": string|null, "domain": string|null, "email": string|null, "intent": boolean}. ' +
        "company = genannter Firmenname (ohne Rechtsform), domain = genannte Domain, " +
        "email = genannte E-Mail, intent = true wenn echtes Kauf-/Kontaktinteresse erkennbar.",
      prompt: text,
    });
    const json = raw.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(json) as Record<string, unknown>;
    const out: LeadSignals = {};
    if (typeof parsed.company === "string" && parsed.company.trim())
      out.company = parsed.company.trim();
    if (typeof parsed.domain === "string" && parsed.domain.trim())
      out.domain = parsed.domain.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").split("/")[0];
    if (typeof parsed.email === "string" && parsed.email.includes("@"))
      out.email = parsed.email.trim().toLowerCase();
    if (typeof parsed.intent === "boolean") out.intent = parsed.intent;
    return out;
  } catch {
    return {};
  }
}

/** Erkennt Signale (Regex + Mini-Model). Regex hat Vorrang bei Domain/E-Mail. */
export async function detectSignals(text: string): Promise<LeadSignals> {
  const rx = regexSignals(text);
  const llm = await classify(text);
  return {
    domain: rx.domain ?? llm.domain,
    email: rx.email ?? llm.email,
    company: llm.company,
    intent: llm.intent,
  };
}

export interface Qualification {
  branche?: string;
  tools?: string[];
  pain?: string;
  volumen?: string;
  rolle?: string;
}

/** Zieht die Qualifizierung aus dem bisherigen Gesprächsverlauf (best-effort). */
async function extractQualification(transcript: string): Promise<Qualification> {
  try {
    const { text: raw } = await generateText({
      model: openwebui(LEAD_MODEL),
      temperature: 0,
      maxTokens: 300,
      system:
        "Du fasst aus einem Chat-Verlauf zwischen Website-Besucher und Assistent die " +
        "Lead-Qualifizierung zusammen. Antworte AUSSCHLIESSLICH mit JSON, keine Erklärung. " +
        'Schema: {"branche": string|null, "tools": string[]|null, "pain": string|null, "volumen": string|null, "rolle": string|null}. ' +
        "branche=Branche/Tätigkeit, tools=genannte Systeme/ERP/Software, pain=wo manuelle " +
        "Arbeit/Schmerz sitzt, volumen=Mengenangaben, rolle=Funktion der Person. " +
        "Nur was im Verlauf wirklich gesagt wurde, sonst null.",
      prompt: transcript,
    });
    const json = raw.replace(/```json|```/g, "").trim();
    const p = JSON.parse(json) as Record<string, unknown>;
    const q: Qualification = {};
    if (typeof p.branche === "string" && p.branche.trim()) q.branche = p.branche.trim();
    if (Array.isArray(p.tools)) {
      const tools = p.tools.filter(
        (t): t is string => typeof t === "string" && t.trim().length > 0,
      );
      if (tools.length) q.tools = tools;
    }
    if (typeof p.pain === "string" && p.pain.trim()) q.pain = p.pain.trim();
    if (typeof p.volumen === "string" && p.volumen.trim()) q.volumen = p.volumen.trim();
    if (typeof p.rolle === "string" && p.rolle.trim()) q.rolle = p.rolle.trim();
    return q;
  } catch {
    return {};
  }
}

/** Baut den HubSpot-Notiz-Text. Gibt null zurück, wenn nichts Brauchbares drin ist. */
function buildQualNote(q: Qualification): string | null {
  const rows: Array<[string, string | undefined]> = [
    ["Branche", q.branche],
    ["Tools/Systeme", q.tools?.join(", ")],
    ["Pain/Prozess", q.pain],
    ["Volumen", q.volumen],
    ["Rolle", q.rolle],
  ];
  const lines = rows
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `<strong>${k}:</strong> ${v}`);
  if (!lines.length) return null;
  return `<p><strong>Homepage-Chat — Qualifizierung</strong></p><p>${lines.join("<br>")}</p>`;
}

/**
 * Erkennt + feuert. `sessionId` macht die Meta-event_id pro Session/Stage
 * deterministisch → Meta dedupliziert, HubSpot ist ohnehin idempotent. `transcript`
 * ist der bisherige Gesprächsverlauf für die Qualifizierungs-Notiz.
 */
export async function detectAndFireLead(
  text: string,
  transcript: string,
  sessionId: string,
  meta: RequestMeta,
): Promise<LeadSignals> {
  const sig = await detectSignals(text);
  if (!sig.domain && !sig.email) return sig;

  const utm: Record<string, string> = { lead_source: LEAD_SOURCE };
  if (meta.utmSource) utm.utm_source = meta.utmSource;
  if (meta.utmCampaign) utm.utm_campaign = meta.utmCampaign;

  // Meta-Events laufen parallel und brauchen keine HubSpot-IDs.
  const metaTasks: Promise<unknown>[] = [];
  if (sig.domain) {
    metaTasks.push(
      sendMetaEvent({
        eventId: `${sessionId}:lead`,
        eventName: META_LEAD,
        contentName: sig.company ?? "homepage_chat",
        eventSourceUrl: meta.eventSourceUrl,
        fbp: meta.fbp,
        fbc: meta.fbc,
        ip: meta.ip,
        userAgent: meta.userAgent,
      }),
    );
  }
  if (sig.email) {
    metaTasks.push(
      sendMetaEvent({
        eventId: `${sessionId}:registration`,
        eventName: META_REGISTRATION,
        email: sig.email,
        contentName: sig.company ?? "homepage_chat",
        eventSourceUrl: meta.eventSourceUrl,
        fbp: meta.fbp,
        fbc: meta.fbc,
        ip: meta.ip,
        userAgent: meta.userAgent,
      }),
    );
  }

  // HubSpot: Company/Contact anlegen, IDs einsammeln, Qualifizierungs-Notiz anhängen.
  const hubspotTask = (async () => {
    if (!hubspotConfigured()) return;
    let companyId: string | null = null;
    let contactId: string | null = null;

    if (sig.domain) {
      const companyProps: Record<string, string> = { ...utm };
      if (sig.company) companyProps.name = sig.company;
      companyId = await ensureCompany(sig.domain, companyProps);
    }
    if (sig.email) {
      contactId = await ensureContact(sig.email, utm);
    }
    if (contactId && companyId) await associate(contactId, companyId);

    if (companyId || contactId) {
      const note = buildQualNote(await extractQualification(transcript));
      if (note) {
        if (companyId) await createNote(note, { object: "companies", id: companyId });
        else if (contactId) await createNote(note, { object: "contacts", id: contactId });
      }
    }
  })();

  await Promise.allSettled([...metaTasks, hubspotTask]);
  return sig;
}
