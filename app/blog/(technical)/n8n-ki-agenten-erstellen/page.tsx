import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "n8n-ki-agenten-erstellen",
  author: "Max Hänsel",
  date: "2026-05-04",
  image: "/blog/n8n-ki-agenten-erstellen/hero.png",
  tags: ["n8n", "ki", "automatisierung", "development"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "n8n KI-Agenten erstellen: Praxisanleitung mit AI-Agent-Node und Tools | Bluebatch",
  description:
    "Wie ihr mit n8n eigene KI-Agenten baut: AI-Agent-Node, Tools, Memory und Guardrails. Praxisanleitung mit zwei lauffähigen Beispiel-Workflows.",
  openGraph: {
    title: "n8n KI-Agenten erstellen: Die Praxisanleitung",
    description:
      "AI-Agent-Node, Tool-Zugriff, Memory und Guardrails: So entsteht aus n8n eine Plattform für autonome KI-Agenten.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/n8n-ki-agenten-erstellen/hero.png",
        width: 1200,
        height: 630,
        alt: "n8n KI-Agenten erstellen",
      },
    ],
  },
  alternates: {
    canonical: "/blog/n8n-ki-agenten-erstellen",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          n8n KI-Agenten erstellen: Von der Idee zum lauffähigen Agent-Workflow
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>11 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-05-04">
            4. Mai 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/n8n-ki-agenten-erstellen/hero.png"
          alt="n8n KI-Agenten erstellen"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.H2 id="was-ist-ein-n8n-ki-agent">
              Was ist ein KI-Agent in n8n?
            </Typo.H2>
            <Typo.Paragraph>
              Ein KI-Agent in n8n ist kein Chatbot im klassischen Sinn. Er ist
              ein Sprachmodell mit Werkzeugkasten. Der Unterschied zu einem
              normalen LLM-Node: Der Agent entscheidet selbst, welches Werkzeug
              er in welcher Reihenfolge benutzt, um eine Aufgabe zu lösen. Er
              kann eine Datenbank abfragen, eine Rechnung prüfen, eine API
              aufrufen oder eine Berechnung anstoßen, ohne dass jemand den
              genauen Ablauf vorgibt. Wie KI-Agenten grundsätzlich aufgebaut
              sind und welche Bauwege es jenseits von n8n gibt, zeigt unser
              tool-agnostischer Leitfaden zum{" "}
              <Link href="/blog/ki-agenten-erstellen" className="text-primary-600 hover:underline">
                KI-Agenten erstellen
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              Technisch basiert das auf dem AI-Agent-Node, den n8n seit der
              LangChain-Integration mitbringt. Der Node bündelt drei Bausteine:
              ein Sprachmodell (Chat Model), eine Liste von Tools und optional
              einen Memory-Speicher. Die eigentliche Entscheidungslogik
              übernimmt das LLM, n8n liefert die Infrastruktur drumherum. Wer
              die Grundlagen von n8n noch nicht kennt, findet in unserem{" "}
              <Link href="/blog/was-ist-n8n" className="text-primary-600 hover:underline">
                Einsteigerartikel zu n8n
              </Link>{" "}
              den passenden Kontext.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Warum das Ganze in n8n und nicht im Python-Notebook? Weil
              n8n-Agenten in bestehende Workflows eingebettet werden. Ein Trigger
              startet den Workflow, der Agent arbeitet die Aufgabe ab, ein
              nachgelagerter Node schreibt die Entscheidung zurück ins ERP. Die
              Plattform kümmert sich um Credentials, Logging, Fehlerbehandlung
              und Retry-Logik. Alles, was in einem Python-Skript mühselig
              zusammengebaut werden müsste, ist hier Standard.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="voraussetzungen">
              Voraussetzungen: LLM, Credentials und eine n8n-Instanz
            </Typo.H2>
            <Typo.Paragraph>
              Bevor der erste Agent läuft, brauchen drei Dinge ihren Platz:
              eine n8n-Instanz mit Zugriff auf den AI-Agent-Node, ein
              Sprachmodell mit API-Key und eine saubere Trennung von
              produktiven Credentials und Test-Setups.
            </Typo.Paragraph>

            <Typo.H3>LLM-Auswahl</Typo.H3>
            <Typo.Paragraph>
              In der Praxis haben sich drei Modell-Familien durchgesetzt:
              OpenAI (GPT-4, GPT-4o), Anthropic (Claude Sonnet, Claude Opus)
              und Open-Source-Modelle via Ollama oder einem eigenen vLLM-Setup.
              Für die meisten Use Cases im Mittelstand ist Claude Sonnet oder
              GPT-4o die richtige Wahl: gutes Preis-Leistungs-Verhältnis,
              sehr ordentliche Tool-Nutzung und stabile JSON-Ausgaben. Open
              Source lohnt sich dann, wenn Daten die eigene Infrastruktur
              nicht verlassen dürfen.
            </Typo.Paragraph>

            <Typo.H3>Credentials und Umgebung</Typo.H3>
            <Typo.Paragraph>
              API-Keys gehören nicht in die Workflow-Definition, sondern in
              den Credential-Store von n8n. Für jede Umgebung (Entwicklung,
              Staging, Produktion) ein eigener Credential. Wer die Trennung
              ernst nimmt, richtet sich für produktive Agenten eine eigene
              n8n-Instanz ein, sodass Experimente nicht versehentlich
              Produktivdaten anfassen. Hinweise zum Aufbau einer stabilen
              Instanz finden sich in der{" "}
              <Link href="/blog/n8n-selbst-hosten-anleitung" className="text-primary-600 hover:underline">
                Anleitung zum Self-Hosting von n8n
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>Version und Nodes</Typo.H3>
            <Typo.Paragraph>
              Der AI-Agent-Node steht ab n8n 1.19 zur Verfügung und wird seit
              dem seit fast jeder Minor-Version erweitert. Wer auf einer alten
              Version sitzt, sollte vor dem Agent-Projekt das Update einplanen.
              Besonders wichtig: Die Tool-Integration wurde in den letzten
              Versionen mehrfach umgebaut, und ältere Tutorials zeigen teils
              veraltete Node-Strukturen. Teams, die ihre n8n-Kompetenz formalisieren
              wollen, finden im{" "}
              <Link href="/blog/n8n-zertifizierung-guide" className="text-primary-600 hover:underline">
                n8n Zertifizierungs-Guide
              </Link>{" "}
              den passenden Lernpfad.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="architektur">
              Architektur eines n8n-Agent-Workflows
            </Typo.H2>
            <Typo.Paragraph>
              Ein KI-Agent-Workflow in n8n folgt fast immer demselben Muster.
              Sobald dieses Muster sitzt, lassen sich neue Agenten in wenigen
              Stunden aufbauen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/n8n-ki-agenten-erstellen/agent-architektur.png"
              alt="Architektur eines n8n KI-Agent-Workflows"
              width={1200}
              height={675}
            />

            <Typo.List>
              <Typo.ListItem>
                <strong>Trigger:</strong> Webhook, Cron, Queue-Event oder ein
                eingehender Datensatz aus ERP oder CRM.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Kontext-Loader:</strong> Daten, die der Agent zur
                Entscheidung braucht, werden vorher eingesammelt, damit das LLM
                nicht in jedem Schritt nachfragen muss.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>AI-Agent-Node:</strong> Das Herz des Workflows.
                Verbindet Chat Model, Tools und Memory und führt die Agent-Loop
                aus.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Output-Parser:</strong> Verwandelt die Agent-Antwort in
                ein strukturiertes JSON, das nachgelagerte Nodes sauber
                verarbeiten können.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Aktions-Nodes:</strong> ERP-Write, E-Mail, Ticket-Update
                oder was auch immer das Ergebnis in der realen Welt sichtbar
                macht.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Audit-Log:</strong> Jede Agent-Entscheidung wird mit
                Input, genutzten Tools und Output in einer Datenbank oder einem
                Log-Service dokumentiert.
              </Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              Dieses Schichtmodell hat einen Vorteil: Die eigentliche KI-Logik
              bleibt austauschbar. Wer morgen von GPT-4o auf Claude Sonnet
              wechselt, tauscht nur den Chat-Model-Node aus. Die restlichen
              Nodes laufen unverändert weiter. Die theoretischen Grundlagen
              hinter diesem Schichtmodell beschreibt unser Artikel{" "}
              <Link
                href="/blog/wie-baut-man-ki-agents"
                className="text-primary-600 hover:underline"
              >
                KI-Agents bauen: Das Anthropic-Framework
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="erster-agent">
              Erster Agent: Frage-Antwort-Bot mit Tool-Zugriff
            </Typo.H2>
            <Typo.Paragraph>
              Der Klassiker zum Einstieg: Ein Agent, der Fragen zu
              Unternehmensdaten beantwortet und dafür Zugriff auf eine oder
              zwei Datenquellen bekommt. Zum Beispiel: Ein Vertriebsmitarbeiter
              fragt per Slack, wie hoch der Jahresumsatz eines bestimmten
              Kunden ist. Der Agent darf die ERP-Datenbank lesen und formuliert
              die Antwort.
            </Typo.Paragraph>

            <Typo.H3>Setup in sechs Schritten</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                Webhook-Trigger anlegen, der Slack-Events empfängt.
              </Typo.ListItem>
              <Typo.ListItem>
                AI-Agent-Node platzieren und ein Chat Model verbinden. Für den
                Start: GPT-4o mini oder Claude Haiku, weil die Latenz wichtig
                ist.
              </Typo.ListItem>
              <Typo.ListItem>
                Ein Tool vom Typ &quot;HTTP Request Tool&quot; oder
                &quot;Postgres Tool&quot; anhängen, das eine read-only-Abfrage
                auf die Umsatzdaten erlaubt.
              </Typo.ListItem>
              <Typo.ListItem>
                System-Prompt schreiben: &quot;Du bist ein Vertriebsassistent.
                Nutze das Umsatz-Tool, um Fragen zu Kundenumsätzen zu
                beantworten. Wenn die Frage nichts mit Umsatz zu tun hat, sage
                es klar.&quot;
              </Typo.ListItem>
              <Typo.ListItem>
                Die Agent-Antwort zurück an Slack senden.
              </Typo.ListItem>
              <Typo.ListItem>
                Ein Audit-Log-Node schreibt Input, genutzte Tools und Output
                in eine Logging-Tabelle.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Das Setup dauert, sauber getestet, etwa einen halben Tag. Die
              eigentliche Arbeit steckt danach im Feintuning des Prompts: Wie
              detailliert soll der Agent antworten, wie geht er mit
              Mehrdeutigkeiten um, wann schlägt er eine Rückfrage vor statt
              einer Antwort.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="zweiter-agent">
              Zweiter Agent: Daten-Triage mit Memory
            </Typo.H2>
            <Typo.Paragraph>
              Der erste Agent war stateless. Der zweite Agent soll sich
              merken, was er schon entschieden hat. Ein typisches Beispiel:
              Eingehende Bestellungen werden vom Agent bewertet (Standard,
              Prüffall, Eskalation). Der Agent nutzt die Historie früherer
              Entscheidungen als Referenz.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/n8n-ki-agenten-erstellen/daten-triage-vector-memory.png"
              alt="Daten-Triage mit einem KI-Agent in n8n"
              width={1200}
              height={675}
            />

            <Typo.Paragraph>
              Für Memory bietet n8n mehrere Optionen: Buffer Memory (nur der
              aktuelle Dialog), Postgres-Memory (persistente Chat-Historie) und
              Vector-Memory (semantische Suche über frühere Entscheidungen). Für
              eine Triage mit Lerneffekt ist Vector-Memory der richtige
              Ansatz: Der Agent bekommt zu jeder neuen Bestellung die drei
              ähnlichsten Fälle aus der Vergangenheit als Kontext.
            </Typo.Paragraph>

            <Typo.H3>Struktur des Triage-Workflows</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                Eingehende Bestellung trifft als Webhook ein.
              </Typo.ListItem>
              <Typo.ListItem>
                Ein Embedding-Node wandelt Kunde, Artikel und Menge in einen
                Vektor.
              </Typo.ListItem>
              <Typo.ListItem>
                Ein Vector-Store-Node holt die drei ähnlichsten Fälle aus dem
                Memory.
              </Typo.ListItem>
              <Typo.ListItem>
                Der AI-Agent-Node bekommt die aktuelle Bestellung plus die
                Referenzfälle und trifft eine Entscheidung.
              </Typo.ListItem>
              <Typo.ListItem>
                Der neue Fall inklusive Entscheidung wird ins Vector-Memory
                geschrieben, damit der Agent bei der nächsten Bestellung daraus
                lernt.
              </Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              Wichtig: Vector-Memory braucht eine Datenbank mit
              Vektorunterstützung. pgvector auf Postgres ist der
              unkomplizierteste Weg, Qdrant oder Pinecone eignen sich für
              größere Setups. Was konkret an Bestellungen automatisch
              erfassbar ist, zeigt unser{" "}
              <Link href="/blog/erp-workflows-automatisieren" className="text-primary-600 hover:underline">
                Artikel zu ERP-Workflows
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="tools-und-prompts">
              Tools, Prompts und Guardrails
            </Typo.H2>
            <Typo.Paragraph>
              Drei Dinge entscheiden darüber, ob ein n8n-Agent zuverlässig
              arbeitet: die Auswahl der Tools, die Qualität des Prompts und die
              Schranken, innerhalb derer der Agent entscheidet.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/n8n-ki-agenten-erstellen/chatbot-mit-tool.png"
              alt="Tools, Prompts und Guardrails für n8n KI-Agenten"
              width={1200}
              height={675}
            />

            <Typo.H3>Tool-Auswahl</Typo.H3>
            <Typo.Paragraph>
              Weniger ist mehr. Ein Agent mit drei klar benannten Tools trifft
              bessere Entscheidungen als einer mit fünfzehn. Jedes Tool
              bekommt einen präzisen Namen (kein &quot;fetch_data&quot;,
              sondern &quot;get_customer_revenue&quot;) und eine klare
              Beschreibung, wann es eingesetzt werden soll. Die Beschreibung
              ist das, was das LLM sieht, nicht der Code. Kleine Unterschiede
              im Wording führen zu großen Unterschieden in der Trefferquote.
            </Typo.Paragraph>

            <Typo.H3>Prompt-Struktur</Typo.H3>
            <Typo.Paragraph>
              Ein guter Agent-Prompt hat drei Abschnitte: Rolle,
              Vorgehensweise, Grenzen. Die Rolle beschreibt, wer der Agent ist
              (&quot;Du bist ein Buchhaltungsassistent&quot;). Die
              Vorgehensweise erklärt, in welchen Schritten er arbeiten soll
              (&quot;Zuerst prüfe die Rechnung auf formale Fehler, dann
              vergleiche mit dem Auftrag&quot;). Die Grenzen definieren, was
              nicht passieren darf (&quot;Keine Rechnungen über 10.000 Euro
              ohne menschliche Freigabe&quot;).
            </Typo.Paragraph>

            <Typo.H3>Guardrails</Typo.H3>
            <Typo.Paragraph>
              Harte Grenzen gehören nicht nur in den Prompt, sondern in den
              Workflow selbst. Ein IF-Node, der nach dem Agent prüft, ob die
              vorgeschlagene Aktion unter dem Schwellwert liegt. Ein Approval-
              Schritt, der bei Grenzfällen auf ein menschliches OK wartet. Ein
              Rate-Limit-Node, der verhindert, dass ein fehlgeleiteter Agent
              tausende Aktionen in Minuten ausführt. Prompts sind weich,
              Workflow-Logik ist hart. Beide zusammen machen einen
              produktionsreifen Agenten.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="haeufige-fehler">
              Häufige Fehler beim Agent-Bau
            </Typo.H2>
            <Typo.Paragraph>
              Wer die ersten eigenen Agenten baut, läuft in dieselben
              Stolpersteine wie alle davor. Eine kurze Liste der teuersten
              Fehler.
            </Typo.Paragraph>

            <Typo.List>
              <Typo.ListItem>
                <strong>Zu vage Tool-Beschreibungen:</strong> Wenn das LLM
                nicht weiß, wofür ein Tool da ist, ruft es das falsche auf
                oder keins. Immer mit einem Satz beschreiben, welche Frage das
                Tool beantwortet.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Kein Audit-Log:</strong> Wenn eine Agent-Entscheidung
                später erklärt werden muss (Kundenreklamation, interne Audit),
                steht man ohne Log blank da. Jeder Agent braucht ein
                Entscheidungslog mit Input, Tool-Calls und Output.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Kein Limit für Tool-Calls:</strong> Ein Agent kann in
                einer Schleife hängen bleiben und dasselbe Tool hundertmal
                aufrufen. Der AI-Agent-Node erlaubt ein Limit für Iterationen.
                Ohne Limit wird ein Bug schnell teuer.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Schreibender Zugriff zu früh:</strong> Ein Agent, der
                direkt in produktive Systeme schreibt, ist ein Risiko. Die
                ersten Wochen sollte der Agent nur Vorschläge machen, die ein
                Mensch freigibt. Erst wenn das Verhalten stabil ist, gehen die
                Schreibzugriffe direkt durch.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Zu großes Modell:</strong> Viele greifen reflexhaft
                zum teuersten Modell. Oft reicht ein kleineres (GPT-4o mini,
                Claude Haiku) vollkommen aus. Erst messen, dann skalieren.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Wer den strategischen Blick auf das Gesamtthema sucht, findet im
              Beitrag zu{" "}
              <Link href="/blog/agentic-ai-im-grosshandel" className="text-primary-600 hover:underline">
                Agentic AI im Großhandel
              </Link>{" "}
              den größeren Kontext, warum sich der Aufbau von Agenten
              überhaupt lohnt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">
              Fazit: Vom ersten Agent zum produktiven Setup
            </Typo.H2>
            <Typo.Paragraph>
              Ein erster KI-Agent in n8n entsteht in einem halben Tag. Ein
              produktiver Agent, dem man wirklich Entscheidungen überlässt,
              braucht zwei bis vier Wochen: Prompt-Tuning, Guardrails,
              Monitoring, Schulung der Kollegen, die mit ihm arbeiten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer heute anfängt, hat einen klaren Vorteil gegenüber allen, die
              noch warten. Nicht, weil die Technologie irgendwann verschwindet,
              sondern weil die Datengrundlage, auf der ein guter Agent läuft,
              Zeit zum Wachsen braucht. Jede Entscheidung, die der Agent heute
              trifft und die geloggt wird, ist morgen Trainingsmaterial für den
              nächsten, besseren Agent.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ihr wollt einen eigenen KI-Agenten auf eurer n8n-Instanz bauen
              und sucht einen Partner, der den Weg von der ersten Idee bis zum
              produktiven Setup kennt?{" "}
              <Link href="/contact" className="text-primary-600 hover:underline">
                Sprecht uns an
              </Link>
              , und wir skizzieren gemeinsam den passenden Einstieg.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="was-ist-ein-n8n-ki-agent">
            Was ist ein n8n-KI-Agent?
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="voraussetzungen">
            Voraussetzungen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="architektur">
            Architektur
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="erster-agent">
            Erster Agent
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="zweiter-agent">
            Zweiter Agent
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="tools-und-prompts">
            Tools, Prompts, Guardrails
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="haeufige-fehler">
            Häufige Fehler
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fazit">
            Fazit
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
