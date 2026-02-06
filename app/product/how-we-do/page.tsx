"use client";
import { Metadata } from "next";
import ContentWrapper from "@/components/content-wrapper";
import VideoBackgroundHero from "@/components/hero-components/video-background-hero";
import SimpleGrid from "@/components/simple-grid";
import SimpleCard from "@/components/cards/simple-card";
import PhaseCard, {
  PhaseCardHeader,
  PhaseCardTitle,
  PhaseCardBadge,
  PhaseCardSubtitle,
  PhaseCardDescription,
  PhaseCardDetails,
  PhaseCardDetailItem,
} from "@/components/cards/phase-card";
import TimelineAsSteps, {
  TimelineAsStepsStep,
} from "@/components/timeline-as-steps";
import Typo from "@/components/typo";
import ContactButton from "@/components/buttons/contact-button";
import ConsultationCtaDefault from "@/components/consultation-cta-default";

// export const metadata: Metadata = {
//   title: "How We Do – Unser 6-Phasen-Prozess | BlueBatch",
//   description:
//     "Mit deutscher Engineering-Präzision und einem bewährten 6-Phasen-Framework automatisieren wir Ihre Backoffice-Prozesse. 98% On-Time Delivery, 200+ erfolgreiche Implementierungen.",
//   keywords: [
//     "Automatisierungsprozess",
//     "Workflow Engineering",
//     "Enterprise Automation",
//     "6 Phasen Framework",
//     "KI Implementierung",
//     "Prozessautomatisierung",
//   ],
// };

const stats = [
  { value: "98%", label: "On-Time Delivery" },
  { value: "200+", label: "Erfolgreiche Implementierungen" },
  { value: "100%", label: "Datensouveränität (In-House)" },
];

const principles = [
  {
    title: "Strategisch",
    description: "Durchdachte Planung statt blinder Aktionismus.",
  },
  {
    title: "Zuverlässig",
    description: "Bewährte Methodik für replizierbare Erfolge.",
  },
  {
    title: "Effizient",
    description: "Schnelle Ergebnisse durch klare Meilensteine.",
  },
];

const failureStats = [
  { value: "67%", label: "scheitern an schlechter Planung" },
  { value: "23%", label: "scheitern an unklaren Anforderungen" },
  { value: "45%", label: "scheitern an mangelndem Change Management" },
];

const managedServices = [
  {
    number: 1,
    title: "Wartung & Support",
    subtitle: "Hosting | Monitoring | Security",
    description:
      'Wir sorgen dafür, dass Ihre „digitalen Mitarbeiter" niemals schlafen. Wir übernehmen das Hosting in Ihrer bevorzugten Infrastruktur und überwachen jeden einzelnen Durchlauf.',
    features: [
      "Predictive Maintenance: Wir erkennen Fehler, bevor sie Ihren Betrieb aufhalten.",
      "API-Watch: Ändert ein Drittanbieter seine Schnittstelle, passen wir den Workflow sofort an.",
      "Sicherer Hafen: Enterprise-Hosting mit Fokus auf maximale Datensouveränität.",
    ],
  },
  {
    number: 2,
    title: "Workflow-Nurturing",
    subtitle:
      "Wöchentliche Performance-Calls | Weiterentwicklung | Token-Optimierung",
    description:
      "Automatisierung ist ein Prozess, kein Zustand. In unseren wöchentlichen Performance-Calls schauen wir gemeinsam unter die Motorhaube:",
    features: [
      "Insights & Metrics: Wie hoch ist die Erfolgsquote? Wo haben wir Zeit gespart?",
      "KI-Feinschliff: Wir optimieren die Antwortqualität der KI und senken gleichzeitig Ihre laufenden Kosten (Token-Efficiency).",
      "Wachstums-Support: Wenn Ihr Business sich verändert, wächst der Workflow mit.",
    ],
  },
  {
    number: 3,
    title: "Persönlicher Kundendienst",
    subtitle: "Strategische Betreuung | Direkter Draht",
    description:
      "Bei BlueBatch gibt es kein anonymes Ticket-System. Sie haben einen festen Ansprechpartner, der Ihren Business-Case versteht.",
    features: [
      "Kein Fachchinesisch: Wir übersetzen komplexe Tech-Themen in klare Business-Entscheidungen.",
      "Sparringspartner: Wir beraten Sie proaktiv, welcher nächste Prozess das größte ROI-Potenzial für Sie bietet.",
      "Enterprise-Verlässlichkeit: Durch unsere Wurzeln bei Pexon Consulting garantieren wir Betreuung auf höchstem Niveau.",
    ],
  },
];

const phases = [
  {
    number: 1,
    title: "Bedarfsworkshop",
    timeframe: "Woche 1–2",
    subtitle: "Umfassende Business-Analyse",
    description:
      'Wir identifizieren die "Low Hanging Fruits" und berechnen den echten ROI.',
    output:
      "Prozess-Mapping, Zeit-Motions-Studien und eine Opportunity-Matrix.",
    highlight:
      "Identifikation von mindestens 50.000 € jährlichem Einsparpotenzial.",
    highlightLabel: "Erfolgsmetrik",
  },
  {
    number: 2,
    title: "Konzeption",
    timeframe: "Woche 3–4",
    subtitle: "Der strategische Blueprint",
    description:
      "Wir entwerfen die Architektur, bevor die erste Zeile Code geschrieben wird.",
    output:
      "Technische Architektur-Blueprints, Datenfluss-Diagramme und Risiko-Assessments.",
    highlight:
      "Nahtlose Integration in Ihre bestehende Systemlandschaft (ERP, CRM, PIM).",
    highlightLabel: "Fokus",
  },
  {
    number: 3,
    title: "Basis-Setup",
    timeframe: "Woche 5–8",
    subtitle: "Sichere Infrastruktur",
    description: "Wir schaffen die Umgebung, in der Ihre Daten sicher sind.",
    output:
      "n8n-Instanz mit Security, API-Verbindungen und Monitoring-Systemen.",
    highlight: "Volle Datensouveränität – Ihre Daten bleiben in Ihrer Hoheit.",
    highlightLabel: "Sicherheit",
  },
  {
    number: 4,
    title: "Umsetzung",
    timeframe: "Woche 9–12",
    subtitle: "Workflow-Entwicklung",
    description: "Hier erwecken wir Ihre digitalen Mitarbeiter zum Leben.",
    output:
      "Vollständige Automatisierungs-Workflows inklusive Error-Handling und Dokumentation.",
    highlight:
      "Intensive Unit- und Integration-Tests mit einer Zielquote von 99,9% Erfolgsrate.",
    highlightLabel: "Qualität",
  },
  {
    number: 5,
    title: "Go-Live",
    timeframe: "Woche 13–14",
    subtitle: "Produktivstart mit Support",
    description:
      "Wir begleiten den Übergang in den Live-Betrieb und schulen Ihr Team.",
    output: "Live-System, Nutzertrainings und Echtzeit-Performance-Dashboards.",
    highlight: "Sofortige operative Entlastung und hohe Nutzerakzeptanz.",
    highlightLabel: "Ergebnis",
  },
  {
    number: 6,
    title: "Betrieb",
    timeframe: "Woche 15–16",
    subtitle: "Kontinuierliche Verbesserung",
    description:
      "Ein Workflow ist ein lebendes System. Wir optimieren laufend.",
    output:
      "Performance-Updates, Token-Optimierung (KI-Kosten) und Wissenstransfer.",
    highlight: "Wir liefern den Beweis des Business-Impacts schwarz auf weiß.",
    highlightLabel: "Nachhaltigkeit",
  },
];

export default function HowWeDoPage() {
  return (
    <>
      {/* Hero Section */}{" "}
      <ContentWrapper isFirstSection noPadding>
        <VideoBackgroundHero
          videoSrc="/videos/ki_workflow.mp4"
          opacityBackground="white"
          overlayOpacity={0.7}
        >
          <VideoBackgroundHero.TopLabel>
            Systematic Excellence
          </VideoBackgroundHero.TopLabel>
          <VideoBackgroundHero.Headline>
            Wo Engineering auf{" "}
            <VideoBackgroundHero.Highlight>
              Innovation
            </VideoBackgroundHero.Highlight>{" "}
            trifft.
          </VideoBackgroundHero.Headline>
          <VideoBackgroundHero.Description>
            Die meisten Automatisierungsprojekte scheitern an der Planung, nicht
            an der Technik. Wir bringen deutsche Engineering-Präzision in Ihre
            Backoffice-Prozesse.
          </VideoBackgroundHero.Description>
          <VideoBackgroundHero.CallToAction>
            <ContactButton icon="calendar" size="lg">
              Den Blueprint anfordern
            </ContactButton>
          </VideoBackgroundHero.CallToAction>
          <VideoBackgroundHero.Stats>
            {stats.map((stat, index) => (
              <VideoBackgroundHero.Stat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}
          </VideoBackgroundHero.Stats>
        </VideoBackgroundHero>
      </ContentWrapper>
      {/* German Engineering Principles */}
      <ContentWrapper background="bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Wir bringen die Prinzipien des deutschen Engineerings – Präzision,
            Gründlichkeit und Systematik – in die Welt der KI-Automatisierung.
            Kein &ldquo;Basteln&rdquo;, sondern robuste Workflows auf
            Enterprise-Niveau.
          </p>
        </div>

        <SimpleGrid cols={3}>
          {principles.map((principle) => (
            <SimpleCard key={principle.title}>
              <Typo.H3 className="!mt-0">{principle.title}</Typo.H3>
              <Typo.Paragraph className="!text-gray-600">
                {principle.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>
      {/* Die Wahrheit über Automatisierung */}
      <ContentWrapper>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm md:text-base font-semibold bg-gradient-to-r from-secondary-600 via-primary-600 to-secondary-700 bg-clip-text text-transparent mb-4 uppercase tracking-wide text-center">
            Die Wahrheit über Automatisierung
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
            Warum Struktur den Unterschied macht
          </h2>

          <p className="text-xl font-semibold text-gray-800 text-center mb-8">
            Zahlen lügen nicht:
          </p>

          <SimpleGrid cols={3} className="mb-10">
            {failureStats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-red-50 rounded-lg border border-red-100"
              >
                <div className="text-3xl md:text-4xl font-bold text-red-600">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-600 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </SimpleGrid>

          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl border border-primary-100 text-center">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              <strong className="text-gray-900">
                BlueBatch bricht dieses Muster.
              </strong>{" "}
              Mit einer 98% On-Time Delivery Rate und der Erfahrung aus über 200
              erfolgreichen Implementierungen (Pexon Group) transformieren wir
              Ihr Backoffice systematisch.
            </p>
          </div>
        </div>
      </ContentWrapper>
      {/* 6-Phasen-Prozess */}
      <ContentWrapper background="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm md:text-base font-semibold bg-gradient-to-r from-secondary-600 via-primary-600 to-secondary-700 bg-clip-text text-transparent mb-4 uppercase tracking-wide text-center">
            Der 6-Phasen-Prozess
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            Ihr Weg zur automatisierten Exzellenz
          </h2>

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
                    <PhaseCardBadge>{phase.timeframe}</PhaseCardBadge>
                  </PhaseCardHeader>
                  <PhaseCardSubtitle>{phase.subtitle}</PhaseCardSubtitle>
                  <PhaseCardDescription>
                    {phase.description}
                  </PhaseCardDescription>
                  <PhaseCardDetails>
                    <PhaseCardDetailItem label="Output">
                      {phase.output}
                    </PhaseCardDetailItem>
                    <PhaseCardDetailItem
                      label={phase.highlightLabel}
                      variant="highlight"
                    >
                      {phase.highlight}
                    </PhaseCardDetailItem>
                  </PhaseCardDetails>
                </PhaseCard>
              </TimelineAsStepsStep>
            ))}
          </TimelineAsSteps>
        </div>
      </ContentWrapper>
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
      {/* Managed Operations */}
      <ContentWrapper>
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm md:text-base font-semibold bg-gradient-to-r from-secondary-600 via-primary-600 to-secondary-700 bg-clip-text text-transparent mb-4 uppercase tracking-wide text-center">
            Managed Operations
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
            Wir managen die Komplexität. Sie ernten die Ergebnisse.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 text-center mb-4 max-w-3xl mx-auto">
            Ein Workflow ist kein „Set-and-Forget"-Produkt. Er ist ein lebender
            Teil Ihres Unternehmens.
          </p>
          <p className="text-base text-gray-700 text-center mb-12 max-w-3xl mx-auto font-medium">
            Unser Versprechen: Sie geben die operative Last ab, behalten aber
            jederzeit die volle strategische Kontrolle.
          </p>

          <TimelineAsSteps>
            {managedServices.map((service, index) => (
              <TimelineAsStepsStep
                key={service.number}
                value={service.number}
                isLast={index === managedServices.length - 1}
              >
                <PhaseCard>
                  <PhaseCardHeader>
                    <PhaseCardTitle>{service.title}</PhaseCardTitle>
                  </PhaseCardHeader>
                  <PhaseCardSubtitle>{service.subtitle}</PhaseCardSubtitle>
                  <PhaseCardDescription>
                    {service.description}
                  </PhaseCardDescription>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary-500 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </PhaseCard>
              </TimelineAsStepsStep>
            ))}
          </TimelineAsSteps>

          {/* BlueBatch-Gefühl Quote */}
          <div className="mt-12 bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-xl border border-primary-100">
            <p className="text-sm font-semibold text-primary-600 mb-3">
              Das BlueBatch-Gefühl
            </p>
            <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
              „Am Montagmorgen erhalten Sie einen Report, der Ihnen zeigt, wie
              viele tausend manuelle Klicks wir Ihrem Team letzte Woche erspart
              haben. Im Call am Nachmittag besprechen wir kurz die Optimierungen
              – und danach können Sie das Thema wieder komplett uns überlassen."
            </blockquote>
          </div>
        </div>
      </ContentWrapper>
      {/* CTA Section */}
      <ContentWrapper>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für den ersten Schritt?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Lassen Sie uns gemeinsam analysieren, wie wir Ihre Prozesse
            systematisch automatisieren können.
          </p>
          <ContactButton icon="calendar" size="lg">
            Kostenlose Erstberatung buchen
          </ContactButton>
        </div>
      </ContentWrapper>
    </>
  );
}
