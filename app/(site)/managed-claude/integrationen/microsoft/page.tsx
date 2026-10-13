import type { Metadata } from "next";
import { CalendarDays, FolderOpen, Laptop, MessagesSquare } from "lucide-react";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import {
  Typo,
  IntroBox,
  ProseColumns,
  FaqContainer,
  TimelineAsSteps,
  TimelineAsStepsStep,
  Button,
} from "@/components/ui";
import {
  OfferCard,
  SimpleCard,
  ComparisonCard,
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
} from "@/components/cards";
import { ContactButton, InternalLink } from "@/components/buttons";
import {
  Hero2Column,
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
} from "@/components/heroes";
import { FlowDiagram } from "@/components/diagrams";
import ClaudeDesktopMock from "@/components/mockups/claude-desktop-mock";
import BrowserFrame from "@/components/mockups/browser-frame";
import PortalMock from "@/components/mockups/portal-mock";
import { ClaudeLogo, MicrosoftLogo, OutlookLogo } from "@/components/icons/brand-logos";

const meta = {
  title: "Claude Outlook: Mails, Kalender und Dateien in Claude",
  description:
    "Claude Outlook für Microsoft 365: Claude liest Mails, Kalender und OneDrive mit den Rechten jeder Person. 500 € einmalig, bei Coaching M oder L angerechnet.",
};

export const metadata: Metadata = {
  title: `${meta.title} | Bluebatch`,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20Outlook%20Connector&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude Outlook Connector",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/integrationen/microsoft",
  },
};

const sources = [
  {
    title: "Outlook",
    icon: <OutlookLogo className="h-7 w-7" />,
    text: "Mails im eigenen Postfach und in freigegebenen Postfächern lesen, zusammenfassen und Antworten entwerfen.",
  },
  {
    title: "Kalender",
    icon: <CalendarDays className="h-6 w-6 text-[#0f6cbd]" />,
    text: "Eigene und freigegebene Kalender, etwa um freie Termine für einen Mandanten zu finden.",
  },
  {
    title: "OneDrive und SharePoint",
    icon: <FolderOpen className="h-6 w-6 text-[#0f6cbd]" />,
    text: "Word, Excel und PDF, auf die die Person Zugriff hat. Claude liest und wertet sie aus.",
  },
  {
    title: "Teams",
    icon: <MessagesSquare className="h-6 w-6 text-[#5b5fc7]" />,
    text: "Chats und Online-Besprechungen der Person, zum Nachschlagen, was abgesprochen war.",
  },
];

const faqs = [
  {
    question: "Gibt es Claude for Outlook?",
    answer:
      "Als Add-in in Outlook nicht. Claude arbeitet in Claude Desktop und greift über den Microsoft-365-Connector auf Outlook zu: Mails lesen, zusammenfassen, nach Mandant sortieren und Antworten entwerfen. Den fertigen Entwurf übernehmen Sie in Outlook und schicken ihn selbst ab.",
  },
  {
    question: "Was kann Claude mit Microsoft 365?",
    answer:
      "Claude liest Mails in Outlook, eigene und freigegebene Kalender, Dateien in OneDrive und SharePoint sowie Teams-Chats und Besprechungen. Alles mit den Rechten der angemeldeten Person und standardmäßig nur lesend.",
  },
  {
    question: "Wie funktioniert die Claude Outlook Integration technisch?",
    answer:
      "Der Connector läuft in Claude Desktop auf dem Rechner der Person und spricht direkt mit Microsoft Graph in Ihrem Tenant. Dafür legen Sie im Entra ID eine eigene App-Registrierung mit Leserechten an und tragen Verzeichnis-ID und Anwendungs-ID im Portal des Gateways ein. Die Microsoft-Anmeldung bleibt verschlüsselt auf dem Rechner.",
  },
  {
    question: "Kann Claude mit Excel arbeiten?",
    answer:
      "Ja, Claude liest Excel-Dateien aus OneDrive und SharePoint und wertet sie aus, zum Beispiel eine Liste offener Posten oder eine Honorarübersicht. Dateien lassen sich in Claude Desktop auch direkt hochladen. Zellen in einer geöffneten Excel-Datei bearbeiten kann der Connector nicht, er ist kein Excel-Add-in.",
  },
  {
    question: "Was kostet der Outlook Connector?",
    answer:
      "Einmalig 500 € für die Einrichtung mit App-Registrierung und Freigabe im Portal. Mit Coaching-Paket M oder L wird der Betrag zu 100 % angerechnet, ebenso die Einrichtung des Gateways mit 1.500 €.",
  },
  {
    question: "Sieht Claude alle Postfächer der Kanzlei?",
    answer:
      "Nein. Jede Person meldet sich mit dem eigenen Microsoft-Konto an, und Claude sieht genau das, was diese Person in Outlook auch sieht, einschließlich der für sie freigegebenen Postfächer. Wer den Connector überhaupt bekommt, legen Sie im Portal fest.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Integration · Microsoft 365</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>Claude Outlook Connector für Microsoft 365</Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Mit dem Claude Outlook Connector liest Claude Ihre Mails, Termine und Dateien aus Microsoft 365, direkt in Claude Desktop. Jede Person meldet sich mit dem eigenen Microsoft-Konto an und Claude sieht nur, was sie sehen darf, standardmäßig nur lesend. Die Einrichtung kostet einmalig 500 €, mit Coaching-Paket M oder L wird sie voll angerechnet.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
              <Button variant="secondary" href="#preis">
                Preis und Anrechnung
              </Button>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <ClaudeDesktopMock mode="Chat" model="Sonnet 5.5">
              <ClaudeDesktopMock.Banner>Kanzlei Müller · Private Gateway</ClaudeDesktopMock.Banner>
              <ClaudeDesktopMock.User>Was kam heute von Herrn Weber? Schlag mir eine Antwort vor.</ClaudeDesktopMock.User>
              <ClaudeDesktopMock.Tool>Outlook · 3 Mails gelesen</ClaudeDesktopMock.Tool>
              <ClaudeDesktopMock.Tool>Kalender · freie Termine geprüft</ClaudeDesktopMock.Tool>
              <ClaudeDesktopMock.Assistant>
                <p>Herr Weber hat heute drei Mails geschickt:</p>
                <ul>
                  <li>Belege zur Einkommensteuer 2025</li>
                  <li>Frage zur Handwerkerrechnung</li>
                  <li>Bitte um einen Termin</li>
                </ul>
                <p><strong>Entwurf:</strong></p>
                <div className="rounded-lg border border-[#e5e2d8] bg-white px-3 py-2 text-[12px]">
                  Guten Tag Herr Weber, danke für die Unterlagen. Bei der Handwerkerrechnung zählen die Arbeitskosten, das prüfen wir mit. Für einen Termin passen Dienstag 10 Uhr oder Donnerstag 14 Uhr.
                </div>
              </ClaudeDesktopMock.Assistant>
            </ClaudeDesktopMock>
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Claude für Microsoft 365</IntroBox.PreHeadline>
          <IntroBox.Headline>Was Claude in Microsoft 365 sieht</IntroBox.Headline>
          <IntroBox.Paragraph>
            Ein Connector, vier Quellen. Immer mit den Rechten der angemeldeten Person und standardmäßig nur lesend.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={4}>
          {sources.map((s) => (
            <SimpleCard key={s.title} align="left" className="rounded-2xl">
              <div className="mb-4 flex w-full items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white ring-1 ring-gray-200">
                  {s.icon}
                </span>
                <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-semibold text-green-700 ring-1 ring-green-200">
                  nur lesen
                </span>
              </div>
              <Typo.H3 className="mt-0! text-lg! md:text-xl!">{s.title}</Typo.H3>
              <Typo.Paragraph textColor="muted" spacing="none">
                {s.text}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Claude Outlook Integration</IntroBox.PreHeadline>
          <IntroBox.Headline>So läuft die Anbindung</IntroBox.Headline>
        </IntroBox>
        <FlowDiagram
          bidirectional
          className="mb-14"
          nodes={[
            { icon: <ClaudeLogo className="h-6 w-6" />, label: "Claude Desktop", sublabel: "Chat und Cowork" },
            { icon: <Laptop className="h-5 w-5" />, label: "Microsoft-365-Connector", sublabel: "lokal auf dem Rechner", highlight: true },
            { icon: <MicrosoftLogo className="h-5 w-5" />, label: "Microsoft Graph", sublabel: "Ihr Tenant" },
          ]}
          caption="Die Microsoft-Anmeldung bleibt verschlüsselt auf dem Rechner. Was Claude liest, geht als Teil der Unterhaltung über das Gateway nach Frankfurt."
        />
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Typo.H3 className="mt-0! mb-6!">Einrichtung in drei Schritten</Typo.H3>
            <TimelineAsSteps>
              <TimelineAsStepsStep value={1}>
                <Typo.H4 className="mt-1!">App-Registrierung im Entra ID</Typo.H4>
                <Typo.Paragraph textColor="muted">
                  Eine eigene App-Registrierung in Ihrem Microsoft-Tenant, nur mit Leserechten. Die Admin-Zustimmung gilt einmal für alle. Wir gehen das mit Ihrer IT durch.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={2}>
                <Typo.H4 className="mt-1!">Im Portal eintragen</Typo.H4>
                <Typo.Paragraph textColor="muted">
                  Verzeichnis-ID und Anwendungs-ID im Portal des Gateways eintragen und den Connector allen oder ausgewählten Personen zuweisen.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={3}>
                <Typo.H4 className="mt-1!">Einmal anmelden</Typo.H4>
                <Typo.Paragraph textColor="muted" spacing="none">
                  Nach dem Neustart von Claude Desktop meldet sich jede Person einmal mit dem eigenen Microsoft-Konto an. Danach steht Outlook in jeder Unterhaltung bereit.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
            </TimelineAsSteps>
          </div>
          <BrowserFrame url="dashboard-ai-gateway.bluebatch.io/connectors">
            <PortalMock active="connectors" compact>
              <PortalMock.Card className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <MicrosoftLogo className="h-5 w-5" />
                  <span className="text-[13px] font-semibold">Microsoft 365 verbinden</span>
                </div>
                <PortalMock.Field label="Verzeichnis-ID (Tenant ID)">8f3c2a71-4d0e-4b9a-9c1e-2f5d7a6b3e10</PortalMock.Field>
                <PortalMock.Field label="Anwendungs-ID (Client ID)">c41e9b07-7a2d-4f63-b8e5-91d0a4c2f8b6</PortalMock.Field>
                <div>
                  <div className="mb-1 text-[10px] font-medium text-gray-500">Zugewiesen an</div>
                  <PortalMock.Chips items={["Alle Personen", "Ausgewählte Personen"]} />
                </div>
                <p className="text-[10px] leading-relaxed text-gray-500">
                  Gilt für alle in der Organisation. Jede Person meldet sich beim ersten Zugriff selbst bei Microsoft an, Claude sieht nur, was sie selbst sehen darf.
                </p>
                <div className="flex justify-end gap-2">
                  <PortalMock.Button>Abbrechen</PortalMock.Button>
                  <PortalMock.Button variant="primary">Verbinden</PortalMock.Button>
                </div>
              </PortalMock.Card>
            </PortalMock>
          </BrowserFrame>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Ehrlich gesagt</IntroBox.PreHeadline>
          <IntroBox.Headline>Was der Connector kann und was nicht</IntroBox.Headline>
        </IntroBox>
        <ComparisonCard className="mx-auto max-w-5xl">
          <AfterCard className="rounded-2xl">
            <ComparisonHeadline>Das geht</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>Mails lesen, zusammenfassen und nach Mandant oder Vorgang sortieren</ComparisonListItem>
              <ComparisonListItem>Antworten im Ton der Kanzlei entwerfen, zum Übernehmen in Outlook</ComparisonListItem>
              <ComparisonListItem>Freie Termine in eigenen und freigegebenen Kalendern finden</ComparisonListItem>
              <ComparisonListItem>Excel-, Word- und PDF-Dateien aus OneDrive und SharePoint auswerten</ComparisonListItem>
              <ComparisonListItem>In Teams-Chats nachsehen, was abgesprochen war</ComparisonListItem>
            </ComparisonList>
          </AfterCard>
          <BeforeCard className="rounded-2xl">
            <ComparisonHeadline>Das macht er nicht</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>Mails selbst verschicken oder Termine eintragen: Standard ist nur lesen</ComparisonListItem>
              <ComparisonListItem>Als Add-in in Outlook oder Excel laufen: Claude arbeitet in Claude Desktop</ComparisonListItem>
              <ComparisonListItem>Zellen in einer geöffneten Excel-Datei ändern</ComparisonListItem>
              <ComparisonListItem>Postfächer zeigen, auf die die Person selbst keinen Zugriff hat</ComparisonListItem>
            </ComparisonList>
          </BeforeCard>
        </ComparisonCard>
        <Typo.Paragraph textColor="muted" className="mx-auto mt-8 max-w-3xl text-center">
          Schreibrechte wie Entwürfe direkt im Postfach sind über Microsoft technisch möglich, aber bewusst nicht Standard. Ob und wofür, klären wir im Scoping.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Der nächste Schritt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Die Grundlage für den <span className="whitespace-nowrap">Mail-Agenten</span>
          </IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Vorsortieren">
            Der Mail-Agent ordnet neue Mails nach Mandant und Vorgang zu, bevor jemand das Postfach öffnet.
          </ProseColumns.Item>
          <ProseColumns.Item title="Nachhaken">
            Er erkennt fehlende Unterlagen und bereitet die Erinnerung an den Mandanten vor.
          </ProseColumns.Item>
          <ProseColumns.Item title="Gleiche Regeln">
            Rollen, Protokoll und eigenes Budget wie bei jeder Nutzung über das Gateway.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" id="preis">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Preis</IntroBox.PreHeadline>
          <IntroBox.Headline>So buchen Sie den Connector</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3}>
          <OfferCard
            href="/managed-claude/preise"
            price="500 € einmalig"
            title="Outlook Connector"
            description="Einrichtung mit App-Registrierung, Freigabe im Portal und Test mit Ihrer IT."
            linkLabel="Zu den Preisen"
          />
          <OfferCard
            highlight
            href="/managed-claude/coaching"
            price="100 % angerechnet"
            title="Mit Coaching-Paket M oder L"
            description="Bei Paket M oder L werden der Outlook Connector und die Einrichtung des Gateways voll angerechnet, bis zu 2.000 €."
            linkLabel="Zu den Coaching-Paketen"
          />
          <OfferCard
            href="/branchen/steuerberater/ki-agenten/mail-agent"
            title="Mail-Agent"
            description="Was der Mail-Agent im Kanzleialltag übernimmt, auf Basis des Outlook Connectors."
            linkLabel="Zum Mail-Agenten"
          />
        </SimpleGrid>
        <div className="mt-8 text-center">
          <InternalLink href="/managed-claude/integrationen">Alle Integrationen im Überblick</InternalLink>
        </div>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <FaqContainer headline="Häufige Fragen zu Claude und Outlook" faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Outlook mit Claude verbinden?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Im Scoping-Gespräch klären wir in 30 Minuten Ihren Microsoft-365-Tenant, die Anmeldung und wer Zugriff bekommt. Drei Tage danach haben Sie ein Angebot mit Festpreis, Verbrauchsschätzung und Limit-Vorschlag.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
