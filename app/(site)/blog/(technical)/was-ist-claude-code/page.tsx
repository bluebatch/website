import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";
import GeoSummary from "@/components/ui/geo-summary";

export const metaCustom: BlogMeta = {
  slug: "was-ist-claude-code",
  author: "Max Hänsel",
  date: "2026-08-14",
  image: "/blog/was-ist-claude-code/hero.png",
  tags: ["ki", "development"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Was ist Claude Code? Erklärung für Unternehmen 2026",
  description:
    "Was ist Claude Code? Der agentische Assistent von Anthropic arbeitet direkt im Dateisystem statt im Chatfenster. Erklärung, Unterschied zu Claude.ai, echte Kosten, Datenroute und was vor dem Rollout zu klären ist.",
  openGraph: {
    title: "Was ist Claude Code? Die Erklärung für Entscheider",
    description:
      "Kein Chatbot, keine Autovervollständigung: Claude Code liest und schreibt Dateien, führt Befehle aus und prüft das Ergebnis. Was das im Unternehmen bedeutet, was es kostet und wo die Grenzen liegen.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/was-ist-claude-code/hero.png",
        width: 1200,
        height: 630,
        alt: "Serverraum mit Netzwerk-Hardware in kühlen, neutralen Farbtönen",
      },
    ],
  },
  alternates: {
    canonical: "/blog/was-ist-claude-code",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Was ist Claude Code? Der Agent, der im Dateisystem arbeitet
        </BlogHero.Headline>

        <GeoSummary>
          Claude Code ist ein agentisches Werkzeug von Anthropic, das Dateien
          liest und schreibt, Terminal-Befehle ausführt und das Ergebnis selbst
          prüft, statt nur Text vorzuschlagen. Es läuft im Terminal, in VS Code
          und JetBrains, auf dem Desktop, im Browser und in der CI-Pipeline. Der
          Zugang steckt in jedem Bezahlabo ab 17 Dollar im Monat, laut
          Anthropic-Doku kostet der Betrieb rund 13 Dollar je Entwickler und
          aktivem Arbeitstag.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>11 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-08-14">14. August 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/was-ist-claude-code/hero.png"
          alt="Serverraum mit Netzwerk-Hardware und Verkabelung in kühlen Farbtönen"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Wer nach einer Erklärung zu Claude Code sucht, landet meistens bei
              Erfahrungsberichten von Entwicklern. Das ist nützlich, wenn man
              das Werkzeug bedienen will, und wenig hilfreich, wenn man
              entscheiden soll, ob es ins Unternehmen kommt. Dieser Artikel
              nimmt die zweite Perspektive ein: Was ist das Ding technisch, was
              unterscheidet es vom Chatfenster, was kostet der Betrieb
              realistisch, wo laufen die Daten, und woran scheitert die
              Einführung.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Vorweg die kürzest mögliche Antwort. Claude Code ist kein Chatbot
              und keine Autovervollständigung im Editor. Es ist ein Programm,
              das auf euren Dateien arbeitet: Es liest sie, ändert sie, führt
              Befehle aus, sieht sich das Ergebnis an und korrigiert nach. Der
              Unterschied zu einem Chat ist derselbe wie zwischen jemandem, der
              euch am Telefon erklärt, wie man ein Regal aufbaut, und jemandem,
              der in der Wohnung steht und es aufbaut.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Alle Preis- und Betriebszahlen in diesem Artikel stammen aus der
              Anthropic-Dokumentation, Stand Ende Juli 2026. Erfahrungswerte aus
              anderen Quellen sind als solche gekennzeichnet.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="was-es-ist">
            <Typo.H2>Was Claude Code technisch ist</Typo.H2>
            <Typo.Paragraph>
              Claude Code gehört zur Gattung der agentischen Werkzeuge. Das Wort
              ist inzwischen überstrapaziert, hat hier aber eine präzise
              Bedeutung: Das Programm bekommt ein Ziel in normaler Sprache, sucht
              sich den nötigen Kontext selbst zusammen, führt eine Reihe von
              Schritten aus und prüft nach jedem Schritt, ob das Ergebnis stimmt.
              Es fragt nicht bei jedem Zwischenschritt nach.
            </Typo.Paragraph>
            <Typo.Paragraph>
              In der Praxis sieht der Ablauf immer gleich aus. Zuerst Kontext:
              Welche Dateien gehören zur Aufgabe, wie ist das Projekt aufgebaut,
              welche Konventionen gelten. Dann ein Plan, oft explizit ausgegeben,
              bevor etwas passiert. Dann die Ausführung, also Dateien schreiben,
              Befehle starten, Tests laufen lassen. Und zum Schluss die
              Verifikation: Ist das Ergebnis das, was verlangt war? Wenn nicht,
              beginnt die Schleife von vorn.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/was-ist-claude-code/arbeitsweise.png"
              alt="Vierstufige Arbeitsschleife von Claude Code aus Kontext sammeln, Plan, Ausführung im Dateisystem und Verifikation mit Rücksprung"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Diese Schleife ist der eigentliche Unterschied zu allem, was vorher
              da war. Eine Autovervollständigung im Editor schlägt die nächsten
              Zeilen vor und weiß nichts davon, ob sie funktionieren. Ein
              Chatfenster liefert einen Textblock, den jemand kopieren, einfügen
              und testen muss. Claude Code schließt den Kreis selbst und meldet
              sich mit einem Ergebnis, das bereits gegen die Realität geprüft
              wurde.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Damit wird auch klar, warum das Werkzeug mehr Rechenzeit
              verbraucht als ein Chat. Es liest viel mehr, es probiert mehr aus,
              und es korrigiert sich. Das schlägt direkt auf die Kosten durch,
              dazu weiter unten die konkreten Zahlen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="unterschied-claude-ai">
            <Typo.H2>Der Unterschied zu Claude.ai</Typo.H2>
            <Typo.Paragraph>
              Das ist die Frage, die hinter der Ausgangsfrage meistens steckt.
              Beide Produkte tragen denselben Namen und nutzen dieselben Modelle.
              Der Unterschied liegt nicht im Modell, sondern darin, worauf das
              Modell zugreifen darf.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Merkmal</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Claude.ai (Chat)</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Claude Code</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>Zugriff</DataTable.Cell>
                  <DataTable.Cell>
                    nur, was jemand hineinkopiert oder hochlädt
                  </DataTable.Cell>
                  <DataTable.Cell>
                    das Projektverzeichnis auf dem Rechner oder Server
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Ausführung</DataTable.Cell>
                  <DataTable.Cell>keine, Text als Ergebnis</DataTable.Cell>
                  <DataTable.Cell>
                    schreibt Dateien, startet Befehle, liest deren Ausgabe
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Gedächtnis</DataTable.Cell>
                  <DataTable.Cell>an die Unterhaltung gebunden</DataTable.Cell>
                  <DataTable.Cell>
                    Projektdatei CLAUDE.md plus Auto-Memory über Sessions hinweg
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Oberfläche</DataTable.Cell>
                  <DataTable.Cell>Browser und App</DataTable.Cell>
                  <DataTable.Cell>
                    Terminal, VS Code, JetBrains, Desktop, Browser, Mobile, CI
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Automatisierbar</DataTable.Cell>
                  <DataTable.Cell>nein</DataTable.Cell>
                  <DataTable.Cell>
                    ja, als Schritt in Skripten und Pipelines
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Im kostenlosen Plan</DataTable.Cell>
                  <DataTable.Cell>ja</DataTable.Cell>
                  <DataTable.Cell>nein</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Die letzte Zeile überrascht viele: Der kostenlose Claude-Plan
              enthält keinen Zugriff auf Claude Code. Wer es ausprobieren will,
              braucht mindestens ein Pro-Abo oder ein Konto in der Claude
              Console mit Abrechnung pro Token.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Praktisch bedeutsam ist außerdem die vorletzte Zeile. Weil Claude
              Code als normales Kommandozeilenprogramm läuft, lässt es sich mit
              allem verketten, was auf einer Kommandozeile möglich ist. Ein
              Aufruf der Bauart{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">
                tail -200 app.log | claude -p &quot;Was ist hier
                schiefgelaufen?&quot;
              </code>{" "}
              ist ein vollwertiger Automatisierungsbaustein. Ein Chatfenster
              kann das nicht.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="wo-es-laeuft">
            <Typo.H2>Wo Claude Code läuft</Typo.H2>
            <Typo.Paragraph>
              Der Name führt in die Irre, weil er nach Terminal klingt. Das
              Terminal ist der Ursprung, aber längst nicht mehr die einzige
              Oberfläche. Anthropic listet in der Dokumentation die
              Terminal-Anwendung, eine VS-Code-Erweiterung, die auch in Cursor
              läuft, ein JetBrains-Plugin, eine Desktop-App für macOS und
              Windows, den Zugang über den Browser und die Claude-Mobile-App.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dazu kommen die Stellen, an denen kein Mensch daneben sitzt:
              GitHub Actions, GitLab CI/CD, automatisches Code-Review auf
              Pull Requests, eine Slack-Anbindung, eine Chrome-Integration und
              das Agent SDK für eigene Anwendungen. Sessions hängen dabei nicht
              an einer Oberfläche fest, sie lassen sich zwischen Terminal,
              Desktop und Browser weiterreichen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/was-ist-claude-code/oberflaechen.png"
              alt="Übersicht der Oberflächen von Claude Code mit Terminal, IDE, Desktop, Browser, Mobile und CI-Pipeline um einen gemeinsamen Kern"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Für die Einführung im Unternehmen ist das die wichtigere Hälfte.
              Ein Werkzeug, das nur ein einzelner Entwickler an seinem Rechner
              bedient, bringt genau eine Person weiter. Ein Werkzeug, das
              zusätzlich in der Pipeline sitzt und jeden Pull Request
              gegenliest, wirkt auf das ganze Team, ohne dass jemand seine
              Arbeitsweise umstellen muss.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="bausteine">
            <Typo.H2>Vier Bausteine machen daraus ein System</Typo.H2>
            <Typo.Paragraph>
              Aus dem Werkzeug wird erst dann ein Automatisierungsunterbau, wenn
              man vier Dinge kennt. Sie sind der Grund, warum sich mit Claude
              Code Abläufe bauen lassen, die weit über Programmieren
              hinausgehen.
            </Typo.Paragraph>

            <Typo.H3>CLAUDE.md, das Projektgedächtnis</Typo.H3>
            <Typo.Paragraph>
              Eine Textdatei im Projekt, die festhält, was dauerhaft gilt:
              Konventionen, Verzeichnisstruktur, verbotene Abkürzungen,
              Ansprechpartner. Sie wird bei jeder Sitzung mitgelesen. Ein
              Startgerüst erzeugt der Befehl{" "}
              <code className="rounded bg-gray-100 px-1.5 py-0.5 text-sm">
                /init
              </code>
              , der die vorhandene Codebasis analysiert. Wer diese Datei pflegt,
              muss dieselben Erklärungen nicht dreißigmal wiederholen.
            </Typo.Paragraph>

            <Typo.H3>Skills und Hooks</Typo.H3>
            <Typo.Paragraph>
              Skills sind benannte, wiederverwendbare Abläufe, die man wie einen
              Befehl aufruft, etwa ein hausinternes Review-Verfahren oder eine
              Deploy-Prozedur. Hooks sind Shell-Befehle, die vor oder nach
              bestimmten Aktionen zwingend ausgeführt werden. Für den
              Unternehmenseinsatz sind Hooks der interessantere Teil: Damit
              lassen sich Regeln erzwingen, statt sie in eine Anweisung zu
              schreiben und zu hoffen.
            </Typo.Paragraph>

            <Typo.H3>MCP als Anschluss an eure Systeme</Typo.H3>
            <Typo.Paragraph>
              Das Model Context Protocol ist ein offener Standard dafür, wie ein
              KI-Werkzeug an externe Systeme angebunden wird, an Datenbanken,
              Ticketsysteme, ein ERP. Wir haben das in einem eigenen Beitrag zum{" "}
              <Link
                href="/blog/was-ist-mcp-server"
                className="text-primary-600 hover:underline"
              >
                MCP-Server
              </Link>{" "}
              ausführlich beschrieben. Ohne MCP kennt Claude Code nur euer
              Dateisystem, mit MCP auch die Systeme daneben. Wie ihr{" "}
              <Link
                href="/blog/claude-code-mcp"
                className="text-primary-600 hover:underline"
              >
                MCP-Server in Claude Code einrichtet
              </Link>
              , von der ersten Installation bis zu den Scopes, steht in einer
              eigenen Anleitung.
            </Typo.Paragraph>

            <Typo.H3>Subagenten und geplante Läufe</Typo.H3>
            <Typo.Paragraph>
              Größere Aufgaben lassen sich auf mehrere parallel arbeitende
              Agenten verteilen, dazu kommen Hintergrundläufe und zeitgesteuerte
              Ausführung. Damit verlässt man endgültig das Bild des Assistenten,
              der neben einem sitzt. Ein Ablauf, der jeden Morgen um sieben
              startet, Daten zieht, prüft und ein Ergebnis ablegt, ist kein
              Assistent mehr, sondern ein Dienst. Wichtig zur Kosteneinordnung:
              Agenten-Teams verbrauchen laut Anthropic-Doku etwa das Siebenfache
              an Token gegenüber einer einzelnen Sitzung.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="kosten">
            <Typo.H2>Was Claude Code kostet</Typo.H2>
            <Typo.Paragraph>
              Es gibt zwei getrennte Wege der Abrechnung, und die Verwechslung
              der beiden ist die häufigste Quelle für Kostenüberraschungen.
              Entweder läuft der Zugang über ein Abonnement mit festem
              Monatspreis und Nutzungskontingent, oder über ein Konto in der
              Claude Console mit Abrechnung pro Token.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Plan</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Preis</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Claude Code enthalten</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>Free</DataTable.Cell>
                  <DataTable.Cell>0 $</DataTable.Cell>
                  <DataTable.Cell>nein</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Pro</DataTable.Cell>
                  <DataTable.Cell>
                    17 $ pro Monat im Jahresabo, 20 $ monatlich
                  </DataTable.Cell>
                  <DataTable.Cell>ja</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Max 5x und 20x</DataTable.Cell>
                  <DataTable.Cell>ab 100 $ pro Monat</DataTable.Cell>
                  <DataTable.Cell>ja, mit größerem Kontingent</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Team Standard</DataTable.Cell>
                  <DataTable.Cell>
                    20 $ pro Seat im Jahresabo, 25 $ monatlich
                  </DataTable.Cell>
                  <DataTable.Cell>ja, 2 bis 150 Personen</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Team Premium</DataTable.Cell>
                  <DataTable.Cell>
                    100 $ pro Seat im Jahresabo, 125 $ monatlich
                  </DataTable.Cell>
                  <DataTable.Cell>
                    ja, fünffaches Standard-Kontingent
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Enterprise</DataTable.Cell>
                  <DataTable.Cell>
                    Seat-Preis plus Nutzung zu API-Tarifen
                  </DataTable.Cell>
                  <DataTable.Cell>ja</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Interessanter als die Listenpreise sind die Betriebszahlen, die
              Anthropic selbst dokumentiert. Der Durchschnitt liegt bei rund
              13 Dollar pro Entwickler und aktivem Arbeitstag. Neunzig Prozent
              der Nutzer bleiben unter 30 Dollar am Tag. In größeren
              Unternehmens-Deployments werden 150 bis 250 Dollar pro Entwickler
              und Monat genannt.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/was-ist-claude-code/kostenstaffel.png"
              alt="Gegenüberstellung der Abrechnungswege: beim Abo bleibt der Preis bei steigender Nutzung gleich, bei der Token-Abrechnung über die Console steigt er mit"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Der Vergleich lohnt sich: Ein Pro-Abo für 17 Dollar im Monat liegt
              unter dem, was ein einziger intensiver Arbeitstag über die
              Token-Abrechnung kosten würde. Genau deshalb ist das Abo für
              regelmäßige Nutzung fast immer die günstigere Wahl, während das
              API-Konto dort passt, wo Verbrauch sauber einem Projekt zugeordnet
              werden muss oder wo automatisierte Läufe ohne Personenbezug
              laufen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Ausreißer nach oben sind real, aber selten. Aus der Praxis wird
              der Fall berichtet, dass eine einzige Stunde Fehlersuche 100 Dollar
              gekostet hat. Gegen den Median von 13 Dollar am Tag ist das ein
              Ausreißer, kein Normalfall, und es ist ein starkes Argument dafür,
              ein Kostenlimit zu setzen, bevor man das Werkzeug an ein Team
              gibt. Die vollständige Rechnung mit allen Modelltarifen steht in
              unserem Beitrag zu den{" "}
              <Link
                href="/blog/claude-code-kosten"
                className="text-primary-600 hover:underline"
              >
                Claude-Code-Kosten
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="nicht-nur-entwickler">
            <Typo.H2>Nicht nur für Entwickler, aber mit einer Hürde</Typo.H2>
            <Typo.Paragraph>
              Weil Claude Code auf Dateien arbeitet und Befehle ausführen kann,
              ist Programmieren nur der bekannteste Anwendungsfall. Alles, was
              als Datei vorliegt und regelmäßig bearbeitet werden muss, ist
              grundsätzlich Kandidat: Tabellen zusammenführen, Dokumente in eine
              einheitliche Struktur bringen, aus Rohdaten wiederkehrende
              Auswertungen bauen, Ordner aufräumen, aus Protokollen einen Bericht
              erzeugen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wir betreiben unsere eigene Website-Redaktion so. Die
              wiederkehrenden Läufe, die Inhalte prüfen, Kennzahlen einsammeln
              und Berichte schreiben, laufen als geplante Claude-Code-Sitzungen
              mit festen Anweisungen und Prüfschritten. Das ist kein
              Softwareprojekt, sondern ein Redaktionsprozess.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die ehrliche Einschränkung dazu: Die Einstiegshürde ist nicht das
              Sprachverständnis, sondern die Umgebung. Wer noch nie ein Terminal
              geöffnet hat, braucht eine begleitete erste Stunde. Danach ist die
              Bedienung tatsächlich Umgangssprache, auch auf Deutsch. Wie die
              Einrichtung konkret abläuft, steht in der{" "}
              <Link
                href="/blog/claude-code-installieren"
                className="text-primary-600 hover:underline"
              >
                Installationsanleitung
              </Link>
              . Wer den größeren Rahmen sucht, also die Frage, wann sich ein
              eigener Agent überhaupt lohnt, findet ihn im Leitfaden{" "}
              <Link
                href="/blog/ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                KI-Agenten erstellen
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="governance">
            <Typo.H2>Datenroute und Governance, bevor ihr ausrollt</Typo.H2>
            <Typo.Paragraph>
              Das ist der Teil, den fast keine Erklärseite behandelt, und der im
              Unternehmen zuerst geklärt sein will. Ein Werkzeug, das
              Projektdateien liest und Befehle ausführt, ist eine
              Berechtigungsfrage, keine Geschmacksfrage.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Beim Zugangsweg gibt es vier Varianten, und sie unterscheiden sich
              genau darin, wo die Daten verarbeitet werden: das normale Abo, ein
              Konto in der Claude Console mit Token-Abrechnung, der Weg über die
              eigene Cloud-Umgebung mit Amazon Bedrock, Google Vertex oder
              Microsoft Foundry, sowie ein selbst betriebenes Gateway. Für
              Unternehmen mit Anforderungen an die Verarbeitung innerhalb der EU
              führt der Weg praktisch über die eigene Cloud, etwa Bedrock in der
              Region Frankfurt, oder über einen Enterprise-Vertrag.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/was-ist-claude-code/rollout-gates.png"
              alt="Vier Prüfpunkte vor dem Rollout von Claude Code: Zugangsweg und Datenroute, Berechtigungen und Hooks, Kostenlimit, Review-Pflicht"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Vier Punkte gehören vor den ersten Team-Rollout geklärt. Erstens
              der Zugangsweg samt Auftragsverarbeitung und Speicherfristen, im
              Zweifel mit dem eigenen Datenschutzbeauftragten und nicht nach
              Bauchgefühl. Zweitens die Berechtigungen: auf welchen Repositories
              und Verzeichnissen darf das Werkzeug arbeiten, welche Befehle sind
              gesperrt, und welche Regeln werden über Hooks erzwungen statt nur
              aufgeschrieben. Drittens ein Kostenlimit pro Person oder Team.
              Viertens die Review-Pflicht: Änderungen laufen über den normalen
              Pull-Request-Prozess, ohne Ausnahme.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer diese Fragen aus dem Umgang mit anderen KI-Werkzeugen bereits
              kennt, findet die allgemeine Systematik in unserem Beitrag zu{" "}
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

          <div id="grenzen">
            <Typo.H2>Was Claude Code nicht ist</Typo.H2>
            <Typo.Paragraph>
              Drei Erwartungen führen regelmäßig zu Enttäuschung. Erstens: Es
              ersetzt kein Review. Das Werkzeug formuliert falsche Lösungen mit
              genau derselben Souveränität wie richtige, und diese Souveränität
              ist der eigentliche Risikofaktor. Wer Ergebnisse ungeprüft
              übernimmt, verlagert das Problem nur nach hinten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zweitens: Es ersetzt keine fachliche Klarheit. Eine unklare
              Anforderung wird nicht dadurch klar, dass ein Agent sie umsetzt,
              sie wird nur schneller falsch umgesetzt. Der Zeitgewinn entsteht
              bei Aufgaben, die klar beschrieben und langweilig sind, nicht bei
              denen, über die noch diskutiert wird.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Drittens: Es ist kein Selbstläufer im Betrieb. Ohne gepflegte
              Projektdatei, ohne Kostenlimit und ohne definierte Berechtigungen
              bekommt man ein Werkzeug, das in jeder Sitzung bei null anfängt und
              dessen Rechnung niemand vorhersagen kann.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="naechste-schritte">
            <Typo.H2>Wie ihr in zwei Wochen zu einer Antwort kommt</Typo.H2>
            <Typo.Paragraph>
              Die belastbare Entscheidung entsteht nicht aus Lesen, sondern aus
              einem kleinen Pilotlauf. Unser Vorschlag: zwei Wochen, zwei bis
              drei Personen, ein Pro-Abo je Person, ein klar abgegrenztes
              Repository ohne besonders schützenswerte Daten. In Woche eins wird
              die Projektdatei aufgebaut und an bekannten Aufgaben gearbeitet, in
              Woche zwei kommt ein automatisierter Schritt dazu, etwa ein
              Review-Lauf auf jedem Pull Request.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Messt dabei zwei Dinge mit: die tatsächlichen Kosten je Person und
              Tag, und die Zahl der Aufgaben, die vollständig durchgelaufen sind,
              ohne dass jemand nachbessern musste. Beides zusammen beantwortet
              die Frage, die am Anfang stand, besser als jede Produktseite. Wenn
              ihr für den Aufbau Unterstützung braucht, meldet euch, wir bauen
              solche Abläufe regelmäßig.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="faq">
            <Typo.H2>Häufige Fragen zu Claude Code</Typo.H2>
            <FaqContainer
              faqs={[
                {
                  question: "Was ist Claude Code einfach erklärt?",
                  answer:
                    "Claude Code ist ein Programm von Anthropic, das direkt auf euren Projektdateien arbeitet. Ihr beschreibt in normaler Sprache, was passieren soll. Das Werkzeug sucht sich den nötigen Kontext, ändert Dateien, führt Befehle aus und prüft anschließend selbst, ob das Ergebnis stimmt. Der Unterschied zu einem Chat besteht darin, dass es das Ergebnis nicht beschreibt, sondern herstellt.",
                },
                {
                  question:
                    "Was ist der Unterschied zwischen Claude Code und Claude.ai?",
                  answer:
                    "Das Modell ist dasselbe, der Zugriff ist es nicht. Claude.ai sieht nur, was jemand hineinkopiert oder hochlädt, und liefert Text zurück. Claude Code sieht das Projektverzeichnis, schreibt Dateien und führt Befehle aus. Claude Code merkt sich außerdem über die Datei CLAUDE.md, was dauerhaft für ein Projekt gilt, und lässt sich in Skripten und CI-Pipelines automatisieren.",
                },
                {
                  question: "Ist Claude Code kostenlos?",
                  answer:
                    "Nein. Der kostenlose Claude-Plan enthält keinen Zugriff auf Claude Code. Der Einstieg ist das Pro-Abo für 17 Dollar im Monat im Jahresabo beziehungsweise 20 Dollar bei monatlicher Zahlung. Alternativ läuft der Zugang über ein Konto in der Claude Console mit Abrechnung pro Token, was ohne Kostenlimit deutlich teurer werden kann.",
                },
                {
                  question: "Was kostet Claude Code im Betrieb wirklich?",
                  answer:
                    "Anthropic nennt in der eigenen Dokumentation rund 13 Dollar pro Entwickler und aktivem Arbeitstag als Durchschnitt, 90 Prozent der Nutzer bleiben unter 30 Dollar pro Tag. In größeren Unternehmens-Deployments werden 150 bis 250 Dollar pro Entwickler und Monat genannt. Wer mit mehreren parallel arbeitenden Agenten fährt, muss laut Doku etwa mit dem Siebenfachen an Token rechnen.",
                },
                {
                  question: "Braucht man Programmierkenntnisse für Claude Code?",
                  answer:
                    "Für die Bedienung nicht, für die Umgebung schon ein wenig. Die Anweisungen selbst sind Umgangssprache und funktionieren auch auf Deutsch. Wer aber noch nie ein Terminal geöffnet hat, braucht für Einrichtung und erste Schritte Begleitung. Ohne Programmierkenntnisse sinnvoll nutzbar sind vor allem dateibasierte Aufgaben wie Auswertungen, Zusammenführungen und wiederkehrende Berichte.",
                },
                {
                  question: "Ist Claude Code DSGVO-konform einsetzbar?",
                  answer:
                    "Das hängt am gewählten Zugangsweg, nicht am Werkzeug selbst. Es gibt vier Wege: das normale Abo, ein Konto in der Claude Console, den Betrieb über die eigene Cloud-Umgebung mit Amazon Bedrock, Google Vertex oder Microsoft Foundry, sowie ein selbst betriebenes Gateway. Für eine Verarbeitung innerhalb der EU führt der Weg praktisch über die eigene Cloud, etwa Bedrock in der Region Frankfurt, oder über einen Enterprise-Vertrag. Auftragsverarbeitung und Speicherfristen gehören vor dem Rollout vertraglich geklärt.",
                },
                {
                  question: "Wo läuft Claude Code überall?",
                  answer:
                    "Im Terminal, als VS-Code-Erweiterung (auch in Cursor), als JetBrains-Plugin, als Desktop-App für macOS und Windows, im Browser und in der Claude-Mobile-App. Dazu kommt der unbeaufsichtigte Betrieb in GitHub Actions, GitLab CI/CD, im automatischen Code-Review auf Pull Requests, in Slack und über das Agent SDK in eigenen Anwendungen.",
                },
              ]}
            />
          </div>
        </BlogLayout.Content>
      </BlogLayout>
    </>
  );
}
