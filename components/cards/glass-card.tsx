"use client";

import { ReactNode } from "react";

// --- Title sub-component ---

interface GlassCardTitleProps {
  className?: string;
  children: ReactNode;
}

export function GlassCardTitle({
  className = "",
  children,
}: GlassCardTitleProps) {
  return (
    <h3 className={`text-2xl font-bold text-white sm:text-3xl ${className}`}>
      {children}
    </h3>
  );
}

// --- Description sub-component ---

interface GlassCardDescriptionProps {
  className?: string;
  children: ReactNode;
}

export function GlassCardDescription({
  className = "",
  children,
}: GlassCardDescriptionProps) {
  return (
    <p
      className={`mt-3 text-sm leading-relaxed text-blue-100/70 ${className}`}
    >
      {children}
    </p>
  );
}

// --- Arrow sub-component ---

interface GlassCardArrowProps {
  className?: string;
  children?: ReactNode;
}

export function GlassCardArrow({
  className = "",
  children,
}: GlassCardArrowProps) {
  return (
    <span
      className={`mt-6 inline-flex items-center gap-1 text-sm font-medium text-blue-300 transition-colors group-hover:text-white ${className}`}
    >
      {children ?? "Mehr erfahren"}
      <svg
        className="h-4 w-4 transition-transform group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </span>
  );
}

// --- Keyframe style (deduplicated via suppressHydrationWarning) ---

function GlassFloatStyle() {
  return (
    <style
      suppressHydrationWarning
      dangerouslySetInnerHTML={{
        __html: `
@keyframes glass-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
`,
      }}
    />
  );
}

// --- Main component ---

interface GlassCardProps {
  className?: string;
  children: ReactNode;
  float?: boolean;
  floatDelay?: string;
}

function GlassCard({
  className = "",
  children,
  float = false,
  floatDelay = "0s",
}: GlassCardProps) {
  return (
    <>
      {float && <GlassFloatStyle />}
      <div
        className={`group relative rounded-2xl bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:bg-white/[0.15] hover:shadow-lg hover:shadow-purple-500/10 ${className}`}
        style={{
          boxShadow:
            "0 0 30px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          ...(float
            ? {
                animation: `glass-float 6s ease-in-out infinite`,
                animationDelay: floatDelay,
              }
            : {}),
        }}
      >
        {/* Content */}
        <div className="relative">{children}</div>

        {/* Inner glow overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-br from-white/5 to-transparent" />

        {/* Gradient border via mask-composite (on top of everything) */}
        <div
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl"
          style={{
            padding: "2px",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.08))",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      </div>
    </>
  );
}

GlassCard.Title = GlassCardTitle;
GlassCard.Description = GlassCardDescription;
GlassCard.Arrow = GlassCardArrow;

export default GlassCard;
