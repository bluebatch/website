import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Managed Claude Preise: Lizenzen, API und Service | Bluebatch",
  description:
    "Was kostet Managed Claude? Die Kosten setzen sich aus Claude-Lizenzen bzw. API-Nutzung bei Anthropic und dem Service von Bluebatch für Einrichtung, Integration und Betrieb zusammen.",
  openGraph: {
    title: "Managed Claude Preise: Lizenzen, API und Service",
    description:
      "Was kostet Managed Claude? Die Kosten setzen sich aus Claude-Lizenzen bzw. API-Nutzung bei Anthropic und dem Service von Bluebatch für Einrichtung, Integration und Betrieb zusammen.",
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
          Die Kosten für Managed Claude bestehen aus zwei Teilen: den Claude-Lizenzen oder der API-Nutzung, die direkt bei Anthropic anfallen, und dem Service von Bluebatch für Onboarding, Integrationen und laufenden Betrieb. Beide Teile werden vor dem Start transparent aufgeschlüsselt.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Woraus sich die Kosten zusammensetzen</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Claude-Lizenzen">
            Pro Nutzer und Monat für die Claude App, je nach Plan (Team oder Enterprise).
          </ProseColumns.Item>
          <ProseColumns.Item title="API-Nutzung">
            Nach Verbrauch abgerechnet, wenn Claude in eigenen Systemen und Use Cases läuft.
          </ProseColumns.Item>
          <ProseColumns.Item title="Bluebatch-Service">
            Einmalig für das Onboarding, danach monatlich für Betrieb, Support und Weiterentwicklung.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Unsere Pakete</IntroBox.Headline>
          <IntroBox.Paragraph>
            Die konkreten Preise der Pakete stimmen wir gerade ab. Bis dahin erstellen wir euch ein individuelles Angebot.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/onboarding"
            price="Preis folgt"
            title="Onboarding"
            description="Einrichtung, erste Integrationen und Schulung. Einmaliger Festpreis."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            highlight
            href="/managed-claude/claude-app"
            price="Preis folgt"
            title="Managed Claude App"
            description="Laufender Betrieb der Claude App inklusive Nutzerverwaltung und Support."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/claude-api"
            price="Preis folgt"
            title="Managed Claude API"
            description="Integration und Betrieb von Claude in euren Systemen, nach Aufwand und Nutzung."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Ihr wollt eine konkrete Zahl?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Schreibt uns Teamgröße und geplante Einsatzbereiche, dann bekommt ihr ein Angebot mit allen Kostenblöcken.
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
