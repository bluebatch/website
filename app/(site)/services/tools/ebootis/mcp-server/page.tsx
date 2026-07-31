import type { Metadata } from "next";
import { Sparkles, Server, Plug, Database } from "lucide-react";
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
    "MCP-Server für e.bootis: ERP für KI-Agenten ansprechbar machen | Bluebatch",
  description:
    "Der e.bootis-MCP-Server von Bluebatch macht das ERP für KI-Agenten wie Claude ansprechbar: kontrolliertes Lesen und Schreiben über die OpenEngine, mit Rechten und Protokoll.",
  ogDescription:
    "e.bootis über das Model Context Protocol für KI-Agenten wie Claude öffnen: kontrolliertes Lesen und Schreiben über die OpenEngine, rollenbasiert und protokolliert.",
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
        url: "/og?title=MCP-Server%20f%C3%BCr%20e.bootis%3A%20ERP%20f%C3%BCr%20KI-Agenten%20ansprechbar%20machen&eyebrow=Tools",
        width: 1200,
        height: 630,
        alt: "MCP-Server für e.bootis - Bluebatch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.ogDescription,
    images: ["/og?title=MCP-Server%20f%C3%BCr%20e.bootis%3A%20ERP%20f%C3%BCr%20KI-Agenten%20ansprechbar%20machen&eyebrow=Tools"],
  },
  alternates: {
    canonical: "/services/tools/ebootis/mcp-server",
  },
};

const capabilities = [
  {
    title: "Kontrolliert lesen",
    text: "KI-Agenten fragen Bestände, Preise, Aufträge und Stammdaten aus e.bootis ab. Der MCP-Server gibt nur die Objekte frei, die Sie erlaubt haben, jede Abfrage läuft über die OpenEngine.",
  },
  {
    title: "Kontrolliert schreiben",
    text: "Wo gewünscht, kann ein Agent auch Vorgänge anlegen oder aktualisieren, etwa einen Auftrag erfassen. Schreibrechte werden getrennt und bewusst freigeschaltet, nie pauschal.",
  },
  {
    title: "Rollen und Rechte",
    text: "Jeder Zugriff ist an ein Rechtekonzept gebunden. So sieht und ändert ein Agent nur, was seine Rolle darf - dieselbe Logik wie bei einem menschlichen Nutzer.",
  },
  {
    title: "Vollständiges Protokoll",
    text: "Jede Anfrage und jede Schreibaktion wird mit Zeitstempel protokolliert. Sie sehen jederzeit nachvollziehbar, was ein KI-Agent im ERP gelesen und getan hat.",
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
              MCP-Server für e.bootis: das ERP für KI-Agenten ansprechbar machen
            </Hero2ColumnHeadline>
            <GeoSummary>
              Der e.bootis-MCP-Server von Bluebatch macht e.bootis-ERP II über
              das Model Context Protocol für KI-Agenten wie Claude ansprechbar.
              KI-Agenten lesen und schreiben kontrolliert im ERP, angebunden
              über die OpenEngine, mit rollenbasierten Rechten und
              vollständigem Protokoll. So werden Bestände, Aufträge und
              Stammdaten zur Datenquelle für automatisierte Assistenten.
              Festpreis nach Erstgespräch.
            </GeoSummary>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">MCP-Server anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Kontrolliertes Lesen und Schreiben in e.bootis für Claude und
              andere KI-Agenten, über die OpenEngine.
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/machine-learning.jpg"
              alt="KI-Agent greift ueber einen MCP-Server auf e.bootis zu"
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
              label: "KI-Agent",
              sublabel: "Claude & Co.",
              icon: <Sparkles className="h-5 w-5" />,
            },
            {
              label: "MCP-Server",
              icon: <Server className="h-5 w-5" />,
              highlight: true,
            },
            {
              label: "OpenEngine",
              icon: <Plug className="h-5 w-5" />,
            },
            {
              label: "e.bootis",
              sublabel: "lesen & schreiben",
              icon: <Database className="h-5 w-5" />,
            },
          ]}
          caption="Der MCP-Server macht e.bootis kontrolliert fuer KI-Agenten ansprechbar."
        />
      </ContentWrapper>

      {/* 2. PROBLEM / NUTZEN */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Warum ein MCP-Server</IntroBox.PreHeadline>
          <IntroBox.Headline>
            KI-Agenten brauchen einen kontrollierten Zugang zum ERP
          </IntroBox.Headline>
          <IntroBox.Paragraph>
            KI-Agenten können Aufgaben eigenständig erledigen, aber nur, wenn sie
            sicher an die richtigen Daten kommen. Das Model Context Protocol,
            kurz MCP, ist der offene Standard, über den Agenten wie Claude mit
            Fremdsystemen sprechen. Ein MCP-Server für e.bootis übersetzt diesen
            Standard auf die OpenEngine und gibt Agenten so einen definierten,
            protokollierten Zugang zum ERP, statt ungeprüfter Vollzugriffe.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-12">
          {capabilities.map((item) => (
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
            Vom MCP-Aufruf zur e.bootis-Aktion, kontrolliert und protokolliert
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vier Schritte, bis ein KI-Agent sicher mit Ihrem e.bootis arbeiten
            kann.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          <TimelineAsStepsStep value={1}>
            <Typo.H3 className="mt-2!">
              Schritt 1: MCP-Server aufsetzen
            </Typo.H3>
            <Typo.Paragraph>
              Wir richten den MCP-Server in Ihrer Umgebung ein und verbinden ihn
              über die OpenEngine mit e.bootis. Da die OpenEngine im Standard
              enthalten ist, entfällt teure Sonderprogrammierung.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={2}>
            <Typo.H3 className="mt-2!">
              Schritt 2: Werkzeuge und Rechte definieren
            </Typo.H3>
            <Typo.Paragraph>
              Gemeinsam legen wir fest, welche Aktionen der Server als Werkzeuge
              anbietet, etwa Bestand abfragen oder Auftrag anlegen, und welche
              Rollen sie nutzen dürfen. Lesen und Schreiben werden getrennt
              freigeschaltet.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={3}>
            <Typo.H3 className="mt-2!">
              Schritt 3: KI-Agent anbinden
            </Typo.H3>
            <Typo.Paragraph>
              Ein KI-Agent wie Claude wird mit dem MCP-Server verbunden und kann
              die freigegebenen Werkzeuge nutzen. Jeder Aufruf läuft im
              erlaubten Rechtekontext und wird protokolliert.
            </Typo.Paragraph>
          </TimelineAsStepsStep>
          <TimelineAsStepsStep value={4} isLast>
            <Typo.H3 className="mt-2!">
              Schritt 4: Testlauf und Übergabe
            </Typo.H3>
            <Typo.Paragraph>
              Wir testen die Werkzeuge mit echten Fällen, prüfen das Protokoll
              und übergeben die Anbindung dokumentiert. Wie KI-Agenten und
              KI-Assistenten im Großhandel eingesetzt werden, zeigt unsere Seite
              zu{" "}
              <InternalLink
                href="/branchen/grosshandel/ki-assistenten"
                variant="underline"
                resolve={false}
              >
                KI-Assistenten für den Großhandel
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
          <IntroBox.Headline>Was im MCP-Server steckt</IntroBox.Headline>
          <IntroBox.Paragraph>
            Enthalten sind der Aufbau des MCP-Servers, die Anbindung an e.bootis
            über die OpenEngine, die Definition der Werkzeuge für Lesen und
            Schreiben, ein rollenbasiertes Rechtekonzept, das Protokoll aller
            Zugriffe sowie ein Testlauf mit echten Fällen und eine Dokumentation.
            Den genauen Umfang und einen Festpreis legen wir nach einem kurzen
            Erstgespräch fest, weil er von der Zahl der Werkzeuge und der Tiefe
            der Schreibrechte abhängt. Ein guter Einstieg ist unser{" "}
            <InternalLink
              href="/services/tools/ebootis/ki-assessment"
              variant="underline"
              resolve={false}
            >
              e.bootis KI-Assessment
            </InternalLink>
            . Alle Bausteine im Überblick zeigt der{" "}
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
              question: "Was ist ein MCP-Server?",
              answer:
                "MCP steht für Model Context Protocol, einen offenen Standard, über den KI-Agenten wie Claude mit externen Systemen und Datenquellen sprechen. Ein MCP-Server stellt bestimmte Aktionen als Werkzeuge bereit. Der e.bootis-MCP-Server übersetzt diesen Standard auf die OpenEngine, sodass Agenten kontrolliert im ERP lesen und schreiben können.",
            },
            {
              question: "Was kostet der MCP-Server für e.bootis?",
              answer:
                "Der Preis hängt davon ab, wie viele Werkzeuge Sie brauchen und wie weit die Schreibrechte reichen sollen. Deshalb nennen wir keinen Pauschalpreis von der Stange, sondern vereinbaren nach einem kurzen Erstgespräch einen Festpreis für Aufbau, Anbindung, Rechtekonzept, Testlauf und Übergabe.",
            },
            {
              question: "Bekommt der KI-Agent damit vollen Zugriff auf e.bootis?",
              answer:
                "Nein. Der Agent kann nur die Werkzeuge nutzen, die Sie freigeben, und nur im Rechtekontext seiner Rolle. Lesen und Schreiben werden getrennt freigeschaltet, standardmäßig liest ein Agent nur. Jede Aktion wird protokolliert, sodass die Kontrolle jederzeit bei Ihnen bleibt.",
            },
            {
              question: "Funktioniert das nur mit Claude?",
              answer:
                "Nein. MCP ist ein offener Standard, deshalb lässt sich der Server mit verschiedenen KI-Agenten und Clients nutzen, die MCP unterstützen. Claude ist ein verbreitetes Beispiel, das Prinzip ist aber nicht an ein einzelnes Modell gebunden.",
            },
          ]}
        >
          <FaqContainer.Headline>
            Häufige Fragen zum MCP-Server für e.bootis
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
