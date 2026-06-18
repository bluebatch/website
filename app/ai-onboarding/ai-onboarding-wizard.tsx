"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ContactButton, {
  ContactChannel,
} from "@/components/buttons/contact-button";
import { captureDomain, captureEmail } from "@/lib/onboarding-capture";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  Database,
  Mail,
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
  const emailCapturedRef = useRef(false);

  // Attribution aus der Landing-URL (für HubSpot Company/Contact).
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

  // Schritt 5: Mail hinterlegt (Meta CompleteRegistration + HubSpot Contact).
  const handleEmailCapture = () => {
    if (!emailCapturedRef.current && form.email.trim()) {
      emailCapturedRef.current = true;
      captureEmail(
        form.email,
        form.domain,
        {
          erp: form.erp,
          crm: form.crm,
          buchhaltung: form.buchhaltung,
          logistik: form.logistik,
          hasApi: form.hasApi,
          aiExperience: form.aiExperience,
        },
        utm,
      );
    }
  };

  const scrollToDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    document
      .getElementById("demo-report")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      {/* Persistente CTA-Leiste — auf jedem Schritt direkt buchbar */}
      <div className="mb-8 space-y-5 border-b border-gray-200 pb-6">
        <div>
          <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Direkt sprechen
          </p>
          <ContactButton
            icon="calendar"
            size="sm"
            channels={[ContactChannel.Meeting]}
          >
            Meeting buchen
          </ContactButton>
        </div>

        {step === 1 && (
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Zum Demo-Report
            </p>
            <a
              href="#demo-report"
              onClick={scrollToDemo}
              className="inline-flex items-center gap-2 border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary-500 hover:text-primary-700"
            >
              <FileText className="h-4 w-4" />
              Demo-Report ansehen
            </a>
          </div>
        )}
      </div>

      <StepIndicator current={step} />

      <div className="mt-12">
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
        {step === 5 && (
          <StepEmail
            form={form}
            set={set}
            onBack={goBack}
            onSubmit={handleEmailCapture}
          />
        )}
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

/** Button-Gruppe (Einfachauswahl) — kein Freitext. */
function ButtonGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-gray-800">{label}</p>
      <div className="flex flex-wrap gap-2.5">
        {options.map((opt) => (
          <OptionPill
            key={opt}
            selected={value === opt}
            onClick={() => onChange(value === opt ? "" : opt)}
          >
            {opt}
          </OptionPill>
        ))}
      </div>
    </div>
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
      <div className="flex items-center rounded-xl border border-gray-300 bg-white focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-100">
        <span className="select-none pl-4 text-gray-400">https://</span>
        <input
          type="text"
          value={form.domain}
          placeholder="mustergrosshandel.de"
          autoFocus
          onChange={(e) => set("domain", e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && valid) onNext();
          }}
          className="w-full bg-transparent px-2 py-3.5 text-gray-900 outline-none placeholder:text-gray-400"
        />
      </div>

      <NavRow onNext={onNext} nextDisabled={!valid} nextLabel="Los geht's" />

      <SampleReportPreview />
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

function SampleReportPreview() {
  const [openReport, setOpenReport] = useState<SampleReport | null>(null);

  return (
    <div
      id="demo-report"
      className="mt-16 scroll-mt-24 border-t border-gray-200 pt-12"
    >
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary-700">
          <Sparkles className="h-4 w-4" />
          Das bekommst du am Ende
        </div>
        <h3 className="mt-3 text-xl font-bold text-gray-900 sm:text-2xl">
          Echte Beispiel-Reports zum Reinschauen
        </h3>
        <p className="mt-2 max-w-xl text-sm text-gray-500">
          So sieht euer KI-Potenzial-Report aus, konkrete Use-Cases mit Zahlen,
          auf die jeweilige Firma zugeschnitten. Tippe auf eine Firma, um den
          Report anzusehen oder herunterzuladen.
        </p>
      </div>

      <div className="space-y-3">
        {SAMPLE_REPORTS.map((r) => (
          <button
            key={r.file}
            type="button"
            onClick={() => setOpenReport(r)}
            className="flex w-full items-center gap-4 rounded-xl border border-gray-300 bg-white px-5 py-4 text-left transition-colors hover:border-primary-500 hover:bg-primary-50"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-800 text-white">
              <FileText className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold text-gray-900">
                {r.company}
              </span>
              <span className="block truncate text-sm text-gray-500">
                {r.meta}
              </span>
            </span>
            <span className="shrink-0 text-xs font-semibold text-primary-700">
              Report ansehen →
            </span>
          </button>
        ))}
      </div>

      <p className="mt-4 text-sm font-semibold text-primary-700">
        Trag oben deine Domain ein und du bekommst deinen eigenen Report.
      </p>

      {openReport && (
        <PdfModal report={openReport} onClose={() => setOpenReport(null)} />
      )}
    </div>
  );
}

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
  return (
    <div>
      <StepHeader
        icon={Database}
        eyebrow="Schritt 2 von 5"
        title="Welche Systeme nutzt ihr?"
        subtitle="Einfach anklicken. Je genauer, desto besser passt euer Report. Alles optional."
      />

      <div className="space-y-8">
        <ButtonGroup
          label="ERP-System"
          options={ERP_OPTIONS}
          value={form.erp}
          onChange={(v) => set("erp", v)}
        />
        <ButtonGroup
          label="CRM-System"
          options={CRM_OPTIONS}
          value={form.crm}
          onChange={(v) => set("crm", v)}
        />
        <ButtonGroup
          label="Buchhaltung"
          options={ACCOUNTING_OPTIONS}
          value={form.buchhaltung}
          onChange={(v) => set("buchhaltung", v)}
        />
        <ButtonGroup
          label="Logistik / Lager"
          options={LOGISTIK_OPTIONS}
          value={form.logistik}
          onChange={(v) => set("logistik", v)}
        />

        <div>
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-800">
            <Plug className="h-4 w-4 text-primary-600" />
            Gibt es APIs / Schnittstellen zu diesen Systemen?
          </p>
          <div className="flex flex-wrap gap-2.5">
            {[
              { key: "ja", label: "Ja" },
              { key: "nein", label: "Nein" },
              { key: "unklar", label: "Weiß nicht" },
            ].map((opt) => (
              <OptionPill
                key={opt.key}
                selected={form.hasApi === opt.key}
                onClick={() =>
                  set(
                    "hasApi",
                    form.hasApi === opt.key ? "" : (opt.key as ApiAnswer),
                  )
                }
              >
                {opt.label}
              </OptionPill>
            ))}
          </div>
        </div>
      </div>

      <NavRow onBack={onBack} onNext={onNext} />
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

function StepEmail({
  form,
  set,
  onBack,
  onSubmit,
}: {
  form: FormData;
  set: <K extends keyof FormData>(k: K, v: FormData[K]) => void;
  onBack: () => void;
  onSubmit: () => void;
}) {
  const [sent, setSent] = useState(false);
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  const submit = () => {
    onSubmit();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="py-6 text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary-50">
          <CheckCircle2 className="h-12 w-12 text-primary-600" />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl">
          Dein Report ist unterwegs
        </h2>
        <p className="mx-auto mt-3 max-w-md text-gray-500">
          Wir schicken deinen persönlichen KI-Potenzial-Report als PDF an{" "}
          <span className="font-semibold text-gray-800">{form.email}</span>. In
          der Regel ist er in wenigen Minuten da. Schau auch kurz im Spam-Ordner
          nach.
        </p>

        <div className="mt-8">
          <p className="mb-4 text-sm text-gray-500">
            Schon jetzt wissen, welcher Quick Win sich zuerst lohnt?
          </p>
          <ContactButton icon="calendar">15-Minuten-Call buchen</ContactButton>
        </div>
      </div>
    );
  }

  return (
    <div>
      <StepHeader
        icon={Mail}
        eyebrow="Schritt 5 von 5"
        title="Wohin schicken wir deinen Report?"
        subtitle="Trag deine E-Mail ein, wir senden dir den vollständigen KI-Potenzial-Report als PDF."
      />

      <div className="flex items-center gap-3 text-sm text-primary-900">
        <Check className="h-5 w-5 shrink-0 text-primary-600" />
        Analyse abgeschlossen, deine persönliche Use-Case-Matrix steht bereit.
      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-semibold text-gray-800">
          Geschäftliche E-Mail-Adresse
        </label>
        <input
          type="email"
          value={form.email}
          placeholder="vorname.nachname@firma.de"
          autoFocus
          onChange={(e) => set("email", e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && valid) submit();
          }}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
        />
        <p className="mt-2 text-xs text-gray-400">
          Keine Newsletter-Flut. Wir nutzen die Adresse nur für deinen Report
          und eine mögliche Rückfrage.
        </p>
      </div>

      <div className="mt-10 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 py-3 text-sm font-semibold text-gray-400 transition-colors hover:text-gray-700"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück
        </button>
        <button
          type="button"
          onClick={submit}
          disabled={!valid}
          className="inline-flex items-center gap-2 rounded-full bg-primary-800 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
        >
          Report per Mail senden
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
