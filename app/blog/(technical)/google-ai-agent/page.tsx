import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "google-ai-agent",
  author: "Max Hänsel",
  date: "2026-07-01",
  image: "/blog/google-ai-agent/hero.png",
  tags: ["ki", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "Google AI Agent erstellen: Gems, Vertex AI und Co. 2026",
  description:
    "Google AI Agent erstellen 2026: die vier Wege von Gemini Gems über Gemini Enterprise bis ADK, Schritt für Schritt, Preise, DSGVO für den Mittelstand und welche Google-Marken sich gerade komplett umbenannt haben.",
  openGraph: {
    title: "Google AI Agent erstellen: die vier Wege im Vergleich 2026",
    description:
      "Gemini Gems, Gemini Enterprise, ADK oder Gemini API? Wie der Mittelstand 2026 einen Google-Agenten baut, was er kostet, was DSGVO und §203 verlangen und warum fast alle Tutorials veraltete Markennamen nutzen.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/google-ai-agent/hero.png",
        width: 1200,
        height: 630,
        alt: "Ein Mittelstandsteam baut einen Google-KI-Agenten im No-Code-Builder",
      },
    ],
  },
  alternates: {
    canonical: "/blog/google-ai-agent",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Google AI Agent erstellen: die vier Wege und der richtige für euch
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>14 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-07-01">1. Juli 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/google-ai-agent/hero.png"
          alt="Ein Mittelstandsteam baut einen Google-KI-Agenten im No-Code-Builder"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Einen Google-KI-Agenten zu erstellen klingt nach einer
              Nachmittagsaufgabe, und für ein erstes Gem stimmt das auch. Die
              eigentliche Frage ist eine andere: Was meint ihr überhaupt mit
              Google-Agent? Hinter dem Begriff stecken 2026 mindestens vier
              völlig verschiedene Werkzeuge, vom No-Code-Gem in der Gemini-App
              bis zum programmierten Agenten im Agent Development Kit. Welches
              davon das richtige ist, entscheidet sich an zwei Fragen: Wie viel
              Datenschutz braucht ihr, und soll der Agent dauerhaft skalieren?
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dazu kommt eine Besonderheit, die in fast keinem Tutorial steht:
              Google hat seine Agenten-Marken 2025 und 2026 komplett umgebaut.
              Aus Vertex AI wurde die Gemini Enterprise Agent Platform, aus
              Google Agentspace wurde Gemini Enterprise, und die alte
              Dialogflow-Welt ist in eine neue Konsole gewandert. Wer jetzt ein
              zwei Jahre altes Tutorial googelt, baut auf Markennamen, die es so
              nicht mehr gibt. Dieser Guide nimmt die Perspektive eines
              IT-Leiters oder Geschäftsführers im Mittelstand ein und zeigt die
              vier Wege nebeneinander, wie ein erster Agent konkret entsteht, was
              er kostet und welche rechtlichen Hürden in Deutschland zu beachten
              sind.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer den herstellerunabhängigen Überblick sucht, also den Vergleich
              zwischen Google, OpenAI und Microsoft, findet ihn im Leitfaden{" "}
              <Link
                href="/blog/ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                KI-Agenten erstellen
              </Link>
              . Dieser Beitrag geht den Google-Weg konkret durch und ist das
              Gegenstück zu unseren Guides{" "}
              <Link
                href="/blog/chatgpt-agent-erstellen"
                className="text-primary-600 hover:underline"
              >
                ChatGPT Agent erstellen
              </Link>{" "}
              und{" "}
              <Link
                href="/blog/copilot-agent-erstellen"
                className="text-primary-600 hover:underline"
              >
                Copilot Agent erstellen
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="vier-wege">
              Die vier Wege, einen Google-Agenten zu bauen
            </Typo.H2>
            <Typo.Paragraph>
              Google hat das Feld der Agenten 2025 und 2026 stark umgebaut. Vier
              Wege sind übrig, die sich in Aufwand, Datenschutz und
              Skalierbarkeit deutlich unterscheiden. Wer die vier
              auseinanderhält, trifft die Tool-Entscheidung in fünf Minuten statt
              nach drei Wochen Sackgasse.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/google-ai-agent/agent-wege.png"
              alt="Vier Wege, einen Google-Agenten zu bauen, von No-Code bis Code"
              width={1200}
              height={630}
            />

            <Typo.H3>Gemini Gems: der No-Code-Klassiker</Typo.H3>
            <Typo.Paragraph>
              Ein Gem ist eine gespeicherte, wiederverwendbare Gemini-Version mit
              eigenem Namen, festen Anweisungen, optionalem Standard-Werkzeug und
              hochgeladenem Wissen. Es ist das Google-Pendant zu einem Custom GPT
              und entsteht in Minuten über das Profilmenü und den Punkt Gems,
              ganz ohne Code. Pro Gem lassen sich bis zu zehn Dateien als Wissen
              hinterlegen oder Google-Drive-Dokumente verknüpfen. Geteilte und
              vorgefertigte Gems sind auch in der kostenlosen Version nutzbar, für
              das volle Kontextfenster und höhere Limits braucht es einen
              Bezahlplan. Das ist der schnellste Weg zu einem wiederverwendbaren
              internen Assistenten.
            </Typo.Paragraph>

            <Typo.H3>Gemini Enterprise: No-Code für die ganze Firma</Typo.H3>
            <Typo.Paragraph>
              Gemini Enterprise, bis Oktober 2025 als Google Agentspace bekannt,
              ist die Plattform für Agenten auf Unternehmensebene. Hier baut und
              orchestriert man Agenten in natürlicher Sprache über eine No-Code
              Workbench, nutzt vorgefertigte Google-Agenten wie Deep Research und
              durchsucht Firmendaten quer über Google Workspace, Microsoft 365,
              Salesforce und SAP. Dazu kommt ein zentrales Governance-Framework.
              Google-Cloud-Chef Thomas Kurian nennt es die neue Eingangstür für
              KI am Arbeitsplatz. Gedacht ist das für Organisationen, die Agenten
              kontrolliert und abteilungsübergreifend ausrollen wollen.
            </Typo.Paragraph>

            <Typo.H3>ADK und Agent Engine: der Entwickler-Weg</Typo.H3>
            <Typo.Paragraph>
              Wer ein echtes Produkt oder eine skalierende Integration bauen
              will, nutzt das Agent Development Kit (ADK) zusammen mit der Agent
              Engine. Das ADK ist ein quelloffenes, code-first Framework, das
              2025 auf der Google I/O vorgestellt wurde und 2026 in Python, Java,
              TypeScript, Go und Kotlin verfügbar ist. Es orchestriert mehrere
              Agenten in sequenziellen, parallelen oder graphbasierten Workflows
              und unterstützt sowohl das Model Context Protocol (MCP) zum
              Anbinden externer Werkzeuge als auch das offene Agent2Agent-Protokoll
              (A2A) für die Zusammenarbeit von Agenten verschiedener Anbieter. Die
              Agent Engine ist die vollständig gemanagte, serverlose Runtime, die
              den fertigen Agenten in Produktion deployt und skaliert, samt
              Sitzungsverwaltung und Langzeitgedächtnis.
            </Typo.Paragraph>

            <Typo.H3>Gemini API und AI Studio: der leichte Code-Einstieg</Typo.H3>
            <Typo.Paragraph>
              Zwischen No-Code und vollem Framework liegt der leichte
              Programmier-Einstieg. In Google AI Studio prototypt man im Browser
              kostenlos gegen die Gemini-Modelle und exportiert mit einem Klick
              den passenden API-Code. Die Gemini API bringt die Bausteine eines
              Agenten direkt mit: Function Calling zum Aufrufen externer Systeme,
              Grounding mit der Google-Suche für aktuelles Wissen, Code Execution
              und Datei-Upload. Der empfohlene Pfad lautet: in AI Studio
              ausprobieren, für Skalierung und Compliance später auf Vertex AI
              umziehen. Ein fünfter Weg führt ganz aus der Google-Welt heraus, der
              Eigenbau mit einer Orchestrierungs-Plattform wie n8n, den wir am
              Ende einordnen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="naming-chaos">
              Achtung Namenswechsel: was Google gerade umbaut
            </Typo.H2>
            <Typo.Paragraph>
              Bevor es ans Bauen geht, eine Warnung, die in den meisten
              Anleitungen fehlt. Google hat seine Agenten-Produkte 2025 und 2026
              so umfassend umbenannt, dass fast jedes ältere Tutorial veraltete
              Begriffe nutzt. Wer das nicht weiß, sucht nach Menüpunkten, die es
              nicht mehr gibt, oder setzt auf eine Marke mit Ablaufdatum.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/google-ai-agent/naming-wandel.png"
              alt="Alte und neue Google-Agenten-Markennamen 2025 bis 2026 im Vergleich"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Die wichtigste Umbenennung betrifft <strong>Vertex AI</strong>. Auf
              der Google Cloud Next im April 2026 wurde die Plattform zur{" "}
              <strong>Gemini Enterprise Agent Platform</strong>
              weiterentwickelt. Technisch ist es dieselbe Plattform, der Name
              Vertex AI verschwindet aber zunehmend aus der Oberfläche. Parallel
              wurde <strong>Google Agentspace</strong> im Oktober 2025 zu{" "}
              <strong>Gemini Enterprise</strong>. Wichtig zu wissen: Das sind zwei
              verschiedene Dinge mit ähnlichem Namen. Gemini Enterprise ist die
              Workspace-nahe No-Code-Plattform, die Gemini Enterprise Agent
              Platform ist der Cloud- und Entwickler-Stack.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dazu kommen echte Abkündigungen. Die <strong>Konsole von
              Dialogflow CX</strong> wurde Ende Oktober 2025 abgeschaltet, Nutzer
              landen jetzt in der zusammengeführten Konsole für Conversational
              Agents. Wichtig: Nur die Authoring-Oberfläche ist betroffen, die
              Programmierschnittstelle und bestehende Agenten laufen weiter. Echt
              tot ist dagegen die alte <strong>PaLM API</strong>, die bereits
              2024 sowohl als Consumer- als auch als Vertex-Variante abgeschaltet
              wurde. Wer heute neu beginnt, sollte sich an den vier aktuellen
              Wegen orientieren und keine Zeit in Agentspace, Vertex AI
              Conversation oder den Generative AI App Builder investieren, denn
              all das wurde in die neuen Marken überführt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="schritt-fuer-schritt">
              Schritt für Schritt: ein Gem mit Wissen
            </Typo.H2>
            <Typo.Paragraph>
              Für den Einstieg ist das Gem der pragmatischste Weg. In sechs
              Schritten steht ein Assistent, der auf eigenes Wissen zugreift und
              im Team geteilt werden kann.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/google-ai-agent/gem-schritte.png"
              alt="Sechs Schritte, um ein Gemini Gem mit Wissen zu bauen"
              width={1200}
              height={630}
            />

            <Typo.H3>1. Ebene wählen</Typo.H3>
            <Typo.Paragraph>
              Zuerst die Datenschutz-Ebene klären, denn sie entscheidet alles
              Weitere. Zum reinen Ausprobieren ohne sensible Daten reicht ein Gem
              in der persönlichen Gemini-App. Sobald echte Firmendaten ins Spiel
              kommen, gehört der Agent in eine Gemini-Umgebung über Google
              Workspace oder gleich auf Vertex AI. Mehr dazu im
              Datenschutz-Abschnitt.
            </Typo.Paragraph>

            <Typo.H3>2. Gem erstellen</Typo.H3>
            <Typo.Paragraph>
              Über das Profilmenü den Punkt Gems öffnen und ein neues Gem
              anlegen. Name und kurze Beschreibung geben dem Agenten seinen Zweck
              und machen ihn im Team auffindbar.
            </Typo.Paragraph>

            <Typo.H3>3. Anweisungen schreiben</Typo.H3>
            <Typo.Paragraph>
              In den Instructions werden Rolle, Tonalität, klare Do's und Don'ts
              und das gewünschte Ausgabeformat definiert. Je präziser die
              Anweisungen, desto verlässlicher der Agent. Ein Wand-Symbol lässt
              Gemini die Anweisungen auf Wunsch selbst verfeinern. Vage
              Beschreibungen sind die häufigste Ursache für enttäuschende
              Ergebnisse.
            </Typo.Paragraph>

            <Typo.H3>4. Wissen hochladen</Typo.H3>
            <Typo.Paragraph>
              Relevante Dokumente kommen als Knowledge dazu, bis zu zehn Dateien
              pro Gem, alternativ als Verknüpfung auf Google Drive. Wichtig: In
              ein geteiltes Gem gehören keine personenbezogenen Daten und keine
              Mandanteninformationen, denn geteilte Gems folgen den
              Freigaberegeln von Drive. Kleine, aktuelle Wissensdateien schlagen
              große, veraltete Sammlungen.
            </Typo.Paragraph>

            <Typo.H3>5. Werkzeug und Test</Typo.H3>
            <Typo.Paragraph>
              Bei Bedarf ein Standard-Werkzeug festlegen, etwa Deep Research oder
              die Bildgenerierung, und das Gem anschließend in der Vorschau
              gründlich testen, auch mit schwierigen und unerwarteten Eingaben.
              Erst wenn die Antworten verlässlich passen, geht es weiter.
            </Typo.Paragraph>

            <Typo.H3>6. Teilen und freigeben</Typo.H3>
            <Typo.Paragraph>
              Zum Schluss die richtige Sichtbarkeit wählen: privat oder im
              Workspace geteilt. In der Firmenumgebung gelten die
              Drive-Freigaberegeln, und Administratoren können das Teilen von
              Gems organisationsweit steuern. Für die meisten Mittelständler ist
              das Teilen im eigenen Workspace die richtige Wahl.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="lizenzen-kosten">Lizenzen und Preise 2026</Typo.H2>
            <Typo.Paragraph>
              Die Plan-Wahl entscheidet nicht nur über die Kosten, sondern auch
              darüber, ob ein Agent überhaupt datenschutzkonform mit Firmendaten
              arbeiten darf. Eine gute Nachricht vorweg: Seit Januar 2025 ist
              Gemini fest in die Google-Workspace-Tarife eingebündelt, die
              früheren Gemini-Add-ons sind weggefallen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/google-ai-agent/preise.png"
              alt="Preisvergleich der Google-Pläne und der Gemini API für den Agentenbau 2026"
              width={1200}
              height={630}
            />

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Plan</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Preis</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Für Agenten</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Gemini Free</DataTable.Cell>
                  <DataTable.Cell>0 EUR</DataTable.Cell>
                  <DataTable.Cell>
                    Geteilte und vorgefertigte Gems nutzen
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Google AI Pro</DataTable.Cell>
                  <DataTable.Cell>rund 20 US-Dollar / Monat</DataTable.Cell>
                  <DataTable.Cell>
                    Eigene Gems, großes Kontextfenster, höhere Limits
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Google AI Ultra</DataTable.Cell>
                  <DataTable.Cell>rund 100 US-Dollar / Monat</DataTable.Cell>
                  <DataTable.Cell>Top-Tier mit höchsten Limits</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Workspace Business Standard</DataTable.Cell>
                  <DataTable.Cell>13,60 EUR / Nutzer / Monat</DataTable.Cell>
                  <DataTable.Cell>
                    Gemini in allen Apps, kein Training auf euren Daten
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Gemini Enterprise</DataTable.Cell>
                  <DataTable.Cell>auf Anfrage, plus Compute</DataTable.Cell>
                  <DataTable.Cell>
                    No-Code Workbench, firmenweite Agenten, Governance
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Für den Entwickler-Weg über die API zählt nicht der Seat-Preis,
              sondern der Verbrauch. Bei den Gemini-Modellen liegt das schnelle
              Flash-Modell deutlich günstiger als das leistungsstärkere
              Pro-Modell, gerechnet wird je Million Token für Ein- und Ausgabe.
              Prompt-Caching und die asynchrone Batch-Verarbeitung senken die
              Kosten für wiederkehrende Aufgaben spürbar. Dazu kommen
              Werkzeugkosten: Das Grounding mit der Google-Suche ist bis zu einer
              monatlichen Freimenge kostenlos und wird danach je tausend Abfragen
              berechnet. Die Agent Engine als Runtime rechnet nach belegter
              Rechen- und Speicherzeit ab, eine einzelne Interaktion kann also
              mehrere Kostenarten gleichzeitig auslösen. Wer die
              Vollkostenrechnung für ein vergleichbares Microsoft-Szenario sucht,
              findet sie im{" "}
              <Link
                href="/blog/microsoft-365-copilot-kosten"
                className="text-primary-600 hover:underline"
              >
                Kosten-Guide zu Microsoft 365 Copilot
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="dsgvo">DSGVO und Recht für deutsche Firmen</Typo.H2>
            <Typo.Paragraph>
              Hier entscheidet sich, ob ein Google-Agent im deutschen Mittelstand
              wirklich produktiv gehen darf. Die Plattform ist nutzbar, aber nur
              auf der richtigen Ebene und mit sauberer Konfiguration. Dieser
              Abschnitt ist das Kernstück.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/google-ai-agent/dsgvo-ebenen.png"
              alt="Die drei Datennutzungs-Ebenen bei Google-KI für deutsche Firmen"
              width={1200}
              height={630}
            />

            <Typo.H3>Drei Ebenen der Datennutzung</Typo.H3>
            <Typo.Paragraph>
              Der wichtigste Punkt zuerst, weil ihn kaum ein Tutorial sauber
              erklärt: Bei Google-KI gibt es drei klar getrennte Ebenen. In der{" "}
              <strong>persönlichen Gemini-App</strong> werden Eingaben
              gespeichert, ein Teil der Chats wird von Menschen zur
              Modellverbesserung überprüft, und solche Konversationen bleiben bis
              zu drei Jahre erhalten. Diese Ebene ist für Firmen- und
              Mandantendaten ungeeignet. Auch der <strong>kostenlose Tarif der
              Gemini API</strong> erlaubt Google, Eingaben zur Produktverbesserung
              zu nutzen. Erst auf der dritten Ebene, bei{" "}
              <strong>Vertex AI und dem bezahlten API-Tarif</strong>, gilt die
              klare Zusage: keine Nutzung eurer Daten fürs Training, weder der
              Eingaben noch der Antworten. Das ist die einzige Ebene, die für den
              produktiven Einsatz mit echten Geschäftsdaten in Frage kommt.
            </Typo.Paragraph>

            <Typo.H3>Auftragsverarbeitung und EU-Datenstandort</Typo.H3>
            <Typo.Paragraph>
              Auf der Cloud-Ebene wird Google sauber zum Auftragsverarbeiter im
              Sinne von Artikel 28 DSGVO, geregelt über das Cloud Data Processing
              Addendum, das fest im Google-Cloud-Vertrag verankert ist. Für den
              US-Transfer ist Google unter dem EU-US Data Privacy Framework
              zertifiziert und hält zusätzlich die Standardvertragsklauseln
              bereit. Entscheidend für deutsche Firmen ist der Datenstandort: In
              Vertex AI lassen sich europäische Regionen wie Frankfurt oder die
              Niederlande wählen, in denen die Daten nicht nur ruhen, sondern für
              die gelisteten Gemini-Modelle auch verarbeitet werden, ohne
              US-Server zu berühren. Wer noch strenger arbeiten muss, etwa im
              öffentlichen Sektor, findet mit der von T-Systems betriebenen
              Sovereign Cloud eine in Deutschland souverän gehostete Variante.
            </Typo.Paragraph>

            <Typo.H3>§203 StGB für Kanzleien und Heilberufe</Typo.H3>
            <Typo.Paragraph>
              Für Steuerkanzleien, Anwälte und Ärzte reicht ein
              Auftragsverarbeitungsvertrag allein nicht aus. Wer einem externen
              Anbieter geschützte Mandanten- oder Patientendaten offenbart,
              braucht zusätzlich eine berufsrechtliche
              Verschwiegenheitsverpflichtung mit Belehrung über die
              strafrechtlichen Folgen nach §203 StGB, und zwar in Textform. Ohne
              diese Konstellation kann schon das Hochladen sensibler Daten
              strafbar sein. In der Praxis heißt das: Mandantendaten gehören auf
              die Vertex-AI-Ebene ohne Training, ergänzt um die
              §203-Vereinbarung, niemals in ein einfaches Gem in der
              Consumer-App. Wie Kanzleien das strukturieren, vertieft unser
              Beitrag{" "}
              <Link
                href="/blog/ki-steuerberater"
                className="text-primary-600 hover:underline"
              >
                KI für Steuerberater
              </Link>
              .
            </Typo.Paragraph>

            <Typo.H3>EU AI Act: Kennzeichnungspflicht ab August 2026</Typo.H3>
            <Typo.Paragraph>
              Ab dem 2. August 2026 greifen die Transparenzpflichten nach Artikel
              50 des EU AI Act. Nutzer müssen erkennen können, dass sie mit einer
              KI interagieren, und KI-generierte Inhalte müssen als solche
              kenntlich sein. Für einen Agenten, der etwa Kundenmails entwirft
              oder im Chat antwortet, ist das praktisch relevant. Weitere Tiefe
              zum Thema bietet unser Überblick zu{" "}
              <Link
                href="/blog/dsgvo-konforme-ki-tools"
                className="text-primary-600 hover:underline"
              >
                DSGVO-konformen KI-Tools
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="use-cases">Use-Cases für Großhandel und Kanzlei</Typo.H2>
            <Typo.Paragraph>
              Konkret wird der Nutzen erst an echten Aufgaben. Im Großhandel sind
              das vor allem Assistenten rund um Angebot, Bestellung und Produkt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein <strong>Angebots-Assistent</strong> als Gem bekommt Preislisten
              und Konditionen als Wissen und erstellt daraus Angebotsentwürfe. Wo
              echte Live-Daten gebraucht werden, übernimmt ein ADK-Agent mit
              Function Calling gegen ERP oder PIM. Eine{" "}
              <strong>Bestell-Triage</strong> klassifiziert eingehende
              Bestellmails und PDFs, extrahiert die relevanten Felder und bereitet
              sie für die Auftragserfassung vor. Ein{" "}
              <strong>Datenblatt-Assistent</strong> beantwortet dem Innendienst
              technische Rückfragen aus hinterlegten Produktdokumenten, mit
              Grounding auf die eigenen Daten. Wie sich der gesamte Bestell- und
              Auftragsprozess automatisieren lässt, zeigt unser Leitfaden{" "}
              <Link
                href="/blog/n8n-ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                KI-Agenten mit n8n erstellen
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              In der <strong>Steuerkanzlei</strong> entlasten Agenten bei der
              E-Mail-Klassifikation und bei Antwortentwürfen im Kanzleistil sowie
              bei der Dokumenten-Recherche auf internen Leitfäden und Gesetzen.
              Entscheidend bleibt die Trennlinie aus dem Datenschutz-Abschnitt:
              Mandantendaten gehören nicht in ein einfaches Gem in der
              Consumer-App, sondern brauchen die Vertex-AI-Ebene und den
              §203-konformen Rahmen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="abgrenzung">
              Gem, Gemini Enterprise, ADK oder n8n: wann was?
            </Typo.H2>
            <Typo.Paragraph>
              Am Ende läuft alles auf eine Entscheidung hinaus. Die folgende
              Matrix hilft, den passenden Weg zu finden, ohne sich zu
              verzetteln.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/google-ai-agent/wege-vergleich.png"
              alt="Entscheidungsmatrix: welcher Weg zum Google-Agenten passt"
              width={1200}
              height={630}
            />

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Weg</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Code nötig</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Am besten für</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Gemini Gem</DataTable.Cell>
                  <DataTable.Cell>Nein</DataTable.Cell>
                  <DataTable.Cell>Schneller interner Assistent</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Gemini Enterprise</DataTable.Cell>
                  <DataTable.Cell>Wenig</DataTable.Cell>
                  <DataTable.Cell>
                    Firmenweite No-Code-Agenten mit Governance
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>ADK plus Agent Engine</DataTable.Cell>
                  <DataTable.Cell>Ja</DataTable.Cell>
                  <DataTable.Cell>
                    Produkt, volle Kontrolle, Skalierung
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Gemini API und AI Studio</DataTable.Cell>
                  <DataTable.Cell>Ja, leicht</DataTable.Cell>
                  <DataTable.Cell>
                    Prototyp und leichte Integration
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>n8n und eigenes LLM</DataTable.Cell>
                  <DataTable.Cell>Wenig bis mittel</DataTable.Cell>
                  <DataTable.Cell>
                    Self-Hosting, DSGVO-Maximum, mehrere Modelle
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Als Faustregel: Zum Ausprobieren und für interne Helfer ein Gem,
              für firmenweite No-Code-Agenten mit Governance Gemini Enterprise,
              für ein echtes Produkt das ADK mit der Agent Engine und für den
              leichten Code-Einstieg die Gemini API. Wer maximale Datenhoheit,
              Self-Hosting oder mehrere Modelle nebeneinander braucht, ist mit
              einem{" "}
              <Link
                href="/blog/wie-baut-man-ki-agents"
                className="text-primary-600 hover:underline"
              >
                Eigenbau nach Engineering-Bauplan
              </Link>{" "}
              besser bedient.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">
              Fazit: klein anfangen, Weg bewusst wählen
            </Typo.H2>
            <Typo.Paragraph>
              Einen Google-Agenten zu erstellen ist 2026 keine
              Entwicklungsaufgabe mehr, sondern eine Frage der richtigen
              Entscheidung. Der schnellste Weg zum ersten Nutzen ist ein Gem mit
              einer klar umrissenen Aufgabe, einer kleinen sauberen Wissensquelle
              und einer Pilotgruppe. Skalierung und tiefe Integration kommen
              danach über das ADK und die Agent Engine.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zwei Dinge entscheiden über Erfolg oder teuren Fehlstart: die Wahl
              der Datenschutz-Ebene und das Wissen um die aktuellen Markennamen.
              Wer ein altes Tutorial zu Agentspace oder Vertex AI Conversation
              befolgt, sucht nach Menüs, die es nicht mehr gibt. Wer ein Gem in
              der Consumer-App mit echten Kundendaten füttert, riskiert einen
              Datenschutzverstoß.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ihr wollt den ersten Agenten nicht allein aufsetzen, sondern mit
              einem Partner, der den Weg von Scoping über Datenschutz bis zum
              produktiven Betrieb kennt?{" "}
              <Link
                href="/contact"
                className="text-primary-600 hover:underline"
              >
                Sprecht uns an
              </Link>
              , und wir skizzieren gemeinsam den passenden Einstieg.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="faq">Häufige Fragen</Typo.H2>
            <FaqContainer
              faqs={[
                {
                  question:
                    "Brauche ich Programmierkenntnisse, um einen Google-Agenten zu erstellen?",
                  answer:
                    "Nein, für ein Gemini Gem oder die No-Code-Workbench in Gemini Enterprise nicht. Beide werden in natürlicher Sprache beschrieben, Wissen und Werkzeuge kommen über die Oberfläche dazu. Erst der Weg über das Agent Development Kit und die Agent Engine setzt Entwicklungskenntnisse voraus.",
                },
                {
                  question:
                    "Was ist der Unterschied zwischen Gemini Enterprise und der Gemini Enterprise Agent Platform?",
                  answer:
                    "Trotz ähnlichem Namen sind das zwei verschiedene Dinge. Gemini Enterprise, früher Google Agentspace, ist die Workspace-nahe No-Code-Plattform für firmenweite Agenten. Die Gemini Enterprise Agent Platform ist der umbenannte Vertex-AI-Stack für Entwickler, auf dem man mit dem ADK programmiert und über die Agent Engine deployt.",
                },
                {
                  question: "Welcher Google-Plan ist nötig, um Gems zu bauen?",
                  answer:
                    "Geteilte und vorgefertigte Gems lassen sich auch in der kostenlosen Gemini-Version nutzen. Für das volle Kontextfenster, höhere Limits und das datenschutzkonforme Arbeiten mit Firmendaten empfiehlt sich ein Bezahlplan, idealerweise Gemini über Google Workspace, weil dort keine Daten fürs Training genutzt werden.",
                },
                {
                  question: "Ist Google Gemini für deutsche Unternehmen DSGVO-konform nutzbar?",
                  answer:
                    "Auf der richtigen Ebene ja. Vertex AI und der bezahlte API-Tarif trainieren standardmäßig nicht auf euren Daten, Google wird über das Cloud Data Processing Addendum zum Auftragsverarbeiter, und es lassen sich EU-Regionen wählen, in denen die Daten auch verarbeitet werden. Die persönliche Gemini-App und der kostenlose API-Tarif sind dafür nicht geeignet.",
                },
                {
                  question:
                    "Dürfen Steuerkanzleien Mandantendaten in einen Google-Agenten geben?",
                  answer:
                    "Nur unter strengen Bedingungen. Wegen §203 StGB reicht ein Auftragsverarbeitungsvertrag nicht aus, es braucht zusätzlich eine berufsrechtliche Verschwiegenheitsverpflichtung mit Strafbelehrung in Textform. In der Praxis gehören Mandantendaten auf die Vertex-AI-Ebene ohne Training, niemals in ein einfaches Gem in der Consumer-App.",
                },
              ]}
            >
              <FaqContainer.Headline>Häufige Fragen</FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="vier-wege">
            Die vier Wege
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="naming-chaos">
            Namenswechsel
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="schritt-fuer-schritt">
            Schritt für Schritt
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="lizenzen-kosten">
            Lizenzen und Preise
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="dsgvo">
            DSGVO und Recht
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="use-cases">
            Use-Cases
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="abgrenzung">
            Welcher Weg passt
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
