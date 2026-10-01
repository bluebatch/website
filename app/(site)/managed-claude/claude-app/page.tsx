import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Claude App über Amazon Bedrock: Cowork und Code ohne Seat-Lizenz | Bluebatch",
  description:
    "Claude Desktop mit Cowork und Code über Amazon Bedrock: die Claude-App für euer Team in der EU, ohne Seat-Lizenz, abgerechnet nach Tokens, verteilt per Geräteverwaltung mit SSO.",
  openGraph: {
    title: "Claude App über Amazon Bedrock: Cowork und Code ohne Seat-Lizenz",
    description:
      "Claude Desktop mit Cowork und Code über Amazon Bedrock: die Claude-App für euer Team in der EU, ohne Seat-Lizenz, abgerechnet nach Tokens, verteilt per Geräteverwaltung mit SSO.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Die%20Claude-App%20f%C3%BCr%20euer%20Team%2C%20in%20der%20EU&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Die Claude-App für euer Team, in der EU",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/claude-app",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Claude App · Priorität 1</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Die Claude-App für euer Team, in der EU</Typo.H1>
        <GeoSummary align="center">
          Claude Desktop ist die Claude-App für Windows und macOS mit Cowork und Claude Code. Über Amazon Bedrock läuft sie in eurem eigenen AWS-Konto mit Verarbeitung in der EU, ohne Seat-Lizenz und abgerechnet nach Tokens. Bluebatch richtet Claude Desktop für bis zu 10 Nutzer im Setup ein und verteilt die App über eure Geräteverwaltung.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Was ihr bekommt</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Gewohnte Oberfläche">
            Claude Desktop sieht aus und arbeitet wie die bekannte Claude-App, nur eben in eurem Konto.
          </ProseColumns.Item>
          <ProseColumns.Item title="Cowork">
            Dokumente auswerten, Mails vorbereiten, Aufgaben erledigen lassen, mit euren Dateien als Kontext.
          </ProseColumns.Item>
          <ProseColumns.Item title="Claude Code">
            Für Entwicklerteams: Claude Code über Bedrock statt privater Konten, mit festen Modellen und Kosten je Team.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Unterschied zum Abo</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Keine Seat-Lizenz">
            Ihr zahlt nicht pro Kopf, sondern nur die Tokens, die wirklich anfallen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Verarbeitung in der EU">
            Über Bedrock mit EU-Profil statt Verarbeitung in den USA oder global.
          </ProseColumns.Item>
          <ProseColumns.Item title="Nur Desktop">
            Mobile App und claude.ai im Browser gibt es in diesem Setup nicht.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Wofür Teams Managed Claude nutzen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Ob Mittelstand oder Kanzlei: Claude arbeitet dort, wo die Daten ohnehin hingehören.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Schriftsätze prüfen">
            Entwürfe in Minuten gegen die Akte prüfen. Die Mandantendaten bleiben im eigenen Konto.
          </ProseColumns.Item>
          <ProseColumns.Item title="Mails vorsortieren">
            Eingänge einordnen und Antworten vorbereiten. Entscheiden tut weiterhin ein Mensch.
          </ProseColumns.Item>
          <ProseColumns.Item title="Akten durchsuchen">
            Fragen direkt an Verträge und Gutachten stellen, ohne vorher alles zu anonymisieren.
          </ProseColumns.Item>
          <ProseColumns.Item title="Claude Code fürs Team">
            Claude Code über Bedrock statt privater Konten: feste Modelle, Kosten je Team sichtbar.
          </ProseColumns.Item>
          <ProseColumns.Item title="DATEV-Anbindung">
            Claude greift über ein AI Gateway auf DATEV-Daten zu. Optional ab 85 € je Kanzlei.
          </ProseColumns.Item>
          <ProseColumns.Item title="Personaldaten auswerten">
            Profile und Bewerbungsunterlagen auswerten, ohne sie in ein Abo zu kopieren.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Weiter geht es hier</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/onboarding"
            title="Onboarding"
            description="So kommt die Claude-App zu eurem Team."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/integrationen"
            title="Integrationen"
            description="DATEV, Microsoft 365 und Websuche anbinden."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/preise"
            title="Preise"
            description="1.500 € Setup, danach nur Tokens."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Claude-App bei euch einführen?</IntroBox.Headline>
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
