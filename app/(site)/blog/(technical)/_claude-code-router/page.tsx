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
  slug: "claude-code-router",
  author: "Max Hänsel",
  date: "2026-10-22",
  image: "/blog/claude-code-router/hero.png",
  tags: ["ki", "development"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Claude Code Router: was die Anleitungen verschweigen",
  description:
    "Der Claude Code Router schickt eure Coding-Anfragen an günstigere Modelle. Jede rankende Anleitung beschreibt allerdings eine Version, die es seit Juni nicht mehr gibt, und keine rechnet vor, woran die Ersparnis wirklich hängt.",
  openGraph: {
    title: "Claude Code Router: was die Anleitungen verschweigen",
    description:
      "Node 18 statt Node 22, config.json statt Oberfläche: Die Tutorials zum Claude Code Router sind einen Hauptversionssprung alt. Dieser Beitrag prüft den aktuellen Stand, den Widerspruch der Sparrechnungen und die Drittlandfrage.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-code-router/hero.png",
        width: 1200,
        height: 630,
        alt: "Nahaufnahme eines Patchfelds in einem Holzschrank, aus dem ein Bündel heller Netzwerkkabel in unterschiedliche Richtungen führt",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-code-router",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Claude Code Router: was die Anleitungen verschweigen
        </BlogHero.Headline>

        <GeoSummary>
          Der Claude Code Router ist ein quelloffenes Werkzeug, das zwischen
          eurem Coding-Agenten und den Modellanbietern sitzt und jede Anfrage
          an ein anderes, meist günstigeres Modell weiterreicht. Er läuft
          lokal, steht unter MIT-Lizenz und hat auf GitHub gut 37.000 Sterne.
          Für wen sich das lohnt, hängt an einer Größe, die keine der
          rankenden Anleitungen nennt: der Ausgangsbasis. Und alle diese
          Anleitungen beschreiben den Stand vor Version 3.0.0 vom 25. Juni
          2026, weshalb ihre Installationsbefehle heute mit einem Fehler
          abbrechen. Dieser Beitrag bringt den Stand auf heute, rechnet die
          Ersparnis ehrlich und behandelt die Frage, die für deutsche
          Unternehmen zuerst kommt: Wohin gehen eure Daten?
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>8 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-10-22">
            22. Oktober 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-code-router/hero.png"
          alt="Nahaufnahme eines Patchfelds in einem hellen Holzschrank, aus dem ein Bündel heller Netzwerkkabel fächerförmig in verschiedene Richtungen läuft"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div id="anlass">
            <Typo.Paragraph>
              Die Idee hinter dem Claude Code Router ist in einem Satz erzählt:
              Claude Code ist ein gutes Werkzeug, aber das Modell dahinter
              kostet Geld, und nicht jede Aufgabe braucht das teuerste Modell.
              Der Router setzt sich deshalb dazwischen und entscheidet pro
              Anfrage, welcher Anbieter sie beantwortet. Kleine Routinearbeit
              geht an ein günstiges Modell, die schwierige Stelle weiter an
              Claude.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Wir haben für diesen Beitrag die Seiten gelesen, die auf dem
              deutschen Suchergebnis dazu oben stehen, dazu die
              Betreiberdokumentation und die Rohdaten aus GitHub und der
              npm-Registry. Der wichtigste Befund hat mit Kosten erst einmal
              gar nichts zu tun: Wenn ihr einer dieser Anleitungen folgt,
              kommt ihr nicht bis zur ersten Konfigurationszeile. Sie
              beschreiben alle dieselbe Version, und die ist seit Juni 2026
              überholt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="versionsbruch">
            <Typo.H2>
              Alle Anleitungen beschreiben eine Version, die es nicht mehr gibt
            </Typo.H2>

            <Typo.Paragraph>
              Das Projekt hat am 25. Juni 2026 mit Version 3.0.0 seine
              Architektur gewechselt. Aus einem Kommandozeilenwerkzeug mit
              einer Konfigurationsdatei wurde eine lokale Steuerzentrale mit
              Oberfläche. Seitdem sind in elf Wochen 24 weitere Versionen
              erschienen, zuletzt 3.1.0 am 10. September 2026. Das ist im
              Schnitt alle dreieinhalb Tage eine Veröffentlichung.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Die Tutorials, die zu diesem Suchbegriff oben stehen, beschreiben
              ausnahmslos den Stand davor. Sie lassen euch{" "}
              <code>~/.claude-code-router/config.json</code> von Hand anlegen,
              mit Abschnitten wie <code>Router.default</code>,{" "}
              <code>background</code>, <code>think</code> und{" "}
              <code>longContext</code>, und starten das Ganze mit{" "}
              <code>ccr code</code>. Nichts davon ist der heutige Weg.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-router/versionsbruch.png"
              alt="Zwei Pfade untereinander: der obere mit Node 18, config.json von Hand und ccr code endet an einem grauen X, der untere mit Node 22, Oberfläche und ccr ui endet an einem offenen grünen Kreis"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Am deutlichsten wird es an einer Zahl, die man nachschlagen kann,
              ohne irgendetwas zu installieren. Das npm-Paket verlangt in
              seinem Feld <code>engines.node</code> heute{" "}
              <strong>Node.js 22 oder neuer</strong>. Die ausführlichste der
              gelesenen Anleitungen nennt Node 18 als Voraussetzung. Wer sie
              befolgt, bekommt beim <code>npm install -g</code> einen
              Abbruch wegen unpassender Laufzeitversion und sucht den Fehler
              dann an der falschen Stelle.
            </Typo.Paragraph>

            <Typo.Paragraph>
              So sieht der heutige Weg aus: entweder die Desktop-Anwendung aus
              den GitHub-Releases installieren, oder das npm-Paket global
              installieren und mit <code>ccr ui</code> starten. Die Oberfläche
              liegt dann auf Port 3458, der eigentliche Modell-Zugang auf Port
              3456. Eingerichtet wird in dieser Reihenfolge: Anbieter
              hinterlegen, Server starten, Agenten-Profil zuweisen. Routing-
              Regeln kommen danach, nicht davor.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Wir schreiben hier bewusst keine Klickstrecke aus. Bei einer
              Veröffentlichung alle dreieinhalb Tage veraltet jede
              Schritt-für-Schritt-Anleitung schneller, als man sie pflegen
              kann. Genau daran sind die anderen Texte gescheitert.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="was-er-heute-ist">
            <Typo.H2>Was der Router heute eigentlich ist</Typo.H2>

            <Typo.Paragraph>
              Der Name führt inzwischen in die Irre. Das Werkzeug ist kein
              Claude-Code-Zubehör mehr, sondern ein lokaler Verteiler für
              Coding-Agenten allgemein. Neben Claude Code hängen dort Codex,
              Grok CLI, Kimi CLI, Kilo Code, OpenCode und weitere Werkzeuge
              dran. Auf der anderen Seite stehen die Anbieter: Anthropic,
              OpenAI, Google, OpenRouter, DeepSeek, Mistral, Moonshot, Z.AI
              und lokale Modelle über Ollama.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-router/architektur.png"
              alt="Hub-Diagramm: vier Coding-Agenten links zeigen auf einen zentralen Router auf dem eigenen Rechner, von dort führen Pfeile weiter zu vier Modellanbietern rechts"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Praktisch heißt das: Ihr pflegt die Zugangsdaten und die
              Modellauswahl an einer Stelle statt in jedem Werkzeug einzeln,
              und ihr seht in einem Protokoll, welcher Anbieter eine Anfrage
              tatsächlich beantwortet hat, mit Laufzeit, Tokenverbrauch und
              geschätzten Kosten. Dazu kommen Wiederholversuche und
              Ersatzmodelle, wenn ein Anbieter ausfällt.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Ein Detail, das nur eine der gelesenen Quellen beiläufig erwähnt
              und das im Alltag nervt: Die Kopfzeile in Claude Code zeigt
              weiter das voreingestellte Claude-Modell an, egal welches
              Backend gerade antwortet. Ohne Blick ins Protokoll wisst ihr
              nicht, was eure letzte Antwort gerechnet hat. Wer den Router
              einsetzt, muss sich das Protokolllesen angewöhnen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="sparrechnung">
            <Typo.H2>Die Sparrechnung und ihr Widerspruch</Typo.H2>

            <Typo.Paragraph>
              Das Sparargument ist der Grund, warum die meisten Leute überhaupt
              auf das Werkzeug stoßen. Interessanterweise widersprechen sich
              die Quellen dabei so deutlich, dass man daraus mehr lernt als aus
              jeder einzelnen Zahl.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Aussage</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Wert</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>
                    Kosten ohne Router, Vielnutzer mit 100 Mio. Token
                  </DataTable.Cell>
                  <DataTable.Cell>1.500 bis 1.800 USD im Monat</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    Kosten ohne Router, Abo-Nutzer
                  </DataTable.Cell>
                  <DataTable.Cell>
                    20 USD (Pro) bis 200 USD (Max)
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    Kosten mit Router, gemischtes Routing
                  </DataTable.Cell>
                  <DataTable.Cell>15 bis 40 USD im Monat</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Beworbene Ersparnis</DataTable.Cell>
                  <DataTable.Cell>Faktor 10</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    Realistische Ersparnis laut derselben Quelle
                  </DataTable.Cell>
                  <DataTable.Cell>Faktor 3 bis 5</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Die Ausgangsbasis in diesen Texten schwankt zwischen 20 und 1.800
              Dollar im Monat, also um den Faktor 90. Keiner der Texte sagt
              dazu, dass die eigene Sparquote vollständig an dieser Basis
              hängt und nicht am Router.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-router/kostenbasis.png"
              alt="Drei Ausgangsbasen, Pro-Abo, Max-Abo und API pro Token, führen über einen Router zur Ersparnis, darunter die Bildunterschrift hängt links, nicht rechts"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Rechnet es einmal für euren Fall durch, dann fällt die Sache
              schnell auseinander. Claude Code ist bereits im Pro-Abo für 20
              Dollar im Monat enthalten. Ein gemischtes Routing-Setup liegt
              nach der einzigen Quelle, die überhaupt konkret rechnet, bei 15
              bis 40 Dollar im Monat. Für jemanden im Pro-Abo ist der Router
              damit im besten Fall ein Nullsummenspiel und im schlechteren
              Fall teurer, dazu mit mehr Teilen, die kaputtgehen können.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Richtig interessant wird er in zwei Situationen: Wenn ihr über
              die API abrechnet und der Verbrauch wirklich hoch ist, oder wenn
              mehrere Leute im Team mehrere Werkzeuge nutzen und ihr die
              Abrechnung an einer Stelle sehen wollt. Wie sich die Abo- und
              API-Modelle zueinander verhalten, haben wir in{" "}
              <Link
                href="/blog/claude-code-kosten"
                className="text-primary-600 hover:underline"
              >
                Claude Code Kosten
              </Link>{" "}
              aufgeschlüsselt, und was das Werkzeug ohne Router überhaupt
              leistet, steht in{" "}
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

          <div id="nicht-in-der-rechnung">
            <Typo.H2>Was in keiner dieser Rechnungen steht</Typo.H2>

            <Typo.Paragraph>
              Drei Posten fehlen in allen Sparrechnungen, und alle drei kosten
              Zeit statt Geld, weshalb sie in keiner Tabelle auftauchen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Erstens die Werkzeugaufrufe.</strong> Claude Code
              arbeitet, indem es Dateien liest, schreibt und Befehle ausführt.
              Das setzt voraus, dass das Modell dahinter Funktionsaufrufe
              beherrscht. Viele kleinere offene Modelle können das nicht oder
              schlecht. Der Router verbindet trotzdem, und ihr bekommt dann
              leere Antworten oder Fehler genau dann, wenn eine Datei geändert
              werden soll. Das ist der häufigste Abbruchgrund, und die einzige
              gelesene Quelle, die ihn deutlich benennt, ist eine
              englischsprachige Rezension. Der deutschsprachige Leitfaden
              erwähnt ihn mit keinem Wort.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Zweitens das Mitwachsen.</strong> 24 Veröffentlichungen
              in elf Wochen und 1.131 offene Vorgänge auf GitHub sind für ein
              Hobbyprojekt normal und für ein Werkzeug im Arbeitsweg jedes
              Entwicklers eine eigene Kostenstelle. Das Projekt steht unter
              MIT-Lizenz, es gibt keinen Support und keine Zusicherung, dass
              das nächste Update eure Konfiguration überlebt.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>Drittens die Qualität.</strong> Ein günstigeres Modell,
              das zweimal ansetzt, ist nicht billiger als ein teures Modell,
              das einmal richtig liegt. Diese Rechnung kann niemand allgemein
              aufmachen, sie hängt an eurem Code. Sie gehört aber in die
              Entscheidung, statt am Ende nur die Rechnung des Anbieters zu
              vergleichen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="drittland">
            <Typo.H2>Die Frage, die kein Guide stellt</Typo.H2>

            <Typo.Paragraph>
              Hier liegt für uns der eigentliche Punkt. Achtzehn Seiten auf dem
              Suchergebnis, zwei davon auf Deutsch, und keine davon stellt die
              Frage, die ein deutsches Unternehmen zuerst stellen muss: Wohin
              geht der Code, wenn der Router ihn weiterreicht?
            </Typo.Paragraph>

            <Typo.Paragraph>
              Die eingebauten Anbieter-Voreinstellungen umfassen DeepSeek,
              Moonshot, Kimi Code, Z.AI und Bailian. Das sind sämtlich Anbieter
              mit Verarbeitung in China. Und es sind genau die Anbieter, die
              die Sparrechnung überhaupt erst tragen: Der günstige Weg und der
              Weg mit der schwierigsten Vertragslage sind derselbe Weg.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-router/drittland.png"
              alt="Zwei Spalten: links günstig pro Token mit DeepSeek, Moonshot und Z.AI, darunter Drittland in Orange, rechts teurer pro Token mit Anthropic, Mistral und Ollama lokal, darunter EU oder lokal in Blau"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Dass der Router lokal läuft, ändert daran nichts. Lokal ist nur
              die Verteilstelle. Der Inhalt der Anfrage geht an den Anbieter,
              den ihr hinterlegt habt, und eine Anfrage aus Claude Code
              enthält nicht nur die Frage, sondern auch den Ausschnitt eures
              Repositories, den das Werkzeug zur Beantwortung braucht. Darin
              stehen je nach Projekt Kundennamen in Testdaten, Zugangsdaten in
              Konfigurationsbeispielen und Kommentare, die niemand für die
              Öffentlichkeit geschrieben hat.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Damit gelten für diesen Weg dieselben Anforderungen wie für jeden
              anderen Auftragsverarbeiter: ein Vertrag, eine Rechtsgrundlage
              für die Übermittlung in ein Drittland und eine Aussage darüber,
              ob eure Inhalte zum Training verwendet werden. Für die
              chinesischen Anbieter ist das im Selbstbedienungstarif in aller
              Regel nicht geklärt. Anthropic schließt Training auf
              Kundeninhalten in allen bezahlten Plänen vertraglich aus, was in
              diesem Vergleich ein handfester Unterschied ist und keine
              Geschmacksfrage. Wie man dieselbe Prüfung für ein anderes
              Werkzeug führt, zeigen wir an{" "}
              <Link
                href="/blog/chatgpt-dsgvo-konform-nutzen"
                className="text-primary-600 hover:underline"
              >
                ChatGPT DSGVO-konform nutzen
              </Link>
              .
            </Typo.Paragraph>

            <Typo.Paragraph>
              Eine Randnotiz, die zum Bild gehört und in keinem Guide steht:
              Moonshot AI, Anbieter der Kimi-Modelle, sponsert das Projekt und
              wird in der Projektbeschreibung ganz oben beworben. Kimi ist
              zugleich eine der eingebauten Voreinstellungen. Das macht das
              Werkzeug nicht schlechter, es erklärt nur, warum die Auswahl der
              Voreinstellungen aussieht, wie sie aussieht.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Wenn die Vorgabe lautet, dass Quellcode das Haus nicht verlässt,
              bleibt innerhalb desselben Werkzeugs ein Weg: den Router
              ausschließlich auf ein lokales Modell zeigen lassen. Was dabei
              trotzdem noch nach außen geht, haben wir in{" "}
              <Link
                href="/blog/claude-code-mit-ollama"
                className="text-primary-600 hover:underline"
              >
                Claude Code mit Ollama
              </Link>{" "}
              nachgemessen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="entscheidung">
            <Typo.H2>Wann er trägt und wann nicht</Typo.H2>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Eure Lage</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Empfehlung</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>
                    Einzelperson im Pro-Abo, Claude Code reicht
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Lassen. Die Ersparnis ist rechnerisch nicht da, der
                    Betriebsaufwand schon.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    Abrechnung über die API, hoher Verbrauch
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Lohnt sich. Hier greift der Faktor 3 bis 5 wirklich.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    Team mit mehreren Agenten und Anbietern
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Lohnt sich, aber wegen der Übersicht und der Protokolle,
                    nicht wegen des Preises.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    Mandantendaten oder Quellcode mit Personenbezug
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Nur mit lokalem Modell oder EU-Anbieter. Die günstigen
                    Voreinstellungen scheiden aus.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>
                    Ihr wollt Claude Code nur günstiger, ohne Aufwand
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Falsches Werkzeug. Schaut euch stattdessen die
                    Alternativen an.
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Der letzte Fall kommt in unseren Gesprächen am häufigsten vor.
              Wer nur die Rechnung drücken will, ist mit einem anderen
              Werkzeug oder einem anderen Tarif meist besser bedient als mit
              einer zusätzlichen Schicht im Arbeitsweg. Eine Übersicht dazu
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

          <div id="fazit">
            <Typo.H2>Fazit</Typo.H2>

            <Typo.Paragraph>
              Der Claude Code Router ist ein ordentliches Werkzeug für ein
              enges Problem: viele Agenten, viele Anbieter, eine Stelle zur
              Verwaltung. Als Sparwerkzeug wird er überschätzt, weil die
              verbreiteten Rechnungen eine Ausgangsbasis unterstellen, die auf
              die wenigsten zutrifft. Und als Standardweg für ein deutsches
              Unternehmen ist er in der Voreinstellung ungeeignet, weil genau
              die günstigen Anbieter die ungeklärte Vertragslage mitbringen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Die nützlichste Frage vor der Einrichtung ist deshalb nicht
              „welches Modell ist billiger", sondern „was zahle ich heute
              tatsächlich und für welche Daten". Wenn ihr an dieser Stelle
              Klarheit braucht oder eine Vorgabe im Haus habt, an der die
              Standardwege scheitern,{" "}
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
                  question: "Was ist der Claude Code Router?",
                  answer:
                    "Ein quelloffenes Werkzeug unter MIT-Lizenz, das lokal auf eurem Rechner läuft und zwischen einem Coding-Agenten und den Modellanbietern sitzt. Es nimmt die Anfragen des Agenten entgegen und leitet sie je nach Regel an einen von mehreren Anbietern weiter, etwa Anthropic, OpenAI, DeepSeek, Mistral oder ein lokales Modell über Ollama. Seit Version 3 ist es nicht mehr auf Claude Code beschränkt, sondern bedient auch Codex, Grok CLI, Kimi CLI, Kilo Code und OpenCode.",
                },
                {
                  question:
                    "Warum funktioniert die Installation nach den gängigen Anleitungen nicht?",
                  answer:
                    "Weil sie den Stand vor Version 3.0.0 vom 25. Juni 2026 beschreiben. Das npm-Paket verlangt heute in seinem Feld engines.node mindestens Node.js 22, während die verbreiteten Tutorials Node 18 nennen. Die Installation bricht dann mit einem Fehler wegen unpassender Laufzeitversion ab. Auch der Rest stimmt nicht mehr: Die Einrichtung läuft heute über eine Oberfläche, die mit ccr ui auf Port 3458 startet, nicht über eine von Hand angelegte config.json und ccr code.",
                },
                {
                  question:
                    "Wie viel spart man mit dem Claude Code Router wirklich?",
                  answer:
                    "Das hängt fast vollständig daran, was ihr heute zahlt, nicht am Router. Die einzige Quelle mit einer nachvollziehbaren Rechnung nennt für ein gemischtes Routing-Setup 15 bis 40 Dollar im Monat und eine realistische Ersparnis vom Faktor 3 bis 5 statt der beworbenen 10. Wer im Pro-Abo für 20 Dollar sitzt, spart damit nichts, weil die Ausgangsbasis bereits darunter liegt. Wer über die API abrechnet und viel verbraucht, spart deutlich. Eine Quelle nennt für Vielnutzer mit 100 Millionen Token 1.500 bis 1.800 Dollar im Monat als Ausgangswert.",
                },
                {
                  question:
                    "Ist der Claude Code Router DSGVO-konform einsetzbar?",
                  answer:
                    "Der Router selbst läuft lokal und verarbeitet nichts nach außen. Entscheidend ist, welchen Anbieter ihr hinterlegt. Die eingebauten Voreinstellungen umfassen DeepSeek, Moonshot, Kimi Code, Z.AI und Bailian, also Anbieter mit Verarbeitung in China, und das sind zugleich die günstigsten. Für sie braucht ihr einen Auftragsverarbeitungsvertrag und eine Rechtsgrundlage für die Drittlandübermittlung, was im Selbstbedienungstarif meist nicht geklärt ist. Anfragen aus Claude Code enthalten Ausschnitte eures Repositories, also potenziell personenbezogene Daten und Betriebsgeheimnisse. Mit einem lokalen Modell oder einem EU-Anbieter ist der Einsatz dagegen unproblematisch.",
                },
                {
                  question:
                    "Warum liefert Claude Code über den Router manchmal leere Antworten?",
                  answer:
                    "Fast immer wegen fehlender Werkzeugaufrufe. Claude Code arbeitet, indem es Dateien liest, schreibt und Befehle ausführt, und das setzt voraus, dass das dahinterliegende Modell Funktionsaufrufe beherrscht. Viele kleinere offene Modelle können das nicht oder nur unzuverlässig. Der Router verbindet trotzdem, der Fehler zeigt sich erst beim ersten Dateizugriff. Prüft in einem solchen Fall zuerst, welches Modell tatsächlich geantwortet hat, denn die Kopfzeile in Claude Code zeigt weiterhin das voreingestellte Claude-Modell an, unabhängig vom echten Backend.",
                },
                {
                  question:
                    "Lohnt sich der Router für ein einzelnes Entwicklerteam?",
                  answer:
                    "Wenn es um Übersicht geht, ja. Zugangsdaten und Modellauswahl liegen an einer Stelle statt in jedem Werkzeug einzeln, und die Protokolle zeigen pro Anfrage Anbieter, Modell, Laufzeit, Tokenverbrauch und geschätzte Kosten. Wenn es um den Preis geht, rechnet vorher nach. Dazu kommt der Pflegeaufwand: In elf Wochen sind 24 Versionen erschienen, es gibt 1.131 offene Vorgänge und keinen Support, weil es ein Gemeinschaftsprojekt ohne Anbindung an Anthropic ist.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zum Claude Code Router
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="anlass">
            Worum es geht
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="versionsbruch">
            Der Versionsbruch
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="was-er-heute-ist">
            Was er heute ist
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="sparrechnung">
            Die Sparrechnung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="nicht-in-der-rechnung">
            Was nicht drinsteht
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="drittland">
            Wohin die Daten gehen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="entscheidung">
            Wann er trägt
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
