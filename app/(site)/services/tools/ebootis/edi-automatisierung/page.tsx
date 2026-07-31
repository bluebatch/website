import type { Metadata } from "next";
import { Building2, FileText, Database, Workflow, CheckCircle2 } from "lucide-react";
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
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import { FaqContainer } from "@/components/ui/faqs";

export const metadata: Metadata = {
  title: "EDI-Automatisierung mit e.bootis: Prozessketten per n8n | Bluebatch",
  description:
    "Ganze Prozessketten über die EDI-Schnittstellen von e.bootis automatisieren: Bestellungen, Auftragsbestätigungen, Lieferscheine und Rechnungen fließen ohne manuelle Erfassung, orchestriert per n8n.",
  openGraph: {
    title: "EDI-Automatisierung mit e.bootis: Prozessketten per n8n | Bluebatch",
    description:
      "Bestellungen, Lieferscheine und Rechnungen über die EDI-Schnittstellen von e.bootis automatisieren, orchestriert per n8n und angebunden über die OpenEngine.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/og?title=EDI-Automatisierung%20mit%20e.bootis%3A%20Prozessketten%20per%20n8n&eyebrow=Tools",
        width: 1200,
        height: 630,
        alt: "EDI-Automatisierung mit e.bootis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EDI-Automatisierung mit e.bootis: Prozessketten per n8n | Bluebatch",
    description:
      "EDI-Prozessketten über e.bootis automatisieren, orchestriert per n8n über die OpenEngine.",
    images: ["/og?title=EDI-Automatisierung%20mit%20e.bootis%3A%20Prozessketten%20per%20n8n&eyebrow=Tools"],
  },
  alternates: {
    canonical: "/services/tools/ebootis/edi-automatisierung",
  },
};

const belegarten = [
  {
    icon: "🛒",
    title: "Bestellungen",
    description:
      "Eingehende Kundenbestellungen werden per EDI übernommen und automatisch als Auftrag in e.bootis angelegt, ohne manuelle Erfassung.",
  },
  {
    icon: "✅",
    title: "Auftragsbestätigungen",
    description:
      "e.bootis erzeugt die Bestätigung mit Mengen, Preisen und Terminen und sendet sie automatisiert an den Handelspartner zurück.",
  },
  {
    icon: "🚚",
    title: "Lieferscheine",
    description:
      "Lieferavisos gehen strukturiert aus e.bootis raus oder von Lieferanten ein, der Wareneingang wird ohne Nacharbeit vorbereitet.",
  },
  {
    icon: "🧾",
    title: "Rechnungen",
    description:
      "Rechnungen werden per EDI ausgetauscht und den passenden Vorgängen zugeordnet, das senkt Rückfragen und Klärfälle spürbar.",
  },
];

const faqs = [
  {
    question: "Was bedeutet EDI im Zusammenhang mit e.bootis?",
    answer:
      "EDI steht für den elektronischen Austausch von Geschäftsdokumenten zwischen Systemen, etwa Bestellungen, Lieferscheinen und Rechnungen. e.bootis bringt EDI-Schnittstellen mit, über die sich diese Belege mit Kunden und Lieferanten automatisiert austauschen lassen, statt sie per Mail oder Papier zu erfassen.",
  },
  {
    question: "Wozu braucht es n8n, wenn e.bootis schon EDI kann?",
    answer:
      "Die EDI-Schnittstellen von e.bootis liefern die strukturierten Belege. n8n orchestriert die Kette drumherum: Es steuert Reihenfolge, Bedingungen, Benachrichtigungen und die Übergabe an weitere Systeme. So wird aus einzelnen Schnittstellen eine durchgängig automatisierte Prozesskette.",
  },
  {
    question: "Wie wird das technisch angebunden?",
    answer:
      "Über die OpenEngine, die Schnittstellen-Plattform von e.bootis. Sie ist im Standard ohne Zusatzkosten enthalten und macht die EDI- und ERP-Funktionen für n8n erreichbar, ohne aufwendige Sonderprogrammierung. e.bootis bleibt dabei das führende System.",
  },
  {
    question: "Muss dafür in e.bootis programmiert werden?",
    answer:
      "In der Regel nicht. Bluebatch setzt auf Ihrer bestehenden e.bootis-Installation auf und bindet die EDI-Prozesse über die OpenEngine an n8n an. Die Automatisierung entsteht in n8n, e.bootis liefert und empfängt die Daten über seine Schnittstellen.",
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
              EDI-Prozesse mit e.bootis automatisieren
            </Hero2ColumnHeadline>
            <GeoSummary>
              EDI-Automatisierung mit e.bootis verbindet die EDI-Schnittstellen
              des ERP mit Ihren Handelspartnern, sodass Bestellungen,
              Auftragsbestätigungen, Lieferscheine und Rechnungen ohne manuelle
              Erfassung fließen. Über die OpenEngine bindet Bluebatch e.bootis
              an n8n an und orchestriert ganze Prozessketten. e.bootis bleibt
              das führende System, n8n steuert die Übergaben zwischen den
              beteiligten Systemen.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                EDI-Automatisierung anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Bestellungen, Lieferscheine und Rechnungen, orchestriert per n8n
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/digital-workflow.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Integrations-Diagramm */}
      <ContentWrapper colorScheme="white">
        <FlowDiagram
          nodes={[
            {
              label: "Handelspartner",
              sublabel: "Lieferant, Kunde",
              icon: <Building2 className="h-5 w-5" />,
            },
            {
              label: "EDI",
              sublabel: "Nachricht",
              icon: <FileText className="h-5 w-5" />,
            },
            {
              label: "e.bootis",
              icon: <Database className="h-5 w-5" />,
              highlight: true,
            },
            {
              label: "n8n",
              sublabel: "Orchestrierung",
              icon: <Workflow className="h-5 w-5" />,
            },
            {
              label: "Folgeaktion",
              sublabel: "Bestaetigung, Lager, Versand",
              icon: <CheckCircle2 className="h-5 w-5" />,
            },
          ]}
          caption="Ganze Prozessketten laufen automatisch, von der EDI-Nachricht bis zur Folgeaktion."
        />
      </ContentWrapper>

      {/* Welche Belege */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox size="small">
          <IntroBox.PreHeadline>Was automatisiert wird</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Die Belege einer EDI-Prozesskette
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Von der Bestellung bis zur Rechnung, alles strukturiert über die
            EDI-Schnittstellen von e.bootis
          </IntroBox.Paragraph>
        </IntroBox>
        <SimpleGrid cols={2} className="gap-8">
          {belegarten.map((b) => (
            <SimpleCard key={b.title}>
              <SimpleCard.Icon>
                <>{b.icon}</>
              </SimpleCard.Icon>
              <Typo.H3 className="mb-3 text-xl">{b.title}</Typo.H3>
              <Typo.Paragraph textColor="muted" size="sm">
                {b.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* So orchestrieren wir mit n8n */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>So läuft die Kette</IntroBox.PreHeadline>
          <IntroBox.Headline>
            EDI-Schnittstellen orchestriert per n8n
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Wie aus einzelnen Schnittstellen eine durchgängige Prozesskette wird
          </IntroBox.Paragraph>
        </IntroBox>
        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mb-2">Beleg trifft ein</Typo.H3>
            <Typo.Paragraph textColor="muted">
              Eine Bestellung erreicht die EDI-Schnittstelle von e.bootis. n8n
              nimmt das Ereignis auf und startet die passende Prozesskette,
              angebunden über die OpenEngine.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mb-2">Prüfen und übernehmen</Typo.H3>
            <Typo.Paragraph textColor="muted">
              n8n prüft Regeln und Bedingungen, etwa Kunde, Artikel und
              Verfügbarkeit, und lässt den Auftrag in e.bootis anlegen. e.bootis
              bleibt das führende System für die Auftragsdaten.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mb-2">Antwort zurücksenden</Typo.H3>
            <Typo.Paragraph textColor="muted">
              Auftragsbestätigung und Lieferschein entstehen in e.bootis und
              gehen per EDI automatisiert an den Handelspartner zurück. n8n
              steuert Zeitpunkt und Format der Übergabe.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4}>
            <Typo.H3 className="mb-2">Abschluss und Monitoring</Typo.H3>
            <Typo.Paragraph textColor="muted">
              Die Rechnung wird per EDI ausgetauscht und zugeordnet. n8n
              protokolliert jeden Schritt und meldet Fehler, damit die Kette
              zuverlässig durchläuft.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
        <Typo.Paragraph className="mx-auto mt-10 max-w-3xl text-center text-gray-600">
          Die Orchestrierung übernimmt{" "}
          <InternalLink
            href="/services/tools/n8n"
            variant="underline"
            resolve={false}
          >
            n8n
          </InternalLink>
          , die technische Anbindung an das ERP erklärt der{" "}
          <InternalLink
            href="/services/tools/ebootis"
            variant="underline"
            resolve={false}
          >
            e.bootis-Tool-Hub
          </InternalLink>
          .
        </Typo.Paragraph>
      </ContentWrapper>

      {/* FAQ */}
      <ContentWrapper bodyWidth="small">
        <FaqContainer faqs={faqs}>
          <FaqContainer.Headline>
            Häufige Fragen zur EDI-Automatisierung
          </FaqContainer.Headline>
        </FaqContainer>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
