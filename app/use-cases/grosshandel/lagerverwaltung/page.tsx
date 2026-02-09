import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";
import BackgroundHero from "@/components/hero-components/background-hero";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import PhaseCard, {
  PhaseCardHeader,
  PhaseCardTitle,
  PhaseCardBadge,
  PhaseCardSubtitle,
  PhaseCardDescription,
} from "@/components/cards/phase-card";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/timeline-as-steps";
import ConsultationCtaDefault from "@/components/consultation-cta-default";
import { FaqContainer } from "@/components/faqs";
import IntroBox from "@/components/intro-box";
import Customer from "@/components/customer/customer";

export const pageConfig: PageConfig = {
  title: "Lagerverwaltung",
  description:
    "Lagerbestände in Echtzeit überwachen und Nachbestellungen automatisch auslösen.",
};

export const metadata: Metadata = {
  title: "Lagerverwaltung – Großhandel | BlueBatch",
  description:
    "Wie BlueBatch die Lagerverwaltung im Großhandel automatisiert – Echtzeit-Bestände und automatische Nachbestellungen.",
  openGraph: {
    title: "Lagerverwaltung – Großhandel | BlueBatch",
    description:
      "Echtzeit-Bestandssynchronisation und KI-basierte Bedarfsprognosen für automatische Nachbestellungen.",
    type: "website",
    locale: "de_DE",
    siteName: "BlueBatch",
    images: [{ url: "/images/cover-fb.jpg", width: 1200, height: 630, alt: "BlueBatch Lagerverwaltung" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagerverwaltung – Großhandel | BlueBatch",
    description:
      "Echtzeit-Bestandssynchronisation und KI-basierte Bedarfsprognosen für automatische Nachbestellungen.",
    images: ["/images/cover-fb.jpg"],
  },
};

const stats = [
  { value: 72, suffix: "%", label: "Kostenreduktion" },
  { value: 10, suffix: "%", label: "Mehr Umsatz" },
  { value: 17, suffix: "%", label: "Weniger Kapitalbindung" },
];

const phases = [
  {
    number: 1,
    title: "Echtzeit-Sync",
    badge: "Bidirektional",
    subtitle: "Multi-System Integration",
    description:
      "Alle Bestandsbewegungen (Wareneingang, Verkauf, Umlagerung) werden in Echtzeit zwischen ERP, WMS, Marktplätzen und Shops synchronisiert.",
  },
  {
    number: 2,
    title: "Bedarfsprognose",
    badge: "KI-gestützt",
    subtitle: "Machine Learning",
    description:
      "ML analysiert Verkaufshistorie, Saisonalität und externe Faktoren. 30-Tage-Prognosen mit 80-90% Genauigkeit für optimale Bestellplanung.",
  },
  {
    number: 3,
    title: "Auto-Nachbestellung",
    badge: "EOQ-Optimiert",
    subtitle: "Intelligente Bestellmengen",
    description:
      "Wenn Bestände unter den Meldebestand fallen, werden automatisch Bestellungen mit optimalen Mengen generiert und an Lieferanten übermittelt.",
  },
  {
    number: 4,
    title: "Alerts & Dashboards",
    badge: "Proaktiv",
    subtitle: "Echtzeit-Monitoring",
    description:
      "Echtzeit-Dashboards zeigen Bestandsstatus über alle Standorte. Proaktive Alerts bei Engpässen, Überbeständen oder Lieferantenproblemen.",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection noPadding>
        <BackgroundHero
          imageSrc="/images/sw.jpg"
          overlayOpacity={0.85}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>
            Lagerverwaltung
          </BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            Intelligente{" "}
            <BackgroundHero.Highlight>
              Lagerverwaltung
            </BackgroundHero.Highlight>
            <br />
            mit automatischer Nachbestellung
          </BackgroundHero.Headline>
          <BackgroundHero.Description>
            Echtzeit-Bestandssynchronisation über alle Lager und Kanäle.
            KI-basierte Bedarfsprognosen lösen automatisch Nachbestellungen aus.
            Nie wieder Fehlbestand oder Überbestand.
          </BackgroundHero.Description>
          <BackgroundHero.CallToAction>
            <ContactButton icon="chat">Bestandsanalyse anfragen</ContactButton>
          </BackgroundHero.CallToAction>
          <BackgroundHero.Stats>
            {stats.map((stat, index) => (
              <BackgroundHero.Stat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </BackgroundHero.Stats>
        </BackgroundHero>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Das Problem</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Versteckte Kosten manueller Lagerverwaltung
          </IntroBox.Headline>
        </IntroBox>

        <SimpleGrid cols={3} className="mt-10">
          <SimpleCard className="bg-red-50! border-red-100!">
            <Typo.H3 className="text-red-600">130.000 €+</Typo.H3>
            <Typo.Paragraph className="text-sm md:text-base text-gray-600 mt-2">
              Jährlich verlorener Umsatz durch Lieferengpässe (bei 5% Fehlbestandsrate)
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard className="bg-red-50! border-red-100!">
            <Typo.H3 className="text-red-600">75.000 €+</Typo.H3>
            <Typo.Paragraph className="text-sm md:text-base text-gray-600 mt-2">
              Gebundenes Kapital in Überbeständen (bei 25% Ladenhütern)
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard className="bg-red-50! border-red-100!">
            <Typo.H3 className="text-red-600">70-80%</Typo.H3>
            <Typo.Paragraph className="text-sm md:text-base text-gray-600 mt-2">
              Typische Bestandsgenauigkeit – 20-30% Fehler bei manuellen Zählungen
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper background="bg-gray-50" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Der Workflow</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So funktioniert intelligente Lagerverwaltung
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vier automatisierte Module – von der Synchronisation zur proaktiven
            Steuerung.
          </IntroBox.Subline>
        </IntroBox>

        <TimelineAsSteps>
          {phases.map((phase, index) => (
            <TimelineAsStepsStep
              key={phase.number}
              value={phase.number}
              isLast={index === phases.length - 1}
            >
              <PhaseCard>
                <PhaseCardHeader>
                  <PhaseCardTitle>{phase.title}</PhaseCardTitle>
                  <PhaseCardBadge>{phase.badge}</PhaseCardBadge>
                </PhaseCardHeader>
                <PhaseCardSubtitle>{phase.subtitle}</PhaseCardSubtitle>
                <PhaseCardDescription>{phase.description}</PhaseCardDescription>
              </PhaseCard>
            </TimelineAsStepsStep>
          ))}
        </TimelineAsSteps>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>KI-Prognose</IntroBox.PreHeadline>
              <IntroBox.Headline>
                Machine Learning statt Bauchgefühl
              </IntroBox.Headline>
              <IntroBox.Subline>
                Unsere KI-Modelle analysieren historische Verkaufsdaten,
                Saisonmuster, Aktionskalender und externe Faktoren, um den Bedarf
                präzise vorherzusagen.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Das Ergebnis: 80-90% Prognosegenauigkeit statt Überschuss oder
                Engpass. Das System lernt kontinuierlich und verbessert sich mit
                jedem Verkaufszyklus.
              </IntroBox.Subline>
            </IntroBox>
          </div>
          <div className="relative aspect-video">
            <Image
              src="/images/exhibition-1659447.jpg"
              alt="KI Bedarfsprognose"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper background="bg-gray-100">
        <IntroBox>
          <IntroBox.PreHeadline>Ergebnisse</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Typische Ergebnisse nach 6 Monaten
          </IntroBox.Headline>
        </IntroBox>

        <SimpleGrid cols={4} className="mt-10">
          <SimpleCard
            className="text-center"
            icon={
              <svg className="w-12 h-12 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            }
          >
            <div className="text-3xl font-bold text-secondary-500 mb-2">95%+</div>
            <Typo.Paragraph className="text-sm">
              Bestandsgenauigkeit statt 70-80%
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard
            className="text-center"
            icon={
              <svg className="w-12 h-12 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            }
          >
            <div className="text-3xl font-bold text-secondary-500 mb-2">8-10%</div>
            <Typo.Paragraph className="text-sm">
              Mehr Umsatz durch weniger Fehlbestände
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard
            className="text-center"
            icon={
              <svg className="w-12 h-12 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
          >
            <div className="text-3xl font-bold text-secondary-500 mb-2">17%</div>
            <Typo.Paragraph className="text-sm">
              Weniger Kapitalbindung im Lager
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard
            className="text-center"
            icon={
              <svg className="w-12 h-12 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            }
          >
            <div className="text-3xl font-bold text-secondary-500 mb-2">10x</div>
            <Typo.Paragraph className="text-sm">
              Skalierbarkeit ohne Personal-Aufbau
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>

      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>

      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question:
                "Wie unterscheidet sich automatisierte Lagerverwaltung von einem klassischen WMS?",
              answer:
                "Klassische WMS-Systeme erfordern manuelle Dateneingabe und periodische Batch-Updates, während unsere automatisierte Lösung n8n-Workflows nutzt, um Echtzeit-Synchronisation bidirektional über alle Systeme (ERP, E-Commerce, Lieferanten) zu gewährleisten. Der Hauptunterschied ist proaktive Automatisierung statt reaktiver manueller Prozesse.",
            },
            {
              question:
                "Kann die Automatisierung mit unserem bestehenden ERP-System integrieren?",
              answer:
                "Ja, n8n unterstützt Integration mit allen gängigen ERP-Systemen (SAP, Oracle, NetSuite, ERPNext, Odoo, Microsoft Dynamics) über native Konnektoren, REST APIs oder EDI-Gateways. Die Automatisierungsschicht sitzt auf Ihren bestehenden Systemen und verbindet sie, ohne dass Ersatz erforderlich ist.",
            },
            {
              question:
                "Wie genau ist die KI-basierte Bedarfsprognose?",
              answer:
                "Moderne KI-Modelle erreichen 80-90% Prognosegenauigkeit durch Analyse historischer Verkaufsdaten, Saisonmuster, Aktionskalender und externer Faktoren (Markttrends, Wetter). Das System lernt kontinuierlich und verbessert sich mit jeder Iteration.",
            },
            {
              question:
                "Was passiert während der Übergangsphase zur Automatisierung?",
              answer:
                "Die Implementierung erfolgt phasenweise: (1) Read-Only Datenfeeds zur Überwachung verbinden, (2) Automatische Alerts und Empfehlungen aktivieren, (3) Automatische Nachbestellung mit Genehmigungs-Workflows einschalten, (4) Vollautomatisierung mit Exception-basierter Überwachung. Die meisten Umstellungen sind in 4-8 Wochen abgeschlossen.",
            },
          ]}
        />
      </ContentWrapper>
    </>
  );
}
