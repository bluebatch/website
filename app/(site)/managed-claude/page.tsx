import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, TimelineAsSteps, TimelineAsStepsStep, DataTable, FaqContainer } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

export const rewriteSiteConfig: RewriteSiteConfig = {
  legacyRedirects: ["/ki-implementierung"],
  rewrites: [],
};

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Managed Claude: Claude im eigenen AWS-Konto, Verarbeitung in der EU | Bluebatch",
  description:
    "Managed Claude von Bluebatch: Claude über Amazon Bedrock in eurem eigenen AWS-Konto, Verarbeitung in der EU, Claude Desktop ohne Seat-Lizenz. Setup für 1.500 € Festpreis, Tokens direkt über AWS.",
  openGraph: {
    title: "Managed Claude: Claude im eigenen AWS-Konto, Verarbeitung in der EU",
    description:
      "Managed Claude von Bluebatch: Claude über Amazon Bedrock in eurem eigenen AWS-Konto, Verarbeitung in der EU, Claude Desktop ohne Seat-Lizenz. Setup für 1.500 € Festpreis, Tokens direkt über AWS.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20in%20eurem%20eigenen%20AWS-Konto&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude in eurem eigenen AWS-Konto",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Managed Claude</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Claude in eurem eigenen AWS-Konto</Typo.H1>
        <GeoSummary align="center">
          Managed Claude ist das Setup von Bluebatch für Unternehmen und Kanzleien, die Claude mit vertraulichen Daten nutzen wollen. Claude läuft über Amazon Bedrock in eurem eigenen AWS-Konto mit Verarbeitung in der EU, euer Team arbeitet in Claude Desktop ohne Seat-Lizenz. Das Setup kostet einmalig 1.500 €, die Tokens zahlt ihr direkt an AWS.
        </GeoSummary>
        <div className="mx-auto mb-8 max-w-xl">
          <Typo.List>
            <Typo.ListItem>Claude über Amazon Bedrock, Verarbeitung in der EU</Typo.ListItem>
            <Typo.ListItem>Claude Desktop mit Cowork und Code, ohne Seat-Lizenz</Typo.ListItem>
            <Typo.ListItem>Nachweis-Paket mit Löschkonzept und Verschwiegenheitserklärung</Typo.ListItem>
            <Typo.ListItem>1.500 € Festpreis, Tokens direkt über AWS</Typo.ListItem>
          </Typo.List>
        </div>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Zwei Bausteine, ein Setup</IntroBox.Headline>
          <IntroBox.Paragraph>
            Amazon Bedrock in eurem AWS-Konto plus die Claude-App für euer Team. Verarbeitung in der EU, Kosten je Nutzer sichtbar.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={2}>
          <ProseColumns.Item title="Amazon Bedrock als Modell-Backend">
            Claude läuft in eurem AWS-Konto mit EU-Profil. Bedrock speichert Anfragen standardmäßig nicht, Modellregeln legen fest, was erlaubt ist, und weder AWS noch Anthropic sehen eure Inhalte.
          </ProseColumns.Item>
          <ProseColumns.Item title="Claude Desktop fürs Team">
            Cowork und Code in der gewohnten Claude-Oberfläche, verteilt über eure Geräteverwaltung, mit SSO. Keine Seat-Lizenz, abgerechnet wird nach Tokens.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Wofür Teams Managed Claude nutzen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Ob Mittelstand oder Kanzlei: Claude arbeitet dort, wo die Daten ohnehin hingehören.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Schriftsätze prüfen">
            Entwürfe in Minuten gegen die Akte prüfen. Die Mandantendaten bleiben im eigenen Konto.
          </ProseColumns.Item>
          <ProseColumns.Item title="Mails vorsortieren">
            Eingänge einordnen und Antworten vorbereiten. Entscheiden tut weiterhin ein Mensch.
          </ProseColumns.Item>
          <ProseColumns.Item title="Akten durchsuchen">
            Fragen direkt an Verträge und Gutachten stellen, ohne vorher alles zu anonymisieren.
          </ProseColumns.Item>
          <ProseColumns.Item title="Claude Code fürs Team">
            Claude Code über Bedrock statt privater Konten: feste Modelle, Kosten je Team sichtbar.
          </ProseColumns.Item>
          <ProseColumns.Item title="DATEV-Anbindung">
            Claude greift über ein AI Gateway auf DATEV-Daten zu. Optional ab 85 € je Kanzlei.
          </ProseColumns.Item>
          <ProseColumns.Item title="Personaldaten auswerten">
            Profile und Bewerbungsunterlagen auswerten, ohne sie in ein Abo zu kopieren.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Abo, Chat-Plattform oder eigenes Konto?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Das normale Claude-Abo verarbeitet nicht in der EU. Im eigenen AWS-Konto zahlt ihr den Listenpreis und behaltet die Kontrolle.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="overflow-x-auto">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Kriterium</DataTable.HeaderCell>
                <DataTable.HeaderCell>Claude-Abo</DataTable.HeaderCell>
                <DataTable.HeaderCell>Chat-Plattform</DataTable.HeaderCell>
                <DataTable.HeaderCell>Managed Claude</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell bold>Kosten fürs Team</DataTable.Cell>
                <DataTable.Cell>Pro Nutzer und Monat</DataTable.Cell>
                <DataTable.Cell>Paket mit Limits</DataTable.Cell>
                <DataTable.Cell bold>1.500 € einmalig, danach Tokens zum Listenpreis</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Verarbeitung in der EU</DataTable.Cell>
                <DataTable.Cell>Nein, USA oder global</DataTable.Cell>
                <DataTable.Cell>Je nach Anbieter</DataTable.Cell>
                <DataTable.Cell bold>Ja, EU-Profil in eurem AWS-Konto</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Mandanten- und Personaldaten</DataTable.Cell>
                <DataTable.Cell>Nicht vorgesehen</DataTable.Cell>
                <DataTable.Cell>Je nach Vertrag</DataTable.Cell>
                <DataTable.Cell bold>Mit Nachweis-Paket, Bewertung durch euch</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Anbieter-Lock-in</DataTable.Cell>
                <DataTable.Cell>Hoch</DataTable.Cell>
                <DataTable.Cell>Hoch</DataTable.Cell>
                <DataTable.Cell bold>Keiner, das Konto gehört euch</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Modellwahl</DataTable.Cell>
                <DataTable.Cell>Fest im Abo</DataTable.Cell>
                <DataTable.Cell>Vorgabe des Anbieters</DataTable.Cell>
                <DataTable.Cell bold>Frei: Opus 5 und Sonnet 5 über Bedrock</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Startklar</DataTable.Cell>
                <DataTable.Cell>Sofort</DataTable.Cell>
                <DataTable.Cell>Sofort</DataTable.Cell>
                <DataTable.Cell bold>In wenigen Tagen</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Betreuung</DataTable.Cell>
                <DataTable.Cell>Anbieter-Support</DataTable.Cell>
                <DataTable.Cell>Anbieter-Support</DataTable.Cell>
                <DataTable.Cell bold>Übergabe an euch, Betreuung optional</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
        <Typo.Paragraph className="mx-auto mt-6 max-w-3xl text-center text-gray-600">
          Mit dem Abo zahlt ihr pro Kopf und lasst alles Vertrauliche draußen. Mit Managed Claude richtet Bluebatch ein, und das Konto bleibt eures.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>In vier Schritten startklar</IntroBox.Headline>
        </IntroBox>
        <div className="mx-auto max-w-3xl">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Kurzer Check</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Drei Fragen klären, ob das Setup zu euch passt: vertrauliche Daten, Claude-App fürs Team, vorhandenes AWS-Konto.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Gespräch, 30 Minuten</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Nutzerzahl, AWS-Konto, Datenarten und der erste Anwendungsfall. Danach steht der Plan.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Setup</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                AWS-Konto in der EU, Claude über Amazon Bedrock, Claude Desktop, Modellregeln und Nachweis-Paket. Dauer: wenige Tage.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3 className="mt-2!">Übergabe und Start</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Onboarding fürs Team, Doku an euch. Auf Wunsch betreuen wir weiter, das Konto bleibt in jedem Fall eures.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Alles zu Managed Claude</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            highlight
            href="/managed-claude/claude-app"
            title="Claude App"
            description="Claude Desktop mit Cowork und Code über Bedrock, ohne Seat-Lizenz."
            linkLabel="Zur Claude App"
          />
          <OfferCard
            href="/managed-claude/claude-api"
            title="Claude API"
            description="Claude über Bedrock in euren eigenen Anwendungen, ganz ohne App."
            linkLabel="Zur Claude API"
          />
          <OfferCard
            href="/managed-claude/use-cases"
            title="Use Cases"
            description="Was wir mit Claude für euch bauen, von Schriftsatz bis DATEV."
            linkLabel="Zu den Use Cases"
          />
          <OfferCard
            href="/managed-claude/wie-es-funktioniert"
            title="Wie es funktioniert"
            description="Architektur, Datenfluss und wer wofür verantwortlich ist."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/onboarding"
            title="Onboarding"
            description="Was im Setup steckt und wie die Übergabe abläuft."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/preise"
            title="Preise"
            description="1.500 € Setup, Tokens zum Listenpreis, Betreuung optional."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/integrationen"
            title="Integrationen"
            description="DATEV, Microsoft 365 und Websuche für Claude."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/weitere-tools/n8n"
            title="n8n"
            description="Hosting, Wartung und Schulungen für n8n bieten wir weiterhin an."
            linkLabel="Zum n8n-Hub"
          />
          <OfferCard
            href="/managed-claude/weitere-tools"
            title="Weitere Tools"
            description="Make, Zapier, Navision, easybill, e.bootis und mehr."
            linkLabel="Zu allen Tools"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          headline="Fragen, die zuerst kommen"
          intro="Was Entscheider vor dem Start wissen wollen."
          faqs={[
            {
              "question": "Reicht nicht das normale Claude-Abo?",
              "answer": "Für allgemeine Aufgaben ja. Claude Pro oder Team reichen, solange keine vertraulichen Daten im Spiel sind. Wer Mandanten-, Personal- oder Vertragsdaten mit Claude verarbeiten will, braucht ein eigenes Konto. Wir sagen euch ehrlich, was bei euch zutrifft."
            },
            {
              "question": "Was ist der Unterschied zum Abo?",
              "answer": "Im Abo verarbeitet Anthropic in den USA oder global. Bei Managed Claude liegen Modellzugang, Nutzer und Kosten in eurem eigenen AWS-Konto in der EU. Vertragspartner für die Modelle ist AWS, Bluebatch richtet ein und betreut auf Wunsch."
            },
            {
              "question": "Bleiben unsere Daten in der EU?",
              "answer": "Ja. Claude läuft über Amazon Bedrock mit EU-Profil in eurem AWS-Konto. Bedrock speichert Anfragen standardmäßig nicht, nutzt sie nicht für Training und gibt sie nicht an Anthropic weiter."
            },
            {
              "question": "Was kostet das?",
              "answer": "Das Setup kostet einmalig 1.500 €. Danach zahlt ihr nur die Tokens direkt an AWS, zum Listenpreis und je Nutzer sichtbar. Eine laufende Betreuung durch Bluebatch ist optional."
            },
            {
              "question": "Gibt es Lizenzkosten pro Nutzer?",
              "answer": "Nein. Claude Desktop über Bedrock hat keine Seat-Lizenz, auch nicht bei 50 Nutzern. Es bleiben das Setup und die Tokens."
            },
            {
              "question": "Wie ist das mit dem Berufsgeheimnis?",
              "answer": "Wir liefern ein Nachweis-Paket für eure Prüfung: Datenfluss, Löschkonzept, TOMs und unsere Verschwiegenheitserklärung. Die berufsrechtliche Bewertung, etwa nach § 43e BRAO oder § 62a StBerG, bleibt bei euch."
            },
            {
              "question": "Wir haben noch kein AWS-Konto. Geht das trotzdem?",
              "answer": "Ja. Wir legen das Konto gemeinsam mit euch an. Die Rechnung für die Tokens kommt dann direkt von AWS."
            },
            {
              "question": "Welche Modelle sind dabei?",
              "answer": "Opus 5 und Sonnet 5, beide ohne Speicherung und mit EU-Profil. Fable 5 setzen wir bewusst nicht ein: Es hat auf Bedrock kein EU-Profil und speichert alle Anfragen 30 Tage."
            },
            {
              "question": "Was passiert nach dem Setup?",
              "answer": "Euer Team arbeitet mit Claude, die Dokumentation geht an euch. Auf Wunsch übernimmt Bluebatch die Betreuung, Modellwechsel und weitere Connectoren, zum Beispiel zu DATEV oder Microsoft 365."
            }
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Passt Managed Claude zu euch?</IntroBox.Headline>
          <IntroBox.Paragraph>
            30 Minuten reichen: Wie viele Nutzer, gibt es schon ein AWS-Konto, welche Daten sollen zu Claude und womit startet ihr. Danach wisst ihr, ob das Setup passt.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
