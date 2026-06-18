// ─────────────────────────────────────────────────────────────────────────────
// Central tracking module — the single source of truth for analytics events.
//
// Every event the site fires is registered here as an enum, and every call to
// GA4 / Meta goes through the `tracking` singleton. Components never touch
// `window.gtag` / `window.fbq` directly — they call `tracking.ga4(...)` and/or
// `tracking.metaCapi(...)`. All window/consent/availability guards live in one place.
// ─────────────────────────────────────────────────────────────────────────────

import { ContactChannel } from "@/components/contact/contact-channel";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// ── Event registry ───────────────────────────────────────────────────────────

/**
 * GA4 event names. snake_case, ≤40 chars. Custom params (channel, opened, …)
 * must be registered as Custom Definitions in the GA4 admin to appear in reports.
 */
export enum Ga4Event {
  PageView = "page_view",
  CtaClick = "cta_click",
  CtaChannelSelect = "cta_channel_select",
  ContactFormSubmitted = "contact_form_submitted",
  MeetingBooked = "meeting_booked",
}

/** Meta (Facebook) standard event names. Sent to Pixel + CAPI together. */
export enum MetaEvent {
  /** Domain im Onboarding-Wizard hinterlegt — Top-of-Funnel, noch nicht kontaktierbar. */
  Lead = "Lead",
  /** Mail im Onboarding-Wizard hinterlegt — stärkeres Signal, kontaktierbar. */
  CompleteRegistration = "CompleteRegistration",
}

// ── Consent ──────────────────────────────────────────────────────────────────

const CONSENT_KEY = "cookie_consent";

export interface ConsentPreferences {
  essential?: boolean;
  statistics?: boolean;
  marketing?: boolean;
  externalMedia?: boolean;
}

export function getConsent(): ConsentPreferences | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    return raw ? (JSON.parse(raw) as ConsentPreferences) : null;
  } catch {
    return null;
  }
}

export function hasMarketingConsent(): boolean {
  return Boolean(getConsent()?.marketing);
}

// ── Tracking ─────────────────────────────────────────────────────────────────

type Ga4Params = Record<string, string | number | boolean | undefined>;

interface MetaPayload {
  contentName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}

class Tracking {
  /**
   * Fire a GA4 event. We always call gtag and let GA4 Consent Mode (configured
   * in cookie-consent.tsx) decide whether it is actually sent — so statistics
   * consent is enforced downstream, not here.
   */
  ga4(event: Ga4Event, params: Ga4Params = {}): void {
    if (typeof window === "undefined") return;
    if (typeof window.gtag !== "function") return;
    window.gtag("event", event, params);
  }

  /**
   * Fire a Meta event **server-side only** (Conversions API) — kein Browser-
   * Pixel, und bewusst **unabhängig vom Cookie-Consent**. Der eigentliche Call
   * an Meta passiert in /api/fb-events auf unserem Backend; der Client triggert
   * ihn nur. PII (E-Mail) wird dort serverseitig SHA256-gehasht.
   *
   * Bewusste Produktentscheidung: Diese Events laufen ohne Marketing-Consent.
   * Rechtliche Verantwortung liegt beim Betreiber.
   */
  metaCapi(event: MetaEvent, payload: MetaPayload = {}): void {
    if (typeof window === "undefined") return;

    void fetch("/api/fb-events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId: this.newEventId(),
        eventName: event,
        contentName: payload.contentName,
        email: payload.email,
        firstName: payload.firstName,
        lastName: payload.lastName,
        eventSourceUrl: window.location.href,
        fbc: this.readCookie("_fbc"),
        fbp: this.readCookie("_fbp"),
      }),
    }).catch(() => {
      // swallow — we don't surface ad-tracking errors to the user
    });
  }

  private newEventId(): string {
    return typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }

  private readCookie(name: string): string | undefined {
    if (typeof document === "undefined") return undefined;
    const match = document.cookie.match(
      new RegExp("(?:^|;\\s*)" + name + "=([^;]+)"),
    );
    return match?.[1];
  }
}

export const tracking = new Tracking();

// Re-export so call sites can grab everything from one module.
export { ContactChannel };
