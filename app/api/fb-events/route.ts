import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";

export const runtime = "nodejs";

const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const TEST_EVENT_CODE = process.env.META_CAPI_TEST_EVENT_CODE;
const GRAPH_VERSION = "v19.0";

function sha256(input: string): string {
  return createHash("sha256").update(input.trim().toLowerCase()).digest("hex");
}

interface IncomingPayload {
  eventId?: string;
  eventName?: string;
  contentName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  eventSourceUrl?: string;
  fbc?: string;
  fbp?: string;
}

export async function POST(req: NextRequest) {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return NextResponse.json(
      { error: "META_PIXEL_ID or META_CAPI_ACCESS_TOKEN not configured" },
      { status: 500 },
    );
  }

  let body: IncomingPayload;
  try {
    body = (await req.json()) as IncomingPayload;
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  const {
    eventId,
    eventName,
    contentName,
    email,
    firstName,
    lastName,
    eventSourceUrl,
    fbc,
    fbp,
  } = body;

  if (!eventId || !eventName) {
    return NextResponse.json(
      { error: "missing eventId or eventName" },
      { status: 400 },
    );
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    undefined;
  const userAgent = req.headers.get("user-agent") ?? undefined;

  const userData: Record<string, unknown> = {
    client_user_agent: userAgent,
    client_ip_address: ip,
  };
  if (email) userData.em = [sha256(email)];
  if (firstName) userData.fn = [sha256(firstName)];
  if (lastName) userData.ln = [sha256(lastName)];
  if (fbc) userData.fbc = fbc;
  if (fbp) userData.fbp = fbp;

  const customData: Record<string, unknown> = {};
  if (contentName) customData.content_name = contentName;

  const event = {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: eventId,
    action_source: "website",
    event_source_url: eventSourceUrl,
    user_data: userData,
    custom_data: customData,
  };

  const payload: Record<string, unknown> = { data: [event] };
  if (TEST_EVENT_CODE) payload.test_event_code = TEST_EVENT_CODE;

  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${PIXEL_ID}/events?access_token=${encodeURIComponent(
    ACCESS_TOKEN,
  )}`;

  const fbRes = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const fbJson = await fbRes.json().catch(() => ({}));

  if (!fbRes.ok) {
    return NextResponse.json(
      { error: "facebook api error", details: fbJson },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, eventId, fb: fbJson });
}
