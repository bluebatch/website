import type { Metadata } from "next";
import { Box, Server, Users } from "lucide-react";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import {
  Typo,
  IntroBox,
  GeoSummary,
  FaqContainer,
  ProseColumns,
  DataTable,
  TimelineAsSteps,
  TimelineAsStepsStep,
} from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ContactButton, InternalLink } from "@/components/buttons";
import { FeatureRow } from "@/components/sections";
import { ClaudeDesktopMock, LocalServersScreen, PluginsScreen, SkillsScreen } from "@/components/mockups";

const description =
  "Plugins im Private Claude AI Gateway: Skills, Connectors und lokale MCP-Server als .mcpb zentral pflegen und an alle verteilen, auf Wunsch automatisch installiert.";

export const metadata: Metadata = {
  title: "Plugins im Private Claude AI Gateway: zentral für alle | Bluebatch",
  description,
  openGraph: {
    title: "Plugins im Private Claude AI Gateway: zentral für alle",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20Plugins%20zentral%20an%20alle%20verteilen&eyebrow=Private%20Claude%20AI%20Gateway",
        width: 1200,
        height: 630,
        alt: "Claude Plugins zentral an alle verteilen",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/plugins",
  },
};

const vergleich = [
  {
    thema: "Wo Sie Plugins pflegen",
    selbst: "Eigenes Git-Repository oder eigener Webserver mit marketplace.json",
    gateway: "Im Portal, Seite Plugins",
  },
  {
    thema: "Einstellungen auf den Rechnern",
    selbst: "Marketplace, lokale Server und Erweiterungen per MDM-Profil freischalten",
    gateway: "Setzt das Gateway selbst, je Person",
  },
  {
    thema: "Lokale MCP-Server (.mcpb)",
    selbst: "In jedes Plugin selbst einpacken",
    gateway: "Einmal hochladen, mit Prüfung und Versionen",
  },
  {
    thema: "Automatisch installieren",
    selbst: "Mit festem Stand per Commit oder Prüfsumme, oder vom eigenen Bootstrap-Server",
    gateway: "Schalter je Plugin",
  },
  {
    thema: "Wer welches Plugin bekommt",
    selbst: "Je Marketplace, also je Konfiguration",
    gateway: "Je Bibliothek: alle oder einzelne Personen",
  },
  {
    thema: "Updates",
    selbst: "Neuen Stand veröffentlichen, bei festem Stand auch die Konfiguration",
    gateway: "Speichern, nach etwa zehn Minuten auf allen Rechnern",
  },
];

// Tabelle auf dem Handy als Karten, wie auf /managed-claude/datenschutz.
const zeileMobil = "max-md:block max-md:py-3";
const zelleMobil = "max-md:block max-md:px-4 max-md:py-1";

function MobilLabel({ children }: { children: string }) {
  return <span className="block text-xs font-medium text-gray-500 md:hidden">{children}</span>;
}

const faqs = [
  {
    question: "Was ist ein Plugin im Private Claude AI Gateway?",
    answer:
      "Ein Plugin bündelt Skills, also Arbeitsanleitungen für Claude, mit den MCP-Servern, die diese Skills brauchen. Admins bauen es im Portal des Gateways. Claude Desktop zeigt es unter Anpassen → Plugins → Organisation und lädt es in Cowork und Code.",
  },
  {
    question: "Wie kommt ein Plugin auf die Rechner der Mitarbeiter?",
    answer:
      "Das Gateway stellt jede Bibliothek als Plugin-Marketplace bereit, Claude Desktop holt ihn mit der Anmeldung der Person ab. Ist der Schalter „Automatisch installieren“ an, wird das Plugin beim nächsten Abgleich ohne Klick installiert. Sonst steht es bereit und wird mit einem Klick installiert.",
  },
  {
    question: "Kann ein Mitarbeiter ein automatisch installiertes Plugin wieder entfernen?",
    answer:
      "Ja. Wer ein automatisch installiertes Plugin entfernt, bekommt es nicht erneut, auch nicht nach einem Update. Eine Pflicht-Installation, die sich nicht abschalten lässt, bietet das Gateway nicht an. Bei Claude Team und Enterprise gibt es sie über die Admin-Einstellungen von Anthropic.",
  },
  {
    question: "Was ist eine .mcpb-Datei?",
    answer:
      "Ein MCP-Bundle ist eine Zip-Datei mit einem lokalen MCP-Server und einer manifest.json. Claude Desktop startet den Server auf dem Rechner der Person. So erreicht Claude Laufwerke, Fachsoftware und Systeme hinter der Firewall, ohne dass Daten über einen weiteren Server laufen.",
  },
  {
    question: "Läuft der Code lokaler MCP-Server im Gateway?",
    answer:
      "Nein. Das Gateway prüft und speichert das Bundle und liefert es im Plugin aus. Gestartet wird der Server ausschließlich auf den Rechnern. Deshalb dürfen nur Admins Bundles hochladen.",
  },
  {
    question: "Wie schnell kommen Änderungen an?",
    answer:
      "Nach dem Speichern baut das Gateway das Plugin neu. Claude Desktop gleicht beim Start, etwa alle zehn Minuten und beim Öffnen einer neuen Sitzung ab. Eine neue aktive Version eines lokalen Servers kommt auf demselben Weg an.",
  },
  {
    question: "Funktionieren Plugins auch im Chat?",
    answer:
      "Über das Gateway laufen Plugins in Cowork und Code. Im Chat kennt Claude sie nicht. Für die meisten Abläufe ist Cowork ohnehin der richtige Ort, weil Claude dort Dateien bearbeitet und mehrere Schritte selbst erledigt.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <IntroBox textCentered size="small">
          <IntroBox.PreHeadline>Private Claude AI Gateway · Plugins</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="mx-auto max-w-4xl text-center text-balance">
          Claude Plugins zentral pflegen und an alle verteilen
        </Typo.H1>
        <GeoSummary align="center">
          Im Private Claude AI Gateway von Bluebatch bauen Admins Plugins für Claude Desktop zentral im Portal: Skills,
          Remote-Connectors und lokale MCP-Server als .mcpb-Datei. Das Gateway liefert jedes Plugin an alle oder an
          ausgewählte Personen aus, auf Wunsch installiert es sich automatisch. Änderungen sind nach etwa zehn Minuten auf
          allen Rechnern.
        </GeoSummary>
        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
          <ContactButton icon="chat">Live-Demo vereinbaren</ContactButton>
          <InternalLink href="#so-funktioniert-es" resolve={false}>
            So kommt ein Plugin auf alle Rechner
          </InternalLink>
        </div>
        <div className="relative isolate mt-14 lg:mt-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-[5%] -top-10 bottom-[10%] -z-10 rounded-[4rem] bg-gradient-to-b from-primary-200/70 via-primary-100/40 to-transparent blur-3xl"
          />
          <PluginsScreen tilt />
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" id="so-funktioniert-es">
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false} size="wide">
              <IntroBox.PreHeadline>Ablauf</IntroBox.PreHeadline>
              <IntroBox.Headline className="lg:text-4xl!">In vier Schritten auf jedem Rechner</IntroBox.Headline>
            </IntroBox>
            <TimelineAsSteps>
              <TimelineAsStepsStep value={1}>
                <Typo.H3 className="mt-1!">Bibliothek anlegen</Typo.H3>
                <Typo.Paragraph textColor="muted">
                  Eine Bibliothek ist ein Regal für Plugins, zum Beispiel „Generell“ für alle oder „Buchhaltung“ für
                  vier Personen. Wer eine Bibliothek bekommt, legen Sie dort fest.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={2}>
                <Typo.H3 className="mt-1!">Plugin bauen</Typo.H3>
                <Typo.Paragraph textColor="muted">
                  Skills schreiben oder importieren und die benötigten MCP-Server auswählen: Connectors wie Microsoft
                  365 oder eigene lokale Server.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={3}>
                <Typo.H3 className="mt-1!">Speichern</Typo.H3>
                <Typo.Paragraph textColor="muted">
                  Speichern heißt ausliefern. Das Gateway baut das Plugin neu und stellt es als Marketplace bereit,
                  nur für die Personen der Bibliothek.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={4}>
                <Typo.H3 className="mt-1!">In Claude Desktop nutzen</Typo.H3>
                <Typo.Paragraph textColor="muted" spacing="none">
                  Beim nächsten Abgleich ist das Plugin da: automatisch installiert oder mit einem Klick unter
                  Anpassen → Plugins → Organisation.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
            </TimelineAsSteps>
          </div>
          <div className="min-w-0">
            <ClaudeDesktopMock mode="Cowork" model="Sonnet 5.5">
              <ClaudeDesktopMock.Banner>Kanzlei Müller · Private Gateway</ClaudeDesktopMock.Banner>
              <ClaudeDesktopMock.User>
                Entwirf eine Antwort an Herrn Weber, er fragt nach dem Stand seiner Einkommensteuer 2025.
              </ClaudeDesktopMock.User>
              <ClaudeDesktopMock.Tool>Skill · Antwort an Mandanten entwerfen</ClaudeDesktopMock.Tool>
              <ClaudeDesktopMock.Tool>Akten-Laufwerk · Akte Weber geöffnet, 3 Dokumente gelesen</ClaudeDesktopMock.Tool>
              <ClaudeDesktopMock.Tool>Microsoft 365 · Entwurf in Outlook angelegt</ClaudeDesktopMock.Tool>
              <ClaudeDesktopMock.Assistant>
                Der Entwurf liegt in Ihren Entwürfen. Laut Akte fehlen noch zwei Spendenbescheinigungen, danach können
                wir die Erklärung abgeben. Ich habe beides im Schreiben erwähnt.
              </ClaudeDesktopMock.Assistant>
            </ClaudeDesktopMock>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Funktionen</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Was das Gateway bei Plugins für Sie übernimmt</IntroBox.Headline>
          <IntroBox.Paragraph>
            Ein Plugin bündelt Skills, Befehle und MCP-Server zu einem Paket für Claude. Was ein Plugin genau ist,
            erklärt unser Artikel{" "}
            <InternalLink href="/blog/claude-plugins" variant="underline">
              Claude Plugins
            </InternalLink>
            . Hier geht es darum, wie Sie Plugins im Gateway bauen und verteilen.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="space-y-24">
          <FeatureRow id="bibliotheken">
            <FeatureRow.Text>
              <FeatureRow.Label>
                <Users aria-hidden /> Bibliotheken
              </FeatureRow.Label>
              <Typo.H3 disableMargin className="mb-4">
                Wer welches Plugin bekommt
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Plugins liegen in Bibliotheken. Jede Bibliothek gilt für alle Personen der Organisation oder für
                ausgewählte, und jede wird in Claude Desktop ein eigener Reiter unter Anpassen → Plugins →
                Organisation.
              </Typo.Paragraph>
              <FeatureRow.Points>
                <FeatureRow.Point>„Generell“ für alle: Mandantenpost, Abrechnung, Fristen.</FeatureRow.Point>
                <FeatureRow.Point>„Buchhaltung“ nur für die vier Personen, die Belege prüfen.</FeatureRow.Point>
                <FeatureRow.Point>Eine Bibliothek abschalten, ohne etwas zu löschen.</FeatureRow.Point>
              </FeatureRow.Points>
            </FeatureRow.Text>
            <FeatureRow.Media>
              <PluginsScreen sidebar={false} />
            </FeatureRow.Media>
          </FeatureRow>

          <FeatureRow id="skills" reverse>
            <FeatureRow.Text>
              <FeatureRow.Label>
                <Box aria-hidden /> Skills
              </FeatureRow.Label>
              <Typo.H3 disableMargin className="mb-4">
                Skills schreiben, importieren oder aus Vorlagen holen
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Ein Skill beschreibt, wann Claude ihn nutzt und wie die Aufgabe bei Ihnen erledigt wird. Im Portal
                schreiben Sie Skills direkt im Editor, mit Dateien und Ordnern, oder Sie holen sie von außen.
              </Typo.Paragraph>
              <FeatureRow.Points>
                <FeatureRow.Point>Als ZIP hochladen oder aus einem Git-Repository auf GitHub oder GitLab importieren.</FeatureRow.Point>
                <FeatureRow.Point>
                  Geprüfte Vorlagen aus dem Katalog installieren, mit Hinweis „Update verfügbar“, wenn sich die Quelle ändert.
                </FeatureRow.Point>
                <FeatureRow.Point>Je Plugin festlegen, welche MCP-Server seine Skills brauchen.</FeatureRow.Point>
              </FeatureRow.Points>
            </FeatureRow.Text>
            <FeatureRow.Media>
              <SkillsScreen sidebar={false} />
            </FeatureRow.Media>
          </FeatureRow>

          <FeatureRow id="lokale-mcp-server">
            <FeatureRow.Text>
              <FeatureRow.Label>
                <Server aria-hidden /> Lokale MCP-Server
              </FeatureRow.Label>
              <Typo.H3 disableMargin className="mb-4">
                .mcpb hochladen, auf allen Rechnern nutzen
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Manche Systeme erreicht Claude nur vom Rechner aus: das Akten-Laufwerk, eine Fachsoftware, eine
                Datenbank hinter der Firewall. Dafür gibt es lokale MCP-Server als MCP-Bundle (.mcpb). Sie laden die
                Datei einmal unter Connectors hoch, das Gateway packt sie in jedes Plugin, das den Server braucht.
              </Typo.Paragraph>
              <FeatureRow.Points>
                <FeatureRow.Point>
                  Prüfung beim Hochladen: Manifest, Größe bis 25 MB, keine Pfade nach außen, keine Symlinks.
                </FeatureRow.Point>
                <FeatureRow.Point>Versionen mit aktiver Version, ein Server kann in mehreren Plugins stecken.</FeatureRow.Point>
                <FeatureRow.Point>Der Code läuft nur auf den Rechnern, nie im Gateway.</FeatureRow.Point>
              </FeatureRow.Points>
              <InternalLink href="/managed-claude/integrationen/plugin-entwicklung" className="mt-6">
                Eigenen Server bauen lassen
              </InternalLink>
            </FeatureRow.Text>
            <FeatureRow.Media>
              <LocalServersScreen sidebar={false} />
            </FeatureRow.Media>
          </FeatureRow>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" id="auto-install">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Auto-Install</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Automatisch installieren oder mit einem Klick</IntroBox.Headline>
          <IntroBox.Paragraph>
            Je Plugin entscheiden Sie, ob es nur bereitsteht oder sich selbst installiert. Das Gateway liefert dafür
            die passende Markierung im Marketplace aus, Claude Desktop erledigt den Rest.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3} className="mx-auto mt-10 max-w-6xl">
          <ProseColumns.Item title="Automatisch installieren">
            Ist der Schalter an, installiert Claude Desktop das Plugin beim nächsten Abgleich bei allen Personen der
            Bibliothek, ohne Klick. Richtig für Plugins, die jeder braucht, etwa die Mandantenpost.
          </ProseColumns.Item>
          <ProseColumns.Item title="Bereitstellen">
            Ist der Schalter aus, steht das Plugin unter Anpassen → Plugins → Organisation und wird mit einem Klick
            installiert. Richtig für Plugins, die nur ein Teil des Teams nutzt.
          </ProseColumns.Item>
          <ProseColumns.Item title="Entfernen bleibt möglich">
            Wer ein automatisch installiertes Plugin entfernt, bekommt es nicht erneut. Eine Pflicht-Installation,
            die sich nicht abschalten lässt, gibt es im Gateway nicht.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Auf den Rechnern</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Updates, Freigaben und Einstellungen</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3} className="mx-auto mt-10 max-w-6xl">
          <ProseColumns.Item title="Updates in etwa zehn Minuten">
            Jede Änderung im Portal ergibt eine neue Version des Plugins. Claude Desktop gleicht beim Start, etwa alle
            zehn Minuten und beim Öffnen einer neuen Sitzung ab. Ein neues Rollout gibt es nicht.
          </ProseColumns.Item>
          <ProseColumns.Item title="Freigaben je Server">
            Für jeden lokalen Server legen Sie fest, ob Claude vor jeder Nutzung nachfragt oder die Werkzeuge immer
            nutzen darf. Vorgabe ist die Rückfrage.
          </ProseColumns.Item>
          <ProseColumns.Item title="Einstellungen setzt das Gateway">
            Damit Claude Desktop lokale Server aus Plugins startet, müssen zwei Einstellungen an sein. Das Gateway
            setzt sie selbst, nur für Organisationen mit lokalem Server. Ein MDM-Profil braucht es dafür nicht.
          </ProseColumns.Item>
        </ProseColumns>
        <Typo.Paragraph textColor="muted" className="mx-auto mt-10 max-w-3xl text-center">
          Alle übrigen Einstellungen wie Limits, Anweisungen und Connectors stehen im{" "}
          <InternalLink href="/managed-claude/zentrale-steuerung" variant="underline">
            Managed Claude Interface
          </InternalLink>
          .
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Vergleich</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Plugins selbst verteilen oder über das Gateway</IntroBox.Headline>
          <IntroBox.Paragraph>
            Wer Claude Desktop selbst über Amazon Bedrock betreibt, kann Plugins auch ohne Gateway verteilen. Anthropic
            beschreibt dafür einen eigenen Marketplace. Das geht, ist aber Handarbeit.
          </IntroBox.Paragraph>
        </IntroBox>
        <DataTable className="mx-auto max-w-5xl">
          <DataTable.Head>
            <DataTable.Row className="max-md:hidden">
              <DataTable.HeaderCell className="min-w-40">Thema</DataTable.HeaderCell>
              <DataTable.HeaderCell className="min-w-56">Selbst über Bedrock</DataTable.HeaderCell>
              <DataTable.HeaderCell className="min-w-52 bg-primary-950">Private Claude AI Gateway</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            {vergleich.map(({ thema, selbst, gateway }) => (
              <DataTable.Row key={thema} className={zeileMobil}>
                <DataTable.Cell bold className={`${zelleMobil} max-md:text-base`}>
                  {thema}
                </DataTable.Cell>
                <DataTable.Cell className={zelleMobil}>
                  <MobilLabel>Selbst über Bedrock</MobilLabel>
                  {selbst}
                </DataTable.Cell>
                <DataTable.Cell
                  bold
                  className={`bg-primary-50/70 ${zelleMobil} max-md:mx-4 max-md:mt-1 max-md:rounded-lg max-md:px-3 max-md:py-2`}
                >
                  <MobilLabel>Private Claude AI Gateway</MobilLabel>
                  {gateway}
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable.Body>
        </DataTable>
        <Typo.Paragraph textColor="muted" className="mx-auto mt-6 max-w-3xl text-center text-sm">
          Stand November 2026, nach der Dokumentation von Anthropic zu Claude Desktop mit Drittanbieter-Inferenz. Den
          direkten Weg über Bedrock beschreibt unser Artikel{" "}
          <InternalLink href="/blog/claude-cowork-bedrock-dsgvo" variant="underline">
            Claude Cowork Bedrock
          </InternalLink>
          .
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Vor dem Start</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Was Sie wissen sollten</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3} className="mx-auto mt-10 max-w-6xl">
          <ProseColumns.Item title="Cowork und Code">
            Über das Gateway laufen Plugins in Cowork und Code. Im Chat kennt Claude sie nicht. Für Abläufe mit Dateien
            und mehreren Schritten ist Cowork ohnehin der richtige Ort.
          </ProseColumns.Item>
          <ProseColumns.Item title="Laufzeit auf dem Rechner">
            Ein lokaler Server in Node oder Python braucht diese Laufzeit auf jedem Rechner. Ohne Softwareverteilung
            ist ein Bundle vom Typ „binary“ einfacher: eine Programmdatei je System, ohne Voraussetzungen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Nur Admins laden Code hoch">
            Ein lokaler Server ist Programmcode, der auf den Rechnern läuft. Deshalb dürfen nur Admins Bundles
            hochladen. Nehmen Sie nur Server aus vertrauenswürdigen Quellen oder lassen Sie sie bauen.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline className="text-balance">Wie es weitergeht</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/integrationen/plugin-entwicklung"
            title="Plugin-Entwicklung"
            price="ab 2.500 €"
            description="Wir bauen Plugins und MCP-Server für Ihre Abläufe und Systeme, ausgeliefert über das Gateway."
            linkLabel="Zur Plugin-Entwicklung"
          />
          <OfferCard
            href="/managed-claude/zentrale-steuerung"
            title="Managed Claude Interface"
            description="Limits, Team, Anweisungen, Connectors und Plugins an einem Ort."
            linkLabel="Zum Interface"
          />
          <OfferCard
            href="/managed-claude/onboarding"
            title="Onboarding"
            description="Wie wir das Gateway mit Ihnen einrichten, inklusive der ersten Plugins."
            linkLabel="Zum Onboarding"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <FaqContainer
          faqs={faqs}
          headline="Fragen zu Plugins im Gateway"
          intro="Was Admins vor dem ersten Plugin wissen wollen."
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline className="text-balance">Plugins im Gateway live sehen?</IntroBox.Headline>
          <IntroBox.Paragraph>
            In 30 Minuten zeigen wir Ihnen, wie ein Plugin mit Skills und lokalem Server entsteht und wie es auf die
            Rechner Ihres Teams kommt. Danach wissen Sie, welche Abläufe sich als erstes Plugin lohnen.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Live-Demo vereinbaren</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
