import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Database,
  Workflow,
  MessagesSquare,
  Bot,
  Share2,
} from "lucide-react";
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
import { FaqContainer } from "@/components/ui/faqs";

export const metadata: Metadata = {
  title: "e.bootis ERP: KI-Integration und Automatisierung | Bluebatch",
  description:
    "e.bootis (ebootis) ERP mit KI verbinden: n8n-Integration, KI-Chatbot mit ERP-Anbindung, MCP-Server und KI-Assessment. Bluebatch nutzt die OpenEngine, damit Ihre Daten arbeiten.",
  openGraph: {
    title: "e.bootis ERP: KI-Integration und Automatisierung | Bluebatch",
    description:
      "e.bootis-ERP mit KI verbinden: n8n-Integration, KI-Chatbot, MCP-Server und KI-Assessment. Bluebatch nutzt die OpenEngine.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=e.bootis%20ERP%3A%20KI-Integration%20und%20Automatisierung&eyebrow=Tools",
        width: 1200,
        height: 630,
        alt: "e.bootis ERP Integration mit Bluebatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "e.bootis ERP: KI-Integration und Automatisierung | Bluebatch",
    description:
      "e.bootis-ERP mit KI verbinden: n8n-Integration, KI-Chatbot, MCP-Server und KI-Assessment.",
    images: ["/og?title=e.bootis%20ERP%3A%20KI-Integration%20und%20Automatisierung&eyebrow=Tools"],
  },
  alternates: {
    canonical: "/services/tools/ebootis",
  },
};

// Money Pages (kaufbare Angebote) zuerst, dann Content
const offers = [
  {
    href: "/services/tools/ebootis/ki-assessment",
    title: "e.bootis KI-Assessment",
    price: "500 €",
    description:
      "Fester Einstieg: Wir prüfen Ihre e.bootis-Installation auf KI- und Automatisierungspotenzial und liefern eine priorisierte Roadmap. 500 € Festpreis.",
  },
  {
    href: "/services/tools/ebootis/n8n-integration",
    title: "n8n-Integration",
    description:
      "e.bootis über die OpenEngine mit n8n verbinden - Bestellungen, Belege und Stammdaten fließen automatisch zwischen ERP und Ihren Systemen.",
  },
  {
    href: "/services/tools/ebootis/chatbot-integration",
    title: "KI-Chatbot-Integration",
    description:
      "Ein KI-Chatbot, der Bestände, Preise und Aufträge direkt aus e.bootis beantwortet - für Ihr Team und Ihre Kunden.",
  },
  {
    href: "/services/tools/ebootis/mcp-server",
    title: "MCP-Server für e.bootis",
    description:
      "Der MCP-Server macht e.bootis für KI-Agenten ansprechbar - Claude und Co. lesen und schreiben kontrolliert im ERP.",
  },
];

const content = [
  {
    href: "/services/tools/ebootis/openengine-schnittstellen",
    title: "Die OpenEngine verstehen",
    description:
      "Wie die e.bootis-OpenEngine funktioniert und warum sie tiefe Integrationen ohne teure Sonderprogrammierung möglich macht.",
  },
  {
    href: "/services/tools/ebootis/ki-anwendungsfaelle",
    title: "KI-Anwendungsfälle mit e.bootis",
    description:
      "Von der Angebotserstellung bis zur Bedarfsprognose - konkrete KI-Use-Cases auf Basis Ihrer e.bootis-Daten.",
  },
  {
    href: "/services/tools/ebootis/edi-automatisierung",
    title: "EDI-Prozesse automatisieren",
    description:
      "Ganze Prozessketten über die EDI-Schnittstellen von e.bootis automatisieren, orchestriert per n8n.",
  },
];

const faqs = [
  {
    question: "Was ist e.bootis?",
    answer:
      "e.bootis-ERP II ist eine deutsche ERP-Software für den Mittelstand, mit Schwerpunkt auf Großhandel, Produktion und Dienstleistung. Sie deckt Einkauf, Vertrieb, Lager, Finanzen und ein integriertes PIM ab. Über die OpenEngine lässt sich das System tief mit anderer Software vernetzen.",
  },
  {
    question: "Was ist die OpenEngine?",
    answer:
      "Die OpenEngine ist die Schnittstellen-Plattform von e.bootis. Sie ist im Standard ohne Zusatzkosten enthalten und bündelt bestehende und neue Funktionen so, dass tiefe Integrationen mit externen Systemen wie n8n, Chatbots oder KI-Agenten ohne aufwendige Sonderprogrammierung möglich werden.",
  },
  {
    question: "Braucht man für KI-Projekte einen e.bootis-Wechsel?",
    answer:
      "Nein. Wir setzen auf Ihrer bestehenden e.bootis-Installation auf und binden KI und Automatisierung über die OpenEngine an. e.bootis bleibt das führende System, wir koppeln uns an, statt etwas zu ersetzen.",
  },
];

function OfferCard({
  href,
  title,
  price,
  description,
}: {
  href: string;
  title: string;
  price?: string;
  description: string;
}) {
  return (
    <InternalLink href={href} variant="plain" resolve={false}>
      <SimpleCard align="left" className="h-full">
        <div className="flex items-start justify-between gap-3">
          <Typo.H3>{title}</Typo.H3>
          {price && (
            <span className="shrink-0 rounded-full bg-primary-50 px-3 py-1 text-sm font-bold text-primary-700">
              {price}
            </span>
          )}
        </div>
        <Typo.Paragraph className="text-gray-600">{description}</Typo.Paragraph>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-primary-600">
          Mehr erfahren
          <ArrowRight className="h-4 w-4" />
        </span>
      </SimpleCard>
    </InternalLink>
  );
}

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Großhandel-Tools</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              e.bootis ERP mit KI verbinden
            </Hero2ColumnHeadline>
            <GeoSummary>
              e.bootis-ERP II ist eine deutsche ERP-Software für den
              Großhandel, deren OpenEngine tiefe Integrationen ohne
              Sonderprogrammierung ermöglicht. Bluebatch nutzt genau diese
              Schnittstelle, um e.bootis mit n8n, KI-Chatbots und KI-Agenten zu
              verbinden - vom 500-Euro-Assessment bis zur laufenden
              Automatisierung.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Integration anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              n8n-Integration, KI-Chatbot, MCP-Server und KI-Assessment für
              e.bootis
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/digital-marketplace.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Integrations-Diagramm */}
      <ContentWrapper colorScheme="white">
        <HubDiagram
          center={{
            label: "e.bootis ERP",
            sublabel: "OpenEngine",
            icon: <Database className="h-5 w-5" />,
          }}
          spokes={[
            {
              label: "n8n",
              sublabel: "Automatisierung",
              icon: <Workflow className="h-5 w-5" />,
            },
            {
              label: "KI-Chatbot",
              sublabel: "Team & Kunden",
              icon: <MessagesSquare className="h-5 w-5" />,
            },
            {
              label: "MCP-Server",
              sublabel: "KI-Agenten",
              icon: <Bot className="h-5 w-5" />,
            },
            {
              label: "EDI",
              sublabel: "Handelspartner",
              icon: <Share2 className="h-5 w-5" />,
            },
          ]}
          caption="Die OpenEngine macht e.bootis-Daten fuer Automatisierung und KI erreichbar."
        />
      </ContentWrapper>

      {/* Warum e.bootis + KI */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-8 md:gap-12">
          <div>
            <div className="relative mx-auto aspect-square w-24 md:mx-0">
              <Image
                src="/services/tools/ebootis.svg"
                alt="e.bootis ERP"
                fill
                className="object-contain"
              />
            </div>
            <Typo.H2 className="mt-6 mb-4">
              Ein ERP, das für Schnittstellen gebaut ist
            </Typo.H2>
            <Typo.Paragraph className="text-gray-600 mb-4">
              Anders als viele gewachsene Systeme bringt e.bootis mit der
              OpenEngine eine Integrations-Plattform von Haus aus mit, im
              Standard ohne Zusatzkosten. Genau das macht KI-Projekte hier
              schnell und bezahlbar: Ihre Daten sind erreichbar, ohne dass wir
              das ERP aufbohren müssen.
            </Typo.Paragraph>
            <Typo.Paragraph className="text-gray-600">
              Wir setzen auf Ihrer bestehenden Installation auf und binden
              Automatisierung und KI über diese Schnittstelle an. e.bootis
              bleibt das führende System.
            </Typo.Paragraph>
          </div>
          <div className="relative aspect-video mx-auto w-full">
            <Image
              src="/images/digital-workflow.jpg"
              alt="e.bootis OpenEngine Integration"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Angebote (Money) */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Was wir für e.bootis bauen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Vom Assessment bis zur laufenden Integration
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Ein fester Einstieg und drei Integrations-Angebote, die e.bootis mit
            Automatisierung und KI verbinden.
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={2} className="mt-12">
          {offers.map((o) => (
            <OfferCard key={o.href} {...o} />
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Content zum Verstehen */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Zum Einlesen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            e.bootis, OpenEngine und KI im Detail
          </IntroBox.Headline>
        </IntroBox>
        <SimpleGrid cols={3} className="mt-12">
          {content.map((c) => (
            <SimpleCard key={c.href} align="left" className="h-full">
              <Typo.H3>{c.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {c.description}
              </Typo.Paragraph>
              <span className="mt-auto pt-4">
                <InternalLink href={c.href} resolve={false}>
                  Weiterlesen
                </InternalLink>
              </span>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>Häufige Fragen zu e.bootis</FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
