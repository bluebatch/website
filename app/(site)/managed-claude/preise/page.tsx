import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, DataTable, FaqContainer } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Managed Claude Preise: 1.500 € Setup, Tokens zum Listenpreis | Bluebatch",
  description:
    "Managed Claude kostet einmalig 1.500 € für das Setup. Danach zahlt ihr nur die Tokens direkt an AWS zum Listenpreis, ohne Seat-Lizenz. Betreuung und DATEV-Anbindung sind optional.",
  openGraph: {
    title: "Managed Claude Preise: 1.500 € Setup, Tokens zum Listenpreis",
    description:
      "Managed Claude kostet einmalig 1.500 € für das Setup. Danach zahlt ihr nur die Tokens direkt an AWS zum Listenpreis, ohne Seat-Lizenz. Betreuung und DATEV-Anbindung sind optional.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Was%20kostet%20Managed%20Claude%3F&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Was kostet Managed Claude?",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/preise",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Preise</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Was kostet Managed Claude?</Typo.H1>
        <GeoSummary align="center">
          Managed Claude kostet einmalig 1.500 € für das Setup mit AWS-Konto, Amazon Bedrock, Claude Desktop für bis zu 10 Nutzer und Nachweis-Paket. Danach fallen nur die Tokens an, die ihr direkt an AWS zum Listenpreis zahlt. Seat-Lizenzen gibt es nicht, Betreuung und DATEV-Anbindung sind optional.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Die Bausteine</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            highlight
            href="/managed-claude/onboarding"
            price="1.500 € einmalig"
            title="Managed Claude Setup"
            description="AWS-Konto in der EU, Claude über Bedrock, Claude Desktop für bis zu 10 Nutzer, Modellregeln, Nachweis-Paket und Onboarding."
            linkLabel="Was im Setup steckt"
          />
          <OfferCard
            href="/managed-claude/wie-es-funktioniert"
            price="nach Verbrauch"
            title="Tokens bei AWS"
            description="Laufende Nutzung direkt über eure AWS-Rechnung, zum Listenpreis und je Nutzer sichtbar. Keine Seat-Lizenz."
            linkLabel="Wie die Abrechnung läuft"
          />
          <OfferCard
            href="/managed-claude/integrationen/datev"
            price="ab 85 € je Kanzlei"
            title="DATEV-Anbindung"
            description="Zugriff auf DATEV-Daten über das AI Gateway, für Steuerkanzleien."
            linkLabel="Zur DATEV-Anbindung"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Optional: Betreuung im Monat</IntroBox.Headline>
          <IntroBox.Paragraph>
            Nach der Übergabe könnt ihr selbst weitermachen. Wer möchte, gibt den laufenden Betrieb an uns ab.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Modellwechsel">
            Neue Claude-Modelle prüfen und einspielen, sobald sie mit EU-Profil verfügbar sind.
          </ProseColumns.Item>
          <ProseColumns.Item title="Connectoren">
            Weitere Anbindungen wie DATEV, Microsoft 365 oder Websuche einrichten und pflegen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Nutzer und Kosten">
            Nutzer anlegen, Kosten im Blick behalten, Fragen aus dem Team beantworten.
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

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          headline="Fragen zu den Kosten"
          intro="Was beim Budget zuerst gefragt wird."
          faqs={[
            {
              "question": "Was genau ist im Festpreis enthalten?",
              "answer": "Ein AWS-Konto in der EU, Claude über Amazon Bedrock, Claude Desktop für bis zu 10 Nutzer, Modellregeln, das Nachweis-Paket und das Onboarding fürs Team. Festpreis 1.500 € einmalig."
            },
            {
              "question": "Welche laufenden Kosten kommen dazu?",
              "answer": "Nur die Tokens bei AWS, zum Listenpreis und je Nutzer sichtbar. Die Rechnung kommt direkt von AWS. Eine Betreuung durch Bluebatch ist optional."
            },
            {
              "question": "Was kostet es bei mehr als 10 Nutzern?",
              "answer": "Seat-Lizenzen gibt es nicht, auch nicht bei 50 Nutzern. Mehr Nutzer bedeuten nur mehr Tokens. Den Aufwand für die Einrichtung weiterer Nutzer klären wir im Gespräch."
            },
            {
              "question": "Ist das günstiger als das Abo?",
              "answer": "Das hängt von der Nutzung ab. Wer wenig nutzt, zahlt über Tokens oft weniger als pro Kopf. Vor allem aber dürft ihr im eigenen Konto mit Daten arbeiten, die ins Abo nicht gehören."
            }
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Ihr wollt eine konkrete Rechnung?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Schreibt uns Teamgröße und geplante Anwendungsfälle, dann schätzen wir Setup und Token-Kosten gemeinsam ab.
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
