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
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import ComparisonCard, {
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
  ComparisonFooter,
} from "@/components/cards/comparison-card";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import IntroBox from "@/components/ui/intro-box";
import SavingsCard, {
  SavingsBadge,
  SavingsBadgeHighlight,
  SavingsItems,
  SavingsItem,
} from "@/components/cards/savings-card";
import RoiCalculation, {
  RoiAssumption,
  RoiRow,
  RoiTotal,
  RoiSource,
} from "@/components/sections/roi-calculation";
import WorkflowDiagram from "@/components/sections/workflow-diagram";
import KpiCard from "@/components/cards/kpi-card";

export const pageConfig: PageConfig = {
  title: "Belegprüfung",
  description:
    "KI-Belegerfassung für Steuerkanzleien: GoBD-konform und DATEV-ready.",
};

const defaultMeta = {
  title: "KI-Belegerfassung für Steuerkanzleien | Bluebatch",
  description:
    "Manuelle Belegprüfung bindet 3-6 h/Monat pro Mandant. KI-Belegerfassung mit GoBD-Validierung senkt Aufwand um 85% und Fehler auf unter 0,1%.",
  ogDescription:
    "KI-Belegerfassung mit GoBD-Validierung, Pflichtangaben-Check und DATEV-Übergabe, in unter einer Minute pro Beleg.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "KI Belegerfassung",
    "Belegerfassung automatisieren",
    "KI Rechnungserkennung",
    "KI Umsatzsteuer",
    "GoBD Belegprüfung",
    "DATEV Belegprüfung",
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
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch KI-Belegerfassung für Steuerkanzleien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.ogDescription,
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/steuerberater/belegpruefung",
  },
};

const heroStats = [
  { value: "85 %", label: "Weniger Aufwand" },
  { value: "< 0,1 %", label: "Fehlerquote" },
  { value: "< 60 Sek.", label: "Pro Beleg" },
  { value: "421 k €", label: "Nettonutzen / Jahr" },
];

export default function Page() {
  return (
    <>
      {/* 1. HERO 2-COLUMN */}
      <ContentWrapper isFirstSection colorScheme="gradient-cool">
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Use Case Steuerberater
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              KI-Belegerfassung für Steuerkanzleien: GoBD-konform und
              DATEV-ready
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Manuelle Belegprüfung gegen GoBD, §14 UStG und Pflichtangaben
              bindet 3 bis 6 Stunden pro Monat und Mandant. Ein n8n-Workflow
              mit KI-OCR, regelbasierter Validierung und Anomalieerkennung
              übernimmt den Standardfall in unter einer Minute pro Beleg, mit
              voller Übergabe an DATEV.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">ROI-Analyse anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-gray-200 bg-white/70 p-4 text-center backdrop-blur"
                >
                  <div className="text-2xl font-bold text-primary-700 md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wide text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/belegpruefung/hero-belegcheck.png"
              alt="Beleg mit Häkchen-Verifikation, KI-Lupe scannt Rechnung"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. PROBLEM - 4 große Stat-Cards horizontal */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum deine Kanzlei jeden Beleg dreimal anfasst
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vier strukturelle Schwachstellen der manuellen Belegprüfung, alle
            vier kosten dich Stunden, Skonto und Vorsteuerabzug.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <KpiCard
              value={6}
              prefix="3-"
              suffix=" h"
              subtitle="pro Mandant / Monat"
            />
            <Typo.H3 className="mt-4!">Manuelle Prüfung</Typo.H3>
            <Typo.Paragraph className="text-sm text-gray-600">
              Pflichtangaben nach §14 UStG, GoBD-Konformität,
              Steuersatz-Plausibilität, Lieferantencheck. Pro Beleg 5 bis 8
              Minuten, bei einem Mittelstandsmandat summiert sich das auf eine
              halbe Sachbearbeiter-Woche im Monat.
            </Typo.Paragraph>
          </div>
          <div>
            <KpiCard
              value={5}
              prefix="3-"
              suffix=" %"
              subtitle="Fehlerquote"
            />
            <Typo.H3 className="mt-4!">Risiko Vorsteuerabzug</Typo.H3>
            <Typo.Paragraph className="text-sm text-gray-600">
              Bei manueller Erfassung schleichen sich Tippfehler, fehlende
              USt-IDs und falsche Steuersätze ein. Bei 5.000 Rechnungen pro
              Jahr bedeutet das 10.500 bis 42.000 Euro Schaden.
            </Typo.Paragraph>
          </div>
          <div>
            <KpiCard
              value={189}
              suffix=" k €"
              subtitle="Skontoausfall / Jahr"
            />
            <Typo.H3 className="mt-4!">Cashflow blockiert</Typo.H3>
            <Typo.Paragraph className="text-sm text-gray-600">
              Mandanten verlieren Skonto, weil Rechnungen in der Klärschleife
              hängen. Ein Mittelstandsbetrieb büßt im Schnitt 189.000 Euro
              Cashflow-Wirkung pro Jahr ein.
            </Typo.Paragraph>
          </div>
          <div>
            <KpiCard value={2025} subtitle="E-Rechnungspflicht" />
            <Typo.H3 className="mt-4!">Druck durch E-Rechnung</Typo.H3>
            <Typo.Paragraph className="text-sm text-gray-600">
              Mit der Pflicht ab 2025 muss jede B2B-Eingangsrechnung EN
              16931-konform validiert werden. XRechnung und ZUGFeRD landen
              parallel zu PDFs und Papier-Scans in der Inbox.
            </Typo.Paragraph>
          </div>
        </div>
      </ContentWrapper>

      {/* 2b. Problem-Bild (small width) */}
      <ContentWrapper bodyWidth="small">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <Image
            src="/images/belegpruefung/problem-beleg-chaos.png"
            alt="Stapel Belege quillt aus Eingangskorb, gestresste Person daneben"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>
      </ContentWrapper>

      {/* 3. WORKFLOW-DIAGRAMM (zentrale Komponente, 5-Step linear) */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Der Workflow</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Belegerfassung automatisieren: 5 Schritte vom Eingang bis DATEV
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ein n8n-Workflow mit KI-OCR, GoBD-Regelwerk und Anomalieerkennung.
            Aus jedem Format, in jeder Sprache, rund um die Uhr. Mit voller
            Übergabe an DATEV Belegtransfer und Rewe.
          </IntroBox.Subline>
        </IntroBox>

        <WorkflowDiagram variant="linear">
          <WorkflowDiagram.Step
            n={1}
            title="Eingang"
            description="Mail, Portal, DATEV, Mobile-Scan"
          />
          <WorkflowDiagram.Step
            n={2}
            title="KI-OCR"
            description="Multi-OCR, XML-Parser"
          />
          <WorkflowDiagram.Step
            n={3}
            title="GoBD-Regelwerk"
            description="§14 UStG, Pflichtangaben"
          />
          <WorkflowDiagram.Step
            n={4}
            title="Anomalie-Check"
            description="RAG auf Buchungshistorie"
          />
          <WorkflowDiagram.Step
            n={5}
            title="DATEV-Übergabe"
            description="Belegtransfer + Rewe"
          />
        </WorkflowDiagram>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <Typo.H3 className="mt-0!">Multi-OCR Best-of-Breed</Typo.H3>
            <Typo.Paragraph>
              Für PDFs und Papier-Scans extrahiert ein Multi-OCR-Stack aus
              Klippa, Mindee und Azure Document Intelligence die Belegdaten.
              XRechnung und ZUGFeRD werden direkt aus dem XML gelesen. Erkannt
              werden Lieferant, Rechnungsnummer, Datum, Netto, USt-Satz,
              USt-ID, Leistungsbeschreibung, Skontofrist und
              Zahlungsbedingungen.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H3 className="mt-0!">
              Confidence-Score und Auto-Freigabe
            </Typo.H3>
            <Typo.Paragraph>
              Jeder Beleg bekommt einen Confidence-Score zwischen 0 und 100
              Prozent. Ab 90 Prozent läuft die Buchung vollautomatisch an
              DATEV. Darunter wandert der Beleg in die Klärschleife: ein
              Sachbearbeiter prüft 20 bis 30 Sekunden, bestätigt mit einem
              Klick oder korrigiert die zwei, drei flaggierten Felder. Jede
              Entscheidung mit Zeitstempel, User und Originalbild im
              GoBD-Audit-Log.
            </Typo.Paragraph>
          </div>
        </div>
      </ContentWrapper>

      {/* 4. COMPARISON CARD: Vorher / Nachher */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Vorher / Nachher</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was sich pro Beleg im Alltag der Kanzlei ändert
          </IntroBox.Headline>
          <IntroBox.Subline>
            Die gleichen Sachbearbeiter, der gleiche Mandantenstamm, der
            gleiche DATEV-Auftrag, nur eben ohne Tipperei.
          </IntroBox.Subline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Vorher: Manuell</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                5 bis 8 Minuten pro Standardbeleg, Akkordarbeit im
                Monatsabschluss
              </ComparisonListItem>
              <ComparisonListItem>
                3 bis 5 Prozent Fehlerquote, Vorsteuerabzug regelmäßig in
                Gefahr
              </ComparisonListItem>
              <ComparisonListItem>
                Pflichtangaben werden manuell gegengeprüft, GoBD-Doku im
                Excel-Sheet
              </ComparisonListItem>
              <ComparisonListItem>
                Dubletten fallen erst beim Mandantengespräch oder beim
                Jahresabschluss auf
              </ComparisonListItem>
              <ComparisonListItem>
                XRechnung, ZUGFeRD, PDF und Papier laufen in vier getrennten
                Mini-Workflows
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Vollkosten: ~11,50 € pro Beleg</ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>Nachher: Mit Bluebatch</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Unter 1 Minute pro Standardbeleg, vollautomatisch an DATEV
                übergeben
              </ComparisonListItem>
              <ComparisonListItem>
                Unter 0,1 Prozent Fehlerquote durch Regelwerk und
                Anomalieerkennung
              </ComparisonListItem>
              <ComparisonListItem>
                GoBD-Audit-Log automatisch pro Beleg, jederzeit prüffähig
              </ComparisonListItem>
              <ComparisonListItem>
                Dubletten werden im Eingang erkannt, bevor sie überhaupt
                gebucht werden
              </ComparisonListItem>
              <ComparisonListItem>
                Ein Workflow für alle Formate, XRechnung und ZUGFeRD nativ
                unterstützt
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Vollkosten: ~0,10 € pro Beleg</ComparisonFooter>
          </AfterCard>
        </ComparisonCard>

        <div className="mx-auto mt-12 max-w-md">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/belegpruefung/comparison-after.png"
              alt="Aufgeräumter Schreibtisch mit grün leuchtendem Beleg"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      {/* 5. DELIVERY — TimelineAsSteps */}
      <ContentWrapper colorScheme="white">
        <IntroBox>
          <IntroBox.PreHeadline>Delivery</IntroBox.PreHeadline>
          <IntroBox.Headline>Von Null auf Live in 4 Wochen</IntroBox.Headline>
          <IntroBox.Subline>
            Kein Big-Bang-Projekt. Wir starten mit einem Pilotmandanten und
            rollen schrittweise auf den restlichen Mandantenstamm aus.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-2!">Woche 1, Beleg-Onboarding</Typo.H3>
            <Typo.Paragraph>
              Alle Beleg-Eingangskanäle pro Pilotmandant werden inventarisiert:
              Mail-Postfächer, Scanner, Mobile Apps, Mandantenportal, DATEV
              Belegtransfer. Wir analysieren die letzten 200 Belege, mappen
              Formate und prüfen die DATEV-Schnittstelle. Du bekommst einen
              schriftlichen Befund: was geht automatisch, was bleibt manuell.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-2!">Woche 2, Validierungsregeln</Typo.H3>
            <Typo.Paragraph>
              GoBD-Pflichtfelder und mandantenindividuelle Regeln, also
              Kostenstellen, Lieferantenstamm, Genehmigungslimits, werden in
              n8n modelliert. Stammdaten-Sync gegen DATEV Kreditoren und
              Debitoren wird eingerichtet. Confidence-Schwellen werden auf
              deine Buchungspraxis kalibriert.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mt-2!">Woche 3, KI-Layer und Pilot</Typo.H3>
            <Typo.Paragraph>
              Multi-OCR-Stack und Anomalieerkennung mit RAG auf die
              Buchungshistorie werden konfiguriert. 10 bis 20 Prozent des
              Belegvolumens des Pilotmandanten laufen durch den Workflow, dein
              Team prüft jede Buchung nach, wir tunen Edge-Cases.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3 className="mt-2!">Woche 4, DATEV-Übergabe live</Typo.H3>
            <Typo.Paragraph>
              Buchungsvorschläge per DATEV Belegbilderservice und Rewe-Import
              laufen produktiv. Klärfall-Routing zu Jira oder Slack ist aktiv.
              Schulung des Sachbearbeiter-Teams für den Review-Workflow,
              Übergabe der Dokumentation und der n8n-Workflow-Files.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={5} isLast>
            <Typo.H3 className="mt-2!">
              Danach, Rollout auf alle Mandanten
            </Typo.H3>
            <Typo.Paragraph>
              Mandant für Mandant wird das Regelwerk kopiert und auf die
              jeweilige Buchungspraxis getuned. Mehr dazu unter{" "}
              <Link
                href="/workflow-wartung"
                className="text-primary-600 hover:underline"
              >
                Workflow-Wartung
              </Link>
              . Einen Überblick über alle KI-Einsatzbereiche in der Kanzlei
              gibt unser Leitfaden{" "}
              <Link
                href="/blog/ki-steuerberater"
                className="text-primary-600 hover:underline"
              >
                KI für Steuerberater
              </Link>
              . Wie die Belegprüfung in eine durchgängig digitale Kanzlei
              passt, zeigt der{" "}
              <Link
                href="/blog/digitalisierung-steuerberatung"
                className="text-primary-600 hover:underline"
              >
                Digitalisierungs-Leitfaden für Steuerkanzleien
              </Link>
              .
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* 6. SAVINGS CARD - 309-421k€ Nettonutzen */}
      <ContentWrapper colorScheme="gradient-cool">
        <IntroBox>
          <IntroBox.PreHeadline>Was bringt das in Euro?</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Amortisation in 6-7 Monaten
          </IntroBox.Headline>
          <IntroBox.Subline>
            Rechenbeispiel für eine Kanzlei mit 300 Belegen pro Monat. Die
            Vollkosten pro Beleg sinken durch GoBD-Validierung und DATEV-Übergabe.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <SavingsCard>
            <SavingsBadge>
              Amortisation in{" "}
              <SavingsBadgeHighlight>6-7</SavingsBadgeHighlight> Monaten
            </SavingsBadge>
            <SavingsItems>
              <SavingsItem label="Setup einmalig">12.000 €</SavingsItem>
              <SavingsItem label="Betrieb pro Monat">1.500 €</SavingsItem>
              <SavingsItem label="Ersparnis pro Monat" highlight>
                1.920 €
              </SavingsItem>
            </SavingsItems>
          </SavingsCard>

          <RoiCalculation>
            <RoiAssumption>300 Belege pro Monat</RoiAssumption>
            <RoiRow label="Vollkosten vorher">11,50 € / Beleg</RoiRow>
            <RoiRow label="Vollkosten nachher">0,10 € / Beleg</RoiRow>
            <RoiRow label="Ersparnis pro Beleg" highlight>
              11,40 €
            </RoiRow>
            <RoiRow label="Brutto pro Monat (300 × 11,40 €)">3.420 €</RoiRow>
            <RoiRow label="Betrieb pro Monat">− 1.500 €</RoiRow>
            <RoiTotal label="Netto pro Monat">1.920 €</RoiTotal>
            <RoiSource>Vollkosten-Quelle: bonpago.de</RoiSource>
          </RoiCalculation>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/roi-rechner/document?docs=300&before=11&after=1&hourly=65&tier=medium&setup=12000&maint=1500"
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-primary-700"
          >
            Eigenes ROI mit dem Calculator berechnen
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </ContentWrapper>

      {/* 7. FAQ */}
      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Wie GoBD-konform ist eine KI-Belegerfassung wirklich?",
              answer:
                "Der Workflow erfüllt die GoBD-Anforderungen an Unveränderbarkeit, Vollständigkeit und Nachvollziehbarkeit. Jede KI-Entscheidung und jede manuelle Korrektur wird mit Zeitstempel, User-ID und Original-Belegbild im Audit-Log gespeichert. Die Verfahrensdokumentation wird dir als Vorlage zur Verfügung gestellt, du passt sie an deine Kanzleiprozesse an. Bei Betriebsprüfung kannst du jede Buchung lückenlos zur Quelle zurückverfolgen.",
            },
            {
              question:
                "Welche Belegformate werden bei der KI-Rechnungserkennung unterstützt, XRechnung, ZUGFeRD, PDF, Papier?",
              answer:
                "Alle gängigen Formate: XRechnung (EN 16931), ZUGFeRD 2.x, PDF, JPG, PNG, TIFF, sowie Fotos von Papierbelegen aus Mobile-Apps. Bei XRechnung und ZUGFeRD wird direkt aus dem XML gelesen, das ist deutlich präziser als OCR. Für Scans kommt ein Multi-OCR-Stack aus Klippa, Mindee und Azure Document Intelligence zum Einsatz, mit Tesseract als Fallback für Sonderfälle.",
            },
            {
              question:
                "Wie wird der Vorsteuerabzug abgesichert, wenn die KI mal falsch entscheidet?",
              answer:
                "Jeder Beleg bekommt einen Confidence-Score. Ab 90 Prozent läuft die Buchung automatisch, darunter wandert der Beleg in die manuelle Klärung. Pflichtangaben nach §14 UStG werden regelbasiert geprüft, nicht KI-basiert, das heißt eine fehlende USt-ID blockt zuverlässig. Bei der Anomalieerkennung mit RAG wird die KI nur als zusätzlicher Layer eingesetzt, nicht als alleinige Entscheidungsinstanz. So bleibt der Sachbearbeiter immer in der Loop.",
            },
            {
              question:
                "Was passiert bei niedriger Confidence, wie funktioniert das Klärfall-Routing?",
              answer:
                "Belege unter der Confidence-Schwelle werden automatisch in eine Klärschleife geroutet: optional als Jira-Ticket, als Slack-Nachricht an den zuständigen Sachbearbeiter oder als E-Mail-Anfrage an den Mandanten. Mit SLA-Timer, Eskalation und Lerneffekt: einmal geklärte Sonderfälle erkennt das System beim nächsten Mal automatisch. Typische Klärquote: 20 bis 25 Prozent am Anfang, 8 bis 12 Prozent nach drei Monaten Tuning.",
            },
            {
              question:
                "Wie schnell sehe ich ROI bei der GoBD-Belegprüfung bei 100, 300 oder 1000 Rechnungen pro Monat?",
              answer:
                "Bei 100 Rechnungen pro Monat amortisiert sich das Setup typischerweise in 6 bis 9 Monaten, bei 300 in 3 bis 5 Monaten, bei 1000 unter 3 Monaten. Der Nettonutzen pro Mittelstandsmandant liegt laut bonpago.de zwischen 309 und 421 Tausend Euro pro Jahr, vor allem durch Skontogewinn und reduzierte Klärfallzeiten. Die genaue Rechnung machen wir im Audit der ersten Woche pro Mandant.",
            },
            {
              question:
                "Brauche ich DATEV ASR zusätzlich für die DATEV-Belegprüfung, oder ersetzt euer Workflow das?",
              answer:
                "Der Bluebatch-Workflow ersetzt DATEV ASR für die meisten Kanzleien, weil du Multi-OCR, Custom-Regeln pro Mandant, Anomalieerkennung mit RAG und Klärfall-Routing zu Jira und Slack bekommst. DATEV ASR bleibt auf den DATEV-Kosmos beschränkt und lässt keine eigenen Regeln zu. Wenn du ASR schon einsetzt, läuft Bluebatch parallel und übernimmt die Belege, die ASR nicht packt, oft sind das gerade die teuren Klärfälle.",
            },
            {
              question:
                "Wie ist der Datenschutz und das Steuergeheimnis bei der Steuerkanzlei-Automatisierung abgesichert?",
              answer:
                "Drei Optionen: bei dir on-premise auf eigenem Server, in deiner Hetzner- oder AWS-Box mit eigenem Account, oder bei uns in Frankfurt gehostet. Auftragsverarbeitungsvertrag immer mit deutschem Vertragspartner. Keine Mandantendaten verlassen die EU, kein Training auf deinen Daten. Bei on-premise mit lokaler GPU bleiben sogar die LLM-Anfragen in deiner Infrastruktur, das deckt das Steuergeheimnis nach §203 StGB sauber ab.",
            },
          ]}
        />
      </ContentWrapper>

      {/* 8. FINAL CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
