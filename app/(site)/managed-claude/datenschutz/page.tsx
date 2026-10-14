import type { Metadata } from "next";
import { Check, ChartColumn, EyeOff, FolderLock, Globe, KeyRound, Lock, Timer, Users } from "lucide-react";
import { ContentWrapper, SimpleGrid } from "@/components/layout";
import {
  Typo,
  IntroBox,
  ProseColumns,
  DataTable,
  FaqContainer,
  TimelineAsSteps,
  TimelineAsStepsStep,
} from "@/components/ui";
import { SimpleCard } from "@/components/cards";
import { ContactButton, InternalLink } from "@/components/buttons";
import { FeatureRow } from "@/components/sections";
import { ConfigScreen, UsageScreen } from "@/components/mockups";
import {
  Hero2Column,
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
} from "@/components/heroes";
import IconTitle from "../icon-title";
import { DatenwegGrafik, KurzantwortKarte, WebsucheWarnung } from "./datenschutz-grafiken";

const description =
  "Claude Datenschutz im Vergleich: claude.ai, Team und Gateway. Über Bluebatch läuft Claude in der EU, mit AV-Vertrag und Verpflichtung nach § 203 StGB.";

export const metadata: Metadata = {
  title: "Claude Datenschutz: DSGVO-konform nutzen, Daten in der EU | Bluebatch",
  description,
  openGraph: {
    title: "Claude Datenschutz: DSGVO-konform nutzen, Daten in der EU",
    description,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=Claude%20Datenschutz%3A%20wo%20Ihre%20Daten%20landen&eyebrow=Managed%20Claude",
        width: 1200,
        height: 630,
        alt: "Claude Datenschutz: wo Ihre Daten landen und wer sie sieht",
      },
    ],
  },
  alternates: {
    canonical: "/managed-claude/datenschutz",
  },
};

// Vergleich der drei Wege. Angaben zu Anthropic nach privacy.claude.com
// (Stand Juni bis August 2026) und den Commercial Terms, zu AWS nach der
// Bedrock-Dokumentation. Qualitativ formuliert, wo es keine Quelle gibt.
const VERGLEICH: [string, string, string, string][] = [
  ["Vertragspartner", "Anthropic, Verbraucher-Bedingungen", "Anthropic, Commercial Terms", "Bluebatch GmbH, Nürnberg"],
  [
    "Wo verarbeitet wird",
    "Infrastruktur von Anthropic, ohne Zusage für die EU",
    "Anthropic, je nach Routing in den USA, Europa, Asien oder Australien, gespeichert in den USA",
    "Amazon Bedrock innerhalb der EU, Gateway in Frankfurt",
  ],
  [
    "Training mit Ihren Daten",
    "Möglich, wenn die Modellverbesserung im Konto an ist",
    "Standardmäßig nein",
    "Nein, weder AWS noch Anthropic",
  ],
  ["Chatverlauf", "Im Konto bei Anthropic", "Im Konto bei Anthropic", "Nur auf dem Rechner der Person"],
  [
    "AV-Vertrag nach Art. 28 DSGVO",
    "Nicht vorgesehen",
    "Ja, Standardvertrag von Anthropic",
    "Ja, mit Bluebatch, Unterauftragnehmer benannt",
  ],
  ["Verpflichtung nach § 203 StGB", "Nein", "Selbst prüfen und verhandeln", "Ja, Verpflichtungserklärung von Bluebatch"],
  ["Verwaltung", "Einzelkonto", "Admin-Konsole mit Rollen", "Portal mit Rollen, Limits in Euro, Verbrauch je Person"],
  [
    "Abrechnung",
    "Abo je Person",
    "Lizenz je Person, Enterprise teils nach Verbrauch",
    "1.500 € Einrichtung, danach nach Verbrauch",
  ],
];

const BETEILIGTE: [string, string, string, string][] = [
  [
    "Amazon Web Services (AWS)",
    "Rechenzentrum für das Gateway, Claude über Amazon Bedrock",
    "Anfragen mit Text, Dateien und Antworten zur Verarbeitung, Verbrauchsdaten in der Datenbank des Gateways",
    "Frankfurt, Modellaufrufe innerhalb der EU",
  ],
  [
    "Bluebatch",
    "Einrichtung, Betrieb und Support",
    "Verbrauchsdaten und Einstellungen Ihrer Organisation, keine Inhalte von Unterhaltungen",
    "Nürnberg",
  ],
  [
    "Clerk",
    "Anmeldung und Benutzerkonten",
    "Name, E-Mail-Adresse, Organisation und Anmeldungen, keine Inhalte",
    "Anbieter aus den USA",
  ],
  [
    "Brave Search",
    "Websuche, wenn freigeschaltet",
    "Nur die Suchbegriffe, gesendet vom Gateway, standardmäßig erst nach Freigabe der Person",
    "Anbieter aus den USA",
  ],
  [
    "Microsoft",
    "Microsoft-365-Connector, wenn eingerichtet",
    "Läuft über Ihre eigene App-Registrierung direkt vom Rechner zu Ihrem Tenant",
    "Ihr Vertrag mit Microsoft",
  ],
  [
    "Anthropic",
    "Hersteller der Claude-Modelle und von Claude Desktop",
    "Keine Inhalte. Bei Bedrock hat der Modellanbieter keinen Zugriff. Claude Desktop lädt dort Programmteile und Updates, Absturzberichte und Nutzungsstatistik sind abgeschaltet",
    "Anbieter aus den USA",
  ],
];

// Auf dem Handy werden beide Tabellen zu Blöcken je Zeile, jede Zelle mit
// ihrer Spaltenüberschrift davor. So bleibt die Gateway-Spalte ohne
// seitliches Wischen im Blick.
const zeileMobil = "max-md:block max-md:py-3";
const zelleMobil = "max-md:block max-md:px-4 max-md:py-1";

function MobilLabel({ children }: { children: string }) {
  return <span className="block text-xs font-medium text-gray-500 md:hidden">{children}</span>;
}

const UNTERLAGEN = [
  "AV-Vertrag nach Art. 28 DSGVO",
  "Verpflichtungserklärung nach § 203 StGB, passend zu § 43e BRAO und § 62a StBerG",
  "Technische und organisatorische Maßnahmen (TOMs)",
  "Liste aller Unterauftragnehmer",
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Managed Claude · Datenschutz</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>Claude Datenschutz: wo Ihre Daten landen und wer sie sieht</Hero2ColumnHeadline>
            <Hero2ColumnDescription geo>
              Claude Datenschutz entscheidet sich am Weg, nicht am Modell. Über das Private Claude AI Gateway von
              Bluebatch läuft Claude von Anthropic über AWS Bedrock innerhalb der EU, mit AV-Vertrag nach Art. 28
              DSGVO und Verpflichtung nach § 203 StGB. Kein Training mit Ihren Daten, Chats bleiben auf dem Rechner,
              das Gateway speichert nur Verbrauchsdaten.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Gespräch vereinbaren</ContactButton>
              <InternalLink href="/managed-claude/preise" className="self-center sm:ml-4">
                Preise ansehen
              </InternalLink>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <KurzantwortKarte />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light" id="vergleich">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Drei Wege im Vergleich</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Ist Claude DSGVO-konform?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Es ist dasselbe Modell, aber nicht derselbe Vertrag und nicht derselbe Speicherort. Für eine Kanzlei
            oder eine Personalabteilung entscheiden diese Unterschiede, ob Mandanten- und Mitarbeiterdaten hinein
            dürfen.
          </IntroBox.Paragraph>
        </IntroBox>
        <DataTable>
          <DataTable.Head>
            <DataTable.Row className="max-md:hidden">
              <DataTable.HeaderCell className="min-w-36">Kriterium</DataTable.HeaderCell>
              <DataTable.HeaderCell className="min-w-48">Claude.ai Free, Pro, Max</DataTable.HeaderCell>
              <DataTable.HeaderCell className="min-w-48">Claude Team, Enterprise</DataTable.HeaderCell>
              <DataTable.HeaderCell className="min-w-52 bg-primary-950">Private Claude AI Gateway</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            {VERGLEICH.map(([kriterium, consumer, team, gateway]) => (
              <DataTable.Row key={kriterium} className={zeileMobil}>
                <DataTable.Cell bold className={`${zelleMobil} max-md:text-base`}>
                  {kriterium}
                </DataTable.Cell>
                <DataTable.Cell className={zelleMobil}>
                  <MobilLabel>Claude.ai Free, Pro, Max</MobilLabel>
                  {consumer}
                </DataTable.Cell>
                <DataTable.Cell className={zelleMobil}>
                  <MobilLabel>Claude Team, Enterprise</MobilLabel>
                  {team}
                </DataTable.Cell>
                <DataTable.Cell bold className={`bg-primary-50/70 ${zelleMobil} max-md:mx-4 max-md:mt-1 max-md:rounded-lg max-md:px-3 max-md:py-2`}>
                  <MobilLabel>Private Claude AI Gateway</MobilLabel>
                  {gateway}
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable.Body>
        </DataTable>
        <Typo.Paragraph className="mx-auto mt-6 max-w-3xl text-center text-sm text-gray-500">
          Stand Oktober 2026. Angaben zu Anthropic nach privacy.claude.com und den Commercial Terms, zu AWS nach der
          Dokumentation von Amazon Bedrock. Claude Team und Enterprise sind für viele Unternehmen der einfachere Weg. Für Berufsgeheimnisträger
          bleiben dort die Fragen nach § 203 StGB und dem Speicherort, die Sie selbst klären müssen.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered size="small">
          <IntroBox.PreHeadline>Der Weg einer Anfrage</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Claude AI Datenschutz: was wo liegt</IntroBox.Headline>
          <IntroBox.Paragraph>
            Eine Mitarbeiterin fragt Claude nach einem Mandantenschreiben. So läuft die Anfrage, und das bleibt an
            jeder Station zurück.
          </IntroBox.Paragraph>
        </IntroBox>
        <DatenwegGrafik />
        <div className="mt-8 flex justify-center">
          <InternalLink href="/managed-claude/wie-es-funktioniert">Architektur und Amazon Bedrock im Detail</InternalLink>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Unterauftragnehmer und Dienste</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Wer beteiligt ist und was dort ankommt</IntroBox.Headline>
          <IntroBox.Paragraph>
            Ein Gateway ist nur so vertraulich wie die Dienste, die daran hängen. Deshalb hier vollständig, auch die,
            die nur Anmeldedaten oder Suchbegriffe sehen.
          </IntroBox.Paragraph>
        </IntroBox>
        <DataTable>
          <DataTable.Head>
            <DataTable.Row className="max-md:hidden">
              <DataTable.HeaderCell className="min-w-36">Wer</DataTable.HeaderCell>
              <DataTable.HeaderCell className="min-w-44">Wofür</DataTable.HeaderCell>
              <DataTable.HeaderCell className="min-w-64">Was dort ankommt</DataTable.HeaderCell>
              <DataTable.HeaderCell className="min-w-36">Wo</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            {BETEILIGTE.map(([wer, wofuer, was, wo]) => (
              <DataTable.Row key={wer} className={zeileMobil}>
                <DataTable.Cell bold className={`${zelleMobil} max-md:text-base`}>
                  {wer}
                </DataTable.Cell>
                <DataTable.Cell className={zelleMobil}>
                  <MobilLabel>Wofür</MobilLabel>
                  {wofuer}
                </DataTable.Cell>
                <DataTable.Cell className={zelleMobil}>
                  <MobilLabel>Was dort ankommt</MobilLabel>
                  {was}
                </DataTable.Cell>
                <DataTable.Cell className={zelleMobil}>
                  <MobilLabel>Wo</MobilLabel>
                  {wo}
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable.Body>
        </DataTable>
        <Typo.Paragraph className="mx-auto mt-6 max-w-3xl text-center text-sm text-gray-500">
          Die Liste mit Anschriften ist Teil des AV-Vertrags. Weitere Connectors, etwa ein eigener MCP-Server oder
          DATEV, kommen nur mit Ihrer Freigabe dazu und werden dort ergänzt.
        </Typo.Paragraph>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Im Portal festgelegt</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Was Admins sehen und wann Claude nachfragt</IntroBox.Headline>
        </IntroBox>
        <div className="space-y-24">
          <FeatureRow>
            <FeatureRow.Text>
              <FeatureRow.Label>
                <ChartColumn aria-hidden /> Verbrauch
              </FeatureRow.Label>
              <Typo.H3 disableMargin className="mb-4">
                Kosten je Person, keine Inhalte
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Im Portal sehen Admins, wer welches Modell wie viel genutzt hat und was es kostet. Was gefragt und
                geantwortet wurde, sieht niemand: Das Gateway speichert keine Inhalte, die Chats liegen auf dem
                jeweiligen Rechner.
              </Typo.Paragraph>
              <Typo.Paragraph textColor="muted" spacing="none">
                Mitglieder sehen nur ihren eigenen Verbrauch. Gibt es einen Betriebsrat, gehört die Auswertung je
                Person trotzdem in die Abstimmung, bevor es losgeht.
              </Typo.Paragraph>
            </FeatureRow.Text>
            <FeatureRow.Media>
              <UsageScreen sidebar={false} />
            </FeatureRow.Media>
          </FeatureRow>

          <FeatureRow reverse>
            <FeatureRow.Text>
              <FeatureRow.Label>
                <Globe aria-hidden /> Websuche
              </FeatureRow.Label>
              <Typo.H3 disableMargin className="mb-4">
                Erst fragen, dann suchen
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Die Websuche läuft über Brave Search. Standardmäßig zeigt Claude die Suchbegriffe vorher an, die
                Person gibt sie frei oder formuliert um. So geht kein Mandantenname ungeprüft an den Suchanbieter.
              </Typo.Paragraph>
              <Typo.Paragraph textColor="muted" spacing="none">
                Wer die Rückfrage abschalten will, bekommt im Portal einen deutlichen Hinweis auf § 203 StGB und muss
                ihn bestätigen. Für Personen ohne Internetfreigabe bleibt die Suche ganz aus.
              </Typo.Paragraph>
            </FeatureRow.Text>
            <FeatureRow.Media>
              <WebsucheWarnung />
            </FeatureRow.Media>
          </FeatureRow>
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox textCentered>
          <IntroBox.PreHeadline>Für Ihren Datenschutzbeauftragten</IntroBox.PreHeadline>
          <IntroBox.Headline className="text-balance">Technische und organisatorische Maßnahmen</IntroBox.Headline>
        </IntroBox>
        <ProseColumns cols={3}>
          <ProseColumns.Item title={<IconTitle icon={Lock}>Verschlüsselt</IconTitle>}>
            Verbindungen laufen über TLS 1.3. Datenbank und Zugangsdaten liegen bei AWS verschlüsselt, Schlüssel
            verwaltet AWS KMS.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={KeyRound}>Anmeldung je Person</IconTitle>}>
            Jede Person meldet sich per SSO mit eigenem Konto an, kein geteilter Schlüssel auf den Rechnern. Ohne
            Zugehörigkeit zu Ihrer Organisation lehnt das Gateway ab.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={Users}>Rollen, Sperren, Limits</IconTitle>}>
            Admins verwalten das Team, sperren Zugänge beim Ausscheiden und setzen Budgets in Euro. Ist ein Limit
            erreicht, lehnt das Gateway weitere Anfragen ab.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={FolderLock}>Ordner und Netzwerk</IconTitle>}>
            Je Person festlegen, welche Ordner Claude lesen oder beschreiben darf und welche Adressen im Netz
            erreichbar sind. Beides ist noch in der Beta.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={EyeOff}>Keine Telemetrie an Anthropic</IconTitle>}>
            Die Konfiguration, die das Gateway an Claude Desktop ausliefert, schaltet Absturzberichte und
            Nutzungsstatistik an Anthropic ab.
          </ProseColumns.Item>
          <ProseColumns.Item title={<IconTitle icon={Timer}>Kurze Löschfristen</IconTitle>}>
            Anwendungsprotokolle löschen sich nach 30 Tagen, Zugriffsprotokolle nach 90 Tagen. Verbrauchsdaten
            bleiben für die Abrechnung, Inhalte von Unterhaltungen legt das Gateway gar nicht ab.
          </ProseColumns.Item>
        </ProseColumns>
        <div className="mt-10 flex justify-center">
          <InternalLink href="/managed-claude/zentrale-steuerung">Alle Einstellungen im Managed Claude Interface</InternalLink>
        </div>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false} size="wide">
              <IntroBox.PreHeadline>Berufsgeheimnis</IntroBox.PreHeadline>
              <IntroBox.Headline className="lg:text-4xl!">§ 203 StGB, § 43e BRAO und § 62a StBerG</IntroBox.Headline>
            </IntroBox>
            <Typo.Paragraph>
              Seit 2017 dürfen Berufsgeheimnisträger IT-Dienstleister einbeziehen, soweit das für die Arbeit
              erforderlich ist. Der Dienstleister muss sorgfältig ausgewählt und in Textform zur Verschwiegenheit
              verpflichtet sein, mit Belehrung über die strafrechtlichen Folgen. Für Anwälte regelt das § 43e BRAO,
              für Steuerberater § 62a StBerG. Läuft ein Dienst im Ausland, muss der Geheimnisschutz dort vergleichbar
              sein.
            </Typo.Paragraph>
            <Typo.Paragraph spacing="lg">
              Deshalb laufen Mandanteninhalte beim Gateway nur über AWS in der EU. Die Dienste aus den USA sehen
              Anmeldedaten Ihrer Mitarbeiter oder freigegebene Suchbegriffe, keine Akten.
            </Typo.Paragraph>
            <div className="flex flex-col gap-3">
              <InternalLink href="/branchen/steuerberater/private-ai/ki-steuerberater-62a-stberg">
                KI für Steuerberater nach § 62a StBerG
              </InternalLink>
              <InternalLink href="/branchen/anwaelte/ki-anwaltskanzlei-43e-brao">
                KI für Anwaltskanzleien nach § 43e BRAO
              </InternalLink>
            </div>
          </div>
          <div className="space-y-6">
            <SimpleCard align="left" className="rounded-2xl">
              <Typo.H3 disableMargin className="mb-2">
                Das Unterlagen-Paket
              </Typo.H3>
              <Typo.Paragraph textColor="muted">
                Bekommen Sie vor dem Start, damit Ihre Auswahl dokumentiert ist.
              </Typo.Paragraph>
              <ul className="space-y-3">
                {UNTERLAGEN.map((u) => (
                  <li key={u} className="flex gap-3 text-gray-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                    </span>
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </SimpleCard>
            <Typo.Paragraph textColor="muted" spacing="none" className="rounded-2xl border border-dashed border-gray-300 px-6 py-5 text-sm">
              Keine Rechtsberatung: Diese Seite erklärt Technik und Verträge. Die berufsrechtliche Bewertung treffen
              Sie, am besten zusammen mit Ihrem Datenschutzbeauftragten.
            </Typo.Paragraph>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false} size="wide">
              <IntroBox.PreHeadline>Schritt für Schritt</IntroBox.PreHeadline>
              <IntroBox.Headline className="lg:text-4xl!">Claude DSGVO-konform nutzen in fünf Schritten</IntroBox.Headline>
            </IntroBox>
            <TimelineAsSteps>
              <TimelineAsStepsStep value={1}>
                <Typo.H3 className="mt-1!">Weg festlegen</Typo.H3>
                <Typo.Paragraph textColor="muted">
                  Schriftlich regeln, über welchen Weg Mandanten- und Personaldaten zu Claude dürfen. Private Konten
                  bei claude.ai gehören nicht dazu.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={2}>
                <Typo.H3 className="mt-1!">Verträge abschließen</Typo.H3>
                <Typo.Paragraph textColor="muted">
                  AV-Vertrag und Verpflichtungserklärung unterschreiben, TOMs und Unterauftragnehmer ablegen, das
                  Verzeichnis der Verarbeitungstätigkeiten nach Art. 30 DSGVO ergänzen.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={3}>
                <Typo.H3 className="mt-1!">Datenschutzbeauftragten einbinden</Typo.H3>
                <Typo.Paragraph textColor="muted">
                  Prüfen lassen, ob eine Datenschutz-Folgenabschätzung nach Art. 35 DSGVO nötig ist. Gibt es einen
                  Betriebsrat, kommt er jetzt dazu.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={4}>
                <Typo.H3 className="mt-1!">Einstellungen setzen</Typo.H3>
                <Typo.Paragraph textColor="muted">
                  Wer Claude nutzt, welche Connectors, Websuche mit Rückfrage, welche Ordner und Adressen erreichbar
                  sind. Alles im Portal, je Person.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={5}>
                <Typo.H3 className="mt-1!">Team einweisen</Typo.H3>
                <Typo.Paragraph textColor="muted" spacing="none">
                  Was hinein darf, wie Ergebnisse geprüft werden, wen man fragt. Das ist zugleich ein Baustein für
                  die KI-Kompetenz nach Art. 4 der KI-Verordnung.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
            </TimelineAsSteps>
            <Typo.Paragraph textColor="muted" className="mt-8" spacing="none">
              Welche anderen Werkzeuge sich ähnlich absichern lassen, zeigt unser Überblick über{" "}
              <InternalLink href="/blog/dsgvo-konforme-ki-tools" variant="underline">
                DSGVO-konforme KI-Tools
              </InternalLink>
              .
            </Typo.Paragraph>
          </div>
          <div className="min-w-0">
            <ConfigScreen sidebar={false} />
            <p className="mt-3 text-center text-sm text-gray-500">
              Für die Dokumentation: die Konfiguration, die eine Person in Claude Desktop tatsächlich bekommt.
            </p>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper bodyWidth="small">
        <FaqContainer
          headline="Claude und DSGVO: häufige Fragen"
          intro="Was Datenschutzbeauftragte, Kanzleiinhaber und IT vor dem Start wissen wollen."
          faqs={[
            {
              question: "Ist Claude DSGVO-konform?",
              answer:
                "Das hängt vom Weg ab, nicht vom Modell. Für private Konten bei claude.ai (Free, Pro, Max) gibt es keinen AV-Vertrag. Claude Team und Enterprise bringen den Standardvertrag von Anthropic mit, gespeichert wird laut Anthropic in den USA. Über das Private Claude AI Gateway läuft Claude über AWS Bedrock innerhalb der EU, mit AV-Vertrag nach Art. 28 DSGVO und Verpflichtung nach § 203 StGB.",
            },
            {
              question: "Wie kann ich Claude DSGVO-konform nutzen?",
              answer:
                "Mit einem Weg, der einen AV-Vertrag hat und die Daten in der EU verarbeitet, und mit klaren Regeln im Team: Verträge abschließen und ablegen, das Verarbeitungsverzeichnis ergänzen, den Datenschutzbeauftragten einbinden, Websuche, Ordner und Connectors festlegen und das Team einweisen. Beim Private Claude AI Gateway liefern wir die Unterlagen und richten alles in höchstens einer Woche ein, für 1.500 € einmalig.",
            },
            {
              question: "Nutzt Anthropic meine Daten für das Training von Claude?",
              answer:
                "Über das Gateway nicht. Claude läuft dort über Amazon Bedrock, und nach den Bedingungen von AWS werden Ein- und Ausgaben nicht zum Training genutzt, weder von AWS noch vom Modellanbieter. Anthropic hat bei Bedrock keinen Zugriff auf Prompts und Antworten. Bei claude.ai Free, Pro und Max entscheidet eine Einstellung im Konto, bei Team und Enterprise trainiert Anthropic laut eigenen Angaben standardmäßig nicht mit Ihren Daten.",
            },
            {
              question: "Wo werden meine Daten gespeichert?",
              answer:
                "Der Chatverlauf liegt nur auf dem Rechner der Person, in Claude Desktop. Das Gateway in Frankfurt speichert je Anfrage Person, Modell, Tokens und Kosten, nicht den Inhalt. Amazon Bedrock verarbeitet die Anfrage innerhalb der EU und speichert Prompts und Antworten der Claude-Modelle im Gateway nicht.",
            },
            {
              question: "Dürfen Steuerberater und Anwälte Claude mit Mandantendaten nutzen?",
              answer:
                "Ja, wenn der Weg stimmt. § 203 StGB erlaubt seit 2017, IT-Dienstleister einzubeziehen, soweit das erforderlich ist und sie sorgfältig ausgewählt und zur Verschwiegenheit verpflichtet sind. Für Anwälte konkretisiert das § 43e BRAO, für Steuerberater § 62a StBerG. Bluebatch liefert Verpflichtungserklärung, AV-Vertrag, TOMs und die Liste der Unterauftragnehmer. Die berufsrechtliche Bewertung bleibt bei Ihnen.",
            },
            {
              question: "Können Admins die Chats der Mitarbeiter lesen?",
              answer:
                "Nein. Das Gateway speichert keine Inhalte, und die Chats liegen auf dem jeweiligen Rechner. Im Portal sehen Admins Verbrauch und Kosten je Person und Modell, Mitglieder nur ihren eigenen Verbrauch.",
            },
          ]}
        />
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark textCentered>
          <IntroBox.Headline>Claude datenschutzkonform einführen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Im Gespräch klären wir in 30 Minuten, welche Daten durch Claude sollen, wer Zugriff bekommt und welche
            Unterlagen Ihr Datenschutzbeauftragter braucht. Die Einrichtung des Private Claude AI Gateway kostet
            1.500 € einmalig und ist in höchstens einer Woche startklar.
          </IntroBox.Paragraph>
        </IntroBox>
        <div className="flex justify-center">
          <ContactButton size="lg">Gespräch vereinbaren</ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
