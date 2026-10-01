import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Claude API über Amazon Bedrock: Claude in eigenen Anwendungen | Bluebatch",
  description:
    "Claude API über Amazon Bedrock: Claude in euren eigenen Anwendungen und Prozessen, im eigenen AWS-Konto mit Verarbeitung in der EU. Bluebatch integriert und betreut.",
  openGraph: {
    title: "Claude API über Amazon Bedrock: Claude in eigenen Anwendungen",
    description:
      "Claude API über Amazon Bedrock: Claude in euren eigenen Anwendungen und Prozessen, im eigenen AWS-Konto mit Verarbeitung in der EU. Bluebatch integriert und betreut.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20in%20euren%20eigenen%20Anwendungen&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude in euren eigenen Anwendungen",
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
        <Typo.H1 className="text-center">Claude in euren eigenen Anwendungen</Typo.H1>
        <GeoSummary align="center">
          Wenn Claude nicht im Chat, sondern in euren eigenen Anwendungen arbeiten soll, braucht ihr keine App. Bluebatch bindet Claude über Amazon Bedrock in eurem AWS-Konto an eure Systeme an, mit Verarbeitung in der EU, Modellregeln und Kosten je Anwendung. Die Abrechnung läuft nach Tokens direkt über AWS.
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
          <ProseColumns.Item title="Prozesse im Hintergrund">
            Claude sortiert den Posteingang, prüft Belege oder fasst Dokumente zusammen, ohne dass jemand chattet.
          </ProseColumns.Item>
          <ProseColumns.Item title="Eigene Oberflächen">
            Claude steckt im Kundenportal, im Intranet oder in einer internen Fachanwendung.
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
          <ProseColumns.Item title="Bedrock einrichten">
            Modellzugang mit EU-Profil in eurem AWS-Konto, Opus 5 und Sonnet 5, Modellregeln.
          </ProseColumns.Item>
          <ProseColumns.Item title="Anbindung">
            Integration in eure Systeme, bei Bedarf mit eigenem MCP-Server für ERP oder Datenbank.
          </ProseColumns.Item>
          <ProseColumns.Item title="Betrieb">
            Monitoring, Kostenkontrolle je Anwendung und Wechsel auf neue Modelle.
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
            description="Was wir mit Claude konkret bauen."
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
          <IntroBox.Headline>Claude in eure Anwendungen bringen?</IntroBox.Headline>
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
