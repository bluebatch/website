import {
  ReactNode,
  ReactElement,
  Children,
  isValidElement,
  cloneElement,
} from "react";

/**
 * WorkflowDiagram
 *
 * Unified diagram primitive for the 7 Steuerberater-Use-Case-Pages. Replaces
 * the locally inlined `WorkflowDiagram`, `PipelineDiagram`, `SyncDiagram` and
 * `BranchingWorkflowDiagram` functions inside the page files.
 *
 * Four variants:
 *
 * 1) variant="linear" — N steps, left-to-right on md+, top-to-bottom on
 *    mobile. Each step rendered as a card with number, title, description.
 *    Arrows between steps. Used by belegpruefung, dokumentenverarbeitung,
 *    jahresabschluss-ki.
 *
 * 2) variant="pipeline-with-rejects" — Like linear, but steps can additionally
 *    render a `reject` chip. Wrapper card with a footnote slot. Used by
 *    mandanten-onboarding.
 *
 * 3) variant="branching" — Trigger node → optional intermediate Steps in a
 *    Bridge → fan-out into Branches → Sink node. Used by mandantenkommunikation.
 *
 * 4) variant="sync" — Two outer Systems (left/right) with an inner Bridge of
 *    Steps. Used by datev-jira-task-orchestration.
 *
 * Sub-Components: WorkflowDiagram.Step, .Trigger, .Branch, .Sink, .System,
 * .Bridge, .Footnote.
 *
 * Colors: only primary-* / secondary-* / cta-* / gray-* Tailwind tokens.
 * No hardcoded HEX, no amber/yellow/purple defaults.
 */

type WorkflowVariant =
  | "linear"
  | "pipeline-with-rejects"
  | "branching"
  | "sync"
  | "circular";

interface WorkflowDiagramProps {
  children: ReactNode;
  variant?: WorkflowVariant;
  className?: string;
}

// ------------------------------------------------------------------
// Sub-component: Step
// ------------------------------------------------------------------

interface StepProps {
  n: number;
  title: string;
  description?: string;
  reject?: string;
  /** Injected by the parent — do not set manually. */
  _variant?: WorkflowVariant;
  /** Injected by the parent — do not set manually. */
  _isLast?: boolean;
  /** Injected by the parent — do not set manually. */
  _stride?: "linear" | "bridge";
}

function Step({
  n,
  title,
  description,
  reject,
  _variant = "linear",
  _isLast = false,
  _stride = "linear",
}: StepProps) {
  const numberClass =
    _stride === "bridge"
      ? "bg-secondary-600 text-primary-900"
      : "bg-primary-600 text-white";

  return (
    <div className="relative flex flex-col">
      <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div
          className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${numberClass}`}
        >
          {String(n).padStart(2, "0")}
        </div>
        <div className="mt-4 text-base font-semibold text-gray-900">
          {title}
        </div>
        {description && (
          <div className="mt-2 text-sm leading-relaxed text-gray-600">
            {description}
          </div>
        )}
        {_variant === "pipeline-with-rejects" && reject && (
          <div className="mt-3 inline-flex items-center gap-1.5 self-start rounded-full bg-cta-50 px-2.5 py-1 text-xs font-medium text-cta-700">
            <svg
              className="h-3 w-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
            {reject}
          </div>
        )}
      </div>
      {!_isLast && (
        <>
          {/* Horizontal arrow (md+) */}
          <div
            className="pointer-events-none absolute right-[-14px] top-1/2 hidden -translate-y-1/2 md:block"
            aria-hidden="true"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={
                _stride === "bridge" ? "text-secondary-500" : "text-primary-500"
              }
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </div>
          {/* Vertical arrow (mobile) */}
          <div className="flex justify-center py-2 md:hidden" aria-hidden="true">
            <svg
              className={
                _stride === "bridge"
                  ? "h-6 w-6 rotate-90 text-secondary-500"
                  : "h-6 w-6 rotate-90 text-primary-500"
              }
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </div>
        </>
      )}
    </div>
  );
}

// ------------------------------------------------------------------
// Sub-component: Footnote (pipeline-with-rejects)
// ------------------------------------------------------------------

interface FootnoteProps {
  children: ReactNode;
  tone?: "danger" | "info";
}

function Footnote({ children, tone = "danger" }: FootnoteProps) {
  const toneClasses =
    tone === "danger"
      ? "bg-cta-50 text-cta-900"
      : "bg-secondary-50 text-secondary-900";
  const iconColor = tone === "danger" ? "text-cta-600" : "text-secondary-600";

  return (
    <div
      className={`mt-6 flex items-start gap-3 rounded-2xl p-4 text-sm ${toneClasses}`}
    >
      <svg
        className={`mt-0.5 h-5 w-5 flex-shrink-0 ${iconColor}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
      <div>{children}</div>
    </div>
  );
}

// ------------------------------------------------------------------
// Sub-component: Trigger (branching)
// ------------------------------------------------------------------

interface TriggerProps {
  title: string;
  subtitle?: string;
}

function Trigger({ title, subtitle }: TriggerProps) {
  return (
    <div className="flex justify-center">
      <div className="inline-flex w-64 flex-col items-center rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600">
          <svg
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
        </div>
        <p className="mt-3 text-base font-bold text-gray-900">{title}</p>
        {subtitle && (
          <p className="mt-1 text-xs uppercase tracking-wide text-gray-500">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Sub-component: Sink (branching)
// ------------------------------------------------------------------

interface SinkProps {
  title: string;
  subtitle?: string;
}

function Sink({ title, subtitle }: SinkProps) {
  return (
    <div className="flex justify-center">
      <div className="inline-flex w-64 flex-col items-center rounded-2xl border border-primary-200 bg-primary-50 p-5 text-center shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white">
          <svg
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375"
            />
          </svg>
        </div>
        <p className="mt-3 text-base font-bold text-gray-900">{title}</p>
        {subtitle && (
          <p className="mt-1 text-xs uppercase tracking-wide text-gray-500">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Sub-component: Branch (branching)
// ------------------------------------------------------------------

interface BranchProps {
  label: string;
  tone?: "primary" | "secondary" | "cta";
  children: ReactNode;
}

function Branch({ label, tone = "primary", children }: BranchProps) {
  const toneClass =
    tone === "secondary"
      ? "bg-gradient-to-r from-secondary-500 to-secondary-700 text-primary-900"
      : tone === "cta"
        ? "bg-gradient-to-r from-cta-500 to-cta-600 text-white"
        : "bg-gradient-to-r from-primary-500 to-primary-700 text-white";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div
        className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${toneClass}`}
      >
        {label}
      </div>
      <div className="mt-3 text-sm leading-relaxed text-gray-700">
        {children}
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Sub-component: System (sync)
// ------------------------------------------------------------------

interface SystemProps {
  name: string;
  side?: "left" | "right";
  description?: string;
}

function System({ name, side = "left", description }: SystemProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl border-2 border-primary-300 bg-white p-6 text-center shadow-md ${
        side === "right" ? "lg:order-3" : "lg:order-1"
      }`}
    >
      <div className="text-xs font-bold uppercase tracking-widest text-primary-700">
        System
      </div>
      <div className="mt-2 text-2xl font-bold text-gray-900">{name}</div>
      {description && (
        <p className="mt-2 text-xs text-gray-600">{description}</p>
      )}
    </div>
  );
}

// ------------------------------------------------------------------
// Sub-component: Bridge (sync) — container that holds inner Steps
// ------------------------------------------------------------------

interface BridgeProps {
  children: ReactNode;
}

function Bridge({ children }: BridgeProps) {
  const items = Children.toArray(children).filter(
    (c) => isValidElement(c) && c.type === Step,
  );
  const total = items.length;

  return (
    <div className="lg:order-2">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 lg:gap-3">
        {items.map((child, idx) => {
          if (!isValidElement(child)) return child;
          return cloneElement(child as ReactElement<StepProps>, {
            _variant: "sync",
            _isLast: idx === total - 1,
            _stride: "bridge",
          });
        })}
      </div>
    </div>
  );
}

// ------------------------------------------------------------------
// Layout helpers
// ------------------------------------------------------------------

function renderLinear(children: ReactNode, variant: WorkflowVariant) {
  const steps = Children.toArray(children).filter(
    (c) => isValidElement(c) && c.type === Step,
  );
  const footnote = Children.toArray(children).find(
    (c) => isValidElement(c) && c.type === Footnote,
  );
  const total = steps.length;
  const cols =
    total <= 4
      ? "md:grid-cols-4"
      : total === 5
        ? "md:grid-cols-5"
        : "md:grid-cols-6";

  const grid = (
    <div className={`grid grid-cols-1 gap-4 ${cols} md:gap-2 items-stretch`}>
      {steps.map((child, idx) => {
        if (!isValidElement(child)) return child;
        return cloneElement(child as ReactElement<StepProps>, {
          _variant: variant,
          _isLast: idx === total - 1,
          _stride: "linear",
        });
      })}
    </div>
  );

  if (variant === "pipeline-with-rejects") {
    return (
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm md:p-10">
        {grid}
        {footnote}
      </div>
    );
  }

  return grid;
}

function renderBranching(children: ReactNode) {
  const childArr = Children.toArray(children);
  const trigger = childArr.find(
    (c) => isValidElement(c) && c.type === Trigger,
  );
  const sink = childArr.find((c) => isValidElement(c) && c.type === Sink);
  const branches = childArr.filter(
    (c) => isValidElement(c) && c.type === Branch,
  );

  return (
    <div>
      {trigger}

      {/* Splitter SVG */}
      <div className="relative mt-2 h-12">
        <svg
          className="absolute inset-0 h-full w-full text-gray-400"
          viewBox="0 0 600 60"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 300 0 L 300 20 L 100 30 L 100 60"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 300 0 L 300 60"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 300 0 L 300 20 L 500 30 L 500 60"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
        {branches}
      </div>

      {/* Joiner SVG */}
      {sink && (
        <>
          <div className="relative mt-2 h-12">
            <svg
              className="absolute inset-0 h-full w-full text-gray-400"
              viewBox="0 0 600 60"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 100 0 L 100 30 L 300 40 L 300 60"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 300 0 L 300 60"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M 500 0 L 500 30 L 300 40 L 300 60"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
          {sink}
        </>
      )}
    </div>
  );
}

function renderCircular(children: ReactNode, variant: WorkflowVariant) {
  const steps = Children.toArray(children).filter(
    (c) => isValidElement(c) && c.type === Step,
  );
  const total = steps.length;
  if (total === 0) return null;

  const radiusPct = 35;

  return (
    <>
      {/* Desktop: circular layout */}
      <div className="hidden md:block">
        <div className="relative mx-auto aspect-square w-full max-w-3xl">
          <svg
            className="absolute inset-0 h-full w-full text-primary-300"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="wfd-circular-tip"
                viewBox="0 0 10 10"
                refX="5"
                refY="5"
                markerWidth="4"
                markerHeight="4"
                orient="auto"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
              </marker>
            </defs>
            <circle
              cx="50"
              cy="50"
              r={radiusPct}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              strokeDasharray="1.5 1.5"
            />
            {[0, 1, 2, 3].map((i) => {
              const angleDeg = 45 + i * 90;
              const a = ((angleDeg - 90) * Math.PI) / 180;
              const x = 50 + radiusPct * Math.cos(a);
              const y = 50 + radiusPct * Math.sin(a);
              const len = 2.5;
              const tx1 = x - len * Math.sin(a);
              const ty1 = y + len * Math.cos(a);
              const tx2 = x + len * Math.sin(a);
              const ty2 = y - len * Math.cos(a);
              return (
                <line
                  key={i}
                  x1={tx1}
                  y1={ty1}
                  x2={tx2}
                  y2={ty2}
                  stroke="currentColor"
                  strokeWidth="0.6"
                  markerEnd="url(#wfd-circular-tip)"
                />
              );
            })}
          </svg>
          {steps.map((child, idx) => {
            const angle = (idx / total) * 2 * Math.PI - Math.PI / 2;
            const x = 50 + radiusPct * Math.cos(angle);
            const y = 50 + radiusPct * Math.sin(angle);
            if (!isValidElement(child)) return child;
            return (
              <div
                key={idx}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className="absolute w-48"
              >
                {cloneElement(child as ReactElement<StepProps>, {
                  _variant: variant,
                  _isLast: true,
                  _stride: "linear",
                })}
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: vertical list with arrows */}
      <div className="md:hidden flex flex-col">
        {steps.map((child, idx) => {
          if (!isValidElement(child)) return child;
          return cloneElement(child as ReactElement<StepProps>, {
            key: idx,
            _variant: variant,
            _isLast: idx === total - 1,
            _stride: "linear",
          });
        })}
      </div>
    </>
  );
}

function renderSync(children: ReactNode) {
  // Two Systems and a Bridge with inner Steps
  const childArr = Children.toArray(children);
  const systems = childArr.filter(
    (c) => isValidElement(c) && c.type === System,
  );
  const bridge = childArr.find(
    (c) => isValidElement(c) && c.type === Bridge,
  );

  const left = systems.find(
    (c) => isValidElement(c) && (c.props as SystemProps).side !== "right",
  );
  const right = systems.find(
    (c) => isValidElement(c) && (c.props as SystemProps).side === "right",
  );

  return (
    <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[1fr_2fr_1fr]">
      {left}
      <div className="relative">
        {/* Outer arrows hinting bidirectional sync */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block"
        >
          <svg className="h-full w-full text-secondary-500" viewBox="0 0 400 200" preserveAspectRatio="none">
            <defs>
              <marker
                id="wfd-arrow-end"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
              </marker>
            </defs>
            <path
              d="M 10 40 L 390 40"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#wfd-arrow-end)"
            />
            <path
              d="M 390 160 L 10 160"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              markerEnd="url(#wfd-arrow-end)"
            />
          </svg>
        </div>
        <div className="relative z-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          {bridge}
        </div>
      </div>
      {right}
    </div>
  );
}

// ------------------------------------------------------------------
// Main
// ------------------------------------------------------------------

function WorkflowDiagram({
  children,
  variant = "linear",
  className = "",
}: WorkflowDiagramProps) {
  return (
    <div className={`mt-10 ${className}`}>
      {variant === "branching"
        ? renderBranching(children)
        : variant === "sync"
          ? renderSync(children)
          : variant === "circular"
            ? renderCircular(children, variant)
            : renderLinear(children, variant)}
    </div>
  );
}

WorkflowDiagram.Step = Step;
WorkflowDiagram.Footnote = Footnote;
WorkflowDiagram.Trigger = Trigger;
WorkflowDiagram.Sink = Sink;
WorkflowDiagram.Branch = Branch;
WorkflowDiagram.System = System;
WorkflowDiagram.Bridge = Bridge;

export default WorkflowDiagram;
