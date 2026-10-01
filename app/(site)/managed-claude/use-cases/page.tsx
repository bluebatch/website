import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Claude Use Cases: Schriftsätze, Mails, Akten, DATEV | Bluebatch",
  description:
    "Claude Use Cases mit Managed Claude: Schriftsätze prüfen, Mails vorsortieren, Akten durchsuchen, Claude Code, DATEV-Anbindung und Personaldaten, alles mit Verarbeitung in der EU.",
  openGraph: {
    title: "Claude Use Cases: Schriftsätze, Mails, Akten, DATEV",
    description:
      "Claude Use Cases mit Managed Claude: Schriftsätze prüfen, Mails vorsortieren, Akten durchsuchen, Claude Code, DATEV-Anbindung und Personaldaten, alles mit Verarbeitung in der EU.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Was%20ihr%20mit%20Claude%20umsetzen%20k%C3%B6nnt&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Was ihr mit Claude umsetzen könnt",
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
        <Typo.H1 className="text-center">Was ihr mit Claude umsetzen könnt</Typo.H1>
        <GeoSummary align="center">
          Mit Managed Claude arbeitet Claude mit genau den Daten, die nicht ins normale Abo dürfen: Mandanten-, Personal- und Vertragsdaten. Typische Use Cases sind Schriftsätze prüfen, Mails vorsortieren, Akten durchsuchen, Claude Code im Entwicklerteam und die DATEV-Anbindung für Steuerkanzleien. Bluebatch richtet ein und baut weitere Anwendungen.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
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
          <IntroBox.Headline>Use Cases nach Branche</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/branchen/steuerberater"
            title="Steuerberater"
            description="Mail-Agent, Belegprüfung, Gutachten und DATEV mit Claude."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/branchen/anwaelte"
            title="Anwälte"
            description="Posteingang, Fristen und Schriftsatz-Entwürfe mit Claude."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/branchen/grosshandel"
            title="Großhandel"
            description="Angebote, Auftragserfassung und Chatbots auf ERP-Daten."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Entscheidungshilfen</IntroBox.Headline>
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

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Welcher Use Case passt zu euch?</IntroBox.Headline>
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
