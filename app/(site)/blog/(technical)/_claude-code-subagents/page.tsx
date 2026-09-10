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
  slug: "claude-code-subagents",
  author: "Max Hänsel",
  date: "2026-10-16",
  image: "/blog/claude-code-subagents/hero.png",
  tags: ["ki", "development"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Claude Code Subagents: Anleitung, Kosten und Grenzen",
  description:
    "Subagents in Claude Code sparen Kontext, nicht Token. Was sie sind, wie ihr eigene anlegt, was sie wirklich kosten, wo die Parallelitätsgrenze liegt und wann sie die falsche Wahl sind.",
  openGraph: {
    title: "Claude Code Subagents: Anleitung, Kosten und Grenzen",
    description:
      "Von der ersten Agent-Datei bis zum Team-Rollout: der ehrliche Blick auf Subagents in Claude Code, inklusive der Kostenmechanik, die sonst niemand erklärt.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-code-subagents/hero.png",
        width: 1200,
        height: 630,
        alt: "Makroaufnahme zweier Hände auf einer mechanischen Tastatur in einem abgedunkelten Raum",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-code-subagents",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Claude Code Subagents: Kontext sparen, nicht Token
        </BlogHero.Headline>

        <GeoSummary>
          Subagents sind eigenständige Claude-Code-Instanzen mit eigenem
          Kontextfenster, die der Hauptthread für abgegrenzte Teilaufgaben
          startet und die nur ihr Ergebnis zurückgeben. Definiert werden sie als
          Markdown-Dateien in <code>.claude/agents/</code> im Projekt oder in{" "}
          <code>~/.claude/agents/</code> für alle Projekte. Dieser Beitrag zeigt
          den Aufbau einer Agent-Datei, alle Konfigurationsfelder, die beiden
          Wege der Delegation, die Grenzen für Parallelität und
          Verschachtelung, und er beantwortet die Frage, die keine andere
          Quelle beantwortet: Subagents senken die Belegung des Hauptfensters,
          erhöhen aber den Token-Verbrauch eines Laufs.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>10 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-10-16">16. Oktober 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-code-subagents/hero.png"
          alt="Makroaufnahme zweier Hände auf einer mechanischen Tastatur in einem abgedunkelten Raum"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Über Subagents wird fast überall dasselbe geschrieben: Sie seien
              effizient, sie sparten Kontext, man solle sie einsetzen. Das ist
              nicht falsch, aber es ist die halbe Wahrheit, und die fehlende
              Hälfte ist genau die, die man vor einer Team-Entscheidung braucht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Also gleich vorweg, weil danach vieles einfacher zu verstehen ist:
              Subagents sparen <strong>Kontext</strong>, nicht{" "}
              <strong>Token</strong>. Ein Lauf mit drei Subagents verbraucht in
              Summe mehr Token als derselbe Lauf ohne sie. Der Gewinn liegt
              woanders, nämlich darin, dass euer Hauptfenster sauber bleibt und
              Teilaufgaben nebeneinander laufen können. Wer diesen Satz einmal
              richtig verstanden hat, trifft die Entscheidung, wann sich ein
              Subagent lohnt, danach von selbst.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Beitrag setzt voraus, dass Claude Code bei euch schon
              läuft. Falls nicht, führt die{" "}
              <Link
                href="/blog/claude-code-installieren"
                className="text-primary-600 hover:underline"
              >
                Installationsanleitung
              </Link>{" "}
              dorthin, und{" "}
              <Link
                href="/blog/was-ist-claude-code"
                className="text-primary-600 hover:underline"
              >
                Was ist Claude Code?
              </Link>{" "}
              ordnet das Werkzeug insgesamt ein.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="was-ist-ein-subagent">
              Was ein Subagent wirklich ist
            </Typo.H2>
            <Typo.Paragraph>
              Ein Subagent ist eine zweite Claude-Instanz, die euer Hauptthread
              für eine abgegrenzte Aufgabe startet. Sie bekommt einen eigenen
              Systemprompt, ein eigenes Kontextfenster und eine eigene, meist
              engere Werkzeugliste. Sie arbeitet die Aufgabe ab und gibt eine
              Zusammenfassung zurück. Danach ist sie beendet.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Entscheidend ist, was dabei <em>nicht</em> übergeben wird. Ein
              Subagent sieht euren bisherigen Gesprächsverlauf nicht. Er
              bekommt die Aufgabenbeschreibung, die der Hauptthread formuliert,
              und sonst nichts aus dem Dialog. Was er dagegen sehr wohl
              bekommt, ist die <code>CLAUDE.md</code>-Hierarchie eures
              Projekts, den Git-Status und die Skills, die ihr ihm vorab
              zuweist. Genau diese Kombination ist der Grund für die
              Kostenmechanik weiter unten.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-subagents/delegation.png"
              alt="Der Hauptthread verteilt drei Teilaufgaben an drei Subagents, die jeweils nur ihre Zusammenfassung zurückgeben"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Die Subagents wissen nichts voneinander. Es gibt keinen Kanal
              zwischen ihnen, jeder spricht ausschließlich mit dem Hauptthread.
              Das ist eine Einschränkung, aber es ist auch der Grund, warum das
              Muster überhaupt funktioniert: Ein Rechercheagent kann keine
              halbfertige Überlegung eines Testagenten aufschnappen und in die
              falsche Richtung laufen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="eingebaute">
              Die eingebauten Subagents, die ihr längst benutzt
            </Typo.H2>
            <Typo.Paragraph>
              Bevor ihr eine eigene Agent-Datei schreibt, lohnt der Blick auf
              die mitgelieferten. Claude Code delegiert nämlich schon heute,
              ohne dass ihr etwas konfiguriert habt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Explore</strong> durchsucht die Codebasis und darf nur
              lesen. <strong>Plan</strong> recherchiert im Plan Mode, ebenfalls
              nur lesend. Beide überspringen bewusst die{" "}
              <code>CLAUDE.md</code> und den Git-Status, was sie schneller und
              billiger macht als einen normalen Subagent.{" "}
              <strong>General-purpose</strong> ist der Allrounder für
              mehrstufige Aufgaben, die auch schreiben müssen. Dazu kommen
              kleine Helfer wie <code>statusline-setup</code>.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wenn ihr wissen wollt, wie sich das im Alltag anfühlt: Der{" "}
              <Link
                href="/blog/claude-code-plan-mode"
                className="text-primary-600 hover:underline"
              >
                Plan Mode
              </Link>{" "}
              schickt für die Recherche routinemäßig Subagents los. Der lesende
              Teil eurer Arbeit läuft also längst delegiert, auch ohne eigene
              Konfiguration.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="anlegen">Einen eigenen Subagent anlegen</Typo.H2>
            <Typo.Paragraph>
              Ein Subagent ist eine Markdown-Datei mit YAML-Frontmatter. Der
              Dateiname ist egal, es zählt das Feld <code>name</code>. Wo die
              Datei liegt, entscheidet dagegen über die Reichweite:{" "}
              <code>.claude/agents/</code> im Projekt gilt für alle, die das
              Repository auschecken, <code>~/.claude/agents/</code> gilt nur für
              euch, dafür in allen Projekten.
            </Typo.Paragraph>

            <CodeBlock language="markdown">{`---
name: schema-reviewer
description: Prüft Datenbankmigrationen auf Indizes, Constraints und Rückwärtskompatibilität. Nach jeder neuen Migration einsetzen.
tools: Read, Grep, Glob
model: haiku
---

Du bist auf Datenbankmigrationen spezialisiert. Prüfe jede Migration auf
fehlende Indizes, auf Constraints ohne Fehlerbehandlung und darauf, ob ein
Rollback möglich bleibt. Nenne pro Fund die Datei, die Zeile und einen
konkreten Vorschlag. Ändere selbst nichts.`}</CodeBlock>

            <Typo.Paragraph>
              Drei Dinge an dieser Datei sind wichtiger, als sie aussehen. Die{" "}
              <code>description</code> ist kein Kommentar, sondern der Text,
              anhand dessen Claude entscheidet, ob es diesen Agenten überhaupt
              beauftragt. Schreibt dort hinein, <em>wann</em> delegiert werden
              soll, nicht nur, was der Agent kann. Die <code>tools</code>-Liste
              ist eine Erlaubnisliste: Was nicht dort steht, kann der Agent
              nicht. Und der letzte Satz im Fließtext, „ändere selbst nichts",
              spart euch später Diskussionen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="felder">Die Felder im Überblick</Typo.H2>
            <Typo.Paragraph>
              Nur <code>name</code> und <code>description</code> sind Pflicht,
              alles andere ist optional. Diese hier braucht ihr im Alltag:
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Feld</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Wofür</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>name</code>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Pflicht. Kleinbuchstaben und Bindestriche, dient als
                    Adresse bei der ausdrücklichen Delegation.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>description</code>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Pflicht. Entscheidet, ob Claude von sich aus delegiert.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>tools</code>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Erlaubnisliste. Ohne Angabe erbt der Agent alles, was der
                    Hauptthread darf.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>disallowedTools</code>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Verbotsliste. Praktisch, wenn ihr fast alles erlauben wollt
                    und nur Schreibzugriffe ausnehmt.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>model</code>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Der wirksamste Kostenhebel. Prüfagenten laufen oft gut auf
                    einem kleineren Modell.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>permissionMode</code>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Setzt den Berechtigungsmodus für diesen Agenten,
                    unabhängig von eurer Sitzung.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>maxTurns</code>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Obergrenze für die Schritte des Agenten. Die einfachste
                    Bremse gegen einen Agenten, der sich festbeißt.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>skills</code>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Lädt Konventionen vorab, statt sie in jeden Prompt zu
                    schreiben.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>memory</code>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Gibt dem Agenten einen eigenen, dauerhaften Speicher über
                    Läufe hinweg.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    <code>background</code>
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Lässt den Agenten laufen, ohne den Hauptthread zu
                    blockieren.
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Darüber hinaus lassen sich pro Agent auch MCP-Server und Hooks
              hinterlegen. Wenn ihr Claude Code an eigene Systeme angebunden
              habt, ist das der Punkt, an dem ein Agent gezielt nur den einen
              Server sieht, den er braucht. Wie diese Anbindung überhaupt
              funktioniert, steht in unserem Beitrag zu{" "}
              <Link
                href="/blog/claude-code-mcp"
                className="text-primary-600 hover:underline"
              >
                MCP in Claude Code
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="delegation">
              Delegation: automatisch oder ausdrücklich
            </Typo.H2>
            <Typo.Paragraph>
              Es gibt zwei Wege, und der Unterschied ist im Alltag größer, als
              er klingt. Der automatische Weg besteht darin, dass Claude die{" "}
              <code>description</code> aller verfügbaren Agents liest und selbst
              entscheidet. Das funktioniert gut, wenn die Beschreibungen
              trennscharf sind, und schlecht, wenn drei Agents ähnlich klingen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der ausdrückliche Weg adressiert einen Agenten direkt, mit{" "}
              <code>@agent-schema-reviewer</code> im Prompt. Damit ist die
              Delegation garantiert. Wollt ihr eine ganze Sitzung in einer Rolle
              fahren, geht das beim Start:
            </Typo.Paragraph>

            <CodeBlock language="bash">{`claude --agent schema-reviewer`}</CodeBlock>

            <Typo.Paragraph>
              Ein praktischer Hinweis für den Anfang: Fangt mit der
              ausdrücklichen Delegation an. Ihr seht dann sofort, ob der Agent
              das tut, was ihr erwartet habt. Erst wenn das sitzt, lohnt es
              sich, die Beschreibungen so zu schärfen, dass die automatische
              Auswahl zuverlässig greift.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="kosten">
              Was Subagents kosten: Kontext gespart, Token nicht
            </Typo.H2>
            <Typo.Paragraph>
              Hier ist der Punkt, an dem die meisten Anleitungen die Sache
              umdrehen. Der Gedanke „eigenes Kontextfenster, also günstiger"
              liegt nahe, stimmt aber nicht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Rechnet einmal mit, was beim Start eines Subagenten passiert. Er
              bekommt seinen eigenen Systemprompt, die{" "}
              <code>CLAUDE.md</code>-Hierarchie des Projekts, den Git-Status und
              die vorgeladenen Skills. Das ist ein vollständiger Aufschlag, und
              zwar pro Subagent. Startet ihr drei, zahlt ihr diesen Aufschlag
              dreimal, zusätzlich zu dem, was der Hauptthread ohnehin schon
              trägt. Der Rückweg ist dagegen billig, weil nur die
              Zusammenfassung zurückläuft und nicht der gesamte Arbeitsverlauf
              des Agenten.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-subagents/kontext-vs-token.png"
              alt="Die Belegung des Hauptfensters sinkt mit Subagents, der Token-Verbrauch insgesamt steigt"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Unterm Strich bewegen sich zwei Größen gegenläufig. Die Belegung
              eures Hauptfensters sinkt deutlich, weil dort am Ende nur noch
              Ergebnisse stehen statt der ganzen Sucherei. Der Token-Verbrauch
              des Laufs steigt. Das ist kein Argument gegen Subagents, es ist
              nur das richtige Argument <em>für</em> sie: Ihr kauft euch
              Kontext-Hygiene und Parallelität, und ihr bezahlt sie in Token.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ob sich das rechnet, hängt an eurem Abrechnungsmodell. Wer über
              ein Abo arbeitet, spürt zusätzliche Token vor allem an den
              Nutzungsgrenzen. Wer über die API bezahlt, sieht sie direkt auf
              der Rechnung. Die konkreten Preise und die Unterschiede zwischen
              beiden Wegen haben wir in{" "}
              <Link
                href="/blog/claude-code-kosten"
                className="text-primary-600 hover:underline"
              >
                Claude Code Kosten
              </Link>{" "}
              aufgeschlüsselt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der wirksamste Hebel dagegen steht in der Agent-Datei selbst: das
              Feld <code>model</code>. Ein Agent, der eine Migration gegen eine
              Checkliste prüft, braucht selten das größte Modell. Wenn ihr an
              einer Stelle sparen wollt, dann hier, und nicht dadurch, dass ihr
              auf Subagents verzichtet.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="parallel">
              Parallel arbeiten, und wo die Grenze liegt
            </Typo.H2>
            <Typo.Paragraph>
              Der eigentliche Zeitgewinn entsteht, wenn mehrere Subagents
              gleichzeitig laufen. Drei unabhängige Module gleichzeitig
              untersuchen zu lassen, dauert ungefähr so lange wie eines, statt
              dreimal so lange.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-subagents/isolation.png"
              alt="Mehrere abgeschlossene Kontexte arbeiten getrennt voneinander und geben jeweils über einen eigenen Kanal zurück"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Zwei Grenzen solltet ihr kennen, weil sie im Zweifel als
              Fehlermeldung auftauchen und nicht als Hinweis. Die Zahl
              gleichzeitig laufender Subagents ist standardmäßig auf 20
              gedeckelt, einstellbar über{" "}
              <code>CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS</code>. Und Subagents
              dürfen ihrerseits Subagents starten, allerdings nur bis zu einer
              Verschachtelungstiefe von standardmäßig 3, einstellbar über{" "}
              <code>CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH</code>. Der Wert 1
              schaltet die Verschachtelung ganz ab.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Praktisch werdet ihr diese Grenzen selten erreichen, und das ist
              gut so. Zwanzig gleichzeitige Agenten sind fast nie ein Plan,
              sondern meistens ein Symptom: Die Aufgabe war nicht sauber
              zerlegt. Drei bis fünf sind der Bereich, in dem das Muster
              angenehm bleibt und ihr die Ergebnisse noch beurteilen könnt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="wann-nicht">
              Wann Subagents die falsche Antwort sind
            </Typo.H2>
            <Typo.Paragraph>
              Diese Frage beantwortet praktisch keine der verfügbaren
              Anleitungen, dabei ist sie vor einem Rollout die wichtigste. Vier
              Fälle, in denen ein Subagent die Sache schlechter macht:
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Die Aufgabe passt bequem ins Hauptfenster.</strong> Wenn
              ihr zwei Dateien ändert und das Ergebnis ohnehin gleich lest,
              zahlt ihr den Startaufschlag für nichts.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Die Aufgabe braucht den Gesprächsverlauf.</strong> Das ist
              der häufigste Fehlschlag. Ihr habt zwanzig Minuten lang eine
              Entscheidung ausdiskutiert und delegiert dann die Umsetzung. Der
              Subagent kennt die Diskussion nicht. Entweder ihr schreibt das
              Ergebnis der Diskussion vollständig in die Aufgabe, oder ihr
              delegiert sie nicht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Die Änderungen sind eng verzahnt.</strong> Sobald zwei
              Teilaufgaben dieselben Dateien anfassen, arbeitet die Isolation
              gegen euch: Zwei Agenten, die nichts voneinander wissen, ändern
              dieselbe Stelle.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Ihr habt zu viele Agents.</strong> Alle Beschreibungen
              zusammen liegen im Kontext, damit Claude auswählen kann, und sie
              sind bei etwa 15.000 Token gedeckelt. Zwanzig ausführlich
              beschriebene Agents kosten euch also Kontext, bevor irgendetwas
              passiert ist. Haltet die Beschreibungen kurz und trennscharf.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="team">Subagents im Team ausrollen</Typo.H2>
            <Typo.Paragraph>
              Der Mechanismus ist derselbe wie beim Plan Mode als Team-Default:
              Der Ordner <code>.claude/agents/</code> liegt im Repository. Wer
              das Projekt auscheckt, hat die Agents. Es gibt keine Verteilung,
              kein Onboarding-Dokument und keinen, der es vergisst.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-subagents/team-rollout.png"
              alt="Der eingecheckte Ordner .claude/agents im Repository stellt allen Arbeitsplätzen dieselben Agents bereit"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Für den Anfang reicht ein einziger Agent, und zwar ein lesender.
              Ein Review-Agent mit <code>tools: Read, Grep, Glob</code> kann
              nichts kaputt machen, liefert aber sofort einen sichtbaren
              Nutzen. Wenn der eine Woche lang gute Hinweise gegeben hat, ist
              die Diskussion über den zweiten deutlich kürzer.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zwei Konventionen haben sich bewährt. Schreibt Agents, die etwas
              prüfen, konsequent ohne Schreibrechte, und sagt es zusätzlich im
              Fließtext der Datei. Und behandelt die Agent-Dateien wie Code:
              Sie gehören in den Pull Request, in dem ihr sie ändert, damit
              nachvollziehbar bleibt, warum ein Agent tut, was er tut.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit</Typo.H2>
            <Typo.Paragraph>
              Subagents sind kein Effizienztrick, sondern eine
              Arbeitsteilung. Sie halten euer Hauptfenster frei von
              Zwischenschritten und lassen unabhängige Teilaufgaben
              nebeneinander laufen. Bezahlt wird das in Token, und das ist ein
              fairer Preis, solange ihr die Fälle kennt, in denen er sich nicht
              lohnt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der pragmatische Einstieg besteht aus zwei Schritten. Legt einen
              einzigen lesenden Agenten in <code>.claude/agents/</code> an und
              ruft ihn eine Woche lang ausdrücklich mit{" "}
              <code>@agent-name</code> auf. Wenn er sich bewährt hat, schärft
              die <code>description</code>, bis Claude ihn von selbst
              beauftragt. Ab dann arbeitet die Delegation für euch, ohne dass
              jemand daran denken muss.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <FaqContainer
              faqs={[
                {
                  question: "Was sind Subagents in Claude Code?",
                  answer:
                    "Subagents sind eigenständige Claude-Instanzen, die der Hauptthread für eine abgegrenzte Teilaufgabe startet. Jeder Subagent hat ein eigenes Kontextfenster, einen eigenen Systemprompt und eine eigene Werkzeugliste. Er arbeitet die Aufgabe ab, gibt eine Zusammenfassung an den Hauptthread zurück und ist danach beendet. Die Subagents kennen sich untereinander nicht und kommunizieren ausschließlich mit dem Hauptthread.",
                },
                {
                  question: "Wo lege ich eine eigene Subagent-Datei ab?",
                  answer:
                    "Als Markdown-Datei mit YAML-Frontmatter, entweder in .claude/agents/ im Projekt oder in ~/.claude/agents/ für alle eure Projekte. Der Dateiname spielt keine Rolle, maßgeblich ist das Feld name im Frontmatter. Ein Agent im Projektordner gilt für alle, die das Repository auschecken, ein Agent im Benutzerordner nur für euch.",
                },
                {
                  question: "Sparen Subagents Kosten?",
                  answer:
                    "Nein, sie sparen Kontext, nicht Token. Jeder Subagent startet mit eigenem Systemprompt, der CLAUDE.md-Hierarchie des Projekts, dem Git-Status und den vorgeladenen Skills. Dieser Aufschlag fällt pro Subagent an, ein Lauf mit drei Subagents verbraucht also in Summe mehr Token als derselbe Lauf ohne sie. Was sinkt, ist die Belegung des Hauptfensters, weil nur die Zusammenfassungen dort ankommen. Der wirksamste Kostenhebel ist das Feld model, mit dem ihr einfache Prüfagenten auf einem kleineren Modell laufen lasst.",
                },
                {
                  question:
                    "Welche Subagents bringt Claude Code schon mit?",
                  answer:
                    "Explore durchsucht die Codebasis und darf nur lesen, Plan recherchiert im Plan Mode und darf ebenfalls nur lesen. Beide überspringen die CLAUDE.md und den Git-Status, was sie schneller und günstiger macht. General-purpose ist der Allrounder für mehrstufige Aufgaben mit Schreibzugriff. Dazu kommen kleine Helfer wie statusline-setup.",
                },
                {
                  question:
                    "Wie viele Subagents können gleichzeitig laufen?",
                  answer:
                    "Standardmäßig 20, einstellbar über die Umgebungsvariable CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS. Zusätzlich dürfen Subagents selbst Subagents starten, allerdings nur bis zu einer Verschachtelungstiefe von standardmäßig 3, einstellbar über CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH; der Wert 1 schaltet die Verschachtelung ab. In der Praxis sind drei bis fünf gleichzeitige Subagents der Bereich, in dem die Ergebnisse noch beurteilbar bleiben.",
                },
                {
                  question:
                    "Wie delegiere ich gezielt an einen bestimmten Subagent?",
                  answer:
                    "Mit @agent-<name> im Prompt, dann ist die Delegation garantiert. Ohne diese Angabe entscheidet Claude anhand der description aller verfügbaren Agents selbst, ob und an wen delegiert wird. Eine ganze Sitzung startet ihr in einer Rolle mit claude --agent <name>. Für den Anfang lohnt sich die ausdrückliche Delegation, weil ihr sofort seht, ob der Agent das Erwartete tut.",
                },
                {
                  question: "Sieht ein Subagent meinen bisherigen Chat?",
                  answer:
                    "Nein. Ein Subagent bekommt die Aufgabenbeschreibung, die der Hauptthread formuliert, aber nicht den Gesprächsverlauf. Er erhält allerdings die CLAUDE.md-Hierarchie, den Git-Status und die vorgeladenen Skills. Wenn eine Entscheidung im Dialog gefallen ist, muss ihr Ergebnis vollständig in der Aufgabenbeschreibung stehen, sonst arbeitet der Subagent ohne sie.",
                },
                {
                  question: "Wann sollte ich keinen Subagent einsetzen?",
                  answer:
                    "In vier Fällen: wenn die Aufgabe bequem ins Hauptfenster passt und ihr das Ergebnis ohnehin lest; wenn die Aufgabe den Gesprächsverlauf braucht, den der Subagent nicht bekommt; wenn mehrere Teilaufgaben dieselben Dateien anfassen, weil die Isolation dann gegen euch arbeitet; und wenn ihr so viele Agents definiert habt, dass allein deren Beschreibungen den Kontext belasten. Die kombinierten Beschreibungen sind bei etwa 15.000 Token gedeckelt.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu Claude Code Subagents
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="was-ist-ein-subagent">
            Was ein Subagent ist
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="eingebaute">
            Die eingebauten Subagents
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="anlegen">
            Eigenen Subagent anlegen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="felder">
            Die Felder im Überblick
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="delegation">
            Delegation
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="kosten">
            Was Subagents kosten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="parallel">
            Parallelität und Grenzen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="wann-nicht">
            Wann sie falsch sind
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="team">
            Rollout im Team
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
