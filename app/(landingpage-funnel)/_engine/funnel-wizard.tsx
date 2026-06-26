"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Loader2,
  Sparkles,
  CalendarDays,
  Mail,
} from "lucide-react";
import ContactButton from "@/components/buttons/contact-button";
import { captureFunnel } from "./funnel-capture";

/* -------------------------------------------------------------------------- */
/*  Typen — eine Config beschreibt einen kompletten Game-Funnel               */
/* -------------------------------------------------------------------------- */

type Icon = React.ComponentType<{ className?: string }>;

export type Answers = Record<string, string | string[]>;

export interface Choice {
  key: string;
  label: string;
  desc?: string;
}

interface BaseStep {
  id: string;
  icon: Icon;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Schritt nur zeigen, wenn das Prädikat (auf den bisherigen Antworten) passt. */
  showIf?: (a: Answers) => boolean;
}

/** Pills, eine Auswahl, springt sofort weiter (schneller Game-Flow). */
export interface PillsStep extends BaseStep {
  type: "pills";
  field: string;
  options: Choice[];
}

/** Vertikale Karten, eine Auswahl, expliziter Weiter-Button. */
export interface SingleStep extends BaseStep {
  type: "single";
  field: string;
  options: Choice[];
}

/** Vertikale Karten, Mehrfachauswahl. */
export interface MultiStep extends BaseStep {
  type: "multi";
  field: string;
  options: Choice[];
}

/** Freitext-Eingabe. */
export interface TextStep extends BaseStep {
  type: "text";
  field: string;
  placeholder?: string;
  optional?: boolean;
  multiline?: boolean;
}

/** Kurze "wir bauen dein Programm"-Animation (Game-Feel). */
export interface ProcessingStep extends BaseStep {
  type: "processing";
  stages: string[];
  durationMs?: number;
}

export interface DateOption {
  /** Klartext, geht 1:1 ins HubSpot-Note. */
  label: string;
  /** Optionaler Zusatz (Ort, Uhrzeit, Restplätze). */
  meta?: string;
}

/** Abschluss: Termin wählen (optional) + Mail → Anmeldung abschicken. */
export interface FinalStep extends BaseStep {
  type: "final";
  /** Wenn gesetzt: Terminauswahl (Pflicht) vor dem Absenden. */
  dates?: DateOption[];
  /** Optionales Freitextfeld ("Was möchtest du automatisieren?"). */
  noteLabel?: string;
  notePlaceholder?: string;
  submitLabel: string;
  /** Erfolgstext nach dem Absenden. */
  successTitle: string;
  successBody: string;
}

export type FunnelStep =
  | PillsStep
  | SingleStep
  | MultiStep
  | TextStep
  | ProcessingStep
  | FinalStep;

export interface FunnelConfig {
  /** Slug, landet als Quelle im CRM. */
  id: string;
  /** Klartext-Titel der Schulung/des Angebots. */
  title: string;
  steps: FunnelStep[];
}

/* -------------------------------------------------------------------------- */
/*  Haupt-Komponente                                                          */
/* -------------------------------------------------------------------------- */

export default function FunnelWizard({ config }: { config: FunnelConfig }) {
  const searchParams = useSearchParams();
  const [answers, setAnswers] = useState<Answers>({});
  const [index, setIndex] = useState(0);

  // Nur Schritte, deren Bedingung gerade erfüllt ist (Branching).
  const visible = useMemo(
    () => config.steps.filter((s) => !s.showIf || s.showIf(answers)),
    [config.steps, answers],
  );

  const safeIndex = Math.min(index, visible.length - 1);
  const current = visible[safeIndex];

  const setAnswer = (field: string, value: string | string[]) =>
    setAnswers((prev) => ({ ...prev, [field]: value }));

  const goNext = () => setIndex((i) => Math.min(i + 1, visible.length - 1));
  const goBack = () => setIndex((i) => Math.max(i - 1, 0));

  // Bei jedem Schrittwechsel sanft an den Box-Anfang scrollen.
  const wizardRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    wizardRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [safeIndex]);

  const utm = {
    utm_source: searchParams.get("utm_source") ?? undefined,
    utm_campaign: searchParams.get("utm_campaign") ?? undefined,
  };

  return (
    <div ref={wizardRef} className="mx-auto w-full max-w-2xl scroll-mt-24">
      <StepIndicator current={safeIndex} total={visible.length} />

      <div className="mt-8 flex min-h-[480px] flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <StepRenderer
          key={current.id}
          step={current}
          stepNo={safeIndex + 1}
          totalSteps={visible.length}
          answers={answers}
          setAnswer={setAnswer}
          onNext={goNext}
          onBack={safeIndex > 0 ? goBack : undefined}
          config={config}
          utm={utm}
        />
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Fortschritt                                                               */
/* -------------------------------------------------------------------------- */

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <ol className="flex items-center">
      {Array.from({ length: total }, (_, i) => i).map((i) => {
        const done = i < current;
        const active = i === current;
        return (
          <li key={i} className="flex flex-1 items-center last:flex-none">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                done
                  ? "bg-primary-600 text-white"
                  : active
                    ? "bg-primary-800 text-white ring-4 ring-primary-100"
                    : "bg-gray-200 text-gray-400"
              }`}
            >
              {done ? <Check className="h-5 w-5" /> : i + 1}
            </div>
            {i < total - 1 && (
              <div
                className={`mx-2 h-0.5 flex-1 rounded-full ${
                  i < current ? "bg-primary-600" : "bg-gray-200"
                }`}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}

/* -------------------------------------------------------------------------- */
/*  Wiederverwendbare Bausteine                                               */
/* -------------------------------------------------------------------------- */

function StepHeader({
  icon: Icon,
  eyebrow,
  title,
  subtitle,
}: {
  icon: Icon;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-600">
          <Icon className="h-4 w-4" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 text-gray-500">{subtitle}</p>}
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

function CardOption({
  selected,
  onClick,
  title,
  desc,
  multi = false,
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  desc?: string;
  multi?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-colors ${
        selected
          ? "border-primary-600 bg-primary-50"
          : "border-gray-300 bg-white hover:border-primary-500"
      }`}
    >
      <span
        className={`flex h-6 w-6 shrink-0 items-center justify-center border-2 ${
          multi ? "rounded-md" : "rounded-full"
        } ${selected ? "border-primary-600 bg-primary-600" : "border-gray-300"}`}
      >
        {selected && <Check className="h-3.5 w-3.5 text-white" />}
      </span>
      <span>
        <span className="block font-semibold text-gray-900">{title}</span>
        {desc && <span className="block text-sm text-gray-500">{desc}</span>}
      </span>
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*  Dispatcher                                                                */
/* -------------------------------------------------------------------------- */

interface StepProps {
  step: FunnelStep;
  stepNo: number;
  totalSteps: number;
  answers: Answers;
  setAnswer: (field: string, value: string | string[]) => void;
  onNext: () => void;
  onBack?: () => void;
  config: FunnelConfig;
  utm: { utm_source?: string; utm_campaign?: string };
}

function StepRenderer(props: StepProps) {
  const { step } = props;
  switch (step.type) {
    case "pills":
      return <PillsView {...props} step={step} />;
    case "single":
      return <SingleView {...props} step={step} />;
    case "multi":
      return <MultiView {...props} step={step} />;
    case "text":
      return <TextView {...props} step={step} />;
    case "processing":
      return <ProcessingView {...props} step={step} />;
    case "final":
      return <FinalView {...props} step={step} />;
  }
}

/* ----------------------------- Pills (auto-next) -------------------------- */

function PillsView({
  step,
  stepNo,
  totalSteps,
  answers,
  setAnswer,
  onNext,
  onBack,
}: StepProps & { step: PillsStep }) {
  const value = (answers[step.field] as string) ?? "";
  return (
    <div className="flex flex-1 flex-col">
      <StepHeader
        icon={step.icon}
        eyebrow={step.eyebrow ?? `Schritt ${stepNo} von ${totalSteps}`}
        title={step.title}
        subtitle={step.subtitle}
      />
      <div className="flex flex-wrap gap-2.5">
        {step.options.map((opt) => (
          <OptionPill
            key={opt.key}
            selected={value === opt.key}
            onClick={() => {
              setAnswer(step.field, opt.key);
              onNext();
            }}
          >
            {opt.label}
          </OptionPill>
        ))}
      </div>
      <div className="mt-auto">
        <NavRow onBack={onBack} onNext={onNext} nextDisabled={!value} />
      </div>
    </div>
  );
}

/* ----------------------------- Single (cards) ---------------------------- */

function SingleView({
  step,
  stepNo,
  totalSteps,
  answers,
  setAnswer,
  onNext,
  onBack,
}: StepProps & { step: SingleStep }) {
  const value = (answers[step.field] as string) ?? "";
  return (
    <div>
      <StepHeader
        icon={step.icon}
        eyebrow={step.eyebrow ?? `Schritt ${stepNo} von ${totalSteps}`}
        title={step.title}
        subtitle={step.subtitle}
      />
      <div className="space-y-3">
        {step.options.map((opt) => (
          <CardOption
            key={opt.key}
            selected={value === opt.key}
            onClick={() => setAnswer(step.field, opt.key)}
            title={opt.label}
            desc={opt.desc}
          />
        ))}
      </div>
      <NavRow onBack={onBack} onNext={onNext} nextDisabled={!value} />
    </div>
  );
}

/* ----------------------------- Multi (cards) ----------------------------- */

function MultiView({
  step,
  stepNo,
  totalSteps,
  answers,
  setAnswer,
  onNext,
  onBack,
}: StepProps & { step: MultiStep }) {
  const selected = (answers[step.field] as string[]) ?? [];
  const toggle = (key: string) =>
    setAnswer(
      step.field,
      selected.includes(key)
        ? selected.filter((k) => k !== key)
        : [...selected, key],
    );
  return (
    <div>
      <StepHeader
        icon={step.icon}
        eyebrow={step.eyebrow ?? `Schritt ${stepNo} von ${totalSteps}`}
        title={step.title}
        subtitle={step.subtitle ?? "Mehrfachauswahl möglich."}
      />
      <div className="space-y-3">
        {step.options.map((opt) => (
          <CardOption
            key={opt.key}
            multi
            selected={selected.includes(opt.key)}
            onClick={() => toggle(opt.key)}
            title={opt.label}
            desc={opt.desc}
          />
        ))}
      </div>
      <NavRow onBack={onBack} onNext={onNext} nextDisabled={selected.length === 0} />
    </div>
  );
}

/* ----------------------------- Text -------------------------------------- */

function TextView({
  step,
  stepNo,
  totalSteps,
  answers,
  setAnswer,
  onNext,
  onBack,
}: StepProps & { step: TextStep }) {
  const value = (answers[step.field] as string) ?? "";
  const valid = step.optional || value.trim().length > 1;
  return (
    <div className="flex flex-1 flex-col">
      <StepHeader
        icon={step.icon}
        eyebrow={step.eyebrow ?? `Schritt ${stepNo} von ${totalSteps}`}
        title={step.title}
        subtitle={step.subtitle}
      />
      {step.multiline ? (
        <textarea
          value={value}
          placeholder={step.placeholder}
          onChange={(e) => setAnswer(step.field, e.target.value)}
          rows={4}
          className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
        />
      ) : (
        <input
          type="text"
          value={value}
          placeholder={step.placeholder}
          onChange={(e) => setAnswer(step.field, e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && valid) onNext();
          }}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
        />
      )}
      <div className="mt-auto">
        <NavRow
          onBack={onBack}
          onNext={onNext}
          nextDisabled={!valid}
          nextLabel={step.optional && !value.trim() ? "Überspringen" : "Weiter"}
        />
      </div>
    </div>
  );
}

/* ----------------------------- Processing -------------------------------- */

function ProcessingView({
  step,
  onNext,
}: StepProps & { step: ProcessingStep }) {
  const duration = step.durationMs ?? 6000;
  const [progress, setProgress] = useState(0);
  const startRef = useRef<number | null>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    let raf = 0;
    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const pct = Math.min(100, ((now - startRef.current) / duration) * 100);
      setProgress(pct);
      if (pct >= 100) {
        if (!doneRef.current) {
          doneRef.current = true;
          onNext();
        }
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, onNext]);

  const stageIndex = Math.min(
    step.stages.length - 1,
    Math.floor((progress / 100) * step.stages.length),
  );

  return (
    <div className="m-auto py-6 text-center">
      <div className="relative mx-auto flex h-32 w-32 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-primary-200 opacity-60" />
        <span
          className="absolute inset-2 animate-spin rounded-full border-4 border-secondary-400 border-t-transparent"
          style={{ animationDuration: "1.4s" }}
        />
        <span className="absolute inset-5 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600" />
        <Sparkles className="relative h-10 w-10 text-white" />
      </div>

      <h2 className="mt-8 text-2xl font-bold text-gray-900">{step.title}</h2>
      {step.subtitle && <p className="mt-2 text-gray-500">{step.subtitle}</p>}

      <div className="mx-auto mt-8 max-w-md">
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 transition-[width] duration-200 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-3 text-left">
        <Loader2 className="h-5 w-5 shrink-0 animate-spin text-primary-600" />
        <span className="text-sm font-medium text-gray-700">
          {step.stages[stageIndex]}
        </span>
      </div>
    </div>
  );
}

/* ----------------------------- Final (Termin + Mail) --------------------- */

function FinalView({
  step,
  answers,
  onBack,
  config,
  utm,
}: StepProps & { step: FinalStep }) {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [dateIdx, setDateIdx] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const dateOk = !step.dates || dateIdx !== null;
  const canSend = emailValid && dateOk;

  const send = () => {
    if (!canSend || sent) return;
    const selectedDate =
      step.dates && dateIdx !== null ? step.dates[dateIdx].label : undefined;
    captureFunnel(
      {
        funnel: config.id,
        funnelTitle: config.title,
        email,
        selectedDate,
        note: note.trim() || undefined,
        answers,
      },
      utm,
    );
    setSent(true);
  };

  if (sent) {
    return (
      <div className="m-auto py-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
          <CheckCircle2 className="h-9 w-9 text-primary-600" />
        </div>
        <h2 className="mt-6 text-2xl font-bold text-gray-900">
          {step.successTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-md text-gray-500">{step.successBody}</p>
        <div className="mt-8">
          <ContactButton icon="calendar">
            Lieber direkt sprechen? 15-Min-Call
          </ContactButton>
        </div>
      </div>
    );
  }

  return (
    <div>
      <StepHeader
        icon={step.icon}
        eyebrow={step.eyebrow ?? "Fast geschafft"}
        title={step.title}
        subtitle={step.subtitle}
      />

      {/* Terminauswahl (optional je nach Funnel) */}
      {step.dates && (
        <div className="mb-6 space-y-3">
          {step.dates.map((d, i) => {
            const selected = dateIdx === i;
            return (
              <button
                key={d.label}
                type="button"
                onClick={() => setDateIdx(i)}
                className={`flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-colors ${
                  selected
                    ? "border-primary-600 bg-primary-50"
                    : "border-gray-300 bg-white hover:border-primary-500"
                }`}
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
                    selected
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <CalendarDays className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold text-gray-900">
                    {d.label}
                  </span>
                  {d.meta && (
                    <span className="block text-sm text-gray-500">{d.meta}</span>
                  )}
                </span>
                <span
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                    selected
                      ? "border-primary-600 bg-primary-600"
                      : "border-gray-300"
                  }`}
                >
                  {selected && <Check className="h-3.5 w-3.5 text-white" />}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Optionales Freitextfeld */}
      {step.noteLabel && (
        <div className="mb-5">
          <label className="mb-2 block text-sm font-semibold text-gray-800">
            {step.noteLabel}
          </label>
          <textarea
            value={note}
            placeholder={step.notePlaceholder}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
          />
        </div>
      )}

      {/* Mail + Absenden */}
      <label className="mb-2 block text-sm font-semibold text-gray-800">
        An welche Mail sollen wir die Bestätigung schicken?
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          type="email"
          value={email}
          placeholder="vorname.nachname@firma.de"
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-100"
        />
        <button
          type="button"
          onClick={send}
          disabled={!canSend}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary-800 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400"
        >
          <Mail className="h-4 w-4" />
          {step.submitLabel}
        </button>
      </div>
      {step.dates && dateIdx === null && (
        <p className="mt-2 text-xs text-gray-400">
          Bitte oben einen Termin auswählen.
        </p>
      )}

      {onBack && (
        <div className="mt-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 py-2 text-sm font-semibold text-gray-400 transition-colors hover:text-gray-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück
          </button>
        </div>
      )}
    </div>
  );
}
