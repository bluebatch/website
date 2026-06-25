import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "copilot-agent-erstellen",
  author: "Max Hänsel",
  date: "2026-06-21",
  image: "/blog/copilot-agent-erstellen/hero.png",
  tags: ["ki", "automatisierung"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "Copilot Agent erstellen: Anleitung für Microsoft Copilot Studio 2026",
  description:
    "Copilot Agent erstellen mit Microsoft Copilot Studio: die vier Bausteine, Schritt-für-Schritt zum ersten Agent, Lizenzen und Message-Kosten, Governance und DSGVO für den Mittelstand.",
  openGraph: {
    title: "Copilot Agent erstellen: Anleitung für Copilot Studio 2026",
    description:
      "Von Topics, Actions und Knowledge bis zum autonomen Agent: wie der Mittelstand mit Copilot Studio eigene KI-Agenten baut, was es kostet und worauf die Governance achten muss.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/copilot-agent-erstellen/hero.png",
        width: 1200,
        height: 630,
        alt: "Copilot Agent in Microsoft Copilot Studio erstellen",
      },
    ],
  },
  alternates: {
    canonical: "/blog/copilot-agent-erstellen",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          Copilot Agent erstellen: Der praktische Weg durch Copilot Studio
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>13 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-06-21">21. Juni 2026</BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/copilot-agent-erstellen/hero.png"
          alt="Ein IT-Team baut in Copilot Studio einen eigenen Copilot-Agent"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.Paragraph>
              Einen Copilot Agent zu erstellen klingt in der Microsoft-Demo nach
              fünf Minuten: Agent beschreiben, Knowledge anhängen, fertig. In
              der Realität entscheidet sich zwischen diesen drei Schritten, ob
              am Ende ein nützlicher Assistent oder ein teurer
              Halluzinations-Bot steht, den nach zwei Wochen niemand mehr
              benutzt. Der Unterschied liegt nicht im Klicken, sondern im
              Verstehen der Bausteine, der Kostenlogik und der Governance.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Microsoft Copilot Studio ist die Low-Code-Plattform, mit der sich
              eigene Agenten bauen lassen, die auf die Daten und Prozesse des
              eigenen Unternehmens zugreifen. Wer Microsoft 365 ohnehin im Haus
              hat, hat damit den kürzesten Weg zu einem Agenten, der in Teams
              oder direkt im M365-Copilot lebt. Dieser Guide nimmt die
              Perspektive eines M365-Administrators oder IT-Verantwortlichen im
              Mittelstand ein und zeigt, wie ein erster Agent entsteht, was er
              kostet und welche Stolpersteine sich vermeiden lassen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer den tool-agnostischen Überblick sucht, also den Vergleich
              zwischen Copilot Studio, Open-Source-Wegen und anderen
              Plattformen, findet ihn in unserem Leitfaden{" "}
              <Link
                href="/blog/ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                KI-Agenten erstellen
              </Link>
              . Dieser Beitrag geht den Microsoft-Weg konkret durch.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="was-ist-copilot-studio">
              Was ist Copilot Studio und was ist ein Agent?
            </Typo.H2>
            <Typo.Paragraph>
              Copilot Studio ist aus den früheren Power Virtual Agents
              hervorgegangen. Was vor zwei Jahren noch ein klassischer
              Chatbot-Baukasten mit starren Themen war, ist heute eine
              Plattform für generative Agenten: Statt jede mögliche Frage über
              ein vordefiniertes Thema abzubilden, kann der Agent aus
              hinterlegtem Wissen frei formulierte Antworten erzeugen und
              eigenständig entscheiden, welche Aktion er auslöst.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ein Agent in Copilot Studio ist damit mehr als ein Chatbot. Er
              besteht aus einer Beschreibung seiner Aufgabe, aus Wissensquellen,
              auf die er zugreift, aus Aktionen, die er ausführen darf, und aus
              einer generativen Orchestrierung, die im Hintergrund entscheidet,
              welche dieser Bausteine für eine konkrete Anfrage gebraucht
              werden. Genau diese Orchestrierung ist der Sprung vom Bot zum
              Agent.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Es gibt zwei Wege, einen Agent zu nutzen. Entweder als
              eigenständigen Agent, den man in Teams, auf einer Website oder im
              M365-Copilot veröffentlicht. Oder als sogenannten deklarativen
              Agent innerhalb des Microsoft 365 Copilot, der dessen Oberfläche
              nutzt, aber mit eigenem Wissen und eigenen Anweisungen arbeitet.
              Für den Einstieg ist der eigenständige Agent in Copilot Studio der
              flexiblere Weg.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="bausteine">
              Die vier Bausteine eines Copilot-Agents
            </Typo.H2>
            <Typo.Paragraph>
              Jeder Agent in Copilot Studio setzt sich aus vier Bausteinen
              zusammen. Wer diese vier versteht, versteht die ganze Plattform,
              alles andere ist Detail.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/copilot-agent-erstellen/agent-bausteine.png"
              alt="Die vier Bausteine eines Copilot-Agents: Topics, Actions, Knowledge und generative Orchestrierung"
              width={1200}
              height={630}
            />

            <Typo.H3>Topics: Auslöser und Dialogführung</Typo.H3>
            <Typo.Paragraph>
              Topics sind die klassische DNA der Plattform. Ein Topic wird durch
              Auslöserphrasen gestartet und steuert einen Dialog über Nodes:
              Fragen stellen, Bedingungen prüfen, Variablen setzen, eine Aktion
              aufrufen. In der generativen Welt braucht man weniger Topics als
              früher, weil die Orchestrierung viele Anfragen direkt aus dem
              Wissen beantwortet. Für klar geregelte Abläufe, etwa eine
              Krankmeldung oder eine strukturierte Datenabfrage, bleibt das
              Topic aber das präzisere Werkzeug.
            </Typo.Paragraph>

            <Typo.H3>Actions: Connectoren, Flows und APIs</Typo.H3>
            <Typo.Paragraph>
              Actions sind das, was den Agent vom reinen Auskunftsgeber zum
              Handelnden macht. Eine Action kann ein vorgefertigter Connector
              sein, ein Power-Automate-Flow, ein Prompt-Baustein oder eine
              eigene REST-Schnittstelle, die über eine OpenAPI-Beschreibung
              eingebunden wird. Damit kann der Agent ein Ticket anlegen, einen
              Bestellstatus aus dem ERP holen oder einen Termin eintragen. Die
              generative Orchestrierung wählt selbst aus, welche Action zur
              Anfrage passt, sofern die Beschreibung der Action gut formuliert
              ist.
            </Typo.Paragraph>

            <Typo.H3>Knowledge: die Wissensbasis</Typo.H3>
            <Typo.Paragraph>
              Knowledge sind die Quellen, aus denen der Agent seine Antworten
              zieht: SharePoint-Bibliotheken, Dataverse-Tabellen, hochgeladene
              Dateien, öffentliche Websites oder Unternehmensdaten über den
              Microsoft Graph. Die Qualität dieser Quellen entscheidet über die
              Qualität des Agents. Ein Agent ist immer nur so gut wie das
              Wissen, das er durchsuchen darf, und die Berechtigungen, die dabei
              gelten.
            </Typo.Paragraph>

            <Typo.H3>Generative Orchestrierung: das Gehirn</Typo.H3>
            <Typo.Paragraph>
              Die Orchestrierung ist die Schicht, die zur Laufzeit entscheidet,
              ob eine Anfrage aus dem Wissen beantwortet, über ein Topic geführt
              oder mit einer Action erledigt wird, und die mehrere Schritte zu
              einer Antwort verkettet. Sie ist standardmäßig aktiv und der
              eigentliche Grund, warum heute von Agenten statt von Bots
              gesprochen wird.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="agent-bauen">
              Schritt für Schritt zum ersten Agent
            </Typo.H2>
            <Typo.Paragraph>
              In der Praxis hat sich eine Reihenfolge bewährt, die in jeder
              Umgebung funktioniert und Fehler früh sichtbar macht, statt sie
              erst im Produktivbetrieb auffallen zu lassen.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/copilot-agent-erstellen/agent-bauen-schritte.png"
              alt="Sechs Schritte zum ersten Copilot-Agent von der Beschreibung bis zur Veröffentlichung"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              <strong>Schritt 1: Beschreiben.</strong> Der Agent startet mit
              einer Beschreibung in natürlicher Sprache. Aus ihr leitet Copilot
              Studio einen ersten Entwurf ab. Je präziser die Aufgabe, der Ton
              und die Grenzen formuliert sind, desto weniger muss später
              nachgebessert werden. Hier gehört auch hinein, was der Agent nicht
              tun soll.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Schritt 2: Knowledge anbinden.</strong> Zuerst eine kleine,
              saubere Wissensquelle anhängen, nicht das gesamte Intranet. Ein
              einzelnes, gepflegtes SharePoint-Verzeichnis liefert bessere
              Antworten als zwanzig veraltete Quellen. Wichtig ist, von Anfang
              an mitzudenken, welche Berechtigungen auf diesen Daten liegen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Schritt 3: Topics und Actions ergänzen.</strong> Für die
              häufigsten geregelten Abläufe ein Topic anlegen, für jede
              Handlung, die der Agent ausführen soll, eine Action mit klarer
              Beschreibung. Sparsam beginnen und nur das ergänzen, was im Test
              tatsächlich fehlt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Schritt 4: Testen.</strong> Der Test-Canvas zeigt nach
              jeder Änderung, wie der Agent antwortet und welche Quelle oder
              Action er gewählt hat. Hier wird sichtbar, ob die Orchestrierung
              richtig greift oder ob Beschreibungen nachgeschärft werden müssen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Schritt 5: Governance und DLP.</strong> Bevor der Agent
              für andere sichtbar wird, gehören Authentifizierung,
              DLP-Richtlinien und die Frage geklärt, in welcher Umgebung er
              läuft. Mehr dazu im Governance-Abschnitt weiter unten.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Schritt 6: Veröffentlichen.</strong> Erst dann wird der
              Agent auf einem Kanal veröffentlicht, in der Regel Teams, eine
              eingebettete Website oder der M365-Copilot. Der Rollout beginnt
              mit einer kleinen Pilotgruppe, nicht mit der ganzen Belegschaft.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="autonome-agents">
              Autonome Agents und Agent Flows
            </Typo.H2>
            <Typo.Paragraph>
              Der größte Sprung der letzten Monate sind autonome Agenten. Ein
              klassischer Agent reagiert auf eine Nutzeranfrage. Ein autonomer
              Agent wird durch ein Ereignis ausgelöst, etwa eine neue Mail, eine
              neue Zeile in einer Tabelle oder einen Zeitplan, und arbeitet
              eigenständig eine Aufgabe ab, ohne dass ein Mensch den Dialog
              startet.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Damit verschiebt sich der Anwendungsfall vom Frage-Antwort-Bot zur
              Prozessautomatisierung: eingehende Rechnungen vorsortieren,
              Standardanfragen im Posteingang beantworten, Datensätze zwischen
              Systemen abgleichen. Wer schon einmal mit klassischer
              Workflow-Automatisierung gearbeitet hat, erkennt das Muster, nur
              dass hier ein Sprachmodell die Entscheidungen in der Mitte trifft.
              Genau an dieser Stelle lohnt der Vergleich mit anderen Wegen, die
              wir im Abgrenzungs-Abschnitt ziehen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="lizenzen-kosten">
              Lizenzen und Kosten: das Credit-Modell verstehen
            </Typo.H2>
            <Typo.Paragraph>
              Copilot Studio rechnet nicht pro Nutzer ab, sondern pro Nutzung.
              Die Abrechnungseinheit heißt seit September 2025 Copilot Credit
              (vorher Message). Wer das Modell nicht versteht, plant entweder
              zu großzügig oder wacht mit einem deaktivierten Agent auf.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Es gibt zwei Wege, Kapazität einzukaufen. Das Prepaid-Pack
              umfasst 25.000 Copilot Credits pro Monat und kostet 200 US-Dollar,
              auf den deutschsprachigen Microsoft-Seiten rund 173 Euro pro Pack
              und Monat. Alternativ rechnet der Pay-as-you-go-Tarif über eine
              Azure-Subscription nutzungsbasiert mit etwa 0,01 Euro pro Credit
              ab, ohne Vorabverpflichtung. Die Maker-Lizenz selbst, mit der man
              Agenten baut, ist kostenlos, setzt aber voraus, dass im Tenant
              Kapazität vorhanden ist.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der entscheidende Punkt ist, dass nicht jede Interaktion gleich
              viel kostet. Microsoft staffelt den Verbrauch nach Art der
              Aktion. Diese Multiplikatoren sind die eigentliche Kostenlogik:
            </Typo.Paragraph>

            <BlogImage
              src="/blog/copilot-agent-erstellen/copilot-studio-lizenzen.png"
              alt="Copilot-Credit-Verbrauch je Aktionstyp und die beiden Einkaufswege Pack und Pay-as-you-go"
              width={1200}
              height={630}
            />

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Aktion</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Verbrauch</DataTable.HeaderCell>
                  <DataTable.HeaderCell>
                    Für M365-Copilot-Nutzer
                  </DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Classic Answer</DataTable.Cell>
                  <DataTable.Cell>1 Credit</DataTable.Cell>
                  <DataTable.Cell>inklusive</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Generative Answer</DataTable.Cell>
                  <DataTable.Cell>2 Credits</DataTable.Cell>
                  <DataTable.Cell>inklusive</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Agent Action</DataTable.Cell>
                  <DataTable.Cell>5 Credits</DataTable.Cell>
                  <DataTable.Cell>inklusive</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Tenant Graph Grounding</DataTable.Cell>
                  <DataTable.Cell>10 Credits</DataTable.Cell>
                  <DataTable.Cell>inklusive</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Agent Flow (pro 100 Actions)</DataTable.Cell>
                  <DataTable.Cell>13 Credits</DataTable.Cell>
                  <DataTable.Cell>inklusive</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.Paragraph>
              Mehrere Features summieren sich pro Anfrage. Eine generative
              Antwort, die über den Microsoft Graph auf Tenant-Daten zugreift,
              kostet 10 Credits für das Grounding plus 2 für die generative
              Antwort, also 12 Credits pro Prompt. Microsoft selbst rechnet ein
              Beispiel vor: ein Support-Agent mit vier klassischen und zwei
              generativen Antworten pro Gespräch verbraucht bei 900 Anfragen am
              Tag rund 7.200 Credits täglich. Ein einzelnes Pack ist damit in
              wenigen Tagen aufgebraucht.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer Microsoft 365 Copilot lizenziert hat, bekommt einen
              spürbaren Rabatt: Für lizenzierte Nutzer sind klassische und
              generative Antworten sowie das Graph-Grounding in Copilot Chat,
              Teams und SharePoint im Rahmen fairer Nutzung kostenlos
              gestellt. Eigene Copilot-Studio-Kapazität braucht man dann vor
              allem für Agenten, die extern oder für unlizenzierte Nutzer
              laufen, und für Funktionen wie Agent Flows, autonome Aktionen
              oder Voice. Die Kostenseite der M365-Copilot-Lizenz selbst, mit
              28,10 Euro pro Nutzer und Monat in der Enterprise-Variante,
              beleuchtet unser{" "}
              <Link
                href="/blog/microsoft-365-copilot-kosten"
                className="text-primary-600 hover:underline"
              >
                Kosten-Guide zu Microsoft 365 Copilot
              </Link>
              .
            </Typo.Paragraph>
            <Typo.Paragraph>
              Beim Kostenmanagement gibt es zwei Fallen. Erstens verfallen
              ungenutzte Credits am Monatsende, ein Übertrag findet nicht
              statt. Zweitens greift bei 125 Prozent der gebuchten Kapazität
              eine Sperre, die den Agent schlicht deaktiviert. Wer das nicht
              will, setzt im Power Platform Admin Center ein monatliches Limit
              pro Agent und prognostiziert den Verbrauch vorab mit dem von
              Microsoft bereitgestellten Agent Usage Estimator. Für einen ersten
              Test reicht ohnehin die 60-Tage-Testphase, in der sich allerdings
              kein Agent veröffentlichen lässt.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="governance">
              Governance, DLP und DSGVO
            </Typo.H2>
            <Typo.Paragraph>
              Die Technik ist beim Agentenbau selten das Problem. Die Governance
              ist es. Vier Hebel entscheiden, ob ein Agent ein kontrolliertes
              Werkzeug oder ein Datenschutz-Risiko wird.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/copilot-agent-erstellen/governance-dlp.png"
              alt="Governance-Schichten für Copilot-Agenten: Umgebungen, DLP, Berechtigungen, EU Data Boundary"
              width={1200}
              height={630}
            />

            <Typo.H3>DLP-Richtlinien und Umgebungen</Typo.H3>
            <Typo.Paragraph>
              Data-Loss-Prevention-Richtlinien im Power Platform Admin Center
              steuern, mit welchen Diensten ein Agent überhaupt sprechen darf.
              Seit Anfang 2025 werden sie für alle Tenants verpflichtend
              durchgesetzt, eine Ausnahmeregelung gibt es nicht mehr. Über DLP
              lassen sich unauthentifizierte Agenten blockieren, Connectoren
              einschränken und Veröffentlichungskanäle begrenzen. In
              kombinierter Form mit Managed Environments und Freigabe-Limits
              steuert die IT, wer Agenten überhaupt bauen und wie breit er sie
              teilen darf. Mit Microsoft Agent 365, seit Mai 2026 verfügbar,
              kommt eine zentrale Ebene hinzu, um alle Agenten im Unternehmen zu
              registrieren und zu verwalten.
            </Typo.Paragraph>

            <Typo.H3>Authentifizierung und Veröffentlichung</Typo.H3>
            <Typo.Paragraph>
              Die Anmeldung über Entra ID ist standardmäßig aktiv, ein Agent
              kennt also die Identität des Nutzers und liefert nur, was dieser
              sehen darf. Wer diese Authentifizierung deaktiviert, um einen
              Agent schnell öffentlich zu machen, öffnet das größte Einfallstor
              überhaupt. Veröffentlicht wird in Teams, im M365 Copilot, in
              SharePoint, auf einer eingebetteten Website oder in Power Apps,
              innerhalb wie außerhalb des Tenants.
            </Typo.Paragraph>

            <Typo.H3>Oversharing: das unterschätzte Risiko Nummer eins</Typo.H3>
            <Typo.Paragraph>
              Ein Agent macht Wissen auffindbar, das vorher in den Tiefen von
              SharePoint schlummerte, auch solches, das schlecht berechtigt
              war. Sites mit Freigabe für alle, gebrochener Vererbung oder
              anonymen Links werden plötzlich durchsuchbar. Microsoft nennt
              Oversharing das Sicherheitsrisiko Nummer eins, mit im Schnitt 150
              bis 300 überfreigegebenen Sites pro Tenant. Ein
              Berechtigungs-Audit vor dem Rollout ist deshalb keine Kür, sondern
              Pflicht.
            </Typo.Paragraph>

            <Typo.H3>DSGVO und EU Data Boundary</Typo.H3>
            <Typo.Paragraph>
              Copilot Studio läuft im eigenen Microsoft-Tenant und lässt sich an
              die EU Data Boundary binden, wenn alle Umgebungen in einer
              EU-Region angelegt werden. Eine wichtige Änderung hat sich Anfang
              2026 ergeben: Microsoft setzt seither Anthropic als Subprozessor
              ein, und für diese Modelle gilt laut Microsoft-Dokumentation, dass
              sie außerhalb der EU Data Boundary liegen. Auch das sogenannte
              Flex Routing kann Inferenz bei Lastspitzen außerhalb der EU
              verarbeiten. Wer hier auf Nummer sicher gehen muss, prüft
              Modellauswahl und Routing aktiv und dokumentiert das im
              Verarbeitungsverzeichnis. Den größeren Rahmen dazu liefern unsere
              Beiträge zu{" "}
              <Link
                href="/blog/dsgvo-konforme-ki-tools"
                className="text-primary-600 hover:underline"
              >
                DSGVO-konformen KI-Tools
              </Link>{" "}
              und zum{" "}
              <Link
                href="/blog/ki-datenschutz"
                className="text-primary-600 hover:underline"
              >
                Datenschutz bei KI im Mittelstand
              </Link>
              .
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="use-cases">
              Use Cases im Mittelstand
            </Typo.H2>
            <Typo.Paragraph>
              Die dankbarsten ersten Agenten sind die, bei denen das Wissen
              ohnehin schon strukturiert vorliegt und die Frage immer wieder
              dieselbe ist. Drei Beispiele, die im Mittelstand zuverlässig
              funktionieren.
            </Typo.Paragraph>
            <Typo.H3>IT-Helpdesk und interner Self-Service</Typo.H3>
            <Typo.Paragraph>
              Ein Agent, der auf der internen Wissensdatenbank und den
              IT-Richtlinien sitzt, beantwortet die immergleichen Fragen zu
              VPN, Passwort-Reset oder Software-Anträgen und legt bei Bedarf
              direkt ein Ticket an. Das entlastet den First-Level-Support und
              gibt Antworten rund um die Uhr.
            </Typo.Paragraph>
            <Typo.H3>HR-Self-Service und Onboarding</Typo.H3>
            <Typo.Paragraph>
              Fragen zu Urlaub, Reisekosten, Betriebsvereinbarungen oder dem
              Ablauf der ersten Arbeitswoche lassen sich aus den HR-Dokumenten
              beantworten. Neue Mitarbeitende bekommen einen geduldigen
              Ansprechpartner, ohne dass die Personalabteilung jede Frage
              einzeln beantwortet.
            </Typo.Paragraph>
            <Typo.H3>Auskunft aus Geschäftsdaten</Typo.H3>
            <Typo.Paragraph>
              Über eine Action auf das ERP oder Dataverse beantwortet der Agent
              Fragen wie den aktuellen Status einer Bestellung oder die
              Verfügbarkeit eines Artikels. Das ist der Übergang vom reinen
              Wissens-Agent zum prozessnahen Agent und der Punkt, an dem sich
              Kosten und Nutzen am deutlichsten zeigen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fallen">
              Fünf typische Fallen beim ersten Agent
            </Typo.H2>
            <Typo.List>
              <Typo.ListItem>
                <strong>Zu viel Wissen auf einmal.</strong> Wer dem Agent das
                ganze Intranet als Quelle gibt, bekommt vage und teils falsche
                Antworten. Klein und sauber starten, dann erweitern.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Berechtigungen unterschätzt.</strong> Der Agent macht
                Wissen leichter auffindbar, auch solches, das schlecht
                berechtigt war. Oversharing über den Graph ist das größte
                stille Risiko und gehört vor dem Rollout geprüft.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Message-Kosten ignoriert.</strong> Jede Interaktion
                verbraucht Kontingent, generative und autonome Aktionen mehr als
                einfache. Ohne Blick auf den Verbrauch wird die Rechnung zur
                Überraschung. Details im Kosten-Abschnitt oben.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Keine Governance.</strong> Wenn jeder in jeder Umgebung
                Agenten bauen und veröffentlichen darf, entsteht
                Wildwuchs. Umgebungen, DLP-Richtlinien und Maker-Rechte gehören
                vor den ersten produktiven Agent.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Nicht getestet, sondern gehofft.</strong> Ein Agent, der
                nur an drei Beispielen geprüft wurde, blamiert sich im
                Echtbetrieb. Eine kleine Pilotgruppe mit echten Fragen ist
                Pflicht, bevor breit ausgerollt wird.
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="abgrenzung">
              Copilot Studio, M365 Copilot oder n8n?
            </Typo.H2>
            <Typo.Paragraph>
              Copilot Studio ist nicht für jede Aufgabe der beste Weg. Drei
              Optionen konkurrieren in der Praxis, und ehrlich verglichen haben
              alle drei ihren Platz.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/copilot-agent-erstellen/copilot-vs-n8n-matrix.png"
              alt="Entscheidungsmatrix Copilot Studio gegen M365 Copilot und n8n mit LLM"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Der <strong>Microsoft 365 Copilot</strong> ohne eigene Agenten ist
              der schnellste Weg, wenn es nur darum geht, in Word, Excel und
              Outlook produktiver zu werden. Wer hier startet, sollte zuerst die{" "}
              <Link
                href="/blog/microsoft-365-copilot-kosten"
                className="text-primary-600 hover:underline"
              >
                Kostenseite von M365 Copilot
              </Link>{" "}
              kennen und den{" "}
              <Link
                href="/blog/copilot-vs-chatgpt-vergleich"
                className="text-primary-600 hover:underline"
              >
                Vergleich von Copilot und ChatGPT
              </Link>{" "}
              gelesen haben.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Copilot Studio</strong> ist die richtige Wahl, wenn ein
              Agent gebraucht wird, der auf eigene Daten zugreift, im
              M365-Umfeld lebt und von Fachbereichen mit Low-Code gepflegt
              werden soll. Die Stärke ist die nahtlose Integration in die
              Microsoft-Welt, der Preis dafür ist das Message-Modell und die
              Bindung an das Microsoft-Ökosystem. Das OpenAI-Pendant dazu, wie
              man{" "}
              <Link
                href="/blog/chatgpt-agent-erstellen"
                className="text-primary-600 hover:underline"
              >
                einen ChatGPT-Agenten erstellt
              </Link>
              , zeigt den gleichen Weg auf der OpenAI-Seite.
            </Typo.Paragraph>
            <Typo.Paragraph>
              <strong>Ein tool-agnostischer Weg mit n8n und einem
              Sprachmodell</strong> ist überlegen, wenn maximale Datenhoheit,
              Self-Hosting oder komplexe Integrationen über die Microsoft-Welt
              hinaus zählen. Wie das konkret aussieht, zeigt unser Beitrag zu{" "}
              <Link
                href="/blog/n8n-ki-agenten-erstellen"
                className="text-primary-600 hover:underline"
              >
                KI-Agenten mit n8n
              </Link>
              . Die Kostenkurve bleibt flacher, dafür liegt mehr Verantwortung
              für Betrieb und Sicherheit im eigenen Haus.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit: klein, sauber, mit Plan</Typo.H2>
            <Typo.Paragraph>
              Einen Copilot Agent zu erstellen ist heute keine
              Entwicklungsaufgabe mehr, sondern eine Frage von gutem Wissen,
              klarer Governance und realistischer Kostenplanung. Die Plattform
              nimmt einem das Programmieren ab, nicht aber das Denken über
              Berechtigungen, Verbrauch und Nutzen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der erfolgreiche Weg ist fast immer derselbe: ein klar
              umrissener Anwendungsfall, eine kleine saubere Wissensquelle, eine
              Pilotgruppe und erst danach die Erweiterung. Wer so vorgeht, hat
              in wenigen Tagen einen Agent, der echte Arbeit abnimmt, statt einen
              beeindruckenden Prototyp, der im Alltag durchfällt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Ihr wollt den ersten Agent nicht allein aufsetzen, sondern mit
              einem Partner, der den Weg von Scoping über Governance bis zum
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
                    "Brauche ich Programmierkenntnisse, um einen Copilot Agent zu erstellen?",
                  answer:
                    "Nein. Copilot Studio ist eine Low-Code-Plattform. Ein Agent wird in natürlicher Sprache beschrieben, Wissensquellen und Aktionen werden per Oberfläche angebunden. Für eigene REST-Schnittstellen oder komplexe Power-Automate-Flows hilft technisches Verständnis, zwingend nötig ist es für den ersten Agent nicht.",
                },
                {
                  question:
                    "Was ist der Unterschied zwischen Copilot Studio und dem Microsoft 365 Copilot?",
                  answer:
                    "Der Microsoft 365 Copilot ist der fertige Assistent in Word, Excel, Outlook und Teams. Copilot Studio ist das Werkzeug, mit dem man eigene Agenten baut, die auf eigene Daten zugreifen und eigene Aktionen ausführen. Beide ergänzen sich: ein in Copilot Studio gebauter Agent kann im M365 Copilot veröffentlicht werden.",
                },
                {
                  question:
                    "Wie werden Copilot Studio Agenten abgerechnet?",
                  answer:
                    "Die Abrechnung erfolgt nachrichtenbasiert. Jede Interaktion verbraucht Kontingent, wobei generative und autonome Aktionen mehr verbrauchen als einfache Antworten. Kapazität lässt sich als festes Paket oder nutzungsbasiert über Azure buchen. Die genauen Zahlen stehen im Abschnitt zu Lizenzen und Kosten.",
                },
                {
                  question:
                    "Ist Copilot Studio für deutsche Unternehmen DSGVO-konform nutzbar?",
                  answer:
                    "Mit korrekter Konfiguration ja. Copilot Studio läuft im Microsoft-Tenant und unterliegt dem EU Data Boundary. Entscheidend sind die richtige Environment- und DLP-Strategie, saubere Berechtigungen auf den Wissensquellen und die Prüfung, wo Inferenz stattfindet. Details im Governance-Abschnitt.",
                },
                {
                  question:
                    "Wann ist ein anderer Weg als Copilot Studio sinnvoller?",
                  answer:
                    "Wenn maximale Datenhoheit, Self-Hosting oder Integrationen weit über die Microsoft-Welt hinaus gefragt sind, ist ein tool-agnostischer Weg mit n8n und einem Sprachmodell oft die bessere Wahl. Geht es nur um Produktivität in den Office-Apps, reicht häufig der M365 Copilot ohne eigenen Agent.",
                },
              ]}
            >
              <FaqContainer.Headline>Häufige Fragen</FaqContainer.Headline>
            </FaqContainer>
          </div>
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          <BlogLayout.NavigationItem idLink="was-ist-copilot-studio">
            Was ist Copilot Studio
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="bausteine">
            Die vier Bausteine
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="agent-bauen">
            Schritt für Schritt
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="autonome-agents">
            Autonome Agents
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="lizenzen-kosten">
            Lizenzen und Kosten
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="governance">
            Governance und DSGVO
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="use-cases">
            Use Cases
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="fallen">
            Typische Fallen
          </BlogLayout.NavigationItem>
          <BlogLayout.NavigationItem idLink="abgrenzung">
            Copilot Studio vs n8n
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
