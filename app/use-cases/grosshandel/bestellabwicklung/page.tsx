import type { Metadata } from "next";
import Image from "next/image";
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
import ComparisonCard, {
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
  ComparisonFooter,
} from "@/components/cards/comparison-card";
import CardShowcase from "@/components/cards/card-showcase";
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
  title: "Automatisierte Bestellabwicklung",
  description:
    "Bestellungen automatisch erfassen, validieren und weiterleiten – ohne manuelle Eingriffe.",
};

export const metadata: Metadata = {
  title: "Automatisierte Bestellabwicklung – Großhandel",
  description:
    "Wie bluebatch die Bestellabwicklung im Großhandel automatisiert – von der Erfassung bis zur Auslieferung.",
  openGraph: {
    title: "Automatisierte Bestellabwicklung – Großhandel",
    description:
      "Wie bluebatch die Bestellabwicklung im Großhandel automatisiert.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatisierte Bestellabwicklung – Großhandel",
    description:
      "Wie bluebatch die Bestellabwicklung im Großhandel automatisiert.",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Bestellabwicklung</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Von der Bestellung zur Auslieferung – vollautomatisch
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Bestellungen werden validiert, an das Lager geroutet, kommissioniert
              und versendet – alles orchestriert durch n8n. 80-90% schnellere
              Bearbeitung, 95%+ Auftragsgenauigkeit.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Prozessanalyse anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              End-to-End Fulfillment Automatisierung
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage src="/images/order-processing.png" type="image" />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div className="relative aspect-video">
            <Image
              src="/images/manual-order-processing.png"
              alt="Manuelle Bestellabwicklung"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
              <IntroBox.Headline>
                5-8% aller B2B-Bestellungen werden fehlerhaft verarbeitet
              </IntroBox.Headline>
              <IntroBox.Subline>
                Bei 1.500 Aufträgen pro Tag bedeutet das 75-120 Fehler täglich.
                Jeder Pick-Fehler kostet 130-150 € zur Korrektur (Retoure,
                Neuversand, Kundenservice).
              </IntroBox.Subline>
              <IntroBox.Subline>
                Dazu kommt: 2-3 Tage Durchlaufzeit statt möglicher 2-4 Stunden.
                Kunden warten, während Bestellungen manuell durch Abteilungen
                weitergereicht werden.
              </IntroBox.Subline>
            </IntroBox>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper background="bg-gray-900">
        <IntroBox dark>
          <IntroBox.PreHeadline>Workflow-Architektur</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So automatisieren wir Ihre Bestellabwicklung
          </IntroBox.Headline>
        </IntroBox>

        <CardShowcase>
          <CardShowcase.Item size="large">
            <CardShowcase.Image
              src="/images/validation-check.png"
              alt="Auftragsvalidierung"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>
                1. Validierung und Smart Routing
              </CardShowcase.Title>
              <CardShowcase.Description>
                Jede Bestellung wird gegen ERP-Daten validiert: Kundenstatus,
                Kreditlimit, Artikelverfügbarkeit, Preise. Intelligentes Routing
                wählt das optimale Lager basierend auf Bestand und Entfernung.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>

          <CardShowcase.Item size="small">
            <CardShowcase.Image
              src="/images/warehouse-picking.png"
              alt="Kommissionierung"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>2. Optimierte Kommissionierung</CardShowcase.Title>
              <CardShowcase.Description>
                Batch-Picking für ähnliche Aufträge, Laufweg-Optimierung,
                Barcode-Scanning zur Fehlervermeidung. Pick-Listen automatisch
                ans WMS oder mobile Geräte.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>

          <CardShowcase.Item size="small">
            <CardShowcase.Image
              src="/images/shipping-automation.png"
              alt="Versandautomatisierung"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>3. Carrier-Optimierung</CardShowcase.Title>
              <CardShowcase.Description>
                Automatischer Preisvergleich zwischen Carriern. Labels per API
                generiert, Tracking-Nummern erfasst. 10-15% Versandkosten-Ersparnis.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>

          <CardShowcase.Item size="large">
            <CardShowcase.Image
              src="/images/customer-notification.png"
              alt="Kundenkommunikation"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>
                4. Proaktive Kundenkommunikation
              </CardShowcase.Title>
              <CardShowcase.Description>
                Automatische Benachrichtigungen: Auftragsbestätigung,
                Versandmeldung mit Tracking-Link, Zustellbestätigung. Proaktive
                Updates bei Verzögerungen. 60-70% weniger Kundenanfragen.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>
        </CardShowcase>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>ROI-Kalkulation</IntroBox.PreHeadline>
          <IntroBox.Headline>
            390.000 €+ jährliche Ersparnis bei 1.500 Aufträgen/Tag
          </IntroBox.Headline>
        </IntroBox>

        <ComparisonCard className="mt-10">
          <BeforeCard>
            <ComparisonHeadline>Vorher: Manuell</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>5-8% Fehlerrate = 75-120 Fehler/Tag</ComparisonListItem>
              <ComparisonListItem>140 €/Fehler × 100 = 14.000 €/Tag</ComparisonListItem>
              <ComparisonListItem>Arbeitskosten: 8 Vollzeitkräfte @ 45.000 €</ComparisonListItem>
              <ComparisonListItem>2-3 Tage Durchlaufzeit</ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              <span className="text-xl font-bold text-red-700">
                Gesamt: ~720.000 €/Jahr (nur Fehler)
              </span>
            </ComparisonFooter>
          </BeforeCard>

          <AfterCard>
            <ComparisonHeadline>Nachher: Automatisiert</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>0,5-1% Fehlerrate = 8-15 Fehler/Tag</ComparisonListItem>
              <ComparisonListItem>140 €/Fehler × 12 = 1.700 €/Tag</ComparisonListItem>
              <ComparisonListItem>Arbeitskosten: 3 Vollzeitkräfte für Sonderfälle</ComparisonListItem>
              <ComparisonListItem>2-4 Stunden Durchlaufzeit</ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>
              <span className="text-xl font-bold text-green-700">
                Gesamt: ~110.000 €/Jahr
              </span>
            </ComparisonFooter>
          </AfterCard>
        </ComparisonCard>

        <SavingsCard>
          <SavingsBadge>Automatisierte Bestellabwicklung</SavingsBadge>
          <SavingsItems>
            <SavingsItem label="Jährliche Ersparnis" highlight>
              390.000 €+
            </SavingsItem>
            <SavingsItem label="Amortisation">
              2-3 Monate
            </SavingsItem>
            <SavingsItem label="Weniger manuelle Arbeit">
              85%
            </SavingsItem>
          </SavingsItems>
        </SavingsCard>
      </ContentWrapper>

      <ContentWrapper background="bg-primary-800">
        <div className="py-8">
          <IntroBox dark>
            <IntroBox.PreHeadline>Integration</IntroBox.PreHeadline>
            <IntroBox.Headline>
              Nahtlose Anbindung an Ihre Systeme
            </IntroBox.Headline>
            <IntroBox.Subline>
              Die Automatisierung integriert sich mit Ihrem ERP, WMS und
              Versanddienstleistern – ohne bestehende Systeme zu ersetzen.
            </IntroBox.Subline>
          </IntroBox>

          <SimpleGrid cols={4} className="mt-10">
            <SimpleCard className="bg-white/10! border-white/20! text-white text-center">
              <Typo.H3 className="text-white!">ERP-Systeme</Typo.H3>
              <Typo.Paragraph className="text-gray-300! text-sm!">
                SAP, NetSuite, Dynamics, Odoo
              </Typo.Paragraph>
            </SimpleCard>
            <SimpleCard className="bg-white/10! border-white/20! text-white text-center">
              <Typo.H3 className="text-white!">WMS</Typo.H3>
              <Typo.Paragraph className="text-gray-300! text-sm!">
                ShipHero, SkuVault, Fishbowl
              </Typo.Paragraph>
            </SimpleCard>
            <SimpleCard className="bg-white/10! border-white/20! text-white text-center">
              <Typo.H3 className="text-white!">Carrier</Typo.H3>
              <Typo.Paragraph className="text-gray-300! text-sm!">
                DHL, UPS, FedEx, ShipStation
              </Typo.Paragraph>
            </SimpleCard>
            <SimpleCard className="bg-white/10! border-white/20! text-white text-center">
              <Typo.H3 className="text-white!">E-Commerce</Typo.H3>
              <Typo.Paragraph className="text-gray-300! text-sm!">
                Shopify, WooCommerce, Magento
              </Typo.Paragraph>
            </SimpleCard>
          </SimpleGrid>
        </div>
      </ContentWrapper>

      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>

      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Wie werden Bestellungen verarbeitet, die als PDF per E-Mail eingehen?",
              answer:
                "Unser n8n-Workflow nutzt KI-gestützte Dokumentenextraktion (GPT-4 Vision), um PDF-Bestellungen automatisch zu lesen. Alle relevanten Daten (Kundeninfo, Positionen, Mengen, Lieferadresse) werden extrahiert und direkt ins ERP oder Auftragssystem übertragen. Das eliminiert 90% der manuellen Eingabe und reduziert Fehler von 10% auf unter 1%.",
            },
            {
              question:
                "Was passiert, wenn ein bestellter Artikel nicht auf Lager ist?",
              answer:
                "Das System prüft die Verfügbarkeit in Echtzeit über alle Lager. Bei Engpässen werden automatisch alternative Lagerstandorte geprüft, Nachbestell-Termine aus offenen POs ermittelt, Teillieferungs-Optionen angeboten und Backorders angelegt. Der Kunde wird proaktiv informiert.",
            },
            {
              question:
                "Kann das System mit unserem bestehenden WMS und ERP integrieren?",
              answer:
                "Ja, n8n ist für Integrations-Flexibilität gebaut. Wir verbinden per API mit ERP-Systemen (SAP, NetSuite, Dynamics, Odoo), WMS-Plattformen (ShipHero, SkuVault, Fishbowl), Versanddienstleistern (DHL, UPS, FedEx) und E-Commerce-Plattformen. Bei Legacy-Systemen arbeiten wir mit Datenbank-Queries oder EDI.",
            },
            {
              question:
                "Wie lange dauert die Implementierung?",
              answer:
                "Die Implementierung erfolgt in Phasen: Phase 1 (2-3 Wochen): Auftragserfassung parallel zum bestehenden Prozess. Phase 2 (2-3 Wochen): Lagervalidierung im Shadow-Mode. Phase 3 (2-4 Wochen): Versandautomatisierung schrittweise. Phase 4 (1-2 Wochen): Exception Handling. Gesamtzeit: 8-12 Wochen mit voller Kontrolle.",
            },
          ]}
        />
      </ContentWrapper>
    </>
  );
}
