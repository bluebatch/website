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
  slug: "gemini-cli-vs-claude-code",
  author: "Max Hänsel",
  date: "2026-11-03",
  image: "/blog/gemini-cli-vs-claude-code/hero.png",
  tags: ["ki", "development"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Gemini CLI vs. Claude Code: Der Vergleich nach dem 18. Juni | Bluebatch",
  description:
    "Seit dem 18.06.2026 gibt es Gemini CLI nicht mehr kostenlos per Google-Login. Was das für den Vergleich mit Claude Code heißt: Login-Wege, Datenroute, Reifegrad, Kosten für ein Fünferteam.",
  openGraph: {
    title:
      "Gemini CLI vs. Claude Code: Der Vergleich nach dem 18. Juni | Bluebatch",
    description:
      "Vier von fünf rankenden Vergleichen werben mit 1.000 kostenlosen Anfragen pro Tag, die es seit Juni nicht mehr gibt. Der Vergleich auf dem heutigen Stand, mit Primärquellen.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/gemini-cli-vs-claude-code/hero.png",
        width: 1200,
        height: 630,
        alt: "Eine Person als Silhouette am großen Bürofenster im Morgenlicht, davor ein geschlossener Laptop und zwei gleiche Kaffeebecher",
      },
    ],
  },
  alternates: {
    canonical: "/blog/gemini-cli-vs-claude-code",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Gemini CLI vs. Claude Code: Was seit dem 18. Juni 2026 anders ist
        </BlogHero.Headline>

        <GeoSummary>
          Gemini CLI von Google und Claude Code von Anthropic sind
          Coding-Agenten für das Terminal. Seit dem 18. Juni 2026 bedient
          Gemini CLI keine kostenlosen und keine Google-AI-Pro-Konten mehr;
          die 1.000 Gratis-Anfragen pro Tag, mit denen fast jeder Vergleich
          wirbt, gibt es dort nicht mehr. Dieser Artikel vergleicht die beiden
          Werkzeuge auf dem Stand vom September 2026: vier Login-Wege und
          ihre Datenroute, Reifegrad aus npm und GitHub, und was ein
          Fünferteam pro Jahr zahlt.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>13 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-11-03">3. November 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/gemini-cli-vs-claude-code/hero.png"
          alt="Eine Person als Silhouette am großen Bürofenster im Morgenlicht, davor ein geschlossener Laptop und zwei gleiche Kaffeebecher"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Wer heute „Gemini CLI vs Claude Code" sucht, bekommt auf der
              ersten Seite Vergleiche, die alle denselben Satz enthalten:
              Gemini CLI ist kostenlos, 1.000 Anfragen pro Tag, einfach mit
              dem Google-Konto anmelden. Der Satz war bis zum 18. Juni 2026
              richtig. Seitdem ist er falsch, und vier der fünf Artikel, die wir
              für diesen Vergleich gelesen haben, stehen trotzdem noch darauf.
              Einer davon wurde zwei Tage vor der Abschaltung veröffentlicht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Das ist kein Detail für Fußnoten. Die Kostenlos-Stufe war das
              Argument, mit dem Gemini CLI in fast jedem Vergleich gewonnen
              hat. Fällt sie weg, verschiebt sich die ganze Entscheidung: von
              „gratis gegen 20 Dollar" zu „welcher Login-Weg, welche
              Datenroute, welcher Reifegrad". Genau entlang dieser drei Fragen
              ist dieser Artikel gebaut. Alle Zahlen stammen aus den
              Herstellerdokumentationen, der npm-Registry und der GitHub-API,
              Stand 14. September 2026.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="stichtag">
            <Typo.H2>Was am 18. Juni 2026 passiert ist</Typo.H2>
            <Typo.Paragraph>
              Google hat am 19. Mai 2026 im Developers Blog angekündigt, dass
              Gemini CLI und die Gemini-Code-Assist-Erweiterungen für die IDE
              ab dem 18. Juni keine Anfragen mehr bedienen, wenn man mit einem
              Verbraucherkonto angemeldet ist. Betroffen sind drei Gruppen: die
              kostenlose Stufe per Google-Login, Google AI Pro und Google AI
              Ultra. Für sie heißt der Nachfolger Antigravity CLI, eine
              Neuentwicklung in Go, die laut Ankündigung „denselben
              Agent-Harness" teilt, aber ein eigenes Werkzeug mit eigenem
              Kontingentmodell ist.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Gemini CLI selbst lebt weiter, nur für andere Konten. Wer über
              eine Gemini-Code-Assist-Lizenz in Standard oder Enterprise
              kommt, über einen Gemini-API-Schlüssel oder über Vertex AI,
              arbeitet unverändert damit. Das Repository bleibt unter Apache
              2.0 offen, wird weiter wöchentlich veröffentlicht und stand am
              Morgen dieses Artikels bei 106.969 Sternen und 831 offenen
              Issues.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Reaktion der Community lässt sich in einer Zahl fassen: Die
              Ankündigung in den GitHub Discussions trägt rund 300
              Daumen-runter-Reaktionen, die Kritik dreht sich um die
              gekürzten Kontingente in Antigravity und darum, dass die
              Antigravity CLI nicht quelloffen ist. Für die Werkzeugwahl im
              Unternehmen ist das weniger wichtig als der zweite Befund: Die
              Doku im Repository selbst führt in ihrer Kontingent-Tabelle bis
              heute die Stufen „Individuals 1.000, AI Pro 1.500, AI Ultra
              2.000 Anfragen pro Tag" auf, während die Plans-Seite von
              geminicli.com die Stufen für „ersetzt am 18. Juni" erklärt. Zwei
              offizielle Google-Quellen, zwei Aussagen. Wer den Vergleich aus
              der Repo-Doku baut, baut ihn auf einem Stand, den es nicht mehr
              gibt.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/gemini-cli-vs-claude-code/stichtag.png"
              alt="Zeitleiste mit drei Stationen: Ankündigung am 19. Mai 2026, Abschaltung der Verbraucherkonten am 18. Juni 2026, heutiger Stand im September 2026 mit den drei verbliebenen Login-Wegen"
              width={1200}
              height={675}
            />
          </div>

          <Separator />

          <div id="was-sind-die-beiden">
            <Typo.H2>Was die beiden Werkzeuge sind</Typo.H2>
            <Typo.Paragraph>
              Beide sind Coding-Agenten, keine Autovervollständigung. Ihr
              beschreibt ein Ziel, das Werkzeug liest das Projekt, plant,
              ändert Dateien, führt Tests und Befehle aus und legt euch das
              Ergebnis vor. Beide kennen eine Projektdatei mit Konventionen
              (GEMINI.md beziehungsweise CLAUDE.md), beide binden externe
              Werkzeuge über den{" "}
              <Link
                href="/blog/was-ist-mcp-server"
                className="text-primary-600 hover:underline"
              >
                MCP-Standard
              </Link>{" "}
              an, beide haben einen Planungsmodus, Hooks und Unteragenten.
              Wer eines davon bedienen kann, findet sich im anderen in einer
              Stunde zurecht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Gemini CLI</strong> ist ein Open-Source-Projekt von
              Google unter Apache 2.0, geschrieben in TypeScript, gestartet am
              25. Juni 2025. Es spricht die Gemini-Modelle, aktuell Gemini 3.1
              Pro und die Flash-Familie, mit einem Kontextfenster von einer
              Million Token. <strong>Claude Code</strong> ist Anthropics
              Terminal-Agent mit proprietärer Lizenz, der inzwischen auch als
              VS-Code- und JetBrains-Erweiterung, Desktop-App und im Browser
              läuft; was ihn im Inneren ausmacht, steht in{" "}
              <Link
                href="/blog/was-ist-claude-code"
                className="text-primary-600 hover:underline"
              >
                Was ist Claude Code
              </Link>
              . Beide Hersteller werben mit einem Kontextfenster von einer
              Million Token, ein Vergleich aus dem Juni nennt für Claude noch
              200.000. Auch das ist ein Beispiel dafür, wie schnell die
              Zahlen in diesem Feld veralten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Auf Benchmarks liegen die Modelle dahinter praktisch gleichauf.
              Ein rankender Vergleich nennt für SWE-bench Verified 80,8
              Prozent für Claude Opus 4.6 und 80,6 Prozent für Gemini 3.1 Pro.
              Zwei Zehntel Unterschied sind Messrauschen, kein Argument. Die
              Entscheidung fällt nicht über das Modell.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="login-wege">
            <Typo.H2>Vier Login-Wege, vier Datenrouten</Typo.H2>
            <Typo.Paragraph>
              Das ist der Abschnitt, in dem die rankenden Vergleiche
              durchgehend still sind, und es ist für ein Unternehmen der
              wichtigste. Bei beiden Werkzeugen entscheidet nicht das
              Werkzeug darüber, was mit eurem Code passiert, sondern der Weg,
              über den ihr euch anmeldet.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Bei <strong>Gemini CLI</strong> bleiben nach dem 18. Juni drei
              Wege. Erstens der unbezahlte Gemini-API-Schlüssel: 250 Anfragen
              pro Tag, ausschließlich Flash-Modelle, und laut den
              Nutzungsbedingungen für Unpaid Services verwendet Google die
              Eingaben und Antworten, um „Google-Produkte und -Dienste
              bereitzustellen, zu verbessern und zu entwickeln", menschliche
              Prüfer dürfen sie lesen und annotieren. Zweitens der bezahlte
              API-Schlüssel oder Vertex AI: Abrechnung pro Token, und Google
              nutzt Prompts und Antworten ausdrücklich nicht zur
              Produktverbesserung; über Vertex AI gelten zusätzlich die
              Google-Cloud-Bedingungen samt Regionswahl. Drittens eine
              Gemini-Code-Assist-Lizenz über ein Workspace-Konto: Standard mit
              1.500 Anfragen pro Nutzer und Tag, Enterprise mit 2.000, beide
              unter den Google-Cloud-Bedingungen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Bei <strong>Claude Code</strong> sind es ebenfalls vier. Pro und
              Max sind Verbraucherkonten: Ob eure Daten zum Training verwendet
              werden, hängt an einem Schalter in den Datenschutzeinstellungen;
              steht er auf Ja, gilt eine Aufbewahrung von fünf Jahren, steht er
              auf Nein, sind es 30 Tage. Team, Enterprise und API laufen unter
              den kommerziellen Bedingungen: kein Training mit eurem Code,
              30 Tage Aufbewahrung, für Enterprise auf Anfrage Zero Data
              Retention. Der vierte Weg ist der Betrieb über eine fremde Cloud,
              also Amazon Bedrock, Google Clouds Agent Platform oder Microsoft
              Foundry; dort sind Telemetrie, Fehlerberichte und die
              Feedback-Funktion standardmäßig abgeschaltet und die Daten
              bleiben in der Region, die ihr im Cloud-Konto gewählt habt.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/gemini-cli-vs-claude-code/datenroute.png"
              alt="Übersicht der Login-Wege beider Werkzeuge mit der jeweiligen Datenroute: bei Gemini CLI unbezahlter API-Schlüssel mit Trainingsnutzung, bezahlter Schlüssel und Vertex AI ohne Trainingsnutzung, Code-Assist-Lizenz unter Cloud-Bedingungen; bei Claude Code Pro und Max mit Schalter, Team und API ohne Training, Bedrock und Vertex mit abgeschalteter Telemetrie"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Zwei Dinge folgen daraus. Das erste: Der einzige kostenlose Weg,
              der bei Gemini CLI noch existiert, ist gleichzeitig der einzige,
              bei dem euer Code in die Produktverbesserung fließt. „Kostenlos
              ausprobieren" heißt hier „mit Trainingsnutzung ausprobieren",
              und das sollte man mit dem Datenschutzbeauftragten geklärt
              haben, bevor das erste Kundenprojekt geöffnet wird. Das zweite:
              Beide Anbieter haben einen sauberen kommerziellen Weg ohne
              Trainingsnutzung, und bei beiden liegt er nicht in der
              Verbraucherstufe. Wer im Unternehmen Code mit personenbezogenen
              Daten oder Kundenlogik bearbeitet, braucht bei Google eine
              Code-Assist-Lizenz oder Vertex AI, bei Anthropic mindestens
              Team; wie sich das in eine DSGVO-Bewertung übersetzt, haben wir
              in{" "}
              <Link
                href="/blog/ki-datenschutz"
                className="text-primary-600 hover:underline"
              >
                KI und Datenschutz
              </Link>{" "}
              beschrieben.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="reifegrad">
            <Typo.H2>Reifegrad: Was npm und GitHub verraten</Typo.H2>
            <Typo.Paragraph>
              Kein Vergleichsartikel schaut in die Registry, dabei dauert das
              zehn Sekunden und sagt mehr über den Alltag mit einem Werkzeug
              als jeder Benchmark. Beide Pakete liegen auf npm.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Kennzahl</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Gemini CLI</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Claude Code</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>Aktuelle Version (npm)</DataTable.Cell>
                  <DataTable.Cell>0.59.0 vom 8. September 2026</DataTable.Cell>
                  <DataTable.Cell>2.1.270 vom 12. September 2026</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Veröffentlichte Versionen</DataTable.Cell>
                  <DataTable.Cell>745 seit dem 25. Juni 2025</DataTable.Cell>
                  <DataTable.Cell>513</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Release-Rhythmus</DataTable.Cell>
                  <DataTable.Cell>
                    wöchentlich stabil, täglich nightly
                  </DataTable.Cell>
                  <DataTable.Cell>mehrmals pro Woche</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Node-Anforderung</DataTable.Cell>
                  <DataTable.Cell>Node 20 oder neuer</DataTable.Cell>
                  <DataTable.Cell>Node 22 oder neuer</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Lizenz</DataTable.Cell>
                  <DataTable.Cell>Apache 2.0, Quellcode offen</DataTable.Cell>
                  <DataTable.Cell>proprietär</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Offene Issues</DataTable.Cell>
                  <DataTable.Cell>831</DataTable.Cell>
                  <DataTable.Cell>nicht öffentlich einsehbar</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Die erste Zeile ist die wichtigste. Gemini CLI steht nach 15
              Monaten und 745 Versionen bei 0.59. Eine Null vor dem Punkt
              heißt in der Konvention, der auch Google folgt: Die
              Schnittstelle kann sich mit jeder Version ändern, ohne dass das
              als Bruch gilt. Wer Gemini CLI in eine Pipeline einbaut, in ein
              Skript oder in einen Hook, sollte die Version festnageln und
              jede Woche die Release-Notes lesen. Claude Code ist seit Version
              2.0 im September 2025 auf einer stabilen Hauptversion; die
              Konfiguration, die ihr heute schreibt, funktioniert nächste
              Woche noch.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Gegenposten steht in der Lizenzzeile. Bei Gemini CLI könnt
              ihr lesen, was das Werkzeug mit eurem Dateisystem macht, es
              forken, patchen, im eigenen Build ausrollen. Bei Claude Code
              nicht. Für die meisten Teams ist das kein Kriterium; für
              Unternehmen mit eigener Werkzeugkette, eigenen Sicherheitsaudits
              oder eigenem Registry-Spiegel ist es eines. Und der Blick auf
              die Node-Anforderung lohnt sich ebenfalls: Wer noch Node 20 auf
              den Build-Servern hat, kann Gemini CLI heute installieren und
              Claude Code nicht.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="kosten">
            <Typo.H2>Kosten für ein Fünferteam</Typo.H2>
            <Typo.Paragraph>
              Ohne die Kostenlos-Stufe sieht der Preisvergleich anders aus,
              als ihn die Suchergebnisse zeigen. Rechnen wir ihn für ein Team
              von fünf Entwicklerinnen und Entwicklern, wie es in einem
              Mittelständler mit 50 bis 1.000 Beschäftigten typisch ist, auf
              den kommerziellen Wegen, die ohne Trainingsnutzung auskommen.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Weg</DataTable.HeaderCell>
                  <DataTable.HeaderCell>pro Nutzer und Monat</DataTable.HeaderCell>
                  <DataTable.HeaderCell>fünf Nutzer pro Jahr</DataTable.HeaderCell>
                  <DataTable.HeaderCell>enthalten</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>Gemini Code Assist Standard</DataTable.Cell>
                  <DataTable.Cell>19 $ jährlich, 22,80 $ monatlich</DataTable.Cell>
                  <DataTable.Cell>1.140 $ bis 1.368 $</DataTable.Cell>
                  <DataTable.Cell>1.500 Anfragen pro Tag</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Gemini Code Assist Enterprise</DataTable.Cell>
                  <DataTable.Cell>45 $ jährlich, 54 $ monatlich</DataTable.Cell>
                  <DataTable.Cell>2.700 $ bis 3.240 $</DataTable.Cell>
                  <DataTable.Cell>
                    2.000 Anfragen pro Tag, Anbindung eigener Repositories
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Claude Team Standard</DataTable.Cell>
                  <DataTable.Cell>20 $ jährlich, 25 $ monatlich</DataTable.Cell>
                  <DataTable.Cell>1.200 $ bis 1.500 $</DataTable.Cell>
                  <DataTable.Cell>
                    Kontingent pro Sitzplatz, Fünf-Stunden- und Wochenfenster
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Claude Team Premium</DataTable.Cell>
                  <DataTable.Cell>100 $ jährlich, 125 $ monatlich</DataTable.Cell>
                  <DataTable.Cell>6.000 $ bis 7.500 $</DataTable.Cell>
                  <DataTable.Cell>deutlich größeres Kontingent</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Beide per API, nach Verbrauch</DataTable.Cell>
                  <DataTable.Cell>
                    Claude laut Anthropic 150 bis 250 $ je Entwickler
                  </DataTable.Cell>
                  <DataTable.Cell>9.000 $ bis 15.000 $</DataTable.Cell>
                  <DataTable.Cell>keine Obergrenze ohne eigenes Limit</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              In der Einstiegsstufe liegen die beiden einen Dollar
              auseinander: 19 gegen 20 Dollar im Jahresabo. Der Preis
              entscheidet also, wie schon bei{" "}
              <Link
                href="/blog/claude-code-vs-codex"
                className="text-primary-600 hover:underline"
              >
                Codex gegen Claude Code
              </Link>
              , nichts. Der Unterschied liegt in der Einheit: Google zählt
              Anfragen pro Tag, Anthropic zählt Kontingent pro Zeitfenster.
              1.500 Anfragen klingen nach viel, aber in der Google-Doku steht
              der Satz, den man kennen sollte: „Im Agentenmodus oder mit Gemini
              CLI kann ein Prompt mehrere Modellanfragen auslösen." Ein
              Refactoring über 30 Dateien ist nicht eine Anfrage, sondern
              Dutzende. Wer das Kontingent im Alltag ausreizt, landet bei
              beiden Anbietern auf der API-Zeile der Tabelle, und dort ist der
              Unterschied zwischen 1.200 und 9.000 Dollar im Jahr kein
              Rundungsfehler mehr.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für die API-Zeile lohnt ein zweiter Blick auf die Google-Seite:
              Gemini 3.1 Pro kostet 2 Dollar je Million Eingabe-Token und 12
              Dollar je Million Ausgabe-Token, ab 200.000 Token Kontext das
              Doppelte im Input. Die günstige Flash-Klasse, Gemini 3.8 Flash,
              steht bis zum 31. Dezember 2026 bei 0,75 und 3,75 Dollar und
              verdoppelt sich laut Preisseite zum 1. Januar 2027 auf 1,50 und
              7,50 Dollar. Wer heute mit Flash rechnet, rechnet für das
              kommende Jahr falsch. Diese Verdopplung steht in keinem der
              gelesenen Vergleiche.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/gemini-cli-vs-claude-code/kostenrechnung.png"
              alt="Balkenvergleich der Jahreskosten für fünf Nutzer: Gemini Code Assist Standard 1.140 Dollar, Claude Team Standard 1.200 Dollar, Gemini Code Assist Enterprise 2.700 Dollar, Claude Team Premium 6.000 Dollar, API nach Verbrauch 9.000 bis 15.000 Dollar"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Und der Ist-Zustand, den keine der Seiten vorrechnet: Die
              Vollkosten einer Senior-Entwicklerin in Deutschland liegen bei
              rund 12.500 Euro im Monat, für fünf Personen also bei etwa
              750.000 Euro im Jahr. Selbst die teuerste Zeile der Tabelle,
              15.000 Dollar für API-Verbrauch, sind davon zwei Prozent. Die
              Frage ist deshalb nie, ob 19 oder 20 Dollar richtig sind, sondern
              ob das Werkzeug pro Kopf und Monat mehr als zwei Stunden
              einspart. Wie sich das für Claude Code im Einzelnen rechnet,
              steht in{" "}
              <Link
                href="/blog/claude-code-kosten"
                className="text-primary-600 hover:underline"
              >
                Claude Code Kosten
              </Link>
              ; die Logik gilt für Gemini CLI genauso.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="staerken-gemini">
            <Typo.H2>Wo Gemini CLI vorne liegt</Typo.H2>
            <Typo.Paragraph>
              <strong>Im Google-Cloud-Umfeld.</strong> Wer ohnehin auf Google
              Cloud betreibt, bekommt mit Vertex AI eine Datenroute, deren
              Region, Verschlüsselung und Vertragsbedingungen schon geklärt
              sind, weil sie für den Rest der Plattform ebenfalls gelten. Das
              Werkzeug kennt gcloud, Cloud Run und BigQuery aus dem Stand.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Beim offenen Quellcode.</strong> Apache 2.0 heißt: Ihr
              könnt prüfen, was das Werkzeug tut, es hinter eurem Proxy
              bauen und Sicherheitsfragen mit dem Quelltext statt mit einem
              Vertrauensvorschuss beantworten. Für regulierte Häuser ist das
              ein echtes Argument, das Claude Code nicht bieten kann.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Bei der Einstiegshürde für ein Team.</strong> Eine
              Code-Assist-Standard-Lizenz kostet 19 Dollar, hängt am
              vorhandenen Workspace-Konto und bringt 1.500 Anfragen pro Tag
              mit. Wer Google Workspace nutzt, hat die Beschaffung in einer
              Stunde erledigt, ohne neuen Anbieter, ohne neuen
              Auftragsverarbeitungsvertrag.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Bei Node 20.</strong> Klingt klein, entscheidet aber auf
              älteren Build-Servern, ob das Werkzeug überhaupt installierbar
              ist.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="staerken-claude">
            <Typo.H2>Wo Claude Code vorne liegt</Typo.H2>
            <Typo.Paragraph>
              <strong>Bei der Reife.</strong> Version 2.1 gegen 0.59 ist kein
              Marketing, sondern eine Aussage darüber, ob sich das Werkzeug
              unter euren Skripten wegbewegt. Wer Claude Code in GitHub Actions,
              GitLab CI oder einen nächtlichen Review-Lauf einbaut, baut auf
              eine stabile Schnittstelle; wie das aussieht, steht in{" "}
              <Link
                href="/blog/claude-code-best-practices"
                className="text-primary-600 hover:underline"
              >
                Claude Code Best Practices
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Bei der Wahl der Datenroute.</strong> Claude Code läuft
              wahlweise über Anthropic direkt, über Amazon Bedrock, über Google
              Clouds Agent Platform oder über Microsoft Foundry, mit
              standardmäßig abgeschalteter Telemetrie in allen drei
              Fremd-Clouds. Ein Unternehmen mit AWS-Vertrag in Frankfurt kann
              Claude Code betreiben, ohne einen neuen Vertragspartner
              aufzunehmen. Gemini CLI kennt genau eine Cloud.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Bei der Steuerung im Team.</strong> Ausgabenlimits pro
              Person, Gruppe und Organisation, Verbrauchsberichte pro Nutzer
              und Modell, zentral verwaltete Einstellungen, die die
              Entwickler nicht überschreiben können. Genau die Dinge, die man
              braucht, wenn nicht mehr drei, sondern dreißig Leute mit dem
              Werkzeug arbeiten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Bei der Kontinuität.</strong> Anthropic hat seit dem
              Start im Februar 2025 kein Werkzeug abgeschaltet und keine Nutzergruppe auf
              ein Nachfolgeprodukt verwiesen. Das ist keine Garantie für die
              Zukunft, aber nach dem 18. Juni ist es ein Unterschied, den man
              in die Bewertung aufnehmen darf.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="entscheidung">
            <Typo.H2>Entscheidung in drei Fragen</Typo.H2>
            <Typo.Paragraph>
              <strong>Erste Frage: Wo läuft eure Infrastruktur?</strong> Google
              Cloud mit Workspace-Konten spricht für Gemini CLI über Code
              Assist oder Vertex AI. AWS oder Azure spricht für Claude Code
              über Bedrock oder Foundry. Wer beides hat oder nichts davon,
              geht zur zweiten Frage.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Zweite Frage: Baut ihr das Werkzeug in Pipelines ein?</strong>{" "}
              Wenn ja, wiegt die stabile Hauptversion von Claude Code schwerer
              als der offene Quellcode von Gemini CLI, weil eine 0.x-Version
              in einer Pipeline Wartungsarbeit erzeugt. Wenn das Werkzeug nur
              interaktiv im Terminal benutzt wird, ist der Unterschied
              vernachlässigbar.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Dritte Frage: Braucht euer Sicherheitsteam den
              Quelltext?</strong> Wenn ja, bleibt nur Gemini CLI. Wenn ein
              Vertrag, eine Datenroute in der eigenen Cloud und die
              Compliance-Dokumente des Anbieters genügen, sind beide
              gleichwertig.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/gemini-cli-vs-claude-code/entscheidung.png"
              alt="Entscheidungsbaum mit drei Fragen: Infrastruktur bei Google Cloud oder AWS und Azure, Einbau in Pipelines ja oder nein, Quelltext für das Sicherheitsteam nötig ja oder nein, mit den jeweiligen Empfehlungen Gemini CLI oder Claude Code"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Was in keiner der drei Fragen vorkommt, ist der Preis. Er
              unterscheidet die beiden in der Einstiegsstufe um einen Dollar,
              und auf den kommerziellen Wegen ohne Trainingsnutzung gibt es
              ihn bei keinem der beiden kostenlos. Wer einen Vergleich liest,
              in dem „kostenlos" das Argument ist, liest einen Stand von vor
              dem 18. Juni.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="fazit">
            <Typo.H2>Fazit</Typo.H2>
            <Typo.Paragraph>
              Gemini CLI und Claude Code sind sich in dem, was sie können,
              näher als jeder Vergleichsartikel zugibt: gleiche Gattung,
              gleiche Standards, gleiche Projektdatei-Logik, gleichauf im
              Benchmark. Sie unterscheiden sich in dem, was um das Werkzeug
              herumsteht: Google bietet offenen Quellcode und die Integration
              in die eigene Cloud, Anthropic bietet eine stabile Hauptversion,
              drei Fremd-Clouds als Datenroute und die Steuerungswerkzeuge für
              größere Teams. Kostenlos ist seit dem 18. Juni 2026 keines von
              beiden, sobald euer Code nicht in die Produktverbesserung
              fließen soll.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer die Entscheidung nicht aus Artikeln, sondern aus dem eigenen
              Alltag ableiten will, nimmt den Zwei-Wochen-Pilot aus dem
              Codex-Vergleich: eine Baseline auf drei bis fünf typischen
              Aufgaben, dann je eine Woche pro Werkzeug mit derselben
              Projektdatei, danach drei Zahlen vergleichen. Wenn ihr dabei
              Unterstützung wollt, von der Wahl der Datenroute über die
              Anbindung eurer Systeme per MCP bis zur Frage, welche der beiden
              Lizenzen in eurem Haus DSGVO-konform betrieben werden kann,{" "}
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
                  question: "Ist Gemini CLI noch kostenlos?",
                  answer:
                    "Nur noch über einen unbezahlten Gemini-API-Schlüssel mit 250 Anfragen pro Tag, ausschließlich Flash-Modellen und der Nutzung eurer Eingaben zur Produktverbesserung laut den Bedingungen für Unpaid Services. Die frühere Stufe mit 1.000 Anfragen pro Tag per Google-Login und die Konten Google AI Pro und AI Ultra werden von Gemini CLI seit dem 18. Juni 2026 nicht mehr bedient; für sie ist Antigravity CLI der Nachfolger.",
                },
                {
                  question: "Was ist der Unterschied zwischen Gemini CLI und Antigravity CLI?",
                  answer:
                    "Antigravity CLI ist eine Neuentwicklung von Google in Go, die laut Ankündigung denselben Agent-Harness teilt, aber ein eigenes Werkzeug mit eigenem Kontingentmodell ist und nicht quelloffen. Gemini CLI bleibt als Apache-2.0-Projekt bestehen und wird weiter wöchentlich veröffentlicht, ist aber nur noch mit Code-Assist-Lizenzen, bezahlten API-Schlüsseln und Vertex AI nutzbar.",
                },
                {
                  question: "Was kostet Gemini CLI im Vergleich zu Claude Code für ein Team?",
                  answer:
                    "Auf den kommerziellen Wegen liegen die Einstiegsstufen einen Dollar auseinander: Gemini Code Assist Standard 19 Dollar pro Nutzer und Monat im Jahresabo, Claude Team Standard 20 Dollar. Für fünf Nutzer sind das 1.140 gegen 1.200 Dollar im Jahr. Die größeren Stufen kosten 45 Dollar bei Google beziehungsweise 100 Dollar bei Anthropic. Wer per API nach Verbrauch zahlt, sollte laut Anthropic mit 150 bis 250 Dollar je Entwickler und Monat rechnen.",
                },
                {
                  question: "Welches der beiden Werkzeuge ist DSGVO-konform einsetzbar?",
                  answer:
                    "Beide, aber bei beiden nicht in der Verbraucherstufe. Bei Gemini CLI führt der Weg über eine Code-Assist-Lizenz oder Vertex AI unter den Google-Cloud-Bedingungen; der unbezahlte API-Schlüssel nutzt Eingaben zur Produktverbesserung. Bei Claude Code führt er über Team, Enterprise oder den Betrieb in der eigenen Cloud über Amazon Bedrock, Google Clouds Agent Platform oder Microsoft Foundry, wo Telemetrie standardmäßig abgeschaltet ist.",
                },
                {
                  question: "Ist Gemini CLI reif genug für den Einsatz in CI-Pipelines?",
                  answer:
                    "Es funktioniert, verlangt aber Pflege. Das Paket steht nach 15 Monaten und 745 Versionen bei 0.59.0, die Schnittstelle kann sich also mit jeder wöchentlichen Version ändern. Wer es in Pipelines einbaut, sollte die Version festschreiben und Release-Notes lesen. Claude Code ist seit September 2025 auf der Hauptversion 2 und in dieser Hinsicht stabiler.",
                },
                {
                  question: "Welches Modell ist besser, Gemini 3.1 Pro oder Claude Opus 4.6?",
                  answer:
                    "Auf SWE-bench Verified liegen beide laut einem rankenden Vergleich bei 80,8 und 80,6 Prozent, also gleichauf. Die Entscheidung zwischen den Werkzeugen fällt deshalb nicht über das Modell, sondern über Infrastruktur, Datenroute, Reifegrad und die Frage, ob euer Sicherheitsteam den Quelltext braucht.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu Gemini CLI und Claude Code
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="stichtag">
            Der 18. Juni 2026
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="was-sind-die-beiden">
            Was die Werkzeuge sind
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="login-wege">
            Login-Wege und Datenroute
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="reifegrad">
            Reifegrad
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="kosten">
            Kosten für ein Fünferteam
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="staerken-gemini">
            Stärken von Gemini CLI
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="staerken-claude">
            Stärken von Claude Code
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="entscheidung">
            Entscheidung in drei Fragen
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
