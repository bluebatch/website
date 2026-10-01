import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Claude mit DATEV: Anbindung über das AI Gateway | Bluebatch",
  description:
    "Claude und DATEV: Über das AI Gateway greift Claude im eigenen AWS-Konto auf DATEV-Daten zu, mit Verarbeitung in der EU. Optional zu Managed Claude, ab 85 € je Kanzlei.",
  openGraph: {
    title: "Claude mit DATEV: Anbindung über das AI Gateway",
    description:
      "Claude und DATEV: Über das AI Gateway greift Claude im eigenen AWS-Konto auf DATEV-Daten zu, mit Verarbeitung in der EU. Optional zu Managed Claude, ab 85 € je Kanzlei.",
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
          Die DATEV-Anbindung gibt Claude Zugriff auf Mandanten-, Stamm- und Buchungsdaten aus DATEV, über ein AI Gateway in eurer Umgebung. Die Verarbeitung läuft über Amazon Bedrock in der EU in eurem eigenen AWS-Konto. Die Anbindung ist ein optionaler Baustein zu Managed Claude und kostet ab 85 € je Kanzlei.
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
          <IntroBox.Headline>Wie die Anbindung läuft</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="AI Gateway">
            Claude greift nicht direkt auf DATEV zu, sondern über ein Gateway mit klaren Rechten.
          </ProseColumns.Item>
          <ProseColumns.Item title="Eigenes Konto">
            Alle Anfragen laufen über Bedrock in eurem AWS-Konto in der EU.
          </ProseColumns.Item>
          <ProseColumns.Item title="Berufsrecht">
            Das Nachweis-Paket hilft bei eurer Bewertung nach § 62a StBerG.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Mehr für Steuerkanzleien</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="gap-6">
          <OfferCard
            href="/branchen/steuerberater/private-ai/ki-steuerberater-62a-stberg"
            title="KI nach § 62a StBerG"
            description="Vertragskette und Gateway für Kanzleien im Detail."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/branchen/steuerberater"
            title="Steuerberater"
            description="Alle Use Cases für Kanzleien."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>DATEV und Claude verbinden?</IntroBox.Headline>
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
