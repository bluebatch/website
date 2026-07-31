import type { Metadata } from "next";
import ContentWrapper from "@/components/layout/content-wrapper";
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
    "e.bootis KI-Assessment: Potenzial-Check für 500 Euro Festpreis | Bluebatch",
  description:
    "Das e.bootis KI-Assessment von Bluebatch prüft Ihre Installation auf KI- und Automatisierungspotenzial: Ist-Aufnahme, OpenEngine-Analyse und priorisierte Roadmap. 500 Euro Festpreis.",
  ogDescription:
    "Ist-Aufnahme, OpenEngine-Schnittstellen-Analyse und priorisierte Roadmap für Ihre e.bootis-Installation - der niederschwellige Einstieg in KI und Automatisierung. 500 Euro Festpreis.",
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
        url: "/og?title=e.bootis%20KI-Assessment%3A%20Potenzial-Check%20f%C3%BCr%20500%20Euro%20Festpreis&eyebrow=Tools",
        width: 1200,
        height: 630,
        alt: "e.bootis KI-Assessment von Bluebatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.ogDescription,
    images: ["/og?title=e.bootis%20KI-Assessment%3A%20Potenzial-Check%20f%C3%BCr%20500%20Euro%20Festpreis&eyebrow=Tools"],
  },
  alternates: {
    canonical: "/services/tools/ebootis/ki-assessment",
  },
};

const included = [
  {
    title: "Ist-Aufnahme der Prozesse",
    text: "Wir schauen uns Ihre zentralen Abläufe in e.bootis an: Auftragserfassung, Einkauf, Lager, Belegfluss und die Stellen, an denen heute noch manuell abgetippt oder zwischen Systemen umgeschichtet wird.",
  },
  {
    title: "Analyse der OpenEngine-Schnittstellen",
    text: "Wir prüfen, welche Daten über die OpenEngine bereits erreichbar sind und wo Anbindungen fehlen. So wissen Sie, was ohne Sonderprogrammierung möglich ist und was Aufwand bedeutet.",
  },
  {
    title: "Potenzial-Analyse für KI und Automatisierung",
    text: "Zu jedem Prozess bewerten wir konkrete Ansätze: n8n-Automatisierung, ein KI-Chatbot auf Ihren e.bootis-Daten oder ein MCP-Server, der das ERP für KI-Agenten ansprechbar macht.",
  },
  {
    title: "Priorisierte Roadmap mit Aufwand-Nutzen-Schätzung",
    text: "Sie erhalten eine geordnete Liste der Anwendungsfälle, sortiert nach Nutzen und Aufwand. Jeder Punkt kommt mit einer groben Schätzung, damit Sie entscheiden, wo Sie zuerst ansetzen.",
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
              e.bootis KI-Assessment: Potenzial-Check zum 500-Euro-Festpreis
            </Hero2ColumnHeadline>
            <GeoSummary>
              Das e.bootis KI-Assessment von Bluebatch prüft eine bestehende
              e.bootis-Installation für 500 Euro Festpreis auf KI- und
              Automatisierungspotenzial. Bluebatch nimmt Prozesse und
              OpenEngine-Schnittstellen auf, bewertet Anwendungsfälle für n8n,
              Chatbots und MCP-Server und liefert eine priorisierte Roadmap mit
              Aufwand-Nutzen-Schätzung. Das Assessment ist der niederschwellige
              Einstieg in alle weiteren Integrationen.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Assessment anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              500 Euro Festpreis - Ist-Aufnahme, Potenzial-Analyse und
              priorisierte Roadmap für Ihre e.bootis-Installation.
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/business-roadmap.jpg"
              alt="Priorisierte Roadmap fuer KI-Projekte auf e.bootis"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* 2. NUTZEN / AUSGANGSLAGE */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Warum ein Assessment</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Klarheit vor dem ersten Euro Projektbudget
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Viele e.bootis-Anwender ahnen, dass in ihren Daten und Prozessen
            Automatisierungspotenzial steckt, wissen aber nicht, wo der Einstieg
            sich wirklich lohnt. Statt direkt ein großes Projekt zu starten,
            liefert das Assessment eine belastbare Grundlage: eine geordnete
            Roadmap, die zeigt, welche Anwendungsfälle über die OpenEngine
            schnell umsetzbar sind und welche später kommen. So investieren Sie
            zuerst dort, wo der Hebel am größten ist.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          {included.map((item) => (
            <SimpleCard key={item.title} align="left" className="h-full">
              <Typo.H3>{item.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600">
                {item.text}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* 3. ABLAUF */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Ablauf</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So läuft das e.bootis KI-Assessment ab
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vom Erstgespräch bis zur Roadmap in wenigen Schritten, ohne
            Vorbereitung auf Ihrer Seite.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-2!">Schritt 1: Kick-off-Gespräch</Typo.H3>
            <Typo.Paragraph>
              In einem kurzen Termin klären wir, wie Ihre e.bootis-Installation
              genutzt wird, welche Prozesse Sie am meisten beschäftigen und wo
              es heute hakt. Danach steht der Rahmen für das Assessment.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-2!">
              Schritt 2: Ist-Aufnahme und OpenEngine-Check
            </Typo.H3>
            <Typo.Paragraph>
              Wir nehmen die relevanten Prozesse auf und prüfen, welche Daten
              über die OpenEngine bereits erreichbar sind. Die OpenEngine ist im
              e.bootis-Standard ohne Zusatzkosten enthalten und der zentrale
              Ansatzpunkt für jede Integration.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mt-2!">
              Schritt 3: Potenzial-Analyse
            </Typo.H3>
            <Typo.Paragraph>
              Wir gleichen Ihre Prozesse mit konkreten Bausteinen ab:
              n8n-Automatisierung, ein KI-Chatbot auf e.bootis-Daten oder ein
              MCP-Server für KI-Agenten. Zu jedem Ansatz schätzen wir Aufwand
              und Nutzen ab.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4} isLast>
            <Typo.H3 className="mt-2!">
              Schritt 4: Roadmap und Übergabe
            </Typo.H3>
            <Typo.Paragraph>
              Sie erhalten eine priorisierte Roadmap mit Empfehlung, wo Sie
              starten sollten. In einem Abschlussgespräch gehen wir die Punkte
              durch. Ob Sie danach mit uns umsetzen, entscheiden Sie frei - das
              Assessment steht für sich. Fragen dazu klären wir gern über die{" "}
              <InternalLink href="/contact" variant="underline">
                Kontaktseite
              </InternalLink>
              .
            </Typo.Paragraph>
          </TimelineAsStepsStep>
        </TimelineAsSteps>
      </ContentWrapper>

      {/* 4. FÜR WEN */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Für wen</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Passend, wenn Sie e.bootis produktiv im Einsatz haben
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            Das Assessment richtet sich an mittelständische Großhändler,
            Produktions- und Dienstleistungsbetriebe, die e.bootis-ERP II bereits
            nutzen und den nächsten Schritt in Richtung KI und Automatisierung
            gehen wollen. Als niederschwelliger Einstieg mündet es je nach
            Ergebnis in eine{" "}
            <InternalLink
              href="/services/tools/n8n"
              variant="underline"
              resolve={false}
            >
              n8n-Automatisierung
            </InternalLink>
            , einen{" "}
            <InternalLink
              href="/branchen/grosshandel/chatbots/ki-chatbot-grosshandel"
              variant="underline"
              resolve={false}
            >
              KI-Chatbot mit ERP-Anbindung
            </InternalLink>{" "}
            oder weitere Bausteine aus dem{" "}
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
              question: "Was kostet das e.bootis KI-Assessment?",
              answer:
                "Das Assessment kostet 500 Euro als Festpreis. Darin enthalten sind das Kick-off-Gespräch, die Ist-Aufnahme Ihrer Prozesse, die Analyse der OpenEngine-Schnittstellen, die Potenzial-Analyse und die priorisierte Roadmap inklusive Aufwand-Nutzen-Schätzung. Es gibt keine versteckten Zusatzkosten, der Preis steht vorab fest.",
            },
            {
              question: "Müssen wir uns darauf vorbereiten?",
              answer:
                "Nein, eine aufwendige Vorbereitung ist nicht nötig. Sie geben uns Einblick in Ihre zentralen Prozesse und die e.bootis-Nutzung, den Rest übernehmen wir. Am zeitintensivsten ist auf Ihrer Seite das Kick-off-Gespräch, in dem wir gemeinsam die wichtigsten Abläufe durchgehen.",
            },
            {
              question: "Sind wir nach dem Assessment zu etwas verpflichtet?",
              answer:
                "Nein. Das Assessment steht für sich und liefert Ihnen eine belastbare Roadmap, mit der Sie auch selbst oder mit einem anderen Partner weiterarbeiten könnten. Ob Sie die Umsetzung mit Bluebatch angehen, entscheiden Sie nach dem Abschlussgespräch frei.",
            },
            {
              question: "Warum ist die OpenEngine für das Assessment so wichtig?",
              answer:
                "Die OpenEngine ist die Schnittstellen-Plattform von e.bootis und im Standard ohne Zusatzkosten enthalten. Sie entscheidet, welche Daten und Funktionen ohne aufwendige Sonderprogrammierung erreichbar sind. Deshalb bildet die Analyse der OpenEngine-Schnittstellen den Kern des Assessments und die Basis für die Aufwandsschätzung.",
            },
          ]}
        >
          <FaqContainer.Headline>
            Häufige Fragen zum e.bootis KI-Assessment
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
