import type { Metadata } from "next";
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
import IntroBox from "@/components/ui/intro-box";
import SimpleCard from "@/components/cards/simple-card";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import TabGroup, {
  TabNavigation,
  TabItem,
  TabContent,
} from "@/components/ui/tab-group";
import GlassCard, {
  GlassCardTitle,
  GlassCardDescription,
} from "@/components/cards/glass-card";

export const metadata: Metadata = {
  title: "Freshworks Integration & Automatisierung | Bluebatch",
  description:
    "Freshdesk, Freshsales, Freshservice und Freshchat automatisieren. n8n-Workflows, KI-Agenten und Custom Apps für Ihre Freshworks-Plattform.",
  openGraph: {
    title: "Freshworks Integration & Automatisierung | Bluebatch",
    description:
      "Freshdesk, Freshsales, Freshservice und Freshchat automatisieren. n8n-Workflows, KI-Agenten und Custom Apps für Ihre Freshworks-Plattform.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Freshworks Automatisierung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freshworks Integration & Automatisierung | Bluebatch",
    description:
      "Freshdesk, Freshsales, Freshservice und Freshchat automatisieren. n8n-Workflows und KI-Agenten.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/tools/freshworks",
  },
};

export default function Page() {
  return (
    <>
      {/* Hero */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Tools</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Freshworks – Customer Service & CRM automatisieren
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Freshworks vereint Helpdesk, CRM, IT-Service-Management und
              Marketing-Automation in einer Plattform. Wir integrieren
              Freshdesk, Freshsales, Freshservice und alle Freshworks-Produkte
              in Ihre n8n-Workflows und KI-Agenten.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Freshworks-Integration anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Freshdesk • Freshsales • Freshservice • Freshchat • Freshmarketer
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

      {/* Die Freshworks-Plattform */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Plattform</IntroBox.PreHeadline>
          <IntroBox.Headline>Die Freshworks-Plattform</IntroBox.Headline>
          <IntroBox.Paragraph>
            Ein Unternehmen, sechs Produkte, eine gemeinsame Datenbasis – was
            Freshworks von fragmentierten Tool-Landschaften unterscheidet.
          </IntroBox.Paragraph>
        </IntroBox>

        <Typo.Paragraph>
          Freshworks wurde 2010 von Girish Mathrubootham in Chennai, Indien,
          gegründet und ist heute börsennotiert (NASDAQ: FRSH). Über 60.000
          Unternehmen weltweit nutzen die Plattform, darunter zahlreiche
          europäische Mittelständler. Der Kern der Architektur ist die
          Neo-Plattform: Alle Freshworks-Produkte teilen sich eine gemeinsame
          Datenschicht. Das bedeutet, dass ein Kontakt in Freshsales derselbe
          Datensatz ist wie in Freshdesk oder Freshchat. Es gibt keinen
          manuellen Sync, keine Dubletten, keine Inkonsistenzen zwischen
          Abteilungen.
        </Typo.Paragraph>

        <Typo.H3 className="mt-8 mb-3">DSGVO-Konformität</Typo.H3>
        <Typo.Paragraph>
          Für den europäischen Markt bietet Freshworks EU-Rechenzentren
          (Frankfurt). Ein Data Processing Agreement (DPA) nach Art. 28 DSGVO
          ist verfügbar und kann direkt über das Admin-Panel abgeschlossen
          werden. Die Gerichtsbarkeit liegt bei den Berliner Gerichten. Daten
          werden per AES-256 verschlüsselt, und alle Produkte unterstützen
          Single Sign-On via SAML 2.0.
        </Typo.Paragraph>

        <Typo.H3 className="mt-8 mb-3">Freddy AI</Typo.H3>
        <Typo.Paragraph>
          Freshworks hat mit Freddy AI eine eigene KI-Schicht, die alle
          Produkte durchzieht. Sie besteht aus drei Modulen: Freddy Agent
          (autonomer Bot, der Kundenanfragen ohne menschliches Eingreifen
          beantwortet), Freddy Copilot (Echtzeit-Unterstützung für
          Support-Agenten mit Antwortvorschlägen und Zusammenfassungen) und
          Freddy Insights (Analytics-Modul, das Trends in Tickets, Deals und
          Incidents erkennt). In Kombination mit n8n-Workflows lassen sich
          Freddy-Ergebnisse als Trigger nutzen oder durch externe Datenquellen
          anreichern.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Product Navigation */}
      <ContentWrapper>
        <SimpleGrid cols={3} className="gap-4">
          {[
            { id: "freshdesk", label: "Freshdesk", sub: "Helpdesk & Ticketing", badge: "n8n-Node" },
            { id: "freshsales", label: "Freshsales", sub: "CRM für Vertrieb", badge: "n8n-Node" },
            { id: "freshservice", label: "Freshservice", sub: "IT-Service-Management", badge: "n8n-Node" },
            { id: "freshchat", label: "Freshchat", sub: "Messaging & Chatbots", badge: "HTTP API" },
            { id: "freshmarketer", label: "Freshmarketer", sub: "Marketing-Automation", badge: "HTTP API" },
            { id: "custom-apps", label: "Custom Apps", sub: "Sidebar-Widgets", badge: "SDK v3.0" },
          ].map((p) => (
            <a key={p.id} href={`#${p.id}`} className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 hover:border-primary-300 hover:shadow-md transition-all group">
              <div>
                <p className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">{p.label}</p>
                <p className="text-sm text-gray-500">{p.sub}</p>
              </div>
              <span className="shrink-0 rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700">{p.badge}</span>
            </a>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Freshdesk */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2 id="freshdesk" className="mb-6 scroll-mt-24">
          Freshdesk – Helpdesk & Ticketing
        </Typo.H2>

        <Typo.Paragraph>
          Freshdesk ist das Kernprodukt und der häufigste Einstiegspunkt in die
          Freshworks-Plattform. Es bietet Multi-Channel-Ticketing (E-Mail,
          Telefon, Chat, Social Media, WhatsApp), SLA-Management mit
          automatischer Eskalation, eine Wissensdatenbank mit
          Versionskontrolle und Freddy AI für automatische Ticket-Klassifikation.
        </Typo.Paragraph>

        <Typo.Paragraph>
          Im Großhandelskontext ist Freshdesk besonders relevant für
          Reklamationsmanagement, Bestellstatus-Anfragen und die Koordination
          zwischen Außendienst und Innendienst. Durch die
          Automatisierungsregeln (Dispatcher, Supervisor, Observer) lassen sich
          komplexe Routing-Logiken abbilden, ohne n8n zu benötigen. Wo
          Freshdesk an seine Grenzen stößt – etwa bei ERP-Abfragen oder
          Cross-System-Workflows – setzt n8n an.
        </Typo.Paragraph>

        <Typo.H3 className="mt-8 mb-3">API-Details</Typo.H3>
        <div className="mt-6 space-y-3">
          <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
            <span className="shrink-0 rounded bg-gray-200 px-2 py-0.5 text-xs font-mono font-medium text-gray-700">URL</span>
            <code className="text-sm">https://&lt;domain&gt;.freshdesk.com/api/v2/</code>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
            <span className="shrink-0 rounded bg-gray-200 px-2 py-0.5 text-xs font-mono font-medium text-gray-700">Auth</span>
            <span className="text-sm">Basic Auth (API-Key als Benutzername, &quot;X&quot; als Passwort) oder OAuth2 für Marketplace-Apps</span>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
            <span className="shrink-0 rounded bg-gray-200 px-2 py-0.5 text-xs font-mono font-medium text-gray-700">Rate</span>
            <span className="text-sm">Free eingeschränkt, Growth höher, Pro 400/min, Enterprise 500/min</span>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
            <span className="shrink-0 rounded bg-gray-200 px-2 py-0.5 text-xs font-mono font-medium text-gray-700">Node</span>
            <span className="text-sm"><code>n8n-nodes-base.freshdesk</code> – Ressourcen: Ticket, Contact</span>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
            <span className="shrink-0 rounded bg-gray-200 px-2 py-0.5 text-xs font-mono font-medium text-gray-700">Hook</span>
            <span className="text-sm">Es gibt keinen nativen Freshdesk-Trigger-Node in n8n. Stattdessen konfigurieren Sie in Freshdesk unter Admin &gt; Automations eine Regel mit der Aktion &quot;Trigger Webhook&quot; und zeigen auf einen n8n-Webhook-Node.</span>
          </div>
        </div>

        <a
          href="https://developers.freshdesk.com/api/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-primary-300 transition-all group"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">Freshdesk API-Dokumentation</p>
            <p className="text-sm text-gray-500">developers.freshdesk.com/api/</p>
          </div>
        </a>

        <Typo.H3 className="mt-8 mb-3">Automatisierungs-Szenarien</Typo.H3>

        <TabGroup defaultValue="routing">
          <TabNavigation>
            <TabItem value="routing">Ticket-Routing</TabItem>
            <TabItem value="sync">Kontakt-Sync</TabItem>
            <TabItem value="tagging">KI-Tagging</TabItem>
          </TabNavigation>
          <TabContent value="routing">
            <Typo.H3 className="mb-3">Ticket-Routing mit SLA-Monitoring</Typo.H3>
            <Typo.Paragraph>
              Webformular-Eingang wird per Webhook an n8n gesendet. Der
              Workflow erstellt ein Freshdesk-Ticket, klassifiziert es via
              KI-Prompt (z. B. Reklamation vs. Bestellanfrage), weist es per
              Skill-basiertem Routing dem passenden Team zu und startet einen
              SLA-Timer. Bei Überschreitung der Reaktionszeit eskaliert n8n
              automatisch an den Teamleiter via Slack und E-Mail.
            </Typo.Paragraph>
          </TabContent>
          <TabContent value="sync">
            <Typo.H3 className="mb-3">Kontakt-Sync mit ERP</Typo.H3>
            <Typo.Paragraph>
              Kundenstammdaten werden bidirektional zwischen Freshdesk und
              Ihrem ERP synchronisiert. Ändert sich eine Adresse im ERP,
              aktualisiert n8n den Freshdesk-Kontakt. Legt ein Agent einen
              neuen Kontakt in Freshdesk an, wird dieser im ERP als
              Interessent erstellt. So arbeiten Support und Vertrieb immer mit
              aktuellen Daten.
            </Typo.Paragraph>
          </TabContent>
          <TabContent value="tagging">
            <Typo.H3 className="mb-3">KI-Tagging & Spezialistenrouting</Typo.H3>
            <Typo.Paragraph>
              Jedes eingehende Ticket wird per n8n an ein LLM gesendet, das
              Produktkategorie, Dringlichkeit und Sentiment analysiert. Die
              Ergebnisse werden als Tags und Custom Fields in Freshdesk
              geschrieben. Basierend auf den Tags routet n8n das Ticket an
              spezialisierte Gruppen – z. B. technische Reklamationen an das
              Produktmanagement, Lieferverzögerungen an die Logistik.
            </Typo.Paragraph>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      {/* Freshsales */}
      <ContentWrapper>
        <Typo.H2 id="freshsales" className="mb-6 scroll-mt-24">
          Freshsales – CRM für den Vertrieb
        </Typo.H2>

        <Typo.Paragraph>
          Freshsales ist das CRM-Modul der Freshworks-Plattform, optimiert für
          B2B-Vertriebsprozesse. Es bietet Lead Scoring mit Freddy AI,
          Deal-Pipelines mit gewichteter Prognose, integrierte Telefonie und
          E-Mail-Tracking, Workflow-Automations (intern) und Territory
          Management für regionale Vertriebssteuerung.
        </Typo.Paragraph>

        <Typo.Paragraph>
          Für Großhändler ist Freshsales besonders interessant, weil es die
          Brücke zwischen Marketing-generierten Leads und dem
          Außendienst-Vertrieb schlägt. In Kombination mit n8n lassen sich
          Lead-Qualifizierung, Angebotserstellung und Pipeline-Reporting
          vollständig automatisieren.
        </Typo.Paragraph>

        <Typo.H3 className="mt-8 mb-3">API-Details</Typo.H3>
        <div className="mt-6 space-y-3">
          <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
            <span className="shrink-0 rounded bg-gray-200 px-2 py-0.5 text-xs font-mono font-medium text-gray-700">URL</span>
            <code className="text-sm">https://&lt;domain&gt;.freshsales.io/api/</code>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
            <span className="shrink-0 rounded bg-gray-200 px-2 py-0.5 text-xs font-mono font-medium text-gray-700">Auth</span>
            <span className="text-sm">API-Key als Header: <code>Token token=YOUR_API_KEY</code></span>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
            <span className="shrink-0 rounded bg-gray-200 px-2 py-0.5 text-xs font-mono font-medium text-gray-700">Rate</span>
            <span className="text-sm">400 Requests/Minute auf allen Plänen</span>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
            <span className="shrink-0 rounded bg-gray-200 px-2 py-0.5 text-xs font-mono font-medium text-gray-700">Node</span>
            <span className="text-sm"><code>n8n-nodes-base.freshworksCrm</code> – Ressourcen: Account, Contact, Deal, Task, Note und weitere</span>
          </div>
        </div>

        <a
          href="https://developers.freshworks.com/crm/api/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-primary-300 transition-all group"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">Freshsales API-Dokumentation</p>
            <p className="text-sm text-gray-500">developers.freshworks.com/crm/api/</p>
          </div>
        </a>

        <Typo.H3 className="mt-8 mb-3">Automatisierungs-Szenarien</Typo.H3>

        <TabGroup defaultValue="leads">
          <TabNavigation>
            <TabItem value="leads">Lead-Erfassung</TabItem>
            <TabItem value="deals">Deal-Notifications</TabItem>
            <TabItem value="kontakt-sync">Kontakt-Sync</TabItem>
          </TabNavigation>
          <TabContent value="leads">
            <Typo.H3 className="mb-3">Lead-Erfassung & Territory-Zuweisung</Typo.H3>
            <Typo.Paragraph>
              Ein Kontaktformular auf Ihrer Website sendet per Webhook an n8n.
              Der Workflow prüft die PLZ gegen Ihre
              Außendienst-Gebietsstruktur, erstellt den Lead in Freshsales mit
              dem korrekten Territory Owner und startet automatisch eine
              E-Mail-Sequenz. Der Außendienstler erhält eine Push-Nachricht
              mit allen Kontextdaten.
            </Typo.Paragraph>
          </TabContent>
          <TabContent value="deals">
            <Typo.H3 className="mb-3">Deal-Stage-Notifications</Typo.H3>
            <Typo.Paragraph>
              Bewegt sich ein Deal in Freshsales in eine neue Pipeline-Phase,
              triggert ein Webhook den n8n-Workflow. Bei &quot;Angebot
              versendet&quot; wird das Forecast-Dashboard aktualisiert. Bei
              &quot;Verhandlung&quot; wird der Vertriebsleiter via Slack
              benachrichtigt. Bei &quot;Gewonnen&quot; wird automatisch ein
              Auftrag im ERP angelegt und die Provisionsberechnung gestartet.
            </Typo.Paragraph>
          </TabContent>
          <TabContent value="kontakt-sync">
            <Typo.H3 className="mb-3">Bidirektionaler Kontakt-Sync</Typo.H3>
            <Typo.Paragraph>
              Freshsales-Kontakte und Freshdesk-Kontakte nutzen über die
              Neo-Plattform bereits denselben Datensatz. Aber was ist mit
              externen Systemen? n8n synchronisiert Kontaktdaten bidirektional
              zwischen Freshsales und Ihrem ERP, sodass
              Kundennummern, Zahlungsbedingungen und Kreditlimits immer
              aktuell sind.
            </Typo.Paragraph>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      {/* Freshservice */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2 id="freshservice" className="mb-6 scroll-mt-24">
          Freshservice – IT-Service-Management
        </Typo.H2>

        <Typo.Paragraph>
          Freshservice ist ein ITIL-konformes ITSM-Tool mit Incident-,
          Problem-, Change- und Release-Management, einer CMDB
          (Configuration Management Database), Asset-Management mit
          Auto-Discovery und einem Service-Katalog für IT- und
          Non-IT-Anfragen. Im Großhandel dient Freshservice typischerweise der
          internen IT – etwa für die Verwaltung von Kassensystemen,
          Lager-Scannern, ERP-Zugängen und VPN-Verbindungen.
        </Typo.Paragraph>

        <Typo.Paragraph>
          Der n8n-Node für Freshservice ist mit über 15 Ressourcen einer der
          umfangreichsten nativen Nodes und erlaubt die Automatisierung nahezu
          aller ITSM-Prozesse ohne HTTP-Request-Fallbacks.
        </Typo.Paragraph>

        <Typo.H3 className="mt-8 mb-3">API-Details</Typo.H3>
        <div className="mt-6 space-y-3">
          <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
            <span className="shrink-0 rounded bg-gray-200 px-2 py-0.5 text-xs font-mono font-medium text-gray-700">URL</span>
            <code className="text-sm">https://&lt;domain&gt;.freshservice.com/api/v2/</code>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
            <span className="shrink-0 rounded bg-gray-200 px-2 py-0.5 text-xs font-mono font-medium text-gray-700">Auth</span>
            <span className="text-sm">Basic Auth oder OAuth2</span>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
            <span className="shrink-0 rounded bg-gray-200 px-2 py-0.5 text-xs font-mono font-medium text-gray-700">Rate</span>
            <span className="text-sm">Starter 100/min, Growth 200/min, Pro 400/min, Enterprise 500/min</span>
          </div>
          <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
            <span className="shrink-0 rounded bg-gray-200 px-2 py-0.5 text-xs font-mono font-medium text-gray-700">Node</span>
            <span className="text-sm"><code>n8n-nodes-base.freshservice</code> – 15+ Ressourcen: Ticket, Change, Problem, Release, Agent, Asset, Requester, Department, Location und mehr</span>
          </div>
        </div>

        <a
          href="https://api.freshservice.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md hover:border-primary-300 transition-all group"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </div>
          <div>
            <p className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">Freshservice API-Dokumentation</p>
            <p className="text-sm text-gray-500">api.freshservice.com</p>
          </div>
        </a>

        <Typo.H3 className="mt-8 mb-3">Automatisierungs-Szenarien</Typo.H3>

        <TabGroup defaultValue="monitoring">
          <TabNavigation>
            <TabItem value="monitoring">Monitoring-Alert</TabItem>
            <TabItem value="onboarding">Onboarding</TabItem>
            <TabItem value="change">Change-Request</TabItem>
          </TabNavigation>
          <TabContent value="monitoring">
            <Typo.H3 className="mb-3">Monitoring-Alert zu Incident</Typo.H3>
            <Typo.Paragraph>
              Ein Alert von Datadog, PagerDuty oder Zabbix wird per Webhook
              an n8n gesendet. Der Workflow erstellt automatisch einen
              Freshservice-Incident mit korrekter Priorität, verknüpft ihn
              mit dem betroffenen Asset aus der CMDB und weist den
              diensthabenden Engineer zu. Bei P1-Incidents wird zusätzlich
              eine SMS-Benachrichtigung ausgelöst.
            </Typo.Paragraph>
          </TabContent>
          <TabContent value="onboarding">
            <Typo.H3 className="mb-3">Employee Onboarding</Typo.H3>
            <Typo.Paragraph>
              Eine neue Mitarbeiter-Anforderung im Service-Katalog triggert
              einen n8n-Workflow, der automatisch Laptop-Bestellung im
              Asset-Management anlegt, Benutzerkonten in Active
              Directory und ERP erstellt, VPN-Zugang konfiguriert und
              Zugangskarten-Anforderung an die Gebäudeverwaltung sendet. Der
              Onboarding-Status wird als Freshservice-Ticket getrackt.
            </Typo.Paragraph>
          </TabContent>
          <TabContent value="change">
            <Typo.H3 className="mb-3">Change-Request-Workflow</Typo.H3>
            <Typo.Paragraph>
              Ein Change Request in Freshservice durchläuft per n8n einen
              mehrstufigen Genehmigungsprozess: Technische Prüfung durch den
              Teamleiter, Risikobewertung durch den Change Manager,
              finale Freigabe durch den IT-Leiter. Jeder Schritt wird mit
              Deadline und Eskalation überwacht. Nach Genehmigung wird der
              Implementierungsplan automatisch als Tasks angelegt.
            </Typo.Paragraph>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      {/* Freshchat */}
      <ContentWrapper>
        <Typo.H2 id="freshchat" className="mb-6 scroll-mt-24">
          Freshchat – Messaging & Chatbots
        </Typo.H2>

        <Typo.Paragraph>
          Freshchat ist die Messaging-Lösung der Freshworks-Plattform und
          unterstützt WhatsApp, Facebook Messenger, Instagram, SMS, E-Mail,
          Google Business Messages und den eigenen Website-Chat. Besonders
          leistungsfähig ist der integrierte Bot-Builder, der über eine API
          Library externe Datenquellen einbinden kann – etwa, um während eines
          Chatgesprächs den Bestellstatus aus Ihrem ERP zu lesen.
        </Typo.Paragraph>

        <Typo.Paragraph>
          Freshchat hat keinen nativen n8n-Node. Die Integration erfolgt über
          den HTTP-Request-Node mit Bearer-Token-Authentifizierung. Alternativ
          können Freshchat-Bots über ihre API Library direkt
          n8n-Webhook-Endpunkte aufrufen, was für Echtzeit-Datenabfragen
          während Chatgesprächen besonders praktisch ist.
        </Typo.Paragraph>

        <Typo.H3 className="mt-8 mb-3">Automatisierungs-Szenarien</Typo.H3>

        <TabGroup defaultValue="eskalation">
          <TabNavigation>
            <TabItem value="eskalation">Chat-Eskalation</TabItem>
            <TabItem value="erp">ERP-Abfrage</TabItem>
            <TabItem value="routing">Wertbasiertes Routing</TabItem>
          </TabNavigation>
          <TabContent value="eskalation">
            <Typo.H3 className="mb-3">Chat-zu-Ticket-Eskalation</Typo.H3>
            <Typo.Paragraph>
              Wenn ein Chatbot eine Anfrage nicht lösen kann und an einen
              menschlichen Agenten übergibt, erstellt n8n automatisch ein
              Freshdesk-Ticket mit dem vollständigen Gesprächsverlauf. Das
              Ticket enthält die Chatbot-Analyse, erkannte Intents und die
              Kundenhistorie aus Freshsales, sodass der Agent sofort den
              Kontext hat.
            </Typo.Paragraph>
          </TabContent>
          <TabContent value="erp">
            <Typo.H3 className="mb-3">ERP-Abfrage im Bot</Typo.H3>
            <Typo.Paragraph>
              Der Freshchat-Bot fragt den Kunden nach seiner Bestellnummer.
              Über die API Library ruft der Bot einen n8n-Webhook auf, der die
              Bestellnummer im ERP nachschlägt und den aktuellen
              Lieferstatus, die Trackingnummer und das voraussichtliche
              Lieferdatum zurückgibt. Der Bot zeigt die Informationen direkt
              im Chat an – ohne Agent-Beteiligung.
            </Typo.Paragraph>
          </TabContent>
          <TabContent value="routing">
            <Typo.H3 className="mb-3">Wertbasiertes Routing</Typo.H3>
            <Typo.Paragraph>
              Wenn ein Kunde den Chat öffnet, fragt n8n im Hintergrund die
              Freshsales-API nach dem Customer Lifetime Value und offenen
              Deals ab. A-Kunden werden direkt an den Key-Account-Manager
              geroutet, B-Kunden an das Standard-Support-Team und
              Neukunden an den Vertrieb. So wird der Chat-Kanal zum
              Umsatztreiber.
            </Typo.Paragraph>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      {/* Freshmarketer */}
      <ContentWrapper colorScheme="gray-light">
        <Typo.H2 id="freshmarketer" className="mb-6 scroll-mt-24">
          Freshmarketer – Marketing-Automation
        </Typo.H2>

        <Typo.Paragraph>
          Freshmarketer ist das Marketing-Automation-Modul und wird häufig als
          Teil der Freshsales Suite eingesetzt. Es bietet E-Mail-Kampagnen mit
          Drag-and-Drop-Editor, Customer Journeys (mehrstufige,
          verhaltensbasierte Automatisierungen), Segmentierung basierend auf
          Website-Verhalten, E-Mail-Engagement und CRM-Daten sowie
          A/B-Testing für E-Mail-Betreffs und Inhalte.
        </Typo.Paragraph>

        <Typo.Paragraph>
          Freshmarketer hat keinen nativen n8n-Node. Die Integration erfolgt
          über den HTTP-Request-Node. Die Stärke liegt in der Kombination mit
          Freshsales: Da beide Produkte auf derselben Neo-Plattform laufen,
          können Marketing-Journeys direkt auf CRM-Events reagieren – etwa
          wenn ein Deal eine bestimmte Phase erreicht.
        </Typo.Paragraph>

        <Typo.H3 className="mt-8 mb-3">Automatisierungs-Szenarien</Typo.H3>

        <TabGroup defaultValue="onboarding">
          <TabNavigation>
            <TabItem value="onboarding">Deal-Won-Onboarding</TabItem>
            <TabItem value="scoring">Lead Scoring</TabItem>
            <TabItem value="recovery">Warenkorbabbrecher</TabItem>
          </TabNavigation>
          <TabContent value="onboarding">
            <Typo.H3 className="mb-3">Deal-Won-Onboarding</Typo.H3>
            <Typo.Paragraph>
              Wird ein Deal in Freshsales als &quot;Gewonnen&quot; markiert,
              triggert n8n eine Onboarding-E-Mail-Sequenz in Freshmarketer.
              Die Sequenz enthält Willkommens-E-Mail mit Zugangsdaten,
              Produktschulung als Video-Serie, Feedback-Abfrage nach 14 Tagen
              und Cross-Selling-Angebote nach 30 Tagen. Jeder Schritt wird
              nur ausgelöst, wenn der vorherige geöffnet wurde.
            </Typo.Paragraph>
          </TabContent>
          <TabContent value="scoring">
            <Typo.H3 className="mb-3">Lead Scoring & Handoff</Typo.H3>
            <Typo.Paragraph>
              Freshmarketer trackt das Website-Verhalten (besuchte Seiten,
              Download-Verhalten, E-Mail-Öffnungsraten) und berechnet einen
              Lead Score. Überschreitet der Score einen definierten
              Schwellenwert, übergibt n8n den Lead an Freshsales mit allen
              Touchpoint-Daten und erstellt automatisch eine Aufgabe für den
              zuständigen Vertriebsmitarbeiter.
            </Typo.Paragraph>
          </TabContent>
          <TabContent value="recovery">
            <Typo.H3 className="mb-3">Warenkorbabbrecher-Recovery</Typo.H3>
            <Typo.Paragraph>
              Bei erkanntem Warenkorbabbruch im Online-Shop sendet n8n die
              Kontaktdaten an Freshmarketer, das eine mehrstufige
              Recovery-Sequenz startet: Erinnerung nach 1 Stunde, Angebot mit
              Rabattcode nach 24 Stunden, persönliche Nachricht vom
              Vertriebsmitarbeiter nach 72 Stunden. Die Conversion Rate wird
              automatisch an das Reporting-Dashboard gemeldet.
            </Typo.Paragraph>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      {/* Freshdesk Custom Apps */}
      <ContentWrapper>
        <Typo.H2 id="custom-apps" className="mb-6 scroll-mt-24">
          Freshdesk Custom Apps
        </Typo.H2>

        <Typo.Paragraph>
          Freshdesk Custom Apps erweitern die Freshdesk-Oberfläche um eigene
          Widgets und Funktionen. Sie laufen in einem iFrame innerhalb von
          Freshdesk und werden mit dem Freshworks SDK v3.0 entwickelt. Als
          Framework können React, Vue oder Vanilla JS zum Einsatz kommen. Die
          Entwicklung und das Deployment erfolgen über die Freshworks CLI
          (<code>fdk</code>).
        </Typo.Paragraph>

        <Typo.Paragraph>
          Die verfügbaren Placeholders bestimmen, wo die App in Freshdesk
          eingeblendet wird: <code>ticket_sidebar</code> (rechte Seitenleiste
          im Ticket), <code>ticket_top_navigation</code> (obere Navigation),
          <code>full_page_app</code> (eigene Vollbildseite),{" "}
          <code>cti_app</code> (Telefonie-Integration) und weitere. Für die
          Kommunikation mit externen Systemen nutzen Custom Apps typischerweise
          n8n-Webhook-Endpunkte als Backend.
        </Typo.Paragraph>

        <Typo.H3 className="mt-8 mb-3">Automatisierungs-Szenarien</Typo.H3>

        <TabGroup defaultValue="erp-history">
          <TabNavigation>
            <TabItem value="erp-history">ERP-Bestellhistorie</TabItem>
            <TabItem value="tracking">Sendungsverfolgung</TabItem>
            <TabItem value="kundenwert">Kundenwert & Deals</TabItem>
          </TabNavigation>
          <TabContent value="erp-history">
            <Typo.H3 className="mb-3">ERP-Bestellhistorie im Ticket</Typo.H3>
            <Typo.Paragraph>
              Ein Sidebar-Widget zeigt dem Support-Agenten direkt im Ticket
              die komplette Bestellhistorie des Kunden aus dem ERP. Bei jedem
              Ticket-Öffnen ruft die Custom App einen n8n-Webhook auf, der
              die Kundennummer aus Freshdesk nutzt, das ERP abfragt und
              Bestellungen, Retouren und offene Posten zurückgibt. Der Agent
              hat sofort den Kontext, ohne das System zu wechseln.
            </Typo.Paragraph>
          </TabContent>
          <TabContent value="tracking">
            <Typo.H3 className="mb-3">Echtzeit-Sendungsverfolgung</Typo.H3>
            <Typo.Paragraph>
              Eine Custom App im Ticket-Sidebar zeigt den aktuellen
              Lieferstatus aller Sendungen des Kunden. Sie fragt per
              n8n-Webhook die APIs der Versanddienstleister (DHL, DPD, UPS)
              ab und zeigt Trackingnummer, aktuellen Status und
              voraussichtliches Lieferdatum an. Bei Lieferproblemen kann der
              Agent direkt aus dem Widget ein Nachforschungsticket beim
              Dienstleister erstellen.
            </Typo.Paragraph>
          </TabContent>
          <TabContent value="kundenwert">
            <Typo.H3 className="mb-3">Kundenwert & offene Deals</Typo.H3>
            <Typo.Paragraph>
              Ein Sidebar-Widget zeigt dem Support-Agenten den Customer
              Lifetime Value aus dem ERP und alle offenen Deals aus
              Freshsales. So erkennt der Agent sofort, ob der Kunde ein
              Key Account ist oder gerade ein großes Angebot offen hat. Das
              beeinflusst die Priorität der Bearbeitung und ermöglicht
              Cross-Selling-Hinweise direkt im Support-Kontext.
            </Typo.Paragraph>
          </TabContent>
        </TabGroup>
      </ContentWrapper>

      {/* Authentifizierung & API-Zugang */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Technisch</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Authentifizierung & API-Zugang
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Alle Freshworks-Produkte verwenden konsistente
            Authentifizierungsmuster. Die Details variieren je nach Produkt und
            Integrationstyp.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-8 mt-6">
          <SimpleCard className="border-t-4 border-t-primary-500">
            <Typo.H3 className="mb-3">API-Key</Typo.H3>
            <Typo.Paragraph>
              Jeder Freshworks-Benutzer kann seinen API-Key unter Profilbild &gt;
              Profile Settings &gt; API Key generieren. Für Freshdesk und
              Freshservice wird der API-Key als Basic-Auth-Benutzername verwendet,
              mit &quot;X&quot; als Passwort. Freshsales verwendet dagegen einen
              Token-Header: <code>Authorization: Token token=YOUR_API_KEY</code>.
              Wir empfehlen, einen dedizierten API-Benutzer mit minimalen
              Berechtigungen anzulegen, damit Workflows nicht an einzelne
              Mitarbeiterkonten gebunden sind.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard className="border-t-4 border-t-green-500">
            <Typo.H3 className="mb-3">OAuth2</Typo.H3>
            <Typo.Paragraph>
              Für Marketplace-Apps und Drittanbieter-Integrationen unterstützt
              Freshworks OAuth2 mit Authorization Code Flow. Access Tokens sind
              30 Minuten gültig, Refresh Tokens 365 Tage. Die OAuth2-Methode ist
              sicherer für produktive Integrationen, erfordert aber die
              Registrierung einer App im Freshworks Developer Portal.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>

        <Typo.H3 className="mt-8 mb-3">Rate Limits nach Produkt und Plan</Typo.H3>
        <SimpleGrid cols={3} className="gap-8">
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">Freshdesk</Typo.H3>
            <Typo.List>
              <Typo.ListItem>Free: eingeschränkt</Typo.ListItem>
              <Typo.ListItem>Growth: erhöht</Typo.ListItem>
              <Typo.ListItem>Pro: 400/min</Typo.ListItem>
              <Typo.ListItem>Enterprise: 500/min</Typo.ListItem>
            </Typo.List>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">Freshservice</Typo.H3>
            <Typo.List>
              <Typo.ListItem>Starter: 100/min</Typo.ListItem>
              <Typo.ListItem>Growth: 200/min</Typo.ListItem>
              <Typo.ListItem>Pro: 400/min</Typo.ListItem>
              <Typo.ListItem>Enterprise: 500/min</Typo.ListItem>
            </Typo.List>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">Freshsales</Typo.H3>
            <Typo.List>
              <Typo.ListItem>Alle Pläne: 400/min</Typo.ListItem>
            </Typo.List>
          </SimpleCard>
        </SimpleGrid>

        <Typo.H3 className="mt-8 mb-3">Webhooks</Typo.H3>
        <Typo.Paragraph>
          Freshworks-Webhooks werden nicht als eigenständige API-Ressource
          konfiguriert, sondern über Automation Rules innerhalb der jeweiligen
          Produkte. In Freshdesk beispielsweise unter Admin &gt; Automations
          &gt; Ticket Creation / Ticket Update mit der Aktion &quot;Trigger
          Webhook&quot;. Die Webhooks unterstützen Custom Headers (etwa für
          HMAC-Authentifizierung), JSON-Payloads und Platzhalter-Variablen
          (z. B. <code>{`{{ticket.id}}`}</code>,{" "}
          <code>{`{{ticket.subject}}`}</code>). In n8n empfangen Sie diese
          Webhooks mit einem Webhook-Node, der als Trigger für Ihre Workflows
          dient.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* Cross-Product Neo-Plattform */}
      <ContentWrapper colorScheme="primary-dark">
        <IntroBox dark>
          <IntroBox.PreHeadline>Cross-Product</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Neo-Plattform & Unified Customer Record
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Die wahre Stärke von Freshworks liegt nicht in einzelnen Produkten,
            sondern in der gemeinsamen Datenbasis über alle Produkte hinweg.
          </IntroBox.Paragraph>
        </IntroBox>

        <Typo.Paragraph className="text-blue-100">
          Die Neo-Plattform ist die technische Grundlage aller
          Freshworks-Produkte. Ihr Kernkonzept ist der Unified Customer Record
          (UCR): Jeder Kontakt existiert genau einmal in der
          Freshworks-Plattform. Wenn ein Kunde ein Support-Ticket in Freshdesk
          eröffnet, sieht der Agent automatisch die offenen Deals aus
          Freshsales, die letzten Chat-Interaktionen aus Freshchat und die
          IT-Assets aus Freshservice.
        </Typo.Paragraph>

        <Typo.Paragraph className="text-blue-100">
          Für n8n-Automatisierungen bedeutet das: Sie müssen Kontaktdaten
          nicht zwischen Freshworks-Produkten synchronisieren – das erledigt
          die Plattform nativ. Stattdessen fokussiert sich die n8n-Integration
          auf die Brücke zu externen Systemen (ERP, Warenwirtschaft,
          Versanddienstleister) und auf cross-product Workflows, die
          Freshworks allein nicht abbilden kann.
        </Typo.Paragraph>

        <Typo.H3 className="mt-8 mb-3 text-white">
          Typische Cross-Product-Workflows
        </Typo.H3>

        <SimpleGrid cols={3} className="gap-8">
          <GlassCard>
            <GlassCardTitle className="text-xl">
              Support zu Vertrieb
            </GlassCardTitle>
            <GlassCardDescription>
              Ein Support-Ticket in Freshdesk signalisiert Kaufinteresse
              (z. B. Frage nach Mengenrabatten). n8n erkennt das Keyword,
              erstellt einen Deal in Freshsales mit Ticket-Referenz und
              weist den Account Owner zu. Der Vertrieb sieht den
              Support-Kontext, der Kunde wird nicht doppelt angesprochen.
            </GlassCardDescription>
          </GlassCard>
          <GlassCard>
            <GlassCardTitle className="text-xl">
              Support zu IT
            </GlassCardTitle>
            <GlassCardDescription>
              Ein Freshdesk-Ticket meldet ein technisches Problem, das nicht
              am Produkt, sondern an der IT-Infrastruktur liegt (z. B.
              fehlerhafter API-Zugang). n8n erstellt automatisch einen
              Freshservice-Incident, verknüpft ihn mit dem Original-Ticket
              und hält beide Status synchron. Der Kunde wird informiert,
              sobald der Incident gelöst ist.
            </GlassCardDescription>
          </GlassCard>
          <GlassCard>
            <GlassCardTitle className="text-xl">
              Marketing zu Vertrieb
            </GlassCardTitle>
            <GlassCardDescription>
              Ein Lead erreicht in Freshmarketer den Score-Schwellenwert.
              n8n übergibt den Lead mit allen Touchpoint-Daten (besuchte
              Seiten, geöffnete E-Mails, heruntergeladene Dokumente) an
              Freshsales. Der Vertriebsmitarbeiter erhält eine Aufgabe mit
              priorisierter Kontaktaufnahme und dem kompletten
              Engagement-Verlauf.
            </GlassCardDescription>
          </GlassCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Prozess */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Unser Prozess</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So integrieren wir Ihre Freshworks-Plattform
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Von der Bestandsaufnahme bis zum laufenden Betrieb – in vier
            Schritten zur vollständigen Integration.
          </IntroBox.Paragraph>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mb-2">Plattform-Audit & Anforderungsanalyse</Typo.H3>
            <Typo.Paragraph textColor="muted">
              Wir analysieren Ihre bestehende Freshworks-Konfiguration: Welche
              Produkte sind im Einsatz, welche Automationsregeln existieren
              bereits, welche Custom Fields und Workflows sind eingerichtet?
              Parallel kartieren wir Ihre externen Systeme (ERP,
              Warenwirtschaft, Versanddienstleister) und identifizieren die
              Datenflüsse, die automatisiert werden sollen. Das Ergebnis ist
              ein Integrationsplan mit priorisierten Use Cases und
              geschätztem ROI.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mb-2">API-Anbindung & Authentifizierung</Typo.H3>
            <Typo.Paragraph textColor="muted">
              Wir richten dedizierte API-Benutzer mit minimalen Berechtigungen
              ein, konfigurieren die Authentifizierung (API-Key oder OAuth2 je
              nach Anwendungsfall), testen Rate Limits unter Last und setzen
              Webhook-Endpunkte in n8n auf. Für jeden Freshworks-Produkt wird
              die Verbindung einzeln validiert – inkl. Fehlerhandling bei
              429-Responses und automatischem Retry.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mb-2">Workflow-Entwicklung & Testing</Typo.H3>
            <Typo.Paragraph textColor="muted">
              Die n8n-Workflows werden gegen eine Freshworks-Sandbox
              entwickelt und getestet. Jeder Workflow erhält Error Handling
              (Retry, Dead Letter Queue, Slack-Alert bei Fehlern),
              Logging für Audit-Zwecke und idempotente Verarbeitung, um
              Dubletten bei Webhook-Retries zu vermeiden. Custom Apps werden
              lokal mit der Freshworks CLI entwickelt und per
              <code> fdk validate</code> geprüft, bevor sie auf dem
              Marketplace oder als Custom Installation deployed werden.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3 className="mb-2">Go-Live, Monitoring & Iteration</Typo.H3>
            <Typo.Paragraph textColor="muted">
              Nach dem Go-Live überwachen wir API-Verbrauch gegen Rate Limits,
              Webhook-Zustellraten und Fehlerquoten, Workflow-Laufzeiten und
              Queue-Größen sowie Business-KPIs (z. B. Ticket-Erstlösungsrate,
              Lead-Conversion-Rate). Auf Basis der Monitoring-Daten
              optimieren wir bestehende Workflows und identifizieren neue
              Automatisierungspotenziale. Die meisten Kunden starten mit 2-3
              Kern-Workflows und erweitern schrittweise.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
