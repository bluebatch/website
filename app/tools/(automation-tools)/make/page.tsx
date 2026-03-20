import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import DataTable from "@/components/ui/data-table";
import ProsCons from "@/components/sections/pros-cons";
import IndustryFit from "@/components/sections/industry-fit";
import ToolComparisonTable from "@/components/sections/tool-comparison-table";
import SimpleCard from "@/components/cards/simple-card";
import IntroBox from "@/components/ui/intro-box";
import NumberedList from "@/components/ui/numbered-list";

export const metadata: Metadata = {
  title:
    "Make (Integromat) im Detail: Kosten, Grenzen & Vergleich mit n8n | Bluebatch",
  description:
    "Ehrliche Analyse von Make.com (ehemals Integromat): Preismodell mit Credits, echte Stärken und Grenzen, Vergleich mit n8n, Zapier & Power Automate. Was Make wirklich kostet und für wen es passt.",
  keywords:
    "Make Automatisierung, Make vs n8n, Make Kosten, Integromat Alternative, Make.com Preise, Make Credits, Make DSGVO, Workflow Automatisierung",
  openGraph: {
    title:
      "Make (Integromat) im Detail: Kosten, Grenzen & Vergleich mit n8n | Bluebatch",
    description:
      "Was kann Make wirklich? Ehrliche Analyse: Preismodell, Stärken, Schwächen und der direkte Vergleich mit n8n, Zapier und Power Automate.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Make Automatisierung Analyse und Vergleich",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Make (Integromat) im Detail: Kosten, Grenzen & Vergleich | Bluebatch",
    description:
      "Ehrliche Analyse von Make.com: Preismodell, Stärken, Schwächen und Vergleich mit n8n.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/tools/make",
  },
};

export default function Page() {
  return (
    <>
      {/* 1. Hero */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Tool-Analyse</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Make - die visuelle Automatisierungsplattform, ehrlich betrachtet
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Make (ehemals Integromat) gehört zu den meistgenutzten
              No-Code-Automatisierungsplattformen weltweit. Aber was kann das
              Tool wirklich, wo liegen die Grenzen, und wann lohnt sich ein
              Blick auf Alternativen? Eine fundierte Einordnung - ohne
              Marketing-Floskeln.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Automatisierung besprechen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Seit 2013 am Markt - 2+ Mio. Nutzer - 3.000+ Integrationen
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/technology-integration.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. Was ist Make? */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Überblick</IntroBox.PreHeadline>
          <IntroBox.Headline>Was ist Make - und woher kommt es?</IntroBox.Headline>
        </IntroBox>
        <Typo.Paragraph>
          Make wurde 2013 in Prag unter dem Namen &quot;Integromat&quot;
          gegründet - von sechs tschechischen Entwicklern rund um CTO Patrik
          Simek. Die Idee: eine Plattform, auf der Nutzer ohne
          Programmierkenntnisse komplexe Automatisierungen zwischen
          verschiedenen Web-Diensten aufbauen können. Nicht als einfache
          Wenn-Dann-Kette wie bei Zapier, sondern als echtes Flussdiagramm mit
          Verzweigungen, Schleifen und Datentransformationen.
        </Typo.Paragraph>
        <Typo.Paragraph>
          Im Oktober 2020 wurde Integromat für über 100 Millionen US-Dollar von
          Celonis übernommen - dem Münchner Process-Intelligence-Riesen mit
          einer Bewertung von rund 7,7 Milliarden US-Dollar. Im Februar 2022
          folgte der offizielle Rebrand zu &quot;Make&quot;. Seitdem wird die
          Plattform als eigenständige Marke unter dem Celonis-Dach betrieben.
        </Typo.Paragraph>

        <Typo.H3 className="mb-4 mt-8">
          Das Konzept: Szenarien statt Workflows
        </Typo.H3>
        <Typo.Paragraph>
          Make nennt seine Automatisierungen &quot;Szenarien&quot;. Im visuellen
          Editor verbinden Nutzer Module per Drag-and-Drop zu einem
          Flussdiagramm. Jedes Modul repräsentiert eine Aktion - etwa &quot;Neue
          Zeile in Google Sheets erstellen&quot; oder &quot;E-Mail über Gmail
          senden&quot;. Zwischen den Modulen fließen Daten, die sich an jedem
          Punkt transformieren, filtern oder verzweigen lassen.
        </Typo.Paragraph>
        <Typo.Paragraph>
          Das klingt nach einem kleinen Unterschied zu anderen Tools, ist in der
          Praxis aber erheblich: Während Zapier und Power Automate Workflows
          linear von oben nach unten abarbeiten, erlaubt Make echte
          Verzweigungen (Router), parallele Pfade und Iteratoren, die Arrays
          elementweise verarbeiten. Für technisch versierte Nutzer ist das ein
          großer Vorteil. Für Einsteiger kann es anfangs überfordernd wirken.
        </Typo.Paragraph>
        <Typo.Paragraph>
          Stand 2026 nutzen schätzungsweise über zwei Millionen Menschen
          weltweit Make. Die Community umfasst mehr als 50.000 aktive
          Mitglieder, und es stehen über 6.000 fertige Vorlagen für gängige
          Automatisierungsszenarien zur Verfügung. Auf Capterra hält Make eine
          Bewertung von 4,8 von 5 Sternen bei über 400 Reviews.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* 3. Stärken & Probleme */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Pro & Contra</IntroBox.PreHeadline>
          <IntroBox.Headline>Stärken und Grenzen im Überblick</IntroBox.Headline>
          <IntroBox.Paragraph>
            Nicht alle Stärken sind gleich wichtig. Was Make in der Praxis
            tatsächlich stark macht - und wo es an Grenzen stößt.
          </IntroBox.Paragraph>
        </IntroBox>

        <ProsCons>
          <ProsCons.Pros>
            <ProsCons.Item
              title="Visuelles Debugging auf hohem Niveau"
              description="Makes größter Vorteil gegenüber fast allen Konkurrenten: Man kann jeden einzelnen Durchlauf visuell nachverfolgen. Jedes Modul zeigt die ein- und ausgehenden Daten an. Fehler lassen sich präzise lokalisieren, ohne Logs durchsuchen zu müssen. Das spart in der Entwicklung und im Debugging viel Zeit."
            />
            <ProsCons.Item
              title="Datentransformation ohne Code"
              description="Router, Filter, Iteratoren, Aggregatoren, Text-Parser, Math-Funktionen, JSON- und XML-Verarbeitung - Make bietet ein reichhaltiges Werkzeugset für Datentransformationen, das weit über das hinausgeht, was Zapier oder Power Automate ohne Code ermöglichen. Wer Daten zwischen Systemen nicht nur verschieben, sondern wirklich umbauen muss, findet hier starke Bordmittel."
            />
            <ProsCons.Item
              title="Breites Integrations-Ökosystem"
              description="Mit über 3.000 nativen App-Integrationen und 400+ AI-spezifischen Modulen deckt Make deutlich mehr ab als n8n (~400 native Integrationen) und liegt knapp unter Zapier (~7.000). Für Teams, die viele unterschiedliche SaaS-Tools verbinden müssen, spart das die Entwicklung eigener API-Anbindungen."
            />
            <ProsCons.Item
              title="Einstieg ohne Entwickler möglich"
              description="Nicht-technische Nutzer benötigen laut Community-Erfahrungswerten 10 bis 20 Stunden, um produktiv mit Make zu arbeiten. Technisch versierte Nutzer kommen in 2 bis 3 Stunden zum ersten funktionierenden Szenario. Das ist steil genug, um Respekt einzuflößen, aber flach genug, um ohne Entwicklerteam loszulegen."
            />
            <ProsCons.Item
              title="Preis-Leistung unter Zapier"
              description="Bei vergleichbaren Workflows ist Make signifikant günstiger als Zapier. Der Free-Plan bietet Zugang zu allen 3.000+ Integrationen mit 1.000 Credits pro Monat. Der Core-Plan startet bei 10,59 €/Monat. Wer von Zapier kommt, kann bei mittlerer Komplexität 30 bis 50 Prozent einsparen."
            />
            <ProsCons.Item
              title="Robuste Fehlerbehandlung"
              description="Error Handler mit Retry, Rollback, Break- und Commit-Direktiven geben Kontrolle darüber, wie ein Szenario auf Fehler reagiert. Die Break-Direktive pausiert einen Workflow und markiert ihn zur manuellen Prüfung - ein Feature, das in vielen Konkurrenzprodukten fehlt oder deutlich umständlicher umzusetzen ist."
            />
          </ProsCons.Pros>
          <ProsCons.Cons>
            <ProsCons.Item
              title="Credits-Pricing wird bei Volumen teuer"
              description="Seit August 2025 rechnet Make in Credits statt Operations ab. Jede Aktion - auch ein simpler Daten-Check, der nichts findet - verbraucht mindestens einen Credit. Ein Szenario mit 8 Modulen verbraucht 8 Credits pro Durchlauf. Bei 1.000 Durchläufen im Monat sind das 8.000 Credits - fast das gesamte Core-Plan-Budget von 10.000 Credits. AI-Module verbrauchen variabel noch mehr. Überschreitungen kosten ca. 10,- € pro 10.000 Credits."
            />
            <ProsCons.Item
              title="Kein Self-Hosting möglich"
              description="Make ist ausschließlich als Cloud-Dienst verfügbar. Es gibt keine Option, die Plattform auf eigener Infrastruktur zu betreiben. Für Unternehmen mit strengen Datenschutzanforderungen - etwa im Gesundheitswesen, bei Finanzdienstleistern oder im öffentlichen Sektor - ist das ein Ausschlusskriterium. Daten werden auf Make-Servern verarbeitet, auch wenn EU-Rechenzentren zur Verfügung stehen."
            />
            <ProsCons.Item
              title="Vendor Lock-In und Abhängigkeit"
              description="Szenarien, die in Make erstellt werden, sind nicht portierbar. Es gibt keinen Standardexport, der in einem anderen Tool importiert werden könnte. Wer hunderte Szenarien aufgebaut hat, ist de facto an die Plattform gebunden. Die Umstellung von Operations auf Credits in 2025 hat gezeigt, dass Preismodelle jederzeit einseitig geändert werden können."
            />
            <ProsCons.Item
              title="Große Szenarien werden unübersichtlich"
              description="Der visuelle Builder, der bei einfachen Workflows so überzeugend ist, stößt bei komplexen Szenarien an Grenzen. Workflows mit dutzenden Modulen, verschachtelten Routern und vielen Fehlerbehandlungspfaden werden im Canvas schwer navigierbar. Es fehlt an Möglichkeiten, Teile eines Szenarios als wiederverwendbare Subflows auszulagern."
            />
            <ProsCons.Item
              title="Eingeschränkte Code-Flexibilität"
              description="Anders als n8n bietet Make keine nativen Code-Nodes für JavaScript oder Python. Für Logik, die sich nicht mit den eingebauten Modulen abbilden lässt, fehlen Bordmittel. Custom Nodes lassen sich nicht entwickeln. Wer regelmäßig eigene Funktionen braucht, stößt an eine harte Grenze."
            />
            <ProsCons.Item
              title="Kein Auto-Save und gemischte Support-Qualität"
              description="Make speichert Änderungen an Szenarien nicht automatisch. Wer vergisst, manuell zu speichern, verliert seine Arbeit. Dazu berichten Nutzer wiederholt über inkonsistente Support-Erfahrungen: Manche Anfragen werden zügig gelöst, andere ziehen sich über Wochen. Fehlermeldungen innerhalb der Plattform könnten oft klarer formuliert sein."
            />
          </ProsCons.Cons>
        </ProsCons>
      </ContentWrapper>

      {/* 5. Kosten & Betrieb */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Preise</IntroBox.PreHeadline>
          <IntroBox.Headline>Was Make wirklich kostet</IntroBox.Headline>
          <IntroBox.Paragraph>
            Seit August 2025 rechnet Make in Credits statt Operations. Die
            Preistabelle sieht übersichtlich aus - aber die tatsächlichen Kosten
            hängen stark davon ab, wie Szenarien gebaut sind.
          </IntroBox.Paragraph>
        </IntroBox>

        <DataTable className="mb-10">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Plan</DataTable.HeaderCell>
              <DataTable.HeaderCell>Preis/Monat</DataTable.HeaderCell>
              <DataTable.HeaderCell>Credits/Monat</DataTable.HeaderCell>
              <DataTable.HeaderCell>Besonderheiten</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            <DataTable.Row>
              <DataTable.Cell bold>Free</DataTable.Cell>
              <DataTable.Cell>0,- €</DataTable.Cell>
              <DataTable.Cell>1.000</DataTable.Cell>
              <DataTable.Cell>
                Alle 3.000+ Apps, visueller Builder, zum Testen geeignet
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Core</DataTable.Cell>
              <DataTable.Cell>ab 10,59 €</DataTable.Cell>
              <DataTable.Cell>10.000</DataTable.Cell>
              <DataTable.Cell>
                Unbegrenzte aktive Szenarien, 5-Min. Intervall-Minimum
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Pro</DataTable.Cell>
              <DataTable.Cell>ab 18,82 €</DataTable.Cell>
              <DataTable.Cell>10.000+</DataTable.Cell>
              <DataTable.Cell>
                Priority Execution, Volltextsuche in Szenarien
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Teams</DataTable.Cell>
              <DataTable.Cell>ab 34,12 €</DataTable.Cell>
              <DataTable.Cell>10.000+</DataTable.Cell>
              <DataTable.Cell>
                Team-Kollaboration, Szenario-Templates, gemeinsame Ordner
              </DataTable.Cell>
            </DataTable.Row>
            <DataTable.Row>
              <DataTable.Cell bold>Enterprise</DataTable.Cell>
              <DataTable.Cell>individuell</DataTable.Cell>
              <DataTable.Cell>individuell</DataTable.Cell>
              <DataTable.Cell>
                Overage Protection, 24/7 Support, 1-Min. Intervalle
              </DataTable.Cell>
            </DataTable.Row>
          </DataTable.Body>
        </DataTable>

        <div>
          <Typo.H3 className="mb-4">Die versteckten Kostenfallen</Typo.H3>
          <NumberedList>
            <NumberedList.Item title="Jede Aktion kostet:">
              Auch das bloße Abfragen einer Datenquelle, bei der nichts Neues
              gefunden wird, verbraucht einen Credit. Polling-basierte Trigger
              zählen bei jedem Check.
            </NumberedList.Item>
            <NumberedList.Item title="Modulanzahl multipliziert:">
              Ein Szenario mit 10 Modulen, das 1.000-mal im Monat läuft,
              verbraucht 10.000 Credits - das gesamte Core-Plan-Budget für ein
              einziges Szenario.
            </NumberedList.Item>
            <NumberedList.Item title="AI-Module kosten extra:">
              Credits für AI-Aktionen werden variabel berechnet - basierend auf
              Token-Verbrauch, Dateigröße oder Seitenanzahl. Ein AI-Schritt kann
              5 bis 50+ Credits kosten.
            </NumberedList.Item>
            <NumberedList.Item title="Überschreitungen sind teuer:">
              Zusätzliche Credits kosten ca. 10,- € pro 10.000. Wer sein Budget
              überschreitet und nicht aufpasst, zahlt schnell das Doppelte.
            </NumberedList.Item>
          </NumberedList>

          <SimpleCard align="left" className="mt-8">
            <Typo.H3 className="mb-3 text-base">
              Zum Vergleich: n8n Self-Hosted
            </Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Bei n8n Self-Hosted zählt eine Workflow-Ausführung als eine
              Execution - unabhängig davon, wie viele Nodes (Module) der
              Workflow enthält. Dasselbe Szenario mit 10 Schritten und 1.000
              Durchläufen kostet bei n8n Self-Hosted exakt 1.000 Executions -
              bei Make 10.000 Credits. Zudem fallen bei Self-Hosting nur
              Infrastrukturkosten an (typischerweise 10,- bis 50,- €/Monat für
              einen VPS), ohne Volumen-Limits.
            </Typo.Paragraph>
          </SimpleCard>
        </div>
      </ContentWrapper>

      {/* 6. KI & Agentic AI */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Künstliche Intelligenz</IntroBox.PreHeadline>
          <IntroBox.Headline>KI und Agentic AI mit Make</IntroBox.Headline>
          <IntroBox.Paragraph>
            Make hat 2025 und 2026 stark in KI-Funktionen investiert. Die
            Plattform bietet native Module für OpenAI (GPT-4, DALL-E), Anthropic
            Claude, Google Gemini und Stability AI. Insgesamt stehen über 400
            AI-spezifische Integrationen zur Verfügung. Damit lassen sich in der
            Praxis bereits sinnvolle Dinge umsetzen:
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="space-y-6 mb-8">
          <SimpleCard align="left">
            <Typo.H3 className="mb-2 text-base">
              AI-Module in Szenarien einbetten
            </Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Ein typischer Anwendungsfall: Ein Support-Ticket kommt über
              Zendesk herein, wird durch ein OpenAI-Modul für Sentiment-Analyse
              geschickt, automatisch priorisiert und an das richtige Team
              geroutet. Oder: Eingehende E-Mails werden per Claude-Modul
              zusammengefasst und die Zusammenfassung ins CRM geschrieben.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3 className="mb-2 text-base">
              Maia - der konversationelle Builder
            </Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Make entwickelt mit &quot;Maia&quot; einen KI-Assistenten, der
              Automatisierungen aus natürlichsprachlichen Beschreibungen
              generieren soll. Stand Anfang 2026 ist das Feature noch in der
              Entwicklung. Die Vision: &quot;Erstelle ein Szenario, das neue
              Shopify-Bestellungen in Slack postet&quot; - und Maia baut das
              Szenario. In der Praxis funktioniert das bisher nur für einfache
              Abläufe zuverlässig.
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard align="left">
            <Typo.H3 className="mb-2 text-base">
              Die Grenzen: Keine echten AI-Agents
            </Typo.H3>
            <Typo.Paragraph textColor="muted" size="sm">
              Hier wird es wichtig, ehrlich zu sein: Makes AI-Features sind
              isolierte Schritte innerhalb von Szenarien. Es gibt kein
              Gedächtnis zwischen Durchläufen, keine Chain-of-Thought-Logik,
              keine Agent-Planung. Ein Make-Szenario kann ein LLM aufrufen, aber
              es kann keinen autonomen Agenten orchestrieren, der mehrere
              Schritte plants und selbstständig ausführt. Für echte
              Agentic-AI-Workflows bietet n8n mit direkten LLM-Nodes,
              LangChain-Integration und der Möglichkeit, lokale LLMs über Ollama
              einzubinden, deutlich mehr Tiefe.
            </Typo.Paragraph>
          </SimpleCard>
        </div>
      </ContentWrapper>

      {/* 7. Brancheneignung */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Zielgruppe</IntroBox.PreHeadline>
          <IntroBox.Headline>Für welche Branchen passt Make - und für welche nicht?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Make ist kein Universalwerkzeug. In manchen Branchen entfaltet es
            seine Stärken voll, in anderen stößt es an harte Grenzen.
          </IntroBox.Paragraph>
        </IntroBox>

        <IndustryFit>
          <IndustryFit.Good>
            <IndustryFit.GoodItem title="Marketing-Agenturen">
              Social-Media-Automatisierung, Lead-Management,
              Content-Distribution über mehrere Kanäle, Kampagnen-Reporting.
              Makes breites App-Ökosystem deckt praktisch alle Marketing-Tools
              nativ ab.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="E-Commerce und Online-Handel">
              Bestellverarbeitung, Lagerbestandsabgleich, Rechnungserstellung,
              Versandbenachrichtigungen. Praxisbeispiel: Habitium, ein
              spanischer Baustoffhändler, reduzierte seine
              Bestellverarbeitungszeit mit Make von 15 auf 1 Minute.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Freelancer und Solopreneure">
              Wer als Einzelperson repetitive Aufgaben automatisieren will -
              etwa Rechnungsstellung, Kalender-Synchronisation oder
              E-Mail-Workflows - findet in Makes Free-Plan einen guten Einstieg
              ohne Kosten.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Operations- und RevOps-Teams">
              Datenflüsse zwischen CRM, ERP und Reporting-Tools optimieren.
              Solange die Volumina überschaubar bleiben, ist Make hier ein
              solides Werkzeug mit vielen nativen Konnektoren.
            </IndustryFit.GoodItem>
          </IndustryFit.Good>
          <IndustryFit.Poor>
            <IndustryFit.PoorItem title="Banken und Finanzdienstleister">
              Strenge Compliance-Vorgaben (BaFin, MaRisk) erfordern volle
              Datenkontrolle. Ohne Self-Hosting-Option können regulatorische
              Anforderungen an Datenresidenz und Auditierbarkeit nicht immer
              erfüllt werden.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Gesundheitswesen">
              Patientendaten unterliegen besonderen Schutzanforderungen.
              HIPAA-Compliance und die Verarbeitung sensibler Gesundheitsdaten
              auf Cloud-Servern Dritter ist in vielen Fällen problematisch oder
              unzulässig.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Unternehmen mit hohem Automatisierungsvolumen">
              Wer zehntausende Workflow-Durchläufe pro Monat mit komplexen
              Szenarien hat, zahlt bei Make schnell vierstellige Monatsbeträge.
              Die Credit-basierte Abrechnung skaliert überproportional - während
              Self-Hosted-Alternativen nur Infrastrukturkosten verursachen.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Entwickler-Teams mit Custom-Anforderungen">
              Teams, die regelmäßig eigene Logik in JavaScript oder Python
              schreiben müssen, eigene Nodes entwickeln oder lokale LLMs
              einbinden wollen, finden in Make keine geeignete Grundlage. Hier
              ist eine Plattform mit Code-Flexibilität die bessere Wahl.
            </IndustryFit.PoorItem>
          </IndustryFit.Poor>
        </IndustryFit>
      </ContentWrapper>

      {/* 8. Vergleichsmatrix */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Vergleich</IntroBox.PreHeadline>
          <IntroBox.Headline>Make im Vergleich</IntroBox.Headline>
          <IntroBox.Paragraph>
            Der direkte Vergleich der relevantesten Automatisierungsplattformen.
            Basierend auf öffentlich verfügbaren Daten, Community-Erfahrungen und
            eigener Evaluierung.
          </IntroBox.Paragraph>
        </IntroBox>

        <ToolComparisonTable currentTool="make" />
      </ContentWrapper>

      {/* 9. CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
