import type { Metadata } from "next";
import Image from "next/image";
import ContentWrapper from "@/components/content-wrapper";
import Typo from "@/components/typo";
import type { PageConfig } from "@/lib/get-subpages";
import VideoBackgroundHero from "@/components/hero-components/video-background-hero";
import ContactButton from "@/components/buttons/contact-button";
import SimpleGrid from "@/components/simple-grid";
import SimpleCard, { SimpleCardFooter } from "@/components/cards/simple-card";
import CardShowcase from "@/components/cards/card-showcase";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/timeline-as-steps";
import ConsultationCtaDefault from "@/components/consultation-cta-default";
import { FaqContainer } from "@/components/faqs";
import IntroBox from "@/components/intro-box";
import Customer from "@/components/customer/customer";

export const pageConfig: PageConfig = {
  title: "Zertifikatsprüfung Lieferanten",
  description:
    "Lieferantenzertifikate automatisch prüfen, ablaufende Zertifikate erkennen und Erinnerungen senden.",
};

export const metadata: Metadata = {
  title: "Zertifikatsprüfung Lieferanten – Großhandel",
  description:
    "Wie bluebatch Großhändlern hilft, Lieferantenzertifikate automatisch zu prüfen.",
  openGraph: {
    title: "Zertifikatsprüfung Lieferanten – Großhandel",
    description:
      "Wie bluebatch Großhändlern hilft, Lieferantenzertifikate automatisch zu prüfen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zertifikatsprüfung Lieferanten – Großhandel",
    description:
      "Wie bluebatch Großhändlern hilft, Lieferantenzertifikate automatisch zu prüfen.",
  },
};

const stats = [
  { value: 99, suffix: "%", label: "Compliance-Quote" },
  { value: 90, suffix: "%", label: "Weniger Audit-Zeit" },
  { value: 60, suffix: "h", label: "Monatlich gespart" },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection noPadding>
        <VideoBackgroundHero
          videoSrc="/videos/ki_workflow.mp4"
          overlayOpacity={0.8}
          opacityBackground="white"
        >
          <VideoBackgroundHero.TopLabel>
            Zertifikatsprüfung
          </VideoBackgroundHero.TopLabel>
          <VideoBackgroundHero.Headline>
            Lieferanten&shy;zertifikate{" "}
            <VideoBackgroundHero.Highlight>
              automatisch
            </VideoBackgroundHero.Highlight>
            <br />
            prüfen und überwachen
          </VideoBackgroundHero.Headline>
          <VideoBackgroundHero.Description>
            ISO, FSSC, Bio, HACCP – alle Zertifikate zentral verwaltet. n8n
            überwacht Ablaufdaten, sendet Erinnerungen und validiert gegen
            Akkreditierungsstellen. Nie wieder abgelaufene Zertifikate
            übersehen.
          </VideoBackgroundHero.Description>
          <VideoBackgroundHero.CallToAction>
            <ContactButton icon="chat">Compliance-Check anfragen</ContactButton>
          </VideoBackgroundHero.CallToAction>
          <VideoBackgroundHero.Stats>
            {stats.map((stat, index) => (
              <VideoBackgroundHero.Stat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
              />
            ))}
          </VideoBackgroundHero.Stats>
        </VideoBackgroundHero>
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Das Risiko</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Compliance-Lücken kosten mehr als nur Geld
          </IntroBox.Headline>
        </IntroBox>

        <SimpleGrid cols={2} className="mt-10 gap-8">
          <SimpleCard variant="danger">
            <Typo.H3 className="text-red-700">Audit-Findings</Typo.H3>
            <Typo.Paragraph className="text-gray-600 mt-2">
              Bei 75-85% Compliance-Quote bei manueller Verwaltung werden bei
              jedem Audit Lücken gefunden. Abgelaufene Zertifikate, fehlende
              Dokumentation, nicht nachvollziehbare Prozesse.
            </Typo.Paragraph>
            <SimpleCardFooter>
              <span className="text-lg font-bold text-red-700">
                10.000€ - 100.000€ pro Beanstandung
              </span>
            </SimpleCardFooter>
          </SimpleCard>

          <SimpleCard variant="danger">
            <Typo.H3 className="text-red-700">Reputationsschaden</Typo.H3>
            <Typo.Paragraph className="text-gray-600 mt-2">
              Ein Produktrückruf wegen eines nicht-zertifizierten Lieferanten
              kann existenzbedrohend sein. FDA Warning Letters,
              Kundenabwanderung, Medienberichterstattung.
            </Typo.Paragraph>
            <SimpleCardFooter>
              <span className="text-lg font-bold text-red-700">
                500.000 € durchschnittlicher Rückruf-Schaden
              </span>
            </SimpleCardFooter>
          </SimpleCard>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper background="bg-gray-900">
        <IntroBox dark>
          <IntroBox.PreHeadline>Der Workflow</IntroBox.PreHeadline>
          <IntroBox.Headline>
            So automatisieren wir die Zertifikatsprüfung
          </IntroBox.Headline>
        </IntroBox>

        <CardShowcase>
          <CardShowcase.Item size="small">
            <CardShowcase.Image
              src="/images/invoice/data-extraction.webp"
              alt="Zertifikatserfassung"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>
                1. Erfassen und Extrahieren
              </CardShowcase.Title>
              <CardShowcase.Description>
                Zertifikate per Upload, E-Mail oder Self-Service Portal. KI
                extrahiert automatisch Zertifikatsnummer, Aussteller,
                Gültigkeitsdatum und Scope.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>

          <CardShowcase.Item size="large">
            <CardShowcase.Image
              src="/images/validation-check.png"
              alt="Validierung"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>2. Echtheit validieren</CardShowcase.Title>
              <CardShowcase.Description>
                Automatischer Abgleich gegen Akkreditierungsstellen-Datenbanken
                (IAF CertSearch, ISO.org). Gefälschte Zertifikate sofort
                erkannt.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>

          <CardShowcase.Item size="large">
            <CardShowcase.Image
              src="/images/expiry-monitoring.png"
              alt="Ablaufüberwachung"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>3. Proaktiv erinnern</CardShowcase.Title>
              <CardShowcase.Description>
                Gestaffelte Erinnerungen bei 60, 30, 15, 7, 1 Tagen vor Ablauf.
                Automatische Benachrichtigung an Lieferant und Einkauf.
                Eskalation bei Nichtreaktion bis zur automatischen ERP-Sperre.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>

          <CardShowcase.Item size="small">
            <CardShowcase.Image
              src="/images/compliance-dashboard.png"
              alt="Dashboard"
            />
            <CardShowcase.Content>
              <CardShowcase.Title>4. Dashboard und Reports</CardShowcase.Title>
              <CardShowcase.Description>
                Echtzeit-Dashboard: % compliant, ablaufend, überfällig.
                Audit-Reports per Knopfdruck. Lieferanten-Compliance-Historie
                für lückenlose Nachverfolgung.
              </CardShowcase.Description>
            </CardShowcase.Content>
          </CardShowcase.Item>
        </CardShowcase>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <IntroBox textCentered={false}>
              <IntroBox.PreHeadline>Eskalationsprotokoll</IntroBox.PreHeadline>
              <IntroBox.Headline>
                Automatische Eskalation bei Ablauf
              </IntroBox.Headline>
            </IntroBox>

            <TimelineAsSteps>
              <TimelineAsStepsStep value={60}>
                <Typo.H3 className="mt-2!">60 Tage vorher</Typo.H3>
                <Typo.Paragraph>
                  Erste freundliche Erinnerung an den Lieferanten per E-Mail
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={30}>
                <Typo.H3 className="mt-2!">30 Tage vorher</Typo.H3>
                <Typo.Paragraph>
                  Eskalation an Procurement Manager, Lieferant erhält 2.
                  Erinnerung
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={7}>
                <Typo.H3 className="mt-2!">7 Tage vorher</Typo.H3>
                <Typo.Paragraph>
                  Kritischer Alert, PO-Sperre wird vorbereitet, Management
                  informiert
                </Typo.Paragraph>
              </TimelineAsStepsStep>
              <TimelineAsStepsStep value={0}>
                <Typo.H3 className="mt-2!">Ablaufdatum</Typo.H3>
                <Typo.Paragraph>
                  Automatische Lieferantensperre im ERP, Incident-Report
                  generiert
                </Typo.Paragraph>
              </TimelineAsStepsStep>
            </TimelineAsSteps>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/escalation-workflow.png"
              alt="Eskalationsworkflow"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper background="bg-gray-100">
        <IntroBox>
          <IntroBox.PreHeadline>ROI</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wert für einen Großhändler mit 50-200 Lieferanten
          </IntroBox.Headline>
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
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            }
          >
            <Typo.H3>95.000-645.000 €</Typo.H3>
            <Typo.Paragraph>
              Jährlicher Wert durch vermiedene Strafen, Zeitersparnis,
              Audit-Effizienz und Risikoreduktion
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
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          >
            <Typo.H3>3-6 Monate ROI</Typo.H3>
            <Typo.Paragraph>
              Schnelle Amortisation durch sofortige Zeitersparnis und
              Risikoreduktion. Ab dann reine Einsparungen.
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
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          >
            <Typo.H3>Null Audit-Beanstandungen</Typo.H3>
            <Typo.Paragraph>
              Keine Beanstandungen mehr bei internen oder externen Audits wegen
              Lieferanten-Compliance
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
                "Wie werden internationale Zertifikate mit unterschiedlichen Formaten verarbeitet?",
              answer:
                "Unsere KI-gestützte Dokumentenverarbeitung extrahiert intelligent Schlüsseldaten unabhängig vom Format. OCR-Technologie verarbeitet auch gescannte Dokumente. Mehrsprachige Unterstützung erkennt und übersetzt Zertifikatsinhalte. Bei Edge Cases mit niedrigem Confidence Score wird das Procurement-Team zur manuellen Überprüfung benachrichtigt.",
            },
            {
              question:
                "Was passiert, wenn ein Lieferant sein Zertifikat nicht rechtzeitig erneuert?",
              answer:
                "Das System implementiert ein gestaffeltes Eskalationsprotokoll: 60/30/15/7/1 Tage vorher werden Erinnerungen gesendet mit zunehmender Dringlichkeit. Bei Ablauf ohne Erneuerung wird der Lieferantenstatus automatisch auf Non-Compliant gesetzt, neue POs werden im ERP blockiert und ein Incident-Report für das Compliance-Team generiert.",
            },
            {
              question:
                "Wie wird die Echtheit der hochgeladenen Zertifikate sichergestellt?",
              answer:
                "Mehrstufige Validierung: Automatischer Abgleich der Zertifikatsnummer gegen Datenbanken der Akkreditierungsstellen (IAF CertSearch, ISO.org). Prüfung des Akkreditierungsstatus des Ausstellers. KI-Analyse auf Manipulationen. Plausibilitätsprüfung. Bei Red Flags wird das Zertifikat für manuelle Überprüfung geflaggt.",
            },
            {
              question:
                "Kann das System mit unserem ERP und Einkaufssoftware integrieren?",
              answer:
                "Ja, n8n unterstützt Integration mit allen gängigen ERP-Systemen (SAP, Oracle, Dynamics 365) und Procurement-Plattformen (Coupa, Ariba, Procurify) über REST APIs, Webhooks oder Datenbank-Verbindungen. Bidirektionaler Datenaustausch: Lieferanten-Stammdaten fließen ein, Compliance-Status wird zurückgeschrieben inkl. automatischer Sperren bei Non-Compliance.",
            },
          ]}
        />
      </ContentWrapper>
    </>
  );
}
