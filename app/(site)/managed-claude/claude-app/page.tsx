import type { Metadata } from "next";
import { FileSearch, GraduationCap, Mail, PanelTop, PenLine, Scale, Table2, Monitor } from "lucide-react";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import {
  Typo,
  IntroBox,
  ProseColumns,
  DataTable,
  FaqContainer,
  TimelineAsSteps,
  TimelineAsStepsStep,
} from "@/components/ui";
import { OfferCard, SimpleCard, KpiCard } from "@/components/cards";
import { ContactButton, InternalLink } from "@/components/buttons";
import {
  Hero2Column,
  Hero2ColumnCallToAction,
  Hero2ColumnDescription,
  Hero2ColumnHeadline,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnSubtext,
  Hero2ColumnTextColumn,
} from "@/components/heroes";
import { ClaudeDesktopMock } from "@/components/mockups";
import { BannerScreen, SetupScreen } from "@/components/mockups/portal-screens";
import { FeatureRow } from "@/components/sections";

const description =
  "Claude fürs ganze Team: Claude Desktop für Windows und Mac mit Chat, Cowork und Projekten, über Ihr Gateway in AWS Frankfurt. Verbrauch statt Claude Team Abo.";

export const metadata: Metadata = {
  title: "Claude im Team: Claude Desktop für alle, ohne Lizenz pro Kopf | Bluebatch",
  description,
  openGraph: {
    title: "Claude im Team: Claude Desktop für alle, ohne Lizenz pro Kopf",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20f%C3%BCr%20Ihr%20ganzes%20Team&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude für Ihr ganzes Team",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/claude-app",
  },
};

const banner = "Kanzlei Müller · Private Gateway";

// Mocks einer Reihe gleich hoch: Fenster füllt die Zeile, Eingabefeld bleibt unten
const stretch = "flex flex-col [&>div:last-child]:flex-1";

const prompts = [
  {
    icon: FileSearch,
    title: "Bescheide prüfen",
    prompt: "Gleich den Bescheid mit unserer Erklärung ab und liste jede Abweichung mit Betrag.",
  },
  {
    icon: Mail,
    title: "Mails beantworten",
    prompt: "Fasse die Mail von Frau Krüger zusammen und entwirf eine Antwort im Kanzlei-Stil.",
  },
  {
    icon: Table2,
    title: "Belege auswerten",
    prompt: "Sortier die Kontoauszüge nach Kategorie und zeig mir alle Posten über 1.000 €.",
  },
  {
    icon: Scale,
    title: "Nachschlagen",
    prompt: "Was gilt für Bewirtungskosten bei Mandantenterminen? Bitte mit Fundstelle.",
  },
  {
    icon: PenLine,
    title: "Schreiben",
    prompt: "Schreib einen kurzen Vermerk zum Telefonat mit Herrn Weber von heute Vormittag.",
  },
  {
    icon: GraduationCap,
    title: "Einarbeiten",
    prompt: "Erklär mir als Azubi, wie eine Umsatzsteuer-Voranmeldung aufgebaut ist.",
  },
];

const faqs = [
  {
    question: "Was ist der Unterschied zwischen dem Claude Team Plan und Managed Claude?",
    answer:
      "Der Claude Team Plan ist das Abo von Anthropic mit einer Lizenz pro Kopf und Monat, Claude läuft dabei auf der Infrastruktur von Anthropic. Bei Managed Claude nutzt Ihr Team dieselbe Claude Desktop App, verbunden mit Ihrem eigenen Private Claude AI Gateway über AWS Bedrock in Frankfurt. Abgerechnet wird nach Verbrauch, verwaltet wird im Managed Claude Interface.",
  },
  {
    question: "Claude Team vs. Enterprise: Was passt zu einer Kanzlei?",
    answer:
      "Beide sind Abos von Anthropic: Team für kleinere Teams mit festen Lizenzen, Enterprise mit individuellem Vertrag für größere Organisationen. Für Kanzleien mit Mandantendaten kommt eine dritte Frage dazu, nämlich wo Claude läuft und wer Vertragspartner ist. Managed Claude beantwortet sie mit AWS Frankfurt im eigenen Konto und einer Auslegung auf § 203 StGB und § 62a StBerG.",
  },
  {
    question: "Brauche ich für jede Person einen Claude Team Account?",
    answer:
      "Nein. Jede Person meldet sich in Claude Desktop per SSO beim Gateway an. Ein eigenes Konto oder Abo bei Anthropic ist nicht nötig. Wer im Team ist, verwalten Sie im Managed Claude Interface.",
  },
  {
    question: "Läuft Claude Cowork auch unter Windows?",
    answer:
      "Ja. Chat, Cowork und Projekte laufen in der Claude Desktop App unter Windows und macOS. Für Windows gibt es die Einrichtung als Registry-Datei für ein einzelnes Konto oder systemweit, etwa für Terminalserver.",
  },
  {
    question: "Was kostet Claude für ein Team über das Gateway?",
    answer:
      "Die Einrichtung kostet einmalig 1.500 €, danach zahlen Sie den Verbrauch laut Preisliste je 1 Million Tokens, ohne Lizenz pro Kopf. Als Erfahrungswert liegen normale Nutzer bei etwa 40 € im Monat, Heavy User bei etwa 100 € und Experten-Nutzer bei etwa 300 €.",
  },
  {
    question: "Welche Funktionen fehlen gegenüber den Abos von Anthropic?",
    answer:
      "Über das Gateway gibt es keine mobile App, kein Diktieren und keinen Sprachmodus, keine Design-Funktionen und keine Standard-Apps aus dem Claude Marketplace. Chats liegen nur auf dem jeweiligen Rechner.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Claude App · Schritt 1</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>Claude für Ihr ganzes Team</Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Die Claude App ist Schritt 1 des Private Claude AI Gateway: Claude Desktop für Windows und Mac mit
              Chat, Cowork und Projekten, für jede Person im Team ab Tag 1. Anders als bei Claude Team oder
              Enterprise von Anthropic zahlen Sie keine Lizenz pro Kopf, sondern Verbrauch, und Claude läuft über
              AWS Bedrock in Frankfurt in Ihrem eigenen Konto.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>Windows und Mac · Anmeldung per SSO · Einrichtung 1.500 € Festpreis</Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <div className="relative isolate">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-primary-200/70 via-primary-100/40 to-transparent blur-3xl"
              />
              <ClaudeDesktopMock mode="Chat" model="Sonnet 5.5">
                <ClaudeDesktopMock.Banner>{banner}</ClaudeDesktopMock.Banner>
                <ClaudeDesktopMock.User>
                  Herr Weber fragt, ob er sein Arbeitszimmer für 2026 absetzen kann. Was antworten wir?
                </ClaudeDesktopMock.User>
                <ClaudeDesktopMock.Tool>Outlook · 1 Mail gelesen</ClaudeDesktopMock.Tool>
                <ClaudeDesktopMock.Assistant>
                  <p>
                    Laut seiner Mail arbeitet Herr Weber an drei Tagen pro Woche zu Hause, der Mittelpunkt seiner
                    Tätigkeit ist das Büro. Damit gilt:
                  </p>
                  <ul>
                    <li>Arbeitszimmer voll absetzbar: nein</li>
                    <li>
                      Tagespauschale: 6 € je Homeoffice-Tag, höchstens 1.260 € im Jahr (§ 4 Abs. 5 Satz 1 Nr. 6c
                      EStG)
                    </li>
                  </ul>
                  <p>Soll ich die Antwort an Herrn Weber im Kanzlei-Stil entwerfen?</p>
                </ClaudeDesktopMock.Assistant>
              </ClaudeDesktopMock>
            </div>
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Chat, Cowork und Projekte</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Drei Arbeitsweisen in einer App</IntroBox.Headline>
          <IntroBox.Paragraph>
            Ihr Team arbeitet in der Claude Desktop App von Anthropic. Je nach Aufgabe fragt man kurz nach, lässt
            Claude selbst arbeiten oder sammelt alles zu einem Mandat in einem Projekt.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-y-14 lg:gap-x-10">
          <FeatureRow.Tile>
            <ClaudeDesktopMock mode="Chat" compact className={stretch}>
              <ClaudeDesktopMock.Banner>{banner}</ClaudeDesktopMock.Banner>
              <ClaudeDesktopMock.User>
                Vergleich den ESt-Bescheid 2025 der Familie Weber mit unserer Erklärung.
              </ClaudeDesktopMock.User>
              <ClaudeDesktopMock.Tool>PDF gelesen · 4 Seiten</ClaudeDesktopMock.Tool>
              <ClaudeDesktopMock.Assistant>
                <p>Zwei Abweichungen:</p>
                <ul>
                  <li>Handwerkerleistungen: 1.240 € statt 1.860 € anerkannt</li>
                  <li>Kinderbetreuungskosten fehlen ganz</li>
                </ul>
              </ClaudeDesktopMock.Assistant>
            </ClaudeDesktopMock>
            <div>
              <Typo.H3 className="mt-0! mb-3!">Chat: die schnelle Frage</Typo.H3>
              <Typo.Paragraph textColor="muted">
                Ein Dokument, eine Auskunft, ein Entwurf. Bescheid gegen Erklärung prüfen, Mail beantworten, Vermerk
                schreiben, mit Outlook und Websuche, wenn Ihre Admins sie freigeben.
              </Typo.Paragraph>
            </div>
          </FeatureRow.Tile>
          <FeatureRow.Tile>
            <ClaudeDesktopMock mode="Cowork" compact className={stretch}>
              <ClaudeDesktopMock.Banner>{banner}</ClaudeDesktopMock.Banner>
              <ClaudeDesktopMock.User>
                Lies die Belege in C:\Akten\Weber und leg mir eine Übersicht nach Monat als Excel ab.
              </ClaudeDesktopMock.User>
              <ClaudeDesktopMock.Tool>38 Dateien gelesen · 1 Datei erstellt</ClaudeDesktopMock.Tool>
              <ClaudeDesktopMock.Assistant>
                <p>
                  Fertig: <strong>Belege_Weber_2025.xlsx</strong> liegt in C:\Claude-Ablage. Drei Belege ohne Datum
                  habe ich gelb markiert.
                </p>
              </ClaudeDesktopMock.Assistant>
            </ClaudeDesktopMock>
            <div>
              <Typo.H3 className="mt-0! mb-3!">Cowork: Claude arbeitet selbst</Typo.H3>
              <Typo.Paragraph textColor="muted">
                Claude erledigt mehrstufige Aufgaben direkt auf dem Rechner: liest Dateien in freigegebenen Ordnern,
                baut Übersichten und legt Ergebnisse ab. Claude Cowork läuft unter Windows und Mac.
              </Typo.Paragraph>
            </div>
          </FeatureRow.Tile>
          <FeatureRow.Tile>
            <ClaudeDesktopMock mode="Chat" compact className={stretch}>
              <ClaudeDesktopMock.Banner>{banner}</ClaudeDesktopMock.Banner>
              <div className="-mt-1 flex items-center gap-1.5 self-start rounded-lg bg-[#f0eee6] px-2.5 py-1 text-[11px] font-medium text-[#6b6657]">
                Projekt: Weber GmbH · Abschluss 2025 · 12 Dateien
              </div>
              <ClaudeDesktopMock.User>Welche Rückstellungen hatten wir im Vorjahr gebildet?</ClaudeDesktopMock.User>
              <ClaudeDesktopMock.Assistant>
                <p>
                  Laut Jahresabschluss 2024 im Projekt: Abschluss- und Prüfungskosten, Urlaub und Gewährleistung,
                  zusammen 48.300 €.
                </p>
              </ClaudeDesktopMock.Assistant>
            </ClaudeDesktopMock>
            <div>
              <Typo.H3 className="mt-0! mb-3!">Projekte: ein Arbeitsbereich je Mandat</Typo.H3>
              <Typo.Paragraph textColor="muted">
                Unterlagen und Hinweise bleiben im Projekt liegen. Jede Frage setzt auf dem auf, was schon da ist,
                statt alles neu hochzuladen.
              </Typo.Paragraph>
            </div>
          </FeatureRow.Tile>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Ab Tag 1</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Was Ihr Team damit macht</IntroBox.Headline>
          <IntroBox.Paragraph>
            Kein Pilotprojekt für drei Leute: Ab dem ersten Tag arbeitet die ganze Kanzlei mit Claude. So klingen
            typische Anfragen.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          {prompts.map(({ icon: Icon, title, prompt }) => (
            <SimpleCard key={title} align="left" className="rounded-2xl">
              <Typo.H3 disableMargin className="mb-4 flex items-center gap-3 text-lg! md:text-xl!">
                <Icon className="h-6 w-6 shrink-0 text-primary-500" aria-hidden />
                {title}
              </Typo.H3>
              <p className="rounded-2xl rounded-bl-md bg-[#f0eee6] px-4 py-3 text-[15px] leading-relaxed text-[#29261b]">
                {prompt}
              </p>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <FeatureRow id="desktop">
          <FeatureRow.Text>
            <FeatureRow.Label>
              <Monitor aria-hidden /> Claude Desktop App
            </FeatureRow.Label>
            <Typo.H2 disableMargin className="mb-5 text-balance">
              Für Windows und Mac, eingerichtet mit einer Datei
            </Typo.H2>
            <Typo.Paragraph textColor="muted" spacing="lg">
              Ihr Team nutzt die Claude Desktop App von Anthropic. Verbunden wird sie nicht mit einem Claude Team
              Account, sondern mit Ihrem Gateway. Das erledigt eine Datei aus dem Managed Claude Interface.
            </Typo.Paragraph>
            <TimelineAsSteps>
              <TimelineAsStepsStep value={1}>
                <Typo.H3 className="mt-1! mb-1! text-lg! md:text-xl!">Datei herunterladen</Typo.H3>
                <Typo.Paragraph textColor="muted">
                  <code className="whitespace-nowrap">claude.reg</code> für das eigene Windows-Konto, <code className="whitespace-nowrap">claude-machine.reg</code> systemweit,
                  etwa für Terminalserver, oder <code className="whitespace-nowrap">ai_gateway.json</code> für Mac und Windows.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={2}>
                <Typo.H3 className="mt-1! mb-1! text-lg! md:text-xl!">Einspielen</Typo.H3>
                <Typo.Paragraph textColor="muted">
                  Doppelklick und Rückfrage bestätigen. Die systemweite Datei kann Ihre IT per Softwareverteilung
                  ausrollen.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={3}>
                <Typo.H3 className="mt-1! mb-1! text-lg! md:text-xl!">Per SSO anmelden</Typo.H3>
                <Typo.Paragraph textColor="muted" spacing="none">
                  Claude Desktop neu starten und anmelden. Banner, Anweisungen, Skills und Connectors holt sich die
                  App danach selbst.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
            </TimelineAsSteps>
          </FeatureRow.Text>
          <FeatureRow.Media>
            <SetupScreen sidebar={false} />
          </FeatureRow.Media>
        </FeatureRow>
      </ContentWrapper>

      <ContentWrapper>
        <FeatureRow id="interface" reverse>
          <FeatureRow.Text>
            <FeatureRow.Label>
              <PanelTop aria-hidden /> Managed Claude Interface
            </FeatureRow.Label>
            <Typo.H2 disableMargin className="mb-5 text-balance">
              Admins stellen ein, das Team arbeitet
            </Typo.H2>
            <Typo.Paragraph textColor="muted">
              Was Claude Desktop bei jeder Person mitbringt, legen Ihre Admins einmal zentral im Managed Claude
              Interface fest. Niemand richtet Rechner einzeln ein.
            </Typo.Paragraph>
            <FeatureRow.Points>
              <FeatureRow.Point>Ein Banner zeigen, damit jeder sieht: Das ist die Kanzlei-Umgebung.</FeatureRow.Point>
              <FeatureRow.Point>Anweisungen und Skills für Kanzlei-Stil und feste Abläufe verteilen.</FeatureRow.Point>
              <FeatureRow.Point>Outlook, Websuche und eigene MCP-Server je Person freigeben.</FeatureRow.Point>
              <FeatureRow.Point>Budgets je Person setzen und den Verbrauch in Euro sehen.</FeatureRow.Point>
            </FeatureRow.Points>
            <InternalLink href="/managed-claude/zentrale-steuerung" className="mt-6">
              Alle Funktionen des Managed Claude Interface
            </InternalLink>
          </FeatureRow.Text>
          <FeatureRow.Media>
            <div className="mx-auto max-w-xl">
              <BannerScreen compact />
            </div>
          </FeatureRow.Media>
        </FeatureRow>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" id="vergleich">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Claude Team vs. Enterprise</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Claude Team, Enterprise oder eigenes Gateway?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Claude Team und Claude Enterprise sind die Abos von Anthropic. Managed Claude bringt dieselbe Desktop-App
            über Ihr eigenes Gateway. Die Unterschiede liegen bei Abrechnung, Ort der Verarbeitung und Verwaltung.
          </IntroBox.Paragraph>
        </IntroBox>
        <DataTable className="mx-auto max-w-6xl [&_table]:min-w-[720px]">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Kriterium</DataTable.HeaderCell>
              <DataTable.HeaderCell className="bg-primary-600!">Managed Claude</DataTable.HeaderCell>
              <DataTable.HeaderCell>Claude Team</DataTable.HeaderCell>
              <DataTable.HeaderCell>Claude Enterprise</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Vertragspartner</DataTable.Cell>
              <DataTable.Cell bold>Bluebatch, Claude über AWS Bedrock</DataTable.Cell>
              <DataTable.Cell>Anthropic</DataTable.Cell>
              <DataTable.Cell>Anthropic</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Abrechnung</DataTable.Cell>
              <DataTable.Cell bold>Verbrauch, keine Lizenz pro Kopf</DataTable.Cell>
              <DataTable.Cell>Lizenz pro Kopf und Monat</DataTable.Cell>
              <DataTable.Cell>Lizenz pro Kopf, individueller Vertrag</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Wo Claude läuft</DataTable.Cell>
              <DataTable.Cell bold>AWS Frankfurt, in Ihrem eigenen Konto</DataTable.Cell>
              <DataTable.Cell>Infrastruktur von Anthropic</DataTable.Cell>
              <DataTable.Cell>Infrastruktur von Anthropic</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Verwaltung</DataTable.Cell>
              <DataTable.Cell bold>Managed Claude Interface</DataTable.Cell>
              <DataTable.Cell>Claude Admin Console</DataTable.Cell>
              <DataTable.Cell>Claude Admin Console</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Berufsgeheimnis</DataTable.Cell>
              <DataTable.Cell bold>Ausgelegt auf § 203 StGB und § 62a StBerG</DataTable.Cell>
              <DataTable.Cell>Eigene Prüfung nötig</DataTable.Cell>
              <DataTable.Cell>Eigene Prüfung nötig</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Mobile App und Sprache</DataTable.Cell>
              <DataTable.Cell bold>Nein, nur Desktop</DataTable.Cell>
              <DataTable.Cell>Ja</DataTable.Cell>
              <DataTable.Cell>Ja</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Einrichtung</DataTable.Cell>
              <DataTable.Cell bold>Durch Bluebatch, 1.500 € Festpreis</DataTable.Cell>
              <DataTable.Cell>Selbst</DataTable.Cell>
              <DataTable.Cell>Selbst, mit Anthropic</DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Kosten</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Verbrauch statt Lizenz pro Kopf</IntroBox.Headline>
          <IntroBox.Paragraph>
            Nicht jeder nutzt Claude täglich. Erfahrungsgemäß tragen 20 bis 30 % der Belegschaft den Großteil der
            Nutzung. Deshalb zahlen Sie, was tatsächlich verbraucht wird. Erfahrungswerte pro Person und Monat:
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3} className="mx-auto max-w-5xl gap-6">
          <KpiCard valueText="ca. 40 €" subtitle="Normale Nutzer: gelegentlich Chat und Entwürfe" />
          <KpiCard valueText="ca. 100 €" subtitle="Heavy User: täglich, viele Dokumente" />
          <KpiCard valueText="ca. 300 €" subtitle="Experten-Nutzer: Opus, lange Analysen, Agenten" />
        </SimpleGrid>
        <div className="mt-10 flex justify-center">
          <InternalLink href="/managed-claude/preise">Kosten für Ihr Team im Rechner schätzen</InternalLink>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Transparenz vorab</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Was über das Gateway nicht geht</IntroBox.Headline>
          <IntroBox.Paragraph>
            Diese Funktionen der Claude App von Anthropic gibt es über das Gateway nicht. Und eines ändert sich
            auch mit Claude nicht.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Keine mobile App">
            Die mobile Claude App lässt sich nicht mit dem Gateway nutzen. Gearbeitet wird in Claude Desktop.
          </ProseColumns.Item>
          <ProseColumns.Item title="Kein Diktieren">
            Sprachmodus und Diktieren sind nicht verfügbar. Eingaben erfolgen per Text oder Dokument.
          </ProseColumns.Item>
          <ProseColumns.Item title="Chats nur lokal">
            Chats liegen auf dem jeweiligen Rechner und lassen sich nicht auf einem anderen Gerät abrufen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Kein Design">
            Die Design-Funktionen von Claude sind nicht enthalten.
          </ProseColumns.Item>
          <ProseColumns.Item title="Kein Claude Marketplace">
            Standard-Apps aus dem Marketplace, etwa der Google-Drive-Connector, sind nicht verfügbar. Eigene
            Connectors richten wir über MCP ein.
          </ProseColumns.Item>
          <ProseColumns.Item title="Fachliche Prüfung bleibt">
            Claude liefert Entwürfe und Fundstellen. Gezeichnet wird weiter von einem Berufsträger.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline className="text-balance">Wie es weitergeht</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/coaching"
            title="Schritt 2: Coaching"
            description="Das Team lernt, Claude gut zu nutzen. Das Wissen bleibt im Haus."
            linkLabel="Zum Coaching"
          />
          <OfferCard
            href="/managed-claude/use-cases"
            title="Schritt 3: Agenten"
            description="Mail-Agent und weitere Agenten auf derselben Infrastruktur."
            linkLabel="Zu den Agenten"
          />
          <OfferCard
            href="/managed-claude/preise"
            title="Preise"
            description="Einrichtung als Festpreis, danach Verbrauch laut Preisliste je 1 Mio. Tokens."
            price="1.500 €"
            linkLabel="Zu den Preisen"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          headline="Fragen zu Claude im Team"
          intro="Was Kanzleien vor der Entscheidung zwischen Abo und eigenem Gateway fragen."
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline className="text-balance">Claude für alle im Team einführen?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Im Scoping-Gespräch klären wir in 30 Minuten Stand der IT, Anmeldung, wer Zugriff bekommt und welche
            Systeme später relevant sind. Drei Tage danach haben Sie ein Angebot mit Festpreis, Verbrauchsschätzung
            und Limit-Vorschlag.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
