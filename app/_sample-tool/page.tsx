"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import ContactButton from "@/components/buttons/contact-button";
import { RotateCcw } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

interface Option {
  label: string;
  emoji: string;
  value: string;
  score: number;
}

interface TreeNode {
  id: string;
  question: string;
  getOptions: (ctx: Record<string, string>) => Option[];
}

const NODES: TreeNode[] = [
  {
    id: "industry",
    question: "In welcher Branche seid ihr unterwegs?",
    getOptions: () => [
      { label: "Großhandel / Distribution", emoji: "📦", value: "grosshandel", score: 3 },
      { label: "Steuerberatung / Kanzlei", emoji: "📋", value: "steuerberater", score: 3 },
      { label: "Personaldienstleistung", emoji: "👥", value: "personal", score: 2 },
      { label: "Andere Branche", emoji: "🏢", value: "other", score: 1 },
    ],
  },
  {
    id: "process",
    question: "Welcher Prozess nervt euch am meisten?",
    getOptions: (ctx) => {
      if (ctx.industry === "grosshandel") return [
        { label: "Aufträge erfassen & abwickeln", emoji: "📝", value: "orders", score: 3 },
        { label: "Rechnungen prüfen & buchen", emoji: "🧾", value: "invoices", score: 3 },
        { label: "Lager & Logistik steuern", emoji: "🏭", value: "logistics", score: 2 },
        { label: "Stammdaten pflegen", emoji: "📂", value: "masterdata", score: 2 },
      ];
      if (ctx.industry === "steuerberater") return [
        { label: "Belege & Dokumente", emoji: "📄", value: "documents", score: 3 },
        { label: "Mandantenkommunikation", emoji: "💬", value: "communication", score: 2 },
        { label: "DATEV-Workflows", emoji: "🔗", value: "datev", score: 3 },
        { label: "Fristen & Aufgaben", emoji: "⏰", value: "deadlines", score: 2 },
      ];
      if (ctx.industry === "personal") return [
        { label: "Bewerbermanagement", emoji: "🔍", value: "recruiting", score: 3 },
        { label: "Zeiterfassung & Abrechnung", emoji: "⏱️", value: "timetracking", score: 3 },
        { label: "Onboarding", emoji: "🎓", value: "onboarding", score: 2 },
        { label: "Compliance", emoji: "✅", value: "compliance", score: 2 },
      ];
      return [
        { label: "Marketing & Vertrieb", emoji: "📣", value: "marketing", score: 2 },
        { label: "Buchhaltung & Finanzen", emoji: "💰", value: "finance", score: 2 },
        { label: "HR & Recruiting", emoji: "👤", value: "hr", score: 2 },
        { label: "IT & Support", emoji: "🛠️", value: "it", score: 1 },
      ];
    },
  },
  {
    id: "tools",
    question: "Welche Software nutzt ihr heute?",
    getOptions: (ctx) => {
      if (ctx.industry === "grosshandel") return [
        { label: "SAP, Navision, Dynamics", emoji: "⚡", value: "enterprise", score: 3 },
        { label: "Branchenlösung (büro+, Sage)", emoji: "🔧", value: "branche", score: 2 },
        { label: "Mix aus Tools + Excel", emoji: "📊", value: "mixed", score: 1 },
      ];
      if (ctx.industry === "steuerberater") return [
        { label: "DATEV + Eigenorganisation", emoji: "⚡", value: "datev", score: 3 },
        { label: "DATEV + DMS (ELO, DocuWare)", emoji: "🔧", value: "datev_dms", score: 3 },
        { label: "Andere Kanzleisoftware", emoji: "📊", value: "other_tax", score: 1 },
      ];
      if (ctx.industry === "personal") return [
        { label: "zvoove, L1, Landwehr", emoji: "⚡", value: "pdl_software", score: 3 },
        { label: "ATS + Zeiterfassung getrennt", emoji: "🔧", value: "ats", score: 2 },
        { label: "Viel manuell, Excel", emoji: "📊", value: "manual", score: 1 },
      ];
      return [
        { label: "Cloud-Tools mit API", emoji: "⚡", value: "modern", score: 3 },
        { label: "Mix Cloud + Legacy", emoji: "🔧", value: "mixed", score: 2 },
        { label: "Hauptsächlich Excel", emoji: "📊", value: "excel", score: 1 },
      ];
    },
  },
  {
    id: "volume",
    question: "Wie viel läuft pro Tag durch?",
    getOptions: (ctx) => {
      const u = ctx.process === "orders" || ctx.process === "invoices" ? "Belege"
        : ctx.process === "documents" || ctx.process === "datev" ? "Dokumente"
          : ctx.process === "recruiting" ? "Bewerbungen" : "Vorgänge";
      return [
        { label: `Unter 10 ${u}`, emoji: "🐌", value: "low", score: 0 },
        { label: `10 bis 50 ${u}`, emoji: "🚶", value: "medium", score: 2 },
        { label: `Über 50 ${u}`, emoji: "🚀", value: "high", score: 3 },
      ];
    },
  },
  {
    id: "urgency",
    question: "Wann wollt ihr loslegen?",
    getOptions: () => [
      { label: "Erstmal informieren", emoji: "🔭", value: "explore", score: 0 },
      { label: "Dieses Jahr", emoji: "📅", value: "thisyear", score: 2 },
      { label: "Am liebsten sofort", emoji: "🔥", value: "asap", score: 3 },
    ],
  },
];

const TOTAL = NODES.length;

function getResult(score: number, ctx: Record<string, string>) {
  if (score >= 10) {
    const s: Record<string, string> = {
      grosshandel: "Im Großhandel sehen wir 60-80% Zeitersparnis bei der Auftragserfassung. Ein Pilot kann in 2 Wochen live sein.",
      steuerberater: "Kanzleien sparen mit automatisierter Belegverarbeitung 15h pro Woche.",
      personal: "Wir automatisieren von Bewerbung bis Abrechnung. In 2-3 Wochen produktiv.",
      other: "Euer Setup hat großes Potenzial. Wir finden in einem kurzen Call den besten Einstieg.",
    };
    return { headline: "Volltreffer! Sofort loslegen.", description: s[ctx.industry] ?? s.other, cta: "Termin buchen", tier: "go" as const };
  }
  if (score >= 5) return { headline: "Da steckt Potenzial drin!", description: "Ein paar gezielte Automationen könnten schon viel bewirken. Lass uns in 15 Minuten schauen, wo der größte Hebel liegt.", cta: "Quick-Check buchen", tier: "maybe" as const };
  return { headline: "Noch früh, aber nicht zu früh.", description: "Der Leidensdruck ist noch gering. Aber die besten Automationen baut man, bevor es brennt.", cta: "Trotzdem mal sprechen", tier: "wait" as const };
}

/* ═══════════════════════════════════════════════════════════
   SVG CHARACTER
   ═══════════════════════════════════════════════════════════ */

function CharacterSVG({ walking, flip }: { walking: boolean; flip?: boolean }) {
  return (
    <svg width="48" height="64" viewBox="0 0 40 56" className="overflow-visible" style={flip ? { transform: "scaleX(-1)" } : undefined}>
      <ellipse cx="20" cy="54" rx="10" ry="2.5" fill="rgba(0,0,0,0.1)">
        {walking && <animate attributeName="rx" values="10;13;10" dur="0.35s" repeatCount="indefinite" />}
      </ellipse>
      <g>
        {walking && <animateTransform attributeName="transform" type="translate" values="0,0;0,-3;0,0" dur="0.35s" repeatCount="indefinite" />}
        <g>{walking && <animateTransform attributeName="transform" type="rotate" values="-20,14,38;20,14,38;-20,14,38" dur="0.35s" repeatCount="indefinite" />}<rect x="11" y="38" width="7" height="11" rx="2.5" fill="#1e40af" /><rect x="9" y="47" width="10" height="5" rx="2.5" fill="#7c2d12" /></g>
        <g>{walking && <animateTransform attributeName="transform" type="rotate" values="20,26,38;-20,26,38;20,26,38" dur="0.35s" repeatCount="indefinite" />}<rect x="22" y="38" width="7" height="11" rx="2.5" fill="#1e40af" /><rect x="21" y="47" width="10" height="5" rx="2.5" fill="#7c2d12" /></g>
        <rect x="8" y="24" width="24" height="15" rx="4" fill="#dc2626" />
        <rect x="12" y="24" width="3" height="15" rx="1" fill="#1e40af" opacity="0.6" />
        <rect x="25" y="24" width="3" height="15" rx="1" fill="#1e40af" opacity="0.6" />
        <rect x="8" y="36" width="24" height="3" rx="1" fill="#7c2d12" />
        <circle cx="20" cy="37.5" r="1.8" fill="#fbbf24" />
        <g>{walking && <animateTransform attributeName="transform" type="rotate" values="25,6,26;-25,6,26;25,6,26" dur="0.35s" repeatCount="indefinite" />}<rect x="1" y="25" width="8" height="11" rx="3.5" fill="#dc2626" /><circle cx="5" cy="36.5" r="3" fill="#fde68a" /></g>
        <g>{walking && <animateTransform attributeName="transform" type="rotate" values="-25,34,26;25,34,26;-25,34,26" dur="0.35s" repeatCount="indefinite" />}<rect x="31" y="25" width="8" height="11" rx="3.5" fill="#dc2626" /><circle cx="35" cy="36.5" r="3" fill="#fde68a" /></g>
        <circle cx="20" cy="14" r="10.5" fill="#fde68a" />
        <path d="M10 13 Q12 4 20 3 Q28 4 30 13 Q28 7 20 6 Q12 7 10 13Z" fill="#7c2d12" />
        <ellipse cx="15.5" cy="13.5" rx="2" ry="2.2" fill="#1f2937" /><ellipse cx="24.5" cy="13.5" rx="2" ry="2.2" fill="#1f2937" />
        <circle cx="16.3" cy="12.5" r="0.7" fill="white" /><circle cx="25.3" cy="12.5" r="0.7" fill="white" />
        <ellipse cx="20" cy="16" rx="1.5" ry="1" fill="#f5c97a" />
        <path d="M16.5 19 Q20 22 23.5 19" fill="none" stroke="#b91c1c" strokeWidth="1.3" strokeLinecap="round">
          {walking && <animate attributeName="d" values="M16.5 19 Q20 22 23.5 19;M16.5 19.5 Q20 20.5 23.5 19.5;M16.5 19 Q20 22 23.5 19" dur="0.7s" repeatCount="indefinite" />}
        </path>
        <ellipse cx="20" cy="5.5" rx="11.5" ry="4.5" fill="#dc2626" />
        <rect x="8.5" y="5" width="23" height="3.5" rx="1.5" fill="#dc2626" />
        <ellipse cx="29" cy="7" rx="6" ry="2.8" fill="#b91c1c" />
        <circle cx="20" cy="5" r="2" fill="#fbbf24" /><text x="20" y="7" textAnchor="middle" fontSize="3.5" fill="#7c2d12" fontWeight="bold">B</text>
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   GAME ROAD
   ═══════════════════════════════════════════════════════════ */

function GameRoad({ step, walking, flip, onClickLeft, onClickRight }: {
  step: number;
  walking: boolean;
  flip: boolean;
  onClickLeft: () => void;
  onClickRight: () => void;
}) {
  const progress = Math.min(step / TOTAL, 1);
  const charX = 50 + progress * 700;

  return (
    <div className="relative">
      <svg viewBox="0 0 800 100" className="w-full h-auto select-none" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#93c5fd" /><stop offset="100%" stopColor="#dbeafe" /></linearGradient>
          <linearGradient id="gnd" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4ade80" /><stop offset="100%" stopColor="#15803d" /></linearGradient>
        </defs>

        <rect width="800" height="100" fill="url(#sky)" rx="12" />

        {/* Clouds */}
        <g opacity="0.5"><ellipse cx="110" cy="18" rx="30" ry="11" fill="white"><animateTransform attributeName="transform" type="translate" values="0,0;10,0;0,0" dur="9s" repeatCount="indefinite" /></ellipse><ellipse cx="130" cy="15" rx="20" ry="8" fill="white"><animateTransform attributeName="transform" type="translate" values="0,0;10,0;0,0" dur="9s" repeatCount="indefinite" /></ellipse></g>
        <g opacity="0.35"><ellipse cx="530" cy="14" rx="25" ry="10" fill="white"><animateTransform attributeName="transform" type="translate" values="0,0;-7,0;0,0" dur="11s" repeatCount="indefinite" /></ellipse></g>

        {/* Hills */}
        <ellipse cx="200" cy="68" rx="110" ry="18" fill="#86efac" opacity="0.5" />
        <ellipse cx="550" cy="65" rx="150" ry="22" fill="#86efac" opacity="0.5" />

        {/* Ground */}
        <rect x="0" y="70" width="800" height="30" fill="url(#gnd)" />

        {/* Road */}
        <rect x="30" y="64" width="740" height="10" rx="5" fill="#d97706" />
        <rect x="30" y="64" width="740" height="4" rx="2" fill="#fbbf24" opacity="0.35" />
        {Array.from({ length: 28 }, (_, i) => <rect key={i} x={42 + i * 26} y="66" width="2" height="6" rx="1" fill="#92400e" opacity="0.25" />)}

        {/* Checkpoints */}
        {Array.from({ length: TOTAL + 1 }, (_, i) => {
          const cx = 50 + (i / TOTAL) * 700;
          const reached = step >= i;
          if (i === TOTAL) {
            return <g key={i} transform={`translate(${cx - 3},32)`}>
              <rect x="0" y="0" width="3" height="34" rx="1.5" fill="#374151" />
              <polygon points="3,2 22,9 3,16" fill={reached ? "#22c55e" : "#9ca3af"}>
                {reached && <animate attributeName="points" values="3,2 22,9 3,16;3,2 20,8 3,16;3,2 22,9 3,16" dur="2s" repeatCount="indefinite" />}
              </polygon>
            </g>;
          }
          return <g key={i}>
            <rect x={cx - 12} y="50" width="24" height="15" rx="3" fill={reached ? "#fbbf24" : "#d1d5db"} stroke={reached ? "#d97706" : "#9ca3af"} strokeWidth="1.5" />
            {reached && <rect x={cx - 10} y="52" width="20" height="4" rx="1" fill="white" opacity="0.2" />}
            <text x={cx} y="62" textAnchor="middle" fontSize="9" fontWeight="bold" fill={reached ? "#78350f" : "#6b7280"}>{reached ? "✓" : i + 1}</text>
          </g>;
        })}

        {/* Bushes */}
        <circle cx="22" cy="76" r="7" fill="#16a34a" /><circle cx="30" cy="74" r="5" fill="#22c55e" />
        <circle cx="778" cy="75" r="6" fill="#16a34a" /><circle cx="770" cy="73" r="5" fill="#22c55e" />

        {/* Character */}
        <g transform={`translate(${charX - 20},8)`}>
          <CharacterSVG walking={walking} flip={flip} />
        </g>
      </svg>

      {/* Click zones */}
      <button
        onClick={onClickLeft}
        className="absolute left-0 top-0 w-1/2 h-full opacity-0 cursor-w-resize"
        aria-label="Zurück"
      />
      <button
        onClick={onClickRight}
        className="absolute right-0 top-0 w-1/2 h-full opacity-0 cursor-e-resize"
        aria-label="Weiter"
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ANSWER SHEET
   ═══════════════════════════════════════════════════════════ */

function AnswerSheet({ answers, nodes, ctx, currentStep, onJump }: {
  answers: Record<number, Option>;
  nodes: TreeNode[];
  ctx: Record<string, string>;
  currentStep: number;
  onJump: (step: number) => void;
}) {
  const answered = Object.keys(answers).map(Number).filter((i) => i < currentStep).sort((a, b) => a - b);
  if (answered.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="px-4 py-2 bg-gray-50 border-b border-gray-100 flex items-center gap-2">
        <span className="text-sm font-semibold text-gray-500">Dein Profil</span>
        <span className="text-xs text-gray-400 ml-auto">{answered.length}/{TOTAL} beantwortet</span>
      </div>
      <div className="divide-y divide-gray-100">
        {answered.map((i) => {
          const node = nodes[i];
          const answer = answers[i];
          // Get the options in the context as it was when answered
          return (
            <button
              key={i}
              onClick={() => onJump(i)}
              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors group"
            >
              <span className="flex-shrink-0 size-8 rounded-lg bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-lg">
                {answer.emoji}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-400">{node.question}</div>
                <div className="text-sm font-semibold text-gray-800 truncate">{answer.label}</div>
              </div>
              <span className="flex-shrink-0 text-xs text-gray-300 group-hover:text-gray-500 transition-colors">
                ändern →
              </span>
            </button>
          );
        })}
      </div>
      {/* Progress bar at bottom */}
      <div className="h-1 bg-gray-100">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
          animate={{ width: `${(answered.length / TOTAL) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   GAME BUTTON
   ═══════════════════════════════════════════════════════════ */

const COLORS = [
  { bg: "from-blue-500 to-blue-600", ring: "ring-blue-300" },
  { bg: "from-emerald-500 to-emerald-600", ring: "ring-emerald-300" },
  { bg: "from-violet-500 to-violet-600", ring: "ring-violet-300" },
  { bg: "from-orange-500 to-orange-600", ring: "ring-orange-300" },
];

function GameButton({ option, index, focused, selected, onClick }: {
  option: Option; index: number; focused: boolean; selected: boolean; onClick: () => void;
}) {
  const c = COLORS[index % COLORS.length];
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative w-full text-left rounded-xl bg-gradient-to-br ${c.bg} px-4 py-3 text-white font-semibold shadow-lg transition-all outline-none overflow-hidden ${focused ? `ring-3 ${c.ring}` : ""} ${selected ? "ring-4 ring-yellow-300 ring-offset-2" : ""}`}
    >
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none rounded-t-xl" />
      <div className="relative flex items-center gap-3">
        <span className="text-xl">{option.emoji}</span>
        <span className="text-sm leading-tight">{option.label}</span>
      </div>
      <div className="absolute top-1.5 right-2 text-[10px] font-mono bg-black/20 rounded px-1 py-0.5">{index + 1}</div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/15 rounded-b-xl" />
      {selected && <div className="absolute -top-1 -right-1 size-5 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-[10px] font-bold text-yellow-900">✓</div>}
    </motion.button>
  );
}

/* ═══════════════════════════════════════════════════════════
   MAIN
   ═══════════════════════════════════════════════════════════ */

export default function SampleToolPage() {
  const [step, setStep] = useState(0);
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<number, Option>>({});
  const [focused, setFocused] = useState(0);
  const [walking, setWalking] = useState(false);
  const [flip, setFlip] = useState(false);
  const walkRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const isResult = step >= TOTAL;
  const node = NODES[step];
  const currentAnswer = answers[step];

  const ctx = useMemo(() => {
    const c: Record<string, string> = {};
    for (let i = 0; i < TOTAL; i++) {
      if (answers[i]) c[NODES[i].id] = answers[i].value;
    }
    return c;
  }, [answers]);

  const options = useMemo(() => node?.getOptions(ctx) ?? [], [node, ctx]);
  const totalScore = useMemo(() => Object.values(answers).reduce((s, a) => s + a.score, 0), [answers]);

  useEffect(() => {
    if (currentAnswer) {
      const idx = options.findIndex((o) => o.value === currentAnswer.value);
      setFocused(idx >= 0 ? idx : 0);
    } else {
      setFocused(0);
    }
  }, [step]); // eslint-disable-line react-hooks/exhaustive-deps

  const walk = useCallback((dir: "left" | "right") => {
    setFlip(dir === "left");
    setWalking(true);
    clearTimeout(walkRef.current);
    walkRef.current = setTimeout(() => setWalking(false), 500);
  }, []);

  const goRight = useCallback(() => {
    if (!answers[step] && !isResult) return;
    if (step >= TOTAL) return;
    walk("right");
    setStep((s) => s + 1);
  }, [answers, step, isResult, walk]);

  const goLeft = useCallback(() => {
    if (step <= 0) return;
    walk("left");
    setStep((s) => s - 1);
  }, [step, walk]);

  const jumpTo = useCallback((target: number) => {
    walk(target < step ? "left" : "right");
    setStep(target);
  }, [step, walk]);

  const pick = useCallback((opt: Option) => {
    setAnswers((prev) => {
      // Clear future answers if changing a past answer (tree branches may differ)
      const next: Record<number, Option> = {};
      for (let i = 0; i < step; i++) {
        if (prev[i]) next[i] = prev[i];
      }
      next[step] = opt;
      return next;
    });
    setTimeout(() => {
      if (step < TOTAL) {
        walk("right");
        setStep((s) => s + 1);
      }
    }, 250);
  }, [step, walk]);

  const reset = useCallback(() => {
    setStep(0);
    setAnswers({});
    setStarted(false);
    setWalking(false);
  }, []);

  // Keyboard
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!started) {
        if (e.key === "Enter" || e.key === "ArrowRight") { e.preventDefault(); setStarted(true); }
        return;
      }
      if (e.key === "ArrowRight") { e.preventDefault(); goRight(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); goLeft(); }
      else if ((e.key === "ArrowUp" || e.key === "Enter") && !isResult && options.length > 0) {
        e.preventDefault();
        if (e.key === "Enter") pick(options[focused]);
        else setFocused((f) => (f - 1 + options.length) % options.length);
      }
      else if (e.key === "ArrowDown" && !isResult) { e.preventDefault(); setFocused((f) => (f + 1) % options.length); }
      else if (e.key >= "1" && e.key <= "9" && !isResult) { const i = +e.key - 1; if (i < options.length) pick(options[i]); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [started, isResult, options, focused, goRight, goLeft, pick]);

  const result = isResult ? getResult(totalScore, ctx) : null;

  /* ─── INTRO ─── */
  if (!started) {
    return (
      <>
        <ContentWrapper isFirstSection colorScheme="gradient-primary-dark">
          <div className="text-center max-w-3xl mx-auto">
            <Typo.H1 className="text-white">Workflow-Check</Typo.H1>
            <Typo.Paragraph size="sm" className="mt-4">
              Finde in 60 Sekunden heraus, ob sich Automatisierung für euch lohnt.
            </Typo.Paragraph>
          </div>
        </ContentWrapper>
        <ContentWrapper>
          <div className="text-center py-16 max-w-md mx-auto">
            <div className="mb-6 flex justify-center"><CharacterSVG walking={false} /></div>
            <Typo.H2>Bereit?</Typo.H2>
            <Typo.Paragraph className="mt-2 text-gray-600">5 Fragen, kein Tippen, sofort Ergebnis.</Typo.Paragraph>
            <button onClick={() => setStarted(true)} className="mt-8 inline-flex items-center gap-3 rounded-xl bg-gradient-to-br from-green-500 to-green-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-green-500/30 hover:scale-105 transition-all relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
              <span className="relative text-2xl">▶</span><span className="relative">Start</span>
              <span className="relative text-xs font-mono bg-black/20 rounded px-1.5 py-0.5">Enter</span>
            </button>
          </div>
        </ContentWrapper>
      </>
    );
  }

  /* ─── GAME ─── */
  return (
    <>
      <ContentWrapper isFirstSection colorScheme="gradient-primary-dark">
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1 className="text-white">Workflow-Check</Typo.H1>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <div className="max-w-3xl mx-auto space-y-6">

          {/* ── Answer Sheet (locked questions) ── */}
          <AnswerSheet answers={answers} nodes={NODES} ctx={ctx} currentStep={step} onJump={jumpTo} />

          {/* ── Current Question / Result ── */}
          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              {!isResult && node && (
                <motion.div key={node.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
                  <div className="text-sm text-gray-400 font-medium mb-1">Level {step + 1} / {TOTAL}</div>
                  <Typo.H2 className="!text-xl md:!text-2xl !mb-4">{node.question}</Typo.H2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {options.map((opt, i) => (
                      <GameButton key={opt.value} option={opt} index={i} focused={focused === i} selected={currentAnswer?.value === opt.value} onClick={() => pick(opt)} />
                    ))}
                  </div>
                  <div className="mt-3 text-center text-xs text-gray-400">↑↓ wählen · Enter bestätigen · ← → bewegen</div>
                </motion.div>
              )}

              {isResult && result && (
                <motion.div key="result" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                  <div className={`rounded-2xl border-2 p-6 md:p-10 text-center ${result.tier === "go" ? "border-green-300 bg-gradient-to-br from-green-50 to-emerald-50" : result.tier === "maybe" ? "border-amber-300 bg-gradient-to-br from-amber-50 to-yellow-50" : "border-blue-300 bg-gradient-to-br from-blue-50 to-sky-50"}`}>
                    <div className="text-5xl mb-3">{result.tier === "go" ? "🏆" : result.tier === "maybe" ? "💡" : "🌱"}</div>
                    <div className="text-sm font-medium text-gray-500 mb-1">Score: {totalScore} / {TOTAL * 3}</div>
                    <Typo.H2 className={`!mb-3 ${result.tier === "go" ? "!text-green-700" : result.tier === "maybe" ? "!text-amber-700" : "!text-blue-700"}`}>{result.headline}</Typo.H2>
                    <Typo.Paragraph className="text-gray-700 max-w-lg mx-auto">{result.description}</Typo.Paragraph>
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                      <ContactButton>{result.cta}</ContactButton>
                      <button onClick={reset} className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 text-sm"><RotateCcw className="size-4" /> Nochmal</button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Avatar + Game Road ── */}
          <GameRoad step={isResult ? TOTAL : step} walking={walking} flip={flip} onClickLeft={goLeft} onClickRight={goRight} />

        </div>
      </ContentWrapper>
    </>
  );
}
