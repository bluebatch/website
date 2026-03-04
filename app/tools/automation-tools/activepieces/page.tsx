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
    "Activepieces: Ehrliche Bewertung der Open-Source-Automatisierung | Bluebatch",
  description:
    "Activepieces im Detail: MIT-lizenziert, AI-first, aber Pre-1.0 mit nur 500K € Finanzierung. Stärken, Schwächen, Preise und warum n8n für deutsche Unternehmen die reifere Wahl ist.",
  openGraph: {
    title:
      "Activepieces: Ehrliche Bewertung der Open-Source-Automatisierung | Bluebatch",
    description:
      "Activepieces ehrlich bewertet: MIT-Lizenz und KI-Fokus treffen auf Performance-Probleme und fehlende Enterprise-Reife. Alle Fakten für Ihre Entscheidung.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Activepieces Bewertung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Activepieces: Ehrliche Bewertung der Open-Source-Automatisierung | Bluebatch",
    description:
      "Activepieces ehrlich bewertet: Stärken, Schwächen, Preise und Vergleich mit n8n.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/tools/automation-tools/activepieces",
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
              Activepieces – vielversprechend, aber noch nicht reif
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Activepieces ist eine MIT-lizenzierte Open-Source-Plattform für
              Workflow-Automatisierung mit starkem KI-Fokus. Gegründet 2022,
              unterstützt von Y Combinator, aber mit nur 500.000,- €
              Finanzierung und im Pre-1.0-Stadium. Wir zeigen Ihnen ehrlich, wo
              Activepieces glänzt – und wo die Grenzen liegen.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Ehrliche Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              MIT-Lizenz &bull; Pre-1.0 &bull; AI-First &bull; 500K €
              Finanzierung
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

      {/* 2. Was ist Activepieces? */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Überblick</IntroBox.PreHeadline>
          <IntroBox.Headline>Was ist Activepieces?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Activepieces wurde 2022 von Mohammad AbuAboud (ex-Google) und Ashraf
            gegründet. Die Plattform nutzt einen schrittbasierten, linearen
            Builder – im Gegensatz zu n8ns node-basiertem Canvas mit
            Verzweigungen. Mit rund 560 sogenannten &quot;Pieces&quot; bietet
            sie Integrationen für gängige SaaS-Tools. Die MIT-Lizenz ist echtes
            Open Source, ohne die Einschränkungen von n8ns Fair-Code-Modell. Y
            Combinator ist der einzige bekannte Investor mit 500.000,- € Seed.
            Die aktuelle Version 0.78 zeigt: Activepieces ist jung, ambitioniert
            und vielversprechend – aber noch nicht Enterprise-reif.
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 3. Stärken & Probleme */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Pro & Contra</IntroBox.PreHeadline>
          <IntroBox.Headline>Stärken und Schwächen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Activepieces hat echte Vorteile – besonders für Einsteiger und
            budgetbewusste Teams, die einfache Automatisierungen benötigen. Aber
            bei aller Sympathie für das Projekt – diese Schwächen sollten Sie
            kennen, bevor Sie Activepieces für geschäftskritische Prozesse
            einsetzen.
          </IntroBox.Paragraph>
        </IntroBox>

        <ProsCons>
          <ProsCons.Pros>
            <ProsCons.Item
              title="MIT-Lizenz ohne Einschränkungen"
              description="Activepieces steht unter der MIT-Lizenz – der permissivsten Open-Source-Lizenz überhaupt. Im Gegensatz zu n8ns Sustainable Use License dürfen Sie den Code beliebig modifizieren, forken und kommerziell weiterverbreiten. Für Unternehmen, die maximale Lizenzfreiheit benötigen, ist das ein echtes Alleinstellungsmerkmal."
            />
            <ProsCons.Item
              title="Einfachster Einstieg für Anfänger"
              description="Der schrittbasierte Builder stellt Workflows als vertikale Abfolge dar – wie eine To-Do-Liste statt eines komplexen Graphen. Für Nicht-Techniker, die ihre erste Automatisierung bauen, ist das intuitiver als n8ns node-basierter Canvas. 4,8 von 5 Sternen auf G2 bestätigen die Benutzerfreundlichkeit."
            />
            <ProsCons.Item
              title="Unbegrenzte Tasks auf bezahlten Plänen"
              description="Auf bezahlten Cloud-Plänen gibt es kein Per-Task-Metering. Während Zapier und Make pro Operation abrechnen, zahlen Sie bei Activepieces einen Festpreis für unbegrenzte Task-Ausführungen. Das macht die Kosten planbar – solange Sie auf der Cloud bleiben."
            />
            <ProsCons.Item
              title="AI-First mit MCP-Toolkit"
              description="Activepieces positioniert sich aggressiv als KI-Plattform: 280+ Pieces als MCP-Server, native AI Agents, AI Copilot im Builder und integrierte Tables für Datenhaltung. Für einfache KI-Workflows ohne technische Tiefe ist das ein schneller Einstieg."
            />
            <ProsCons.Item
              title="Community-Pieces-System"
              description="Über 60 Prozent aller Pieces stammen von der Community. Das TypeScript-basierte Framework mit npm-Paketen erleichtert Beiträge. Allerdings: Die Qualität variiert erheblich, und Pieces müssen ins Hauptrepository gemergt werden – kein direkter Install wie bei n8n Community Nodes."
            />
            <ProsCons.Item
              title="White-Label und Embed-Lösung"
              description="SaaS-Unternehmen können Activepieces als White-Label in eigene Produkte einbetten – ab 30.000,- € pro Jahr. Das ist eine Nische, die n8n in dieser Form nicht bedient. Für SaaS-Builder mit Automatisierungsbedarf ein relevantes Feature."
            />
          </ProsCons.Pros>
          <ProsCons.Cons>
            <ProsCons.Item
              title="Bis zu 15 Sekunden pro Task"
              description="Benchmarks zeigen: Einfache Tasks dauern auf Activepieces rund 15 Sekunden. Vergleichbare Tools wie n8n schaffen das in unter einer Sekunde. Bei 1.000 Ausführungen täglich summiert sich das auf über 4 Stunden Wartezeit gegenüber 17 Minuten bei n8n. Ursache ist das Sandboxing-Modell."
            />
            <ProsCons.Item
              title="Nur 500.000,- € Finanzierung"
              description="Activepieces hat eine einzige Seed-Runde von Y Combinator erhalten – 500.000,- € im Jahr 2022. Seitdem keine weitere Finanzierung. Zum Vergleich: n8n hat 253 Millionen € eingesammelt und wird mit 2,5 Milliarden € bewertet. Bei einem Team von geschätzt unter 20 Mitarbeitern ist die langfristige Tragfähigkeit fraglich."
            />
            <ProsCons.Item
              title="Uneinheitliche Integrationsqualität"
              description="Rund 60 Prozent der Pieces stammen von der Community. Viele sind unvollständig: Actions ohne Triggers oder umgekehrt. Die Integrationstiefe variiert stark. Deutsche Business-Software wie DATEV, Lexoffice oder SevDesk fehlt komplett – der deutsche Markt ist für ein US-Startup keine Priorität."
            />
            <ProsCons.Item
              title="Kein EU-Cloud-Rechenzentrum"
              description="Activepieces ist ein US-Unternehmen mit Sitz in Newark, New Jersey. Die Cloud-Version hat kein europäisches Rechenzentrum. DSGVO-Konformität ist nur über Self-Hosting möglich. n8n bietet als Berliner GmbH Cloud-Hosting in Frankfurt."
            />
            <ProsCons.Item
              title="Eingeschränkte Enterprise-Features"
              description="SSO, RBAC und Audit Logs gibt es nur in der kostenpflichtigen Enterprise-Version. Kritisch: Das Upgrade von Community (PGLite) auf Enterprise (PostgreSQL) erfordert einen Datenbankwechsel – kein nahtloser Übergang. Keine offiziellen Kubernetes Helm Charts, kein Draft/Published-System."
            />
            <ProsCons.Item
              title="Pre-1.0 Stabilitätsbedenken"
              description="Activepieces ist bei Version 0.78 – noch vor dem 1.0-Meilenstein. Breaking Changes zwischen Versionen sind wahrscheinlicher als bei reifen Produkten. Kein dediziertes Enterprise-Support-Team mit SLAs. Community-Support als Hauptkanal bedeutet: keine garantierten Antwortzeiten."
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
            Activepieces bietet transparente Preise – sowohl in der Cloud als
            auch selbst gehostet. Die konkreten Zahlen im Überblick.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-8">
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">Cloud-Pläne</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Der Free-Plan umfasst 1.000 Tasks pro Monat und bis zu 10 aktive
              Flows. Der Standard-Plan kostet 5,- € pro aktivem Flow mit
              unbegrenzten Tasks. Der Plus-Plan liegt bei 25,- € pro Monat, der
              Business-Plan bei 150,- € pro Monat mit erweiterten
              Team-Features. Enterprise-Kunden verhandeln individuelle
              Jahresverträge mit SSO, RBAC und Audit Logs. Cloud-Tasks kosten
              zusätzlich 1,- € pro 1.000 Tasks auf dem Free-Plan.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">Self-Hosted</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Die Community Edition ist kostenlos mit unbegrenzten Tasks.
              Mindestanforderungen: 1,5 GB RAM und 2 CPU Cores. Für
              Produktivumgebungen empfiehlt sich PostgreSQL und Redis statt des
              eingebetteten PGLite. Die Enterprise Edition mit SSO und RBAC
              erfordert einen separaten Lizenzvertrag – Preise auf Anfrage, etwa
              ab 999,- € pro Monat. Wichtig: Ein Upgrade von Community auf
              Enterprise erfordert einen Datenbankwechsel.
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
            Activepieces setzt stark auf Künstliche Intelligenz und positioniert
            sich als &quot;AI-first&quot; Plattform. Was das konkret bedeutet.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-8">
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">AI Agents und MCP-Toolkit</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Activepieces bietet das größte Open-Source-MCP-Toolkit mit über
              280 Pieces als MCP-Server. KI-Agenten können ohne Code gebaut
              werden und interagieren mit OpenAI, Anthropic Claude und Google
              Gemini. Die Agenten analysieren eingehende Daten, prüfen
              Bedingungen und wählen das passende Tool. Für einfache
              KI-Workflows ein schneller Einstieg.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard>
            <Typo.H3 className="mb-3 text-xl">AI Copilot und Tables</Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Der AI Copilot schlägt Workflow-Schritte direkt im Builder vor und
              beschleunigt die Erstellung. Integrierte Tables bieten eine
              Airtable-ähnliche Datenbank direkt in der Plattform –
              nutzbar als Datenquelle für Workflows und AI Agents. Im
              Vergleich: n8n bietet tiefere LangChain-Integration, Vector Store
              Nodes und die Möglichkeit, Self-Hosted LLMs einzubinden – was
              für datensensible Anwendungsfälle entscheidend ist.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* 6. Brancheneignung */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Zielgruppe</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Für wen eignet sich Activepieces?
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Activepieces ist kein Tool für jeden. Eine ehrliche Einschätzung,
            für welche Szenarien es passt – und für welche nicht.
          </IntroBox.Paragraph>
        </IntroBox>

        <IndustryFit>
          <IndustryFit.Good>
            <IndustryFit.GoodItem title="Startups und Solopreneure">
              Begrenztes Budget, einfache Automatisierungen ohne Programmierkenntnisse.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="MIT-Lizenzbedarf">
              Unternehmen, die explizit die MIT-Lizenzfreiheit benötigen.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="SaaS-Builder">
              White-Label-Embed-Lösung für eigene Produkte.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Hobby-Entwickler">
              Kostenlose Self-Hosted-Plattform zum Ausprobieren.
            </IndustryFit.GoodItem>
          </IndustryFit.Good>
          <IndustryFit.Poor>
            <IndustryFit.PoorItem title="Enterprise-Kunden">
              Komplexe Anforderungen und SLA-Bedarf.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Regulierte EU-Branchen">
              Kein EU-Rechenzentrum, kein deutsches Unternehmen.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="High-Volume-Workflows">
              15 Sekunden pro Task sind für produktionskritische Prozesse inakzeptabel.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Deutsche Unternehmen">
              DATEV, Lexoffice oder SevDesk fehlen komplett.
            </IndustryFit.PoorItem>
          </IndustryFit.Poor>
        </IndustryFit>
      </ContentWrapper>

      {/* 7. Vergleichsmatrix */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Vergleich</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Activepieces vs. n8n im Direktvergleich
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Die wichtigsten Unterschiede auf einen Blick – basierend auf
            öffentlich verfügbaren Daten vom März 2026.
          </IntroBox.Paragraph>
        </IntroBox>

        <ToolComparisonTable currentTool="activepieces" />
      </ContentWrapper>

      {/* 8. CTA */}
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
