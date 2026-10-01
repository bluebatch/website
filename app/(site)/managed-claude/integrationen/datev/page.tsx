import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, TimelineAsSteps, TimelineAsStepsStep } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Zugriff auf DATEV: Claude fragt Ihren Datenbestand | Bluebatch",
  description:
    "DATEV MCP (Beta) für das Private Claude AI Gateway: Claude fragt Ihren DATEV-Bestand über die von DATEV vorgesehenen Schnittstellen ab, in drei Stufen von Lesen bis Zurückschreiben mit Freigabe. 100 € pro Monat.",
  openGraph: {
    title: "Zugriff auf DATEV: Claude fragt Ihren Datenbestand",
    description:
      "DATEV MCP (Beta) für das Private Claude AI Gateway: Claude fragt Ihren DATEV-Bestand über die von DATEV vorgesehenen Schnittstellen ab, in drei Stufen von Lesen bis Zurückschreiben mit Freigabe. 100 € pro Monat.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Zugriff%20auf%20DATEV&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Zugriff auf DATEV",
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
          <IntroBox.PreHeadline>Schritt 3 · DATEV</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Zugriff auf DATEV</Typo.H1>
        <GeoSummary align="center">
          Mit dem DATEV MCP fragt Claude Ihren DATEV-Bestand direkt ab, statt mit hochgeladenen Listen von gestern zu arbeiten. Der Zugriff läuft über das Private Claude AI Gateway und die von DATEV vorgesehenen Schnittstellen, lesend, mit Mandantentrennung und Protokoll. Das Add-on ist in der Beta und kostet 100 € pro Monat.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Ihr Wissen über Ihre Mandanten liegt in DATEV</IntroBox.Headline>
          <IntroBox.Paragraph>
            Die KI muss diese Daten nicht heraushalten, sie muss hineinfragen dürfen. Ohne DATEV arbeitet die KI mit dem, was jemand ihr hochlädt. Mit DATEV arbeitet sie mit Ihrem echten Datenbestand.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Chat oder Agent">
            Stellt die Frage, zum Beispiel nach fehlenden Belegen für den Abschluss.
          </ProseColumns.Item>
          <ProseColumns.Item title="Private Claude AI Gateway">
            Prüft Rolle, Rechte und Budget und protokolliert die Abfrage.
          </ProseColumns.Item>
          <ProseColumns.Item title="Von DATEV vorgesehene Schnittstellen">
            Liefern die Antwort aus Ihrem DATEV-Bestand. Zurückgeschrieben wird nur als Vorschlag, mit Freigabe.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Drei Stufen, bewusst in dieser Reihenfolge</IntroBox.Headline>
        </IntroBox>
        <div className="mx-auto max-w-3xl">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Stufe 1: Lesen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Stammdaten, Salden und Auswertungen abfragen. Risiko: gering, rein lesend.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Stufe 2: Belege und Dokumente</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Vorprüfen, zuordnen, Fehlendes melden. Risiko: gering, rein lesend.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Stufe 3: Zurückschreiben</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Buchungen, Zuordnungen und Wiedervorlagen, immer als Vorschlag. Nur mit Freigabe, nach dem Vier-Augen-Prinzip.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Drei Punkte, die für DATEV besonders gelten</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Rechte werden nicht ausgeweitet">
            Ein Agent bekommt nie mehr Zugriff als der Mitarbeiter, in dessen Auftrag er arbeitet.
          </ProseColumns.Item>
          <ProseColumns.Item title="Mandantentrennung bleibt bestehen">
            Wer nur bestimmte Mandate sieht, sieht auch über die KI nur diese.
          </ProseColumns.Item>
          <ProseColumns.Item title="Lesen ist der Normalfall">
            Schreibrechte einzeln, für einen definierten Zweck, mit Freigabeschritt.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Im Alltag</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Fragen an den Bestand">
            „Welche Belege fehlen bei Mandant M. für den Abschluss?" aus dem Bestand, nicht aus einer Liste von gestern. „Zeig mir die Abweichungen gegenüber dem Vorjahr", vorbereitet, bevor der Termin ansteht.
          </ProseColumns.Item>
          <ProseColumns.Item title="Wie der Zugriff hergestellt wird">
            Über die von DATEV vorgesehenen Schnittstellen und Datenwege, kein Bildschirmauslesen, keine Datenkopien in fremde Systeme. Welcher Weg passt, hängt an Ihren Modulen und Ihrer Installation. Das prüfen wir im Scoping, bevor etwas zugesagt wird.
          </ProseColumns.Item>
          <ProseColumns.Item title="Und die DATEV-eigene KI?">
            Die bleibt, wo sie ist. Das hier ist die Schicht darüber: Ihre Abläufe, Ihre Methodik, Ihre Agenten, auf demselben Datenbestand. Die Vorerfassung wird vorbereitet und geprüft, nicht ersetzt. Gebucht wird von Ihren Leuten.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Mehr für Steuerkanzleien</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            highlight
            href="/managed-claude/preise"
            price="100 € / Monat"
            title="DATEV MCP (Beta)"
            description="Als Add-on zum Gateway zubuchen."
            linkLabel="Zu den Preisen"
          />
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
