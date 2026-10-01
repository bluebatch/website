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
    "Claude mit Websuche: Bluebatch richtet die Websuche für Claude ein, damit euer Team aktuelle Informationen mit Quellenangabe bekommt, gesteuert über erlaubte und gesperrte Domains.",
  openGraph: {
    title: "Claude mit Websuche: aktuelle Antworten mit Quellen",
    description:
      "Claude mit Websuche: Bluebatch richtet die Websuche für Claude ein, damit euer Team aktuelle Informationen mit Quellenangabe bekommt, gesteuert über erlaubte und gesperrte Domains.",
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
          Mit der Websuche greift Claude auf aktuelle Informationen aus dem Internet zu und belegt Antworten mit Quellen. Bluebatch richtet die Websuche in der Claude App und in API-Anwendungen ein und legt fest, welche Domains erlaubt oder gesperrt sind, etwa nur Fachquellen oder Gesetzestexte.
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
            Marktdaten, Gesetzesänderungen oder Lieferanteninfos auf dem neuesten Stand.
          </ProseColumns.Item>
          <ProseColumns.Item title="Mit Quellen">
            Jede Aussage mit Fundstelle, damit euer Team sie prüfen kann.
          </ProseColumns.Item>
          <ProseColumns.Item title="Gesteuert">
            Erlaubte und gesperrte Domains, passend zu euren Anforderungen.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Websuche für Claude einrichten?</IntroBox.Headline>
          <IntroBox.Paragraph>
            In 30 Minuten klären wir, wo Claude bei euch den größten Hebel hat, welche Systeme angebunden werden und wie der Start aussieht.
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
