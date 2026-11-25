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
  slug: "claude-plugins",
  author: "Max Hänsel",
  date: "2026-11-19",
  image: "/blog/claude-plugins/claude-plugins-bausteine.jpg",
  tags: ["ki", "development"] as BlogTagId[],
  publish: true,
};

const description =
  "Was Claude Plugins sind, wie Skills, Connectors und .mcpb-Dateien zusammenspielen und wie Sie Plugins im Unternehmen an alle verteilen, auch automatisch.";

export const metadata: Metadata = {
  title: "Claude Plugins: Was sie sind und wie Sie sie verteilen | Bluebatch",
  description,
  openGraph: {
    title: "Claude Plugins: Was sie sind und wie Sie sie im Unternehmen an alle verteilen",
    description,
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-plugins/claude-plugins-bausteine.jpg",
        width: 1200,
        height: 675,
        alt: "Hände legen drei Karten auf einem Besprechungstisch zu einer Reihe zusammen",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-plugins",
  },
};

// Als Zeilen-Array, damit ${...} im Manifest nicht als Template interpoliert wird.
const MANIFEST = [
  "{",
  '  "manifest_version": "0.3",',
  '  "name": "aktenablage",',
  '  "version": "1.2.0",',
  '  "display_name": "Aktenablage",',
  '  "server": {',
  '    "type": "node",',
  '    "entry_point": "server/index.js",',
  '    "mcp_config": {',
  '      "command": "node",',
  '      "args": ["${__dirname}/server/index.js"],',
  '      "env": { "AKTEN_ORDNER": "${user_config.akten_ordner}" }',
  "    }",
  "  },",
  '  "user_config": {',
  '    "akten_ordner": { "type": "directory", "title": "Aktenordner" }',
  "  },",
  '  "compatibility": { "platforms": ["darwin", "win32"] }',
  "}",
].join("\n");

const linkClass = "text-primary-600 hover:underline";

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Claude Plugins: Was sie sind und wie Sie sie im Unternehmen an alle
          verteilen
        </BlogHero.Headline>

        <GeoSummary>
          Claude Plugins sind Pakete, die Skills, Connectors (MCP-Server),
          Befehle und Agenten bündeln und als eine Einheit in Claude Desktop
          installiert werden. Lokale MCP-Server kommen als .mcpb-Datei mit. Im
          Private Claude AI Gateway pflegen Admins Plugins im Portal und
          liefern sie an alle oder einzelne Personen aus, auf Wunsch
          automatisch installiert.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>14 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-11-19">19. November 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-plugins/claude-plugins-bausteine.jpg"
          alt="Hände legen drei Karten auf einem Besprechungstisch zu einer Reihe zusammen"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.H2 id="kurzfassung">Kurzfassung</Typo.H2>
            <Typo.Paragraph>
              Ein Claude Plugin ist ein Paket, das Claude für eine bestimmte
              Arbeit ausrüstet. Darin stecken Skills, also Arbeitsanleitungen,
              dazu Connectors zu Ihren Systemen, Befehle und Agenten. Wer das
              Plugin installiert, bekommt alles auf einmal.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein Sonderfall ist die <code>.mcpb</code>-Datei. Sie enthält einen
              MCP-Server, der direkt auf dem Rechner des Mitarbeiters läuft. So
              kommt Claude an Laufwerke, lokale Programme und Systeme hinter
              der Firewall.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Nutzen entsteht erst, wenn alle im Team dasselbe Plugin in
              derselben Fassung haben. Im Private Claude AI Gateway pflegen Sie
              Plugins im Portal, laden <code>.mcpb</code>-Dateien hoch und
              liefern beides an alle oder an einzelne Personen aus. Auf Wunsch
              installiert sich ein Plugin von selbst.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="was-sind-plugins">Was sind Claude Plugins?</Typo.H2>
            <Typo.Paragraph>
              Ein Plugin bündelt alles, was Claude für eine Aufgabe braucht, in
              einer installierbaren Einheit. Anthropic nennt vier Bausteine,
              manche Plugins bringen als fünften Hooks mit:
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Baustein</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Was er macht</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Wo er wirkt</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Skills</DataTable.Cell>
                  <DataTable.Cell>
                    Arbeitsanleitungen, die Claude selbst zieht, wenn die
                    Aufgabe passt
                  </DataTable.Cell>
                  <DataTable.Cell>Chat, Cowork, Code</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Befehle</DataTable.Cell>
                  <DataTable.Cell>
                    Benannte Aktionen, die Sie mit /plugin:befehl starten
                  </DataTable.Cell>
                  <DataTable.Cell>Chat, Cowork, Code</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Connectors (MCP)</DataTable.Cell>
                  <DataTable.Cell>
                    Zugriff auf ein System oder eine Datenquelle
                  </DataTable.Cell>
                  <DataTable.Cell>Chat, Cowork, Code</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Agenten</DataTable.Cell>
                  <DataTable.Cell>
                    Spezialisten, an die Claude Teilaufgaben abgibt
                  </DataTable.Cell>
                  <DataTable.Cell>Cowork, Code</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Hooks</DataTable.Cell>
                  <DataTable.Cell>
                    Befehle, die bei bestimmten Ereignissen auf dem Rechner
                    laufen
                  </DataTable.Cell>
                  <DataTable.Cell>Cowork, Code</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Ein Plugin kann in Cowork also mehr als im Chat. Das ist kein
              Fehler, sondern Absicht: Jede Oberfläche lädt nur, was sie kann.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-plugins/aufbau-claude-plugin.png"
              alt="Diagramm: Ordnerstruktur des Beispiel-Plugins Mandantenpost mit Skills, Befehl, Remote-Connector und lokalem Server als .mcpb-Datei"
              width={1200}
              height={675}
            />

            <Typo.H3>Ein Plugin ist ein Ordner mit Textdateien</Typo.H3>
            <Typo.Paragraph>
              Technisch ist ein Plugin unspektakulär. Es ist ein Ordner mit
              einem Manifest (<code>.claude-plugin/plugin.json</code>), einer
              Liste der Server (<code>.mcp.json</code>) und Unterordnern für
              Skills, Befehle und Agenten. Jeder Skill ist eine Datei{" "}
              <code>SKILL.md</code>. Alles ist lesbar, versionierbar und lässt
              sich prüfen, bevor es verteilt wird.
            </Typo.Paragraph>

            <Typo.H3>Seit wann es Plugins gibt</Typo.H3>
            <Typo.Paragraph>
              Plugins kamen Anfang 2026 in Claude Cowork. Am 24. Februar 2026
              legte Anthropic für Unternehmen nach: private Plugin-Marketplaces,
              Vorlagen für Abteilungen wie HR, Finance und Engineering,
              Zuteilung je Person und automatische Installation. Seitdem sind
              Plugins der Weg, auf dem Unternehmen ihr Wissen in Claude
              bringen.
            </Typo.Paragraph>

            <Typo.H3>Ein Beispiel</Typo.H3>
            <Typo.Paragraph>
              Nehmen wir eine Steuerkanzlei, die ein Plugin „Mandantenpost“
              baut. Ein Skill beschreibt, wie die Kanzlei auf Rückfragen zur
              Belegliste antwortet. Ein zweiter, wie Fristen geprüft und
              vermerkt werden. Der Outlook-Connector gibt Claude Zugriff auf das
              Postfach. Jede Mitarbeiterin, die das Plugin hat, arbeitet nach
              denselben Regeln, ohne dass sie sich eigene Prompts bauen muss.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="bausteine">
              Skills, Connectors und .mcpb: die Bausteine im Detail
            </Typo.H2>

            <Typo.H3>Skills: wie bei Ihnen gearbeitet wird</Typo.H3>
            <Typo.Paragraph>
              Ein Skill ist eine Arbeitsanleitung in einer Datei{" "}
              <code>SKILL.md</code>. Oben steht, wofür der Skill gedacht ist,
              darunter Schritt für Schritt, wie die Aufgabe erledigt wird.
              Beispiele, Vorlagen oder Prüflisten können als weitere Dateien
              daneben liegen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Claude liest zunächst nur die Kurzbeschreibung. Passt eine Aufgabe
              dazu, lädt es den ganzen Skill. Mitarbeiter müssen also nicht
              wissen, welcher Skill gerade dran ist. Sie beschreiben die
              Aufgabe, und Claude arbeitet nach Ihrer Anleitung. Wie Sie gute
              Skills schreiben und worauf Sie bei Skills aus dem Netz achten,
              steht im Beitrag{" "}
              <Link href="/blog/claude-skills" className={linkClass}>
                Claude Skills
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>Connectors: womit gearbeitet wird</Typo.H3>
            <Typo.Paragraph>
              Connectors sind MCP-Server. MCP ist der offene Standard, über den
              Claude mit anderen Systemen spricht. Was dahinter steckt, erklärt
              unser Beitrag{" "}
              <Link href="/blog/was-ist-mcp-server" className={linkClass}>
                Was ist ein MCP-Server?
              </Link>
              . Für Plugins zählt vor allem eine Unterscheidung:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Remote-Connector:</strong> Der Server läuft im Netz,
                Claude erreicht ihn über HTTPS. Das passt für Cloud-Dienste wie
                Microsoft 365 und für alles, was zentral aktualisiert werden
                soll.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Lokaler MCP-Server:</strong> Der Server läuft auf dem
                Rechner des Mitarbeiters. Das passt für Systeme hinter der
                Firewall, Netzlaufwerke, lokal installierte Programme und Daten,
                die den Rechner nicht verlassen sollen.
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>.mcpb: ein lokaler Server als eine Datei</Typo.H3>
            <Typo.Paragraph>
              Damit ein lokaler Server nicht von Hand eingerichtet werden muss,
              gibt es das MCP Bundle mit der Endung <code>.mcpb</code>. Es ist
              ein Zip-Archiv mit dem Server und einer{" "}
              <code>manifest.json</code>. Das Manifest beschreibt, wie der
              Server heißt, in welcher Version er vorliegt, womit er startet
              (Node, Python oder eine ausführbare Datei) und welche Eingaben er
              braucht. Aus diesen Eingaben baut Claude Desktop selbst ein
              Formular, etwa für einen Ordnerpfad.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein gekürztes Manifest für einen Server, der auf ein
              Aktenlaufwerk zugreift, sieht so aus:
            </Typo.Paragraph>
            <CodeBlock language="json" fileName="manifest.json (gekürzt)">
              {MANIFEST}
            </CodeBlock>
            <Typo.Paragraph>
              Das Format hieß früher „Desktop Extensions“ mit der Endung{" "}
              <code>.dxt</code>. Im September 2025 wurde es in{" "}
              <code>.mcpb</code> umbenannt, im November 2025 gab Anthropic es an
              das offene MCP-Projekt ab. Gebaut wird ein Bundle mit dem
              Kommandozeilenwerkzeug <code>mcpb</code>: <code>mcpb init</code>{" "}
              legt das Manifest an, <code>mcpb pack</code> packt alles in eine
              Datei.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Lokal als .mcpb, wenn</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Remote, wenn</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>das System hinter der Firewall steht</DataTable.Cell>
                  <DataTable.Cell>es ein Cloud-Dienst ist</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    Claude auf Laufwerke oder lokale Programme zugreifen soll
                  </DataTable.Cell>
                  <DataTable.Cell>Updates zentral an alle gehen sollen</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Daten den Rechner nicht verlassen sollen</DataTable.Cell>
                  <DataTable.Cell>
                    Claude auch im Browser oder auf dem Handy dran soll
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Nicht jeder Server, den ein Team braucht, existiert schon. Für
              eigene Systeme bauen wir Plugins und MCP-Server auf Maß, siehe{" "}
              <Link
                href="/managed-claude/integrationen/plugin-entwicklung"
                className={linkClass}
              >
                Claude Plugin Entwicklung
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="verteilen">
              Plugins im Unternehmen verteilen: die Wege
            </Typo.H2>
            <Typo.Paragraph>
              Ein Plugin auf einem Rechner ist schnell installiert. Schwierig
              wird es bei 30 Rechnern, drei Teams und der zweiten Fassung.
              Dafür gibt es drei Wege.
            </Typo.Paragraph>

            <Typo.H3>Weg 1: Jeder lädt selbst hoch</Typo.H3>
            <Typo.Paragraph>
              In Claude Desktop lässt sich ein Plugin unter Anpassen → Plugins
              als Zip-Datei hochladen. Für einen Test reicht das. Im Team
              bedeutet es: Jeder hat eine andere Fassung, Updates kommen per
              Mail, und niemand weiß, wer was installiert hat. Anthropic prüft
              solche Plugins nicht, das liegt dann bei Ihnen.
            </Typo.Paragraph>

            <Typo.H3>Weg 2: Claude Team oder Enterprise</Typo.H3>
            <Typo.Paragraph>
              Bei Team und Enterprise verteilt ein Owner Plugins über die
              Organisation. Er kann sie „standardmäßig installiert“ setzen, dann
              sind sie bei allen da und lassen sich abschalten. Oder „Pflicht“,
              dann sind sie immer an. Updates aus dem Marketplace kommen
              automatisch. Das ist komfortabel, die Daten liegen laut Anthropic
              aber in den USA.
            </Typo.Paragraph>

            <Typo.H3>Weg 3: Eigener Marketplace über Bedrock</Typo.H3>
            <Typo.Paragraph>
              Wer Claude Desktop über Amazon Bedrock oder ein eigenes Gateway
              betreibt, wie im Beitrag{" "}
              <Link href="/blog/claude-cowork-bedrock-dsgvo" className={linkClass}>
                Claude Cowork Bedrock
              </Link>{" "}
              beschrieben, verteilt Plugins über einen eigenen Marketplace. Das
              ist eine Datei <code>marketplace.json</code>, die auf einem
              Git-Server oder per HTTPS liegt. Claude Desktop holt sie auf jedem
              Gerät und zeigt die Plugins unter Anpassen → Plugins →
              Organisation.
            </Typo.Paragraph>
            <Typo.Paragraph>Das funktioniert, verlangt aber einiges:</Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Hosting:</strong> Ein Git-Marketplace braucht git auf
                jedem Rechner, also Git for Windows und die Xcode-Werkzeuge auf
                dem Mac. Sonst muss der Marketplace über HTTPS laufen.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Konfiguration:</strong> Der Marketplace wird per
                MDM-Profil oder Konfigurationsserver eingetragen. Soll ein Plugin
                automatisch oder als Pflicht kommen, muss jeder Stand fest
                gepinnt werden, per Commit-SHA oder Prüfsumme der Datei. Jedes
                Update heißt dann: neuer Pin, neues Profil.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Lokale Server:</strong> Im Bedrock-Betrieb sind
                Erweiterungen ab Werk aus. Damit ein <code>.mcpb</code> im
                Plugin startet, müssen Schalter wie{" "}
                <code>isLocalDevMcpEnabled</code> und{" "}
                <code>isDesktopExtensionEnabled</code> passend gesetzt sein.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Prüfung:</strong> Claude Desktop scannt Plugins nicht.
                Was im Marketplace liegt, läuft.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Für ein Unternehmen mit eigener Plattform-IT ist das machbar. Für
              einen Mittelständler oder eine Kanzlei mit zwei Leuten in der IT
              ist es ein weiteres Projekt. Genau dieses Projekt nimmt Ihnen das
              Gateway ab.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="gateway">
              So machen wir das im Private Claude AI Gateway
            </Typo.H2>
            <Typo.Paragraph>
              Im Private Claude AI Gateway ist der Marketplace schon eingebaut.
              Sie pflegen Plugins im Portal, das Gateway baut daraus die Pakete
              und liefert sie an Claude Desktop aus. Auf den Rechnern ändert
              sich dafür nichts.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-plugins/vom-portal-auf-alle-rechner.png"
              alt="Diagramm: Portal, Gateway in Frankfurt und drei Rechner, die je nach Bibliothek unterschiedliche Plugins bekommen, bereitgestellt oder automatisch installiert"
              width={1200}
              height={675}
            />

            <Typo.H3>Bibliotheken: wer welches Plugin bekommt</Typo.H3>
            <Typo.Paragraph>
              Plugins liegen im Portal in Bibliotheken. Eine Bibliothek
              „Allgemein“ gilt zum Beispiel für alle, eine Bibliothek
              „Buchhaltung“ nur für die fünf Personen aus der Buchhaltung. Die
              Zuteilung legen Sie je Bibliothek fest: alle oder einzelne
              Personen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              In Claude Desktop wird jede Bibliothek ein eigener Reiter unter
              Anpassen → Plugins → Organisation. Jedes Plugin darin installiert
              man mit allen seinen Skills auf einmal.
            </Typo.Paragraph>

            <Typo.H3>Skills schreiben oder übernehmen</Typo.H3>
            <Typo.Paragraph>
              Für Skills gibt es im Portal einen Editor mit Dateibaum. Sie
              schreiben die Anleitung, legen Vorlagen oder Beispiele daneben und
              speichern. Vorhandene Skills kommen als Zip-Datei oder direkt aus
              einem öffentlichen Git-Repository auf GitHub oder GitLab. Dazu
              gibt es geprüfte Vorlagen aus öffentlichen Quellen. Ein
              installiertes Plugin aus einer Vorlage zeigt an, wenn es eine neue
              Fassung gibt, und lässt sich mit einem Klick aktualisieren.
            </Typo.Paragraph>

            <Typo.H3>Connectors dazu wählen</Typo.H3>
            <Typo.Paragraph>
              Je Plugin wählen Sie unter „Benötigte MCP-Server“, was es braucht:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Remote-Connectors</strong> aus der Seite Connectors, zum
                Beispiel Microsoft 365
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>die Artefakte</strong> des Gateways, mit denen Claude
                Dashboards und Berichte als Seite im Portal ablegt
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>lokale MCP-Server</strong> aus <code>.mcpb</code>-Dateien
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Ein Server kann in mehreren Plugins stecken. In Claude sieht die
              Person dann, was noch zu verbinden ist.
            </Typo.Paragraph>

            <Typo.H3>.mcpb hochladen, prüfen, versionieren</Typo.H3>
            <Typo.Paragraph>
              Lokale Server lädt ein Admin unter Connectors → Lokale MCP-Server
              hoch. Das Gateway prüft jede Datei, bevor sie ausgeliefert wird:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                höchstens 25 MB, entpackt höchstens 100 MB und 20.000 Dateien
              </Typo.ListItem>
              <Typo.ListItem>
                keine Pfade aus dem Bundle heraus, keine symbolischen Links
              </Typo.ListItem>
              <Typo.ListItem>
                ein gültiges Manifest mit Name, Version, Laufzeit und Startdatei
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Lädt der Admin eine neue Fassung desselben Servers hoch, entsteht
              eine neue Version. Sie ist zunächst inaktiv. Erst wenn er sie
              aktiv schaltet, geht sie an die Rechner. So lässt sich eine neue
              Fassung vorbereiten und bei Problemen auf die alte zurückschalten.
              Auf dem Gateway selbst läuft kein Code der Server. Sie laufen nur
              auf den Rechnern.
            </Typo.Paragraph>

            <Typo.H3>Speichern heißt ausgeliefert</Typo.H3>
            <Typo.Paragraph>
              Nach jeder Änderung baut das Gateway das Plugin neu und stellt es
              in den Marketplace. Claude Desktop fragt dort etwa alle zehn
              Minuten nach und zusätzlich, wenn jemand eine neue Aufgabe öffnet.
              Ein neuer Skill ist dann in der nächsten Sitzung da, ohne Rollout
              und ohne Nachricht an die IT.
            </Typo.Paragraph>

            <Typo.H3>Bereitstellen oder automatisch installieren</Typo.H3>
            <Typo.Paragraph>Je Plugin entscheiden Sie, wie es ankommt:</Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Bereitstellen:</strong> Das Plugin steht bei allen
                Personen der Bibliothek unter Organisation, jede installiert es
                mit einem Klick.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Automatisch installieren:</strong> Das Plugin landet
                beim nächsten Abgleich bei allen Personen der Bibliothek, ohne
                Klick. Wer es danach selbst entfernt, bekommt es nicht erneut.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Eine Pflicht-Installation, die niemand abschalten kann, gibt es im
              Gateway nicht. Bei Claude Team und Enterprise geht das, im Gateway bleibt
              die letzte Entscheidung bei der Person.
            </Typo.Paragraph>

            <Typo.H3>Was das Gateway auf den Rechnern freischaltet</Typo.H3>
            <Typo.Paragraph>
              Damit ein lokaler Server aus einem Plugin startet, braucht Claude
              Desktop zwei Einstellungen: lokale Server erlaubt und
              Erweiterungen eingeschaltet. Beides setzt das Gateway selbst, und
              zwar nur für Organisationen, die einen lokalen Server hochgeladen
              haben. Alle anderen behalten die strengere Vorgabe.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für jeden lokalen Server legen Sie im Portal fest, ob Claude vor
              dem Aufruf nachfragt. Vorgabe ist die Rückfrage. Was das Portal
              sonst noch steuert, von Ordner-Freigaben bis Budgets, steht unter{" "}
              <Link href="/managed-claude/zentrale-steuerung" className={linkClass}>
                Zentrale Steuerung
              </Link>
              . Alle Funktionen rund um Plugins im Gateway fasst die Seite{" "}
              <Link href="/managed-claude/plugins" className={linkClass}>
                Plugins im Private Claude AI Gateway
              </Link>{" "}
              zusammen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="praxis">Was Sie vor dem Rollout wissen sollten</Typo.H2>
            <Typo.Paragraph>
              Wir haben lokale Server aus Plugins im November 2026 selbst
              getestet, vom Hochladen im Portal bis zum Aufruf in Cowork auf dem
              Mac. Drei Punkte sollten Sie vor dem Rollout kennen.
            </Typo.Paragraph>

            <Typo.H3>Plugins laufen in Cowork und Code, nicht im Chat</Typo.H3>
            <Typo.Paragraph>
              Im Betrieb über Bedrock oder ein Gateway lädt Claude Desktop
              Plugins in Cowork und in Code. Im Chat kennt Claude sie nicht. Wer
              ein Plugin ausprobiert, öffnet also eine neue Cowork-Aufgabe,
              keinen Chat. Das gehört in die Einweisung, sonst heißt es nach dem
              ersten Versuch, das Plugin funktioniere nicht.
            </Typo.Paragraph>

            <Typo.H3>Node muss auf dem Rechner sein</Typo.H3>
            <Typo.Paragraph>
              Anthropic schreibt, Claude Desktop bringe Node mit. Das gilt für
              Erweiterungen, die die App selbst startet. Einen Server aus einem
              Plugin startet in Cowork die Sitzung auf dem Rechner, und die
              braucht ein installiertes Node. In unserem Test auf dem Mac kannte
              Claude den Server ohne Node nicht.
            </Typo.Paragraph>
            <Typo.Paragraph>Für den Rollout heißt das:</Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Node per Softwareverteilung ausrollen,</strong> zusammen
                mit Claude Desktop
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>oder den Server als ausführbare Datei bauen</strong>{" "}
                (Typ <code>binary</code> im Manifest), je eine Datei für Mac und
                Windows. Die braucht keine Laufzeit.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Python ist kein Ausweg. Auf dem Mac ist Python ohne
              Entwicklerwerkzeuge nur ein Platzhalter und danach in Version 3.9,
              das offizielle MCP-Paket verlangt 3.10. Windows hat ab Werk gar
              kein Python.
            </Typo.Paragraph>

            <Typo.H3>Code läuft auf den Rechnern Ihrer Mitarbeiter</Typo.H3>
            <Typo.Paragraph>
              Ein lokaler MCP-Server ist ein Programm. Er hat die Rechte der
              Person, die angemeldet ist. Deshalb gilt:
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Nur Admins laden Server hoch.</strong> Im Gateway dürfen
                das nur die Admins Ihrer Organisation, Mitarbeiter können im
                Bedrock-Betrieb ohnehin keine <code>.mcpb</code> selbst
                installieren.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Herkunft prüfen.</strong> Claude Desktop scannt Plugins
                nicht. Ein Server aus einem unbekannten Repository gehört vor
                dem Hochladen in fachkundige Hände.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Keine Zugangsdaten in Skills.</strong> Skill-Dateien
                landen auf jedem Rechner, dem die Bibliothek zugeteilt ist.
                Passwörter und API-Schlüssel haben darin nichts zu suchen.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Rückfrage anlassen,</strong> bis ein Server sich bewährt
                hat. Im Gateway ist sie für jeden lokalen Server die Vorgabe.
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="beispiele">Drei Beispiele aus der Praxis</Typo.H2>
            <Typo.Paragraph>
              Die folgenden Plugins sind Beispiele, wie wir sie mit Teams
              aufbauen. Sie zeigen, wie Skills und Connectors zusammenspielen.
            </Typo.Paragraph>

            <Typo.H3>Steuerkanzlei: Plugin „Mandantenanfragen“</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Skills:</strong> Antwort auf Rückfragen zur Belegliste,
                Fristen prüfen und vermerken, Erinnerung an fehlende Unterlagen
                im Ton der Kanzlei
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Connector:</strong> Outlook über Microsoft 365
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Zuteilung:</strong> Bibliothek „Mandantenbetreuung“ für
                alle Sachbearbeiter, automatisch installiert
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Ergebnis: Jede neue Kollegin schreibt ab dem ersten Tag Antworten
              im Stil der Kanzlei, ohne Vorlagenordner.
            </Typo.Paragraph>

            <Typo.H3>Anwaltskanzlei: Plugin „Schriftsätze“</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Skills:</strong> Aufbau eines Schriftsatzes,
                Zitierweise, Prüfliste vor dem Versand
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Connector:</strong> ein lokaler MCP-Server als{" "}
                <code>.mcpb</code>, der auf das Aktenlaufwerk der Kanzlei
                zugreift. Den Ordner trägt jede Person beim Einrichten ein, die
                Akten verlassen das Netz der Kanzlei nur als Teil der Anfrage an
                Claude.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Zuteilung:</strong> Bibliothek „Prozessführung“ für die
                Anwälte und das Sekretariat
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Großhandel: Plugin „Angebote“</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                <strong>Skills:</strong> Angebotsaufbau, Kalkulationsregeln mit
                Rabattstaffeln, Textbausteine für Lieferbedingungen
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Connector:</strong> ERP-Anbindung, remote bei einem ERP
                in der Cloud, als lokaler Server bei einem System im eigenen
                Netz
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Zuteilung:</strong> Bibliothek „Vertrieb Innendienst“
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Gibt es für Ihr System noch keinen passenden Server, entwickeln
              wir ihn. Was das kostet und wie es abläuft, steht unter{" "}
              <Link
                href="/managed-claude/integrationen/plugin-entwicklung"
                className={linkClass}
              >
                Plugin-Entwicklung für Claude
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="faq">
            <FaqContainer
              faqs={[
                {
                  question: "Was ist ein Claude Plugin?",
                  answer:
                    "Ein Paket, das Skills, Connectors (MCP-Server), Befehle und Agenten bündelt und als Einheit in Claude installiert wird. Technisch ist es ein Ordner mit Textdateien und einem Manifest. Plugins machen aus Claude einen Spezialisten für eine Rolle, ein Team oder einen Ablauf.",
                },
                {
                  question: "Was ist der Unterschied zwischen Skill und Plugin?",
                  answer:
                    "Ein Skill ist eine einzelne Arbeitsanleitung. Ein Plugin ist die Verpackung, in der mehrere Skills zusammen mit den passenden Connectors verteilt werden. Im Private Claude AI Gateway kommen Skills immer als Plugin auf die Rechner.",
                },
                {
                  question: "Was ist eine .mcpb-Datei?",
                  answer:
                    "Ein MCP Bundle: ein Zip-Archiv mit einem lokalen MCP-Server und einer manifest.json. Claude Desktop startet den Server auf dem Rechner. Früher hieß das Format Desktop Extension (.dxt).",
                },
                {
                  question: "Funktionieren Plugins im Chat?",
                  answer:
                    "Mit einem Konto bei Anthropic laufen Skills, Befehle und Connectors auch im Chat. Im Betrieb über Bedrock oder das Gateway lädt Claude Desktop Plugins nur in Cowork und Code.",
                },
                {
                  question: "Wie kommen Updates an?",
                  answer:
                    "Im Gateway mit dem Speichern im Portal. Claude Desktop fragt etwa alle zehn Minuten und beim Öffnen einer neuen Aufgabe nach und holt die neue Fassung selbst.",
                },
                {
                  question: "Kann ich Plugins automatisch für alle installieren?",
                  answer:
                    "Ja. Im Gateway stellen Sie je Plugin „Automatisch installieren“ ein, dann ist es beim nächsten Abgleich bei allen Personen der Bibliothek installiert. Entfernen kann es jede Person selbst. Eine Pflicht-Installation ohne Abschalten bieten Claude Team und Enterprise, das Gateway nicht.",
                },
                {
                  question: "Brauchen Mitarbeiter Admin-Rechte auf dem Rechner?",
                  answer:
                    "Nein. Plugins installiert Claude Desktop im Benutzerprofil. Für lokale Node-Server muss aber Node auf dem Rechner sein, das rollt die IT einmal mit aus.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu Claude Plugins
              </FaqContainer.Headline>
            </FaqContainer>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="naechster-schritt">Nächster Schritt</Typo.H2>
            <Typo.Paragraph>
              Sie wollen, dass Ihr Team mit denselben Abläufen arbeitet, statt
              dass jeder eigene Prompts sammelt? Im Onboarding des Private
              Claude AI Gateway bauen wir mit Ihnen das erste Plugin für ein
              echtes Team: Skills aus Ihren Abläufen, die passenden Connectors,
              ausgeliefert an alle. Wie das abläuft, steht unter{" "}
              <Link href="/managed-claude/onboarding" className={linkClass}>
                KI-Einführung in einer Woche
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              Braucht Ihr Plugin einen eigenen Server für ein internes System,
              entwickeln wir ihn, siehe{" "}
              <Link
                href="/managed-claude/integrationen/plugin-entwicklung"
                className={linkClass}
              >
                Claude Plugin Entwicklung
              </Link>
              . Oder{" "}
              <Link href="/contact" className={linkClass}>
                sprechen Sie uns an
              </Link>
              .
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="kurzfassung">
            Kurzfassung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="was-sind-plugins">
            Was sind Plugins?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="bausteine">
            Skills, Connectors, .mcpb
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="verteilen">
            Plugins verteilen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="gateway">
            So machen wir das im Gateway
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="praxis">
            Vor dem Rollout
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="beispiele">
            Beispiele
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
