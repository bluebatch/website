import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import {
  Database,
  FileSearch,
  Handshake,
  Inbox,
  ListChecks,
  MessagesSquare,
  Monitor,
  ReceiptText,
  Scale,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import { Typo, IntroBox, ProseColumns, TimelineAsSteps, TimelineAsStepsStep, FaqContainer } from "@/components/ui";
import {
  OfferCard,
  ComparisonCard,
  BeforeCard,
  AfterCard,
  ComparisonHeadline,
  ComparisonList,
  ComparisonListItem,
  ComparisonFooter,
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
  HeroStatBand,
} from "@/components/heroes";
import { HubDiagram } from "@/components/diagrams";
import { ClaudeLogo, DatevLogo, MicrosoftLogo } from "@/components/icons/brand-logos";
import IconTitle from "./icon-title";
import { ConnectorsMock, HubHeroVisual } from "./hub-grafiken";

export const rewriteSiteConfig: RewriteSiteConfig = {
  legacyRedirects: ["/ki-implementierung"],
  rewrites: [],
};

const description =
  "Claude für Unternehmen und Kanzleien: Managed Claude läuft in Ihrem Konto über AWS Bedrock Frankfurt, nach § 203 StGB. Einrichtung 1.500 €, keine Lizenz pro Kopf.";

export const metadata: Metadata = {
  title: "Claude für Unternehmen: Managed Claude im eigenen Konto | Bluebatch",
  description,
  openGraph: {
    title: "Claude für Unternehmen: Managed Claude im eigenen Konto",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20f%C3%BCr%20Unternehmen%3A%20ein%20Partner%20statt%20f%C3%BCnfzehn%20Tools&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude für Unternehmen: ein Partner statt fünfzehn Tools",
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
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Managed Claude</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>Claude für Unternehmen: ein Partner statt fünfzehn Tools</Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Managed Claude von Bluebatch bringt Claude von Anthropic in Ihr eigenes Konto: über AWS Bedrock in Frankfurt, DSGVO-konform und tragfähig nach § 203 StGB und § 62a StBerG, für Kanzleien und Mittelstand. Die Einrichtung des Private Claude AI Gateway kostet einmalig 1.500 €, danach zahlen Sie die Modellkosten nach Verbrauch, ohne Lizenz pro Kopf.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
              <InternalLink href="/managed-claude/preise" className="self-center sm:ml-4">
                Preise ansehen
              </InternalLink>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <HubHeroVisual />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
        <HeroStatBand
          className="mt-14"
          stats={[
            { value: "1.500 €", label: "Einrichtung, Festpreis" },
            { value: "0 €", label: "Lizenz pro Kopf" },
            { value: "Frankfurt", label: "AWS Bedrock, EU" },
            { value: "1 Woche", label: "bis startklar" },
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Das Problem ist nicht die Technik</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title={<IconTitle icon={Scale}>Jedes Tool bringt dieselbe Frage mit</IconTitle>}>
            Wo laufen die Daten hin? In Kanzleien heißt sie § 203 StGB und § 62a StBerG, nicht nur DSGVO. Wer sie für jedes Tool einzeln beantwortet, prüft sechsmal, verhandelt sechsmal und zahlt sechs Abos.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={ShieldAlert}>Ohne Freigabe läuft es trotzdem</IconTitle>}>
            Solange niemand etwas freigibt, wird KI trotzdem genutzt: mit privaten Konten und echten Mandantendaten. Das ist ein persönliches Risiko der Berufsträger.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={Handshake}>Ein Partner, eine Struktur</IconTitle>}>
            Sie brauchen nicht ein KI-Tool, sondern mehrere. Und darunter einen Partner, der die Modelle mitbringt und die Struktur, in der sie bei Ihnen laufen dürfen.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Der KI-Partner</IntroBox.PreHeadline>
          <IntroBox.Headline>Modelle und Struktur aus einer Hand</IntroBox.Headline>
          <IntroBox.Paragraph>
            Ein KI-Partner bringt zwei Dinge mit: die Modelle und die Struktur, in der sie bei Ihnen laufen dürfen. Das eine ohne das andere nützt Ihnen nichts.
          </IntroBox.Paragraph>
        </IntroBox>
        <HubDiagram
          className="mx-auto max-w-4xl"
          center={{
            icon: <ShieldCheck className="h-5 w-5" />,
            label: "Private Claude AI Gateway",
            sublabel: "In Ihrem Konto: Rechte, Protokoll, Limits",
          }}
          spokes={[
            { icon: <Monitor className="h-5 w-5" />, label: "Claude Desktop", sublabel: "Chat, Cowork, Code" },
            { icon: <ClaudeLogo className="h-5 w-5" />, label: "Claude-Modelle", sublabel: "Opus, Sonnet, Haiku auf AWS Bedrock" },
            { icon: <MicrosoftLogo className="h-5 w-5" />, label: "Microsoft 365", sublabel: "Outlook, Kalender, OneDrive" },
            { icon: <DatevLogo className="h-5 w-5" />, label: "DATEV", sublabel: "DATEV MCP (Beta)" },
          ]}
        />
        <ProseColumns cols={3} className="mt-14">
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

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>KI-Lösungen für Unternehmen: ein Fundament, drei Schritte</IntroBox.Headline>
          <IntroBox.Paragraph>
            Das Gateway ist kein Schritt, sondern die Voraussetzung: einmal geklärt, strafrechtlich wie berufsrechtlich, und alles läuft darauf. Erst arbeiten, dann gut werden, dann automatisieren. Wer mit Agenten anfängt, automatisiert Abläufe, die noch niemand im Haus wirklich verstanden hat.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={3} className="gap-6">
          <OfferCard
            highlight
            href="/managed-claude/claude-app"
            price="1.500 €"
            title="Schritt 1: Chat"
            description="Claude Desktop für jeden Mitarbeiter ab Tag 1: Chat, Cowork und Projekte, in einer Umgebung, in der das erlaubt ist."
            linkLabel="Zum Chat"
          />
          <OfferCard
            href="/managed-claude/coaching"
            price="ab 5.000 €"
            title="Schritt 2: Coaching"
            description="KI-Schulung im Haus: Paket M mit 5 Personentagen für 5.000 €, Paket L mit 10 Personentagen für 10.000 €. Einrichtung und Outlook Connector werden voll angerechnet."
            linkLabel="Zum Coaching"
          />
          <OfferCard
            href="/managed-claude/use-cases"
            price="nach Aufwand"
            title="Schritt 3: Agenten"
            description="Mail-Agent, Anbindung eigener Systeme und DATEV, auf derselben Infrastruktur und mit eigenem Budget je Agent."
            linkLabel="Zu den Agenten"
          />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false} size="wide">
              <IntroBox.PreHeadline>Managed Claude Interface</IntroBox.PreHeadline>
              <IntroBox.Headline className="lg:text-4xl!">Claude zentral steuern, ohne jedes Gerät anzufassen</IntroBox.Headline>
              <IntroBox.Subline>
                Im Kundenportal des Gateways legen Sie fest, was Claude in Ihrer Organisation darf. Claude Desktop holt sich die Einstellungen selbst.
              </IntroBox.Subline>
            </IntroBox>
            <Typo.List className="mb-8">
              <Typo.ListItem>Team einladen, Rollen vergeben, Zugänge sperren</Typo.ListItem>
              <Typo.ListItem>Connectors wie Microsoft 365 für alle oder ausgewählte Personen</Typo.ListItem>
              <Typo.ListItem>Firmenweite Anweisungen, Skills und Banner</Typo.ListItem>
              <Typo.ListItem>Verbrauch und Limits in Euro, je Person</Typo.ListItem>
            </Typo.List>
            <InternalLink href="/managed-claude/zentrale-steuerung">Zum Managed Claude Interface</InternalLink>
          </div>
          <ConnectorsMock />
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.Headline>Claude AI im Unternehmen: was im Alltag möglich wird</IntroBox.Headline>
          <IntroBox.Paragraph>
            Was mit dem Gateway in Kanzlei und Büro ab der ersten Woche geht.
          </IntroBox.Paragraph>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title={<IconTitle icon={FileSearch}>Chat mit Dokumenten</IconTitle>}>
            Bescheid, Vertrag oder Jahresabschluss befragen statt blättern.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={MessagesSquare}>Mandantenkommunikation</IconTitle>}>
            Entwürfe für Mails und Anschreiben, im Ton der Kanzlei.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={Inbox}>Mail-Agent</IconTitle>}>
            Posteingang vorsortiert, Entwürfe liegen vorbereitet da.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={ListChecks}>Fachliche Routinen</IconTitle>}>
            Wiederkehrende Prüfschritte, immer nach Ihrer Methodik.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={ReceiptText}>Belege und Listen</IconTitle>}>
            Strukturiert auswerten, Auffälligkeiten vorab markiert.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={Database}>Zugriff auf DATEV</IconTitle>}>
            Claude fragt Ihren Datenbestand, statt zu raten.
          </ProseColumns.Item>
        </ProseColumns>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.Headline>Was Ihren Chat vom öffentlichen Chatbot unterscheidet</IntroBox.Headline>
        </IntroBox>
        <ComparisonCard className="mx-auto max-w-5xl">
          <BeforeCard className="rounded-2xl">
            <ComparisonHeadline>Öffentlicher Chatbot</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>Daten laufen beim Anbieter</ComparisonListItem>
              <ComparisonListItem>Keine Mandantendaten erlaubt</ComparisonListItem>
              <ComparisonListItem>Jeder darf alles, kein Protokoll</ComparisonListItem>
              <ComparisonListItem>Kanzleiwissen jedes Mal neu erklären</ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Kosten: pro Kopf, pro Monat</ComparisonFooter>
          </BeforeCard>
          <AfterCard className="rounded-2xl">
            <ComparisonHeadline>Ihr Chat über das Gateway</ComparisonHeadline>
            <ComparisonList>
              <ComparisonListItem>In Ihrem Konto, AWS Frankfurt</ComparisonListItem>
              <ComparisonListItem>Mandantendaten im Rahmen von § 203 StGB und § 62a StBerG</ComparisonListItem>
              <ComparisonListItem>Rollen, Rechte und vollständiges Protokoll</ComparisonListItem>
              <ComparisonListItem>Kanzleiwissen als Anweisung und Skill hinterlegt</ComparisonListItem>
            </ComparisonList>
            <ComparisonFooter>Kosten: nach Verbrauch, Limit pro Mitarbeiter</ComparisonFooter>
          </AfterCard>
        </ComparisonCard>
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
                Gateway und Claude Desktop startklar, alle Mitarbeiter haben Zugang. Wir, gemeinsam mit Ihrer IT.
              </Typo.Paragraph>
            </TimelineAsStepsStep>
            <TimelineAsStepsStep value={4} isLast>
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
            description="Architektur mit AWS Bedrock, Rechtsrahmen nach § 203 StGB und § 62a StBerG, kein Lock-in."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/preise"
            title="Preise"
            description="1.500 € Einrichtung, Tokenpreise je Modell, Coaching-Pakete M und L, Kostenrechner."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/zentrale-steuerung"
            title="Managed Claude Interface"
            description="Team, Limits, Connectors, Anweisungen und Skills zentral im Kundenportal."
            linkLabel="Zum Interface"
          />
          <OfferCard
            href="/managed-claude/integrationen"
            title="Integrationen"
            description="DATEV MCP, Outlook Connector, Websuche und eigene Systeme per MCP."
            linkLabel="Mehr erfahren"
          />
          <OfferCard
            href="/managed-claude/claude-api"
            title="Claude API"
            description="Eigene Apps bauen: API-Key über uns, Kosten je Agent und Use Case getrackt."
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
          headline="Häufige Fragen zu Claude für Unternehmen"
          intro="Was Kanzleien und Unternehmen vor dem Start wissen wollen."
          faqs={[
            {
              question: "Was ist Managed Claude für Unternehmen?",
              answer: "Managed Claude ist Claude von Anthropic als betreuter Dienst: Bluebatch richtet das Private Claude AI Gateway in Ihrem eigenen Konto ein, Claude läuft über AWS Bedrock in Frankfurt, und jede Nutzung geht mit Rollen, Protokoll und Limits durch das Gateway. Schulung, Agenten und Anbindungen kommen dazu, wenn Sie sie brauchen.",
            },
            {
              question: "Brauchen wir dafür den Claude Enterprise Plan?",
              answer: "Nein. Claude Enterprise ist das Abo direkt bei Anthropic und wird pro Kopf und Monat abgerechnet. Über das Gateway nutzen Sie die Claude-Modelle über AWS Bedrock in Frankfurt, zahlen nach Verbrauch und bekommen die Unterlagen für § 203 StGB und § 62a StBerG. Ein Abo bei Anthropic brauchen Sie dafür nicht.",
            },
            {
              question: "Ist das mit § 203 StGB und § 62a StBerG vereinbar?",
              answer: "Beide Vorschriften erlauben seit 2017 ausdrücklich, IT-Dienstleister einzubeziehen, soweit erforderlich. Wir liefern Verpflichtungserklärung, AV-Vertrag nach Art. 28 DSGVO, dokumentierte Maßnahmen und die Benennung aller Unterauftragnehmer. Die berufsrechtliche Bewertung und die Dokumentation Ihrer Auswahl bleiben bei Ihnen. Wir liefern die Unterlagen, keine Rechtsberatung.",
            },
            {
              question: "Werden unsere Daten für Training genutzt?",
              answer: "Nein. Kein Training mit Ihren Daten ist vertraglich zugesichert, beim Anbieter wird kein Verlauf gespeichert (zero data retention), und die Datenresidenz in der EU ist dokumentiert.",
            },
            {
              question: "Was kostet Claude für Unternehmen bei Bluebatch?",
              answer: "Die Einrichtung kostet einmalig 1.500 € zzgl. USt. Danach zahlen Sie die Modellkosten nach Verbrauch laut Preisliste je 1 Million Tokens, ohne Lizenz pro Kopf. Mit Coaching-Paket M (5.000 €) oder L (10.000 €) werden Einrichtung und Outlook Connector voll angerechnet.",
            },
            {
              question: "Sind wir danach an Bluebatch gebunden?",
              answer: "Nein. Konto, Zugänge, Kanzlei-Handbuch und Abläufe gehören Ihnen. Wenn Sie uns morgen nicht mehr brauchen, läuft alles weiter. Die laufende Betreuung ist optional und jederzeit kündbar.",
            },
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
    </>
  );
}
