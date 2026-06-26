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

/**
 * Erkennt + feuert. `sessionId` macht die Meta-event_id pro Session/Stage
 * deterministisch → Meta dedupliziert, HubSpot ist ohnehin idempotent. Daher
 * ist mehrfaches Feuern über die Session harmlos.
 */
export async function detectAndFireLead(
  text: string,
  sessionId: string,
  meta: RequestMeta,
): Promise<LeadSignals> {
  const sig = await detectSignals(text);
  if (!sig.domain && !sig.email) return sig;

  const utm: Record<string, string> = { lead_source: LEAD_SOURCE };
  if (meta.utmSource) utm.utm_source = meta.utmSource;
  if (meta.utmCampaign) utm.utm_campaign = meta.utmCampaign;

  const tasks: Promise<unknown>[] = [];

  if (sig.domain) {
    tasks.push(
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
    if (hubspotConfigured()) {
      const companyProps: Record<string, string> = { ...utm };
      if (sig.company) companyProps.name = sig.company;
      tasks.push(ensureCompany(sig.domain, companyProps));
    }
  }

  if (sig.email) {
    tasks.push(
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
    if (hubspotConfigured()) {
      tasks.push(
        (async () => {
          const contactId = await ensureContact(sig.email!, utm);
          if (contactId && sig.domain) {
            const companyId = await ensureCompany(sig.domain, utm);
            if (companyId) await associate(contactId, companyId);
          }
        })(),
      );
    }
  }

  await Promise.allSettled(tasks);
  return sig;
}
