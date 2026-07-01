"use client";

import { useEffect, useRef } from "react";
import { useChat } from "@ai-sdk/react";
import { BotIdClient } from "botid/client";
import { ArrowUp, Bot, Loader2 } from "lucide-react";
import ContactButton, { ContactChannel } from "@/components/buttons/contact-button";

const EXAMPLES = [
  "Was macht Bluebatch genau?",
  "Wie hilft KI im Großhandel?",
  "Welche Tools lassen sich anbinden?",
];

export default function ChatClient() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const empty = messages.length === 0;

  return (
    <>
      <BotIdClient protect={[{ path: "/api/chat", method: "POST" }]} />
      <div className="mx-auto flex h-[72vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-800 text-white">
          <Bot className="h-5 w-5" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-semibold text-gray-900">Bluebatch Assistent</p>
          <p className="text-xs text-gray-400">KI für Großhandel &amp; Industrie</p>
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 space-y-5 overflow-y-auto px-5 py-6">
        {empty ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
              <Bot className="h-6 w-6" />
            </span>
            <p className="mb-1 text-lg font-semibold text-gray-900">Wie können wir helfen?</p>
            <p className="mb-6 max-w-sm text-sm text-gray-500">
              Frag uns alles rund um KI &amp; Automatisierung — oder erzähl uns von deiner Firma.
            </p>
            <div className="flex w-full max-w-md flex-col gap-2">
              {EXAMPLES.map((ex) => (
                <button
                  key={ex}
                  type="button"
                  onClick={() => {
                    handleInputChange({
                      target: { value: ex },
                    } as React.ChangeEvent<HTMLInputElement>);
                    requestAnimationFrame(() => formRef.current?.requestSubmit());
                  }}
                  className="rounded-xl border border-gray-200 px-4 py-2.5 text-left text-sm text-gray-700 transition-colors hover:border-primary-300 hover:bg-primary-50"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((m) => (
            <div
              key={m.id}
              className={m.role === "user" ? "flex justify-end" : "flex justify-start"}
            >
              <div
                className={
                  m.role === "user"
                    ? "max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-sm bg-primary-800 px-4 py-2.5 text-sm text-white"
                    : "max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-2.5 text-sm text-gray-800"
                }
              >
                {m.content}
              </div>
            </div>
          ))
        )}

        {isLoading && messages[messages.length - 1]?.role === "user" && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm bg-gray-100 px-4 py-3 text-gray-400">
              <Loader2 className="h-4 w-4 animate-spin" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="border-t border-gray-100 p-3"
      >
        <div className="flex items-end gap-2 rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 focus-within:border-primary-400">
          <textarea
            value={input}
            onChange={handleInputChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                formRef.current?.requestSubmit();
              }
            }}
            rows={1}
            placeholder="Nachricht schreiben…"
            className="max-h-32 flex-1 resize-none bg-transparent py-1.5 text-sm text-gray-900 outline-none placeholder:text-gray-400"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-800 text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Senden"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-2 text-center text-[11px] text-gray-400">
          KI kann Fehler machen, keine sensiblen Daten teilen. Alle Angaben und
          Angebote sind unverbindlich.
        </p>
      </form>
      </div>

      {/* CTA unter dem Chat: native ContactButton (orange, öffnet Kanal-Auswahl). */}
      <div className="mx-auto mt-5 flex w-full max-w-2xl justify-center">
        <ContactButton
          channels={[ContactChannel.Meeting, ContactChannel.Mail]}
          icon="chat"
          className="rounded-full"
        >
          Kontakt aufnehmen
        </ContactButton>
      </div>
    </>
  );
}
