import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, TimelineAsSteps, TimelineAsStepsStep, DataTable } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Agenten zubuchen: Mail-Agent, Belegvorerfassung, Bescheidprüfung | Bluebatch",
  description:
    "Schritt 3 des Private Claude AI Gateway: Agenten, die von selbst arbeiten. Der erste ist fast immer der Mail-Agent, dazu Belegvorerfassung, Mandanten-Onboarding, wiederkehrende Auswertungen und Bescheidprüfung, gebaut auf n8n.",
  openGraph: {
    title: "Agenten zubuchen: Mail-Agent, Belegvorerfassung, Bescheidprüfung",
    description:
      "Schritt 3 des Private Claude AI Gateway: Agenten, die von selbst arbeiten. Der erste ist fast immer der Mail-Agent, dazu Belegvorerfassung, Mandanten-Onboarding, wiederkehrende Auswertungen und Bescheidprüfung, gebaut auf n8n.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Agenten%20zubuchen&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Agenten zubuchen",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/use-cases",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Schritt 3 · Use Cases</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Agenten zubuchen</Typo.H1>
        <GeoSummary align="center">
          Im Chat fragt ein Mensch, ein Agent arbeitet von selbst: Die Aufgabe löst sich aus, läuft durch, und der Mensch entscheidet nur noch die Zweifelsfälle. Agenten laufen auf derselben Infrastruktur wie der Chat des Private Claude AI Gateway, mit denselben Rechten und demselben Protokoll. Der erste Agent ist fast immer der Mail-Agent.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Der erste Agent ist fast immer der Mail-Agent</IntroBox.Headline>
        </IntroBox>
        <div className="overflow-x-auto">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Aufgabe</DataTable.HeaderCell>
                <DataTable.HeaderCell>Heute</DataTable.HeaderCell>
                <DataTable.HeaderCell>Mit Agent</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell bold>Posteingang</DataTable.Cell>
                <DataTable.Cell>Jede Mail von Hand sichten und zuordnen</DataTable.Cell>
                <DataTable.Cell bold>Vorsortiert nach Mandant und Vorgang, bevor jemand das Postfach öffnet</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Antworten</DataTable.Cell>
                <DataTable.Cell>Jede Standardanfrage neu tippen</DataTable.Cell>
                <DataTable.Cell bold>Entwurf liegt vorbereitet da, mit Bezug zum Vorgang</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Unterlagen</DataTable.Cell>
                <DataTable.Cell>Nachhaken, wer was noch nicht geschickt hat</DataTable.Cell>
                <DataTable.Cell bold>Erkennt fehlende Unterlagen und bereitet die Erinnerung vor</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Fristen</DataTable.Cell>
                <DataTable.Cell>Jemand muss daran denken</DataTable.Cell>
                <DataTable.Cell bold>Auffälligkeiten werden gemeldet, nicht gesucht</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>So arbeitet der Mail-Agent</IntroBox.Headline>
        </IntroBox>
        <div className="mx-auto max-w-3xl">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Auslöser</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Eine neue Mail trifft ein.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Zuordnen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Der Agent erkennt Mandant und Vorgang.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Entwerfen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Er schreibt die Antwort nach Ihrer Vorlage.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3 className="mt-2!">Ergebnis</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Der Entwurf liegt im Postfach, zur Freigabe.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>So wird das gebaut</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Auf n8n">
            Der Ablauf ist ein sichtbares Diagramm, kein Code. Sie lesen mit, was gebaut wurde.
          </ProseColumns.Item>
          <ProseColumns.Item title="In derselben Umgebung">
            Betrieb neben dem Gateway: keine zweite Datenschutzprüfung, keine zweite Vertragskette.
          </ProseColumns.Item>
          <ProseColumns.Item title="Der Mensch bleibt im Ablauf">
            Ein Agent bereitet vor und schlägt vor. Freigegeben und gezeichnet wird von einem Mitarbeiter, bei allem, was das Haus verlässt.
          </ProseColumns.Item>
          <ProseColumns.Item title="Eigenes Budget">
            Jeder Agent ist am Gateway ein eigener Verbraucher mit eigenem Deckel und kann nie mehr verbrauchen, als Sie ihm geben.
          </ProseColumns.Item>
          <ProseColumns.Item title="Vollständiges Protokoll">
            Jeder Schritt eines Agenten ist nachvollziehbar: wer, wann, auf welcher Grundlage.
          </ProseColumns.Item>
          <ProseColumns.Item title="Wann Schritt 3 dran ist">
            Wenn Sie aus dem Alltag wissen, welcher Vorgang oft genug vorkommt, um sich zu lohnen. Vorher auf dem Papier zu raten ist teurer.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Weitere Agenten, die Kanzleien zubuchen</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={4}>
          <ProseColumns.Item title="Belegvorerfassung">
            Belege vorprüfen und zuordnen, gebucht wird von Ihren Leuten.
          </ProseColumns.Item>
          <ProseColumns.Item title="Mandanten-Onboarding">
            Neue Mandate strukturiert aufnehmen, fehlende Unterlagen anfordern.
          </ProseColumns.Item>
          <ProseColumns.Item title="Wiederkehrende Auswertungen">
            Zum Beispiel die Montagsübersicht, die heute jemand von Hand baut.
          </ProseColumns.Item>
          <ProseColumns.Item title="Bescheidprüfung">
            Bescheid gegen Erklärung prüfen, Abweichungen und Fristen melden, Einspruchsentwurf vorbereiten.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Use Cases nach Branche</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/branchen/steuerberater"
            title="Steuerberater"
            description="Mail-Agent, Belegprüfung, Gutachten und DATEV mit Claude."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/branchen/anwaelte"
            title="Anwälte"
            description="Posteingang, Fristen und Schriftsatz-Entwürfe mit Claude."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/branchen/grosshandel"
            title="Großhandel"
            description="Angebote, Auftragserfassung und Chatbots auf ERP-Daten."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Entscheidungshilfen</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/use-cases/ki-agent-kaufen"
            title="KI-Agent kaufen"
            description="Drei Wege zum eigenen KI-Agenten mit Preis und Dauer im Vergleich."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/use-cases/ki-agent-kostenlos"
            title="KI-Agent kostenlos"
            description="Wie weit Sie ohne Budget kommen und was danach anfällt."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/use-cases/ki-chatbot-fuer-unternehmen"
            title="KI-Chatbot für Unternehmen"
            description="Die drei Bauarten, was sie kosten und welche reicht."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Welcher Agent lohnt sich bei Ihnen?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Im Scoping-Gespräch klären wir in 30 Minuten Stand der IT, Anmeldung, wer Zugriff bekommt und welche Systeme später relevant sind. Drei Tage danach haben Sie ein Angebot mit Festpreis, Verbrauchsschätzung und Limit-Vorschlag.
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
