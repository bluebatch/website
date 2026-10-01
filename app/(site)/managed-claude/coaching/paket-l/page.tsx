import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, FaqContainer } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Coaching Paket L: 8 Personentage für 8.000 € | Bluebatch",
  description:
    "Coaching Paket L für das Private Claude AI Gateway: 8 Personentage für 8.000 €, alles aus Paket S plus Kanzlei-Handbuch, Routinen und Skills. Outlook Connector inklusive, die Einrichtung wird zu 100 % angerechnet.",
  openGraph: {
    title: "Coaching Paket L: 8 Personentage für 8.000 €",
    description:
      "Coaching Paket L für das Private Claude AI Gateway: 8 Personentage für 8.000 €, alles aus Paket S plus Kanzlei-Handbuch, Routinen und Skills. Outlook Connector inklusive, die Einrichtung wird zu 100 % angerechnet.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Paket%20L%3A%208%20Personentage%20Coaching&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Paket L: 8 Personentage Coaching",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/coaching/paket-l",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Coaching · Paket L</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Paket L: 8 Personentage Coaching</Typo.H1>
        <GeoSummary align="center">
          Paket L ist das umfassende Coaching für das Private Claude AI Gateway: 8 Personentage für 8.000 € zzgl. USt. Es enthält alles aus Paket S und dazu Kanzlei-Handbuch, Routinen und Skills, gebaut an Ihren echten Fällen. Der Outlook Connector ist inklusive, und die Einrichtung (1.500 €) wird zu 100 % angerechnet.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Das steckt in Paket L</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            highlight
            href="/managed-claude/coaching"
            price="8.000 €"
            title="Paket L"
            description="8 Personentage Coaching: alles aus Paket S plus Kanzlei-Handbuch, Routinen und Skills."
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
            price="- 1.500 €"
            title="100 % Anrechnung"
            description="Die Einrichtung (1.500 €) wird vollständig angerechnet."
            linkLabel="Zu den Preisen"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Was Ihr Team danach hat</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={4}>
          <ProseColumns.Item title="Alles aus Paket S">
            KI-Kompetenzschulung mit Zertifikat, Grundlagen und erste Arbeitsanleitungen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Kanzlei-Handbuch">
            Zwei Ebenen: das Handbuch mit Anleitungen und Routinen, die Projekte mit den Unterlagen. Aufgebaut, damit es in einem Jahr noch benutzbar ist.
          </ProseColumns.Item>
          <ProseColumns.Item title="Routinen und Skills">
            Abläufe auf Knopfdruck oder zu festen Zeitpunkten, zum Beispiel die Montagsübersicht, und Skills für Ihre Methodik.
          </ProseColumns.Item>
          <ProseColumns.Item title="Ein Team, das selbst ausbaut">
            Ihre Leute schreiben, wir lesen gegen. Neue Mitarbeiter werden über das Handbuch nachgeschult, ohne uns.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <FaqContainer
          headline="Fragen zu Paket L"
          intro="Was vor der Buchung gefragt wird."
          faqs={[
            {
              "question": "Was kostet Paket L?",
              "answer": "Paket L umfasst 8 Personentage und kostet 8.000 € zzgl. USt. 100 % der Einrichtung, also 1.500 €, werden angerechnet."
            },
            {
              "question": "Wie läuft die Anrechnung?",
              "answer": "Die Einrichtung des Gateways kostet 1.500 €. Buchen Sie Paket L, ziehen wir 1.500 € davon wieder ab."
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
          <IntroBox.Headline>Erst einmal kleiner starten?</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="gap-6">
          <OfferCard
            href="/managed-claude/coaching/paket-s"
            price="3.000 €"
            title="Paket S"
            description="KI-Kompetenzschulung, Grundlagen und erste Arbeitsanleitungen. 50 % der Einrichtung angerechnet."
            linkLabel="Zu Paket S"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Paket L buchen?</IntroBox.Headline>
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
