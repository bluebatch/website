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
  slug: "claude-code-vs-github-copilot",
  author: "Max Hänsel",
  date: "2026-10-22",
  image: "/blog/claude-code-vs-github-copilot/hero.png",
  tags: ["ki", "development"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Claude Code vs. GitHub Copilot 2026: Vergleich für Teams",
  description:
    "Claude Code vs. GitHub Copilot: Preise, Teamkosten für zwölf Entwickler, Überzugslogik und die Frage, in welchem Plan euer Code ins Modelltraining läuft.",
  openGraph: {
    title: "Claude Code vs. GitHub Copilot 2026: Vergleich für Teams",
    description:
      "Die Lizenzkosten trennen die beiden um 12 Dollar im Monat. Getrennt werden sie woanders: an der Überzugslogik und daran, was im jeweiligen Plan mit eurem Code passiert.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/claude-code-vs-github-copilot/hero.png",
        width: 1200,
        height: 630,
        alt: "Leerer Arbeitsbereich eines Entwicklungsteams mit zwei parallelen Tischreihen",
      },
    ],
  },
  alternates: {
    canonical: "/blog/claude-code-vs-github-copilot",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Claude Code vs. GitHub Copilot: Was Teams wirklich unterscheidet
        </BlogHero.Headline>

        <GeoSummary>
          Claude Code von Anthropic und GitHub Copilot von Microsoft sind
          KI-Werkzeuge für Entwicklungsteams: Copilot vervollständigt im Editor
          und arbeitet in GitHub, Claude Code führt im Terminal ganze Aufgaben
          über viele Dateien aus. Preislich trennt sie fast nichts, bei zwölf
          Entwicklern liegen die Lizenzen 144 Dollar im Jahr auseinander. Der
          Unterschied, der zählt, steckt im Plan: In den Einzelplänen von
          Copilot läuft euer Code seit April 2026 ins Modelltraining, solange
          ihr nicht widersprecht. Dieser Vergleich rechnet beides durch.
        </GeoSummary>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>11 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-10-22">
            22. Oktober 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/claude-code-vs-github-copilot/hero.png"
          alt="Menschenleerer Arbeitsbereich eines Entwicklungsteams, zwei parallele Tischreihen laufen in die Tiefe"
        />
      </BlogHero>

      <BlogLayout meta={metaCustom} metadata={metadata}>
        <BlogLayout.Content>
          <div id="ausgangslage">
            <Typo.Paragraph>
              In den meisten Gesprächen, die wir zu diesem Thema führen, ist die
              Frage schon falsch gestellt. Sie lautet „Claude Code oder GitHub
              Copilot?", und sie unterstellt eine Wahl auf der grünen Wiese. Die
              gibt es selten. Wer in Deutschland Software baut und GitHub
              Enterprise oder Microsoft 365 im Haus hat, hat Copilot meistens
              schon, oft ohne bewusste Entscheidung. Die echte Frage ist
              deshalb: Lohnt das zweite Werkzeug daneben, und wenn ja, wofür.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Wir haben für diesen Vergleich die fünf Artikel gelesen, die zu
              dem Thema gerade oben stehen, zusammen rund 17.000 Wörter. Alle
              fünf vergleichen Funktionen, alle fünf nennen Preise, vier von
              fünf enden mit einer Persona-Empfehlung. In keinem einzigen kommt
              vor, was in einem deutschen Unternehmen die erste Frage ist:
              Was passiert eigentlich mit dem Code, den ihr da hineingebt. Genau
              dort liegt der größte Unterschied zwischen den beiden, und er
              hängt nicht am Werkzeug, sondern am gebuchten Plan.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="werkzeuge">
            <Typo.H2>Was die beiden Werkzeuge tatsächlich sind</Typo.H2>
            <Typo.Paragraph>
              GitHub Copilot ist als Erweiterung für die Entwicklungsumgebung
              gestartet und im Kern immer noch das: Es schlägt beim Tippen die
              nächste Zeile vor, beantwortet Fragen im Chat neben dem Code und
              ist inzwischen tief in GitHub selbst eingewachsen, also in Pull
              Requests, Reviews und Issues. Dazu ist ein Agentenmodus gekommen,
              der auch mehrschrittige Aufgaben übernimmt. Wie der funktioniert,
              haben wir in{" "}
              <Link
                href="/blog/github-copilot-agent"
                className="text-primary-600 hover:underline"
              >
                GitHub Copilot Agent
              </Link>{" "}
              im Detail auseinandergenommen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Claude Code kommt von der anderen Seite. Es lebt im Terminal,
              liest sich selbstständig durch ein Repository, ändert mehrere
              Dateien in einem Durchgang, führt Tests aus und liest deren
              Ausgabe. Eine Zeilenvervollständigung beim Tippen bietet es nicht
              an. Was es ist und wie es arbeitet, steht ausführlich in{" "}
              <Link
                href="/blog/was-ist-claude-code"
                className="text-primary-600 hover:underline"
              >
                Was ist Claude Code
              </Link>
              .
            </Typo.Paragraph>

            <Typo.Paragraph>
              Daraus folgt eine Arbeitsteilung, die im Alltag ziemlich deutlich
              ausfällt. Die kleinteilige Arbeit direkt im Editor und alles, was
              an GitHub hängt, macht Copilot besser. Die großen, unangenehmen
              Aufgaben, bei denen man vorher nicht weiß, welche Dateien
              betroffen sind, macht Claude Code besser.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-vs-github-copilot/einsatz.png"
              alt="Fünf typische Entwicklungsaufgaben und ihre Zuordnung zu Werkzeug A oder B, die Aufgabe Test schreiben bleibt unentschieden"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Die unentschiedene Zeile ist ehrlich gemeint. Tests schreiben
              beide gut, und wer eine der beiden Antworten hier für eindeutig
              hält, hat meistens nur eines der beiden Werkzeuge ernsthaft
              benutzt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="benchmarks">
            <Typo.H2>Warum die Benchmark-Zahlen nichts entscheiden</Typo.H2>
            <Typo.Paragraph>
              In fast jedem Vergleichsartikel steht ein Prozentwert auf
              SWE-bench Verified, dem gängigen Maß für die Fähigkeit, echte
              GitHub-Issues selbstständig zu lösen. Wir haben drei der
              rankenden Seiten nebeneinandergelegt und drei verschiedene Zahlen
              für dasselbe Modell auf demselben Benchmark gefunden: 87,6
              Prozent, 88,6 Prozent und 93,9 Prozent. Keine der drei Seiten
              erwähnt, dass die anderen etwas anderes schreiben.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Das ist kein Skandal, sondern die normale Unschärfe solcher
              Zahlen: Sie hängen an der Modellversion, am Gerüst drumherum und
              daran, wie viele Versuche erlaubt sind. Aber sie taugen damit
              nicht als Entscheidungsgrundlage. Der Abstand zwischen den drei
              Werten ist größer als der Abstand, den ihr im Alltag zwischen
              zwei ordentlich eingerichteten Werkzeugen spüren werdet.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Dazu kommt ein Befund, der in dieselbe Richtung zeigt. Eine viel
              zitierte Untersuchung an erfahrenen Entwicklern hat gemessen, wie
              schnell sie an echten Aufgaben mit und ohne KI-Werkzeug
              arbeiten. Die Teilnehmer erwarteten vorher rund 24 Prozent
              Beschleunigung. Gemessen wurden 19 Prozent Verlangsamung. Die
              Erklärung war nicht, dass die Vorschläge schlecht waren, sondern
              dass das Prüfen und Nacharbeiten die gesparte Tippzeit
              aufgefressen hat. Wer die Werkzeuge einführt, ohne den Review
              mitzudenken, verschiebt Arbeit, statt sie zu sparen.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Praktische Konsequenz: Verlasst euch für die Auswahl nicht auf
              fremde Zahlen, sondern messt zwei Wochen an euren eigenen
              Aufgaben. Wie so ein Pilot aufgebaut wird, haben wir in{" "}
              <Link
                href="/blog/claude-code-vs-codex"
                className="text-primary-600 hover:underline"
              >
                Codex vs. Claude Code
              </Link>{" "}
              Schritt für Schritt beschrieben, das Vorgehen ist hier identisch.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="datenweg">
            <Typo.H2>Was mit eurem Code passiert</Typo.H2>
            <Typo.Paragraph>
              Das ist der Abschnitt, wegen dem wir diesen Artikel geschrieben
              haben, und der Punkt, an dem sich die beiden Anbieter tatsächlich
              unterscheiden. Nicht in der Technik, sondern in der
              Voreinstellung.
            </Typo.Paragraph>

            <Typo.Paragraph>
              GitHub hat zum 24. April 2026 geregelt, dass Interaktionen aus
              den Einzelplänen zum Trainieren der eigenen Modelle verwendet
              werden können. Das betrifft Free, Pro, Pro+ und Max, und es
              betrifft ausdrücklich nicht nur die Chatverläufe, sondern auch
              Code-Ausschnitte und den zugehörigen Kontext. Man kann
              widersprechen, die Einstellung liegt im persönlichen Konto. Aber
              der Widerspruch ist die Ausnahme, die jemand aktiv setzen muss,
              nicht der Normalfall. Für Copilot Business und Copilot Enterprise
              gilt das Gegenteil: GitHub schließt die Nutzung von Kundendaten
              zum Training dort vertraglich aus.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-vs-github-copilot/trainings-default.png"
              alt="Derselbe Code in zwei Plänen: im Einzelplan läuft er weiter ins Modelltraining, im Organisationsplan endet der Weg an der Vertragsgrenze"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Bei Anthropic ist die Voreinstellung umgekehrt: Kein Training auf
              Kundeninhalten, und zwar in jedem bezahlten Plan, vom
              Zwanzig-Dollar-Abo bis zum Unternehmensvertrag. Man muss nichts
              abschalten, damit es gilt.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Warum das im Alltag wichtiger ist, als es klingt: Der teuerste
              Fall ist nicht die bewusste Entscheidung für einen Einzelplan. Es
              ist der Entwickler, der sein privates Zehn-Dollar-Abo im
              Firmenprojekt weiterbenutzt, weil das Unternehmen noch keine
              Sitzplätze gekauft hat. Genau das passiert in der Pilotphase
              ständig. In dem Moment verlässt Kundencode das Haus, ohne dass
              ein Auftragsverarbeitungsvertrag existiert, der das abdeckt, und
              die Verantwortung dafür liegt nicht beim Entwickler.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Deshalb unsere Regel für beide Werkzeuge, unabhängig vom
              Hersteller: Sobald echter Kundencode im Spiel ist, gehört das
              Werkzeug in einen Organisationsplan mit Vertrag, oder es gehört
              nicht in das Projekt. Für eine Datenverarbeitung, die die EU
              nicht verlässt, führt der Weg bei Anthropic über einen
              Unternehmensvertrag oder über den Eigenbetrieb in der eigenen
              Cloud, etwa über{" "}
              <Link
                href="/blog/amazon-bedrock"
                className="text-primary-600 hover:underline"
              >
                Amazon Bedrock
              </Link>{" "}
              in Frankfurt. Bei Microsoft hängt es am bestehenden
              Rahmenvertrag, den die meisten Häuser über M365 ohnehin haben.
              Das ist der eine Punkt, an dem Copilot im deutschen Mittelstand
              strukturell im Vorteil ist: Der Vertrag ist schon unterschrieben.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="preise">
            <Typo.H2>Die Preise nebeneinander</Typo.H2>
            <Typo.Paragraph>
              Beide Anbieter staffeln nach Nutzungsmenge, benennen die Einheit
              aber unterschiedlich. GitHub rechnet in Guthaben für
              anspruchsvolle Anfragen, Anthropic in Nutzung pro
              Fünf-Stunden-Fenster. Die Stufen im Überblick, jeweils aus den
              offiziellen Preisseiten:
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Stufe</DataTable.HeaderCell>
                  <DataTable.HeaderCell>GitHub Copilot</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Claude Code</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell>Kostenlos</DataTable.Cell>
                  <DataTable.Cell>
                    Free, begrenzte Chat- und Agentennutzung
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Free, aber <strong>ohne</strong> Claude Code
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Einstieg</DataTable.Cell>
                  <DataTable.Cell>
                    Pro, 10 $ pro Monat, 1.000 Guthaben plus 500 flexibel
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Pro, 20 $ monatlich bzw. 17 $ im Jahresabo
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Vielnutzer</DataTable.Cell>
                  <DataTable.Cell>
                    Pro+, 39 $ pro Monat, bis 7.000 Guthaben; Max 100 $
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Max, ab 100 $ pro Monat, in zwei Stufen
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Team</DataTable.Cell>
                  <DataTable.Cell>
                    Business, 19 $ pro Sitzplatz und Monat, 1.900 Guthaben
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Team Standard, 20 $ pro Sitzplatz im Jahresabo, 25 $
                    monatlich
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Unternehmen</DataTable.Cell>
                  <DataTable.Cell>
                    Enterprise, 39 $ pro Sitzplatz und Monat, 3.900 Guthaben
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Enterprise, 20 $ pro Sitzplatz plus Nutzung zu API-Preisen
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Der interessante Wert steht in der Team-Zeile, und er sagt das
              Gegenteil dessen, was die meisten erwarten: 19 Dollar gegen 20
              Dollar pro Sitzplatz. Eine ausführlichere Aufschlüsselung der
              Anthropic-Seite steht in{" "}
              <Link
                href="/blog/claude-code-kosten"
                className="text-primary-600 hover:underline"
              >
                Claude Code Kosten
              </Link>
              , die Microsoft-Seite haben wir in{" "}
              <Link
                href="/blog/microsoft-365-copilot-kosten"
                className="text-primary-600 hover:underline"
              >
                Microsoft 365 Copilot Kosten
              </Link>{" "}
              aufgedröselt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="teamkosten">
            <Typo.H2>Zwölf Entwickler, zwölf Monate</Typo.H2>
            <Typo.Paragraph>
              Rechnen wir es an einer Größe durch, die im Mittelstand üblich
              ist: zwölf Entwickler, ein Jahr, jeweils die Team-Stufe.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Copilot Business kostet 12 mal 19 Dollar mal 12 Monate, also
              2.736 Dollar im Jahr. Claude Team Standard im Jahresabo kostet 12
              mal 20 Dollar mal 12 Monate, also 2.880 Dollar. Die Differenz
              beträgt 144 Dollar im Jahr, umgerechnet 12 Dollar im Monat für
              das gesamte Team. Auf dieser Ebene ist die Preisfrage
              entschieden, bevor sie gestellt wurde: Es gibt keinen Unterschied.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-vs-github-copilot/teamkosten.png"
              alt="Zwei Balken für zwölf Entwickler über zwölf Monate: die Lizenzanteile sind gleich hoch, der Überzug darüber unterscheidet sich deutlich"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Interessant wird es eine Ebene darunter, beim Überzug. Wenn bei
              Copilot jeder der zwölf Entwickler in einem Monat 300 Anfragen
              über seinem Guthaben landet, kostet das bei 0,04 Dollar je
              Anfrage 144 Dollar, also in einem einzigen Monat so viel wie die
              Lizenzdifferenz im ganzen Jahr. Das ist keine
              Schreckensrechnung, 300 zusätzliche Anfragen sind für jemanden,
              der den Agentenmodus ernsthaft nutzt, keine große Zahl. Es zeigt
              nur, wo die Kosten wirklich entstehen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="ueberzug">
            <Typo.H2>Geld oder Zeit: der strukturelle Unterschied</Typo.H2>
            <Typo.Paragraph>
              Beide Anbieter haben eine Grenze, aber sie verhalten sich
              dahinter grundverschieden, und das ist der Unterschied, der eure
              Kostenplanung tatsächlich bestimmt.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/claude-code-vs-github-copilot/ueberzug.png"
              alt="Zwei Wege, wenn das Kontingent aufgebraucht ist: Arbeit läuft weiter gegen zusätzliche Kosten, oder Arbeit stoppt bis zum nächsten Zeitfenster"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Bei Copilot läuft die Arbeit weiter und die Rechnung mit. Das ist
              angenehm, wenn ein Release ansteht, und unangenehm, wenn ihr eine
              feste Zahl im Budget stehen habt. Die Kosten sind nach oben
              offen, die Produktivität nicht gedeckelt.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Bei Claude ist es umgekehrt: Das Fünf-Stunden-Fenster ist zu
              Ende, und man wartet auf das nächste. Die Kosten stehen fest, die
              Produktivität hat eine Obergrenze. Wer mehr braucht, wechselt
              nicht gleitend, sondern springt eine ganze Stufe hoch, beim
              Team-Sitzplatz von 20 auf 100 Dollar im Jahresabo. Das ist ein
              Faktor fünf, kein Aufschlag.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Daraus folgt eine ziemlich praktische Faustregel. Wenn eure Last
              gleichmäßig über das Jahr verteilt ist, ist das feste Fenster
              angenehmer, weil die Zahl im Budget hält. Wenn ihr in Spitzen
              arbeitet, also vor Releases oder in Migrationsprojekten, ist die
              nachlaufende Abrechnung angenehmer, weil sie in der Spitze nicht
              bremst. Diese Frage könnt ihr aus eurer eigenen Historie
              beantworten, und sie ist beantwortbarer als jede Benchmark-Zahl.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="entscheidung">
            <Typo.H2>Die Entscheidung in drei Regeln</Typo.H2>
            <Typo.Paragraph>
              <strong>Erstens: Kein Kundencode in einem Einzelplan.</strong> Das
              gilt für beide Werkzeuge und ist die einzige Regel hier, bei der
              es nichts abzuwägen gibt. Bei Copilot ist es besonders scharf,
              weil das Training in den Einzelplänen die Voreinstellung ist.
              Sitzplätze kosten 19 beziehungsweise 20 Dollar, deutlich weniger
              als die erste Stunde, die ein Datenschutzvorfall kostet.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>
                Zweitens: Copilot, wenn eure Arbeit in GitHub stattfindet.
              </strong>{" "}
              Wenn Reviews, Issues und Pipelines bei GitHub liegen und eure
              Leute den ganzen Tag in der Entwicklungsumgebung sind, holt ihr
              aus Copilot mehr heraus, weil es dort schon eingebaut ist und
              weil der Vertrag steht. Die Zeilenvervollständigung beim Tippen
              bekommt ihr bei Claude Code gar nicht.
            </Typo.Paragraph>

            <Typo.Paragraph>
              <strong>
                Drittens: Claude Code, wenn die Aufgaben groß und unübersichtlich
                sind.
              </strong>{" "}
              Ein Altsystem verstehen, eine Bibliothek über sechzig Dateien
              hinweg austauschen, eine Migration vorbereiten: Das sind
              Aufgaben, bei denen ein Werkzeug selbstständig lesen, ändern und
              prüfen können muss. Dazu kommt die Anbindung an eure eigenen
              Systeme über MCP, mit der ihr Ticketsystem oder Warenwirtschaft
              als Kontext verfügbar macht; wie das aufgesetzt wird, steht in{" "}
              <Link
                href="/blog/claude-code-mcp"
                className="text-primary-600 hover:underline"
              >
                Claude Code MCP
              </Link>
              .
            </Typo.Paragraph>

            <Typo.Paragraph>
              Und ja, für viele Teams ist die richtige Antwort beides. Nicht
              als Bequemlichkeit, sondern weil die Werkzeuge unterschiedliche
              Teile des Arbeitstags abdecken. Bei zwölf Entwicklern kostet die
              Doppelbelegung rund 5.600 Dollar im Jahr statt 2.800. Ob sich das
              rechnet, entscheidet ihr nicht am Preisschild, sondern daran, ob
              die großen Aufgaben aus Regel drei bei euch regelmäßig anfallen
              oder zweimal im Jahr.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div id="fazit">
            <Typo.H2>Fazit</Typo.H2>
            <Typo.Paragraph>
              Der Vergleich fällt unspektakulärer aus, als die Überschriften im
              Netz vermuten lassen. Die Preise sind praktisch identisch, die
              Benchmark-Zahlen widersprechen sich untereinander stärker, als
              die Werkzeuge sich im Alltag unterscheiden, und beide sind gut.
              Was tatsächlich trennt, sind zwei Dinge: die Überzugslogik, also
              ob ihr bei Erreichen der Grenze zahlt oder wartet, und die Frage,
              ob euer Code im gebuchten Plan ins Training läuft.
            </Typo.Paragraph>

            <Typo.Paragraph>
              Die zweite Frage beantwortet ihr, bevor ihr das erste Werkzeug
              installiert, und sie hat mit dem Vergleich streng genommen nichts
              zu tun. Sie hat mit dem Plan zu tun. Wenn ihr dabei
              Unterstützung wollt, von der Auswahl über die Anbindung eurer
              Systeme bis zur Frage, was davon DSGVO-konform betrieben werden
              kann,{" "}
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
                    "Was ist besser, Claude Code oder GitHub Copilot?",
                  answer:
                    "Es gibt keinen pauschalen Sieger, weil die beiden unterschiedliche Teile des Arbeitstags abdecken. GitHub Copilot ist stärker bei der Arbeit direkt im Editor und bei allem, was an GitHub hängt, also Pull Requests, Reviews und Issues; eine Zeilenvervollständigung beim Tippen bietet Claude Code gar nicht an. Claude Code ist stärker bei großen, unübersichtlichen Aufgaben über viele Dateien hinweg, etwa beim Verstehen eines Altsystems oder bei einer Migration. Viele Teams nutzen beides parallel.",
                },
                {
                  question:
                    "Was kostet GitHub Copilot im Vergleich zu Claude Code?",
                  answer:
                    "Auf Team-Ebene fast dasselbe: Copilot Business kostet 19 Dollar pro Sitzplatz und Monat, Claude Team Standard 20 Dollar im Jahresabo beziehungsweise 25 Dollar monatlich. Bei zwölf Entwicklern sind das 2.736 gegen 2.880 Dollar im Jahr, also 144 Dollar Unterschied. Bei den Einzelplänen ist Copilot günstiger: 10 Dollar für Pro gegen 20 Dollar für Claude Pro. Der Unterschied, der zählt, liegt nicht in der Lizenz, sondern im Überzug.",
                },
                {
                  question:
                    "Wird mein Code bei GitHub Copilot zum Training verwendet?",
                  answer:
                    "In den Einzelplänen ja, solange ihr nicht widersprecht. GitHub hat zum 24. April 2026 geregelt, dass Interaktionen aus Free, Pro, Pro+ und Max zum Trainieren der Modelle verwendet werden können, ausdrücklich inklusive Code-Ausschnitten und Kontext; der Widerspruch liegt in den persönlichen Kontoeinstellungen. Für Copilot Business und Copilot Enterprise schließt GitHub die Nutzung von Kundendaten zum Training vertraglich aus. Bei Anthropic gilt in allen bezahlten Plänen von vornherein kein Training auf Kundeninhalten.",
                },
                {
                  question:
                    "Was passiert, wenn das monatliche Kontingent aufgebraucht ist?",
                  answer:
                    "Hier unterscheiden sich die beiden strukturell. Bei Copilot läuft die Arbeit weiter und jede zusätzliche anspruchsvolle Anfrage kostet 0,04 Dollar, die Kosten sind also nach oben offen. Bei Claude endet das Fünf-Stunden-Fenster und man wartet auf das nächste, die Kosten stehen fest und die Produktivität ist gedeckelt. Wer bei Claude dauerhaft mehr braucht, wechselt auf die nächste Stufe, beim Team-Sitzplatz von 20 auf 100 Dollar im Jahresabo.",
                },
                {
                  question:
                    "Kann ich Claude Code und GitHub Copilot parallel einsetzen?",
                  answer:
                    "Ja, und für Teams mit regelmäßig großen Umbauaufgaben ist das oft die sinnvollste Antwort, weil die Werkzeuge sich nicht überschneiden, sondern ergänzen. Bei zwölf Entwicklern verdoppeln sich die Lizenzkosten dadurch auf rund 5.600 Dollar im Jahr, dazu kommen zwei Auftragsverarbeitungsverträge und zwei Rechteverwaltungen. Die Frage ist deshalb nicht der Preis, sondern wie häufig die großen Aufgaben bei euch tatsächlich anfallen.",
                },
                {
                  question:
                    "Taugen die SWE-bench-Zahlen als Entscheidungsgrundlage?",
                  answer:
                    "Nur eingeschränkt. Wir haben in drei parallel rankenden Vergleichsartikeln drei verschiedene Werte für dasselbe Modell auf demselben Benchmark gefunden, 87,6, 88,6 und 93,9 Prozent, ohne dass eine der Seiten den Widerspruch erwähnt. Die Werte hängen an Modellversion, Testgerüst und Zahl der erlaubten Versuche. Verlässlicher ist ein zweiwöchiger Pilot an euren eigenen Aufgaben, gemessen an Zeit pro Aufgabe und am Anteil der Ergebnisse, die ohne Nacharbeit durch den Review kommen.",
                },
              ]}
            >
              <FaqContainer.Headline>
                Häufige Fragen zu Claude Code und GitHub Copilot
              </FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="ausgangslage">
            Die Ausgangslage
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="werkzeuge">
            Was die Werkzeuge sind
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="benchmarks">
            Benchmarks
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="datenweg">
            Was mit eurem Code passiert
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="preise">
            Die Preise
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="teamkosten">
            Zwölf Entwickler
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="ueberzug">
            Geld oder Zeit
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="entscheidung">
            Drei Regeln
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
