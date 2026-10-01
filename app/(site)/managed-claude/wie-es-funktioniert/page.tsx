import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns } from "@/components/ui";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Wie Managed Claude funktioniert: Bedrock, Claude Desktop, Datenfluss | Bluebatch",
  description:
    "So funktioniert Managed Claude: Claude über Amazon Bedrock in eurem AWS-Konto mit EU-Profil, Claude Desktop ohne Seat-Lizenz, Modellregeln und Zero Operator Access. Rollen und Datenfluss erklärt.",
  openGraph: {
    title: "Wie Managed Claude funktioniert: Bedrock, Claude Desktop, Datenfluss",
    description:
      "So funktioniert Managed Claude: Claude über Amazon Bedrock in eurem AWS-Konto mit EU-Profil, Claude Desktop ohne Seat-Lizenz, Modellregeln und Zero Operator Access. Rollen und Datenfluss erklärt.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Wie%20Managed%20Claude%20funktioniert&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Wie Managed Claude funktioniert",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/wie-es-funktioniert",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Wie es funktioniert</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Wie Managed Claude funktioniert</Typo.H1>
        <GeoSummary align="center">
          Bei Managed Claude läuft Claude über Amazon Bedrock in eurem eigenen AWS-Konto mit EU-Profil, euer Team nutzt Claude Desktop als Oberfläche. Bedrock speichert Anfragen standardmäßig nicht und gibt sie nicht an Anthropic weiter. Vertragspartner für die Modelle ist AWS, Bluebatch richtet ein und betreut auf Wunsch.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Der Datenfluss</IntroBox.Headline>
          <IntroBox.Paragraph>
            Euer Konto, eure Daten. Zwischen eurem Team und dem Modell steht kein fremder Dienst.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Euer Team">
            Arbeitet in Claude Desktop, angemeldet über euer SSO. Die App wird über eure Geräteverwaltung verteilt.
          </ProseColumns.Item>
          <ProseColumns.Item title="Euer AWS-Konto">
            Claude Desktop spricht direkt mit Amazon Bedrock in eurem Konto. Kosten und Nutzung sind je Nutzer sichtbar.
          </ProseColumns.Item>
          <ProseColumns.Item title="Amazon Bedrock in der EU">
            Verarbeitet die Anfrage mit EU-Profil, speichert sie standardmäßig nicht und nutzt sie nicht für Training.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Wer macht was?</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="AWS">
            Vertragspartner für die Modelle. Ihr zahlt die Tokens direkt an AWS zum Listenpreis.
          </ProseColumns.Item>
          <ProseColumns.Item title="Bluebatch">
            Richtet Konto, Bedrock, Claude Desktop und Modellregeln ein, liefert das Nachweis-Paket und betreut auf Wunsch.
          </ProseColumns.Item>
          <ProseColumns.Item title="Ihr">
            Besitzt das Konto, entscheidet über Nutzer und Daten und nehmt die berufsrechtliche Bewertung vor.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Was die Claude-App über Bedrock kann und was nicht</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Cowork und Code">
            Claude Desktop läuft offiziell über Bedrock, mit Cowork für Dokumente und Aufgaben und Claude Code für die Entwicklung.
          </ProseColumns.Item>
          <ProseColumns.Item title="Modelle">
            Opus 5 und Sonnet 5 mit EU-Profil. Fable 5 bewusst nicht, weil es auf Bedrock kein EU-Profil hat und Anfragen 30 Tage speichert.
          </ProseColumns.Item>
          <ProseColumns.Item title="Keine Mobile-App">
            Die mobile App und claude.ai im Browser gibt es in diesem Setup nicht. Gearbeitet wird auf dem Desktop.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Fragen zur Architektur?</IntroBox.Headline>
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
