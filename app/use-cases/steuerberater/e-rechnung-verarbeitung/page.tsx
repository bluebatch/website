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
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import IntroBox from "@/components/ui/intro-box";
import Customer from "@/components/sections/customer/customer";
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
import ComplianceNoticeBox from "@/components/ui/compliance-notice-box";
import WorkflowDiagram from "@/components/sections/workflow-diagram";
import SimpleCard from "@/components/cards/simple-card";

export const pageConfig: PageConfig = {
  title: "E-Rechnung-Verarbeitung",
  description:
    "XRechnung und ZUGFeRD automatisch parsen, KoSIT-validieren und in DATEV buchen.",
};

const defaultMeta = {
  title: "E-Rechnung KI für Steuerkanzleien | Bluebatch",
  description:
    "E-Rechnungs-Pflicht 2025 trifft jeden Mandanten. KI parst XRechnung und ZUGFeRD, validiert per KoSIT, 11,50 € auf 0,10 € pro Rechnung.",
  ogDescription:
    "XRechnung und ZUGFeRD automatisch verarbeiten: KoSIT-validiert, KI-Buchungsvorschlag, DATEV-Übergabe.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "E-Rechnung KI",
    "KI Umsatzsteuer",
    "Automatisierung Steuerberatung",
    "Steuerberater Automatisierung",
    "XRechnung",
    "ZUGFeRD",
    "KoSIT-Validator",
    "EN 16931",
    "DATEV E-Rechnung",
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
        alt: "Bluebatch E-Rechnung KI für Steuerkanzleien",
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
    canonical: "/use-cases/steuerberater/e-rechnung-verarbeitung",
  },
};

const formats = [
  {
    name: "XRechnung",
    image: "/images/e-rechnung/format-xrechnung.png",
    specs: [
      "Reines XML (CII oder UBL)",
      "EN 16931 CIUS XRechnung 3.0",
      "Pflicht für Behörden seit 27.11.2020",
    ],
    kosit:
      "KoSIT-Validator prüft Schematron-Regeln, Geschäftsregeln und Inhalt strukturiert.",
  },
  {
    name: "ZUGFeRD",
    image: "/images/e-rechnung/format-zugferd.png",
    specs: [
      "Hybrid: PDF/A-3 mit eingebettetem XML",
      "Profile BASIC, EN 16931, EXTENDED",
      "Lesbar für Mensch und Maschine",
    ],
    kosit:
      "factur-x extrahiert das embedded XML, KoSIT validiert wie reine XRechnung.",
  },
  {
    name: "EDI/Peppol",
    image: "/images/e-rechnung/format-edi.png",
    specs: [
      "Peppol BIS Billing 3.0",
      "Zustellung über Access Point Network",
      "B2B-Standard im EU-Raum",
    ],
    kosit:
      "Eingangspunkt mit eigener BIS-3.0-Adresse, danach gleicher KoSIT-Check.",
  },
];

const escalations = [
  {
    title: "KoSIT meldet inhaltlichen Geschäftsregelverstoß",
    desc: "Steuersumme passt nicht zu Positionen, Bestellbezug fehlt oder USt-ID des Lieferanten ist seit Empfang erloschen. Der Workflow stoppt die Buchung, eskaliert an den zuständigen Sachbearbeiter und versendet automatisch eine begründete Reject-Mail an den Lieferanten.",
  },
  {
    title: "KI-Confidence unter 90 Prozent beim Sachkonto",
    desc: "Selten gebuchter Lieferant, neue Kostenstelle oder ungewöhnlicher Steuersatz: der RAG-Vorschlag liegt unter der Freigabeschwelle. Klärfall landet in Jira oder DATEV Aufgaben, Mensch entscheidet, das Ergebnis fließt zurück ins RAG.",
  },
  {
    title: "Verdacht auf Dublette oder Manipulation",
    desc: "Rechnungsnummer plus Betrag plus Datum matchen einen bereits verarbeiteten Beleg, oder PDF-Hash weicht vom eingebetteten XML ab. Der Workflow hält den Beleg an, dokumentiert den Verdacht im Audit-Log und übergibt zur Vier-Augen-Prüfung.",
  },
];

export default function Page() {
  return (
    <>
      {/* 1. HERO mit Compliance-Notice */}
      <ContentWrapper colorScheme="gray-light" isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Use Case Steuerberater
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              E-Rechnung KI für Steuerkanzleien: XRechnung und ZUGFeRD ohne
              Abtippen
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Seit dem 01.01.2025 muss jeder B2B-Mandant E-Rechnungen
              empfangen können. Bluebatch parst XRechnung und ZUGFeRD direkt
              aus dem XML, validiert per KoSIT gegen EN 16931 und übergibt
              geprüfte Buchungsvorschläge an DATEV. Vorsteuersicher,
              GoBD-konform, ohne OCR-Fehlerquote.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">ROI-Analyse anfragen</ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <ComplianceNoticeBox variant="warning">
              <ComplianceNoticeBox.Label>Stichtag</ComplianceNoticeBox.Label>
              <ComplianceNoticeBox.Headline>
                E-Rechnungs-Pflicht ab 01.01.2025
              </ComplianceNoticeBox.Headline>
              <ComplianceNoticeBox.Body>
                Mit Wachstumschancengesetz § 14 UStG und BMF-Schreiben 10/2025
                muss jedes deutsche B2B-Unternehmen elektronische Rechnungen
                empfangen und revisionssicher archivieren können. Ohne
                KoSIT-konforme Verarbeitung droht Streichung des
                Vorsteuerabzugs bei Betriebsprüfung.
              </ComplianceNoticeBox.Body>
              <ComplianceNoticeBox.Footnote>
                Versandpflicht gestaffelt: ab 01.01.2027 für Unternehmen
                &gt; 800k € Umsatz, ab 01.01.2028 für alle. Quelle:
                BMF-Schreiben 10/2025.
              </ComplianceNoticeBox.Footnote>
            </ComplianceNoticeBox>
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. FORMAT-ÜBERSICHT */}
      <ContentWrapper colorScheme="white">
        <IntroBox>
          <IntroBox.PreHeadline>Was wir verarbeiten</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Drei Formate, ein Workflow, ein KoSIT-Validator
          </IntroBox.Headline>
          <IntroBox.Subline>
            XRechnung, ZUGFeRD und Peppol-EDI laufen über denselben
            n8n-Workflow. Egal welches Format der Lieferant nutzt, das
            Ergebnis ist ein strukturiertes, KoSIT-geprüftes JSON, das direkt
            in DATEV läuft.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {formats.map((fmt) => (
            <SimpleCard key={fmt.name} align="center" className="rounded-2xl">
              <SimpleCard.Image
                src={fmt.image}
                alt={`Format ${fmt.name}`}
                size="xl"
              />
              <Typo.H3 className="mt-4! mb-3!">{fmt.name}</Typo.H3>
              <ul className="space-y-2 text-sm text-gray-700 text-left">
                {fmt.specs.map((spec) => (
                  <li key={spec} className="flex items-start gap-2">
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
              <SimpleCard.Footer>
                <div className="text-xs text-gray-700 text-left">
                  <strong className="font-bold text-cta-700">
                    KoSIT-Hinweis:
                  </strong>{" "}
                  {fmt.kosit}
                </div>
              </SimpleCard.Footer>
            </SimpleCard>
          ))}
        </div>
      </ContentWrapper>

      {/* 3. WORKFLOW-DIAGRAMM */}
      <ContentWrapper colorScheme="gradient-cool">
        <IntroBox>
          <IntroBox.PreHeadline>Wie der Workflow läuft</IntroBox.PreHeadline>
          <IntroBox.Headline>
            XML-Parsing-Flow mit KoSIT-Validator im Zentrum
          </IntroBox.Headline>
          <IntroBox.Subline>
            Fünf Schritte vom Posteingang in den DATEV-Buchungsstapel. Der
            KoSIT-Validator entscheidet, welche Rechnung formal sicher ist.
            Confidence-Score entscheidet, welche ohne Touch durchgeht.
          </IntroBox.Subline>
        </IntroBox>

        <WorkflowDiagram variant="circular">
          <WorkflowDiagram.Step
            n={1}
            title="Eingang"
            description="Mail, Peppol, TRAFFIQX und DATEV E-Rechnungsplattform an einem Trigger."
          />
          <WorkflowDiagram.Step
            n={2}
            title="Format-Detection"
            description="XRechnung CII/UBL vs. ZUGFeRD-Hybrid automatisch erkennen."
          />
          <WorkflowDiagram.Step
            n={3}
            title="KoSIT-Validierung"
            description="EN 16931 plus Schematron-Regeln, Reject bei Verstoß."
          />
          <WorkflowDiagram.Step
            n={4}
            title="KI-Plausibilität"
            description="3-Way-Match, RAG-Sachkontovorschlag, Confidence-Score."
          />
          <WorkflowDiagram.Step
            n={5}
            title="DATEV"
            description="EXTF-Übergabe in Rewe, Original-XML ins GoBD-Archiv."
          />
        </WorkflowDiagram>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <SimpleCard align="left" className="rounded-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-cta-700">
              KoSIT-Branch
            </div>
            <Typo.H3 className="mt-2! mb-2!">
              Validierungsfehler stoppen den Stapel
            </Typo.H3>
            <Typo.Paragraph>
              Bei Syntax-, Schematron- oder Geschäftsregelverstoß landet der
              Beleg nicht im DATEV-Stapel. Stattdessen geht automatisch eine
              strukturierte Reject-Mail mit KoSIT-Report an den Lieferanten,
              bevor der Vorsteuerabzug formal verloren geht.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="rounded-2xl">
            <div className="text-xs font-bold uppercase tracking-widest text-secondary-700">
              Confidence-Branch
            </div>
            <Typo.H3 className="mt-2! mb-2!">
              Über 90 Prozent läuft vollautomatisch
            </Typo.H3>
            <Typo.Paragraph>
              KoSIT-grüne Rechnungen mit Confidence-Score &gt; 90 Prozent
              fließen ohne Touch in DATEV. Darunter wird der Beleg zur Klärung
              ausgesteuert. Jede manuelle Korrektur fließt zurück ins RAG.
            </Typo.Paragraph>
          </SimpleCard>
        </div>
      </ContentWrapper>

      {/* 4. COMPARISON */}
      <ContentWrapper colorScheme="white">
        <IntroBox>
          <IntroBox.PreHeadline>Manuell vs. KI-Parse</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Manuelles Abtippen aus XML vs. strukturierter KI-Parse
          </IntroBox.Headline>
          <IntroBox.Subline>
            XRechnung-XML im Viewer ablesen und in DATEV abtippen ist
            fehleranfällig, langsam und juristisch riskant. Strukturiertes
            Parsen mit KoSIT-Validierung dauert Sekunden und schützt den
            Vorsteuerabzug.
          </IntroBox.Subline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Manuell: XML abtippen</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Mandant schickt XRechnung-XML per Mail an die Kanzlei
              </ComparisonListItem>
              <ComparisonListItem>
                Sachbearbeiter öffnet Viewer und liest XML vom Bildschirm ab
              </ComparisonListItem>
              <ComparisonListItem>
                Betrag, USt-Schlüssel, Lieferant manuell in DATEV eintippen
              </ComparisonListItem>
              <ComparisonListItem>
                Keine KoSIT-Validierung, Vorsteuerrisiko bleibt bestehen
              </ComparisonListItem>
              <ComparisonListItem>
                12 Min. pro Rechnung, 11,50 € Vollkosten
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>5-8 Min. selbst bei Standardbeleg</ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>KI-Parse: XML direkt verarbeiten</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                E-Mail- und Peppol-Trigger empfangen XRechnung und ZUGFeRD
              </ComparisonListItem>
              <ComparisonListItem>
                python-drafthorse und factur-x parsen XML strukturiert, kein OCR
              </ComparisonListItem>
              <ComparisonListItem>
                KoSIT-Validator prüft EN 16931, blockt formal fehlerhafte Belege
              </ComparisonListItem>
              <ComparisonListItem>
                KI-Buchungsvorschlag aus Buchungshistorie (RAG)
              </ComparisonListItem>
              <ComparisonListItem>
                30 Sek. pro Rechnung, 0,10 € Vollkosten
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Confidence &gt;90 % geht direkt durch</ComparisonFooter>
          </AfterCard>
        </ComparisonCard>
      </ContentWrapper>

      {/* 5. SAVINGS prominent */}
      <ContentWrapper colorScheme="gradient-primary-dark">
        <IntroBox dark>
          <IntroBox.PreHeadline>Was bringt das in Euro?</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Amortisation in 7-8 Monaten
          </IntroBox.Headline>
          <IntroBox.Subline>
            Rechenbeispiel für eine Kanzlei mit 300 Eingangsrechnungen pro
            Monat. Die Vollkosten pro Rechnung sinken durch KI-Parsing und
            KoSIT-Validierung deutlich.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <SavingsCard>
            <SavingsBadge>
              Amortisation in{" "}
              <SavingsBadgeHighlight>7-8</SavingsBadgeHighlight> Monaten
            </SavingsBadge>
            <SavingsItems>
              <SavingsItem label="Setup einmalig">15.000 €</SavingsItem>
              <SavingsItem label="Betrieb pro Monat">1.500 €</SavingsItem>
              <SavingsItem label="Ersparnis pro Monat" highlight>
                1.920 €
              </SavingsItem>
            </SavingsItems>
          </SavingsCard>

          <RoiCalculation>
            <RoiAssumption>
              300 Eingangsrechnungen pro Monat
            </RoiAssumption>
            <RoiRow label="Vollkosten vorher">11,50 € / Rechnung</RoiRow>
            <RoiRow label="Vollkosten nachher">0,10 € / Rechnung</RoiRow>
            <RoiRow label="Ersparnis pro Rechnung" highlight>
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
            href="/roi-rechner/document?docs=300&before=11&after=1&hourly=65&tier=medium&setup=15000&maint=1500"
            className="inline-flex items-center gap-2 rounded-full bg-secondary-500 px-6 py-3 text-sm font-semibold text-primary-900 shadow-md transition hover:bg-secondary-400"
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

      {/* 6. ESKALATIONEN */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Wenn Mensch ran muss</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Häufige Eskalationen: drei Fälle, in denen der Workflow stoppt
          </IntroBox.Headline>
          <IntroBox.Subline>
            Automatisierung heißt nicht Blackbox. Diese drei Klärfälle landen
            mit vollem Kontext beim zuständigen Sachbearbeiter, jede manuelle
            Entscheidung fließt zurück ins RAG.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/e-rechnung/escalation-human.png"
              alt="Person prüft einen einzelnen XML-Fall am Bildschirm, KI-Helper daneben"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <ol className="space-y-5">
            {escalations.map((esc, idx) => (
              <li
                key={esc.title}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                    {idx + 1}
                  </div>
                  <div>
                    <Typo.H3 className="mt-0! mb-2! text-lg!">
                      {esc.title}
                    </Typo.H3>
                    <Typo.Paragraph>{esc.desc}</Typo.Paragraph>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </ContentWrapper>

      {/* Customer logos band */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* 7. FAQ */}
      <ContentWrapper colorScheme="white">
        <FaqContainer
          faqs={[
            {
              question:
                "Was passiert mit Rechnungen, die nicht EN-16931-konform sind, verlieren wir den Vorsteuerabzug?",
              answer:
                "Genau das verhindert die KoSIT-Validierung in unserem Workflow. Jede E-Rechnung wird vor dem DATEV-Upload gegen die EN-16931-Schematron-Regeln und die CIUS XRechnung geprüft. Bei Syntax- oder Geschäftsregelverstoß bekommt der Lieferant automatisch eine Reject-Mail mit dem KoSIT-Fehlerbericht, die Rechnung läuft nicht in den Buchungsstapel. So bleibt der Vorsteuerabzug formal sicher (BMF-Schreiben 10/2025).",
            },
            {
              question:
                "Wie unterscheidet sich der Workflow von der DATEV E-Rechnungsplattform?",
              answer:
                "Die DATEV E-Rechnungsplattform ist stark für den Versand und das reine Empfangs-Postfach. Beim Empfang und der KI-gestützten Verarbeitung in DATEV Rewe gibt es Lücken: KoSIT-Bericht erscheint im Belegbild, muss aber manuell ausgewertet werden, Buchung wird nicht automatisch angelegt. Wir setzen einen n8n-Workflow-Layer dazwischen, der automatisch validiert, klassifiziert und den fertigen Buchungsstapel an DATEV übergibt.",
            },
            {
              question:
                "Müssen wir alle Lieferanten auf Peppol umstellen oder reicht E-Mail-Empfang?",
              answer:
                "Beides geht parallel. Wir bündeln E-Mail-Postfach, Peppol-BIS-3.0-Adresse, TRAFFIQX und die DATEV E-Rechnungsplattform an denselben n8n-Trigger. So musst du Lieferanten nicht zwingen, ihren Kanal zu wechseln. Mittelfristig empfehlen wir Peppol für deine Top-Lieferanten, weil die Zustellung dort technisch sauberer ist als E-Mail mit XML-Anhang.",
            },
            {
              question:
                "Wie wird das Original-XML GoBD-konform archiviert, reicht ein DMS?",
              answer:
                "GoBD verlangt unveränderbare, jederzeit lesbare Speicherung des Originals. Wir schreiben das Original-XML in ein revisionssicheres DMS deiner Wahl (ecodms, d.velop, DATEV DMS oder kanzleieigenes System), mit Hashwert, Zeitstempel und Audit-Log. Das PDF dient ausschließlich als Lesehilfe und ersetzt das XML nicht. Damit erfüllen wir die GoBD-Anforderungen und du bist bei Betriebsprüfung sauber aufgestellt.",
            },
            {
              question:
                "Was kostet das pro Mandant und Rechnung im Vergleich zu xSuite oder ELO?",
              answer:
                "Setup bei uns ab 8.000 €, plus Wartung zwischen 500 und 2.500 € pro Monat je nach Mandantenzahl und Volumen. Vollkosten pro verarbeiteter Rechnung liegen bei rund 0,10 €. xSuite und ELO for DATEV starten bei 20.000 € Setup, kommen meist auf 50.000 € plus mit Customizing, plus laufende DMS-Lizenz. Wir sind also schneller live, billiger im Setup und ohne DMS-Lock-in.",
            },
            {
              question:
                "Funktioniert das auch mit ZUGFeRD-Hybridrechnungen oder nur mit reinem XRechnung-XML?",
              answer:
                "Beides. Der Workflow erkennt automatisch, ob eine reine XRechnung (XML CII oder UBL) oder eine ZUGFeRD-PDF/A-3 mit eingebettetem XML reinkommt. Für ZUGFeRD nutzen wir factur-x, um die embedded XML auszupacken, für XRechnung python-drafthorse. Das PDF dient nur als visuelle Anzeige für den Sachbearbeiter, die Buchungsdaten kommen immer aus dem XML.",
            },
            {
              question:
                "Wie schnell sehen wir ROI bei 100, 500 oder 5.000 Rechnungen pro Monat?",
              answer:
                "Faustregel: ab 300 Rechnungen pro Monat amortisiert sich das Setup in 6 bis 9 Monaten. Bei 5.000 Rechnungen pro Monat (typischer Mittelstandsmandant) liegt der Break-Even bei 3 bis 4 Monaten, der jährliche Nettonutzen bei 309.500 bis 421.000 € (bonpago). Bei kleineren Mandanten (100 Rechnungen pro Monat) lohnt sich Bluebatch über die Bündelung mehrerer Mandanten auf einen Workflow.",
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
