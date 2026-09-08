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
  slug: "claude-code-mit-ollama",
  author: "Max Hänsel",
  date: "2026-10-19",
  image: "/blog/claude-code-mit-ollama/hero.png",
  tags: ["ki", "development"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Claude Code mit Ollama: lokal betreiben, was das wirklich heißt",
  description:
    "Claude Code auf Ollama umstellen dauert drei Zeilen. Dieser Beitrag prüft, was danach trotzdem noch nach außen geht, was die Hardware gegen ein Abo kostet und ab welcher Aufgabengröße lokale Modelle abreißen.",
  openGraph: {
    title: "Claude Code mit Ollama: lokal betreiben, was das wirklich heißt",
    description:
      "Alle Anleitungen versprechen, der Code verlasse nie euren Rechner. Vier Kanäle bleiben trotzdem offen, und einer davon lässt sich nicht mit dem Sammelschalter zudrehen.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-code-mit-ollama/hero.png",
        width: 1200,
        height: 630,
        alt: "Eine Person von hinten am Schreibtisch, darunter ein Rechner mit leuchtender Status-LED",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-code-mit-ollama",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Claude Code mit Ollama: was „lokal" wirklich heißt
        </BlogHero.Headline>

        <GeoSummary>
          Claude Code lässt sich über drei Umgebungsvariablen auf einen lokalen
          Ollama-Server umbiegen, statt auf die Anthropic-API zuzugreifen. Die
          Modellanfragen bleiben dann tatsächlich auf dem eigenen Rechner. Vier
          weitere Verbindungen zu Anthropic bleiben aber standardmäßig offen,
          und eine davon lässt sich nicht über den Sammelschalter abschalten.
          Dieser Beitrag zeigt das Setup, benennt die vier Kanäle, rechnet die
          Hardware gegen das Abo (Break-even nach gut 40 Monaten) und erklärt,
          warum die offizielle Kontextempfehlung genau dort anfängt, wo lokale
          Modelle nachlassen.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>10 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-10-19">
            19. Oktober 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-code-mit-ollama/hero.png"
          alt="Eine einzelne Person von hinten am nächtlichen Schreibtisch, der Bildschirm unscharf, unter dem Tisch ein Rechner mit einer kleinen leuchtenden Status-LED"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div id="versprechen">
            <Typo.Paragraph>
              Es gibt eine Sorte Anleitung, die im Moment sehr gut funktioniert:
              „Claude Code kostenlos und lokal mit Ollama". Wir haben für
              diesen Beitrag die fünf Artikel gelesen, die dazu gerade oben
              stehen, zusammen rund 13.000 Wörter, dazu die offizielle
              Ollama-Dokumentation. Alle sechs beschreiben dasselbe Setup, und
              alle sechs versprechen dieselben zwei Dinge: es kostet nichts,
              und der Code verlässt nie euren Rechner.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Das Setup stimmt. Die beiden Versprechen stimmen so nicht. Nicht,
              weil jemand lügt, sondern weil in keinem der sechs Texte jemand
              nachgesehen hat, was Claude Code selbst noch sendet, wenn man es
              auf einen lokalen Server zeigen lässt, und weil keiner die zweite
              Hälfte der Kostenrechnung aufmacht. Dieser Beitrag holt beides
              nach und benennt zusätzlich einen Widerspruch zwischen den
              Anleitungen, der darüber entscheidet, ob das Ganze an einem
              echten Projekt überhaupt läuft.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="setup">
            <Typo.H2>Das Setup, kurz gefasst</Typo.H2>

            <Typo.Paragraph>
              Claude Code spricht mit einem Endpunkt, der die Anthropic-Messages-API
              versteht. Ollama bringt diese Kompatibilität mittlerweile mit.
              Deshalb genügt es, drei Umgebungsvariablen zu setzen, damit die
              Anfragen nicht mehr zu Anthropic gehen, sondern an den lokalen
              Server auf Port 11434.
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <code>ANTHROPIC_BASE_URL</code> zeigt auf den lokalen
                Ollama-Server statt auf die Anthropic-API.
              </Typo.ListItem>
              <Typo.ListItem>
                <code>ANTHROPIC_AUTH_TOKEN</code> bekommt einen Platzhalterwert,
                weil ein lokaler Server keinen echten Schlüssel prüft.
              </Typo.ListItem>
              <Typo.ListItem>
                <code>ANTHROPIC_API_KEY</code> wird geleert, damit kein
                hinterlegter Schlüssel den Platzhalter überstimmt.
              </Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              Danach startet man Claude Code mit einem lokal vorhandenen Modell.
              Wer den Weg über die Cloud-Modelle kennt, findet die Einrichtung
              in{" "}
              <Link
                href="/blog/claude-code-installieren"
                className="text-primary-600 hover:underline"
              >
                Claude Code installieren
              </Link>{" "}
              beschrieben; was das Werkzeug überhaupt tut, steht in{" "}
              <Link
                href="/blog/was-ist-claude-code"
                className="text-primary-600 hover:underline"
              >
                Was ist Claude Code
              </Link>
              . Der Rest dieses Beitrags setzt beides voraus, weil das Setup der
              unstrittige Teil ist. Interessant wird es danach.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Ein Punkt vorweg, der oft untergeht und den nur eine der gelesenen
              Quellen deutlich sagt: Sie bekommen dabei nicht Claude. Sie
              bekommen die Bedienoberfläche und die Werkzeuglogik von Claude
              Code, angetrieben von einem völlig anderen, offenen Modell. Die
              Intelligenz kommt vom Modell, nicht vom Rahmen. Wer das verwechselt,
              erklärt sich später die Ergebnisse falsch.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="datenwege">
            <Typo.H2>
              Was trotzdem noch nach außen geht
            </Typo.H2>

            <Typo.Paragraph>
              Hier liegt der eigentliche Grund für diesen Beitrag. Das
              Datenschutz-Argument ist in allen sechs Quellen das
              Hauptargument, und in keiner wird es zu Ende geführt. Wir haben
              deshalb nicht die Anleitungen zitiert, sondern die
              Betreiberdokumentation von Claude Code selbst gelesen, und zwar
              den Abschnitt zu Telemetrie und Standardverhalten je Anbieter.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Der entscheidende Punkt ist unscheinbar: Wenn Sie nur
              <code> ANTHROPIC_BASE_URL</code> umbiegen, ändert das für Claude
              Code nicht den Anbieter. Aus seiner Sicht sprechen Sie weiterhin
              mit der Claude API, sie steht nur woanders. Und in der Spalte
              „Claude API" stehen die Nebenkanäle auf „standardmäßig an". Wer
              dagegen offiziell auf einen anderen Anbieter wechselt, etwa
              Bedrock oder Foundry, bekommt sie automatisch abgeschaltet. Der
              lokale Weg über Ollama fällt in die schlechtere der beiden
              Kategorien, und niemand weist darauf hin.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-mit-ollama/datenwege.png"
              alt="Diagramm: der Modellverkehr bleibt zwischen Claude Code und Ollama innerhalb des eigenen Rechners, während vier weitere Verbindungen von Claude Code nach api.anthropic.com hinausführen"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Vier Kanäle bleiben offen. Drei davon lassen sich abschalten, der
              vierte nicht mit demselben Schalter:
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Kanal</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Was geht raus</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Abschaltbar</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>Nutzungsmetriken</DataTable.Cell>
                  <DataTable.Cell>
                    Laufzeit, Zuverlässigkeit, Nutzungsmuster. Kein Code, keine
                    Prompts, keine Dateipfade.
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Ja, <code>DISABLE_TELEMETRY=1</code>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Feedback-Berichte</DataTable.Cell>
                  <DataTable.Cell>
                    Nur auf Ihren Befehl, dann aber mit Gesprächsverlauf
                    einschließlich Code.
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Ja, <code>DISABLE_FEEDBACK_COMMAND=1</code>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Sitzungs-Umfragen</DataTable.Cell>
                  <DataTable.Cell>
                    Die Bewertung selbst. Die Rückfrage nach dem Transkript
                    schickt erst auf ausdrückliche Zustimmung etwas.
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Ja, <code>CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY=1</code>
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>WebFetch-Domainprüfung</DataTable.Cell>
                  <DataTable.Cell>
                    Der angefragte Hostname geht vor jedem Abruf an
                    Anthropic, gegen eine Sperrliste. Nur der Hostname, nicht
                    Pfad oder Inhalt.
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Nicht über den Sammelschalter. Nur über die Einstellung{" "}
                    <code>skipWebFetchPreflight</code>
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Der Sammelschalter{" "}
              <code>CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC</code> deckt die
              ersten drei ab. Die WebFetch-Prüfung nimmt die Dokumentation
              ausdrücklich davon aus: Sie läuft unabhängig vom gewählten
              Anbieter, und wer sie abstellt, ruft URLs künftig ohne Abgleich
              gegen die Sperrliste ab. Das ist eine bewusste Abwägung, aber
              eben eine, die man treffen muss und nicht geschenkt bekommt.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Nichts davon ist ein Skandal. Metriken enthalten keinen Code,
              Feedback geht nur auf Befehl, und beim Hostnamen geht es um eine
              Sicherheitsprüfung. Der Punkt ist ein anderer: Wenn Sie diesen
              Aufbau wählen, weil eine interne Vorgabe „kein Code und keine
              Metadaten zu Dritten" verlangt, dann ist die Voreinstellung nicht
              das, was Sie brauchen. „Lokal" ist hier ein Ergebnis, das man
              herstellen muss, kein Zustand, den das Setup mitliefert.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="kosten">
            <Typo.H2>Die Rechnung, die niemand aufmacht</Typo.H2>

            <Typo.Paragraph>
              Das zweite Versprechen lautet „kostenlos". Alle gelesenen Quellen
              rechnen dafür die Cloud-Seite vor und keine die lokale. Eine
              beziffert den Einstieg in Claude Code sogar mit 100 Dollar im
              Monat, dem Max-Tarif. Das ist schlicht falsch: Claude Code ist
              laut Anbieter bereits in Claude Pro für 20 Dollar im Monat
              enthalten, im Jahresabo für 17. Die Cloud-Seite wird dort also um
              das Fünffache überzeichnet, und der Vergleich fällt entsprechend
              deutlich aus.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Die lokale Seite ist nicht kostenlos, sie ist nur vorbezahlt. Die
              Anleitungen nennen für brauchbare Ergebnisse 16 bis 24 GB
              Grafikspeicher. Die günstigste ernstzunehmende Karte in dieser
              Klasse ist derzeit eine gebrauchte RTX 3090 mit 24 GB, die im
              September 2026 zwischen 800 und 950 Euro gehandelt wird. Rechnet
              man das gegen ein Pro-Abo, ergibt sich ein unbequemes Bild.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-mit-ollama/kostenrechnung.png"
              alt="Liniendiagramm: die einmaligen Hardwarekosten von 800 Euro liegen als waagerechte Linie über der stetig steigenden Abo-Linie, beide schneiden sich erst nach rund 40 Monaten"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Selbst wenn man Euro und Dollar der Einfachheit halber gleich
              ansetzt, dauert es über 40 Monate, bis sich die Karte gegen ein
              Pro-Abo gerechnet hat. Über dreieinhalb Jahre. In dieser Rechnung
              fehlen noch der Strom, der Rechner drumherum und die Zeit für
              Einrichtung und Pflege. Wer die Cloud-Seite mit dem
              100-Dollar-Tarif ansetzt, kommt auf acht Monate, und genau dieser
              Wechsel der Bezugsgröße macht in den Anleitungen den Unterschied
              zwischen „lohnt sich sofort" und „lohnt sich vielleicht nie".
            </Typo.Paragraph>

            <Typo.Paragraph>
              Das ist kein Argument gegen den lokalen Betrieb. Es ist ein
              Argument dagegen, ihn mit dem Preis zu begründen. Wer Hardware
              ohnehin im Haus hat, etwa einen Arbeitsplatzrechner mit
              passender Karte oder einen Server, für den die Rechnung anders
              aussieht, kommt zu einem anderen Ergebnis. Wer eine Karte kauft,
              um zu sparen, spart nicht. Die ausführliche Aufstellung der
              Cloud-Tarife steht in{" "}
              <Link
                href="/blog/claude-code-kosten"
                className="text-primary-600 hover:underline"
              >
                Claude Code Kosten
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="maschine">
            <Typo.H2>Was die Maschine leisten muss</Typo.H2>

            <Typo.Paragraph>
              Auch bei der Hardware widersprechen sich die Quellen, und zwar
              erheblich. Eine der großen Anleitungen nennt 16 bis 24 GB
              Grafikspeicher als Anforderung und empfiehlt konkrete Karten der
              Oberklasse. Eine andere führt eine Spanne von 4 bis über 32 GB,
              gestaffelt nach Quantisierungsstufe, und kritisiert dabei
              ausdrücklich die kleingerechneten Mindestangaben der Konkurrenz.
              Beide haben recht, sie reden nur über verschiedene Dinge: Die
              kleine Zahl beschreibt, ab wann das Modell lädt. Die große
              beschreibt, ab wann die Arbeit damit Spaß macht.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Für die Praxis sind drei Größen entscheidend, und keine davon ist
              die Modellwahl:
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Größe</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Was die Quellen nennen</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Warum es zählt</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>Grafikspeicher</DataTable.Cell>
                  <DataTable.Cell>
                    4 bis über 32 GB je nach Quantisierung, 16 bis 24 GB für
                    komfortables Arbeiten
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Passt das Modell nicht hinein, weicht es auf den
                    Hauptprozessor aus. Es läuft dann noch, aber deutlich
                    langsamer.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Ausgabegeschwindigkeit</DataTable.Cell>
                  <DataTable.Cell>
                    10 bis 40 Token pro Sekunde, je nach Aufbau
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Bei agentischer Arbeit summiert sich das über viele
                    Schritte. Die Untergrenze dieser Spanne ist der Unterschied
                    zwischen Werkzeug und Geduldsprobe.
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Plattenplatz</DataTable.Cell>
                  <DataTable.Cell>
                    ab 25 GB frei, ein einzelnes mittleres Modell wiegt rund
                    13 GB
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Wer mehrere Modelle vergleichen will, was am Anfang der
                    Normalfall ist, braucht ein Vielfaches davon.
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Die ehrlichste Zahl in allen gelesenen Quellen steht in einem
              Nebensatz: Ein gängiges offenes Modell dieser Klasse erreicht auf
              einem verbreiteten Qualitätsindex einen Wert von 39, während die
              großen Cloud-Modelle über 60 liegen. Das ist kein kleiner
              Abstand, und es ist die Zahl, die man beim Wort „kostenlos"
              mitdenken sollte. Man bezahlt nicht mit Geld, sondern mit
              Ergebnisqualität und mit der eigenen Zeit für Nacharbeit.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="kontext">
            <Typo.H2>
              Der Widerspruch, der über die Praxistauglichkeit entscheidet
            </Typo.H2>

            <Typo.Paragraph>
              Beim Kontextfenster widersprechen sich die Quellen, und keine
              erwähnt es. Die offizielle Ollama-Dokumentation schreibt für
              größere Repositories 64k oder mehr vor. Eine der meistgelesenen
              Anleitungen führt im Setup-Schritt 20k als Empfehlung. Und die
              gründlichste der deutschsprachigen Quellen setzt genau bei 64k
              den Punkt an, ab dem lokale Modelle in der Kontexttreue nachlassen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-mit-ollama/kontextfenster.png"
              alt="Skala von 20k bis 64k Kontext: unterhalb die Empfehlung einer Anleitung, bei 64k die offizielle Mindestanforderung, oberhalb davon der Bereich, in dem die Qualität nachlässt"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Legt man die drei Angaben nebeneinander, entsteht eine enge
              Zange. Unterhalb von 64k reicht der Kontext für ein echtes
              Projekt nach offizieller Aussage nicht, oberhalb davon lässt die
              Qualität der Modelle nach. Wer mit den empfohlenen 20k startet,
              baut sich das Ergebnis vorweg: Am Beispielprojekt aus dem
              Tutorial läuft es, am eigenen Repository verliert das Modell den
              Faden, und man hält das für ein Modellproblem, obwohl es eine
              Konfiguration war.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Dazu kommt ein Verhalten, das nur eine Quelle beschreibt und das
              in der Praxis am meisten stört: Werkzeugschleifen. Das Modell ruft
              dieselben Werkzeuge wiederholt auf, ohne voranzukommen. Bei
              agentischer Arbeit über viele Dateien ist das der häufigste
              Abbruchgrund, und er tritt bei kleineren offenen Modellen deutlich
              öfter auf als bei den großen Cloud-Modellen. Wer die
              Werkzeuganbindung selbst schon einmal gebaut hat, kennt das
              Muster aus{" "}
              <Link
                href="/blog/claude-code-mcp"
                className="text-primary-600 hover:underline"
              >
                Claude Code und MCP
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="entscheidung">
            <Typo.H2>Wann sich der lokale Weg lohnt</Typo.H2>

            <Typo.Paragraph>
              Nach allem oben bleibt eine klare Aufteilung. Der lokale Betrieb
              ist kein Sparmodell und keine allgemeine Alternative. Er ist die
              richtige Antwort auf genau eine Frage: Was tun, wenn der Code das
              Haus nicht verlassen darf.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-mit-ollama/entscheidung.png"
              alt="Entscheidungsbaum: darf der Code das Haus verlassen, führt der Weg zum Cloud-Modell; muss er im Haus bleiben, tragen kleine Aufgaben lokal, große Umbauten über viele Dateien nicht"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Diese Frage stellt sich in unserer Arbeit regelmäßig, und zwar
              nicht als Vorliebe, sondern als Berufsrecht. Für Kanzleien hängt
              sie an § 43e BRAO, für Steuerberater an § 62a StBerG: Wer
              Mandantendaten an einen Dienstleister gibt, braucht dafür eine
              tragfähige Grundlage. Verlässt der Code den Rechner gar nicht
              erst, stellt sich die Frage in dieser Form nicht mehr, und genau
              deshalb ist der Aufbau interessant. Wie wir das jenseits des
              Coding-Falls umsetzen, steht unter{" "}
              <Link
                href="/branchen/anwaelte/private-ai"
                className="text-primary-600 hover:underline"
              >
                Private AI für Kanzleien
              </Link>{" "}
              und{" "}
              <Link
                href="/branchen/steuerberater/private-ai"
                className="text-primary-600 hover:underline"
              >
                Private AI für Steuerberater
              </Link>
              .
            </Typo.Paragraph>

            <Typo.Paragraph>
              Nur bleibt die Einschränkung aus dem vorigen Abschnitt bestehen,
              und sie ist der Grund, warum wir den lokalen Weg selten allein
              empfehlen: Für abgegrenzte Aufgaben trägt er, für große Umbauten
              über viele Dateien reichen die offenen Modelle in dieser
              Größenklasse noch nicht. In der Praxis heißt das meistens zwei
              Wege nebeneinander, getrennt nach Datenart statt nach Aufgabe.
              Sensibles bleibt lokal, der Rest läuft über die Cloud-Modelle,
              wo die Qualität stimmt. Für einen ersten Eindruck, wie sich das
              gegen andere Werkzeuge verhält, hilft{" "}
              <Link
                href="/blog/claude-code-vs-codex"
                className="text-primary-600 hover:underline"
              >
                Claude Code vs. Codex
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="fazit">
            <Typo.H2>Fazit</Typo.H2>

            <Typo.Paragraph>
              Claude Code auf Ollama umzustellen ist in fünf Minuten erledigt
              und technisch unspektakulär. Was danach gilt, ist es nicht. Die
              Modellanfragen bleiben lokal, vier Nebenkanäle stehen aber
              voreingestellt offen, und einer davon lässt sich nicht mit dem
              Sammelschalter zudrehen. Die Ersparnis stellt sich erst nach über
              drei Jahren ein, wenn man die Hardware ehrlich mitrechnet. Und
              die Kontextempfehlung, die für ein echtes Projekt nötig ist,
              beginnt genau dort, wo die Modelle nachlassen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Das macht den Aufbau nicht schlechter, es macht ihn nur
              spezifischer. Er ist gut, wenn die Vorgabe lautet, dass Daten das
              Haus nicht verlassen. Er ist schwach, wenn er nur billiger sein
              soll. Wenn Sie überlegen, ob das für Ihre Situation trägt, oder
              wenn Sie eine Vorgabe im Haus haben, an der die Cloud-Werkzeuge
              scheitern,{" "}
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
                  question: "Kann ich Claude Code mit Ollama benutzen?",
                  answer:
                    "Ja. Ollama versteht inzwischen die Anthropic-Messages-API, deshalb genügt es, Claude Code über drei Umgebungsvariablen auf den lokalen Server umzubiegen: ANTHROPIC_BASE_URL zeigt auf den lokalen Ollama-Port, ANTHROPIC_AUTH_TOKEN bekommt einen Platzhalter, und ANTHROPIC_API_KEY wird geleert, damit kein hinterlegter Schlüssel den Platzhalter überstimmt. Danach starten Sie Claude Code mit einem lokal geladenen Modell. Sie bekommen dabei nicht Claude, sondern die Oberfläche und Werkzeuglogik von Claude Code auf einem offenen Modell.",
                },
                {
                  question:
                    "Bleibt mein Code wirklich komplett auf meinem Rechner?",
                  answer:
                    "Die Modellanfragen ja, der Rest nicht automatisch. Wenn Sie nur ANTHROPIC_BASE_URL umbiegen, gilt für Claude Code weiterhin die Voreinstellung des Anbieters Claude API, und dort stehen Nutzungsmetriken, Feedback-Berichte und Sitzungs-Umfragen auf an. Die Metriken enthalten laut Dokumentation keinen Code und keine Dateipfade, Feedback geht nur auf ausdrücklichen Befehl. Zusätzlich schickt die WebFetch-Prüfung vor jedem Seitenabruf den angefragten Hostnamen an Anthropic, und dieser Kanal wird vom Sammelschalter CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC ausdrücklich nicht erfasst.",
                },
                {
                  question:
                    "Ist Claude Code mit Ollama wirklich kostenlos?",
                  answer:
                    "Die Software ja, der Betrieb nicht. Für brauchbare Ergebnisse nennen die Anleitungen 16 bis 24 GB Grafikspeicher; eine gebrauchte Karte mit 24 GB kostet im September 2026 zwischen 800 und 950 Euro. Claude Code ist dagegen bereits in Claude Pro für 20 Dollar im Monat enthalten. Selbst bei einer Eins-zu-eins-Umrechnung dauert es über 40 Monate, bis sich die Hardware gerechnet hat, Strom und Einrichtungsaufwand noch nicht eingerechnet. Wer passende Hardware ohnehin besitzt, rechnet anders; wer sie zum Sparen kauft, spart nicht.",
                },
                {
                  question:
                    "Welches Kontextfenster brauche ich für ein echtes Projekt?",
                  answer:
                    "Die offizielle Ollama-Dokumentation nennt für größere Repositories 64k oder mehr. Verbreitete Tutorials empfehlen im Setup dagegen 20k, was am Beispielprojekt reicht und am eigenen Repository nicht. Gleichzeitig setzen erfahrene Quellen genau bei 64k den Punkt an, ab dem lokale Modelle in der Kontexttreue nachlassen. Praktisch heißt das: unterhalb von 64k fehlt der Überblick, oberhalb leidet die Genauigkeit. Wer mit 20k startet, hält später eine Fehlkonfiguration für ein Modellproblem.",
                },
                {
                  question:
                    "Welche Modelle eignen sich für Claude Code über Ollama?",
                  answer:
                    "Die Quellen nennen durchgehend auf Code spezialisierte offene Modelle, dazu allgemeine Modelle in verschiedenen Quantisierungsstufen. Wichtiger als die Modellwahl sind zwei andere Größen: ein ausreichend gesetztes Kontextfenster und genug Grafikspeicher, damit das Modell nicht auf die CPU ausweichen muss, was die Ausgabe deutlich verlangsamt. Rechnen Sie außerdem mit Werkzeugschleifen, bei denen das Modell dieselben Aufrufe wiederholt, ohne voranzukommen. Das ist bei kleineren offenen Modellen der häufigste Abbruchgrund.",
                },
                {
                  question:
                    "Für wen lohnt sich der lokale Betrieb überhaupt?",
                  answer:
                    "Für alle, bei denen eine Vorgabe verlangt, dass Daten das Haus nicht verlassen. Für Kanzleien und Steuerberater ist das kein Geschmacksurteil, sondern Berufsrecht nach § 43e BRAO beziehungsweise § 62a StBerG. Verlässt der Code den Rechner nicht, stellt sich die Frage der Weitergabe an einen Dienstleister in dieser Form nicht. Als reines Sparmodell lohnt er sich dagegen selten, und für große Umbauten über viele Dateien reichen die offenen Modelle dieser Größenklasse noch nicht. In der Praxis laufen deshalb meistens beide Wege nebeneinander, getrennt nach Datenart.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu Claude Code mit Ollama
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="versprechen">
            Das Versprechen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="setup">
            Das Setup
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="datenwege">
            Was nach außen geht
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="kosten">
            Die echte Rechnung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="maschine">
            Was die Maschine leisten muss
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="kontext">
            Der Kontext-Widerspruch
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="entscheidung">
            Wann es sich lohnt
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
