import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns } from "@/components/ui";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Claude mit DATEV verbinden | Bluebatch",
  description:
    "Claude und DATEV: Bluebatch bindet DATEV-Daten an Claude an, damit Kanzleien und Unternehmen Mandanten- und Buchungsdaten mit KI auswerten, mit klarem Rechteschnitt.",
  openGraph: {
    title: "Claude mit DATEV verbinden",
    description:
      "Claude und DATEV: Bluebatch bindet DATEV-Daten an Claude an, damit Kanzleien und Unternehmen Mandanten- und Buchungsdaten mit KI auswerten, mit klarem Rechteschnitt.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20mit%20DATEV%20verbinden&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude mit DATEV verbinden",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/integrationen/datev",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Integration · DATEV</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Claude mit DATEV verbinden</Typo.H1>
        <GeoSummary align="center">
          Die DATEV-Integration von Bluebatch macht Mandanten-, Stamm- und Buchungsdaten aus DATEV für Claude nutzbar. Steuerkanzleien und Unternehmen lassen Claude Buchungen prüfen, Auswertungen erklären und Mandantenanfragen vorbereiten, ohne Daten manuell zu exportieren.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Was damit möglich wird</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Buchungen prüfen">
            Claude findet Auffälligkeiten im Buchungsstapel und schlägt Korrekturen vor.
          </ProseColumns.Item>
          <ProseColumns.Item title="Auswertungen erklären">
            BWA und Summen- und Saldenliste in verständliche Sprache für Mandanten übersetzen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Anfragen vorbereiten">
            Mandantenfragen mit den passenden Zahlen aus DATEV beantworten.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Wie wir anbinden</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Schnittstellen">
            Anbindung über die offiziellen DATEV-Schnittstellen, nicht über Bildschirm-Automatisierung.
          </ProseColumns.Item>
          <ProseColumns.Item title="Rechte">
            Claude sieht nur, was die jeweilige Rolle sehen darf.
          </ProseColumns.Item>
          <ProseColumns.Item title="Betrieb">
            Wir überwachen die Anbindung und passen sie bei DATEV-Updates an.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>DATEV und Claude verbinden?</IntroBox.Headline>
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
