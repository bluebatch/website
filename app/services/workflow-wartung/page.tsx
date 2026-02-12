import type { Metadata } from "next";
import Image from "next/image";
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
import Customer from "@/components/customer/customer";
import ConsultationCtaDefault from "@/components/consultation-cta-default";
import StatsList from "@/components/stats-list";
import IntroBox from "@/components/intro-box";
import { AnimatedNumber } from "@/components/cards/kpi-card";
import Icon from "@/components/icon";
import TabGroup, {
  TabNavigation,
  TabItem,
  TabContent,
} from "@/components/tab-group";

export const metadata: Metadata = {
  title: "Workflow-Wartung & Servicevertrag | BlueBatch",
  description:
    "Professionelle Wartung Ihrer n8n-Workflows. 24/7 Monitoring, proaktive Updates, 99,9% Uptime-Garantie.",
  openGraph: {
    title: "Workflow-Wartung & Servicevertrag | BlueBatch",
    description:
      "Professionelle Wartung Ihrer n8n-Workflows mit 24/7 Monitoring und 99,9% Uptime-Garantie.",
    type: "website",
    locale: "de_DE",
    siteName: "BlueBatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "BlueBatch Workflow-Wartung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workflow-Wartung & Servicevertrag | BlueBatch",
    description:
      "Professionelle Wartung Ihrer n8n-Workflows mit 24/7 Monitoring und 99,9% Uptime-Garantie.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/services/workflow-wartung",
  },
};

const benefits = [
  {
    value: 87,
    suffix: "%",
    label: "Reduzierte Ausfallzeiten durch proaktives Monitoring",
  },
  {
    value: 60,
    suffix: "%",
    label: "Schnellere Executions nach Performance-Optimierung",
  },
  {
    value: 220,
    suffix: "%",
    label: "ROI in 6-9 Monaten durch Automatisierung",
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime-Garantie mit Professional SLA",
  },
];

const pricingTiers = [
  {
    name: "Small",
    subtitle: "Base",
    price: 1000,
    priceSuffix: "",
    workflowCount: 5,
    workflowPrefix: "",
    workflowsLabel: "Workflows",
    sla: "48 Stunden",
    credits: "4 Stunden",
    features: [
      { label: "Proaktive Updates", highlight: false },
      { label: "Performance-Optimierung", highlight: false },
    ],
  },
  {
    name: "Medium",
    subtitle: "",
    price: 3000,
    priceSuffix: "",
    workflowCount: 15,
    workflowPrefix: "",
    workflowsLabel: "Workflows",
    sla: "24 Stunden",
    credits: "8 Stunden",
    features: [
      { label: "Proaktive Updates", highlight: false },
      { label: "Performance-Optimierung", highlight: false },
      { label: "Proactive Refactoring", highlight: true },
    ],
  },
  {
    name: "Large",
    subtitle: "Enterprise",
    price: 5000,
    priceSuffix: "+",
    workflowCount: 15,
    workflowPrefix: "Ab ",
    workflowsLabel: "Workflows",
    sla: "12 Stunden oder individuell",
    credits: "12 Stunden",
    features: [
      { label: "Proaktive Updates", highlight: false },
      { label: "Performance-Optimierung", highlight: false },
      { label: "Proactive Refactoring", highlight: true },
      { label: "Dedicated Support", highlight: true },
    ],
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>n8n Services</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Workflow-Wartung & Servicevertrag
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Ihre Workflows laufen – wir sorgen dafür, dass es so bleibt.
              Proaktives Monitoring, regelmäßige Updates und
              Performance-Optimierung. Fokussieren Sie sich auf Ihr Business,
              wir kümmern uns um die Technik.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Servicevertrag anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              24/7 Monitoring • 99,9% Uptime • Proaktive Updates
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

      {/* Introduction Text */}
      <ContentWrapper>
        <div className="max-w-4xl mx-auto text-center">
          <Typo.Paragraph className="text-xl text-gray-700 leading-relaxed">
            Workflows sind das Herzstück Ihrer Automatisierung – doch ohne
            kontinuierliche Wartung können sie schnell zum Risikofaktor werden.
            API-Änderungen, n8n-Updates oder steigende Datenvolumen führen zu
            Ausfällen und Inkonsistenzen. Mit unserem Wartungsservice bleiben
            Ihre Workflows stabil, performant und zukunftssicher.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* Stats */}
      <ContentWrapper background="bg-gradient-to-br from-primary-700 to-primary-900">
        <StatsList stats={benefits} cols={4} />
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>

      {/* Maintenance Services */}
      <ContentWrapper background="bg-gray-100">
        <IntroBox>
          <IntroBox.PreHeadline>Workflow-as-a-Service</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Was umfasst die Workflow-Wartung?
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Unsere Wartungsverträge decken alle Aspekte der Workflow-Pflege ab –
            von der Überwachung bis zur Optimierung.
          </IntroBox.Paragraph>
        </IntroBox>

        <TabGroup defaultValue="infrastructure">
          <TabNavigation>
            <TabItem value="infrastructure">Betrieb & Infrastruktur</TabItem>
            <TabItem value="monitoring">Monitoring & Alerting</TabItem>
            <TabItem value="api-management">API & Token Management</TabItem>
            <TabItem value="troubleshooting">Fehlerbehebung & Support</TabItem>
            <TabItem value="optimization">Performance & Optimierung</TabItem>
            <TabItem value="reporting">Reporting & Transparenz</TabItem>
          </TabNavigation>

          <TabContent value="infrastructure">
            <SimpleGrid cols={2} className="items-center gap-12">
              <div>
                <Typo.H3 className="mb-4">
                  Betrieb & Infrastruktur-Management
                </Typo.H3>
                <Typo.Paragraph className="text-gray-700 mb-6">
                  Wir übernehmen die technische Verantwortung für Ihre
                  n8n-Instanz. Ob in der Cloud oder auf Ihrer eigenen
                  Infrastruktur (On-Premise) – wir sorgen für die Installation
                  von Sicherheits-Updates, das Patch-Management und die
                  Überwachung der Server-Ressourcen.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>Cloud & On-Premise Support</Typo.ListItem>
                  <Typo.ListItem>Sicherheits-Updates & Patches</Typo.ListItem>
                  <Typo.ListItem>
                    Server-Ressourcen-Monitoring (CPU, RAM, Storage)
                  </Typo.ListItem>
                  <Typo.ListItem>n8n Platform-Updates</Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/process-automation.jpg"
                  alt="Infrastructure Management"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="monitoring">
            <SimpleGrid cols={2} className="items-center gap-12">
              <div>
                <Typo.H3 className="mb-4">
                  Aktives Monitoring & Echtzeit-Alarmierung
                </Typo.H3>
                <Typo.Paragraph className="text-gray-700 mb-6">
                  Wir installieren einen speziellen „Monitoring-Agenten", der
                  all Ihre Workflows rund um die Uhr überwacht. Bei Fehlern
                  werden wir sofort alarmiert – oft bevor Sie oder Ihre
                  Mitarbeiter das Problem überhaupt bemerken.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    24/7 Workflow-Überwachung mit Monitoring-Agent
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Echtzeit-Alarmierung bei Fehlern
                  </Typo.ListItem>
                  <Typo.ListItem>Performance-Tracking</Typo.ListItem>
                  <Typo.ListItem>
                    Proaktive Benachrichtigung vor Ausfällen
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/business-analytics.jpg"
                  alt="24/7 Monitoring Dashboard"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="api-management">
            <SimpleGrid cols={2} className="items-center gap-12">
              <div>
                <Typo.H3 className="mb-4">
                  Management von API-Keys & Zugangsdaten
                </Typo.H3>
                <Typo.Paragraph className="text-gray-700 mb-6">
                  Keine abgebrochenen Prozesse mehr durch abgelaufene Passwörter
                  oder „Token Expired"-Meldungen. Wir kümmern uns um die
                  kontinuierliche Validierung und Erneuerung aller API-Schlüssel
                  und OAuth-Verbindungen sowie proaktive Anpassungen bei
                  API-Änderungen.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Kontinuierliche API-Key-Validierung
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Automatische OAuth-Token-Erneuerung
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Proaktive API-Anpassung bei Schnittstellenänderungen
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Rechtzeitige Migration vor API-Abschaltungen
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/data-flow.jpg"
                  alt="API Management"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="troubleshooting">
            <SimpleGrid cols={2} className="items-center gap-12">
              <div>
                <Typo.H3 className="mb-4">
                  Fehlerbehebung in Subsystemen
                </Typo.H3>
                <Typo.Paragraph className="text-gray-700 mb-6">
                  Wenn externe Tools (wie Ihr CRM, ERP oder Marketing-Tools)
                  Fehlermeldungen senden oder ihre Datenstruktur ändern,
                  analysieren wir die Logs und beheben die Schnittstellen-Fehler
                  umgehend.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Log-Analyse bei externen System-Fehlern
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Schnittstellenanpassung bei Datenstruktur-Änderungen
                  </Typo.ListItem>
                  <Typo.ListItem>
                    API-Timeout & Connection-Handling
                  </Typo.ListItem>
                  <Typo.ListItem>
                    CRM/ERP/Marketing-Tool-Integration-Support
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/business-analytics.jpg"
                  alt="Error Resolution"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="optimization">
            <SimpleGrid cols={2} className="items-center gap-12">
              <div>
                <Typo.H3 className="mb-4">
                  System-Optimierung & Refactoring
                </Typo.H3>
                <Typo.Paragraph className="text-gray-700 mb-6">
                  Damit Ihre Automatisierungen auch bei wachsendem Datenvolumen
                  stabil laufen, optimieren wir die Logik regelmäßig. Das
                  verhindert Systemabstürze und schont Ihre Server-Ressourcen.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Workflow-Refactoring bei wachsendem Datenvolumen
                  </Typo.ListItem>
                  <Typo.ListItem>Memory-Management</Typo.ListItem>
                  <Typo.ListItem>Batch-Operations</Typo.ListItem>
                  <Typo.ListItem>
                    Optimierung zur Vermeidung von Systemabstürzen
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/web-development.jpg"
                  alt="Performance Optimization"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>

          <TabContent value="reporting">
            <SimpleGrid cols={2} className="items-center gap-12">
              <div>
                <Typo.H3 className="mb-4">Monatlicher Status-Report</Typo.H3>
                <Typo.Paragraph className="text-gray-700 mb-6">
                  Sie erhalten eine monatliche Übersicht über die Erfolgsquote
                  Ihrer Workflows sowie eine Aufstellung der im Hintergrund
                  durchgeführten Optimierungen – so wird der Wert Ihrer
                  Automatisierung für Sie transparent.
                </Typo.Paragraph>
                <Typo.List>
                  <Typo.ListItem>
                    Monatliche Workflow-Erfolgsquote
                  </Typo.ListItem>
                  <Typo.ListItem>
                    Übersicht durchgeführter Optimierungen
                  </Typo.ListItem>
                  <Typo.ListItem>Transparente Wertdarstellung</Typo.ListItem>
                  <Typo.ListItem>
                    Performance-Metriken & Uptime-Statistiken
                  </Typo.ListItem>
                </Typo.List>
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/business-analytics.jpg"
                  alt="Status Reporting"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                />
              </div>
            </SimpleGrid>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      {/* Benefits Section */}
      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div className="relative aspect-square">
            <Image
              src="/images/process-automation.jpg"
              alt="Workflow-Optimierung"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <Typo.H2 className="mb-6">Warum Workflow-Wartung?</Typo.H2>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Kostenplanbarkeit
                </h4>
                <p className="text-gray-600">
                  Fixe monatliche Kosten statt unerwarteter Notfall-Reparaturen.
                  Transparente Budgetplanung für Ihre IT-Infrastruktur.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Minimierte Ausfallzeiten
                </h4>
                <p className="text-gray-600">
                  Proaktives Monitoring verhindert 85-90% aller Ausfälle bevor
                  sie Ihr Business beeinträchtigen.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Fokus auf Kerngeschäft
                </h4>
                <p className="text-gray-600">
                  Ihr Team konzentriert sich auf strategische Aufgaben, während
                  wir die technische Wartung übernehmen.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Kontinuierliche Verbesserung
                </h4>
                <p className="text-gray-600">
                  Regelmäßige Performance-Optimierung führt zu 60% schnelleren
                  Workflow-Executions.
                </p>
              </div>
            </div>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Pricing Section */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>Workflow-Servicevertrag</IntroBox.Headline>
          <IntroBox.Paragraph>
            Der Preis richtet sich nach der Anzahl Ihrer Kundenworkflows – nicht
            nach technischen n8n Workflows. Ein Kundenworkflow wie
            &quot;Rechnungseingang&quot; kann aus mehreren n8n Workflows
            bestehen und wird als ein Workflow gezählt.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3}>
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header */}
              <div className="px-8 pt-8 pb-6">
                <div className="flex items-baseline justify-between mb-2">
                  <Typo.H3 className="text-lg font-semibold text-gray-900">
                    {tier.name}
                  </Typo.H3>
                  {tier.subtitle && (
                    <span className="text-xs text-gray-500 font-medium">
                      {tier.subtitle}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900 tracking-tight">
                    <AnimatedNumber
                      value={tier.price}
                      suffix={tier.priceSuffix}
                    />
                    {" €"}
                  </span>
                  <span className="text-gray-500 text-sm">/Monat</span>
                </div>
              </div>

              {/* Workflow Count - Highlighted */}
              <div className="mx-8 mb-6 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 shadow-lg">
                <div className="flex items-baseline justify-center gap-3">
                  <div className="flex items-baseline gap-2">
                    {tier.workflowPrefix && (
                      <span className="text-2xl font-bold text-white">
                        {tier.workflowPrefix}
                      </span>
                    )}
                    <span className="text-5xl font-bold text-white tracking-tight">
                      <AnimatedNumber value={tier.workflowCount} />
                    </span>
                  </div>
                  <span className="text-primary-100 text-sm font-medium">
                    {tier.workflowsLabel}
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="px-8 pb-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Response SLA</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {tier.sla}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-600">
                      Entwicklung/Monat
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      {tier.credits}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-2">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Icon.Checkmark
                        className={
                          feature.highlight
                            ? "text-primary-600"
                            : "text-gray-400"
                        }
                      />
                      <span
                        className={`text-sm ${
                          feature.highlight
                            ? "text-gray-900 font-medium"
                            : "text-gray-600"
                        }`}
                      >
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Contact CTA */}
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
