import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Claude API über das Gateway: Claude in eigenen Anwendungen | Bluebatch",
  description:
    "Claude API über das Private Claude AI Gateway: eigene Anwendungen und Agenten nutzen Claude über AWS Bedrock Frankfurt, mit eigener Kennung, eigenem Budget und vollständigem Protokoll.",
  openGraph: {
    title: "Claude API über das Gateway: Claude in eigenen Anwendungen",
    description:
      "Claude API über das Private Claude AI Gateway: eigene Anwendungen und Agenten nutzen Claude über AWS Bedrock Frankfurt, mit eigener Kennung, eigenem Budget und vollständigem Protokoll.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20in%20Ihren%20eigenen%20Anwendungen&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude in Ihren eigenen Anwendungen",
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
          <IntroBox.PreHeadline>Claude API</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Claude in Ihren eigenen Anwendungen</Typo.H1>
        <GeoSummary align="center">
          Über das Private Claude AI Gateway nutzen auch Ihre eigenen Anwendungen und Agenten Claude, nicht nur die Mitarbeiter im Chat. Jede Anwendung ist am Gateway ein eigener Verbraucher mit eigener Kennung, eigenem Budget und vollständigem Protokoll. Die Modelle laufen über AWS Bedrock in Frankfurt, die Kosten werden 1:1 durchgereicht.
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
            Ein Agent sortiert den Posteingang, prüft Belege oder bereitet Auswertungen vor, ohne dass jemand chattet.
          </ProseColumns.Item>
          <ProseColumns.Item title="Eigene Oberflächen">
            Claude steckt im Mandantenportal, im Intranet oder in einer Fachanwendung.
          </ProseColumns.Item>
          <ProseColumns.Item title="Große Mengen">
            Viele Dokumente automatisch verarbeiten, mit Haiku für Einfaches und Opus für die harten Fälle.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Dieselben Regeln wie im Chat</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Eigenes Budget">
            Jede Anwendung hat einen eigenen Deckel und kann nie mehr verbrauchen, als Sie ihr geben. Kein Weg am Gateway vorbei.
          </ProseColumns.Item>
          <ProseColumns.Item title="Rollen und Rechte">
            Eine Anwendung sieht und darf genau das, was für ihren Zweck freigegeben ist.
          </ProseColumns.Item>
          <ProseColumns.Item title="Vollständiges Protokoll">
            Jede Anfrage mit Zeitstempel nachvollziehbar, in derselben Umgebung wie der Chat.
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
            title="Agenten"
            description="Was wir auf dem Gateway bauen, vom Mail-Agenten bis zur Bescheidprüfung."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/integrationen/mcp-server-erstellen"
            title="MCP-Server erstellen"
            description="Eigene Systeme für Claude erreichbar machen."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Claude in eigene Anwendungen bringen?</IntroBox.Headline>
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
