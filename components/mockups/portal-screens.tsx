import { ReactNode } from "react";
import {
  ChevronDown,
  Download,
  FileCode,
  Folder,
  GripVertical,
  Lock,
  Play,
  Plus,
  Search,
  Server,
} from "lucide-react";
import { BraveLogo, ClaudeLogo, DatevLogo, MicrosoftLogo } from "@/components/icons/brand-logos";
import BrowserFrame from "./browser-frame";
import PortalMock, { type PortalPage } from "./portal-mock";

// Fertige Screens des Managed Claude Interface (Kunden-Portal des Gateways)
// mit Beispieldaten einer Steuerkanzlei. Ein Screen = BrowserFrame + PortalMock,
// Inhalte nach dem echten Portal (internal/claude-ai-gateway/portal).
//
// <UsageScreen tilt />              großer Hero-Screenshot mit Sidebar (ab md)
// <LimitsScreen sidebar={false} />  Text/Screenshot-Zeile: ohne Sidebar, alle Inhalte
// <StatusScreen compact />          schmale Spalte oder Kachel: ohne Sidebar, weniger Zeilen
//
// Die Inhalte passen sich per Container Query an die Breite an, nicht an den
// Viewport: derselbe Screen funktioniert im Hero und in einer halben Spalte.

interface ScreenProps {
  /** Leicht gekippt mit kräftigerem Schatten, für Heroes */
  tilt?: boolean;
  /** Ohne Sidebar und mit weniger Zeilen, für schmale Spalten und Kacheln */
  compact?: boolean;
  /** Portal-Sidebar zeigen (ab md). Aus für Screenshots neben Text. */
  sidebar?: boolean;
  className?: string;
}

const host = "dashboard-ai-gateway.bluebatch.io";

function Screen({
  path,
  active,
  tilt,
  compact,
  sidebar = true,
  className,
  children,
}: ScreenProps & { path: string; active: PortalPage; children: ReactNode }) {
  return (
    <BrowserFrame url={`${host}${path}`} tilt={tilt} className={className}>
      <PortalMock active={active} compact={compact || !sidebar}>
        <div className="@container space-y-4">{children}</div>
      </PortalMock>
    </BrowserFrame>
  );
}

// ── Beispieldaten: Kanzlei Müller, Steuerberatung ──────────────────────────

const people = {
  mueller: { name: "Thomas Müller", initials: "TM", color: "#145cad", mail: "t.mueller" },
  becker: { name: "Anna Becker", initials: "AB", color: "#0f766e", mail: "a.becker" },
  weber: { name: "Jonas Weber", initials: "JW", color: "#7c3aed", mail: "j.weber" },
  krueger: { name: "Sabine Krüger", initials: "SK", color: "#c2410c", mail: "s.krueger" },
  yilmaz: { name: "Murat Yilmaz", initials: "MY", color: "#0369a1", mail: "m.yilmaz" },
  hoffmann: { name: "Katrin Hoffmann", initials: "KH", color: "#be185d", mail: "k.hoffmann" },
  schulz: { name: "Tim Schulz", initials: "TS", color: "#4d7c0f", mail: "t.schulz" },
  schmitt: { name: "Lea Schmitt", initials: "LS", color: "#94a3b8", mail: "l.schmitt" },
} as const;

type PersonKey = keyof typeof people;

const domain = "kanzlei-mueller.de";
const bannerText = "Kanzlei Müller · Private Gateway";
const bannerColor = "#145CAD";

function Person({ id, mail = false, suffix }: { id: PersonKey; mail?: boolean; suffix?: ReactNode }) {
  const p = people[id];
  return (
    <span className="flex min-w-0 items-center gap-2">
      <PortalMock.Avatar color={p.color}>{p.initials}</PortalMock.Avatar>
      <span className="min-w-0">
        <span className="block truncate font-medium text-gray-900">
          {p.name}
          {suffix}
        </span>
        {mail && (
          <span className="hidden truncate text-[10px] text-gray-500 @md:block">
            {p.mail}@{domain}
          </span>
        )}
      </span>
    </span>
  );
}

/** Auswahlfeld mit Pfeil, wie ein <select> im Portal */
function Select({ children, label, className = "" }: { children: ReactNode; label?: string; className?: string }) {
  return (
    <PortalMock.Field label={label} className={className}>
      <span className="flex items-center justify-between gap-2">
        <span className="truncate">{children}</span>
        <ChevronDown className="h-3 w-3 shrink-0 text-gray-400" aria-hidden />
      </span>
    </PortalMock.Field>
  );
}

/** Kopfzeile einer Seite: Einleitung links, Aktion rechts */
function Head({ children, action }: { children: ReactNode; action?: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 @lg:flex-row @lg:items-start @lg:justify-between @lg:gap-4">
      <PortalMock.Intro>{children}</PortalMock.Intro>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

function Nowrap({ children }: { children: ReactNode }) {
  return <span className="whitespace-nowrap">{children}</span>;
}

function Note({ children }: { children: ReactNode }) {
  return <p className="text-[11px] leading-relaxed text-gray-500">{children}</p>;
}

// ── Verbrauch ───────────────────────────────────────────────────────────────

// 01.10.2026 ist ein Donnerstag, 03.10. Feiertag, 13.10. läuft noch
const usage = {
  organisation: {
    total: "407,10 €",
    tokens: "137,7 Mio.",
    scope: "Gesamte Organisation",
    days: [34.1, 29.8, 1.2, 0.6, 38.4, 41.9, 36.7, 44.2, 31.5, 2.1, 0.9, 47.3, 18.4],
    models: [
      ["Sonnet 5.5", "84,2 Mio.", "296,10 €"],
      ["Opus 5.5", "14,6 Mio.", "104,80 €"],
      ["Haiku 5.5", "38,9 Mio.", "6,20 €"],
    ],
  },
  person: {
    total: "96,40 €",
    tokens: "31,4 Mio.",
    scope: people.becker.name,
    days: [9.2, 7.1, 0, 0, 10.4, 12.8, 6.3, 11.9, 8.4, 0, 0, 21.6, 8.7],
    models: [
      ["Sonnet 5.5", "25,3 Mio.", "89,00 €"],
      ["Opus 5.5", "0,9 Mio.", "6,50 €"],
      ["Haiku 5.5", "5,2 Mio.", "0,90 €"],
    ],
  },
};

const periods = ["Letzte 7 Tage", "Letzte 30 Tage", "Dieser Monat", "Letzter Monat", "Letztes Quartal"];

export function UsageScreen({
  tilt,
  compact,
  sidebar,
  className,
  view = "organisation",
}: ScreenProps & {
  /** Ansicht: ganze Organisation (mit Tabelle „Nach Person“) oder eine einzelne Person */
  view?: "organisation" | "person";
}) {
  const data = usage[view];
  const isPerson = view === "person";
  return (
    <Screen path="" active="usage" tilt={tilt} compact={compact} sidebar={sidebar} className={className}>
      <PortalMock.Intro>Nutzung und Kosten Ihrer Organisation im gewählten Zeitraum.</PortalMock.Intro>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <PortalMock.Chips items={compact || isPerson ? periods.slice(0, 4) : periods} active={2} />
        {!compact && (
          <div
            className={`hidden overflow-hidden rounded-md text-[11px] ring-1 ring-gray-200 ${isPerson ? "@lg:flex" : "@2xl:flex"}`}
          >
            <span className={`px-2.5 py-0.5 ${isPerson ? "text-gray-500" : "bg-gray-100 font-medium text-gray-900"}`}>
              Organisation
            </span>
            <span className="px-2.5 py-0.5 text-gray-500">Nur ich</span>
            <span
              className={`flex items-center gap-1 border-l border-gray-200 px-2.5 py-0.5 ${
                isPerson ? "bg-gray-100 font-medium text-gray-900" : "text-gray-500"
              }`}
            >
              {isPerson ? people.becker.name : "Person"} <ChevronDown className="h-3 w-3" aria-hidden />
            </span>
          </div>
        )}
      </div>
      <PortalMock.Card>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-[22px] font-semibold tabular-nums">{data.total}</div>
            <div className="text-[11px] text-gray-500">{data.scope} · 01.10.2026 bis 13.10.2026</div>
          </div>
          <div className="hidden text-right @md:block">
            <div className="text-[13px] font-semibold tabular-nums">{data.tokens}</div>
            <div className="text-[10px] text-gray-500">Tokens</div>
          </div>
        </div>
        <div className="mb-1.5 mt-3 text-[10px] font-medium text-gray-500">Kosten je Tag</div>
        <PortalMock.Bars values={data.days} labels={["01.10.", "07.10.", "13.10."]} />
      </PortalMock.Card>
      <div className="grid gap-4 @3xl:grid-cols-2">
        <PortalMock.Section title="Nach Modell">
          <PortalMock.Table columns={["Modell", "Tokens", "Betrag"]} alignRight={[1, 2]} rows={data.models} />
        </PortalMock.Section>
        {!compact && !isPerson && (
          <div className="hidden @md:block">
            <PortalMock.Section title="Nach Person">
              <PortalMock.Table
                columns={["Nutzer", "Tokens", "Betrag"]}
                alignRight={[1, 2]}
                rows={[
                  [<Person key="b" id="becker" />, "31,4 Mio.", "96,40 €"],
                  [<Person key="w" id="weber" />, "22,9 Mio.", "71,15 €"],
                  [<Person key="m" id="mueller" />, "18,2 Mio.", "64,90 €"],
                  [
                    <Person
                      key="s"
                      id="schmitt"
                      suffix={<span className="ml-1 font-normal text-gray-400">(ausgeschieden)</span>}
                    />,
                    "1,3 Mio.",
                    "4,10 €",
                  ],
                ]}
              />
            </PortalMock.Section>
          </div>
        )}
      </div>
    </Screen>
  );
}

// ── Limits ──────────────────────────────────────────────────────────────────

function LimitRow({
  label,
  hint,
  value,
  duration = "alle 30 Tage",
  wideOnly = false,
}: {
  label: ReactNode;
  hint: string;
  value?: string;
  duration?: string;
  /** nur in breiten Containern zeigen */
  wideOnly?: boolean;
}) {
  return (
    <div
      className={`${wideOnly ? "hidden @lg:flex" : "flex"} flex-col gap-2 border-b border-gray-100 py-2.5 last:border-0 @lg:flex-row @lg:items-end @lg:gap-3`}
    >
      <div className="min-w-0 flex-1">
        {label}
        <div className="mt-0.5 text-[10px] text-gray-500">{hint}</div>
      </div>
      <div className="flex items-end gap-2">
        <PortalMock.Field label="Limit in Euro" placeholder={!value} className="w-24">
          {value ?? "kein Limit"}
        </PortalMock.Field>
        <Select label="Zurücksetzen" className="w-28">
          {duration}
        </Select>
        <PortalMock.Button>Speichern</PortalMock.Button>
      </div>
    </div>
  );
}

export function LimitsScreen({ tilt, compact, sidebar, className }: ScreenProps) {
  return (
    <Screen path="/limits" active="limits" tilt={tilt} compact={compact} sidebar={sidebar} className={className}>
      <PortalMock.Intro>
        Beträge in Euro. Ist ein Limit erreicht, lehnt das Gateway weitere Anfragen ab, bis der Zeitraum abläuft.
      </PortalMock.Intro>
      <PortalMock.Section title="Gesamte Organisation">
        <PortalMock.Card className="py-0.5">
          <LimitRow
            label={<span className="font-medium text-gray-900">Organisation</span>}
            hint="verbraucht: 407,10 € · setzt alle 30 Tage zurück"
            value="1.500,00"
          />
        </PortalMock.Card>
      </PortalMock.Section>
      <PortalMock.Section title="Je Person">
        <PortalMock.Card className="py-0.5">
          <LimitRow label={<Person id="becker" />} hint="verbraucht: 96,40 €" value="150,00" />
          <LimitRow label={<Person id="weber" />} hint="verbraucht: 71,15 €" value="100,00" />
          {!compact && <LimitRow label={<Person id="mueller" />} hint="verbraucht: 64,90 €" wideOnly />}
          <LimitRow label={<Person id="schulz" />} hint="verbraucht: 4,80 €" value="10,00" duration="wöchentlich" />
        </PortalMock.Card>
      </PortalMock.Section>
      {!compact && <Note>Ein leeres Feld bedeutet kein Limit.</Note>}
    </Screen>
  );
}

// ── Team ────────────────────────────────────────────────────────────────────

const teamRows: { id: PersonKey; admin?: boolean; locked?: boolean; seen: string; self?: boolean }[] = [
  { id: "mueller", admin: true, seen: "vor 5 Min.", self: true },
  { id: "becker", admin: true, seen: "vor 1 Std." },
  { id: "weber", seen: "vor 3 Std." },
  { id: "krueger", seen: "gestern" },
  { id: "schulz", seen: "vor 2 Std." },
  { id: "yilmaz", locked: true, seen: "vor 12 Tagen" },
];

export function TeamScreen({ tilt, compact, sidebar, className }: ScreenProps) {
  const rows = compact ? teamRows.filter((r) => r.id !== "krueger" && r.id !== "schulz") : teamRows;
  return (
    <Screen path="/team" active="team" tilt={tilt} compact={compact} sidebar={sidebar} className={className}>
      <Head action={<PortalMock.Button variant="primary">Person einladen</PortalMock.Button>}>
        Wer Zugang zum Gateway hat, mit welcher Rolle, und wer eingeladen ist.
      </Head>
      <PortalMock.Stats
        items={[
          { label: "Mitglieder", value: 18 },
          { label: "Admins", value: 2 },
          { label: "Gesperrt", value: 1 },
          { label: "Offene Einladungen", value: 2 },
        ]}
      />
      <div className="flex flex-col gap-2 @lg:flex-row @lg:items-center">
        <PortalMock.Field placeholder className="flex-1">
          <span className="flex items-center gap-1.5">
            <Search className="h-3 w-3" aria-hidden />
            Name oder E-Mail suchen
          </span>
        </PortalMock.Field>
        <PortalMock.Chips items={["Alle", "Aktiv", "Gesperrt", "Admins"]} />
      </div>
      <PortalMock.Card className="divide-y divide-gray-100 py-0">
        {rows.map((r) => (
          <div key={r.id} className={`flex items-center gap-2 py-2 ${r.locked ? "opacity-60" : ""}`}>
            <div className="min-w-0 flex-1">
              <Person
                id={r.id}
                mail
                suffix={
                  r.self ? (
                    <span className="ml-1.5 rounded bg-gray-100 px-1 py-px text-[9px] font-medium text-gray-500">
                      Sie
                    </span>
                  ) : null
                }
              />
            </div>
            <PortalMock.Badge tone={r.admin ? "accent" : "muted"}>{r.admin ? "Admin" : "Mitglied"}</PortalMock.Badge>
            <PortalMock.Badge tone={r.locked ? "danger" : "ok"}>{r.locked ? "Gesperrt" : "Aktiv"}</PortalMock.Badge>
            <span className="hidden w-20 text-right text-[10px] text-gray-500 @xl:block">{r.seen}</span>
            <span className="hidden @2xl:block">
              <PortalMock.Button>Verwalten</PortalMock.Button>
            </span>
          </div>
        ))}
      </PortalMock.Card>
    </Screen>
  );
}

// ── Connectors ──────────────────────────────────────────────────────────────

function ConnectorCard({
  logo,
  name,
  children,
  meta,
  on = true,
}: {
  logo: ReactNode;
  name: string;
  children: ReactNode;
  meta: ReactNode;
  on?: boolean;
}) {
  return (
    <PortalMock.Card className="flex items-start gap-3">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 ring-1 ring-gray-200">
        {logo}
      </span>
      <div className="min-w-0 flex-1">
        <div className="font-semibold text-gray-900">{name}</div>
        <div className="text-[11px] leading-snug text-gray-500">{children}</div>
        <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-[10px] text-gray-500">{meta}</div>
      </div>
      <PortalMock.Switch on={on} />
    </PortalMock.Card>
  );
}

const templates = ["Pipedrive", "Linear", "Notion", "Atlassian", "monday.com", "Stripe", "Sentry", "Canva"];

export function ConnectorsScreen({ tilt, compact, sidebar, className }: ScreenProps) {
  return (
    <Screen path="/connectors" active="connectors" tilt={tilt} compact={compact} sidebar={sidebar} className={className}>
      <PortalMock.Intro>Verbindungen zu Ihren Systemen, die Claude im Auftrag einer Person nutzen darf.</PortalMock.Intro>
      <div className="space-y-2">
        <ConnectorCard
          logo={<MicrosoftLogo className="h-4 w-4" />}
          name="Microsoft 365"
          meta={
            <>
              <PortalMock.Badge tone="ok">Eingerichtet</PortalMock.Badge>
              Alle Personen
            </>
          }
        >
          Outlook, Kalender und OneDrive über eine eigene App-Registrierung im Entra ID.
        </ConnectorCard>
        <ConnectorCard
          logo={<BraveLogo className="h-4 w-4" />}
          name="Websuche"
          meta={
            <>
              <PortalMock.Badge>fragt vor jeder Suche</PortalMock.Badge>
              Alle Personen
            </>
          }
        >
          Aktuelle Informationen aus dem Netz, betrieben im Gateway.
        </ConnectorCard>
        {!compact && (
          <ConnectorCard
            logo={<DatevLogo className="h-4 w-4" />}
            name="DATEV MCP"
            meta={
              <>
                <PortalMock.Badge tone="warn">Beta</PortalMock.Badge>4 Personen
              </>
            }
          >
            Mandantendaten aus DATEV lesen, mit Mandantentrennung.
          </ConnectorCard>
        )}
      </div>
      <PortalMock.Section title="Weitere Connectors">
        <div className="flex flex-wrap gap-1.5">
          {(compact ? templates.slice(0, 5) : templates).map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 rounded-md bg-white px-2 py-1 text-[11px] text-gray-700 ring-1 ring-gray-200"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded bg-gray-100 text-[9px] font-semibold text-gray-500">
                {t[0].toUpperCase()}
              </span>
              {t}
            </span>
          ))}
          {compact && <span className="px-1 py-1 text-[11px] text-gray-400">+ 3 weitere</span>}
        </div>
        {!compact && (
          <div className="mt-3 flex items-center gap-1.5">
            <PortalMock.Button>
              <Server className="mr-1 h-3 w-3" aria-hidden />
              Eigenen MCP-Server hinzufügen
            </PortalMock.Button>
          </div>
        )}
      </PortalMock.Section>
    </Screen>
  );
}

// ── Anweisungen ─────────────────────────────────────────────────────────────

const instructions: { title: string; scope: string; chars: string; on?: boolean }[] = [
  { title: "Kanzlei-Stil", scope: "Alle Personen", chars: "1.140 Zeichen", on: true },
  { title: "Fundstellen immer angeben", scope: "Alle Personen", chars: "420 Zeichen", on: true },
  { title: "Lohnbuchhaltung: Begriffe und Fristen", scope: "3 Personen", chars: "860 Zeichen", on: true },
  { title: "Jahresend-Mailing 2026", scope: "Alle Personen", chars: "610 Zeichen", on: false },
];

export function InstructionsScreen({ tilt, compact, sidebar, className }: ScreenProps) {
  const list = compact ? instructions.slice(0, 3) : instructions;
  return (
    <Screen path="/instructions" active="instructions" tilt={tilt} compact={compact} sidebar={sidebar} className={className}>
      <Head action={<PortalMock.Button variant="primary">Neue Anweisung</PortalMock.Button>}>
        Texte, die Claude bei jeder Unterhaltung mitbekommt. Jede Person bekommt alle aktiven, die ihr gelten, in
        dieser Reihenfolge.
      </Head>
      <PortalMock.Card className="divide-y divide-gray-100 py-0">
        {list.map((item) => (
          <div key={item.title} className={`flex items-center gap-2 py-2 ${item.on ? "" : "opacity-60"}`}>
            <GripVertical className="h-3.5 w-3.5 shrink-0 text-gray-300" aria-hidden />
            <div className="min-w-0 flex-1">
              <div className="truncate font-medium text-gray-900">{item.title}</div>
              <div className="text-[10px] text-gray-500">
                {item.scope} · {item.chars}
              </div>
            </div>
            {!item.on && <PortalMock.Badge tone="warn">Pausiert</PortalMock.Badge>}
            <PortalMock.Switch on={item.on} />
          </div>
        ))}
      </PortalMock.Card>
      {!compact && (
        <PortalMock.Section title="So sieht es eine Person">
          <PortalMock.Card className="space-y-2">
            <Select className="max-w-[200px]">Anna Becker</Select>
            <div className="rounded-md bg-gray-50 p-2.5 text-[11px] leading-relaxed text-gray-700 ring-1 ring-gray-200">
              Du arbeitest für die Kanzlei Müller, Steuerberatung. Schreib sachlich und in der Sie-Form, ohne Floskeln.
              Mandanten heißen bei uns Mandanten, nicht Kunden. Nenne bei steuerlichen Aussagen immer die Fundstelle:
              Paragraf, BMF-Schreiben oder Urteil mit Aktenzeichen …
            </div>
            <div className="text-[10px] text-gray-500">1.560 von höchstens 3.000 Zeichen</div>
          </PortalMock.Card>
        </PortalMock.Section>
      )}
    </Screen>
  );
}

// ── Skills ──────────────────────────────────────────────────────────────────

export function SkillsScreen({ tilt, compact, sidebar, className }: ScreenProps) {
  return (
    <Screen path="/skills" active="skills" tilt={tilt} compact={compact} sidebar={sidebar} className={className}>
      <Head action={<PortalMock.Button variant="primary">Neuer Skill</PortalMock.Button>}>
        Skills bringen Claude bei, wie Ihre Organisation bestimmte Aufgaben erledigt. Sie erscheinen in Claude
        Desktop unter Anpassen → Plugins → Organisation.
      </Head>
      <div className="grid gap-3 @xl:grid-cols-[185px_1fr]">
        <PortalMock.Card className="space-y-1 p-2">
          <div className="flex items-center justify-between px-1.5 pb-1">
            <span className="font-semibold text-gray-900">Generell</span>
            <PortalMock.Switch />
          </div>
          {[
            { topic: "Abrechnung", count: 2, open: true },
            { topic: "Mandantenpost", count: 3 },
            { topic: "Fristen", count: 1 },
          ].map((t) => (
            <div key={t.topic}>
              <div className="flex items-center justify-between rounded px-1.5 py-1 text-gray-700">
                <span className="flex items-center gap-1">
                  <ChevronDown className={`h-3 w-3 text-gray-400 ${t.open ? "" : "-rotate-90"}`} aria-hidden />
                  {t.topic}
                </span>
                <span className="text-[10px] text-gray-400">{t.count}</span>
              </div>
              {t.open && (
                <div className="ml-4 space-y-0.5 border-l border-gray-200 pl-2 text-[11px]">
                  <div className="rounded bg-blue-50 px-1.5 py-0.5 font-medium text-[#145cad]">
                    Honorarrechnung prüfen
                  </div>
                  <div className="px-1.5 py-0.5 text-gray-600">Mahnung entwerfen</div>
                </div>
              )}
            </div>
          ))}
        </PortalMock.Card>
        <PortalMock.Card className="space-y-2.5">
          <PortalMock.Field label="Titel">Honorarrechnung prüfen</PortalMock.Field>
          <PortalMock.Field label="Wann soll Claude diesen Skill nutzen?">
            Wenn eine Honorarrechnung nach StBVV erstellt oder vor dem Versand geprüft werden soll.
          </PortalMock.Field>
          {!compact && (
            <PortalMock.Field label="Anleitung">
              <span className="block space-y-0.5 py-0.5 leading-relaxed">
                <span className="block">1. Gegenstandswert und passende Tabelle der StBVV ermitteln.</span>
                <span className="block">2. Gebührenrahmen und gewählte Zehntel prüfen.</span>
                <span className="block">3. Auslagen und Umsatzsteuer nachrechnen.</span>
                <span className="block">4. Abweichungen als Liste ausgeben, nichts selbst ändern.</span>
              </span>
            </PortalMock.Field>
          )}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
            <span className="text-[10px] text-gray-500">In Claude das Plugin „abrechnung“, Version 4</span>
            <PortalMock.Button variant="primary">Speichern</PortalMock.Button>
          </div>
        </PortalMock.Card>
      </div>
    </Screen>
  );
}

// ── Ordner (Beta) ───────────────────────────────────────────────────────────

function FolderLine({ path, write = false }: { path: string; write?: boolean }) {
  return (
    <div className="flex items-center gap-2 py-1">
      <Folder className="h-3.5 w-3.5 shrink-0 text-gray-400" aria-hidden />
      <span className="min-w-0 flex-1 truncate font-mono text-[11px] text-gray-800">{path}</span>
      <PortalMock.Badge tone={write ? "accent" : "muted"}>{write ? "Lesen und schreiben" : "Nur lesen"}</PortalMock.Badge>
    </div>
  );
}

function PolicyHead({ name, scope }: { name: string; scope: string }) {
  return (
    <div className="mb-1 flex items-center justify-between gap-2">
      <span className="font-semibold text-gray-900">{name}</span>
      <span className="text-[10px] text-gray-500">{scope}</span>
    </div>
  );
}

export function FoldersScreen({ tilt, compact, sidebar, className }: ScreenProps) {
  return (
    <Screen path="/folders" active="folders" tilt={tilt} compact={compact} sidebar={sidebar} className={className}>
      <Head action={<PortalMock.Button variant="primary">Neue Richtlinie</PortalMock.Button>}>
        Welche Ordner Claude auf dem Rechner sehen darf und wo es auch schreiben darf.
      </Head>
      <div className="grid gap-2 @2xl:grid-cols-2">
        <PortalMock.Card>
          <PolicyHead name="Standard" scope="alle übrigen Personen" />
          <FolderLine path={"C:\\Akten"} />
          <FolderLine path={"C:\\Vorlagen"} />
          <FolderLine path={"C:\\Claude-Ablage"} write />
        </PortalMock.Card>
        {!compact && (
          <PortalMock.Card>
            <PolicyHead name="Lohnbuchhaltung" scope="3 Personen" />
            <FolderLine path={"L:\\Lohn"} />
            <FolderLine path={"C:\\Vorlagen"} />
            <FolderLine path={"C:\\Claude-Ablage"} write />
          </PortalMock.Card>
        )}
      </div>
      <div className="flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1.5 text-[11px] text-[#145cad]">
        <Lock className="h-3 w-3 shrink-0" aria-hidden />
        Alles außerhalb dieser Ordner bleibt für Claude unsichtbar.
      </div>
      {!compact && (
        <PortalMock.Section title="Wer hat was">
          <PortalMock.Table
            columns={["Person", "Richtlinie"]}
            rows={[
              [<Person key="b" id="becker" />, "Standard · 3 Ordner"],
              [<Person key="k" id="krueger" />, "Lohnbuchhaltung · 3 Ordner"],
              [<Person key="s" id="schulz" />, "Standard · 3 Ordner"],
            ]}
          />
        </PortalMock.Section>
      )}
    </Screen>
  );
}

// ── Netzwerk (Beta) ─────────────────────────────────────────────────────────

const allowedHosts = ["dejure.org", "gesetze-im-internet.de", "bundesfinanzministerium.de", "bundesfinanzhof.de"];

function NetworkOption({ title, children, active = false }: { title: string; children: ReactNode; active?: boolean }) {
  return (
    <div
      className={`rounded-lg border p-2.5 ${active ? "border-[#145cad] bg-blue-50/40 ring-1 ring-[#145cad]" : "border-gray-200 bg-white"}`}
    >
      <div className="flex items-center gap-1.5 font-semibold text-gray-900">
        <span
          className={`flex h-3 w-3 items-center justify-center rounded-full border ${active ? "border-[#145cad]" : "border-gray-300"}`}
          aria-hidden
        >
          {active && <span className="h-1.5 w-1.5 rounded-full bg-[#145cad]" />}
        </span>
        {title}
      </div>
      <div className="mt-1 text-[10px] leading-snug text-gray-500">{children}</div>
    </div>
  );
}

export function NetworkScreen({ tilt, compact, sidebar, className }: ScreenProps) {
  return (
    <Screen path="/network" active="network" tilt={tilt} compact={compact} sidebar={sidebar} className={className}>
      <Head action={<PortalMock.Button variant="primary">Neue Richtlinie</PortalMock.Button>}>
        Welche Adressen im Netz Claude erreichen darf. Je Person gilt genau eine Richtlinie.
      </Head>
      <PortalMock.Card className="space-y-2.5">
        <PolicyHead name="Recherche" scope="14 Personen" />
        <div className="grid gap-2 @xl:grid-cols-3">
          <NetworkOption title="Kein Internet">
            Claude arbeitet nur mit dem, was auf dem Rechner und in den Connectors liegt.
          </NetworkOption>
          <NetworkOption title="Nur freigegebene Adressen" active>
            Zugriff ausschließlich auf die Domains in der Liste.
          </NetworkOption>
          <NetworkOption title="Uneingeschränkt">Jede öffentliche Adresse ist erreichbar.</NetworkOption>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {(compact ? allowedHosts.slice(0, 2) : allowedHosts).map((h) => (
            <span key={h} className="rounded-md bg-gray-100 px-2 py-0.5 font-mono text-[10px] text-gray-700">
              {h}
            </span>
          ))}
          <span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] text-[#145cad] ring-1 ring-blue-200">
            <Plus className="h-2.5 w-2.5" aria-hidden />
            Adresse
          </span>
        </div>
      </PortalMock.Card>
      {!compact && (
        <PortalMock.Section title="Wer hat was">
          <PortalMock.Table
            columns={["Person", "Richtlinie"]}
            rows={[
              [<Person key="b" id="becker" />, "Recherche · 4 freigegebene Adressen"],
              [<Person key="s" id="schulz" />, "Kein Internet"],
              [<Person key="m" id="mueller" />, "Uneingeschränkt"],
            ]}
          />
        </PortalMock.Section>
      )}
    </Screen>
  );
}

// ── Banner ──────────────────────────────────────────────────────────────────

const swatches = ["#145CAD", "#0F766E", "#B91C1C", "#334155", "#B45309"];

function ColorField({ label, color }: { label: string; color: string }) {
  return (
    <div>
      <div className="mb-1 text-[10px] font-medium text-gray-500">{label}</div>
      <div className="flex items-center gap-1.5 rounded-md border border-gray-300 bg-white px-1.5 py-1">
        <span className="h-4 w-4 rounded ring-1 ring-gray-300" style={{ backgroundColor: color }} />
        <span className="font-mono text-[11px] text-gray-800">{color}</span>
      </div>
    </div>
  );
}

export function BannerScreen({ tilt, compact, sidebar, className }: ScreenProps) {
  return (
    <Screen path="/banner" active="banner" tilt={tilt} compact={compact} sidebar={sidebar} className={className}>
      <PortalMock.Intro>
        Die Leiste oben in Claude Desktop, die jede Person Ihrer Organisation nach der Anmeldung sieht.
      </PortalMock.Intro>
      <PortalMock.Card className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-900">Banner anzeigen</span>
          <PortalMock.Switch />
        </div>
        <PortalMock.Field label="Text">{bannerText}</PortalMock.Field>
        <div className="flex flex-wrap items-end gap-3">
          <ColorField label="Hintergrund" color={bannerColor} />
          <ColorField label="Schrift" color="#FFFFFF" />
          {!compact && (
            <div className="flex gap-1 pb-1" aria-hidden>
              {swatches.map((c, i) => (
                <span
                  key={c}
                  className={`h-4 w-4 rounded-full ${i === 0 ? "ring-2 ring-offset-1 ring-[#145cad]" : ""}`}
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          )}
        </div>
      </PortalMock.Card>
      <div>
        <div className="mb-1.5 text-[10px] text-gray-500">
          Vorschau. So erscheint das Banner in Claude Desktop, für alle in Ihrer Organisation.
        </div>
        <div className="overflow-hidden rounded-lg ring-1 ring-gray-200">
          <div className="flex items-center gap-1 bg-[#f0eee6] px-2 py-1.5" aria-hidden>
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            <span className="mx-auto pr-6 text-[10px] text-[#6b6657]">Claude</span>
          </div>
          <div
            className="px-2 py-1 text-center text-[10px] font-semibold tracking-wide text-white"
            style={{ backgroundColor: bannerColor }}
          >
            {bannerText}
          </div>
          <div className="flex items-center gap-2 bg-[#faf9f5] px-3 py-3">
            <ClaudeLogo className="h-3.5 w-3.5 shrink-0" />
            <span className="h-1.5 w-2/3 rounded-full bg-[#e5e2d8]" />
          </div>
        </div>
      </div>
      {!compact && (
        <div className="flex justify-end">
          <PortalMock.Button variant="primary">Speichern</PortalMock.Button>
        </div>
      )}
    </Screen>
  );
}

// ── Einrichtung ─────────────────────────────────────────────────────────────

export function SetupScreen({ tilt, compact, sidebar, className }: ScreenProps) {
  return (
    <Screen path="/setup" active="setup" tilt={tilt} compact={compact} sidebar={sidebar} className={className}>
      <PortalMock.Intro>
        So verbinden Sie Claude Desktop mit dem Gateway. Ein Weg genügt, die Einstellungen Ihrer Organisation holt
        die App danach selbst.
      </PortalMock.Intro>
      <PortalMock.Chips
        items={compact ? ["Windows · Benutzer", "Mac/Windows · JSON"] : ["Windows · Benutzer", "Windows · Systemweit", "Mac/Windows · JSON"]}
      />
      <PortalMock.Card className="space-y-3">
        <div className="flex items-start gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#145cad]">
            <FileCode className="h-4 w-4" aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <div className="font-mono font-semibold text-gray-900">claude.reg</div>
            <div className="text-[11px] leading-snug text-gray-500">
              Gilt nur für das Windows-Konto, mit dem sie eingespielt wird. Keine Administratorrechte nötig.
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <PortalMock.Button variant="primary">
            <Download className="mr-1 h-3 w-3" aria-hidden />
            Datei herunterladen
          </PortalMock.Button>
          <PortalMock.Button>
            <Play className="mr-1 h-3 w-3" aria-hidden />
            Video-Anleitung
          </PortalMock.Button>
        </div>
      </PortalMock.Card>
      <PortalMock.Section title="Wie einrichten">
        <ol className="space-y-1.5">
          {[
            "Datei herunterladen und doppelklicken.",
            "Die Rückfrage des Registrierungs-Editors bestätigen.",
            "Claude Desktop neu starten und im Browser per SSO anmelden.",
          ].map((step, i) => (
            <li key={step} className="flex items-start gap-2 text-gray-700">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gray-900 text-[9px] font-semibold text-white">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </PortalMock.Section>
    </Screen>
  );
}

// ── Status ──────────────────────────────────────────────────────────────────

const statusRows: { id: PersonKey; state: "ok" | "warn" | "danger"; seen: string }[] = [
  { id: "becker", state: "ok", seen: "heute, 08:12" },
  { id: "weber", state: "ok", seen: "heute, 07:58" },
  { id: "schulz", state: "ok", seen: "gestern, 16:40" },
  { id: "krueger", state: "warn", seen: "22.09.2026" },
  { id: "hoffmann", state: "danger", seen: "noch nie" },
];

const stateLabel = { ok: "Verbunden", warn: "Länger nicht", danger: "Nie verbunden" } as const;

export function StatusScreen({ tilt, compact, sidebar, className }: ScreenProps) {
  const rows = compact ? statusRows.filter((r) => r.state !== "ok" || r.id === "becker") : statusRows;
  return (
    <Screen path="/status" active="status" tilt={tilt} compact={compact} sidebar={sidebar} className={className}>
      <PortalMock.Intro>
        Wer im Team Claude Desktop mit dem Gateway nutzt: wann jede Person zuletzt ihre Konfiguration abgeholt hat.
      </PortalMock.Intro>
      <PortalMock.Stats
        items={[
          { label: "Mitglieder", value: 18 },
          { label: "Verbunden", value: 15 },
          { label: "Länger nicht", value: 2 },
          { label: "Nie verbunden", value: 1 },
        ]}
      />
      <div className="hidden @md:block">
        <PortalMock.Table
          columns={["Person", "Status", "Zuletzt abgeholt"]}
          alignRight={[2]}
          rows={rows.map((r) => [
            <Person key={r.id} id={r.id} />,
            <PortalMock.Badge key="s" tone={r.state}>
              <Nowrap>{stateLabel[r.state]}</Nowrap>
            </PortalMock.Badge>,
            <Nowrap key="t">{r.seen}</Nowrap>,
          ])}
        />
      </div>
      {/* schmale Container: Liste statt Tabelle, Status und Zeitpunkt untereinander */}
      <PortalMock.Card className="divide-y divide-gray-100 py-0 @md:hidden">
        {rows.map((r) => (
          <div key={r.id} className="flex items-center gap-2 py-2">
            <div className="min-w-0 flex-1">
              <Person id={r.id} />
            </div>
            <div className="text-right">
              <PortalMock.Badge tone={r.state}>
                <Nowrap>{stateLabel[r.state]}</Nowrap>
              </PortalMock.Badge>
              <div className="mt-0.5 text-[10px] text-gray-500">{r.seen}</div>
            </div>
          </div>
        ))}
      </PortalMock.Card>
    </Screen>
  );
}

// ── Konfiguration ───────────────────────────────────────────────────────────

const configRows: { label: string; value: string; detail?: string }[] = [
  { label: "Bereiche", value: "Chat, Cowork" },
  { label: "Banner", value: bannerText, detail: `Hintergrund ${bannerColor}, Schrift #FFFFFF` },
  { label: "Microsoft 365", value: "eingerichtet" },
  { label: "Websuche", value: "an, fragt vor jeder Suche" },
  { label: "Weitere MCP-Server", value: "DATEV MCP" },
  { label: "Netzwerk", value: "4 freigegebene Adressen", detail: allowedHosts.join(", ") },
  {
    label: "Ordner",
    value: "3 Ordner",
    detail: "C:\\Akten (nur lesen), C:\\Vorlagen (nur lesen), C:\\Claude-Ablage (lesen und schreiben)",
  },
  { label: "Gesperrte Werkzeuge", value: "keine" },
  { label: "Anweisungen", value: "1.560 Zeichen" },
];

const configJson = `{
  "banner": {
    "enabled": true,
    "text": "${bannerText}",
    "backgroundColor": "${bannerColor}"
  },
  "workspace": {
    "allowedEgressHosts": ["dejure.org", …],
    "allowedFolders": [
      { "path": "C:\\\\Akten", "mode": "ro" },`;

export function ConfigScreen({ tilt, compact, sidebar, className }: ScreenProps) {
  const rows = compact ? configRows.filter((r) => ["Bereiche", "Websuche", "Netzwerk", "Ordner", "Anweisungen"].includes(r.label)) : configRows;
  return (
    <Screen path="/config-preview" active="config" tilt={tilt} compact={compact} sidebar={sidebar} className={className}>
      <PortalMock.Intro>
        Was Claude Desktop einer Person ausliefert, so wie es jetzt gerade gebaut wird. In der App gilt es nach
        dem nächsten Neustart.
      </PortalMock.Intro>
      <Select label="Person" className="max-w-[220px]">
        Anna Becker
      </Select>
      <PortalMock.Section title="Auf einen Blick">
        <PortalMock.Card className="divide-y divide-gray-100 py-0">
          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-[110px_1fr] gap-2 py-1.5 @md:grid-cols-[140px_1fr]">
              <span className="text-gray-500">{r.label}</span>
              <span className="min-w-0">
                <span className="font-medium text-gray-900">{r.value}</span>
                {r.detail && <span className="block truncate text-[10px] text-gray-500">{r.detail}</span>}
              </span>
            </div>
          ))}
        </PortalMock.Card>
      </PortalMock.Section>
      {!compact && (
        <div className="hidden @md:block">
          <PortalMock.Section title="Vollständige Konfiguration">
            <pre className="relative max-h-32 overflow-hidden rounded-lg bg-[#1e2430] p-3 font-mono text-[10px] leading-relaxed text-[#c9d1d9]">
              {configJson}
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#1e2430]" />
            </pre>
          </PortalMock.Section>
        </div>
      )}
    </Screen>
  );
}
