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
  slug: "opencode-vs-claude-code",
  author: "Max Hänsel",
  date: "2026-10-19",
  image: "/blog/opencode-vs-claude-code/hero.png",
  tags: ["ki", "development", "security"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "OpenCode vs Claude Code: Der Vergleich für Unternehmen",
  description:
    "OpenCode vs Claude Code aus Unternehmenssicht: Wohin der Quellcode fließt, was ein Team über zwölf Monate wirklich kostet und warum Modellfreiheit eine Aufgabe ist. Mit Entscheidungsregeln und Pilotverfahren.",
  openGraph: {
    title: "OpenCode vs Claude Code: ein Produkt gegen ein Gerüst",
    description:
      "Die englischen Vergleiche messen Geschwindigkeit. In deutschen Unternehmen entscheiden drei andere Fragen: Datenweg, Betreuungsaufwand und Modell-Governance.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/opencode-vs-claude-code/hero.png",
        width: 1200,
        height: 630,
        alt: "Zwei geschlossene Laptops nebeneinander auf einem hellen Holzschreibtisch, von oben fotografiert, daneben Notizbuch, Tasse und Kabel",
      },
    ],
  },
  alternates: {
    canonical: "/blog/opencode-vs-claude-code",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          OpenCode vs Claude Code: Der Vergleich für Unternehmen
        </BlogHero.Headline>

        <GeoSummary>
          Dieser Vergleich stellt OpenCode und Claude Code nicht über Features
          und Geschwindigkeit gegenüber, sondern über die drei Fragen, an denen
          eine Unternehmensentscheidung tatsächlich hängt: Wohin fließt der
          Quellcode, was kostet der Betrieb für ein Team von acht Entwicklern
          über zwölf Monate, und was löst die freie Modellwahl an interner
          Arbeit aus. Geschrieben für Unternehmen mit 50 bis 1.000
          Mitarbeitenden, in denen IT-Leitung und Datenschutz mitentscheiden.
          Die zentrale These: OpenCode löst die Datenschutzfrage nicht, es
          verschiebt sie auf den Anbieter, den ihr einträgt.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>12 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-10-19">19. Oktober 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/opencode-vs-claude-code/hero.png"
          alt="Zwei geschlossene Laptops nebeneinander auf einem hellen Holzschreibtisch, von oben fotografiert, einer dunkel und einer silbern, daneben Notizbuch mit Stift, Tasse und aufgerolltes Kabel"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Es gibt zu diesem Vergleich inzwischen ein gutes Dutzend
              englischsprachiger Artikel, und sie sind sich erstaunlich einig.
              Alle messen dasselbe: wie schnell die beiden Werkzeuge eine
              Aufgabe erledigen, wie viele Tests dabei herauskommen, wie viele
              Sterne das jeweilige Projekt auf GitHub hat. Die meisten zitieren
              dabei denselben einen Testlauf.
            </Typo.Paragraph>
            <Typo.Paragraph>
              In den Gesprächen, die wir mit deutschen Unternehmen führen,
              kommt Geschwindigkeit fast nie vor. Was vorkommt, sind drei
              andere Fragen: Wohin geht unser Quellcode. Was kostet uns das
              wirklich, wenn nicht nur die Lizenz zählt. Und wer kümmert sich
              danach darum. Dieser Text beantwortet diese drei Fragen und lässt
              die Feature-Tabelle bewusst kurz.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="unterschied">
              Der Unterschied in einem Satz: ein Produkt gegen ein Gerüst
            </Typo.H2>
            <Typo.Paragraph>
              Claude Code ist ein fertiges Produkt eines Anbieters, das mit
              einem Modell dieses Anbieters arbeitet. OpenCode ist ein offenes
              Gerüst, in das ihr ein Modell eurer Wahl einhängt. Es betreibt
              selbst keines.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser eine Satz erklärt fast alles, was danach kommt. Er erklärt,
              warum die Preise so unterschiedlich aussehen, warum die
              Datenschutzfrage bei OpenCode nicht mit dem Werkzeug beantwortet
              werden kann, und warum die viel gelobte Modellfreiheit im
              Unternehmen mehr Arbeit macht als beim einzelnen Entwickler. Wer
              Claude Code noch gar nicht kennt, findet die Grundlagen in{" "}
              <Link
                href="/blog/was-ist-claude-code"
                className="text-primary-600 hover:underline"
              >
                Was ist Claude Code
              </Link>
              .
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Kriterium</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Claude Code</DataTable.HeaderCell>
                  <DataTable.HeaderCell>OpenCode</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>Lizenz</DataTable.Cell>
                  <DataTable.Cell>proprietär</DataTable.Cell>
                  <DataTable.Cell>Open Source</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Modell</DataTable.Cell>
                  <DataTable.Cell>Claude, fest</DataTable.Cell>
                  <DataTable.Cell>frei wählbar, auch lokal</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Vertragspartner</DataTable.Cell>
                  <DataTable.Cell>einer</DataTable.Cell>
                  <DataTable.Cell>so viele wie eingetragene Anbieter</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Bedienung</DataTable.Cell>
                  <DataTable.Cell>Terminal, Agent</DataTable.Cell>
                  <DataTable.Cell>Terminal, Agent</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Betrieb ohne Netz</DataTable.Cell>
                  <DataTable.Cell>nein</DataTable.Cell>
                  <DataTable.Cell>ja, mit lokalem Modell</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="gemeinsam">
              Was beide gleich machen, und warum die Benchmark-Zahl wenig hilft
            </Typo.H2>
            <Typo.Paragraph>
              Beide sind Terminal-Agenten. Beide lesen und schreiben Dateien im
              Projekt, führen Befehle aus, binden externe Systeme über MCP an
              und können Teilaufgaben an Unteragenten abgeben. Wer von einem zum
              anderen wechselt, muss die Arbeitsweise nicht neu lernen. Die
              Projektregeln heißen anders und müssen umgeschrieben werden, das
              ist ein halber Tag, kein Projekt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dann gibt es die Zahl, die in fast jedem Vergleich steht: In einem
              Testlauf brauchte das eine Werkzeug rund neun Minuten und
              schrieb 73 Tests, das andere rund sechzehn Minuten und schrieb 94.
              Daraus wird je nach Blickrichtung <em>fast doppelt so schnell</em>{" "}
              oder <em>29 Prozent mehr Tests</em>. Beides stimmt, und beides
              hilft euch nicht weiter: Es ist ein Lauf, vier Aufgaben, ein
              Modell, ein Zeitpunkt Anfang 2026. Die Modelle darunter haben sich
              seither auf beiden Seiten geändert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wichtiger ist, dass Geschwindigkeit in den meisten Unternehmen
              ohnehin nicht der Engpass ist. Der Engpass ist das Review. Ein
              Agent, der in neun statt sechzehn Minuten fertig ist, produziert
              nur schneller etwas, das ein Mensch trotzdem lesen muss. Wir haben
              das mehrfach gesehen: Die Zeitersparnis beim Schreiben verlagert
              sich fast vollständig in die Prüfung, und wer das nicht einplant,
              bekommt sie als Überraschung.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="datenweg">Achse 1: Wohin fließt euer Quellcode?</Typo.H2>
            <Typo.Paragraph>
              Das ist die Frage, an der die Entscheidung in deutschen
              Unternehmen am häufigsten hängt, und sie wird in den
              englischsprachigen Vergleichen fast nie gestellt. Bei Claude Code
              ist die Antwort kurz: Der Code geht zu Anthropic. Es gibt einen
              Vertragspartner, einen Auftragsverarbeitungsvertrag, eine
              zuständige Stelle. Ob euch das reicht, entscheidet eure
              Datenschutzprüfung, aber die Frage ist wenigstens eindeutig
              gestellt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Bei OpenCode gibt es diese eine Antwort nicht, und das ist der
              Punkt, den wir für den wichtigsten des ganzen Vergleichs halten.
              OpenCode betreibt kein Modell. Wohin euer Code fließt, entscheidet
              der Schlüssel, den ihr einträgt. Es gibt drei realistische Wege,
              und sie sind rechtlich sehr verschieden.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/opencode-vs-claude-code/datenwege.png"
              alt="Vier Datenwege im Vergleich: Claude Code führt über genau einen Weg zum Anbieter, OpenCode je nach eingetragenem Schlüssel zum eigenen Konto beim Anbieter, über einen Vermittler zu einem fremden Modell in unbekanntem Rechtsraum, oder zu einem lokalen Modell, das als einziges innerhalb des eigenen Netzes liegt"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              <strong>Weg 1: eigener Schlüssel bei einem großen Anbieter.</strong>{" "}
              Ihr tragt einen Schlüssel eures eigenen Kontos ein, etwa bei
              Anthropic, OpenAI oder über ein Cloud-Konto in einer EU-Region.
              Datenschutzrechtlich ist das dann ungefähr die Lage von Claude
              Code, nur mit eurem eigenen Vertrag. Für viele Unternehmen ist das
              der sinnvollste Weg, weil er die Auftragsverarbeitung an einen
              Vertrag hängt, den es sowieso schon gibt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Weg 2: ein Vermittlungsdienst.</strong> Bequem, weil ein
              Schlüssel Zugriff auf dutzende Modelle gibt. Datenschutzrechtlich
              ist es der schlechteste der drei Wege: Ihr habt einen weiteren
              Verarbeiter in der Kette, der seinerseits an das eigentliche
              Modell weiterreicht, und die Modelle dahinter stehen teils in
              Rechtsräumen, die eure Prüfung nicht ohne Weiteres durchlässt. Wer
              hier den Haken bei <em>quelloffen</em> setzt und glaubt, damit sei
              der Datenschutz erledigt, hat die Lage verschlechtert, nicht
              verbessert.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Weg 3: lokales Modell.</strong> Der Code verlässt das
              eigene Netz nicht. Das ist der einzige Weg, der die Frage
              tatsächlich schließt statt sie zu verschieben, und der Grund,
              warum OpenCode für Unternehmen mit harten Auflagen überhaupt
              interessant ist. Der Preis dafür ist Hardware und ein Modell, das
              in aller Regel schwächer ist als das beste verfügbare. Wie das
              praktisch aussieht, steht in{" "}
              <Link
                href="/blog/claude-code-mit-ollama"
                className="text-primary-600 hover:underline"
              >
                Claude Code mit Ollama
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              Daraus folgt der Satz, den wir in keinem der englischen Texte
              gefunden haben: <strong>Open Source ist kein Datenschutz.</strong>{" "}
              Dass ihr den Quelltext des Werkzeugs lesen könnt, sagt nichts
              darüber, wohin es eure Daten schickt. Erst der lokale Betrieb ist
              eine Antwort, alles andere ist eine Verschiebung der Frage auf
              einen anderen Vertrag. Was ihr sonst noch prüfen solltet, bevor
              ein KI-Werkzeug in die Entwicklung geht, steht in{" "}
              <Link
                href="/blog/ki-datenschutz"
                className="text-primary-600 hover:underline"
              >
                KI und Datenschutz
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zwei Punkte, die in Vergleichen regelmäßig fehlen und in der
              Praxis regelmäßig aufschlagen: Beide Werkzeuge senden
              standardmäßig Nutzungsdaten, und beide lassen sich abschalten,
              aber jemand muss es tun und dokumentieren. Und in Unternehmen mit
              Betriebsrat ist ein Werkzeug, das mitliest, was Entwickler tun,
              mitbestimmungsrelevant. Das ist kein Hindernis, aber es dauert
              länger als die Installation.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="kosten">
              Achse 2: Was kostet das wirklich, für ein Team
            </Typo.H2>
            <Typo.Paragraph>
              Alle Vergleiche nennen Listenpreise. Keiner rechnet. Das ist
              bequem, weil die Listenpreise die Geschichte erzählen, die man
              erwartet: Claude Code kostet zwischen zwanzig und zweihundert
              Dollar pro Person und Monat, OpenCode ist quelloffen und kostet
              als Software nichts. Wer bei dieser Zeile aufhört, hat die
              Entscheidung scheinbar getroffen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Nur ist die Lizenz in keiner der vier Varianten der größte Posten.
              Wir rechnen hier mit acht Entwicklern über zwölf Monate und
              nehmen die Posten dazu, die in den englischen Texten fehlen:
              Einrichtung und laufende Betreuung, die Pflege der Modellwahl,
              Hardware im lokalen Fall.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/opencode-vs-claude-code/teamkosten.png"
              alt="Vier gestapelte Balken für vier Betriebsvarianten, aufgeteilt in Lizenz, Betreuung und Hardware: In Variante A überwiegt die Lizenz, in den Varianten B und C die Betreuung, in Variante D die Hardware"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              <strong>Variante A, Claude Code je Arbeitsplatz.</strong> Der
              Posten ist die Lizenz, die Betreuung ist gering, weil es nichts zu
              entscheiden gibt. Planbar, und der einzige Fall, in dem ihr die
              Jahreskosten vor dem Start kennt. Die Zahlen im Detail stehen in{" "}
              <Link
                href="/blog/claude-code-kosten"
                className="text-primary-600 hover:underline"
              >
                Claude Code Kosten
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Variante B, OpenCode mit eigenem Anbieterkonto.</strong>{" "}
              Die Lizenz fällt weg, die Tokenkosten kommen dazu und sind nach
              Verbrauch, nicht nach Kopf. Bei intensiver Nutzung liegen sie über
              der Pauschale, bei gemischter Nutzung darunter. Wichtiger: Ihr
              braucht jemanden, der die Schlüssel verwaltet und die Rechnung
              beobachtet. Ein nicht überwachter Schlüssel in einer Shell ist die
              häufigste unangenehme Überraschung in diesem Modell.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Variante C, OpenCode mit offenen Modellen.</strong> Die
              günstigste Variante auf dem Papier. Dafür sinkt die Ergebnisgüte,
              und der Aufwand verschiebt sich ins Review. Rechnet ehrlich:
              Wenn acht Entwickler pro Woche eine Stunde mehr prüfen, ist das
              über zwölf Monate ein sehr großer Posten, gegen den die gesparte
              Lizenz klein aussieht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Variante D, OpenCode lokal auf eigener Hardware.</strong>{" "}
              Hier zahlt ihr einmalig Hardware und laufend Betrieb. Diese
              Variante rechnet sich nicht über die Kosten, sie rechnet sich über
              die Auflage. Wer sie aus Kostengründen wählt, wählt sie aus dem
              falschen Grund.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die belastbare Aussage aus diesen vier Rechnungen ist unbequem
              schlicht: Der Unterschied zwischen den Varianten liegt fast nie in
              der Lizenz, sondern darin, wie viel interne Zeit sie binden. Ein
              Werkzeug, das nichts kostet und eine halbe Stelle beschäftigt, ist
              teurer als eines, das pro Person zahlt und niemanden bindet.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="modellfreiheit">
              Achse 3: Modellfreiheit ist eine Aufgabe, kein Geschenk
            </Typo.H2>
            <Typo.Paragraph>
              Die freie Modellwahl ist das Verkaufsargument von OpenCode, und
              jeder Vergleich feiert sie. Für einen einzelnen Entwickler ist sie
              das auch: Er probiert aus, wechselt mitten in der Aufgabe und
              nimmt für einfache Dinge ein billigeres Modell.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/opencode-vs-claude-code/modellfreiheit.png"
              alt="Gegenüberstellung: links ein einzelner Entwickler mit drei frei wählbaren Modellen, darunter das Wort Vorteil, rechts dieselbe Freiheit im Unternehmen als Stapel aus Verträge, Schlüssel, Prüfung und Interne Vorgabe, darunter das Wort Aufgabe"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              In einer Firma mit acht oder achtzig Entwicklern kippt dieselbe
              Eigenschaft. Aus <em>ihr könnt jedes Modell nehmen</em> wird{" "}
              <em>ihr müsst festlegen, welches erlaubt ist</em>. Daran hängen
              mehrere Verträge statt einem, eine Schlüsselverwaltung, eine
              Sicherheitsprüfung je Anbieter und eine interne Vorgabe, die
              jemand pflegt. Ohne diese Vorgabe arbeiten Kollegen mit
              unterschiedlichen Modellen an derselben Codebasis, und die
              Ergebnisse werden uneinheitlich, ohne dass jemand sagen kann,
              warum.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der echte Wert der Freiheit liegt woanders, und er ist real:
              Unabhängigkeit von den Entscheidungen eines Anbieters. Preise
              steigen, Modelle werden abgekündigt, Zugänge werden gekappt. Im
              Januar 2026 hat Anthropic die Nutzung der eigenen Abos durch
              Drittwerkzeuge gesperrt, und wer OpenCode genau deswegen
              eingeführt hatte, stand über Nacht ohne den geplanten Bezugsweg
              da. Genau gegen diese Klasse von Ereignissen schützt die
              Wahlfreiheit.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Unser Rat aus mehreren Projekten: Wählt die Freiheit nur, wenn ihr
              einen zweiten Bezugsweg konkret benennen könnt, den ihr ziehen
              würdet. Sonst zahlt ihr die laufenden Kosten einer Option, die ihr
              nie nutzt. Welche anderen Werkzeuge in diese Überlegung gehören,
              steht in{" "}
              <Link
                href="/blog/claude-code-alternativen"
                className="text-primary-600 hover:underline"
              >
                Claude Code Alternativen
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="wann-was">
              Wann welches Werkzeug die richtige Wahl ist
            </Typo.H2>
            <Typo.Paragraph>
              <strong>Claude Code passt</strong>, wenn ein Vertragspartner
              genügt und eure Datenschutzprüfung das trägt; wenn es niemanden
              gibt, der Modellauswahl und Schlüssel dauerhaft pflegt; und wenn
              ihr euch auf die Ergebnisgüte verlassen wollt, ohne sie intern zu
              bewerten. Das ist der Normalfall im Mittelstand, und es ist keine
              Verlegenheitslösung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>OpenCode passt</strong>, wenn Quellcode das eigene Netz
              nicht verlassen darf und ihr deshalb lokal betreibt; wenn ihr
              jemanden habt, der die Modellwahl als laufende Aufgabe übernimmt;
              oder wenn ihr bewusst keine Abhängigkeit von einer
              Anbieterentscheidung eingehen wollt und den Preis dafür kennt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Beide parallel zu betreiben ist möglich und in Teams mit
              unterschiedlich sensiblen Projekten sogar sinnvoll: das offene
              Werkzeug mit lokalem Modell für das eine Repository, das fertige
              Produkt für den Rest. Nur sollte das eine Entscheidung sein und
              kein Zustand, der entsteht, weil niemand eine getroffen hat.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="vorfrage">
              Die Vorfrage: Habt ihr überhaupt ein Entwicklungsteam?
            </Typo.H2>
            <Typo.Paragraph>
              Diese Frage fehlt in jedem Vergleich, und sie erledigt einen guten
              Teil der Anfragen, die uns erreichen. Beide Werkzeuge sind
              Werkzeuge für Leute, die Software schreiben und den Output
              beurteilen können. Wer keine eigene Entwicklung hat, bekommt mit
              keinem von beiden ein brauchbares Ergebnis, sondern Code, den
              niemand prüfen kann.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wenn das eure Lage ist, ist die richtige Frage nicht, welcher
              Coding-Agent besser ist, sondern welcher Prozess bei euch heute
              Zeit frisst und ob er sich ohne eigene Softwareentwicklung
              automatisieren lässt. Das ist meistens der Fall, und es ist der
              schnellere Weg zu einem Ergebnis.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="entscheidung">Die Entscheidung in drei Regeln</Typo.H2>
            <Typo.Paragraph>
              <strong>Regel 1.</strong> Wenn euer Quellcode das Haus nicht
              verlassen darf, ist die Antwort OpenCode mit lokalem Modell. Alle
              anderen Kriterien sind dann nachgeordnet, auch die Ergebnisgüte.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Regel 2.</strong> Wenn er das Haus verlassen darf und ihr
              niemanden habt, der Modelle und Schlüssel pflegt, ist die Antwort
              Claude Code. Die gesparte Lizenz ist billiger als die halbe
              Stelle, die ihr sonst dafür einplanen müsst.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Regel 3.</strong> In allen übrigen Fällen entscheidet, ob
              ihr einen zweiten Bezugsweg konkret benennen könnt. Könnt ihr das,
              nehmt OpenCode mit eigenem Anbieterkonto. Könnt ihr es nicht, ist
              die Freiheit eine Option, die ihr bezahlt und nicht zieht.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="pilot">Der Zwei-Wochen-Pilot statt der Bauchentscheidung</Typo.H2>
            <Typo.Paragraph>
              Die drei Regeln beantworten die meisten Fälle. Wenn sie es nicht
              tun, entscheidet nicht die Diskussion, sondern ein kurzer Lauf mit
              echten Aufgaben.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/opencode-vs-claude-code/pilot.png"
              alt="Zeitstrahl eines zweiwöchigen Pilotlaufs mit Woche 1 und Woche 2, darunter die drei Messgrößen Reviewzeit, Nacharbeit und Betreuung sowie zwei gestrichelt umrandete Abbruchkriterien"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Setzt zwei bis drei Entwickler darauf, nehmt echte Tickets aus dem
              laufenden Backlog und nicht die aufgeräumte Demo-Aufgabe. Woche
              eins mit dem einen Werkzeug, Woche zwei mit dem anderen, gleiche
              Art von Aufgaben.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Gemessen wird nicht Geschwindigkeit, sondern:{" "}
              <strong>Reviewzeit je Änderung</strong> (die Größe, die euch
              tatsächlich Geld kostet), <strong>Anteil der Vorschläge, der
              ohne Nacharbeit durchgeht</strong>, und{" "}
              <strong>Betreuungszeit</strong>, also wie viele Stunden jemand mit
              Einrichtung, Schlüsseln und Modellwahl verbracht hat. Der letzte
              Wert entscheidet den Vergleich in der Praxis am häufigsten und
              wird am häufigsten nicht gemessen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zwei Abbruchkriterien vorher festlegen: Wenn die Reviewzeit
              steigt statt zu sinken, ist das Werkzeug für diese Codebasis
              falsch eingestellt oder das Modell zu schwach. Und wenn nach zwei
              Wochen niemand benennen kann, wer die Modellpflege dauerhaft
              übernimmt, dann ist die offene Variante keine Option, egal wie gut
              der Pilot gelaufen ist.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit</Typo.H2>
            <Typo.Paragraph>
              OpenCode gegen Claude Code ist kein Vergleich zweier Produkte,
              sondern die Wahl zwischen einem fertigen Produkt und einem Gerüst,
              das ihr selbst füllt. Das Gerüst ist billiger in der Lizenz und
              teurer in der Betreuung, es ist offener und verlangt dafür
              Entscheidungen, die euch das Produkt abnimmt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Datenschutzfrage, wegen der die meisten Unternehmen überhaupt
              auf OpenCode schauen, beantwortet es nur in einer einzigen
              Konfiguration wirklich: mit einem Modell im eigenen Netz. In allen
              anderen Fällen verschiebt es die Frage auf den Anbieter, den ihr
              einträgt, und manchmal auf einen schlechteren als den, von dem ihr
              wegwolltet. Wer das weiß, trifft die Entscheidung in einer halben
              Stunde. Wer es nicht weiß, diskutiert Benchmarks.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="faq">Häufige Fragen</Typo.H2>
            <FaqContainer
              faqs={[
                {
                  question:
                    "Kann man ein Claude-Abo in OpenCode weiterverwenden?",
                  answer:
                    "Nein. Anthropic hat die Anmeldung von Drittwerkzeugen an die eigenen Abos im Januar 2026 gesperrt. Wer Claude-Modelle in OpenCode nutzen will, braucht dafür einen API-Schlüssel oder den Bezug über ein Cloud-Konto, und das ist eine andere Abrechnung als das Abo.",
                },
                {
                  question: "Ist OpenCode DSGVO-konform?",
                  answer:
                    "Die Frage ist so nicht beantwortbar, weil OpenCode selbst kein Modell betreibt und damit keine Daten verarbeitet. Entscheidend ist der Anbieter, dessen Schlüssel ihr eintragt: Bei einem eigenen Konto in einer EU-Region ist die Lage vergleichbar mit anderen Cloud-Diensten, bei einem Vermittlungsdienst kommt mindestens ein weiterer Verarbeiter dazu, und nur bei einem lokalen Modell verlässt der Code das eigene Netz gar nicht.",
                },
                {
                  question: "Braucht OpenCode eine eigene GPU?",
                  answer:
                    "Nur für den lokalen Betrieb. Wer OpenCode mit einem Anbieter-Schlüssel nutzt, braucht keine besondere Hardware. Erst wenn das Modell im eigenen Netz laufen soll, kommt Hardware dazu, und dann ist sie in der Regel der größte Kostenblock der ganzen Variante.",
                },
                {
                  question: "Kann man beide Werkzeuge parallel betreiben?",
                  answer:
                    "Ja, und in Teams mit unterschiedlich sensiblen Projekten ist das oft die beste Lösung: das offene Werkzeug mit lokalem Modell für die Repositories mit Auflagen, das fertige Produkt für alles andere. Wichtig ist, dass es eine bewusste Aufteilung ist und keine, die entsteht, weil jeder etwas anderes installiert.",
                },
                {
                  question:
                    "Was passiert mit unserem Quellcode bei Claude Code?",
                  answer:
                    "Er wird an Anthropic übertragen und dort verarbeitet, um die Antwort zu erzeugen. Es gibt dafür einen Vertragspartner und einen Auftragsverarbeitungsvertrag, und die Aufbewahrung hängt von der gewählten Vertragsstufe ab. Prüft konkret, welche Stufe ihr habt, statt anzunehmen, welche ihr habt: Das ist der Punkt, an dem die Datenschutzprüfung in der Praxis am häufigsten hängt.",
                },
                {
                  question:
                    "Ist OpenCode langsamer als Claude Code?",
                  answer:
                    "In dem einen Testlauf, den fast alle Vergleiche zitieren, war es das. Aussagekräftig ist das kaum, weil dort ein bestimmtes Modell, ein bestimmter Zeitpunkt und vier Aufgaben gemessen wurden. Für den Betrieb ist die relevantere Größe ohnehin die Reviewzeit je Änderung, und die hängt am eingesetzten Modell, nicht am Werkzeug.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu OpenCode und Claude Code
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="unterschied">
            Der Unterschied
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="gemeinsam">
            Was beide gleich machen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="datenweg">
            Achse 1: Datenweg
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="kosten">
            Achse 2: Kosten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="modellfreiheit">
            Achse 3: Modellfreiheit
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="wann-was">
            Wann welches Werkzeug
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="vorfrage">
            Die Vorfrage
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="entscheidung">
            Drei Regeln
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="pilot">
            Der Pilot
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
