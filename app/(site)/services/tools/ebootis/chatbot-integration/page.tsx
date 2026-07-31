import type { Metadata } from "next";
import { MessageSquare, Bot, Plug, Database } from "lucide-react";
import ContentWrapper from "@/components/layout/content-wrapper";
import { FlowDiagram } from "@/components/diagrams/integration-diagram";
import Typo from "@/components/ui/typo";
import GeoSummary from "@/components/ui/geo-summary";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import KpiCard from "@/components/cards/kpi-card";
import IntroBox from "@/components/ui/intro-box";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnCallToAction,
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
    "KI-Chatbot mit e.bootis-Anbindung: Bestände, Preise, Aufträge im Chat | Bluebatch",
  description:
    "Ein KI-Chatbot, der Bestände, Preise und Aufträge direkt aus e.bootis beantwortet - für Team und Kunden. Bluebatch bindet ihn über die OpenEngine und n8n an.",
  ogDescription:
    "KI-Chatbot mit e.bootis-Anbindung: Bestände, Preise und Aufträge per Chat statt Klick-Marathon durch ERP-Masken, für Team und Kunden.",
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
        url: "/og?title=KI-Chatbot%20mit%20e.bootis-Anbindung%3A%20Best%C3%A4nde%2C%20Preise%2C%20Auftr%C3%A4ge%20im%20Chat&eyebrow=Tools",
        width: 1200,
        height: 630,
        alt: "KI-Chatbot mit e.bootis-Anbindung - Bluebatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.ogDescription,
    images: ["/og?title=KI-Chatbot%20mit%20e.bootis-Anbindung%3A%20Best%C3%A4nde%2C%20Preise%2C%20Auftr%C3%A4ge%20im%20Chat&eyebrow=Tools"],
  },
  alternates: {
    canonical: "/services/tools/ebootis/chatbot-integration",
  },
};

const questions = [
  {
    title: "Bestände",
    text: "Wie viele Stück von Artikel X sind an welchem Standort verfügbar? Der Chatbot zieht den aktuellen Lagerbestand live aus e.bootis, inklusive reservierter und freier Mengen.",
  },
  {
    title: "Preise und Konditionen",
    text: "Welcher Nettopreis gilt für diesen Kunden bei dieser Menge? Kundenpreise, Rabattstaffeln und Sonderkonditionen kommen direkt aus e.bootis, ohne Maskenwechsel.",
  },
  {
    title: "Aufträge",
    text: "Wo steht Bestellung 22-09413, wann wird geliefert, welche Positionen sind offen? Auftragsstatus und Liefertermine beantwortet der Chatbot aus den e.bootis-Daten.",
  },
  {
    title: "Für Team und Kunden",
    text: "Intern entlastet der Chatbot die Sachbearbeitung, extern kann er Kunden rund um die Uhr Standardauskünfte geben - mit denselben e.bootis-Daten als Quelle.",
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
              KI-Chatbot mit e.bootis-Anbindung: Bestände, Preise und Aufträge
              im Chat
            </Hero2ColumnHeadline>
            <GeoSummary>
              Die e.bootis-Chatbot-Integration von Bluebatch ist ein
              KI-Chatbot, der Bestände, Preise und Aufträge direkt aus e.bootis
              beantwortet, für das eigene Team und für Kunden. Bluebatch bindet
              den Chatbot über die OpenEngine und n8n an e.bootis an. Das Setup
              kostet 1.000 Euro einmalig, der Betrieb 50 Euro pro Monat, Go-live
              in fünf Tagen.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Chatbot anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <div className="mt-8">
              <SimpleGrid cols={3}>
                <KpiCard valueText="1.000 €" subtitle="Setup, einmalig pauschal" />
                <KpiCard valueText="50 €" subtitle="Betrieb pro Monat" />
                <KpiCard valueText="5 Tage" subtitle="Von Kickoff bis Go-live" />
              </SimpleGrid>
            </div>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/agentic-ai.jpg"
              alt="KI-Chatbot beantwortet Fragen aus e.bootis-Daten"
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
              label: "Nutzerfrage",
              sublabel: "Team oder Kunde",
              icon: <MessageSquare className="h-5 w-5" />,
            },
            {
              label: "KI-Chatbot",
              icon: <Bot className="h-5 w-5" />,
              highlight: true,
            },
            {
              label: "OpenEngine",
              icon: <Plug className="h-5 w-5" />,
            },
            {
              label: "e.bootis",
              sublabel: "Bestaende, Preise, Auftraege",
              icon: <Database className="h-5 w-5" />,
            },
          ]}
          caption="Der Chatbot beantwortet Fragen mit Live-Daten direkt aus e.bootis."
        />
      </ContentWrapper>

      {/* 2. PROBLEM / NUTZEN */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Eine Frage statt Klick-Marathon durch ERP-Masken
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Für eine einfache Auskunft zu Bestand, Preis oder Auftragsstatus
            klicken Mitarbeiter oft durch mehrere e.bootis-Masken oder fragen bei
            Kollegen nach. Das kostet täglich Zeit und hält andere von ihrer
            Arbeit ab. Ein KI-Chatbot mit e.bootis-Anbindung beantwortet diese
            wiederkehrenden Fragen in Sekunden, in natürlicher Sprache und mit
            Quelle und Zeitstempel.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          {questions.map((item) => (
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
            Vom Chat bis zur e.bootis-Antwort in wenigen Schritten
          </IntroBox.Headline>
          <IntroBox.Subline>
            Der Chatbot versteht die Frage, holt die Daten über die OpenEngine
            und n8n und antwortet in Klartext.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-2!">Schritt 1: Frage im Chat</Typo.H3>
            <Typo.Paragraph>
              Ein Mitarbeiter oder Kunde stellt seine Frage in natürlicher
              Sprache. Für interne Nutzer erfolgt die Anmeldung über Ihr
              bestehendes Single-Sign-on, damit die Rechte stimmen.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-2!">Schritt 2: Intent-Erkennung</Typo.H3>
            <Typo.Paragraph>
              Das KI-Modell erkennt, worum es geht: Bestand, Preis, Auftrag oder
              Stammdaten. Daraus leitet es ab, welche Abfrage an e.bootis nötig
              ist.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mt-2!">
              Schritt 3: Abfrage über OpenEngine und n8n
            </Typo.H3>
            <Typo.Paragraph>
              Ein n8n-Workflow ruft über die OpenEngine den passenden
              e.bootis-Endpunkt auf, mit dem Berechtigungskontext des Nutzers.
              Es werden nur Daten gelesen, die die jeweilige Rolle sehen darf.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4} isLast>
            <Typo.H3 className="mt-2!">
              Schritt 4: Antwort mit Quelle
            </Typo.H3>
            <Typo.Paragraph>
              Der Chatbot formt die Rohdaten in eine klare Antwort um, inklusive
              Quelle und Zeitstempel, und jede Anfrage wird protokolliert. Wie
              wir denselben Ansatz allgemein für Großhändler umsetzen, zeigt die
              Seite zum{" "}
              <InternalLink
                href="/branchen/grosshandel/chatbots/ki-chatbot-grosshandel"
                variant="underline"
                resolve={false}
              >
                KI-Chatbot für den Großhandel
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
          <IntroBox.Headline>Was in der Chatbot-Integration steckt</IntroBox.Headline>
          <IntroBox.Paragraph>
            Enthalten sind die Chat-Oberfläche, die Anbindung an e.bootis über
            die OpenEngine und n8n, die Anmeldung über Ihr Single-Sign-on, ein
            rollenbasiertes Rechtekonzept sowie ein Protokoll jeder Anfrage. Der
            Einstieg orientiert sich an den belegten Werten unseres
            Großhandels-Chatbots: 1.000 Euro Setup einmalig, 50 Euro pro Monat
            Betrieb und Go-live in fünf Tagen. Ob der Chatbot der richtige erste
            Schritt ist, klärt vorab unser{" "}
            <InternalLink
              href="/services/tools/ebootis/ki-assessment"
              variant="underline"
              resolve={false}
            >
              e.bootis KI-Assessment
            </InternalLink>
            . Weitere e.bootis-Bausteine finden Sie im{" "}
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
              question: "Was kostet der KI-Chatbot mit e.bootis-Anbindung?",
              answer:
                "Als Einstieg gelten die belegten Werte unseres Großhandels-Chatbots: 1.000 Euro Setup einmalig und 50 Euro pro Monat Betrieb, mit Go-live in fünf Tagen. Kommen weitere Systeme, komplexere Auskünfte oder ein Kundenzugang außerhalb des Standards hinzu, stimmen wir den Umfang und einen Festpreis nach einem kurzen Erstgespräch ab.",
            },
            {
              question: "Sieht der Chatbot nur, was der jeweilige Nutzer sehen darf?",
              answer:
                "Ja. Für interne Nutzer läuft die Anmeldung über Ihr Single-Sign-on, und die Abfrage an e.bootis erfolgt im Berechtigungskontext des Nutzers. So sieht jeder nur die Daten, die seine Rolle auch im ERP sehen darf. Für einen Kundenchat schränken wir die abrufbaren Daten zusätzlich klar ein.",
            },
            {
              question: "Schreibt der Chatbot auch Daten in e.bootis?",
              answer:
                "Standardmäßig liest der Chatbot nur, er beantwortet Fragen zu Beständen, Preisen und Aufträgen. Schreibende Aktionen wie das Anlegen eines Auftrags sind über dieselbe n8n- und OpenEngine-Anbindung möglich, werden aber bewusst getrennt freigeschaltet und protokolliert, damit die Kontrolle bei Ihnen bleibt.",
            },
            {
              question: "Können auch Kunden den Chatbot nutzen?",
              answer:
                "Ja. Derselbe Chatbot kann intern das Team entlasten und extern Kunden rund um die Uhr Standardauskünfte geben, etwa zu Lieferzeiten oder Auftragsstatus. Für den Kundenzugang begrenzen wir die abrufbaren Daten und die Aktionen enger als für interne Nutzer.",
            },
          ]}
        >
          <FaqContainer.Headline>
            Häufige Fragen zur Chatbot-Integration
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
