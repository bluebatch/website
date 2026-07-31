import type { Metadata } from "next";
import {
  Radar,
  CalendarClock,
  HandCoins,
  Users,
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
  title: "Beratungsanlässe-Agent",
  description:
    "Beratungsanlässe systematisch aus Mandantendaten erkennen: Übergaben, ungewöhnliche Belastungen, Fristen, quartalsweiser Vorauszahlungs-Check.",
};

const defaultMeta = {
  title: "Beratungsanlässe mit KI erkennen: Agent für Steuerkanzleien | Bluebatch",
  description:
    "Der Beratungsanlässe-Agent scannt Mandantendaten systematisch: anstehende Übergaben, ungewöhnliche Belastungen, Fristen, plus quartalsweiser Vorauszahlungs-Check mit Anpassungs-Hinweis. Aus Pflicht wird Beratung.",
  ogDescription:
    "Beratungsanlässe-Agent: Anlässe systematisch aus Mandantendaten erkennen, inklusive quartalsweisem Vorauszahlungs-Check. Aus Pflicht wird Beratung.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "Beratungsanlässe erkennen",
    "beratungsanlässe steuerkanzlei",
    "proaktive steuerberatung ki",
    "vorauszahlungen anpassen mandant",
    "mandantendaten analysieren ki",
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
        url: "/og?title=Beratungsanl%C3%A4sse-Agent&eyebrow=Steuerberater",
        width: 1200,
        height: 630,
        alt: "Bluebatch Beratungsanlässe-Agent für Steuerkanzleien",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultMeta.title,
    description: defaultMeta.ogDescription,
    images: ["/og?title=Beratungsanl%C3%A4sse-Agent&eyebrow=Steuerberater"],
  },
  alternates: {
    canonical: "/branchen/steuerberater/ki-agenten/beratungsanlaesse-agent",
  },
};

const signale = [
  {
    icon: Users,
    title: "Anstehende Übergaben",
    body: "Alter des Inhabers, Gesellschafterstruktur, Ergebnisentwicklung: Der Agent erkennt Mandate, bei denen eine Unternehmensnachfolge oder Übergabe absehbar wird, Jahre bevor sie akut ist. Genug Vorlauf für gestaltende Beratung statt Notfall-Begleitung.",
  },
  {
    icon: HandCoins,
    title: "Ungewöhnliche Belastungen",
    body: "Auffällige Steuer- oder Kostenbelastungen im Vergleich zu ähnlichen Mandaten und zum eigenen Verlauf werden markiert: als Anlass, über Rechtsform, Gestaltung oder Finanzierung zu sprechen.",
  },
  {
    icon: CalendarClock,
    title: "Fristen und Stichtage",
    body: "Auslaufende Verlustvorträge, endende Bindungsfristen, absehbare Investitionsstichtage: Der Agent macht aus Terminen im Datenbestand konkrete Gesprächsanlässe mit Datum.",
  },
  {
    icon: Radar,
    title: "Quartalsweiser Vorauszahlungs-Check",
    body: "Jedes Quartal gleicht der Agent die festgesetzten Vorauszahlungen jedes Mandanten mit dem laufenden Ergebnis ab. Bei deutlicher Abweichung entsteht ein proaktiver Anpassungs-Hinweis, nach oben wie nach unten.",
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
          Beratungsanlässe-Agent: aus Mandantendaten wird proaktive Beratung
        </StatsLeadHero.Headline>
        <GeoSummary>
          Der Beratungsanlässe-Agent von Bluebatch scannt Mandantendaten von
          Steuerkanzleien systematisch nach Beratungsanlässen: anstehende
          Unternehmensübergaben, ungewöhnliche Belastungen, auslaufende
          Fristen. Zusätzlich prüft der Agent quartalsweise die
          Steuervorauszahlungen jedes Mandanten und schlägt bei Abweichungen
          proaktiv eine Anpassung vor. Die Kanzlei erhält fertige
          Gesprächsanlässe, prüft sie und geht aktiv auf den Mandanten zu.
        </GeoSummary>
        <StatsLeadHero.Cta>
          <ContactButton icon="chat">Demo anfragen</ContactButton>
        </StatsLeadHero.Cta>
        <StatsLeadHero.Stats>
          <KpiCard
            valueText="4x im Jahr"
            subtitle="Vorauszahlungs-Check je Mandant"
          />
          <KpiCard
            valueText="Alle Mandate"
            subtitle="systematisch gescannt, nicht nur A-Mandanten"
          />
          <KpiCard
            value={100}
            suffix=" %"
            subtitle="der Hinweise von der Kanzlei geprüft"
          />
        </StatsLeadHero.Stats>
        <StatsLeadHero.Media
          src="/images/opportunity-doors.jpg"
          alt="Symbolbild für neue Chancen und Gesprächsanlässe"
        />
      </StatsLeadHero>

      {/* 2. WAS DER AGENT ERKENNT */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Was der Agent erkennt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vier Signal-Typen, die in jeder Kanzlei ungenutzt in den Daten
            liegen
          </IntroBox.Headline>
          <IntroBox.Subline>
            Die Anlässe für gut honorierte Beratung stehen längst in
            Buchhaltung, Stammdaten und Bescheiden. Was fehlt, ist jemand,
            der sie systematisch findet, bei jedem Mandanten, nicht nur dort,
            wo der Berufsträger zufällig hinschaut.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          {signale.map((s) => {
            const Icon = s.icon;
            return (
              <SimpleCard key={s.title} align="left">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
                  <Icon className="h-6 w-6" />
                </span>
                <Typo.H3>{s.title}</Typo.H3>
                <Typo.Paragraph>{s.body}</Typo.Paragraph>
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
            Vom Datenbestand zum vorbereiteten Mandantengespräch
          </IntroBox.Headline>
        </IntroBox>

        <TimelineAsSteps className="mt-12">
          <TimelineAsStepsStep value={1}>
            <Typo.H3>Mandantendaten scannen</Typo.H3>
            <Typo.Paragraph>
              Der Agent läuft regelmäßig über den Datenbestand der Kanzlei:
              Buchhaltungswerte, Stammdaten, Bescheide, Fristen. Beim
              Vorauszahlungs-Check geschieht das quartalsweise, bei den
              übrigen Signalen in einem mit der Kanzlei abgestimmten Rhythmus.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3>Anlässe erkennen und begründen</Typo.H3>
            <Typo.Paragraph>
              Jeder Treffer wird mit Begründung und Datenbasis dokumentiert:
              welcher Mandant, welches Signal, welche Zahlen dahinterstehen.
              Kein Bauchgefühl, sondern ein nachvollziehbarer Befund, den der
              Berufsträger in einer Minute bewerten kann.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3>Gesprächsanlass vorbereiten</Typo.H3>
            <Typo.Paragraph>
              Zu jedem bestätigten Anlass entwirft der Agent die Ansprache:
              eine kurze Mandanten-Mail oder eine Gesprächsnotiz mit den
              relevanten Zahlen, beim Vorauszahlungs-Check inklusive
              konkretem Anpassungs-Vorschlag.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3>Kanzlei prüft, priorisiert und spricht an</Typo.H3>
            <Typo.Paragraph>
              Die Anlässe landen als priorisierte Liste beim zuständigen
              Berater. Er entscheidet, was angesprochen wird, passt den
              Entwurf an und geht auf den Mandanten zu. Kein Hinweis erreicht
              den Mandanten ohne diese Freigabe.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>

        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <Typo.H3>Freigabe-Prinzip und § 203 StGB</Typo.H3>
          <Typo.Paragraph>
            Der Beratungsanlässe-Agent folgt dem Prinzip aller{" "}
            <InternalLink
              href="/branchen/steuerberater/ki-agenten"
              variant="underline"
            >
              KI-Agenten für Steuerberater
            </InternalLink>
            : Die KI findet und bereitet vor, der Mensch entscheidet und
            spricht an. Mandantendaten unterliegen dem Berufsgeheimnis nach
            § 203 StGB und werden ausschließlich in einer dafür geeigneten
            Umgebung verarbeitet, mit Auftragsverarbeitungsvertrag und ohne
            Trainings-Opt-in. Wie so eine Umgebung aussieht, zeigt{" "}
            <InternalLink
              href="/branchen/steuerberater/claude-cowork"
              variant="underline"
            >
              Claude Cowork für Steuerberater
            </InternalLink>
            .
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* 4. POSITIONIERUNG */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <div className="mx-auto max-w-3xl text-center">
          <Typo.H2>Aus Pflicht wird Beratung</Typo.H2>
          <Typo.Paragraph>
            Deklaration wird schlechter honoriert, Beratung besser, das weiß
            jede Kanzlei. Der Engpass war bisher nie das Fachwissen, sondern
            die Zeit, in jedem Mandat nach Anlässen zu suchen. Wenn ein Agent
            diese Suche übernimmt, wird proaktive Ansprache vom guten
            Vorsatz zum planbaren Prozess: mit dem Vorauszahlungs-Check als
            Einstieg, den jeder Mandant sofort versteht.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Gut kombinierbar ist das mit der{" "}
            <InternalLink
              href="/branchen/steuerberater/ki-agenten/mandantenkommunikation"
              variant="underline"
            >
              KI-Mandantenkommunikation
            </InternalLink>
            , die die anschließende Routine-Korrespondenz abfängt. Für einen
            unverbindlichen Blick auf eure Mandantenstruktur:{" "}
            <InternalLink href="/contact" variant="underline">
              Erstgespräch vereinbaren
            </InternalLink>
            .
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* 5. FAQ */}
      <ContentWrapper colorScheme="white">
        <FaqContainer
          faqs={[
            {
              question:
                "Welche Daten braucht der Agent, und wo liegen sie?",
              answer:
                "Der Agent arbeitet mit Daten, die die Kanzlei ohnehin hat: Buchhaltungswerte, Stammdaten, Bescheide und Fristen, in der Regel aus DATEV. Die Verarbeitung läuft in einer Umgebung, die für Berufsgeheimnisträger geeignet ist, wahlweise in der Kanzlei-Infrastruktur oder gehostet in Deutschland. Es entsteht kein paralleler Datenbestand außerhalb der Kanzlei-Kontrolle.",
            },
            {
              question:
                "Wie funktioniert der quartalsweise Vorauszahlungs-Check konkret?",
              answer:
                "Jedes Quartal vergleicht der Agent die festgesetzten Vorauszahlungen jedes Mandanten mit dem hochgerechneten laufenden Ergebnis. Liegt die Abweichung über einer mit der Kanzlei definierten Schwelle, entsteht ein Hinweis mit Anpassungs-Vorschlag: Herabsetzung beantragen, wenn das Ergebnis einbricht, rechtzeitig erhöhen und Rücklagen ansprechen, wenn es deutlich besser läuft. Der Berater prüft den Vorschlag und entscheidet, ob und wie der Mandant angesprochen wird.",
            },
            {
              question:
                "Nervt das die Mandanten nicht, wenn die Kanzlei ständig etwas vorschlägt?",
              answer:
                "Das Gegenteil ist der Regelfall: Mandanten wechseln selten wegen Fehlern in der Deklaration, aber oft mit der Begründung, der Steuerberater melde sich nie von sich aus. Der Agent erzeugt zudem keine Massen-Mails, sondern eine priorisierte Liste für den Berater, der pro Mandant entscheidet, was relevant ist. Angesprochen wird nur, was ein Mensch für substanziell hält.",
            },
            {
              question:
                "Ist das nicht dasselbe wie die BWA-Analyse?",
              answer:
                "Die beiden Agenten ergänzen sich. Die BWA-Analyse schaut monatlich auf die Zahlen eines Mandanten und kommentiert sie. Der Beratungsanlässe-Agent schaut quer über den gesamten Mandantenbestand und sucht nach Anlässen, die über die Monats-Zahlen hinausgehen: Übergaben, Fristen, Belastungsvergleiche, Vorauszahlungen. Viele Kanzleien starten mit einem der beiden und ergänzen den anderen später.",
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
