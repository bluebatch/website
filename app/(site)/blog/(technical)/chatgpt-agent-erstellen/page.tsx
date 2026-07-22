import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "chatgpt-agent-erstellen",
  author: "Max Hänsel",
  date: "2026-06-25",
  image: "/blog/chatgpt-agent-erstellen/hero.png",
  tags: ["ki", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title: "ChatGPT Agent erstellen: Anleitung und Wege im Vergleich 2026",
  description:
    "ChatGPT Agent erstellen 2026: die vier Wege von Custom GPT über Agent Mode bis Responses API, Schritt für Schritt, Preise, DSGVO für den Mittelstand und welche OpenAI-Wege 2026 abgeschaltet werden.",
  openGraph: {
    title: "ChatGPT Agent erstellen: die vier Wege im Vergleich 2026",
    description:
      "Custom GPT, Agent Mode, Responses API oder Eigenbau? Wie der Mittelstand 2026 einen ChatGPT-Agenten baut, was er kostet, was DSGVO und §203 verlangen und welche Wege OpenAI gerade abschaltet.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/chatgpt-agent-erstellen/hero.png",
        width: 1200,
        height: 630,
        alt: "Ein Mittelstandsteam baut einen ChatGPT-Agenten im No-Code-Builder",
      },
    ],
  },
  alternates: {
    canonical: "/blog/chatgpt-agent-erstellen",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          ChatGPT Agent erstellen: die vier Wege und der richtige für euch
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>14 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-06-25">25. Juni 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/chatgpt-agent-erstellen/hero.png"
          alt="Ein Mittelstandsteam baut einen ChatGPT-Agenten im No-Code-Builder"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Einen ChatGPT-Agenten zu erstellen klingt nach einer
              Nachmittagsaufgabe, und für einen ersten Prototyp stimmt das auch.
              Die eigentliche Frage ist eine andere: Was meint ihr überhaupt mit
              ChatGPT-Agent? Hinter dem Begriff stecken 2026 mindestens vier
              völlig verschiedene Werkzeuge, vom No-Code-Custom-GPT bis zum
              programmierten Agenten über die Schnittstelle. Welches davon das
              richtige ist, entscheidet sich an zwei Fragen: Wie viel Datenschutz
              braucht ihr, und soll der Agent dauerhaft skalieren?
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dazu kommt eine Besonderheit, die in fast keinem Tutorial steht:
              Zwei der scheinbar naheliegenden OpenAI-Wege werden 2026
              abgeschaltet. Wer jetzt auf die Assistants API oder den frisch
              vorgestellten Agent Builder setzt, baut auf einem Fundament mit
              Ablaufdatum. Dieser Guide nimmt die Perspektive eines IT-Leiters
              oder Geschäftsführers im Mittelstand ein und zeigt die vier Wege
              nebeneinander, wie ein erster Agent konkret entsteht, was er
              kostet und welche rechtlichen Hürden in Deutschland zu beachten
              sind.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer den herstellerunabhängigen Überblick sucht, also den Vergleich
              zwischen OpenAI, Microsoft und Open-Source-Wegen, findet ihn im
              Leitfaden{" "}
              <Link
                href="/blog/ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                KI-Agenten erstellen
              </Link>
              . Dieser Beitrag geht den OpenAI-Weg konkret durch und ist das
              Gegenstück zu unserem Microsoft-Guide{" "}
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
              Die vier Wege, einen ChatGPT-Agenten zu bauen
            </Typo.H2>
            <Typo.Paragraph>
              OpenAI hat das Feld der Agenten 2025 und 2026 stark umgebaut. Vier
              Wege sind übrig, die sich in Aufwand, Datenschutz und
              Skalierbarkeit deutlich unterscheiden. Wer die vier auseinanderhält,
              trifft die Tool-Entscheidung in fünf Minuten statt nach drei Wochen
              Sackgasse.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/chatgpt-agent-erstellen/agent-wege.png"
              alt="Drei No-Code- und Code-Wege, einen ChatGPT-Agenten zu bauen"
              width={1200}
              height={630}
            />

            <Typo.H3>Custom GPT: der No-Code-Klassiker</Typo.H3>
            <Typo.Paragraph>
              Ein Custom GPT ist eine spezialisierte ChatGPT-Version mit eigenen
              Anweisungen, hochgeladenem Wissen, aktivierbaren Fähigkeiten und
              optionalen Aktionen, die externe Schnittstellen aufrufen. Er
              entsteht in Minuten über Explore GPTs und Create, ganz ohne Code.
              Bauen können ihn alle Bezahlpläne ab Plus, in der Free-Version
              geht es nicht. Pro Custom GPT lassen sich bis zu 20 Dateien mit je
              maximal 512 MB als Wissen hinterlegen. Das ist der schnellste Weg
              zu einem wiederverwendbaren internen Assistenten.
            </Typo.Paragraph>

            <Typo.H3>Agent Mode und Workspace Agents: autonom, ohne Code</Typo.H3>
            <Typo.Paragraph>
              Der 2025 eingeführte Agent Mode lässt ChatGPT Aufgaben autonom mit
              einem virtuellen Computer und Browser erledigen: Websites
              navigieren, Dateien bearbeiten, Formulare ausfüllen, Tabellen
              pflegen. Eine Aufgabe dauert typischerweise fünf bis dreißig
              Minuten. Verfügbar ist der Agent Mode ab Plus und Business, nicht
              in Free oder Go, mit 40 Agenten-Nachrichten pro Monat bei Plus und
              Business und 400 bei Pro. Für wiederkehrende No-Code-Workflows im
              Team sind die neueren Workspace Agents gedacht, die sich in
              natürlicher Sprache definieren lassen und 2026 der empfohlene
              No-Code-Nachfolger für das eingestellte Agent-Builder-Tool sind.
            </Typo.Paragraph>

            <Typo.H3>Responses API und Agents SDK: der Entwickler-Weg</Typo.H3>
            <Typo.Paragraph>
              Wer ein echtes Produkt oder eine skalierende Integration bauen
              will, nutzt die Responses API zusammen mit dem Open-Source Agents
              SDK. Die Responses API vereint die früheren Chat Completions und
              die Assistants API und bringt eingebaute Werkzeuge mit: Websuche,
              Dateisuche, Code Interpreter, Computer Use für die Steuerung von
              Browser und Software sowie die Anbindung externer Werkzeuge über
              das MCP-Protokoll. Das Agents SDK orchestriert dabei mehrere
              Agenten in einem Workflow und funktioniert sogar mit Fremdmodellen
              über kompatible Endpunkte.
            </Typo.Paragraph>

            <Typo.H3>Eigenbau mit n8n oder Copilot Studio</Typo.H3>
            <Typo.Paragraph>
              Der vierte Weg führt aus der reinen OpenAI-Welt heraus. Wer maximale
              Datenhoheit, Self-Hosting oder Integrationen weit über OpenAI
              hinaus braucht, kombiniert ein Sprachmodell mit einer
              Orchestrierungs-Plattform wie n8n. Wer ohnehin in Microsoft 365
              lebt, baut den Agenten in Copilot Studio. Beide Wege behandeln wir
              im Vergleich am Ende dieses Beitrags.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="sackgassen">
              Achtung Sackgassen: diese Wege schaltet OpenAI ab
            </Typo.H2>
            <Typo.Paragraph>
              Bevor es ans Bauen geht, eine Warnung, die in den meisten
              Anleitungen fehlt. Zwei OpenAI-Werkzeuge, die 2025 noch als Zukunft
              gefeiert wurden, haben 2026 ein festes Ablaufdatum. Wer das nicht
              weiß, investiert Wochen in eine Lösung, die in wenigen Monaten nicht
              mehr läuft.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Die <strong>Assistants API</strong> wurde im August 2025 zum
              Auslaufen angekündigt und wird am <strong>26. August 2026</strong>{" "}
              abgeschaltet. Nachfolger ist die Responses API, in die sich
              bestehende Projekte migrieren lassen: Aus Assistants werden
              Prompts, aus Threads werden Conversations, aus Runs werden
              Responses. Wer heute neu beginnt, sollte gar nicht erst mit der
              Assistants API starten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Noch frischer ist der Fall <strong>Agent Builder</strong>. Das
              visuelle No-Code-Workflow-Tool aus dem AgentKit-Bündel wurde erst
              im Oktober 2025 vorgestellt und im Juni 2026 bereits wieder
              abgekündigt: Ab dem <strong>30. November 2026</strong> ist es
              zusammen mit Evals und Reusable Prompts nicht mehr verfügbar. Der
              empfohlene Weg führt stattdessen zum Agents SDK für Entwickler oder
              zu Workspace Agents für No-Code. Viele Tutorials aus 2025 feiern
              noch genau dieses tote Pferd. Für wiederverwendbare No-Code-Agenten
              bleiben damit Custom GPTs und Workspace Agents, für Code die
              Responses API mit dem Agents SDK.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="schritt-fuer-schritt">
              Schritt für Schritt: ein Custom GPT mit Aktion
            </Typo.H2>
            <Typo.Paragraph>
              Für den Einstieg ist der Custom GPT der pragmatischste Weg. In sechs
              Schritten steht ein Assistent, der auf eigenes Wissen zugreift und
              über eine Aktion eine externe Schnittstelle aufruft, etwa das ERP
              oder das CRM.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/chatgpt-agent-erstellen/custom-gpt-schritte.png"
              alt="Sechs Schritte, um einen Custom GPT mit Aktion zu bauen"
              width={1200}
              height={630}
            />

            <Typo.H3>1. Ziel und Plan klären</Typo.H3>
            <Typo.Paragraph>
              Zuerst der Anwendungsfall: Wofür soll der Agent gut sein, und mit
              welchen Daten arbeitet er? Daraus folgt die Plan-Wahl. Zum reinen
              Ausprobieren reicht Plus. Sobald echte Firmen- oder Kundendaten ins
              Spiel kommen, braucht es mindestens Business, besser Enterprise,
              und einen abgeschlossenen Auftragsverarbeitungsvertrag. Mehr dazu im
              Datenschutz-Abschnitt.
            </Typo.Paragraph>

            <Typo.H3>2. Anweisungen schreiben</Typo.H3>
            <Typo.Paragraph>
              Im Configure-Tab werden Rolle, Tonalität, klare Do's und Don'ts und
              das gewünschte Ausgabeformat definiert. Je präziser die
              Anweisungen, desto verlässlicher der Agent. Vage Beschreibungen sind
              die häufigste Ursache für enttäuschende Ergebnisse.
            </Typo.Paragraph>

            <Typo.H3>3. Wissen hochladen</Typo.H3>
            <Typo.Paragraph>
              Relevante Dokumente kommen als Knowledge dazu, bis zu 20 Dateien.
              Wichtig: In einen geteilten oder öffentlichen Custom GPT gehören
              keine personenbezogenen Daten und keine Mandanteninformationen.
              Kleine, aktuelle Wissensdateien schlagen große, veraltete
              Sammlungen.
            </Typo.Paragraph>

            <Typo.H3>4. Aktion anbinden</Typo.H3>
            <Typo.Paragraph>
              Eine Aktion verbindet den Agenten über ein OpenAPI-Schema mit einer
              externen Schnittstelle, abgesichert per API-Schlüssel oder OAuth. So
              kann der Agent etwa Artikelverfügbarkeiten im ERP abfragen. OpenAI
              bietet einen eigenen Helfer, der aus einer Beschreibung das passende
              Schema erzeugt.
            </Typo.Paragraph>

            <Typo.H3>5. Fähigkeiten und Test</Typo.H3>
            <Typo.Paragraph>
              Nur die wirklich nötigen Fähigkeiten aktivieren, denn jede zusätzlich
              aktivierte Funktion wie Websuche oder Code Interpreter kostet
              Latenz. Anschließend im Vorschau-Bereich gründlich testen, auch mit
              schwierigen und unerwarteten Eingaben.
            </Typo.Paragraph>

            <Typo.H3>6. Teilen und freigeben</Typo.H3>
            <Typo.Paragraph>
              Zum Schluss die richtige Sichtbarkeit wählen: privat, im
              Firmen-Workspace, per Link oder im GPT Store. Der öffentliche Store
              erfordert ein verifiziertes Profil und eine Privacy-Policy für
              Aktionen. Für die meisten Mittelständler ist das Teilen im eigenen
              Workspace die richtige Wahl.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="lizenzen-kosten">Lizenzen und Preise 2026</Typo.H2>
            <Typo.Paragraph>
              Die Plan-Wahl entscheidet nicht nur über die Kosten, sondern auch
              darüber, ob Agenten überhaupt baubar und datenschutzkonform
              einsetzbar sind. Eine wichtige Umbenennung vorweg: Der frühere
              Team-Plan heißt jetzt Business.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/chatgpt-agent-erstellen/lizenzen-kosten.png"
              alt="Preisvergleich der ChatGPT-Pläne für den Agentenbau 2026"
              width={1200}
              height={630}
            />

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Plan</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Preis</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Agenten bauen?</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Free</DataTable.Cell>
                  <DataTable.Cell>0 EUR</DataTable.Cell>
                  <DataTable.Cell>
                    Keine GPT-Erstellung, kein Agent Mode
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Go</DataTable.Cell>
                  <DataTable.Cell>rund 8 EUR / Monat</DataTable.Cell>
                  <DataTable.Cell>
                    Keine GPT-Erstellung, kein Agent Mode
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Plus</DataTable.Cell>
                  <DataTable.Cell>rund 23 EUR / Monat</DataTable.Cell>
                  <DataTable.Cell>
                    Custom GPTs und Agent Mode (40 Nachrichten / Monat)
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Pro</DataTable.Cell>
                  <DataTable.Cell>rund 229 EUR / Monat</DataTable.Cell>
                  <DataTable.Cell>
                    Alles, Agent Mode mit 400 Nachrichten / Monat
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Business</DataTable.Cell>
                  <DataTable.Cell>
                    rund 29 bis 34 EUR / Nutzer
                  </DataTable.Cell>
                  <DataTable.Cell>
                    Shared Workspace, firmenweit teilen, Workspace Agents, kein
                    Training auf Kundendaten
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Enterprise / Edu</DataTable.Cell>
                  <DataTable.Cell>auf Anfrage</DataTable.Cell>
                  <DataTable.Cell>
                    Alles plus SSO, EU-Data- und Inference-Residency,
                    Zero-Data-Retention-Option
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Für den Entwickler-Weg über die API zählt nicht der Seat-Preis,
              sondern der Tokenverbrauch. Die Modell-Landschaft ist 2026 zu GPT-5.4
              und GPT-5.5 weitergewandert. GPT-5.4 liegt bei etwa 2,50 US-Dollar
              je Million Eingabe-Token und 15 US-Dollar je Million
              Ausgabe-Token, das kleinere GPT-5.4 mini deutlich darunter.
              Dazu kommen Werkzeugkosten: Websuche kostet rund 10 US-Dollar je
              1.000 Aufrufe, die Dateisuche rund 2,50 US-Dollar je 1.000 Aufrufe
              plus Speicher. Prompt-Caching senkt die Kosten für wiederkehrende
              Eingaben deutlich.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer die Vollkostenrechnung für ein vergleichbares
              Microsoft-Szenario sucht, findet sie im{" "}
              <Link
                href="/blog/microsoft-365-copilot-kosten"
                className="text-primary-600 hover:underline"
              >
                Kosten-Guide zu Microsoft 365 Copilot
              </Link>
              , und den breiteren Tool-Vergleich im{" "}
              <Link
                href="/blog/chatgpt-enterprise-deutschland"
                className="text-primary-600 hover:underline"
              >
                Deep-Dive zu ChatGPT Enterprise
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="dsgvo">DSGVO und Recht für deutsche Firmen</Typo.H2>
            <Typo.Paragraph>
              Hier entscheidet sich, ob ein ChatGPT-Agent im deutschen Mittelstand
              wirklich produktiv gehen darf. Die Plattform ist nutzbar, aber nur
              mit der richtigen Plan-Wahl und sauberer Konfiguration. Dieser
              Abschnitt ist das Kernstück.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/chatgpt-agent-erstellen/dsgvo-compliance.png"
              alt="Sechs DSGVO-Bausteine für ChatGPT-Agenten in Deutschland"
              width={1200}
              height={630}
            />

            <Typo.H3>Plan-Wahl und Auftragsverarbeitung</Typo.H3>
            <Typo.Paragraph>
              Free und Plus sind für die geschäftliche Verarbeitung
              personenbezogener Daten nicht geeignet, weil in diesen Plänen Daten
              standardmäßig fürs Training genutzt werden können und kein passender
              Vertragsrahmen besteht. Erst ab Business, sowie bei Enterprise und
              der API, ist OpenAI sauber als Auftragsverarbeiter im Sinne von
              Artikel 28 DSGVO einsetzbar und trainiert standardmäßig nicht auf
              euren Daten. Der Auftragsverarbeitungsvertrag muss vor der ersten
              Verarbeitung personenbezogener Daten abgeschlossen sein, er enthält
              die EU-Standardvertragsklauseln für den US-Transfer.
            </Typo.Paragraph>

            <Typo.H3>EU Data Residency und Inference Residency</Typo.H3>
            <Typo.Paragraph>
              Seit Februar 2025 bietet OpenAI Data Residency in Europa für
              ChatGPT Enterprise, Edu und die API-Plattform, die Daten ruhen dann
              in der Region. Seit Januar 2026 gilt zusätzlich die Inference
              Residency: Auch die Verarbeitung auf den GPUs bleibt in Europa.
              Wichtig zu wissen ist, dass diese Wahl nur Enterprise und Edu sowie
              neu angelegten API-Projekten offensteht. Plus, Go und Business haben
              keine Residency-Option. Zero Data Retention, also der Verzicht auf
              die sonst 30-tägige Aufbewahrung, ist ebenfalls Enterprise- und
              API-Kunden vorbehalten und kein Self-Service-Schalter.
            </Typo.Paragraph>

            <Typo.H3>§203 StGB für Kanzleien und Heilberufe</Typo.H3>
            <Typo.Paragraph>
              Für Steuerkanzleien, Anwälte und Ärzte reicht ein
              Auftragsverarbeitungsvertrag allein nicht aus. Wer einem externen
              Anbieter geschützte Mandanten- oder Patientendaten offenbart,
              braucht zusätzlich eine berufsrechtliche
              Verschwiegenheitsverpflichtung mit Belehrung über die
              strafrechtlichen Folgen nach §203 StGB. Ohne diese Konstellation
              kann schon das Hochladen sensibler Daten strafbar sein. In der
              Praxis heißt das für Mandantendaten oft: eine spezialisierte,
              berufsrechtskonforme Lösung statt eines normalen Custom GPT. Wie
              Kanzleien das strukturieren, vertieft unser Beitrag{" "}
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
              50 des EU AI Act. Nutzer müssen darüber informiert werden, dass sie
              mit einer KI interagieren, und KI-generierte Inhalte müssen
              maschinenlesbar gekennzeichnet sein. Der sogenannte Digital Omnibus
              verschiebt zwar einige Hochrisiko-Pflichten auf Ende 2027, lässt die
              Transparenz- und Kennzeichnungsfristen aber unverändert. Für einen
              Agenten, der etwa Kundenmails entwirft, ist das praktisch relevant.
              Weitere Tiefe zum Thema bietet unser Überblick zu{" "}
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
              Ein <strong>Angebots-Assistent</strong> als Custom GPT bekommt
              Preislisten und Konditionen als Wissen und eine Aktion gegen das ERP
              oder PIM, und erstellt daraus Angebotsentwürfe. Eine{" "}
              <strong>Bestell-Triage</strong> klassifiziert eingehende
              Bestellmails und PDFs, extrahiert die relevanten Felder und bereitet
              sie für die Auftragserfassung vor. Ein{" "}
              <strong>Datenblatt-Assistent</strong> beantwortet dem Innendienst
              technische Rückfragen aus hinterlegten Produktdokumenten. Wie sich
              der gesamte Bestell- und Auftragsprozess automatisieren lässt, zeigt
              unser Leitfaden{" "}
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
              Mandantendaten gehören nicht in einen einfachen Custom GPT auf
              Plus-Basis, sondern brauchen den §203-konformen Rahmen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="abgrenzung">
              Custom GPT, Copilot oder n8n: wann was?
            </Typo.H2>
            <Typo.Paragraph>
              Am Ende läuft alles auf eine Entscheidung hinaus. Die folgende
              Übersicht und die Matrix darunter helfen, den passenden Weg zu
              finden, ohne sich zu verzetteln.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/chatgpt-agent-erstellen/wege-vergleich.png"
              alt="Entscheidungsmatrix: welcher Weg zum ChatGPT-Agenten passt"
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
                  <DataTable.Cell bold>Custom GPT</DataTable.Cell>
                  <DataTable.Cell>Nein</DataTable.Cell>
                  <DataTable.Cell>
                    Schneller interner Assistent
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Workspace Agents</DataTable.Cell>
                  <DataTable.Cell>Nein</DataTable.Cell>
                  <DataTable.Cell>
                    Wiederkehrender No-Code-Workflow im Team
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Responses API plus Agents SDK</DataTable.Cell>
                  <DataTable.Cell>Ja</DataTable.Cell>
                  <DataTable.Cell>
                    Produkt, volle Kontrolle, Skalierung
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Copilot Studio</DataTable.Cell>
                  <DataTable.Cell>Wenig</DataTable.Cell>
                  <DataTable.Cell>
                    Microsoft-365-Häuser mit Governance
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
              Als Faustregel: Zum Ausprobieren und für interne Helfer ein Custom
              GPT, für wiederkehrende Team-Workflows die Workspace Agents, für ein
              echtes Produkt die Responses API mit dem Agents SDK. Wer in
              Microsoft 365 lebt, ist mit{" "}
              <Link
                href="/blog/copilot-agent-erstellen"
                className="text-primary-600 hover:underline"
              >
                Copilot Studio
              </Link>{" "}
              besser bedient, und wer maximale Datenhoheit oder mehrere Modelle
              braucht, mit einem{" "}
              <Link
                href="/blog/wie-baut-man-ki-agents"
                className="text-primary-600 hover:underline"
              >
                Eigenbau nach Engineering-Bauplan
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit: klein anfangen, Weg bewusst wählen</Typo.H2>
            <Typo.Paragraph>
              Einen ChatGPT-Agenten zu erstellen ist 2026 keine
              Entwicklungsaufgabe mehr, sondern eine Frage der richtigen
              Entscheidung. Der schnellste Weg zum ersten Nutzen ist ein Custom
              GPT mit einer klar umrissenen Aufgabe, einer kleinen sauberen
              Wissensquelle und einer Pilotgruppe. Skalierung und tiefe
              Integration kommen danach über die Responses API.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Zwei Dinge entscheiden über Erfolg oder teuren Fehlstart: die
              Plan-Wahl mit Blick auf Datenschutz und das Wissen, welche Wege
              OpenAI gerade abschaltet. Wer auf Assistants API oder Agent Builder
              setzt, baut auf Sand. Wer Plus mit echten Kundendaten füttert,
              riskiert einen Datenschutzverstoß.
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
                    "Brauche ich Programmierkenntnisse, um einen ChatGPT-Agenten zu erstellen?",
                  answer:
                    "Nein, für einen Custom GPT oder die Workspace Agents nicht. Beide werden in natürlicher Sprache beschrieben, Wissen und Aktionen kommen über die Oberfläche dazu. Erst der Weg über die Responses API und das Agents SDK setzt Entwicklungskenntnisse voraus.",
                },
                {
                  question:
                    "Welcher ChatGPT-Plan ist nötig, um Agenten zu bauen?",
                  answer:
                    "Custom GPTs und den Agent Mode gibt es ab Plus. Zum firmenweiten Teilen und für den datenschutzkonformen Einsatz mit Kundendaten braucht es mindestens Business, besser Enterprise. In Free und Go lassen sich keine Agenten erstellen.",
                },
                {
                  question:
                    "Stimmt es, dass OpenAI die Assistants API abschaltet?",
                  answer:
                    "Ja. Die Assistants API wird am 26. August 2026 abgeschaltet, Nachfolger ist die Responses API. Auch der 2025 vorgestellte Agent Builder wird zum 30. November 2026 eingestellt. Wer neu beginnt, sollte direkt auf die Responses API mit dem Agents SDK oder auf Workspace Agents setzen.",
                },
                {
                  question:
                    "Ist ChatGPT für deutsche Unternehmen DSGVO-konform nutzbar?",
                  answer:
                    "Mit der richtigen Plan-Wahl und Konfiguration ja. Nötig sind mindestens Business, ein vor der Verarbeitung abgeschlossener Auftragsverarbeitungsvertrag und die Beachtung der Training-Defaults. Echte EU-Datenhaltung samt Inference Residency gibt es nur bei Enterprise und Edu sowie für neue API-Projekte.",
                },
                {
                  question:
                    "Dürfen Steuerkanzleien Mandantendaten in einen ChatGPT-Agenten geben?",
                  answer:
                    "Nur unter strengen Bedingungen. Wegen §203 StGB reicht ein Auftragsverarbeitungsvertrag nicht aus, es braucht zusätzlich eine berufsrechtliche Verschwiegenheitsverpflichtung mit Strafbelehrung. In der Praxis sind für Mandantendaten oft spezialisierte, berufsrechtskonforme Lösungen statt eines einfachen Custom GPT die sichere Wahl.",
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
          <BlogLayout.NavigationItem idLink="sackgassen">
            Achtung Sackgassen
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
