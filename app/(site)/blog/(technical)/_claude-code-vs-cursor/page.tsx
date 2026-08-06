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
  slug: "claude-code-vs-cursor",
  author: "Max Hänsel",
  date: "2026-08-20",
  image: "/blog/claude-code-vs-cursor/hero.png",
  tags: ["ki", "development"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Claude Code vs. Cursor 2026: Vergleich für den Mittelstand",
  description:
    "Claude Code vs. Cursor: Agent im Terminal gegen KI-Editor. Preise, Team-Kosten, Einführungsaufwand und die Frage, ob ihr ohne Entwicklungsteam überhaupt eins von beiden braucht.",
  openGraph: {
    title: "Claude Code vs. Cursor: Der ehrliche Vergleich für den Mittelstand",
    description:
      "Zwei Werkzeuge, die man ständig gegeneinander stellt, obwohl sie verschiedene Dinge sind. Was sie unterscheidet, was die Einführung kostet und wann die Antwort keins von beiden lautet.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-code-vs-cursor/hero.png",
        width: 1200,
        height: 630,
        alt: "Leerer, heller Arbeitsraum mit Schreibtischen und Monitoren, niemand am Platz",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-code-vs-cursor",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Claude Code vs. Cursor: Was ihr wirklich vergleicht
        </BlogHero.Headline>

        <GeoSummary>
          Claude Code ist ein Agent im Terminal, Cursor ein KI-gestützter
          Code-Editor. Auf Einzelplatzebene kosten beide 20 Dollar im Monat, auf
          Teamebene liegt Cursor mit 40 Dollar pro Nutzer beim Doppelten von
          Claude Team. Dieser Vergleich zeigt Unternehmen mit 50 bis 1.000
          Mitarbeitenden die echten Unterschiede, was die Einführung neben der
          Lizenz kostet und wann die richtige Antwort keins von beiden lautet.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>13 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-08-20">20. August 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-code-vs-cursor/hero.png"
          alt="Leerer, heller Arbeitsraum mit mehreren Schreibtischen und Monitoren, niemand am Platz"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Von allen Werkzeug-Vergleichen, die uns Kunden gerade vorlegen,
              ist dieser der schiefste. Nicht weil die Frage dumm wäre, sondern
              weil die beiden Dinge, die da verglichen werden, nicht dieselbe
              Art von Ding sind. Cursor ist ein Editor, in dem eine KI mitläuft.
              Claude Code ist ein Agent, der im Terminal lebt und keinen Editor
              mitbringt. Man kann sie gegeneinander stellen, so wie man ein Auto
              gegen einen Fahrdienst stellen kann, aber die Antwort hängt dann
              eben nicht an PS-Zahlen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Vergleichsartikel zu den beiden gibt es reichlich, und mehrere
              davon sind ausgesprochen gründlich. Was in allen fehlt: Sie
              schreiben für Entwickler. Sie vergleichen Autovervollständigung,
              Refactoring-Qualität und Kontextfenster. Das ist richtig und
              nützlich, wenn ihr ein Produktteam mit fünfzehn Entwicklern seid.
              Es hilft nicht weiter, wenn ihr ein Großhändler mit
              zweihundertfünfzig Mitarbeitenden seid, drei Leute in der IT habt
              und keinen davon Entwickler nennen würdet.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Text nimmt deshalb den zweiten Fall ernst. Er beantwortet
              die Vergleichsfrage schnell und ehrlich, rechnet dann vor, was die
              Einführung neben der Lizenz kostet, und endet bei der Frage, die
              in unseren Projekten am häufigsten die eigentliche ist: ob ihr
              überhaupt eins von beiden braucht. Alle Preise stammen von den
              Herstellerseiten, Stand August 2026.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="der-unterschied">
              Der Unterschied in einem Satz: Editor oder Agent
            </Typo.H2>
            <Typo.Paragraph>
              Cursor ist ein Code-Editor. Ihr öffnet ihn, seht eure Dateien in
              einer Seitenleiste, schreibt Code, und daneben sitzt eine KI, die
              vervollständigt, umbaut und auf Zuruf ganze Abschnitte übernimmt.
              Wer aus Visual Studio Code kommt, ist in zehn Minuten zu Hause,
              weil Cursor genau darauf aufbaut. Der Bildschirm ist die Zentrale,
              die KI ist ein sehr guter Beifahrer.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Claude Code dreht das um. Es hat keine Oberfläche im eigentlichen
              Sinn, sondern läuft im Terminal. Ihr beschreibt in normaler
              Sprache, was passieren soll, und der Agent liest sich selbst durch
              die Dateien, führt Befehle aus, prüft das Ergebnis und arbeitet
              weiter. Ihr schaut nicht permanent zu, ihr gebt einen Auftrag und
              bekommt ein Ergebnis. Die Zentrale ist der Auftrag, nicht der
              Bildschirm.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-vs-cursor/arbeitsweise.png"
              alt="Gegenüberstellung der Arbeitsweisen: Cursor mit Editor-Fenster, Dateibaum und mitlaufender KI-Seitenleiste gegenüber Claude Code mit Terminal, Auftrag in Textform und selbstständig arbeitendem Agent"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Aus diesem einen Unterschied folgt fast alles andere. Weil Cursor
              ein Editor ist, braucht es jemanden, der davorsitzt und Code
              beurteilen kann. Weil Claude Code ein Terminal-Programm ist,
              lässt es sich in Abläufe einbauen: in eine Build-Pipeline, in
              einen nächtlichen Job, in eine Kette anderer Werkzeuge. Ihr könnt
              ihm eine Logdatei hineinreichen und die Auswertung
              herausbekommen, ohne dass ein Mensch dabei zusieht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der zweite Unterschied liegt in der Modellfrage. Cursor arbeitet
              anbieterübergreifend und lässt euch zwischen Modellen
              verschiedener Hersteller wählen. Claude Code nutzt ausschließlich
              die Claude-Modelle, aktuell Claude Opus 5 mit einem Kontextfenster
              von einer Million Token und Claude Sonnet 5 als schnellere,
              günstigere Variante. Das ist je nach Perspektive Einschränkung
              oder Vorteil: weniger Auswahl, dafür ein Werkzeug, das exakt auf
              seine Modelle abgestimmt ist.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="preise">
              Die Preise: einzeln unentschieden, im Team Faktor zwei
            </Typo.H2>
            <Typo.Paragraph>
              Auf Einzelplatzebene ist der Vergleich langweilig. Cursor Pro
              kostet 20 Dollar im Monat, Claude Pro ebenfalls 20 Dollar
              monatlich oder 17 Dollar im Jahresabo. Beide haben eine
              kostenlose Einstiegsstufe mit spürbaren Grenzen und beide bieten
              Vielnutzerstufen mit dem drei- bis zwanzigfachen Kontingent.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Sobald ihr aber von einem Einzelplatz auf ein Team geht, gehen die
              Preise auseinander, und zwar deutlich. Genau das unterscheidet
              diesen Vergleich vom{" "}
              <Link
                href="/blog/claude-code-vs-codex"
                className="text-primary-600 hover:underline"
              >
                Vergleich zwischen Claude Code und Codex
              </Link>
              , wo die Stufen praktisch deckungsgleich sind.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Stufe</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Cursor</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Claude Code</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>Kostenlos</DataTable.Cell>
                  <DataTable.Cell>
                    Hobby, begrenzte Agent-Anfragen
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Free, Claude Code enthalten
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Einzelplatz</DataTable.Cell>
                  <DataTable.Cell>Pro, 20 $ pro Monat</DataTable.Cell>
                  <DataTable.Cell>
                    Pro, 17 $ jährlich, 20 $ monatlich
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Vielnutzer</DataTable.Cell>
                  <DataTable.Cell>
                    Pro+ mit dreifachem, Ultra mit zwanzigfachem Kontingent
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Max ab 100 $, wahlweise fünf- oder zwanzigfach
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Team-Sitzplatz</DataTable.Cell>
                  <DataTable.Cell>
                    Teams Standard, 40 $ pro Nutzer und Monat
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Team Standard, 20 $ jährlich, 25 $ monatlich
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Großes Team-Kontingent</DataTable.Cell>
                  <DataTable.Cell>
                    Teams Premium, fünffaches Kontingent
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Team Premium, 100 $ jährlich, fünffaches Kontingent
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Enterprise</DataTable.Cell>
                  <DataTable.Cell>
                    individuell, SCIM und Audit-Logs
                  </DataTable.Cell>
                  <DataTable.Cell>
                    20 $ pro Sitz, Nutzungskosten nach Modell
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Bei acht Leuten sind das 320 Dollar im Monat gegen 160 Dollar, im
              Jahr also rund 1.900 Dollar Unterschied. Das entscheidet keine
              Werkzeugfrage allein, aber es ist der einzige Preisunterschied in
              diesem Vergleich, der groß genug ist, um in einer Budgetrunde
              überhaupt zur Sprache zu kommen. Eine Warnung dazu: Bei beiden
              Anbietern ist der Sitzplatzpreis nicht die ganze Rechnung, weil
              die Nutzung selbst begrenzt ist und Vielnutzer in teurere Stufen
              rutschen. Wie sich das konkret aufschlüsselt, steht im Beitrag zu
              den{" "}
              <Link
                href="/blog/claude-code-kosten"
                className="text-primary-600 hover:underline"
              >
                Kosten von Claude Code
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="wann-cursor">Wann Cursor die bessere Wahl ist</Typo.H2>
            <Typo.Paragraph>
              Wir verkaufen keine Lizenzen, deshalb hier der ehrliche Teil:
              Es gibt Fälle, in denen Cursor klar vorne liegt, und sie sind
              nicht selten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der wichtigste ist der Einstieg. Wenn eure Leute aus Visual Studio
              Code kommen, ist Cursor am ersten Tag produktiv, weil sich nichts
              an der Arbeitsweise ändert außer der Seitenleiste. Ein Agent im
              Terminal verlangt dagegen, dass man sich umgewöhnt: Man muss
              lernen, Aufträge zu formulieren statt Zeilen zu schreiben, und
              das dauert bei den meisten Leuten ein bis zwei Wochen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der zweite Fall ist die kleinteilige Arbeit. Wenn jemand den
              ganzen Tag an bestehendem Code sitzt und in vielen kleinen
              Schritten ändert, prüft und weiterschreibt, ist ein mitlaufender
              Editor angenehmer als ein Agent, den man für jede Kleinigkeit
              beauftragen müsste. Und der dritte Fall ist die Modellwahl: Wer
              sich bewusst nicht an einen Anbieter binden will, findet in Cursor
              die offenere Lösung.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="wann-claude-code">
              Wann Claude Code die bessere Wahl ist
            </Typo.H2>
            <Typo.Paragraph>
              Umgekehrt gibt es drei Situationen, in denen der Agent im Terminal
              nicht nur besser passt, sondern die einzige der beiden Optionen
              ist, die überhaupt funktioniert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Erstens: große, zusammenhängende Aufgaben. Eine Bibliothek über
              vierzig Dateien hinweg austauschen, eine Altanwendung
              dokumentieren, eine Testabdeckung von Grund auf bauen. Das sind
              Aufträge, keine Bearbeitungen. Bei einem Editor sitzt jemand
              vierzig Mal an vierzig Dateien, beim Agenten beschreibt jemand
              einmal das Ziel.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zweitens: alles, was unbeaufsichtigt laufen soll. Ein Editor
              braucht einen Menschen davor, ein Terminal-Programm nicht. Wenn
              nachts ein Job Logdateien auswerten, Berichte erzeugen oder
              Datenexporte prüfen soll, ist ein Editor schlicht das falsche
              Werkzeug.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Drittens: Aufgaben, die gar kein Programmieren sind. Und genau da
              wird es für den Mittelstand interessant, weshalb das den eigenen
              Abschnitt bekommt.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-vs-cursor/einsatzfaelle.png"
              alt="Zwei Spalten mit typischen Einsatzfällen: links Cursor mit kleinteiligen Änderungen, vertrautem Editor und freier Modellwahl, rechts Claude Code mit großen zusammenhängenden Umbauten, unbeaufsichtigten Läufen und Aufgaben ohne Programmierung"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Wie ihr Claude Code auf den Rechner bekommt,
              steht übrigens in der{" "}
              <Link
                href="/blog/claude-code-installieren"
                className="text-primary-600 hover:underline"
              >
                Installationsanleitung
              </Link>
              ; welche Datenquellen ihr anbinden könnt, im Beitrag zu{" "}
              <Link
                href="/blog/claude-code-mcp"
                className="text-primary-600 hover:underline"
              >
                MCP-Servern in Claude Code
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="ohne-entwicklungsteam">
              Die eigentliche Frage: Habt ihr überhaupt ein Entwicklungsteam?
            </Typo.H2>
            <Typo.Paragraph>
              Hier ist der Punkt, an dem sich dieser Text von jedem anderen
              Vergleich unterscheidet, den ihr zu den beiden Werkzeugen findet.
              Alle vergleichen sie als Coding-Werkzeuge, weil alle Entwickler
              adressieren. In den Unternehmen, mit denen wir arbeiten, ist die
              Ausgangslage aber oft eine andere: Es gibt keine Entwicklung. Es
              gibt eine IT, die Systeme betreibt, es gibt Fachabteilungen mit
              viel wiederkehrender Dateiarbeit, und es gibt niemanden, dessen
              Beruf das Schreiben von Software ist.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für diese Unternehmen ist Cursor keine Option, und zwar nicht,
              weil es schlecht wäre, sondern weil es das Falsche ist. Ein
              Code-Editor ist ein Werkzeug für Leute, die Code schreiben und
              beurteilen. Wer keinen Entwickler hat, hat auch niemanden, der
              davorsitzt. Die Antwort auf die Frage &bdquo;Cursor oder Claude
              Code&ldquo; lautet dann schlicht: keins von beiden als Editor.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-vs-cursor/entscheidung.png"
              alt="Entscheidungsdiagramm mit drei Wegen: eigenes Entwicklungsteam führt zu Editor oder Agent, IT ohne Entwickler führt zum Agent für Dateiarbeit und Auswertungen, keine technische Rolle führt zu einer fertigen Automatisierung"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Trotzdem bleibt Claude Code auch dann interessant, aber in einer
              anderen Rolle. Ein Agent, der Dateien lesen, schreiben und Befehle
              ausführen kann, ist nicht nur ein Programmierwerkzeug. Er kann
              dreihundert PDF-Rechnungen durchgehen und die Positionen in eine
              Tabelle schreiben. Er kann Artikelstammdaten aus vier
              Lieferantenlisten zusammenführen und die Widersprüche markieren.
              Er kann monatlich denselben Bericht aus denselben Exporten bauen.
              Nichts davon ist Softwareentwicklung, alles davon passiert in
              Dateien.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Haken: In dieser Rolle braucht es trotzdem jemanden, der die
              Aufgabe sauber beschreibt und das Ergebnis prüft. Der Unterschied
              zum Editor ist, dass diese Person kein Entwickler sein muss. Sie
              muss den Fachprozess verstehen, nicht die Programmiersprache. Das
              ist eine deutlich häufiger besetzte Rolle. Was ein Agent
              grundsätzlich kann und wo seine Grenzen liegen, führt der Beitrag{" "}
              <Link
                href="/blog/was-ist-claude-code"
                className="text-primary-600 hover:underline"
              >
                Was ist Claude Code
              </Link>{" "}
              aus.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="einfuehrung">
              Was die Einführung neben der Lizenz kostet
            </Typo.H2>
            <Typo.Paragraph>
              Jeder Vergleich, den wir gelesen haben, endet bei den
              Lizenzpreisen. In der Praxis ist die Lizenz der kleinste Posten.
              Wer bei acht Leuten über 160 gegen 320 Dollar im Monat diskutiert,
              diskutiert über einen Betrag, den ein einziger schlecht gewählter
              Pilot in zwei Wochen überholt.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-vs-cursor/einfuehrung.png"
              alt="Aufstellung der Einführungskosten in vier Blöcken: Lizenz, Einarbeitungszeit, Aufbau von Regeln und Kontext sowie Prüfaufwand im Review, mit der Lizenz als kleinstem Block"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Der größte Posten ist die Einarbeitung. Bei Cursor ist sie klein,
              weil die Umgebung vertraut bleibt: ein bis zwei Tage, bis die
              Leute die KI-Funktionen aktiv nutzen statt sie zu ignorieren. Bei
              Claude Code ist sie größer, weil die Arbeitsweise neu ist. Wir
              rechnen mit ein bis zwei Wochen, bis jemand Aufträge so
              formuliert, dass er nicht mehr Zeit mit Nacharbeit verliert, als
              er vorher mit der Arbeit selbst verbracht hätte.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der zweitgrößte Posten wird fast immer vergessen: der Aufbau von
              Kontext. Beide Werkzeuge werden erst dann gut, wenn sie wissen,
              wie bei euch gearbeitet wird, welche Konventionen gelten und
              welche Systeme im Spiel sind. Das schreibt niemand in einer
              Stunde auf. Rechnet mit zwei bis drei Tagen, in denen jemand
              Projektregeln formuliert, testet und nachschärft. Diese Arbeit
              fällt bei beiden Werkzeugen an und ist zum Glück weitgehend
              übertragbar, falls ihr später wechselt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der dritte Posten ist der Prüfaufwand. Ein Agent, der große
              Aufträge übernimmt, erzeugt große Ergebnisse, und die muss jemand
              durchsehen. Das ist kein Argument gegen ihn, aber es verschiebt
              Arbeit vom Schreiben zum Prüfen. Teams, die das nicht einplanen,
              berichten nach vier Wochen, das Werkzeug habe nichts gebracht.
              Meistens stimmt das nicht, es hat nur die Arbeit an eine Stelle
              verschoben, für die niemand Zeit eingeplant hatte.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein ehrlicher Rahmen für einen ersten Pilot mit fünf Leuten sieht
              deshalb so aus: rund 100 bis 200 Dollar Lizenz im Monat, dazu grob
              fünf bis zehn Personentage Einarbeitung und Kontextaufbau im
              ersten Monat. Wer nur die erste Zahl plant, plant den Pilot so,
              dass er scheitern muss.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="datenschutz">
              Datenschutz und Rollout im Unternehmen
            </Typo.H2>
            <Typo.Paragraph>
              Beide Anbieter trennen die Unternehmensmerkmale sauber von den
              günstigen Stufen ab, und das ist der Punkt, an dem ein privater
              20-Dollar-Zugang für produktiven Firmencode ausscheidet. Bei
              Cursor bringt erst Teams Standard für 40 Dollar den teamweiten
              Privacy Mode und die Anmeldung über SAML oder OIDC; Pooled Usage,
              SCIM-Verwaltung und Audit-Logs liegen in der Enterprise-Stufe.
              Bei Claude läuft der Weg über die Team- und Enterprise-Verträge,
              und für eine zugesicherte europäische Datenroute in der Regel über
              den Eigenbetrieb in der eigenen Cloud.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Praktisch heißt das: Klärt die Datenfrage vor dem Pilot, nicht
              danach. Wir haben mehr als einmal erlebt, dass ein gelungener
              Pilot an genau dieser Stelle gestoppt wurde, weil die
              Datenschutzabteilung erst am Ende gefragt wurde und dann eine
              Vertragsstufe nötig war, die das Budget des Piloten gesprengt
              hätte. Die Reihenfolge ist billiger als die Reparatur.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="entscheidung">Die Entscheidung in drei Regeln</Typo.H2>
            <Typo.Paragraph>
              Wenn ihr euch die Diskussion sparen wollt, reichen drei Fragen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Erstens:</strong> Sitzen bei euch Leute, deren Beruf das
              Schreiben von Code ist? Wenn nein, ist die Editor-Frage erledigt
              und ihr schaut euch Claude Code als Automatisierungswerkzeug an
              oder gleich eine fertige Lösung für den konkreten Ablauf.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Zweitens:</strong> Sind eure Aufgaben eher viele kleine
              Änderungen oder wenige große Vorhaben? Kleinteilig und
              interaktiv spricht für den Editor, groß und zusammenhängend für
              den Agenten. Wer beides hat, und das ist der Normalfall, sollte
              bei der Frage anfangen, welche Arbeit gerade am meisten weh tut.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Drittens:</strong> Soll etwas ohne Aufsicht laufen? Sobald
              die Antwort ja lautet, fällt der Editor als Option weg, egal wie
              gut er ist. Ein Werkzeug, das einen Menschen davor braucht, kann
              nachts um drei nichts erledigen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Und der Vollständigkeit halber: Ja, man kann beide parallel
              einsetzen, und einzelne Entwickler mit hohem Durchsatz tun das
              auch. Für ein Team von fünf bis fünfzehn Leuten raten wir ab. Zwei
              Sitzplätze pro Kopf bedeuten bei den obigen Preisen 60 Dollar
              statt 20 oder 40, dazu zwei Auftragsverarbeitungsverträge, zwei
              Rechteverwaltungen und zwei Sätze Projektregeln, die mit der Zeit
              auseinanderlaufen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit</Typo.H2>
            <Typo.Paragraph>
              Claude Code und Cursor sind keine Konkurrenten für dieselbe
              Aufgabe. Cursor macht das Schreiben von Code schneller, Claude
              Code nimmt euch ganze Aufgaben ab. Auf Einzelplatzebene kosten
              beide dasselbe, im Team ist Cursor mit 40 Dollar pro Nutzer
              doppelt so teuer wie Claude Team, und in beiden Fällen ist die
              Lizenz nicht der Posten, der über Erfolg oder Misserfolg
              entscheidet.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wenn ihr ein Entwicklungsteam habt, probiert beide zwei Wochen
              lang an echten Aufgaben aus und entscheidet nach dem Ergebnis,
              nicht nach der Funktionsliste. Wenn ihr keins habt, ist die
              ehrliche Antwort, dass ihr keinen KI-Editor braucht. Dann geht es
              nicht um das Werkzeug, sondern um den Ablauf, der euch gerade Zeit
              kostet, und um die Frage, ob ein Agent ihn übernehmen kann.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="faq">Häufige Fragen</Typo.H2>
            <FaqContainer
              faqs={[
                {
                  question: "Was ist der Unterschied zwischen Claude Code und Cursor?",
                  answer:
                    "Cursor ist ein KI-gestützter Code-Editor auf Basis von Visual Studio Code: Ihr schreibt Code, die KI läuft mit und schlägt vor. Claude Code ist ein Agent im Terminal ohne eigene Oberfläche: Ihr beschreibt eine Aufgabe, der Agent liest Dateien, führt Befehle aus und prüft sein Ergebnis selbst. Cursor beschleunigt das Schreiben, Claude Code übernimmt ganze Aufgaben.",
                },
                {
                  question: "Was kostet Cursor im Vergleich zu Claude Code?",
                  answer:
                    "Auf Einzelplatzebene sind beide gleich: Cursor Pro 20 Dollar im Monat, Claude Pro 20 Dollar monatlich oder 17 Dollar im Jahresabo. Im Team gehen sie auseinander: Cursor Teams Standard kostet 40 Dollar pro Nutzer und Monat, Claude Team Standard 20 Dollar pro Sitz im Jahresabo beziehungsweise 25 Dollar monatlich. Bei acht Personen sind das rund 1.900 Dollar Unterschied im Jahr.",
                },
                {
                  question:
                    "Brauchen wir ein Entwicklungsteam, um eins der beiden Werkzeuge zu nutzen?",
                  answer:
                    "Für Cursor praktisch ja, weil ein Code-Editor jemanden braucht, der Code beurteilen kann. Für Claude Code nicht zwingend: Als Agent für Dateiarbeit, Auswertungen und wiederkehrende Abläufe genügt eine Person, die den Fachprozess versteht und die Ergebnisse prüft. Sie muss keine Programmiersprache beherrschen, aber die Aufgabe sauber beschreiben können.",
                },
                {
                  question: "Wie lange dauert die Einarbeitung?",
                  answer:
                    "Bei Cursor ein bis zwei Tage, weil die Umgebung Visual Studio Code entspricht und sich an der Arbeitsweise nichts ändert. Bei Claude Code ein bis zwei Wochen, weil man lernen muss, Aufträge zu formulieren statt Zeilen zu schreiben. Dazu kommen bei beiden zwei bis drei Tage für den Aufbau von Projektregeln und Kontext, ohne die keins der beiden Werkzeuge gute Ergebnisse liefert.",
                },
                {
                  question: "Welches Werkzeug ist DSGVO-konform einsetzbar?",
                  answer:
                    "Beide, aber nicht in den günstigen Einzelplatzstufen. Bei Cursor bringen erst Teams Standard den teamweiten Privacy Mode und SAML- beziehungsweise OIDC-Anmeldung, während SCIM-Verwaltung und Audit-Logs in der Enterprise-Stufe liegen. Bei Claude führt der Weg über Team- oder Enterprise-Verträge, für eine zugesicherte europäische Datenroute in der Regel über den Eigenbetrieb in der eigenen Cloud. Klärt das vor dem Pilot, nicht danach.",
                },
                {
                  question: "Lohnt es sich, Cursor und Claude Code parallel zu nutzen?",
                  answer:
                    "Für einzelne Entwickler mit hohem Durchsatz kann es aufgehen, etwa indem Claude Code große Umbauten übernimmt und Cursor für die kleinteilige Nacharbeit dient. Für ein Team von fünf bis fünfzehn Leuten raten wir ab: Zwei Sitzplätze pro Kopf, zwei Auftragsverarbeitungsverträge, zwei Rechteverwaltungen und zwei Sätze Projektregeln, die mit der Zeit auseinanderlaufen.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu Claude Code und Cursor
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="der-unterschied">
            Editor oder Agent
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="preise">
            Die Preise
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="wann-cursor">
            Wann Cursor passt
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="wann-claude-code">
            Wann Claude Code passt
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="ohne-entwicklungsteam">
            Ohne Entwicklungsteam
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="einfuehrung">
            Kosten der Einführung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="datenschutz">
            Datenschutz und Rollout
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="entscheidung">
            Entscheidung in drei Regeln
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
