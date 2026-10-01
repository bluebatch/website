import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Claude API: Claude in eigene Systeme integrieren | Bluebatch",
  description:
    "Claude API mit Bluebatch: Wir integrieren Claude per API in eure Systeme und Prozesse, mit Hosting in der EU, Kostenkontrolle und laufendem Betrieb.",
  openGraph: {
    title: "Claude API: Claude in eigene Systeme integrieren",
    description:
      "Claude API mit Bluebatch: Wir integrieren Claude per API in eure Systeme und Prozesse, mit Hosting in der EU, Kostenkontrolle und laufendem Betrieb.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20API%3A%20Claude%20in%20euren%20eigenen%20Systemen&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude API: Claude in euren eigenen Systemen",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/claude-api",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Claude API · Priorität 2</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Claude API: Claude in euren eigenen Systemen</Typo.H1>
        <GeoSummary align="center">
          Über die Claude API wird Claude Teil eurer eigenen Software und Prozesse, etwa im ERP, im Ticketsystem oder in automatisierten Abläufen. Bluebatch integriert die Claude API mit Betrieb in der EU, überwacht Kosten und Zugriffe und betreut die Anbindung laufend.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Wann die API statt der App</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Prozesse statt Chat">
            Claude arbeitet im Hintergrund, zum Beispiel beim Posteingang oder bei der Belegprüfung.
          </ProseColumns.Item>
          <ProseColumns.Item title="Eigene Oberflächen">
            Claude steckt in eurem Kundenportal, Intranet oder einer internen Anwendung.
          </ProseColumns.Item>
          <ProseColumns.Item title="Große Mengen">
            Viele Dokumente oder Anfragen automatisch verarbeiten, nach Verbrauch abgerechnet.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Was wir übernehmen</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Architektur">
            Welche Modelle, welche Region, welche Daten. Betrieb über Anthropic oder Cloud-Anbieter in der EU.
          </ProseColumns.Item>
          <ProseColumns.Item title="Integration">
            Anbindung an eure Systeme, inklusive Tools und MCP-Server für eure Daten.
          </ProseColumns.Item>
          <ProseColumns.Item title="Betrieb">
            Monitoring, Kostenkontrolle, Updates auf neue Modelle und Support.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Weiter geht es hier</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="gap-6">
          <OfferCard
            href="/managed-claude/use-cases"
            title="Use Cases"
            description="Was wir mit der Claude API konkret bauen."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/integrationen/mcp-server-erstellen"
            title="MCP-Server erstellen"
            description="Eure Systeme für Claude erreichbar machen."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Claude in eure Systeme bringen?</IntroBox.Headline>
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
