import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import type { PageConfig } from "@/lib/get-subpages";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { getRewriteOverrides } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import BackgroundHero from "@/components/heroes/background-hero";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/layout/simple-grid";
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
} from "@/components/ui/timeline-as-steps";
import TabGroup, {
  TabNavigation,
  TabItem,
  TabContent,
} from "@/components/ui/tab-group";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import IntroBox from "@/components/ui/intro-box";
import Customer from "@/components/sections/customer/customer";
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

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/bestellung-erfassen",
  rewrites: [
    {
      source: "/ai-lastenheft",
      preHeadline: "AI Lastenheft",
      headline: "AI-gestützte Lastenheft-Erstellung für den Großhandel",
      metaTitle: "AI Lastenheft – Anforderungen automatisch erfassen | Bluebatch",
      metaDescription:
        "AI-gestützte Lastenheft-Erstellung für den Großhandel. Bestellungen und Anforderungen aus E-Mails, PDFs und Portalen automatisch erfassen.",
      keywords: [
        "AI Lastenheft",
        "KI Lastenheft erstellen",
        "Lastenheft automatisch",
        "AI Anforderungserfassung",
        "Lastenheft Großhandel",
        "Bluebatch",
      ],
    },
    {
      source: "/ai-lastenheft-erstellen",
      preHeadline: "AI Lastenheft erstellen",
      headline: "Lastenheft automatisch erstellen mit KI",
      metaTitle:
        "AI Lastenheft erstellen – Großhandel | Bluebatch",
      metaDescription:
        "Lastenheft automatisch erstellen mit KI. Anforderungen aus allen Kanälen erfassen, strukturieren und validieren – in Minuten statt Stunden.",
      keywords: [
        "AI Lastenheft erstellen",
        "Lastenheft Generator",
        "automatisches Lastenheft",
        "KI Anforderungsdokument",
        "Lastenheft Software",
        "Bluebatch",
      ],
    },
    {
      source: "/automatische-auftragserfassung",
      preHeadline: "Automatische Auftragserfassung",
      headline: "Automatische Auftragserfassung für den Großhandel",
      metaTitle: "Automatische Auftragserfassung – Großhandel | Bluebatch",
      metaDescription:
        "Automatische Auftragserfassung für Großhändler. Bestellungen aus E-Mails, PDFs und Portalen automatisch erfassen und verarbeiten.",
      keywords: [
        "automatische Auftragserfassung",
        "Aufträge automatisch erfassen",
        "Bestellerfassung automatisieren",
        "Order Capture Automation",
        "Großhandel Auftragseingang",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-auftragserfassung",
      preHeadline: "KI-Auftragserfassung",
      headline: "KI-gestützte Auftragserfassung für den Großhandel",
      metaTitle: "KI-Auftragserfassung – Großhandel | Bluebatch",
      metaDescription:
        "KI-gestützte Auftragserfassung für Großhändler. Bestelldaten automatisch extrahieren, validieren und ins ERP übertragen.",
      keywords: [
        "KI Auftragserfassung",
        "künstliche Intelligenz Bestellungen",
        "KI Datenextraktion",
        "intelligente Auftragsverarbeitung",
        "KI ERP Integration",
        "Bluebatch",
      ],
    },
    {
      source: "/auftraege-automatisch-erfassen",
      preHeadline: "Aufträge automatisch erfassen",
      headline: "Aufträge automatisch erfassen im Großhandel",
      metaTitle: "Aufträge automatisch erfassen – Großhandel | Bluebatch",
      metaDescription:
        "Aufträge automatisch erfassen für Großhändler. Von 2-3 Tagen auf 1-2 Stunden Bearbeitungszeit – ohne manuelle Dateneingabe.",
      keywords: [
        "Aufträge automatisch erfassen",
        "Auftragseingabe automatisieren",
        "manuelle Dateneingabe eliminieren",
        "Bestellungen digitalisieren",
        "Großhandel Digitalisierung",
        "Bluebatch",
      ],
    },
    {
      source: "/bestellung-erfassen",
    },
  ],
};

const defaultMeta = {
  title:
    "Bestellung erfassen – Automatische Auftragserfassung im Großhandel | Bluebatch",
  description:
    "Bestellung erfassen leicht gemacht: Bluebatch automatisiert den Bestellprozess im Einkauf. Bestellungen aus E-Mails, PDFs und Portalen automatisch erfassen.",
  ogDescription:
    "Bestellung erfassen aus E-Mails, PDFs und Portalen – automatisch und fehlerfrei.",
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
  const params = await searchParams;
  const overrides = getRewriteOverrides(rewriteSiteConfig, params);

  const title = overrides?.metaTitle ?? defaultMeta.title;
  const description = overrides?.metaDescription ?? defaultMeta.description;

  const defaultKeywords = [
    "Bestellung erfassen",
    "Bestellprozess Einkauf",
    "Auftragserfassung",
    "automatische Auftragserfassung",
    "Bestellungen erfassen",
    "Großhandel Auftragserfassung",
    "E-Mail Bestellungen verarbeiten",
    "Bluebatch",
  ];

  return {
    title,
    description,
    keywords: overrides?.keywords ?? defaultKeywords,
    openGraph: {
      title,
      description: overrides?.metaDescription ?? defaultMeta.ogDescription,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/bluebatch-social-cover.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch Auftragserfassung",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: overrides?.metaDescription ?? defaultMeta.ogDescription,
      images: ["/images/bluebatch-social-cover.jpg"],
    },
    alternates: {
      canonical: "/bestellung-erfassen",
    },
  };
}

const stats = [
  { value: 75, suffix: "%", label: "Schnellere Bearbeitung" },
  { value: 99, suffix: "%", label: "Weniger Eingabefehler" },
  { value: 24, suffix: "/7", label: "Bestellverarbeitung" },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await enforceMainRewrite(rewriteSiteConfig, searchParams);

  const params = await searchParams;
  const overrides = getRewriteOverrides(rewriteSiteConfig, params);

  return (
    <>
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/order-capture.jpg"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            {overrides?.preHeadline ?? "Auftragserfassung"}
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            {overrides?.headline ?? (
              <>
                Bestellung erfassen:{" "}
                <BackgroundHero.Highlight>
                  Alle Kanäle
                </BackgroundHero.Highlight>
                <br />
                automatisch verarbeiten
              </>
            )}
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Bestellung erfassen aus E-Mail, PDF, Fax, EDI oder Portal – n8n
            extrahiert alle Daten, validiert gegen ERP und Lager und erstellt
            den Auftrag. So optimieren Sie den gesamten Bestellprozess im
            Einkauf – von 2-3 Tagen auf 1-2 Stunden Bearbeitungszeit.
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
                Jede manuell erfasste Bestellung kostet 17.800 € pro Fehler
              </IntroBox.Headline>
              <IntroBox.Subline>
                Wer Bestellungen manuell erfassen muss, kennt die Fehlerrate von
                10%+. Bei 10.000 Eingaben bedeutet das 1.000 Fehler – und jeder
                B2B-Fehler kostet durchschnittlich 17.800 € zur Behebung.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Dazu kommt: 200.000-350.000 € jährliche Arbeitskosten für ein
                Team, das im Bestellprozess Einkauf 15.000 Bestellungen pro
                Jahr manuell eingibt.
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

      <ContentWrapper colorScheme="gray">
        <IntroBox>
          <IntroBox.PreHeadline>Multi-Channel Intake</IntroBox.PreHeadline>
          <IntroBox.Headline>Erfassung von Bestellungen aus allen Kanälen – ein System</IntroBox.Headline>
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
      <ContentWrapper noPadding bodyWidth="full">
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

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>

      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Wie genau kann das System Bestellungen automatisch erfassen?",
              answer:
                "95-98% Genauigkeit bei strukturierten Dokumenten (konsistente PDFs, EDI), 85-90% bei semi-strukturierten. Das System flaggt Extraktionen mit niedrigem Confidence Score für manuelle Überprüfung. Die Genauigkeit verbessert sich durch Machine Learning.",
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
