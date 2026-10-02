import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Claude API über Bluebatch: eigene Apps bauen, Kosten je Use Case | Bluebatch",
  description:
    "Claude API über Bluebatch: Sie bauen eigene Apps und Workflows und bekommen den API-Key über uns. Claude läuft über AWS Bedrock Frankfurt, die Kosten werden pro Agent, Use Case und Workflow getrackt.",
  openGraph: {
    title: "Claude API über Bluebatch: eigene Apps bauen, Kosten je Use Case",
    description:
      "Claude API über Bluebatch: Sie bauen eigene Apps und Workflows und bekommen den API-Key über uns. Claude läuft über AWS Bedrock Frankfurt, die Kosten werden pro Agent, Use Case und Workflow getrackt.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Eigene%20Apps%20bauen%2C%20mit%20Claude%20%C3%BCber%20Bluebatch&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Eigene Apps bauen, mit Claude über Bluebatch",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/claude-api",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Claude API</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Eigene Apps bauen, mit Claude über Bluebatch</Typo.H1>
        <GeoSummary align="center">
          Sie wollen eigene Apps, Agenten oder Workflows mit Claude bauen? Dann bekommen Sie den API-Key über Bluebatch. Claude läuft über AWS Bedrock in Frankfurt, im selben Rechtsrahmen wie das Private Claude AI Gateway, und wir tracken die Kosten gleich für Sie: pro Agent, pro Use Case und pro Workflow, mit eigenem Budget je Anwendung.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>So funktioniert es</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="API-Key über uns">
            Sie bekommen einen eigenen API-Key je Anwendung. Kein eigener Vertrag mit Anthropic oder AWS nötig, keine zweite Datenschutzprüfung.
          </ProseColumns.Item>
          <ProseColumns.Item title="Ihre App, Ihr Code">
            Sie oder Ihre Entwickler bauen die Anwendung. Ob eigene Software, n8n-Workflow oder Agent, der Key funktioniert überall.
          </ProseColumns.Item>
          <ProseColumns.Item title="Claude in Frankfurt">
            Alle Anfragen laufen über AWS Bedrock in Frankfurt, mit zero data retention und AVV nach Art. 28 DSGVO.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Kosten pro Agent, Use Case und Workflow</IntroBox.Headline>
          <IntroBox.Paragraph>
            Jede Anwendung ist ein eigener Verbraucher am Gateway. Sie sehen auf einen Blick, was welcher Use Case kostet und ob er sich lohnt.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Getrackt ab dem ersten Aufruf">
            Verbrauch je Key, aufgeschlüsselt nach Agent, Use Case und Workflow, in einer Abrechnung mit dem Chat.
          </ProseColumns.Item>
          <ProseColumns.Item title="Eigenes Budget">
            Jeder Key hat einen Deckel mit Warnschwelle. Ein Agent in der Schleife kostet maximal sein Budget.
          </ProseColumns.Item>
          <ProseColumns.Item title="Modellkosten laut Preisliste">
            Abgerechnet nach Verbrauch zu den Preisen je 1 Million Tokens aus unserer Preisliste. Haiku für Einfaches, Sonnet im Alltag, Opus für die harten Fälle.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Wofür Kunden die API nutzen</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Agenten">
            Mail-Agent, Belegvorerfassung oder Bescheidprüfung als eigener Ablauf im Hintergrund.
          </ProseColumns.Item>
          <ProseColumns.Item title="Workflows">
            Claude als Baustein in n8n oder anderen Automatisierungen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Eigene Oberflächen">
            Claude im Mandantenportal, im Intranet oder in einer Fachanwendung.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Weiter geht es hier</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/use-cases"
            title="Agenten"
            description="Was wir auf dem Gateway bauen, vom Mail-Agenten bis zur Bescheidprüfung."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/preise#modellkosten"
            title="Preisliste"
            description="Kosten je 1 Million Tokens, je Modell."
            linkLabel="Zur Preisliste"
          />
          <OfferCard
            href="/managed-claude/integrationen/mcp-server-erstellen"
            title="MCP-Server erstellen"
            description="Eigene Systeme für Claude erreichbar machen."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>API-Key für Ihre eigene App?</IntroBox.Headline>
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
