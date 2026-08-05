import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import {
  BlogImage,
  Separator,
  BlogLayout,
  BlogHero,
  CodeBlock,
} from "@/components/blog";
import GeoSummary from "@/components/ui/geo-summary";

export const metaCustom: BlogMeta = {
  slug: "claude-code-mcp",
  author: "Max Hänsel",
  date: "2026-08-17",
  image: "/blog/claude-code-mcp/hero.png",
  tags: ["ki", "development"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Claude Code MCP: Server einbinden und im Team betreiben",
  description:
    "MCP-Server in Claude Code einrichten: alle Transporte, die drei Scopes, die Genehmigungsmechanik im Team und die Grenzen bei Token und Timeouts.",
  openGraph: {
    title: "Claude Code MCP: Server einbinden und im Team betreiben",
    description:
      "Von claude mcp add bis zur .mcp.json im Repository: Transporte, Scopes, Team-Genehmigung und die Betriebsgrenzen, an denen MCP-Setups scheitern.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-code-mcp/hero.png",
        width: 1200,
        height: 630,
        alt: "Entwickler von hinten am Schreibtisch, Bildschirm unscharf im Tageslicht",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-code-mcp",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Claude Code und MCP: Server einbinden und im Team betreiben
        </BlogHero.Headline>

        <GeoSummary>
          MCP verbindet Claude Code über einen offenen Standard mit
          Ticketsystemen, Datenbanken und APIs. Eingebunden wird ein Server mit
          einem Befehl, <code>claude mcp add</code>, wahlweise nur für euch, für
          das ganze Projekt über eine <code>.mcp.json</code> im Repository oder
          für alle eure Projekte. Dieser Beitrag zeigt Einrichtung, Scopes,
          Team-Genehmigung und die Betriebsgrenzen.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>12 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-08-17">17. August 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-code-mcp/hero.png"
          alt="Entwickler von hinten am Schreibtisch, Bildschirm unscharf im Tageslicht"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Es gibt einen Moment, an dem man merkt, dass etwas fehlt: Man
              kopiert zum dritten Mal an diesem Vormittag einen Ticket-Text aus
              dem Browser ins Terminal, damit Claude Code weiß, worum es
              überhaupt geht. Genau diese Handgriffe nimmt das Model Context
              Protocol weg. Statt Inhalte hin und her zu kopieren, bekommt
              Claude Code einen direkten Zugang zu dem System, in dem sie
              stehen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Was MCP als Protokoll ist, woher es kommt und wie es sich von
              einer klassischen API oder von RAG unterscheidet, steht in unserem
              Grundlagenbeitrag{" "}
              <Link
                href="/blog/was-ist-mcp-server"
                className="text-primary-600 hover:underline"
              >
                Was ist ein MCP-Server?
              </Link>
              . Dieser Beitrag setzt das voraus und bleibt konsequent bei Claude
              Code: einbinden, richtig einordnen, im Team ausrollen. Der
              Einrichtungsteil ist schnell erzählt. Interessant wird es danach,
              bei den Fragen, an denen MCP-Setups in der Praxis scheitern.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="was-mcp-bringt">
              Was MCP in Claude Code konkret ändert
            </Typo.H2>
            <Typo.Paragraph>
              Ein MCP-Server ist eine Brücke zwischen Claude Code und einem
              anderen System. Er meldet Claude Code, welche Werkzeuge er
              anbietet, und führt sie auf Anfrage aus. Aus Sicht der Arbeit
              heißt das: Claude Code liest ein Jira-Ticket selbst, fragt die
              Datenbank selbst ab und legt den Pull Request selbst an, statt auf
              das zu warten, was ihr ins Fenster einfügt.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-mcp/mcp-architektur.png"
              alt="Claude Code verbindet sich über eine MCP-Schicht mit Ticketsystem, Datenbank und Repository"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Die praktische Faustregel für die Frage, ob sich ein Server lohnt,
              ist erstaunlich einfach und stammt aus Anthropics eigener
              Dokumentation: Bindet einen Server an, sobald ihr merkt, dass ihr
              Daten aus einem anderen Werkzeug in den Chat kopiert. Kopiert ihr
              nichts, braucht ihr auch keinen Server. Diese Regel schützt vor
              dem häufigsten Fehler, nämlich einem Dutzend installierter Server,
              von denen drei je benutzt werden.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Neben Werkzeugen kann ein Server auch Inhalte und fertige Prompts
              bereitstellen. Inhalte referenziert ihr im Chat direkt mit einem
              At-Zeichen, etwa <code>@github:issue://123</code>. Prompts eines
              Servers erscheinen als Slash-Befehle im Format{" "}
              <code>/mcp__servername__promptname</code>, also zum Beispiel{" "}
              <code>/mcp__github__list_prs</code>. Wer im Eingabefeld einen
              Schrägstrich tippt, sieht sie in der Liste der verfügbaren Befehle
              stehen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="transporte">
              Drei Wege, wie ein Server angebunden wird
            </Typo.H2>
            <Typo.Paragraph>
              Bevor ihr den ersten Befehl tippt, lohnt sich eine Minute für die
              Frage, wie der Server überhaupt erreichbar ist. Davon hängt der
              Befehl ab, und später hängt davon auch das Fehlerbild ab, wenn
              etwas klemmt.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-mcp/transporte.png"
              alt="Die drei Transportarten für MCP-Server: stdio als lokaler Prozess, HTTP als Remote-Standard, SSE als älterer Weg"
              width={1200}
              height={630}
            />

            <Typo.H3>Lokal als Prozess: stdio</Typo.H3>
            <Typo.Paragraph>
              Bei einem stdio-Server startet Claude Code das Programm selbst und
              redet über die Standardein- und -ausgabe mit ihm. Für die meisten
              Server, die ihr auf dem eigenen Rechner laufen lasst, ist das der
              richtige Weg. Der doppelte Bindestrich trennt dabei Claudes eigene
              Optionen von dem Kommando, das den Server startet: Alles nach{" "}
              <code>--</code> wird unverändert weitergereicht.
            </Typo.Paragraph>

            <CodeBlock language="bash">
              {`claude mcp add [options] <name> -- <command> [args...]

# Beispiel mit Umgebungsvariable für den Server
claude mcp add --env AIRTABLE_API_KEY=YOUR_KEY --transport stdio airtable \\
  -- npx -y airtable-mcp-server`}
            </CodeBlock>

            <Typo.H3>Remote über HTTP</Typo.H3>
            <Typo.Paragraph>
              Gehostete Server bindet ihr über HTTP ein. Das ist der Weg mit der
              besten Ausstattung, denn nur er unterstützt OAuth als
              Anmeldeverfahren. Wenn ihr eine fertige Konfiguration aus der
              Dokumentation eines Anbieters kopiert und dort{" "}
              <code>streamable-http</code> steht: Das ist derselbe Transport,
              der Name kommt aus der MCP-Spezifikation und wird als Alias
              akzeptiert.
            </Typo.Paragraph>

            <CodeBlock language="bash">
              {`claude mcp add --transport http notion https://mcp.notion.com/mcp

# mit eigenem Header statt OAuth
claude mcp add --transport http secure-api https://api.example.com/mcp \\
  --header "Authorization: Bearer YOUR_TOKEN"`}
            </CodeBlock>

            <Typo.H3>SSE und WebSocket</Typo.H3>
            <Typo.Paragraph>
              SSE ist der ältere Remote-Transport und läuft weiterhin, ihr
              bindet ihn mit <code>--transport sse</code> ein. Für neue Setups
              gibt es keinen Grund mehr dazu, wenn der Anbieter HTTP anbietet.
              WebSocket ist der Sonderfall für Server, die von sich aus
              Ereignisse schicken wollen; er lässt sich nicht über{" "}
              <code>--transport</code> setzen, sondern nur über{" "}
              <code>claude mcp add-json</code> oder direkt in der
              Konfigurationsdatei, und kennt nur Header-Authentifizierung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein Unterschied, der später im Betrieb wichtig wird: Bricht die
              Verbindung zu einem HTTP- oder SSE-Server während einer Sitzung
              ab, verbindet Claude Code sich automatisch neu, bis zu fünf
              Versuche mit wachsendem Abstand ab einer Sekunde. Erst danach gilt
              der Server als ausgefallen. Lokale stdio-Server sind einfach
              Prozesse und werden nicht automatisch neu gestartet.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="scopes">
              Die wichtigste Entscheidung: für wen soll der Server gelten?
            </Typo.H2>
            <Typo.Paragraph>
              Jeder Server wird in einem von drei Geltungsbereichen abgelegt.
              Diese Entscheidung trefft ihr beim Hinzufügen mit{" "}
              <code>--scope</code> oder kurz <code>-s</code>, und sie ist der
              Punkt, an dem später am meisten Verwirrung entsteht, weil sich
              Kollegen wundern, warum bei ihnen ein Server fehlt oder plötzlich
              einer auftaucht.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-mcp/scopes.png"
              alt="Die drei Geltungsbereiche local, project und user mit wachsender Reichweite"
              width={1200}
              height={630}
            />

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Scope</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Gilt für</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Liegt wo</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>local (Standard)</DataTable.Cell>
                  <DataTable.Cell>
                    nur euch, nur im aktuellen Projekt
                  </DataTable.Cell>
                  <DataTable.Cell>
                    eure persönliche Konfiguration
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>project</DataTable.Cell>
                  <DataTable.Cell>
                    alle im Projekt, über die Versionskontrolle geteilt
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <code>.mcp.json</code> im Projekt-Root
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>user</DataTable.Cell>
                  <DataTable.Cell>
                    euch, aber in allen euren Projekten
                  </DataTable.Cell>
                  <DataTable.Cell>
                    eure nutzerweite Konfiguration
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <CodeBlock language="bash">
              {`# nur für mich, nur hier (Standard, --scope kann entfallen)
claude mcp add --transport http stripe --scope local https://mcp.stripe.com

# für das ganze Team, landet in der .mcp.json
claude mcp add --transport http paypal --scope project https://mcp.paypal.com/mcp

# für mich, aber in jedem Projekt
claude mcp add --transport http hubspot --scope user https://mcp.hubspot.com/anthropic`}
            </CodeBlock>

            <Typo.Paragraph>
              Die brauchbare Heuristik dahinter: Alles, was zum Projekt gehört
              und für jeden im Team gleich aussieht, gehört nach{" "}
              <code>project</code>. Alles, was an eurer Person hängt, etwa ein
              persönlicher Notiz- oder Kalenderzugang, gehört nach{" "}
              <code>user</code>. Und <code>local</code> ist der richtige Ort zum
              Ausprobieren, solange ihr noch nicht wisst, ob ein Server bleibt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="team">
              Der Teil, den kaum jemand erklärt: Rollout im Team
            </Typo.H2>
            <Typo.Paragraph>
              Eine <code>.mcp.json</code> ins Repository zu legen, ist der
              offensichtliche Weg, allen dieselben Werkzeuge zu geben. Nur
              startet der Server bei den Kollegen erst einmal nicht, und das ist
              kein Fehler, sondern Absicht. Claude Code fragt aus
              Sicherheitsgründen nach einer Genehmigung, bevor es einen
              projektweiten Server benutzt. Sonst wäre eine eingecheckte Datei
              ein bequemer Weg, fremden Code auf fremden Rechnern zu starten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Sichtbar wird das an den Statusanzeigen: In{" "}
              <code>claude mcp list</code> und <code>claude mcp get</code>{" "}
              erscheinen wartende Server als „Genehmigung ausstehend", abgelehnte
              als „Abgelehnt". Wer sich vertan hat, setzt seine Entscheidungen
              für das Projekt zurück.
            </Typo.Paragraph>

            <CodeBlock language="bash">
              {`claude mcp list          # was ist konfiguriert, was wartet auf Freigabe
claude mcp get github    # Details zu einem Server, inklusive OAuth-Status
claude mcp remove github # wieder entfernen

claude mcp reset-project-choices   # Genehmigungen für dieses Projekt zurücksetzen`}
            </CodeBlock>

            <Typo.Paragraph>
              Dahinter liegt eine Mechanik, die im Alltag für Ratlosigkeit
              sorgt. Seit Version 2.1.196 liest Claude Code Genehmigungen nur
              noch aus Einstellungsdateien, die <em>nicht</em> im Repository
              liegen, solange ihr dem Arbeitsbereich nicht ausdrücklich vertraut
              habt. Das Vertrauen erteilt ihr, indem ihr <code>claude</code> in
              dem Ordner interaktiv startet und den Dialog bestätigt.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-mcp/kontext-budget.png"
              alt="Token-Budget einer MCP-Antwort mit Warnschwelle und Kappungsgrenze"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Die praktische Folge klingt paradox, ist aber genau der Sinn der
              Sache: Ein frisch geklontes Repository kann seine eigenen Server
              nicht selbst genehmigen. Einstellungen wie{" "}
              <code>enableAllProjectMcpServers</code> oder{" "}
              <code>enabledMcpjsonServers</code>, die ihr in die eingecheckte{" "}
              <code>.claude/settings.json</code> schreibt, werden in einem noch
              nicht vertrauenswürdigen Ordner ignoriert. Der Server bleibt dann
              hartnäckig auf „Genehmigung ausstehend" stehen, und man sucht den
              Fehler an der falschen Stelle.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für ein Onboarding heißt das schlicht: Nach dem Klonen einmal{" "}
              <code>claude</code> im Projektordner starten, den Vertrauensdialog
              bestätigen, die Server freigeben. Wer diesen Schritt in die
              README schreibt, spart sich die immer gleiche Rückfrage.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zwei Kleinigkeiten, die beim Teilen ebenfalls auffallen: Einige
              Servernamen sind für Claude Codes eingebaute Server reserviert,
              darunter <code>workspace</code> und <code>computer-use</code>. Und
              wenn ein Server aus einem Plugin stammt, trägt sein Werkzeug den
              vollen Namen{" "}
              <code>mcp__plugin_&lt;plugin&gt;_&lt;server&gt;__&lt;tool&gt;</code>
              . Wer eine Berechtigungsregel oder einen Hook nur gegen den bloßen
              Server-Schlüssel schreibt, wundert sich sonst, warum sie nie
              greift.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="grenzen">
              Die Grenzen, an denen MCP-Setups tatsächlich scheitern
            </Typo.H2>
            <Typo.Paragraph>
              Bis hierher ist alles Konfiguration. Die Probleme, die im Betrieb
              wirklich weh tun, stehen dagegen selten in Tutorials, weil sie
              erst auftreten, wenn ein Setup ein paar Wochen läuft.
            </Typo.Paragraph>

            <Typo.H3>Antworten sind größer, als man denkt</Typo.H3>
            <Typo.Paragraph>
              Ein MCP-Werkzeug, das eine Datenbank abfragt oder ein
              Monitoring-Dashboard ausliest, liefert schnell sehr viel Text
              zurück, und dieser Text landet vollständig im Kontext. Claude Code
              warnt deshalb, sobald die Ausgabe eines Werkzeugs 10.000 Token
              überschreitet, und kappt sie standardmäßig bei 25.000 Token. Die
              Warnschwelle ist fest verdrahtet, die Kappungsgrenze lässt sich
              über die Umgebungsvariable <code>MAX_MCP_OUTPUT_TOKENS</code>{" "}
              anheben.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das Limit anzuheben, ist allerdings selten die richtige Antwort.
              Wer regelmäßig gegen die Grenze läuft, hat meist ein Werkzeug, das
              zu breit abfragt. Ein Filter auf der Serverseite ist billiger als
              ein größeres Kontextfenster, in jeder Hinsicht.
            </Typo.Paragraph>

            <Typo.H3>Timeouts sind zwei, nicht einer</Typo.H3>
            <Typo.Paragraph>
              Für langsame Werkzeuge könnt ihr je Server ein{" "}
              <code>timeout</code> in Millisekunden setzen, das die
              Umgebungsvariable <code>MCP_TOOL_TIMEOUT</code> für genau diesen
              Server überschreibt. Das ist eine harte Grenze pro Werkzeugaufruf,
              Fortschrittsmeldungen des Servers verlängern sie nicht. Werte
              unter 1000 werden ignoriert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der zweite Timer ist der, den man übersieht. Bei HTTP- und
              SSE-Servern läuft zusätzlich eine Uhr pro Anfrage, die nur das
              erste Antwortbyte abwartet, und die steht auf 60 Sekunden, solange
              ihr nichts anderes setzt. Ein Server, der eine Minute nachdenkt,
              bevor er überhaupt anfängt zu antworten, fällt also raus, obwohl
              das großzügige Werkzeug-Timeout noch lange nicht erreicht ist. Ihr
              hebt ihn an, indem ihr <code>timeout</code> oder{" "}
              <code>MCP_TOOL_TIMEOUT</code> auf einen Wert von 60 Sekunden oder
              mehr setzt. Lokale stdio-Server haben diesen zweiten Timer nicht.
            </Typo.Paragraph>

            <Typo.H3>Vertrauen ist keine Formalie</Typo.H3>
            <Typo.Paragraph>
              Anthropic selbst formuliert es deutlich: Prüft, ob ihr einem
              Server vertraut, bevor ihr ihn verbindet. Server, die externe
              Inhalte holen, können euch dem Risiko von Prompt-Injection
              aussetzen, weil der geholte Inhalt im selben Kontext landet wie
              eure Anweisungen. Ein Ticket-Kommentar von außen ist damit
              potenziell eine Anweisung an das Modell.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für ein mittelständisches Team heißt das nicht „Finger weg", aber
              es heißt: nur Server aus Quellen, die ihr benennen könnt,
              möglichst aus dem geprüften Verzeichnis von Anthropic, und für
              jeden Server die Frage beantworten, welche Daten er sehen kann.
              Wie wir diese Abwägung generell führen, steht in unserem Beitrag
              zu{" "}
              <Link
                href="/blog/ki-datenschutz"
                className="text-primary-600 hover:underline"
              >
                KI und Datenschutz
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="einstieg">Ein pragmatischer Einstieg</Typo.H2>
            <Typo.Paragraph>
              Wenn ihr heute anfangt, ist die kürzeste sinnvolle Route diese:
              Nehmt genau ein System, aus dem ihr regelmäßig kopiert. Bindet es
              mit <code>local</code> ein, arbeitet eine Woche damit und schaut,
              ob ihr es wirklich benutzt. Erst wenn die Antwort ja lautet,
              schiebt ihr es mit <code>--scope project</code> ins Repository und
              schreibt den Vertrauensdialog ins Onboarding.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Umgekehrt lohnt es sich, einmal im Quartal <code>/mcp</code> zu
              öffnen und zu schauen, welche Server eigentlich noch benutzt
              werden. Jeder verbundene Server bringt Werkzeugbeschreibungen mit,
              und ein Setup, das aus zwanzig Servern besteht, macht die Arbeit
              nicht schneller, sondern unübersichtlicher. Aufräumen ist hier
              eine echte Optimierung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Falls ihr noch gar nicht so weit seid: Die Installation und den
              ersten Login beschreibt{" "}
              <Link
                href="/blog/claude-code-installieren"
                className="text-primary-600 hover:underline"
              >
                Claude Code installieren
              </Link>
              . Und wer die Anbindung eigener Systeme nicht als Entwicklerthema,
              sondern als Prozessfrage betrachtet, findet den größeren Rahmen im{" "}
              <Link
                href="/blog/prozessautomatisierung-guide"
                className="text-primary-600 hover:underline"
              >
                Leitfaden zur Prozessautomatisierung
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit</Typo.H2>
            <Typo.Paragraph>
              MCP in Claude Code einzurichten ist eine Sache von Minuten, und
              genau deshalb wird der schwierigere Teil oft übersprungen. Der
              Befehl <code>claude mcp add</code> ist schnell getippt; die
              Entscheidung, ob ein Server nur euch, dem Projekt oder allen euren
              Projekten gehört, trägt dagegen über Monate. Wer sie bewusst
              trifft, die Genehmigungsmechanik im Team einmal erklärt und die
              Grenzen bei Ausgabegröße und Timeouts kennt, hat ein Setup, das
              auch nach einem halben Jahr noch verständlich ist.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Und wenn ihr überlegt, ob und wie sich eure eigenen Systeme sinnvoll
              anbinden lassen,{" "}
              <Link href="/contact">sprecht uns gern an</Link>. Wir schauen uns
              an, wo bei euch tatsächlich kopiert wird, und das ist meist die
              ehrlichste Anforderungsliste.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="faq">
            <FaqContainer
              faqs={[
                {
                  question: "Wie binde ich einen MCP-Server in Claude Code ein?",
                  answer:
                    "Mit dem Befehl claude mcp add. Für einen lokalen Server lautet die Form 'claude mcp add <name> -- <kommando>', für einen gehosteten Server 'claude mcp add --transport http <name> <url>'. Alles nach dem doppelten Bindestrich wird unverändert an den Server übergeben. Mit /mcp seht ihr im Chat, welche Server verbunden sind und wie viele Werkzeuge sie mitbringen.",
                },
                {
                  question:
                    "Was ist der Unterschied zwischen local, project und user?",
                  answer:
                    "Das sind die drei Geltungsbereiche. local ist der Standard und gilt nur für euch im aktuellen Projekt. project legt die Konfiguration in einer .mcp.json im Projekt-Root ab, die in die Versionskontrolle gehört und damit für das ganze Team gilt. user gilt für euch, aber in allen euren Projekten. Gesetzt wird der Bereich mit --scope oder kurz -s.",
                },
                {
                  question:
                    "Warum startet der MCP-Server aus der .mcp.json bei meinen Kollegen nicht?",
                  answer:
                    "Weil Claude Code aus Sicherheitsgründen eine Genehmigung verlangt, bevor es projektweite Server benutzt. Seit Version 2.1.196 werden Genehmigungen zudem nur aus nicht eingecheckten Einstellungsdateien gelesen, solange dem Arbeitsbereich nicht vertraut wurde. Ein frisch geklontes Repository kann seine eigenen Server deshalb nicht selbst genehmigen. Abhilfe: einmal claude im Projektordner interaktiv starten und den Vertrauensdialog bestätigen.",
                },
                {
                  question: "Welchen Transport soll ich wählen?",
                  answer:
                    "Für Server, die auf dem eigenen Rechner laufen, stdio. Für gehostete Server HTTP, weil nur dieser Transport OAuth unterstützt. SSE funktioniert weiterhin, ist aber der ältere Weg und für neue Setups nicht nötig. WebSocket ist der Sonderfall für Server, die von sich aus Ereignisse schicken, und lässt sich nur über claude mcp add-json oder direkt in der Konfigurationsdatei setzen.",
                },
                {
                  question: "Wie groß darf die Antwort eines MCP-Werkzeugs sein?",
                  answer:
                    "Claude Code warnt ab 10.000 Token Ausgabe und kappt standardmäßig bei 25.000 Token. Die Warnschwelle ist fest, die Kappungsgrenze lässt sich über die Umgebungsvariable MAX_MCP_OUTPUT_TOKENS anheben. Meist ist es aber sinnvoller, die Abfrage auf der Serverseite enger zu fassen, statt das Limit zu erhöhen.",
                },
                {
                  question:
                    "Mein MCP-Werkzeug läuft in einen Timeout, obwohl ich das Limit erhöht habe. Warum?",
                  answer:
                    "Weil es zwei Timer gibt. Das timeout je Server begrenzt den gesamten Werkzeugaufruf. Bei HTTP- und SSE-Servern läuft zusätzlich eine Uhr pro Anfrage, die nur auf das erste Antwortbyte wartet und ohne eigene Einstellung bei 60 Sekunden steht. Setzt timeout oder MCP_TOOL_TIMEOUT auf 60 Sekunden oder mehr, dann steigt auch dieser zweite Timer. Lokale stdio-Server haben ihn nicht.",
                },
                {
                  question: "Wie sicher sind MCP-Server?",
                  answer:
                    "Ein MCP-Server bekommt Zugriff auf das System, das er anbindet, deshalb ist die Auswahl eine Vertrauensfrage. Anthropic warnt ausdrücklich davor, dass Server, die externe Inhalte abrufen, dem Risiko von Prompt-Injection aussetzen können: Der geholte Inhalt landet im selben Kontext wie eure Anweisungen. Praktisch heißt das, nur Server aus benennbaren Quellen einzusetzen, bevorzugt aus dem geprüften Verzeichnis von Anthropic, und je Server zu klären, welche Daten er sehen kann.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu MCP in Claude Code
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="was-mcp-bringt">
            Was MCP ändert
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="transporte">
            Die drei Transporte
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="scopes">
            local, project, user
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="team">
            Rollout im Team
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="grenzen">
            Token und Timeouts
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="einstieg">
            Pragmatischer Einstieg
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
