import type { Metadata } from "next";
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
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import CardShowcase from "@/components/cards/card-showcase";
import Customer from "@/components/sections/customer/customer";
import IntroBox from "@/components/ui/intro-box";

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
          <SimpleCard>
            <SimpleCard.Icon
              src="/icons/cloud.svg"
              alt="Cloud-Native"
              color="primary-gradient"
            />
            <Typo.H3>Cloud-Native & Sicher</Typo.H3>
            <Typo.Paragraph>
              Wir wissen, wie man Systeme skaliert, die höchsten
              Sicherheitsansprüchen genügen. Wir „basteln" nicht mit Tools, wir
              bauen robuste, architekturell saubere Lösungen.
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
              <IntroBox.Paragraph>
                Besonders im Großhandel und Retail ist Geschwindigkeit die
                härteste Währung. Manuelle Prozesse wirken hier wie eine Bremse.
                Wenn neue Produkte wochenlang im Lager liegen, weil die
                PIM-Daten manuell eingepflegt werden müssen, oder wenn Angebote
                Tage brauchen, ist das verlorener Umsatz.
              </IntroBox.Paragraph>
              <IntroBox.Paragraph>
                Wir lösen dieses Problem durch Workflow Engineering. Mit einer
                Kombination aus moderner KI und n8n-Automatisierung schaffen wir
                „Daten-Autobahnen".
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
              Wir bringen Ihren ersten produktiven Workflow live. Keine
              monatelangen Planungsphasen, sondern direkte Ergebnisse.
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
              <ContactButton icon="chat">
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
