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
} from "@/components/blog";
import GeoSummary from "@/components/ui/geo-summary";

export const metaCustom: BlogMeta = {
  slug: "claude-code-best-practices",
  author: "Max Hänsel",
  date: "2026-10-28",
  image: "/blog/claude-code-best-practices/hero.png",
  tags: ["ki", "development"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Claude Code Best Practices: die eine Größe hinter allen Listen",
  description:
    "Zu Claude Code kursieren Dutzende Tipplisten, und sie widersprechen sich bei jeder Zahl, die sie nennen. Dieser Beitrag führt die Praktiken auf ihre gemeinsame Ursache zurück, nennt die Messwerte dazu und sagt, wann eine Praxis nichts bringt.",
  openGraph: {
    title: "Claude Code Best Practices: die eine Größe hinter allen Listen",
    description:
      "60 Zeilen, 200 Zeilen oder 300? Die verbreiteten Best-Practice-Listen zu Claude Code nennen für dieselbe Frage unterschiedliche Zahlen und keine sagt, woher sie stammt. Was wirklich zählt, ist der Kontext.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-code-best-practices/hero.png",
        width: 1200,
        height: 630,
        alt: "Leerer Workshop-Raum von hinten fotografiert, Stuhlreihen vor einem vollkommen unbeschriebenen Whiteboard",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-code-best-practices",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Claude Code Best Practices: die eine Größe hinter allen Listen
        </BlogHero.Headline>

        <GeoSummary>
          Best Practices für Claude Code sind die Arbeitsgewohnheiten, mit
          denen ein Team den Coding-Agenten verlässlich statt zufällig
          einsetzt. Im deutschen Suchergebnis stehen dazu rund zwanzig Seiten,
          davon sechzehn nummerierte Tipplisten. Sie widersprechen sich bei
          fast jeder Zahl, die sie nennen: Für die Länge der CLAUDE.md reicht
          die Spanne von 60 bis 300 Zeilen, für den Zeitpunkt des Aufräumens
          von 50 bis 83,5 Prozent Kontextauslastung. Dieser Beitrag führt die
          Praktiken auf die eine Ursache zurück, aus der sie alle folgen, nennt
          die drei Bordmittel, mit denen ihr ihre Wirkung tatsächlich messt,
          und sagt bei jeder Praxis auch, wann sie nichts bringt. Der letzte
          Abschnitt behandelt die Frage, die keine der zwanzig Seiten stellt:
          was sich ändert, wenn aus einem Entwickler acht werden.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>9 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-10-28">28. Oktober 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-code-best-practices/hero.png"
          alt="Leerer Workshop-Raum, von der Rückseite fotografiert: Stuhlreihen mit Blick auf ein großes, vollkommen unbeschriebenes Whiteboard, Morgenlicht auf hellem Holzboden"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div id="anlass">
            <Typo.Paragraph>
              Wer nach Best Practices für Claude Code sucht, findet keine
              Knappheit, sondern das Gegenteil. Zwanzig Seiten auf der ersten
              Ergebnisseite, und der überwiegende Teil davon ist eine
              nummerierte Liste: zehn Praktiken hier, fünfzehn Tipps dort,
              sechs Muster woanders. Wir haben sie für diesen Beitrag gelesen,
              dazu die Betreiberdokumentation, und sind dabei auf zwei Dinge
              gestoßen, die in keiner der Listen stehen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Das erste: Die Listen widersprechen sich bei fast jeder Zahl, die
              sie nennen, und keine sagt, woher ihre Zahl kommt. Das zweite,
              und das ist das wichtigere: Fast alle Tipps folgen aus einer
              einzigen Ursache, und nur die Betreiberdokumentation benennt sie
              überhaupt. Wenn man sie kennt, braucht man die Liste nicht mehr
              auswendig, sondern kann für jede neue Situation selbst
              entscheiden.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Dieser Beitrag ist deshalb nicht die sechzehnte Liste. Er
              erklärt die Ursache, prüft die kursierenden Zahlen gegeneinander,
              nennt die Messwerte, mit denen ihr eine Praxis im eigenen Haus
              beurteilt, und sagt bei jeder Praxis auch, wann sie sich nicht
              lohnt. Wenn ihr Claude Code noch gar nicht einsetzt, ist{" "}
              <Link
                href="/blog/was-ist-claude-code"
                className="text-primary-600 hover:underline"
              >
                Was ist Claude Code
              </Link>{" "}
              der bessere Einstieg.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="die-eine-groesse">
            <Typo.H2>
              Die eine Größe: es geht um Kontext, nicht um Fleiß
            </Typo.H2>

            <Typo.Paragraph>
              Die Betreiberdokumentation stellt ihren Best Practices einen Satz
              voran, der in keiner der Drittanbieter-Listen auftaucht: Die
              meisten dieser Praktiken beruhen auf einer einzigen
              Einschränkung, nämlich dass sich das Kontextfenster schnell
              füllt und die Leistung nachlässt, während es sich füllt.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Das klingt technisch, hat aber eine sehr praktische Folge. Das
              Kontextfenster enthält alles: eure gesamte Unterhaltung, jede
              Datei, die der Agent gelesen hat, und die Ausgabe jedes Befehls,
              den er ausgeführt hat. Eine einzige Fehlersuche kann Zehntausende
              Token erzeugen. Und je voller das Fenster wird, desto eher
              vergisst der Agent frühere Anweisungen oder macht Fehler. Es ist
              nicht so, dass er schlechter wird, weil die Aufgabe schwerer
              wird. Er wird schlechter, weil er zu viel mit sich herumträgt.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-best-practices/kontext.png"
              alt="Zwei übereinanderliegende Verläufe von links nach rechts: der Balken Kontext wird zum Ende hin immer dicker, die Linie Trefferquote fällt im selben Verlauf ab"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Damit lässt sich jede kursierende Praxis prüfen. Warum soll man
              zwischen zwei unzusammenhängenden Aufgaben aufräumen? Weil sonst
              die eine Aufgabe den Kontext der anderen belastet. Warum soll man
              erst planen und dann bauen? Weil ein falscher Weg, der mitten in
              der Umsetzung auffällt, den halben Kontext mit gescheiterten
              Versuchen füllt. Warum soll man dem Agenten eine Prüfmöglichkeit
              geben, also Tests oder einen Build? Weil er sonst nach Augenmaß
              aufhört und ihr die Kontrollschleife seid, was mehrere Runden und
              damit mehr Kontext kostet. Warum Recherche an einen Subagenten
              abgeben? Weil dessen Lesearbeit in seinem eigenen Fenster bleibt
              und nur die Zusammenfassung zurückkommt.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Wer die Ursache kennt, muss sich also nicht sechzehn Listen
              merken. Die Prüffrage lautet immer gleich: Macht diese Gewohnheit
              das Kontextfenster leerer oder voller?
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="widerspruch">
            <Typo.H2>Die Zahlen der Listen widersprechen sich</Typo.H2>

            <Typo.Paragraph>
              Es gäbe einen bequemen Weg, diesen Beitrag zu schreiben: zu
              behaupten, die anderen Seiten blieben vage und wir nennen als
              Einzige konkrete Zahlen. Das stimmt hier nicht. Die gelesenen
              Seiten nennen sehr viele Zahlen, zwei davon auffällig viele. Das
              Problem ist ein anderes. Für dieselbe Frage stehen dort
              unterschiedliche Werte, ohne Quelle und ohne Hinweis darauf, dass
              es überhaupt eine Streitfrage ist.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-best-practices/widerspruch.png"
              alt="Eine Frage oben, darunter drei Karten Quelle A, Quelle B und Quelle C, jede mit einem unterschiedlich hohen Balken als Antwort"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Die deutlichste Spreizung betrifft ausgerechnet die Datei, die in
              jeder Liste auf Platz eins steht, die CLAUDE.md. Sie hält die
              Regeln, die der Agent zu Beginn jeder Unterhaltung liest, und
              genau deshalb ist ihre Länge eine Kostenfrage: Jede Zeile darin
              belegt Kontext, auch bei Aufgaben, für die sie irrelevant ist.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Frage</DataTable.HeaderCell>
                  <DataTable.HeaderCell>
                    Werte in den gelesenen Quellen
                  </DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>
                    Wie lang darf die CLAUDE.md sein?
                  </DataTable.Cell>
                  <DataTable.Cell>
                    unter 60 Zeilen, unter 200 Zeilen, harte Grenze 300 Zeilen
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    Ab welcher Auslastung aufräumen?
                  </DataTable.Cell>
                  <DataTable.Cell>
                    ab 50 %, ab 60 %, ab 60 bis 70 %
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    Was kostet ein Entwicklertag?
                  </DataTable.Cell>
                  <DataTable.Cell>6 USD gegen rund 13 USD</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Wie viel schneller wird man?</DataTable.Cell>
                  <DataTable.Cell>
                    55 % und 5- bis 10-fach, beides im selben Artikel
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Für zwei dieser vier Zeilen gibt es eine belastbare Quelle, und
              es ist jeweils die Betreiberdokumentation. Sie nennt für die
              CLAUDE.md 200 Zeilen als Zielgröße und begründet das damit, dass
              die Datei bei jedem Sitzungsstart vollständig geladen wird. Und
              sie beziffert die Kosten mit rund 13 US-Dollar pro Entwickler und
              aktivem Arbeitstag, 150 bis 250 US-Dollar im Monat, wobei 90
              Prozent der Nutzer unter 30 US-Dollar am Tag bleiben. Die Zahl
              stammt aus tatsächlichen Unternehmensinstallationen, nicht aus
              einem Erfahrungsbericht.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Die beiden anderen Zeilen sind Erfahrungswerte, und das ist auch
              in Ordnung, solange man sie so nennt. Die 60-Zeilen-Empfehlung
              kommt von einem Autor, dem eine 500 Zeilen lange Datei um die
              Ohren geflogen ist. Das Produktivitätsversprechen wiederum steht
              in einem einzigen Artikel gleich zweimal mit einem Unterschied
              vom Faktor zehn zwischen den beiden Angaben. Der ehrlichste
              Rechenweg im ganzen Suchergebnis steht auf Platz zwölf und
              stammt von einer Seite, die man dafür lesen muss: Bei 80 Prozent
              Trefferquote je Arbeitsschritt liegt die Wahrscheinlichkeit, dass
              zwanzig Schritte hintereinander alle sitzen, bei einem Prozent.
              Das erklärt besser als jede Sammelzahl, warum Zwischenprüfungen
              der eigentliche Hebel sind.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Praktisch heißt das: Nehmt die 200 Zeilen als Obergrenze, weil
              sie begründet ist, aber behandelt sie nicht als Ziel. Für jede
              Zeile lohnt die Frage, ob ihr Fehlen den Agenten zu einem Fehler
              verleiten würde. Wenn nicht, gehört sie entweder gelöscht oder in
              einen Skill verschoben, der nur bei Bedarf geladen wird.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="praktiken">
            <Typo.H2>Sechs Praktiken, die an der Ursache ansetzen</Typo.H2>

            <Typo.Paragraph>
              Aus der Kontextfrage folgen sechs Gewohnheiten, die sich in
              unseren eigenen Projekten und in den gelesenen Quellen decken.
              Sie sind bewusst nicht nach Beliebtheit sortiert, sondern danach,
              wie stark sie auf die Ursache wirken.
            </Typo.Paragraph>

            <Typo.H3>1. Gebt dem Agenten eine Prüfung, die er selbst laufen lassen kann</Typo.H3>

            <Typo.Paragraph>
              Das ist der stärkste Hebel und steht in kaum einer Liste an
              erster Stelle. Ohne eine Prüfung, die ein Bestanden oder
              Fehlgeschlagen erzeugt, hört der Agent auf, wenn die Arbeit
              fertig aussieht, und ihr werdet zur Kontrollinstanz. Mit einer
              Prüfung schließt sich die Schleife von allein: bauen, prüfen,
              Ergebnis lesen, nachbessern. Prüfung heißt hier alles, was ein
              Signal zurückgibt: eine Testsuite, der Rückgabewert eines Builds,
              ein Linter, ein Skript, das die Ausgabe mit einer Vorlage
              vergleicht.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Der praktische Unterschied liegt schon im Auftrag. „Schreib eine
              Funktion, die E-Mail-Adressen prüft" lässt offen, wann sie fertig
              ist. „Schreib sie, hier sind drei Beispielfälle, führ die Tests
              danach aus" nicht.
            </Typo.Paragraph>

            <Typo.H3>2. Räumt zwischen unzusammenhängenden Aufgaben auf</Typo.H3>

            <Typo.Paragraph>
              Die häufigste Verschwendung ist die Sitzung, in der drei Themen
              übereinanderliegen. Ein Zurücksetzen zwischen zwei Aufgaben
              kostet nichts und gibt das ganze Fenster zurück. Die Gegenprobe
              ist einfach: Wenn ihr denselben Fehler zum dritten Mal korrigiert,
              ist nicht die Aufgabe schwer, sondern der Kontext mit
              gescheiterten Anläufen verstopft. Eine frische Sitzung mit einem
              besseren ersten Auftrag ist an dieser Stelle fast immer schneller
              als die vierte Korrektur.
            </Typo.Paragraph>

            <Typo.H3>3. Trennt Erkunden und Planen von der Umsetzung</Typo.H3>

            <Typo.Paragraph>
              Erst lesen lassen, dann einen Plan schreiben lassen, den Plan
              lesen, dann bauen lassen. Der Gewinn ist nicht der Plan selbst,
              sondern dass ein falscher Ansatz auffällt, bevor er Code und
              Kontext erzeugt hat. Für größere Vorhaben lohnt der umgekehrte
              Weg: Lasst den Agenten zuerst euch befragen und daraus eine
              Spezifikation schreiben, und startet die Umsetzung dann in einer
              neuen, leeren Sitzung mit dieser Spezifikation.
            </Typo.Paragraph>

            <Typo.H3>4. Schiebt Vielleser in Subagenten ab</Typo.H3>

            <Typo.Paragraph>
              Recherche, Testläufe, Protokolldateien: alles, was viel Ausgabe
              erzeugt und wenig Ergebnis, gehört in einen eigenen Kontext.
              Zurück kommt nur die Zusammenfassung. Dass das kein Nulltarif
              ist, steht weiter unten. Wie man Subagenten sinnvoll zuschneidet,
              behandeln wir gesondert in{" "}
              <Link
                href="/blog/claude-code-subagents"
                className="text-primary-600 hover:underline"
              >
                Claude Code Subagents
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>5. Macht aus wiederkehrenden Regeln Hooks, nicht Prosa</Typo.H3>

            <Typo.Paragraph>
              Eine Regel in der CLAUDE.md ist ein Hinweis, den der Agent
              befolgen kann. Ein Hook ist ein Skript, das an einer festen
              Stelle im Ablauf ausgeführt wird, ob er will oder nicht. Alles,
              was ausnahmslos passieren muss, gehört deshalb in einen Hook und
              nicht in einen Satz. Der Nebeneffekt ist wieder ein
              Kontextgewinn: Ein Hook, der eine Protokolldatei nach Fehlern
              filtert, bevor der Agent sie sieht, macht aus Zehntausenden Token
              ein paar Hundert.
            </Typo.Paragraph>

            <Typo.H3>6. Wählt das Modell nach der Aufgabe</Typo.H3>

            <Typo.Paragraph>
              Das größte Modell ist selten nötig und immer teurer. Für den
              Großteil der Programmierarbeit reicht die mittlere Stufe, für
              einfache Zuarbeiten in Subagenten die kleine. Dasselbe gilt für
              das erweiterte Nachdenken, das als Ausgabe abgerechnet wird und
              je nach Modell mehrere Zehntausend Token pro Anfrage kosten kann:
              Bei einfachen Aufgaben lohnt es sich, den Aufwand
              herunterzustellen. Die Preisseite dazu haben wir in{" "}
              <Link
                href="/blog/claude-code-kosten"
                className="text-primary-600 hover:underline"
              >
                Claude Code Kosten
              </Link>{" "}
              ausgerechnet.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="messen">
            <Typo.H2>Woran ihr merkt, ob es überhaupt etwas bringt</Typo.H2>

            <Typo.Paragraph>
              Hier liegt die eigentliche Lücke der kursierenden Listen. Sie
              behaupten ihre Tipps, aber keine sagt, woran man prüft, ob eine
              Gewohnheit im eigenen Haus wirkt. Dabei liefert das Werkzeug die
              Messgrößen mit, und sie kosten nichts.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-best-practices/messen.png"
              alt="Drei Eingangsgrößen Kontext, Verbrauch und Sitzungen führen über einen gemeinsamen Messwert zu einer Entscheidung"
              width={1200}
              height={675}
            />

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Was ihr wissen wollt</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Woher die Zahl kommt</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>
                    Was belegt mein Kontextfenster gerade?
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Kontextübersicht in der Sitzung, dauerhaft in der
                    Statuszeile anzeigbar
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    Welcher Teil meines Aufbaus frisst den Verbrauch?
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Verbrauchsübersicht mit Zuordnung nach Skills, Subagenten,
                    Plugins und einzelnen MCP-Servern, mit Markierung ab 10 %
                    Anteil
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    Wo hakt es in meiner Arbeitsweise?
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Auswertung der letzten Sitzungen als Bericht, bis zu 200
                    Sitzungen je Lauf
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Läuft mir etwas aus dem Ruder?</DataTable.Cell>
                  <DataTable.Cell>
                    Obergrenze je Lauf als Startparameter, Ausgabenlimits auf
                    Organisationsebene
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Der nützlichste dieser Werte ist die Zuordnung nach Bestandteil.
              Sie beantwortet die Frage, die sonst Vermutungssache bleibt:
              Wenn ein MCP-Server ein Viertel eures Verbrauchs ausmacht, ist
              nicht eure Arbeitsweise das Problem, sondern dieser eine Server.
              Das lässt sich abstellen, während „schreib präzisere Aufträge"
              nichts abstellt.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Ein Wert, den keine der gelesenen Seiten nennt, erklärt außerdem
              den häufigsten Überraschungseffekt: Die zwischengespeicherten
              Inhalte halten im Abo eine Stunde und nur fünf Minuten, sobald
              über Zusatzkontingente oder direkt über die Schnittstelle
              abgerechnet wird. Die erste Nachricht nach einer längeren Pause
              verarbeitet deshalb den gesamten bisherigen Verlauf erneut. Wer
              eine große Sitzung über die Mittagspause offen lässt und danach
              eine Rückfrage stellt, zahlt für den ganzen Vormittag noch
              einmal. Im Leerlauf selbst passiert dagegen fast nichts,
              typischerweise unter vier Cent je Sitzung. Teuer ist nicht die
              offene Sitzung, teuer ist der Verlauf, den sie mitschleppt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="wann-nicht">
            <Typo.H2>Wann eine Praxis nichts bringt</Typo.H2>

            <Typo.Paragraph>
              Eine Tippliste ohne Gegenrichtung lässt jede Praxis gleich
              billig aussehen. Sie ist es nicht. Vier Fälle, in denen die
              übliche Empfehlung mehr kostet, als sie einbringt:
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Praxis</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Wann sie sich nicht lohnt</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>Erst planen, dann bauen</DataTable.Cell>
                  <DataTable.Cell>
                    Wenn ihr die Änderung in einem Satz beschreiben könntet.
                    Tippfehler, eine Protokollzeile, eine Umbenennung: direkt
                    beauftragen.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Alles in die CLAUDE.md</DataTable.Cell>
                  <DataTable.Cell>
                    Wenn die Regel nur manchmal gilt. Eine überladene Datei
                    führt dazu, dass der Agent auch die wichtigen Regeln
                    übergeht. Solches Wissen gehört in einen Skill.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Mehrere Agenten parallel</DataTable.Cell>
                  <DataTable.Cell>
                    Wenn die Aufgabe nicht wirklich zerlegbar ist. Agenten-Teams
                    verbrauchen etwa das Siebenfache einer normalen Sitzung,
                    weil jeder Beteiligte ein eigenes Kontextfenster hält.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Gegenlesen lassen</DataTable.Cell>
                  <DataTable.Cell>
                    Wenn ihr jeden Fund abarbeitet. Ein Prüfer, der Lücken
                    finden soll, findet welche. Sagt ihm, dass nur Funde
                    zählen, die Korrektheit oder Anforderung betreffen, sonst
                    baut ihr Abstraktionen für Fälle, die nicht eintreten.
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>
          </div>

          <Separator />

          <div id="im-team">
            <Typo.H2>Im Team: die Ebene wechselt</Typo.H2>

            <Typo.Paragraph>
              Keine der zwanzig Seiten behandelt die Einführung im Team. Das
              ist bemerkenswert, denn genau dort entscheidet sich, ob aus
              Einzelerfolgen eine verlässliche Arbeitsweise wird. Und die
              Fragen sind andere: Nicht mehr „wie halte ich meine Sitzung
              sauber", sondern „woran erkenne ich, dass acht Leute das
              unterschiedlich handhaben".
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-best-practices/team.png"
              alt="Links eine einzelne Person über der Karte Sitzung, rechts acht Personen über der deutlich breiteren Karte Organisation, getrennt durch eine senkrechte Linie"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Drei Dinge ändern sich beim Schritt vom Einzelplatz zur
              Organisation. Erstens wird die CLAUDE.md zum gemeinsamen
              Dokument: Sie gehört in die Versionsverwaltung, wird wie Code
              geprüft und regelmäßig ausgemistet. Zweitens braucht ihr
              Pro-Kopf-Zahlen, und die kommen je nach Zugangsweg aus
              unterschiedlichen Quellen. Über die Unternehmenstarife gibt es
              einen Ausgabenbericht als Tabelle, über die Schnittstelle eine
              Auswertung je Mitglied, über Cloud-Anbieter ausschließlich den
              eigenen Telemetrie-Export. Drittens gilt: Wer zu
              Vertragskonditionen einkauft, sollte die hinterlegten Preise in
              den verwalteten Einstellungen anpassen, sonst zeigen alle
              Anzeigen im Werkzeug Listenpreise und passen nie zur Rechnung.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Für die Kapazitätsplanung gibt es belastbare Richtwerte, die im
              Suchergebnis nirgends auftauchen. Sie fallen mit der Teamgröße,
              weil in größeren Organisationen anteilig weniger Leute
              gleichzeitig arbeiten.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Teamgröße</DataTable.HeaderCell>
                  <DataTable.HeaderCell>
                    Empfohlene Token pro Minute je Nutzer
                  </DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>1 bis 5</DataTable.Cell>
                  <DataTable.Cell>200.000 bis 300.000</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>5 bis 20</DataTable.Cell>
                  <DataTable.Cell>100.000 bis 150.000</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>20 bis 50</DataTable.Cell>
                  <DataTable.Cell>50.000 bis 75.000</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>100 bis 500</DataTable.Cell>
                  <DataTable.Cell>15.000 bis 20.000</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Der sinnvolle Einstieg ist deshalb nicht die hausweite Einführung,
              sondern eine kleine Pilotgruppe, aus der ihr eure eigene
              Ausgangslinie messt, bevor ihr breiter ausrollt. Das empfiehlt
              der Betreiber selbst, und es ist auch der einzige Weg, die
              Spanne von 150 bis 250 US-Dollar im Monat auf eine Zahl zu
              bringen, mit der sich planen lässt. Wo dabei die Daten landen und
              welche Governance-Fragen vorher geklärt sein wollen, steht in{" "}
              <Link
                href="/blog/was-ist-claude-code"
                className="text-primary-600 hover:underline"
              >
                Was ist Claude Code
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="fazit">
            <Typo.H2>Fazit</Typo.H2>

            <Typo.Paragraph>
              Die verbreiteten Best-Practice-Listen zu Claude Code sind nicht
              falsch, sie sind nur unverbunden. Sie zählen Gewohnheiten auf,
              ohne die Ursache zu nennen, aus der alle folgen, und sie nennen
              Zahlen, die sich gegenseitig widersprechen, ohne das kenntlich zu
              machen. Wer stattdessen die eine Frage stellt, ob eine Gewohnheit
              das Kontextfenster leerer oder voller macht, kommt ohne Liste
              aus und kann auch neue Situationen selbst beurteilen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Der zweite Schritt ist wichtiger als jeder einzelne Tipp:
              messen, statt zu glauben. Kontextübersicht, Verbrauchszuordnung
              und Sitzungsauswertung liegen dem Werkzeug bei und zeigen
              innerhalb einer Woche, welche Gewohnheit bei euch tatsächlich
              wirkt. Wenn ihr an dem Punkt steht, Claude Code über einzelne
              Entwickler hinaus verbindlich einzuführen, und dafür einen
              Rahmen braucht, der auch nach dem Pilotprojekt trägt,{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                sprecht uns an
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
                    "Was ist die wichtigste Best Practice für Claude Code?",
                  answer:
                    "Dem Agenten eine Prüfung zu geben, die er selbst ausführen kann: eine Testsuite, einen Build, einen Linter oder ein Skript, das die Ausgabe mit einer Vorlage vergleicht. Ohne ein solches Signal hört er auf, wenn die Arbeit fertig aussieht, und ihr werdet zur Kontrollschleife. Mit einer Prüfung schließt sich die Schleife von selbst, weil er das Ergebnis lesen und nachbessern kann. Alle übrigen Praktiken zahlen auf dieselbe Ursache ein: Das Kontextfenster füllt sich schnell, und die Trefferquote fällt, während es sich füllt.",
                },
                {
                  question: "Wie lang sollte die CLAUDE.md sein?",
                  answer:
                    "Die Betreiberdokumentation nennt 200 Zeilen als Zielgröße, weil die Datei bei jedem Sitzungsstart vollständig in den Kontext geladen wird. Kursierende Erfahrungsberichte nennen abweichende Werte zwischen 60 und 300 Zeilen, ohne Quelle. Nützlicher als jede Zahl ist die Prüffrage je Zeile: Würde der Agent ohne diese Zeile einen Fehler machen? Wenn nicht, gehört sie gelöscht oder in einen Skill verschoben, der nur bei Bedarf geladen wird. Eine überladene Datei führt dazu, dass auch die wichtigen Regeln untergehen.",
                },
                {
                  question: "Was kostet Claude Code pro Entwickler im Monat?",
                  answer:
                    "Über Unternehmensinstallationen hinweg nennt der Betreiber rund 13 US-Dollar pro Entwickler und aktivem Arbeitstag und 150 bis 250 US-Dollar pro Entwickler und Monat, wobei 90 Prozent der Nutzer unter 30 US-Dollar pro aktivem Tag bleiben. Die Spanne ist groß, weil sie an Modellwahl, Größe der Codebasis und Nutzungsmuster hängt. Der empfohlene Weg zu einer planbaren Zahl ist eine kleine Pilotgruppe, aus der ihr eure eigene Ausgangslinie messt, bevor ihr breiter ausrollt.",
                },
                {
                  question:
                    "Wann sollte man den Kontext in Claude Code zurücksetzen?",
                  answer:
                    "Immer beim Wechsel auf eine unzusammenhängende Aufgabe, und außerdem dann, wenn ihr denselben Fehler zum dritten Mal korrigiert habt. Im zweiten Fall ist nicht die Aufgabe schwer, sondern der Kontext mit gescheiterten Anläufen verstopft; eine frische Sitzung mit einem besseren ersten Auftrag ist dann fast immer schneller als die nächste Korrektur. Die kursierenden Prozentschwellen von 50 bis 70 Prozent Auslastung sind Erfahrungswerte ohne Quelle. Verlässlicher ist die Kontextanzeige in der Statuszeile.",
                },
                {
                  question:
                    "Lohnen sich mehrere parallele Claude-Code-Agenten?",
                  answer:
                    "Nur, wenn die Aufgabe wirklich zerlegbar ist. Agenten-Teams verbrauchen etwa das Siebenfache einer normalen Sitzung, weil jeder Beteiligte ein eigenes Kontextfenster unterhält und so lange Token zieht, bis er beendet wird. Für Recherche und andere Vielleser-Aufgaben lohnt die Auslagerung dagegen fast immer, weil die Lesearbeit im fremden Kontext bleibt und nur eine Zusammenfassung zurückkommt. Haltet Teams klein, wählt für Zuarbeiten das kleinere Modell und beendet Beteiligte, sobald ihre Arbeit erledigt ist.",
                },
                {
                  question:
                    "Warum steigt der Verbrauch in einer lange offenen Sitzung?",
                  answer:
                    "Weil mit jeder Anfrage der gesamte bisherige Verlauf mitgeschickt wird. Dazu kommt die Lebensdauer des Zwischenspeichers: Sie beträgt im Abo eine Stunde und fällt auf fünf Minuten, sobald über Zusatzkontingente oder direkt über die Schnittstelle abgerechnet wird. Die erste Nachricht nach einer längeren Pause verarbeitet deshalb den ganzen Verlauf erneut. Der Leerlauf selbst kostet dagegen kaum etwas, typischerweise unter vier Cent je Sitzung. Teuer ist nicht die offene Sitzung, teuer ist der Verlauf, den sie mitschleppt.",
                },
                {
                  question:
                    "Wie führt man Claude Code in einem Team verbindlich ein?",
                  answer:
                    "Mit einer kleinen Pilotgruppe, einer gemeinsam gepflegten CLAUDE.md in der Versionsverwaltung und Pro-Kopf-Zahlen von Anfang an. Woher diese Zahlen kommen, hängt am Zugangsweg: Unternehmenstarife liefern einen Ausgabenbericht als Tabelle, der Schnittstellenzugang eine Auswertung je Mitglied, bei Cloud-Anbietern bleibt nur der eigene Telemetrie-Export. Wer zu Vertragskonditionen einkauft, hinterlegt diese Preise zusätzlich in den verwalteten Einstellungen, sonst zeigen alle Anzeigen im Werkzeug Listenpreise und passen nie zur Rechnung.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu Claude Code Best Practices
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="anlass">
            Worum es geht
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="die-eine-groesse">
            Die eine Größe
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="widerspruch">
            Die Zahlen widersprechen sich
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="praktiken">
            Sechs Praktiken
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="messen">
            Woran ihr es messt
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="wann-nicht">
            Wann es nichts bringt
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="im-team">
            Im Team
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
