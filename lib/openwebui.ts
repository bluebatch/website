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

export const openwebui = createOpenAICompatible({
  name: "openwebui",
  baseURL: `${BASE}/api`,
  apiKey: process.env.OPENWEBUI_API_KEY ?? "",
});

export const CHAT_MODEL = process.env.OPENWEBUI_CHAT_MODEL ?? "gpt-4o-mini";
export const LEAD_MODEL = process.env.OPENWEBUI_LEAD_MODEL ?? "gpt-4o-mini";
