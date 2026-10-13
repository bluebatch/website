import { KeyRound } from "lucide-react";

// Mock-Screenshot „Kosten je API-Key": ein Key je Agent, Use Case oder
// Workflow, mit Budget und Verbrauch im laufenden Monat. Stil wie PortalMock
// (gleiche Akzentfarbe, Schriftgrößen, Badges), aber ohne Sidebar.
//
// <KeyUsageMock
//   period="01.10. bis 13.10.2026"
//   rows={[{ keyName: "mail-agent", useCase: "Posteingang vorsortieren", budget: 150, spent: 61.2 }]}
// />

export interface KeyUsageRow {
  /** Name des Keys, wie er in der Abrechnung steht */
  keyName: string;
  useCase: string;
  /** Budget in Euro je Monat */
  budget: number;
  /** Verbrauch in Euro im Zeitraum */
  spent: number;
}

interface KeyUsageMockProps {
  rows: KeyUsageRow[];
  /** Zeitraum unter der Überschrift */
  period?: string;
  className?: string;
}

const accent = "#145cad";
const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

function tone(share: number) {
  if (share >= 1) return { bar: "#dc2626", label: "Limit erreicht", badge: "bg-red-50 text-red-700 ring-red-200" };
  if (share >= 0.8) return { bar: "#d97706", label: "Warnschwelle", badge: "bg-amber-50 text-amber-700 ring-amber-200" };
  return { bar: accent, label: null, badge: "" };
}

export default function KeyUsageMock({ rows, period, className = "" }: KeyUsageMockProps) {
  const total = rows.reduce((sum, r) => sum + r.spent, 0);
  return (
    <div
      className={`overflow-hidden rounded-xl bg-white text-left text-gray-900 shadow-2xl shadow-primary-900/15 ring-1 ring-gray-900/10 ${className}`}
    >
      <div className="flex flex-wrap items-center gap-2.5 border-b border-gray-200 px-4 py-3 sm:px-5">
        <span
          className="flex h-7 w-7 items-center justify-center rounded-md"
          style={{ backgroundColor: `${accent}14`, color: accent }}
        >
          <KeyRound className="h-4 w-4" aria-hidden />
        </span>
        <span className="text-[14px] font-semibold">Kosten je API-Key</span>
        <span className="ml-auto rounded-full bg-gray-900 px-2.5 py-0.5 text-[11px] text-white">
          Dieser Monat
        </span>
      </div>

      <div className="px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
        {period && <div className="mb-3 text-[11px] text-gray-500">{period}</div>}

        <div className="hidden grid-cols-[1.1fr_1.5fr_0.6fr_1.6fr] gap-3 border-b border-gray-100 pb-1.5 text-[10px] font-medium uppercase tracking-wide text-gray-400 sm:grid">
          <span>Key</span>
          <span>Use Case</span>
          <span className="text-right">Budget</span>
          <span>Verbraucht</span>
        </div>

        <div className="divide-y divide-gray-100">
          {rows.map((r) => {
            const share = r.spent / r.budget;
            const t = tone(share);
            return (
              <div
                key={r.keyName}
                className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-1.5 py-2.5 sm:grid-cols-[1.1fr_1.5fr_0.6fr_1.6fr]"
              >
                <span className="min-w-0 truncate font-mono text-[11px] text-gray-800">
                  {r.keyName}
                </span>
                <span className="order-3 col-span-2 text-[11px] text-gray-500 sm:order-none sm:col-span-1 sm:text-[12px] sm:text-gray-700">
                  {r.useCase}
                </span>
                <span className="text-right text-[11px] tabular-nums text-gray-500 sm:text-[12px] sm:text-gray-700">
                  <span className="sm:hidden">Budget </span>
                  {euro.format(r.budget)}
                </span>
                <div className="order-4 col-span-2 sm:order-none sm:col-span-1">
                  <div className="mb-1 flex items-center justify-between gap-2 text-[11px] tabular-nums">
                    <span className="font-medium text-gray-900">{euro.format(r.spent)}</span>
                    {t.label ? (
                      <span className={`rounded-full px-1.5 py-px text-[9px] font-medium ring-1 ${t.badge}`}>
                        {t.label}
                      </span>
                    ) : (
                      <span className="text-gray-400">{Math.round(share * 100)} %</span>
                    )}
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${Math.min(100, share * 100)}%`, backgroundColor: t.bar }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-2 flex items-center justify-between border-t border-gray-200 pt-2.5 text-[12px]">
          <span className="text-gray-500">{rows.length} Keys</span>
          <span className="font-semibold tabular-nums">Summe {euro.format(total)}</span>
        </div>
      </div>
    </div>
  );
}
