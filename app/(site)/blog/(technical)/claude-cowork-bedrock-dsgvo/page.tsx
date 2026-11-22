import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import {
  BlogImage,
  Separator,
  BlogLayout,
  BlogHero,
  CodeBlock,
} from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "claude-cowork-bedrock-dsgvo",
  author: "Max Hänsel",
  date: "2026-11-18",
  image: "/blog/claude-cowork-bedrock-dsgvo/claude-desktop-arbeitsplatz.jpg",
  tags: ["ki", "security"] as BlogTagId[],
  publish: true,
};

const description =
  "Claude Cowork über Amazon Bedrock in der EU: Setup per MDM mit Intune und Jamf, Datenhaltung, Kosten und DSGVO. Und warum ein Gateway meist der kürzere Weg ist.";

export const metadata: Metadata = {
  title: "Claude Cowork Bedrock: DSGVO-konform über AWS | Bluebatch",
  description,
  openGraph: {
    title: "Claude Cowork Bedrock: Claude Desktop DSGVO-konform über AWS",
    description,
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-cowork-bedrock-dsgvo/claude-desktop-arbeitsplatz.jpg",
        width: 1200,
        height: 675,
        alt: "Laptop mit Claude Desktop auf einem Schreibtisch im Büro",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-cowork-bedrock-dsgvo",
  },
};

// Codebeispiele als String.raw, damit Backslashes und \" erhalten bleiben.
const BEDROCK_CONFIG = String.raw`{
  "inferenceProvider": "bedrock",
  "inferenceBedrockRegion": "eu-central-1",
  "inferenceModels": "[\"eu.anthropic.claude-sonnet-5-5\"]",
  "inferenceBedrockSsoStartUrl": "https://ihre-firma.awsapps.com/start",
  "inferenceBedrockSsoRegion": "eu-central-1",
  "inferenceBedrockSsoAccountId": "123456789012",
  "inferenceBedrockSsoRoleName": "ClaudeDesktopUser",
  "disableEssentialTelemetry": "true",
  "disableNonessentialTelemetry": "true",
  "disableNonessentialServices": "true",
  "isLocalDevMcpEnabled": "false"
}`;

const SCP_GLOBAL = String.raw`{
  "Effect": "Deny",
  "Action": "bedrock:*",
  "Resource": "*",
  "Condition": {
    "StringEquals": { "aws:RequestedRegion": "unspecified" },
    "ArnLike": {
      "bedrock:InferenceProfileArn": "arn:aws:bedrock:*:*:inference-profile/global.*"
    }
  }
}`;

const GATEWAY_REG = String.raw`Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\SOFTWARE\Policies\Claude]
"bootstrapUrl"="https://claude-ai-gateway.bluebatch.io/desktop-config"
"bootstrapOidc"="{\"clientId\":\"…\",\"issuer\":\"…\"}"`;

const linkClass = "text-primary-600 hover:underline";

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Claude Cowork Bedrock: Claude Desktop DSGVO-konform über AWS betreiben
        </BlogHero.Headline>

        <GeoSummary>
          Claude Cowork Bedrock bedeutet: Claude Desktop mit Cowork schickt
          seine Anfragen über Amazon Bedrock an AWS statt an Anthropic, mit
          EU-Inference-Profil nur in EU-Regionen und abgerechnet nach Tokens.
          Das direkte Setup per MDM mit Intune oder Jamf funktioniert, braucht
          aber ein eigenes AWS-Setup und laufende Pflege. Ein Gateway liefert
          dieselbe Konfiguration zentral aus.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>17 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-11-18">18. November 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-cowork-bedrock-dsgvo/claude-desktop-arbeitsplatz.jpg"
          alt="Laptop mit Claude Desktop auf einem Schreibtisch im Büro"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.H2 id="kurzfassung">Kurzfassung</Typo.H2>
            <Typo.Paragraph>
              Claude Desktop mit Cowork, Chat und Claude Code läuft seit Juni
              2026 offiziell über Amazon Bedrock. Die Anfragen gehen dann nicht
              an Anthropic, sondern an AWS. Mit einem EU-Inference-Profil
              bleibt die Verarbeitung in EU-Regionen, abgerechnet wird nach
              Tokens statt nach Lizenz pro Kopf.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dorthin führen zwei Wege. Entweder konfigurieren Sie jede
              Installation selbst per MDM und betreiben dafür ein eigenes
              AWS-Setup. Oder Sie verbinden Claude Desktop mit einem Gateway,
              das die Konfiguration zentral ausliefert. Der erste Weg
              funktioniert, ist aber ein IT-Projekt mit Dauerpflege. Für die
              meisten Mittelständler und Kanzleien ist der zweite der kürzere.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Merkmal</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Claude Team / Enterprise</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Bedrock direkt per MDM</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Private Claude AI Gateway</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Wo Claude rechnet</DataTable.Cell>
                  <DataTable.Cell>Infrastruktur von Anthropic, Speicherung in den USA</DataTable.Cell>
                  <DataTable.Cell>Ihr AWS-Konto, EU-Profil wählbar</DataTable.Cell>
                  <DataTable.Cell>Amazon Bedrock über EU-Profile, Gateway in Frankfurt</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Abrechnung</DataTable.Cell>
                  <DataTable.Cell>Lizenz pro Kopf, Enterprise plus Nutzung</DataTable.Cell>
                  <DataTable.Cell>Tokens über die AWS-Rechnung</DataTable.Cell>
                  <DataTable.Cell>Tokens in Euro, keine Lizenz pro Kopf</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>AV-Vertrag</DataTable.Cell>
                  <DataTable.Cell>Anthropic</DataTable.Cell>
                  <DataTable.Cell>AWS</DataTable.Cell>
                  <DataTable.Cell>Bluebatch, Unterauftragnehmer benannt</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Was auf die Rechner kommt</DataTable.Cell>
                  <DataTable.Cell>Anmeldung bei claude.ai</DataTable.Cell>
                  <DataTable.Cell>MDM-Profil mit allen Einstellungen</DataTable.Cell>
                  <DataTable.Cell>eine Datei mit der Gateway-Adresse</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Neues Modell oder neuer Connector</DataTable.Cell>
                  <DataTable.Cell>Admin-Konsole</DataTable.Cell>
                  <DataTable.Cell>Profil ändern und neu ausrollen</DataTable.Cell>
                  <DataTable.Cell>zentral im Portal, ohne Rollout</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Kosten je Person, Budgets</DataTable.Cell>
                  <DataTable.Cell>Admin-Konsole</DataTable.Cell>
                  <DataTable.Cell>selbst bauen</DataTable.Cell>
                  <DataTable.Cell>im Portal, Budgets in Euro</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Startklar</DataTable.Cell>
                  <DataTable.Cell>sofort</DataTable.Cell>
                  <DataTable.Cell>mehrere Wochen, je nach AWS-Reife</DataTable.Cell>
                  <DataTable.Cell>in höchstens einer Woche</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="warum-bedrock">Warum Claude über Bedrock?</Typo.H2>
            <Typo.Paragraph>
              Am Modell scheitert die Einführung selten. Sie scheitert an vier
              Fragen, die der Datenschutzbeauftragte stellt:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Wo wird verarbeitet?</strong> In der EU oder irgendwo,
                wo gerade Kapazität frei ist?
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Wer ist Auftragsverarbeiter?</strong> Und gibt es einen
                AV-Vertrag nach Art. 28 DSGVO?
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Wird mit unseren Daten trainiert?</strong>
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Wo liegt der Chatverlauf?</strong> Und wer kann ihn
                lesen?
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Bei claude.ai sind die Antworten je nach Tarif unbequem. Free,
              Pro und Max sind Verbraucher-Konten ohne AV-Vertrag. Team und
              Enterprise bringen den Standardvertrag von Anthropic mit,
              gespeichert wird laut Anthropic in den USA. Für viele Unternehmen
              ist das in Ordnung. Für Kanzleien mit Verschwiegenheitspflicht
              nach § 203 StGB oder Firmen mit strenger Konzernrichtlinie ist es
              eine Hürde.
            </Typo.Paragraph>

            <Typo.H3>Bisher gab es zwei Wege</Typo.H3>
            <Typo.Paragraph>
              Entweder das Abo bei Anthropic mit allen Funktionen, aber
              US-Speicherung. Oder ein Eigenbau auf Amazon Bedrock mit
              EU-Verarbeitung, aber ohne die Desktop-App, ohne Cowork und mit
              eigener Oberfläche, die jemand bauen und pflegen muss.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Seit 2026 gibt es einen dritten Weg: dieselbe Claude Desktop App,
              deren Anfragen über Bedrock laufen. Wie Bedrock grundsätzlich
              funktioniert und welche Modelle dort laufen, steht im Beitrag{" "}
              <Link href="/blog/claude-cowork-managed-private" className={linkClass}>
                Amazon Bedrock für deutsche Unternehmen
              </Link>
              . Hier geht es um die Frage, wie Claude Cowork konkret dorthin
              kommt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="was-sich-aendert">
              Was sich mit Claude Cowork auf Bedrock ändert
            </Typo.H2>
            <Typo.Paragraph>
              AWS hat{" "}
              <a
                href="https://aws.amazon.com/blogs/machine-learning/from-developer-desks-to-the-whole-organization-running-claude-cowork-in-amazon-bedrock/"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Claude Cowork auf Bedrock
              </a>{" "}
              im April 2026 vorgestellt, seit Juni 2026 sind Claude Desktop mit
              Cowork, Claude Code und Chat offiziell über Bedrock verfügbar.
              Technisch schaltet die App in den Modus „Third-Party Inference“:
              Sie schickt ihre Anfragen nicht mehr an Anthropic, sondern an
              einen Anbieter, den Sie festlegen.
            </Typo.Paragraph>

            <Typo.H3>Was gleich bleibt</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Dieselbe App</strong> für Windows und macOS, mit
                Cowork, Chat und Projekten
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Cowork</strong> arbeitet weiter mit lokalen Dateien und
                Ordnern und erledigt mehrstufige Aufgaben
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Connectors</strong> (MCP-Server) zu internen Systemen,
                Skills und Plugins
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Der Chatverlauf</strong> liegt lokal auf dem Rechner der
                Person, nicht in einer Cloud
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Was fehlt</Typo.H3>
            <Typo.Paragraph>
              Laut AWS sind Claude Design, Computer Use und der Skills
              Marketplace über Bedrock nicht verfügbar. Anthropic schreibt in
              der eigenen Doku offen, dass Claude Desktop mit Team oder
              Enterprise einfacher zu verteilen ist und neue Funktionen früher
              bekommt. Wer zwingend das Neueste braucht, ist bei claude.ai
              besser aufgehoben. Welche Neuerungen vom November 2026, etwa
              Claude Meetings, Sheets und der Advisor, über Bedrock fehlen,
              zeigt unser Überblick{" "}
              <Link href="/blog/claude-updates" className={linkClass}>
                Claude Updates
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>Was sich bei Abrechnung und Anmeldung ändert</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Tokens statt Seats:</strong> Bezahlt wird, was
                tatsächlich verarbeitet wird. Wer Claude zweimal im Monat
                nutzt, kostet fast nichts.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Anmeldung pro Person:</strong> Statt eines Kontos bei
                Anthropic meldet sich jede Person bei Ihrem Identitätsanbieter
                an. Zugriffe lassen sich so einzelnen Personen zuordnen.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Vertragspartner:</strong> Auftragsverarbeiter für die
                Inferenz ist AWS, nicht Anthropic.
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="setup-per-mdm">
              Das Setup per MDM: Es geht, aber es ist ein Projekt
            </Typo.H2>
            <Typo.Paragraph>
              Der direkte Weg ist sauber dokumentiert. Er besteht aus drei
              Teilen: Konfiguration bauen, auf alle Rechner verteilen,
              AWS-Konto vorbereiten. Jeder Teil ist für sich machbar. Zusammen
              ergeben sie ein Projekt, das nach dem Start nicht vorbei ist.
            </Typo.Paragraph>

            <Typo.H3>Schritt 1: Die Konfiguration bauen</Typo.H3>
            <Typo.Paragraph>
              Claude Desktop liest seine Einstellungen als flache Schlüssel. Im
              Entwicklermodus der App (Help → Troubleshooting → Enable
              Developer Mode, dann Developer → Configure Third-Party
              Inference…) lässt sich die Konfiguration zusammenklicken und
              exportieren, als <code>.mobileconfig</code> für macOS, als{" "}
              <code>.reg</code> oder ADMX-Vorlage für Windows. Eine
              Konfiguration für Bedrock in Frankfurt sieht etwa so aus:
            </Typo.Paragraph>
            <CodeBlock language="json" fileName="Konfiguration für Bedrock">
              {BEDROCK_CONFIG}
            </CodeBlock>
            <Typo.Paragraph>
              Im MDM-Profil stehen alle Werte als Text, Listen und Objekte als
              JSON-Text. Was die Schlüssel bewirken:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Region und Modell-ID bestimmen gemeinsam den Datenort.</strong>{" "}
                <code>inferenceBedrockRegion</code> ist die Region, in der die
                Anfrage ankommt. Wo gerechnet wird, legt das Präfix der
                Modell-ID fest: <code>eu.</code> verteilt von Frankfurt aus nur
                auf EU-Regionen, laut AWS auf Frankfurt, Stockholm, Mailand,
                Spanien, Irland und Paris. Ein <code>global.</code>-Profil
                rechnet weltweit.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Die vier <code>inferenceBedrockSso…</code>-Schlüssel</strong>{" "}
                binden die App an IAM Identity Center. Jede Person meldet sich
                selbst an, die Tokens liegen im Schlüsselbund (macOS) oder per
                DPAPI geschützt (Windows). Die Alternative, ein Bearer-Token für
                alle, ist ein langlebiges Geheimnis auf jedem Gerät. Anthropic
                rät davon für breite Rollouts ab.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Die drei <code>disable…</code>-Schlüssel</strong>{" "}
                schalten Crash-Reports, Produkt-Analytics und Zusatzdienste wie
                Favicons und Artefakt-Vorschauen ab.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong><code>isLocalDevMcpEnabled</code></strong> verhindert,
                dass Mitarbeiter eigene lokale MCP-Server anlegen. Dazu mehr im
                Abschnitt zur Sicherheit.
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Schritt 2: Verteilen per Intune, Jamf oder Gruppenrichtlinie</Typo.H3>
            <Typo.Paragraph>
              Die Konfiguration muss auf jeden Rechner, und zwar an die
              richtige Stelle:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>macOS:</strong> Konfigurationsprofil für die Domain{" "}
                <code>com.anthropic.claudefordesktop</code> mit{" "}
                <code>PayloadScope</code> = <code>System</code>, verteilt über
                Jamf, Intune, Kandji oder ein anderes MDM. Ein Geräteprofil
                unter <code>/Library/Managed Preferences/</code> schlägt ein
                Benutzerprofil, die beiden werden nicht zusammengeführt.
                Anthropic empfiehlt zusätzlich, Nutzern das Installieren
                eigener Profile zu verbieten.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Windows:</strong> Registry unter{" "}
                <code>HKLM\SOFTWARE\Policies\Claude</code> (alle Benutzer) oder{" "}
                <code>HKCU\SOFTWARE\Policies\Claude</code> (ein Benutzer), per
                Intune, Gruppenrichtlinie mit der ADMX-Vorlage oder als{" "}
                <code>.reg</code>-Skript. Die Werte müssen direkt unter dem
                Schlüssel liegen, als <code>REG_SZ</code>. Ein{" "}
                <code>REG_EXPAND_SZ</code> schaltet die Benutzerrichtlinie
                stillschweigend ab, ohne eine Konfiguration zu liefern.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Linux:</strong>{" "}
                <code>/etc/claude-desktop/managed-settings.json</code>.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Auch die Reihenfolge zählt: Gibt es eine Geräte-Konfiguration,
              ignoriert die App die des Benutzers komplett. Wer Mac und Windows
              im Haus hat, testet beide Wege getrennt.
            </Typo.Paragraph>

            <Typo.H3>Schritt 3: Das AWS-Konto vorbereiten</Typo.H3>
            <Typo.Paragraph>Parallel braucht es im AWS-Konto:</Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>IAM Identity Center</strong> mit einem
                Berechtigungssatz, der mindestens{" "}
                <code>bedrock:InvokeModel</code> und{" "}
                <code>bedrock:InvokeModelWithResponseStream</code> erlaubt.
                Anthropic empfiehlt eine Sitzungsdauer von 8 bis 12 Stunden,
                sonst müssen sich Nutzer ständig neu anmelden.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Eine Service Control Policy gegen globale Profile</strong>,
                damit niemand versehentlich ein <code>global.</code>-Modell
                einträgt. AWS liefert dafür ein Muster (siehe unten).
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Den Speichermodus für Bedrock</strong> pro Region
                festlegen und per SCP absichern, mehr dazu im Abschnitt zur
                Datenhaltung.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>CloudTrail</strong> für das Protokoll, optional einen
                VPC-Endpunkt, damit der Verkehr nicht über das öffentliche
                Internet läuft.
              </Typo.ListItem>
            </Typo.List>
            <CodeBlock language="json" fileName="SCP: globale Inference-Profile sperren">
              {SCP_GLOBAL}
            </CodeBlock>

            <Typo.H3>Was danach dauerhaft an Ihnen hängt</Typo.H3>
            <Typo.Paragraph>Nach dem Go-Live fängt die Pflege an:</Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Neue Modelle:</strong> Die Modell-IDs stehen fest im
                Profil. Kommt ein neues Modell, ändern Sie das Profil und rollen
                es neu aus. Automatische Modellerkennung gibt es nur bei
                Bearer-Token oder eigenem Credential-Helper.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Schlüssel ändern sich:</strong> Anthropic entwickelt das
                Schema laufend weiter und markiert alte Schlüssel als veraltet,
                etwa <code>inferenceGatewayOidc</code> zugunsten von{" "}
                <code>inferenceIdpOidc</code> oder{" "}
                <code>disableDeploymentModeChooser</code> zugunsten von{" "}
                <code>deploymentMode</code>. Ihre Profile müssen mitwandern.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Neue Connectors:</strong> Jeder freigegebene MCP-Server
                ist eine Profiländerung.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Kosten je Person:</strong> AWS rechnet pro Konto ab.
                Eine Auswertung je Person und ein Budget, das bei Erreichen
                greift, müssen Sie selbst bauen.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Support:</strong> Wer die Crash-Reports abschaltet, hat
                laut Anthropic nur noch manuellen Support.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Mit eigener AWS-Landing-Zone, einem MDM-Team und Leuten für den
              Plattformbetrieb ist das gut zu schaffen. In einem Unternehmen
              mit 200 Mitarbeitern und zwei Leuten in der IT wird es selten
              fertig, und noch seltener gepflegt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="gateway">
              Der kürzere Weg: das Private Claude AI Gateway
            </Typo.H2>
            <Typo.Paragraph>
              Claude Desktop kennt neben der festen Konfiguration einen zweiten
              Mechanismus: die Bootstrap-URL. Die App meldet sich an, holt ihre
              komplette Konfiguration bei einem Server ab und fragt alle zehn
              Minuten nach, ob sich etwas geändert hat. Genau darauf baut unser
              Private Claude AI Gateway auf.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-cowork-bedrock-dsgvo/zwei-wege-claude-cowork-bedrock.png"
              alt="Diagramm: Bedrock direkt per MDM mit Profil auf jedem Rechner gegenüber dem Private Claude AI Gateway, bei dem nur die Gateway-Adresse verteilt wird"
              width={1200}
              height={675}
            />

            <Typo.H3>Auf den Rechner kommt nur eine Datei</Typo.H3>
            <Typo.Paragraph>
              Statt eines Profils mit allen Einstellungen landet auf dem
              Rechner nur die Adresse des Gateways und die Anmeldung. Für
              Windows sieht das so aus:
            </Typo.Paragraph>
            <CodeBlock language="ini" fileName="claude.reg">
              {GATEWAY_REG}
            </CodeBlock>
            <Typo.Paragraph>Im Portal liegen drei fertige Dateien:</Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong><code>claude.reg</code></strong> für das eigene
                Windows-Konto, per Doppelklick, ohne Adminrechte
              </Typo.ListItem>
              <Typo.ListItem>
                <strong><code>claude-machine.reg</code></strong> für alle Konten
                eines Rechners, etwa auf Terminalservern, per Softwareverteilung
              </Typo.ListItem>
              <Typo.ListItem>
                <strong><code>ai_gateway.json</code></strong> für Mac und
                Windows, Import direkt in Claude Desktop
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Wer Intune oder Jamf hat, verteilt diese eine Datei einmal und
              muss danach nie wieder ran. Wer kein MDM hat, schickt die Datei
              per Mail. Danach Claude Desktop neu starten und per SSO anmelden.
            </Typo.Paragraph>

            <Typo.H3>Den Rest liefert das Gateway, je Person</Typo.H3>
            <Typo.Paragraph>
              Nach der Anmeldung bekommt jede Person ihre Konfiguration vom
              Gateway:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Modelle:</strong> nur Claude-Modelle mit
                EU-Inference-Profil, aktuell unter anderem Sonnet 5.5, Opus 5.5
                und Haiku 5.5
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Connectors:</strong> Microsoft 365, Websuche und eigene
                MCP-Server, freigegeben je Team
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Skills:</strong> eigene Skill-Bibliotheken der
                Organisation
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Regeln:</strong> welche Ordner Cowork sehen darf und
                welche Webadressen erreichbar sind
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Anweisungen und Banner</strong> für alle, Telemetrie an
                Anthropic aus
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Ändert ein Admin etwas im Portal, holt sich die App die neue
              Konfiguration innerhalb von zehn Minuten, bittet um einen
              Neustart und erzwingt ihn spätestens nach 24 Stunden. Kein neues
              Profil, kein Rollout.
            </Typo.Paragraph>

            <Typo.H3>MDM direkt und Gateway im Vergleich</Typo.H3>
            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Aufgabe</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Bedrock direkt per MDM</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Private Claude AI Gateway</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>AWS-Konto, Identity Center, SCPs</DataTable.Cell>
                  <DataTable.Cell>Sie</DataTable.Cell>
                  <DataTable.Cell>Bluebatch</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Profil für Mac und Windows</DataTable.Cell>
                  <DataTable.Cell>vollständige Konfiguration</DataTable.Cell>
                  <DataTable.Cell>eine Datei, einmal</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Neues Modell</DataTable.Cell>
                  <DataTable.Cell>Profil ändern, neu ausrollen</DataTable.Cell>
                  <DataTable.Cell>erscheint automatisch</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Neuer Connector</DataTable.Cell>
                  <DataTable.Cell>Profil ändern, neu ausrollen</DataTable.Cell>
                  <DataTable.Cell>im Portal freigeben</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Umbenannte Schlüssel</DataTable.Cell>
                  <DataTable.Cell>Sie</DataTable.Cell>
                  <DataTable.Cell>Bluebatch</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Kosten je Person</DataTable.Cell>
                  <DataTable.Cell>selbst auswerten</DataTable.Cell>
                  <DataTable.Cell>im Portal, in Euro</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Budget-Grenze</DataTable.Cell>
                  <DataTable.Cell>selbst bauen</DataTable.Cell>
                  <DataTable.Cell>je Person oder Team, wöchentlich oder alle 30 Tage</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>AV-Vertrag</DataTable.Cell>
                  <DataTable.Cell>mit AWS</DataTable.Cell>
                  <DataTable.Cell>mit Bluebatch, AWS als Unterauftragnehmer benannt</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>
            <Typo.Paragraph>
              Im{" "}
              <Link href="/managed-claude/zentrale-steuerung" className={linkClass}>
                Managed Claude Interface
              </Link>{" "}
              sehen Admins die Kosten in Euro, setzen Budgets und legen
              Connectors, Ordner und Webadressen fest. Ist ein Budget erreicht,
              lehnt das Gateway weitere Anfragen ab. Ein eigenes AWS-Konto
              brauchen Sie dafür nicht.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="sicherheit">
              Sicherheitsrisiko: Prompt Injection und Datenabfluss
            </Typo.H2>
            <Typo.Paragraph>
              Datenresidenz beantwortet die Frage, wo Claude rechnet. Sie
              beantwortet nicht die Frage, was Claude tut. Und Cowork tut eine
              Menge: Es liest Dateien, arbeitet in Ordnern, ruft Connectors auf
              und lädt Webseiten.
            </Typo.Paragraph>

            <Typo.H3>Wo das Risiko liegt</Typo.H3>
            <Typo.Paragraph>
              Steht in einem Dokument, einer Mail oder auf einer Webseite eine
              versteckte Anweisung, kann ein Agent ihr folgen. Das nennt sich
              Prompt Injection. Der gefährliche Teil ist nicht die Anweisung
              selbst, sondern der Weg nach draußen: Ein Connector mit
              Schreibrechten oder ein Webaufruf an eine beliebige Adresse
              reicht, damit Daten das Haus verlassen. Ob das Modell in
              Frankfurt oder in Virginia rechnet, spielt dafür keine Rolle.
            </Typo.Paragraph>

            <Typo.H3>Was dagegen hilft</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Connectors nur aus einer Freigabeliste.</strong> Beim
                direkten Weg über <code>managedMcpServers</code> für zentral
                verteilte Server und <code>allowedPluginMcpServers</code> für
                Server aus Plugins, eine leere Liste erlaubt keine.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Keine eigenen lokalen Server.</strong>{" "}
                <code>isLocalDevMcpEnabled</code> auf <code>false</code>.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Netzwerk begrenzen.</strong> Nur die Webadressen
                freigeben, die Cowork wirklich braucht.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Ordner begrenzen.</strong> Cowork sieht nur die Ordner,
                die für die Arbeit nötig sind, nicht das ganze Laufwerk.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Protokoll.</strong> Wer hat wann welches Modell
                genutzt, in CloudTrail oder im Gateway.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Schulung.</strong> Mitarbeiter, die wissen, was ein
                Agent darf und was nicht, klicken seltener auf „Erlauben“. Die
                KI-Kompetenz nach Art. 4 EU AI Act ist ohnehin Pflicht.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Im Gateway sind Connectors, Ordner und Webadressen Schalter im
              Portal, je Team einstellbar. Beim direkten Weg ist jede dieser
              Regeln ein Eintrag im MDM-Profil.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="datenhaltung">Was gespeichert wird und was nicht</Typo.H2>
            <Typo.Paragraph>
              „Bedrock speichert nichts“ stimmt für die meisten Claude-Modelle,
              aber nicht für alle. Seit 2026 regelt AWS die Speicherung über
              einen eigenen Modus, und der hängt vom Modell ab.
            </Typo.Paragraph>

            <Typo.H3>Bedrock: Speichermodus je Modell</Typo.H3>
            <Typo.Paragraph>
              AWS kennt pro Region die Modi <code>none</code>,{" "}
              <code>default</code>, <code>aws_review</code> und{" "}
              <code>inherit</code>, festgelegt für das ganze Konto oder
              einzelne Projekte. Bei <code>none</code> speichert Bedrock
              nichts. Welche Modi ein Modell erlaubt, steht in seinen{" "}
              <code>allowed_modes</code>.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Sonnet, Opus und Haiku:</strong> Die Liste der Modelle
                mit Speicherung zur Missbrauchserkennung nennt sie nicht. Mit{" "}
                <code>none</code> und einer SCP auf den Schlüssel{" "}
                <code>bedrock:DataRetentionMode</code> lässt sich das kontoweit
                festschreiben.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Claude Fable 5, 5.1 und 5.2:</strong> Hier speichert AWS
                alle Anfragen bis zu 30 Tage für die automatische
                Missbrauchserkennung, auffällige Anfragen können AWS-Mitarbeiter
                prüfen. Laut{" "}
                <a
                  href="https://docs.aws.amazon.com/bedrock/latest/userguide/data-retention.html"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AWS-Doku
                </a>{" "}
                geht dabei nichts an den Modellanbieter. Wer <code>none</code>{" "}
                erzwingt, blockiert Fable.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Training:</strong> Nach den Bedingungen von AWS werden
                Ein- und Ausgaben nicht zum Training genutzt, weder von AWS
                noch von Anthropic.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Dazu kommt die Wahl des Profils. Ein <code>eu.</code>-Profil
              rechnet nur in EU-Regionen. Ein <code>global.</code>-Profil ist
              laut AWS rund 10 Prozent günstiger, rechnet aber weltweit.
              Protokolle wie CloudTrail bleiben immer in der Region, in der die
              Anfrage ankam.
            </Typo.Paragraph>

            <Typo.H3>Drei Datenströme verlassen den Rechner</Typo.H3>
            <BlogImage
              src="/blog/claude-cowork-bedrock-dsgvo/datenstroeme-claude-desktop.png"
              alt="Diagramm: Vom Rechner mit Claude Desktop gehen Modell-Anfragen an Bedrock oder das Gateway, Connector-Aufrufe an MCP-Dienste und Telemetrie an Anthropic"
              width={1200}
              height={675}
            />
            <Typo.List>
              <Typo.ListItem>
                <strong>Die Anfrage an das Modell:</strong> Prompt, angehängte
                Dateien und Antwort, an Bedrock oder an das Gateway.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Aufrufe von Connectors:</strong> Wenn Cowork einen
                MCP-Server nutzt, gehen Daten an diesen Dienst. Das regelt der
                Vertrag mit dessen Anbieter, nicht der mit AWS.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Telemetrie an Anthropic:</strong> Crash-Reports und
                Nutzungsstatistik, laut Anthropic ohne Prompt- und
                Antwortinhalte. Alle drei Kategorien sind abschaltbar.
                Erreichbar bleiben muss <code>downloads.claude.ai</code>, von
                dort kommen Updates und Laufzeitkomponenten.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>Der Chatverlauf selbst bleibt auf dem Rechner.</Typo.Paragraph>

            <Typo.H3>Beim Gateway</Typo.H3>
            <Typo.Paragraph>
              Das Gateway speichert je Anfrage Person, Modell, Tokens und
              Kosten, keine Inhalte. Anwendungsprotokolle löschen sich nach 30
              Tagen, Zugriffsprotokolle nach 90 Tagen. Admins sehen Verbrauch
              und Kosten, aber keine Chats. Claude Fable bieten wir im Gateway
              derzeit nicht an. Alle Details zu Verträgen und
              Unterauftragnehmern stehen auf der Seite{" "}
              <Link href="/managed-claude/datenschutz" className={linkClass}>
                Claude Datenschutz
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="kosten">Kosten: Verbrauch statt Lizenz pro Kopf</Typo.H2>
            <Typo.Paragraph>
              Bei Anthropic zahlen Sie pro Kopf. Claude Team kostet laut
              Anthropic 20 US-Dollar je Standard-Seat und Monat bei
              Jahreszahlung, 25 Dollar bei monatlicher Zahlung. Premium-Seats
              für Vielnutzer liegen bei 100 beziehungsweise 125 Dollar. Bei
              Enterprise kommt zur Seat-Gebühr die Nutzung zu API-Preisen dazu.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Über Bedrock fällt die Seat-Gebühr weg. Bezahlt wird nur, was
              verarbeitet wird. Beim Gateway zum Beispiel:
            </Typo.Paragraph>
            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Modell</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Input je 1 Mio. Tokens</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Output je 1 Mio. Tokens</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Claude Haiku 5.5</DataTable.Cell>
                  <DataTable.Cell>0,13 €</DataTable.Cell>
                  <DataTable.Cell>0,65 €</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Claude Sonnet 5.5</DataTable.Cell>
                  <DataTable.Cell>2,60 €</DataTable.Cell>
                  <DataTable.Cell>12,60 €</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Claude Opus 5.5</DataTable.Cell>
                  <DataTable.Cell>5,15 €</DataTable.Cell>
                  <DataTable.Cell>25,80 €</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.H3>Rechenbeispiel: 100 Mitarbeiter</Typo.H3>
            <Typo.Paragraph>
              Aus unseren Projekten kennen wir grobe Erfahrungswerte: normale
              Nutzer liegen bei etwa 40 € im Monat, Vielnutzer bei etwa 100 €,
              Experten bei etwa 300 €. Für Kollegen, die Claude kaum anfassen,
              setzen wir 5 € an.
            </Typo.Paragraph>
            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Gruppe</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Personen</DataTable.HeaderCell>
                  <DataTable.HeaderCell>je Person und Monat</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Summe</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Kaum Nutzung</DataTable.Cell>
                  <DataTable.Cell>40</DataTable.Cell>
                  <DataTable.Cell>ca. 5 €</DataTable.Cell>
                  <DataTable.Cell>200 €</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Normale Nutzung</DataTable.Cell>
                  <DataTable.Cell>45</DataTable.Cell>
                  <DataTable.Cell>ca. 40 €</DataTable.Cell>
                  <DataTable.Cell>1.800 €</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Vielnutzer</DataTable.Cell>
                  <DataTable.Cell>12</DataTable.Cell>
                  <DataTable.Cell>ca. 100 €</DataTable.Cell>
                  <DataTable.Cell>1.200 €</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Experten</DataTable.Cell>
                  <DataTable.Cell>3</DataTable.Cell>
                  <DataTable.Cell>ca. 300 €</DataTable.Cell>
                  <DataTable.Cell>900 €</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Gesamt</DataTable.Cell>
                  <DataTable.Cell bold>100</DataTable.Cell>
                  <DataTable.Cell>{" "}</DataTable.Cell>
                  <DataTable.Cell bold>ca. 4.100 €</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>
            <Typo.Paragraph>
              Bei Enterprise mit einer Seat-Gebühr von rund 20 Dollar kämen auf
              eine vergleichbare Nutzung etwa 2.000 Dollar im Monat obendrauf,
              auch für die 40 Kollegen, die kaum etwas tun.
            </Typo.Paragraph>

            <Typo.H3>Wann Seats doch günstiger sind</Typo.H3>
            <Typo.Paragraph>
              Der Vergleich mit Claude Team fällt knapper aus, als er klingt.
              Team ist eine Flatrate mit Nutzungsgrenzen je Seat. Ein kleines
              Team, in dem alle jeden Tag intensiv arbeiten und für das
              US-Speicherung kein Thema ist, fährt mit Team-Seats oft
              günstiger. Das Verbrauchsmodell lohnt sich, wenn viele
              Mitarbeiter Zugang brauchen, aber nur ein Teil davon viel
              arbeitet, und wenn die Daten in der EU bleiben müssen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Beim direkten Weg über Bedrock kommen die Tokenpreise von AWS in
              Dollar dazu, plus der interne Aufwand für Einrichtung und Pflege.
              Beim Gateway kostet die Einrichtung einmalig 1.500 €, danach
              gelten feste Euro-Preise laut{" "}
              <Link href="/managed-claude/preise" className={linkClass}>
                Preisliste
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="compliance">DSGVO, NIS2, EU AI Act und Betriebsrat</Typo.H2>
            <Typo.Paragraph>
              Kein Werkzeug ist von sich aus DSGVO-konform. Konform ist ein
              Setup, zu dem Verträge, Technik und interne Regeln gehören.
              Bedrock oder ein Gateway liefern einen großen Teil davon, aber
              nicht alles.
            </Typo.Paragraph>
            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Anforderung</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Was das Setup liefert</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Was bei Ihnen bleibt</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Art. 28 DSGVO, AV-Vertrag</DataTable.Cell>
                  <DataTable.Cell>
                    Direkt: AWS DPA. Gateway: AV-Vertrag mit Bluebatch,
                    Unterauftragnehmer benannt
                  </DataTable.Cell>
                  <DataTable.Cell>Verträge ablegen, Verarbeitungsverzeichnis ergänzen</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Art. 32 DSGVO, Sicherheit</DataTable.Cell>
                  <DataTable.Cell>
                    Anmeldung pro Person, Rollen, Protokoll, verschlüsselte
                    Verbindungen
                  </DataTable.Cell>
                  <DataTable.Cell>Endgeräte absichern, Rechtekonzept</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Art. 44 ff. DSGVO, Drittland</DataTable.Cell>
                  <DataTable.Cell>EU-Profile, globale Profile gesperrt</DataTable.Cell>
                  <DataTable.Cell>Regionswahl dokumentieren, US-Konzerne als Dienstleister bewerten</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>§ 203 StGB (Kanzleien)</DataTable.Cell>
                  <DataTable.Cell>Gateway: Verpflichtung zur Verschwiegenheit durch Bluebatch</DataTable.Cell>
                  <DataTable.Cell>Berufsrechtliche Bewertung</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>NIS2</DataTable.Cell>
                  <DataTable.Cell>Dokumentierte Architektur und Lieferkette</DataTable.Cell>
                  <DataTable.Cell>Risikomanagement, Meldewege, falls Sie betroffen sind</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>EU AI Act, Art. 4</DataTable.Cell>
                  <DataTable.Cell>Nichts, das ist Ihre Aufgabe</DataTable.Cell>
                  <DataTable.Cell>KI-Kompetenz der Mitarbeiter nachweisen</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Betriebsrat</DataTable.Cell>
                  <DataTable.Cell>Protokoll nur mit Verbrauchsdaten, keine Inhalte</DataTable.Cell>
                  <DataTable.Cell>Mitbestimmung, meist Betriebsvereinbarung</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.H3>Kanzleien: § 203 StGB</Typo.H3>
            <Typo.Paragraph>
              Für Steuerberater und Anwälte ist die Verschwiegenheit der
              eigentliche Knackpunkt. Seit 2017 dürfen sie IT-Dienstleister
              einbeziehen, wenn das erforderlich ist und der Dienstleister
              sorgfältig ausgewählt und zur Verschwiegenheit verpflichtet
              wurde. Für Anwälte konkretisiert das § 43e BRAO, für
              Steuerberater § 62a StBerG. Mit AWS direkt müssen Sie diese
              Verpflichtung selbst verhandeln. Beim Gateway liefert Bluebatch
              die Geheimhaltungserklärung mit.
            </Typo.Paragraph>

            <Typo.H3>Betriebsrat</Typo.H3>
            <Typo.Paragraph>
              Ein System, das protokolliert, wer wann wie viel nutzt, ist eine
              technische Einrichtung im Sinne von § 87 Abs. 1 Nr. 6 BetrVG.
              Gibt es einen Betriebsrat, ist er mitbestimmungspflichtig, in der
              Praxis läuft es auf eine Betriebsvereinbarung hinaus. Planen Sie
              dafür mehr Zeit ein als für die Technik. Hilfreich ist, dass
              Chats lokal liegen und das Protokoll nur Verbrauchsdaten enthält.
            </Typo.Paragraph>

            <Typo.H3>EU AI Act</Typo.H3>
            <Typo.Paragraph>
              Seit Februar 2025 müssen Unternehmen, die KI einsetzen, für
              ausreichende KI-Kompetenz ihrer Mitarbeiter sorgen. Das gilt
              unabhängig davon, wo Claude rechnet. Wir bieten dafür ein{" "}
              <Link href="/managed-claude/coaching" className={linkClass}>
                Coaching mit Zertifikat
              </Link>{" "}
              an.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="welcher-weg">Welcher Weg passt?</Typo.H2>

            <Typo.H3>Bedrock direkt per MDM</Typo.H3>
            <Typo.Paragraph>Passt, wenn mindestens zwei Punkte zutreffen:</Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Sie betreiben bereits eine AWS-Landing-Zone mit IAM Identity
                Center
              </Typo.ListItem>
              <Typo.ListItem>
                Ein MDM-Team verteilt regelmäßig Profile auf Mac und Windows
              </Typo.ListItem>
              <Typo.ListItem>
                Es gibt Leute, die AWS-Konten, SCPs und Kosten dauerhaft
                betreuen
              </Typo.ListItem>
              <Typo.ListItem>Sie wollen jede Einstellung selbst in der Hand haben</Typo.ListItem>
            </Typo.List>

            <Typo.H3>Private Claude AI Gateway</Typo.H3>
            <Typo.Paragraph>Passt für die meisten Mittelständler und Kanzleien:</Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                Sie wollen Claude Cowork für alle, aber kein AWS-Projekt
              </Typo.ListItem>
              <Typo.ListItem>Die IT ist klein oder ausgelagert</Typo.ListItem>
              <Typo.ListItem>
                Kosten sollen in Euro je Person sichtbar sein, mit Budgets
              </Typo.ListItem>
              <Typo.ListItem>
                Sie brauchen AV-Vertrag und Verschwiegenheitsverpflichtung aus
                einer Hand
              </Typo.ListItem>
              <Typo.ListItem>
                Es soll in einer Woche laufen, nicht in einem Quartal
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Claude Team oder Enterprise</Typo.H3>
            <Typo.Paragraph>
              Passt, wenn US-Speicherung kein Thema ist und Sie neue
              Funktionen wie Computer Use oder Claude Design sofort brauchen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="faq">
            <FaqContainer
              faqs={[
                {
                  question: "Was ist Claude Cowork Bedrock?",
                  answer:
                    "Claude Desktop mit Cowork, dessen Anfragen nicht an Anthropic, sondern über Amazon Bedrock an AWS gehen. Die App bleibt dieselbe, Verarbeitungsort, Vertragspartner und Abrechnung ändern sich. Seit Juni 2026 ist das offiziell verfügbar.",
                },
                {
                  question: "Ist Claude Cowork über Bedrock DSGVO-konform?",
                  answer:
                    "Es lässt sich DSGVO-konform aufsetzen: EU-Inference-Profile, globale Profile gesperrt, Speichermodus festgelegt, AV-Vertrag, Anmeldung pro Person. Dazu gehören das Verarbeitungsverzeichnis, gegebenenfalls eine Betriebsvereinbarung und die KI-Kompetenz der Mitarbeiter nach dem EU AI Act.",
                },
                {
                  question: "Kann ich Claude Desktop per Intune verteilen?",
                  answer:
                    "Ja. Beim direkten Weg verteilen Sie die komplette Konfiguration als Registry-Werte unter HKLM\\SOFTWARE\\Policies\\Claude oder per ADMX-Vorlage, auf dem Mac als Profil für com.anthropic.claudefordesktop. Beim Gateway verteilen Sie nur eine Datei mit der Gateway-Adresse, alles Weitere kommt zentral.",
                },
                {
                  question: "Was kostet Claude Cowork über Bedrock?",
                  answer:
                    "Es gibt keine Lizenz pro Kopf, bezahlt werden Tokens. Über das Gateway kostet Claude Sonnet 5.5 zum Beispiel 2,60 € je 1 Million Input-Tokens. Als Erfahrungswert liegen normale Nutzer bei etwa 40 € im Monat. Die Einrichtung kostet einmalig 1.500 €.",
                },
                {
                  question: "Sieht Anthropic meine Daten?",
                  answer:
                    "Über Bedrock nicht. Die Anfragen gehen an AWS, nach den Bedingungen von AWS werden sie nicht zum Training genutzt. An Anthropic geht höchstens Telemetrie ohne Inhalte, und die lässt sich abschalten.",
                },
                {
                  question: "Welche Funktionen fehlen über Bedrock?",
                  answer:
                    "Laut AWS Claude Design, Computer Use und der Skills Marketplace. Neue Funktionen kommen bei Team und Enterprise in der Regel früher an.",
                },
                {
                  question: "Brauche ich für das Gateway ein eigenes AWS-Konto?",
                  answer:
                    "Nein. Bluebatch betreibt Gateway und Bedrock-Zugang in Frankfurt. Sie brauchen nur Claude Desktop und eine Anmeldung per SSO.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu Claude Cowork Bedrock
              </FaqContainer.Headline>
            </FaqContainer>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="naechster-schritt">Nächster Schritt</Typo.H2>
            <Typo.Paragraph>
              Sie wollen Claude Cowork im Team, die Daten sollen in der EU
              bleiben, und ein AWS-Projekt steht nicht auf dem Plan? Mit dem
              Private Claude AI Gateway ist Ihr Team in höchstens einer Woche
              startklar: Vertrag und Geheimhaltung, Einrichtung, eine Datei für
              alle Rechner, Schulung. Wie das abläuft, steht unter{" "}
              <Link href="/managed-claude/onboarding" className={linkClass}>
                KI-Einführung in einer Woche
              </Link>
              . Oder{" "}
              <Link href="/contact" className={linkClass}>
                sprechen Sie uns an
              </Link>
              , wir klären in einem kurzen Gespräch, welcher Weg zu Ihrer IT
              passt.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="kurzfassung">
            Kurzfassung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="warum-bedrock">
            Warum Bedrock?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="was-sich-aendert">
            Was sich ändert
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="setup-per-mdm">
            Setup per MDM
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="gateway">
            Der kürzere Weg: Gateway
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="sicherheit">
            Prompt Injection
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="datenhaltung">
            Was gespeichert wird
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="kosten">
            Kosten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="compliance">
            DSGVO, NIS2, AI Act
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="welcher-weg">
            Welcher Weg passt?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="faq">FAQ</BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="naechster-schritt">
            Nächster Schritt
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
