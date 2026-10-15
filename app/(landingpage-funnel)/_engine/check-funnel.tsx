"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, RotateCcw, ShieldCheck } from "lucide-react";
import ContactButton from "@/components/buttons/contact-button";
import ContactForm from "@/components/contact/contact-form";

// Passungs-Check mit Ja/Nein-Fragen (Standard: 3) für die Private-Claude-
// Landingpages. Jedes „Nein" führt zum ehrlichen Ausstieg, alle „Ja" zum
// Angebot mit Kontaktformular. Zustand steht reload-fest in der URL (?q= / ?r=),
// Tracking-Parameter bleiben unangetastet.
//
// Pro Seite: funnel-config.ts (CheckFunnelConfig) + funnel.tsx ("use client").

type Icon = React.ComponentType<{ className?: string }>;

export interface CheckQuestion {
  id: string;
  icon: Icon;
  title: string;
  subtitle: string;
  /** Kurzer Hintergrund unter den Antwort-Buttons. */
  context?: string;
}

export interface CheckFunnelConfig {
  /** Quelle des Leads (Meta content_name, GA4 event_label). */
  contentName: string;
  questions: CheckQuestion[];
  qualified: {
    title: string;
    body: string;
    bullets: string[];
    /** z. B. "5.000 € Startpaket, danach nach Verbrauch" */
    priceNote?: string;
  };
  notQualified: {
    title: string;
    body: string;
    cta: string;
  };
}

type Outcome = "normal" | "qualified";

export default function CheckFunnel({ config }: { config: CheckFunnelConfig }) {
  const { questions } = config;
  const searchParams = useSearchParams();

  const [step, setStep] = useState<number>(() => {
    const q = parseInt(searchParams.get("q") ?? "1", 10);
    return Number.isFinite(q)
      ? Math.min(Math.max(q - 1, 0), questions.length - 1)
      : 0;
  });
  const [outcome, setOutcome] = useState<Outcome | null>(() => {
    const r = searchParams.get("r");
    return r === "normal" ? "normal" : r === "angebot" ? "qualified" : null;
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (outcome) {
      params.set("r", outcome === "qualified" ? "angebot" : "normal");
      params.delete("q");
    } else {
      params.set("q", String(step + 1));
      params.delete("r");
    }
    const qs = params.toString();
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${qs ? `?${qs}` : ""}`,
    );
  }, [step, outcome]);

  // Auf dem Handy nach jeder Antwort an den Kasten-Anfang scrollen, sonst
  // steht man mitten im nächsten Schritt.
  const boxRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    boxRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step, outcome]);

  const answer = (yes: boolean) => {
    if (!yes) {
      setOutcome("normal");
      return;
    }
    if (step < questions.length - 1) setStep(step + 1);
    else setOutcome("qualified");
  };

  const restart = () => {
    setStep(0);
    setOutcome(null);
  };

  return (
    <div ref={boxRef} className="mx-auto w-full max-w-xl scroll-mt-24">
      {outcome === "normal" ? (
        <NotQualified config={config} onRestart={restart} />
      ) : outcome === "qualified" ? (
        <Qualified config={config} onRestart={restart} />
      ) : (
        <Question
          question={questions[step]}
          step={step}
          total={questions.length}
          onAnswer={answer}
        />
      )}
    </div>
  );
}

function Question({
  question,
  step,
  total,
  onAnswer,
}: {
  question: CheckQuestion;
  step: number;
  total: number;
  onAnswer: (yes: boolean) => void;
}) {
  const Icon = question.icon;
  return (
    <>
      <div className="mb-6 flex items-center justify-center gap-2">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i <= step ? "w-8 bg-primary-800" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-10">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
          <Icon className="h-6 w-6" />
        </span>
        <p className="mb-1 text-sm font-semibold text-primary-700">
          Frage {step + 1} von {total}
        </p>
        <h2 className="text-balance text-2xl font-bold text-gray-900">
          {question.title}
        </h2>
        <p className="mx-auto mt-2 max-w-md text-gray-500">
          {question.subtitle}
        </p>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={() => onAnswer(true)}
            className="flex-1 rounded-full bg-primary-800 px-6 py-4 font-semibold text-white transition-colors hover:bg-primary-700"
          >
            Ja
          </button>
          <button
            type="button"
            onClick={() => onAnswer(false)}
            className="flex-1 rounded-full border border-gray-300 bg-white px-6 py-4 font-semibold text-gray-800 transition-colors hover:border-primary-400 hover:text-primary-700"
          >
            Nein
          </button>
        </div>

        {question.context && (
          <p className="mx-auto mt-6 max-w-md rounded-xl bg-gray-50 p-4 text-left text-sm leading-relaxed text-gray-500">
            {question.context}
          </p>
        )}
      </div>
    </>
  );
}

function RestartButton({ onRestart }: { onRestart: () => void }) {
  return (
    <button
      type="button"
      onClick={onRestart}
      className="mx-auto mt-6 flex items-center gap-1.5 py-2 text-sm text-gray-400 transition-colors hover:text-gray-600"
    >
      <RotateCcw className="h-4 w-4" />
      Fragen neu starten
    </button>
  );
}

function NotQualified({
  config,
  onRestart,
}: {
  config: CheckFunnelConfig;
  onRestart: () => void;
}) {
  const { title, body, cta } = config.notQualified;
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm sm:p-10">
      <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
        <CheckCircle2 className="h-6 w-6" />
      </span>
      <h2 className="text-balance text-2xl font-bold text-gray-900">{title}</h2>
      <p className="mx-auto mt-3 max-w-md text-gray-500">{body}</p>
      <div className="mt-8 flex justify-center">
        {/* Sackgassen-Prinzip: kein Ausstieg aus dem Funnel, Kontakt statt Link */}
        <ContactButton icon="chat">{cta}</ContactButton>
      </div>
      <RestartButton onRestart={onRestart} />
    </div>
  );
}

function Qualified({
  config,
  onRestart,
}: {
  config: CheckFunnelConfig;
  onRestart: () => void;
}) {
  const { title, body, bullets, priceNote } = config.qualified;
  return (
    <div className="rounded-2xl border border-primary-200 bg-white p-6 shadow-sm sm:p-10">
      <div className="text-center">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-800 text-white">
          <ShieldCheck className="h-6 w-6" />
        </span>
        <p className="mb-1 text-sm font-semibold text-cta-600">
          Passt zu Ihnen
        </p>
        <h2 className="text-balance text-2xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-gray-500">{body}</p>
      </div>

      <ul className="mx-auto mt-6 max-w-md space-y-3">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
            <span className="text-gray-800">{b}</span>
          </li>
        ))}
      </ul>

      {priceNote && (
        <p className="mx-auto mt-6 max-w-md rounded-xl bg-primary-50 px-4 py-3 text-center text-sm font-semibold text-primary-800">
          {priceNote}
        </p>
      )}

      <div className="mt-8">
        <ContactForm contentName={config.contentName} />
      </div>
      <RestartButton onRestart={onRestart} />
    </div>
  );
}
