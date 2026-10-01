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
    "Integrationen für Managed Claude: DATEV über das AI Gateway, Microsoft 365 und Websuche als Connectoren. Bluebatch richtet ein und betreut, die Daten bleiben in eurem Konto.",
  openGraph: {
    title: "Claude Integrationen: DATEV, Microsoft 365 und Websuche",
    description:
      "Integrationen für Managed Claude: DATEV über das AI Gateway, Microsoft 365 und Websuche als Connectoren. Bluebatch richtet ein und betreut, die Daten bleiben in eurem Konto.",
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
          Integrationen machen Claude im eigenen AWS-Konto erst richtig nützlich, weil Claude dann mit euren echten Daten arbeitet. Bluebatch bindet DATEV über ein AI Gateway an, verbindet Microsoft 365 und die Websuche als Connectoren und baut bei Bedarf eigene MCP-Server für ERP und Datenbanken.
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
            price="ab 85 € je Kanzlei"
            title="DATEV"
            description="DATEV-Daten über das AI Gateway, für Steuerkanzleien."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/integrationen/microsoft"
            title="Microsoft 365"
            description="Outlook, Teams und SharePoint als Kontext für Claude."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/integrationen/websearch"
            title="Websuche"
            description="Aktuelle Quellen aus dem Web, mit Fundstellen."
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
