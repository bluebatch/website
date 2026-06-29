// OpenAI-kompatibler Provider für unsere selbstgehostete Open-WebUI-Instanz.
// Open WebUI exposed /api/chat/completions + /api/models (OpenAI-Format), daher
// baseURL = <host>/api. Key ist ein Open-WebUI-API-Key (Settings → Account).
//
// Benötigte Env-Vars (lokal in .env, auf Vercel als Project Env):
//   OPENWEBUI_API_BASE_URL  z.B. https://sales-funnel.bluebatch.io
//   OPENWEBUI_API_KEY       sk-...  (eigener Key, NICHT im Client verwenden)
//   OPENWEBUI_CHAT_MODEL    Antwort-Model, z.B. "homepage-assistant" (RAG) oder "gpt-4o-mini"
//   OPENWEBUI_LEAD_MODEL    Lead-Detector-Model, z.B. "gpt-4o-mini"

import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

const BASE = process.env.OPENWEBUI_API_BASE_URL ?? "https://sales-funnel.bluebatch.io";

// Open WebUI sendet bei RAG-Modellen zusätzliche SSE-Chunks wie {"sources":[…]}
// (Citations), die kein OpenAI-`choices`/`error` enthalten. Der strikte
// openai-compatible-Parser der AI SDK wirft darauf einen TypeValidationError.
// Wir filtern solche Fremd-Chunks aus dem Stream, bevor die SDK sie parst.
function keepSseEvent(eventBlock: string): boolean {
  const dataLine = eventBlock.split("\n").find((l) => l.startsWith("data:"));
  if (!dataLine) return true; // Kommentare/Leerzeilen behalten
  const payload = dataLine.slice(5).trim();
  if (payload === "[DONE]") return true;
  try {
    const json = JSON.parse(payload);
    return "choices" in json || "error" in json; // nur valide OpenAI-Chunks
  } catch {
    return true; // unparsebares lieber durchlassen als den Stream brechen
  }
}

const filteredFetch: typeof fetch = async (input, init) => {
  const res = await fetch(input, init);
  const ct = res.headers.get("content-type") ?? "";
  if (!res.body || !ct.includes("text/event-stream")) return res;

  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let buffer = "";

  const transform = new TransformStream<Uint8Array, Uint8Array>({
    transform(chunk, controller) {
      buffer += decoder.decode(chunk, { stream: true });
      const events = buffer.split("\n\n");
      buffer = events.pop() ?? "";
      for (const ev of events) {
        if (keepSseEvent(ev)) controller.enqueue(encoder.encode(ev + "\n\n"));
      }
    },
    flush(controller) {
      if (buffer) controller.enqueue(encoder.encode(buffer));
    },
  });

  return new Response(res.body.pipeThrough(transform), {
    headers: res.headers,
    status: res.status,
    statusText: res.statusText,
  });
};

export const openwebui = createOpenAICompatible({
  name: "openwebui",
  baseURL: `${BASE}/api`,
  apiKey: process.env.OPENWEBUI_API_KEY ?? "",
  fetch: filteredFetch,
});

export const CHAT_MODEL = process.env.OPENWEBUI_CHAT_MODEL ?? "gpt-4o-mini";
export const LEAD_MODEL = process.env.OPENWEBUI_LEAD_MODEL ?? "gpt-4o-mini";
