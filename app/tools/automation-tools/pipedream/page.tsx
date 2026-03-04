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
import ProsCons from "@/components/sections/pros-cons";
import IndustryFit from "@/components/sections/industry-fit";
import ToolComparisonTable from "@/components/sections/tool-comparison-table";

export const metadata: Metadata = {
  title:
    "Pipedream: Ehrliche Bewertung nach der Workday-Übernahme | Bluebatch",
  description:
    "Pipedream im Detail: Code-first, 2.800+ Integrationen, aber seit November 2025 von Workday übernommen. Cloud-only, US-Daten, kein Self-Hosting. Alle Fakten für Ihre Entscheidung.",
  openGraph: {
    title:
      "Pipedream: Ehrliche Bewertung nach der Workday-Übernahme | Bluebatch",
    description:
      "Pipedream ehrlich bewertet: Starker Code-First-Ansatz trifft auf Workday-Akquisition, US-Datenhaltung und kein Self-Hosting. Was bedeutet das für Ihr Unternehmen?",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Pipedream Bewertung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pipedream: Ehrliche Bewertung nach der Workday-Übernahme | Bluebatch",
    description:
      "Pipedream ehrlich bewertet: Stärken, Risiken nach der Workday-Übernahme und Vergleich mit n8n.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/tools/automation-tools/pipedream",
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
              Pipedream – starkes Developer-Tool mit unsicherer Zukunft
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Pipedream ist eine code-native Automatisierungsplattform für
              Entwickler mit 2.800+ Integrationen und Zugriff auf das gesamte
              npm-Ökosystem. Seit November 2025 gehört Pipedream zu Workday.
              Cloud-only, US-Daten, kein Self-Hosting. Wir zeigen Ihnen ehrlich,
              was das für Ihre Entscheidung bedeutet.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Ehrliche Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Code-First &bull; Von Workday übernommen &bull; Cloud-only &bull;
              US-Daten
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

      {/* 2. Was ist Pipedream? */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Überblick</IntroBox.PreHeadline>
          <IntroBox.Headline>Was ist Pipedream?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Pipedream wurde 2019 in San Francisco gegründet und ist eine
            developer-first Integrations- und Automatisierungsplattform.
            Entwickler schreiben echten Code in Node.js, Python, Go oder Bash
            und können dabei auf über 750.000 npm- und PyPI-Pakete zugreifen.
            Mit 2.800+ App-Integrationen und 10.000+ vorgefertigten Aktionen
            bietet Pipedream eine der größten Integrationsbibliotheken am
            Markt. Kritisch: Im November 2025 wurde Pipedream von Workday
            übernommen. Die Plattform ist rein cloudbasiert – alle Daten
            werden auf AWS us-east-1 in den USA verarbeitet. Self-Hosting ist
            nicht möglich. Für europäische Unternehmen mit DSGVO-Anforderungen
            ist das ein erhebliches Risiko.
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 3. Stärken & Probleme */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Pro & Contra</IntroBox.PreHeadline>
          <IntroBox.Headline>Stärken und Schwächen von Pipedream</IntroBox.Headline>
          <IntroBox.Paragraph>
            Pipedream hat echte Stärken – besonders für reine
            Entwickler-Teams, die Code-first arbeiten und keine EU-Datenresidenz
            benötigen. Aber die Workday-Übernahme und das Cloud-only-Modell schaffen Risiken,
            die Sie vor einer Entscheidung kennen sollten.
          </IntroBox.Paragraph>
        </IntroBox>

        <ProsCons>
          <ProsCons.Pros>
            <ProsCons.Item
              title="Echte Programmiersprachen statt visueller Blöcke"
              description="Pipedream ist keine No-Code-Plattform mit angehefteter Code-Option. Hier schreiben Sie produktionsreifen Code in Node.js, Python, Go oder Bash direkt im Browser. Für Entwickler-Teams, die Code bevorzugen, ist das natürlicher als ein visueller Drag-and-Drop-Builder."
            />
            <ProsCons.Item
              title="Zugriff auf 750.000+ npm- und PyPI-Pakete"
              description="Sie können beliebige npm-Pakete (über 400.000) und PyPI-Pakete (über 350.000) direkt in Workflows importieren. Keine proprietäre Syntax, keine künstlichen Einschränkungen. Das ist eine Erweiterbarkeit, die kein anderes Automatisierungstool bietet."
            />
            <ProsCons.Item
              title="Großzügiger Free-Tier für Entwickler"
              description="Der kostenlose Plan bietet 100 Credits pro Monat, 3 aktive Workflows und unbegrenztes Testing. Entwicklung und Debugging kosten keine Credits – nur Produktions-Runs werden berechnet. Für Prototyping und kleine Projekte reicht das völlig."
            />
            <ProsCons.Item
              title="Connect für Embedded Integrations"
              description="Pipedream Connect ermöglicht es SaaS-Unternehmen, Integrationen direkt in eigene Applikationen oder KI-Agenten einzubetten. Managed OAuth, Token-Verwaltung und über 10.000 Built-in-API-Operationen. Für SaaS-Builder ein starkes Feature – allerdings mit sichtbarem Pipedream-Branding beim Auth-Flow."
            />
            <ProsCons.Item
              title="Event-Driven und Serverless"
              description="Pipedream basiert auf einer vollständig event-gesteuerten Architektur. Kein Polling – Events werden sofort verarbeitet. Serverlose Ausführung ohne Infrastruktur-Management, konfigurierbare Ressourcen pro Workflow und optionale Dedicated Workers für latenzempfindliche Ausführungen."
            />
            <ProsCons.Item
              title="MCP-Server für KI-Agenten"
              description="Über 3.000 APIs sind als MCP-Server mit mehr als 10.000 Tools für KI-Agenten verfügbar. Der AI Agent Builder ermöglicht No-Code-Erstellung von KI-Agenten. Und weil Sie echten Code schreiben, können Sie jede KI-Bibliothek via npm nutzen – OpenAI, LangChain, Anthropic SDK und alles andere."
            />
          </ProsCons.Pros>
          <ProsCons.Cons>
            <ProsCons.Item
              title="Workday-Übernahme schafft Unsicherheit"
              description="Im November 2025 hat Workday Pipedream übernommen. Die Plattform wird voraussichtlich stärker auf Enterprise-KI-Agenten und Workday-spezifische Use Cases fokussiert. Ob das bestehende Preismodell, der Feature-Umfang oder die Zielgruppe bestehen bleiben, ist unklar. Viele Nutzer evaluieren bereits Alternativen."
            />
            <ProsCons.Item
              title="Keine EU-Datenresidenz – nur US-Server"
              description="Alle Daten werden auf AWS us-east-1 in den USA verarbeitet und gespeichert. Es gibt kein EU-Rechenzentrum und keine Möglichkeit, Daten in Europa zu halten. Pipedream bezeichnet sich als DSGVO-konform, aber die US-Datenhaltung ist für viele europäische Unternehmen ein Compliance-Risiko."
            />
            <ProsCons.Item
              title="Cloud-only – kein Self-Hosting möglich"
              description="Pipedream bietet ausschließlich einen verwalteten Cloud-Service. Kein Self-Hosting, kein On-Premises-Deployment. Sie haben keine Kontrolle darüber, wo Ihre Daten verarbeitet werden. Im Gegensatz dazu ist n8n Self-Hosted kostenlos und läuft auf Ihrer eigenen Infrastruktur."
            />
            <ProsCons.Item
              title="Teuer bei Skalierung durch Credit-System"
              description="1 Credit entspricht 30 Sekunden Rechenzeit bei 256 MB Speicher. Bei 1.000 Workflows täglich mit 60 Sekunden Laufzeit benötigen Sie bereits 60.000 Credits pro Monat – das erfordert den Business-Plan mit individueller Preisgestaltung. n8n Self-Hosted bietet unbegrenzte Ausführungen für 10 bis 30 Euro Infrastrukturkosten."
            />
            <ProsCons.Item
              title="Nur für Entwickler – Non-Tech-Teams ausgeschlossen"
              description="Pipedream ist fast ausschließlich auf technische Nutzer ausgerichtet. Marketing, Operations oder HR können ohne Programmierkenntnisse keine Workflows bauen. Für gemischte Teams, in denen Fachbereiche und Entwickler zusammenarbeiten, fehlt ein intuitiver visueller Builder."
            />
            <ProsCons.Item
              title="Unsichere Produkt-Roadmap nach Akquisition"
              description="Workday plant, Pipedream als KI-Agent-Integrationsschicht für die eigenen 75+ Millionen Endnutzer zu positionieren. Das deutet auf eine Verschiebung weg von Indie-Developern hin zu Enterprise-Kunden. Workflows können nicht automatisch migriert werden – ein manueller Rebuild kostet geschätzt 2 bis 4 Stunden pro Workflow."
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
            Pipedream nutzt ein kreditbasiertes Abrechnungsmodell. 1 Credit
            entspricht 30 Sekunden Rechenzeit bei 256 MB Speicher. Nur
            Produktions-Runs kosten Credits – Entwicklung und Testing sind
            kostenlos.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-8">
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">Pläne und Preise</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Der Free-Plan bietet 100 Credits pro Monat, 3 aktive Workflows und
              3 verbundene Konten. Der Basic-Plan kostet 45,- € pro Monat
              mit 2.000 Credits und 10 aktiven Workflows. Der Advanced-Plan
              liegt bei 74,- € pro Monat mit 2.000 Credits, unbegrenzten
              Workflows und GitHub Sync. Der Connect-Plan für Embedded
              Integrations kostet 150,- € pro Monat mit 10.000 Credits und
              100 externen Nutzern. Der Business-Plan hat individuelle Preise
              mit Volume Pricing, HIPAA-Compliance und SLA.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">Das Credit-System erklärt</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Jedes Workflow-Segment verbraucht Credits basierend auf Laufzeit
              und Speicherverbrauch. Ein 30-Sekunden-Workflow mit 256 MB kostet
              1 Credit. Ein 5-Minuten-Workflow kostet 10 Credits. Bei hohem
              Volumen steigen die Kosten linear – es gibt keinen Mengenrabatt
              auf den Standard-Plänen. Zum Vergleich: n8n Self-Hosted bietet
              unbegrenzte Ausführungen unabhängig von der Laufzeit. Bei
              1.000 Workflows täglich mit 60 Sekunden Laufzeit benötigen Sie
              rund 60.000 Credits pro Monat bei Pipedream.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 5. KI & Agentic AI */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Künstliche Intelligenz</IntroBox.PreHeadline>
          <IntroBox.Headline>KI und Agentic AI</IntroBox.Headline>
          <IntroBox.Paragraph>
            Pipedream hat seit 2025 stark auf KI gesetzt – besonders nach der
            Workday-Übernahme, die explizit auf KI-Agenten abzielt.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-8">
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">AI Agent Builder und MCP-Server</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Der AI Agent Builder ermöglicht die No-Code-Erstellung von
              KI-Agenten direkt in der Plattform. Über 3.000 APIs stehen als
              MCP-Server mit mehr als 10.000 Tools für KI-Agenten zur
              Verfügung. Multi-Modell-Support für OpenAI, Anthropic Claude und
              Google Gemini. KI-Tokens sind in jedem Plan enthalten – von 2
              Millionen bis 50 Millionen Tokens je nach Plan.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">Der Entwickler-Vorteil bei KI</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Weil Pipedream echten Code ausführt, können Sie jede
              KI-Bibliothek via npm oder PyPI nutzen: openai, langchain,
              anthropic, huggingface und tausende weitere. Das ist ein echter
              Vorteil gegenüber visuellen Tools mit vorgefertigten KI-Nodes.
              Im Vergleich: n8n bietet tiefere native LangChain-Integration,
              Vector Store Nodes, Memory Nodes und die Möglichkeit, Self-Hosted
              LLMs einzubinden – entscheidend für datensensible
              Anwendungsfälle.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 6. Brancheneignung */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Zielgruppe</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Für wen eignet sich Pipedream?
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Pipedream ist kein Tool für jeden. Eine ehrliche Einschätzung,
            für welche Szenarien es passt – und für welche nicht.
          </IntroBox.Paragraph>
        </IntroBox>

        <IndustryFit>
          <IndustryFit.Good>
            <IndustryFit.GoodItem title="Reine Entwickler-Teams">
              Code-first arbeiten und APIs orchestrieren.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="DevOps- und SRE-Teams">
              CI/CD-Integrationen, Monitoring-Alerts und Incident-Response.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="SaaS-Builder">
              Über Pipedream Connect Integrationen in eigene Produkte einbetten.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="API-heavy Workflows">
              Schnelles Prototyping und API-Experimente.
            </IndustryFit.GoodItem>
          </IndustryFit.Good>
          <IndustryFit.Poor>
            <IndustryFit.PoorItem title="Nicht-technische Teams">
              Marketing, HR oder Operations können ohne Programmierkenntnisse keine Workflows bauen.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="EU-Unternehmen mit DSGVO-Anforderungen">
              Keine EU-Datenresidenz, kein Self-Hosting.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Langfristige Plattformstabilität">
              Die Workday-Übernahme schafft Unsicherheit über die Produkt-Roadmap.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Deutsche Unternehmen">
              Kein lokaler Anbieter, keine DATEV-Anbindung.
            </IndustryFit.PoorItem>
          </IndustryFit.Poor>
        </IndustryFit>
      </ContentWrapper>

      {/* 7. Vergleichsmatrix */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Vergleich</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Pipedream vs. n8n im Direktvergleich
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Die wichtigsten Unterschiede auf einen Blick – basierend auf
            öffentlich verfügbaren Daten vom März 2026.
          </IntroBox.Paragraph>
        </IntroBox>

        <ToolComparisonTable currentTool="pipedream" />
      </ContentWrapper>

      {/* 8. CTA */}
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
