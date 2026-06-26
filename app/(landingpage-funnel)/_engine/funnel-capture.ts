// Client-Capture für die Landingpage-Funnels. Feuert das Meta-Lead-Event und
// schreibt die komplette Game-Submission (Antworten + Termin + Mail) nach
// HubSpot. Fehler dürfen den Funnel nie blockieren.

import { tracking, MetaEvent } from "@/lib/tracking";

export interface Utm {
  utm_source?: string;
  utm_campaign?: string;
}

export interface FunnelSubmission {
  funnel: string;
  funnelTitle: string;
  email: string;
  selectedDate?: string;
  note?: string;
  answers: Record<string, string | string[]>;
}

export function captureFunnel(sub: FunnelSubmission, utm: Utm = {}): void {
  const email = sub.email.trim().toLowerCase();
  if (!email) return;

  // Meta: backend-only (CAPI), ohne Consent — E-Mail wird serverseitig gehasht.
  tracking.metaCapi(MetaEvent.CompleteRegistration, {
    contentName: sub.funnelTitle,
    email,
  });

  void fetch("/api/funnel", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...sub, email, ...utm }),
  }).catch(() => {
    // HubSpot-/Netzwerkfehler schlucken — Funnel läuft weiter.
  });
}
