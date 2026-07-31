import type { Metadata } from "next";
import { Database, Plug, Workflow, Boxes } from "lucide-react";
import ContentWrapper from "@/components/layout/content-wrapper";
import { FlowDiagram } from "@/components/diagrams/integration-diagram";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import IntroBox from "@/components/ui/intro-box";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import InternalLink from "@/components/buttons/internal-link";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { FaqContainer } from "@/components/ui/faqs";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";

const meta = {
  title:
    "e.bootis mit n8n verbinden: ERP-Automatisierung über die OpenEngine | Bluebatch",
  description:
    "Bluebatch verbindet e.bootis über die OpenEngine mit n8n: Bestellungen, Belege und Stammdaten fließen automatisch zwischen ERP und Ihren Systemen, ohne Sonderprogrammierung.",
  ogDescription:
    "Bestellungen, Belege und Stammdaten automatisch zwischen e.bootis und anderen Systemen bewegen - per n8n und OpenEngine, ohne manuelles Abtippen.",
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.ogDescription,
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=e.bootis%20mit%20n8n%20verbinden%3A%20ERP-Automatisierung%20%C3%BCber%20die%20OpenEngine&eyebrow=Tools",
        width: 1200,
        height: 630,
        alt: "e.bootis mit n8n verbinden - Bluebatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.ogDescription,
    images: ["/og?title=e.bootis%20mit%20n8n%20verbinden%3A%20ERP-Automatisierung%20%C3%BCber%20die%20OpenEngine&eyebrow=Tools"],
  },
  alternates: {
    canonical: "/services/tools/ebootis/n8n-integration",
  },
};

const flows = [
  {
    title: "Bestellungen automatisch übernehmen",
    text: "Eingehende Bestellungen aus E-Mail, Portal oder Webshop landen über n8n direkt als Auftrag in e.bootis. Kein Abtippen, keine doppelte Erfassung, weniger Zahlendreher.",
  },
  {
    title: "Belege durchreichen",
    text: "Auftragsbestätigungen, Lieferscheine und Rechnungen fließen automatisch zwischen e.bootis und Ihren nachgelagerten Systemen, zum Beispiel Buchhaltung, DMS oder Versanddienstleister.",
  },
  {
    title: "Stammdaten synchron halten",
    text: "Artikel, Preise und Kundendaten bleiben zwischen e.bootis und Shop, CRM oder Marktplatz abgeglichen. Änderungen laufen über die OpenEngine in beide Richtungen.",
  },
  {
    title: "Ereignisse als Auslöser nutzen",
    text: "Ein neuer Auftrag, ein Lieferstatus oder ein Lagerstand kann in n8n Folgeaktionen anstoßen: Benachrichtigungen, Freigaben oder Übergaben an weitere Systeme.",
  },
];

export default function Page() {
  return (
    <>
      {/* 1. HERO */}
      <ContentWrapper isFirstSection colorScheme="gradient-cool">
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              e.bootis-Angebot
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              e.bootis mit n8n verbinden: Daten fließen automatisch zwischen
              ERP und Ihren Systemen
            </Hero2ColumnHeadline>
            <GeoSummary>
              Die e.bootis-n8n-Integration von Bluebatch verbindet
              e.bootis-ERP II über die OpenEngine mit dem Automatisierungstool
              n8n. Bestellungen, Belege und Stammdaten fließen automatisch
              zwischen e.bootis und Ihren anderen Systemen, ohne manuelles
              Abtippen und ohne teure Sonderprogrammierung. Bluebatch modelliert
              die Workflows in n8n, e.bootis bleibt das führende System.
              Festpreis nach Erstgespräch.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Integration anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Bestellungen, Belege und Stammdaten automatisch bewegen - per n8n
              über die OpenEngine.
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/data-flow.jpg"
              alt="Datenfluss zwischen e.bootis und anderen Systemen per n8n"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Integrations-Diagramm */}
      <ContentWrapper colorScheme="gray-light">
        <FlowDiagram
          bidirectional
          nodes={[
            {
              label: "e.bootis",
              sublabel: "ERP",
              icon: <Database className="h-5 w-5" />,
              highlight: true,
            },
            {
              label: "OpenEngine",
              sublabel: "Schnittstelle",
              icon: <Plug className="h-5 w-5" />,
            },
            {
              label: "n8n",
              sublabel: "Workflows",
              icon: <Workflow className="h-5 w-5" />,
            },
            {
              label: "Zielsysteme",
              sublabel: "Shop, Mail, DATEV",
              icon: <Boxes className="h-5 w-5" />,
            },
          ]}
          caption="Bestellungen, Belege und Stammdaten fliessen automatisch zwischen e.bootis und Ihren Systemen."
        />
      </ContentWrapper>

      {/* 2. PROBLEM / NUTZEN */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wenn Daten zwischen ERP und anderen Systemen von Hand wandern
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            In vielen Betrieben werden dieselben Daten mehrfach erfasst: Eine
            Bestellung kommt per Mail, wird in e.bootis abgetippt, der Status
            landet später manuell im Shop und die Rechnung wandert per Export in
            die Buchhaltung. Das kostet Zeit und produziert Fehler. Über die
            OpenEngine lassen sich diese Wege automatisieren, orchestriert durch
            n8n als Schaltzentrale zwischen den Systemen.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          {flows.map((item) => (
            <SimpleCard key={item.title} align="left" className="h-full">
              <Typo.H3>{item.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {item.text}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. WIE ES FUNKTIONIERT */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>So funktioniert es</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Von der OpenEngine-Anbindung zum laufenden Workflow
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vier Schritte, bis Daten ohne Ihr Zutun zwischen e.bootis und Ihren
            Systemen fließen.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-2!">
              Schritt 1: OpenEngine anbinden
            </Typo.H3>
            <Typo.Paragraph>
              Wir binden n8n über die OpenEngine an Ihre e.bootis-Installation
              an. Da die OpenEngine im Standard enthalten ist, entfällt teure
              Sonderprogrammierung. Wir legen fest, welche Objekte gelesen und
              welche geschrieben werden dürfen.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-2!">
              Schritt 2: Workflows modellieren
            </Typo.H3>
            <Typo.Paragraph>
              In n8n bauen wir die konkreten Abläufe nach: welcher Auslöser
              welche Aktion startet, wie Daten gemappt werden und was bei
              Ausnahmen passiert. Jeder Workflow bildet einen Ihrer realen
              Prozesse ab.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mt-2!">
              Schritt 3: Testlauf mit echten Daten
            </Typo.H3>
            <Typo.Paragraph>
              Wir testen die Workflows mit echten Vorgängen, prüfen die
              Ergebnisse in e.bootis und den Zielsystemen und kalibrieren
              Mapping und Fehlerbehandlung, bis die Übergaben sauber laufen.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4} isLast>
            <Typo.H3 className="mt-2!">
              Schritt 4: Go-live und Betrieb
            </Typo.H3>
            <Typo.Paragraph>
              Die Workflows gehen in den Regelbetrieb, inklusive Monitoring und
              Benachrichtigung bei Störungen. Auf Wunsch übernehmen wir die
              laufende Wartung. Details und Optionen zu n8n selbst finden Sie auf
              unserer{" "}
              <InternalLink
                href="/services/tools/n8n"
                variant="underline"
                resolve={false}
              >
                n8n-Toolseite
              </InternalLink>
              .
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* 4. LEISTUNGSUMFANG */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Leistungsumfang</IntroBox.PreHeadline>
          <IntroBox.Headline>Was in der Integration steckt</IntroBox.Headline>
          <IntroBox.Paragraph>
            Enthalten sind die Anbindung der OpenEngine an n8n, die Modellierung
            Ihrer Workflows, ein Testlauf mit echten Daten, die Fehlerbehandlung
            sowie eine Dokumentation der Übergaben. Den genauen Umfang und einen
            Festpreis legen wir nach einem kurzen Erstgespräch fest, weil er von
            der Zahl der Prozesse und der angebundenen Systeme abhängt. Ein guter
            erster Schritt ist unser{" "}
            <InternalLink
              href="/services/tools/ebootis/ki-assessment"
              variant="underline"
              resolve={false}
            >
              e.bootis KI-Assessment
            </InternalLink>
            , das die lohnendsten Automatisierungen vorab priorisiert, oder ein
            Blick in den{" "}
            <InternalLink
              href="/services/tools/ebootis"
              variant="underline"
              resolve={false}
            >
              e.bootis-Tool-Hub
            </InternalLink>
            .
          </IntroBox.Paragraph>
        </IntroBox>
      </ContentWrapper>

      {/* 5. FAQ */}
      <ContentWrapper colorScheme="gray-light" bodyWidth="small">
        <FaqContainer
          faqs={[
            {
              question: "Was kostet die e.bootis-n8n-Integration?",
              answer:
                "Der Preis hängt davon ab, wie viele Prozesse Sie automatisieren und wie viele Systeme angebunden werden. Deshalb nennen wir keinen Pauschalpreis von der Stange, sondern vereinbaren nach einem kurzen Erstgespräch einen Festpreis für Anbindung, Workflows, Testlauf und Übergabe. Der laufende Betrieb ist deutlich schlanker als das Setup.",
            },
            {
              question: "Brauchen wir für die Anbindung eine Sonderprogrammierung in e.bootis?",
              answer:
                "In der Regel nicht. Die OpenEngine ist die Schnittstellen-Plattform von e.bootis und im Standard ohne Zusatzkosten enthalten. Genau dafür ist sie gedacht: tiefe Integrationen ohne aufwendige Sonderprogrammierung. Wir setzen darauf auf und binden n8n an die bereitgestellten Schnittstellen an.",
            },
            {
              question: "Können Daten auch aus anderen Systemen zurück nach e.bootis fließen?",
              answer:
                "Ja. n8n arbeitet in beide Richtungen. Genauso wie Daten aus e.bootis in Shop, CRM oder Buchhaltung wandern, können umgekehrt Bestellungen, Statusänderungen oder Stammdaten aus anderen Systemen als Vorgang in e.bootis angelegt oder aktualisiert werden. Welche Objekte geschrieben werden dürfen, legen wir vorab gemeinsam fest.",
            },
            {
              question: "Bleibt e.bootis das führende System?",
              answer:
                "Ja. Wir setzen auf Ihrer bestehenden e.bootis-Installation auf und koppeln n8n über die OpenEngine an, statt etwas zu ersetzen. e.bootis bleibt das führende ERP-System, n8n orchestriert nur die Datenflüsse zwischen e.bootis und Ihren übrigen Systemen.",
            },
          ]}
        >
          <FaqContainer.Headline>
            Häufige Fragen zur n8n-Integration
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      {/* 6. FINAL CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
