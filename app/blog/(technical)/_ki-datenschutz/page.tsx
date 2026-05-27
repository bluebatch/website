import type { Metadata } from "next";
import type { BlogTagId } from "@/lib/blog-tags";
import type { BlogMeta } from "@/lib/meta-custom";
import Link from "next/link";
import Typo from "@/components/ui/typo";
import DataTable from "@/components/ui/data-table";
import { FaqContainer } from "@/components/ui/faqs";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";

export const metaCustom: BlogMeta = {
  slug: "ki-datenschutz",
  author: "Max Hänsel",
  date: "2026-06-19",
  image: "/blog/ki-datenschutz/hero.png",
  tags: ["ki", "datenschutz"] as BlogTagId[],
  publish: true,
};

export const metadata: Metadata = {
  title:
    "KI Datenschutz 2026: DSGVO-konforme KI-Nutzung im Mittelstand | Bluebatch",
  description:
    "Wie deutsche Unternehmen KI 2026 DSGVO-konform einsetzen: AVV, EU-Datenresidenz, Microsoft Flex Routing, AI Act Stichtage, Mitarbeiterdaten und 10-Punkte-Checkliste.",
  openGraph: {
    title:
      "KI Datenschutz 2026: DSGVO-konforme KI-Nutzung im Mittelstand",
    description:
      "Der praktische Leitfaden zu DSGVO + KI für deutsche Unternehmen: Verträge, Datenresidenz, Tooling-Wahl und der 90-Tage-Compliance-Plan.",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/blog/ki-datenschutz/hero.png",
        width: 1200,
        height: 630,
        alt: "KI Datenschutz und DSGVO im deutschen Mittelstand 2026",
      },
    ],
  },
  alternates: {
    canonical: "/blog/ki-datenschutz",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>
          KI Datenschutz 2026: DSGVO-konforme KI-Nutzung im deutschen Mittelstand
        </BlogHero.Headline>

        <BlogHero.Meta>
          <BlogHero.Author
            image="/mh-small.webp"
            linkedIn="https://www.linkedin.com/in/maximilianhaensel/"
          >
            Max Hänsel
          </BlogHero.Author>
          <BlogHero.ReadTime>14 Min. Lesezeit</BlogHero.ReadTime>
          <BlogHero.Date dateTime="2026-06-19">
            19. Juni 2026
          </BlogHero.Date>
        </BlogHero.Meta>

        <BlogHero.Image
          src="/blog/ki-datenschutz/hero.png"
          alt="KI Datenschutz und DSGVO im deutschen Mittelstand 2026"
        />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          <div>
            <Typo.H2 id="status-quo">
              Warum KI und Datenschutz 2026 ein operatives Problem geworden ist
            </Typo.H2>
            <Typo.Paragraph>
              Bis vor zwei Jahren war Datenschutz bei KI vor allem eine Vertragsfrage. Man kaufte ein
              Enterprise-Abo, ließ den Datenschutzbeauftragten die AVV gegenzeichnen und konnte
              loslegen. Seit dem 25. März 2026 ist das nicht mehr genug. Microsoft hat mit dem
              Flex-Routing-Feature das Routing von Copilot-Anfragen verändert, der AI Act ist seit
              Februar 2025 mit KI-Kompetenzpflicht und Art.-5-Verboten aktiv, und die
              Sub-Processor-Listen der großen US-Anbieter wachsen schneller, als die meisten
              Mittelständler nachhalten können.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für ein deutsches Unternehmen mit 50 bis 1.000 Mitarbeitenden bedeutet das: Die
              ehrliche Antwort auf die Frage <em>„Dürfen wir ChatGPT, Copilot oder Claude nutzen?"</em>
              hängt nicht mehr nur am Vertrag, sondern an drei Dingen gleichzeitig &mdash; dem
              Datenfluss, der Vertragslage und der Infrastruktur. Wer diese drei Layer sauber trennt,
              kommt schnell zu einer belastbaren Tool-Entscheidung. Wer sie vermischt, baut sich ein
              Compliance-Risiko, das im Worst Case erst bei einer Beschwerde der Datenschutzaufsicht
              auffliegt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Dieser Leitfaden bündelt die wichtigsten DSGVO- und AI-Act-Pflichten für die KI-Nutzung
              im deutschen Mittelstand. Er nennt die typischen Fallen, die wir bei Tool-Auswahl und
              Rollout in Mittelstandsunternehmen immer wieder sehen, ordnet die drei großen
              Werkzeug-Optionen (Hosted SaaS, Managed Private, Eigenbau) ein und schließt mit einem
              90-Tage-Compliance-Plan, der ohne externe Anwaltskanzlei umsetzbar ist.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="drei-layer">
              Die drei Layer der DSGVO-konformen KI
            </Typo.H2>
            <Typo.Paragraph>
              In der Praxis lohnt es sich, KI-Datenschutz nicht als eine große Compliance-Übung zu
              behandeln, sondern als drei getrennte Layer mit jeweils eigenen Fragen, Verantwortlichen
              und Nachweisen. Das macht das Thema beherrschbar und stellt sicher, dass keiner der drei
              Layer in der Tool-Bewertung übersehen wird.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-datenschutz/dsgvo-3-layer.png"
              alt="Drei Layer DSGVO-konforme KI Datenebene Vertragsebene Infrastrukturebene"
              width={1200}
              height={630}
            />

            <Typo.H3>Layer 1: Die Datenebene</Typo.H3>
            <Typo.Paragraph>
              Auf der Datenebene geht es um die einzelne Anfrage. Welche personenbezogenen Daten
              fließen in den Prompt? Müssen sie überhaupt darin stehen? Drei Hebel sind hier
              entscheidend: Anonymisierung (Daten so umschreiben, dass kein Personenbezug mehr
              herstellbar ist), Pseudonymisierung (Namen, Mailadressen und IDs durch Platzhalter
              ersetzen, Schlüssel separat aufbewahren) und Datenminimierung (nur das hochladen, was
              wirklich gebraucht wird).
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer die Datenebene sauber hat, reduziert das Risiko der oberen Layer drastisch. Ein
              KI-Prompt ohne personenbezogene Daten unterliegt nicht der DSGVO und braucht weder AVV
              noch EU-Datenresidenz. Praktisch ist das selten erreichbar, aber je näher man daran
              kommt, desto entspannter ist die Tool-Wahl. In Steuerberatungs- und Anwaltskanzleien
              wird die Datenebene heute oft mit Microsoft Presidio oder dedizierten NER-Modellen
              automatisch redigiert, bevor Prompts an externe Modelle gehen.
            </Typo.Paragraph>

            <Typo.H3>Layer 2: Die Vertragsebene</Typo.H3>
            <Typo.Paragraph>
              Auf der Vertragsebene gilt der altbekannte Klassiker: Sobald personenbezogene Daten an
              einen Dienstleister gehen, braucht es einen Auftragsverarbeitungsvertrag nach Art. 28
              DSGVO. Bei ChatGPT Enterprise heißt das Dokument <em>Data Processing Addendum</em>, bei
              Microsoft 365 Copilot ist es Teil des <em>Microsoft Products and Services DPA</em>, bei
              Anthropic Claude Enterprise der <em>Anthropic Data Processing Agreement</em>. Free-,
              Plus- und Team-Varianten bieten in der Regel keinen unterschriebenen AVV im Sinne der
              DSGVO und sind damit für betrieblichen Einsatz nicht zulässig.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Der zweite Pflichtbestandteil auf der Vertragsebene ist die Sub-Processor-Liste. Jeder
              KI-Anbieter setzt unter sich weitere Dienstleister ein &mdash; meistens Hyperscaler wie
              Microsoft Azure, AWS oder Google Cloud, dazu Logging-Anbieter, Monitoring-Tools und
              regional unterschiedliche Support-Provider. Wer einen AVV unterzeichnet, akzeptiert
              diese Kette mit. Sie sollte mindestens einmal im Quartal geprüft werden, denn Anbieter
              fügen ohne große Ankündigung neue Sub-Processor hinzu.
            </Typo.Paragraph>

            <Typo.H3>Layer 3: Die Infrastrukturebene</Typo.H3>
            <Typo.Paragraph>
              Die Infrastrukturebene ist der Layer, an dem 2026 die meisten Mittelstands-Projekte
              hängen. Hier geht es um die physische Frage: <em>Wo verarbeitet das Modell meinen
              Prompt?</em> EU-Datenresidenz heißt nicht nur, dass die Rechnung aus Dublin kommt,
              sondern dass die Token tatsächlich auf einem Server in der EU laufen, dort verarbeitet
              und dort gespeichert werden. Drei Aspekte sind heute kritisch.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Default-Region prüfen:</strong> Die meisten Hosted-SaaS-Angebote routen
                standardmäßig nach freier Kapazität, nicht nach Datenresidenz. EU-Routing muss aktiv
                angefordert oder im Tenant erzwungen werden.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Trainings-Opt-out:</strong> Auch bei Enterprise-Plänen muss in den
                Admin-Einstellungen verifiziert werden, dass Geschäftsdaten nicht für Modell-Training
                verwendet werden. Bei einigen Anbietern ist das Default, bei anderen aktiv zu setzen.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Zero-Retention:</strong> Wer besonders schützenswerte Daten verarbeitet, sollte
                die Zero-Retention-Option der API nutzen. Damit speichert der Anbieter Prompts und
                Antworten nicht über die unmittelbare Verarbeitung hinaus.
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fuenf-fallen">
              Die fünf typischen Fallen bei KI im Unternehmen
            </Typo.H2>
            <Typo.Paragraph>
              Aus unseren Beratungsgesprächen mit Mittelstandsunternehmen taucht immer wieder
              dasselbe Set an Fallen auf. Wer diese fünf Punkte vor dem Rollout abklärt, hat den
              Großteil des Compliance-Risikos im Griff.
            </Typo.Paragraph>

            <Typo.H3>Falle 1: Free- und Plus-Pläne im Schatten-IT-Einsatz</Typo.H3>
            <Typo.Paragraph>
              Ein einzelner Mitarbeiter, der mit dem privaten ChatGPT-Plus-Account einen
              Kundenvertrag zusammenfasst, ist DSGVO-rechtlich ein Datenleck. Es gibt keinen AVV
              zwischen Unternehmen und OpenAI, der Mitarbeiter hat ohne Weisung
              personenbezogene Daten an einen Dritten übermittelt. Die einzige saubere Lösung: ein
              unternehmensweiter Enterprise-Plan plus klare Richtlinie, die private Plus-Accounts
              für Arbeitsdaten verbietet.
            </Typo.Paragraph>

            <Typo.H3>Falle 2: US-Provider ohne nachweisbare EU-Datenresidenz</Typo.H3>
            <Typo.Paragraph>
              Seit dem EU-US Data Privacy Framework von 2023 ist die Übermittlung an
              US-zertifizierte Dienstleister wieder möglich, aber das Framework allein ersetzt keine
              EU-Datenresidenz. Wer mit Mitarbeiter-, Mandanten- oder Patientendaten arbeitet, sollte
              Anbieter wählen, die Daten in einer EU-Region verarbeiten und das vertraglich
              zusichern &mdash; nicht nur per Marketing-Aussage.
            </Typo.Paragraph>

            <Typo.H3>Falle 3: Microsoft Flex Routing 2026</Typo.H3>
            <Typo.Paragraph>
              Microsoft hat am 25. März 2026 das Feature Flex Routing eingeführt und es ab dem
              17. April schrittweise ausgerollt. Es erlaubt, LLM-Inferenz von M365-Copilot-Anfragen
              bei Lastspitzen in den USA, Kanada oder Australien laufen zu lassen, statt sie in der
              EU Data Boundary zu halten. Daten im Ruhezustand bleiben in der EU, die eigentliche
              KI-Verarbeitung kann aber das Drittland berühren.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-datenschutz/flex-routing-trap.png"
              alt="Microsoft Flex Routing Default-Verhalten M365 Copilot 2026"
              width={1200}
              height={630}
            />

            <Typo.Paragraph>
              Der wirklich kritische Punkt ist der Default-Zustand: Für alle Tenants, die nach dem
              25. März 2026 erstellt wurden, ist Flex Routing standardmäßig <em>aktiv</em>. Ein
              frisch aufgesetzter deutscher Tenant transportiert seine Copilot-Prompts also per Default
              in Drittländer, ohne dass der Administrator das aktiv eingestellt hat. Wer EU-Routing
              erzwingen will, geht in Microsoft 365 Admin Center → Copilot → Settings → View all →
              Flex routing during peak load periods und wählt Do not allow flex routing. In
              Multi-Geo-Tenants ist diese Option nicht verfügbar; solche Setups sind ohnehin nicht
              unter der EU Data Boundary geführt.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wer einen tieferen Blick auf die M365-Copilot-Lizenzfrage werfen will, findet im Beitrag
              {" "}<Link href="/blog/microsoft-365-copilot-kosten">Microsoft 365 Copilot Kosten</Link>{" "}
              die kommerzielle Seite dieser Entscheidung &mdash; inklusive Hinweis auf die
              Datenresidenz-Aufschläge.
            </Typo.Paragraph>

            <Typo.H3>Falle 4: Sub-Processor-Kette unter Drittländern</Typo.H3>
            <Typo.Paragraph>
              Selbst wenn der Hauptvertrag mit einem EU-Dienstleister geschlossen wird, kann die
              Sub-Processor-Kette Daten in Drittländer leiten. Ein typisches Beispiel: Ein deutsches
              Unternehmen nutzt einen DSGVO-konform vermarkteten KI-Wrapper, der intern auf ChatGPT
              Enterprise greift, das wiederum Azure als Sub-Processor hat. Wenn der Wrapper-Anbieter
              die Region nicht zwingt, läuft die Anfrage potenziell durch fünf Hände. Jeder dieser
              Knoten muss im AVV oder als Sub-Processor genannt sein, sonst ist die Verarbeitung
              nicht abgedeckt.
            </Typo.Paragraph>

            <Typo.H3>Falle 5: Mitarbeiterdaten in Prompts ohne BetrVG-Klärung</Typo.H3>
            <Typo.Paragraph>
              Sobald KI-Tools im Arbeitskontext eingesetzt werden, greift &sect; 87 Abs. 1 Nr. 6
              BetrVG: Der Betriebsrat hat ein Mitbestimmungsrecht bei der Einführung technischer
              Einrichtungen, die zur Verhaltens- oder Leistungskontrolle geeignet sind. M365 Copilot,
              ChatGPT Enterprise und Claude Enterprise fallen darunter, weil Admin-Dashboards
              Nutzungsdaten erfassen. Wer ohne Betriebsvereinbarung ausrollt, riskiert eine einstweilige
              Verfügung und einen Stopp des Rollouts. Zusätzlich greift Art. 88 DSGVO i.V.m. &sect; 26
              BDSG bei der Verarbeitung von Beschäftigtendaten.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="tool-landschaft">
              Tool-Landschaft 2026: Drei Wege zur DSGVO-konformen KI
            </Typo.H2>
            <Typo.Paragraph>
              In den letzten Monaten haben sich drei klare Wege herausgebildet, wie deutsche
              Unternehmen KI rechtssicher einsetzen. Jeder Weg hat eine andere Kontroll- und
              Aufwands-Balance. Es gibt keinen objektiv besten &mdash; die richtige Wahl hängt von
              Daten-Sensitivität, IT-Reife und Budget ab.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-datenschutz/tool-landscape.png"
              alt="DSGVO-Werkzeugkasten KI 2026 Hosted Managed Private Eigenbau"
              width={1200}
              height={630}
            />

            <DataTable>
              <DataTable.Head>
                <DataTable.Row>
                  <DataTable.HeaderCell>Kriterium</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Hosted SaaS</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Managed Private</DataTable.HeaderCell>
                  <DataTable.HeaderCell>Eigenbau</DataTable.HeaderCell>
                </DataTable.Row>
              </DataTable.Head>
              <DataTable.Body>
                <DataTable.Row>
                  <DataTable.Cell bold>Typische Vertreter</DataTable.Cell>
                  <DataTable.Cell>ChatGPT Enterprise, M365 Copilot, Claude Enterprise</DataTable.Cell>
                  <DataTable.Cell>Azure OpenAI EU, AWS Bedrock Claude, OpenAI on Azure DE</DataTable.Cell>
                  <DataTable.Cell>Ollama, LM Studio, n8n + EU-LLM</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>AVV-Lage</DataTable.Cell>
                  <DataTable.Cell>Standard-AVV des Anbieters</DataTable.Cell>
                  <DataTable.Cell>AVV des Hyperscalers</DataTable.Cell>
                  <DataTable.Cell>Kein AVV nötig, da Eigenbetrieb</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>EU-Datenresidenz</DataTable.Cell>
                  <DataTable.Cell>Aktivierbar, nicht immer Default</DataTable.Cell>
                  <DataTable.Cell>Vertraglich zusicherbar</DataTable.Cell>
                  <DataTable.Cell>Volle Kontrolle</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Sub-Processor-Kette</DataTable.Cell>
                  <DataTable.Cell>Lang, herstellerabhängig</DataTable.Cell>
                  <DataTable.Cell>Kürzer, ein Hyperscaler</DataTable.Cell>
                  <DataTable.Cell>Keine externe Kette</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Modell-Aktualität</DataTable.Cell>
                  <DataTable.Cell>Frontier-Modelle direkt</DataTable.Cell>
                  <DataTable.Cell>Mit kurzer Verzögerung</DataTable.Cell>
                  <DataTable.Cell>Open-Source-Modelle, oft 6-12 Monate hinterher</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Setup-Aufwand</DataTable.Cell>
                  <DataTable.Cell>2 bis 4 Wochen</DataTable.Cell>
                  <DataTable.Cell>6 bis 12 Wochen</DataTable.Cell>
                  <DataTable.Cell>3 bis 6 Monate</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Laufende Kosten 100 Nutzer</DataTable.Cell>
                  <DataTable.Cell>ca. 6.000 EUR / Monat</DataTable.Cell>
                  <DataTable.Cell>ca. 12.000 EUR / Monat (Compute + Reserved)</DataTable.Cell>
                  <DataTable.Cell>ca. 4.000 EUR / Monat (Hardware + Ops)</DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell bold>Ideal für</DataTable.Cell>
                  <DataTable.Cell>Office-Produktivität, Standard-Use-Cases</DataTable.Cell>
                  <DataTable.Cell>Sensible Daten + Frontier-Modelle</DataTable.Cell>
                  <DataTable.Cell>Hochsensible Daten, kontinuierlicher Hochlastbetrieb</DataTable.Cell>
                </DataTable.Row>
              </DataTable.Body>
            </DataTable>

            <Typo.H3>Hosted SaaS: Der pragmatische Default</Typo.H3>
            <Typo.Paragraph>
              Für 80 Prozent der Office-Use-Cases im Mittelstand ist Hosted SaaS die richtige Wahl.
              Microsoft 365 Copilot, ChatGPT Enterprise und Claude Enterprise bieten unterschriebene
              AVV, SSO, ISO-27001-Zertifizierung und EU-Datenresidenz auf Wunsch. Der Aufwand ist
              minimal, die Kosten sind kalkulierbar. Wer Schritt-für-Schritt-Vergleiche zwischen den
              drei Anbietern braucht, findet sie im Beitrag
              {" "}<Link href="/blog/claude-cowork-vs-copilot-chatgpt">Claude vs Copilot vs ChatGPT
              </Link>.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Tooling-Auswahl auf dieser Stufe ist primär eine Frage des Ökosystems. Microsoft-Häuser
              landen meistens bei Copilot, weil die Integration in Outlook und Teams entscheidet.
              OpenAI-affine Unternehmen wählen ChatGPT Enterprise. Wer Wert auf besonders strenge
              Datenpolitik legt, prüft Claude Enterprise. Eine reine DSGVO-Vergleichstabelle hilft hier
              nur bedingt &mdash; alle drei sind in den Enterprise-Plänen vertraglich vergleichbar
              aufgestellt. Eine vertiefte Tool-Liste findet sich in
              {" "}<Link href="/blog/dsgvo-konforme-ki-tools">DSGVO-konforme KI-Tools</Link>.
            </Typo.Paragraph>

            <Typo.H3>Managed Private: Wenn Hosted nicht reicht</Typo.H3>
            <Typo.Paragraph>
              Sobald besonders sensible Daten ins Spiel kommen &mdash; Personalakten, Mandanten- oder
              Patientendaten, Strategiedokumente &mdash; lohnt der Sprung zu Managed Private. AWS
              Bedrock in Frankfurt eu-central-1 betreibt heute 31 KI-Modelle, darunter Claude Opus 4.7
              seit etwa April 2026, und ist damit die ausgereifteste EU-Option für Anthropic-Modelle.
              Azure OpenAI Service stellt GPT-5 in Sweden Central und West Europe als EU Data Zone
              bereit, in der Daten und Inferenz die EU nicht verlassen. Frankfurt (Germany West
              Central) hat ein eingeschränktes Modell-Portfolio mit eher älteren GPT-4o- und
              GPT-4-Varianten. Beides ist teurer als Hosted SaaS, weil Compute reserviert wird, aber
              es bringt zwei Vorteile: Eine kürzere Sub-Processor-Kette und die Möglichkeit, das
              Modell in einen privaten VPC-Kontext einzubinden. Tiefere Einordnung im Beitrag
              {" "}<Link href="/blog/claude-cowork-managed-private">Claude Cowork als Managed
              Private auf Bedrock</Link>.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Wichtige Ergänzung für 2026: OpenAI hat seit Februar 2025 EU-Datenresidenz für Storage
              und seit Januar 2026 auch für Inference angeboten. Das heißt, ChatGPT Enterprise und
              Edu können auf Wunsch komplett in EU-Rechenzentren laufen, ohne Aufpreis. Aktiviert
              wird das beim Workspace-Setup &mdash; für bestehende Workspaces ist es nicht der
              Default und muss bei OpenAI Enterprise Sales nachträglich angefordert werden.
            </Typo.Paragraph>

            <Typo.H3>Eigenbau: Volle Kontrolle, eigene Ops-Last</Typo.H3>
            <Typo.Paragraph>
              Eigenbau bedeutet ein lokales LLM auf eigener Hardware, meistens mit Ollama oder
              LM Studio als Runtime, dazu eine Workflow-Schicht (häufig n8n) für die Anbindung an
              vorhandene Systeme. Diese Variante eliminiert die DSGVO-Frage faktisch, weil keine Daten
              das eigene Rechenzentrum verlassen. Sie verlangt aber eine eigene Ops-Mannschaft: GPU-
              Server provisionieren, Modelle aktualisieren, Monitoring und Backup aufsetzen. Wer ohne
              eigene IT-Tiefe in diese Richtung will, sollte mindestens einen Managed-Service-Partner
              hinzuziehen.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="ai-act">
              EU AI Act: Der aktuelle Zeitplan nach dem Digital Omnibus
            </Typo.H2>
            <Typo.Paragraph>
              Der AI Act ist seit August 2024 in Kraft, wirkt aber gestaffelt. Wichtig: Am
              7. Mai 2026 hat die EU-Kommission mit dem Digital Omnibus on AI mehrere Stichtage
              verschoben. Viele Ratgeber online sind noch nicht auf dem aktuellen Stand. Für den
              Mittelstand sind heute fünf Daten relevant, von denen drei bereits aktiv sind.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-datenschutz/ai-act-timeline.png"
              alt="EU AI Act Roadmap Stichtage nach Digital Omnibus 2026"
              width={1200}
              height={630}
            />

            <Typo.H3>02. Februar 2025 (aktiv): Verbote und KI-Kompetenzpflicht</Typo.H3>
            <Typo.Paragraph>
              Seit Februar 2025 sind die verbotenen KI-Praktiken nach Art. 5 AI Act untersagt:
              biometrisches Echtzeit-Tracking in öffentlichen Räumen, KI-basiertes Social Scoring
              und Emotionserkennung am Arbeitsplatz. Wer ohne Vorprüfung ein KI-Tool im Recruiting
              einsetzt, das Emotionen aus Videointerviews extrahiert, ist betroffen. Parallel gilt
              die Pflicht aus Art. 4: Wer KI im Unternehmen einsetzt oder betreibt, muss die
              KI-Kompetenz seiner Mitarbeitenden sicherstellen &mdash; dokumentiert und nachweisbar.
              Eine jährliche Schulung mit Protokoll reicht in der Regel aus, sie muss aber stattfinden.
            </Typo.Paragraph>

            <Typo.H3>02. August 2025 (aktiv): GPAI-Regeln und Governance</Typo.H3>
            <Typo.Paragraph>
              Seit August 2025 gelten die Pflichten für Anbieter von General Purpose AI Models
              (GPAI). Das betrifft Mittelständler indirekt: Wer ChatGPT, Copilot oder Claude
              einsetzt, muss prüfen, ob der Anbieter die GPAI-Pflichten erfüllt und entsprechende
              Dokumentation bereitstellt. Gleichzeitig sind nationale Aufsichtsstrukturen seit
              diesem Datum eingerichtet.
            </Typo.Paragraph>

            <Typo.H3>02. August 2026: Sanktionen, Transparenzpflichten, BSI-Marktaufsicht</Typo.H3>
            <Typo.Paragraph>
              Im August 2026 werden die Sanktionen voll durchsetzbar &mdash; bis zu 35 Millionen
              Euro oder 7 Prozent des weltweiten Jahresumsatzes für die schwersten Verstöße. In
              Deutschland übernimmt das BSI ab diesem Datum die Marktaufsicht. Gleichzeitig greifen
              die Transparenzpflichten nach Art. 50: KI-erzeugte Texte, Bilder und Videos müssen als
              solche gekennzeichnet werden, sobald sie öffentlich oder gegenüber Kunden verwendet
              werden. Chatbots müssen ihren KI-Charakter offenlegen. Bis zu diesem Stichtag muss
              außerdem die KI-Tool-Inventarisierung vorliegen.
            </Typo.Paragraph>

            <Typo.H3>02. Dezember 2027: Hochrisiko-KI nach Anhang III</Typo.H3>
            <Typo.Paragraph>
              Verschoben vom ursprünglichen 02. August 2026: Pflichten für eigenständige
              Hochrisiko-KI nach Anhang III. Das betrifft HR-Recruiting-KI, Kreditscoring,
              kritische Infrastruktur und Bildungseinsatz. Konformitätsbewertungen,
              Risikomanagement-Systeme und CE-Kennzeichnung werden Pflicht.
            </Typo.Paragraph>

            <Typo.H3>02. August 2028: Hochrisiko-KI in Produkten</Typo.H3>
            <Typo.Paragraph>
              Ein Jahr später greifen die vollen Anforderungen für Hochrisiko-KI eingebettet in
              Produkten nach Anhang I &mdash; Maschinen, Medizinprodukte, Aufzüge. Wer Produkte mit
              KI-Komponenten in den EU-Markt bringt, braucht bis dahin Konformitätsbewertung,
              technische Dokumentation und Risikomanagement.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="mitarbeiter">
              Mitarbeitende, Betriebsrat und Art. 88 BDSG
            </Typo.H2>
            <Typo.Paragraph>
              Wer KI im Arbeitskontext nutzt, verarbeitet zwangsläufig Beschäftigtendaten &mdash; auch
              wenn das Tool primär für externe Texte gedacht ist. Schon das Logging der Nutzung
              ergibt eine personenbezogene Datenbasis, die unter Art. 88 DSGVO i.V.m. &sect; 26 BDSG
              fällt. Drei Schritte gehören in jedes Rollout-Konzept.
            </Typo.Paragraph>
            <Typo.List>
              <Typo.ListItem>
                <strong>Betriebsvereinbarung statt Einzeleinwilligung:</strong> Im
                Beschäftigungskontext ist die Einwilligung als Rechtsgrundlage schwach, weil das
                Abhängigkeitsverhältnis die Freiwilligkeit untergräbt. Eine Betriebsvereinbarung
                nach &sect; 87 BetrVG ist die sauberere Lösung und erfüllt gleichzeitig die
                Mitbestimmung des Betriebsrats. IG Metall NRW (Working Paper Mustertexte KI-BV),
                ver.di (Rahmen-BV V1.1) und die HUMAINE-Toolbox bieten frei verfügbare Muster-BVs
                für generative KI.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>DSFA für Tools mit Nutzungstracking:</strong> Sobald ein Tool wie M365
                Copilot ausführliche Nutzungsanalysen je Mitarbeitendem ermöglicht, ist eine
                Datenschutz-Folgenabschätzung nach Art. 35 DSGVO empfehlenswert &mdash; in vielen
                Fällen sogar verpflichtend.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>Schulungs- und Informationspflicht:</strong> Mitarbeitende müssen wissen, was
                das Tool tut, welche Daten erfasst werden und wie die Sicherheits- und
                Compliance-Anforderungen sind. Das deckt gleichzeitig die KI-Kompetenz-Pflicht aus
                Art. 4 AI Act ab.
              </Typo.ListItem>
            </Typo.List>
            <Typo.Paragraph>
              Eine wichtige Abgrenzung kommt aus dem Beschluss des Arbeitsgerichts Hamburg vom
              16. Januar 2024: Wenn Mitarbeitende ChatGPT über <em>private</em> Accounts nutzen, hat
              der Betriebsrat keine Mitbestimmung &mdash; der Arbeitgeber hat keinen Zugriff auf
              Nutzungsdaten. Sobald aber ein Unternehmenslizenz-Workspace verteilt wird (M365
              Copilot, ChatGPT Enterprise, Claude Enterprise), greift &sect; 87 Abs. 1 Nr. 6 BetrVG
              sofort und der Rollout ist ohne Betriebsvereinbarung blockierbar.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="branchen">
              Branchen mit besonderer Sensitivität
            </Typo.H2>
            <Typo.Paragraph>
              Für einige Branchen reicht die DSGVO-Grundkonfiguration nicht aus. Berufsrechtliche
              Verschwiegenheitspflichten gehen über die DSGVO hinaus und schränken die Wahl der
              KI-Tools zusätzlich ein.
            </Typo.Paragraph>

            <Typo.H3>Steuerberatung und Anwaltschaft</Typo.H3>
            <Typo.Paragraph>
              Steuerberater unterliegen der Verschwiegenheitspflicht nach &sect; 57 StBerG, Anwälte
              nach &sect; 43a BRAO und beide zusätzlich dem strafrechtlichen Geheimnisschutz nach
              &sect; 203 StGB &mdash; bewehrt mit Freiheitsstrafe bis zu einem Jahr oder Geldstrafe.
              Das heißt: Mandantendaten dürfen nicht ohne weitere Verschwiegenheitsvereinbarung in
              eine Cloud-KI eingegeben werden, auch nicht mit AVV. Die Bundessteuerberaterkammer hat
              am 11. Februar 2026 den FAQ-Katalog &bdquo;KI in Steuerkanzleien&ldquo; publiziert und
              empfiehlt darin einen Pseudonymisierungsschritt vor jeder externen Verarbeitung. Die
              BRAK hat in ihrem Leitfaden zum KI-Einsatz (Stand Dezember 2024) klar gemacht: Eine
              reine DSGVO-AVV genügt für Mandatsgeheimnisse nicht, zusätzliche
              Verschwiegenheitsvereinbarungen sind erforderlich. Wer in einer Kanzlei oder Beratung
              mit KI arbeitet, findet vertiefende Hinweise im Hub
              {" "}<Link href="/blog/ki-steuerberater">KI für Steuerberater</Link>.
            </Typo.Paragraph>

            <Typo.H3>Heilberufe und Banken</Typo.H3>
            <Typo.Paragraph>
              Für Ärzte, Therapeuten und psychologische Praxen greift &sect; 203 StGB ebenfalls, dazu
              kommen Vorgaben aus dem SGB V. Patientendaten fallen unter Art. 9 DSGVO (besondere
              Kategorien). Eine externe Cloud-KI-Verarbeitung ist hier praktisch nur mit On-Premise
              oder europäischer souveräner Cloud (Aleph Alpha, IONOS AI, Open-Source-LLMs in
              EU-Rechenzentren) darstellbar. Banken stehen vor &sect; 25a KWG, MaRisk AT 9 und seit
              dem 17. Januar 2025 DORA. Die BaFin hat im Dezember 2025 die Orientierungshilfe zu
              IKT-Risiken beim Einsatz von KI veröffentlicht, die KI als Teil des
              IKT-Risikomanagements unter DORA einordnet &mdash; inklusive Exit-Strategie-Pflicht für
              kritische Funktionen nach Art. 28 Abs. 7/8 DORA.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="checkliste">
              DSGVO-Checkliste KI-Tool-Auswahl
            </Typo.H2>
            <Typo.Paragraph>
              Vor jeder KI-Tool-Einführung sollten zehn Punkte abgehakt sein. Die Reihenfolge ist
              wichtig: Punkt 1 bis 4 bewerten den Anbieter, Punkt 5 bis 7 die technische Konfiguration,
              Punkt 8 bis 10 die interne Governance.
            </Typo.Paragraph>

            <BlogImage
              src="/blog/ki-datenschutz/compliance-checklist.png"
              alt="DSGVO-Checkliste KI-Tool-Auswahl 10 Punkte"
              width={1200}
              height={630}
            />

            <Typo.List>
              <Typo.ListItem>
                <strong>1. AVV nach Art. 28 DSGVO unterzeichnet:</strong> Im Enterprise-Plan
                vorhanden und vom Datenschutzbeauftragten geprüft.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>2. Sub-Processor-Liste eingesehen:</strong> Alle Sub-Processor sind benannt
                und in geeigneten Drittländern oder der EU.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>3. EU-Datenresidenz vertraglich zugesichert:</strong> Datenverarbeitung in
                einer EU-Region vertraglich verbindlich, nicht nur Marketing-Aussage.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>4. Default-Routing in EU geprüft:</strong> Aktiv im Admin-Bereich verifizieren,
                besonders bei Microsoft Flex Routing.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>5. Trainings-Opt-out aktiviert:</strong> Geschäftsdaten gehen nicht ins
                Modell-Training, dokumentiert im Admin Center.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>6. Zero-Retention für sensible Use-Cases:</strong> API-Endpunkte mit
                Zero-Retention für Prompts mit besonders schützenswerten Daten.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>7. KI-Kompetenz nach AI Act dokumentiert:</strong> Schulungsnachweise für
                alle Nutzenden ab Februar 2026.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>8. Mitarbeiterdaten nach Art. 88 BDSG geklärt:</strong> Verarbeitung von
                Beschäftigtendaten in der DSFA und Betriebsvereinbarung adressiert.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>9. Betriebsrat nach &sect; 87 BetrVG eingebunden:</strong>
                Betriebsvereinbarung für jedes KI-Tool mit Nutzungstracking.
              </Typo.ListItem>
              <Typo.ListItem>
                <strong>10. Datenschutz-Folgenabschätzung erstellt:</strong> DSFA nach Art. 35 DSGVO
                bei hohem Risiko, in den meisten KI-Tool-Einführungen empfehlenswert.
              </Typo.ListItem>
            </Typo.List>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="90-tage-plan">
              90-Tage-Compliance-Plan für den Mittelstand
            </Typo.H2>
            <Typo.Paragraph>
              Wer die DSGVO- und AI-Act-Anforderungen ohne externe Anwaltskanzlei umsetzen will,
              kommt mit einem strukturierten 90-Tage-Plan in den meisten Fällen ans Ziel. Drei
              30-Tage-Phasen, je drei klare Ergebnisse.
            </Typo.Paragraph>

            <Typo.H3>Phase 1 (Tag 1 bis 30): Inventur und Lückenanalyse</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                Eingesetzte und geduldete KI-Tools erfassen (auch Schatten-IT &mdash; einmal je
                Abteilung kurz nachfragen).
              </Typo.ListItem>
              <Typo.ListItem>
                Pro Tool kategorisieren: Plan, AVV-Status, Datenresidenz, Sub-Processor-Liste,
                Nutzergruppe.
              </Typo.ListItem>
              <Typo.ListItem>
                Lücken markieren: Welche Tools haben keinen AVV, welche keine EU-Datenresidenz,
                welche keine Mitarbeiter-Information?
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Phase 2 (Tag 31 bis 60): Konsolidierung und Verträge</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                Tool-Konsolidierung beschließen: Welche bleiben, welche werden ersetzt, welche
                abgeschaltet.
              </Typo.ListItem>
              <Typo.ListItem>
                AVV und DPA für alle verbleibenden Tools einholen und vom Datenschutzbeauftragten
                gegenzeichnen lassen.
              </Typo.ListItem>
              <Typo.ListItem>
                Betriebsvereinbarung mit dem Betriebsrat für alle Tools mit Nutzungstracking
                aufsetzen.
              </Typo.ListItem>
            </Typo.List>

            <Typo.H3>Phase 3 (Tag 61 bis 90): Schulung und Dokumentation</Typo.H3>
            <Typo.List>
              <Typo.ListItem>
                KI-Kompetenz-Schulung für alle Mitarbeitenden, Schulungsprotokolle ablegen.
              </Typo.ListItem>
              <Typo.ListItem>
                Datenschutz-Folgenabschätzung erstellen für die High-Impact-Tools.
              </Typo.ListItem>
              <Typo.ListItem>
                Internes Tool-Verzeichnis und Nutzungsrichtlinien veröffentlichen, Review-Zyklus
                jährlich festlegen.
              </Typo.ListItem>
            </Typo.List>

            <Typo.Paragraph>
              Wer diesen Plan abarbeitet, ist nicht nur DSGVO-konform aufgestellt, sondern hat
              gleichzeitig die Grundlage für die AI-Act-Anforderungen, die im August 2026 voll
              sanktionsbewehrt greifen. Im Großhandel-Kontext, in dem zusätzlich Lieferanten- und
              Kundenstammdaten in KI-Workflows einfließen, ist diese Inventur besonders wertvoll,
              weil sie die Grundlage für eine saubere Process-Mining-Erweiterung legt. Tiefere
              Einordnung im Hub
              {" "}<Link href="/blog/digitalisierung-grosshandel">Digitalisierung im Großhandel</Link>.
            </Typo.Paragraph>
          </div>

          <Separator />

          <div>
            <Typo.H2 id="faq">Häufige Fragen zu KI und Datenschutz</Typo.H2>
            <FaqContainer
              faqs={[
                {
                  question: "Darf ich ChatGPT Free oder Plus im Job nutzen?",
                  answer:
                    "Nein, nicht für Daten mit Personenbezug. Für Free- und Plus-Pläne gibt es keinen AVV nach Art. 28 DSGVO. Wer dort Kundendaten oder Mitarbeitendendaten hochlädt, übermittelt sie ohne Rechtsgrundlage an OpenAI. Eine unternehmensweite Enterprise-Lizenz löst das Problem und ist meist günstiger als befürchtet.",
                },
                {
                  question: "Was bedeutet Microsoft Flex Routing konkret für meinen Tenant?",
                  answer:
                    "Microsoft 365 Copilot Anfragen werden standardmäßig nach freier Modell-Kapazität geroutet, nicht nach Datenresidenz. Wer EU-Datenresidenz braucht, muss die EU Data Boundary aktiv in den Tenant-Einstellungen erzwingen. Das ist nicht der Default und sollte vor jedem Copilot-Rollout im Admin Center geprüft werden.",
                },
                {
                  question: "Reicht das EU-US Data Privacy Framework als Rechtsgrundlage?",
                  answer:
                    "Für sich genommen ja, sofern der Anbieter zertifiziert ist. In der Praxis sollte die EU-Datenresidenz zusätzlich vertraglich zugesichert sein, weil das Framework rechtlich angegriffen wird und die Verlässlichkeit über Jahre nicht garantiert ist. Wer EU-Datenresidenz hat, ist auch dann sicher, wenn das Framework fällt.",
                },
                {
                  question: "Welche AI-Act-Pflichten greifen für den Mittelstand schon 2026?",
                  answer:
                    "Seit Februar 2026 gelten die Verbote nach Art. 5 (etwa Emotionserkennung am Arbeitsplatz) und die KI-Kompetenz-Pflicht. Ab August 2026 sind nationale Aufsichtsbehörden aktiv und Sanktionen greifbar. Eine KI-Tool-Inventur und eine dokumentierte Schulung der Mitarbeitenden sind die zwei wichtigsten Pflichtaktivitäten in diesem Jahr.",
                },
                {
                  question: "Brauche ich für jedes KI-Tool eine Datenschutz-Folgenabschätzung?",
                  answer:
                    "Nicht für jedes, aber für die meisten mit personenbezogenen Daten. Eine DSFA ist nach Art. 35 DSGVO Pflicht bei hohem Risiko. Bei KI-Tools mit Nutzungstracking, automatisierten Entscheidungen oder umfangreicher Verarbeitung von Beschäftigtendaten ist sie in der Regel zu empfehlen, selbst wenn die formale Pflicht offen wäre.",
                },
                {
                  question: "Muss der Betriebsrat bei der Einführung von Copilot zustimmen?",
                  answer:
                    "Ja, sobald das Tool zur Verhaltens- oder Leistungskontrolle geeignet ist. Das ist bei M365 Copilot, ChatGPT Enterprise und Claude Enterprise der Fall, weil Admin-Dashboards Nutzungsdaten erfassen. &sect; 87 Abs. 1 Nr. 6 BetrVG verlangt eine Betriebsvereinbarung, ohne die der Rollout blockierbar ist.",
                },
                {
                  question: "Welche Strafe droht bei einem Verstoß gegen den AI Act?",
                  answer:
                    "Die Sanktionsstaffel reicht von bis zu 7,5 Millionen Euro oder 1,5 Prozent des Jahresumsatzes für leichte Verstöße bis zu 35 Millionen Euro oder 7 Prozent des weltweiten Umsatzes für verbotene Praktiken. Die ersten genAI-DSGVO-Bußgelder existieren bereits: Die italienische Datenschutzbehörde Garante hat OpenAI im Dezember 2024 mit 15 Millionen Euro und Luka Inc. (Replika) im Mai 2025 mit 5 Millionen Euro belegt. AI-Act-Sanktionen werden ab August 2026 voll durchsetzbar.",
                },
                {
                  question: "Gibt es eine DSGVO-konforme Alternative für Personalakten und Patientendaten?",
                  answer:
                    "Für besonders sensible Daten ist Managed Private (Azure OpenAI EU oder Claude auf AWS Bedrock in Frankfurt) der pragmatische Default. Wer komplett ohne Cloud auskommen will, baut auf Open-Source-Modellen (Llama, Mistral) im eigenen Rechenzentrum. Beide Wege erfordern mehr Setup, sind aber für die genannten Datenkategorien meist die einzig saubere Lösung.",
                },
              ]}
            />
          </div>

          <Separator />

          <div>
            <Typo.H2 id="fazit">Fazit: DSGVO-konforme KI ist machbar, nicht trivial</Typo.H2>
            <Typo.Paragraph>
              Wer 2026 in Deutschland KI einsetzen will, kommt um eine strukturierte
              Compliance-Inventur nicht herum. Die DSGVO ist nicht das Problem &mdash; sie ist mit
              den richtigen Verträgen, der richtigen Datenresidenz und einer sauberen
              Mitarbeiterkommunikation lösbar. Der AI Act erweitert die Anforderungen, aber er fragt
              vor allem nach Dokumentation und Bewusstsein, nicht nach Verboten. Das größere Risiko
              sind die operativen Fallen: Schatten-IT, Default-Routing in Drittländer, fehlende
              Betriebsvereinbarungen.
            </Typo.Paragraph>
            <Typo.Paragraph>
              Für die meisten Mittelständler ist der Weg klar: Ein Hosted-SaaS-Tool mit unterschriebenem
              AVV, aktiver EU-Datenresidenz und einer dokumentierten KI-Schulung deckt 80 Prozent der
              Use-Cases ab. Für die übrigen 20 Prozent &mdash; sensible Personal- oder Mandantendaten,
              Hochrisiko-Use-Cases &mdash; lohnt der zusätzliche Aufwand einer Managed-Private- oder
              Eigenbau-Lösung. Wer den 90-Tage-Plan in diesem Jahr abarbeitet, ist für die nächsten
              zwei Sanktionsstufen des AI Acts vorbereitet und kann KI ohne ständige
              Hintergrundsorge produktiv einsetzen.
            </Typo.Paragraph>
          </div>
        </BlogLayout.Content>
      </BlogLayout>
    </>
  );
}
