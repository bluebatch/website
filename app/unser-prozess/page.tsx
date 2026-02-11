import { Metadata } from "next";
import ContentWrapper from "@/components/content-wrapper";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnImage,
} from "@/components/hero-components/hero-2-column";
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
import IntroBox from "@/components/intro-box";
import { AnimatedNumber } from "@/components/cards/kpi-card";

export const metadata: Metadata = {
  title: "How We Do – Unser 6-Phasen-Prozess | BlueBatch",
  description:
    "Mit deutscher Engineering-Präzision und einem bewährten 6-Phasen-Framework automatisieren wir Ihre Backoffice-Prozesse. 98% On-Time Delivery, 200+ erfolgreiche Implementierungen.",
  keywords: [
    "Automatisierungsprozess",
    "Workflow Engineering",
    "Enterprise Automation",
    "6 Phasen Framework",
    "KI Implementierung",
    "Prozessautomatisierung",
  ],
  openGraph: {
    title: "Unser 6-Phasen-Prozess – BlueBatch",
    description:
      "Mit deutscher Engineering-Präzision und bewährtem Framework automatisieren wir Ihre Prozesse.",
    type: "website",
    locale: "de_DE",
    siteName: "BlueBatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "BlueBatch Prozess",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unser 6-Phasen-Prozess – BlueBatch",
    description:
      "Mit deutscher Engineering-Präzision und bewährtem Framework automatisieren wir Ihre Prozesse.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/unser-prozess",
  },
};

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
  { value: 67, label: "scheitern an schlechter Planung" },
  { value: 23, label: "scheitern an unklaren Anforderungen" },
  { value: 45, label: "scheitern an mangelndem Change Management" },
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
      {/* Hero Section */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Systematic Excellence
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Wo Engineering auf Innovation trifft
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Die meisten Automatisierungsprojekte scheitern an der Planung,
              nicht an der Technik. Wir bringen deutsche Engineering-Präzision
              in Ihre Backoffice-Prozesse.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="calendar" size="lg">
                Den Blueprint anfordern
              </ContactButton>
            </Hero2ColumnCallToAction>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/workflow-planning.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
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
              <Typo.H3>{principle.title}</Typo.H3>
              <Typo.Paragraph>{principle.description}</Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>
      {/* Die Wahrheit über Automatisierung */}
      <ContentWrapper background="bg-gradient-to-br from-primary-900 to-primary-600 ">
        <IntroBox dark size="wide">
          <IntroBox.PreHeadline>
            Die Wahrheit über Automatisierung
          </IntroBox.PreHeadline>
          <IntroBox.Headline>
            Warum Struktur den Unterschied macht
          </IntroBox.Headline>
          <IntroBox.Subline>Zahlen lügen nicht:</IntroBox.Subline>
        </IntroBox>

        <SimpleGrid cols={3} className="mb-10">
          {failureStats.map((stat, index) => (
            <div
              className={`text-center border-white ${index === 2 ? "" : "md:border-r"}`}
              key={stat.label}
            >
              <Typo.H2 className="text-red-500">
                {<AnimatedNumber value={stat.value} suffix="%" />}
              </Typo.H2>
              <Typo.Paragraph className="text-sm md:text-base text-white mt-2">
                {stat.label}
              </Typo.Paragraph>
            </div>
          ))}
        </SimpleGrid>

        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8  border border-primary-100 text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            <strong className="text-gray-900">
              BlueBatch bricht dieses Muster.
            </strong>{" "}
            Mit einer 98% On-Time Delivery Rate und der Erfahrung aus über 200
            erfolgreichen Implementierungen (Pexon Group) transformieren wir Ihr
            Backoffice systematisch.
          </p>
        </div>
      </ContentWrapper>
      {/* 6-Phasen-Prozess */}
      <ContentWrapper background="bg-gray-50" bodyWidth="small">
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
                <PhaseCardDescription>{phase.description}</PhaseCardDescription>
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
      </ContentWrapper>
      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
      {/* Managed Operations */}
      <ContentWrapper bodyWidth="small">
        <IntroBox textCentered size="narrow">
          <IntroBox.PreHeadline>Managed Operations</IntroBox.PreHeadline>
          <IntroBox.Headline>
            Wir managen die Komplexität. Sie ernten die Ergebnisse.
          </IntroBox.Headline>
          <IntroBox.Subline>
            Ein Workflow ist kein „Set-and-Forget"-Produkt. Er ist ein lebender
            Teil Ihres Unternehmens.
          </IntroBox.Subline>
          <IntroBox.Paragraph>
            Unser Versprechen: Sie geben die operative Last ab, behalten aber
            jederzeit die volle strategische Kontrolle.
          </IntroBox.Paragraph>
        </IntroBox>

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
            haben. Im Call am Nachmittag besprechen wir kurz die Optimierungen –
            und danach können Sie das Thema wieder komplett uns überlassen."
          </blockquote>
        </div>
      </ContentWrapper>
      {/* CTA Section */}
      <ContentWrapper>
        <IntroBox textCentered size="narrow">
          <IntroBox.PreHeadline>Bereit?</IntroBox.PreHeadline>
          <IntroBox.Headline>Bereit für den ersten Schritt?</IntroBox.Headline>
          <IntroBox.Subline>
            Lassen Sie uns gemeinsam analysieren, wie wir Ihre Prozesse
            systematisch automatisieren können.
          </IntroBox.Subline>
          <ContactButton icon="calendar" size="lg">
            Kostenlose Erstberatung buchen
          </ContactButton>
        </IntroBox>
      </ContentWrapper>
    </>
  );
}
