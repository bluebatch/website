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
  slug: "claude-code-vs-codex",
  author: "Max Hänsel",
  date: "2026-08-11",
  image: "/blog/claude-code-vs-codex/hero.png",
  tags: ["ki", "development"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Codex vs. Claude Code 2026: Vergleich für Teams",
  description:
    "Codex vs. Claude Code im Vergleich: Preise, Oberflächen, MCP, EU-Datenroute und Team-Rollout. Warum der Preis nicht entscheidet und was stattdessen zählt.",
  openGraph: {
    title: "Codex vs. Claude Code 2026: Vergleich für Teams",
    description:
      "Beide kosten 20 Dollar im Einstieg. Der Vergleich zeigt, woran die Entscheidung wirklich hängt: Oberflächen, Automatisierung, Datenroute und Rollout.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-code-vs-codex/hero.png",
        width: 1200,
        height: 630,
        alt: "Leerer Besprechungsraum mit Whiteboard, eine Person steht davor",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-code-vs-codex",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Codex vs. Claude Code: Welcher Coding-Agent passt zu eurem Team?
        </BlogHero.Headline>

        <GeoSummary>
          Codex von OpenAI und Claude Code von Anthropic sind agentische
          Coding-Werkzeuge, die Code lesen, schreiben und Befehle ausführen.
          Preislich sind sie fast deckungsgleich: 20 Dollar im Einstieg, 20
          Dollar pro Team-Seat im Jahresabo. Die Entscheidung fällt deshalb
          über Oberflächen, Automatisierungstiefe und Datenroute. Dieser
          Vergleich liefert die Kriterien und einen Zwei-Wochen-Pilot.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>12 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-08-11">11. August 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-code-vs-codex/hero.png"
          alt="Leerer Besprechungsraum von hinten fotografiert, eine Person steht am Whiteboard"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Die Frage kommt in fast jedem Gespräch, das wir gerade mit
              Entwicklungsteams führen: Codex oder Claude Code? Und fast immer
              startet sie als Preisfrage. Das ist die eine Frage, die sich am
              schnellsten beantworten lässt, weil die Antwort lautet: Der Preis
              entscheidet hier nichts.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Beide Hersteller haben ihre Stufen so eng aneinandergelegt, dass
              man beim Nebeneinanderhalten zweimal hinschaut. Einstieg 20
              Dollar hier wie dort. Team-Seat 20 Dollar im Jahresabo, 25 Dollar
              monatlich, hier wie dort. Die nächsten Stufen 100 und 200 Dollar,
              hier wie dort. Wer bei einem Fünf-Personen-Team rechnet, landet
              auf beiden Seiten bei rund 100 Dollar im Monat. Ein
              Kostenvergleich, der über eine Anschaffung entscheidet, sieht
              anders aus.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Interessant wird es also erst danach. Dieser Artikel arbeitet
              deshalb entlang der Kriterien, die tatsächlich einen Unterschied
              machen: wo die Werkzeuge laufen, wie tief man sie automatisieren
              kann, wie die Daten fließen und wie ihr in zwei Wochen zu einer
              belastbaren Entscheidung kommt. Alle Zahlen stammen aus den
              Herstellerdokumentationen, Stand Ende Juli 2026.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="was-sind-die-beiden">
            <Typo.H2>Was die beiden Werkzeuge eigentlich sind</Typo.H2>
            <Typo.Paragraph>
              Beide gehören zur Gattung der agentischen Coding-Werkzeuge. Der
              Unterschied zu einer Autovervollständigung im Editor ist
              grundlegend: Ein Agent liest das Projekt, plant mehrere Schritte,
              ändert Dateien über Verzeichnisgrenzen hinweg, führt Befehle aus
              und prüft das Ergebnis. Ihr beschreibt ein Ziel, nicht eine
              Zeile.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Claude Code</strong> von Anthropic ist im Kern ein
              Terminal-Werkzeug, das inzwischen auf mehreren Oberflächen läuft:
              CLI, VS-Code- und JetBrains-Erweiterung, eigene Desktop-App für
              macOS und Windows, Browser unter claude.ai/code sowie die
              Mobile-App. Wichtig ist die Konsequenz aus dieser Liste: Alle
              Oberflächen sprechen dieselbe Engine, also gelten dieselben
              Projektanweisungen und Werkzeuganbindungen überall. Eine Sitzung
              lässt sich zwischen ihnen weiterreichen. Wie dieser Agent
              intern arbeitet, also wie er sich den Projektkontext selbst
              zusammensucht statt ihn vorgelegt zu bekommen, steht ausführlich
              unter{" "}
              <Link
                href="/blog/was-ist-claude-code"
                className="text-primary-600 hover:underline"
              >
                Was ist Claude Code
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Codex</strong> von OpenAI setzt am ChatGPT-Ökosystem an.
              Es gibt die Codex-CLI, eine IDE-Erweiterung, Codex in der
              ChatGPT-Desktop-App und im Web sowie Codex Cloud für Aufgaben,
              die im Hintergrund weiterlaufen. Unter der Haube arbeitet GPT-5.6
              in drei Varianten, gestaffelt nach Leistungsklasse: Sol als
              Flaggschiff, Terra als ausgewogene Mitte, Luna für schnelle und
              günstige Aufgaben.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-vs-codex/oberflaechen.png"
              alt="Gegenüberstellung der Oberflächen: Claude Code mit Terminal, VS Code und JetBrains, Desktop-App, Browser und GitHub/Slack gegenüber Codex mit CLI, IDE-Extension, ChatGPT Desktop, ChatGPT Web und GitHub/Slack"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Auf dem Papier ist die Liste erstaunlich ähnlich. In der Praxis
              liegt der Unterschied im Schwerpunkt. Claude Code kommt vom
              Terminal und ist entsprechend komponierbar: Ihr könnt Logausgaben
              hineinpipen, es in einer CI-Pipeline aufrufen oder es an andere
              Werkzeuge ketten. Codex kommt von ChatGPT und ist entsprechend
              stark, wenn eure Leute ohnehin täglich in ChatGPT arbeiten und
              das Coding-Werkzeug einfach ein weiterer Reiter im selben Fenster
              sein soll.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="preise">
            <Typo.H2>Die Preise: fast deckungsgleich</Typo.H2>
            <Typo.Paragraph>
              Hier die Stufen nebeneinander, jeweils aus den offiziellen
              Preisseiten. Die Software selbst kostet in beiden Fällen nichts,
              bezahlt wird die Nutzung über ein Abo oder über einen
              API-Schlüssel.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Stufe</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Claude</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Codex</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>Kostenlos</DataTable.Cell>
                  <DataTable.Cell>
                    Free, aber <strong>ohne</strong> Claude-Code-Zugriff
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Free, Basisfähigkeiten für kurze Aufgaben
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Kleine Stufe</DataTable.Cell>
                  <DataTable.Cell>gibt es nicht</DataTable.Cell>
                  <DataTable.Cell>Go, 8 $ pro Monat</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Einstieg</DataTable.Cell>
                  <DataTable.Cell>
                    Pro, 20 $ monatlich bzw. 17 $ im Jahresabo
                  </DataTable.Cell>
                  <DataTable.Cell>Plus, 20 $ pro Monat</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Vielnutzer</DataTable.Cell>
                  <DataTable.Cell>Max, ab 100 $ (5x und 20x)</DataTable.Cell>
                  <DataTable.Cell>
                    Pro 5x 100 $, Pro 20x 200 $
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Team-Seat</DataTable.Cell>
                  <DataTable.Cell>
                    Team Standard 20 $ jährlich, 25 $ monatlich
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Business 20 $ jährlich, 25 $ monatlich
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Großes Kontingent im Team</DataTable.Cell>
                  <DataTable.Cell>
                    Team Premium 100 $ jährlich, 125 $ monatlich
                  </DataTable.Cell>
                  <DataTable.Cell>
                    über Pro-Sitzplätze oder Enterprise
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Enterprise</DataTable.Cell>
                  <DataTable.Cell>
                    Sitzplatz plus Nutzung zu API-Tarifen
                  </DataTable.Cell>
                  <DataTable.Cell>
                    individuell, mit SCIM, Audit-Logs und Datenresidenz
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <BlogImage
              src="/blog/claude-code-vs-codex/preisstufen.png"
              alt="Preisleiter im Direktvergleich: Claude Pro 20 Dollar, Max 5x 100 Dollar, Max 20x 200 Dollar und Team-Seat 20 Dollar liegen jeweils auf derselben Höhe wie Codex Plus, Pro 5x, Pro 20x und Business-Seat"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Zwei ehrliche Fußnoten dazu. Erstens weist Anthropic für Max
              öffentlich nur „ab 100 Dollar" aus; die 200 Dollar für die
              20x-Stufe sind der übereinstimmende Stand aller Quellen und der
              Auswahl beim Upgrade, aber keine offizielle Listenzahl.
              Zweitens: Codex hat mit „Go" für 8 Dollar eine Stufe unterhalb
              des Einstiegs, die es bei Claude nicht gibt. Für ein
              Unternehmensteam ist das irrelevant, für einen einzelnen
              Freiberufler kann es der Unterschied sein.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Was in beiden Fällen dazukommt und gern vergessen wird: Die
              Preise sind Netto-Dollar-Preise. Für ein deutsches Unternehmen
              kommen Reverse-Charge-Umsatzsteuer und Wechselkursschwankung
              obendrauf. Wer im Budget mit „20 Euro" plant, plant zu knapp.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="limits">
            <Typo.H2>Wo die Abrechnungslogik auseinandergeht</Typo.H2>
            <Typo.Paragraph>
              Gleicher Preis heißt nicht gleiche Gegenleistung. Beide Anbieter
              begrenzen die Nutzung, aber sie erklären es unterschiedlich.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Claude</strong> arbeitet mit einem rollierenden
              Fünf-Stunden-Fenster plus einem Wochenlimit. Anthropic gibt
              außerdem einen Referenzwert aus echten Firmen-Deployments an, der
              für die Budgetplanung mehr wert ist als jede Fenstergröße: rund
              13 Dollar pro Entwickler und aktivem Arbeitstag, 150 bis 250
              Dollar pro Entwickler und Monat, wobei 90 Prozent der Nutzer
              unter 30 Dollar am Tag bleiben.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Codex</strong> rechnet in Credits. Jede Nachricht
              verbraucht laut Dokumentation typischerweise 5 bis 40 Credits,
              abhängig davon, wie viel Kontext im Spiel ist. Die Credit-Raten
              je Million Token unterscheiden sich stark nach Modellvariante:
              Sol kostet 125 Credits im Input und 750 im Output, Terra 50 und
              300, Luna nur 5 und 30. Für Plus gilt ein gemeinsames
              Fünf-Stunden-Fenster für lokale und Cloud-Nachrichten, in dem je
              nach Modell zwischen 10 und 2.000 Nachrichten liegen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für die Praxis heißt das: Bei Codex hat die Modellwahl einen
              größeren und unmittelbar sichtbaren Kostenhebel, weil der
              Unterschied zwischen Luna und Sol beim Output das
              Fünfundzwanzigfache beträgt. Bei Claude liegt der wichtigste
              Hebel eher in der Betriebsart, also darin, ob unbeaufsichtigte
              Agenten-Schleifen laufen. Wie sich das im Detail rechnet, steht
              im Artikel zu{" "}
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

          <div id="automatisierung">
            <Typo.H2>Automatisierung: der erste echte Unterschied</Typo.H2>
            <Typo.Paragraph>
              Wer ein Coding-Werkzeug nur als besseren Editor benutzt, wird
              zwischen beiden kaum einen Unterschied spüren. Wer es als Baustein
              in bestehende Abläufe einbaut, sehr wohl.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Beide unterstützen den{" "}
              <Link
                href="/blog/was-ist-mcp-server"
                className="text-primary-600 hover:underline"
              >
                MCP-Standard
              </Link>
              , mit dem sich eigene Datenquellen und Werkzeuge anbinden lassen,
              also Ticketsystem, Wissensdatenbank oder Warenwirtschaft. Beide
              kennen eine Projektdatei, in der Konventionen und Architektur
              festgehalten werden: bei Claude ist das die CLAUDE.md, bei Codex
              die AGENTS.md. Beide können Unteraufgaben an mehrere Agenten
              verteilen, beide bringen ein Sicherheitsmodell mit Freigaben und
              Sandbox mit, beide können auf Zeitplan laufen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der Unterschied liegt in der Anschlussfähigkeit nach außen.
              Claude Code ist bewusst nach Unix-Philosophie gebaut und lässt
              sich in Skripte und Pipelines einhängen, mitsamt fertigen
              Anbindungen an GitHub Actions und GitLab CI/CD sowie einem
              eigenen SDK für maßgeschneiderte Agenten. Codex Cloud wiederum
              ist stärker, wenn lange laufende Aufgaben ohne eigenen Rechner
              erledigt werden sollen und das Ergebnis als Pull Request
              zurückkommt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Grob gesagt: Claude Code baut man sich in die eigene
              Werkzeugkette ein, Codex bringt seine Kette mit. Beides ist
              legitim. Die Frage ist, was zu eurer Landschaft passt. Für Teams,
              die ohnehin an{" "}
              <Link
                href="/blog/ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                eigenen KI-Agenten
              </Link>{" "}
              bauen, ist die Skriptbarkeit meist der wichtigere Hebel.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="datenschutz">
            <Typo.H2>Datenroute und DSGVO: der zweite echte Unterschied</Typo.H2>
            <Typo.Paragraph>
              Hier wird es für regulierte Branchen unangenehm konkret, und hier
              sind die meisten Vergleichsartikel auffällig still.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Beide Anbieter verarbeiten Code auf Servern außerhalb der EU,
              solange nichts anderes vereinbart ist. Bei Codex ist
              Datenresidenz laut Preisseite ein Enterprise-Merkmal, zusammen
              mit SCIM und Audit-Logs; die Business-Stufe für 20 Dollar bringt
              Arbeitsbereiche, SAML-SSO und MFA, aber keine zugesicherte
              Datenroute. Bei Claude führt der europäische Weg praktisch
              entweder über einen Enterprise-Vertrag oder über den Betrieb in
              der eigenen Cloud, etwa über Amazon Bedrock in der Region
              Frankfurt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Daraus folgt eine Empfehlung, die wenig überrascht, aber
              regelmäßig übersprungen wird: Wenn produktiver Kundencode oder
              personenbezogene Daten im Spiel sind, ist der 20-Dollar-Plan
              keine Option, egal von wem. Nicht wegen der Leistung, sondern weil
              ein privater Account ohne Auftragsverarbeitungsvertrag im
              Unternehmenskontext nichts zu suchen hat. Was das für einen
              Eigenbetrieb bedeutet, haben wir am Beispiel{" "}
              <Link
                href="/blog/n8n-sicherheit-self-hosting"
                className="text-primary-600 hover:underline"
              >
                Self-Hosting und Sicherheit
              </Link>{" "}
              durchgespielt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein zweiter Punkt, der selten benannt wird: Je mehr eine Lösung
              den Bildschirm mitliest oder Screenshots verarbeitet, desto mehr
              verlässt das Haus, das nicht Code ist. Das gehört in die
              Risikobetrachtung, unabhängig vom Anbieter.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="entscheidung">
            <Typo.H2>Die Entscheidung in drei Regeln</Typo.H2>
            <Typo.Paragraph>
              Wir empfehlen ungern pauschal ein Werkzeug, weil die Antwort
              ehrlicherweise von drei Dingen abhängt. Diese drei lassen sich
              aber sauber abfragen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-vs-codex/entscheidungsbaum.png"
              alt="Entscheidungsdiagramm: Terminal und Automatisierung führen zu Claude Code, ein bestehendes ChatGPT-Umfeld zu Codex, eine vertraglich zugesicherte EU-Datenroute zur Enterprise-Prüfung"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              <strong>Regel eins: Wo arbeitet euer Team heute?</strong> Läuft
              der Alltag im Terminal, in Skripten und in der CI, spielt Claude
              Code seine Stärke aus. Ist ChatGPT bereits ausgerollt, bezahlt
              und in den Köpfen, spart Codex einen kompletten
              Einführungsaufwand. Das ist kein technisches, sondern ein
              Adoptionsargument, und Adoption schlägt Funktionsumfang fast
              immer.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Regel zwei: Wie tief soll automatisiert werden?</strong>{" "}
              Wenn der Agent nur beim Programmieren helfen soll, nehmt das
              Werkzeug, das euer Team schneller annimmt. Wenn er Teil eurer
              Pipeline werden soll, also nachts Tests reparieren, Abhängigkeiten
              prüfen oder Tickets in Pull Requests verwandeln, schaut euch die
              Skript- und CI-Anbindung sehr genau an, bevor ihr entscheidet.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Regel drei: Was steht im Compliance-Anforderungsblatt?</strong>{" "}
              Braucht ihr Auftragsverarbeitungsvertrag, Datenresidenz,
              Audit-Logs und SCIM, verlassen beide Anbieter die Selbstbedienung
              und ihr landet im Vertriebsgespräch. Dann ist die relevante Frage
              nicht mehr Codex oder Claude, sondern welcher Vertrag eure
              Anforderungen abbildet und was er tatsächlich kostet.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="pilot">
            <Typo.H2>Der Zwei-Wochen-Pilot statt der Bauchentscheidung</Typo.H2>
            <Typo.Paragraph>
              Der ehrlichste Satz aus dem gesamten Wettbewerbsumfeld stammt von
              einem deutschen Kollegen und lautet sinngemäß: Eine Woche aktiv
              testen bringt mehr Klarheit als zehn Vergleichsartikel. Dem ist
              wenig hinzuzufügen, außer einer Struktur, damit aus dem Test auch
              eine Entscheidung wird.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-vs-codex/pilot-zwei-wochen.png"
              alt="Vier-Schritte-Zeitstrahl: Woche 0 Baseline messen, Woche 1 Tool A im Alltag, Woche 2 Tool B im Alltag, danach entscheiden"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              <strong>Woche 0, Baseline messen.</strong> Sucht euch drei bis
              fünf Leute und notiert zwei Wochen rückblickend, wie lange
              typische Aufgaben heute dauern: einen Bug beheben, Tests für ein
              Modul schreiben, ein Abhängigkeits-Update durchziehen. Ohne diese
              Zahl bewertet ihr später nur das Gefühl von Neuheit.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Woche 1 und 2, je ein Werkzeug im echten Alltag.</strong>{" "}
              Nicht an Spielzeugaufgaben, sondern an dem, was sowieso ansteht.
              Beide Werkzeuge bekommen dieselbe Projektdatei mit euren
              Konventionen, sonst vergleicht ihr Einrichtungsqualität statt
              Werkzeugen. Wichtig ist, dass eine Person beide Wochen mitmacht,
              sonst vergleicht ihr Personen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Danach entscheiden, mit Zahlen.</strong> Drei Größen
              reichen: Zeit pro Aufgabe gegen die Baseline, Anteil der
              Ergebnisse, die ohne Nacharbeit durch das Review kommen, und die
              tatsächlichen Kosten aus der Verbrauchsanzeige des jeweiligen
              Werkzeugs. Wenn nach zwei Wochen keine der drei Größen einen
              klaren Sieger zeigt, ist genau das das Ergebnis: Dann nehmt das
              Werkzeug, das besser zu eurem übrigen Stack passt, und hört auf
              zu vergleichen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="beides">
            <Typo.H2>Und wenn wir einfach beide nehmen?</Typo.H2>
            <Typo.Paragraph>
              Diese Empfehlung liest man häufig, meist in der Variante: Das eine
              plant und reviewt, das andere führt aus. Das funktioniert
              tatsächlich, und für einzelne Entwickler mit hohem Durchsatz kann
              es sich lohnen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Nur wird bei dieser Empfehlung selten die Rechnung mitgeliefert.
              Zwei Sitzplätze pro Entwickler sind bei zehn Leuten rund 400
              Dollar im Monat statt 200, und das ist die konservative Rechnung
              ohne Vielnutzer-Aufschläge. Dazu kommen zwei
              Auftragsverarbeitungsverträge, zwei Rechteverwaltungen, zwei
              Projektdateien, die auseinanderlaufen können, und zwei
              Aktualisierungszyklen. Für ein Team von fünf bis fünfzehn
              Entwicklern raten wir davon ab. Entscheidet euch, und schaut in
              einem halben Jahr erneut hin, denn beide Anbieter ziehen im
              Quartalstakt nach.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="fazit">
            <Typo.H2>Fazit</Typo.H2>
            <Typo.Paragraph>
              Codex und Claude Code sind heute näher beieinander, als der
              Umfang der Vergleichsartikel vermuten lässt. Gleiche Preisstufen,
              vergleichbare Oberflächen, beide mit MCP, Projektdatei,
              Subagenten und Sandbox. Wer auf einen technischen K.-o.-Sieger
              wartet, wartet vermutlich vergeblich.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Vergleich stellt zwei Agenten gegeneinander, die beide im
              Terminal zu Hause sind. Die häufigere Frage im Mittelstand ist
              eine andere, nämlich ob es überhaupt ein Agent sein soll oder ein
              KI-Editor, in dem jemand weiter selbst tippt. Genau darum geht es
              in{" "}
              <Link
                href="/blog/claude-code-vs-cursor"
                className="text-primary-600 hover:underline"
              >
                Claude Code vs. Cursor
              </Link>
              , inklusive der Rechnung für ein Team und der Frage, wann die
              ehrliche Antwort keins von beiden lautet.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die belastbare Antwort lautet deshalb: Nehmt das Werkzeug, das zu
              eurer bestehenden Arbeitsumgebung passt, prüft die Datenroute
              bevor produktiver Code hineingeht, und ersetzt die Diskussion
              durch zwei Wochen Messung. Wenn ihr dabei Unterstützung wollt,
              vom Pilotaufbau über die Anbindung eurer Systeme per MCP bis zur
              Frage, was davon DSGVO-konform betrieben werden kann,{" "}
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
                  question: "Was ist besser, Codex oder Claude Code?",
                  answer:
                    "Es gibt keinen pauschalen Sieger. Beide sind agentische Coding-Werkzeuge mit vergleichbarem Funktionsumfang: MCP-Anbindung, Projektdatei, Subagenten, Sandbox und Zeitplanung. Die Entscheidung hängt an drei Fragen: Wo arbeitet euer Team heute (Terminal und CI sprechen für Claude Code, ein bestehendes ChatGPT-Umfeld für Codex), wie tief soll automatisiert werden, und welche Compliance-Anforderungen gelten.",
                },
                {
                  question: "Was kostet Codex im Vergleich zu Claude Code?",
                  answer:
                    "Praktisch dasselbe. Einstieg: Codex Plus 20 Dollar, Claude Pro 20 Dollar monatlich beziehungsweise 17 Dollar im Jahresabo. Team: Codex Business und Claude Team Standard kosten beide 20 Dollar pro Sitzplatz jährlich, 25 Dollar monatlich. Vielnutzerstufen liegen bei beiden bei 100 und 200 Dollar. Der einzige strukturelle Unterschied ist die Codex-Stufe Go für 8 Dollar, die es bei Claude nicht gibt.",
                },
                {
                  question: "Können beide Werkzeuge MCP-Server anbinden?",
                  answer:
                    "Ja, beide unterstützen den Model Context Protocol Standard. Damit lassen sich eigene Datenquellen und Werkzeuge anbinden, etwa Ticketsystem, Wissensdatenbank oder Warenwirtschaft. Ein einmal gebauter MCP-Server funktioniert grundsätzlich mit beiden Werkzeugen, was die Wechselkosten zwischen ihnen deutlich senkt.",
                },
                {
                  question:
                    "Welches Werkzeug ist DSGVO-konform einsetzbar?",
                  answer:
                    "Beide, aber nicht in den günstigen Stufen. Bei Codex ist Datenresidenz laut Preisseite ein Enterprise-Merkmal; Business bringt SSO und MFA, aber keine zugesicherte Datenroute. Bei Claude führt der europäische Weg über einen Enterprise-Vertrag oder über den Eigenbetrieb in der eigenen Cloud, etwa Amazon Bedrock in Frankfurt. Für produktiven Kundencode ist ein privater 20-Dollar-Account bei keinem der beiden Anbieter eine tragfähige Lösung.",
                },
                {
                  question: "Lohnt es sich, beide Werkzeuge parallel zu nutzen?",
                  answer:
                    "Für einzelne Entwickler mit sehr hohem Durchsatz kann es sich rechnen, etwa indem ein Werkzeug plant und reviewt und das andere ausführt. Für ein Team von fünf bis fünfzehn Entwicklern raten wir ab: Zwei Sitzplätze pro Kopf verdoppeln die Lizenzkosten, dazu kommen zwei Auftragsverarbeitungsverträge, zwei Rechteverwaltungen und zwei Projektdateien, die auseinanderlaufen.",
                },
                {
                  question:
                    "Wie entscheiden wir zwischen den beiden konkret?",
                  answer:
                    "Mit einem Zwei-Wochen-Pilot statt einer Diskussion. Woche 0: Baseline für drei bis fünf typische Aufgaben messen. Woche 1 und 2: je ein Werkzeug im echten Alltag, mit derselben Projektdatei und mit mindestens einer Person, die beide Wochen mitmacht. Danach entlang von drei Zahlen entscheiden: Zeit pro Aufgabe gegen die Baseline, Anteil der Ergebnisse ohne Nacharbeit im Review, tatsächliche Kosten aus der Verbrauchsanzeige.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu Codex und Claude Code
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="was-sind-die-beiden">
            Was die Werkzeuge sind
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="preise">
            Die Preise im Vergleich
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="limits">
            Abrechnungslogik
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="automatisierung">
            Automatisierung
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="datenschutz">
            Datenroute und DSGVO
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="entscheidung">
            Entscheidung in drei Regeln
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="pilot">
            Der Zwei-Wochen-Pilot
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="beides">
            Beide parallel?
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
