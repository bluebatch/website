import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, GeoSummary, ProseColumns, TimelineAsSteps, TimelineAsStepsStep, DataTable, FaqContainer } from "@/components/ui";
import { OfferCard } from "@/components/cards";
import { ConsultationCtaDefault } from "@/components/sections";
import { ContactButton } from "@/components/buttons";

export const rewriteSiteConfig: RewriteSiteConfig = {
  legacyRedirects: ["/ki-implementierung"],
  rewrites: [],
};

// ENTWURF (Branch anthropic-managed-service-provider): Gerüst für die
// Repositionierung auf Managed Claude, Inhalte werden noch geschärft.

export const metadata: Metadata = {
  title: "Private Claude AI Gateway: KI mit einem Partner statt fünfzehn Tools | Bluebatch",
  description:
    "Managed Claude von Bluebatch: das Private Claude AI Gateway in Ihrem Konto, AWS Bedrock Frankfurt, DSGVO-konform und tragfähig nach § 203 StGB und § 62a StBerG. Einrichtung 1.500 €, Modellkosten 1:1.",
  openGraph: {
    title: "Private Claude AI Gateway: KI mit einem Partner statt fünfzehn Tools",
    description:
      "Managed Claude von Bluebatch: das Private Claude AI Gateway in Ihrem Konto, AWS Bedrock Frankfurt, DSGVO-konform und tragfähig nach § 203 StGB und § 62a StBerG. Einrichtung 1.500 €, Modellkosten 1:1.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=KI%20mit%20einem%20Partner%20statt%20mit%20f%C3%BCnfzehn%20Tools&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "KI mit einem Partner statt mit fünfzehn Tools",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude",
  },
};

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection bodyWidth="small">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Private Claude AI Gateway</IntroBox.PreHeadline>
        </IntroBox>
        <Typo.H1 className="text-center">KI mit einem Partner statt mit fünfzehn Tools</Typo.H1>
        <GeoSummary align="center">
          Das Private Claude AI Gateway von Bluebatch ist eine eigene KI-Infrastruktur für Kanzleien und Unternehmen: Claude von Anthropic über AWS Bedrock in Frankfurt, in Ihrem eigenen Konto, DSGVO-konform und berufsrechtlich tragfähig nach § 203 StGB und § 62a StBerG. Die Einrichtung kostet einmalig 1.500 €, die Modellkosten werden 1:1 ohne Aufschlag abgerechnet.
        </GeoSummary>
        <div className="mx-auto mb-8 max-w-xl">
          <Typo.List>
            <Typo.ListItem>Eigenes Konto, AWS Bedrock in Frankfurt (EU)</Typo.ListItem>
            <Typo.ListItem>Tragfähig nach § 203 StGB, § 43e BRAO und § 62a StBerG</Typo.ListItem>
            <Typo.ListItem>Keine Lizenz pro Kopf, Modellkosten 1:1 ohne Aufschlag</Typo.ListItem>
            <Typo.ListItem>Einrichtung 1.500 € Festpreis, startklar in maximal 1 Woche</Typo.ListItem>
          </Typo.List>
        </div>
        <div className="flex justify-center">
          <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Das Problem ist nicht die Technik</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Jedes Tool bringt dieselbe Frage mit">
            Wo laufen die Daten hin? In Kanzleien heißt sie § 203 StGB und § 62a StBerG, nicht nur DSGVO. Wer sie für jedes Tool einzeln beantwortet, prüft sechsmal, verhandelt sechsmal und zahlt sechs Abos.
          </ProseColumns.Item>
          <ProseColumns.Item title="Ohne Freigabe läuft es trotzdem">
            Solange niemand etwas freigibt, wird KI trotzdem genutzt: mit privaten Konten und echten Mandantendaten. Das ist ein persönliches Risiko der Berufsträger.
          </ProseColumns.Item>
          <ProseColumns.Item title="Ein Partner, eine Struktur">
            Sie brauchen nicht ein KI-Tool, sondern mehrere. Und darunter einen Partner, der die Modelle mitbringt und die Struktur, in der sie bei Ihnen laufen dürfen.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Der KI-Partner: Modelle und Struktur</IntroBox.Headline>
          <IntroBox.Paragraph>
            Ein KI-Partner bringt zwei Dinge mit: die Modelle und die Struktur, in der sie bei Ihnen laufen dürfen. Das eine ohne das andere nützt Ihnen nichts.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Die Modelle">
            Claude von Anthropic: Haiku für Einfaches, Sonnet im Alltag, Opus für die harten Fälle. Umschaltbar je Aufgabe.
          </ProseColumns.Item>
          <ProseColumns.Item title="Die Struktur">
            Das Private Claude AI Gateway: eine abgesicherte Tür, durch die jede KI-Nutzung läuft, mit Rechten, Protokoll und Abrechnung.
          </ProseColumns.Item>
          <ProseColumns.Item title="Der Aufbau">
            Einrichtung, Schulung, Kanzlei-Handbuch, Agenten, Anbindung. Wir bauen, bis Sie es selbst können.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Das Fundament und drei Schritte darauf</IntroBox.Headline>
          <IntroBox.Paragraph>
            Das Gateway ist kein Schritt, sondern die Voraussetzung: einmal geklärt, strafrechtlich wie berufsrechtlich, und alles läuft darauf. Erst arbeiten, dann gut werden, dann automatisieren. Wer mit Agenten anfängt, automatisiert Abläufe, die noch niemand im Haus wirklich verstanden hat.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            highlight
            href="/managed-claude/claude-app"
            title="Schritt 1: Chat"
            description="Der Chat für jeden Mitarbeiter, ab Tag 1. Chat, Co-Work und Projekte in einer Umgebung, in der das erlaubt ist."
            linkLabel="Zum Chat"
          />
          <OfferCard
            href="/managed-claude/onboarding"
            title="Schritt 2: Coaching und Kanzlei-Handbuch"
            description="Das Team wird gut und zertifiziert, das Wissen bleibt im Haus. Inklusive KI-Kompetenzschulung nach Art. 4 EU AI Act."
            linkLabel="Zu Schulung und Onboarding"
          />
          <OfferCard
            href="/managed-claude/use-cases"
            title="Schritt 3: Agenten und Integration"
            description="Mail-Agent, Anbindung eigener Systeme und DATEV, auf derselben Infrastruktur."
            linkLabel="Zu Agenten und Use Cases"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>KI im Alltag</IntroBox.Headline>
          <IntroBox.Paragraph>
            Was mit dem Gateway in Kanzlei und Büro möglich wird.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title="Chat mit Dokumenten">
            Bescheid, Vertrag oder Jahresabschluss befragen statt blättern.
          </ProseColumns.Item>
          <ProseColumns.Item title="Mandantenkommunikation">
            Entwürfe für Mails und Anschreiben, im Ton der Kanzlei.
          </ProseColumns.Item>
          <ProseColumns.Item title="Mail-Agent">
            Posteingang vorsortiert, Entwürfe liegen vorbereitet da.
          </ProseColumns.Item>
          <ProseColumns.Item title="Fachliche Routinen">
            Wiederkehrende Prüfschritte, immer nach Ihrer Methodik.
          </ProseColumns.Item>
          <ProseColumns.Item title="Belege und Listen">
            Strukturiert auswerten, Auffälligkeiten vorab markiert.
          </ProseColumns.Item>
          <ProseColumns.Item title="Zugriff auf DATEV">
            Die KI fragt Ihren Datenbestand, statt zu raten.
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
          <IntroBox.Headline>Sie entscheiden zuerst nur über Schritt 1</IntroBox.Headline>
          <IntroBox.Paragraph>
            Der ist klein, hat einen Festpreis und ist umkehrbar. Schulung, Agenten, Systemanbindung und DATEV entscheiden Sie, wenn Sie aus dem Alltag wissen, was sich lohnt.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="mx-auto max-w-3xl">
          <TimelineAsSteps>
            <TimelineAsStepsStep value={1}>
              <Typo.H3 className="mt-2!">Scoping-Gespräch, 30 Minuten</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Stand der IT, Anmeldung, wer Zugriff bekommt, welche Systeme später relevant sind. Mit Ihnen, Ihrer IT und uns.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={2}>
              <Typo.H3 className="mt-2!">Angebot, 3 Tage danach</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Einrichtung zum Festpreis, mit Verbrauchsschätzung und Limit-Vorschlag.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={3}>
              <Typo.H3 className="mt-2!">Einrichtung, maximal 1 Woche nach Auftrag</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Gateway und Chat startklar, alle Mitarbeiter haben Zugang. Wir, gemeinsam mit Ihrer IT.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4}>
              <Typo.H3 className="mt-2!">Rückblick nach 4 bis 6 Wochen</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                Was wird genutzt, wo lohnt sich Schritt 2, welcher Vorgang ist der Kandidat für Schritt 3. Gemeinsam.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
          </TimelineAsSteps>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Alles zum Private Claude AI Gateway</IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            href="/managed-claude/wie-es-funktioniert"
            title="Wie es funktioniert"
            description="Architektur, Rechtsrahmen nach § 203 StGB und § 62a StBerG, kein Lock-in."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/preise"
            title="Preise"
            description="1.500 € Einrichtung, Tokenpreise je Modell, Pakete und Add-ons."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/integrationen"
            title="Integrationen"
            description="DATEV MCP, Outlook Connector und eigene Systeme per MCP."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/claude-api"
            title="Claude API"
            description="Claude in eigenen Anwendungen, über dasselbe Gateway."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/weitere-tools/n8n"
            title="n8n"
            description="Auf n8n laufen unsere Agenten. Hosting, Wartung und Schulungen gibt es weiterhin."
            linkLabel="Zum n8n-Hub"
          />
          <OfferCard
            href="/managed-claude/weitere-tools"
            title="Weitere Tools"
            description="Make, Zapier, Navision, easybill, e.bootis und mehr."
            linkLabel="Zu allen Tools"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          headline="Häufige Fragen zum Private Claude AI Gateway"
          intro="Was Kanzleien und Unternehmen vor dem Start wissen wollen."
          faqs={[
            {
              "question": "Was ist das Private Claude AI Gateway?",
              "answer": "Eine abgesicherte Tür, durch die jede KI-Nutzung in Ihrer Organisation läuft: mit Rollen und Rechten, vollständigem Protokoll und einer Abrechnung. Dahinter läuft Claude von Anthropic über AWS Bedrock in der Region Frankfurt, in Ihrem eigenen Konto."
            },
            {
              "question": "Ist das mit § 203 StGB und § 62a StBerG vereinbar?",
              "answer": "Beide Vorschriften erlauben seit 2017 ausdrücklich, IT-Dienstleister einzubeziehen, soweit erforderlich. Wir liefern Verpflichtungserklärung, AV-Vertrag nach Art. 28 DSGVO, dokumentierte Maßnahmen und die Benennung aller Unterauftragnehmer. Die berufsrechtliche Bewertung und die Dokumentation Ihrer Auswahl bleiben bei Ihnen. Wir liefern die Unterlagen, keine Rechtsberatung."
            },
            {
              "question": "Werden unsere Daten für Training genutzt?",
              "answer": "Nein. Kein Training mit Ihren Daten ist vertraglich zugesichert, beim Anbieter wird kein Verlauf gespeichert (zero data retention), und die Datenresidenz in der EU ist dokumentiert."
            },
            {
              "question": "Was kostet das?",
              "answer": "Die Einrichtung kostet einmalig 1.500 € zzgl. USt. Danach zahlen Sie die Modellkosten nach Verbrauch, 1:1 ohne Aufschlag aus Ihrer AWS-Rechnung durchgereicht. Eine Lizenz pro Kopf gibt es nicht."
            },
            {
              "question": "Brauchen wir alle Schritte auf einmal?",
              "answer": "Nein. Sie entscheiden zuerst nur über Schritt 1, den Chat für alle Mitarbeiter. Schulung, Agenten, Systemanbindung und DATEV kommen, wenn der Alltag zeigt, wo sie sich lohnen."
            },
            {
              "question": "Wie schnell sind wir startklar?",
              "answer": "Maximal eine Woche nach Auftrag sind Gateway und Chat eingerichtet und alle Mitarbeiter haben Zugang."
            },
            {
              "question": "Sind wir danach an Bluebatch gebunden?",
              "answer": "Nein. Konto, Zugänge, Kanzlei-Handbuch und Abläufe gehören Ihnen. Wenn Sie uns morgen nicht mehr brauchen, läuft alles weiter. Die laufende Betreuung ist optional und jederzeit kündbar."
            },
            {
              "question": "Was geht in der Private-Umgebung nicht?",
              "answer": "Diktieren und Sprachmodus, die mobile App, die Design-Funktionen, Standard-Apps aus dem Claude Marketplace und die geräteübergreifende Chat-Speicherung. Chats liegen nur auf dem jeweiligen Endgerät."
            }
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Sprechen wir über Schritt 1</IntroBox.Headline>
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
