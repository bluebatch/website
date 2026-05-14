import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import type { PageConfig } from "@/lib/get-subpages";
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
import Customer from "@/components/sections/customer/customer";
import ProsCons from "@/components/sections/pros-cons";
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
} from "@/components/sections/roi-calculation";
import ProblemFirstHero from "@/components/heroes/problem-first-hero";
import WorkflowDiagram from "@/components/sections/workflow-diagram";
import KpiCard from "@/components/cards/kpi-card";
import SimpleCard from "@/components/cards/simple-card";

export const pageConfig: PageConfig = {
  title: "DATEV-Jira Orchestration",
  description:
    "Bidirektionaler Sync DATEV und Jira. Workflow Steuerkanzlei automatisieren, Doppelpflege beenden, SLA-Treffer um 30 Prozent steigern.",
};

const defaultMeta = {
  title: "Workflow Steuerkanzlei DATEV & Jira | Bluebatch",
  description:
    "Doppelpflege DATEV und Jira kostet 20-30 h/Woche. Bidirektionaler Sync senkt Aufwand pro Vorgang von 25 auf 2 Min, SLA-Treffer plus 30%.",
  ogDescription:
    "Workflow Steuerkanzlei: DATEV und Jira bidirektional synchronisieren. 25 Min auf 2 Min pro Vorgang, SLA +30%.",
};

export const metadata: Metadata = {
  title: defaultMeta.title,
  description: defaultMeta.description,
  keywords: [
    "workflow steuerkanzlei",
    "workflow kanzlei",
    "n8n steuerberater",
    "steuerberater automatisierung",
    "DATEV Jira Sync",
    "DATEVconnect",
    "Steuerkanzlei digitalisieren",
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
        alt: "Bluebatch Workflow Steuerkanzlei",
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
    canonical: "/use-cases/steuerberater/datev-jira-task-orchestration",
  },
};

export default function Page() {
  return (
    <>
      {/* 1. PROBLEM-FIRST HERO — zwei-stufig */}
      <ProblemFirstHero>
        <ProblemFirstHero.PainLabel>
          Pain-Statement Steuerkanzlei
        </ProblemFirstHero.PainLabel>
        <ProblemFirstHero.PainHeadline>
          20 bis 30 Stunden pro Woche Doppelpflege zwischen DATEV und Jira.
        </ProblemFirstHero.PainHeadline>
        <ProblemFirstHero.PainDescription>
          So sieht der Alltag in einer Mittelstandskanzlei mit 10
          Mitarbeitenden und 200 Mandanten aus. Ein halber Mitarbeiter pflegt
          jede Woche dieselben Aufgaben in mehrere Systeme, statt zu beraten.
        </ProblemFirstHero.PainDescription>
        <ProblemFirstHero.PainImage
          src="/images/datev-jira/pain-statement.png"
          alt="Steuerberaterin zwischen DATEV- und Jira-Bildschirmen, Aufgaben werden doppelt erfasst"
        />

        <ProblemFirstHero.SolutionLabel>
          Workflow Steuerkanzlei
        </ProblemFirstHero.SolutionLabel>
        <ProblemFirstHero.SolutionHeadline as="h2">
          Workflow Steuerkanzlei: DATEV und Jira automatisch synchronisieren
        </ProblemFirstHero.SolutionHeadline>
        <ProblemFirstHero.SolutionDescription>
          Schluss mit Doppelpflege zwischen DATEV Eigenorganisation comfort,
          Outlook, Excel und Jira. n8n synchronisiert Aufgaben, Fristen und
          Status bidirektional. Aus 15 bis 25 Min pro Vorgang werden 2 Min,
          der SLA-Treffer steigt um 30 Prozent. Workflow Kanzlei modernisieren,
          ohne dass DATEV abgelöst wird.
        </ProblemFirstHero.SolutionDescription>
        <ProblemFirstHero.SolutionCta>
          <ContactButton icon="chat">Kanzlei-Analyse anfragen</ContactButton>
        </ProblemFirstHero.SolutionCta>
        <ProblemFirstHero.Stats>
          <KpiCard value={2} suffix=" Min" subtitle="Aufwand pro Vorgang nach Sync" />
          <KpiCard value={30} prefix="+" suffix=" %" subtitle="SLA-Treffer nach Go-Live" />
          <KpiCard value={25} suffix=" h/Wo" subtitle="Doppelpflege eingespart" />
        </ProblemFirstHero.Stats>
      </ProblemFirstHero>

      {/* 2. WORKFLOW DIAGRAMM — sync */}
      <ContentWrapper colorScheme="gradient-cool">
        <IntroBox>
          <IntroBox.PreHeadline>Der Sync im Detail</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Bidirektionaler Sync DATEV und Jira: Mail rein, Tasks raus,
            Status zurück
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ein n8n-Workflow steht zwischen euren Systemen. Mandantenmails
            werden klassifiziert, Aufgaben fließen bidirektional, Fristen
            werden überwacht. DATEV bleibt führendes System.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_auto_1fr_auto_1fr] lg:items-stretch">
          <div className="space-y-3">
            {[
              { n: 1, title: "Mail-Trigger" },
              { n: 2, title: "KI-Klassifikation" },
              { n: 3, title: "Task-Sync" },
              { n: 4, title: "Fristen-Monitor" },
            ].map((t) => (
              <div
                key={t.n}
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-bold text-white">
                  {String(t.n).padStart(2, "0")}
                </div>
                <div className="text-base font-semibold text-gray-900">
                  {t.title}
                </div>
              </div>
            ))}
          </div>

          <svg
            className="hidden h-6 w-6 self-center justify-self-center text-primary-500 lg:block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
          <svg
            className="h-6 w-6 self-center justify-self-center rotate-90 text-primary-500 lg:hidden"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>

          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-primary-300 bg-white p-6 text-center shadow-md">
            <div className="text-xs font-bold uppercase tracking-widest text-primary-700">
              System
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">DATEV</div>
            <p className="mt-2 text-xs text-gray-600">
              Eigenorganisation comfort, DATEVconnect, EXTF, führendes System
            </p>
          </div>

          <svg
            className="hidden h-6 w-6 self-center justify-self-center text-secondary-600 lg:block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
          <svg
            className="h-6 w-6 self-center justify-self-center rotate-90 text-secondary-600 lg:hidden"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>

          <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-primary-300 bg-white p-6 text-center shadow-md">
            <div className="text-xs font-bold uppercase tracking-widest text-primary-700">
              System
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">Jira</div>
            <p className="mt-2 text-xs text-gray-600">
              Boards, Status, Tasks, Sachbearbeiter-Layer
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <SimpleCard align="left">
            <Typo.H3 className="mt-2!">Mandantenmail als Aufgabenquelle</Typo.H3>
            <Typo.Paragraph className="mb-0!" textColor="muted">
              Die Kanzleimailbox und persönliche Postfächer der Sachbearbeiter
              hängen an n8n. Jede Mail wird an die KI-Klassifikation
              weitergereicht.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard align="left">
            <Typo.H3 className="mt-2!">Mandant, Sachgebiet, SLA-Klasse</Typo.H3>
            <Typo.Paragraph className="mb-0!" textColor="muted">
              Ein LLM erkennt Mandanten über die Absenderdomain, ordnet das
              Sachgebiet (Lohn, USt-Voranmeldung, Jahresabschluss) zu und
              vergibt Dringlichkeit plus SLA. Anhänge gehen an die
              Belegpipeline.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard align="left">
            <Typo.H3 className="mt-2!">DATEV und Jira als ein System</Typo.H3>
            <Typo.Paragraph className="mb-0!" textColor="muted">
              Aufgaben, Fristen und Mandantenstamm fließen von DATEV nach
              Jira. Status, Notiz und Workload spielen zurück. DATEVconnect,
              EXTF oder Datenservices, je nach Lizenz.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard align="left">
            <Typo.H3 className="mt-2!">Fristen- und Status-Monitor</Typo.H3>
            <Typo.Paragraph className="mb-0!" textColor="muted">
              Erinnerungen 14, 7 und 3 Tage vor jeder Frist, mehrstufige
              Eskalation, Live-Dashboard in Grafana oder Metabase und
              Auto-Report Montag früh mit SLA-Treffern pro Sachbearbeiter.
            </Typo.Paragraph>
          </SimpleCard>
        </div>
      </ContentWrapper>

      {/* 3. COMPARISON: vorher 15-25 Min vs nachher 2 Min */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Vorher und nachher</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Doppelpflege beenden: 15 bis 25 Min pro Vorgang werden 2 Min
          </IntroBox.Headline>
          <IntroBox.Subline>
            Workflow Kanzlei mit n8n als Glue-Layer zwischen DATEV und Jira.
            Sachbearbeiter erfassen einmal, der Sync verteilt automatisch.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr]">
          <ComparisonCard>
            <BeforeCard>
              <ComparisonHeadline>Vorher: Doppelpflege</ComparisonHeadline>
              <ComparisonList>
                <ComparisonListItem>
                  15-25 Min pro Vorgang, 3-4 Systeme pro Klick
                </ComparisonListItem>
                <ComparisonListItem>
                  20-30 Stunden Pflegeaufwand pro Woche, ein halber Mitarbeiter
                </ComparisonListItem>
                <ComparisonListItem>
                  Statusabfragen 5-8 Stunden Leitungszeit pro Woche
                </ComparisonListItem>
                <ComparisonListItem>
                  2-5 Prozent Fristversäumnis, 500-2.000 Euro Säumniszuschlag
                </ComparisonListItem>
              </ComparisonList>
              <ComparisonFooter>
                Aufwand: ~ 115.000 Euro pro Jahr
              </ComparisonFooter>
            </BeforeCard>

            <AfterCard>
              <ComparisonHeadline>Nachher: Bluebatch Sync</ComparisonHeadline>
              <ComparisonList>
                <ComparisonListItem>
                  2 Min pro Vorgang, einmal erfassen, automatisch verteilt
                </ComparisonListItem>
                <ComparisonListItem>
                  SLA-Treffer plus 30 Prozent, Live-Dashboard für die Leitung
                </ComparisonListItem>
                <ComparisonListItem>
                  Fristenmonitor mit Eskalation 14, 7, 3 Tage
                </ComparisonListItem>
                <ComparisonListItem>
                  Aufgaben aus Mandantenmails landen vorklassifiziert in Jira
                </ComparisonListItem>
              </ComparisonList>
              <ComparisonFooter>
                Aufwand: ~ 58.600 Euro Jahr 1
              </ComparisonFooter>
            </AfterCard>
          </ComparisonCard>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <Image
              src="/images/datev-jira/comparison-visual.png"
              alt="Vorher manuelles Doppelt-Eintippen in DATEV und Jira, nachher ein einziger Klick"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      {/* 4. DELIVERY TIMELINE — 5 Weeks */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Delivery</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Von Null auf Live in 5 Wochen
          </IntroBox.Headline>
          <IntroBox.Subline>
            Kein Big-Bang-Projekt, sondern Pilot mit echten DATEV-Daten ab
            Woche 3. Wir starten mit deinen Top-Mandanten und den
            Aufgabentypen, die das meiste Volumen machen.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-[3fr_2fr]">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Woche 1, Audit und Discovery</Typo.H3>
              <Typo.Paragraph>
                Wir analysieren deinen DATEV-Aufgabenbestand, mappen die
                Mandantenstruktur und Sachgebiete, prüfen DATEVconnect-Zugang
                und Schnittstellen. Schriftlicher Befund: was läuft automatisch,
                was bleibt manuell.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Woche 2, Setup und Integration</Typo.H3>
              <Typo.Paragraph>
                n8n-Workflow-Aufbau, DATEV-Anbindung über DATEVconnect oder
                EXTF, Jira-Projekt-Setup mit Mandantenstruktur, Mail-zu-Task
                mit LLM-Klassifikation, Fristenmonitor.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Woche 3, Pilot mit echten Daten</Typo.H3>
              <Typo.Paragraph>
                20 Prozent deiner Mandanten laufen durch den neuen Workflow,
                zwei bis drei Sachbearbeiter arbeiten aktiv mit Jira. Wir tunen
                SLA-Logik, Klassifikation und Reporting auf eure Kanzlei.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3 className="mt-2!">Woche 4, Rollout</Typo.H3>
              <Typo.Paragraph>
                Vollumstellung auf 100 Prozent Mandantenstamm, Schulung der
                Sachbearbeiter, Übergabe der Dokumentation und der n8n-Files
                an euren IT-Verantwortlichen.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={5} isLast>
              <Typo.H3 className="mt-2!">Woche 5, Go-Live und Hyper-Care</Typo.H3>
              <Typo.Paragraph>
                Schulung der Kanzleileitung auf den Review- und
                Reporting-Workflow, zwei Wochen begleiteter Betrieb, danach
                Übergang in die{" "}
                <Link
                  href="/workflow-wartung"
                  className="text-primary-600 hover:underline"
                >
                  Workflow-Wartung
                </Link>
                .
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <Image
              src="/images/datev-jira/timeline-visual.png"
              alt="5-Wochen-Setup-Roadmap, Schritt-für-Schritt von Audit bis Go-Live"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </ContentWrapper>

      {/* 5. PROS / CONS */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Warum Bluebatch</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Bluebatch vs. typische Kanzlei-SaaS
          </IntroBox.Headline>
          <IntroBox.Subline>
            Was n8n-basierte Steuerberater-Automatisierung anders macht als
            TaxDome, KanzleiDrive oder die DATEV-eigenen Erweiterungen, und
            warum das im Kanzleialltag spürbar wird.
          </IntroBox.Subline>
        </IntroBox>

        <ProsCons className="mt-10">
          <ProsCons.Pros>
            <ProsCons.Item
              title="Made in Germany, Made for DATEV"
              description="Hosting in Frankfurt oder On-Premise. Support auf Deutsch. n8n-Workflows kennen DATEVconnect, EXTF, ASCII und die Eigenheiten der DATEV-Welt aus erster Hand."
            />
            <ProsCons.Item
              title="Kein Blackbox"
              description="Open-Source-n8n. Deine Workflows liegen bei dir, du kannst sie morgen selbst weiterentwickeln, an deinen IT-Dienstleister geben oder den Anbieter wechseln."
            />
            <ProsCons.Item
              title="Keine Migration"
              description="DATEV bleibt führendes System. Wir koppeln Jira (oder Asana, Monday, ClickUp) drauf, ohne dass Sachbearbeiter neue Software lernen müssen. Adoption ist kein Thema."
            />
            <ProsCons.Item
              title="Steuergeheimnis gewahrt"
              description="Nur IDs, Aufgaben-Titel und Status fließen in Jira. Mandantendaten und Belege bleiben in DATEV. DSGVO-AVV mit deutschem Vertragspartner, paragraph 203 StGB konform."
            />
          </ProsCons.Pros>

          <ProsCons.Cons>
            <ProsCons.Item
              title="US-SaaS, US-Hosting"
              description="TaxDome und Co. hosten Cloud-only auf AWS-USA. AVV läuft über irische Tochter, Steuerdaten landen real in den USA."
              side="cons"
            />
            <ProsCons.Item
              title="Blackbox-SaaS"
              description="Du siehst nicht, wie die KI Mandantenmails klassifiziert oder DATEV-Daten verarbeitet. Eigene Anpassungen unmöglich."
              side="cons"
            />
            <ProsCons.Item
              title="DATEV-Sync nur rudimentär"
              description="Reine Kanzlei-SaaS-Tools bieten meist nur CSV-Import oder einen Datenexport. Live-Sync zu Eigenorganisation comfort fehlt."
              side="cons"
            />
            <ProsCons.Item
              title="Vendor-Lock-in"
              description="Beim Anbieter-Wechsel oder Pleite-Fall: deine Workflows, dein Mandantenstamm-Mapping, deine Klassifizierungs-Logik sind weg."
              side="cons"
            />
          </ProsCons.Cons>
        </ProsCons>
      </ContentWrapper>

      {/* 6. SAVINGS / ROI */}
      <ContentWrapper colorScheme="gradient-cool">
        <IntroBox>
          <IntroBox.PreHeadline>Was bringt das in Euro?</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Amortisation in 5-6 Monaten
          </IntroBox.Headline>
          <IntroBox.Subline>
            Rechenbeispiel für eine Mittelstandskanzlei mit 10 Sachbearbeitern.
            Doppelpflege DATEV und Jira reduziert sich deutlich durch den
            bidirektionalen Sync.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
          <SavingsCard>
            <SavingsBadge>
              Amortisation in{" "}
              <SavingsBadgeHighlight>5-6</SavingsBadgeHighlight> Monaten
            </SavingsBadge>
            <SavingsItems>
              <SavingsItem label="Setup einmalig">18.000 €</SavingsItem>
              <SavingsItem label="Betrieb pro Monat">2.000 €</SavingsItem>
              <SavingsItem label="Ersparnis pro Monat" highlight>
                3.500 €
              </SavingsItem>
            </SavingsItems>
          </SavingsCard>

          <RoiCalculation>
            <RoiAssumption>
              Mittelstandskanzlei mit 10 Sachbearbeitern, 200 Mandanten
            </RoiAssumption>
            <RoiRow label="Doppelpflege vorher">100 h / Monat</RoiRow>
            <RoiRow label="Doppelpflege nachher">15 h / Monat</RoiRow>
            <RoiRow label="Stunden gespart" highlight>
              85 h
            </RoiRow>
            <RoiRow label="Stundensatz Sachbearbeiter">65 € / h</RoiRow>
            <RoiRow label="Brutto pro Monat (85 × 65 €)">5.525 €</RoiRow>
            <RoiRow label="Betrieb pro Monat">− 2.000 €</RoiRow>
            <RoiTotal label="Netto pro Monat">3.500 €</RoiTotal>
          </RoiCalculation>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/roi-rechner/document?docs=400&before=15&after=2&hourly=65&tier=large&setup=18000&maint=2000"
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

      {/* Client Logos band */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* 7. FAQ */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Häufige Fragen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            DATEV Jira Sync: das fragen Kanzleileitungen am häufigsten
          </IntroBox.Headline>
        </IntroBox>
        <div className="mt-10">
          <FaqContainer
            faqs={[
              {
                question:
                  "Brauchen wir Jira oder geht das auch mit Asana, Monday oder ClickUp?",
                answer:
                  "Jira ist unser Default, weil viele Kanzleien es schon nutzen und die API stabil ist. Aber n8n als Glue-Layer macht die Tool-Wahl flexibel: Asana, Monday, ClickUp und sogar einfache Tools wie Notion oder Microsoft Planner lassen sich genauso anbinden. Wichtig ist, dass das Zielsystem ein API-Mapping für Issues, Status und Custom-Fields hat. Wenn du noch kein Tool hast, empfehlen wir Jira Cloud Free oder Standard.",
              },
              {
                question:
                  "Wie laufen die DATEV-Schnittstellen, brauchen wir DATEVconnect?",
                answer:
                  "Drei Wege gibt es in der Praxis: (a) DATEVconnect, die zertifizierte API für Partner, ideal für Live-Sync und tiefe Integration, (b) DATEV-Datenservices und EXTF/ASCII-Export für regelmäßige Batch-Synchronisation, (c) DMS-Schnittstellen für Belege und Dokumente. Wir empfehlen DATEVconnect, wenn ihr es eh schon habt, ansonsten reicht der EXTF-Weg für 90 Prozent der Anwendungsfälle. Wir prüfen das in Woche 1.",
              },
              {
                question:
                  "Was passiert mit historischen Aufgaben in DATEV, werden die migriert?",
                answer:
                  "Nein, das ist der Witz an unserem Ansatz: DATEV bleibt das führende System, wir migrieren nichts. Beim Setup spiegeln wir den aktuellen Bestand an offenen Aufgaben einmalig nach Jira, danach läuft der Sync inkrementell. Geschlossene oder historische Aufgaben bleiben in DATEV und sind dort jederzeit auffindbar. Wer historische Daten in Jira haben will, kann das auf Wunsch auch komplett mitsynchronisieren.",
              },
              {
                question:
                  "Können wir Mandanten-Tags und Sachgebiete frei definieren?",
                answer:
                  "Ja, das Mapping ist komplett konfigurierbar. Sachgebiete (Lohn, Buchführung, Jahresabschluss, USt-Voranmeldung, Steuererklärung, Sonderfall), Prioritäten, SLA-Klassen, Bearbeiterzuweisungen, alles wird mit eurer Kanzleileitung in Woche 2 abgestimmt. Auch individuelle Mandanten-Tags (zum Beispiel A-Kunde, Sonderbetreuung, Klagefall) sind kein Problem. Änderungen später laufen über die n8n-Workflows, die ihr selbst editieren könnt.",
              },
              {
                question:
                  "Wie funktioniert die SLA-Berechnung bei verschiedenen Vorgangstypen?",
                answer:
                  "Pro Aufgabentyp definieren wir SLA-Klassen mit Anfangs- und Endzeitpunkten. Eine UStVA hat zum Beispiel SLA bis zum 10. des Folgemonats, eine Mandantenmail laut intern definiertem Standard 24 oder 48 Stunden, ein Jahresabschluss eine individuelle Frist. n8n berechnet den SLA-Restzeitwert in Echtzeit, eskaliert bei kritischer Restzeit (zum Beispiel 30 Prozent restliche Bearbeitungszeit) und färbt die Jira-Tickets entsprechend ein. Workload-Berücksichtigung pro Sachbearbeiter ist optional dabei.",
              },
              {
                question:
                  "Funktioniert das auch für eine kleine Kanzlei mit 3-5 Mitarbeitern?",
                answer:
                  "Ja, gerade kleine Kanzleien profitieren stark, weil dort der Inhaber oder die Inhaberin oft selbst die Statusübersicht im Kopf trägt. Setup-Aufwand sinkt auf 2-3 Wochen, Investment auf 8.000-12.000 Euro einmalig plus 600-900 Euro im Monat. ROI typischerweise unter 6 Monaten, weil bereits 1-2 Stunden pro Mitarbeiter und Woche die Investition rechtfertigen. Wir machen den Festpreis im Audit der ersten Woche.",
              },
              {
                question:
                  "Wie sind Steuerdaten und Steuergeheimnis (paragraph 203 StGB) abgesichert?",
                answer:
                  "Drei Schutzschichten: (a) Mandantenstammdaten und Belege bleiben in DATEV, nur Aufgaben-IDs und Status fließen in Jira, (b) Hosting in deutschen Rechenzentren (Frankfurt) oder On-Premise auf eurem Server mit eigener GPU für Privacy-LLM, (c) DSGVO-AVV mit deutschem Vertragspartner, TLS 1.3 für alle Verbindungen, API-Keys mit minimalen Rechten, rollenbasierte Berechtigungen. Keine Trainingsdaten verlassen die EU.",
              },
            ]}
          />
        </div>
      </ContentWrapper>

      {/* 8. FINAL CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
