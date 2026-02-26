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
  title: "Lagerverwaltung – Großhandel | Bluebatch",
  description:
    "Wie Bluebatch die Lagerverwaltung im Großhandel automatisiert – Echtzeit-Bestände und automatische Nachbestellungen.",
  openGraph: {
    title: "Lagerverwaltung – Großhandel | Bluebatch",
    description:
      "Echtzeit-Bestandssynchronisation und KI-basierte Bedarfsprognosen für automatische Nachbestellungen.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Lagerverwaltung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lagerverwaltung – Großhandel | Bluebatch",
    description:
      "Echtzeit-Bestandssynchronisation und KI-basierte Bedarfsprognosen für automatische Nachbestellungen.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/grosshandel/lagerverwaltung",
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
          imageSrc="/images/warehouse-software.jpg"
          overlayOpacity={0.85}
          opacityBackground="white"
        >
          <BackgroundHero.TopLabel>Lagerverwaltung</BackgroundHero.TopLabel>
          <BackgroundHero.Headline>
            Intelligente{" "}
            <BackgroundHero.Highlight>Lagerverwaltung</BackgroundHero.Highlight>
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
              Jährlich verlorener Umsatz durch Lieferengpässe (bei 5%
              Fehlbestandsrate)
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
              Typische Bestandsgenauigkeit – 20-30% Fehler bei manuellen
              Zählungen
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
                Saisonmuster, Aktionskalender und externe Faktoren, um den
                Bedarf präzise vorherzusagen.
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
              src="/images/trade-exhibition.jpg"
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
          <SimpleCard className="text-center">
            <SimpleCard.Icon
              src="/icons/badge-check.svg"
              alt="Bestandsgenauigkeit"
              color="primary-gradient"
            />
            <div className="text-3xl font-bold text-primary-500 mb-2">
              95%+
            </div>
            <Typo.Paragraph className="text-sm">
              Bestandsgenauigkeit statt 70-80%
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard className="text-center">
            <SimpleCard.Icon
              src="/icons/arrow-trending-up.svg"
              alt="Mehr Umsatz"
              color="primary-gradient"
            />
            <div className="text-3xl font-bold text-primary-500 mb-2">
              8-10%
            </div>
            <Typo.Paragraph className="text-sm">
              Mehr Umsatz durch weniger Fehlbestände
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard className="text-center">
            <SimpleCard.Icon
              src="/icons/currency-circle.svg"
              alt="Kapitalbindung"
              color="primary-gradient"
            />
            <div className="text-3xl font-bold text-primary-500 mb-2">
              17%
            </div>
            <Typo.Paragraph className="text-sm">
              Weniger Kapitalbindung im Lager
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard className="text-center">
            <SimpleCard.Icon
              src="/icons/lightning-bolt.svg"
              alt="Skalierbarkeit"
              color="primary-gradient"
            />
            <div className="text-3xl font-bold text-primary-500 mb-2">
              10x
            </div>
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
              question: "Wie genau ist die KI-basierte Bedarfsprognose?",
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
