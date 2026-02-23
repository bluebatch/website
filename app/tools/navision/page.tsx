import type { Metadata } from "next";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import SimpleGrid from "@/components/simple-grid";
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
import ConsultationCtaDefault from "@/components/consultation-cta-default";
import IntroBox from "@/components/intro-box";
import SimpleCard from "@/components/cards/simple-card";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/timeline-as-steps";

export const metadata: Metadata = {
  title: "Microsoft Dynamics NAV (Navision) Automatisierung | Bluebatch",
  description:
    "Automatisieren Sie Ihre Navision/Dynamics 365 Business Central Prozesse mit n8n. Auftragsimport, Rechnungserstellung und Daten-Synchronisation.",
  openGraph: {
    title: "Microsoft Dynamics NAV (Navision) Automatisierung | Bluebatch",
    description:
      "Navision-Prozesse automatisieren mit n8n – Aufträge, Rechnungen, Lagerbestände und mehr.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Navision Automatisierung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microsoft Dynamics NAV (Navision) Automatisierung | Bluebatch",
    description:
      "Navision-Prozesse automatisieren: Aufträge, Rechnungen, Lagerbestände.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/tools/navision",
  },
};

const modules = [
  {
    icon: "💰",
    title: "Finanzmanagement",
    description:
      "Finanzbuchhaltung, Anlagenverwaltung, Cashflow-Prognosen und Budgetierung – das Herzstück jedes ERP-Systems.",
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
    title: "Rechnungserstellung",
    description:
      "Automatisierte Rechnungsgenerierung und -versand basierend auf Lieferscheinen und Aufträgen.",
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
              Microsoft Dynamics NAV (Navision) automatisieren
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Navision ist das bewährte ERP-System für den Mittelstand. Wir
              automatisieren Ihre Navision-Prozesse über n8n und schaffen
              nahtlose Verbindungen zu Ihren anderen Business-Systemen.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Navision-Automatisierung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Dynamics 365 Business Central • ERP • Automatisierung via n8n
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

      <ContentWrapper background="bg-gray-50">
        <IntroBox>
          <IntroBox.Headline>Navision Module</IntroBox.Headline>
          <IntroBox.Paragraph>
            Microsoft Dynamics NAV bietet umfassende ERP-Funktionalität für den
            Mittelstand – und jedes Modul lässt sich über n8n automatisieren.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="gap-8">
          {modules.map((module, index) => (
            <SimpleCard key={index} icon={<>{module.icon}</>}>
              <Typo.H3 className="mb-3 text-xl">{module.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600 text-sm">
                {module.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
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
            <Typo.Paragraph className="text-gray-600">
              Wir analysieren Ihre bestehenden Navision-Prozesse, identifizieren
              Automatisierungspotenziale und definieren die
              Schnittstellen-Anforderungen.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mb-2">API-Anbindung</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Anbindung von Navision über OData, SOAP oder REST-APIs an n8n.
              Bei Bedarf entwickeln wir Custom Nodes für spezifische
              Navision-Funktionen.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mb-2">Workflow-Automatisierung</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              Erstellung der automatisierten Workflows in n8n – von einfachen
              Datensynchronisationen bis zu komplexen Multi-System-Prozessen.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3 className="mb-2">Monitoring & Betrieb</Typo.H3>
            <Typo.Paragraph className="text-gray-600">
              24/7 Monitoring Ihrer automatisierten Prozesse, proaktive
              Fehlererkennung und kontinuierliche Optimierung.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      <ContentWrapper background="bg-gray-50">
        <IntroBox>
          <IntroBox.Headline>Typische Automatisierungen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Diese Navision-Prozesse automatisieren wir am häufigsten
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-8">
          {automations.map((automation, index) => (
            <SimpleCard key={index} icon={<>{automation.icon}</>}>
              <Typo.H3 className="mb-3 text-xl">{automation.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600 text-sm">
                {automation.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
