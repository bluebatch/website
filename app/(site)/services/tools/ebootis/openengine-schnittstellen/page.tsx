import type { Metadata } from "next";
import { Plug, Database, Workflow, ShoppingCart, Sparkles } from "lucide-react";
import ContentWrapper from "@/components/layout/content-wrapper";
import { HubDiagram } from "@/components/diagrams/integration-diagram";
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
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import { FaqContainer } from "@/components/ui/faqs";

export const metadata: Metadata = {
  title: "e.bootis-OpenEngine: die ERP-Schnittstelle ohne Sonderprogrammierung | Bluebatch",
  description:
    "Die OpenEngine ist die Schnittstellen-Plattform von e.bootis, im Standard ohne Zusatzkosten. So öffnen Sie e.bootis für n8n, Web-Shop, EDI und KI-Agenten, ohne teure Sonderprogrammierung.",
  openGraph: {
    title: "e.bootis-OpenEngine: die ERP-Schnittstelle ohne Sonderprogrammierung | Bluebatch",
    description:
      "Die OpenEngine öffnet e.bootis für externe Systeme wie n8n, Web-Shop, EDI und KI-Agenten, im Standard ohne Zusatzkosten und ohne aufwendige Sonderprogrammierung.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=e.bootis-OpenEngine%3A%20die%20ERP-Schnittstelle%20ohne%20Sonderprogrammierung&eyebrow=Tools",
        width: 1200,
        height: 630,
        alt: "e.bootis-OpenEngine als Schnittstellen-Plattform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "e.bootis-OpenEngine: die ERP-Schnittstelle ohne Sonderprogrammierung | Bluebatch",
    description:
      "Die OpenEngine öffnet e.bootis für n8n, Web-Shop, EDI und KI-Agenten, im Standard ohne Zusatzkosten.",
    images: ["/og?title=e.bootis-OpenEngine%3A%20die%20ERP-Schnittstelle%20ohne%20Sonderprogrammierung&eyebrow=Tools"],
  },
  alternates: {
    canonical: "/services/tools/ebootis/openengine-schnittstellen",
  },
};

const anbindungen = [
  {
    title: "n8n und Automatisierung",
    description:
      "Workflows greifen über die OpenEngine auf Aufträge, Belege und Stammdaten zu, ohne dass jede Verbindung einzeln programmiert werden muss.",
  },
  {
    title: "Web-Shop in Echtzeit",
    description:
      "Der integrierte B2B- und B2C-Web-Shop arbeitet ohne Datenredundanz direkt auf den e.bootis-Daten, Bestände und Preise bleiben synchron.",
  },
  {
    title: "EDI-Partner",
    description:
      "Über die EDI-Schnittstellen tauschen Lieferanten und Kunden Bestellungen und Belege automatisiert aus, angebunden über dieselbe Plattform.",
  },
  {
    title: "KI-Agenten und Chatbots",
    description:
      "KI-Anwendungen lesen und schreiben kontrolliert im ERP, so beantwortet ein Chatbot Bestände, Preise und Auftragsstatus aus e.bootis.",
  },
];

const faqs = [
  {
    question: "Was ist die e.bootis-OpenEngine?",
    answer:
      "Die OpenEngine ist die Schnittstellen-Plattform von e.bootis-ERP II. Sie ist im Standard ohne Zusatzkosten enthalten und bündelt bestehende und neue Funktionen so, dass sich das ERP tief mit externen Systemen vernetzen lässt, ohne aufwendige Sonderprogrammierung.",
  },
  {
    question: "Wie öffne ich e.bootis für andere Systeme?",
    answer:
      "Über die OpenEngine. Statt für jede Verbindung eine eigene Individualentwicklung zu beauftragen, werden bestehende Funktionen von e.bootis als Schnittstelle bereitgestellt und an das externe System, etwa n8n, den Web-Shop oder einen KI-Agenten, angebunden.",
  },
  {
    question: "Warum ist das günstiger als klassische Sonderprogrammierung?",
    answer:
      "Weil die Integrations-Plattform bereits im Standard von e.bootis enthalten ist. Die Daten sind über die OpenEngine erreichbar, ohne dass das ERP aufgebohrt oder für jede Anbindung neu entwickelt werden muss. Das verkürzt die Projekte und senkt die Kosten.",
  },
  {
    question: "Muss e.bootis dafür ersetzt oder gewechselt werden?",
    answer:
      "Nein. Bluebatch setzt auf der bestehenden e.bootis-Installation auf und bindet Automatisierung und KI über die OpenEngine an. e.bootis bleibt das führende System, wir koppeln uns an, statt etwas zu ersetzen.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>e.bootis-Tools</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Die e.bootis-OpenEngine verstehen
            </Hero2ColumnHeadline>
            <GeoSummary>
              Die OpenEngine ist die Schnittstellen-Plattform von
              e.bootis-ERP II und im Standard ohne Zusatzkosten enthalten. Die
              OpenEngine öffnet das ERP für externe Systeme wie n8n, Web-Shop,
              EDI-Partner oder KI-Agenten und ermöglicht tiefe Integrationen
              ohne aufwendige Sonderprogrammierung. So bleiben Bestände, Preise
              und Aufträge erreichbar, ohne das führende System umzubauen.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Integration anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Schnittstellen-Plattform im Standard, ohne Sonderprogrammierung
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

      {/* Integrations-Diagramm */}
      <ContentWrapper colorScheme="white">
        <HubDiagram
          center={{
            label: "OpenEngine",
            sublabel: "im Standard enthalten",
            icon: <Plug className="h-5 w-5" />,
          }}
          spokes={[
            {
              label: "e.bootis-Kern",
              sublabel: "Einkauf, Lager, PIM",
              icon: <Database className="h-5 w-5" />,
            },
            {
              label: "n8n",
              icon: <Workflow className="h-5 w-5" />,
            },
            {
              label: "Web-Shop",
              icon: <ShoppingCart className="h-5 w-5" />,
            },
            {
              label: "KI & Chatbot",
              icon: <Sparkles className="h-5 w-5" />,
            },
          ]}
          caption="Die OpenEngine buendelt die Funktionen von e.bootis fuer externe Systeme."
        />
      </ContentWrapper>

      {/* Was die OpenEngine ist */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Was die OpenEngine ist</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Ein ERP, das für Schnittstellen gebaut ist
          </IntroBox.Headline>
        </IntroBox>
        <div className="mx-auto mt-8 max-w-3xl">
          <Typo.Paragraph className="text-gray-600 mb-4">
            Viele gewachsene ERP-Systeme sind geschlossen: Jede Anbindung an
            eine andere Software bedeutet ein eigenes Projekt mit teurer
            Individualentwicklung. e.bootis-ERP II geht einen anderen Weg. Mit
            der OpenEngine bringt es eine Integrations-Plattform von Haus aus
            mit, im Standard ohne Zusatzkosten.
          </Typo.Paragraph>
          <Typo.Paragraph className="text-gray-600 mb-4">
            Die OpenEngine bündelt bestehende und neue Funktionen von e.bootis
            so, dass sie als Schnittstelle nach außen nutzbar werden. Bestände,
            Preise, Aufträge, Belege und die Produktdaten aus dem integrierten
            PIM sind darüber erreichbar. Genau das macht Integrations- und
            KI-Projekte hier schnell und bezahlbar.
          </Typo.Paragraph>
          <Typo.Paragraph className="text-gray-600">
            Bluebatch setzt auf Ihrer bestehenden e.bootis-Installation auf und
            bindet Automatisierung und KI über diese Schnittstelle an. Mehr zum
            Gesamtbild finden Sie im{" "}
            <InternalLink
              href="/services/tools/ebootis"
              variant="underline"
              resolve={false}
            >
              e.bootis-Tool-Hub
            </InternalLink>
            .
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* Wie die OpenEngine funktioniert */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>So funktioniert es</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Von der Anbindung bis zum laufenden Datenfluss
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wie eine Integration über die OpenEngine entsteht, in vier Schritten
          </IntroBox.Paragraph>
        </IntroBox>
        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mb-2">Funktion freigeben</Typo.H3>
            <Typo.Paragraph textColor="muted">
              Über die OpenEngine wird die passende Funktion von e.bootis als
              Schnittstelle bereitgestellt, etwa der Zugriff auf Bestände,
              Preise oder Aufträge, ohne Eingriff in den ERP-Kern.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mb-2">Externes System anbinden</Typo.H3>
            <Typo.Paragraph textColor="muted">
              Das Zielsystem, zum Beispiel n8n, der Web-Shop oder ein KI-Agent,
              wird an die Schnittstelle angebunden. Berechtigungen und
              Datenrichtung werden dabei klar festgelegt.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mb-2">Prozess automatisieren</Typo.H3>
            <Typo.Paragraph textColor="muted">
              Daten fließen automatisch zwischen e.bootis und dem angebundenen
              System. Eine Bestellung, ein Beleg oder eine Stammdatenänderung
              landet ohne manuelle Nacharbeit am richtigen Ort.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3 className="mb-2">Betrieb und Ausbau</Typo.H3>
            <Typo.Paragraph textColor="muted">
              Die Integration läuft dauerhaft und lässt sich erweitern. Neue
              Anbindungen nutzen dieselbe Plattform, statt jedes Mal von vorne
              zu entwickeln. e.bootis bleibt das führende System.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* Was sich anbinden lässt */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Was sich anbinden lässt</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Diese Systeme erreicht die OpenEngine
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Von Automatisierung über den Web-Shop bis zu KI-Agenten, alles über
            dieselbe Schnittstelle
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={2} className="mt-8 gap-8">
          {anbindungen.map((a) => (
            <SimpleCard key={a.title} align="left" className="h-full">
              <Typo.H3 className="mb-3 text-xl">{a.title}</Typo.H3>
              <Typo.Paragraph textColor="muted" size="sm">
                {a.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
        <Typo.Paragraph className="mx-auto mt-8 max-w-3xl text-center text-gray-600">
          Besonders häufig verbinden wir e.bootis mit{" "}
          <InternalLink
            href="/services/tools/n8n"
            variant="underline"
            resolve={false}
          >
            n8n
          </InternalLink>
          , um ganze Prozessketten im Großhandel zu automatisieren.
        </Typo.Paragraph>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            Häufige Fragen zur OpenEngine
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
