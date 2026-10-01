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
    "Claude mit Websuche: Bluebatch bindet eine Websuche per MCP an das Private Claude AI Gateway an, mit Fundstellen und gesteuerten Domains, etwa nur Fachquellen oder Gesetzestexte.",
  openGraph: {
    title: "Claude mit Websuche: aktuelle Antworten mit Quellen",
    description:
      "Claude mit Websuche: Bluebatch bindet eine Websuche per MCP an das Private Claude AI Gateway an, mit Fundstellen und gesteuerten Domains, etwa nur Fachquellen oder Gesetzestexte.",
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
          Mit einer angebundenen Websuche greift Claude im Private Claude AI Gateway auf aktuelle Informationen aus dem Internet zu und belegt Antworten mit Quellen. Bluebatch bindet die Websuche als MCP-Anbindung an und legt fest, welche Domains erlaubt sind, zum Beispiel nur Fachquellen oder Gesetzestexte. Abgerechnet wird nach Aufwand, mit Schätzung vorab.
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
            Gesetzesänderungen, Urteile oder Marktdaten auf dem neuesten Stand.
          </ProseColumns.Item>
          <ProseColumns.Item title="Mit Fundstellen">
            Jede Aussage mit Quelle, damit Ihr Team sie prüfen kann.
          </ProseColumns.Item>
          <ProseColumns.Item title="Gesteuert">
            Erlaubte und gesperrte Domains, Protokoll und Budget wie bei jeder Anbindung.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Websuche für Claude einrichten?</IntroBox.Headline>
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
