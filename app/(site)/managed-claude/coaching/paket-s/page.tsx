import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, FaqContainer } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Coaching Paket S: 3 Personentage für 3.000 € | Bluebatch",
  description:
    "Coaching Paket S für das Private Claude AI Gateway: 3 Personentage für 3.000 €, mit KI-Kompetenzschulung nach Art. 4 EU AI Act, Grundlagen und ersten Arbeitsanleitungen. Outlook Connector inklusive, 50 % der Einrichtung angerechnet.",
  openGraph: {
    title: "Coaching Paket S: 3 Personentage für 3.000 €",
    description:
      "Coaching Paket S für das Private Claude AI Gateway: 3 Personentage für 3.000 €, mit KI-Kompetenzschulung nach Art. 4 EU AI Act, Grundlagen und ersten Arbeitsanleitungen. Outlook Connector inklusive, 50 % der Einrichtung angerechnet.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Paket%20S%3A%203%20Personentage%20Coaching&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Paket S: 3 Personentage Coaching",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/coaching/paket-s",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Coaching · Paket S</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Paket S: 3 Personentage Coaching</Typo.H1>
        <GeoSummary align="center">
          Paket S ist das Einstiegs-Coaching für das Private Claude AI Gateway: 3 Personentage für 3.000 € zzgl. USt. Enthalten sind die KI-Kompetenzschulung nach Art. 4 EU AI Act, die Grundlagen zu Modellen, App, Chat, Co-Work und Projekten sowie die ersten Arbeitsanleitungen. Der Outlook Connector ist inklusive, 50 % der Einrichtung (750 €) werden angerechnet.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Das steckt in Paket S</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            highlight
            href="/managed-claude/coaching"
            price="3.000 €"
            title="Paket S"
            description="3 Personentage Coaching mit KI-Kompetenzschulung, Grundlagen und ersten Arbeitsanleitungen."
            linkLabel="Zum Coaching-Überblick"
          />
          <OfferCard
            href="/managed-claude/integrationen/microsoft"
            price="inklusive"
            title="Outlook Connector inklusive"
            description="Posteingang, Kalender und Entwürfe direkt in Claude, sonst 500 € einmalig."
            linkLabel="Zum Outlook Connector"
          />
          <OfferCard
            href="/managed-claude/preise"
            price="- 750 €"
            title="50 % Anrechnung"
            description="Von der Einrichtung (1.500 €) werden 750 € angerechnet."
            linkLabel="Zu den Preisen"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Was Ihr Team danach kann</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="KI-Kompetenz nachgewiesen">
            Alle Mitarbeiter haben die Schulung nach Art. 4 EU AI Act durchlaufen und ein Zertifikat erhalten.
          </ProseColumns.Item>
          <ProseColumns.Item title="Sicher in der App">
            Jeder kennt Chat, Co-Work und Projekte und hat erste echte Vorgänge begleitet durchgeführt.
          </ProseColumns.Item>
          <ProseColumns.Item title="Erste Arbeitsanleitungen">
            Die ersten Skills für wiederkehrende Aufgaben sind geschrieben und im Einsatz.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <FaqContainer
          headline="Fragen zu Paket S"
          intro="Was vor der Buchung gefragt wird."
          faqs={[
            {
              "question": "Was kostet Paket S?",
              "answer": "Paket S umfasst 3 Personentage und kostet 3.000 € zzgl. USt. 50 % der Einrichtung, also 750 €, werden angerechnet."
            },
            {
              "question": "Wie läuft die Anrechnung?",
              "answer": "Die Einrichtung des Gateways kostet 1.500 €. Buchen Sie Paket S, ziehen wir 750 € davon wieder ab."
            },
            {
              "question": "Ist der Outlook Connector dabei?",
              "answer": "Ja. Der Outlook Connector (sonst 500 € einmalig) ist in beiden Paketen inklusive."
            },
            {
              "question": "Bekommen alle Mitarbeiter ein Zertifikat?",
              "answer": "Ja. Alle Mitarbeiter, die mit der KI arbeiten, durchlaufen die KI-Kompetenzschulung nach Art. 4 EU AI Act und erhalten ein Zertifikat als Schulungsnachweis, plus Teilnehmerliste für Ihre Ablage. Ein Schulungsnachweis, kein amtliches Zertifikat."
            }
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Mehr als die Grundlagen?</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="gap-6">
          <OfferCard
            href="/managed-claude/coaching/paket-l"
            price="8.000 €"
            title="Paket L"
            description="Alles aus Paket S plus Kanzlei-Handbuch, Routinen und Skills. 100 % der Einrichtung angerechnet."
            linkLabel="Zu Paket L"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Paket S buchen?</IntroBox.Headline>
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
