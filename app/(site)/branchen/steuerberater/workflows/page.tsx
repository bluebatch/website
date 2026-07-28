import type { Metadata } from "next";
import { Bot, Workflow } from "lucide-react";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import GeoSummary from "@/components/ui/geo-summary";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import InternalLink from "@/components/buttons/internal-link";
import IntroBox from "@/components/ui/intro-box";
import SimpleCard from "@/components/cards/simple-card";
import StatsList from "@/components/ui/stats-list";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import { FaqContainer } from "@/components/ui/faqs";
import { ProductTileGrid } from "@/components/cards/product-tile";

export const metadata: Metadata = {
  title: "Workflows für Steuerberater | Bluebatch",
  description:
    "Automatisierte Workflows für Steuerkanzleien: Belegprüfung, Dokumentenverarbeitung, DATEV-Jira-Sync, E-Rechnung und Mandanten-Onboarding - zuverlässig und GoBD-konform.",
  openGraph: {
    title: "Workflows für Steuerberater - Bluebatch",
    description:
      "Automatisierte Workflows für Steuerkanzleien: Belegprüfung, Dokumentenverarbeitung, DATEV-Jira-Sync, E-Rechnung und Mandanten-Onboarding - zuverlässig und GoBD-konform.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Workflows für Steuerberater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflows für Steuerberater - Bluebatch",
    description:
      "Automatisierte Workflows für Steuerkanzleien: Belegprüfung, Dokumentenverarbeitung, DATEV-Jira-Sync, E-Rechnung und Mandanten-Onboarding - zuverlässig und GoBD-konform.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/branchen/steuerberater/workflows",
  },
};

const workflows = [
  {
    href: "/branchen/steuerberater/workflows/belegpruefung",
    title: "Belegprüfung automatisieren",
    badge: "Workflow #01",
    role: "Belegprüfung mit GoBD-Check",
    stat: "-85%",
    description:
      "Manuelle Belegprüfung bindet 3-6 h/Monat pro Mandant. KI-Belegerfassung mit GoBD-Validierung senkt den Aufwand um 85% und Fehler auf unter 0,1%.",
    image: "/images/belegpruefung/hero-belegcheck.png",
    features: [
      "KI-OCR liest Belege aus allen Kanälen",
      "Pflichtangaben-Check nach §14 UStG",
      "Unter 60 Sekunden pro Beleg",
      "Übergabe an DATEV Belegtransfer",
    ],
    linkLabel: "Zur Belegprüfung",
  },
  {
    href: "/branchen/steuerberater/workflows/dokumentenverarbeitung",
    title: "Dokumentenverarbeitung",
    badge: "Workflow #02",
    role: "KI-OCR und Klassifikation",
    stat: "< 1 Min",
    description:
      "Belegerfassung bindet 41 h/Monat pro Mandant. KI-OCR klassifiziert und extrahiert Belege in unter 1 Min und spart 1.500-3.000 €/Mo.",
    image: "/images/dokumentenverarbeitung/hero-document-flow.png",
    features: [
      "Multi-OCR mit 99% Trefferquote",
      "Automatische Klassifikation je Belegart",
      "GoBD-Audit-Trail pro Beleg",
      "DATEV-fertige Buchungsvorschläge",
    ],
    linkLabel: "Zur Dokumentenverarbeitung",
  },
  {
    href: "/branchen/steuerberater/workflows/datev-jira-task-orchestration",
    title: "DATEV-Jira Orchestration",
    badge: "Workflow #03",
    role: "Bidirektionaler System-Sync",
    stat: "2 Min",
    description:
      "Doppelpflege DATEV und Jira kostet 20-30 h/Woche. Bidirektionaler Sync senkt den Aufwand pro Vorgang von 25 auf 2 Min und steigert SLA-Treffer um 30%.",
    image: "/images/datev-jira/timeline-visual.png",
    features: [
      "Aufgaben, Fristen und Status im Sync",
      "DATEV bleibt führendes System",
      "KI-Klassifikation für Mandantenmails",
      "SLA-Treffer plus 30% nach Go-Live",
    ],
    linkLabel: "Zur DATEV-Jira Orchestration",
  },
  {
    href: "/branchen/steuerberater/workflows/e-rechnung-verarbeitung",
    title: "E-Rechnung KI",
    badge: "Workflow #04",
    role: "XRechnung und ZUGFeRD",
    stat: "0,10 €",
    description:
      "E-Rechnungs-Pflicht 2025 trifft jeden Mandanten. KI parst XRechnung und ZUGFeRD, validiert per KoSIT und senkt Kosten von 11,50 € auf 0,10 € pro Rechnung.",
    image: "/images/e-rechnung/format-xrechnung.png",
    features: [
      "XRechnung, ZUGFeRD und Peppol",
      "KoSIT-Validierung gegen EN 16931",
      "30 Sekunden statt 12 Minuten",
      "Original-XML GoBD-konform archiviert",
    ],
    linkLabel: "Zur E-Rechnung-Verarbeitung",
  },
  {
    href: "/branchen/steuerberater/workflows/mandanten-onboarding",
    title: "KI-Mandanten-Onboarding",
    badge: "Workflow #05",
    role: "GwG/KYC und DATEV-Anlage",
    stat: "30 Min",
    description:
      "Manuelles Onboarding dauert 4-8 h pro Mandant. KI-Workflow für GwG/KYC, DATEV-Anlage und Vollmachten senkt Aufwand um 85% und Fehler um 80%.",
    image: "/images/mandanten-onboarding/hero-welcome.png",
    features: [
      "Self-Service-Frontend für Mandanten",
      "GwG-, PEP- und Sanktionslisten-Check",
      "Vollmachten digital eingeholt",
      "DATEV-Anlage in 2 Min automatisch",
    ],
    linkLabel: "Zum Mandanten-Onboarding",
  },
];

const stats = [
  { value: 85, suffix: " %", label: "Weniger Aufwand in der Belegprüfung" },
  { value: 99, suffix: " %", label: "OCR-Trefferquote bei Belegen" },
  { value: 30, suffix: " Min", label: "Mandanten-Onboarding statt 4-8 h" },
  { value: 30, prefix: "+", suffix: " %", label: "SLA-Treffer nach DATEV-Jira-Sync" },
];

const faqs = [
  {
    question: "Sind automatisierte Workflows GoBD-konform?",
    answer:
      "Ja, und zwar gerade weil ein Workflow ein fester Ablauf ist. Jeder Durchlauf wird mit Zeitstempel, Hashwert und Original-Beleg protokolliert, jede Entscheidung folgt einem definierten Regelwerk. Ein Prüfer kann für jeden Beleg nachvollziehen, wann er einging, welche Prüfungen liefen und warum er so gebucht wurde. Das Original bleibt dabei immer unverändert erhalten.",
  },
  {
    question: "Was kostet Workflow-Automatisierung für eine Kanzlei?",
    answer:
      "Das hängt vom Prozess und der Systemlandschaft ab. Ein einzelner Workflow wie die Belegprüfung ist ein überschaubares Projekt von wenigen Wochen, eine Orchestrierung über mehrere Systeme braucht mehr Analyse. Die Rechnung geht in der Praxis schnell auf: Bei der E-Rechnung sinken die Vollkosten von 11,50 € auf 0,10 € pro Rechnung, beim Onboarding von 4-8 Stunden auf 30 Minuten pro Neumandant. Im Erstgespräch rechnen wir das für Ihren konkreten Prozess durch.",
  },
  {
    question: "Funktioniert das mit DATEV?",
    answer:
      "Ja, DATEV ist in fast jedem unserer Kanzlei-Workflows das führende System. Wir binden es über DATEVconnect, Belegtransfer und EXTF-Übergabe an, je nachdem, was der Prozess braucht. DATEV wird dabei nicht abgelöst: Der Workflow übernimmt die Zuarbeit, gebucht und geführt wird weiter in DATEV.",
  },
  {
    question: "Workflow oder KI-Agent, was brauchen wir?",
    answer:
      "Faustregel: Läuft der Prozess immer nach denselben Regeln ab, ist er ein Fall für einen Workflow, zum Beispiel Belegprüfung, E-Rechnung oder Onboarding. Braucht die Aufgabe Sprachverständnis und Urteilsvermögen, etwa das Beantworten von Mandanten-Mails, ist ein KI-Agent mit menschlicher Freigabe die bessere Wahl. Viele Kanzleien kombinieren beides.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <div className="text-center max-w-3xl mx-auto">
          <Typo.H1>Workflows für Steuerberater</Typo.H1>
          <GeoSummary align="center" className="mt-4">
            Workflows sind fest automatisierte Kanzlei-Prozesse mit definiertem
            Ablauf: Belegprüfung mit GoBD-Validierung, Dokumentenverarbeitung
            per KI-OCR, DATEV-Jira-Synchronisation, E-Rechnungs-Verarbeitung
            und Mandanten-Onboarding. Bluebatch baut diese fünf Workflows auf
            n8n-Basis für Steuerkanzleien - GoBD-konform protokolliert,
            DATEV-angebunden und mit bis zu 85% weniger manuellem Aufwand. Ihr
            Team behält die Kontrolle über jede Ausnahme.
          </GeoSummary>
          <ContactButton icon="chat">Beratung anfragen</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.Headline>
            Was ist ein Workflow (und was nicht)?
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            In der Kanzlei-Automatisierung lohnt sich eine saubere
            Unterscheidung, denn sie entscheidet über Compliance, Aufwand und
            das richtige Werkzeug.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={2} className="mt-10 max-w-5xl mx-auto">
          <SimpleCard align="left" className="rounded-lg">
            <SimpleCard.Icon background="primary" color="white" size="md">
              <Workflow className="size-6" />
            </SimpleCard.Icon>
            <Typo.H3 className="mt-4">Workflow: fester Ablauf</Typo.H3>
            <Typo.Paragraph className="text-gray-600 mt-2">
              Ein Workflow folgt einem vorher definierten Regelwerk. Jeder
              Schritt ist festgelegt, jedes Ergebnis reproduzierbar, jeder
              Durchlauf protokolliert. Genau deshalb passt er so gut zu GoBD
              und Kanzlei-Compliance: Man kann jederzeit nachvollziehen, warum
              ein Beleg so verarbeitet wurde. Ideal für Prozesse mit klaren
              Regeln wie Belegprüfung, E-Rechnung oder Mandanten-Onboarding.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="rounded-lg">
            <SimpleCard.Icon background="secondary" color="white" size="md">
              <Bot className="size-6" />
            </SimpleCard.Icon>
            <Typo.H3 className="mt-4">KI-Agent: Ermessensspielraum</Typo.H3>
            <Typo.Paragraph className="text-gray-600 mt-2">
              Ein KI-Agent arbeitet situativ: Er liest eine Mandanten-Mail,
              versteht das Anliegen und formuliert einen Antwortentwurf, den
              Ihr Team freigibt. Das ist die richtige Wahl, wenn eine Aufgabe
              Sprachverständnis und Urteilsvermögen braucht und ein fester
              Ablauf zu starr wäre.
            </Typo.Paragraph>
            <SimpleCard.Footer>
              <InternalLink href="/branchen/steuerberater/ki-agenten">
                KI-Agenten für Steuerberater
              </InternalLink>
            </SimpleCard.Footer>
          </SimpleCard>
        </SimpleGrid>
        <Typo.Paragraph className="text-gray-600 text-center max-w-3xl mx-auto mt-10">
          Die Faustregel: Läuft ein Prozess immer gleich ab, gehört er in einen
          Workflow. Auf dieser Seite geht es um genau diese fest automatisierten
          Prozesse, viele Kanzleien kombinieren später beides.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.Headline>
            Wo Workflows in der Kanzlei am meisten bringen
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Fast jede Kanzlei automatisiert in derselben Reihenfolge, weil
            jeder Schritt auf dem vorherigen aufbaut. So sieht der typische Weg
            aus, mit den Zahlen aus unseren Projekten.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="max-w-3xl mx-auto mt-12">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3>Belegwege digitalisieren</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mt-2">
                Der größte Hebel liegt fast immer am Anfang: Belege kommen per
                Mail, Portal, Scan und Pendelordner, und jemand tippt sie ab.
                KI-OCR mit GoBD-Regelwerk erfasst und prüft einen Standardbeleg
                in unter einer Minute statt in 25, die Fehlerquote sinkt auf
                unter 0,1%. Pro Mandant macht das rund 85% weniger
                Prüfungsaufwand, bei erfassungsintensiven Mandaten bis zu 41
                eingesparte Stunden im Monat.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3>E-Rechnung sauber verarbeiten</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mt-2">
                Mit der E-Rechnungs-Pflicht kommen XRechnung und ZUGFeRD bei
                jedem Mandanten an. Wer die XML-Daten strukturiert verarbeitet
                statt PDFs abzutippen, senkt die Vollkosten von 11,50 € auf
                0,10 € pro Rechnung: KoSIT-validiert, in 30 Sekunden statt 12
                Minuten, mit GoBD-konform archiviertem Original.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3>Mandanten-Onboarding beschleunigen</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mt-2">
                Sind die Belegwege digital, lohnt sich der Blick auf den
                Prozess davor: Neumandanten aufnehmen. Stammdaten,
                GwG-Identifizierung, PEP- und Sanktionslisten-Check, Vollmacht
                und DATEV-Anlage laufen als ein Workflow in 30 Minuten statt in
                4-8 Stunden, mit 80% weniger Fehlern in den Stammdaten.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3>Systeme synchronisieren</Typo.H3>
              <Typo.Paragraph className="text-gray-600 mt-2">
                Zum Schluss verschwindet die Doppelpflege: Wenn DATEV, Jira,
                Outlook und Excel dieselben Vorgänge tragen, kostet das schnell
                20-30 Stunden pro Woche. Ein bidirektionaler Sync senkt den
                Aufwand pro Vorgang von 25 auf 2 Minuten und hebt die
                SLA-Treffer um 30%, ohne dass DATEV als führendes System
                abgelöst wird.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="dark">
        <IntroBox size="small" dark>
          <IntroBox.Headline>Was das in Zahlen heißt</IntroBox.Headline>
        </IntroBox>
        <StatsList stats={stats} cols={4} className="mt-10" />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.Headline>
            Fünf Workflows, die wir immer wieder bauen
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Jeder dieser Workflows ist bei Steuerkanzleien im Einsatz und im
            Detail dokumentiert: Ausgangslage, Ablauf, Systeme und was am Ende
            an Zeit und Kosten gespart wird. Die Detailseiten zeigen, wie der
            jeweilige Prozess konkret aussieht.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProductTileGrid items={workflows} cols={3} className="mt-12" />
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.Headline>Vom Prozess zum Workflow</IntroBox.Headline>
          <IntroBox.Paragraph>
            Kein Workflow von der Stange: Wir bauen den Ablauf, den Ihre
            Kanzlei tatsächlich hat, nur ohne die manuellen Schritte. Das läuft
            in vier Phasen.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={4} className="mt-10">
          <SimpleCard align="left" className="rounded-lg">
            <Typo.H3>1. Prozess-Analyse</Typo.H3>
            <Typo.Paragraph className="text-gray-600 mt-2">
              Wir schauen uns den Ist-Prozess an: Wer macht was, welche Systeme
              sind beteiligt, wo geht Zeit verloren. Daraus entsteht ein
              Soll-Ablauf mit klaren Regeln und definierten Ausnahmen. Oft
              reicht dafür ein kompakter Workflow-Audit von wenigen Tagen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="rounded-lg">
            <Typo.H3>2. Umsetzung in n8n</Typo.H3>
            <Typo.Paragraph className="text-gray-600 mt-2">
              Der Soll-Ablauf wird als n8n-Workflow umgesetzt, angebunden an
              DATEV, Mail, Portale und Ihre Fachverfahren. Gehostet in Ihrer
              Umgebung oder bei uns, je nachdem, was zu Ihrer Kanzlei passt.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="rounded-lg">
            <Typo.H3>3. GoBD-konforme Protokollierung</Typo.H3>
            <Typo.Paragraph className="text-gray-600 mt-2">
              Jeder Durchlauf wird mit Zeitstempel, Hashwert und Original-Beleg
              protokolliert. Ausnahmen landen in einer Klärschleife bei Ihrem
              Team, nichts wird still verworfen. Prüfer können jeden Schritt
              nachvollziehen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="rounded-lg">
            <Typo.H3>4. Betrieb</Typo.H3>
            <Typo.Paragraph className="text-gray-600 mt-2">
              Nach dem Go-Live übernehmen wir Monitoring und Fehlerbehandlung
              und passen den Workflow an, wenn sich Formate, Schnittstellen
              oder Prozesse ändern. Auf Wunsch als Managed Service.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
        <div className="text-center max-w-2xl mx-auto mt-12">
          <Typo.Paragraph className="text-gray-600 mb-6">
            Der einfachste Einstieg ist ein Gespräch über den Prozess, der Sie
            gerade am meisten Zeit kostet. Daraus wird meist schnell klar,
            welcher Workflow zuerst dran ist und was er bringt.
          </Typo.Paragraph>
          <ContactButton icon="chat">
            Über Ihren Prozess sprechen
          </ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            Häufige Fragen zu Workflows in der Kanzlei
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
