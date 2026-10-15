import {
  Activity,
  Box,
  ChartColumn,
  Check,
  Download,
  FileJson,
  FileText,
  Folder,
  Globe,
  PanelTop,
  Plug,
  SlidersHorizontal,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import {
  BetaBadge,
  DataTable,
  IntroBox,
  TimelineAsSteps,
  TimelineAsStepsStep,
  Typo,
} from "@/components/ui";
import {
  AfterCard,
  BeforeCard,
  ComparisonCard,
  ComparisonFooter,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
  SimpleCard,
} from "@/components/cards";
import { FeatureRow, StepJourneyRow } from "@/components/sections";
import { ContactButton, ContactChannel } from "@/components/buttons";
import { LimitsScreen, NetworkScreen, TeamScreen } from "@/components/mockups";
import { tokenPrice } from "@/lib/token-prices";

// Bausteine der Private-Claude-Landingpages (Funnel, noindex): Beispiele aus
// dem Alltag der Zielgruppe, Vergleich mit dem privaten KI-Konto,
// Portal-Funktionen, Preise, Ablauf, Abschluss-CTA. Für Ads-Traffic vom Handy
// gebaut: kurze Texte, eine Spalte bis md, Screenshots ohne Sidebar.
// Keine Links nach außen (Sackgassen-Prinzip, siehe
// .claude/rules/landingpage-funnel.md).
//
// Abschnittsfarben im Wechsel: Funnel grau, Beispiele weiß, Vergleich
// hellblau, Portal grau, Preise weiß, Ablauf grau.

function ChipList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mx-auto mt-14 max-w-5xl rounded-2xl bg-white/70 p-5 ring-1 ring-gray-200 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
        {title}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-gray-800 ring-1 ring-gray-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Beispiele aus dem Alltag ─────────────────────────────────────────────────

export function UseCaseSection({
  preHeadline,
  headline,
  intro,
  more,
  children,
}: {
  preHeadline: string;
  headline: string;
  intro: string;
  /** Weitere Aufgaben als Chips unter den Beispielen */
  more?: string[];
  /** <UseCase>-Zeilen */
  children: ReactNode;
}) {
  return (
    <ContentWrapper colorScheme="white">
      <IntroBox textCentered size="small">
        <IntroBox.PreHeadline>{preHeadline}</IntroBox.PreHeadline>
        <IntroBox.Headline className="text-balance">
          {headline}
        </IntroBox.Headline>
        <IntroBox.Paragraph className="mb-0!">{intro}</IntroBox.Paragraph>
      </IntroBox>
      <div className="mt-12 space-y-16 lg:mt-16 lg:space-y-24">{children}</div>
      {more && <ChipList title="Außerdem" items={more} />}
    </ContentWrapper>
  );
}

/** Ein Beispiel: kurzer Text links, Claude-Fenster (children) rechts. */
export function UseCase({
  icon: Icon,
  label,
  beta = false,
  title,
  text,
  note,
  reverse = false,
  children,
}: {
  icon: LucideIcon;
  label: string;
  beta?: boolean;
  title: string;
  text: string;
  /** Kleingedrucktes unter dem Text, z. B. Preis eines Add-ons */
  note?: string;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <FeatureRow reverse={reverse}>
      <FeatureRow.Text>
        <FeatureRow.Label beta={beta}>
          <Icon aria-hidden /> {label}
        </FeatureRow.Label>
        <Typo.H3 disableMargin className="mb-4 text-balance">
          {title}
        </Typo.H3>
        <Typo.Paragraph textColor="muted" spacing={note ? undefined : "none"}>
          {text}
        </Typo.Paragraph>
        {note && <p className="text-sm text-gray-500">{note}</p>}
      </FeatureRow.Text>
      <FeatureRow.Media>{children}</FeatureRow.Media>
    </FeatureRow>
  );
}

// ── Vergleich ────────────────────────────────────────────────────────────────

interface CompareSide {
  title: string;
  items: string[];
  footer?: string;
}

export function CompareSection({
  preHeadline,
  headline,
  before,
  after,
  chipsTitle,
  chips,
}: {
  preHeadline: string;
  headline: string;
  before: CompareSide;
  after: CompareSide;
  chipsTitle?: string;
  chips?: string[];
}) {
  return (
    <ContentWrapper colorScheme="gradient-cool">
      <IntroBox textCentered size="small">
        <IntroBox.PreHeadline>{preHeadline}</IntroBox.PreHeadline>
        <IntroBox.Headline className="mb-0! text-balance">
          {headline}
        </IntroBox.Headline>
      </IntroBox>
      <ComparisonCard className="mx-auto mt-10 max-w-5xl gap-6!">
        {[
          { side: before, Card: BeforeCard },
          { side: after, Card: AfterCard },
        ].map(({ side, Card }) => (
          <Card key={side.title} className="rounded-2xl">
            <ComparisonHeadline>{side.title}</ComparisonHeadline>
            <ComparisonList>
              {side.items.map((item) => (
                <ComparisonListItem key={item}>{item}</ComparisonListItem>
              ))}
            </ComparisonList>
            {side.footer && (
              <ComparisonFooter className="text-lg!">
                {side.footer}
              </ComparisonFooter>
            )}
          </Card>
        ))}
      </ComparisonCard>
      {chips && chipsTitle && <ChipList title={chipsTitle} items={chips} />}
    </ContentWrapper>
  );
}

// ── Portal ───────────────────────────────────────────────────────────────────

interface PortalFunction {
  icon: LucideIcon;
  label: string;
  text: string;
  beta?: boolean;
}

// Die 12 Funktionen des Managed Claude Interface, wie auf
// /managed-claude/zentrale-steuerung, aber ohne Sprungmarken.
const PORTAL_FUNCTIONS: { group: string; items: PortalFunction[] }[] = [
  {
    group: "Kosten und Budgets",
    items: [
      {
        icon: ChartColumn,
        label: "Verbrauch",
        text: "Kosten in Euro je Tag, Modell und Person.",
      },
      {
        icon: SlidersHorizontal,
        label: "Limits",
        text: "Budgets für die Organisation und jede Person.",
      },
    ],
  },
  {
    group: "Team und Zugang",
    items: [
      {
        icon: Users,
        label: "Team",
        text: "Einladen, Rollen vergeben, Zugänge sperren.",
      },
      {
        icon: Download,
        label: "Einrichtung",
        text: "Claude Desktop mit einer Datei verbinden.",
      },
      {
        icon: Activity,
        label: "Status",
        text: "Sehen, wer verbunden ist und wer nie.",
      },
    ],
  },
  {
    group: "Claude einstellen",
    items: [
      {
        icon: FileText,
        label: "Anweisungen",
        text: "Hausstil und Regeln für jede Unterhaltung.",
      },
      {
        icon: Box,
        label: "Skills",
        text: "Arbeitsabläufe als Plugin an alle verteilen.",
      },
      {
        icon: Plug,
        label: "Connectors",
        text: "Microsoft 365, Websuche und MCP-Server freigeben.",
      },
      {
        icon: PanelTop,
        label: "Banner",
        text: "Ihre Leiste oben in Claude Desktop.",
      },
    ],
  },
  {
    group: "Sicherheit und Nachweis",
    items: [
      {
        icon: Folder,
        label: "Ordner",
        text: "Welche Ordner Claude lesen und beschreiben darf.",
        beta: true,
      },
      {
        icon: Globe,
        label: "Netzwerk",
        text: "Kein Internet, freigegebene Adressen oder alles.",
        beta: true,
      },
      {
        icon: FileJson,
        label: "Konfiguration",
        text: "Nachsehen, was für eine Person wirklich gilt.",
      },
    ],
  },
];

function PortalFunctionList() {
  return (
    <div className="mt-16 lg:mt-24">
      <Typo.H3 className="mt-0! text-center">
        Alle 12 Funktionen im Portal
      </Typo.H3>
      <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {PORTAL_FUNCTIONS.map((group) => (
          <div key={group.group} className="border-t-2 border-primary-600 pt-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">
              {group.group}
            </p>
            <ul className="mt-3 space-y-3">
              {group.items.map(({ icon: Icon, label, text, beta }) => (
                <li key={label} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-primary-600 shadow-sm ring-1 ring-gray-200">
                    <Icon className="h-[18px] w-[18px]" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="flex items-center gap-2 font-semibold text-gray-900">
                      {label}
                      {beta && <BetaBadge size="xs" />}
                    </span>
                    <span className="block text-sm text-gray-600">{text}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PortalSection() {
  return (
    <ContentWrapper colorScheme="gray-light">
      <IntroBox textCentered size="small">
        <IntroBox.PreHeadline>Das Portal</IntroBox.PreHeadline>
        <IntroBox.Headline className="text-balance">
          Claude fürs ganze Team, gesteuert an einer Stelle
        </IntroBox.Headline>
        <IntroBox.Paragraph className="mb-0!">
          Zu Ihrem Claude gehört ein Admin-Portal. Dort legen Sie fest, wer
          Claude nutzt, was es kostet und was es darf. Claude Desktop übernimmt
          die Einstellungen auf jedem Rechner.
        </IntroBox.Paragraph>
      </IntroBox>

      <div className="mt-12 space-y-16 lg:mt-16 lg:space-y-24">
        <FeatureRow>
          <FeatureRow.Text>
            <FeatureRow.Label>
              <Users aria-hidden /> Team und Zugang
            </FeatureRow.Label>
            <Typo.H3 disableMargin className="mb-4">
              Nur Ihr Team hat Zugang
            </Typo.H3>
            <Typo.Paragraph textColor="muted">
              Sie laden Kolleginnen und Kollegen ein, vergeben Rollen und
              sperren Zugänge mit einem Klick. Private KI-Konten braucht niemand
              mehr.
            </Typo.Paragraph>
            <FeatureRow.Points>
              <FeatureRow.Point>
                Anmeldung über Ihr Firmenkonto (SSO).
              </FeatureRow.Point>
              <FeatureRow.Point>
                Sehen, wer verbunden ist und wer noch nie.
              </FeatureRow.Point>
            </FeatureRow.Points>
          </FeatureRow.Text>
          <FeatureRow.Media>
            <TeamScreen compact />
          </FeatureRow.Media>
        </FeatureRow>

        <FeatureRow reverse>
          <FeatureRow.Text>
            <FeatureRow.Label>
              <SlidersHorizontal aria-hidden /> Kosten und Limits
            </FeatureRow.Label>
            <Typo.H3 disableMargin className="mb-4">
              Jeder Euro sichtbar, jedes Budget gedeckelt
            </Typo.H3>
            <Typo.Paragraph textColor="muted">
              Der Verbrauch steht in Euro je Person und Modell im Portal.
              Budgets für die Organisation und für jede Person setzt das Gateway
              hart durch.
            </Typo.Paragraph>
            <FeatureRow.Points>
              <FeatureRow.Point>
                Keine Lizenz pro Kopf, Sie zahlen nur die Nutzung.
              </FeatureRow.Point>
              <FeatureRow.Point>
                Limits täglich, wöchentlich oder alle 30 Tage.
              </FeatureRow.Point>
            </FeatureRow.Points>
          </FeatureRow.Text>
          <FeatureRow.Media>
            <LimitsScreen compact />
          </FeatureRow.Media>
        </FeatureRow>

        <FeatureRow>
          <FeatureRow.Text>
            <FeatureRow.Label beta>
              <Globe aria-hidden /> Regeln und Sicherheit
            </FeatureRow.Label>
            <Typo.H3 disableMargin className="mb-4">
              Einmal einstellen, auf jedem Rechner wirksam
            </Typo.H3>
            <Typo.Paragraph textColor="muted">
              Anweisungen, Skills und Connectors gelten für alle. Welche Ordner
              und Webadressen Claude nutzen darf, legen Sie zentral fest.
            </Typo.Paragraph>
            <FeatureRow.Points>
              <FeatureRow.Point>
                Hausstil und Regeln als Anweisung für jede Unterhaltung.
              </FeatureRow.Point>
              <FeatureRow.Point>
                Konfiguration je Person als Nachweis.
              </FeatureRow.Point>
            </FeatureRow.Points>
          </FeatureRow.Text>
          <FeatureRow.Media>
            <NetworkScreen compact />
          </FeatureRow.Media>
        </FeatureRow>
      </div>

      <PortalFunctionList />
    </ContentWrapper>
  );
}

// ── Coaching ─────────────────────────────────────────────────────────────────

// Inhalt wie Paket M (/managed-claude/coaching/paket-m), branchenneutral
// formuliert: "KI-Handbuch" statt "Kanzlei-Handbuch".
const COACHING_BLOCKS = [
  {
    title: "KI-Kompetenz",
    body: "Schulung nach Art. 4 EU AI Act für alle, die mit Claude arbeiten. Zertifikat je Person und Teilnehmerliste für Ihre Ablage.",
  },
  {
    title: "Modelle und App",
    body: "Welches Modell wofür voreingestellt ist. Teams und Rollen eingerichtet, die Oberfläche aufgeräumt.",
  },
  {
    title: "Chat, Cowork und Projekte",
    body: "Jede Person erledigt erste echte Vorgänge, ein Schriftstück bis zur fertigen Fassung. Die ersten Projekte sind angelegt.",
  },
  {
    title: "Anleitungen und Routinen",
    body: "Sie bringen das Fachwissen, wir bringen es in Form: erste Skills und eine Routine, zum Beispiel die Montagsübersicht.",
  },
  {
    title: "KI-Handbuch",
    body: "Das Grundgerüst steht: Anleitungen, Routinen und Projekte an einem Ort. Outlook läuft im Alltag.",
  },
];

export function CoachingSection() {
  return (
    <ContentWrapper colorScheme="gradient-primary-dark">
      <IntroBox dark textCentered size="small">
        <IntroBox.PreHeadline>Im Startpaket enthalten</IntroBox.PreHeadline>
        <div className="mb-6 flex items-center justify-center gap-4">
          <span className="text-8xl font-bold leading-none tabular-nums text-white sm:text-9xl">
            5
          </span>
          <span className="text-left text-2xl font-bold leading-tight text-white sm:text-3xl">
            Tage Coaching
            <span className="block text-lg font-semibold text-primary-200 sm:text-xl">
              und Beratung mit Ihrem Team
            </span>
          </span>
        </div>
        <IntroBox.Paragraph className="mb-0!">
          Fünf Personentage, Termine nach Absprache. Wir arbeiten an Ihren
          echten Fällen statt an Übungsbeispielen, und was entsteht, bleibt bei
          Ihnen.
        </IntroBox.Paragraph>
      </IntroBox>

      <StepJourneyRow className="mt-10">
        {COACHING_BLOCKS.map((block, i) => (
          <StepJourneyRow.Step key={block.title} n={i + 1}>
            <StepJourneyRow.Title>{block.title}</StepJourneyRow.Title>
            <StepJourneyRow.Description>
              {block.body}
            </StepJourneyRow.Description>
          </StepJourneyRow.Step>
        ))}
      </StepJourneyRow>

      <p className="mx-auto mt-10 max-w-2xl text-center text-base text-white/90 sm:text-lg">
        <span className="font-bold text-white">5.000 € einmalig</span> für die
        fünf Tage Coaching, dazu Einrichtung und Onboarding. Danach zahlen Sie
        nur den Verbrauch.
      </p>
    </ContentWrapper>
  );
}

// ── Preise ───────────────────────────────────────────────────────────────────

const START_PACKAGE = [
  "5 Personentage Coaching und Beratung an Ihren echten Fällen",
  "KI-Kompetenzschulung nach Art. 4 EU AI Act mit Zertifikat",
  "Einrichtung von Gateway und Portal, startklar in höchstens einer Woche",
  "Onboarding: Team, Rollen und Claude Desktop auf allen Rechnern",
  "Outlook Connector inklusive",
];

const MODELS = [
  {
    name: "Haiku 5.5",
    hint: "schnell, für Routine",
    price: tokenPrice("Claude Haiku 5.5"),
  },
  {
    name: "Sonnet 5.5",
    hint: "Standard",
    price: tokenPrice("Claude Sonnet 5.5"),
  },
  {
    name: "Opus 5.5",
    hint: "für schwierige Fälle",
    price: tokenPrice("Claude Opus 5.5"),
  },
];

export function PriceSection() {
  return (
    <ContentWrapper colorScheme="white">
      <IntroBox textCentered size="small">
        <IntroBox.PreHeadline>Preise</IntroBox.PreHeadline>
        <IntroBox.Headline className="text-balance">
          Ein Startpaket, danach nur Verbrauch
        </IntroBox.Headline>
        <IntroBox.Paragraph className="mb-0!">
          Keine Lizenz pro Kopf, kein Abo. Alle Preise netto zzgl. USt.
        </IntroBox.Paragraph>
      </IntroBox>

      <SimpleGrid cols={2} className="mx-auto mt-10 max-w-5xl items-start">
        <SimpleCard
          align="left"
          className="border-primary-500 ring-2 ring-primary-200"
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">
            Startpaket, einmalig
          </p>
          <p className="mt-1 text-4xl font-bold tabular-nums text-gray-900">
            5.000 €
          </p>
          <p className="mt-1 text-lg font-bold text-primary-700">
            inklusive 5 Tage Coaching
          </p>
          <ul className="mt-5 space-y-3">
            {START_PACKAGE.map((item, i) => (
              <li
                key={item}
                className={`flex gap-3 ${i === 0 ? "font-semibold text-gray-900" : "text-gray-700"}`}
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                  <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </SimpleCard>

        <SimpleCard align="left">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">
            Danach nach Verbrauch
          </p>
          <p className="mt-1 text-lg font-bold text-gray-900">
            Preis je 1 Mio. Tokens
          </p>
          <DataTable className="mt-4">
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell className="px-3! py-3!">
                  Modell
                </DataTable.HeaderCell>
                <DataTable.HeaderCell className="px-3! py-3! text-right">
                  Input
                </DataTable.HeaderCell>
                <DataTable.HeaderCell className="px-3! py-3! text-right">
                  Output
                </DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              {MODELS.map((m) => (
                <DataTable.Row key={m.name}>
                  <DataTable.Cell className="px-3!">
                    <span className="block font-semibold text-gray-900">
                      {m.name}
                    </span>
                    <span className="block text-xs text-gray-500">
                      {m.hint}
                    </span>
                  </DataTable.Cell>
                  <DataTable.Cell className="whitespace-nowrap px-3! text-right tabular-nums">
                    {m.price.input}
                  </DataTable.Cell>
                  <DataTable.Cell className="whitespace-nowrap px-3! text-right tabular-nums">
                    {m.price.output}
                  </DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable.Body>
          </DataTable>
          <p className="mt-4 text-sm text-gray-600">
            Input ist, was Claude liest, Output die Antwort. Eine Mail
            zusammenfassen kostet mit Sonnet 5.5 knapp 1 Cent. Erfahrungswert:
            rund 40 € pro Person und Monat.
          </p>
        </SimpleCard>
      </SimpleGrid>
    </ContentWrapper>
  );
}

// ── Ablauf ───────────────────────────────────────────────────────────────────

export function StartSteps({ contract }: { contract: string }) {
  const steps = [
    {
      title: "Erstgespräch",
      body: "Wir klären in einem kurzen Gespräch, ob Ihr Fall technisch und vertraglich passt.",
    },
    { title: "Verträge", body: contract },
    {
      title: "Einrichtung",
      body: "Wir richten Gateway, Portal und Ihr Team ein. Startklar in höchstens einer Woche.",
    },
    {
      title: "Coaching",
      body: "Fünf Personentage mit Ihrem Team, an echten Fällen statt an Übungsbeispielen.",
    },
  ];
  return (
    <ContentWrapper colorScheme="gray-light">
      <IntroBox textCentered size="small">
        <IntroBox.PreHeadline>Ablauf</IntroBox.PreHeadline>
        <IntroBox.Headline className="mb-0! text-balance">
          So starten Sie
        </IntroBox.Headline>
      </IntroBox>
      <div className="mx-auto mt-10 max-w-2xl">
        <TimelineAsSteps>
          {steps.map((s, i) => (
            <TimelineAsStepsStep
              key={s.title}
              value={i + 1}
              isLast={i === steps.length - 1}
            >
              <Typo.H3 className="mt-1! mb-2!">{s.title}</Typo.H3>
              <Typo.Paragraph textColor="muted" className="mb-0!">
                {s.body}
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          ))}
        </TimelineAsSteps>
      </div>
    </ContentWrapper>
  );
}

// ── Abschluss ────────────────────────────────────────────────────────────────

export function ClosingCta({
  headline,
  text,
}: {
  headline: string;
  text: string;
}) {
  return (
    <ContentWrapper colorScheme="primary-darker">
      <IntroBox dark textCentered size="small">
        <IntroBox.Headline className="text-balance">
          {headline}
        </IntroBox.Headline>
        <IntroBox.Paragraph>{text}</IntroBox.Paragraph>
      </IntroBox>
      <div className="flex justify-center">
        <ContactButton
          size="lg"
          icon="chat"
          channels={[ContactChannel.Meeting, ContactChannel.Mail]}
        >
          Gespräch vereinbaren
        </ContactButton>
      </div>
    </ContentWrapper>
  );
}

// ── FAQ ──────────────────────────────────────────────────────────────────────

// Antworten, die auf allen Private-Claude-Landingpages gleich sind. Die Seiten
// ergänzen ihre eigenen Fragen.
export const PRIVATE_CLAUDE_FAQ = {
  wasIstDas: {
    question: "Ist das ChatGPT oder Claude.ai?",
    answer:
      "Weder noch. Sie bekommen Claude von Anthropic über das Private Claude AI Gateway von Bluebatch: eigene Organisation, eigenes Admin-Portal, Betrieb in Frankfurt, Verarbeitung in der EU. Ihre Daten werden nicht zum Training verwendet.",
  },
  datenort: {
    question: "Wo werden die Daten verarbeitet?",
    answer:
      "Das Gateway läuft in Frankfurt. Claude rechnet über das EU-Profil von AWS Bedrock in Rechenzentren innerhalb der EU. Anthropic erhält Ihre Daten nicht.",
  },
  kosten: {
    question: "Was kostet das im laufenden Betrieb?",
    answer:
      "Nur die Tokens, die Ihr Team verbraucht, ohne Lizenz pro Kopf. Als Erfahrungswert rechnen wir mit rund 40 € im Monat für normale Nutzer und 100 € für Vielnutzer. Limits im Portal deckeln die Kosten.",
  },
};
