import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import type { PageConfig } from "@/lib/get-subpages";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnCallToAction,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import IntroBox from "@/components/ui/intro-box";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";

export const pageConfig: PageConfig = {
  title: "FiBu-Monatsreview implementieren",
  description:
    "Angebot: DATEV-Connect-Anbindung via MCP, Regelwerk auf deinem Kontenrahmen, Pilotmonat, Übergabe.",
  highlight: true,
};

const defaultMeta = {
  title: "FiBu-Monatsreview implementieren: Angebot für Kanzleien | Bluebatch",
  description:
    "Bluebatch implementiert das FiBu-Monatsreview per KI in deiner Kanzlei: DATEV-Connect via MCP, Regelwerk auf deinem Kontenrahmen, Pilotmonat mit Parallel-Prüfung, Übergabe.",
  ogDescription:
    "In 4 Schritten zur automatischen Buchungsprüfung: DATEV-Connect-Anbindung via MCP-Server, Kanzlei-Regelwerk, Pilotmonat mit Parallel-Prüfung und vollständige Übergabe.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "FiBu Monatsreview implementieren",
    "KI Buchungsprüfung einführen",
    "DATEV-Connect Anbindung",
    "MCP-Server DATEV",
    "Kanzlei Kontenrahmen Regelwerk",
    "Steuerkanzlei Automatisierung",
    "Bluebatch",
  ],
  openGraph: {
    title: defaultMeta.title,
    description: defaultMeta.ogDescription,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=FiBu-Monatsreview%20implementieren&eyebrow=Steuerberater",
        width: 1200,
        height: 630,
        alt: "Bluebatch Angebot: FiBu-Monatsreview implementieren",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.ogDescription,
    images: ["/og?title=FiBu-Monatsreview%20implementieren&eyebrow=Steuerberater"],
  },
  alternates: {
    canonical:
      "/branchen/steuerberater/workflows/fibu-monatsreview-implementierung",
  },
};

const deliverables = [
  {
    title: "Anbindung DATEV-Connect via MCP",
    text: "Wir richten den MCP-Server ein, der dem KI-Modell kontrollierten Lesezugriff auf DATEV-Connect gibt: freigegebene Mandanten, definierte Zeiträume, vollständiges Abfrage-Log. Keine Exporte, keine Datenkopien in Fremdsystemen.",
  },
  {
    title: "Regelwerk auf deinem Kontenrahmen",
    text: "Die Prüfregeln werden auf den Kontenrahmen und die Buchungspraxis deiner Kanzlei aufgesetzt: SKR-Zuordnung, Steuerschlüssel, Interims- und Sammelkonten, mandantenspezifische Besonderheiten. Kein generisches Schema von der Stange.",
  },
  {
    title: "Pilotmonat mit Parallel-Prüfung",
    text: "Einen Monat lang läuft das KI-Review parallel zur gewohnten Durchsicht. Dein Team vergleicht jede Position der Klärliste mit dem eigenen Befund. So kalibrieren wir Regeln und Schwellen, bevor das Review in den Regelbetrieb geht.",
  },
  {
    title: "Übergabe und Dokumentation",
    text: "Zum Abschluss übernimmst du das Review vollständig: Einweisung des Teams, Dokumentation von Regelwerk und MCP-Anbindung, Leitfaden für den monatlichen Ablauf und für spätere Regel-Anpassungen.",
  },
];

export default function Page() {
  return (
    <>
      {/* 1. HERO */}
      <ContentWrapper isFirstSection colorScheme="gradient-cool">
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Angebot Steuerberater
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              FiBu-Monatsreview implementieren: in 4 Schritten zur
              automatischen Buchungsprüfung
            </Hero2ColumnHeadline>
            <GeoSummary>
              Bluebatch implementiert das FiBu-Monatsreview per KI in
              Steuerkanzleien: Anbindung an DATEV-Connect über einen
              MCP-Server, Prüfregelwerk auf dem Kanzlei-Kontenrahmen, ein
              Pilotmonat mit Parallel-Prüfung durch dein Team und
              vollständige Übergabe mit Dokumentation. Danach prüft die
              Kanzlei jeden Monat 100 Prozent der Buchungen automatisch
              statt per Stichprobe.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Implementierung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/process-automation.jpg"
              alt="Team richtet automatisierte Buchungsprüfung am Bildschirm ein"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. KONTEXT */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Ausgangslage</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vom Konzept zum Regelbetrieb, ohne Experiment am offenen Mandat
          </IntroBox.Headline>
          <IntroBox.Subline>
            Was das FiBu-Monatsreview fachlich leistet, beschreibt die{" "}
            <Link
              href="/branchen/steuerberater/workflows/fibu-monatsreview"
              className="text-primary-600 hover:underline"
            >
              Katalog-Seite zum FiBu-Monatsreview
            </Link>
            . Diese Seite beschreibt, wie wir es in deiner Kanzlei einführen.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {deliverables.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <Typo.H3 className="mt-0!">{item.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {item.text}
              </Typo.Paragraph>
            </div>
          ))}
        </div>
      </ContentWrapper>

      {/* 3. ABLAUF ALS TIMELINE */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Ablauf</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So läuft die Einführung des KI-Monatsreviews ab
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vier Phasen, klarer Endpunkt: Das Review gehört am Ende deiner
            Kanzlei, nicht uns.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-2!">Phase 1: Anbindung und Zugriff</Typo.H3>
            <Typo.Paragraph>
              Wir setzen den MCP-Server auf und verbinden ihn mit
              DATEV-Connect. Gemeinsam legen wir fest, welche Mandanten und
              Zeiträume das KI-Modell lesen darf. Der Zugriff ist rein
              lesend, jede Abfrage wird protokolliert. Am Ende der Phase
              steht ein erster technischer Testlauf auf einem
              Testmandanten.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-2!">
              Phase 2: Regelwerk auf Kanzlei-Kontenrahmen
            </Typo.H3>
            <Typo.Paragraph>
              Wir übertragen deinen Kontenrahmen und deine Buchungspraxis in
              das Prüfregelwerk: Steuerschlüssel-Logik, Perioden- und
              Saldenregeln, Kreditoren- und Ordnungsmäßigkeitsprüfung,
              mandantenspezifische Ausnahmen. Dein FiBu-Team liefert die
              fachlichen Vorgaben, wir modellieren sie.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mt-2!">
              Phase 3: Pilotmonat mit Parallel-Prüfung
            </Typo.H3>
            <Typo.Paragraph>
              Ein kompletter Buchungsmonat wird doppelt geprüft: einmal wie
              gewohnt durch dein Team, einmal durch das KI-Review. Beide
              Ergebnisse werden Position für Position verglichen. Falsche
              Alarme werden aus dem Regelwerk kalibriert, übersehene Fälle
              ergänzt. Erst wenn die Klärliste trägt, geht das Review in den
              Regelbetrieb.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4} isLast>
            <Typo.H3 className="mt-2!">Phase 4: Übergabe</Typo.H3>
            <Typo.Paragraph>
              Einweisung des Teams in Klärliste und Monatsreport, Übergabe
              der Dokumentation zu Regelwerk und Anbindung, Leitfaden für
              Anpassungen bei neuen Mandanten. Auf Wunsch begleiten wir die
              ersten Regelbetriebs-Monate. Sprich uns dazu einfach über die{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                Kontaktseite
              </Link>{" "}
              an.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/business-roadmap.jpg"
              alt="Projektplan der Einführung in vier Phasen"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      {/* 4. NACHVOLLZIEHBARKEIT */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Verantwortung</IntroBox.PreHeadline>
          <IntroBox.Headline>
            GoBD-Nachvollziehbarkeit ist Teil der Implementierung
          </IntroBox.Headline>
        </IntroBox>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <Typo.Paragraph>
            Das Review wird von Anfang an so aufgesetzt, dass jede Prüfung
            belegbar ist: Abfrage-Log am MCP-Server, Befund mit Begründung je
            Auffälligkeit, dokumentierte Entscheidung des Sachbearbeiters und
            ein Monatsreport pro Mandant. Gebucht wird ausschließlich durch
            dein Team in DATEV, die KI bleibt lesend.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Das Monatsreview ist ein Baustein von mehreren: Einen Überblick
            über alle automatisierten Kanzlei-Prozesse, vom Belegeingang bis
            zur E-Rechnung, gibt der{" "}
            <Link
              href="/branchen/steuerberater/workflows"
              className="text-primary-600 hover:underline"
            >
              Workflow-Katalog für Steuerberater
            </Link>
            .
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* 5. FAQ */}
      <ContentWrapper colorScheme="gray-light">
        <FaqContainer
          faqs={[
            {
              question:
                "Was kostet die Implementierung des FiBu-Monatsreviews?",
              answer:
                "Der Aufwand hängt vor allem von zwei Faktoren ab: wie viele Mandanten mit welchen Besonderheiten angebunden werden und wie stark dein Kontenrahmen vom Standard abweicht. Deshalb nennen wir keinen Pauschalpreis von der Stange, sondern kalkulieren nach einem kurzen Erstgespräch ein Festpreis-Angebot für Anbindung, Regelwerk, Pilotmonat und Übergabe. Der laufende Betrieb ist deutlich schlanker als das Setup.",
            },
            {
              question: "Wie lange dauert die Einführung?",
              answer:
                "Die Anbindung an DATEV-Connect und das Regelwerk sind in wenigen Wochen aufgesetzt. Den Takt gibt danach der Pilotmonat vor: Er läuft über einen vollen Buchungsmonat parallel zur gewohnten Prüfung. Realistisch ist der Regelbetrieb damit nach zwei bis drei Monaten ab Projektstart erreicht, abhängig davon, wie schnell dein Team die Parallel-Prüfung einplanen kann.",
            },
            {
              question:
                "Wie ist der Datenschutz geregelt, verlassen Mandantendaten die Kanzlei?",
              answer:
                "Der MCP-Server läuft in deiner Umgebung oder auf EU-Infrastruktur mit Auftragsverarbeitungsvertrag, der Zugriff auf DATEV-Connect ist rein lesend und auf freigegebene Mandanten beschränkt. Es werden keine Buchungsdaten zum Training von KI-Modellen verwendet. Welche Modell-Variante zum Einsatz kommt, on-premise oder EU-Cloud, legen wir gemeinsam in Phase 1 fest, passend zu deinen Anforderungen an das Steuergeheimnis.",
            },
            {
              question:
                "Was passiert, wenn der Pilotmonat zu viele Fehlalarme zeigt?",
              answer:
                "Genau dafür ist er da. Fehlalarme werden im Pilotmonat systematisch ausgewertet und das Regelwerk wird nachkalibriert, bei Bedarf verlängern wir die Parallel-Prüfung um einen weiteren Monat. In den Regelbetrieb geht das Review erst, wenn dein Team der Klärliste vertraut.",
            },
          ]}
        />
      </ContentWrapper>

      {/* 6. FINAL CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
