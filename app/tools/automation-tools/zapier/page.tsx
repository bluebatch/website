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
import IntroBox from "@/components/ui/intro-box";
import DataTable from "@/components/ui/data-table";
import ProsCons from "@/components/sections/pros-cons";
import IndustryFit from "@/components/sections/industry-fit";
import ToolComparisonTable from "@/components/sections/tool-comparison-table";
import SimpleCard from "@/components/cards/simple-card";

export const metadata: Metadata = {
  title:
    "Zapier ehrlich bewertet: Kosten, Grenzen & Alternativen (2026) | Bluebatch",
  description:
    "Zapier Erfahrungen aus der Praxis: Task-basierte Kosten erklärt, DSGVO-Problematik, echte Preise im Vergleich zu n8n und Make. Wann sich Zapier lohnt und wann nicht.",
  openGraph: {
    title:
      "Zapier ehrlich bewertet: Kosten, Grenzen & Alternativen (2026) | Bluebatch",
    description:
      "Zapier Kosten, Erfahrungen und Alternativen im ehrlichen Vergleich. Task-Pricing erklärt, DSGVO-Probleme, Vergleich mit n8n, Make und Power Automate.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Zapier Bewertung und Alternativen - Bluebatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Zapier ehrlich bewertet: Kosten, Grenzen & Alternativen (2026) | Bluebatch",
    description:
      "Zapier Kosten, Erfahrungen und Alternativen im ehrlichen Vergleich. Task-Pricing, DSGVO, n8n vs Zapier.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/tools/automation-tools/zapier",
  },
};

const pricing = [
  {
    plan: "Free",
    preis: "0,- €",
    tasks: "100 Tasks",
    details: "Nur 2-Schritt-Zaps, 15-Min. Polling, 1 Nutzer",
  },
  {
    plan: "Professional",
    preis: "ab 29,99 €",
    tasks: "750 Tasks",
    details: "Multi-Step, Webhooks, 2-Min. Polling, 1 Nutzer",
  },
  {
    plan: "Team",
    preis: "ab 103,50 €",
    tasks: "2.000 Tasks",
    details: "Shared Workspace, unbegrenzte Nutzer, Premier Support",
  },
  {
    plan: "Enterprise",
    preis: "Individuell",
    tasks: "Individuell",
    details: "SSO/SAML, Admin-Rollen, Audit Logs, dedizierter Account Manager",
  },
];

export default function Page() {
  return (
    <>
      {/* 1. Hero */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Tools</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Zapier – die größte Automatisierungsplattform, ehrlich bewertet
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Zapier verbindet über 8.000 Apps und macht Automatisierung für
              jeden zugänglich. Gleichzeitig kämpfen viele Nutzer mit
              explodierenden Task-Kosten, DSGVO-Bedenken und fehlender
              Flexibilität. Hier ist unsere ehrliche Einschätzung – mit echten
              Zahlen, konkreten Grenzen und klaren Alternativen.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Zapier-Beratung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Zapier Kosten | Zapier Alternative | Zapier vs n8n | Zapier
              Erfahrungen
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

      {/* 2. Was ist Zapier? */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Überblick</IntroBox.PreHeadline>
          <IntroBox.Headline>Was ist Zapier?</IntroBox.Headline>
          <IntroBox.Paragraph>
            Die Geschichte hinter der Plattform – und warum das Geschäftsmodell
            wichtig ist
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="prose prose-lg max-w-none">
          <Typo.Paragraph spacing="lg">
            Zapier wurde 2011 von Wade Foster, Bryan Helmig und Mike Knoop als
            Nebenprojekt in Columbia, Missouri gestartet. Die drei Freelancer
            bauten immer wieder die gleichen Integrationen für ihre Kunden und
            beschlossen, eine universelle Plattform dafür zu schaffen. 2012
            nahmen sie am Y Combinator teil und erhielten eine Seed-Finanzierung
            von 1,4 Millionen Euro – die einzige Venture-Capital-Runde, die
            Zapier jemals aufgenommen hat.
          </Typo.Paragraph>

          <Typo.Paragraph spacing="lg">
            Das ist bemerkenswert: Zapier hat mit nur 1,4 Millionen Euro
            Startkapital eine Bewertung von rund 5 Milliarden Euro erreicht. Das
            Unternehmen war seit den frühen Jahren profitabel, beschäftigt heute
            rund 736 Mitarbeiter (100% remote) und erwirtschaftet geschätzt 400
            Millionen Euro Jahresumsatz. Über 3 Millionen Nutzer und 100.000
            zahlende Kunden verarbeiten monatlich mehr als 1,5 Milliarden
            automatisierte Tasks.
          </Typo.Paragraph>

          <Typo.Paragraph spacing="lg">
            Das Kernkonzept sind sogenannte &quot;Zaps&quot; – automatisierte
            Workflows, die aus einem Trigger (auslösendes Ereignis) und einer
            oder mehreren Actions (ausgeführte Aktionen) bestehen. Beispiel:
            &quot;Wenn ein neuer Lead in einem Facebook-Formular eingeht
            (Trigger), erstelle einen Kontakt in HubSpot und sende eine
            Slack-Nachricht (2 Actions)&quot;. Dieser Zap würde pro Ausführung 2
            Tasks verbrauchen.
          </Typo.Paragraph>

          <Typo.Paragraph>
            Und genau hier liegt der entscheidende Punkt: Zapier rechnet nach
            Tasks ab, nicht nach Workflows. Jeder einzelne Aktionsschritt zählt.
            Das Modell klingt zunächst großzügig – bis man durchrechnet, wie
            schnell bei Multi-Step-Zaps die Tasks aufgebraucht sind.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* 3. Stärken & Probleme */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Pro & Contra</IntroBox.PreHeadline>
          <IntroBox.Headline>Stärken und Grenzen von Zapier</IntroBox.Headline>
          <IntroBox.Paragraph>
            Wo Zapier seine Berechtigung hat – und wo die Plattform an ihre
            Grenzen stößt
          </IntroBox.Paragraph>
        </IntroBox>

        <ProsCons>
          <ProsCons.Pros>
            <ProsCons.Item
              title="Größtes Integrations-Ökosystem"
              description="Über 8.000 native App-Verbindungen – mehr als jede andere Plattform. Make kommt auf rund 3.000, n8n auf 400+ native Nodes. Wer viele verschiedene SaaS-Tools verbinden will, findet bei Zapier fast immer einen fertigen Konnektor."
            />
            <ProsCons.Item
              title="Flachste Lernkurve am Markt"
              description="Zapier wurde für nicht-technische Nutzer gebaut. Ein einfacher Zap ist in 5 bis 15 Minuten erstellt, ohne eine Zeile Code. Die Oberfläche führt Schritt für Schritt durch den Prozess – ideal für Marketing-Teams, HR und Operations."
            />
            <ProsCons.Item
              title="AI Copilot für Zap-Erstellung"
              description="Seit 2025 hilft der Zapier Copilot beim Erstellen von Zaps per natürlicher Sprache. Man beschreibt, was automatisiert werden soll, und der Copilot schlägt passende Trigger, Actions und Apps vor. Das beschleunigt den Einstieg erheblich."
            />
            <ProsCons.Item
              title="Tables & Interfaces inklusive"
              description="Zapier bietet seit 2025/2026 eine integrierte No-Code-Datenbank (Tables) und einen Formular-Builder (Interfaces) in allen Plänen. Früher waren das kostenpflichtige Add-ons ab 20,- € pro Monat – jetzt ist beides enthalten."
            />
            <ProsCons.Item
              title="Ideal für nicht-technische Nutzer"
              description="40% der Zapier-Kunden sind Kleinunternehmen mit 20 bis 49 Mitarbeitern, oft ohne eigene IT-Abteilung. Die Plattform ist darauf ausgelegt, dass Citizen Developer ohne Entwickler produktive Automatisierungen bauen können."
            />
            <ProsCons.Item
              title="Zuverlässigkeit und Reife"
              description="Seit 2012 am Markt, über 3 Millionen Nutzer, 1,5 Milliarden Tasks pro Monat. Zapier ist kein Experiment, sondern eine bewiesene Plattform. Die Uptime ist hoch, die Dokumentation umfangreich, und es gibt Templates für hunderte gängige Use Cases."
            />
          </ProsCons.Pros>
          <ProsCons.Cons>
            <ProsCons.Item
              title="Task-basierte Abrechnung wird teuer"
              description="Jeder Aktionsschritt in einem Zap zählt als ein Task. Ein Zap mit 5 Schritten verbraucht 5 Tasks pro Ausführung. Bei 750 Tasks im Professional-Plan sind das nur 150 tatsächliche Workflow-Durchläufe pro Monat – weniger als 5 pro Tag. Das klingt nach viel, bis man es durchrechnet."
            />
            <ProsCons.Item
              title="Kein Self-Hosting möglich"
              description="Zapier ist ausschließlich Cloud-basiert. Alle Daten – Kundendaten, API-Keys, Workflow-Logik – laufen über Zapier-Server in den USA. Es gibt keine On-Premise-Option, keine Möglichkeit, die Datenverarbeitung auf eigene Infrastruktur zu verlagern."
            />
            <ProsCons.Item
              title="DSGVO-Compliance problematisch"
              description="Für deutsche Unternehmen mit sensiblen Kundendaten ist die Datenhaltung auf US-Servern ein echtes Problem. Ohne Self-Hosting-Option gibt es keine Möglichkeit, personenbezogene Daten in der EU zu halten. Die Schrems-II-Problematik betrifft Zapier direkt."
            />
            <ProsCons.Item
              title="Begrenzte Fehlerbehandlung"
              description="Zapier bietet nur rudimentäres Error Handling. Es fehlen native Retry-Strategien pro Schritt, detailliertes Logging und visuelles Debugging. Bei komplexen Multi-Branch-Workflows wird die Fehlersuche schnell mühsam und zeitraubend."
            />
            <ProsCons.Item
              title="Keine Schleifen auf unteren Plänen"
              description="Native Loops (foreach), Sub-Workflows und fortgeschrittene Verzweigungen sind bei Zapier eingeschränkt oder erst in höheren Plänen verfügbar. Wer Datensätze iterativ verarbeiten muss, stößt schnell an Grenzen – oder muss auf teure Workarounds zurückgreifen."
            />
            <ProsCons.Item
              title="Vendor Lock-in und Export-Probleme"
              description="Zapier-Workflows lassen sich nicht einfach exportieren oder auf andere Plattformen übertragen. Es gibt keinen offenen Standard für Zap-Definitionen. Wer wechseln will, muss jeden Workflow manuell neu aufbauen – oder einen Migrationsservice nutzen."
            />
          </ProsCons.Cons>
        </ProsCons>
      </ContentWrapper>

      {/* 4. Kosten & Betrieb */}
      <ContentWrapper bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Preise</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Zapier Kosten – was Sie wirklich zahlen
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Die offiziellen Preise und die versteckte Rechnung dahinter
          </IntroBox.Paragraph>
        </IntroBox>

        <DataTable className="mb-12">
          <DataTable.Head>
            <DataTable.Row>
              <DataTable.HeaderCell>Plan</DataTable.HeaderCell>
              <DataTable.HeaderCell>Preis/Monat</DataTable.HeaderCell>
              <DataTable.HeaderCell>Tasks/Monat</DataTable.HeaderCell>
              <DataTable.HeaderCell>Details</DataTable.HeaderCell>
            </DataTable.Row>
          </DataTable.Head>
          <DataTable.Body>
            {pricing.map((row, index) => (
              <DataTable.Row key={index}>
                <DataTable.Cell bold>{row.plan}</DataTable.Cell>
                <DataTable.Cell>{row.preis}</DataTable.Cell>
                <DataTable.Cell>{row.tasks}</DataTable.Cell>
                <DataTable.Cell>{row.details}</DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable.Body>
        </DataTable>

        <SimpleCard align="left" className="mb-8">
          <Typo.H3 className="mb-4 text-xl">
            Die Task-Falle: ein konkretes Rechenbeispiel
          </Typo.H3>
          <Typo.Paragraph>
            Angenommen, Sie haben einen typischen Workflow mit 5 Schritten: Ein
            neuer Lead kommt über ein Formular (Trigger), wird in HubSpot
            angelegt (Action 1), erhält eine Willkommens-E-Mail (Action 2), wird
            einem Sales-Mitarbeiter zugewiesen (Action 3) und löst eine
            Slack-Benachrichtigung aus (Action 4). Das sind 4 Tasks pro
            Ausführung.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Im Professional-Plan mit 750 Tasks ergeben sich: 750 geteilt durch 4
            ergibt 187 Workflow-Ausführungen pro Monat. Das sind etwa 6
            Ausführungen pro Tag. Für ein aktives Vertriebsteam mit 20 Leads am
            Tag reicht das bei Weitem nicht.
          </Typo.Paragraph>
          <Typo.Paragraph>
            Bei einem komplexeren Workflow mit 10 Schritten sinkt die Zahl auf
            75 Ausführungen pro Monat – weniger als 3 pro Tag. Die automatische
            Pay-Per-Task-Abrechnung bei Überschreitung kann die Monatsrechnung
            schnell verdoppeln oder verdreifachen.
          </Typo.Paragraph>
        </SimpleCard>

        <SimpleCard align="left" colorScheme="gray-light" className="mb-8">
          <Typo.H3 className="mb-3 text-lg">
            Vergleich: Zapier vs. n8n (Self-Hosted)
          </Typo.H3>
          <Typo.Paragraph textColor="muted" size="sm" className="mb-2">
            10 Workflows, je 5 Steps, 100 Runs pro Monat: Zapier ca. 103,- €
            (Team Plan) vs. n8n ca. 10–15,- € (Serverkosten). Ersparnis: rund
            85-90%.
          </Typo.Paragraph>
          <Typo.Paragraph textColor="muted" size="sm" className="mb-2">
            30 Workflows, je 8 Steps, 300 Runs pro Monat: Zapier ab 300,- €+
            vs. n8n ca. 15–20,- €. Ersparnis: rund 93-95%.
          </Typo.Paragraph>
          <Typo.Paragraph textColor="muted" size="sm">
            Selbst gehostetes n8n hat keine Task-Limits. Workflows laufen so
            oft wie nötig, ohne dass Zusatzkosten entstehen.
          </Typo.Paragraph>
        </SimpleCard>
      </ContentWrapper>

      {/* 5. KI & Agentic AI */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Künstliche Intelligenz</IntroBox.PreHeadline>
          <IntroBox.Headline>KI und Agentic AI bei Zapier</IntroBox.Headline>
          <IntroBox.Paragraph>
            Was die KI-Features tatsächlich leisten – und wo die Grenzen liegen
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <SimpleCard align="left">
            <Typo.H3 className="mb-4 text-xl">
              Zapier Copilot und Central
            </Typo.H3>
            <Typo.Paragraph>
              Der Zapier Copilot hilft beim Erstellen von Zaps per natürlicher
              Sprache und kann Use Cases vorschlagen, Fehler diagnostizieren und
              Workflows optimieren. Zapier Central geht einen Schritt weiter:
              ein KI-Workspace, in dem man KI-Bots erstellen kann, die über
              6.000+ Apps hinweg arbeiten – inklusive Chrome-Erweiterung für den
              Einsatz direkt im Browser.
            </Typo.Paragraph>
            <Typo.Paragraph textColor="muted" size="sm">
              In der Praxis funktioniert das gut für einfache Use Cases wie
              Lead-Qualifizierung, Content-Erstellung und Web-Recherche. Für
              komplexe KI-Pipelines mit mehreren Modellen oder eigenen
              Trainingsdaten stößt man an die Grenzen der No-Code-Plattform.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard align="left">
            <Typo.H3 className="mb-4 text-xl">Agents, Chatbots und MCP</Typo.H3>
            <Typo.Paragraph>
              Zapier Agents sind KI-gesteuerte Assistenten, die
              Multi-Step-Aktionen über den gesamten Tech-Stack ausführen.
              Chatbots by Zapier ermöglicht No-Code-KI-Bots, die auf eigenen
              Inhalten trainiert und in Websites eingebettet werden. Seit 2025
              unterstützt Zapier das Model Context Protocol (MCP), das
              KI-Agenten wie ChatGPT oder Claude sicheren Zugriff auf
              Business-Apps gibt.
            </Typo.Paragraph>
            <Typo.Paragraph textColor="muted" size="sm">
              Der Haken: Alles läuft über Zapiers Cloud. Eigene LLMs einbinden
              oder KI-Modelle auf eigenen Servern betreiben ist nicht möglich.
              n8n bietet hier mit LangChain-Integration, AI Agent Nodes und der
              Möglichkeit, selbst gehostete LLMs anzubinden, deutlich mehr
              Kontrolle über die Datenverarbeitung.
            </Typo.Paragraph>
          </SimpleCard>
        </div>
      </ContentWrapper>

      {/* 6. Brancheneignung */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Zielgruppe</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Für wen eignet sich Zapier – und für wen nicht?
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Eine ehrliche Einschätzung nach Branche und Anwendungsfall
          </IntroBox.Paragraph>
        </IntroBox>

        <IndustryFit>
          <IndustryFit.Good>
            <IndustryFit.GoodItem title="Freelancer und Solopreneure">
              Einzelunternehmer, die einfache Workflows wie Lead-Erfassung,
              Social-Media-Posting oder Rechnungsbenachrichtigungen
              automatisieren. Wenige Tasks, geringe Komplexität – hier ist das
              Preis-Leistungs-Verhältnis noch akzeptabel.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Kleine Marketing-Teams">
              Teams, die Tools wie Mailchimp, HubSpot, Google Sheets und Slack
              verbinden wollen. Typische Use Cases: Lead-Ads automatisch ins
              CRM, Blog-Posts automatisch auf Social Media teilen,
              Newsletter-Anmeldungen synchronisieren.
            </IndustryFit.GoodItem>
            <IndustryFit.GoodItem title="Content Creator und Agenturen">
              Für wiederkehrende Aufgaben wie RSS-zu-Social-Media,
              Content-Distribution und einfache CRM-Aktualisierungen. Solange
              die Workflows einfach bleiben, ist Zapier schneller eingerichtet
              als jede Alternative.
            </IndustryFit.GoodItem>
          </IndustryFit.Good>
          <IndustryFit.Poor>
            <IndustryFit.PoorItem title="Banken und Finanzdienstleister">
              Sensible Finanzdaten auf US-Servern ohne Self-Hosting-Option – für
              regulierte Branchen ein No-Go. Weder DSGVO-konform noch mit
              BaFin-Anforderungen vereinbar.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Gesundheitswesen">
              Zapier ist nicht HIPAA-konform und bietet keine Möglichkeit,
              Patientendaten DSGVO-konform zu verarbeiten. Für Arztpraxen,
              Kliniken und Gesundheits-IT ungeeignet.
            </IndustryFit.PoorItem>
            <IndustryFit.PoorItem title="Enterprise mit hohem Volumen">
              Unternehmen mit hunderten Workflows und tausenden täglichen
              Ausführungen zahlen bei Zapier schnell 500,- € bis 2.000,- € pro
              Monat. Selbst gehostetes n8n kostet für die gleiche Last 10,- €
              bis 50,- €.
            </IndustryFit.PoorItem>
          </IndustryFit.Poor>
        </IndustryFit>
      </ContentWrapper>

      {/* 7. Vergleichsmatrix */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Vergleich</IntroBox.PreHeadline>
          <IntroBox.Headline>Zapier im Vergleich</IntroBox.Headline>
          <IntroBox.Paragraph>
            Automatisierungsplattformen im direkten Vergleich – basierend auf
            realen Erfahrungswerten und aktuellen Preisen (Stand: März 2026)
          </IntroBox.Paragraph>
        </IntroBox>

        <ToolComparisonTable currentTool="zapier" />
      </ContentWrapper>

      {/* 8. CTA */}
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
