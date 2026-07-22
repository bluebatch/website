"use client";

import { useState, useEffect, useCallback, ReactNode } from "react";
import { motion } from "framer-motion";
import { Link as LinkIcon, ArrowLeft, Plus, Minus } from "lucide-react";
import Link from "next/link";

// --- Stepper Buttons (+/- next to value) ---

function StepperButton({
  onClick,
  disabled,
  children,
  ariaLabel,
}: {
  onClick: () => void;
  disabled?: boolean;
  children: ReactNode;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      className="flex items-center justify-center w-7 h-7 rounded-md border border-gray-200 bg-white text-gray-600 hover:border-primary-400 hover:text-primary-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
    >
      {children}
    </button>
  );
}

// --- Formatters ---

export function formatEur(value: number): string {
  return value.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export function formatDecimal(value: number): string {
  return value.toLocaleString("de-DE", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}

/** Human-readable duration. 75 → "1 Std 15 Min", 480 → "8 Std", 8 → "8 Min". */
export function formatMinutes(minutes: number): string {
  const m = Math.round(minutes);
  if (m < 60) return `${m} Min`;
  const h = Math.floor(m / 60);
  const rest = m % 60;
  if (rest === 0) return `${h} Std`;
  return `${h} Std ${rest} Min`;
}

// --- Param helper ---

export function paramNum(params: Record<string, string | undefined>, key: string, fallback: number): number {
  const v = params[key];
  if (v == null) return fallback;
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

// --- Stacked Bar ---

interface BarSegment {
  label: string;
  value: number;
  color: string;
}

export function StackedBar({ segments, maxValue }: { segments: BarSegment[]; maxValue: number }) {
  return (
    <div className="space-y-1">
      <div className="flex h-10 rounded-lg overflow-hidden bg-gray-100">
        {segments.map((seg, i) => {
          const width = maxValue > 0 ? (Math.max(0, seg.value) / maxValue) * 100 : 0;
          return (
            <motion.div
              key={i}
              className={`${seg.color} flex items-center justify-center text-xs font-semibold text-white`}
              initial={{ width: 0 }}
              animate={{ width: `${width}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {width > 12 && formatEur(seg.value)}
            </motion.div>
          );
        })}
      </div>
      <div className="flex gap-4 text-xs text-gray-500">
        {segments.map((seg, i) => (
          <div key={i} className="flex items-center gap-1">
            <span className={`inline-block w-2.5 h-2.5 rounded-sm ${seg.color}`} />
            {seg.label}
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Result Metric ---

export function ResultMetric({
  label,
  value,
  sub,
  variant = "default",
}: {
  label: string;
  value: string;
  sub?: string;
  variant?: "default" | "success" | "danger" | "highlight";
}) {
  const valueStyles = {
    default: "text-gray-900",
    success: "text-green-700",
    danger: "text-red-600",
    highlight: "text-primary-700",
  };

  return (
    <div>
      <p className="text-xs text-gray-400 mb-0.5">{label}</p>
      <p className={`text-2xl md:text-3xl font-bold leading-tight ${valueStyles[variant]}`}>
        {value}
      </p>
      {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
    </div>
  );
}

// --- Slider ---

export function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step,
  unit,
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  unit?: string;
  /** Optional formatter for the displayed value + boundary labels. When set,
   *  the `unit` suffix is omitted (the formatter is expected to handle it). */
  format?: (v: number) => string;
}) {
  const rawPct = max > min ? ((value - min) / (max - min)) * 100 : 0;
  // Cap visual fill at 0-100 even when value sits outside [min,max]
  // (e.g. when a higher value is passed in via URL params from a subpage).
  const pct = Math.min(100, Math.max(0, rawPct));
  const showFormatted = !!format;
  const dec = () => onChange(Math.max(min, Math.min(max, value) - step));
  const inc = () => onChange(Math.min(max, Math.max(min, value) + step));

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <div className="flex items-center gap-2">
          <StepperButton onClick={dec} disabled={value <= min} ariaLabel={`${label} verringern`}>
            <Minus className="w-3.5 h-3.5" />
          </StepperButton>
          <span className="text-lg font-bold text-primary-700 min-w-[3.5rem] text-center tabular-nums">
            {showFormatted ? format!(value) : value.toLocaleString("de-DE")}
            {!showFormatted && unit && (
              <span className="text-sm font-normal text-gray-500 ml-1">{unit}</span>
            )}
          </span>
          <StepperButton onClick={inc} disabled={value >= max} ariaLabel={`${label} erhöhen`}>
            <Plus className="w-3.5 h-3.5" />
          </StepperButton>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-2 rounded-full bg-gray-200" />
        <div
          className="absolute top-1/2 -translate-y-1/2 left-0 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="relative w-full appearance-none bg-transparent cursor-pointer z-10
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-primary-500 [&::-webkit-slider-thumb]:shadow-md
            [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-primary-500
            [&::-moz-range-thumb]:shadow-md"
        />
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{showFormatted ? format!(min) : min}</span>
        <span>{showFormatted ? format!(max) : max}</span>
      </div>
    </div>
  );
}

// --- Service Toggle ---

export function ServiceToggle({
  enabled,
  onToggle,
  activeMrr,
}: {
  enabled: boolean;
  onToggle: () => void;
  activeMrr: number;
}) {
  return (
    <div>
      <p className="text-xs text-gray-400 mb-1">Service / Monat</p>
      <p className="text-lg font-bold text-gray-900">{formatEur(activeMrr)}</p>
      <button
        onClick={onToggle}
        className="mt-1.5 flex items-center gap-2 cursor-pointer group"
      >
        <span
          className={`relative inline-block w-8 h-[18px] rounded-full transition-colors ${
            enabled ? "bg-primary-500" : "bg-gray-300"
          }`}
        >
          <span
            className={`absolute top-[2px] left-[2px] w-[14px] h-[14px] rounded-full bg-white shadow transition-transform ${
              enabled ? "translate-x-[14px]" : ""
            }`}
          />
        </span>
        <span className="text-xs text-gray-400 group-hover:text-gray-600 transition-colors">
          {enabled ? "Wartung & Monitoring" : "nur Hosting"}
        </span>
      </button>
    </div>
  );
}

// --- Tier system (shared key small/medium/large, separate ranges per metric) ---

export interface Tier {
  key: string;
  label: string;
  min: number;
  max: number;
}

/** Detect which tier a value belongs to. Boundary values go to the upper tier
 * unless they equal the max of the highest tier. */
export function detectTier(value: number, tiers: Tier[]): Tier {
  for (let i = 0; i < tiers.length; i++) {
    const t = tiers[i];
    const isLast = i === tiers.length - 1;
    if (value >= t.min && (isLast ? value <= t.max : value < t.max)) return t;
  }
  if (value < tiers[0].min) return tiers[0];
  return tiers[tiers.length - 1];
}

export function clampToTier(value: number, tier: Tier): number {
  return Math.min(tier.max, Math.max(tier.min, value));
}

/** Tier option visible in the selector — pure metadata (no min/max). */
export interface TierOption {
  key: string;
  label: string;
  description: string;
}

/** Buttons Small/Medium/Large with description text — shared selector for
 *  multiple sliders on the same page. */
export function TierSelector({
  options,
  activeKey,
  onSelect,
}: {
  options: TierOption[];
  activeKey: string;
  onSelect: (key: string) => void;
}) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {options.map((o) => {
        const isActive = o.key === activeKey;
        return (
          <button
            key={o.key}
            type="button"
            onClick={() => onSelect(o.key)}
            className={`px-3 py-3 text-left rounded-lg border transition-colors cursor-pointer ${
              isActive
                ? "bg-primary-700 border-primary-700 text-white"
                : "bg-white border-gray-200 text-gray-700 hover:border-primary-400 hover:text-primary-700"
            }`}
          >
            <div className="text-sm font-semibold">{o.label}</div>
            <div
              className={`text-[11px] leading-snug mt-1 ${
                isActive ? "text-primary-100" : "text-gray-500"
              }`}
            >
              {o.description}
            </div>
          </button>
        );
      })}
    </div>
  );
}

/** Slider locked to a specific tier (controlled from outside). When the parent
 *  switches tiers, value is expected to be snapped externally — this component
 *  only enforces the visual clamp. */
export function RangeSlider({
  label,
  value,
  onChange,
  tier,
  step,
  unit = "€",
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  tier: Tier;
  step: number;
  unit?: string;
}) {
  const displayValue = clampToTier(value, tier);
  const pct =
    tier.max > tier.min
      ? ((displayValue - tier.min) / (tier.max - tier.min)) * 100
      : 0;
  const dec = () => onChange(clampToTier(displayValue - step, tier));
  const inc = () => onChange(clampToTier(displayValue + step, tier));

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <div className="flex items-center gap-2">
          <StepperButton onClick={dec} disabled={displayValue <= tier.min} ariaLabel={`${label} verringern`}>
            <Minus className="w-3.5 h-3.5" />
          </StepperButton>
          <span className="text-lg font-bold text-primary-700 min-w-[3.5rem] text-center tabular-nums">
            {displayValue.toLocaleString("de-DE")}
            {unit && <span className="text-sm font-normal text-gray-500 ml-1">{unit}</span>}
          </span>
          <StepperButton onClick={inc} disabled={displayValue >= tier.max} ariaLabel={`${label} erhöhen`}>
            <Plus className="w-3.5 h-3.5" />
          </StepperButton>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-2 rounded-full bg-gray-200" />
        <div
          className="absolute top-1/2 -translate-y-1/2 left-0 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={tier.min}
          max={tier.max}
          step={step}
          value={displayValue}
          onChange={(e) => onChange(clampToTier(Number(e.target.value), tier))}
          className="relative w-full appearance-none bg-transparent cursor-pointer z-10
            [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-primary-500 [&::-webkit-slider-thumb]:shadow-md
            [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-primary-500
            [&::-moz-range-thumb]:shadow-md"
        />
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{tier.min.toLocaleString("de-DE")} {unit}</span>
        <span>{tier.max.toLocaleString("de-DE")} {unit}</span>
      </div>
    </div>
  );
}

// --- Calculator Shell (shared layout) ---

export function CalculatorShell({
  icon,
  label,
  description,
  children,
}: {
  icon: ReactNode;
  label: string;
  description: string;
  children: ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 min-w-12 min-h-12 shrink-0 rounded-full bg-primary-800 flex items-center justify-center">
            {icon}
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{label}</h2>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
        <button
          onClick={copyLink}
          className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary-600 transition-colors cursor-pointer"
        >
          <LinkIcon className="w-4 h-4" />
          {copied ? "Kopiert!" : "Link kopieren"}
        </button>
      </div>
      {children}
    </div>
  );
}

// --- URL Sync Hook ---

export function useUrlSync(basePath: string, values: Record<string, string | number | boolean>) {
  const syncUrl = useCallback(() => {
    const params = new URLSearchParams();
    for (const [key, val] of Object.entries(values)) {
      if (typeof val === "boolean") {
        if (!val) params.set(key, "0");
      } else {
        params.set(key, String(val));
      }
    }
    window.history.replaceState(null, "", `${basePath}?${params.toString()}`);
  }, [basePath, ...Object.values(values)]);

  useEffect(() => { syncUrl(); }, [syncUrl]);
}

// --- Back Link ---

export function BackToOverview() {
  return (
    <Link
      href="/roi-rechner"
      className="inline-flex items-center gap-2 text-sm text-primary-600 hover:text-primary-800 font-medium transition-colors"
    >
      <ArrowLeft className="w-4 h-4" /> Alle Rechner
    </Link>
  );
}
