// Lead-Capture für den AI-Onboarding-Wizard. Eine Stelle, die pro Funnel-Schritt
// das Meta-Event UND den HubSpot-Write auslöst — damit in der Komponente nur
// `captureDomain()` / `captureEmail()` steht und nicht verstreute Tracking-Logik.
//
// Aufteilung der Senken:
//   Domain hinterlegt → Meta `Lead` (CAPI)            + HubSpot Company
//   Mail   hinterlegt → Meta `CompleteRegistration` (CAPI) + HubSpot Contact (+ Company + Note)
//
// Meta läuft bewusst **backend-only (CAPI) und ohne Consent** (siehe tracking.metaCapi).

import { tracking, MetaEvent } from "@/lib/tracking";

const FREEMAIL_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "gmx.de",
  "gmx.net",
  "web.de",
  "t-online.de",
  "yahoo.com",
  "yahoo.de",
  "hotmail.com",
  "hotmail.de",
  "outlook.com",
  "outlook.de",
  "icloud.com",
  "me.com",
  "aol.com",
  "freenet.de",
  "mail.de",
  "proton.me",
  "protonmail.com",
]);

/** Die Wizard-Eingaben (ohne Domain/Mail), landen als Note am Contact. */
export interface OnboardingSettings {
  erp: string;
  crm: string;
  buchhaltung: string;
  logistik: string;
  hasApi: string;
  aiExperience: string;
}

/** Attribution aus der Landing-URL, wird auf Company/Contact gesetzt. */
export interface Utm {
  utm_source?: string;
  utm_campaign?: string;
}

/** Schält Protokoll, www, Pfad und Query ab → reine Domain in Kleinschreibung. */
export function normalizeDomain(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .split(/[/?#]/)[0]
    .trim();
}

function isFreemail(domain: string): boolean {
  return FREEMAIL_DOMAINS.has(domain);
}

function postHubspot(body: Record<string, unknown>): void {
  void fetch("/api/hubspot/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).catch(() => {
    // HubSpot-Fehler dürfen den Wizard nie blockieren.
  });
}

/** Schritt 1: Domain hinterlegt. */
export function captureDomain(rawDomain: string, utm: Utm = {}): void {
  const domain = normalizeDomain(rawDomain);
  if (!domain.includes(".")) return; // offensichtlicher Müll

  // Meta: immer (backend-only, kein Consent).
  tracking.metaCapi(MetaEvent.Lead, { contentName: "Onboarding Domain" });

  // HubSpot Company: kein Freemail als Firma anlegen.
  if (!isFreemail(domain)) postHubspot({ stage: "domain", domain, ...utm });
}

/** Schritt 5: Mail hinterlegt (stärkeres Signal, kontaktierbar). */
export function captureEmail(
  email: string,
  rawDomain: string,
  settings: OnboardingSettings,
  utm: Utm = {},
): void {
  const cleanEmail = email.trim().toLowerCase();
  if (!cleanEmail) return;
  const domain = normalizeDomain(rawDomain);

  // Meta: immer (backend-only, kein Consent). E-Mail wird serverseitig gehasht.
  tracking.metaCapi(MetaEvent.CompleteRegistration, {
    contentName: "Onboarding Email",
    email: cleanEmail,
  });

  // HubSpot Contact + Note mit den Settings (für den manuellen Report).
  postHubspot({
    stage: "email",
    email: cleanEmail,
    domain: domain.includes(".") && !isFreemail(domain) ? domain : undefined,
    settings,
    ...utm,
  });
}
