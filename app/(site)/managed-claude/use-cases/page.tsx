import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Claude Use Cases: was wir mit Claude für euch bauen | Bluebatch",
  description:
    "Claude Use Cases von Bluebatch: KI-Agenten, Chatbots und Auswertungen auf Basis von Claude, die einen echten Prozess entlasten. Mit Entscheidungshilfen zu Kauf, Kosten und Bauart.",
  openGraph: {
    title: "Claude Use Cases: was wir mit Claude für euch bauen",
    description:
      "Claude Use Cases von Bluebatch: KI-Agenten, Chatbots und Auswertungen auf Basis von Claude, die einen echten Prozess entlasten. Mit Entscheidungshilfen zu Kauf, Kosten und Bauart.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Use%20Cases%3A%20Wir%20bauen%20Anwendungen%20auf%20Claude&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Use Cases: Wir bauen Anwendungen auf Claude",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/use-cases",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Use Cases · Priorität 3</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Use Cases: Wir bauen Anwendungen auf Claude</Typo.H1>
        <GeoSummary align="center">
          Bluebatch baut konkrete Anwendungen auf Basis von Claude, zum Beispiel KI-Agenten für den Posteingang, Chatbots auf eigenen Daten oder automatische Auswertungen. Jeder Use Case startet mit einem klar abgegrenzten Prozess und einer messbaren Entlastung, statt mit einer Technologie.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Entscheidungshilfen für euren Use Case</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/use-cases/ki-agent-kaufen"
            title="KI-Agent kaufen"
            description="Drei Wege zum eigenen KI-Agenten mit Preis und Dauer im Vergleich."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/use-cases/ki-agent-kostenlos"
            title="KI-Agent kostenlos"
            description="Wie weit ihr ohne Budget kommt und was danach anfällt."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/use-cases/ki-chatbot-fuer-unternehmen"
            title="KI-Chatbot für Unternehmen"
            description="Die drei Bauarten, was sie kosten und welche für euch reicht."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Use Cases nach Branche</IntroBox.Headline>
          <IntroBox.Paragraph>
            Konkrete Beispiele für eure Branche findet ihr in den Branchen-Bereichen.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/branchen/steuerberater"
            title="Steuerberater"
            description="Mail-Agent, Belegprüfung, Gutachten und mehr für Kanzleien."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/branchen/grosshandel"
            title="Großhandel"
            description="Angebots-Bot, Auftragserfassung und Chatbots auf ERP-Daten."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/branchen/anwaelte"
            title="Anwälte"
            description="Posteingang, Fristen und Schriftsatz-Entwürfe mit KI."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Welcher Use Case passt zu euch?</IntroBox.Headline>
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
