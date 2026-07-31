import type { Metadata } from "next";
import {
  TrendingUp,
  AlertTriangle,
  Calculator,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import type { PageConfig } from "@/lib/get-subpages";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import KpiCard from "@/components/cards/kpi-card";
import StatsLeadHero from "@/components/heroes/stats-lead-hero";
import IntroBox from "@/components/ui/intro-box";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import { FaqContainer } from "@/components/ui/faqs";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";

export const pageConfig: PageConfig = {
  title: "BWA-Analyse-Agent",
  description:
    "BWA automatisch analysieren: Auffälligkeiten erkennen, Steuer-Forecast je Mandant, fertiger Kommentar zur Freigabe.",
};

const defaultMeta = {
  title: "BWA-Analyse mit KI für Steuerkanzleien: Steuer-Forecast | Bluebatch",
  description:
    "Der BWA-Analyse-Agent wertet jede Monats-BWA automatisch aus: Auffälligkeiten gegenüber Vormonat und Vorjahr, Steuer-Forecast je Mandant, fertiger Kommentar. Die Kanzlei prüft und gibt frei.",
  ogDescription:
    "BWA-Analyse-Agent: jede Monats-BWA automatisch analysiert, Auffälligkeiten und Steuer-Forecast je Mandant, Freigabe durch die Kanzlei.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "BWA Analyse KI",
    "bwa automatisch analysieren",
    "steuer forecast mandant",
    "bwa auswertung automatisieren",
    "ki controlling steuerkanzlei",
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
        url: "/og?title=BWA-Analyse-Agent&eyebrow=Steuerberater",
        width: 1200,
        height: 630,
        alt: "Bluebatch BWA-Analyse-Agent für Steuerkanzleien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.ogDescription,
    images: ["/og?title=BWA-Analyse-Agent&eyebrow=Steuerberater"],
  },
  alternates: {
    canonical: "/branchen/steuerberater/ki-agenten/bwa-analyse-agent",
  },
};

const features = [
  {
    icon: AlertTriangle,
    title: "Auffälligkeiten erkennen",
    body: "Der Agent vergleicht jede BWA mit Vormonat, Vorjahr und dem typischen Verlauf des Mandanten. Ausreißer bei Umsatz, Wareneinsatz, Personal- oder Raumkosten werden markiert und eingeordnet, nicht nur rot gefärbt.",
  },
  {
    icon: Calculator,
    title: "Steuer-Forecast je Mandant",
    body: "Aus dem Ergebnisverlauf rechnet der Agent eine Prognose auf das erwartete Jahresergebnis und die daraus folgende Steuerlast. Der Mandant erfährt früh, was auf ihn zukommt, statt im Bescheid überrascht zu werden.",
  },
  {
    icon: MessageSquareText,
    title: "Kommentar-Entwurf für den Mandanten",
    body: "Zu jeder BWA entsteht ein kurzer, verständlicher Kommentar-Entwurf in der Sprache des Mandanten: was gut läuft, was auffällt, was zu tun ist. Der Sachbearbeiter prüft, passt an und verschickt.",
  },
];

export default function Page() {
  return (
    <>
      {/* 1. HERO */}
      <StatsLeadHero>
        <StatsLeadHero.PreHeadline>
          KI-Agent für Steuerkanzleien
        </StatsLeadHero.PreHeadline>
        <StatsLeadHero.Headline>
          BWA-Analyse-Agent: jede BWA analysiert, jeder Mandant mit
          Steuer-Forecast
        </StatsLeadHero.Headline>
        <GeoSummary>
          Der BWA-Analyse-Agent von Bluebatch wertet für Steuerkanzleien jede
          Monats-BWA automatisch aus: Der Agent erkennt Auffälligkeiten
          gegenüber Vormonat und Vorjahr, erstellt je Mandant einen
          Steuer-Forecast und fasst die Ergebnisse in einem Kommentar-Entwurf
          zusammen. Die Kanzlei prüft den Entwurf und entscheidet, was an den
          Mandanten geht.
        </GeoSummary>
        <StatsLeadHero.Cta>
          <ContactButton icon="chat">Demo anfragen</ContactButton>
        </StatsLeadHero.Cta>
        <StatsLeadHero.Stats>
          <KpiCard
            valueText="Monatlich"
            subtitle="jede BWA automatisch ausgewertet"
          />
          <KpiCard
            valueText="Je Mandant"
            subtitle="ein eigener Steuer-Forecast"
          />
          <KpiCard
            value={100}
            suffix=" %"
            subtitle="der Kommentare vor Versand geprüft"
          />
        </StatsLeadHero.Stats>
        <StatsLeadHero.Media
          src="/images/business-analytics.jpg"
          alt="Auswertung von Geschäftszahlen und Diagrammen am Bildschirm"
        />
      </StatsLeadHero>

      {/* 2. WAS DER AGENT ÜBERNIMMT */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Was der Agent übernimmt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Von der Zahlenkolonne zur Aussage, für jeden Mandanten, jeden
            Monat
          </IntroBox.Headline>
          <IntroBox.Subline>
            Die BWA wird in den meisten Kanzleien erstellt, verschickt und
            selten kommentiert, weil für echte Analyse pro Mandant schlicht
            die Zeit fehlt. Der Agent dreht das um: Analyse wird der
            Normalfall, nicht die Ausnahme für A-Mandate.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-12">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <SimpleCard key={f.title} align="left">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
                  <Icon className="h-6 w-6" />
                </span>
                <Typo.H3>{f.title}</Typo.H3>
                <Typo.Paragraph>{f.body}</Typo.Paragraph>
              </SimpleCard>
            );
          })}
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. WIE DER AGENT ARBEITET */}
      <ContentWrapper colorScheme="white" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>So arbeitet der Agent</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vier Schritte von der fertigen Buchhaltung zum kommentierten
            Forecast
          </IntroBox.Headline>
        </IntroBox>

        <TimelineAsSteps className="mt-12">
          <TimelineAsStepsStep value={1}>
            <Typo.H3>BWA-Daten einlesen</Typo.H3>
            <Typo.Paragraph>
              Sobald die Monatsbuchhaltung fertig ist, zieht der Agent die
              BWA-Werte des Mandanten inklusive Vorjahres- und
              Vormonatsvergleich. Grundlage sind die Daten aus der
              Finanzbuchhaltung, kein manueller Export.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3>Auffälligkeiten analysieren</Typo.H3>
            <Typo.Paragraph>
              Der Agent prüft Ergebnis, Rohertrag und die wichtigsten
              Kostenblöcke gegen den bisherigen Verlauf des Mandanten.
              Abweichungen werden erklärt und priorisiert: Was ist ein
              Buchungseffekt, was ein echtes Signal, was braucht ein
              Gespräch.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3>Steuer-Forecast rechnen</Typo.H3>
            <Typo.Paragraph>
              Auf Basis des Jahresverlaufs entsteht eine Hochrechnung des
              erwarteten Jahresergebnisses und der daraus folgenden
              Steuerbelastung, inklusive Abgleich mit den festgesetzten
              Vorauszahlungen. Größere Lücken werden als Hinweis markiert.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3>Kommentar entwerfen, Kanzlei gibt frei</Typo.H3>
            <Typo.Paragraph>
              Analyse und Forecast werden zu einem kurzen Mandanten-Kommentar
              im Ton der Kanzlei zusammengefasst. Der zuständige
              Sachbearbeiter oder Berufsträger prüft den Entwurf, passt ihn
              an und gibt ihn frei. Erst dann geht etwas an den Mandanten.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <Typo.H3>Freigabe-Prinzip und § 203 StGB</Typo.H3>
          <Typo.Paragraph>
            Wie alle{" "}
            <InternalLink
              href="/branchen/steuerberater/ki-agenten"
              variant="underline"
            >
              KI-Agenten für Steuerberater
            </InternalLink>{" "}
            arbeitet der BWA-Analyse-Agent mit Human-in-the-Loop: Die KI
            liefert Entwürfe, ein Mensch prüft und gibt frei. Die BWA-Daten
            unterliegen dem Berufsgeheimnis nach § 203 StGB und werden nur in
            einer dafür geeigneten Umgebung verarbeitet, ohne
            Trainings-Opt-in und mit Auftragsverarbeitungsvertrag.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* 4. EINORDNUNG / CROSS-SELL */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <div className="mx-auto max-w-3xl text-center">
          <TrendingUp className="mx-auto mb-4 h-10 w-10 text-primary-700" />
          <Typo.H2>Aus dem Pflichtreport wird ein Beratungsprodukt</Typo.H2>
          <Typo.Paragraph>
            Eine kommentierte BWA mit Forecast ist der natürliche Einstieg in
            laufende betriebswirtschaftliche Beratung, und sie macht sich auch
            im Jahresabschluss bezahlt, weil Auffälligkeiten schon
            unterjährig geklärt sind. Wie KI dort weiterhilft, zeigt der{" "}
            <InternalLink
              href="/branchen/steuerberater/ki-agenten/jahresabschluss-ki"
              variant="underline"
            >
              KI-Jahresabschluss
            </InternalLink>
            . Und wenn der Mandant zum Forecast Rückfragen stellt, fängt die{" "}
            <InternalLink
              href="/branchen/steuerberater/ki-agenten/mandantenkommunikation"
              variant="underline"
            >
              KI-Mandantenkommunikation
            </InternalLink>{" "}
            die Routine ab.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* 5. FAQ */}
      <ContentWrapper colorScheme="white">
        <FaqContainer
          faqs={[
            {
              question: "Woher bekommt der Agent die BWA-Daten?",
              answer:
                "Aus der Finanzbuchhaltung der Kanzlei, in der Regel DATEV. Je nach Setup laufen die Daten über eine Schnittstellen-Anbindung oder über einen strukturierten Export, der automatisch verarbeitet wird. Welcher Weg passt, klären wir im Setup gemeinsam mit eurer IT, ein manuelles Zusammenkopieren von Zahlen ist in keinem Fall vorgesehen.",
            },
            {
              question:
                "Wie verlässlich ist der Steuer-Forecast?",
              answer:
                "Der Forecast ist eine Hochrechnung auf Basis des bisherigen Jahresverlaufs, keine verbindliche Steuerberechnung. Genau so wird er auch kommuniziert: als Frühindikator mit Annahmen, die im Kommentar offengelegt werden. Für den Mandanten ist der Unterschied trotzdem groß, denn statt einer Überraschung im Bescheid bekommt er unterjährig eine begründete Größenordnung, und die Kanzlei kann Vorauszahlungen rechtzeitig anpassen lassen.",
            },
            {
              question:
                "Ersetzt der Agent den betriebswirtschaftlichen Berater?",
              answer:
                "Nein. Der Agent übernimmt die Fleißarbeit: Zahlen vergleichen, Ausreißer finden, Forecast rechnen, Entwurf schreiben. Die Einordnung, das Mandantengespräch und die Empfehlung bleiben beim Menschen. In der Praxis passiert eher das Gegenteil von Ersetzen: Weil die Analyse nichts mehr kostet außer Prüfzeit, findet Beratung plötzlich auch bei B- und C-Mandaten statt.",
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
