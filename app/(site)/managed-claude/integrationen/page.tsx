import type { Metadata } from "next";
import { ReactNode } from "react";
import { Database, Eye, PenLine, Plug, ScrollText, Server, UserCheck } from "lucide-react";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, ProseColumns, FaqContainer, Button } from "@/components/ui";
import {
  OfferCard,
  SimpleCard,
  ComparisonCard,
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
} from "@/components/cards";
import { ContactButton, InternalLink } from "@/components/buttons";
import {
  Hero2Column,
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
} from "@/components/heroes";
import { FlowDiagram, HubDiagram } from "@/components/diagrams";
import BrowserFrame from "@/components/mockups/browser-frame";
import PortalMock from "@/components/mockups/portal-mock";
import { BraveLogo, ClaudeLogo, DatevLogo, MicrosoftLogo } from "@/components/icons/brand-logos";

const meta = {
  title: "Claude MCP: DATEV, Outlook und eigene Systeme anbinden",
  description:
    "Claude MCP über das Private Claude AI Gateway: DATEV, Microsoft 365, Websuche und eigene MCP-Server an Claude Desktop und Cowork anbinden, zentral verwaltet.",
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
        url: "/og?title=Claude%20MCP%3A%20Ihre%20Systeme%20anbinden&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude MCP: Ihre Systeme anbinden",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/integrationen",
  },
};

// Logo im Kästchen, für die Anbindungs-Kacheln
function LogoBadge({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50 ring-1 ring-gray-200">
      {children}
    </span>
  );
}

const templates = [
  { name: "Pipedrive", color: "#1a1a1a" },
  { name: "Notion", color: "#37352f" },
  { name: "Linear", color: "#5e6ad2" },
  { name: "Atlassian", color: "#0052cc" },
  { name: "monday.com", color: "#ff3d57" },
  { name: "Stripe", color: "#635bff" },
  { name: "Sentry", color: "#362d59" },
  { name: "Canva", color: "#00a3bf" },
];

const faqs = [
  {
    question: "Was ist Claude MCP?",
    answer:
      "MCP steht für Model Context Protocol, den offenen Standard, über den Claude Werkzeuge und Datenquellen nutzt. Ein MCP-Server stellt definierte Aktionen bereit, etwa „offene Posten zu Mandant X abrufen“. Claude ruft diese Aktionen auf, statt mit hochgeladenen Exporten zu arbeiten.",
  },
  {
    question: "Wie kommt ein MCP-Server in Claude Desktop?",
    answer:
      "Ohne Gateway pflegt jemand an jedem Rechner eine Konfigurationsdatei. Mit dem Private Claude AI Gateway tragen Sie den Server einmal im Portal ein, mit Name, Adresse und bei Bedarf OAuth Client-ID und Secret, und weisen ihn Personen zu. Claude Desktop holt sich die Konfiguration beim Start selbst.",
  },
  {
    question: "Funktionieren die Connectors auch in Claude Cowork?",
    answer:
      "Ja. Die Connectors aus dem Portal stehen in Claude Desktop zur Verfügung, im Chat und in Cowork. Wer welchen Connector bekommt, legen Sie je Person fest.",
  },
  {
    question: "Welche Systeme lassen sich anbinden?",
    answer:
      "Fertig dabei sind DATEV (Beta), Microsoft 365 mit Outlook, Kalender und OneDrive sowie die Websuche über Brave. Im Vorlagen-Katalog stehen unter anderem Pipedrive, Linear, Notion, Atlassian, monday.com, Stripe, Sentry und Canva. Jeder Remote-MCP-Server lässt sich zusätzlich eintragen, und für Systeme ohne MCP-Server bauen wir einen.",
  },
  {
    question: "Was kosten die Anbindungen?",
    answer:
      "Die Websuche ist inklusive. Der Outlook Connector kostet einmalig 500 € und wird bei Coaching-Paket M oder L voll angerechnet. Der DATEV MCP kostet in der Beta 100 € pro Monat. Ein eigener MCP-Server wird nach Aufwand gebaut, mit Schätzung vorab.",
  },
  {
    question: "Darf Claude in meinen Systemen schreiben?",
    answer:
      "Standard ist nur lesen. Schreibrechte werden einzeln und für einen bestimmten Zweck freigegeben, und auch dann legt Claude zuerst einen Vorschlag an, den eine Person bestätigt.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Integrationen</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>Claude MCP: Ihre Systeme an Claude anbinden</Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Über MCP (Model Context Protocol) greift Claude auf Ihre Systeme zu, statt mit hochgeladenen Listen zu arbeiten. Bluebatch bindet DATEV, Microsoft 365 mit Outlook, die Websuche und eigene Systeme an das Private Claude AI Gateway an. Die Connectors verwalten Sie zentral im Portal, je Person an oder aus. Standard ist: nur lesen.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
              <Button variant="secondary" href="#anbindungen">
                Alle Anbindungen
              </Button>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <HubDiagram
              center={{
                icon: <ClaudeLogo className="h-6 w-6" />,
                label: "Private Claude AI Gateway",
                sublabel: "Claude Desktop, Cowork und Agenten",
              }}
              spokes={[
                { icon: <DatevLogo className="h-6 w-6" />, label: "DATEV", sublabel: "DATEV MCP (Beta)" },
                { icon: <MicrosoftLogo className="h-5 w-5" />, label: "Microsoft 365", sublabel: "Outlook, Kalender, OneDrive" },
                { icon: <BraveLogo className="h-6 w-6" />, label: "Websuche", sublabel: "Brave Search" },
                { icon: <Plug className="h-5 w-5" />, label: "Eigene Systeme", sublabel: "per MCP, z.B. Notion" },
              ]}
              caption="Ein Gateway, alle Anbindungen. Rechte, Budget und Protokoll gelten für jede davon."
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" id="anbindungen">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Unsere Anbindungen</IntroBox.PreHeadline>
          <IntroBox.Headline>Was heute an Claude angebunden wird</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2}>
          <OfferCard
            highlight
            href="/managed-claude/integrationen/datev"
            price="100 € / Monat"
            title={
              <>
                <LogoBadge>
                  <DatevLogo className="h-7 w-7" />
                </LogoBadge>
                DATEV MCP (Beta)
              </>
            }
            description="Claude fragt Ihren DATEV-Bestand direkt ab: Mandanten, offene Posten, Salden, Bearbeitungsstand. Lesend, mit den DATEV-Rechten der jeweiligen Person."
            linkLabel="Zur DATEV-Anbindung"
          />
          <OfferCard
            href="/managed-claude/integrationen/microsoft"
            price="500 € einmalig"
            title={
              <>
                <LogoBadge>
                  <MicrosoftLogo className="h-6 w-6" />
                </LogoBadge>
                Outlook Connector (Microsoft 365)
              </>
            }
            description="Mails, Kalender, OneDrive und SharePoint in Claude. Jede Person meldet sich mit dem eigenen Microsoft-Konto an und Claude sieht nur, was sie sehen darf."
            linkLabel="Zum Outlook Connector"
          />
          <OfferCard
            href="/managed-claude/integrationen/websearch"
            price="inklusive"
            title={
              <>
                <LogoBadge>
                  <BraveLogo className="h-7 w-7" />
                </LogoBadge>
                Websuche
              </>
            }
            description="Aktuelle Quellen aus dem Netz über Brave Search, mit nummerierten Fundstellen. Claude fragt vor jeder Suche nach."
            linkLabel="Zur Websuche"
          />
          <OfferCard
            href="/managed-claude/integrationen/mcp-server-erstellen"
            price="nach Aufwand"
            title={
              <>
                <LogoBadge>
                  <Server className="h-6 w-6 text-primary-700" />
                </LogoBadge>
                Eigener MCP-Server
              </>
            }
            description="Für Systeme, die noch keinen MCP-Server haben: Kanzleisoftware, DMS, Fristen, Zeiterfassung. Wir bauen ihn, mit Schätzung vorab."
            linkLabel="MCP-Server erstellen lassen"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Connector-Katalog im Portal</IntroBox.PreHeadline>
              <IntroBox.Headline>Claude Cowork Connectors zentral verwalten</IntroBox.Headline>
            </IntroBox>
            <Typo.Paragraph textColor="muted">
              Im Portal des Gateways richten Admins jeden Connector einmal ein und schalten ihn für alle oder für ausgewählte Personen frei. Claude Desktop holt sich die Einstellungen beim Start selbst, im Chat und in Cowork.
            </Typo.Paragraph>
            <Typo.List className="text-gray-600">
              <Typo.ListItem>Microsoft 365 über eine eigene App-Registrierung in Ihrem Entra ID</Typo.ListItem>
              <Typo.ListItem>Websuche mit Rückfrage vor jeder Suche</Typo.ListItem>
              <Typo.ListItem>Vorlagen wie Pipedrive, Notion, Linear, Atlassian oder monday.com</Typo.ListItem>
              <Typo.ListItem>Eigene Remote-MCP-Server mit Name, Adresse und OAuth</Typo.ListItem>
            </Typo.List>
            <InternalLink href="/managed-claude/zentrale-steuerung">Mehr zum Portal und zur zentralen Steuerung</InternalLink>
          </div>
          <BrowserFrame url="dashboard-ai-gateway.bluebatch.io/connectors">
            <PortalMock active="connectors">
              <PortalMock.Intro>
                Systeme zentral anbinden. Jeder Connector gilt für alle oder für ausgewählte Personen.
              </PortalMock.Intro>
              <PortalMock.Section title="Eingerichtet">
                <div className="grid gap-2 sm:grid-cols-2">
                  <PortalMock.Card className="flex items-center gap-2.5">
                    <MicrosoftLogo className="h-5 w-5 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="font-medium">Microsoft 365</div>
                      <div className="text-[10px] text-gray-500">Alle Personen</div>
                    </div>
                    <PortalMock.Switch />
                  </PortalMock.Card>
                  <PortalMock.Card className="flex items-center gap-2.5">
                    <BraveLogo className="h-5 w-5 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="font-medium">Websuche</div>
                      <div className="text-[10px] text-gray-500">fragt vor jeder Suche</div>
                    </div>
                    <PortalMock.Switch />
                  </PortalMock.Card>
                </div>
              </PortalMock.Section>
              <PortalMock.Section title="Vorlagen">
                <PortalMock.Field placeholder>Suchen, z.B. CRM oder Pipedrive</PortalMock.Field>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {templates.map((t) => (
                    <PortalMock.Card key={t.name} className="flex flex-col items-start gap-1.5 p-2.5!">
                      <span
                        className="flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-bold text-white"
                        style={{ backgroundColor: t.color }}
                      >
                        {t.name.charAt(0).toUpperCase()}
                      </span>
                      <span className="text-[11px] font-medium">{t.name}</span>
                      <PortalMock.Button>Aktivieren</PortalMock.Button>
                    </PortalMock.Card>
                  ))}
                </div>
              </PortalMock.Section>
              <div className="flex justify-end">
                <PortalMock.Button variant="primary">Eigenen MCP-Server hinzufügen</PortalMock.Button>
              </div>
            </PortalMock>
          </BrowserFrame>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Für jede Anbindung</IntroBox.PreHeadline>
          <IntroBox.Headline>Vier Regeln, die immer gelten</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={4}>
          <SimpleCard align="left" className="rounded-2xl">
            <SimpleCard.Icon background="primary-gradient" color="white" size="sm" className="mb-4">
              <Eye className="h-6 w-6" />
            </SimpleCard.Icon>
            <Typo.H3 className="mt-0! text-lg! md:text-xl!">Kontrolliert lesen</Typo.H3>
            <Typo.Paragraph textColor="muted" spacing="none">
              Freigegeben wird, was freigegeben sein soll, über die Standard-Schnittstellen des jeweiligen Systems.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="rounded-2xl">
            <SimpleCard.Icon background="primary-gradient" color="white" size="sm" className="mb-4">
              <PenLine className="h-6 w-6" />
            </SimpleCard.Icon>
            <Typo.H3 className="mt-0! text-lg! md:text-xl!">Kontrolliert schreiben</Typo.H3>
            <Typo.Paragraph textColor="muted" spacing="none">
              Schreibrechte einzeln und für einen Zweck, nie pauschal. Erst Vorschlag, dann Freigabe durch eine Person.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="rounded-2xl">
            <SimpleCard.Icon background="primary-gradient" color="white" size="sm" className="mb-4">
              <UserCheck className="h-6 w-6" />
            </SimpleCard.Icon>
            <Typo.H3 className="mt-0! text-lg! md:text-xl!">Rechte der Person</Typo.H3>
            <Typo.Paragraph textColor="muted" spacing="none">
              Claude sieht genau das, was die angemeldete Person sieht. Mandantentrennung bleibt Mandantentrennung.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left" className="rounded-2xl">
            <SimpleCard.Icon background="primary-gradient" color="white" size="sm" className="mb-4">
              <ScrollText className="h-6 w-6" />
            </SimpleCard.Icon>
            <Typo.H3 className="mt-0! text-lg! md:text-xl!">Nachvollziehbar</Typo.H3>
            <Typo.Paragraph textColor="muted" spacing="none">
              Abfragen und Schreibaktionen sind mit Zeitstempel protokolliert. Wer welchen Connector hat, steht im Portal.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Model Context Protocol</IntroBox.PreHeadline>
          <IntroBox.Headline>Wie ein Claude MCP Server arbeitet</IntroBox.Headline>
          <IntroBox.Paragraph>
            Der MCP-Server sitzt zwischen Claude und Ihrem System und bietet nur die Aktionen an, die vorgesehen sind.
          </IntroBox.Paragraph>
        </IntroBox>
        <FlowDiagram
          bidirectional
          className="mb-12"
          nodes={[
            { icon: <ClaudeLogo className="h-6 w-6" />, label: "Claude", sublabel: "Desktop, Cowork oder Agent" },
            { icon: <Server className="h-5 w-5" />, label: "MCP-Server", sublabel: "z.B. „offene Posten abrufen“", highlight: true },
            { icon: <Database className="h-5 w-5" />, label: "Ihr System", sublabel: "DATEV, CRM, DMS, Fristen" },
          ]}
          caption="Claude fragt, der MCP-Server führt eine definierte Aktion aus, Ihr System antwortet. Ein Datenbankzugriff „auf alles“ ist nicht vorgesehen."
        />
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Ein offener Standard">
            MCP wurde von Anthropic entwickelt und wird inzwischen herstellerübergreifend genutzt. Was einmal angebunden ist, bleibt nutzbar, auch bei einem anderen Client.
          </ProseColumns.Item>
          <ProseColumns.Item title="Definierte Aktionen">
            Jedes Werkzeug ist eine klar beschriebene Aktion wie „Mandant suchen“ oder „offene Posten abrufen“, nicht „Zugriff auf die Datenbank“.
          </ProseColumns.Item>
          <ProseColumns.Item title="Claude Desktop MCP ohne Handarbeit">
            Niemand muss an jedem Rechner Konfigurationsdateien pflegen. Der Server wird einmal im Portal eingetragen und kommt automatisch bei den richtigen Personen an.
          </ProseColumns.Item>
        </ProseColumns>
        <Typo.Paragraph textColor="muted" className="mx-auto mt-8 max-w-3xl text-center">
          Grundlagen zum Protokoll stehen in{" "}
          <InternalLink href="/blog/was-ist-mcp-server" variant="underline">
            Was ist ein MCP-Server?
          </InternalLink>
          , den Bau eigener Server beschreibt{" "}
          <InternalLink href="/managed-claude/integrationen/mcp-server-erstellen" variant="underline">
            MCP-Server erstellen lassen
          </InternalLink>
          .
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Der Unterschied zum Export</IntroBox.PreHeadline>
          <IntroBox.Headline>Fragen statt hochladen</IntroBox.Headline>
        </IntroBox>
        <ComparisonCard className="mx-auto max-w-5xl">
          <BeforeCard className="rounded-2xl">
            <ComparisonHeadline>Heute: Export</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>Jemand exportiert eine Liste und lädt sie irgendwo hoch.</ComparisonListItem>
              <ComparisonListItem>Der Datenstand ist von gestern.</ComparisonListItem>
              <ComparisonListItem>Die Mandantendaten haben das Haus als Datei verlassen.</ComparisonListItem>
              <ComparisonListItem>Rechte gelten nicht mehr, die Datei sieht jeder, der sie hat.</ComparisonListItem>
            </ComparisonList>
          </BeforeCard>
          <AfterCard className="rounded-2xl">
            <ComparisonHeadline>Mit Anbindung</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>Claude fragt das System direkt, wenn die Frage kommt.</ComparisonListItem>
              <ComparisonListItem>Der Datenstand ist der von jetzt.</ComparisonListItem>
              <ComparisonListItem>Die Daten bleiben, wo sie sind. Es gibt keine Kopie.</ComparisonListItem>
              <ComparisonListItem>Es gelten die Rechte der Person. Geschrieben wird nur nach Freigabe.</ComparisonListItem>
            </ComparisonList>
          </AfterCard>
        </ComparisonCard>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <FaqContainer headline="Häufige Fragen zu Claude MCP" faqs={faqs} />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Welche Systeme sollen an Claude?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Im Scoping-Gespräch klären wir in 30 Minuten Stand der IT, Anmeldung, wer Zugriff bekommt und welche Systeme relevant sind. Drei Tage danach haben Sie ein Angebot mit Festpreis, Verbrauchsschätzung und Limit-Vorschlag.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
