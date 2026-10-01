import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const rewriteSiteConfig: RewriteSiteConfig = {
  legacyRedirects: ["/ki-implementierung"],
  rewrites: [],
};

export const metadata: Metadata = {
  title: "Managed Claude: Claude als Managed Service für den Mittelstand | Bluebatch",
  description:
    "Bluebatch ist Managed Service Provider für Claude von Anthropic: Einführung der Claude App, Integration per API, Anbindung an DATEV und Microsoft 365, Betrieb und Schulung aus einer Hand.",
  openGraph: {
    title: "Managed Claude: Claude als Managed Service für den Mittelstand",
    description:
      "Bluebatch ist Managed Service Provider für Claude von Anthropic: Einführung der Claude App, Integration per API, Anbindung an DATEV und Microsoft 365, Betrieb und Schulung aus einer Hand.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20als%20Managed%20Service%20f%C3%BCr%20euer%20Unternehmen&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude als Managed Service für euer Unternehmen",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Managed Claude</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Claude als Managed Service für euer Unternehmen</Typo.H1>
        <GeoSummary align="center">
          Managed Claude ist der Managed Service von Bluebatch für Claude von Anthropic, gemacht für Unternehmen mit 50 bis 1.000 Mitarbeitenden. Bluebatch führt die Claude App im Team ein, bindet Claude per API an eigene Systeme wie DATEV und Microsoft 365 an und baut konkrete Use Cases. Betrieb, Rechte und Schulung kommen aus einer Hand.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Was wir für euch übernehmen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Drei Bausteine, in dieser Reihenfolge. Die meisten Kunden starten mit der Claude App und wachsen von dort in API und eigene Use Cases.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            highlight
            href="/managed-claude/claude-app"
            title="Claude App"
            description="Claude für das ganze Team: Lizenzen, SSO, Rechte, Projekte und Connectoren eingerichtet und betreut. Euer Team arbeitet ab Tag eins produktiv."
            linkLabel="Zur Claude App"
          />
          <OfferCard
            href="/managed-claude/claude-api"
            title="Claude API"
            description="Claude in euren eigenen Systemen und Prozessen: Anbindung über die API, Hosting in der EU, Kosten und Zugriffe unter Kontrolle."
            linkLabel="Zur Claude API"
          />
          <OfferCard
            href="/managed-claude/use-cases"
            title="Use Cases bauen"
            description="Wir setzen konkrete Anwendungen auf Claude um: Agenten, Chatbots und Auswertungen, die einen echten Prozess entlasten."
            linkLabel="Zu den Use Cases"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>So arbeiten wir</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/wie-es-funktioniert"
            title="Wie es funktioniert"
            description="Wer macht was? Ablauf, Rollen und Verantwortung zwischen euch, Anthropic und Bluebatch."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/onboarding"
            title="Onboarding"
            description="Vom Erstgespräch bis zum produktiven Team in wenigen Wochen, Schritt für Schritt."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/preise"
            title="Preise"
            description="Was Lizenzen, API-Nutzung und unser Service kosten, transparent aufgeschlüsselt."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Claude an eure Systeme anbinden</IntroBox.Headline>
          <IntroBox.Paragraph>
            Claude wird erst richtig nützlich, wenn es an eure Daten kommt. Diese Integrationen bauen und betreiben wir.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/integrationen/datev"
            title="DATEV"
            description="Claude arbeitet mit Mandanten- und Buchungsdaten aus DATEV, mit sauberem Rechteschnitt."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/integrationen/microsoft"
            title="Microsoft 365"
            description="Outlook, Teams und SharePoint als Wissensquelle und Arbeitsumgebung für Claude."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/integrationen/websearch"
            title="Websuche"
            description="Claude recherchiert aktuelle Quellen im Web und belegt Antworten mit Fundstellen."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Weitere Tools</IntroBox.Headline>
          <IntroBox.Paragraph>
            Neben Claude betreuen wir weiterhin Automatisierungs-Tools wie n8n, mit Hosting, Wartung und Schulungen.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={2} className="gap-6">
          <OfferCard
            href="/managed-claude/weitere-tools/n8n"
            title="n8n"
            description="Hosting, Workflow-Wartung, Custom Nodes, Schulungen, Performance und Zertifizierung."
            linkLabel="Zum n8n-Hub"
          />
          <OfferCard
            href="/managed-claude/weitere-tools"
            title="Alle Tools"
            description="Make, Zapier, Power Automate, Navision, easybill, e.bootis und weitere im Überblick."
            linkLabel="Zu allen Tools"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Wo bringt Claude bei euch am meisten?</IntroBox.Headline>
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
