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
import DataTable from "@/components/ui/data-table";
import ProsCons from "@/components/sections/pros-cons";
import IndustryFit from "@/components/sections/industry-fit";
import ToolComparisonTable from "@/components/sections/tool-comparison-table";

export const metadata: Metadata = {
  title:
    "Tray.io (Tray.ai): Funktionen, Kosten, Grenzen & Vergleich | Bluebatch",
  description:
    "Tray.io ehrlich bewertet: Enterprise-iPaaS mit Merlin AI, 600+ Konnektoren und 600M+ € Bewertung. Stärken, Schwächen, echte Preise (60K–120K+ €/Jahr) und Alternativen.",
  openGraph: {
    title:
      "Tray.io (Tray.ai): Funktionen, Kosten, Grenzen & Vergleich | Bluebatch",
    description:
      "Tray.io als Enterprise-iPaaS: Merlin AI, Embedded iPaaS, echte Kosten und für wen sich die Plattform wirklich lohnt.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Tray.io Analyse und Beratung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tray.io (Tray.ai): Funktionen, Kosten, Grenzen & Vergleich | Bluebatch",
    description:
      "Tray.io ehrlich bewertet: Enterprise-iPaaS mit echten Preisen, Stärken und Grenzen.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/tools/automation-tools/tray-io",
  },
};

export default function Page() {
  return (
    <>
      {/* 1. Hero */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Tools</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Tray.io – die Enterprise-iPaaS mit KI-Ambitionen
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Tray.io (seit 2024 Tray.ai) positioniert sich als
              &quot;Universal Automation Cloud&quot; für Enterprise-Integrationen.
              Die Plattform kombiniert iPaaS, KI-Agenten und Embedded
              Integrations – zu Enterprise-Preisen. Hier erfahren Sie
              ehrlich, was Tray kann, was es wirklich kostet und wo die
              Grenzen liegen.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Automatisierungsstrategie besprechen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              iPaaS-Plattform • 600M+ € Bewertung • 600+ Konnektoren •
              Gartner Visionary
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/technology-integration.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. Was ist Tray.io? */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Überblick</IntroBox.PreHeadline>
          <IntroBox.Headline>Was ist Tray.io?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Tray.ai ist eine AI-native Enterprise-Automatisierungsplattform
            (iPaaS), die komplexe Geschäftsprozesse über Cloud- und
            On-Premise-Systeme hinweg integriert, automatisiert und mit
            KI-Agenten erweitert.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SimpleCard>
            <Typo.H3 className="mb-3">Das Unternehmen</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Gegründet 2012 in London von Rich Waldron (CEO), Dominic Lewis
              und Alistair Russell. Heute Hauptsitz in San Francisco mit
              Büros in London. Privat finanziert mit ca. 150 Mio. €
              Gesamtfinanzierung und einer historischen Bewertung von über
              600 Mio. € (Series C 2019). Ca. 242 Mitarbeiter. Im März 2025
              Übernahme des israelischen AI-Startups Vanti zur Stärkung der
              KI-Capabilities.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3">Die Plattform</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Die &quot;Universal Automation Cloud&quot; vereint drei Bereiche:
              Agent Development (Merlin AI), Intelligent iPaaS (Low-Code
              Workflow Builder mit 600–700+ Konnektoren) und Enterprise Core
              (Governance, Sicherheit, Skalierung). Unterstützt API-led,
              event-driven und hybride Integrationsmuster.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3">Marktposition</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Gartner Visionary im Magic Quadrant für iPaaS (2024 und 2025,
              zweites Jahr in Folge). Höchste Bewertung für AI
              Implementation Support in Gartner Critical Capabilities. 4,6/5
              Sterne bei Gartner Peer Insights. Kunden: Demandbase,
              Eventbrite, HackerOne, Typeform, Hootsuite und SugarCRM.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3">Rebranding zu Tray.ai</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Im Zuge der strategischen Neuausrichtung auf AI-native
              Automatisierung hat das Unternehmen den Markennamen von Tray.io
              zu Tray.ai geändert. 2024 deklarierte Tray den &quot;Tod der
              traditionellen iPaaS&quot; und positioniert sich seither als
              Plattform für das &quot;AI-enabled Autonomous Enterprise&quot;.
            </Typo.Paragraph>
          </SimpleCard>
        </div>
      </ContentWrapper>

      {/* 3. Stärken & Probleme */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Pro & Contra</IntroBox.PreHeadline>
          <IntroBox.Headline>Stärken und Grenzen von Tray.io</IntroBox.Headline>
          <IntroBox.Paragraph>
            Tray.io positioniert sich bewusst zwischen den großen
            iPaaS-Leadern und einfacheren Automatisierungstools. Das sind die
            tatsächlichen Stärken und Schwächen der Plattform.
          </IntroBox.Paragraph>
        </IntroBox>

        <ProsCons>
          <ProsCons.Pros>
            <ProsCons.Item
              title="Merlin AI Agent Builder"
              description="Trays strategisches Differenzierungsmerkmal: No-Code KI-Agenten mit Smart Data Sources, Enhanced Memory (Kurz- und Langzeitgedächtnis) und Multi-LLM-Support für OpenAI, Anthropic Claude, Google Gemini und AWS Bedrock. Höchste Gartner-Bewertung für AI Implementation Support."
            />
            <ProsCons.Item
              title="API-First Architektur"
              description="Connectivity, Trigger und Authentication APIs für programmatischen Zugang. Workflows als wiederverwendbare API-Services publizieren. Tray Code bietet drei neue APIs für Entwickler, die über den visuellen Builder hinausgehen wollen."
            />
            <ProsCons.Item
              title="Embedded iPaaS für SaaS-Unternehmen"
              description="White-Label-Integrationen unter eigenem Branding anbieten. Über 60.000 End-Kunden nutzen Tray Embedded. SDK-Wizards für geführte In-Product-Integration. 1.025% Adoption-Wachstum – ein einzigartiges Angebot im iPaaS-Markt."
            />
            <ProsCons.Item
              title="Multi-Region Data Residency"
              description="Daten können in USA, EU oder APAC gehostet werden. SOC 2 Type II, HIPAA und DSGVO-zertifiziert. Sichere On-Premise-Konnektivität ohne Offenlegung von Services im Internet."
            />
            <ProsCons.Item
              title="Gartner Visionary"
              description="Zum zweiten Mal in Folge als Visionary im Gartner Magic Quadrant für iPaaS (2024 und 2025). 4,6/5 Sterne bei Gartner Peer Insights. Positioniert sich bewusst zwischen den großen Leadern (Workato, Boomi) und einfacheren Tools (Zapier, Make)."
            />
            <ProsCons.Item
              title="Enterprise SSO, RBAC & Audit Logs"
              description="Feingranulare Zugriffssteuerung mit Role-Based Access Control, Integration mit Enterprise Identity Providern via SSO und lückenlose Audit Logs. IT erhält zentrale Visibilität über alle Integrationen, Automatisierungen und Agenten."
            />
          </ProsCons.Pros>
          <ProsCons.Cons>
            <ProsCons.Item
              title="Völlig intransparente Preise"
              description="Keine öffentlichen Preise auf der Website. Branchenanalysen zeigen: realistisch 5.000,- € – 10.000,- €+/Monat, also 60.000,- € – 120.000,- €+ pro Jahr. Aggressive Preiserhöhungen bei Vertragsverlängerungen werden von Nutzern berichtet. Kein kostenloser Plan, keine Testmöglichkeit ohne Sales-Kontakt."
            />
            <ProsCons.Item
              title="Steile Lernkurve"
              description="Der visuelle Builder sieht auf den ersten Blick einfach aus, aber komplexe Integrationen erfordern solides JSON- und API-Wissen. Fortgeschrittene Features wie Custom Connectors und Datentransformationen sind für Anfänger schwer zugänglich. Die Dokumentation hat Lücken."
            />
            <ProsCons.Item
              title="Begrenzte Fehlerbehandlung"
              description="Nutzer berichten wiederholt: 'If one fails, they all fail.' Die granulare Fehlerbehandlung ist eingeschränkt, Custom Error Responses und Retry-Limits sind limitiert. Bei komplexen Workflows mit vielen Schritten wird das schnell zum Problem."
            />
            <ProsCons.Item
              title="Lückenhafte Dokumentation & kleine Community"
              description="Fehlender detaillierter Kontext bei Connector-Updates, kein aktives öffentliches Nutzer-Forum für Einsteiger. Im Vergleich zu Open-Source-Alternativen mit hunderttausenden Community-Mitgliedern ist die Wissensbasis deutlich kleiner."
            />
            <ProsCons.Item
              title="Kein Self-Hosting möglich"
              description="Tray.io ist ausschließlich als Cloud-SaaS verfügbar. Kein Self-Hosting, keine On-Premise-Option für die Plattform selbst. Für deutsche Unternehmen mit strengen Datenschutzanforderungen kann das ein K.O.-Kriterium sein – trotz der EU-Data-Residency-Option."
            />
            <ProsCons.Item
              title="Kleine Community & Vendor Lock-in"
              description="Als proprietäre, geschlossene Plattform sind Ihre Workflows und Integrationen an Tray gebunden. Keine Open-Source-Komponente, keine Community-getriebene Erweiterbarkeit. Die kleine Nutzerbasis bedeutet auch: weniger Tutorials, weniger Stack-Overflow-Antworten, weniger Erfahrungsberichte."
            />
          </ProsCons.Cons>
        </ProsCons>
      </ContentWrapper>

      {/* 4. Kosten & Betrieb */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Preise</IntroBox.PreHeadline>
          <IntroBox.Headline>Kosten und Betrieb</IntroBox.Headline>
          <IntroBox.Paragraph>
            Tray.io veröffentlicht keine Preise auf der Website. Die
            folgenden Zahlen basieren auf Branchenanalysen von Vendr,
            Spendflo und Nutzerberichten. Abgerechnet wird nutzungsbasiert
            nach Connector-Anzahl, Task-Volumen und Nutzerplätzen.
          </IntroBox.Paragraph>
        </IntroBox>

        <DataTable className="mb-12">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Plan</DataTable.HeaderCell>
              <DataTable.HeaderCell>Task Credits (Starter)</DataTable.HeaderCell>
              <DataTable.HeaderCell>Workspaces</DataTable.HeaderCell>
              <DataTable.HeaderCell>Geschätzte Kosten/Monat</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Pro</DataTable.Cell>
              <DataTable.Cell>250.000</DataTable.Cell>
              <DataTable.Cell>3</DataTable.Cell>
              <DataTable.Cell>ab ca. 2.500,- €</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Team</DataTable.Cell>
              <DataTable.Cell>500.000</DataTable.Cell>
              <DataTable.Cell>20</DataTable.Cell>
              <DataTable.Cell>ca. 5.000,- € – 7.500,- €</DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Enterprise</DataTable.Cell>
              <DataTable.Cell>750.000+</DataTable.Cell>
              <DataTable.Cell>Unbegrenzt</DataTable.Cell>
              <DataTable.Cell>10.000,- €+</DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <SimpleGrid cols={3} className="gap-8">
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">Starter-Bereich</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Realistisch 30.000,- € – 60.000,- €/Jahr für kleinere Teams.
              Task-basierte Abrechnung: bei Überschreitung der
              inkludierten Credits werden On-Demand-Raten berechnet. Kein
              kostenloser Plan, keine Self-Service-Anmeldung.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">Enterprise-Bereich</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Typisch 60.000,- € – 120.000,- €+ pro Jahr. Custom Pricing mit
              individueller Verhandlung. Jährliche Verträge sind Standard.
              Nutzer berichten von deutlichen Preiserhöhungen bei
              Verlängerungen – besonders bei der Embedded-Preisgestaltung.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">Versteckte Kosten</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Overage-Gebühren bei Überschreitung der Task Credits. Add-on
              Kosten für erweiterte Konnektoren und Features. Steile
              Lernkurve bedeutet längere Onboarding-Zeit und
              Implementierungskosten. Kein Self-Hosting = keine
              Infrastruktur-Einsparungen möglich.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. KI & Agentic AI */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Künstliche Intelligenz</IntroBox.PreHeadline>
          <IntroBox.Headline>KI und Agentic Automation</IntroBox.Headline>
          <IntroBox.Paragraph>
            Tray positioniert sich als &quot;AI-native&quot; Plattform. Der
            Merlin AI Agent Builder ist das strategische
            Differenzierungsmerkmal und wurde 2025 in Version 2.0
            signifikant erweitert.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-8">
          <SimpleCard>
            <Typo.H3 className="mb-3">Merlin Agent Builder 2.0</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              No-Code KI-Agenten mit Smart Data Sources – automatische
              Aufbereitung und Vektorisierung von Unternehmensdaten, damit
              Agenten immer in relevanten, aktuellen Daten verankert sind.
              Enhanced Memory mit Sliding Context Windows ermöglicht
              Session-Historie und Zugriff auf frühere Gespräche. &quot;Build
              Once, Deploy Anywhere&quot;: Agenten einmal bauen, über Slack,
              Web-Apps oder APIs bereitstellen.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3">Multi-LLM & Flexibilität</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Unterstützung für OpenAI, Anthropic Claude, Google Gemini,
              AWS Bedrock und Azure – kein Vendor Lock-in bei KI-Modellen.
              Vector-native Architektur für Reasoning-basierte, adaptive
              Workflows. Anwendungsfälle: Kunden-Support-Agenten,
              Internal Knowledge Assistants, automatisierte Datenanalyse,
              Lead Qualification und intelligente Dokumentenverarbeitung.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 6. Brancheneignung */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Zielgruppe</IntroBox.PreHeadline>
          <IntroBox.Headline>Brancheneignung</IntroBox.Headline>
          <IntroBox.Paragraph>
            Tray.io richtet sich primär an US-zentrische
            Enterprise-Unternehmen. Die Plattform ist stark in bestimmten
            Nischen – aber nicht für jeden geeignet.
          </IntroBox.Paragraph>
        </IntroBox>

        <IndustryFit>
          <IndustryFit.Good>
            <IndustryFit.GoodItem title="Enterprise RevOps">
              Lead Lifecycle Management, Pipeline-Automatisierung, Deal Desk
              Automation und Tech Stack Consolidation. Tray verbindet CRM,
              Marketing Automation und Billing-Systeme für große
              Revenue-Teams.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Marketing Ops im Enterprise-Scale">
              Komplexe Multi-Channel-Kampagnen, Account-Based Marketing, Lead
              Nurture Workflows und Campaign Attribution über Dutzende
              Marketing-Tools hinweg.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="SaaS-Unternehmen (Embedded iPaaS)">
              Wer Integrationen als Feature in das eigene Produkt einbetten
              will, findet mit Tray Embedded ein einzigartiges
              White-Label-Angebot. Über 60.000 End-Kunden nutzen das bereits.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="High-Growth US-Unternehmen">
              Schnell wachsende Organisationen mit großem SaaS-Stack, die
              zentrale Integrationssteuerung mit Enterprise-Governance
              brauchen.
            </IndustryFit.GoodItem>
          </IndustryFit.Good>
          <IndustryFit.Poor>
            <IndustryFit.PoorItem title="EU-Unternehmen mit strikten DSGVO-Anforderungen">
              Tray ist eine US-zentrische Cloud-Plattform. Zwar gibt es
              EU-Data-Residency, aber kein Self-Hosting. Für deutsche
              Unternehmen, die volle Datensouveränität brauchen, ist das
              oft unzureichend.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="KMU und Mittelstand">
              Bei Kosten von 60.000,- € – 120.000,- €+/Jahr ist Tray für kleine und
              mittlere Unternehmen schlicht zu teuer. Die Plattform bietet
              keinen kostenlosen Plan und keine Einstiegspreise für kleinere
              Teams.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Budget-bewusste Unternehmen">
              Wer Automatisierung kosteneffizient aufbauen will, findet mit
              Open-Source-Alternativen deutlich günstigere Lösungen bei
              vergleichbarer Funktionalität. Die intransparente
              Preisgestaltung macht Budgetplanung schwierig.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Teams ohne API-Erfahrung">
              Trotz des visuellen Builders erfordern komplexe
              Tray-Integrationen solides technisches Verständnis. Die
              Lernkurve ist steiler als bei einfacheren Tools und die
              Dokumentation hat Lücken.
            </IndustryFit.PoorItem>
          </IndustryFit.Poor>
        </IndustryFit>
      </ContentWrapper>

      {/* 7. Vergleichsmatrix */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Vergleich</IntroBox.PreHeadline>
          <IntroBox.Headline>Tray.io im Vergleich</IntroBox.Headline>
          <IntroBox.Paragraph>
            Tray.io konkurriert im Enterprise-iPaaS-Markt mit Workato,
            Boomi und MuleSoft. Gleichzeitig gibt es mit Open-Source-Tools
            deutlich günstigere Alternativen, die viele derselben Use Cases
            abdecken.
          </IntroBox.Paragraph>
        </IntroBox>

        <ToolComparisonTable currentTool="tray-io" />
      </ContentWrapper>

      {/* 8. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
