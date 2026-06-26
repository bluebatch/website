"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ContactButton from "@/components/buttons/contact-button";
import { captureDomain } from "@/lib/onboarding-capture";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  Database,
  Sparkles,
  Plug,
  Brain,
  Loader2,
  FileText,
  Download,
  ExternalLink,
  X,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Konfiguration                                                              */
/* -------------------------------------------------------------------------- */

const PROCESSING_DURATION_MS = 15_000;
const TOTAL_STEPS = 5;

const ERP_OPTIONS = [
  "SAP",
  "Microsoft Dynamics",
  "proALPHA",
  "Sage",
  "Infor",
  "Kein ERP",
  "Anders",
];
const CRM_OPTIONS = [
  "Salesforce",
  "HubSpot",
  "MS Dynamics",
  "Pipedrive",
  "Kein CRM",
  "Anders",
];
const ACCOUNTING_OPTIONS = ["DATEV", "Lexware", "SAP FI", "Sage", "Anders"];
const LOGISTIK_OPTIONS = [
  "Eigenes WMS",
  "ERP-Modul",
  "3PL-Dienstleister",
  "Kein System",
  "Anders",
];

const AI_EXPERIENCE = [
  {
    key: "keine",
    title: "Noch keine",
    desc: "Wir haben bisher kaum mit KI gearbeitet.",
  },
  {
    key: "experimente",
    title: "Erste Experimente",
    desc: "Einzelne Leute probieren ChatGPT & Co. aus.",
  },
  {
    key: "alltag",
    title: "Teil des Alltags",
    desc: "KI-Chats gehören bei vielen schon zum Arbeitstag.",
  },
  {
    key: "workflows",
    title: "Erste Workflows",
    desc: "Wir haben bereits Prozesse mit KI automatisiert.",
  },
] as const;

type AiExperienceKey = (typeof AI_EXPERIENCE)[number]["key"];
type ApiAnswer = "ja" | "nein" | "unklar" | "";

interface FormData {
  domain: string;
  erp: string;
  crm: string;
  buchhaltung: string;
  logistik: string;
  hasApi: ApiAnswer;
  aiExperience: AiExperienceKey | "";
  email: string;
}

const EMPTY_FORM: FormData = {
  domain: "",
  erp: "",
  crm: "",
  buchhaltung: "",
  logistik: "",
  hasApi: "",
  aiExperience: "",
  email: "",
};

/* -------------------------------------------------------------------------- */
/*  Haupt-Komponente                                                           */
/* -------------------------------------------------------------------------- */

export default function AiOnboardingWizard() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Schritt lebt in der URL (?step=N) — für Funnel-Tracking. Form-Daten
  // bleiben in React (kein PII wie E-Mail in der URL).
  const parsed = Number(searchParams.get("step"));
  const step =
    Number.isInteger(parsed) && parsed >= 1 && parsed <= TOTAL_STEPS
      ? parsed
      : 1;

  const [form, setForm] = useState<FormData>(EMPTY_FORM);

  const set = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const setStep = (next: number) => {
    // Bestehende Query-Parameter (UTM etc.) erhalten, nur `step` setzen.
    const params = new URLSearchParams(searchParams.toString());
    params.set("step", String(next));
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const goNext = () => setStep(Math.min(step + 1, TOTAL_STEPS));
  const goBack = () => setStep(Math.max(step - 1, 1));

  // Lead-Capture jeweils einmal pro Session feuern (Refs überleben Re-Renders /
  // Schritt-Wechsel, werden aber bei echtem Reload zurückgesetzt).
  const domainCapturedRef = useRef(false);

  // Attribution aus der Landing-URL (für HubSpot Company).
  const utm = {
    utm_source: searchParams.get("utm_source") ?? undefined,
    utm_campaign: searchParams.get("utm_campaign") ?? undefined,
  };

  // Schritt 1 → 2: Domain hinterlegt (Meta Lead + HubSpot Company).
  const handleDomainNext = () => {
    if (!domainCapturedRef.current && form.domain.trim()) {
      domainCapturedRef.current = true;
      captureDomain(form.domain, utm);
    }
    goNext();
  };

  // Bei jedem Schritt-Wechsel zurück an den Box-Anfang scrollen (kein Springen).
  const wizardRef = useRef<HTMLDivElement>(null);
  const firstStepRender = useRef(true);
  useEffect(() => {
    if (firstStepRender.current) {
      firstStepRender.current = false;
      return;
    }
    wizardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  return (
    <div ref={wizardRef} className="mx-auto w-full max-w-2xl scroll-mt-24">
      <StepIndicator current={step} />

      {/* Fixe Box — alle Steps leben hier drin, gleichbleibende Höhe */}
      <div className="mt-8 flex min-h-[480px] flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        {step === 1 && (
          <StepWebsite form={form} set={set} onNext={handleDomainNext} />
        )}
        {step === 2 && (
          <StepTools form={form} set={set} onNext={goNext} onBack={goBack} />
        )}
        {step === 3 && (
          <StepExperience
            form={form}
            set={set}
            onNext={goNext}
            onBack={goBack}
          />
        )}
        {step === 4 && <StepProcessing form={form} onDone={goNext} />}
        {step === 5 && <StepReport onBack={goBack} />}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Fortschritt — nur Nummern                                                  */
/* -------------------------------------------------------------------------- */

function StepIndicator({ current }: { current: number }) {
  return (
    <ol className="flex items-center">
      {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((n, i) => {
        const done = n < current;
        const active = n === current;
        return (
          <li key={n} className="flex flex-1 items-center last:flex-none">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                done
                  ? "bg-primary-600 text-white"
                  : active
                    ? "bg-primary-800 text-white ring-4 ring-primary-100"
                    : "bg-gray-200 text-gray-400"
              }`}
            >
              {done ? <Check className="h-5 w-5" /> : n}
            </div>
            {i < TOTAL_STEPS - 1 && (
              <div
                className={`mx-2 h-0.5 flex-1 rounded-full ${n < current ? "bg-primary-600" : "bg-gray-200"}`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

/* -------------------------------------------------------------------------- */
/*  Wiederverwendbare Bausteine                                                */
/* -------------------------------------------------------------------------- */

function StepHeader({
  icon: Icon,
  eyebrow,
  title,
  subtitle,
}: {
  icon: React.ComponentType<{ className?: string }>;
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-8">
      <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-600">
        <Icon className="h-4 w-4" />
        {eyebrow}
      </div>
      <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
        {title}
      </h2>
      <p className="mt-2 text-gray-500">{subtitle}</p>
    </div>
  );
}

function NavRow({
  onBack,
  onNext,
  nextLabel = "Weiter",
  nextDisabled = false,
}: {
  onBack?: () => void;
  onNext: () => void;
  nextLabel?: string;
  nextDisabled?: boolean;
}) {
  return (
    <div className="mt-10 flex items-center justify-between">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 py-3 text-sm font-semibold text-gray-400 transition-colors hover:text-gray-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück
        </button>
      ) : (
        <span />
      )}
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className="inline-flex items-center gap-2 rounded-full bg-primary-800 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
      >
        {nextLabel}
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

/** Einzelner, klar klickbarer Auswahl-Button (Pill). */
function OptionPill({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
        selected
          ? "border-primary-600 bg-primary-600 text-white"
          : "border-gray-300 bg-white text-gray-700 hover:border-primary-500 hover:text-primary-700"
      }`}
    >
      {children}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*  Step 1 — Website                                                           */
/* -------------------------------------------------------------------------- */

function StepWebsite({
  form,
  set,
  onNext,
}: {
  form: FormData;
  set: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
  onNext: () => void;
}) {
  const valid = form.domain.trim().length > 3 && form.domain.includes(".");

  return (
    <div>
      <StepHeader
        icon={Building2}
        eyebrow="Schritt 1 von 5"
        title="Mit welcher Website arbeitet ihr?"
        subtitle="Mehr brauchen wir nicht. Eure Branche und euer Sortiment leiten wir selbst aus der Website ab."
      />

      <label className="mb-2 block text-sm font-semibold text-gray-800">
        Gib deine Website ein
      </label>
      <input
        type="text"
        value={form.domain}
        placeholder="mustergrosshandel.de"
        onChange={(e) => set("domain", e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && valid) onNext();
        }}
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
      />

      <NavRow onNext={onNext} nextDisabled={!valid} nextLabel="Los geht's" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Sample-Report-Teaser (nur auf Schritt 1)                                   */
/* -------------------------------------------------------------------------- */

interface SampleReport {
  company: string;
  meta: string;
  file: string;
}

const SAMPLE_REPORTS: SampleReport[] = [
  {
    company: "WENDELSTEIN Steuerberatung",
    meta: "Steuerkanzlei · München · DATEV",
    file: "/sample-reports/wendelstein-steuerberatung.report.pdf",
  },
  {
    company: "Steinbach Group",
    meta: "Pool-Hersteller & E-Commerce · Österreich",
    file: "/sample-reports/steinbach-group.report.pdf",
  },
];

function PdfModal({
  report,
  onClose,
}: {
  report: SampleReport;
  onClose: () => void;
}) {
  // Escape schließt, Body-Scroll sperren solange offen.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const fileName = report.file.split("/").pop() ?? "report.pdf";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/70 p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Beispiel-Report ${report.company}`}
    >
      <div
        className="flex h-full max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Kopf */}
        <div className="flex items-center justify-between gap-3 border-b border-gray-200 px-4 py-3">
          <div className="min-w-0">
            <p className="truncate font-semibold text-gray-900">
              {report.company}
            </p>
            <p className="truncate text-xs text-gray-500">
              KI-Potenzial-Report · Beispiel
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Schließen"
            className="shrink-0 rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* PDF-Viewer */}
        <div className="min-h-0 flex-1 bg-gray-100">
          <iframe
            src={report.file}
            title={`Report ${report.company}`}
            className="h-full w-full"
          />
        </div>

        {/* Aktionen (Fallback für Mobile, wo Inline-PDF oft nicht rendert) */}
        <div className="flex flex-col gap-2 border-t border-gray-200 px-4 py-3 sm:flex-row sm:justify-end">
          <a
            href={report.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:border-primary-500 hover:text-primary-700"
          >
            <ExternalLink className="h-4 w-4" />
            Im neuen Tab öffnen
          </a>
          <a
            href={report.file}
            download={fileName}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-800 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
          >
            <Download className="h-4 w-4" />
            PDF herunterladen
          </a>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Step 2 — Tool-Landschaft (nur Buttons)                                     */
/* -------------------------------------------------------------------------- */

const TOOL_QUESTIONS = [
  { field: "erp", title: "Welches ERP-System nutzt ihr?", options: ERP_OPTIONS },
  { field: "crm", title: "Welches CRM nutzt ihr?", options: CRM_OPTIONS },
  { field: "buchhaltung", title: "Womit macht ihr die Buchhaltung?", options: ACCOUNTING_OPTIONS },
  { field: "logistik", title: "Wie organisiert ihr Logistik / Lager?", options: LOGISTIK_OPTIONS },
] as const;

const API_OPTIONS = [
  { key: "ja", label: "Ja" },
  { key: "nein", label: "Nein" },
  { key: "unklar", label: "Weiß nicht" },
] as const;

function StepTools({
  form,
  set,
  onNext,
  onBack,
}: {
  form: FormData;
  set: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  // Sub-Menü: immer nur eine Auswahl zeigen, dann zur nächsten.
  const [sub, setSub] = useState(0);
  const total = TOOL_QUESTIONS.length + 1; // 4 Systeme + API
  const isApi = sub === TOOL_QUESTIONS.length;
  const q = TOOL_QUESTIONS[sub];

  const fieldSetters: Record<(typeof TOOL_QUESTIONS)[number]["field"], (v: string) => void> = {
    erp: (v) => set("erp", v),
    crm: (v) => set("crm", v),
    buchhaltung: (v) => set("buchhaltung", v),
    logistik: (v) => set("logistik", v),
  };

  const nextSub = () => (sub < total - 1 ? setSub(sub + 1) : onNext());
  const backSub = () => (sub > 0 ? setSub(sub - 1) : onBack());

  return (
    <div className="flex flex-1 flex-col">
      <StepHeader
        icon={isApi ? Plug : Database}
        eyebrow={`Schritt 2 von 5 · ${sub + 1}/${total}`}
        title={isApi || !q ? "Gibt es APIs / Schnittstellen zu diesen Systemen?" : q.title}
        subtitle="Eins antippen oder überspringen. Alles optional."
      />

      <div className="flex flex-wrap gap-2.5">
        {isApi || !q
          ? API_OPTIONS.map((opt) => (
              <OptionPill
                key={opt.key}
                selected={form.hasApi === opt.key}
                onClick={() => {
                  set("hasApi", opt.key as ApiAnswer);
                  nextSub();
                }}
              >
                {opt.label}
              </OptionPill>
            ))
          : q.options.map((opt) => (
              <OptionPill
                key={opt}
                selected={form[q.field] === opt}
                onClick={() => {
                  fieldSetters[q.field](opt);
                  nextSub();
                }}
              >
                {opt}
              </OptionPill>
            ))}
      </div>

      <div className="mt-auto">
        <NavRow
          onBack={backSub}
          onNext={nextSub}
          nextLabel={isApi ? "Weiter" : "Überspringen"}
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Step 3 — AI-Erfahrung                                                      */
/* -------------------------------------------------------------------------- */

function StepExperience({
  form,
  set,
  onNext,
  onBack,
}: {
  form: FormData;
  set: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div>
      <StepHeader
        icon={Brain}
        eyebrow="Schritt 3 von 5"
        title="Wie viel KI-Erfahrung habt ihr schon?"
        subtitle="Damit wir den Aufwand realistisch einschätzen."
      />

      <div className="space-y-3">
        {AI_EXPERIENCE.map((opt) => {
          const selected = form.aiExperience === opt.key;
          return (
            <button
              key={opt.key}
              type="button"
              onClick={() => set("aiExperience", opt.key)}
              className={`flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-colors ${
                selected
                  ? "border-primary-600 bg-primary-50"
                  : "border-gray-300 bg-white hover:border-primary-500"
              }`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                  selected
                    ? "border-primary-600 bg-primary-600"
                    : "border-gray-300"
                }`}
              >
                {selected && <Check className="h-3.5 w-3.5 text-white" />}
              </span>
              <span>
                <span className="block font-semibold text-gray-900">
                  {opt.title}
                </span>
                <span className="block text-sm text-gray-500">{opt.desc}</span>
              </span>
            </button>
          );
        })}
      </div>

      <NavRow
        onBack={onBack}
        onNext={onNext}
        nextLabel="Analyse starten"
        nextDisabled={form.aiExperience === ""}
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Step 4 — Magic AI Processing (60 s)                                        */
/* -------------------------------------------------------------------------- */

function StepProcessing({
  form,
  onDone,
}: {
  form: FormData;
  onDone: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number | null>(null);
  const doneRef = useRef(false);

  const stages = useMemo(
    () => [
      `Website ${form.domain || "wird"} wird analysiert …`,
      "Branche und Sortiment werden erkannt …",
      `Tool-Landschaft auswerten (ERP: ${form.erp || "—"}, CRM: ${form.crm || "—"}) …`,
      form.hasApi === "ja"
        ? "Schnittstellen erkannt, Automatisierungs-Potenzial steigt …"
        : "Schnittstellen-Situation wird bewertet …",
      "KI-Reifegrad einordnen …",
      "Passende Use-Cases aus dem Großhandel-Katalog matchen …",
      "Aufwand und Nutzen je Use-Case berechnen …",
      "Euren KI-Potenzial-Report zusammenstellen …",
    ],
    [form],
  );

  useEffect(() => {
    let raf = 0;
    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;
      const pct = Math.min(100, (elapsed / PROCESSING_DURATION_MS) * 100);
      setProgress(pct);
      if (pct >= 100) {
        if (!doneRef.current) {
          doneRef.current = true;
          onDone();
        }
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  const stageIndex = Math.min(
    stages.length - 1,
    Math.floor((progress / 100) * stages.length),
  );
  const secondsLeft = Math.max(
    0,
    Math.ceil((PROCESSING_DURATION_MS / 1000) * (1 - progress / 100)),
  );

  return (
    <div className="py-6 text-center">
      <div className="relative mx-auto flex h-32 w-32 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary-200 opacity-60" />
        <span
          className="absolute inset-2 animate-spin rounded-full border-4 border-secondary-400 border-t-transparent"
          style={{ animationDuration: "1.4s" }}
        />
        <span className="absolute inset-5 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600" />
        <Sparkles className="relative h-10 w-10 text-white" />
      </div>

      <h2 className="mt-8 text-2xl font-bold text-gray-900">
        Wir bauen euren KI-Potenzial-Report
      </h2>
      <p className="mt-2 text-gray-500">
        Das dauert nur ein paar Sekunden. Bitte das Fenster offen lassen.
      </p>

      <div className="mx-auto mt-8 max-w-md">
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 transition-[width] duration-200 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs font-medium text-gray-400">
          <span>{Math.round(progress)} %</span>
          <span>noch ca. {secondsLeft}s</span>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 text-left">
        <Loader2 className="h-5 w-5 shrink-0 animate-spin text-primary-600" />
        <span className="text-sm font-medium text-gray-700">
          {stages[stageIndex]}
        </span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Step 5 — E-Mail / Report per PDF                                           */
/* -------------------------------------------------------------------------- */

function StepReport({ onBack }: { onBack: () => void }) {
  const [openReport, setOpenReport] = useState<SampleReport | null>(null);
  const report = SAMPLE_REPORTS[0];

  return (
    <div>
      <StepHeader
        icon={Sparkles}
        eyebrow="Fertig · Schritt 5 von 5"
        title="Euer KI-Potenzial-Report"
        subtitle="So sieht euer Report aus. Das hier ist ein echtes Beispiel, euer persönlicher folgt."
      />

      {/* Demo-Report direkt anzeigen */}
      <button
        type="button"
        onClick={() => setOpenReport(report)}
        className="flex w-full items-center gap-4 rounded-xl border border-gray-300 bg-white px-5 py-4 text-left transition-colors hover:border-primary-500 hover:bg-primary-50"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-800 text-white">
          <FileText className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate font-semibold text-gray-900">{report.company}</span>
          <span className="block truncate text-sm text-gray-500">{report.meta}</span>
        </span>
        <span className="hidden shrink-0 items-center gap-1 text-xs font-semibold text-primary-700 sm:inline-flex">
          Report ansehen
          <ArrowRight className="h-4 w-4" />
        </span>
      </button>

      {/* CTA */}
      <div className="mt-8 border-t border-gray-100 pt-6 text-center">
        <p className="mb-4 text-sm text-gray-500">
          Direkt wissen, welcher Quick Win sich zuerst lohnt?
        </p>
        <ContactButton icon="calendar">15-Minuten-Call buchen</ContactButton>
      </div>

      <div className="mt-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 py-2 text-sm font-semibold text-gray-400 transition-colors hover:text-gray-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück
        </button>
      </div>

      {openReport && (
        <PdfModal report={openReport} onClose={() => setOpenReport(null)} />
      )}
    </div>
  );
}
