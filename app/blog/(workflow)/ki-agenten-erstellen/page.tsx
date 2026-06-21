import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "ki-agenten-erstellen",
  author: "Max Hänsel",
  date: "2026-06-11",
  image: "/blog/ki-agenten-erstellen/hero.png",
  tags: ["ki", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "KI-Agenten erstellen: Tool-Vergleich und Entscheidungshilfe für den Mittelstand",
  description:
    "Welches Tool für welchen KI-Agenten? Ehrlicher Vergleich von n8n, Make, Copilot Studio, LangGraph und Co. mit Preisen, DSGVO-Lage und vier Praxis-Use-Cases.",
  openGraph: {
    title:
      "KI-Agenten erstellen: Der Tool-Vergleich für den deutschen Mittelstand",
    description:
      "Zwei Entscheidungen vor jeder Tool-Wahl, neun Bausteine, vier Use-Cases und zehn typische Fallen beim Bau von KI-Agenten im Jahr 2026.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/ki-agenten-erstellen/hero.png",
        width: 1200,
        height: 630,
        alt: "Operations- und IT-Team eines deutschen Mittelständlers bewertet KI-Agenten-Plattformen am Monitor",
      },
    ],
  },
  alternates: {
    canonical: "/blog/ki-agenten-erstellen",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          KI-Agenten erstellen: Die ehrliche Entscheidungshilfe für den
          deutschen Mittelstand
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>14 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-06-11">
            11. Juni 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/ki-agenten-erstellen/hero.png"
          alt="Operations- und IT-Team eines deutschen Mittelständlers bewertet verschiedene KI-Agenten-Plattformen gemeinsam am Monitor"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              KI-Agenten erstellen ist 2026 kein Tooling-Problem mehr. Die
              technische Hürde ist niedrig genug, dass eine Person mit ein paar
              Stunden Einarbeitung einen funktionierenden Agenten bauen kann.
              Was hoch geblieben ist, sind die Folgekosten der falschen
              Tool-Entscheidung. Wer im Mai 2026 noch alles auf der OpenAI
              Assistants API aufsetzt, hat im August 2026 den Sunset zu
              migrieren. Wer auf AutoGen setzt, baut auf einem Framework, das
              Microsoft selbst in den Maintenance-Modus geschickt hat. Wer im
              Mittelstand mit Make.com startet und nicht die Credit-Mechanik
              kennt, bekommt die Rechnung erst nach dem dritten Produktionsmonat.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Beitrag schaut tool-agnostisch auf die Frage, wie man 2026
              im deutschen Mittelstand einen Agenten baut, der mehr ist als ein
              Hello-World-Demo. Er vergleicht ehrlich die drei Plattform-
              Kategorien (No-/Low-Code, Pro-Code-Frameworks, Hosted-Services),
              zeigt für vier konkrete Use-Cases die jeweils sinnvollste Wahl
              und listet die neun Bausteine auf, die ein Agent in Produktion
              braucht. Wer tiefer in eine spezifische Plattform einsteigen
              will, findet die Spokes verlinkt: für n8n die{" "}
              <Link
                href="/blog/n8n-ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                n8n-Praxisanleitung für KI-Agenten
              </Link>
              {" "}und für das theoretische Fundament den{" "}
              <Link
                href="/blog/wie-baut-man-ki-agents"
                className="text-primary-600 hover:underline"
              >
                Bauplan für KI-Agents nach Anthropic
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="zwei-entscheidungen">
              Zwei Entscheidungen vor jeder Tool-Wahl
            </Typo.H2>
            <Typo.Paragraph>
              80 Prozent der gescheiterten Mittelstands-Pilotprojekte haben
              dasselbe Muster: Tool wurde vor der Strategie gewählt. Zwei
              Fragen klären die meisten Verirrungen, bevor sie passieren.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-agenten-erstellen/entscheidungs-flow.png"
              alt="Entscheidungs-Flow für die Tool-Wahl bei KI-Agenten mit zwei Entscheidungspunkten und vier Endknoten"
              width={1200}
              height={630}
            />

            <Typo.H3>Brauchst du wirklich einen Agent?</Typo.H3>
            <Typo.Paragraph>
              Ein Agent ist ein LLM, das selbst entscheidet, welche Werkzeuge
              es in welcher Reihenfolge benutzt. Das klingt mächtig und ist es
              für offene Aufgaben (Recherche, mehrstufige Reklamationsbearbei-
              tung, Sales-Outreach). Für 70 Prozent der typischen Mittelstands-
              Use-Cases reicht aber ein deterministischer Workflow mit einem
              oder zwei LLM-Aufrufen vollständig aus. Eingangsrechnung
              extrahieren und vorkontieren? Workflow. Bestelleingang aus
              E-Mail parsen und ins ERP? Workflow. Reklamation routen und
              taggen? Workflow. Anthropic empfiehlt in der Doktrin{" "}
              <em>Building Effective Agents</em>: Wenn eine Prompt-Chain das
              Problem löst, baue keine Agent-Architektur. Die häufigste
              Fehlentscheidung beim Agentic-Design ist der Griff zu
              Multi-Agent-Systemen, wenn drei gut formulierte Prompts in einer
              Kette ausgereicht hätten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Tatsächlich agentisch wird ein Use-Case erst, wenn der Pfad
              nicht vorhersehbar ist. Eine Recherche, die je nach Quelle drei,
              fünf oder zehn Tool-Aufrufe braucht. Eine Lieferanten-Risiko-
              Bewertung, die je nach News-Lage andere Datenpunkte zieht. Ein
              Mitarbeiter-Chatbot, der je nach Frage SharePoint, das Wiki oder
              das ERP anzapft. Wenn dein Use-Case eine ablaufdiagrammtaugliche
              Struktur hat, ist es ein Workflow.
            </Typo.Paragraph>

            <Typo.H3>Hosted oder selbst bauen?</Typo.H3>
            <Typo.Paragraph>
              Die zweite Frage ist Make-or-Buy. Hosted-Plattformen wie
              Microsoft Copilot Studio, Langdock oder die ChatGPT Workspace
              Agents geben dir einen vorkonfigurierten Stack: Memory,
              Connectoren, Admin-Konsole, Logging. Du gibst Vendor-Lock-in,
              Preistransparenz und Tiefe der Integration auf, bekommst dafür
              Geschwindigkeit. Selbst bauen mit n8n, LangGraph oder dem Claude
              Agent SDK kostet mehr Engineering, aber du behältst Daten,
              Kosten und Architektur in der Hand. Für die meisten
              Mittelständler ist eine Mischform die richtige Antwort:
              Workflow-Orchestrator selbst hosten (n8n auf einer
              EU-Maschine), darin Agent-Knoten verwenden, LLM über AWS
              Bedrock Frankfurt oder Azure OpenAI Sweden Central. Hosted-
              Services sinnvoll für klar umrissene Wissens-Chatbots oder
              MS-365-zentrierte Office-Automation, weniger sinnvoll für tiefe
              ERP-Integration.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="tool-landschaft">
              Die Tool-Landschaft im Überblick
            </Typo.H2>
            <Typo.Paragraph>
              2026 lassen sich Agent-Plattformen in vier Kategorien einteilen.
              Jede deckt einen anderen Punkt im Make-or-Buy-Spektrum ab.
            </Typo.Paragraph>

            <Typo.H3>1. No-Code- und Low-Code-Workflow-Plattformen</Typo.H3>
            <Typo.Paragraph>
              n8n, Make.com, Microsoft Power Automate und Zapier bieten alle
              inzwischen einen AI-Agent-Node oder ein vergleichbares Modul. Du
              baust visuell, der Agent ist ein Knoten in einem größeren
              Workflow, der Trigger, Vorverarbeitung und Folgeaktionen
              orchestriert. Die Plattform kümmert sich um Credentials,
              Logging, Retries und Connectoren zu hundert anderen Systemen.
              Das ist der schnellste Weg für deutsche Mittelständler, weil
              die ERP-, Mail- und CRM-Anbindung in der Realität 60 bis 80
              Prozent des Aufwands ausmacht und genau hier diese Plattformen
              stark sind.
            </Typo.Paragraph>
            <Typo.Paragraph>
              n8n ist der Default für DACH-Mittelständler mit
              Self-Host-Anforderung. Open Source (fair-code), eine Cloud-
              Variante in Azure Frankfurt für 24 Euro pro Monat im Starter-
              Plan, und seit April 2026 nur noch Executions statt Workflow-
              Limits in der Abrechnung. Make.com ist visuell etwas
              eingänglicher, hat 3.000 plus App-Konnektoren, kostet im
              Credit-Modell aber 43 bis 50 Credits pro AI-Agent-Execution
              gegenüber wenigen Credits für klassische Szenarien. Power
              Automate ist die natürliche Wahl, wenn der Stack ohnehin
              M365-zentriert ist und Business Central oder Dynamics im Spiel
              ist. Zapier Agents (GA seit Mai 2025) sind US-Hosting-Default
              und für deutsche Mittelständler oft DSGVO-kritisch.
            </Typo.Paragraph>

            <Typo.H3>2. Pro-Code-Frameworks</Typo.H3>
            <Typo.Paragraph>
              LangChain mit LangGraph 1.0 (stable seit Q4 2025) ist 2026 der
              Industrie-Default für produktive Agenten in Custom-Code-Stacks.
              Durable State, Checkpointing, Time-Travel-Debugging und
              eingebaute Human-in-the-Loop-Patterns sind erstklassige
              Features. Uber, LinkedIn, Klarna setzen es ein. Die Lernkurve
              ist steil, Python- oder TypeScript-Kenntnisse Pflicht. Wer im
              Mittelstand keine eigenen Entwickler hat, ist hier falsch.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Claude Agent SDK von Anthropic bündelt Tool Use,
              Computer Use und Skills in einem kohärenten Framework. Mit
              Programmatic Tool Calling lässt sich Tool-Orchestrierung im
              generierten Code abbilden, was Token-Roundtrips und Latenz
              spart. Das Tool Search Tool erlaubt 10.000 plus Tools im
              Agenten, ohne das Context Window zu sprengen. Anthropic
              Skills sind seit Oktober 2025 ein offener Standard, von
              Microsoft VS Code, GitHub, Cursor und Goose adoptiert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die OpenAI Responses API und Conversations API ist der
              Nachfolger der Assistants API, die am{" "}
              <strong>26. August 2026 abgeschaltet</strong> wird. Wer
              heute auf Assistants baut, plant entweder noch dieses
              Quartal die Migration oder akzeptiert die Notabschaltung.
              AutoGen ist seit Anfang 2026 in Maintenance, Microsoft
              empfiehlt neue Projekte auf dem Microsoft Agent Framework.
              CrewAI bleibt einsteigerfreundlich für Multi-Agent-Prototypen,
              ist aber im Production-Mittelstand eher Nische.
            </Typo.Paragraph>

            <Typo.H3>3. Hosted-Plattformen</Typo.H3>
            <Typo.Paragraph>
              <Link
                href="/blog/copilot-agent-erstellen"
                className="text-primary-600 hover:underline"
              >
                Microsoft Copilot Studio
              </Link>{" "}
              ist 2026 die natürliche Wahl für
              MS-365-zentrierte Unternehmen. Tiefe Integration in
              Power Platform, Dataverse als Memory-Backend, native MCP-
              Konnektoren und Enterprise-Admin-Controls. Die Pricing-Logik
              hat eine Falle: ein Capacity Pack kostet 200 USD pro Monat
              für 25.000 Credits, ein Script-Antwort verbraucht 1 Credit,
              eine Reasoning-Antwort 100 Credits. Wer das Mengengerüst nicht
              kennt, kalkuliert sich um Faktor 100 schief. ChatGPT Workspace
              Agents (April 2026 gelauncht) sind der Nachfolger der Custom
              GPTs mit nativen Konnektoren in Slack, Drive, Salesforce,
              Notion und Atlassian. Hosting ist US-Default mit Azure-Frankfurt-
              Option für Enterprise.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Google Vertex AI Agent Builder (rebrandet als Gemini Enterprise
              Agent Platform) ist seit März 2026 nativ MCP-fähig. Pricing
              ist pay-per-use mit fünf Komponenten: Agent Engine Runtime
              (0,0864 USD pro vCPU-Stunde), Session Storage (0,25 USD pro
              1.000 Events seit Ende Januar 2026), Vertex AI Search,
              Modell-Tokens und Memory Bank. AWS Bedrock AgentCore bietet
              31 Modelle in Frankfurt, hat aber ein noch komplexeres
              fünfschichtiges Pricing-Modell (Runtime, Gateway, Memory,
              Identity, Policy). Ohne FinOps-Disziplin ist der Token-
              Verbrauch schwer zu antizipieren. Langdock aus Berlin ist die
              europäische Alternative mit 100 Prozent EU-Hosting,
              Multi-Modell-Support und 1.500 plus Kunden, besonders relevant
              für regulierte Branchen.
            </Typo.Paragraph>

            <Typo.H3>4. Europäische, souveräne Modelle</Typo.H3>
            <Typo.Paragraph>
              Aleph Alpha Pharia (Heidelberg), Mistral Large 2 (Paris) und
              Llama 3.3 70B (Open Weights via Ollama) sind Optionen, wenn
              Datenhoheit Pflicht ist. Aleph Alpha kann on-premise oder in
              EU-Cloud laufen, ist Bundeswehr-tauglich und 2026 in
              Merger-Gesprächen mit Cohere. Mistral Le Chat Enterprise
              bietet AVV nach EU-Recht mit Hosting in der EU. Llama 3.3 70B
              läuft auf einer eigenen GPU-Workstation (zwei mal A6000 oder
              eine H100, 8.000 bis 25.000 Euro Hardware) und liefert in
              vielen Use-Cases brauchbare Qualität, ohne dass ein einziger
              Token einen externen Provider verlässt. Mehr Details zur
              DSGVO-Lage stehen im{" "}
              <Link
                href="/blog/dsgvo-konforme-ki-tools"
                className="text-primary-600 hover:underline"
              >
                Guide zu DSGVO-konformen KI-Tools
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="vergleichsmatrix">
              Vergleichsmatrix für den Mittelstand
            </Typo.H2>
            <Typo.Paragraph>
              Eine Bewertung der wichtigsten Plattformen entlang von sechs
              Dimensionen, die für deutsche Mittelständler 50 bis 1.000 MA
              relevant sind. Die Bewertung ist als praktische Heuristik
              gedacht, nicht als absolute Wahrheit, einzelne Use-Cases können
              das Bild kippen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-agenten-erstellen/tool-vergleich.png"
              alt="Tool-Vergleichsmatrix mit DSGVO Pricing Lernkurve Self-Host Multi-System und ICP-Fit als Heatmap"
              width={1200}
              height={630}
            />

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Tool</DataTable.HeaderCell>
                  <DataTable.HeaderCell>DSGVO/EU</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Pricing-Klarheit</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Lernkurve</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Self-Host</DataTable.HeaderCell>
                  <DataTable.HeaderCell>ICP-Fit</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>n8n</DataTable.Cell>
                  <DataTable.Cell>sehr gut</DataTable.Cell>
                  <DataTable.Cell>sehr gut</DataTable.Cell>
                  <DataTable.Cell>mittel</DataTable.Cell>
                  <DataTable.Cell>ja</DataTable.Cell>
                  <DataTable.Cell>A+</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Langdock</DataTable.Cell>
                  <DataTable.Cell>sehr gut</DataTable.Cell>
                  <DataTable.Cell>gut</DataTable.Cell>
                  <DataTable.Cell>niedrig</DataTable.Cell>
                  <DataTable.Cell>nein</DataTable.Cell>
                  <DataTable.Cell>A</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Copilot Studio</DataTable.Cell>
                  <DataTable.Cell>gut</DataTable.Cell>
                  <DataTable.Cell>mittel</DataTable.Cell>
                  <DataTable.Cell>hoch (non-MS)</DataTable.Cell>
                  <DataTable.Cell>nein</DataTable.Cell>
                  <DataTable.Cell>A (MS-Shops), sonst B</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Claude via Bedrock EU</DataTable.Cell>
                  <DataTable.Cell>gut</DataTable.Cell>
                  <DataTable.Cell>sehr gut</DataTable.Cell>
                  <DataTable.Cell>mittel</DataTable.Cell>
                  <DataTable.Cell>nein</DataTable.Cell>
                  <DataTable.Cell>A</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>LangGraph</DataTable.Cell>
                  <DataTable.Cell>sehr gut</DataTable.Cell>
                  <DataTable.Cell>gut</DataTable.Cell>
                  <DataTable.Cell>hoch</DataTable.Cell>
                  <DataTable.Cell>ja</DataTable.Cell>
                  <DataTable.Cell>B+ (nur mit Devs)</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Vertex AI</DataTable.Cell>
                  <DataTable.Cell>mittel</DataTable.Cell>
                  <DataTable.Cell>mittel</DataTable.Cell>
                  <DataTable.Cell>mittel</DataTable.Cell>
                  <DataTable.Cell>nein</DataTable.Cell>
                  <DataTable.Cell>B</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Make.com</DataTable.Cell>
                  <DataTable.Cell>mittel</DataTable.Cell>
                  <DataTable.Cell>mittel</DataTable.Cell>
                  <DataTable.Cell>niedrig</DataTable.Cell>
                  <DataTable.Cell>nein</DataTable.Cell>
                  <DataTable.Cell>B</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Zapier Agents</DataTable.Cell>
                  <DataTable.Cell>niedrig</DataTable.Cell>
                  <DataTable.Cell>mittel</DataTable.Cell>
                  <DataTable.Cell>niedrig</DataTable.Cell>
                  <DataTable.Cell>nein</DataTable.Cell>
                  <DataTable.Cell>C</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Aleph Alpha Pharia</DataTable.Cell>
                  <DataTable.Cell>sehr gut</DataTable.Cell>
                  <DataTable.Cell>auf Anfrage</DataTable.Cell>
                  <DataTable.Cell>hoch</DataTable.Cell>
                  <DataTable.Cell>ja</DataTable.Cell>
                  <DataTable.Cell>A (regulierte Branchen)</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Faustregel aus Pilotprojekten: n8n plus Claude Sonnet 4.6 via
              AWS Bedrock Frankfurt deckt 70 bis 80 Prozent der Mittelstands-
              Use-Cases pragmatisch ab. Copilot Studio steigt ein, sobald
              eine echte M365-Investition existiert. LangGraph kommt ins
              Spiel, sobald ein internes Engineering-Team existiert und der
              Use-Case echtes Multi-Agent-Behaviour verlangt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="use-cases">
              Vier Use-Cases mit konkreter Tool-Empfehlung
            </Typo.H2>
            <Typo.Paragraph>
              Statt abstrakter Plattformbewertung sind die folgenden vier
              Use-Cases der direkte Bezugsrahmen für die meisten
              Mittelstandsprojekte 2026. Pro Use-Case eine Tool-Empfehlung
              mit Begründung, eine realistische Implementierungsdauer und die
              drei häufigsten Stolpersteine.
            </Typo.Paragraph>

            <Typo.H3>Use-Case 1: Bestelleingang aus E-Mails ins ERP</Typo.H3>
            <Typo.Paragraph>
              Eingehende Bestellungen kommen per E-Mail mit PDF-Anhang oder
              Freitext, ein Agent extrahiert Felder (Kundennummer, Positionen,
              Mengen, Liefertermin), matcht gegen Stammdaten und legt bei
              hoher Confidence direkt einen Sales Order in SAP Business One,
              Business Central oder einem ähnlichen System an. Empfehlung:{" "}
              <strong>n8n plus Claude Sonnet 4.6 via Bedrock Frankfurt</strong>.
              Begründung: Die ERP-Konnektivität ist der Hauptaufwand, n8n
              hat dafür native Nodes oder lässt sich über HTTP-Calls
              schnell anbinden. Sonnet 4.6 liefert sehr gute strukturierte
              JSON-Outputs, das ist hier entscheidend. Self-Host auf eigener
              EU-Maschine löst die DSGVO-Frage. Implementierung: 2 bis 4
              Wochen Pilot mit einem Belegtyp und einer Mailbox, 8 bis 12
              Wochen für die Produktivnahme mit Stammdaten-Matching und
              Eskalations-Workflows. Stolpersteine: PDF-OCR-Qualität bei
              gescannten Belegen schwankt stark (Azure Document Intelligence
              als Vorstufe planen), Confidence-Schwellen unter 0,85 immer in
              die Human-Queue, Lieferanten-Artikelnummern versus eigene SKUs
              brauchen ein Mapping. Tiefe in den{" "}
              <Link
                href="/blog/n8n-ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                Praxisanleitung n8n KI-Agenten
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>Use-Case 2: Lieferanten-Anfragen automatisch beantworten</Typo.H3>
            <Typo.Paragraph>
              Eingehende RFQs (Request for Quote) werden gematcht mit
              aktuellen Konditionen, Lagerverfügbarkeit und Standardpreisen,
              der Agent erstellt einen Quote-Entwurf und routet zur Innendienst-
              Freigabe. Empfehlung:{" "}
              <strong>n8n plus Claude Sonnet 4.6 plus interner Vektor-Store</strong>
              {" "}(Qdrant oder pgvector self-hosted). Bei tiefer SAP-Integration
              lohnt sich Copilot Studio mit Dataverse zu prüfen, sonst ist
              eine eigene Lösung kosteneffizienter. Für regulierte Branchen
              wäre Langdock eine Alternative. Implementierung: 4 bis 8 Wochen
              Pilot, 3 bis 6 Monate Produktivnahme. Stolpersteine: Preislogik
              ist oft kundenspezifisch und nicht maschinell erfassbar
              (kundenspezifische Rabatte, Volumen-Staffeln, Frachtkosten),
              Verbindlichkeit der Quote darf nie ohne Mensch-Freigabe entstehen,
              die Stammdatenqualität entscheidet über die Trefferquote des
              Matching-Schritts. Tiefer in den Großhandels-Kontext im{" "}
              <Link
                href="/blog/agentic-ai-im-grosshandel"
                className="text-primary-600 hover:underline"
              >
                Agentic-AI-Guide für den Großhandel
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>Use-Case 3: Wissensdatenbank-Chatbot für Mitarbeiter</Typo.H3>
            <Typo.Paragraph>
              Ein RAG-Agent beantwortet Fragen zu interner Doku
              (Confluence, SharePoint, Drive) mit Quellenangabe. Beispielfragen:
              wie beantrage ich Spesen, welches SAP-Modul nutzen wir für X,
              wie ist der aktuelle Stand zum Lieferantenwechsel Müller GmbH.
              Empfehlung:{" "}
              <strong>Langdock</strong> wenn EU-Hosting Pflicht ist und kein
              Self-Build-Anspruch besteht, sonst{" "}
              <strong>Copilot Studio plus Dataverse</strong> im MS-365-Stack,
              oder als Maximum an Kontrolle{" "}
              <strong>n8n plus Qdrant plus Claude</strong>. Implementierung:
              1 bis 3 Wochen Pilot, 6 bis 10 Wochen Produktivnahme mit
              Berechtigungs-Sync. Stolpersteine: der Berechtigungs-Sync ist
              80 Prozent des Aufwands, ACLs aus Confluence oder SharePoint
              müssen im Retrieval-Schritt durchgesetzt werden, sonst leakt
              der Bot vertrauliche Inhalte. Schlechte Doku-Qualität führt
              zu Halluzinationen, eine Inventur vor dem Projekt ist
              Pflicht. Agentic RAG (parallele Retrieval- und Validation-
              Agenten) ist 2026 das dominante Pattern, aber für den ersten
              Wurf überdimensioniert, klassisches RAG reicht zum Start.
            </Typo.Paragraph>

            <Typo.H3>Use-Case 4: Rechnungsfreigabe mit 3-Wege-Abgleich</Typo.H3>
            <Typo.Paragraph>
              Eingehende Rechnung wird OCR-t, der Agent matcht gegen Bestellung
              (PO) und Wareneingangsbeleg (Goods Receipt) und entscheidet:
              Match führt zu automatischer Freigabe, Toleranzabweichung zu
              Routing an Sachbearbeiter, harter Mismatch zur Eskalation an
              Einkauf. Effizienzgewinn dokumentiert: 10 bis 16 Minuten pro
              Rechnung manuell versus 2 bis 4 Minuten mit Automation.
              Empfehlung:{" "}
              <strong>n8n plus Azure Document Intelligence plus Claude
              Sonnet 4.6 plus ERP-Connector</strong>. Alternativ spezialisierte
              AP-Lösungen (Rillion, Turian, Mailytica) für reduzierten
              Eigenaufwand, aber höhere Lizenzkosten. Implementierung: 6 bis
              10 Wochen Pilot, 4 bis 6 Monate Produktivnahme. Stolpersteine:
              Skonto-Logik und Steuersätze (Reverse-Charge, EU-Ausland)
              müssen sauber abgebildet werden, das interne Kontrollsystem
              fordert auditfähiges Logging jeder Freigabe, der EU AI Act
              kann bei automatischen Zahlungsfreigaben über Schwellen zur
              High-Risk-Klassifikation führen. Mehr Hintergrund im{" "}
              <Link
                href="/automatische-rechnungspruefung"
                className="text-primary-600 hover:underline"
              >
                Service Rechnungsprüfung
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="bausteine">
              Neun Bausteine eines produktionsreifen Agents
            </Typo.H2>
            <Typo.Paragraph>
              Tool-unabhängig braucht jeder produktive Agent dieselben neun
              Bausteine. Wer einen davon weglässt, baut einen Prototyp, der
              irgendwann unangenehm überrascht.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-agenten-erstellen/bausteine-agent.png"
              alt="Neun Bausteine eines produktionsreifen KI-Agents als gestapelte Schichten von Compute bis Cost Controls"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              <strong>1. Compute:</strong> Self-Hosted auf EU-Maschine
              (Hetzner, IONOS, Mittwald) ab 5 bis 10 Euro pro Monat oder
              managed in einer EU-Region. Für On-Prem-LLMs eine GPU-Workstation
              mit 2 mal A6000 oder 1 mal H100. <strong>2. LLM:</strong>{" "}
              Auswahl nach Task. Reasoning braucht Sonnet 4.6, Opus 4.7 oder
              GPT-5.4. Einfaches Routing und Extraction reicht Haiku 4.5 oder
              GPT-4.1-mini. Latenzkritisch Gemini Flash. Klein anfangen und
              eskalieren ist die Faustregel. <strong>3. Tools und MCP-
              Konnektoren:</strong> Strukturierte Schnittstellen zu externen
              Systemen. MCP als Default-Protokoll für neue Tools, seit
              Dezember 2025 an die Linux Foundation gespendet und mit 78
              Prozent Adoption in Enterprise-AI-Teams (Stand April 2026)
              der De-facto-Standard.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>4. Memory:</strong> Kurzfristige Conversation-History
              ist Standard in allen Frameworks, persistente Langzeit-Memory
              braucht eine eigene Lösung. Vertex Memory Bank kostet 0,25
              USD pro 1.000 Events, n8n oder LangGraph lassen sich mit
              Postgres-Backend self-host konfigurieren.{" "}
              <strong>5. Retrieval (RAG):</strong> Vektor-Store (Qdrant,
              Weaviate, pgvector), Embedding-Modell (text-embedding-3-large
              oder Cohere embed-multilingual-v3) und Hybrid-Search (Vektor
              plus BM25) sind 2026 Standard. <strong>6. Guardrails:</strong>{" "}
              Input-seitig Prompt-Injection-Detection und PII-Filter
              (Microsoft Presidio, Guardrails AI), Output-seitig Schema-
              Validation (Pydantic, Zod) und Halluzinations-Checks. OWASP
              LLM Top 10 als Mindeststandard.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>7. Observability:</strong> LangSmith für LangChain-Stacks,
              Langfuse als Open-Source-Self-Host-Alternative (21k plus GitHub
              Stars, seit Januar 2026 zu ClickHouse), Arize Phoenix als
              ebenfalls Open-Source-Lösung. Klassische APM (Datadog, New
              Relic) erfasst LLM-Spezifika nicht.{" "}
              <strong>8. Human-in-the-Loop:</strong> LangGraph hat es nativ
              über `interrupt()`, n8n über Wait-Nodes, Copilot Studio über
              Power-Automate-Approvals. Pflicht bei jeder Aktion mit
              finanzieller, rechtlicher oder kundenseitiger Wirkung in den
              ersten drei bis sechs Produktionsmonaten.{" "}
              <strong>9. Cost Controls:</strong> Token- und Cost-Budgets pro
              Run und Agent, Loop-Detection, Timeouts und Retry-Limits.
              Reale Fälle: ein 35-Engineer-Startup zahlte 87.000 USD pro
              Monat an Claude-Rechnung, weil ein Runaway-Loop wochenlang
              unbemerkt blieb.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="entwicklungen-2026">
              Was sich 2026 verändert hat
            </Typo.H2>
            <Typo.Paragraph>
              Drei Verschiebungen prägen die Tool-Landschaft im Mai 2026 und
              sollten in jede Architektur-Entscheidung einfließen.
            </Typo.Paragraph>

            <Typo.H3>MCP wird Standard</Typo.H3>
            <Typo.Paragraph>
              Das Model Context Protocol, von Anthropic im November 2024
              vorgestellt, wurde im Dezember 2025 an die Linux Foundation
              gespendet (Agentic AI Foundation, co-gegründet von Anthropic,
              Block und OpenAI). 78 Prozent der Enterprise-AI-Teams haben
              mindestens einen MCP-Agenten in Produktion. Die Public Server
              Registry ist von 1.200 (Q1 2025) auf über 9.400 (April 2026)
              gewachsen. Native MCP-Unterstützung gibt es in Claude, ChatGPT
              Connectors, Gemini API, Vertex AI Agent Builder, Cursor,
              Windsurf, JetBrains, Vercel AI SDK, OpenAI Agents SDK.
              Konsequenz für Mittelständler: MCP-fähige Tools bevorzugen,
              eigene Daten und Tools als MCP-Server exposeen statt
              proprietäre Integrationen bauen.
            </Typo.Paragraph>

            <Typo.H3>OpenAI Assistants API: Sunset 26. August 2026</Typo.H3>
            <Typo.Paragraph>
              Die Migration auf die Responses API und Conversations API ist
              kein Endpoint-Tausch, sondern eine grundsätzlich andere
              Architektur (Object Model, Tool Handling, State, Cost Model).
              Wer heute noch auf Assistants baut, plant entweder die
              Migration noch dieses Quartal oder akzeptiert die Notabschaltung.
              Eine Verlängerung gibt es laut OpenAI nicht.
            </Typo.Paragraph>

            <Typo.H3>EU AI Act und High-Risk-Klassifikation</Typo.H3>
            <Typo.Paragraph>
              Die Draft Guidelines der EU-Kommission zur High-Risk-
              Klassifikation wurden am 19. Mai 2026 veröffentlicht
              (Konsultation bis 23. Juni 2026). Wichtig: Agentic-Stacks
              werden als ein High-Risk-System bewertet, nicht komponentenweise.
              High-Risk-Pflichten greifen ab dem 2. August 2026 für
              Stand-alone-Systeme, ab dem 2. August 2028 für embedded.
              Wer einen Agenten baut, der Personalentscheidungen,
              Zahlungsfreigaben über Schwellen oder Bonitätsbewertungen
              automatisiert, sollte die Klassifikation früh prüfen lassen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="anti-patterns">
              Die häufigsten Fehler im Mittelstand
            </Typo.H2>
            <Typo.Paragraph>
              Aus über zwei Jahren Mittelstandsprojekten kristallisieren sich
              zehn Muster heraus, die in fast jeder gescheiterten oder
              schmerzhaft korrigierten Initiative auftauchen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-agenten-erstellen/anti-pattern-grid.png"
              alt="Acht typische Anti-Patterns beim Bau von KI-Agenten als Karten-Grid mit Warn-Icons"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              <strong>Agent gebaut, wo ein Workflow gereicht hätte.</strong>{" "}
              Für eine stabile, deterministische Aufgabe wird ein agentisches
              System mit Tool-Auswahl, Planning und Reflection gebaut.
              Resultat: höhere Latenz, höhere Kosten, schwerer zu debuggen.
              Anthropic-Doktrin: Prompt-Chain schlägt Agent, wenn das
              Problem es zulässt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Kein Logging, kein Tracing.</strong> Ohne LangSmith,
              Langfuse oder Arize ist der Agent in Produktion eine Blackbox.
              Model Drift, Tool-Call-Retry-Loops und Cost-Spikes sind
              unsichtbar. Klassische APM-Tools erfassen LLM-Spezifika nicht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Keine Evaluations.</strong> Manuelles Testen mit drei
              Prompts und „sieht gut aus" führt in Produktion bei der 50.
              E-Mail-Variante zum Bruch. 30 bis 100 reale Beispiele pro
              Use-Case als Eval-Set und automatisierte Regression-Tests
              sind Pflicht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Keine Guardrails.</strong> Prompt-Injection ist nicht
              theoretisch. Eingehende E-Mails enthalten heute schon
              Versuche, den Agenten zu manipulieren. Ohne Input-Validation
              kann der Agent Tool-Aufrufe machen, die er nicht sollte.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Fehlende Cost Controls.</strong> Agentic-Workflows
              verbrauchen typisch vier- bis achtmal die Tokens, die man
              aus User-Prompt plus Final-Response schätzt. Ohne Budget-
              Limits skalieren Rechnungen leise nach oben.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Vendor-Lock-in unterschätzt.</strong> Wer 2024 alles
              in OpenAI Assistants gebaut hat, migriert 2026 unter Zeitdruck.
              Tool-Layer (n8n, LangGraph) und Modell-Layer (Bedrock, Vertex,
              Azure OpenAI als Multi-Provider) entkoppeln.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Pilot überschätzt Produktion.</strong> Pilot bei 95
              Prozent Accuracy, Produktion bei 75. Faustregel: produktive
              Genauigkeit liegt 10 bis 15 Prozentpunkte unter dem Pilot.
              Human-in-the-Loop-Stufen einplanen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>ERP-Anbindung unterschätzt.</strong> Bei Use-Cases mit
              tiefer ERP-Integration ist Konnektivität (RFC, OData, REST)
              plus Stammdaten-Matching 60 bis 80 Prozent des Aufwands, nicht
              der „AI-Teil". n8n hat hier strukturelle Vorteile gegenüber
              reinen AI-Plattformen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Keine klare Eskalations-Strategie.</strong> Drei
              Stufen sind Standard: Confidence Threshold führt zu Human
              Review, Tool-Error zu Retry mit Backoff, wiederholtes Scheitern
              zur Eskalation an Operations mit voller Trace.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>DSGVO erst beim Roll-out gedacht.</strong> Datenflüsse,
              Verarbeitungszweck, AVV mit US-Cloud-Provider, DSFA: alles im
              Pilot ignoriert, in Produktion blockiert die Rechtsabteilung.
              Vorab klären, dann bauen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="naechste-schritte">
              In vier Wochen zur fundierten Entscheidung
            </Typo.H2>
            <Typo.Paragraph>
              Der pragmatische Einstieg ist nicht „Wir kaufen Tool X". Vier
              Wochen reichen, um eine seriöse Go-/No-Go-Entscheidung zu
              treffen, mit echten Daten statt mit Bauchgefühl.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Woche 1: Use-Case-Workshop mit dem Fachbereich. Engpass
              identifizieren, Erfolgskriterium definieren (zum Beispiel 70
              Prozent der Eingangsrechnungen mit Confidence über 0,9 ohne
              Korrektur), 200 bis 500 historische Beispiele sammeln, davon
              20 Prozent als goldenes Testset zurückhalten. Woche 2: PoC im
              Sandbox. n8n oder gewähltes Tool aufsetzen, LLM-Zugang in
              EU-Region (Bedrock Frankfurt oder Azure Sweden Central),
              ein End-to-End-Workflow mit zwei Beispielen. Woche 3: Pilot
              mit echter Freigabe-Schleife. Workflow mit Hard-Gate auf
              Mensch, 50 bis 100 echte Vorgänge parallel zum bestehenden
              Prozess. Vollständiges Logging. Woche 4: Auswertung. Genauigkeit,
              Confidence-Verteilung, Korrektur-Rate gegen das Erfolgskriterium
              aus Woche 1. Skalierungs-ROI über zwölf Monate schätzen.
              Go-/No-Go mit Roadmap zur Produktivnahme (Sicherheitskonzept,
              Verfahrensdoku, Betriebsrat-Anhörung, Schulung).
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer tiefer einsteigen will, findet die Spokes verlinkt: die{" "}
              <Link
                href="/blog/n8n-ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                n8n-Praxisanleitung
              </Link>
              {" "}für die konkrete Implementierung mit AI-Agent-Node, Tools
              und Memory, den{" "}
              <Link
                href="/blog/wie-baut-man-ki-agents"
                className="text-primary-600 hover:underline"
              >
                Bauplan nach Anthropic
              </Link>
              {" "}für die theoretischen Patterns, den{" "}
              <Link
                href="/blog/agentic-ai-im-grosshandel"
                className="text-primary-600 hover:underline"
              >
                Agentic-AI-Guide für den Großhandel
              </Link>
              {" "}für branchenspezifische Use-Cases und den{" "}
              <Link
                href="/blog/dsgvo-konforme-ki-tools"
                className="text-primary-600 hover:underline"
              >
                DSGVO-Leitfaden
              </Link>
              {" "}für die Compliance-Tiefe. Wer den Belegerkennungs-
              Use-Case lieber an einen Spezialisten vergibt als selbst zu
              bauen, findet im{" "}
              <Link
                href="/automatische-rechnungspruefung"
                className="text-primary-600 hover:underline"
              >
                Service Rechnungsprüfung
              </Link>
              {" "}eine fertige Lösung. Bluebatch begleitet deutsche
              Mittelständler bei diesen Entscheidungen.{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                Sprechen Sie uns an
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="faq">
            <Typo.H2>Häufige Fragen zum Erstellen von KI-Agenten</Typo.H2>
            <FaqContainer
              faqs={[
                {
                  question:
                    "Was ist der Unterschied zwischen einem KI-Agenten und einem KI-Workflow?",
                  answer:
                    "Ein Workflow ist eine deterministische Abfolge von Schritten, in der ein oder mehrere LLM-Aufrufe Felder extrahieren, klassifizieren oder Texte erzeugen. Der Pfad ist fest. Ein Agent ist ein LLM, das selbst entscheidet, welche Tools es in welcher Reihenfolge benutzt, um eine Aufgabe zu lösen. Faustregel: Wenn dein Use-Case als Ablaufdiagramm zeichenbar ist, baue einen Workflow. Wenn der Pfad von der Eingabe abhängt und nicht vorhersehbar ist, baue einen Agenten. Für 70 Prozent der Mittelstands-Use-Cases reicht ein Workflow.",
                },
                {
                  question:
                    "Welches Tool ist 2026 die beste Wahl für deutsche Mittelständler?",
                  answer:
                    "Eine pauschale Antwort gibt es nicht, aber eine Default-Empfehlung: n8n als Orchestrator (self-hosted auf einer EU-Maschine) plus Claude Sonnet 4.6 oder GPT-5.4 als LLM via AWS Bedrock Frankfurt oder Azure OpenAI Sweden Central. Damit deckst du DSGVO, Pricing-Klarheit und ERP-Anbindungstiefe ab. Für MS-365-zentrierte Unternehmen ist Microsoft Copilot Studio die natürliche Wahl, für regulierte Branchen Langdock oder Aleph Alpha Pharia. Pro-Code mit LangGraph oder Claude Agent SDK lohnt sich, wenn ein eigenes Engineering-Team existiert.",
                },
                {
                  question:
                    "Was kostet es, einen KI-Agenten zu erstellen?",
                  answer:
                    "Für einen ersten Use-Case sind 15.000 bis 40.000 Euro Setup realistisch (intern oder mit Agenturbegleitung), Software-Lizenzen zwischen 0 Euro (n8n self-hosted) und 3.000 Euro pro Jahr, LLM-API-Kosten von 500 bis 5.000 Euro pro Jahr je nach Volumen. Hosted-Plattformen wie Copilot Studio kosten ab 200 USD pro Monat für 25.000 Credits, wobei Reasoning-Antworten 100x mehr Credits brauchen als Script-Antworten. Bei sauberen Voraussetzungen liegt die Amortisation zwischen 8 und 18 Monaten.",
                },
                {
                  question:
                    "Brauche ich überhaupt eigene Entwickler, um einen KI-Agenten zu bauen?",
                  answer:
                    "Nein, nicht zwingend. Mit n8n oder Make.com plus AI-Agent-Node kann eine prozessversierte Person ohne tiefe Programmierkenntnisse einen funktionierenden Agenten bauen. Sobald es um Multi-Agent-Systeme, hohe Throughput-Anforderungen oder eng integrierte UI-Frontends geht, lohnen sich Pro-Code-Frameworks wie LangGraph und damit ein Engineering-Team. Eine pragmatische Aufteilung im Mittelstand: n8n als Orchestrator vom Fachbereich gepflegt, Custom-Service für schwierige LLM-Calls vom Engineering oder einem externen Partner.",
                },
                {
                  question:
                    "Wie verhindere ich, dass mein Agent Quatsch in produktive Systeme schreibt?",
                  answer:
                    "Fünf Schichten: strukturiertes Output-Format mit Schema-Validierung (falsches Schema führt zu sofortiger Ablehnung), Regel-Validierung auf Plausibilität (Steuersätze, Konten-Existenz, Mengen-Grenzen), Confidence-Gate (alles unter Schwelle geht in die Human-Queue), Audit-Logging jeder Entscheidung und Human-in-the-Loop in den ersten drei bis sechs Produktionsmonaten. Eine direkte LLM-zu-System-Verbindung ohne diese Schichten ist nicht GoBD-konform und in regulierten Umfeldern auch nicht haftungsrechtlich tragfähig.",
                },
                {
                  question:
                    "Was passiert mit der OpenAI Assistants API und was bedeutet das für bestehende Agenten?",
                  answer:
                    "Die Assistants API wird am 26. August 2026 abgeschaltet. Eine Verlängerung gibt es laut OpenAI nicht. Wer heute auf Assistants baut, muss auf die Responses API und Conversations API migrieren. Das ist kein einfacher Endpoint-Tausch, sondern eine grundsätzlich andere Architektur: Object Model, Tool Handling, State und Cost Model unterscheiden sich. Planen Sie die Migration jetzt, nicht im August. Wer neu startet, baut direkt auf Responses API oder wählt einen anbieterunabhängigen Stack mit n8n oder LangGraph.",
                },
                {
                  question:
                    "Welche Rolle spielt das Model Context Protocol (MCP) bei der Tool-Wahl?",
                  answer:
                    "MCP ist 2026 der De-facto-Standard für die Anbindung von Tools an LLMs. Seit Dezember 2025 von der Linux Foundation gehostet, 78 Prozent Adoption in Enterprise-AI-Teams, 9.400 plus Server in der Public Registry. Native Unterstützung in Claude, ChatGPT, Gemini, Vertex AI, Cursor, JetBrains, Vercel AI SDK. Konsequenz für die Tool-Wahl: MCP-fähige Plattformen bevorzugen, eigene Daten als MCP-Server exposeen statt proprietäre Integrationen zu bauen. Das reduziert Vendor-Lock-in und macht zukünftige Modell-Wechsel günstiger.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zum Erstellen von KI-Agenten
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="zwei-entscheidungen">
            Zwei Entscheidungen vorab
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="tool-landschaft">
            Tool-Landschaft
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="vergleichsmatrix">
            Vergleichsmatrix
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="use-cases">
            Vier Use-Cases
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="bausteine">
            Neun Bausteine
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="entwicklungen-2026">
            Entwicklungen 2026
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="anti-patterns">
            Anti-Patterns
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="naechste-schritte">
            4-Wochen-Plan
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="faq">
            FAQ
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
