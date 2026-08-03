import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import ProseColumns from "@/components/ui/prose-columns";
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
import WorkflowDiagram from "@/components/sections/workflow-diagram";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";

export const pageConfig: PageConfig = {
  title: "FiBu-Monatsreview",
  description:
    "Buchungen per KI prüfen: kritische Fehler automatisch erkennen, via MCP-Server an DATEV-Connect.",
};

const defaultMeta = {
  title: "FiBu-Monatsreview per KI für Steuerkanzleien | Bluebatch",
  description:
    "FiBu-Monatsreview per KI: Ein KI-Modell prüft via MCP-Server an DATEV-Connect alle Buchungen des Monats, inkl. Kreditoren- und Ordnungsmäßigkeitsprüfung.",
  ogDescription:
    "Alle Buchungen des Monats per KI prüfen statt Stichproben: MCP-Server an DATEV-Connect, Kreditoren- und Ordnungsmäßigkeitsprüfung, priorisierte Klärliste.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "FiBu Monatsreview",
    "Buchungen prüfen KI",
    "DATEV-Connect MCP",
    "Kreditorenprüfung automatisieren",
    "Ordnungsmäßigkeitsprüfung",
    "FiBu Qualitätssicherung",
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
        url: "/og?title=FiBu-Monatsreview&eyebrow=Steuerberater",
        width: 1200,
        height: 630,
        alt: "Bluebatch FiBu-Monatsreview per KI für Steuerkanzleien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.ogDescription,
    images: ["/og?title=FiBu-Monatsreview&eyebrow=Steuerberater"],
  },
  alternates: {
    canonical: "/branchen/steuerberater/workflows/fibu-monatsreview",
  },
};

export default function Page() {
  return (
    <>
      {/* 1. HERO */}
      <ContentWrapper isFirstSection colorScheme="gradient-cool">
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Use Case Steuerberater
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              FiBu-Monatsreview per KI: jede Buchung geprüft, bevor der Monat
              schließt
            </Hero2ColumnHeadline>
            <GeoSummary>
              Das FiBu-Monatsreview per KI prüft für Steuerkanzleien sämtliche
              Buchungen eines Monats automatisch: Ein KI-Modell greift per
              MCP-Server auf DATEV-Connect zu, erkennt kritische Fehler, führt
              Kreditoren- und Ordnungsmäßigkeitsprüfung durch und liefert eine
              priorisierte Klärliste. Statt stichprobenartiger Durchsicht
              prüft die Kanzlei 100 Prozent der Buchungen, bevor der Monat
              abgeschlossen wird.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Monatsreview besprechen
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/datev-integration.jpg"
              alt="Buchungsjournal auf dem Bildschirm, KI markiert auffällige Positionen"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. PROBLEM */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum das manuelle Monatsreview immer nur Stichproben schafft
          </IntroBox.Headline>
          <IntroBox.Subline>
            Zwischen Fristen, Rückfragen und Lohnlauf bleibt fürs Review der
            Finanzbuchhaltung selten mehr als ein kurzer Blick über die
            Summen- und Saldenliste.
          </IntroBox.Subline>
        </IntroBox>

        <ProseColumns cols={3} className="mt-12">
          <ProseColumns.Item title="Stichprobe statt Vollprüfung">
            Bei hunderten Buchungen pro Mandant und Monat prüft niemand jede
            Zeile. Fehlkontierungen, vertauschte Steuersätze oder doppelt
            erfasste Eingangsrechnungen fallen oft erst beim Jahresabschluss
            auf, dann ist die Korrektur teuer.
          </ProseColumns.Item>
          <ProseColumns.Item title="Kreditoren ohne Kontrolle">
            Kreditorenkonten mit falschen Salden, offene Posten, die längst
            bezahlt sind, und Buchungen auf Sammelkonten: Ohne systematische
            Kreditorenprüfung wächst die Klärliste still im Hintergrund.
          </ProseColumns.Item>
          <ProseColumns.Item title="Ordnungsmäßigkeit als Risiko">
            GoBD verlangt nachvollziehbare, vollständige und zeitgerechte
            Buchführung. Wer Auffälligkeiten erst in der Betriebsprüfung
            erklärt, verhandelt aus der Defensive. Ein dokumentiertes
            Monatsreview dreht das um.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      {/* 3. WORKFLOW */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Der Workflow</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So läuft das KI-Monatsreview: von DATEV-Connect zur Klärliste
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ein KI-Modell wird über einen MCP-Server an DATEV-Connect
            angebunden und arbeitet die Buchungsdaten des Monats systematisch
            durch. Kein Export, kein Excel-Zwischenschritt.
          </IntroBox.Subline>
        </IntroBox>

        <WorkflowDiagram variant="linear">
          <WorkflowDiagram.Step
            n={1}
            title="Datenabruf"
            description="MCP-Server liest via DATEV-Connect"
          />
          <WorkflowDiagram.Step
            n={2}
            title="Regelwerk"
            description="Kontenrahmen, Steuersätze, Perioden"
          />
          <WorkflowDiagram.Step
            n={3}
            title="KI-Prüfung"
            description="Kritische Fehler und Anomalien"
          />
          <WorkflowDiagram.Step
            n={4}
            title="Kreditoren-Check"
            description="Salden, Dubletten, offene Posten"
          />
          <WorkflowDiagram.Step
            n={5}
            title="Klärliste"
            description="Priorisierter Review-Report"
          />
        </WorkflowDiagram>

        <ProseColumns cols={2} wide className="mt-12">
          <ProseColumns.Item title="MCP-Server als Brücke zu DATEV-Connect">
            <Typo.Paragraph>
              Der MCP-Server (Model Context Protocol) gibt dem KI-Modell
              kontrollierten Lesezugriff auf die Buchungsdaten in DATEV: nur
              die freigegebenen Mandanten, nur die benötigten Zeiträume, jede
              Abfrage protokolliert. Das Modell stellt gezielte Fragen an die
              Daten, statt dass jemand CSV-Exporte hin- und herschiebt.
            </Typo.Paragraph>
          </ProseColumns.Item>
          <ProseColumns.Item title="Zweistufige Prüfung: Regeln plus KI">
            <Typo.Paragraph>
              Harte Verstöße wie falsche Steuerschlüssel, Buchungen in
              geschlossene Perioden oder Salden auf Interimskonten erkennt
              ein deterministisches Regelwerk. Die KI ergänzt die
              Mustererkennung: ungewöhnliche Beträge je Kreditor,
              untypische Kontierungen gegen die Buchungshistorie,
              Reverse-Charge-Kandidaten. Jede Auffälligkeit landet mit
              Begründung auf der Klärliste.
            </Typo.Paragraph>
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      {/* 4. PRÜFUMFANG */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Prüfumfang</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was das Review pro Monat abdeckt
          </IntroBox.Headline>
        </IntroBox>

        <ProseColumns cols={2} className="mt-12">
          <ProseColumns.Item title="Kreditorenprüfung">
            <Typo.Paragraph>
              Saldenabgleich je Kreditor, Dubletten-Erkennung über
              Rechnungsnummer und Betrag, überfällige offene Posten,
              Buchungen auf Sammel- und Interimskonten. Wie die Prüfung
              einzelner Belege im Eingang funktioniert, zeigt die Seite zur{" "}
              <Link
                href="/branchen/steuerberater/workflows/belegpruefung"
                className="text-primary-600 hover:underline"
              >
                KI-Belegerfassung
              </Link>
              , das Monatsreview setzt dahinter an und prüft das Ergebnis im
              Zusammenhang.
            </Typo.Paragraph>
          </ProseColumns.Item>
          <ProseColumns.Item title="Ordnungsmäßigkeitsprüfung">
            <Typo.Paragraph>
              Vollständigkeit der Perioden, zeitgerechte Erfassung,
              Steuerschlüssel-Plausibilität gegen Kontenrahmen und
              Vorsteuerkonten, Abstimmung der Umsatzsteuer-Verprobung. Das
              Ergebnis ist ein dokumentierter Prüfpfad je Monat, den die
              Kanzlei bei Rückfragen und in der Betriebsprüfung vorlegen
              kann.
            </Typo.Paragraph>
          </ProseColumns.Item>
        </ProseColumns>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/business-analytics.jpg"
              alt="Auswertung mit markierten Prüfpunkten im Monatsreview"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      {/* 5. NACHVOLLZIEHBARKEIT */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>GoBD und Nachvollziehbarkeit</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Die KI prüft, die Kanzlei entscheidet
          </IntroBox.Headline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-2!">Nur Lesezugriff, alles im Log</Typo.H3>
            <Typo.Paragraph>
              Das KI-Modell liest Buchungsdaten, verändert sie aber nicht.
              Jede Abfrage über den MCP-Server wird mit Zeitstempel und
              Mandantenbezug protokolliert. Korrekturen bucht ausschließlich
              das Kanzlei-Team in DATEV.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-2!">Jeder Befund mit Begründung</Typo.H3>
            <Typo.Paragraph>
              Die Klärliste nennt pro Auffälligkeit die betroffene Buchung,
              die verletzte Regel oder das erkannte Muster und einen
              Korrekturvorschlag. Ein Sachbearbeiter bestätigt, korrigiert
              oder verwirft, diese Entscheidung wird ebenfalls dokumentiert.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3} isLast>
            <Typo.H3 className="mt-2!">Review-Report je Monat</Typo.H3>
            <Typo.Paragraph>
              Am Ende steht ein Monatsreport: geprüfte Buchungen, gefundene
              und erledigte Klärfälle, offene Punkte. Damit ist das
              Monatsreview kein stilles Bauchgefühl mehr, sondern ein
              belegbarer Qualitätsschritt in der FiBu.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>

        <Typo.Paragraph className="mt-8">
          Du willst das Review in deiner Kanzlei einsetzen? Das Angebot{" "}
          <Link
            href="/branchen/steuerberater/workflows/fibu-monatsreview-implementierung"
            className="text-primary-600 hover:underline"
          >
            FiBu-Monatsreview implementieren
          </Link>{" "}
          beschreibt Anbindung, Pilotmonat und Übergabe. Einen Überblick über
          alle automatisierten Kanzlei-Prozesse gibt der{" "}
          <Link
            href="/branchen/steuerberater/workflows"
            className="text-primary-600 hover:underline"
          >
            Workflow-Katalog für Steuerberater
          </Link>
          .
        </Typo.Paragraph>
      </ContentWrapper>

      {/* 6. FAQ */}
      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Was prüft das FiBu-Monatsreview per KI konkret?",
              answer:
                "Das Review arbeitet alle Buchungen des Monats durch: Steuerschlüssel- und Kontierungsplausibilität gegen den Kontenrahmen, Kreditorenprüfung mit Saldenabgleich und Dubletten-Erkennung, Ordnungsmäßigkeitskriterien wie Vollständigkeit und zeitgerechte Erfassung sowie KI-gestützte Anomalieerkennung gegen die Buchungshistorie des Mandanten. Das Ergebnis ist eine priorisierte Klärliste mit Begründung je Befund.",
            },
            {
              question:
                "Wie kommt die KI an die DATEV-Daten, muss ich exportieren?",
              answer:
                "Nein. Ein MCP-Server wird an DATEV-Connect angebunden und gibt dem KI-Modell kontrollierten Lesezugriff auf die freigegebenen Mandanten und Zeiträume. Es gibt keine manuellen CSV-Exporte und keine Kopien in Fremdsystemen, jede Abfrage wird protokolliert.",
            },
            {
              question:
                "Bucht die KI Korrekturen selbst in DATEV?",
              answer:
                "Nein, das Review ist bewusst lesend aufgebaut. Die KI erstellt Befunde und Korrekturvorschläge, gebucht wird ausschließlich durch das Kanzlei-Team. So bleibt die fachliche Verantwortung eindeutig beim Berufsträger und jede Änderung ist in DATEV einem Menschen zuzuordnen.",
            },
            {
              question:
                "Ersetzt das Monatsreview die Belegprüfung im Eingang?",
              answer:
                "Nein, beide ergänzen sich. Die Belegprüfung validiert einzelne Belege beim Eingang, etwa Pflichtangaben nach § 14 UStG. Das Monatsreview prüft danach das Gesamtbild der Buchführung: Salden, Perioden, Kreditorenkonten und Muster über viele Buchungen hinweg. Fehler, die erst im Zusammenhang sichtbar werden, findet nur das Review.",
            },
          ]}
        />
      </ContentWrapper>

      {/* 7. FINAL CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
