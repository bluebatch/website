import { BrowserFrame, PortalMock } from "@/components/mockups";
import { ClaudeLogo } from "@/components/icons/brand-logos";

// Seitenspezifische Grafiken für /managed-claude/preise: Modellwahl,
// Rechenbeispiel und der Limits-Screen aus dem Kunden-Portal.

const MODELS = [
  {
    name: "Haiku",
    use: "Das Einfache",
    text: "Sortieren, Daten aus Belegen ziehen, kurze Antworten. Günstig genug für Agenten, die tausendfach laufen.",
    from: "ab 0,13 €",
  },
  {
    name: "Sonnet",
    use: "Der Alltag",
    text: "Mails, Entwürfe, Dokumente befragen, Chat. Die richtige Wahl für die meisten Aufgaben im Büro.",
    from: "ab 2,60 €",
  },
  {
    name: "Opus",
    use: "Die schweren Fälle",
    text: "Lange Gutachten, verschachtelte Sachverhalte, mehrstufige Agenten. Dort, wo Qualität den Preis schlägt.",
    from: "ab 5,15 €",
  },
] as const;

export function ModellWahl() {
  return (
    <div className="flex flex-col gap-3">
      {MODELS.map((m) => (
        <div
          key={m.name}
          className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:p-5"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f5f4ee] ring-1 ring-[#e5e2d8]">
            <ClaudeLogo className="h-5 w-5" />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <p className="font-bold text-gray-900">
                {m.name} <span className="font-normal text-gray-500">· {m.use}</span>
              </p>
              <p className="text-xs font-semibold text-primary-700">Input {m.from} / 1 Mio.</p>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-gray-600">{m.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Zeile({ label, detail, value }: { label: string; detail: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <div>
        <p className="font-medium text-gray-900">{label}</p>
        <p className="text-xs text-gray-500">{detail}</p>
      </div>
      <p className="shrink-0 font-semibold tabular-nums text-gray-900">{value}</p>
    </div>
  );
}

// Kosten je Mail (2.000 Input-, 300 Output-Tokens) laut Preisliste
const COMPARE = [
  { model: "Haiku 5.5", cent: 0.05, label: "0,05 Cent" },
  { model: "Sonnet 5.5", cent: 0.9, label: "0,9 Cent" },
  { model: "Opus 5.5", cent: 1.8, label: "1,8 Cent" },
];

export function Rechenbeispiel() {
  return (
    <div className="rounded-2xl border border-primary-200 bg-white p-5 shadow-sm ring-1 ring-primary-100 md:p-6">
      <p className="text-lg font-bold text-gray-900">Eine Mail zusammenfassen, mit Sonnet 5.5</p>
      <div className="mt-3 divide-y divide-gray-100 border-y border-gray-100 text-sm">
        <Zeile
          label="Input: ca. 2.000 Tokens"
          detail="Mail mit Verlauf und Ihre Anweisungen, × 2,60 € je 1 Mio."
          value="0,52 Cent"
        />
        <Zeile
          label="Output: ca. 300 Tokens"
          detail="Zusammenfassung mit Antwortvorschlag, × 12,60 € je 1 Mio."
          value="0,38 Cent"
        />
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-4">
        <p className="font-bold text-gray-900">Pro Mail</p>
        <p className="text-2xl font-bold tabular-nums text-primary-700">knapp 1 Cent</p>
      </div>
      <div className="mt-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
          Dieselbe Mail mit anderen Modellen
        </p>
        <div className="space-y-2.5">
          {COMPARE.map((c) => (
            <div key={c.model} className="grid grid-cols-[84px_minmax(0,1fr)_72px] items-center gap-3 text-sm">
              <span className="font-medium text-gray-700">{c.model}</span>
              <span className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                <span
                  className="block h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-700"
                  style={{ width: `${Math.max(2, (c.cent / 1.8) * 100)}%` }}
                />
              </span>
              <span className="text-right tabular-nums text-gray-900">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-6 rounded-xl bg-primary-50 px-4 py-3 text-sm text-primary-900">
        Hochgerechnet: 100 Mails am Tag mit Sonnet 5.5 sind rund 0,90 €, im Monat mit 20
        Arbeitstagen rund 18 €.
      </p>
    </div>
  );
}

const people = [
  { initials: "SM", color: "#145cad", name: "S. Müller", limit: "150 €", used: "42,17 €" },
  { initials: "TK", color: "#0f766e", name: "T. Kaya", limit: "100 €", used: "88,90 €" },
  { initials: "AB", color: "#7c3aed", name: "A. Becker", limit: "300 €", used: "211,40 €" },
];

export function LimitsMock() {
  return (
    <BrowserFrame url="dashboard-ai-gateway.bluebatch.io/limits">
      <PortalMock active="limits">
        <PortalMock.Intro>
          Budgets in Euro für die Organisation und je Person. Ist ein Limit erreicht, lehnt das
          Gateway weitere Anfragen ab.
        </PortalMock.Intro>
        <PortalMock.Card>
          <div className="flex items-center justify-between gap-2">
            <span className="font-semibold">Gesamte Organisation</span>
            <PortalMock.Badge tone="ok">aktiv</PortalMock.Badge>
          </div>
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            <PortalMock.Field label="Limit in Euro">1.500</PortalMock.Field>
            <PortalMock.Field label="Zurücksetzen">alle 30 Tage</PortalMock.Field>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
            <div className="h-full w-[56%] rounded-full bg-[#145cad]" />
          </div>
          <div className="mt-1.5 text-[10px] text-gray-500">
            verbraucht: 842,17 € · setzt alle 30 Tage zurück
          </div>
        </PortalMock.Card>
        <PortalMock.Section title="Je Person">
          <PortalMock.Table
            columns={["Person", "Limit", "verbraucht"]}
            alignRight={[1, 2]}
            rows={people.map((p) => [
              <span key={p.name} className="flex items-center gap-2">
                <PortalMock.Avatar color={p.color}>{p.initials}</PortalMock.Avatar>
                {p.name}
              </span>,
              p.limit,
              p.used,
            ])}
          />
        </PortalMock.Section>
      </PortalMock>
    </BrowserFrame>
  );
}
