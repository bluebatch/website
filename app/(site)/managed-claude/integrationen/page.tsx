import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Claude Integrationen: DATEV, Microsoft 365 und Websuche | Bluebatch",
  description:
    "Claude Integrationen von Bluebatch: Wir binden Claude an DATEV, Microsoft 365 und die Websuche an, mit sauberem Rechteschnitt und laufendem Betrieb.",
  openGraph: {
    title: "Claude Integrationen: DATEV, Microsoft 365 und Websuche",
    description:
      "Claude Integrationen von Bluebatch: Wir binden Claude an DATEV, Microsoft 365 und die Websuche an, mit sauberem Rechteschnitt und laufendem Betrieb.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20an%20eure%20Systeme%20anbinden&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude an eure Systeme anbinden",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/integrationen",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Integrationen</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Claude an eure Systeme anbinden</Typo.H1>
        <GeoSummary align="center">
          Claude Integrationen verbinden Claude mit den Systemen, in denen eure Daten liegen. Bluebatch bindet Claude an DATEV, Microsoft 365 mit Outlook, Teams und SharePoint sowie an die Websuche an und baut bei Bedarf eigene MCP-Server für ERP und Datenbanken.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Unsere Integrationen</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            highlight
            href="/managed-claude/integrationen/datev"
            title="DATEV"
            description="Mandanten- und Buchungsdaten für Claude nutzbar machen."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/integrationen/microsoft"
            title="Microsoft 365"
            description="Outlook, Teams und SharePoint als Wissensquelle."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/integrationen/websearch"
            title="Websuche"
            description="Aktuelle Informationen aus dem Web mit Quellenangabe."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Euer System ist nicht dabei?</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="gap-6">
          <OfferCard
            href="/managed-claude/integrationen/mcp-server-erstellen"
            title="MCP-Server erstellen"
            description="Wir machen ERP, Datenbank oder Fachanwendung für Claude erreichbar."
            linkLabel="Zum MCP-Server"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Welche Systeme sollen an Claude?</IntroBox.Headline>
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
