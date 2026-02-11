import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";
import BackgroundHero from "@/components/hero-components/background-hero";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
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
  title: "Auftragserfassung",
  description:
    "Bestellungen aus E-Mails, Faxen und Portalen automatisch erfassen und verarbeiten.",
};

export const metadata: Metadata = {
  title: "Auftragserfassung – Großhandel | BlueBatch",
  description:
    "Wie BlueBatch die Auftragserfassung im Großhandel automatisiert. Bestellungen aus E-Mails, PDFs und Portalen automatisch erfassen.",
  openGraph: {
    title: "Auftragserfassung – Großhandel | BlueBatch",
    description:
      "Bestellungen aus E-Mails, PDFs und Portalen automatisch erfassen und verarbeiten.",
    type: "website",
    locale: "de_DE",
    siteName: "BlueBatch",
    images: [{ url: "/images/bluebatch-social-cover.jpg", width: 1200, height: 630, alt: "BlueBatch Auftragserfassung" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Auftragserfassung – Großhandel | BlueBatch",
    description:
      "Bestellungen aus E-Mails, PDFs und Portalen automatisch erfassen und verarbeiten.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/grosshandel/auftragserfassung",
  },
};

const stats = [
  { value: 75, suffix: "%", label: "Schnellere Bearbeitung" },
  { value: 99, suffix: "%", label: "Weniger Eingabefehler" },
  { value: 24, suffix: "/7", label: "Bestellverarbeitung" },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/order-capture.jpg"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            Auftragserfassung
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            Bestellungen aus{" "}
            <BackgroundHero.Highlight>
              allen Kanälen
            </BackgroundHero.Highlight>
            <br />
            automatisch erfassen
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            E-Mail, PDF, Fax, EDI oder Portal – n8n extrahiert alle Daten,
            validiert gegen ERP und Lager, erstellt den Auftrag. Von 2-3 Tagen
            auf 1-2 Stunden Bearbeitungszeit.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">ROI-Analyse anfragen</ContactButton>
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
                Manuelle Eingabe kostet 17.800 € pro Fehler
              </IntroBox.Headline>
              <IntroBox.Subline>
                Manuelle Auftragserfassung hat eine Fehlerrate von 10%+. Bei
                10.000 Eingaben bedeutet das 1.000 Fehler – und jeder B2B-Fehler
                kostet durchschnittlich 17.800 € zur Behebung.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Dazu kommt: 200.000-350.000 € jährliche Arbeitskosten für ein
                Team, das 15.000 Bestellungen pro Jahr manuell eingibt.
              </IntroBox.Subline>
            </IntroBox>
          </div>
          <div>
            <TimelineAsSteps>
              <TimelineAsStepsStep value={1}>
                <Typo.H3 className="mt-2!">E-Mail eingeht</Typo.H3>
                <Typo.Paragraph>
                  PDF-Anhang wird manuell geöffnet und gelesen
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={2}>
                <Typo.H3 className="mt-2!">Daten abtippen</Typo.H3>
                <Typo.Paragraph>
                  Artikel, Mengen, Preise werden ins ERP übertragen
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={3}>
                <Typo.H3 className="mt-2!">Validierung</Typo.H3>
                <Typo.Paragraph>
                  Manuelle Prüfung gegen Lager und Kundenkonditionen
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={4} isLast>
                <Typo.H3 className="mt-2!">Bestätigung</Typo.H3>
                <Typo.Paragraph>
                  E-Mail an Kunden wird manuell erstellt
                </Typo.Paragraph>
              </TimelineAsStepsStep>
            </TimelineAsSteps>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper background="bg-gray-100">
        <IntroBox>
          <IntroBox.PreHeadline>Multi-Channel Intake</IntroBox.PreHeadline>
          <IntroBox.Headline>Alle Bestellkanäle, ein System</IntroBox.Headline>
          <IntroBox.Subline>
            Egal wie Ihre Kunden bestellen – der Workflow verarbeitet alle
            Formate einheitlich.
          </IntroBox.Subline>
        </IntroBox>

        <TabGroup defaultValue="email">
          <TabNavigation>
            <TabItem value="email">E-Mail & PDF</TabItem>
            <TabItem value="edi">EDI</TabItem>
            <TabItem value="portal">Web-Portal</TabItem>
            <TabItem value="legacy">Fax & Telefon</TabItem>
          </TabNavigation>

          <TabContent value="email">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>E-Mail und PDF-Bestellungen</Typo.H3>
                <Typo.Paragraph>
                  Der häufigste Kanal: Kunden senden Bestellungen als PDF-Anhang
                  oder im E-Mail-Text. KI-gestützte Extraktion erkennt alle
                  relevanten Daten.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    95-98% Genauigkeit bei strukturierten PDFs
                  </Typo.ListItem>
                  <Typo.ListItem>
                    85-90% bei unstrukturierten Formaten
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Kundenspezifische Templates für Stammkunden
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/partnership.jpg"
                  alt="E-Mail Extraktion"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="edi">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>EDI-Integration</Typo.H3>
                <Typo.Paragraph>
                  Für größere Trading Partner: Strukturierte elektronische
                  Dokumente nach EDIFACT oder ANSI X12 Standard.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>Automatischer FTP/SFTP-Abruf</Typo.ListItem>
                  <Typo.ListItem>EDIFACT und ANSI X12 Parsing</Typo.ListItem>
                  <Typo.ListItem>Sofortige ERP-Integration</Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/business-roadmap.jpg"
                  alt="EDI Integration"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="portal">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Web-Portal und B2B-Shop</Typo.H3>
                <Typo.Paragraph>
                  Bestellungen aus Ihrem Kundenportal oder B2B-Shop werden per
                  Webhook direkt in den Workflow übernommen.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>Echtzeit-Webhook-Integration</Typo.ListItem>
                  <Typo.ListItem>
                    Shopify, WooCommerce, Magento Support
                  </Typo.ListItem>
                  <Typo.ListItem>Sofortige Auftragsbestätigung</Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/cost-savings.jpg"
                  alt="Web Portal"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="legacy">
            <SimpleGrid cols={2} className="items-center">
              <div>
                <Typo.H3>Fax und Telefon</Typo.H3>
                <Typo.Paragraph>
                  Auch Legacy-Kanäle werden unterstützt: Faxe per OCR,
                  telefonische Bestellungen per manuelles Trigger-Formular.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>OCR für Fax-Eingänge</Typo.ListItem>
                  <Typo.ListItem>
                    Einfaches Webformular für Telefon-Bestellungen
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Gleiche Validierung und ERP-Integration
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/process-mapping.jpg"
                  alt="Legacy Kanäle"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>ROI-Kalkulation</IntroBox.PreHeadline>
          <IntroBox.Headline>184% ROI im ersten Jahr</IntroBox.Headline>
          <IntroBox.Subline>
            Für einen mittelständischen Großhändler mit 20.000 Bestellungen pro
            Jahr:
          </IntroBox.Subline>
        </IntroBox>
        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Vorher: Manuell</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                4 Vollzeitkräfte @ 50.000 €/Jahr = 200.000 €
              </ComparisonListItem>
              <ComparisonListItem>
                2.000 Fehler × 500 € = 1.000.000 €
              </ComparisonListItem>
              <ComparisonListItem>
                Opportunitätskosten: ~200.000 €
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Gesamt: ~1.400.000 €/Jahr</ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>Nachher: Automatisiert</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                1,5 Vollzeitkräfte für Sonderfälle = 75.000 €
              </ComparisonListItem>
              <ComparisonListItem>
                200 Fehler × 500 € = 100.000 €
              </ComparisonListItem>
              <ComparisonListItem>
                Automatisierungskosten: 30.000 €/Jahr
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Gesamt: ~285.000 €/Jahr</ComparisonFooter>
          </AfterCard>
        </ComparisonCard>

        <SavingsCard>
          <SavingsBadge>ROI im ersten Jahr: 184%</SavingsBadge>
          <SavingsItems>
            <SavingsItem label="Jährliche Ersparnis">1.115.000 €</SavingsItem>
            <SavingsItem label="Amortisation">~1 Monat</SavingsItem>
            <SavingsItem label="ROI fortlaufend" highlight>
              290%
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
              question: "Wie genau ist die automatische Extraktion?",
              answer:
                "95-98% bei strukturierten Dokumenten (konsistente PDFs, EDI), 85-90% bei semi-strukturierten. Das System flaggt Extraktionen mit niedrigem Confidence Score für manuelle Überprüfung. Die Genauigkeit verbessert sich durch Machine Learning.",
            },
            {
              question: "Was passiert bei nicht verarbeitbaren Bestellungen?",
              answer:
                "Human-in-the-Loop Design: Exceptions werden kategorisiert, an den richtigen Mitarbeiter geroutet, mit SLA-Timer überwacht und bei Nichtbearbeitung eskaliert. Typische Raten: 15-25% initial, fallend auf 10-15%.",
            },
            {
              question: "Welche Sicherheitsmaßnahmen gibt es?",
              answer:
                "TLS 1.3 Verschlüsselung, AES-256 für gespeicherte Daten, Role-Based Access Control, vollständiges Audit Logging. GDPR-konform, PCI DSS und HIPAA fähig. Wahlweise n8n Cloud (SOC 2 Type II) oder Self-Hosted.",
            },
            {
              question: "Wie lange dauert die Implementierung?",
              answer:
                "MVP (Top 5 Kunden): 4-6 Wochen. Full Production (alle Kanäle, Dashboards): 3-4 Monate. Ihr Team: Business-Seite ca. 30-40 Stunden, IT-Seite ca. 20-30 Stunden.",
            },
          ]}
        />
      </ContentWrapper>
    </>
  );
}
