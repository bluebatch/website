import { ReactNode } from "react";
import { Copy, KeyRound } from "lucide-react";

// Mock-Screenshot eines API-Keys für das Gateway: Name, maskierter Key und
// die Angaben, die zum Key gehören (Adresse, Modelle, Budget). Stil wie
// PortalMock. Keine echten Keys einsetzen.
//
// <ApiKeyMock>
//   <ApiKeyMock.Title>Mail-Agent</ApiKeyMock.Title>
//   <ApiKeyMock.Key>sk-••••••••••••3f9a</ApiKeyMock.Key>
//   <ApiKeyMock.Row label="Base URL">https://…</ApiKeyMock.Row>
//   <ApiKeyMock.Budget spent={61.2} budget={150}>setzt alle 30 Tage zurück</ApiKeyMock.Budget>
// </ApiKeyMock>

const accent = "#145cad";
const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

function ApiKeyMock({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-xl bg-white text-left text-gray-900 shadow-2xl shadow-primary-900/15 ring-1 ring-gray-900/10 ${className}`}
    >
      {children}
    </div>
  );
}

function Title({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-gray-200 px-5 py-3">
      <span
        className="flex h-7 w-7 items-center justify-center rounded-md"
        style={{ backgroundColor: `${accent}14`, color: accent }}
      >
        <KeyRound className="h-4 w-4" aria-hidden />
      </span>
      <div className="min-w-0">
        <div className="text-[10px] font-medium uppercase tracking-wide text-gray-400">API-Key</div>
        <div className="truncate text-[14px] font-semibold">{children}</div>
      </div>
      <span className="ml-auto inline-flex items-center rounded-full bg-green-50 px-2 py-px text-[10px] font-medium text-green-700 ring-1 ring-green-200">
        Aktiv
      </span>
    </div>
  );
}

function Key({ children }: { children: ReactNode }) {
  return (
    <div className="px-5 pt-4">
      <div className="flex items-center gap-2 rounded-md border border-gray-300 bg-gray-50 px-2.5 py-1.5">
        <span className="min-w-0 flex-1 truncate font-mono text-[12px] text-gray-800">{children}</span>
        <Copy className="h-3.5 w-3.5 shrink-0 text-gray-400" aria-hidden />
      </div>
    </div>
  );
}

function Row({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-gray-100 px-5 py-2 last:border-b-0">
      <span className="shrink-0 text-[11px] text-gray-500">{label}</span>
      <span className="min-w-0 truncate text-right text-[12px] text-gray-800">{children}</span>
    </div>
  );
}

function Rows({ children }: { children: ReactNode }) {
  return <div className="mt-3">{children}</div>;
}

function Budget({ children, spent, budget }: { children?: ReactNode; spent: number; budget: number }) {
  const share = Math.min(1, spent / budget);
  return (
    <div className="border-t border-gray-200 bg-gray-50/80 px-5 py-3">
      <div className="mb-1.5 flex items-baseline justify-between text-[12px]">
        <span className="font-semibold">Budget {euro.format(budget)}</span>
        <span className="tabular-nums text-gray-600">verbraucht: {euro.format(spent)}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
        <div className="h-full rounded-full" style={{ width: `${share * 100}%`, backgroundColor: accent }} />
      </div>
      {children && <div className="mt-1.5 text-[10px] text-gray-500">{children}</div>}
    </div>
  );
}

ApiKeyMock.Title = Title;
ApiKeyMock.Key = Key;
ApiKeyMock.Rows = Rows;
ApiKeyMock.Row = Row;
ApiKeyMock.Budget = Budget;

export default ApiKeyMock;
