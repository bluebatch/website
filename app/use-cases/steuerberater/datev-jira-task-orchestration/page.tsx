import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";
import BackgroundHero from "@/components/hero-components/background-hero";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/simple-grid";
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
} from "@/components/timeline-as-steps";
import TabGroup, {
  TabNavigation,
  TabItem,
  TabContent,
} from "@/components/tab-group";
import ConsultationCtaDefault from "@/components/consultation-cta-default";
import { FaqContainer } from "@/components/faqs";
import IntroBox from "@/components/intro-box";
import Customer from "@/components/customer/customer";
import SavingsCard, {
  SavingsBadge,
  SavingsItems,
  SavingsItem,
} from "@/components/cards/savings-card";

export const pageConfig: PageConfig = {
  title: "DATEV-Jira Orchestration",
  description:
    "Bidirektionale Synchronisation zwischen DATEV und Jira für effizientes Fristenmanagement.",
};

export const metadata: Metadata = {
  title: "DATEV-Jira Task Orchestration – Steuerberater | BlueBatch",
  description:
    "Automatisierte Aufgabenorchestrierung zwischen DATEV und Jira für Steuerkanzleien. 99,9% Fristeneinhaltung.",
  openGraph: {
    title: "DATEV-Jira Task Orchestration – Steuerberater | BlueBatch",
    description:
      "Bidirektionale Synchronisation zwischen DATEV und Jira. Automatische Fristenüberwachung.",
    type: "website",
    locale: "de_DE",
    siteName: "BlueBatch",
    images: [{ url: "/images/cover-fb.jpg", width: 1200, height: 630, alt: "BlueBatch DATEV-Jira Orchestration" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DATEV-Jira Task Orchestration – Steuerberater | BlueBatch",
    description:
      "Bidirektionale Synchronisation zwischen DATEV und Jira. Automatische Fristenüberwachung.",
    images: ["/images/cover-fb.jpg"],
  },
};

const stats = [
  { value: 99.9, suffix: "%", label: "Fristeneinhaltung" },
  { value: 60, suffix: "%", label: "Weniger Überstunden" },
  { value: 45, suffix: "min", label: "Zeitersparnis/Tag" },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/test1.jpg"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            DATEV-Jira Orchestration
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            Aufgaben und Fristen{" "}
            <BackgroundHero.Highlight>
              automatisch
            </BackgroundHero.Highlight>{" "}
            synchronisieren
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Bidirektionale Synchronisation zwischen DATEV und Jira. Automatische
            Priorisierung, Workload-Dashboards und Eskalations-Workflows.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Demo anfragen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            {stats.map((stat, index) => (
              <BackgroundHero.Stat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
              <IntroBox.Headline>
                2-5% Fristversäumnisse durch manuelle Verwaltung
              </IntroBox.Headline>
              <IntroBox.Subline>
                Getrennte Systeme, keine Integration: Aufgaben aus DATEV müssen
                manuell in Projektmanagement-Tools übertragen werden. Bei 100+
                Mandanten und dutzenden Fristen geht der Überblick verloren.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Jedes Fristversäumnis kostet durchschnittlich 500-2.000 € an
                Säumniszuschlägen – plus Reputationsschaden und Haftungsrisiko.
              </IntroBox.Subline>
            </IntroBox>
          </div>
          <div>
            <TimelineAsSteps>
              <TimelineAsStepsStep value={1}>
                <Typo.H3 className="mt-2!">DATEV-Aufgabe</Typo.H3>
                <Typo.Paragraph>
                  Neue Frist oder Auftrag im DATEV-System
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={2}>
                <Typo.H3 className="mt-2!">Manuelle Übertragung</Typo.H3>
                <Typo.Paragraph>
                  In Excel, Outlook-Kalender oder Papier-Listen eintragen
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={3}>
                <Typo.H3 className="mt-2!">Status-Nachfrage</Typo.H3>
                <Typo.Paragraph>
                  Teamleiter fragt regelmäßig nach Bearbeitungsstand
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={4} isLast>
                <Typo.H3 className="mt-2!">Kurz vor Frist</Typo.H3>
                <Typo.Paragraph>
                  Hektische Nacharbeit, wenn Problem erst spät erkannt wird
                </Typo.Paragraph>
              </TimelineAsStepsStep>
            </TimelineAsSteps>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper background="bg-gray-100">
        <IntroBox>
          <IntroBox.PreHeadline>Automatisierung</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vier Kernfunktionen für perfekte Koordination
          </IntroBox.Headline>
          <IntroBox.Subline>
            Nahtlose Verbindung zwischen DATEV und Jira für volle Transparenz.
          </IntroBox.Subline>
        </IntroBox>

        <TabGroup defaultValue="sync">
          <TabNavigation>
            <TabItem value="sync">Bidirektionale Sync</TabItem>
            <TabItem value="fristen">Fristenmanagement</TabItem>
            <TabItem value="workload">Workload-Dashboard</TabItem>
            <TabItem value="eskalation">Eskalation</TabItem>
          </TabNavigation>

          <TabContent value="sync">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>DATEV-Jira Synchronisation</Typo.H3>
                <Typo.Paragraph>
                  Automatische Ticket-Erstellung bei neuen DATEV-Aufträgen.
                  Status-Updates fließen in beide Richtungen.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>Neuer Mandantenauftrag = Jira-Ticket</Typo.ListItem>
                  <Typo.ListItem>Status in Jira → Dokumentation in DATEV</Typo.ListItem>
                  <Typo.ListItem>Automatische Konflikt-Erkennung</Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/background-3228704.jpg"
                  alt="Synchronisation"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="fristen">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Intelligentes Fristenmanagement</Typo.H3>
                <Typo.Paragraph>
                  Alle Steuerfristen zentral verwaltet mit automatischen
                  Erinnerungen und Kalenderintegration.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>UStVA, Lohnsteuer, Jahresabschluss-Fristen</Typo.ListItem>
                  <Typo.ListItem>Outlook/Google Calendar Sync</Typo.ListItem>
                  <Typo.ListItem>Fristverlängerungs-Erinnerungen</Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/tim-van-der-kuip-HVp2MG15y3E-unsplash.jpg"
                  alt="Fristenmanagement"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="workload">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Workload-Dashboard</Typo.H3>
                <Typo.Paragraph>
                  Echtzeit-Übersicht über Teamauslastung für bessere
                  Ressourcenplanung und fairere Arbeitsverteilung.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>Kapazitätsplanung mit Warnsystem</Typo.ListItem>
                  <Typo.ListItem>Skill-basierte Aufgabenzuweisung</Typo.ListItem>
                  <Typo.ListItem>Urlaubsplanung mit Auto-Vertretung</Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/thought-3216768.jpg"
                  alt="Workload-Dashboard"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="eskalation">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Automatische Eskalation</Typo.H3>
                <Typo.Paragraph>
                  Vierstufiges Eskalationssystem sorgt dafür, dass keine Frist
                  übersehen wird.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>7 Tage: Erinnerung an Bearbeiter</Typo.ListItem>
                  <Typo.ListItem>3 Tage: Benachrichtigung Teamleiter</Typo.ListItem>
                  <Typo.ListItem>1 Tag: Eskalation an Kanzleileitung</Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/power-plant-344231.jpg"
                  alt="Eskalation"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>ROI-Kalkulation</IntroBox.PreHeadline>
          <IntroBox.Headline>536-850% ROI im ersten Jahr</IntroBox.Headline>
          <IntroBox.Subline>
            Für eine mittelgroße Kanzlei mit 15 Mitarbeitern und 500 Mandanten:
          </IntroBox.Subline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Vorher: Manuell</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>45-70 Min/Tag pro Mitarbeiter für Systemwechsel</ComparisonListItem>
              <ComparisonListItem>2-5% Fristversäumnisse (500-2.000 €/Versäumnis)</ComparisonListItem>
              <ComparisonListItem>30-40% Varianz in Teamauslastung</ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              
                Zeitverlust: 1.900-2.900 Stunden/Jahr
              </ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>Nachher: Automatisiert</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>Jira Cloud: 1.800 €/Jahr</ComparisonListItem>
              <ComparisonListItem>n8n Cloud: 2.400 €/Jahr</ComparisonListItem>
              <ComparisonListItem>Implementierung: 15.000-25.000 € (einmalig)</ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              
                Einsparung: 218.000-325.000 €/Jahr
              </ComparisonFooter>
          </AfterCard>
        </ComparisonCard>

        <SavingsCard>
          <SavingsBadge>ROI im ersten Jahr: 536-850%</SavingsBadge>
          <SavingsItems>
            <SavingsItem label="Amortisation" highlight>
              2-3 Monate
            </SavingsItem>
            <SavingsItem label="Fristeneinhaltung">
              100%
            </SavingsItem>
            <SavingsItem label="Weniger Überstunden">
              40-60%
            </SavingsItem>
          </SavingsItems>
        </SavingsCard>
      </ContentWrapper>

      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>

      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question: "Ist eine direkte DATEV-Integration überhaupt möglich?",
              answer:
                "DATEV bietet keine vollständig offene REST-API, aber mehrere Integrationswege: DATEV-Schnittstellen für Export/Import, DATEV Unternehmen Online für Datenaustausch, DATEVconnect für zertifizierte Partner, und DMS-Schnittstellen. Wir empfehlen einen hybriden Ansatz: automatischer Export aus DATEV, Verarbeitung in n8n, und strukturierte Rücksynchronisation.",
            },
            {
              question: "Wie sind die Mandantendaten geschützt?",
              answer:
                "TLS 1.3 für alle Verbindungen, keine Speicherung von Steuerdaten in Cloud-Systemen (nur Referenzen/IDs). Rollenbasierte Berechtigungen in Jira, API-Keys mit minimalen Rechten, DSGVO-konforme Verarbeitung mit Hosting in deutschen Rechenzentren. Das Steuergeheimnis (§203 StGB) wird gewahrt – keine sensiblen Daten in Jira, nur Aufgabenbeschreibungen und Status.",
            },
            {
              question: "Was passiert wenn die Automatisierung ausfällt?",
              answer:
                "Mehrfache Absicherung: Fehlerbenachrichtigungen bei Problemen, automatische Wiederholungsversuche, tägliche Integritätsprüfungen (DATEV vs. Jira Abgleich). Backup-Benachrichtigungen per E-Mail und SMS bei kritischen Fristen. DATEV bleibt immer das führende System (Source of Truth). Wöchentliche Kontrollberichte zeigen Abweichungen auf.",
            },
            {
              question: "Wie lange dauert die Implementierung?",
              answer:
                "Phase 1 (2-3 Wochen): Jira-Projekt einrichten, Basis-Workflows für Fristenüberwachung, Kalender-Integration, Team-Schulung. Phase 2 (2-4 Wochen): DATEV-Anbindung, automatische Datenübernahme, bidirektionale Statusaktualisierung. Phase 3 (fortlaufend): Dashboard-Anpassungen, Workflow-Verfeinerung. Ressourcen: 60-100 Stunden externer Partner, 20-40 Stunden intern.",
            },
          ]}
        />
      </ContentWrapper>
    </>
  );
}
