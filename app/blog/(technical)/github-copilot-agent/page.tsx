import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "github-copilot-agent",
  author: "Max Hänsel",
  date: "2026-07-09",
  image: "/blog/github-copilot-agent/hero.png",
  tags: ["ki", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "GitHub Copilot Agent: Coding Agent und Agent Mode erklärt",
  description:
    "GitHub Copilot Agent verständlich erklärt: Wie der autonome Coding Agent aus einem Issue einen Pull Request macht, was Agent Mode in VS Code kann, Pläne, Premium Requests, Governance und DSGVO für den Mittelstand.",
  openGraph: {
    title: "GitHub Copilot Agent: Coding Agent und Agent Mode erklärt",
    description:
      "Vom Issue zum Pull Request: Wie der GitHub Copilot Coding Agent autonom arbeitet, wie Agent Mode in VS Code funktioniert, was es kostet und worauf Governance und Datenschutz im Mittelstand achten müssen.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/github-copilot-agent/hero.png",
        width: 1200,
        height: 630,
        alt: "Ein Entwicklerteam arbeitet mit dem GitHub Copilot Agent",
      },
    ],
  },
  alternates: {
    canonical: "/blog/github-copilot-agent",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          GitHub Copilot Agent: Vom Issue zum fertigen Pull Request
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>13 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-07-09">9. Juli 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/github-copilot-agent/hero.png"
          alt="Ein Entwicklerteam im Mittelstand arbeitet mit dem GitHub Copilot Agent an einem Pull Request"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Der Begriff GitHub Copilot Agent meint je nach Kontext zwei sehr
              unterschiedliche Werkzeuge, und genau das sorgt für Verwirrung.
              Einmal ist der autonome Coding Agent gemeint, der ein GitHub Issue
              zugewiesen bekommt und im Hintergrund einen fertigen Pull Request
              produziert. Einmal ist der Agent Mode in Visual Studio Code
              gemeint, der direkt im Editor mehrstufige Aufgaben übernimmt. Beide
              teilen dieselbe Idee, arbeiten aber an verschiedenen Orten und in
              verschiedenen Geschwindigkeiten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Beitrag trennt die beiden sauber, zeigt den End-to-End-Ablauf
              des Coding Agents, ordnet Pläne und Premium Requests ein und nimmt
              die Governance- und Datenschutzfragen ernst, die im Mittelstand vor
              jeder Einführung stehen. Wer eigene Agenten in der Microsoft-Welt
              bauen will, also mit Microsoft 365 Copilot Studio, ist hier falsch:
              Das ist ein anderes Produkt, das wir im Leitfaden{" "}
              <Link
                href="/blog/copilot-agent-erstellen"
                className="text-primary-600 hover:underline"
              >
                Copilot Agent erstellen
              </Link>{" "}
              behandeln. Hier geht es um die Coding-Agenten direkt in GitHub und
              VS Code.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="zwei-agenten">
              Coding Agent oder Agent Mode: zwei Werkzeuge, ein Name
            </Typo.H2>
            <Typo.Paragraph>
              Bevor es um Abläufe geht, lohnt die Unterscheidung, denn sie
              entscheidet, welches Werkzeug zu welcher Aufgabe passt. Der Coding
              Agent ist asynchron: Man übergibt ihm eine Aufgabe und macht etwas
              anderes, während er auf GitHub arbeitet und am Ende einen Pull
              Request zur Prüfung vorlegt. Der Agent Mode ist interaktiv: Er
              arbeitet live neben der Entwicklerin im Editor, schlägt Edits vor,
              führt Befehle aus und reagiert sofort auf Zwischenrufe.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Eine einfache Merkregel: Der Coding Agent läuft im Hintergrund auf
              GitHub und liefert einen Pull Request, der Agent Mode arbeitet live
              im Editor und liefert Datei-Änderungen. Beide sind agentisch, nutzen
              also Werkzeuge, lesen Code, führen Tests aus und korrigieren sich
              selbst. Der Unterschied liegt im Ort und im Tempo.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/github-copilot-agent/zwei-agenten-vergleich.png"
              alt="Vergleich von Coding Agent und Agent Mode: asynchron auf GitHub gegenüber interaktiv in VS Code"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Wichtig für die Planung im Team ist auch der Zugang. Der Agent Mode
              in VS Code ist an alle Nutzer ausgerollt, auch in den kostenlosen
              Stufen. Der Coding Agent dagegen ist den bezahlten Copilot-Plänen
              vorbehalten und muss in Organisationen erst von einem Administrator
              freigeschaltet werden. Wer also nur den interaktiven Modus testen
              will, kommt günstiger an ihn heran als an den autonomen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="was-ist-coding-agent">
              Was ist der GitHub Copilot Coding Agent?
            </Typo.H2>
            <Typo.Paragraph>
              GitHub beschreibt den Coding Agent als Helfer, der eigenständig im
              Hintergrund Aufgaben erledigt, ähnlich wie ein menschlicher
              Entwickler. Man weist ihm ein klar umrissenes Issue zu, er richtet
              sich eine eigene Arbeitsumgebung ein, schreibt Code auf einem
              eigenen Branch und öffnet einen Pull Request, den am Ende ein Mensch
              prüft und merged. Der Agent eignet sich laut Dokumentation für
              Bugfixes, kleine inkrementelle Features, Refactorings, bessere
              Test-Abdeckung und Dokumentation.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/github-copilot-agent/coding-agent-workflow.png"
              alt="Ablauf des Coding Agents: Issue zuweisen, in isolierter Umgebung arbeiten, Pull Request öffnen, CI und Review, Merge durch den Menschen"
              width={1200}
              height={630}
            />

            <Typo.H3>Der Ablauf Schritt für Schritt</Typo.H3>
            <Typo.Paragraph>
              Nach der Zuweisung startet der Agent eine kurzlebige, von GitHub
              Actions betriebene Umgebung, klont das Repository und analysiert den
              Code. Er zieht Kontext aus dem Issue selbst, aus verbundenen
              Diskussionen und aus hinterlegten Projektanweisungen. Früh im
              Prozess öffnet er einen Entwurfs-Pull-Request, oft mit einem
              WIP-Hinweis im Titel, und pusht laufend Commits. Den Fortschritt
              kann man in den Session-Logs live mitlesen, inklusive der
              Begründungen für einzelne Schritte.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Während der Arbeit führt der Agent automatisierte Tests und Linter
              in seiner Umgebung aus. Ist er fertig, aktualisiert er den Pull
              Request mit einem aussagekräftigen Titel und einer Beschreibung und
              bittet um Review. Hinterlässt das Team Feedback im Review, arbeitet
              der Agent es ein und macht weiter, bis jemand freigibt. Den finalen
              Merge macht immer ein Mensch, der Agent merged nicht selbst.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die Arbeitsumgebung lässt sich anpassen. Über eine eigene
              Setup-Datei im Repository können Tools und Abhängigkeiten
              vorinstalliert, Umgebungsvariablen gesetzt und größere Runner
              gewählt werden. Eine Session hat ein hartes Zeitlimit von etwa einer
              Stunde, das sich nicht verlängern lässt, was den Zuschnitt der
              Aufgaben auf überschaubare Einheiten zusätzlich nahelegt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="agent-mode">Agent Mode in VS Code</Typo.H2>
            <Typo.Paragraph>
              Der Agent Mode ist der interaktive Gegenpart. In Visual Studio Code
              agiert er als autonomer Mitprogrammierer für mehrstufige Aufgaben:
              Er liest relevante Dateien, schlägt Änderungen über mehrere Dateien
              hinweg vor, führt Terminal-Befehle aus, liest Compiler- und
              Linterfehler ein und korrigiert sich in einer Schleife selbst, bis
              das Ziel erreicht ist oder er Rückfragen braucht. Edits werden
              automatisch angewendet, bei potenziell riskanten Befehlen fragt er
              vorher nach.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Damit grenzt sich der Agent Mode von zwei einfacheren Modi ab. Der
              Ask Mode beantwortet Fragen zur Codebasis, ohne Dateien zu ändern,
              und eignet sich zum Verstehen und Brainstormen. Der Edit Mode nimmt
              gezielte Änderungen an Dateien vor, die man selbst benennt, und
              streamt die Vorschläge zum Annehmen oder Ablehnen. Der Agent Mode
              geht darüber hinaus, indem er selbst entscheidet, welche Dateien
              betroffen sind, und den ganzen Weg von der Analyse bis zum Testlauf
              übernimmt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Eine zentrale Stärke ist die Anbindung externer Werkzeuge über das
              Model Context Protocol. Über MCP-Server bekommt der Agent Zugriff
              auf zusätzlichen Kontext und zusätzliche Fähigkeiten, etwa auf
              interne Systeme oder Browsersteuerung. Wer das Prinzip hinter
              solchen agentischen Werkzeugen grundsätzlich verstehen will, findet
              die tool-agnostische Einordnung in unserem Leitfaden{" "}
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

          <div>
            <Typo.H2 id="aufgabe-zuweisen">Eine Aufgabe zuweisen</Typo.H2>
            <Typo.Paragraph>
              Den Coding Agent erreicht man auf mehreren Wegen, und alle laufen
              auf denselben Hintergrundprozess hinaus. Am direktesten ist die
              Zuweisung eines Issues: Auf github.com oder in der GitHub-Mobile-App
              wählt man im Issue unter den Bearbeitern Copilot aus, und der Agent
              nimmt die Arbeit auf. Genauso lässt sich der Agent aus einem
              Agents-Panel heraus mit neuen Aufgaben betrauen, während man
              bestehende verfolgt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              In der Entwicklungsumgebung selbst kann man Aufgaben aus VS Code
              heraus delegieren und laufende Tasks über die Pull-Request-Erweiterung
              beobachten, oder den Agenten direkt aus dem Copilot-Chat anstoßen.
              Auch die Kommandozeile kennt den Weg: Mit einem Delegate-Befehl
              committet die CLI offene Änderungen auf einen neuen Branch, startet
              den Coding Agent im Hintergrund und gibt am Ende den Link zum Pull
              Request und zur Session aus. Welcher Weg passt, hängt vom Workflow
              ab, das Ergebnis ist in allen Fällen ein Pull Request zur Prüfung.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="plaene-kosten">
              Pläne, Premium Requests und Kosten
            </Typo.H2>
            <Typo.Paragraph>
              Der Coding Agent ist in den bezahlten Copilot-Plänen verfügbar, also
              in Pro, Pro+, Business und Enterprise. In Business und Enterprise
              muss ein Administrator die zugehörige Richtlinie aktivieren, bevor
              Teams den Agenten nutzen können. Der kostenlose Plan enthält den
              Coding Agent nicht, während der Agent Mode in VS Code wie erwähnt
              breiter verfügbar ist.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/github-copilot-agent/plaene-premium-requests.png"
              alt="Übersicht der Copilot-Pläne und der Premium-Request-Logik mit Modell-Multiplikator"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Die Abrechnung läuft über zwei Größen. Zum einen verbraucht der
              Agent GitHub-Actions-Minuten für seine Arbeitsumgebung. Zum anderen
              zehrt er an den Premium Requests. Ein Request ist jede Interaktion,
              bei der Copilot etwas erledigt, Premium Requests sind die
              anspruchsvolleren davon. Jedes Modell hat dabei einen Multiplikator,
              der das Kontingent unterschiedlich stark belastet. Wichtig: Nur die
              vom Menschen angestoßenen Prompts zählen, die vielen autonomen
              Werkzeugaufrufe, die der Agent selbst macht, belasten das Kontingent
              nicht.
            </Typo.Paragraph>

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Plan</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Coding Agent</DataTable.HeaderCell>
                  <DataTable.HeaderCell>
                    Premium Requests
                  </DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Free</DataTable.Cell>
                  <DataTable.Cell>nein</DataTable.Cell>
                  <DataTable.Cell>sehr begrenzt</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Pro</DataTable.Cell>
                  <DataTable.Cell>ja</DataTable.Cell>
                  <DataTable.Cell>monatliches Kontingent</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Pro+</DataTable.Cell>
                  <DataTable.Cell>ja, mit Top-Modellen</DataTable.Cell>
                  <DataTable.Cell>größeres Kontingent</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Business / Enterprise</DataTable.Cell>
                  <DataTable.Cell>ja, nach Policy-Freigabe</DataTable.Cell>
                  <DataTable.Cell>pro Sitz, zubuchbar</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Die Kontingente werden monatlich zurückgesetzt, nicht verbrauchte
              Requests verfallen. Wer mehr braucht, kann zusätzliche Requests
              nutzungsbasiert dazubuchen und dafür Ausgabengrenzen setzen. Die
              konkreten Zahlen, also die Höhe der Kontingente, die Multiplikatoren
              je Modell und der Preis pro Zusatz-Request, ändern sich erfahrungsgemäß
              häufig. Verlässlich ist hier nur die aktuelle GitHub-Preisliste,
              Stand dieses Beitrags ist Juli 2026. Für die Praxis gilt: Premium
              Requests und Actions-Minuten sind laufende Kosten, die man von
              Anfang an planen und über Limits deckeln sollte.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="modelle">Welches Modell arbeitet im Agenten?</Typo.H2>
            <Typo.Paragraph>
              Copilot bietet Modelle von mehreren Anbietern an, darunter die
              Claude-Familie von Anthropic, die GPT-Familie von OpenAI und Gemini
              von Google. Für den Coding Agent lässt sich das Modell beim Starten
              einer Aufgabe wählen, sodass man für eine Aufgabe ein eher
              gründliches und für eine andere ein eher schnelles Modell nehmen
              kann. Welche konkreten Versionen jeweils verfügbar sind, wechselt
              laufend zwischen Vorschau- und Allgemein-Status.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für die Praxis ist die Modellwahl weniger eine Grundsatzfrage als
              eine Feinjustierung. Wichtiger als die exakte Version ist, dass das
              Issue gut beschrieben ist und das Repository klare Konventionen
              mitbringt. Ein starkes Modell rettet kein vages Issue, und ein gutes
              Issue kommt auch mit einem soliden Standardmodell weit. Die aktuelle
              Modellliste steht in der GitHub-Dokumentation.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="governance">Governance, Sicherheit und DSGVO</Typo.H2>
            <Typo.Paragraph>
              Für den Mittelstand ist die spannendste Frage nicht, was der Agent
              kann, sondern wie er eingehegt ist. Hier ist GitHub erfreulich
              konservativ. Der Agent kann nur auf Branches pushen, die er selbst
              angelegt hat, und er kann seine eigenen Pull Requests nicht selbst
              freigeben. Bestehende Review-Pflichten, Rulesets und
              Branch-Protection-Regeln greifen automatisch, und CI-Workflows
              starten erst nach menschlicher Freigabe. So bleibt der Mensch an
              jeder Stelle, an der es zählt, im Steuerstand.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/github-copilot-agent/governance-ebenen.png"
              alt="Governance-Ebenen um ein Repository: Branch-Protection, Review-Pflicht, Berechtigungen, Firewall und Audit-Log"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Eine zweite Schutzebene ist die eingeschränkte Internetverbindung
              der Arbeitsumgebung. Standardmäßig erreicht der Agent nur GitHub und
              eine empfohlene Liste gängiger Paketquellen, damit er Abhängigkeiten
              laden kann. Geblockte Zugriffe werden im Pull Request protokolliert,
              und Administratoren können die Liste gezielt um eigene Domains
              erweitern. Der Sinn dahinter ist ausdrücklich, das Risiko eines
              Datenabflusses zu begrenzen, etwa wenn manipulierte Anweisungen den
              Agenten zu unerwünschtem Verhalten verleiten wollen. Auch die
              Berechtigungen sind eng: Der Agent reagiert nur auf Kommentare von
              Personen mit Schreibrechten am Repository.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Beim Datenschutz gilt für Business- und Enterprise-Kunden, dass
              GitHub deren Code nicht zum Training der eigenen Modelle verwendet.
              Für Unternehmen mit der Pflicht zur Datenhaltung in der EU lässt sich
              über die Data-Residency-Optionen von GitHub Enterprise erzwingen,
              dass Verarbeitung und Daten in einer gewählten Region bleiben. Hier
              ist allerdings ein ehrlicher Hinweis nötig: Der Coding Agent war
              zeitweise nicht auf der isolierten Data-Residency-Infrastruktur
              verfügbar. Wer EU-Datenhaltung zwingend braucht, sollte den aktuellen
              Stand vor der Einführung genau prüfen. Eine vertiefte Einordnung
              zum Thema bietet unser Beitrag{" "}
              <Link
                href="/blog/ki-datenschutz"
                className="text-primary-600 hover:underline"
              >
                KI-Datenschutz
              </Link>{" "}
              sowie der Überblick zu{" "}
              <Link
                href="/blog/dsgvo-konforme-ki-tools"
                className="text-primary-600 hover:underline"
              >
                DSGVO-konformen KI-Tools
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              GitHub und Microsoft sind US-Anbieter, weshalb Auftragsverarbeitung,
              Drittlandtransfer und die konkrete Ausgestaltung im Einzelfall
              rechtlich zu bewerten sind. Die Aussagen hier sind eine allgemeine
              Einordnung und kein Rechtsrat, im Zweifel hilft eine
              Datenschutzberatung.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="best-practices">
              Wofür der Agent taugt und wofür nicht
            </Typo.H2>
            <Typo.Paragraph>
              Der Coding Agent ist ein Werkzeug für klar umrissene Aufgaben, kein
              Architekt. Gut geeignet sind nach GitHubs eigener Einschätzung
              überschaubare Bugfixes, kleinere Feature-Anpassungen an der
              Oberfläche, das Verbessern der Test-Abdeckung, das Aktualisieren von
              Dokumentation und der Abbau technischer Schulden. Das verbindende
              Merkmal: Die Aufgabe lässt sich präzise beschreiben und ihr Erfolg
              eindeutig prüfen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Schlecht geeignet ist der Agent für breite, kontextreiche
              Refactorings, für Aufgaben mit tiefem Domänenwissen, für große
              Änderungen mit Anspruch auf Design-Konsistenz und für alles
              Sicherheits- oder Authentifizierungskritische. Auch mehrdeutige
              Anforderungen, bei denen erst das Verständnis erarbeitet werden muss,
              gehören nicht zu seinen Stärken. Hier bleibt der Mensch im Lead.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/github-copilot-agent/best-practices.png"
              alt="Erfolgsfaktoren für den Coding Agent: klar umrissenes Issue, copilot-instructions-Datei und MCP-Kontext führen zu einem guten Pull Request"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Die Qualität der Ergebnisse steht und fällt mit der Steuerung. Ein
              gutes Issue ist im Grunde ein guter Prompt: klare
              Problembeschreibung, vollständige Akzeptanzkriterien und ein Hinweis,
              welche Dateien betroffen sind. Eine Datei namens
              copilot-instructions im Repository gibt dem Agenten die nötigen
              Projektinfos mit, also Build- und Testanweisungen, Konventionen und
              Coding-Standards, kurz und actionable gehalten. Über das Model
              Context Protocol lassen sich zusätzliche Werkzeuge und Kontextquellen
              anbinden. Und Review-Feedback gibt man am besten gebündelt, statt in
              vielen Einzelkommentaren.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="mittelstand">
              Was das für den Mittelstand bedeutet
            </Typo.H2>
            <Typo.Paragraph>
              In vielen Mittelstands- und Großhandelsunternehmen arbeitet ein
              kleines Entwicklerteam neben dem Tagesgeschäft an internen Tools,
              Schnittstellen und Anbindungen. Genau hier liegt der realistische
              Nutzen des Coding Agents. Routine-Issues wie ein kleiner Konnektor
              zur ERP-Anbindung, ein Datenexport, ein Bugfix in einem internen
              Web-Tool oder das Nachziehen von Tests lassen sich delegieren und
              später als Pull Request reviewen, ohne den eigenen Kontext zu
              verlassen. Wer den Bogen vom Werkzeug zum Prozess schlagen will,
              findet die breitere Perspektive in unserem{" "}
              <Link
                href="/blog/prozessautomatisierung-guide"
                className="text-primary-600 hover:underline"
              >
                Leitfaden zur Prozessautomatisierung
              </Link>{" "}
              und in den Beispielen aus dem{" "}
              <Link
                href="/use-cases/grosshandel"
                className="text-primary-600 hover:underline"
              >
                Großhandel
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              Was der Agent nicht ersetzt, ist der Entwurf einer ERP-Integration,
              die sicherheits- und zahlungskritischen Teile oder die Klärung
              mehrdeutiger Anforderungen aus dem Fachbereich. Er ist Zuarbeiter,
              nicht Entscheider. Gerade das passt zur Realität im Mittelstand: Die
              Governance-Mechanik mit Review-Pflicht, ohne Self-Merge, mit
              Branch-Protection und eingeschränkter Firewall liefert genau die
              Argumente, die in der Diskussion mit Geschäftsführung und
              Datenschutz zählen. Wichtig bleiben die ehrlichen Vorbehalte: laufende
              Kosten einplanen, die Frage der EU-Datenhaltung klären, in die
              Qualität der Issues investieren und nichts ungeprüft mergen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer den GitHub-Weg gegen die Agenten anderer Anbieter abwägt, findet
              die Schwesterbeiträge zu{" "}
              <Link
                href="/blog/chatgpt-agent-erstellen"
                className="text-primary-600 hover:underline"
              >
                ChatGPT-Agenten
              </Link>{" "}
              und{" "}
              <Link
                href="/blog/google-ai-agent"
                className="text-primary-600 hover:underline"
              >
                Google-KI-Agenten
              </Link>{" "}
              hilfreich. Wer bei der Einführung Unterstützung braucht, findet sie
              in unseren{" "}
              <Link
                href="/services"
                className="text-primary-600 hover:underline"
              >
                Leistungen
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit</Typo.H2>
            <Typo.Paragraph>
              Hinter dem Schlagwort GitHub Copilot Agent stecken zwei klar
              trennbare Werkzeuge: ein autonomer Coding Agent, der aus einem Issue
              einen Pull Request macht, und ein interaktiver Agent Mode im Editor.
              Beide entfalten ihren Wert dort, wo Aufgaben klar umrissen sind und
              ein Mensch am Ende prüft. Die eingebauten Leitplanken, kein
              Self-Merge, greifende Branch-Protection, eingeschränkte Firewall und
              kein Training auf Geschäftskunden-Code, machen den Einsatz für den
              Mittelstand vertretbar. Wer die Kosten plant, die Datenhaltung klärt
              und in gute Issues investiert, bekommt einen verlässlichen
              Zuarbeiter für die vielen kleinen Routine-Tickets, die sonst liegen
              bleiben. Wenn ihr überlegt, das in eurem Team zu erproben, sprecht
              uns gern an, wir{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                helfen bei der Einordnung
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="faq">Häufige Fragen</Typo.H2>
            <FaqContainer
              faqs={[
                {
                  question:
                    "Was ist der Unterschied zwischen GitHub Copilot Coding Agent und Agent Mode?",
                  answer:
                    "Der Coding Agent arbeitet asynchron auf GitHub: Man weist ihm ein Issue zu, er arbeitet im Hintergrund in einer eigenen Umgebung und liefert einen Pull Request. Der Agent Mode arbeitet interaktiv in VS Code, direkt im Editor, und nimmt mehrstufige Änderungen live vor. Beide sind agentisch, unterscheiden sich aber in Ort und Tempo.",
                },
                {
                  question:
                    "Ist der GitHub Copilot Agent dasselbe wie ein Agent aus Copilot Studio?",
                  answer:
                    "Nein. Der GitHub Copilot Coding Agent und der Agent Mode arbeiten an Code in GitHub und VS Code. Microsoft 365 Copilot Studio ist eine separate Low-Code-Plattform, mit der man Geschäfts-Agenten für Microsoft 365 baut. Das ist ein anderes Produkt mit eigener Kostenlogik, das wir in einem eigenen Beitrag behandeln.",
                },
                {
                  question:
                    "Welche Pläne enthalten den Coding Agent?",
                  answer:
                    "Der Coding Agent ist in den bezahlten Plänen verfügbar, also Pro, Pro+, Business und Enterprise. In Business und Enterprise muss ein Administrator ihn per Richtlinie freischalten. Der kostenlose Plan enthält ihn nicht. Der Agent Mode in VS Code ist dagegen breiter verfügbar, auch für kostenlose Nutzer.",
                },
                {
                  question:
                    "Kann der Agent Code eigenmächtig in den Hauptzweig mergen?",
                  answer:
                    "Nein. Der Agent kann nur auf Branches pushen, die er selbst erstellt hat, und seine eigenen Pull Requests nicht selbst freigeben. Bestehende Review-Pflichten und Branch-Protection-Regeln greifen automatisch, CI-Workflows starten erst nach menschlicher Freigabe. Den Merge macht immer ein Mensch.",
                },
                {
                  question:
                    "Ist der GitHub Copilot Agent für deutsche Unternehmen DSGVO-konform nutzbar?",
                  answer:
                    "Für Business und Enterprise nutzt GitHub den Kundencode nicht zum Training. Über Data-Residency-Optionen lässt sich Verarbeitung in einer EU-Region erzwingen, wobei der Coding Agent hier zeitweise eingeschränkt war, weshalb der aktuelle Stand zu prüfen ist. Da GitHub ein US-Anbieter ist, sind Auftragsverarbeitung und Drittlandtransfer im Einzelfall zu bewerten. Das ist eine Einordnung und kein Rechtsrat.",
                },
                {
                  question:
                    "Für welche Aufgaben eignet sich der Coding Agent im Mittelstand?",
                  answer:
                    "Für klar umrissene Tickets: kleine Konnektoren und Schnittstellen, Datenexporte, Bugfixes in internen Tools, zusätzliche Tests und Dokumentation. Nicht geeignet ist er für Architekturentwürfe, sicherheitskritische Teile und mehrdeutige Anforderungen. Die Qualität hängt stark von der Beschreibung des Issues und einer guten copilot-instructions-Datei ab.",
                },
              ]}
            >
              <FaqContainer.Headline>Häufige Fragen</FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="zwei-agenten">
            Coding Agent oder Agent Mode
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="was-ist-coding-agent">
            Was ist der Coding Agent
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="agent-mode">
            Agent Mode in VS Code
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="aufgabe-zuweisen">
            Aufgabe zuweisen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="plaene-kosten">
            Pläne und Kosten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="modelle">
            Modelle
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="governance">
            Governance und DSGVO
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="best-practices">
            Wofür der Agent taugt
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="mittelstand">
            Für den Mittelstand
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="faq">
            FAQ
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
