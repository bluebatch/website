import type { Metadata } from "next";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
import Typo from "@/components/ui/typo";
import SimpleGrid from "@/components/layout/simple-grid";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnMediaColumn,
  Hero2ColumnPreHeadline,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnCallToAction,
  Hero2ColumnSubtext,
  Hero2ColumnImage,
} from "@/components/heroes/hero-2-column";
import ContactButton from "@/components/buttons/contact-button";
import Customer from "@/components/sections/customer/customer";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import { AnimatedNumber } from "@/components/cards/kpi-card";
import SimpleCard from "@/components/cards/simple-card";
import IntroBox from "@/components/ui/intro-box";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/n8n-performance",
  rewrites: [
    {
      source: "/n8n-performance",
    },
  ],
};

export const metadata: Metadata = {
  title: "n8n Performance Scaling | Bluebatch",
  description:
    "Performance-Probleme mit n8n? Wir lösen sie mit Redis, RabbitMQ und Docker Swarm. 7x höherer Throughput garantiert.",
  openGraph: {
    title: "Performance-Scaling für n8n | Bluebatch",
    description:
      "Von 23 auf 162 Requests/Sekunde. Professionelles Performance-Scaling mit Queue Mode für n8n.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Performance Scaling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance-Scaling für n8n | Bluebatch",
    description:
      "Performance-Probleme mit n8n? Wir skalieren auf Enterprise-Level mit Redis und Queue Mode.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/n8n-performance",
  },
};

const problems = [
  {
    problem: "Langsame Workflows",
    symptom: "Executions dauern Minuten statt Sekunden",
    solution: "Queue Mode mit Redis für parallele Verarbeitung",
    improvement: "60% schnellere Execution-Zeiten",
  },
  {
    problem: "System-Crashes",
    symptom: 'JavaScript heap out of memory" Fehler',
    solution: "Memory-Optimierung und Worker-Scaling",
    improvement: "0% Crash-Rate in Production",
  },
  {
    problem: "Hohe Fehlerrate",
    symptom: "38% der Executions schlagen fehl",
    solution: "Queue Mode eliminiert Race Conditions",
    improvement: "0% Fehlerrate unter Last",
  },
  {
    problem: "UI-Performance",
    symptom: "Browser-Freezes, extrem langsame UI",
    solution: "PostgreSQL statt SQLite, optimierte Architektur",
    improvement: "10x schnellere UI-Responsiveness",
  },
];

const architecture = [
  {
    component: "Redis Queue Mode",
    imageSrc: "/tools/redis.png",
    benefit: "7x Performance-Increase",
    description:
      "Von 23 auf 162 Requests/Sekunde. Message Broker für resiliente Job-Verarbeitung.",
    features: [
      "Horizontale Skalierung",
      "Worker-basiertes Processing",
      "Dead Letter Queues",
      "Job-Isolation",
    ],
  },
  {
    component: "PostgreSQL Database",
    imageSrc: "/tools/postgresql_plain_wordmark_logo_icon_146390.png",
    benefit: "1000x mehr Capacity",
    description:
      "Production-ready Datenbank für tausende Executions pro Minute. MVCC vermeidet Locks.",
    features: [
      "Streaming Replication",
      "Automatic Failover",
      "Connection Pooling",
      "Query Optimization",
    ],
  },
  {
    component: "Docker Swarm / Kubernetes",
    imageSrc: "/tools/Kubernetes.png",
    benefit: "Zero-Downtime Deployments",
    description:
      "Container-Orchestrierung für High Availability und Auto-Scaling.",
    features: [
      "Rolling Updates",
      "Automatic Failover",
      "Load Balancing",
      "Health Checks",
    ],
  },
  {
    component: "Prometheus & Grafana",
    imageSrc: "/tools/grafana-prometheus.png",
    benefit: "Vollständige Observability",
    description:
      "Real-time Monitoring aller Metriken. Proaktive Alerts bei Performance-Degradation.",
    features: [
      "Queue Metrics",
      "Memory Tracking",
      "Execution Analytics",
      "Custom Dashboards",
    ],
  },
];

const benchmarks = [
  {
    metric: "Throughput",
    before: "23 req/s",
    after: "162 req/s",
    improvementValue: 7,
    improvementSuffix: "x",
    color: "from-blue-500 to-blue-600",
  },
  {
    metric: "Fehlerrate",
    before: "38%",
    after: "0%",
    improvementValue: 100,
    improvementSuffix: "%",
    color: "from-green-500 to-green-600",
  },
  {
    metric: "Response Time",
    before: "34 Sek",
    after: "1.2 Sek",
    improvementValue: 28,
    improvementSuffix: "x",
    color: "from-purple-500 to-purple-600",
  },
  {
    metric: "Uptime",
    before: "95%",
    after: "99.9%",
    improvementValue: 5,
    improvementSuffix: "%",
    color: "from-orange-500 to-orange-600",
  },
];

const technologies = [
  {
    name: "Redis",
    logo: "/tools/redis.png",
    description: "In-Memory Message Broker für Queue Mode",
  },
  {
    name: "PostgreSQL",
    logo: "/tools/postgresql_plain_wordmark_logo_icon_146390.png",
    description: "Enterprise-ready Datenbank",
  },
  {
    name: "Kubernetes",
    logo: "/tools/Kubernetes.png",
    description: "Container-Orchestrierung",
  },
  {
    name: "Prometheus",
    logo: "/tools/prometheus.png",
    description: "Metrics & Monitoring",
  },
  {
    name: "Grafana",
    logo: "/tools/grafana-prometheus.png",
    description: "Dashboards & Visualization",
  },
  {
    name: "Docker",
    logo: "/tools/docker.svg",
    description: "Container-Plattform",
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await enforceMainRewrite(rewriteSiteConfig, searchParams);

  return (
    <>
      {/* Hero Section */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>n8n Services</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>n8n Performance Scaling für Ihr Unternehmen</Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Die Performance von n8n ist entscheidend für skalierbare Automatisierung.
              Ihre Instanz laggt oder crashed? Wir lösen Performance-Probleme
              mit Queue Mode, Redis und optimierter Architektur. Von 23 auf
              162 Requests/Sekunde - garantiert.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">
                Performance-Audit anfragen
              </ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Redis • RabbitMQ • Docker Swarm • 99,9% Uptime
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/business-analytics.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Introduction Text */}
      <ContentWrapper bodyWidth="small">
        <div className="text-center">
          <Typo.Paragraph className="text-xl text-gray-700 leading-relaxed">
            Was als einfaches Automatisierungstool beginnt, stößt bei steigenden
            Anforderungen schnell an Grenzen. Langsame Executions, Memory-Fehler
            und System-Crashes beeinträchtigen die Performance von n8n erheblich. Doch mit der richtigen
            Architektur - Redis Queue Mode, PostgreSQL und Container
            Orchestrierung - skaliert n8n problemlos auf Enterprise-Level.
            Auch im Bereich AI Acceleration & Workflows sorgt optimale
            n8n-Performance-Optimierung für schnellere Ergebnisse.
          </Typo.Paragraph>
        </div>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* Benchmarks */}
      <ContentWrapper colorScheme="gradient-dark">
        <IntroBox dark>
          <IntroBox.Headline>Nachgewiesene Performance-Gains für n8n</IntroBox.Headline>
          <IntroBox.Paragraph>
            Real-World Benchmarks von unseren Enterprise-Deployments
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={4} className="gap-6">
          {benchmarks.map((benchmark, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${benchmark.color} rounded-lg p-8 text-white`}
            >
              <div className="text-sm opacity-90 mb-2">{benchmark.metric}</div>
              <div className="text-4xl font-bold mb-4">
                <AnimatedNumber
                  value={benchmark.improvementValue}
                  suffix={benchmark.improvementSuffix}
                />
              </div>
              <div className="space-y-1 text-sm opacity-90">
                <div>Vorher: {benchmark.before}</div>
                <div>Nachher: {benchmark.after}</div>
              </div>
            </div>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Common Problems */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>Häufige Performance-Probleme</IntroBox.Headline>
          <IntroBox.Paragraph>
            Erkennen Sie Ihre Situation wieder?
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg font-semibold text-sm">
                  Problem
                </div>
                <h3 className="font-bold text-gray-900 flex-1">
                  {item.problem}
                </h3>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    Symptom:
                  </span>
                  <p className="text-gray-600 text-sm mt-1">{item.symptom}</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">
                    Lösung:
                  </span>
                  <p className="text-gray-600 text-sm mt-1">{item.solution}</p>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <span className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    <span>✓</span>
                    {item.improvement}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ContentWrapper>

      {/* Architecture Components */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.Headline>Performance-Architektur für n8n und AI Acceleration</IntroBox.Headline>
          <IntroBox.Paragraph>
            Die Komponenten unserer Enterprise-Scaling-Lösung für maximale Performance von n8n
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={2} className="gap-8">
          {architecture.map((component, index) => (
            <SimpleCard key={index}>
              <SimpleCard.Image
                src={component.imageSrc}
                alt={component.component}
                size="lg"
              />
              <Typo.H3 className="mb-1">{component.component}</Typo.H3>
              <p className="text-primary-600 font-semibold mb-4">
                {component.benefit}
              </p>
              <Typo.Paragraph className="text-gray-600 mb-6">
                {component.description}
              </Typo.Paragraph>
              <SimpleCard.Footer>
                <div className="grid grid-cols-2 px-4">
                  {component.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-gray-700 text-sm"
                    >
                      <span className="text-primary-600">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
              </SimpleCard.Footer>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Tech Stack */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.Headline>Technologie-Stack</IntroBox.Headline>
          <IntroBox.Paragraph>
            Bewährte Enterprise-Technologien für maximale Performance
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={6} className="gap-6">
          {technologies.map((tech, index) => (
            <SimpleCard key={index}>
              <SimpleCard.Image src={tech.logo} alt={tech.name} size="md" />
              <Typo.H4>{tech.name}</Typo.H4>
              <p className="text-gray-600 text-xs">{tech.description}</p>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Scaling Approach */}
      <ContentWrapper colorScheme="gray-light">
        <SimpleGrid cols={2} className="items-center gap-12">
          <div className="relative aspect-square">
            <Image
              src="/images/web-development.jpg"
              alt="Scaling Architektur"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <Typo.H2 className="mb-6">Unser Scaling-Ansatz</Typo.H2>
            <div className="space-y-6">
              <div>
                <Typo.H4 disableMargin>1. Performance Audit</Typo.H4>
                <p className="text-gray-600">
                  Detaillierte Analyse Ihrer aktuellen Installation.
                  Identifikation von Bottlenecks und Performance-Problemen.
                </p>
              </div>
              <div>
                <Typo.H4 disableMargin>2. Architektur-Design</Typo.H4>
                <p className="text-gray-600">
                  Individueller Skalierungsplan basierend auf Ihren
                  Anforderungen. Horizontale und vertikale Skalierung
                  kombiniert.
                </p>
              </div>
              <div>
                <Typo.H4 disableMargin>3. Migration & Setup</Typo.H4>
                <p className="text-gray-600">
                  Queue Mode Konfiguration, PostgreSQL Migration,
                  Worker-Scaling. Zero-Downtime Migration garantiert.
                </p>
              </div>
              <div>
                <Typo.H4 disableMargin>4. Monitoring & Optimization</Typo.H4>
                <p className="text-gray-600">
                  Prometheus & Grafana Setup. Kontinuierliche
                  Performance-Überwachung und Optimierung.
                </p>
              </div>
            </div>
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* CTA Section */}
      <ContentWrapper colorScheme="primary" bodyWidth="narrow">
        <div className="text-center text-white">
          <Typo.H2 className="text-white mb-6">
            Bereit für Enterprise-Performance?
          </Typo.H2>
          <Typo.Paragraph className="text-white opacity-90 mb-8 text-lg">
            Wir analysieren Ihre n8n-Installation kostenlos und zeigen Ihnen das
            Optimierungspotenzial. Keine Verpflichtungen, nur Fakten.
          </Typo.Paragraph>
          <div className="flex gap-4 justify-center">
            <ContactButton size="lg">Kostenlose Analyse anfragen</ContactButton>
            <ContactButton size="lg">Demo vereinbaren</ContactButton>
          </div>
        </div>
      </ContentWrapper>

      {/* Contact CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
