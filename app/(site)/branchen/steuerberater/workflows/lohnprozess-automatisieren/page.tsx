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
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import IntroBox from "@/components/ui/intro-box";

export const pageConfig: PageConfig = {
  title: "Lohnprozess automatisieren",
  description:
    "Lohnprozess automatisieren: strukturierte Datenerfassung beim Mandanten, automatische Verteilung der Auswertungen, bis zur White-Label-Plattform.",
};

const defaultMeta = {
  title: "Lohnbuchhaltung automatisieren: der Lohnprozess der Kanzlei | Bluebatch",
  description:
    "Lohnprozess in der Kanzlei automatisieren: Lohndaten strukturiert beim Mandanten erfassen, Auswertungen automatisch verteilen, auf Wunsch als White-Label-Plattform im Kanzlei-Design.",
  ogDescription:
    "Vom Zettel-Zulauf zur strukturierten Lohnstrecke: Datenerfassung beim Mandanten, automatische Verteilung, bis hin zur White-Label-Plattform für Mandanten.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "Lohnprozess automatisieren",
    "Lohnbuchhaltung Kanzlei digitalisieren",
    "Lohndaten Mandanten erfassen",
    "White-Label-Plattform Steuerberater",
    "digitale Personalakte Kanzlei",
    "Lohn Vorerfassung Mandant",
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
        url: "/og?title=Lohnprozess%20automatisieren&eyebrow=Steuerberater",
        width: 1200,
        height: 630,
        alt: "Bluebatch automatisierter Lohnprozess für Steuerkanzleien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.ogDescription,
    images: ["/og?title=Lohnprozess%20automatisieren&eyebrow=Steuerberater"],
  },
  alternates: {
    canonical: "/branchen/steuerberater/workflows/lohnprozess-automatisieren",
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
              Lohnbuchhaltung automatisieren: von der Datenerfassung zur White-Label-Plattform
            </Hero2ColumnHeadline>
            <GeoSummary>
              Die Lohnprozess-Automatisierung von Bluebatch ist ein Workflow
              für Steuerkanzleien, der Lohndaten strukturiert beim Mandanten
              erfasst, in die Lohnsoftware übergibt und Auswertungen
              automatisch verteilt. Auf Wunsch wird daraus eine
              White-Label-Plattform im Kanzlei-Design, über die Mandanten
              Stammdaten, Stunden und Bescheinigungen selbst pflegen, statt
              Zettel und Excel-Listen per Mail zu schicken.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Workflow anfragen</ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/human-resources.jpg"
              alt="Lohn- und Personaldaten in einem digitalen Prozess"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. PROBLEM / KONTEXT */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Lohn ist Fristgeschäft, läuft aber wie Zettelwirtschaft
          </IntroBox.Headline>
          <IntroBox.Subline>
            Jeden Monat dieselbe Strecke unter Termindruck: Daten einsammeln,
            nachfragen, erfassen, abrechnen, verteilen. Der fachliche Teil ist
            der kleinste, der logistische frisst die Zeit.
          </IntroBox.Subline>
        </IntroBox>

        <ProseColumns cols={3} className="mt-12">
          <ProseColumns.Item title="Datenzulauf in allen Formaten">
            <Typo.Paragraph className="text-sm text-gray-600">
              Stundenzettel als Handyfoto, Excel-Listen in jeder Variante,
              Krankmeldungen per Anruf, neue Mitarbeiter als Mail mit fünf
              Anhängen. Die Lohnsachbearbeiterin übersetzt jeden Monat ein
              Format-Chaos in saubere Bewegungsdaten, bevor die eigentliche
              Abrechnung überhaupt beginnt.
            </Typo.Paragraph>
          </ProseColumns.Item>
          <ProseColumns.Item title="Harte Fristen, späte Daten">
            <Typo.Paragraph className="text-sm text-gray-600">
              Lohnsteuer-Anmeldung, Sozialversicherungsmeldungen und
              Beitragsnachweise haben feste Termine, die Bewegungsdaten der
              Mandanten kommen trotzdem oft erst kurz vor knapp. Jede
              Nachfrage kostet einen Tag, und jede Korrektur nach der
              Abrechnung kostet doppelt.
            </Typo.Paragraph>
          </ProseColumns.Item>
          <ProseColumns.Item title="Verteilen als Handarbeit">
            <Typo.Paragraph className="text-sm text-gray-600">
              Nach der Abrechnung geht es weiter: Abrechnungen an
              Mitarbeiter, Auswertungen an den Mandanten, Buchungsbeleg in
              die FiBu, Bescheinigungen auf Zuruf. Wer das per Mail und
              Papier verteilt, produziert Rückfragen und
              Datenschutz-Risiken gleich mit.
            </Typo.Paragraph>
          </ProseColumns.Item>
        </ProseColumns>

        <div className="mx-auto mt-12 max-w-2xl">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src="/images/process-automation.jpg"
              alt="Automatisierte Prozessstrecke für die Lohnabrechnung"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      {/* 3. WIE DER WORKFLOW LÄUFT */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Der Workflow</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Die Lohnstrecke in vier Ausbaustufen
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vom strukturierten Datenzulauf bis zur eigenen Plattform unter
            Kanzlei-Marke. Jede Stufe funktioniert für sich, jede baut auf der
            vorherigen auf.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-2!">
              Strukturierte Datenerfassung beim Mandanten
            </Typo.H3>
            <Typo.Paragraph>
              Statt Zettel und Freitext-Mails erfasst der Mandant
              Bewegungsdaten über strukturierte Formulare: Stunden, Zuschläge,
              Ein- und Austritte, Fehlzeiten. Pflichtfelder und Plausibilitäts-
              Checks fangen Fehler an der Quelle ab, automatische Erinnerungen
              vor dem Abrechnungsstichtag ersetzen das Hinterhertelefonieren.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-2!">Übergabe an die Lohnsoftware</Typo.H3>
            <Typo.Paragraph>
              Die erfassten Daten werden validiert und strukturiert an die
              Lohnsoftware der Kanzlei übergeben, etwa als Vorerfassung für
              DATEV. Die Lohnsachbearbeiterin prüft und rechnet ab, statt
              abzutippen. Fachliche Entscheidungen bleiben bei ihr, die
              Datenlogistik übernimmt der Workflow.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mt-2!">Automatische Verteilung</Typo.H3>
            <Typo.Paragraph>
              Nach dem Abrechnungslauf verteilt der Workflow die Ergebnisse:
              Abrechnungen ins Mitarbeiter-Postfach oder Portal, Auswertungen
              und Zahlungsübersichten an den Mandanten, Buchungsdaten in die
              Finanzbuchhaltung. Standard-Bescheinigungen werden auf Anfrage
              automatisch aus den vorhandenen Daten erstellt, ohne dass die
              Lohnabteilung jedes Mal manuell tätig wird.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4} isLast>
            <Typo.H3 className="mt-2!">
              Ausbaustufe White-Label-Plattform
            </Typo.H3>
            <Typo.Paragraph>
              In der letzten Stufe wird aus den Formularen eine
              Lohn-Plattform unter der Marke der Kanzlei: Mandanten pflegen
              Stammdaten und Stunden selbst, sehen den Status ihrer
              Abrechnung und laden Dokumente sicher herunter. Die Kanzlei
              positioniert den Lohn damit als eigenes digitales Produkt statt
              als Pflichtleistung. Denselben Selfservice-Ansatz nutzt auch
              das{" "}
              <Link
                href="/branchen/steuerberater/workflows/mandanten-onboarding"
                className="text-primary-600 hover:underline"
              >
                digitale Mandanten-Onboarding
              </Link>
              . Welche weiteren Prozesse sich so automatisieren lassen, zeigt
              der{" "}
              <Link
                href="/branchen/steuerberater/workflows"
                className="text-primary-600 hover:underline"
              >
                Workflow-Katalog für Steuerberater
              </Link>
              , oder du{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                fragst uns direkt
              </Link>
              .
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* 4. FAQ */}
      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Ersetzt der Workflow unsere Lohnsoftware wie DATEV LODAS oder Lohn und Gehalt?",
              answer:
                "Nein, bewusst nicht. Die Abrechnung selbst bleibt in der Lohnsoftware der Kanzlei, dort liegen Tarifwissen, Meldeverfahren und Berufsrecht richtig. Der Workflow automatisiert die Strecke davor und danach: strukturierte Datenerfassung beim Mandanten, validierte Übergabe als Vorerfassung und automatische Verteilung der Ergebnisse. Genau diese Strecke verursacht in den meisten Kanzleien den Großteil des Aufwands.",
            },
            {
              question:
                "Was bringt eine White-Label-Plattform gegenüber fertigen Mandanten-Apps?",
              answer:
                "Die Plattform läuft unter der Marke der Kanzlei: eigene Domain, eigenes Logo, eigene Tonalität. Der Mandant erlebt die Kanzlei als digitalen Anbieter, nicht ein fremdes SaaS-Produkt, in dem die Kanzlei nur ein Mandant unter vielen ist. Dazu kommt die Flexibilität: Formulare, Prozesse und Anbindungen werden auf die Kanzlei zugeschnitten, statt dass sich die Kanzlei dem Tool anpasst.",
            },
            {
              question:
                "Wie ist der Datenschutz bei Lohndaten abgesichert?",
              answer:
                "Lohndaten gehören zu den sensibelsten Daten der Kanzlei, entsprechend ist der Workflow aufgebaut: verschlüsselte Übertragung, Hosting in Deutschland oder on-premise auf eigener Infrastruktur, rollenbasierte Zugriffe und Abrechnungen im Portal-Abruf statt als Mail-Anhang. Auftragsverarbeitung wird mit deutschem Vertragspartner geregelt, Mandanten- und Mitarbeiterdaten verlassen die EU nicht.",
            },
            {
              question:
                "Lohnt sich die Automatisierung auch bei wenigen Lohnmandaten?",
              answer:
                "Die Stufen eins bis drei lohnen sich schon bei kleinen Lohnabteilungen, weil sie den monatlichen Einsammel- und Verteilaufwand pro Mandant senken und Fristen automatisch überwachen. Die White-Label-Plattform als Ausbaustufe entfaltet ihren Wert vor allem bei größeren Lohnbeständen oder wenn die Kanzlei Lohn aktiv als Wachstumsfeld positionieren will. Der Einstieg ist deshalb bewusst stufenweise möglich.",
            },
          ]}
        />
      </ContentWrapper>

      {/* 5. FINAL CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
