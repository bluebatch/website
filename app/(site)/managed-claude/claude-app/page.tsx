import type { Metadata } from "next";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, DataTable } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Claude App über das Gateway: der Chat für jeden Mitarbeiter | Bluebatch",
  description:
    "Schritt 1 des Private Claude AI Gateway: die Claude-App mit Chat, Co-Work und Projekten für jeden Mitarbeiter, ab Tag 1. Mit SSO, Rollen, Protokoll und Verbrauchslimits, Mandantendaten im Rahmen von § 203 StGB.",
  openGraph: {
    title: "Claude App über das Gateway: der Chat für jeden Mitarbeiter",
    description:
      "Schritt 1 des Private Claude AI Gateway: die Claude-App mit Chat, Co-Work und Projekten für jeden Mitarbeiter, ab Tag 1. Mit SSO, Rollen, Protokoll und Verbrauchslimits, Mandantendaten im Rahmen von § 203 StGB.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Der%20Chat%20f%C3%BCr%20jeden%20Mitarbeiter&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Der Chat für jeden Mitarbeiter",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/claude-app",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Schritt 1 · Claude App</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">Der Chat für jeden Mitarbeiter</Typo.H1>
        <GeoSummary align="center">
          Schritt 1 des Private Claude AI Gateway ist kein Pilotprojekt für drei Leute: Ab Tag 1 arbeitet die ganze Kanzlei oder das ganze Unternehmen mit der Claude-App, mit Chat, Co-Work und Projekten. Der Unterschied zum öffentlichen Chatbot: Die Daten laufen in Ihrem Konto, Mandantendaten sind im Rahmen von § 203 StGB und § 62a StBerG erlaubt, und es gibt Rollen, Protokoll und Limits.
        </GeoSummary>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Drei Arbeitsweisen in einer App</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Chat">
            Die schnelle Frage: ein Dokument, eine Auskunft, ein Entwurf. Zum Beispiel einen Bescheid gegen die eingereichte Erklärung prüfen und Abweichungen einzeln auflisten.
          </ProseColumns.Item>
          <ProseColumns.Item title="Co-Work">
            Gemeinsam am Schriftstück: Der Text steht neben dem Gespräch, einzelne Abschnitte werden gezielt überarbeitet.
          </ProseColumns.Item>
          <ProseColumns.Item title="Projekte">
            Ein Arbeitsbereich pro Mandat: Unterlagen und Zusammenhang bleiben liegen.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Was jeder ab Tag 1 macht</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Dokumente lesen">
            Bescheid, Vertrag oder Abschluss befragen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Schreiben">
            Anschreiben, Mails und Vermerke im Ton der Kanzlei.
          </ProseColumns.Item>
          <ProseColumns.Item title="Auswerten">
            Listen, Belegstapel und Salden strukturieren.
          </ProseColumns.Item>
          <ProseColumns.Item title="Nachschlagen">
            Einordnen, mit Fundstelle statt aus dem Bauch.
          </ProseColumns.Item>
          <ProseColumns.Item title="Einarbeiten">
            Neue fragen die KI, bevor sie die Kollegin fragen.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Was Ihren Chat vom öffentlichen Chatbot unterscheidet</IntroBox.Headline>
        </IntroBox>
        <div className="overflow-x-auto">
          <DataTable>
            <DataTable.Head>
              <DataTable.Row>
                <DataTable.HeaderCell>Kriterium</DataTable.HeaderCell>
                <DataTable.HeaderCell>Consumer-Chatbot</DataTable.HeaderCell>
                <DataTable.HeaderCell>Ihr Chat über das Gateway</DataTable.HeaderCell>
              </DataTable.Row>
            </DataTable.Head>
            <DataTable.Body>
              <DataTable.Row>
                <DataTable.Cell bold>Wo laufen die Daten</DataTable.Cell>
                <DataTable.Cell>Beim Anbieter</DataTable.Cell>
                <DataTable.Cell bold>In Ihrem Konto, AWS Frankfurt</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Mandantendaten</DataTable.Cell>
                <DataTable.Cell>Nein</DataTable.Cell>
                <DataTable.Cell bold>Ja, im Rahmen von § 203 StGB und § 62a StBerG</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Wer darf was</DataTable.Cell>
                <DataTable.Cell>Jeder alles</DataTable.Cell>
                <DataTable.Cell bold>Rollen und Rechte</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Nachvollziehbarkeit</DataTable.Cell>
                <DataTable.Cell>Keine</DataTable.Cell>
                <DataTable.Cell bold>Vollständiges Protokoll</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Kanzleiwissen</DataTable.Cell>
                <DataTable.Cell>Jedes Mal neu erklären</DataTable.Cell>
                <DataTable.Cell bold>Als Arbeitsanleitung hinterlegt</DataTable.Cell>
              </DataTable.Row>
              <DataTable.Row>
                <DataTable.Cell bold>Kosten</DataTable.Cell>
                <DataTable.Cell>Pro Kopf, pro Monat</DataTable.Cell>
                <DataTable.Cell bold>Nach Verbrauch, Limit pro Mitarbeiter</DataTable.Cell>
              </DataTable.Row>
            </DataTable.Body>
          </DataTable>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Was zum Start dazugehört</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Zugänge für alle Mitarbeiter">
            Nicht für drei Pilotnutzer, sondern für die ganze Organisation.
          </ProseColumns.Item>
          <ProseColumns.Item title="Anmeldung per SSO">
            Mit Ihrem bestehenden Konto, Rollen und Rechte gesetzt.
          </ProseColumns.Item>
          <ProseColumns.Item title="Protokoll und Limits">
            Protokollierung aktiv, Verbrauchslimits pro Mitarbeiter hinterlegt.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Gut zu wissen</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={2}>
          <ProseColumns.Item title="Die KI ersetzt keine fachliche Prüfung">
            Sie liefert Entwürfe und Fundstellen. Gezeichnet wird von einem Berufsträger, daran ändert sich nichts.
          </ProseColumns.Item>
          <ProseColumns.Item title="Nicht jeder nutzt sie täglich">
            Erfahrungsgemäß tragen 20 bis 30 % der Belegschaft den Großteil der Nutzung. Genau deshalb zahlen Sie Verbrauch, keinen Preis pro Kopf.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Was in der Private-Umgebung nicht geht</IntroBox.Headline>
          <IntroBox.Paragraph>
            Transparenz vorab: Diese Funktionen der öffentlichen Claude-App gibt es über das Gateway nicht.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Speech to Text">
            Diktieren und Sprachmodus sind nicht verfügbar. Eingaben erfolgen per Text oder Dokument.
          </ProseColumns.Item>
          <ProseColumns.Item title="Mobile-App">
            Die mobile Claude-App kann nicht mit dem Gateway genutzt werden.
          </ProseColumns.Item>
          <ProseColumns.Item title="Design">
            Die Design-Funktionen von Claude sind nicht enthalten.
          </ProseColumns.Item>
          <ProseColumns.Item title="Chat-Speicherung">
            Chats liegen nur auf dem jeweiligen Endgerät und lassen sich nicht auf einem anderen Gerät abrufen.
          </ProseColumns.Item>
          <ProseColumns.Item title="Claude Marketplace">
            Standard-Apps aus dem Claude Marketplace, zum Beispiel der Google-Drive-Connector, sind nicht verfügbar.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Weiter geht es hier</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/onboarding"
            title="Schritt 2: Schulung und Coaching"
            description="Das Team wird gut und zertifiziert, das Wissen bleibt im Haus."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/use-cases"
            title="Schritt 3: Agenten"
            description="Mail-Agent und weitere Agenten auf derselben Infrastruktur."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/preise"
            title="Preise"
            description="1.500 € Einrichtung, danach Verbrauch mit Deckel."
            linkLabel="Mehr erfahren"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Chat für alle Mitarbeiter einführen?</IntroBox.Headline>
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
