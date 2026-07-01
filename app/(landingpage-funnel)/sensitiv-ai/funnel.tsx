"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import ContactButton, { ContactChannel } from "@/components/buttons/contact-button";

type Outcome = "normal" | "qualified";

const QUESTIONS = [
  {
    id: "sensibel",
    icon: ShieldCheck,
    title: "Arbeiten Sie mit sensiblen Daten?",
    subtitle:
      "Gesundheits-, Mandanten-, Personal- oder andere besonders schützenswerte Daten.",
  },
  {
    id: "stgb203",
    icon: Lock,
    title: "Fallen diese Daten unter § 203 StGB?",
    subtitle:
      "Das Berufsgeheimnis, z. B. bei Ärzten, Anwälten, Steuerberatern oder Versicherungen.",
  },
  {
    id: "claude",
    icon: Sparkles,
    title: "Möchten Sie dafür Claude einsetzen?",
    subtitle: "Anthropic Claude als KI-Modell, statt generischer Tools.",
  },
];

export default function SensitivAiFunnel() {
  const [step, setStep] = useState(0);
  const [outcome, setOutcome] = useState<Outcome | null>(null);

  const answer = (yes: boolean) => {
    if (!yes) {
      setOutcome("normal");
      return;
    }
    if (step < QUESTIONS.length - 1) setStep(step + 1);
    else setOutcome("qualified");
  };

  const restart = () => {
    setStep(0);
    setOutcome(null);
  };

  if (outcome === "normal") return <NormalOutcome onRestart={restart} />;
  if (outcome === "qualified") return <QualifiedOutcome onRestart={restart} />;

  const q = QUESTIONS[step];
  const Icon = q.icon;

  return (
    <div className="mx-auto w-full max-w-xl">
      {/* Fortschritt */}
      <div className="mb-8 flex items-center justify-center gap-2">
        {QUESTIONS.map((item, i) => (
          <div
            key={item.id}
            className={`h-2 rounded-full transition-all ${
              i <= step ? "w-8 bg-primary-800" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">
        <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-800">
          <Icon className="h-7 w-7" />
        </span>
        <p className="mb-1 text-sm font-semibold text-primary-700">
          Frage {step + 1} von {QUESTIONS.length}
        </p>
        <h2 className="text-2xl font-bold text-gray-900">{q.title}</h2>
        <p className="mx-auto mt-2 max-w-md text-gray-500">{q.subtitle}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => answer(true)}
            className="flex-1 rounded-full bg-primary-800 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-700"
          >
            Ja
          </button>
          <button
            type="button"
            onClick={() => answer(false)}
            className="flex-1 rounded-full border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-800 transition-colors hover:border-primary-400 hover:text-primary-700"
          >
            Nein
          </button>
        </div>
      </div>
    </div>
  );
}

function NormalOutcome({ onRestart }: { onRestart: () => void }) {
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm sm:p-10">
      <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-green-600">
        <CheckCircle2 className="h-7 w-7" />
      </span>
      <h2 className="text-2xl font-bold text-gray-900">
        Dann reichen unsere Standard-Services.
      </h2>
      <p className="mx-auto mt-3 max-w-md text-gray-500">
        Wenn Ihre Daten nicht unter das besondere Berufsgeheimnis (§ 203 StGB) fallen,
        können Sie direkt unsere „normalen" AI-Services nutzen. Schnell, DSGVO-konform
        und ohne den zusätzlichen § 203-Aufwand.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/services"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-800 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-primary-700 sm:w-auto"
        >
          Zu unseren AI-Services
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
      <button
        type="button"
        onClick={onRestart}
        className="mx-auto mt-6 flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-gray-600"
      >
        <RotateCcw className="h-4 w-4" />
        Fragebogen neu starten
      </button>
    </div>
  );
}

function QualifiedOutcome({ onRestart }: { onRestart: () => void }) {
  const bullets = [
    "DSGVO-konform auf Ihrer bzw. dedizierter Infrastruktur",
    "§ 203-StGB-konforme Nutzung für Berufsgeheimnisträger",
    "Komplette Einrichtung durch uns, kein Bastel-Setup",
    "Ihre Daten bleiben bei Ihnen, kein Abfluss an Dritte",
  ];
  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-primary-200 bg-white p-8 text-center shadow-sm sm:p-10">
      <span className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary-800 text-white">
        <ShieldCheck className="h-7 w-7" />
      </span>
      <p className="mb-1 text-sm font-semibold text-cta-600">Genau Ihr Fall</p>
      <h2 className="text-2xl font-bold text-gray-900">
        Dafür haben wir ein Angebot.
      </h2>
      <p className="mx-auto mt-3 max-w-md text-gray-500">
        Wir richten Ihnen Claude <strong>DSGVO- und § 203-StGB-konform</strong> ein,
        inklusive Setup, sodass Sie auch mit Berufsgeheimnis-Daten sicher mit KI
        arbeiten können.
      </p>

      <ul className="mx-auto mt-6 max-w-md space-y-3 text-left">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
            <span className="text-gray-800">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <ContactButton
          channels={[ContactChannel.Meeting]}
          icon="calendar"
          className="w-full rounded-full sm:w-auto"
        >
          Gespräch vereinbaren
        </ContactButton>
        <ContactButton
          channels={[ContactChannel.Mail]}
          icon="mail"
          dark
          className="w-full rounded-full sm:w-auto"
        >
          Anfrage senden
        </ContactButton>
      </div>
      <button
        type="button"
        onClick={onRestart}
        className="mx-auto mt-6 flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-gray-600"
      >
        <RotateCcw className="h-4 w-4" />
        Fragebogen neu starten
      </button>
    </div>
  );
}
