import { ReactNode } from "react";
import BetaBadge from "@/components/ui/beta-badge";
import {
  Activity,
  ChartColumn,
  ChevronDown,
  ChevronRight,
  Download,
  FileJson,
  FileText,
  Folder,
  Globe,
  House,
  Box,
  PanelTop,
  Plug,
  SlidersHorizontal,
  Users,
  type LucideIcon,
} from "lucide-react";

// Nachbau des Kunden-Portals „Claude AI Gateway" (Managed Claude Interface)
// für Mock-Screenshots. Aufbau wie das echte Portal (internal/claude-ai-gateway/
// portal): Sidebar links, Topbar mit Seitentitel, Inhalt mittig.
//
// <BrowserFrame url="gateway.bluebatch.io/limits">
//   <PortalMock active="limits">
//     <PortalMock.Intro>Beträge in Euro …</PortalMock.Intro>
//     <PortalMock.Card>…</PortalMock.Card>
//   </PortalMock>
// </BrowserFrame>

const nav = {
  usage: { label: "Verbrauch", icon: ChartColumn },
  limits: { label: "Limits", icon: SlidersHorizontal },
  team: { label: "Team", icon: Users },
  connectors: { label: "Connectors", icon: Plug, group: "Team-Einstellungen" },
  instructions: { label: "Anweisungen", icon: FileText, group: "Team-Einstellungen" },
  banner: { label: "Banner", icon: PanelTop, group: "Team-Einstellungen" },
  skills: { label: "Skills", icon: Box, group: "Team-Einstellungen" },
  folders: { label: "Ordner", icon: Folder, group: "Team-Einstellungen", beta: true },
  network: { label: "Netzwerk", icon: Globe, group: "Team-Einstellungen", beta: true },
  setup: { label: "Einrichtung", icon: Download, group: "System" },
  status: { label: "Status", icon: Activity, group: "System" },
  config: { label: "Konfiguration", icon: FileJson, group: "System" },
} satisfies Record<
  string,
  { label: string; icon: LucideIcon; group?: string; beta?: boolean }
>;

export type PortalPage = keyof typeof nav;

const accent = "#145cad";

interface PortalMockProps {
  children: ReactNode;
  /** Aktive Seite: bestimmt Sidebar-Markierung und Titel */
  active: PortalPage;
  /** Sidebar ausblenden (für schmale Spalten) */
  compact?: boolean;
  className?: string;
}


// Bluebatch-Zeichen wie im echten Portal (brand-mark.tsx): Bogen mit
// Verlauf #004172 → #33f8fb um ein „B" in #04507d.
function BrandMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" aria-hidden>
      <defs>
        <linearGradient id="portal-mock-arc" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#33f8fb" />
          <stop offset="1" stopColor="#004172" />
        </linearGradient>
      </defs>
      <path
        d="M6.3 19.2A9 9 0 1 1 19.6 16.8"
        fill="none"
        stroke="url(#portal-mock-arc)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <text
        x="12"
        y="16.2"
        textAnchor="middle"
        fontSize="11"
        fontWeight="700"
        fill="#04507d"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
      >
        B
      </text>
    </svg>
  );
}

function Sidebar({ active }: { active: PortalPage }) {
  const entries = Object.entries(nav) as [PortalPage, (typeof nav)[PortalPage]][];
  let lastGroup: string | undefined;
  return (
    <aside className="hidden w-48 shrink-0 flex-col border-r border-gray-200 bg-gray-50/80 p-3 md:flex">
      <div className="mb-4 flex items-center gap-2 px-1">
        <BrandMark />
        <span className="text-[12px] font-semibold text-gray-900">Claude AI Gateway</span>
      </div>
      <nav className="space-y-0.5">
        {entries.map(([key, item]) => {
          const group = "group" in item ? item.group : undefined;
          const header =
            group && group !== lastGroup ? (
              <div className="flex items-center justify-between px-2 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                {group}
                <ChevronDown className="h-3 w-3" aria-hidden />
              </div>
            ) : null;
          lastGroup = group;
          const Icon = item.icon;
          const isActive = key === active;
          return (
            <div key={key}>
              {header}
              <div
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] ${
                  isActive ? "bg-white font-medium shadow-sm ring-1 ring-gray-200" : "text-gray-600"
                }`}
                style={isActive ? { color: accent } : undefined}
              >
                <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden />
                <span className="flex-1">{item.label}</span>
                {"beta" in item && item.beta && <BetaBadge size="xs" />}
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

function PortalMock({ children, active, compact = false, className = "" }: PortalMockProps) {
  const page = nav[active];
  const Icon = page.icon;
  const group = "group" in page ? page.group : undefined;
  return (
    <div className={`flex bg-white text-left text-gray-900 ${className}`}>
      {!compact && <Sidebar active={active} />}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2.5 border-b border-gray-200 px-5 py-3">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-md"
            style={{ backgroundColor: `${accent}14`, color: accent }}
          >
            <Icon className="h-4 w-4" aria-hidden />
          </span>
          <span className="text-[14px] font-semibold">{page.label}</span>
          {"beta" in page && page.beta && <BetaBadge size="xs" />}
        </div>
        <div className="flex items-center gap-1 px-5 pt-3 text-[10px] text-gray-400">
          <House className="h-3 w-3" aria-hidden />
          {group && (
            <>
              <ChevronRight className="h-3 w-3" aria-hidden />
              {group}
            </>
          )}
          <ChevronRight className="h-3 w-3" aria-hidden />
          <span className="text-gray-500">{page.label}</span>
        </div>
        <div className="space-y-4 px-5 pb-5 pt-3 text-[12px]">{children}</div>
      </div>
    </div>
  );
}

// ── Bausteine für den Inhalt ────────────────────────────────────────────────

function Intro({ children }: { children: ReactNode }) {
  return <p className="text-[12px] leading-relaxed text-gray-500">{children}</p>;
}

function Section({ children, title }: { children: ReactNode; title: string }) {
  return (
    <div>
      <div className="mb-2 text-[12px] font-semibold text-gray-900">{title}</div>
      {children}
    </div>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white p-3 ${className}`}>{children}</div>
  );
}

type Tone = "ok" | "warn" | "danger" | "muted" | "accent";
const toneClass: Record<Tone, string> = {
  ok: "bg-green-50 text-green-700 ring-green-200",
  warn: "bg-amber-50 text-amber-700 ring-amber-200",
  danger: "bg-red-50 text-red-700 ring-red-200",
  muted: "bg-gray-100 text-gray-600 ring-gray-200",
  accent: "bg-blue-50 text-[#145cad] ring-blue-200",
};

function Badge({ children, tone = "muted" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-px text-[10px] font-medium ring-1 ${toneClass[tone]}`}
    >
      {children}
    </span>
  );
}

function Switch({ on = true }: { on?: boolean }) {
  return (
    <span
      className={`inline-flex h-4 w-7 shrink-0 items-center rounded-full p-0.5 ${
        on ? "justify-end" : "justify-start bg-gray-300"
      }`}
      style={on ? { backgroundColor: accent } : undefined}
      aria-hidden
    >
      <span className="h-3 w-3 rounded-full bg-white shadow" />
    </span>
  );
}

function Button({
  children,
  variant = "secondary",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-medium ${
        variant === "primary" ? "text-white" : "bg-white text-gray-700 ring-1 ring-gray-300"
      }`}
      style={variant === "primary" ? { backgroundColor: accent } : undefined}
    >
      {children}
    </span>
  );
}

function Chips({ items, active = 0 }: { items: string[]; active?: number }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((label, i) => (
        <span
          key={label}
          className={`rounded-full px-2.5 py-0.5 text-[11px] ${
            i === active ? "bg-gray-900 text-white" : "bg-white text-gray-600 ring-1 ring-gray-200"
          }`}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function Field({
  children,
  label,
  placeholder = false,
  className = "",
}: {
  children: ReactNode;
  label?: string;
  /** Inhalt als Platzhalter (grau) darstellen */
  placeholder?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      {label && <div className="mb-1 text-[10px] font-medium text-gray-500">{label}</div>}
      <div
        className={`rounded-md border border-gray-300 bg-white px-2 py-1 text-[11px] ${
          placeholder ? "text-gray-400" : "text-gray-800"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Avatar({ children, color = "#64748b" }: { children: ReactNode; color?: string }) {
  return (
    <span
      className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[9px] font-semibold text-white"
      style={{ backgroundColor: color }}
    >
      {children}
    </span>
  );
}

function Stats({ items }: { items: { label: string; value: ReactNode }[] }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {items.map((s) => (
        <div key={s.label} className="rounded-lg border border-gray-200 bg-white px-3 py-2">
          <div className="text-[10px] text-gray-500">{s.label}</div>
          <div className="text-[16px] font-semibold tabular-nums text-gray-900">{s.value}</div>
        </div>
      ))}
    </div>
  );
}

function Bars({ values, labels }: { values: number[]; labels?: string[] }) {
  const max = Math.max(...values);
  return (
    <div>
      <div className="flex h-24 items-end gap-[3px]">
        {values.map((v, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-[2px]"
            style={{ height: `${Math.max(4, (v / max) * 100)}%`, backgroundColor: accent, opacity: 0.85 }}
          />
        ))}
      </div>
      {labels && (
        <div className="mt-1 flex justify-between text-[9px] tabular-nums text-gray-400">
          {labels.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      )}
    </div>
  );
}

function Table({
  columns,
  rows,
  alignRight = [],
}: {
  columns: string[];
  rows: ReactNode[][];
  /** Spalten-Indizes, die rechtsbündig stehen (Beträge, Tokens) */
  alignRight?: number[];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full text-[11px]">
        <thead className="bg-gray-50 text-gray-500">
          <tr>
            {columns.map((c, i) => (
              <th
                key={c}
                className={`px-3 py-1.5 font-medium ${alignRight.includes(i) ? "text-right" : "text-left"}`}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((r, ri) => (
            <tr key={ri}>
              {r.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-3 py-1.5 text-gray-800 ${
                    alignRight.includes(ci) ? "text-right tabular-nums" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

PortalMock.Intro = Intro;
PortalMock.Section = Section;
PortalMock.Card = Card;
PortalMock.Badge = Badge;
PortalMock.Switch = Switch;
PortalMock.Button = Button;
PortalMock.Chips = Chips;
PortalMock.Field = Field;
PortalMock.Avatar = Avatar;
PortalMock.Stats = Stats;
PortalMock.Bars = Bars;
PortalMock.Table = Table;

export default PortalMock;
