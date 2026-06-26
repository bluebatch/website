import { NextRequest, NextResponse } from "next/server";
import { sendMetaEvent } from "@/lib/server/meta-capi";

export const runtime = "nodejs";

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
  let body: IncomingPayload;
  try {
    body = (await req.json()) as IncomingPayload;
  } catch {
    return NextResponse.json({ error: "invalid JSON" }, { status: 400 });
  }

  if (!body.eventId || !body.eventName) {
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

  const result = await sendMetaEvent({
    eventId: body.eventId,
    eventName: body.eventName,
    contentName: body.contentName,
    email: body.email,
    firstName: body.firstName,
    lastName: body.lastName,
    eventSourceUrl: body.eventSourceUrl,
    fbc: body.fbc,
    fbp: body.fbp,
    ip,
    userAgent,
  });

  if (result.skipped === "not_configured") {
    return NextResponse.json(
      { error: "META_PIXEL_ID or META_CAPI_ACCESS_TOKEN not configured" },
      { status: 500 },
    );
  }
  if (!result.ok) {
    return NextResponse.json(
      { error: "facebook api error", details: result.body },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, eventId: body.eventId, fb: result.body });
}
