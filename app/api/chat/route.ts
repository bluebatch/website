import { NextRequest } from "next/server";
import { randomUUID } from "node:crypto";
import { streamText, convertToCoreMessages, type Message } from "ai";
import { checkBotId } from "botid/server";
import { openwebui, CHAT_MODEL } from "@/lib/openwebui";
import { detectAndFireLead, type RequestMeta } from "@/lib/server/lead-detect";

// node:crypto (Meta-Hashing) → nodejs runtime. Streaming bleibt möglich.
export const runtime = "nodejs";
export const maxDuration = 60;

const SID_COOKIE = "bb_chat_sid";

// Abuse-Caps. Faustregel ~4 Zeichen/Token → 8000 Zeichen ≈ 2000 Tokens.
// Gesprächslänge wird NICHT hart abgeschnitten; stattdessen windowen wir den
// Verlauf, damit die Kosten pro Request flach bleiben.
const MAX_MESSAGES = 60; // Backstop gegen Endlos-Sessions (~30 Turns)
const MAX_INPUT_CHARS = 8000; // ~2000 Tokens pro Nachricht ("keine Zeitung")
const MAX_PAYLOAD_CHARS = 80000; // DoS-/Payload-Guard für den gesamten Request
const HISTORY_WINDOW = 16; // nur die letzten N Nachrichten ans Modell
const MAX_OUTPUT_TOKENS = 600; // deckelt die Antwortkosten pro Antwort

const SYSTEM_PROMPT =
  "Du bist der Assistent von Bluebatch auf der Website. Antworte knapp, freundlich " +
  "und auf Deutsch, auf Augenhöhe. Hilf Besuchern aus Großhandel/Industrie bei Fragen " +
  "zu KI- und Automatisierungslösungen. Wenn jemand seine Firma oder Domain nennt, geh " +
  "natürlich darauf ein. Erfinde keine Fakten.";

/** Liest Meta-/Attribution-Signale serverseitig aus Cookies, Query und Headern. */
function readRequestMeta(req: NextRequest): RequestMeta {
  const url = new URL(req.url);
  const fbclid = url.searchParams.get("fbclid") ?? undefined;
  const cookieFbc = req.cookies.get("_fbc")?.value;
  const fbc =
    cookieFbc ?? (fbclid ? `fb.1.${Math.floor(Date.now() / 1000)}.${fbclid}` : undefined);

  return {
    ip:
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      undefined,
    userAgent: req.headers.get("user-agent") ?? undefined,
    fbp: req.cookies.get("_fbp")?.value,
    fbc,
    eventSourceUrl: req.headers.get("referer") ?? undefined,
    utmSource: url.searchParams.get("utm_source") ?? undefined,
    utmCampaign: url.searchParams.get("utm_campaign") ?? undefined,
  };
}

export async function POST(req: NextRequest) {
  // 1) Bot-Schutz (Vercel BotID) — blockt automatisierte Clients/Scripte.
  const verification = await checkBotId();
  if (verification.isBot) {
    return new Response("Forbidden", { status: 403 });
  }

  let body: { messages?: Message[] };
  try {
    body = (await req.json()) as { messages?: Message[] };
  } catch {
    return new Response("invalid JSON", { status: 400 });
  }
  const messages = body.messages ?? [];

  // 2) Harte Caps gegen Kosten-Burn ("keine Zeitung in den Chat").
  if (messages.length > MAX_MESSAGES) {
    return Response.json({ error: "too many messages" }, { status: 400 });
  }
  const totalChars = messages.reduce((n, m) => n + (m.content?.length ?? 0), 0);
  if (totalChars > MAX_PAYLOAD_CHARS) {
    return Response.json({ error: "payload too large" }, { status: 413 });
  }
  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  if (lastUser && (lastUser.content?.length ?? 0) > MAX_INPUT_CHARS) {
    return Response.json({ error: "message too long" }, { status: 413 });
  }

  const sid = req.cookies.get(SID_COOKIE)?.value ?? randomUUID();
  const meta = readRequestMeta(req);

  // Lead-Detection auf der letzten User-Nachricht — parallel, blockiert den
  // Stream nicht; onFinish hält die Function am Leben bis sie fertig ist.
  const detection: Promise<unknown> = lastUser?.content
    ? detectAndFireLead(lastUser.content, sid, meta).catch(() => null)
    : Promise.resolve(null);

  const result = streamText({
    model: openwebui(CHAT_MODEL),
    system: SYSTEM_PROMPT,
    maxTokens: MAX_OUTPUT_TOKENS,
    messages: convertToCoreMessages(messages.slice(-HISTORY_WINDOW)),
    onError: ({ error }) => {
      console.error("[/api/chat] streamText error:", error);
    },
    onFinish: async () => {
      await detection;
    },
  });

  const res = result.toDataStreamResponse({
    // In Dev die echte Ursache durchreichen, in Prod maskieren.
    getErrorMessage: (error) =>
      process.env.NODE_ENV === "production"
        ? "An error occurred."
        : error instanceof Error
          ? error.message
          : String(error),
  });
  if (!req.cookies.get(SID_COOKIE)) {
    res.headers.append(
      "Set-Cookie",
      `${SID_COOKIE}=${sid}; Path=/; Max-Age=86400; SameSite=Lax; HttpOnly`,
    );
  }
  return res;
}
