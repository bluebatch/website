import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns } from "@/components/ui";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Claude mit Websuche: aktuelle Antworten mit Quellen | Bluebatch",
  description:
    "Websuche im Private Claude AI Gateway: Claude recherchiert über Brave Search aktuelle Quellen im Web und belegt Antworten mit Fundstellen. Standardmäßig inklusive, ohne Aufpreis.",
  openGraph: {
    title: "Claude mit Websuche: aktuelle Antworten mit Quellen",
    description:
      "Websuche im Private Claude AI Gateway: Claude recherchiert über Brave Search aktuelle Quellen im Web und belegt Antworten mit Fundstellen. Standardmäßig inklusive, ohne Aufpreis.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20mit%20Websuche&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude mit Websuche",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/integrationen/websearch",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Integration · Websuche</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Claude mit Websuche</Typo.H1>
        <GeoSummary align="center">
          Im Private Claude AI Gateway ist die Websuche standardmäßig inklusive. Claude recherchiert über Brave Search aktuelle Informationen im Internet und belegt Antworten mit Quellen, zum Beispiel zu Gesetzesänderungen, Urteilen oder Marktdaten. Die Suche läuft über das Gateway, mit Protokoll und denselben Limits wie jede andere Nutzung.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Was damit möglich wird</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Aktuelle Recherche">
            Gesetzesänderungen, Urteile oder Marktdaten auf dem neuesten Stand, statt nur auf dem Wissensstand des Modells.
          </ProseColumns.Item>
          <ProseColumns.Item title="Mit Fundstellen">
            Jede Aussage mit Quelle, damit Ihr Team sie prüfen kann.
          </ProseColumns.Item>
          <ProseColumns.Item title="Standardmäßig dabei">
            Die Websuche ist ab der Einrichtung aktiv, ohne Aufpreis und ohne zusätzliches Abo.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Wie die Websuche läuft</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Brave Search">
            Gesucht wird über die Brave Search API, einen unabhängigen Suchindex.
          </ProseColumns.Item>
          <ProseColumns.Item title="Über das Gateway">
            Jede Suche läuft durch das Gateway und ist im Protokoll nachvollziehbar.
          </ProseColumns.Item>
          <ProseColumns.Item title="Gesteuert">
            Auf Wunsch schränken wir die Suche auf bestimmte Domains ein, etwa Fachquellen oder Gesetzestexte.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Fragen zur Websuche?</IntroBox.Headline>
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
