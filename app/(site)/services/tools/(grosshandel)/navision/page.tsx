import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import GeoSummary from "@/components/ui/geo-summary";
import IntroBox from "@/components/ui/intro-box";
import SimpleCard from "@/components/cards/simple-card";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";

export const metadata: Metadata = {
  title: "Navision ERP automatisieren: Rechnungen, EDI, Buchhaltung | Bluebatch",
  description:
    "Automatisierung für Navision (Dynamics NAV): Rechnungsverarbeitung, EDI-Anbindung, Buchhaltung und ERP-Schnittstellen über n8n. Von der Analyse bis zum laufenden Betrieb.",
  openGraph: {
    title: "Navision ERP automatisieren: Rechnungen, EDI, Buchhaltung | Bluebatch",
    description:
      "Rechnungsverarbeitung, EDI und Buchhaltung in Navision automatisieren - über n8n an Webshop, DMS und CRM angebunden.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Navision%20ERP%20automatisieren&eyebrow=Tools",
        width: 1200,
        height: 630,
        alt: "Bluebatch Navision Automatisierung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Navision ERP automatisieren: Rechnungen, EDI, Buchhaltung | Bluebatch",
    description:
      "Rechnungsverarbeitung, EDI und Buchhaltung in Navision automatisieren.",
    images: ["/og?title=Navision%20ERP%20automatisieren&eyebrow=Tools"],
  },
  alternates: {
    canonical: "/services/tools/navision",
  },
};

const modules = [
  {
    icon: "💰",
    title: "Finanzmanagement",
    description:
      "Finanzbuchhaltung, Anlagenverwaltung, Cashflow-Prognosen und Budgetierung - das Herzstück jedes ERP-Systems.",
  },
  {
    icon: "📦",
    title: "Supply Chain",
    description:
      "Einkauf, Lagerverwaltung, Bestandsplanung und Lieferantenmanagement für optimierte Lieferketten.",
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    description:
      "Fertigungsplanung, Stücklisten, Kapazitätsplanung und Produktionsaufträge für produzierende Unternehmen.",
  },
  {
    icon: "👥",
    title: "CRM & Vertrieb",
    description:
      "Kundenverwaltung, Verkaufschancen, Angebotserstellung und Auftragsverwaltung an einem Ort.",
  },
  {
    icon: "👤",
    title: "Personalwesen",
    description:
      "Mitarbeiterverwaltung, Zeiterfassung und Gehaltsabrechnung für effizientes HR-Management.",
  },
  {
    icon: "📊",
    title: "Reporting & BI",
    description:
      "Integration mit Power BI und Excel für umfassende Geschäftsanalysen und Echtzeit-Dashboards.",
  },
];

const automations = [
  {
    icon: "📋",
    title: "Auftragsimport",
    description:
      "Automatischer Import von Kundenbestellungen aus Webshops, E-Mail oder EDI direkt in Navision.",
  },
  {
    icon: "🧾",
    title: "Rechnungsverarbeitung",
    description:
      "Eingangsrechnungen per KI auslesen, gegen Bestellung und Wareneingang prüfen und als Beleg in Navision buchen. Ausgangsrechnungen werden aus Lieferscheinen erzeugt und versendet.",
  },
  {
    icon: "🔗",
    title: "EDI-Anbindung",
    description:
      "EDI-Nachrichten von Kunden und Lieferanten (ORDERS, DESADV, INVOIC) empfangen, in Navision-Belege übersetzen und Rückmeldungen automatisch zurückspielen.",
  },
  {
    icon: "📒",
    title: "Kreditorenbuchhaltung",
    description:
      "Kontoauszüge, Belege und Zahlungseingänge automatisch zuordnen und in der Navision-Finanzbuchhaltung verbuchen. In der Kreditorenbuchhaltung laufen Eingangsrechnung, Freigabe und Zahllauf ohne manuelles Nachtippen - inklusive Übergabe an DATEV.",
  },
  {
    icon: "📦",
    title: "Lagerbestandsabgleich",
    description:
      "Echtzeit-Synchronisation von Lagerbeständen zwischen Navision und Webshops oder Marktplätzen.",
  },
  {
    icon: "🔄",
    title: "Kundendaten-Sync",
    description:
      "Automatischer Abgleich von Kundenstammdaten zwischen Navision und CRM-Systemen.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Tools</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Navision automatisieren: Rechnungsverarbeitung, EDI und
              Buchhaltung
            </Hero2ColumnHeadline>
            <GeoSummary>
              Bluebatch automatisiert Prozesse in Microsoft Dynamics NAV
              (Navision) und Dynamics 365 Business Central über n8n - vor allem
              Rechnungsverarbeitung, EDI-Anbindung, Kreditorenbuchhaltung und
              die ERP-Schnittstellen zu Webshop, DMS und CRM. Angebunden wird
              über OData, SOAP oder REST, bei Bedarf über eigene n8n-Nodes.
            </GeoSummary>
            <Hero2ColumnDescription>
              Navision ist das bewährte ERP-System für den Mittelstand - und
              der Ort, an dem Rechnungen, Belege und Bestellungen bis heute
              größtenteils von Hand landen. Genau diese wiederkehrenden
              Prozesse automatisieren wir über n8n.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Navision-Automatisierung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Rechnungsverarbeitung • EDI • Buchhaltung • ERP-Schnittstellen
              via n8n
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/business-analytics.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Module</IntroBox.PreHeadline>
          <IntroBox.Headline>Navision Module</IntroBox.Headline>
          <IntroBox.Paragraph>
            Microsoft Dynamics NAV bietet umfassende ERP-Funktionalität für den
            Mittelstand - und jedes Modul lässt sich über n8n automatisieren.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="gap-8">
          {modules.map((module, index) => (
            <SimpleCard key={index}>
              <SimpleCard.Icon>
                <>{module.icon}</>
              </SimpleCard.Icon>
              <Typo.H3 className="mb-3 text-xl">{module.title}</Typo.H3>
              <Typo.Paragraph textColor="muted" size="sm">
                {module.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Unser Prozess</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So automatisieren wir Ihre Navision-Prozesse
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            In vier Schritten von der Analyse bis zum laufenden Betrieb
          </IntroBox.Paragraph>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mb-2">Analyse & Bestandsaufnahme</Typo.H3>
            <Typo.Paragraph textColor="muted">
              Wir analysieren Ihre bestehenden Navision-Prozesse, identifizieren
              Automatisierungspotenziale und definieren die
              Schnittstellen-Anforderungen.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mb-2">API-Anbindung</Typo.H3>
            <Typo.Paragraph textColor="muted">
              Anbindung von Navision über OData, SOAP oder REST-APIs an n8n.
              Bei Bedarf entwickeln wir Custom Nodes für spezifische
              Navision-Funktionen.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mb-2">Workflow-Automatisierung</Typo.H3>
            <Typo.Paragraph textColor="muted">
              Erstellung der automatisierten Workflows in n8n - von einfachen
              Datensynchronisationen bis zu komplexen Multi-System-Prozessen.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3 className="mb-2">Monitoring & Betrieb</Typo.H3>
            <Typo.Paragraph textColor="muted">
              24/7 Monitoring Ihrer automatisierten Prozesse, proaktive
              Fehlererkennung und kontinuierliche Optimierung.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Use Cases</IntroBox.PreHeadline>
          <IntroBox.Headline>Typische Automatisierungen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Diese Navision-Prozesse automatisieren wir am häufigsten -
            Rechnungsverarbeitung, EDI und Buchhaltung stehen dabei fast immer
            am Anfang
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-8">
          {automations.map((automation, index) => (
            <SimpleCard key={index}>
              <SimpleCard.Icon>
                <>{automation.icon}</>
              </SimpleCard.Icon>
              <Typo.H3 className="mb-3 text-xl">{automation.title}</Typo.H3>
              <Typo.Paragraph textColor="muted" size="sm">
                {automation.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Weiterführende Informationen */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>Weiterführende Informationen</IntroBox.Headline>
        </IntroBox>
        <Typo.Paragraph className="text-gray-600 text-center max-w-3xl mx-auto">
          Sie nutzen Navision im Großhandel? Erfahren Sie, wie wir{" "}
          <Link href="/branchen/grosshandel" className="text-primary-500 hover:underline">KI-Workflows für den Großhandel</Link> umsetzen, oder sehen Sie sich unsere{" "}
          <Link href="/services" className="text-primary-500 hover:underline">Implementierungsservices</Link> an.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
