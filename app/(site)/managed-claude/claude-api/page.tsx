import type { Metadata } from "next";
import { Bot, Check, FolderInput, Mail, MonitorSmartphone, Workflow } from "lucide-react";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import {
  Typo,
  IntroBox,
  GeoSummary,
  ProseColumns,
  DataTable,
  FaqContainer,
  TimelineAsSteps,
  TimelineAsStepsStep,
  TabGroup,
  TabNavigation,
  TabItem,
  TabContent,
  Button,
} from "@/components/ui";
import { SimpleCard } from "@/components/cards";
import { ContactButton, InternalLink } from "@/components/buttons";
import {
  Hero2Column,
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnCallToAction,
} from "@/components/heroes";
import CodeWindow from "@/components/mockups/code-window";
import ApiKeyMock from "@/components/mockups/api-key-mock";
import KeyUsageMock from "@/components/mockups/key-usage-mock";
import { N8nLogo, MakeLogo, ClaudeLogo } from "@/components/icons/brand-logos";
import { resolveHref } from "@/lib/get-canonical-path";

const meta = {
  title: "Claude API Key: eigene Apps bauen, Kosten je Use Case",
  description:
    "Claude API Key über Bluebatch: eigene Apps, Agenten und n8n-Workflows auf Claude bauen. AWS Bedrock Frankfurt, Abrechnung in Euro, Budget und Kosten je Key.",
};

export const metadata: Metadata = {
  title: `${meta.title} | Bluebatch`,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20API%20Key%20f%C3%BCr%20eigene%20Apps&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude API Key für eigene Apps",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/claude-api",
  },
};

const heroCode = `import os
from anthropic import Anthropic

client = Anthropic(
    base_url="https://claude-ai-gateway.bluebatch.io",
    auth_token=os.environ["BLUEBATCH_API_KEY"],
)

antwort = client.messages.create(
    model="sonnet-5-5",
    max_tokens=1024,
    messages=[{
        "role": "user",
        "content": "Ordne diese Mail einem Mandanten zu: ...",
    }],
)

for block in antwort.content:
    if block.type == "text":
        print(block.text)`;

const pythonCode = `import os
from anthropic import Anthropic

client = Anthropic(
    base_url="https://claude-ai-gateway.bluebatch.io",
    auth_token=os.environ["BLUEBATCH_API_KEY"],
)

antwort = client.messages.create(
    model="sonnet-5-5",
    max_tokens=1024,
    system="Du prüfst Steuerbescheide für die Kanzlei Müller. "
           "Antworte knapp und nenne Abweichungen zur Erklärung.",
    messages=[{"role": "user", "content": bescheid_text}],
)

for block in antwort.content:
    if block.type == "text":
        print(block.text)`;

const curlCode = `curl https://claude-ai-gateway.bluebatch.io/v1/messages \\
  -H "Authorization: Bearer $BLUEBATCH_API_KEY" \\
  -H "content-type: application/json" \\
  -H "anthropic-version: 2023-06-01" \\
  -d '{
    "model": "sonnet-5-5",
    "max_tokens": 1024,
    "messages": [
      {"role": "user", "content": "Fasse diesen Bescheid in drei Sätzen zusammen: ..."}
    ]
  }'`;

const n8nCode = `{
  "name": "Claude über Bluebatch",
  "type": "n8n-nodes-base.httpRequest",
  "typeVersion": 4.2,
  "parameters": {
    "method": "POST",
    "url": "https://claude-ai-gateway.bluebatch.io/v1/messages",
    "authentication": "genericCredentialType",
    "genericAuthType": "httpHeaderAuth",
    "sendBody": true,
    "specifyBody": "json",
    "jsonBody": "={{ JSON.stringify({ model: 'sonnet-5-5', max_tokens: 1024, messages: [{ role: 'user', content: $json.text }] }) }}"
  },
  "credentials": {
    "httpHeaderAuth": { "name": "Bluebatch API-Key" }
  }
}`;

const heroFacts = [
  "AWS Bedrock Frankfurt",
  "Abrechnung in Euro",
  "Budget je Key",
  "Anthropic- und OpenAI-kompatibel",
];

const comparison = [
  {
    label: "Vertragspartner",
    direct: "Anthropic, US-Unternehmen",
    bluebatch: "Bluebatch, mit Auftragsverarbeitung nach Art. 28 DSGVO",
  },
  {
    label: "Wo Claude läuft",
    direct: "Infrastruktur von Anthropic",
    bluebatch: "AWS Bedrock in Frankfurt, Daten bleiben in der EU",
  },
  {
    label: "Abrechnung",
    direct: "US-Dollar",
    bluebatch: "Euro, zusammen mit dem Chat Ihres Teams",
  },
  {
    label: "Kostenkontrolle",
    direct: "Limits je Workspace",
    bluebatch: "Budget je Key, also je Agent oder Workflow",
  },
  {
    label: "Berufsgeheimnis",
    direct: "Eigene Prüfung nach § 203 StGB nötig",
    bluebatch: "Vertragskette für § 203 StGB, § 62a StBerG und § 43e BRAO",
  },
  {
    label: "Funktionsumfang",
    direct: "Voller Umfang der Anthropic API, auch Beta-Funktionen",
    bluebatch: "Modelle und Funktionen, die AWS Bedrock anbietet",
  },
];

const keyUsage = [
  { keyName: "mail-agent", useCase: "Posteingang vorsortieren", budget: 150, spent: 61.2 },
  { keyName: "belegpruefung-n8n", useCase: "Belege vorprüfen im n8n-Workflow", budget: 300, spent: 248.9 },
  { keyName: "mandantenportal", useCase: "Chat im Mandantenportal", budget: 200, spent: 37.45 },
  { keyName: "bescheid-check", useCase: "Bescheide gegen die Erklärung prüfen", budget: 100, spent: 100 },
];

const models = [
  {
    name: "Haiku 5.5",
    use: "Sortieren, klassifizieren, Felder auslesen. Für Agenten, die viel und Einfaches erledigen.",
    input: "0,13 €",
    output: "0,65 €",
  },
  {
    name: "Sonnet 5.5",
    use: "Der Alltag: Mails beantworten, Dokumente prüfen, Texte entwerfen.",
    input: "2,60 €",
    output: "12,60 €",
    highlight: true,
  },
  {
    name: "Opus 5.5",
    use: "Die harten Fälle: lange Akten, mehrstufige Agenten, knifflige Analysen.",
    input: "5,15 €",
    output: "25,74 €",
  },
];

const faqs = [
  {
    question: "Wie bekomme ich einen Claude API Key über Bluebatch?",
    answer:
      "Nach einem kurzen Gespräch legen wir für jede Anwendung einen eigenen Key an, mit Namen, Budget in Euro und den freigegebenen Modellen. Sie bekommen den Key und die Gateway-Adresse claude-ai-gateway.bluebatch.io und bauen beides in Ihren Code, Ihren n8n-Workflow oder Ihre Software ein.",
  },
  {
    question: "Was ist der Unterschied zu einem Anthropic API Key?",
    answer:
      "Ein Anthropic API Key läuft direkt bei Anthropic, abgerechnet in US-Dollar, mit Limits je Workspace. Der Claude API Key über Bluebatch läuft über das Private Claude AI Gateway und AWS Bedrock in Frankfurt, mit Vertrag und Auftragsverarbeitung bei Bluebatch, Abrechnung in Euro und einem Budget je Key. Der Code bleibt fast gleich: Sie ändern Adresse und Key.",
  },
  {
    question: "Was kostet die Claude API über Bluebatch?",
    answer:
      "Abgerechnet wird der Verbrauch je 1 Million Tokens, getrennt nach Input und Output, netto: Haiku 5.5 kostet 0,13 € und 0,65 €, Sonnet 5.5 2,60 € und 12,60 €, Opus 5.5 5,15 € und 25,74 €. Die vollständige Preisliste mit Cache-Preisen und älteren Modellen steht auf der Preisseite unter Modellkosten.",
  },
  {
    question: "Wie behalte ich die Claude API Kosten im Griff?",
    answer:
      "Jeder Key hat ein eigenes Budget. Ist es erreicht, lehnt das Gateway weitere Anfragen dieses Keys ab, alle anderen Keys und der Chat Ihres Teams laufen weiter. Dazu kommen die üblichen Hebel: Haiku für einfache Aufgaben und Prompt Caching für wiederkehrenden Kontext. Gelesene Cache-Tokens kosten bei Sonnet 5.5 0,13 € statt 2,60 € je Million.",
  },
  {
    question: "Ist das Claude über AWS Bedrock oder die Anthropic API?",
    answer:
      "Claude läuft über AWS Bedrock in Frankfurt. Ihr Code spricht trotzdem das gewohnte Format der Anthropic API (/v1/messages) oder der OpenAI API, auch das offizielle anthropic-SDK funktioniert. Ein eigenes AWS-Konto oder eine eigene Bedrock-Freigabe brauchen Sie nicht.",
  },
  {
    question: "Darf ich Mandantendaten über die API schicken?",
    answer:
      "Ja, dafür ist der Weg über das Gateway gebaut. Die Anfragen bleiben in der EU, AWS Bedrock speichert Prompts und Antworten nicht und nutzt sie nicht zum Training. Die Vertragskette mit Auftragsverarbeitung nach Art. 28 DSGVO ist auf Berufsgeheimnisträger nach § 203 StGB, § 62a StBerG und § 43e BRAO ausgelegt.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection colorScheme="gradient-primary-dark">
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <IntroBox dark textCentered={false}>
              <IntroBox.PreHeadline>Claude API über Bluebatch</IntroBox.PreHeadline>
            </IntroBox>
            <Typo.H1 className="text-white">Claude API Key für eigene Apps, Agenten und Workflows</Typo.H1>
            <GeoSummary className="text-primary-100!">
              Mit einem Claude API Key von Bluebatch bauen Sie eigene Apps, Agenten und n8n-Workflows auf Claude von Anthropic. Jede Anfrage läuft über das Private Claude AI Gateway und AWS Bedrock in Frankfurt, abgerechnet in Euro nach Verbrauch. Jeder Key bekommt ein eigenes Budget, die Kosten sehen Sie je Agent, Use Case und Workflow.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">API-Key anfragen</ContactButton>
              <Button variant="outline" href={resolveHref("/managed-claude/preise#modellkosten")}>
                Preise je Modell
              </Button>
            </Hero2ColumnCallToAction>
            <ul className="mt-6 flex flex-wrap gap-2">
              {heroFacts.map((fact) => (
                <li
                  key={fact}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm text-white ring-1 ring-white/15"
                >
                  <Check className="h-3.5 w-3.5 text-secondary-300" aria-hidden />
                  {fact}
                </li>
              ))}
            </ul>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <CodeWindow title="anfrage.py" language="python" className="ring-white/20">
              {heroCode}
            </CodeWindow>
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center lg:gap-16">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>In vier Schritten</IntroBox.PreHeadline>
              <IntroBox.Headline>
                So kommen Sie zum <span className="whitespace-nowrap">API-Key</span>
              </IntroBox.Headline>
            </IntroBox>
            <TimelineAsSteps>
              <TimelineAsStepsStep value={1}>
                <Typo.H3 className="mt-1!">Gespräch, 30 Minuten</Typo.H3>
                <Typo.Paragraph textColor="muted">
                  Sie schildern, was Sie bauen: einen Agenten, einen Workflow oder eine eigene Oberfläche. Wir klären Volumen, Modellwahl und wer den Key nutzt.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={2}>
                <Typo.H3 className="mt-1!">Ein Key je Anwendung</Typo.H3>
                <Typo.Paragraph textColor="muted">
                  Wir legen den Key an, mit sprechendem Namen, Budget in Euro und den freigegebenen Modellen. Kein eigener Vertrag mit Anthropic oder AWS.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={3}>
                <Typo.H3 className="mt-1!">Einbauen</Typo.H3>
                <Typo.Paragraph textColor="muted">
                  Adresse und Key in Ihre Anwendung eintragen: Python, TypeScript, n8n, Make oder jedes Tool, das die Anthropic- oder OpenAI-API spricht.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={4}>
                <Typo.H3 className="mt-1!">Laufen lassen und nachsteuern</Typo.H3>
                <Typo.Paragraph textColor="muted" spacing="none">
                  Sie sehen die Kosten je Key. Budget anpassen, Key sperren oder austauschen, wenn ein Entwickler das Projekt verlässt.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
            </TimelineAsSteps>
          </div>
          <div className="mx-auto w-full max-w-md">
            <ApiKeyMock>
              <ApiKeyMock.Title>Mail-Agent · Kanzlei Müller</ApiKeyMock.Title>
              <ApiKeyMock.Key>sk-••••••••••••••••••••3f9a</ApiKeyMock.Key>
              <ApiKeyMock.Rows>
                <ApiKeyMock.Row label="Adresse">claude-ai-gateway.bluebatch.io</ApiKeyMock.Row>
                <ApiKeyMock.Row label="Modelle">Sonnet 5.5, Haiku 5.5</ApiKeyMock.Row>
                <ApiKeyMock.Row label="Region">AWS Bedrock Frankfurt</ApiKeyMock.Row>
                <ApiKeyMock.Row label="Angelegt">01.10.2026</ApiKeyMock.Row>
              </ApiKeyMock.Rows>
              <ApiKeyMock.Budget spent={61.2} budget={150}>
                Budget je Monat. Ist es erreicht, lehnt das Gateway weitere Anfragen dieses Keys ab.
              </ApiKeyMock.Budget>
            </ApiKeyMock>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Claude API Kosten im Blick</IntroBox.PreHeadline>
          <IntroBox.Headline>Was kostet welcher Use Case?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Jede Anwendung hat ihren eigenen Key und ist damit ein eigener Verbraucher am Gateway. So sehen Sie, was der Mail-Agent im Monat kostet, was der Beleg-Workflow und ob sich ein Use Case rechnet.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="mx-auto mb-14 max-w-4xl">
          <KeyUsageMock period="Oktober 2026 · 01.10. bis 13.10." rows={keyUsage} />
        </div>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Getrackt ab dem ersten Aufruf">
            Tokens und Kosten je Key, Tag und Modell. Sie müssen nichts mitloggen, das Gateway zählt mit.
          </ProseColumns.Item>
          <ProseColumns.Item title="Eigenes Budget je Key">
            Ein Agent in der Schleife kostet höchstens sein Budget. Die anderen Keys und der Chat Ihres Teams laufen normal weiter.
          </ProseColumns.Item>
          <ProseColumns.Item title="Eine Abrechnung in Euro">
            API und Chat in einer Rechnung, zu den Preisen je 1 Million Tokens aus der Preisliste. Keine Dollar-Kreditkarte, kein Wechselkurs.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Für Entwickler</IntroBox.PreHeadline>
              <IntroBox.Headline>Den Key einbauen: Python, curl oder n8n</IntroBox.Headline>
            </IntroBox>
            <Typo.Paragraph textColor="muted">
              Das Gateway spricht die Anthropic API (<code className="text-sm">/v1/messages</code>) und die OpenAI API (<code className="text-sm">/v1/chat/completions</code>). Bestehender Code läuft deshalb meist mit zwei geänderten Zeilen.
            </Typo.Paragraph>
            <DataTable compact className="mt-6">
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Was</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Wert</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Adresse</DataTable.Cell>
                  <DataTable.Cell className="break-all font-mono">https://claude-ai-gateway.bluebatch.io</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Anmeldung</DataTable.Cell>
                  <DataTable.Cell>Ihr Key als Bearer-Token</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Modell</DataTable.Cell>
                  <DataTable.Cell>z.B. <span className="font-mono">sonnet-5-5</span>, die Liste kommt mit dem Key</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>
            <Typo.Paragraph textColor="muted" size="sm" className="mt-6">
              Mehr zur Claude API selbst, zu Modellen und Parametern, steht in unserem Beitrag{" "}
              <InternalLink href="/blog/claude-api" variant="underline">
                Claude API: Einstieg für Entwickler
              </InternalLink>
              .
            </Typo.Paragraph>
          </div>
          <TabGroup defaultValue="python" className="min-w-0">
            <TabNavigation>
              <TabItem value="python">Python</TabItem>
              <TabItem value="curl">curl</TabItem>
              <TabItem value="n8n">n8n</TabItem>
            </TabNavigation>
            <TabContent value="python">
              <CodeWindow title="bescheid_pruefen.py" language="python">
                {pythonCode}
              </CodeWindow>
              <Typo.Paragraph textColor="muted" size="sm" className="mt-4">
                Offizielles <span className="font-mono">anthropic</span>-SDK, nur Adresse und Key zeigen aufs Gateway.
              </Typo.Paragraph>
            </TabContent>
            <TabContent value="curl">
              <CodeWindow title="anfrage.sh" language="bash">
                {curlCode}
              </CodeWindow>
              <Typo.Paragraph textColor="muted" size="sm" className="mt-4">
                Derselbe Aufruf ohne SDK, zum Testen im Terminal.
              </Typo.Paragraph>
            </TabContent>
            <TabContent value="n8n">
              <CodeWindow title="HTTP Request Node" language="json">
                {n8nCode}
              </CodeWindow>
              <Typo.Paragraph textColor="muted" size="sm" className="mt-4">
                In n8n einfügen und eine Credential vom Typ Header Auth anlegen: Name <span className="font-mono">Authorization</span>, Wert <span className="font-mono">Bearer</span> plus Ihr Key.
              </Typo.Paragraph>
            </TabContent>
          </TabGroup>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Einsatzfelder</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wofür Kunden den <span className="whitespace-nowrap">API-Key</span> nutzen
          </IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3}>
          <SimpleCard align="left" className="rounded-2xl">
            <div className="mb-5 flex h-32 w-full flex-col justify-center rounded-xl bg-gray-900 px-4 font-mono text-[11px] leading-relaxed text-gray-300">
              <div><span className="text-gray-500">08:02</span> neue Mail von weber@…</div>
              <div><span className="text-gray-500">08:02</span> <span className="text-secondary-300">→</span> Mandant Weber zugeordnet</div>
              <div><span className="text-gray-500">08:03</span> <span className="text-secondary-300">→</span> Antwortentwurf erstellt</div>
              <div className="mt-1 text-green-400">Kosten: 0,03 € · Key mail-agent</div>
            </div>
            <div className="mb-2 flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary-600" aria-hidden />
              <Typo.H3 disableMargin className="text-lg md:text-xl">Agenten im Hintergrund</Typo.H3>
            </div>
            <Typo.Paragraph textColor="muted" spacing="none">
              Mail-Agent, Belegvorerfassung oder Bescheidprüfung laufen als eigener Ablauf, ohne dass jemand einen Chat öffnet.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="rounded-2xl">
            <div className="mb-5 flex h-32 w-full flex-col justify-center gap-3 rounded-xl bg-gray-100 px-4">
              <div className="flex items-center gap-3 text-[11px] font-medium text-gray-500">
                <span className="inline-flex items-center gap-1"><N8nLogo className="h-3.5 w-3.5" />n8n</span>
                <span className="inline-flex items-center gap-1"><MakeLogo className="h-3.5 w-3.5" />Make</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="flex flex-col items-center gap-1 text-[10px] text-gray-500">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-gray-200">
                    <Mail className="h-4 w-4 text-gray-600" aria-hidden />
                  </span>
                  Rechnung
                </span>
                <span className="mb-4 h-px flex-1 bg-gray-300" aria-hidden />
                <span className="flex flex-col items-center gap-1 text-[10px] text-gray-500">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-gray-200">
                    <ClaudeLogo className="h-4 w-4" />
                  </span>
                  Claude liest
                </span>
                <span className="mb-4 h-px flex-1 bg-gray-300" aria-hidden />
                <span className="flex flex-col items-center gap-1 text-[10px] text-gray-500">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-gray-200">
                    <FolderInput className="h-4 w-4 text-gray-600" aria-hidden />
                  </span>
                  Ablage
                </span>
              </div>
            </div>
            <div className="mb-2 flex items-center gap-2">
              <Workflow className="h-5 w-5 text-primary-600" aria-hidden />
              <Typo.H3 disableMargin className="text-lg md:text-xl">Workflows in n8n und Make</Typo.H3>
            </div>
            <Typo.Paragraph textColor="muted" spacing="none">
              Claude als ein Baustein im Ablauf: Text verstehen, Daten auslesen, entscheiden, wohin es weitergeht.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="rounded-2xl">
            <div className="mb-5 flex h-32 w-full flex-col justify-center gap-2 rounded-xl bg-primary-50 px-4 text-[12px]">
              <div className="ml-auto w-fit max-w-[85%] rounded-xl rounded-br-sm bg-white px-3 py-1.5 text-gray-800 shadow-sm">
                Wann ist meine Steuererklärung fertig?
              </div>
              <div className="w-fit max-w-[85%] rounded-xl rounded-bl-sm bg-primary-700 px-3 py-1.5 text-white">
                Sie liegt zur Prüfung bei Frau Kraus, geplant bis Freitag.
              </div>
            </div>
            <div className="mb-2 flex items-center gap-2">
              <MonitorSmartphone className="h-5 w-5 text-primary-600" aria-hidden />
              <Typo.H3 disableMargin className="text-lg md:text-xl">Eigene Oberflächen</Typo.H3>
            </div>
            <Typo.Paragraph textColor="muted" spacing="none">
              Claude im Mandantenportal, im Intranet oder in Ihrer Fachanwendung, mit Ihrem Design und Ihren Regeln.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
        <div className="mt-10 text-center">
          <InternalLink href="/managed-claude/use-cases">Fertige Agenten auf dem Gateway ansehen</InternalLink>
        </div>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <IntroBox textCentered size="small">
          <IntroBox.PreHeadline>Anthropic API Key oder Bluebatch?</IntroBox.PreHeadline>
          <IntroBox.Headline>Anthropic API Key direkt oder Claude API Key über Bluebatch</IntroBox.Headline>
          <IntroBox.Paragraph>
            Beides ist dasselbe Claude. Der Unterschied liegt in Vertrag, Region, Abrechnung und Kostenkontrolle.
          </IntroBox.Paragraph>
        </IntroBox>
        <DataTable className="hidden md:block">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell> </DataTable.HeaderCell>
              <DataTable.HeaderCell>Anthropic API Key direkt</DataTable.HeaderCell>
              <DataTable.HeaderCell>Claude API Key über Bluebatch</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            {comparison.map((row) => (
              <DataTable.Row key={row.label}>
                <DataTable.Cell bold>{row.label}</DataTable.Cell>
                <DataTable.Cell>{row.direct}</DataTable.Cell>
                <DataTable.Cell>{row.bluebatch}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable.Body>
        </DataTable>
        {/* Handy: gestapelt statt drei Spalten, damit nichts seitlich scrollt */}
        <dl className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm md:hidden">
          {comparison.map((row) => (
            <div key={row.label} className="px-4 py-3">
              <dt className="mb-1.5 text-sm font-semibold text-gray-900">{row.label}</dt>
              <dd className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">Direkt:</span> {row.direct}
              </dd>
              <dd className="mt-1 text-sm text-gray-700">
                <span className="font-medium text-primary-700">Über Bluebatch:</span> {row.bluebatch}
              </dd>
            </div>
          ))}
        </dl>
        <Typo.Paragraph textColor="muted" className="mx-auto mt-6 max-w-3xl text-center">
          Wer ohne echte Daten experimentiert, kommt mit einem eigenen Anthropic API Key schnell voran. Sobald Mandantendaten, personenbezogene Daten oder mehrere Anwendungen mit eigenem Budget ins Spiel kommen, ist der Weg über das Gateway der einfachere. Wie Claude auf AWS Bedrock läuft, zeigt{" "}
          <InternalLink href="/managed-claude/wie-es-funktioniert" variant="underline">
            So funktioniert das Gateway
          </InternalLink>
          .
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Claude API Preise</IntroBox.PreHeadline>
          <IntroBox.Headline>Drei Modelle, Preise je 1 Million Tokens</IntroBox.Headline>
          <IntroBox.Paragraph>
            Netto, abgerechnet nach Verbrauch. 1 Million Tokens entsprechen etwa 750.000 Wörtern.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3}>
          {models.map((m) => (
            <SimpleCard
              key={m.name}
              align="left"
              className={`rounded-2xl ${m.highlight ? "ring-2 ring-primary-300 border-primary-400!" : ""}`}
            >
              <div className="flex w-full items-center justify-between gap-2">
                <Typo.H3 disableMargin>{m.name}</Typo.H3>
                {m.highlight && (
                  <span className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
                    meist genutzt
                  </span>
                )}
              </div>
              <Typo.Paragraph textColor="muted" className="mt-2 min-h-12">
                {m.use}
              </Typo.Paragraph>
              <div className="grid w-full grid-cols-2 gap-3 border-t border-gray-200 pt-4">
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-500">Input</div>
                  <div className="text-2xl font-bold tabular-nums text-gray-900">{m.input}</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wide text-gray-500">Output</div>
                  <div className="text-2xl font-bold tabular-nums text-gray-900">{m.output}</div>
                </div>
              </div>
            </SimpleCard>
          ))}
        </SimpleGrid>
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gray-200 bg-white p-6 text-center">
          <Typo.Paragraph className="mb-0!">
            <strong>Rechenbeispiel:</strong> Ein Mail-Agent sortiert 1.000 Mails im Monat mit Sonnet 5.5 vor, je rund 2.000 Tokens Input und 300 Tokens Output. Das sind 2 Mio. Input-Tokens (5,20 €) und 0,3 Mio. Output-Tokens (3,78 €), zusammen <strong>8,98 € im Monat</strong>.
          </Typo.Paragraph>
        </div>
        <div className="mt-8 text-center">
          <InternalLink href="/managed-claude/preise#modellkosten">Vollständige Preisliste mit Cache-Preisen</InternalLink>
        </div>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <FaqContainer headline="Häufige Fragen zum Claude API Key" faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Ihr Claude API Key, mit Budget ab dem ersten Aufruf</IntroBox.Headline>
          <IntroBox.Paragraph>
            In 30 Minuten klären wir, was Sie bauen, welches Modell passt und welches Budget je Key sinnvoll ist. Danach haben Sie ein Angebot mit Festpreis, Verbrauchsschätzung und Limit-Vorschlag.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">API-Key anfragen</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
