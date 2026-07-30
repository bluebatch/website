import type { Metadata } from "next";
import {
  FileSearch,
  Scale,
  FileText,
  CalendarClock,
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
import ComparisonCard, {
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
  ComparisonFooter,
} from "@/components/cards/comparison-card";
import { FaqContainer } from "@/components/ui/faqs";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";

export const pageConfig: PageConfig = {
  title: "Einspruch-Agent",
  description:
    "Einspruch gegen den Steuerbescheid mit KI: Rechtsprechungs-Recherche, Argumentation und Schriftsatz-Entwurf, von 8 auf 2 Stunden.",
};

const defaultMeta = {
  title: "Einspruch gegen den Steuerbescheid mit KI: 8h zu 2h | Bluebatch",
  description:
    "Einspruch gegen den Steuerbescheid per KI-Agent: Rechtsprechungs-Recherche, Argumentation, fertiger Schriftsatz-Entwurf. Von 8 auf 2 Stunden pro Einspruch, der Berufsträger gibt frei.",
  ogDescription:
    "Einspruch-Agent: Rechtsprechungs-Recherche, Argumentation und Schriftsatz-Entwurf per KI, von 8 auf 2 Stunden pro Einspruch.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "Einspruch Steuerbescheid KI",
    "einspruch mit ki schreiben",
    "einspruch agent",
    "ki schriftsatz steuerbescheid",
    "einspruchsverfahren automatisieren",
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
        alt: "Bluebatch Einspruch-Agent für Steuerberater",
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
    canonical: "/branchen/steuerberater/ki-agenten/einspruch-agent",
  },
};

const features = [
  {
    icon: FileSearch,
    title: "Rechtsprechungs-Recherche",
    body: "Der Agent durchsucht einschlägige Rechtsprechung und Verwaltungsauffassung zum Streitpunkt und stellt die relevanten Fundstellen mit Kernaussage und Aktenzeichen zusammen.",
  },
  {
    icon: Scale,
    title: "Argumentation aufbauen",
    body: "Aus Sachverhalt, Bescheid und Fundstellen entwickelt der Agent eine strukturierte Argumentationslinie: Hauptargument, Hilfsargumente, Auseinandersetzung mit der Gegenposition des Finanzamts.",
  },
  {
    icon: FileText,
    title: "Fertiger Schriftsatz-Entwurf",
    body: "Am Ende steht ein vollständiger Einspruchs-Entwurf im Stil der Kanzlei: Rubrum, Antrag, Begründung mit Fundstellen. Der Berufsträger bearbeitet einen Entwurf, kein leeres Blatt.",
  },
  {
    icon: CalendarClock,
    title: "Frist im Blick",
    body: "Die Einspruchsfrist wird aus dem Bescheid übernommen und als Wiedervorlage angelegt. Der Entwurf liegt rechtzeitig vor Fristablauf zur Prüfung bereit.",
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
          Einspruch-Agent: Einspruch gegen den Steuerbescheid mit KI
        </StatsLeadHero.Headline>
        <GeoSummary>
          Der Einspruch-Agent von Bluebatch ist ein KI-Agent für
          Steuerkanzleien, der Einsprüche gegen Steuerbescheide vorbereitet:
          Der Agent recherchiert Rechtsprechung, baut die Argumentation auf
          und liefert einen fertigen Schriftsatz-Entwurf. Aus rund 8 Stunden
          Arbeit pro Einspruch werden etwa 2 Stunden. Der Berufsträger prüft
          jeden Entwurf und gibt ihn frei, bevor etwas die Kanzlei verlässt.
        </GeoSummary>
        <StatsLeadHero.Cta>
          <ContactButton icon="chat">Demo anfragen</ContactButton>
        </StatsLeadHero.Cta>
        <StatsLeadHero.Stats>
          <KpiCard
            valueText="2 Stunden"
            subtitle="pro Einspruch, statt vorher rund 8"
          />
          <KpiCard value={75} suffix=" %" subtitle="weniger Bearbeitungszeit" />
          <KpiCard
            value={100}
            suffix=" %"
            subtitle="der Entwürfe vom Berufsträger geprüft"
          />
        </StatsLeadHero.Stats>
        <StatsLeadHero.Media
          src="/images/tax-consulting-workspace.jpg"
          alt="Arbeitsplatz in einer Steuerkanzlei mit Bescheiden und Notebook"
        />
      </StatsLeadHero>

      {/* 2. WAS DER AGENT ÜBERNIMMT */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Was der Agent übernimmt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Recherche, Argumentation, Schriftsatz: die zeitfressenden 80
            Prozent
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ein guter Einspruch besteht zum größten Teil aus Fleißarbeit:
            Fundstellen suchen, Argumente ordnen, sauber formulieren. Genau
            diesen Teil übernimmt der Agent. Die fachliche Bewertung und die
            Entscheidung, ob der Einspruch rausgeht, bleiben beim
            Berufsträger.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
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
            Vom Bescheid zum unterschriftsreifen Entwurf in fünf Schritten
          </IntroBox.Headline>
          <IntroBox.Subline>
            Der Ablauf ist bei jedem Einspruch gleich, egal ob es um
            Werbungskosten, Schätzungsbescheide oder verdeckte
            Gewinnausschüttungen geht. Was sich ändert, ist nur der fachliche
            Inhalt.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps className="mt-12">
          <TimelineAsStepsStep value={1}>
            <Typo.H3>Bescheid und Sachverhalt aufnehmen</Typo.H3>
            <Typo.Paragraph>
              Der Agent liest den Steuerbescheid, gleicht ihn mit der
              eingereichten Erklärung ab und identifiziert die Abweichungen.
              Der Sachbearbeiter ergänzt in wenigen Sätzen den Sachverhalt und
              den Streitpunkt, um den es gehen soll.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3>Rechtsprechung recherchieren</Typo.H3>
            <Typo.Paragraph>
              Zum Streitpunkt recherchiert der Agent einschlägige Urteile und
              Verwaltungsanweisungen, bewertet die Relevanz für den konkreten
              Fall und legt eine Fundstellenliste mit Kernaussagen und
              Aktenzeichen an. Jede Fundstelle ist nachprüfbar verlinkt.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3>Argumentation entwickeln</Typo.H3>
            <Typo.Paragraph>
              Aus Sachverhalt und Fundstellen baut der Agent die
              Argumentationslinie: Er ordnet die Argumente nach Stärke, nimmt
              die absehbare Gegenposition des Finanzamts vorweg und markiert
              Stellen, an denen die fachliche Einschätzung des Berufsträgers
              gefragt ist.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3>Schriftsatz entwerfen</Typo.H3>
            <Typo.Paragraph>
              Der Agent formuliert den vollständigen Einspruchs-Entwurf im
              Kanzlei-Stil: Rubrum, Antrag, Begründung, Fundstellen. Auf
              Wunsch inklusive Antrag auf Aussetzung der Vollziehung als
              separatem Baustein.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={5}>
            <Typo.H3>Prüfung und Freigabe durch den Berufsträger</Typo.H3>
            <Typo.Paragraph>
              Der Entwurf landet zur Prüfung beim zuständigen Berufsträger.
              Er prüft Fundstellen und Argumentation, passt an, gibt frei,
              und erst dann verlässt der Einspruch die Kanzlei. Ohne Freigabe
              geht nichts raus.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* 4. VORHER / NACHHER */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Vorher / Nachher</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was sich im Einspruchsverfahren konkret ändert
          </IntroBox.Headline>
          <IntroBox.Subline>
            Der Unterschied liegt nicht in der Qualität des Einspruchs,
            sondern darin, wie viel Berufsträger-Zeit pro Einspruch gebunden
            wird und wie oft sich ein Einspruch wirtschaftlich lohnt.
          </IntroBox.Subline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>
              Vorher: Einspruch als Handarbeit
            </ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Rund 8 Stunden pro Einspruch: Recherche, Argumentation,
                Formulierung, alles manuell
              </ComparisonListItem>
              <ComparisonListItem>
                Recherche hängt an einzelnen erfahrenen Köpfen und deren
                Kalender
              </ComparisonListItem>
              <ComparisonListItem>
                Bei kleinen Streitwerten lohnt der Aufwand oft nicht, der
                Bescheid wird geschluckt
              </ComparisonListItem>
              <ComparisonListItem>
                Einsprüche entstehen unter Fristdruck kurz vor Ablauf der
                Einspruchsfrist
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Effekt: Einspruch ist ein Verlustgeschäft oder unterbleibt
            </ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>
              Nachher: Entwurf vom Agenten, Entscheidung vom Berufsträger
            </ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Etwa 2 Stunden pro Einspruch: prüfen, schärfen, freigeben
                statt von null formulieren
              </ComparisonListItem>
              <ComparisonListItem>
                Recherche und Fundstellen liegen strukturiert vor, für jeden
                im Team nachvollziehbar
              </ComparisonListItem>
              <ComparisonListItem>
                Auch kleinere Streitwerte werden wirtschaftlich vertretbar
                angegangen
              </ComparisonListItem>
              <ComparisonListItem>
                Entwurf liegt Tage vor Fristablauf vor, die Frist wird als
                Wiedervorlage überwacht
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Effekt: mehr Einsprüche, weniger gebundene Berufsträger-Zeit
            </ComparisonFooter>
          </AfterCard>
        </ComparisonCard>
      </ContentWrapper>

      {/* 5. FREIGABE-PRINZIP */}
      <ContentWrapper colorScheme="white" bodyWidth="small">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-gray-50 p-8 md:p-10">
          <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-800">
            <ShieldCheck className="h-6 w-6" />
          </span>
          <Typo.H2>Human-in-the-Loop: der Berufsträger bleibt Herr des Verfahrens</Typo.H2>
          <Typo.Paragraph>
            Der Einspruch-Agent arbeitet nach dem Freigabe-Prinzip, das für
            alle{" "}
            <InternalLink
              href="/branchen/steuerberater/ki-agenten"
              variant="underline"
            >
              KI-Agenten für Steuerberater
            </InternalLink>{" "}
            von Bluebatch gilt: Die KI erstellt Entwürfe, ein Mensch prüft und
            gibt frei. Kein Schriftsatz geht ohne Freigabe des Berufsträgers
            ans Finanzamt, und die Verantwortung für den Inhalt bleibt dort,
            wo sie berufsrechtlich hingehört.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Auch das Berufsgeheimnis nach § 203 StGB ist Teil des Setups:
            Mandantendaten werden nur in einer dafür geeigneten Umgebung
            verarbeitet, mit Auftragsverarbeitungsvertrag und ohne
            Trainings-Opt-in. Wie eine § 203-konforme KI-Umgebung für
            Kanzleien aussieht, zeigt{" "}
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

      {/* 6. CROSS-SELL */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <div className="mx-auto max-w-3xl text-center">
          <Typo.H2>Der Einspruch ist selten allein</Typo.H2>
          <Typo.Paragraph>
            Wo Einsprüche entstehen, kommen vorher Bescheide, Fristen und
            Mandanten-Mails an. Der Einspruch-Agent spielt deshalb gut mit dem{" "}
            <InternalLink
              href="/branchen/steuerberater/ki-agenten/mail-agent"
              variant="underline"
            >
              Mail Agent
            </InternalLink>{" "}
            zusammen, der Bescheide und Fristsachen im Postfach erkennt und
            zuordnet, sowie mit der{" "}
            <InternalLink
              href="/branchen/steuerberater/ki-agenten/mandantenkommunikation"
              variant="underline"
            >
              KI-Mandantenkommunikation
            </InternalLink>
            , die den Mandanten über den Stand des Verfahrens auf dem
            Laufenden hält.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* 7. FAQ */}
      <ContentWrapper colorScheme="white">
        <FaqContainer
          faqs={[
            {
              question:
                "Erfindet die KI Urteile oder Fundstellen (Halluzinationen)?",
              answer:
                "Das Risiko ist real, deshalb ist der Workflow dagegen gebaut: Der Agent arbeitet mit Recherche in echten Quellen statt aus dem Gedächtnis des Modells, jede Fundstelle wird mit Aktenzeichen und Quelle ausgewiesen und ist per Klick nachprüfbar. Der Berufsträger prüft die zitierten Entscheidungen vor der Freigabe. Ein Entwurf ohne belegte Fundstellen wird nicht zur Freigabe vorgelegt.",
            },
            {
              question:
                "Übernimmt der Agent die Haftung für den Einspruch?",
              answer:
                "Nein, und das soll er auch nicht. Der Agent liefert einen Entwurf, die berufsrechtliche Verantwortung bleibt beim Steuerberater. Genau deshalb ist die Freigabe durch den Berufsträger fest in den Ablauf eingebaut und nicht optional. Der Agent verändert die Arbeitsteilung, nicht die Verantwortung.",
            },
            {
              question:
                "Für welche Arten von Einsprüchen funktioniert das?",
              answer:
                "Am stärksten ist der Agent bei Einsprüchen mit klarem Streitpunkt und vorhandener Rechtsprechung, etwa Werbungskosten- und Betriebsausgaben-Themen, Bewertungsfragen oder Schätzungsbescheiden. Bei sehr speziellen oder strategisch heiklen Fällen dient der Entwurf als Rechercheergebnis und Rohfassung, die fachliche Führung liegt stärker beim Berufsträger. Die Zeitersparnis von 8 auf 2 Stunden bezieht sich auf typische Einspruchsfälle.",
            },
            {
              question:
                "Was passiert mit den Mandantendaten, Stichwort § 203 StGB?",
              answer:
                "Bescheide und Sachverhalte sind durch das Berufsgeheimnis geschützt. Der Agent läuft deshalb in einer Umgebung, die dafür ausgelegt ist: Verarbeitung auf Basis eines Auftragsverarbeitungsvertrags, keine Nutzung der Daten für Modell-Training, Zugriff nur für die Kanzlei. Ob die Umgebung in der Kanzlei-Infrastruktur oder gehostet betrieben wird, entscheiden wir gemeinsam im Setup.",
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
