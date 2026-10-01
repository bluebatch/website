import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Integrationen: Ihre Systeme an Claude anbinden (MCP) | Bluebatch",
  description:
    "Integrationen für das Private Claude AI Gateway: DATEV, DMS, Fristen, Mandantenportal, Zeiterfassung und Posteingang per MCP an Claude anbinden. Kontrolliert lesen, kontrolliert schreiben, mit Rollen und Protokoll.",
  openGraph: {
    title: "Integrationen: Ihre Systeme an Claude anbinden (MCP)",
    description:
      "Integrationen für das Private Claude AI Gateway: DATEV, DMS, Fristen, Mandantenportal, Zeiterfassung und Posteingang per MCP an Claude anbinden. Kontrolliert lesen, kontrolliert schreiben, mit Rollen und Protokoll.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Ihre%20Systeme%20anbinden&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Ihre Systeme anbinden",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/integrationen",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Schritt 3 · Integrationen</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Ihre Systeme anbinden</Typo.H1>
        <GeoSummary align="center">
          Ein Agent wird erst richtig nützlich, wenn er Ihre Systeme fragen darf: nicht „die KI kennt die Antwort", sondern die KI fragt nach. Bluebatch bindet DATEV und Kanzleisoftware, DMS, Fristen und Wiedervorlagen, Mandantenportal, Zeiterfassung und Posteingang über MCP an das Private Claude AI Gateway an. Standard ist: nur lesen.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Vier Regeln für jede Anbindung</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={4}>
          <ProseColumns.Item title="Kontrolliert lesen">
            Freigegeben wird, was freigegeben sein soll. Jede Abfrage läuft über die Standard-Schnittstellen des jeweiligen Systems.
          </ProseColumns.Item>
          <ProseColumns.Item title="Kontrolliert schreiben">
            Schreibrechte werden getrennt und einzeln aktiviert, nie pauschal. Standard ist: nur lesen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Rollen und Rechte">
            Ein Agent sieht und darf genau das, was die Rolle des Mitarbeiters sieht und darf. Mandantentrennung bleibt Mandantentrennung.
          </ProseColumns.Item>
          <ProseColumns.Item title="Vollständiges Protokoll">
            Jede Abfrage und jede Schreibaktion mit Zeitstempel nachvollziehbar.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Was angebunden wird</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="DATEV und Kanzleisoftware">
            Stammdaten, Salden, Auswertungen und Belege aus dem echten Bestand.
          </ProseColumns.Item>
          <ProseColumns.Item title="DMS und Ablage">
            Dokumente dort befragen, wo sie liegen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Fristen und Wiedervorlagen">
            „Welche Unterlagen fehlen bei Mandant M.?", beantwortet aus Ihrem Fristensystem.
          </ProseColumns.Item>
          <ProseColumns.Item title="Mandantenportal">
            Eingänge und Anfragen aus dem Portal einordnen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Zeiterfassung und Abrechnung">
            Auswertungen und Vorbereitung der Abrechnung.
          </ProseColumns.Item>
          <ProseColumns.Item title="Posteingang">
            Über den Outlook Connector, die Grundlage für den Mail-Agenten.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Model Context Protocol (MCP)</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Ein offener Standard">
            MCP ist der offene Standard, über den KI-Assistenten Werkzeuge und Datenquellen nutzen, von Anthropic entwickelt und inzwischen herstellerübergreifend im Einsatz.
          </ProseColumns.Item>
          <ProseColumns.Item title="Definierte Aktionen">
            Jedes Werkzeug ist eine definierte Aktion wie „offene Posten zu Mandant X abrufen", nicht „Zugriff auf die Datenbank".
          </ProseColumns.Item>
          <ProseColumns.Item title="Bleibt nutzbar">
            Was einmal angebunden ist, bleibt nutzbar, auch bei einem Wechsel des Clients.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Der Unterschied zum Export</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={2}>
          <ProseColumns.Item title="Heute">
            Eine Liste wird exportiert und irgendwo hochgeladen. Der Datenstand ist von gestern, und die Mandantendaten haben das Haus verlassen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Mit Anbindung">
            Datenstand und Mandantendaten bleiben an Ort und Stelle. Geschrieben wird erst nach Ihrer Freigabe.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Unsere Anbindungen</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={2} className="gap-6">
          <OfferCard
            highlight
            href="/managed-claude/integrationen/datev"
            price="100 € / Monat"
            title="DATEV MCP (Beta)"
            description="Die KI fragt Ihren DATEV-Bestand direkt ab, lesend, mit Mandantentrennung und Protokoll."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/integrationen/microsoft"
            price="500 € einmalig"
            title="Outlook Connector"
            description="Posteingang, Kalender und Entwürfe direkt in Claude."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/integrationen/websearch"
            price="inklusive"
            title="Websuche"
            description="Aktuelle Quellen aus dem Web über Brave Search, mit Fundstellen."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/integrationen/mcp-server-erstellen"
            title="Eigener MCP-Server"
            description="Für Systeme, die noch nicht dabei sind: nach Aufwand, mit Schätzung vorab."
            linkLabel="Zum MCP-Server"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Welche Systeme sollen an Claude?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Im Scoping-Gespräch klären wir in 30 Minuten Stand der IT, Anmeldung, wer Zugriff bekommt und welche Systeme später relevant sind. Drei Tage danach haben Sie ein Angebot mit Festpreis, Verbrauchsschätzung und Limit-Vorschlag.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
