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
  title: "Mandantenkommunikation",
  description:
    "Mandantenanfragen automatisiert beantworten und Dokumentenaustausch vereinfachen.",
};

export const metadata: Metadata = {
  title: "Mandantenkommunikation – Steuerberater | Bluebatch",
  description:
    "Wie Bluebatch die Mandantenkommunikation für Steuerberater automatisiert. 70% weniger Routineanfragen.",
  openGraph: {
    title: "Mandantenkommunikation – Steuerberater | Bluebatch",
    description:
      "KI-Chatbot für Routineanfragen, proaktive Fristenerinnerungen und automatisierte Belegkampagnen.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Mandantenkommunikation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandantenkommunikation – Steuerberater | Bluebatch",
    description:
      "KI-Chatbot für Routineanfragen, proaktive Fristenerinnerungen und automatisierte Belegkampagnen.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/steuerberater/mandantenkommunikation",
  },
};

const stats = [
  { value: 70, suffix: "%", label: "Weniger Routineanfragen" },
  { value: 24, suffix: "/7", label: "Erreichbarkeit" },
  { value: 50, suffix: "%", label: "Schnellere Belegsammlung" },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/client-portal.jpg"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            Mandantenkommunikation
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            Routineanfragen{" "}
            <BackgroundHero.Highlight>automatisch</BackgroundHero.Highlight>{" "}
            beantworten
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            KI-gestützter Chatbot für Standardfragen, proaktive
            Fristenerinnerungen und automatisierte Belegkampagnen. Mehr Zeit für
            echte Beratung.
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
                60-70% der Anfragen sind Routine
              </IntroBox.Headline>
              <IntroBox.Subline>
                „Bis wann muss ich meine Unterlagen einreichen?" „Wie ist der
                Stand meiner Steuererklärung?" – Standardfragen binden wertvolle
                Fachkraft-Zeit.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Das Einsammeln von Mandantenbelegen ist laut Branchenstudien das
                größte Workflow-Problem – durchschnittlich 3-5 Erinnerungen pro
                Mandant.
              </IntroBox.Subline>
            </IntroBox>
          </div>
          <div>
            <TimelineAsSteps>
              <TimelineAsStepsStep value={1}>
                <Typo.H3 className="mt-2!">Anfrage eingeht</Typo.H3>
                <Typo.Paragraph>
                  Per E-Mail, Telefon oder Portal – oft zu Standardthemen
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={2}>
                <Typo.H3 className="mt-2!">Recherche nötig</Typo.H3>
                <Typo.Paragraph>
                  Status im System nachschauen, Fristen prüfen
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={3}>
                <Typo.H3 className="mt-2!">Antwort verfassen</Typo.H3>
                <Typo.Paragraph>
                  Oft ähnliche Antworten für gleiche Fragen
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={4} isLast>
                <Typo.H3 className="mt-2!">Nachfassen</Typo.H3>
                <Typo.Paragraph>
                  Wiederholte Erinnerungen für fehlende Belege
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
            Vier Säulen der Kommunikationsautomatisierung
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ein integriertes System für alle Kommunikationsanforderungen.
          </IntroBox.Subline>
        </IntroBox>

        <TabGroup defaultValue="chatbot">
          <TabNavigation>
            <TabItem value="chatbot">KI-Chatbot</TabItem>
            <TabItem value="fristen">Fristenerinnerung</TabItem>
            <TabItem value="belege">Belegkampagnen</TabItem>
            <TabItem value="status">Status-Updates</TabItem>
          </TabNavigation>

          <TabContent value="chatbot">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>KI-gestützter Chatbot</Typo.H3>
                <Typo.Paragraph>
                  Automatische Beantwortung von Standardanfragen zu Fristen,
                  Bearbeitungsstand und Beleganforderungen – 24/7 verfügbar.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Echtzeit-Zugriff auf Mandantenakte
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Dynamische Fristen- und Statusauskunft
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Eskalation zu Mitarbeitern bei komplexen Fragen
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/digital-workflow.jpg"
                  alt="KI-Chatbot"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="fristen">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Proaktive Fristenerinnerungen</Typo.H3>
                <Typo.Paragraph>
                  Automatische Benachrichtigungen vor wichtigen Abgabefristen –
                  gestaffelt nach Dringlichkeit.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    30, 14, 7, 3 Tage Vorlauf-Erinnerungen
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Individuelle Präferenzen (E-Mail, SMS, Portal)
                  </Typo.ListItem>
                  <Typo.ListItem>Automatische Eskalationskette</Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/team-meeting.jpg"
                  alt="Fristenerinnerung"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="belege">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Automatisierte Belegkampagnen</Typo.H3>
                <Typo.Paragraph>
                  Strukturierte Dokumentensammlung mit dynamischen Checklisten
                  und intelligenter Nachverfolgung.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Personalisierte Checklisten je Mandantentyp
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Automatische Tracking bei Upload
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Gezielte Erinnerungen für fehlende Belege
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/client-communication.jpg"
                  alt="Belegkampagnen"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="status">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Automatische Status-Updates</Typo.H3>
                <Typo.Paragraph>
                  Mandanten erhalten proaktive Benachrichtigungen bei wichtigen
                  Meilensteinen ihrer Steuerangelegenheiten.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Bearbeitungsstart und Fertigstellung
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Einreichung beim Finanzamt bestätigt
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Bescheid eingegangen mit nächsten Schritten
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/communication-tools.jpg"
                  alt="Status-Updates"
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
          <IntroBox.Headline>96% ROI im ersten Jahr</IntroBox.Headline>
          <IntroBox.Subline>
            Für eine mittelgroße Kanzlei mit 500 Mandanten:
          </IntroBox.Subline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Vorher: Manuell</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                2 Mitarbeiter für Kommunikation @ 50.000 €/Jahr
              </ComparisonListItem>
              <ComparisonListItem>
                Überstunden in Spitzenzeiten: 10.000 €/Jahr
              </ComparisonListItem>
              <ComparisonListItem>
                Verpasste Mandate durch langsame Reaktion: ~20.000 €/Jahr
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Gesamt: ~130.000 €/Jahr</ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>Nachher: Automatisiert</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                1 Mitarbeiter für komplexe Beratung @ 50.000 €/Jahr
              </ComparisonListItem>
              <ComparisonListItem>
                Automatisierungsplattform: 6.000 €/Jahr
              </ComparisonListItem>
              <ComparisonListItem>
                Einmalige Implementierung: 25.000 € (auf Jahr 1 angerechnet)
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Jahr 1: ~81.000 € | Ab Jahr 2: ~56.000 €/Jahr
            </ComparisonFooter>
          </AfterCard>
        </ComparisonCard>

        <SavingsCard>
          <SavingsBadge>ROI im ersten Jahr: 96%</SavingsBadge>
          <SavingsItems>
            <SavingsItem label="Ersparnis Jahr 1" highlight>
              49.000 €
            </SavingsItem>
            <SavingsItem label="Ab Jahr 2">74.000 €/Jahr</SavingsItem>
            <SavingsItem label="Amortisation">~6 Monate</SavingsItem>
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
              question: "Gibt der KI-Chatbot steuerliche Beratung?",
              answer:
                "Nein, der Chatbot ist für organisatorische Anfragen konzipiert: Fristen, Bearbeitungsstand, Beleganforderungen. Er greift auf verifizierte Kanzleidaten zu. Bei fachlichen Steuerfragen wird automatisch an einen Sachbearbeiter eskaliert. Jede Antwort kann mit einem Disclaimer versehen werden.",
            },
            {
              question: "Wie funktioniert die DATEV-Anbindung?",
              answer:
                "Über mehrere Wege: HTTP-Requests an DATEV-Schnittstellen, Dateiaustausch im DATEV-Format, oder Tools wie TaxDome als Brücke. Für tiefere Integration sind Middleware-Lösungen wie DATEVconnect verfügbar. Die konkrete Strategie wird im Implementierungsprojekt definiert.",
            },
            {
              question: "Was passiert bei falsch klassifizierten Anfragen?",
              answer:
                "Mehrere Sicherheitsnetze: Bei unsicherer Klassifizierung wird automatisch eskaliert. Mandanten können jederzeit 'Mit Mitarbeiter sprechen' wählen. Fehlklassifizierungen werden markiert und verbessern das Modell. Bei kritischen Themen geht automatisch eine Kopie an den Sachbearbeiter.",
            },
            {
              question: "Wie ist der Datenschutz gewährleistet?",
              answer:
                "DSGVO-konform: Datenminimierung, Hosting in DE/EU, TLS-Verschlüsselung, Auftragsverarbeitungsverträge, automatisches Löschkonzept, vollständige Audit-Trails. Bei Self-Hosting volle Kontrolle über alle Daten in der Kanzlei-Infrastruktur. Berufsgeheimnis wird durch entsprechende Verträge gewahrt.",
            },
          ]}
        />
      </ContentWrapper>
    </>
  );
}
