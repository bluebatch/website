import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import BackgroundHero from "@/components/heroes/background-hero";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/layout/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/ui/timeline-as-steps";
import Link from "next/link";
import { resolveHref } from "@/lib/get-canonical-path";
import GlassCard from "@/components/cards/glass-card";
import {
  GlassCardTitle,
  GlassCardDescription,
  GlassCardArrow,
} from "@/components/cards/glass-card";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import LatestBlogPosts from "@/components/sections/latest-blog-posts";
import CardShowcase from "@/components/cards/card-showcase";
import Customer from "@/components/sections/customer/customer";
import IntroBox from "@/components/ui/intro-box";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/n8n-automatisierung",
      metaTitle: "n8n Automatisierung - Enterprise AI-Automation | Bluebatch",
      metaDescription:
        "n8n Automatisierung für Ihr Unternehmen. KI Agentur für Workflow Engineering mit Enterprise-Fokus.",
      keywords: ["n8n Automatisierung", "n8n Workflow", "Bluebatch"],
    },
    {
      source: "/ki-agentur",
      metaTitle:
        "KI Agentur - n8n Automatisierung & Workflow Engineering | Bluebatch",
      metaDescription:
        "Ihre KI Agentur für n8n Automatisierung. Enterprise-Workflows, Custom Nodes und AI-Agenten aus einer Hand.",
      keywords: ["KI Agentur", "KI Agentur Deutschland", "Bluebatch"],
    },
    {
      source: "/ai-agentur",
      metaTitle:
        "AI Agentur - n8n Automatisierung & Workflow Engineering | Bluebatch",
      metaDescription:
        "Ihre AI Agentur für n8n Automatisierung. Enterprise-Workflows, Custom Nodes und AI-Agenten aus einer Hand.",
      keywords: ["AI Agentur", "AI Agentur Deutschland", "Bluebatch"],
    },
  ],
};

export const metadata: Metadata = {
  title: "Bluebatch - Automatisierung mit n8n | KI Agentur für Workflows",
  description:
    "Workflow-Automatisierung mit n8n vom Experten: Bluebatch ist Ihre KI Agentur für intelligente Prozessautomatisierung auf Enterprise-Niveau - live in nur 5 Tagen.",
  keywords: [
    "Automatisierung mit n8n",
    "KI Agentur",
    "AI Agentur",
    "Workflow Engineering",
    "Enterprise AI",
    "Backoffice Automatisierung",
    "KI Workflows",
    "KI Automatisierung Agentur",
    "Software Agentur",
    "Agentur Digitale Transformation",
    "KI Readiness Check",
    "KI-Implementierung",
    "Großhandel",
    "Retail",
    "Digitale Mitarbeiter",
  ],
  authors: [{ name: "Bluebatch" }],
  openGraph: {
    title: "Bluebatch - Automatisierung mit n8n | KI Agentur",
    description:
      "Workflow-Automatisierung mit n8n vom Experten. Skalieren Sie Ihren Umsatz, nicht Ihren Headcount - live in nur 5 Tagen.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch - Automatisierung mit n8n | KI Agentur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluebatch - Automatisierung mit n8n | KI Agentur",
    description:
      "Workflow-Automatisierung mit n8n vom Experten. Skalieren Sie Ihren Umsatz, nicht Ihren Headcount - live in nur 5 Tagen.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          videoSrc="/videos/video-of-Person-drawing-workflows.mp4"
          overlayOpacity={0.85}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            Ihre KI Agentur für Workflow Engineering
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            n8n Automatisierung für
            <br />
            Ihren{" "}
            <BackgroundHero.Highlight>
              Enterprise-Erfolg
            </BackgroundHero.Highlight>
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            n8n Automatisierung vom Experten: Bluebatch automatisiert Ihre
            manuellen Backoffice-Prozesse mit intelligenten AI-Workflows auf
            Enterprise-Niveau - live in nur 5 Tagen.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">ROI-Analyse anfragen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            <BackgroundHero.Stat
              value={5}
              suffix=" Tage"
              label="Time-to-Value"
            />
            <BackgroundHero.Stat
              value={80}
              suffix="%"
              label="Weniger manueller Aufwand"
            />
            <BackgroundHero.Stat
              value={24}
              suffix="/7"
              label="Automatisierung"
            />
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      {/* About Bluebatch Section */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>The DNA</IntroBox.PreHeadline>
              <IntroBox.Headline>
                Ihre KI Agentur für radikale Automatisierung mit n8n
              </IntroBox.Headline>
              <IntroBox.Subline>
                Im Herzen des Mittelstands und des Großhandels liegt ein
                ungenutztes Potenzial. Während Unternehmen händeringend nach
                Fachkräften suchen, verbringen ihre besten Mitarbeiter oft mehr
                als die Hälfte ihrer Arbeitszeit mit mechanischen Aufgaben.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Bluebatch wurde gegründet, um diese Fehlallokation von
                Humankapital zu beenden. Als KI Automatisierung Agentur bauen
                wir keine klassische Software - durch Automatisierung mit n8n
                erschaffen wir digitale Mitarbeiter. Unsere AI-Workflows
                übernehmen die kognitive Routinearbeit, damit Ihre Teams wieder
                das tun können, wofür sie eingestellt wurden.
              </IntroBox.Subline>
            </IntroBox>
          </div>
          <div className="relative aspect-video">
            <Image
              src="/images/consulting-services.jpg"
              alt="Automatisierung mit n8n"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* Enterprise Heritage Section */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Enterprise Heritage</IntroBox.PreHeadline>
          <IntroBox.Headline>
            AI Agentur mit Enterprise-Expertise statt „Clicky-Bude"
          </IntroBox.Headline>
          <IntroBox.Subline>
            Bluebatch ist eine spezialisierte Tochter der Pexon Consulting. Als
            Teil einer etablierten IT-Cloud-Beratung auf Enterprise-Niveau
            bringen wir eine technologische Reife mit, die man bei reinen
            Automatisierungs-Agenturen selten findet.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/cloud.svg"
              alt="Cloud-Native"
              color="primary-gradient"
            />
            <Typo.H3>Cloud-Native & Sicher</Typo.H3>
            <Typo.Paragraph>
              Wir wissen, wie man Systeme skaliert, die höchsten
              Sicherheitsansprüchen genügen. Als Software Agentur „basteln" wir
              nicht mit Tools, sondern bauen robuste, architekturell saubere
              Lösungen.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/shield-check.svg"
              alt="Enterprise-Standards"
              color="primary-gradient"
            />
            <Typo.H3>Enterprise-Standards</Typo.H3>
            <Typo.Paragraph>
              Durch unsere Wurzeln bei Pexon verstehen wir komplexe
              IT-Landschaften, Compliance-Vorgaben und die Notwendigkeit von
              stabiler Governance.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/wrench.svg"
              alt="Professionalität"
              color="primary-gradient"
            />
            <Typo.H3>Agentur Digitale Transformation</Typo.H3>
            <Typo.Paragraph>
              Wir kennen den Unterschied zwischen einem Prototyp und einer
              geschäftskritischen Anwendung. Unsere Workflows sind darauf
              ausgelegt, 24/7 reibungslos zu funktionieren - von der
              KI-Implementierung bis zum laufenden Betrieb.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Latest Blog Posts */}
      <LatestBlogPosts />

      {/* What Drives Us Section */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>
                „Time-to-Market"-Falle
              </IntroBox.PreHeadline>
              <IntroBox.Headline>
                Automatisierung mit n8n als Lösung
              </IntroBox.Headline>
              <IntroBox.Paragraph>
                Besonders im Großhandel und Retail ist Geschwindigkeit die
                härteste Währung. Manuelle Prozesse wirken hier wie eine Bremse.
                Wenn neue Produkte wochenlang im Lager liegen, weil die
                PIM-Daten manuell eingepflegt werden müssen, oder wenn Angebote
                Tage brauchen, ist das verlorener Umsatz.
              </IntroBox.Paragraph>
              <IntroBox.Paragraph>
                Wir lösen dieses Problem durch Workflow Engineering. Mit einer
                Kombination aus moderner KI und n8n-basierter Automatisierung
                schaffen wir „Daten-Autobahnen".
              </IntroBox.Paragraph>
            </IntroBox>
          </div>
          <div>
            <TimelineAsSteps>
              <TimelineAsStepsStep value={1}>
                <Typo.H3 className="mt-2!">
                  Entkopplung von Wachstum und Headcount
                </Typo.H3>
                <Typo.Paragraph>
                  Sie skalieren Ihren Umsatz, ohne linear neue Stellen im
                  Backoffice schaffen zu müssen.
                </Typo.Paragraph>
              </TimelineAsStepsStep>

              <TimelineAsStepsStep value={2}>
                <Typo.H3 className="mt-2!">Nutzung von Dark Data</Typo.H3>
                <Typo.Paragraph>
                  Wir machen Informationen aus Belegen und Rechnungen
                  strategisch nutzbar (Transactional Intelligence).
                </Typo.Paragraph>
              </TimelineAsStepsStep>

              <TimelineAsStepsStep value={3} isLast>
                <Typo.H3 className="mt-2!">Fehlerresistenz</Typo.H3>
                <Typo.Paragraph>
                  Wo Menschen bei monotonen Aufgaben ermüden, bleibt unsere KI
                  bei 100% Präzision.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
            </TimelineAsSteps>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Time-to-Value Promise Section */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Rapid Implementation</IntroBox.PreHeadline>
          <IntroBox.Headline>Time-to-Value in 5 Tagen</IntroBox.Headline>
          <IntroBox.Subline>
            Wir glauben nicht an monatelange Beratungszyklen ohne Ergebnis.
            Unser Ansatz ist agil und messbar.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/rocket-launch.svg"
              alt="Schneller Start"
              color="primary-gradient"
            />
            <Typo.H3>Tag 1-5: Live</Typo.H3>
            <Typo.Paragraph>
              Durch Automatisierung mit n8n bringen wir Ihren ersten produktiven
              Workflow live. Keine monatelangen Planungsphasen, sondern direkte
              Ergebnisse.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/adjustments.svg"
              alt="Managed Operations"
              color="primary-gradient"
            />
            <Typo.H3>Managed Operations</Typo.H3>
            <Typo.Paragraph>
              Wir übernehmen den Betrieb. Wir monitoren die KI-Qualität,
              optimieren die Token-Kosten und sorgen dafür, dass die
              Automatisierung mit Ihrem Unternehmen mitwächst.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/users-group.svg"
              alt="Human-in-the-Loop"
              color="primary-gradient"
            />
            <Typo.H3>Human-in-the-Loop</Typo.H3>
            <Typo.Paragraph>
              Wir integrieren Ihre Mitarbeiter sinnvoll in den Prozess. Die KI
              arbeitet vor, der Mensch gibt die finale Freigabe. 100% Qualität
              bei minimalem Zeitaufwand.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Individual Solutions Section */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-12">
          <div className="relative aspect-video">
            <Image
              src="/images/business-automation.jpg"
              alt="Workflow Engineering"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Keine Plattform-Logik</IntroBox.PreHeadline>
              <IntroBox.Headline>Wir bauen Ihre Lösung.</IntroBox.Headline>
              <IntroBox.Subline>
                In einer Welt voller „Blackbox"-Software gehen wir einen anderen
                Weg. Bluebatch ist kein anonymes Tool, sondern eine
                Workflow-Engineering-Unit. Wir analysieren Ihre manuellen
                Prozesse, entwerfen die passende Architektur und implementieren
                individuelle Lösungen auf Basis von n8n-basierter
                Automatisierung.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Das Besondere: Ihre Daten gehören Ihnen. Wir bauen die Workflows
                direkt in Ihrer Infrastruktur oder auf dedizierten Instanzen.
                Ihre sensiblen Geschäftsdaten verlassen niemals Ihren
                Kontrollbereich.
              </IntroBox.Subline>
            </IntroBox>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Engineering Approach Section */}
      <ContentWrapper colorScheme="dark">
        <IntroBox dark>
          <IntroBox.PreHeadline>Our Approach</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum Bluebatch? Der Engineering-Ansatz
          </IntroBox.Headline>
          <IntroBox.Subline>
            Wir setzen auf Transparenz, bewährte Patterns und Enterprise-DNA.
          </IntroBox.Subline>
        </IntroBox>

        <CardShowcase>
          <CardShowcase.Item size="large">
            <CardShowcase.Image
              src="/images/training-seminar.jpg"
              alt="Kein Lock-in"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>
                Kein Lock-in, volle Souveränität
              </CardShowcase.Title>
              <CardShowcase.Description>
                Wir nutzen Open-Source-Power (wie n8n) und
                Cloud-Native-Technologien. Die Logik der Workflows ist
                transparent und bleibt in Ihrem Besitz.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>

          <CardShowcase.Item size="small">
            <CardShowcase.Image
              src="/images/human-resources.jpg"
              alt="Bewährte Patterns"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>
                Bewährte Patterns - Individuelle Umsetzung
              </CardShowcase.Title>
              <CardShowcase.Description>
                Wir nutzen erprobte Blueprints für Belegverarbeitung und
                Stammdatenpflege, individualisiert für Ihre Systemlandschaft.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>

          <CardShowcase.Item size="small">
            <CardShowcase.Image
              src="/images/business-growth.jpg"
              alt="Enterprise-DNA"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>
                Enterprise-DNA durch Pexon
              </CardShowcase.Title>
              <CardShowcase.Description>
                Als Tochter der Pexon Consulting bringen wir Erfahrung aus
                hochkomplexen Cloud-Projekten mit. Production-Ready.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>

          <CardShowcase.Item size="large">
            <CardShowcase.Image
              src="/images/office-building.jpg"
              alt="Managed Operations"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>
                Workflow-as-a-Service: Wir bauen und betreiben
              </CardShowcase.Title>
              <CardShowcase.Description>
                Ein komplexer Workflow ist ein lebendes System. Wir überwachen,
                optimieren und sichern Ihre Automatisierung nach dem Go-Live.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>
        </CardShowcase>
      </ContentWrapper>

      {/* Workflow-as-a-Service Section */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>
                Workflow-as-a-Service (WAAS)
              </IntroBox.PreHeadline>
              <IntroBox.Headline>
                Wir bauen und wir betreiben.
              </IntroBox.Headline>
              <IntroBox.Subline>
                Ein komplexer Workflow ist kein einmaliges Projekt, sondern ein
                lebendes System. APIs ändern sich, Dokumentenformate variieren,
                KI-Modelle entwickeln sich weiter. Wir lassen Sie nach dem
                Go-Live nicht allein.
              </IntroBox.Subline>
            </IntroBox>
          </div>
          <div>
            <TimelineAsSteps>
              <TimelineAsStepsStep value={1}>
                <Typo.H3 className="mt-2!">Managed Operations</Typo.H3>
                <Typo.Paragraph>
                  Wir überwachen die Ausführungen Ihrer Workflows in Echtzeit
                  und reagieren proaktiv auf Anomalien.
                </Typo.Paragraph>
              </TimelineAsStepsStep>

              <TimelineAsStepsStep value={2}>
                <Typo.H3 className="mt-2!">Continuous Optimization</Typo.H3>
                <Typo.Paragraph>
                  Wir verfeinern die Prompts und Logiken laufend, um die
                  Treffsicherheit zu erhöhen und Token-Kosten zu senken.
                </Typo.Paragraph>
              </TimelineAsStepsStep>

              <TimelineAsStepsStep value={3} isLast>
                <Typo.H3 className="mt-2!">Quality Assurance</Typo.H3>
                <Typo.Paragraph>
                  Durch „Human-in-the-Loop"-Schnittstellen stellen wir sicher,
                  dass die KI nur vorbereitet und der Mensch dort steuert, wo es
                  kritisch ist.
                </Typo.Paragraph>
              </TimelineAsStepsStep>
            </TimelineAsSteps>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Philosophy Section */}
      <ContentWrapper>
        <IntroBox size="small">
          <IntroBox.PreHeadline>Unsere Philosophie</IntroBox.PreHeadline>
          <IntroBox.Headline>Ergebnisse statt Features</IntroBox.Headline>
          <IntroBox.Subline>
            Wir reden nicht über Software-Funktionen, sondern über
            Business-Impact. Unser Ziel ist es, dass Ihr Einkauf schneller
            verhandeln kann, Ihr Vertrieb schneller Angebote versendet und Ihr
            Backoffice von monotonen Aufgaben befreit wird.
          </IntroBox.Subline>
          <IntroBox.Paragraph>
            Bluebatch ist die Brücke zwischen Ihrer heutigen manuellen Arbeit
            und einer skalierbaren Zukunft - powered by Workflow-Automatisierung
            über n8n.
          </IntroBox.Paragraph>
          <div>
            <ContactButton icon="calendar" size="lg">
              Erstgespräch vereinbaren
            </ContactButton>
          </div>
        </IntroBox>
      </ContentWrapper>

      {/* Standorte */}
      <ContentWrapper colorScheme="gradient-night">
        <IntroBox dark>
          <IntroBox.Headline>Unsere Standorte</IntroBox.Headline>
          <IntroBox.Subline>
            Persönliche Betreuung in den wichtigsten Wirtschaftsregionen
            Deutschlands.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          {[
            {
              name: "Berlin",
              slug: "berlin",
              fact: "AI-Workflows für Startups, Scale-ups und Konzerne in der Hauptstadt.",
              image: "/images/cities/berlin.jpg",
              delay: "0s",
            },
            {
              name: "München",
              slug: "muenchen",
              fact: "Prozessautomatisierung für Industrie und Tech im Süden Deutschlands.",
              image: "/images/cities/muenchen.jpg",
              delay: "0.8s",
            },
            {
              name: "Hamburg",
              slug: "hamburg",
              fact: "Workflow Engineering für Handel, Logistik und Maritime Wirtschaft.",
              image: "/images/cities/hamburg.jpg",
              delay: "1.6s",
            },
          ].map((city) => (
            <Link
              key={city.slug}
              href={resolveHref(`/standorte/${city.slug}`)}
              className="group"
            >
              <GlassCard
                float
                floatDelay={city.delay}
                className="h-full overflow-hidden p-0!"
              >
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={city.image}
                    alt={city.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <GlassCardTitle>{city.name}</GlassCardTitle>
                  <GlassCardDescription>{city.fact}</GlassCardDescription>
                  <GlassCardArrow>Mehr erfahren</GlassCardArrow>
                </div>
              </GlassCard>
            </Link>
          ))}
        </SimpleGrid>

        <div className="mt-16 text-center">
          <Link
            href="/automatisierungs-agentur"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:shadow-lg hover:shadow-blue-500/10"
          >
            Alle Standorte entdecken
            <span className="inline-block transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </ContentWrapper>

      {/* Customer Logo Band */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer type="band" />
      </ContentWrapper>

      {/* Final Statement Section */}
      <ContentWrapper colorScheme="dark">
        <div className="py-12">
          <IntroBox dark>
            <IntroBox.PreHeadline>Who We Are</IntroBox.PreHeadline>
            <IntroBox.Headline>Wir sind Bluebatch.</IntroBox.Headline>
            <IntroBox.Subline className="mb-8!">
              Wir kombinieren die Agilität eines KI-Startups mit der
              Zuverlässigkeit einer Enterprise-Beratung. Lassen Sie uns
              gemeinsam die manuelle Ära beenden und Ihr Unternehmen auf
              „Autopilot" für Routineprozesse stellen.
            </IntroBox.Subline>
            <div>
              <ContactButton icon="chat">
                Jetzt KI Readiness Check vereinbaren
              </ContactButton>
            </div>
          </IntroBox>
        </div>
      </ContentWrapper>
    </>
  );
}
