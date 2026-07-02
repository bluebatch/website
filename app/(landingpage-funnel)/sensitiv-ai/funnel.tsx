"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ShieldCheck,
  Lock,
  Sparkles,
  ArrowRight,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import Button from "@/components/ui/button";
import ContactButton, { ContactChannel } from "@/components/buttons/contact-button";

type Outcome = "normal" | "qualified";

const QUESTIONS = [
  {
    id: "sensibel",
    icon: ShieldCheck,
    title: "Arbeiten Sie mit sensiblen Daten?",
    subtitle:
      "Gesundheits-, Mandanten-, Personal- oder andere besonders schützenswerte Daten.",
    context:
      "Sensible Daten sind Informationen, deren Offenlegung Personen schaden könnte, etwa Patienten- und Personalakten, Mandantenunterlagen, Finanz- oder Vertragsdaten. Wer regelmäßig damit arbeitet, muss bei KI-Tools genau wissen, wohin die Daten fließen und wer darauf Zugriff hat.",
  },
  {
    id: "stgb203",
    icon: Lock,
    title: "Fallen diese Daten unter § 203 StGB?",
    subtitle:
      "Das Berufsgeheimnis, z. B. bei Ärzten, Anwälten, Steuerberatern oder Versicherungen.",
    context:
      "§ 203 StGB stellt die Verletzung von Privatgeheimnissen unter Strafe. Betroffen sind u. a. Ärzte, Psychotherapeuten, Anwälte, Steuerberater, Wirtschaftsprüfer und Versicherungen. Gelangen solche Daten an unbefugte Dritte oder an Cloud-Dienste ohne passende Vereinbarung, kann das strafbar sein. KI braucht hier ein besonders abgesichertes Setup.",
  },
  {
    id: "claude",
    icon: Sparkles,
    title: "Möchten Sie dafür Claude einsetzen?",
    subtitle: "Anthropic Claude als KI-Modell, statt generischer Tools.",
    context:
      "Claude von Anthropic gehört zu den leistungsstärksten und zugleich sichersten KI-Modellen, besonders stark bei Dokumenten, Analyse und langen Texten. Wir setzen es in einer verwalteten, privaten Umgebung ein, sodass Ihre Daten nicht zum Training verwendet werden und in einem DSGVO- und § 203-konformen Rahmen bleiben.",
  },
];

export default function SensitivAiFunnel() {
  const searchParams = useSearchParams();

  const [step, setStep] = useState<number>(() => {
    const q = parseInt(searchParams.get("q") ?? "1", 10);
    return Number.isFinite(q)
      ? Math.min(Math.max(q - 1, 0), QUESTIONS.length - 1)
      : 0;
  });
  const [outcome, setOutcome] = useState<Outcome | null>(() => {
    const r = searchParams.get("r");
    return r === "normal" ? "normal" : r === "angebot" ? "qualified" : null;
  });

  // State reload-fest in die URL spiegeln. Wir bauen von der aktuellen Query aus,
  // damit die Tracking-Params (utm_*, fbclid, gclid, …) unangetastet bleiben.
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
        <p className="mx-auto mt-4 max-w-md rounded-xl bg-gray-50 p-4 text-left text-sm leading-relaxed text-gray-500">
          {q.context}
        </p>

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
        <Button href="/services">
          Zu unseren AI-Services
          <ArrowRight className="h-5 w-5" />
        </Button>
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

      <div className="mt-8 flex justify-center">
        <ContactButton
          channels={[ContactChannel.Meeting, ContactChannel.Mail]}
          icon="chat"
          className="w-full rounded-full sm:w-auto"
        >
          Kontakt aufnehmen
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
