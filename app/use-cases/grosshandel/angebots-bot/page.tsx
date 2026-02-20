import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/hero-components/hero-2-column";
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
  title: "Angebots-Bot",
  description:
    "Automatische Angebotserstellung und -versand basierend auf Kundenanfragen.",
};

export const metadata: Metadata = {
  title: "Angebots-Bot – Großhandel | Bluebatch",
  description:
    "Wie Bluebatch Großhändlern hilft, Angebote automatisch zu erstellen und zu versenden. 21x höhere Qualifizierungsrate.",
  openGraph: {
    title: "Angebots-Bot – Großhandel | Bluebatch",
    description:
      "Von der Kundenanfrage zum professionellen Angebot in Minuten. 21x höhere Qualifizierungsrate.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Angebots-Bot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angebots-Bot – Großhandel | Bluebatch",
    description:
      "Von der Kundenanfrage zum professionellen Angebot in Minuten. 21x höhere Qualifizierungsrate.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/use-cases/grosshandel/angebots-bot",
  },
};

const phases = [
  {
    number: 1,
    title: "Anfrage erfassen",
    badge: "KI-Parsing",
    subtitle: "Multi-Channel Intake",
    description:
      "Kundenanfragen per E-Mail, Webformular oder CRM werden automatisch analysiert. Die KI extrahiert Produkte, Mengen, Liefertermine und Kontaktdaten.",
  },
  {
    number: 2,
    title: "Preise berechnen",
    badge: "ERP-Integration",
    subtitle: "Echtzeit-Preisabfrage",
    description:
      "Automatischer Lookup im ERP: Kundenpreise, Staffelrabatte, Verfügbarkeit. Margen-Schutz und Business Rules werden angewendet.",
  },
  {
    number: 3,
    title: "Angebot erstellen",
    badge: "PDF-Generierung",
    subtitle: "Professionelle Dokumente",
    description:
      "Ein formatiertes PDF-Angebot wird aus Ihrer Vorlage generiert. Bei hohen Rabatten: automatisches Routing zur Freigabe.",
  },
  {
    number: 4,
    title: "Versenden & Tracken",
    badge: "Follow-up",
    subtitle: "Automatisches Nachfassen",
    description:
      "Das Angebot wird versendet, Öffnungen getrackt, Follow-up Aufgaben im CRM erstellt (Tag 3, 7, 14).",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Angebots-Bot</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Von der Anfrage zum Angebot in Minuten
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Leads, die innerhalb von 5 Minuten kontaktiert werden, haben eine
              21x höhere Qualifizierungsrate. Unser Angebots-Bot erstellt
              professionelle Angebote in Minuten statt Stunden –
              vollautomatisch.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Demo anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              70-90% schnellere Angebotserstellung
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/pricing-calculator.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper border="T">
        <IntroBox>
          <IntroBox.PreHeadline>Ihre Vorteile</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Schnellere Angebote, mehr Abschlüsse
          </IntroBox.Headline>
        </IntroBox>

        <SimpleGrid cols={4} className="mt-10">
          <SimpleCard className="text-center">
            <div className="text-4xl font-bold text-secondary-500 mb-2">
              21x
            </div>
            <Typo.Paragraph className="text-sm">
              Höhere Qualifizierungsrate bei schnellem Kontakt
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard className="text-center">
            <div className="text-4xl font-bold text-secondary-500 mb-2">
              70-90%
            </div>
            <Typo.Paragraph className="text-sm">
              Schnellere Angebotserstellung
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard className="text-center">
            <div className="text-4xl font-bold text-secondary-500 mb-2">
              15-25%
            </div>
            <Typo.Paragraph className="text-sm">
              Höhere Conversion Rate
            </Typo.Paragraph>
          </SimpleCard>
          <SimpleCard className="text-center">
            <div className="text-4xl font-bold text-secondary-500 mb-2">
              24/7
            </div>
            <Typo.Paragraph className="text-sm">
              Angebotsfähigkeit rund um die Uhr
            </Typo.Paragraph>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper background="bg-gray-50" bodyWidth="small">
        <IntroBox>
          <IntroBox.PreHeadline>Der Workflow</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So funktioniert der Angebots-Bot
          </IntroBox.Headline>
          <IntroBox.Subline>
            Vier automatisierte Schritte – von der Kundenanfrage zum versendeten
            Angebot.
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
              <IntroBox.PreHeadline>Sales-Team Entlastung</IntroBox.PreHeadline>
              <IntroBox.Headline>
                40% mehr Zeit für echten Vertrieb
              </IntroBox.Headline>
              <IntroBox.Subline>
                Ihr Vertriebsteam verbringt weniger Zeit mit Admin-Aufgaben und
                mehr Zeit mit dem, was zählt: Kundenbeziehungen aufbauen und
                Abschlüsse erzielen.
              </IntroBox.Subline>
              <IntroBox.Subline>
                Der Angebots-Bot übernimmt die repetitiven Aufgaben: Preise
                nachschlagen, Dokumente formatieren, E-Mails versenden,
                Follow-ups planen.
              </IntroBox.Subline>
            </IntroBox>
          </div>
          <div className="relative aspect-video">
            <Image
              src="/images/business-professional.jpg"
              alt="Sales Team Entlastung"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper background="bg-primary-800">
        <div className="py-8">
          <IntroBox dark>
            <IntroBox.PreHeadline>Integration</IntroBox.PreHeadline>
            <IntroBox.Headline>
              Nahtlose Anbindung an Ihre Systeme
            </IntroBox.Headline>
            <IntroBox.Subline>
              Der Angebots-Bot integriert sich mit Ihrem CRM, ERP und
              E-Mail-System. Preise kommen aus Ihrer Single Source of Truth,
              Angebote werden im CRM dokumentiert.
            </IntroBox.Subline>
          </IntroBox>

          <SimpleGrid cols={3} className="mt-10">
            <SimpleCard className="bg-white/10! border-white/20! text-white">
              <Typo.H3 className="text-white!">CRM-Integration</Typo.H3>
              <Typo.Paragraph className="text-gray-300!">
                HubSpot, Salesforce, Zoho, Microsoft Dynamics – automatische
                Kundendaten und Opportunity-Updates.
              </Typo.Paragraph>
            </SimpleCard>
            <SimpleCard className="bg-white/10! border-white/20! text-white">
              <Typo.H3 className="text-white!">ERP-Anbindung</Typo.H3>
              <Typo.Paragraph className="text-gray-300!">
                SAP, Odoo, NetSuite – Echtzeit-Preise, Verfügbarkeiten und
                kundenspezifische Konditionen.
              </Typo.Paragraph>
            </SimpleCard>
            <SimpleCard className="bg-white/10! border-white/20! text-white">
              <Typo.H3 className="text-white!">E-Signatur</Typo.H3>
              <Typo.Paragraph className="text-gray-300!">
                DocuSign, Adobe Sign – vom Angebot zur Unterschrift ohne
                Medienbruch.
              </Typo.Paragraph>
            </SimpleCard>
          </SimpleGrid>
        </div>
      </ContentWrapper>

      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding>
        <Customer />
      </ContentWrapper>

      <ContentWrapper>
        <FaqContainer
          faqs={[
            {
              question: "Wie stellt das System aktuelle Preise sicher?",
              answer:
                "Das System integriert sich direkt mit Ihrem ERP als Single Source of Truth. Preisänderungen werden in Echtzeit über die API übernommen. Business Rules schützen Ihre Margen, Freigabe-Workflows fangen Angebote ab, die Rabattschwellen überschreiten.",
            },
            {
              question: "Kann das System auch komplexe Custom-Angebote?",
              answer:
                "Ja, der Workflow unterscheidet: Standard-Katalogartikel werden vollautomatisch bearbeitet. Bei konfigurierten Produkten routet der Workflow zur manuellen Eingabe, während Dokumentenerstellung, Freigabe und Versand weiterhin automatisiert ablaufen.",
            },
            {
              question: "Was passiert bei telefonischen Anfragen?",
              answer:
                "Sales-Mitarbeiter können den Workflow manuell auslösen – per Webformular oder CRM-Update. Die Automatisierung übernimmt dann für Preisabfrage, Kalkulation und Dokumentenerstellung. So profitiert jedes Angebot von der Automatisierung.",
            },
            {
              question: "Wie lange dauert die Einrichtung?",
              answer:
                "Basis-Angebotsautomatisierung ist in 2-4 Wochen betriebsbereit. Komplexere Implementierungen mit mehrstufigen Freigaben und Custom Dashboards dauern 6-12 Wochen. Phased Rollout möglich.",
            },
          ]}
        />
      </ContentWrapper>
    </>
  );
}
