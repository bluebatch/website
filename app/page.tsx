import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import BackgroundHero from "@/components/hero-components/background-hero";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/timeline-as-steps";
import ConsultationCtaDefault from "@/components/consultation-cta-default";
import CardShowcase from "@/components/cards/card-showcase";
import Customer from "@/components/customer/customer";
import IntroBox from "@/components/intro-box";

export const metadata: Metadata = {
  title: "Bluebatch – Enterprise AI-Automation | Workflow Engineering",
  description:
    "Wir beenden die Fehlallokation von Humankapital. Bluebatch automatisiert Ihre manuellen Backoffice-Prozesse mit AI-Workflows auf Enterprise-Niveau – live in nur 5 Tagen.",
  keywords: [
    "AI Automation",
    "Workflow Engineering",
    "Enterprise AI",
    "Backoffice Automatisierung",
    "KI Workflows",
    "n8n",
    "Großhandel",
    "Retail",
    "Digitale Mitarbeiter",
  ],
  authors: [{ name: "Bluebatch" }],
  openGraph: {
    title: "Bluebatch – Enterprise AI-Automation",
    description:
      "Skalieren Sie Ihren Umsatz, nicht Ihren Headcount. AI-Workflows live in nur 5 Tagen.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch – Enterprise AI-Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bluebatch – Enterprise AI-Automation",
    description:
      "Skalieren Sie Ihren Umsatz, nicht Ihren Headcount. AI-Workflows live in nur 5 Tagen.",
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
          videoSrc="/videos/Video_of_Person_Drawing_Workflows.mp4"
          overlayOpacity={0.85}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            Enterprise AI-Automation
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            Skalieren Sie Ihren Umsatz,
            <br />
            nicht Ihren{" "}
            <BackgroundHero.Highlight>Headcount</BackgroundHero.Highlight>
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Wir beenden die Fehlallokation von Humankapital. Bluebatch
            automatisiert Ihre manuellen Backoffice-Prozesse mit AI-Workflows
            auf Enterprise-Niveau – live in nur 5 Tagen.
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
      <ContentWrapper background="bg-gray-50">
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>The DNA</IntroBox.PreHeadline>
              <IntroBox.Headline>
                Enterprise-DNA trifft auf radikale Automatisierung
              </IntroBox.Headline>
              <IntroBox.Subline>
                Im Herzen des Mittelstands und des Großhandels liegt ein
                ungenutztes Potenzial. Während Unternehmen händeringend nach
                Fachkräften suchen, verbringen ihre besten Mitarbeiter oft mehr
                als die Hälfte ihrer Arbeitszeit mit mechanischen Aufgaben.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Bluebatch wurde gegründet, um diese Fehlallokation von
                Humankapital zu beenden. Wir bauen keine klassische Software –
                wir erschaffen digitale Mitarbeiter. Unsere AI-Workflows
                übernehmen die kognitive Routinearbeit, damit Ihre Teams wieder
                das tun können, wofür sie eingestellt wurden.
              </IntroBox.Subline>
            </IntroBox>
          </div>
          <div className="relative aspect-video">
            <Image
              src="/images/consulting-services.jpg"
              alt="AI Automation"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>

      {/* Enterprise Heritage Section */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Enterprise Heritage</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Keine „Clicky-Bude", sondern Enterprise-Expertise
          </IntroBox.Headline>
          <IntroBox.Subline>
            Bluebatch ist eine spezialisierte Tochter der Pexon Consulting. Als
            Teil einer etablierten IT-Cloud-Beratung auf Enterprise-Niveau
            bringen wir eine technologische Reife mit, die man bei reinen
            Automatisierungs-Agenturen selten findet.
          </IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          <SimpleCard
            icon={
              <svg
                className="w-12 h-12 text-secondary-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
                />
              </svg>
            }
          >
            <Typo.H3>Cloud-Native & Sicher</Typo.H3>
            <Typo.Paragraph>
              Wir wissen, wie man Systeme skaliert, die höchsten
              Sicherheitsansprüchen genügen. Wir „basteln" nicht mit Tools, wir
              bauen robuste, architekturell saubere Lösungen.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard
            icon={
              <svg
                className="w-12 h-12 text-secondary-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            }
          >
            <Typo.H3>Enterprise-Standards</Typo.H3>
            <Typo.Paragraph>
              Durch unsere Wurzeln bei Pexon verstehen wir komplexe
              IT-Landschaften, Compliance-Vorgaben und die Notwendigkeit von
              stabiler Governance.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard
            icon={
              <svg
                className="w-12 h-12 text-secondary-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                />
              </svg>
            }
          >
            <Typo.H3>Professionalität im Kern</Typo.H3>
            <Typo.Paragraph>
              Wir kennen den Unterschied zwischen einem Prototyp und einer
              geschäftskritischen Anwendung. Unsere Workflows sind darauf
              ausgelegt, 24/7 reibungslos zu funktionieren.
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* What Drives Us Section */}
      <ContentWrapper background="bg-gray-100">
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>
                „Time-to-Market"-Falle
              </IntroBox.PreHeadline>
              <IntroBox.Headline>Die Lösung</IntroBox.Headline>
              <IntroBox.Subline>
                Besonders im Großhandel und Retail ist Geschwindigkeit die
                härteste Währung. Manuelle Prozesse wirken hier wie eine Bremse.
                Wenn neue Produkte wochenlang im Lager liegen, weil die
                PIM-Daten manuell eingepflegt werden müssen, oder wenn Angebote
                Tage brauchen, ist das verlorener Umsatz.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Wir lösen dieses Problem durch Workflow Engineering. Mit einer
                Kombination aus moderner KI und n8n-Automatisierung schaffen wir
                „Daten-Autobahnen".
              </IntroBox.Subline>
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
          <SimpleCard
            icon={
              <svg
                className="w-12 h-12 text-secondary-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            }
          >
            <Typo.H3>Tag 1-5: Live</Typo.H3>
            <Typo.Paragraph>
              Wir bringen Ihren ersten produktiven Workflow live. Keine
              monatelangen Planungsphasen, sondern direkte Ergebnisse.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard
            icon={
              <svg
                className="w-12 h-12 text-secondary-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            }
          >
            <Typo.H3>Managed Operations</Typo.H3>
            <Typo.Paragraph>
              Wir übernehmen den Betrieb. Wir monitoren die KI-Qualität,
              optimieren die Token-Kosten und sorgen dafür, dass die
              Automatisierung mit Ihrem Unternehmen mitwächst.
            </Typo.Paragraph>
          </SimpleCard>

          <SimpleCard
            icon={
              <svg
                className="w-12 h-12 text-secondary-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            }
          >
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
      <ContentWrapper background="bg-gray-50">
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
                hochgradig individuelle Automatisierungen.
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
      <ContentWrapper background="bg-gray-900">
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
                Bewährte Patterns – Individuelle Umsetzung
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
      <ContentWrapper background="bg-gray-100">
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
            und einer automatisierten, skalierbaren Zukunft.
          </IntroBox.Paragraph>
          <div>
            <ContactButton icon="calendar" size="lg">
              Erstgespräch vereinbaren
            </ContactButton>
          </div>
        </IntroBox>
      </ContentWrapper>

      {/* Final Statement Section */}
      <ContentWrapper background="bg-primary-800">
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
              <ContactButton icon="chat" color="secondary">
                Jetzt Prozess-Check vereinbaren
              </ContactButton>
            </div>
          </IntroBox>
        </div>
      </ContentWrapper>

      {/* Consultation CTA */}
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
