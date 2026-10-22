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

const VIDEO = "https://www.youtube.com/watch?v=jdbOVepEtUE";

export const metaCustom: BlogMeta = {
  slug: "claude-code-tutorial",
  author: "Max Hänsel",
  date: "2026-10-22",
  image: "/blog/claude-code-tutorial/hero.png",
  tags: ["ki", "development"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Claude Code Tutorial auf Deutsch: Einstieg ohne Programmieren",
  description:
    "Claude Code lernen ohne Programmierkenntnisse: sechs Schritte von CLAUDE.md über Rechte und Skills bis zu Routinen, aus einem 6-Stunden-Kurs destilliert.",
  openGraph: {
    title: "Claude Code Tutorial auf Deutsch: Einstieg ohne Programmieren",
    description:
      "Wir haben einen sechsstündigen Kurs für Nicht-Programmierer samt 100 Top-Kommentaren ausgewertet. Das Ergebnis: sechs Schritte, und der wichtigste hat nichts mit Technik zu tun.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-code-tutorial/hero.png",
        width: 1200,
        height: 630,
        alt: "Schreibtisch von oben mit aufgeklapptem Laptop, Notizbuch mit Skizzen, Kaffeetasse und Smartphone",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-code-tutorial",
  },
};

function VideoLink({ t, children }: { t: string; children: React.ReactNode }) {
  return (
    <Link
      href={`${VIDEO}&${t}`}
      className="text-primary-600 hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Claude Code Tutorial auf Deutsch: der Einstieg für
          Nicht-Programmierer
        </BlogHero.Headline>

        <GeoSummary>
          Dieses Claude Code Tutorial auf Deutsch richtet sich an alle, die
          nicht programmieren und Claude Code trotzdem für ihre Arbeit nutzen
          wollen. Es führt in sechs Schritten vom ersten Projektordner zur
          ersten Automation: CLAUDE.md als Einarbeitung, Rechte als harte
          Grenze, gezielt angebundene Werkzeuge, Skills für wiederkehrende
          Abläufe, saubere Sitzungen gegen leere Limits und zuletzt Sub-Agents
          und Routinen. Grundlage ist die Auswertung eines sechsstündigen
          Kurses mit rund 310.000 Aufrufen und seiner 100 meistgelikten
          Kommentare, abgeglichen mit der Dokumentation von Anthropic (Stand
          Oktober 2026).
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>18 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-10-22">22. Oktober 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-code-tutorial/hero.png"
          alt="Schreibtisch von oben im Morgenlicht: aufgeklappter Laptop, ein Notizbuch mit Skizzen, eine Hand daneben, Kaffeetasse, Smartphone und ein kleiner Stapel Unterlagen"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div id="kurs">
            <Typo.Paragraph>
              Im Juli 2026 hat Nate Herk, Betreiber des YouTube-Kanals AI
              Automation, einen Kurs mit dem Titel{" "}
              <Link
                href={VIDEO}
                className="text-primary-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                „Claude Code for Non-Coders“
              </Link>{" "}
              veröffentlicht. Er dauert knapp sechs Stunden und hatte im
              Oktober rund 310.000 Aufrufe. Wir haben das komplette Transkript
              und die 100 meistgelikten Kommentare ausgewertet, weil die Frage
              dahinter in fast jedem unserer Kundengespräche auftaucht: Was
              bringt Claude Code Menschen, die nicht programmieren?
            </Typo.Paragraph>

            <Typo.Paragraph>
              Zwei Befunde haben uns überrascht. Erstens scheitern Einsteiger
              selten am Terminal. Sie scheitern daran, dass sie dem Werkzeug
              keinen Kontext geben, ihm zu viele Rechte lassen und ihr
              Kontingent verbrauchen, bevor sich der Nutzen zeigt. Zweitens
              sind sechs Stunden für viele zu viel. Ein Zuschauer schreibt, der
              Kurs sei{" "}
              <VideoLink t="lc=UgxY6kIRKJXOLKo4oIR4AaABAg">
                „from beginner to intermediate very quickly“
              </VideoLink>{" "}
              gegangen und habe ihn unterwegs verloren.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Dieses Tutorial ist deshalb die kurze Fassung: sechs Schritte in
              der Reihenfolge, in der sie aufeinander aufbauen. Zu jedem
              Schritt steht, was der Kurs empfiehlt, was die Dokumentation von
              Anthropic dazu sagt und was in einem Unternehmen zusätzlich gilt.
              Die Installation setzen wir voraus, sie steht in{" "}
              <Link
                href="/blog/claude-code-installieren"
                className="text-primary-600 hover:underline"
              >
                Claude Code installieren
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="grundlagen">
            <Typo.H2>
              Claude Code für Anfänger: was das Werkzeug eigentlich tut
            </Typo.H2>

            <Typo.Paragraph>
              Claude Code ist ein KI-Agent, der in einem Ordner auf Ihrem
              Rechner arbeitet. Anders als im Chatfenster liest er dort
              Dateien, legt neue an, führt Befehle aus und spricht über
              angebundene Werkzeuge mit Ihren Programmen. Sie beschreiben, was
              herauskommen soll, Claude erledigt die Schritte dorthin. Die
              ausführliche Erklärung steht in{" "}
              <Link
                href="/blog/was-ist-claude-code"
                className="text-primary-600 hover:underline"
              >
                Was ist Claude Code
              </Link>
              .
            </Typo.Paragraph>

            <Typo.Paragraph>
              Der Name führt Nicht-Programmierer in die Irre. Code ist hier das
              Mittel, nicht das Ergebnis. Im Kurs entstehen damit ein tägliches
              Briefing aus dem Posteingang, ein „Second Brain“ aus
              Textdateien, eine Landingpage und mehrere geplante Automationen.
              Wer Berichte schreibt, Daten aufbereitet oder wiederkehrende
              Abläufe hat, kann damit arbeiten.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Ein Terminal ist dafür nicht mehr zwingend. Claude Code läuft
              auch im Code-Tab der Claude-Desktop-App mit grafischer Oberfläche
              und im Browser unter claude.ai/code. Einige Dinge bleiben
              trotzdem Dateien, etwa die Einarbeitung und die Rechte. Um genau
              diese Dateien geht es in den nächsten Abschnitten.
            </Typo.Paragraph>

            <Typo.H3>Claude Code, Cowork oder Chat?</Typo.H3>

            <Typo.Paragraph>
              Ein Kommentar unter dem Kurs trifft einen wichtigen Punkt: Für
              viele Nicht-Entwickler bringe Cowork mit seinen{" "}
              <VideoLink t="lc=UgwRITeBU4ACDjSnoLd4AaABAg">Leitplanken</VideoLink>{" "}
              mehr als Claude Code. Anthropic selbst beschreibt Cowork als
              Modus für Wissensarbeit an Dateien und Werkzeugen und Claude Code
              als Werkzeug, das für Softwareentwicklung gebaut ist. Die Wahl
              hängt davon ab, wie viel Sie selbst einrichten wollen.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Werkzeug</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Arbeitet mit</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Passt, wenn Sie</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>Claude (Chat)</DataTable.Cell>
                  <DataTable.Cell>
                    Text und hochgeladenen Dateien im Chatfenster
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Fragen klären oder einen Entwurf brauchen
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Cowork</DataTable.Cell>
                  <DataTable.Cell>
                    lokalen Dateien und Werkzeugen in der Desktop-App, mit
                    festen Leitplanken
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Recherchen, Dokumente und Analysen ohne Einrichtungsaufwand
                    erledigen wollen
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Claude Code</DataTable.Cell>
                  <DataTable.Cell>
                    einem Projektordner, Befehlen und Werkzeugen, die Sie
                    selbst konfigurieren
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Abläufe wiederholbar machen und Rechte selbst festlegen
                    wollen
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Claude Code ist in allen bezahlten Plänen enthalten, ab Claude
              Pro für 20 Dollar im Monat. Die Pläne im Vergleich stehen in{" "}
              <Link
                href="/blog/claude-code-kosten"
                className="text-primary-600 hover:underline"
              >
                Claude Code Kosten
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>Claude Code lernen in sechs Schritten</Typo.H3>

            <Typo.Paragraph>
              Der Kurs springt zwischen Themen hin und her. Für den Einstieg
              hat sich bei uns diese Reihenfolge bewährt, weil jeder Schritt
              auf dem vorigen aufbaut:
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-tutorial/bausteine.png"
              alt="Sechs Schritte von links nach rechts: Projektordner und CLAUDE.md, Rechte, Werkzeuge, Skills, Kontext und Limits, Sub-Agents und Routinen"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Der Gedanke dahinter ist der wichtigste Satz des Kurses für
              Einsteiger:{" "}
              <VideoLink t="t=1793s">
                „You are just a manager. You’re managing AI agents.“
              </VideoLink>{" "}
              Sie programmieren nicht. Sie arbeiten jemanden ein, legen fest,
              was er darf, und prüfen seine Arbeit.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="claude-md">
            <Typo.H2>Schritt 1: Projektordner und CLAUDE.md</Typo.H2>

            <Typo.Paragraph>
              Der häufigste Fehler ist der leere Chat. Der Kursautor bringt es
              auf den Punkt: Wenn alle{" "}
              <VideoLink t="t=1023s">dasselbe Modell</VideoLink> nutzen und
              dasselbe fragen, sieht auch das Ergebnis bei allen gleich aus.
              Gute Ergebnisse entstehen aus Kontext, also aus Ihren Unterlagen,
              Ihren Beispielen und Ihren Regeln.
            </Typo.Paragraph>

            <Typo.Paragraph>
              In Claude Code liegt dieser Kontext in Dateien. Sie legen für
              jedes Thema einen Projektordner an, etwa „Vertrieb“ oder
              „Monatsbericht“, und starten Claude Code darin. Die zentrale
              Datei ist die CLAUDE.md. Claude liest sie zu Beginn jeder Sitzung
              automatisch, so wie ein neuer Kollege am ersten Tag die
              Einarbeitungsmappe. Der Befehl <code>/init</code> legt eine erste
              Fassung an. Claude lädt drei Ebenen zusammen:
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <code>~/.claude/CLAUDE.md</code>: Ihre persönlichen Regeln für
                alle Projekte, etwa Tonalität oder Formulierungen, die nie
                vorkommen sollen.
              </Typo.ListItem>
              <Typo.ListItem>
                <code>CLAUDE.md</code> im Projektordner: alles zu diesem
                Projekt, das auch für Kollegen gilt.
              </Typo.ListItem>
              <Typo.ListItem>
                <code>CLAUDE.local.md</code> im Projektordner: persönliche
                Notizen zum Projekt, die nicht geteilt werden.
              </Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              Der Kurs empfiehlt, die CLAUDE.md als Wegweiser zu schreiben und
              nicht als Ablage. Sie sagt, wo welches Wissen liegt, statt alles
              selbst zu enthalten. Das hält sie kurz, und kurz ist wichtig,
              weil sie in jeder Sitzung Platz im Kontext belegt. Ein Beispiel
              für einen Vertriebsordner:
            </Typo.Paragraph>

            <CodeBlock language="markdown" fileName="CLAUDE.md">{`# Vertrieb

## Worum es geht
Wir verkaufen Wartungsverträge an Maschinenbauer
mit 50 bis 500 Mitarbeitenden.

## Wo was liegt
- kunden/: ein Ordner pro Kunde mit Gesprächsnotizen
- vorlagen/angebot.md: Aufbau unserer Angebote
- beispiele/gut/ und beispiele/schlecht/: Mails zur Orientierung

## Regeln
- Schreib auf Deutsch, per Sie, ohne Marketing-Floskeln.
- Erfinde keine Preise. Preise stehen nur in preise.md.
- Bevor du etwas versendest oder löschst, frag nach.`}</CodeBlock>

            <Typo.Paragraph>
              Die letzte Regel ist sinnvoll, aber sie ist keine Sicherung.
              Warum, steht im nächsten Schritt.
            </Typo.Paragraph>

            <Typo.H3>Korrekturen einmal geben, nicht jedes Mal</Typo.H3>

            <Typo.Paragraph>
              Zwei Gewohnheiten aus dem Kurs machen die Datei mit der Zeit
              besser. Jede Korrektur, die Sie Claude geben, gehört als Regel in
              die CLAUDE.md, damit Sie sie nur einmal geben müssen. Der
              Kursautor führt dafür eine globale Liste von KI-Floskeln, die in
              seinen Texten nie auftauchen dürfen. Und lassen Sie Claude seine
              Arbeit belegen:{" "}
              <VideoLink t="t=2427s">„Make the AI prove its work.“</VideoLink>{" "}
              Im Alltag heißt das, Claude nennt zu jeder Zahl die Quelle und
              sagt zu jedem Ergebnis, wie es geprüft wurde.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Zusätzlich führt Claude Code ein eigenes Gedächtnis. Diese
              automatische Merkfunktion ist standardmäßig an, Claude legt darin
              selbst Notizen zu Ihrem Projekt ab. Mit <code>/memory</code>{" "}
              sehen Sie diese Notizen und die geladenen CLAUDE.md-Dateien und
              können die Funktion abschalten.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="rechte">
            <Typo.H2>Schritt 2: Rechte festlegen, bevor etwas schiefgeht</Typo.H2>

            <Typo.Paragraph>
              Dieser Schritt fehlt in den meisten Anleitungen für Einsteiger,
              und für Unternehmen ist er der wichtigste. Der Kursautor erzählt
              von einem Vorfall im eigenen Haus: Ein Agent hat versehentlich{" "}
              <VideoLink t="t=4237s">
                eine Mail an rund 150.000 Empfänger
              </VideoLink>{" "}
              geschickt, mit einem Rabattcode, der nie rausgehen sollte. Dazu
              kommen Beispiele von gelöschten Datenbanken und von vergessenen
              Automationen, die in öffentliche Kanäle posten.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Die Lehre daraus: Eine Anweisung im Prompt ist keine
              Berechtigung. „Schick nichts ohne Freigabe“ ist ein Wunsch, den
              das Modell fast immer befolgt. Fast immer reicht aber nicht, wenn
              150.000 Kunden am anderen Ende stehen. Eine harte Grenze entsteht
              erst, wenn das Werkzeug zum Senden gar nicht freigegeben ist.
              Dann kann der Agent nicht senden, egal wie er die Anweisung
              versteht.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-tutorial/rechte.png"
              alt="Entscheidungsdiagramm: Liegt die Grenze nur im Prompt, ist das Senden-Werkzeug freigegeben und die Mail kann trotzdem rausgehen; liegt sie im Werkzeug, ist nur das Entwurf-Werkzeug freigegeben und Senden ist unmöglich"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Der Kurs vergleicht das mit einer{" "}
              <VideoLink t="t=4386s">Firmenkreditkarte</VideoLink>: Niemand
              gibt einem neuen Mitarbeiter eine Karte ohne Limit und bittet
              ihn, nichts auszugeben. Für Claude Code heißt das zweierlei.
            </Typo.Paragraph>

            <Typo.H3>Den passenden Modus wählen</Typo.H3>

            <Typo.Paragraph>
              In aktuellen Versionen startet Claude Code im Auto-Modus: Ein
              zweites Modell prüft jede Aktion, bevor sie läuft, und blockt
              alles, was über Ihren Auftrag hinausgeht. Das spart Rückfragen,
              ist laut Anthropic aber ausdrücklich keine Garantie. Mit
              Shift+Tab wechseln Sie den Modus:
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Modus</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Was Claude darf</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Wann sinnvoll</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>default (manuell)</DataTable.Cell>
                  <DataTable.Cell>
                    fragt vor jeder Änderung und jedem Befehl
                  </DataTable.Cell>
                  <DataTable.Cell>
                    die ersten Tage, um zu sehen, was Claude vorhat
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>acceptEdits</DataTable.Cell>
                  <DataTable.Cell>
                    legt Dateien im Projektordner ohne Rückfrage an und ändert
                    sie, fragt bei den meisten Befehlen
                  </DataTable.Cell>
                  <DataTable.Cell>
                    eingespielte Arbeit an Texten und Tabellen
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>plan</DataTable.Cell>
                  <DataTable.Cell>
                    liest und plant nur, ändert nichts, bis Sie den Plan
                    freigeben
                  </DataTable.Cell>
                  <DataTable.Cell>
                    größere Vorhaben, siehe{" "}
                    <Link
                      href="/blog/claude-code-plan-mode"
                      className="text-primary-600 hover:underline"
                    >
                      Plan Mode
                    </Link>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>auto</DataTable.Cell>
                  <DataTable.Cell>
                    handelt ohne Rückfrage, ein Prüfmodell blockt riskante
                    Aktionen
                  </DataTable.Cell>
                  <DataTable.Cell>
                    wenn die Verbotsregeln stehen
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>bypassPermissions</DataTable.Cell>
                  <DataTable.Cell>führt alles ohne Prüfung aus</DataTable.Cell>
                  <DataTable.Cell>
                    nur in abgeschotteten Testumgebungen
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Den letzten Modus nennt auch der Kurs{" "}
              <VideoLink t="t=10918s">gefährlich</VideoLink>. Anthropic
              empfiehlt ihn nur für isolierte Umgebungen wie Container ohne
              Internetzugang, weil er nicht gegen versteckte Anweisungen in
              gelesenen Inhalten schützt.
            </Typo.Paragraph>

            <Typo.H3>Verbotsregeln, die in jedem Modus gelten</Typo.H3>

            <Typo.Paragraph>
              Wichtiger als der Modus sind feste Regeln in der Datei{" "}
              <code>.claude/settings.json</code> im Projektordner. Was dort
              unter <code>deny</code> steht, ist gesperrt, auch im
              freizügigsten Modus. Ein Beispiel, das die Zugangsdaten schützt
              und das Hochladen von Änderungen verhindert:
            </Typo.Paragraph>

            <CodeBlock language="json" fileName=".claude/settings.json">{`{
  "permissions": {
    "deny": [
      "Read(./.env)",
      "Bash(git push *)"
    ]
  }
}`}</CodeBlock>

            <Typo.Paragraph>
              Mit <code>/permissions</code> sehen und ändern Sie diese Regeln,
              ohne die Datei selbst zu öffnen. Wer noch strenger sein will,
              lässt über sogenannte Hooks jeden Werkzeugaufruf vorab prüfen und
              gezielt blockieren. Für den Einstieg ist das meist zu viel, aber
              es zeigt die Richtung: Sicherheit kommt aus Regeln, nicht aus
              Bitten.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Dasselbe Prinzip gilt für Zugänge zu anderen Diensten. Legen Sie
              API-Schlüssel mit möglichst engen Rechten an, mit einem
              sprechenden Namen und, wo der Anbieter es erlaubt, mit einer
              Budgetgrenze. Ein Schlüssel, der nur Entwürfe anlegen kann, kann
              auch im schlimmsten Fall nichts versenden.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="werkzeuge">
            <Typo.H2>Schritt 3: Werkzeuge anbinden, Daten schützen</Typo.H2>

            <Typo.Paragraph>
              Richtig nützlich wird Claude Code, wenn es mit Ihren Programmen
              spricht: Mail, Kalender, Ablage, CRM. Welche das sein sollten,
              verrät laut Kurs ein Blick auf die offenen Browser-Tabs und
              Lesezeichen. Was Sie täglich öffnen, um Informationen von einem
              Programm ins andere zu kopieren, ist der erste Kandidat.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Angebunden wird meist über MCP-Server, eine Art Steckdose für
              Werkzeuge. Sie richten einen Server mit{" "}
              <code>claude mcp add</code> ein, und <code>/mcp</code> zeigt in
              der Sitzung, was verbunden ist. Wie das im Team funktioniert,
              steht in{" "}
              <Link
                href="/blog/claude-code-mcp"
                className="text-primary-600 hover:underline"
              >
                Claude Code und MCP
              </Link>
              . Die Werkzeugbeschreibungen lädt Claude Code inzwischen erst,
              wenn ein Werkzeug gebraucht wird. Viele Verbindungen kosten
              deshalb weniger Kontext als früher. Jede Verbindung bleibt aber
              ein Zugang, den Sie im Blick behalten müssen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Der Kurs rät, Zugangsdaten in einer <code>.env</code>-Datei im
              Projekt abzulegen statt in den Connectors einer bestimmten App.
              Das Argument: Wer 20 bis 40 Werkzeuge an eine App gebunden hat,
              richtet beim Wechsel alles neu ein. Das stimmt, hat aber eine
              Kehrseite. Die Datei enthält dann alle Schlüssel im Klartext. Sie
              gehört deshalb in die Verbotsregeln aus Schritt 2 und nie in
              einen geteilten Ordner.
            </Typo.Paragraph>

            <Typo.H3>Welche Daten dürfen hinein?</Typo.H3>

            <Typo.Paragraph>
              An diesem Punkt wird der Kurs vorsichtig, und zu Recht. Der
              Kursautor warnt ausdrücklich davor,{" "}
              <VideoLink t="t=4766s">
                Firmendokumente und Verträge
              </VideoLink>{" "}
              in KI-Werkzeuge zu laden, wenn das Unternehmen es nicht erlaubt.
              Einige seiner eigenen Kunden untersagen Anthropic ganz.
              Entscheidend ist, unter welchem Vertrag Sie arbeiten. Laut
              Anthropic gilt:
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <strong>Private Pläne (Free, Pro, Max),</strong> auch bei
                Nutzung von Claude Code: Ob mit Ihren Daten trainiert wird,
                entscheiden Sie in den Einstellungen. Erlauben Sie es, bewahrt
                Anthropic die Daten bis zu fünf Jahre auf, sonst 30 Tage.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Geschäftliche Verträge (Team, Enterprise, API):</strong>{" "}
                kein Training mit Ihren Daten, Standard-Aufbewahrung 30 Tage,
                für berechtigte Konten auch ganz ohne Speicherung.
              </Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              Für Firmendaten heißt das: nicht über ein privates Pro-Abo. Was
              eine DSGVO-konforme Einrichtung darüber hinaus braucht, etwa
              Auftragsverarbeitung und Datenhaltung in der EU, beschreiben wir
              unter{" "}
              <Link
                href="/managed-claude/datenschutz"
                className="text-primary-600 hover:underline"
              >
                Claude Datenschutz
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="skills">
            <Typo.H2>Schritt 4: Wiederkehrende Abläufe als Skills</Typo.H2>

            <Typo.Paragraph>
              Ein Skill ist ein Rezept: eine Anleitung für einen Ablauf, den
              Claude immer gleich erledigen soll. Technisch ist es eine Datei
              SKILL.md in einem eigenen Ordner unter{" "}
              <code>.claude/skills/</code>. Oben steht eine kurze Beschreibung,
              darunter die Schritte. Claude kennt von allen Skills zunächst nur
              die Beschreibungen und lädt den Rest erst, wenn ein Skill zur
              Aufgabe passt. Sie können einen Skill auch direkt aufrufen, mit
              einem Schrägstrich und seinem Namen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Schreiben müssen Sie den Skill nicht selbst. Der Kurs zeigt den
              einfacheren Weg: Sie spielen einen Ablauf einmal gemeinsam mit
              Claude durch, etwa das morgendliche Sichten des Posteingangs, und
              sagen am Ende{" "}
              <VideoLink t="t=6328s">sinngemäß</VideoLink>: Schau dir die vier
              Schritte an, die wir gerade gemacht haben. Das mache ich jeden
              Morgen. Mach daraus einen Skill.
            </Typo.Paragraph>

            <Typo.H3>Autonomie in Stufen</Typo.H3>

            <Typo.Paragraph>
              Der zweite Gedanke aus dem Kurs verhindert die meisten Unfälle
              mit Skills. Ein neuer Skill darf zuerst nur berichten: Der
              Posteingangs-Skill liefert ein Briefing, und Sie entscheiden.
              Später bereitet er Entwürfe vor, die Sie freigeben. Erst wenn er{" "}
              <VideoLink t="t=6474s">10, 20, 30 Mal</VideoLink> ohne
              Überraschung gelaufen ist, darf er selbst handeln.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-tutorial/autonomie.png"
              alt="Drei aufsteigende Stufen: Briefing, Entwurf und Handeln, die höchste Stufe erst nach 10 bis 30 Durchläufen"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Das ist dasselbe Vorgehen wie bei einem neuen Mitarbeiter, und es
              passt zu Schritt 2. Die Stufe legen Sie nicht im Text des Skills
              fest, sondern über die Werkzeuge, die er nutzen darf. Ein Skill
              ohne Senden-Werkzeug bleibt beim Entwurf, auch wenn er es sich
              anders überlegt.
            </Typo.Paragraph>

            <Typo.H3>Skill oder Sub-Agent?</Typo.H3>

            <Typo.Paragraph>
              Diese Frage stellt der Kurs selbst. Ein Skill ist ein Rezept, das
              Claude in der laufenden Sitzung abarbeitet, mit allem, was dort
              schon besprochen wurde. Ein Sub-Agent ist ein eigener Helfer mit
              eigenem Kontext, der eine abgegrenzte Aufgabe erledigt und nur
              das Ergebnis zurückgibt. Sub-Agents kommen in Schritt 6, weil sie
              erst nützlich sind, wenn die Grundlagen stehen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="kontext">
            <Typo.H2>Schritt 5: Kontext und Limits im Griff behalten</Typo.H2>

            <Typo.Paragraph>
              Wer einen ganzen Tag in derselben Sitzung arbeitet, kennt das
              Gefühl, das der Kurs beschreibt: Claude wirkt mit der Zeit{" "}
              <VideoLink t="t=7017s">immer dümmer</VideoLink>. Das hat einen
              Grund. Alles aus der Sitzung liegt im Kontextfenster, jede
              gelesene Datei, jede Antwort und jeder Irrweg, und alles
              konkurriert um Aufmerksamkeit. Aktuelle Modelle haben in Claude
              Code ein Fenster von einer Million Tokens. Erst kurz vor dieser
              Grenze fasst Claude den Verlauf automatisch zusammen, die
              Qualität lässt aber deutlich früher nach.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-tutorial/kontext.png"
              alt="Balken für das Kontextfenster mit den Abschnitten CLAUDE.md, Werkzeuge und Gesprächsverlauf, eine Markierung bei etwa 250.000 Tokens mit dem Hinweis Übergabe schreiben, dann /clear, am Ende 1 Mio. Tokens"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Der Kursautor zieht deshalb bei etwa{" "}
              <VideoLink t="t=7083s">250.000 Tokens</VideoLink> einen Strich.
              Er lässt Claude eine Übergabe schreiben, mit Ziel, getroffenen
              Entscheidungen und betroffenen Dateien, leert die Sitzung mit{" "}
              <code>/clear</code> und startet mit der Übergabe neu. Wie voll
              das Fenster gerade ist, zeigt <code>/context</code>. Der Befehl{" "}
              <code>/compact</code> fasst den Verlauf sofort zusammen, lässt
              Ihnen aber weniger Kontrolle darüber, was erhalten bleibt.
            </Typo.Paragraph>

            <Typo.H3>Warum das Limit so schnell leer ist</Typo.H3>

            <Typo.Paragraph>
              Die zweite Klage in Kurs und Kommentaren betrifft die
              Nutzungsgrenzen. Bezahlte Pläne haben ein Kontingent pro
              Fünf-Stunden-Fenster und ein Wochenlimit. Viele erreichen es
              trotzdem schnell,{" "}
              <VideoLink t="t=19650s">auch im 200-Dollar-Plan</VideoLink>. Der
              Kurs hält dagegen:{" "}
              <VideoLink t="t=20782s">
                „It’s not a limits problem. It’s a context hygiene problem.“
              </VideoLink>{" "}
              Jede Nachricht schickt den ganzen bisherigen Kontext mit, und ein
              voller Kontext verbraucht entsprechend mehr. Diese Gewohnheiten
              helfen:
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Gewohnheit</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Warum sie spart</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>/clear</code> zwischen zwei Themen
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Das neue Thema schleppt den alten Verlauf nicht mit.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>CLAUDE.md kurz halten</DataTable.Cell>
                  <DataTable.Cell>
                    Sie wird in jeder Sitzung geladen.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Anweisungen bündeln</DataTable.Cell>
                  <DataTable.Cell>
                    Eine klare Nachricht statt fünf kleiner spart vier Runden
                    mit vollem Kontext.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Pausen unter einer Stunde</DataTable.Cell>
                  <DataTable.Cell>
                    Im Abo hält der Zwischenspeicher der Hauptsitzung eine
                    Stunde. Danach wird der ganze Kontext neu verarbeitet.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Sub-Agents gezielt einsetzen</DataTable.Cell>
                  <DataTable.Cell>
                    Jeder zusätzliche Agent verbraucht eigenes Kontingent.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>/usage</code> im Blick behalten
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Zeigt, wie viel vom Fenster und von der Woche übrig ist.
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Wer über das Limit hinaus weiterarbeiten muss, kann
              Nutzungsguthaben zu API-Preisen zubuchen. Meist ist die bessere
              Antwort aber eine sauberere Sitzung und nicht der nächstgrößere
              Plan.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="sub-agents">
            <Typo.H2>Schritt 6: Sub-Agents und Routinen, erst wenn es trägt</Typo.H2>

            <Typo.Paragraph>
              Die letzten Stunden des Kurses zeigen die eindrucksvollsten
              Dinge: Teams von Agenten, die miteinander diskutieren, und
              Automationen, die nachts in der Cloud laufen. Für Einsteiger gilt
              hier ein Satz, den der Kursautor ganz am Anfang sagt:{" "}
              <VideoLink t="t=1397s">
                „default to the simplest thing that gets the job done“
              </VideoLink>
              . Er nennt das Getränkeautomat statt Spielautomat. Was jedes Mal
              gleich ablaufen soll, ist als festes Skript zuverlässiger und
              günstiger als ein Agent, der jedes Mal neu überlegt.
            </Typo.Paragraph>

            <Typo.H3>Sub-Agents</Typo.H3>

            <Typo.Paragraph>
              Ein Sub-Agent ist eine Textdatei im Ordner{" "}
              <code>.claude/agents/</code> mit Namen, Beschreibung und
              Anweisungen. Er arbeitet in einem eigenen Kontextfenster, nutzt
              nur die Werkzeuge, die Sie ihm geben, und kann ein günstigeres
              Modell wie Haiku verwenden. In Ihre Sitzung kommt nur seine
              Zusammenfassung zurück. Zwei Einsätze aus dem Kurs lohnen sich
              schon früh:
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <strong>Fleißarbeit auslagern:</strong> Ein Sub-Agent liest
                einen langen Bericht und liefert eine kurze Zusammenfassung.
                Ihre Hauptsitzung bleibt sauber.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Einen Kritiker bauen:</strong> Ein Sub-Agent, der nur
                lesen darf, zerlegt jeden Plan, bevor Sie ihn umsetzen. Das
                hilft gegen die Neigung von KI-Modellen, allem zuzustimmen.
              </Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              Mehr ist dabei nicht besser. Wer zu viele Sub-Agents erzwingt,
              bekommt laut Kurs{" "}
              <VideoLink t="t=9996s">schlechtere Ergebnisse</VideoLink>.
              Agent-Teams, bei denen mehrere Claude-Instanzen direkt
              miteinander sprechen, sind laut Anthropic noch experimentell,
              standardmäßig aus und verbrauchen deutlich mehr Tokens.
            </Typo.Paragraph>

            <Typo.H3>Routinen in der Cloud</Typo.H3>

            <Typo.Paragraph>
              Im Kurs heißen sie Routinen, in der Dokumentation inzwischen
              Cloud Scheduled Tasks: Aufträge, die nach Zeitplan auf den
              Servern von Anthropic laufen, auch wenn Ihr Rechner aus ist. Sie
              richten sie unter claude.ai/code/routines oder in der Sitzung mit{" "}
              <code>/schedule</code> ein. Drei Punkte aus dem Kurs sollten Sie
              vorher kennen:
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <strong>Lokal heißt nicht Cloud.</strong> Was auf Ihrem Rechner
                läuft, funktioniert dort nicht automatisch, weil Ihre
                .env-Datei, lokale Dateien und angemeldete Sitzungen fehlen.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Niemand fragt nach.</strong> Ein geplanter Auftrag muss
                so präzise geschrieben sein, dass er ohne Rückfrage ans Ziel
                kommt.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Routinen gehören einer Person.</strong>{" "}
                <VideoLink t="t=18088s">Kollegen</VideoLink> können sie nicht
                mitnutzen.
              </Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              Für Abläufe, die immer gleich sind, nimmt der Kursautor statt
              einer Routine lieber ein festes Skript mit fest eingetragenem
              Ziel, nach dem Motto „boring is beautiful“. Und wer eine Sitzung
              nur unterwegs weiterführen will, braucht gar keine Routine. Mit{" "}
              <code>/remote-control</code> steuern Sie die laufende Sitzung auf
              Ihrem Rechner vom Handy aus, solange der Rechner an ist.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="unternehmen">
            <Typo.H2>Was im Unternehmen dazukommt</Typo.H2>

            <Typo.Paragraph>
              Der Kurs richtet sich an Einzelne, die für sich selbst schneller
              werden wollen. In einem Unternehmen mit 50 oder 500
              Mitarbeitenden kommen vier Fragen dazu, die wir in Projekten
              regelmäßig klären:
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <strong>Wer legt die Rechte fest?</strong> Regeln in einer
                Projektdatei kann jeder ändern, der den Ordner hat. Im Team
                gehören Rechte, Modelle und Budgets an eine{" "}
                <Link
                  href="/managed-claude/zentrale-steuerung"
                  className="text-primary-600 hover:underline"
                >
                  zentrale Stelle
                </Link>
                .
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Unter welchem Vertrag laufen die Daten?</strong> Private
                Abos scheiden für Firmendaten aus, siehe Schritt 3.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Wie wird Wissen geteilt?</strong> Der Kurs fragt selbst,
                wie man das Wissen mehrerer Mitarbeitender zusammenführt, und
                hat darauf keine fertige Antwort. Gemeinsame Skills und eine
                geteilte CLAUDE.md im Teamordner sind der pragmatische Anfang.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Woran misst man den Nutzen?</strong> Der Kurs
                empfiehlt, vor jeder Automation eine Kennzahl festzulegen, etwa
                von 5 auf 15 qualifizierte Leads pro Woche, und vorher zu
                bestimmen, wann sie fertig ist. Ohne diese Zahl lässt sich
                später nicht sagen, ob sie sich gelohnt hat.
              </Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              Der wichtigste Punkt steht aber am Anfang des Kurses. Wer ein
              neues Werkzeug lernt, wird erst einmal langsamer, fühlt sich
              überfordert und hört auf,{" "}
              <VideoLink t="t=1730s">
                bevor sich der Nutzen zeigt
              </VideoLink>
              . Das ist kein Technikproblem, sondern eine Frage der Begleitung
              in den ersten Wochen. Genau dafür gibt es unser{" "}
              <Link
                href="/managed-claude/coaching"
                className="text-primary-600 hover:underline"
              >
                Coaching
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="fazit">
            <Typo.H2>Fazit</Typo.H2>

            <Typo.Paragraph>
              Claude Code lernen heißt für Nicht-Programmierer vor allem:
              einarbeiten, begrenzen, wiederholen. Ein Projektordner mit einer
              kurzen CLAUDE.md liefert den Kontext. Verbotsregeln und eng
              gefasste Werkzeuge ziehen die Grenzen, die ein Prompt nicht
              ziehen kann. Skills machen aus einem gelungenen Durchlauf einen
              festen Ablauf, der Schritt für Schritt mehr Verantwortung
              bekommt. Saubere Sitzungen halten Qualität und Kontingent im
              Rahmen. Sub-Agents und Routinen kommen zuletzt.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Die Einwände aus den Kommentaren bleiben berechtigt. Wer Code
              erzeugen lässt, den er nicht versteht, steht beim ersten Fehler{" "}
              <VideoLink t="lc=Ugwrl6gacOUz5NdTTJF4AaABAg">
                allein davor
              </VideoLink>
              . Und wer vor allem Dokumente bearbeitet, ist mit Cowork oft
              besser bedient. Wenn Sie Claude Code oder Cowork im Team
              einführen wollen, mit Rechten, Datenschutz und Begleitung von
              Anfang an,{" "}
              <Link href="/contact" className="text-primary-600 hover:underline">
                sprechen Sie uns an
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="faq">
            <FaqContainer
              faqs={[
                {
                  question:
                    "Kann ich Claude Code ohne Programmierkenntnisse nutzen?",
                  answer:
                    "Ja. Sie beschreiben, was herauskommen soll, und Claude erledigt die Schritte: Dateien lesen und schreiben, Befehle ausführen, Werkzeuge ansprechen. Ein Terminal ist nicht mehr zwingend, Claude Code läuft auch im Code-Tab der Claude-Desktop-App und im Browser unter claude.ai/code. Wichtiger als Programmierkenntnisse sind drei Dinge: eine gute CLAUDE.md als Einarbeitung, klare Verbotsregeln und die Gewohnheit, Ergebnisse zu prüfen. Wer vor allem Dokumente bearbeitet, ist mit Cowork oft besser bedient.",
                },
                {
                  question: "Was kostet Claude Code?",
                  answer:
                    "Claude Code ist in allen bezahlten Claude-Plänen enthalten: Pro für 20 Dollar im Monat (17 Dollar bei jährlicher Zahlung), Max für 100 Dollar mit dem Fünffachen und für 200 Dollar mit dem Zwanzigfachen der Pro-Nutzung. Alle Pläne haben ein Kontingent pro Fünf-Stunden-Fenster und ein Wochenlimit. Darüber hinaus lässt sich Nutzungsguthaben zu API-Preisen zubuchen. Für Firmendaten kommen nur geschäftliche Verträge wie Team oder Enterprise in Frage.",
                },
                {
                  question: "Was ist eine CLAUDE.md?",
                  answer:
                    "Eine Textdatei, die Claude Code zu Beginn jeder Sitzung automatisch liest, vergleichbar mit einer Einarbeitungsmappe. Sie beschreibt, worum es im Projekt geht, wo welches Wissen liegt und welche Regeln gelten. Es gibt sie auf drei Ebenen: persönlich für alle Projekte unter ~/.claude/CLAUDE.md, für das Projekt im Projektordner und als CLAUDE.local.md für persönliche Notizen zum Projekt. Der Befehl /init legt eine erste Fassung an. Kurz halten lohnt sich, weil sie in jeder Sitzung Platz im Kontext belegt.",
                },
                {
                  question:
                    "Was ist der Unterschied zwischen einem Skill und einem Sub-Agent?",
                  answer:
                    "Ein Skill ist ein Rezept für einen wiederkehrenden Ablauf, abgelegt als SKILL.md unter .claude/skills/. Claude arbeitet ihn in der laufenden Sitzung ab, mit allem, was dort schon besprochen wurde. Ein Sub-Agent ist ein eigener Helfer, definiert als Datei unter .claude/agents/, mit eigenem Kontextfenster, eigenen Werkzeugrechten und auf Wunsch einem günstigeren Modell. Er erledigt eine abgegrenzte Aufgabe und gibt nur die Zusammenfassung zurück. Skills sparen Erklärungen, Sub-Agents halten die Hauptsitzung sauber.",
                },
                {
                  question:
                    "Warum ist mein Claude-Code-Limit so schnell aufgebraucht?",
                  answer:
                    "Meist wegen des Kontexts. Jede Nachricht schickt den gesamten bisherigen Verlauf mit, eine lange Sitzung verbraucht deshalb mit jeder Runde mehr. Dazu kommen Sub-Agents und Agent-Teams, die eigenes Kontingent verbrauchen. Es hilft, zwischen Themen mit /clear neu zu beginnen, die CLAUDE.md kurz zu halten, Anweisungen zu bündeln und Pausen unter einer Stunde zu halten, weil der Zwischenspeicher im Abo eine Stunde hält. Mit /usage sehen Sie, wie viel vom Fünf-Stunden-Fenster und von der Woche übrig ist.",
                },
                {
                  question: "Darf ich Firmendaten in Claude Code verwenden?",
                  answer:
                    "Nicht über ein privates Abo. Bei Free, Pro und Max entscheiden Sie selbst, ob Anthropic mit Ihren Daten trainieren darf; erlauben Sie es, werden die Daten bis zu fünf Jahre aufbewahrt, sonst 30 Tage. Unter geschäftlichen Verträgen wie Team, Enterprise oder der API trainiert Anthropic nicht mit Ihren Daten, die Standard-Aufbewahrung liegt bei 30 Tagen. Für den Einsatz im Unternehmen braucht es zusätzlich Auftragsverarbeitung, Regeln für den Umgang mit Zugangsdaten und klare Verbotsregeln, welche Dateien Claude lesen darf.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zum Claude Code Tutorial
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="kurs">
            Der Kurs
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="grundlagen">
            Was Claude Code tut
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="claude-md">
            1. CLAUDE.md
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="rechte">
            2. Rechte
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="werkzeuge">
            3. Werkzeuge und Daten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="skills">
            4. Skills
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="kontext">
            5. Kontext und Limits
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="sub-agents">
            6. Sub-Agents und Routinen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="unternehmen">
            Im Unternehmen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="faq">
            Häufige Fragen
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
