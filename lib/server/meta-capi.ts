// Server-seitiges Meta-Conversions-API. Single source of truth — genutzt von
// /api/fb-events (Client-getriggert) UND vom Chat-Proxy (vollständig serverseitig,
// hidden). PII wird hier SHA256-gehasht. Bewusst consent-unabhängig (CAPI).

import { createHash } from "node:crypto";

const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const TEST_EVENT_CODE = process.env.META_CAPI_TEST_EVENT_CODE;
const GRAPH_VERSION = "v19.0";

function sha256(input: string): string {
  return createHash("sha256").update(input.trim().toLowerCase()).digest("hex");
}

export interface MetaEventInput {
  eventId: string;
  eventName: string;
  contentName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  eventSourceUrl?: string;
  fbc?: string;
  fbp?: string;
  ip?: string;
  userAgent?: string;
}

export interface MetaEventResult {
  ok: boolean;
  status: number;
  body: unknown;
  skipped?: "not_configured";
}

/** Feuert genau ein Meta-CAPI-Event. Wirft nie — Fehler kommen als {ok:false} zurück. */
export async function sendMetaEvent(input: MetaEventInput): Promise<MetaEventResult> {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return { ok: false, status: 0, body: null, skipped: "not_configured" };
  }

  const userData: Record<string, unknown> = {
    client_user_agent: input.userAgent,
    client_ip_address: input.ip,
  };
  if (input.email) userData.em = [sha256(input.email)];
  if (input.firstName) userData.fn = [sha256(input.firstName)];
  if (input.lastName) userData.ln = [sha256(input.lastName)];
  if (input.fbc) userData.fbc = input.fbc;
  if (input.fbp) userData.fbp = input.fbp;

  const customData: Record<string, unknown> = {};
  if (input.contentName) customData.content_name = input.contentName;

  const event = {
    event_name: input.eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: input.eventId,
    action_source: "website",
    event_source_url: input.eventSourceUrl,
    user_data: userData,
    custom_data: customData,
  };

  const payload: Record<string, unknown> = { data: [event] };
  if (TEST_EVENT_CODE) payload.test_event_code = TEST_EVENT_CODE;

  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(
    ACCESS_TOKEN,
  )}`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const body = await res.json().catch(() => ({}));
    return { ok: res.ok, status: res.status, body };
  } catch (err) {
    return { ok: false, status: 0, body: String(err) };
  }
}
