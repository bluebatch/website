import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/hero-components/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import PhaseCard, {
  PhaseCardHeader,
  PhaseCardTitle,
  PhaseCardBadge,
  PhaseCardSubtitle,
  PhaseCardDescription,
} from "@/components/cards/phase-card";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/timeline-as-steps";
import ComparisonCard, {
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
  ComparisonFooter,
} from "@/components/cards/comparison-card";
import SavingsCard, {
  SavingsBadge,
  SavingsItems,
  SavingsItem,
} from "@/components/cards/savings-card";
import ConsultationCtaDefault from "@/components/consultation-cta-default";
import { FaqContainer } from "@/components/faqs";
import IntroBox from "@/components/intro-box";
import Customer from "@/components/customer/customer";
import KpiCard from "@/components/cards/kpi-card";

export const pageConfig: PageConfig = {
  title: "KI-Automatisierung mit easybill",
  description:
    "Rechnungen, Angebote und Kundendaten in easybill vollautomatisch verwalten – mit n8n und KI.",
};

export const metadata: Metadata = {
  title:
    "KI-Automatisierung mit easybill – Großhandel | Bluebatch",
  description:
    "Wie Bluebatch Großhändlern hilft, easybill mit KI-gestützten n8n-Workflows zu automatisieren – von der Rechnungserstellung bis zum Mahnwesen.",
  openGraph: {
    title:
      "KI-Automatisierung mit easybill – Großhandel | Bluebatch",
    description:
      "Rechnungen, Angebote und Zahlungen in easybill vollautomatisch verwalten. 80% weniger manuelle Buchhaltungsarbeit.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch KI-Automatisierung mit easybill",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "KI-Automatisierung mit easybill – Großhandel | Bluebatch",
    description:
      "Rechnungen, Angebote und Zahlungen in easybill vollautomatisch verwalten. 80% weniger manuelle Buchhaltungsarbeit.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/grosshandel/ai-automation-with-easybill",
  },
};

const phases = [
  {
    number: 1,
    title: "Auftrag erfassen",
    badge: "KI-Parsing",
    subtitle: "Multi-Channel Intake",
    description:
      "Bestellungen per E-Mail, Webshop oder ERP werden automatisch erkannt. Die KI extrahiert Kunde, Positionen, Mengen und Lieferdaten – und legt den Auftrag in easybill an.",
  },
  {
    number: 2,
    title: "Dokumente generieren",
    badge: "easybill API",
    subtitle: "Automatische Dokumentenerstellung",
    description:
      "Auftragsbestätigungen, Lieferscheine und Rechnungen werden über die easybill REST-API erstellt, finalisiert und als PDF generiert – inklusive ZUGFeRD- oder XRechnung-Format.",
  },
  {
    number: 3,
    title: "Versenden & Buchen",
    badge: "Automatisierung",
    subtitle: "Nahtloser Dokumentenfluss",
    description:
      "Dokumente werden per E-Mail an Kunden versendet, Zahlungen über die Payment-API erfasst und DATEV-Exporte automatisch an den Steuerberater übertragen.",
  },
  {
    number: 4,
    title: "Überwachen & Mahnen",
    badge: "Monitoring",
    subtitle: "Intelligentes Forderungsmanagement",
    description:
      "Offene Rechnungen werden überwacht, Zahlungseingänge automatisch zugeordnet. Bei Überfälligkeit startet ein Mahnworkflow mit eskalierenden Erinnerungen.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              easybill + n8n + KI
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Rechnungen und Buchhaltung in easybill vollautomatisch
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Vom Auftragseingang über die Rechnungserstellung bis zum
              Zahlungseingang – automatisieren Sie Ihren gesamten
              Dokumentenfluss in easybill mit n8n-Workflows und KI.
              80% weniger manuelle Buchhaltungsarbeit.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Demo anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              End-to-End easybill-Automatisierung für den Großhandel
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/process-automation.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper border="T">
        <IntroBox>
          <IntroBox.PreHeadline>Ihre Vorteile</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Weniger Handarbeit, mehr Kontrolle
          </IntroBox.Headline>
        </IntroBox>

        <SimpleGrid cols={4} className="mt-10">
          <KpiCard
            value={80}
            suffix="%"
            subtitle="Weniger manuelle Buchhaltungsarbeit"
            variant="success"
          />
          <KpiCard
            value={3}
            suffix=" Sek."
            subtitle="Von Auftrag zu Rechnung – vollautomatisch"
            variant="default"
          />
          <KpiCard
            value={99}
            suffix="%+"
            subtitle="Datengenauigkeit durch API-Integration"
            variant="success"
          />
          <KpiCard
            value={24}
            suffix="/7"
            subtitle="Rechnungen und Mahnungen rund um die Uhr"
            variant="default"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div className="relative aspect-video">
            <Image
              src="/images/productivity-boost.jpg"
              alt="Manuelle Rechnungsstellung im Großhandel"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
              <IntroBox.Headline>
                Manuelles Rechnungswesen skaliert nicht
              </IntroBox.Headline>
              <IntroBox.Subline>
                Im Großhandel fallen täglich Hunderte von Dokumenten an:
                Auftragsbestätigungen, Lieferscheine, Rechnungen,
                Gutschriften, Mahnungen. Jedes Dokument manuell in easybill
                zu erstellen, kostet Zeit und produziert Fehler.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Dazu kommt: Zahlungseingänge müssen manuell zugeordnet,
                DATEV-Exporte händisch angestoßen und Mahnungen einzeln
                verschickt werden. Bei 200+ Rechnungen pro Woche
                verliert Ihr Team den Überblick.
              </IntroBox.Subline>
            </IntroBox>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper background="bg-gray-50" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Der Workflow</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So automatisieren wir Ihre easybill-Prozesse
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vier Schritte – vom Auftragseingang bis zum automatischen
            Mahnwesen, orchestriert durch n8n.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          {phases.map((phase, index) => (
            <TimelineAsStepsStep
              key={phase.number}
              value={phase.number}
              isLast={index === phases.length - 1}
            >
              <PhaseCard>
                <PhaseCardHeader>
                  <PhaseCardTitle>{phase.title}</PhaseCardTitle>
                  <PhaseCardBadge>{phase.badge}</PhaseCardBadge>
                </PhaseCardHeader>
                <PhaseCardSubtitle>{phase.subtitle}</PhaseCardSubtitle>
                <PhaseCardDescription>
                  {phase.description}
                </PhaseCardDescription>
              </PhaseCard>
            </TimelineAsStepsStep>
          ))}
        </TimelineAsSteps>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>
            easybill API-Funktionen
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was wir über die easybill-API automatisieren
          </IntroBox.Headline>
          <IntroBox.Subline>
            Die{" "}
            <Link
              href="https://www.easybill.de/api/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 underline hover:text-primary-800"
            >
              easybill REST-API
            </Link>{" "}
            bietet umfassende Möglichkeiten zur Automatisierung Ihrer
            Geschäftsprozesse.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          <SimpleCard>
            <Typo.H3>Rechnungen & Dokumente</Typo.H3>
            <Typo.Paragraph>
              Automatische Erstellung von Rechnungen, Angeboten,
              Auftragsbestätigungen, Lieferscheinen und Gutschriften.
              Finalisierung, PDF-Generierung und Versand per E-Mail
              – alles über die API.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Kunden & Kontakte</Typo.H3>
            <Typo.Paragraph>
              Kundenstammdaten bidirektional synchronisieren zwischen
              ERP, CRM und easybill. Kundengruppen für
              Staffelpreise und regionale Zuordnung automatisch
              verwalten.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Produkte & Preise</Typo.H3>
            <Typo.Paragraph>
              Produktkatalog mit Preisen, Steuersätzen und
              Lagerbeständen zentral pflegen. Änderungen aus dem
              ERP automatisch in easybill synchronisieren.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>Zahlungsmanagement</Typo.H3>
            <Typo.Paragraph>
              Zahlungseingänge automatisch Rechnungen zuordnen,
              offene Posten überwachen und SEPA-Lastschriften
              generieren. Vollständiges Forderungsmanagement.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>E-Rechnung & Compliance</Typo.H3>
            <Typo.Paragraph>
              ZUGFeRD 2.x und XRechnung 3.0 automatisch generieren
              – je nach Kundentyp. Pflichtformat für B2G und
              zunehmend für B2B in Deutschland.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3>DATEV & Steuerberater</Typo.H3>
            <Typo.Paragraph>
              Buchhaltungsdaten automatisch an das DATEV-Rechenzentrum
              exportieren. Ihr Steuerberater erhält alle Daten ohne
              manuellen Aufwand.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>

      <ContentWrapper background="bg-gray-100">
        <IntroBox>
          <IntroBox.PreHeadline>ROI-Kalkulation</IntroBox.PreHeadline>
          <IntroBox.Headline>
            120.000 €+ jährliche Ersparnis bei 200 Rechnungen/Woche
          </IntroBox.Headline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Vorher: Manuell</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                15-20 Min. pro Rechnung × 200/Woche
              </ComparisonListItem>
              <ComparisonListItem>
                3-5% Fehlerrate bei manueller Eingabe
              </ComparisonListItem>
              <ComparisonListItem>
                Mahnungen werden vergessen oder verzögert
              </ComparisonListItem>
              <ComparisonListItem>
                2-3 Vollzeitkräfte für Rechnungswesen
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Gesamt: ~180.000 €/Jahr (Personal + Fehlerkosten)
            </ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>Nachher: Automatisiert</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>
                Sekunden pro Rechnung – vollautomatisch
              </ComparisonListItem>
              <ComparisonListItem>
                Unter 1% Fehlerrate durch API-Integration
              </ComparisonListItem>
              <ComparisonListItem>
                Automatisches Mahnwesen ohne Verzögerung
              </ComparisonListItem>
              <ComparisonListItem>
                0,5 Vollzeitkräfte für Sonderfälle
              </ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              Gesamt: ~55.000 €/Jahr
            </ComparisonFooter>
          </AfterCard>
        </ComparisonCard>

        <SavingsCard>
          <SavingsBadge>easybill-Automatisierung</SavingsBadge>
          <SavingsItems>
            <SavingsItem label="Jährliche Ersparnis" highlight>
              120.000 €+
            </SavingsItem>
            <SavingsItem label="Amortisation">2-3 Monate</SavingsItem>
            <SavingsItem label="Weniger manuelle Arbeit">80%</SavingsItem>
          </SavingsItems>
        </SavingsCard>
      </ContentWrapper>

      <ContentWrapper background="bg-primary-800">
        <div className="py-8">
          <IntroBox dark>
            <IntroBox.PreHeadline>Integration</IntroBox.PreHeadline>
            <IntroBox.Headline>
              easybill als Teil Ihres Gesamtsystems
            </IntroBox.Headline>
            <IntroBox.Subline>
              Wir verbinden easybill mit Ihrem ERP, CRM, Webshop und
              Steuerberater – n8n orchestriert den Datenfluss.
            </IntroBox.Subline>
          </IntroBox>

          <SimpleGrid cols={4} className="mt-10">
            <SimpleCard className="bg-white/10! border-white/20! text-white text-center">
              <Typo.H3 className="text-white!">ERP-Systeme</Typo.H3>
              <Typo.Paragraph className="text-gray-300! text-sm!">
                SAP, Odoo, NetSuite, Dynamics, Xentral
              </Typo.Paragraph>
            </SimpleCard>
            <SimpleCard className="bg-white/10! border-white/20! text-white text-center">
              <Typo.H3 className="text-white!">E-Commerce</Typo.H3>
              <Typo.Paragraph className="text-gray-300! text-sm!">
                Shopify, WooCommerce, Amazon, eBay
              </Typo.Paragraph>
            </SimpleCard>
            <SimpleCard className="bg-white/10! border-white/20! text-white text-center">
              <Typo.H3 className="text-white!">CRM</Typo.H3>
              <Typo.Paragraph className="text-gray-300! text-sm!">
                HubSpot, Pipedrive, Salesforce, Zoho
              </Typo.Paragraph>
            </SimpleCard>
            <SimpleCard className="bg-white/10! border-white/20! text-white text-center">
              <Typo.H3 className="text-white!">Buchhaltung</Typo.H3>
              <Typo.Paragraph className="text-gray-300! text-sm!">
                DATEV, Steuerberater-Export, SEPA
              </Typo.Paragraph>
            </SimpleCard>
          </SimpleGrid>
        </div>
      </ContentWrapper>

      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>

      <ContentWrapper background="bg-gray-50">
        <IntroBox>
          <IntroBox.PreHeadline>Referenzen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            easybill Dokumentation & Ressourcen
          </IntroBox.Headline>
          <IntroBox.Subline>
            Alle Informationen basieren auf der offiziellen easybill-Dokumentation.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          <Link
            href="https://www.easybill.de/api/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <SimpleCard className="h-full hover:border-primary-400 transition-colors">
              <Typo.H3>REST-API Dokumentation</Typo.H3>
              <Typo.Paragraph>
                Offizielle Swagger-UI mit allen Endpunkten: Dokumente, Kunden,
                Positionen, Zahlungen, Webhooks und mehr.
              </Typo.Paragraph>
              <span className="text-primary-600 font-medium text-sm mt-2 inline-block">
                easybill.de/api &rarr;
              </span>
            </SimpleCard>
          </Link>
          <Link
            href="https://www.easybill.de/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <SimpleCard className="h-full hover:border-primary-400 transition-colors">
              <Typo.H3>easybill Plattform</Typo.H3>
              <Typo.Paragraph>
                Cloud-basierte Rechnungssoftware mit DATEV-Anbindung,
                E-Rechnung (ZUGFeRD/XRechnung), Lagerverwaltung und
                automatischem Mahnwesen.
              </Typo.Paragraph>
              <span className="text-primary-600 font-medium text-sm mt-2 inline-block">
                easybill.de &rarr;
              </span>
            </SimpleCard>
          </Link>
          <Link
            href="https://www.easybill.de/funktionen/e-rechnung-software"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <SimpleCard className="h-full hover:border-primary-400 transition-colors">
              <Typo.H3>E-Rechnung mit easybill</Typo.H3>
              <Typo.Paragraph>
                ZUGFeRD 2.x und XRechnung 3.0 – Pflichtformate ab 2025
                für B2G, zunehmend Standard im B2B. Automatisiert per API.
              </Typo.Paragraph>
              <span className="text-primary-600 font-medium text-sm mt-2 inline-block">
                E-Rechnung Infos &rarr;
              </span>
            </SimpleCard>
          </Link>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Was genau kann über die easybill-API automatisiert werden?",
              answer:
                "Die easybill REST-API ermöglicht die vollständige Automatisierung von: Rechnungen, Angeboten, Auftragsbestätigungen, Lieferscheinen, Gutschriften und Mahnungen erstellen, finalisieren, als PDF generieren und per E-Mail versenden. Außerdem: Kunden- und Produktstammdaten synchronisieren, Zahlungseingänge buchen, Lagerbestände verwalten, SEPA-Lastschriften generieren und Webhooks für Echtzeit-Events nutzen.",
            },
            {
              question:
                "Unterstützt die Automatisierung E-Rechnungen (ZUGFeRD/XRechnung)?",
              answer:
                "Ja, die easybill-API unterstützt die automatische Generierung von E-Rechnungen im ZUGFeRD 2.x (PDF/A-3 mit eingebettetem XML) und XRechnung 3.0 (reines XML) Format. Der Workflow setzt das richtige Format je nach Kundentyp automatisch – Pflichtformat für B2G und zunehmend Standard im B2B.",
            },
            {
              question:
                "Wie funktioniert das automatische Mahnwesen?",
              answer:
                "Der n8n-Workflow überwacht alle offenen Rechnungen in easybill über die API. Bei Überschreiten des Zahlungsziels werden automatisch Mahnungen erstellt und versendet – mit eskalierenden Stufen (freundliche Erinnerung, 1. Mahnung, 2. Mahnung). Zahlungseingänge stoppen den Mahnprozess automatisch. Eskalation an das Team bei kritischen Fällen.",
            },
            {
              question:
                "Können wir unsere bestehenden easybill-Vorlagen und PDF-Templates weiternutzen?",
              answer:
                "Ja, absolut. Die API nutzt Ihre bestehenden PDF-Templates in easybill. Alle Layouts, Logos und Texte bleiben erhalten. Der Workflow referenziert Ihr Template per ID und generiert Dokumente exakt in Ihrem Corporate Design.",
            },
            {
              question:
                "Wie wird die Verbindung zwischen ERP und easybill hergestellt?",
              answer:
                "n8n orchestriert den Datenfluss bidirektional: Neue Aufträge im ERP lösen die Dokumentenerstellung in easybill aus. Kundenstammdaten werden synchron gehalten. Zahlungsinformationen fließen zurück ins ERP. Die Authentifizierung erfolgt per API-Key (Basic Auth oder Bearer Token) mit Rate Limiting je nach easybill-Tarif.",
            },
            {
              question: "Wie lange dauert die Implementierung?",
              answer:
                "Phase 1 (1-2 Wochen): Rechnungsautomatisierung – Aufträge zu Rechnungen. Phase 2 (1-2 Wochen): Kunden- und Produktsynchronisation. Phase 3 (1-2 Wochen): Mahnwesen und Zahlungszuordnung. Phase 4 (1 Woche): DATEV-Export und Reporting. Gesamtdauer: 4-7 Wochen, mit schrittweiser Inbetriebnahme.",
            },
          ]}
        />
      </ContentWrapper>
    </>
  );
}
