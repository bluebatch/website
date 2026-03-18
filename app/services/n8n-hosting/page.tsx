import type { Metadata } from "next";
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
import IntroBox from "@/components/ui/intro-box";
import SimpleCard from "@/components/cards/simple-card";

export const metadata: Metadata = {
  title: "n8n Hosting Deutschland – Self-Hosted auf Ihrer Infrastruktur | Bluebatch",
  description:
    "n8n Hosting Deutschland: Self-Hosting auf Ihrer eigenen Infrastruktur – OnPrem oder Cloud. Als open source Workflow Engine bietet n8n maximale Datenkontrolle und n8n Datenschutz nach DSGVO.",
  openGraph: {
    title: "n8n Hosting Deutschland – Self-Hosted auf Ihrer Infrastruktur | Bluebatch",
    description:
      "n8n Hosting Deutschland auf Ihrer eigenen Infrastruktur. Die open source Workflow Engine DSGVO-konform betrieben.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch n8n Hosting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "n8n Hosting Deutschland – Self-Hosted | Bluebatch",
    description:
      "n8n Hosting Deutschland: open source Workflow Engine auf Ihrer Infrastruktur. DSGVO-konform.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/services/n8n-hosting",
  },
};

const features = [
  {
    iconSrc: "/icons/privacy.svg",
    title: "100% Datenkontrolle",
    description:
      "Mit n8n Hosting Deutschland bleiben Ihre Daten auf Ihrer Infrastruktur. Volle Kontrolle über Sicherheit und n8n Datenschutz.",
  },
  {
    iconSrc: "/icons/law-round.svg",
    title: "DSGVO-Konform",
    description:
      "n8n Hosting Deutschland garantiert, dass Daten in Deutschland/EU bleiben. Einfache Einhaltung aller n8n Datenschutz Anforderungen.",
  },
  {
    iconSrc: "/icons/return-of-investment.svg",
    title: "Kosteneffizient",
    description:
      "Die open source Workflow Engine n8n bietet unbegrenzte Workflows und Executions. Ab €50/Monat statt €600+ bei Cloud-Alternativen.",
  },
  {
    iconSrc: "/icons/autoscaling.svg",
    title: "Skalierbar",
    description:
      "Von einfachem Docker-Setup bis Enterprise Kubernetes. Wächst mit Ihren Anforderungen.",
  },
  {
    iconSrc: "/icons/settings.svg",
    title: "Flexibel",
    description:
      "OnPrem oder Cloud nach Ihren Anforderungen. Docker, Kubernetes oder Bare Metal.",
  },
  {
    iconSrc: "/icons/enterprise.svg",
    title: "Sichere Architektur",
    description:
      "Best Practices für Netzwerk-Sicherheit, Verschlüsselung, Backup und High Availability.",
  },
];

const deploymentOptions = [
  {
    title: "OnPremise Hosting",
    description:
      "n8n Hosting Deutschland direkt auf Ihren eigenen Servern im Rechenzentrum. Maximale Kontrolle und n8n Datenschutz. Wir liefern fertige n8n-Vorlagen für den schnellen Start.",
    features: [
      "Keine Internet-Abhängigkeit für interne Workflows",
      "Integration mit Legacy-Systemen im eigenen Netzwerk",
      "Ideal für regulierte Branchen",
      "Einmalige Hardware-Investition",
    ],
    icon: "/images/technology-integration.jpg",
  },
  {
    title: "Private Cloud Hosting",
    description:
      "n8n Hosting Deutschland in Ihrer dedizierten Cloud-Umgebung auf AWS, Azure oder Google Cloud. Jedes n8n Beispiel aus unserer Praxis zeigt bewährte Architekturen.",
    features: [
      "Flexible Skalierung und Auto-Scaling",
      "Keine Hardware-Wartung",
      "Managed Services für Datenbank und Backup",
      "Schnellere Bereitstellung",
    ],
    icon: "/images/web-development.jpg",
  },
  {
    title: "Hybrid Setup",
    description:
      "Kombination aus OnPrem und Cloud für n8n Hosting Deutschland. Die open source Workflow Engine läuft in der Cloud, sensible Systeme bleiben on-premise.",
    features: [
      "Best of both worlds",
      "VPN-Verbindung zwischen Umgebungen",
      "Flexibilität bei Workload-Verteilung",
      "Disaster Recovery über Cloud-Backup",
    ],
    icon: "/images/process-automation.jpg",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>n8n Services</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              n8n Hosting Deutschland – Self-Hosted auf Ihrer Infrastruktur
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              n8n Hosting Deutschland bedeutet maximale Datenkontrolle und n8n
              Datenschutz nach DSGVO. Als open source Workflow Engine lässt sich
              n8n auf Ihrer OnPrem- oder Cloud-Infrastruktur betreiben –
              professionell konfiguriert und gewartet von Bluebatch.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Hosting anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              OnPrem • Private Cloud • Hybrid • Enterprise-ready
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/technology-integration.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* Key Features Grid */}
      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.Headline>Warum n8n Hosting Deutschland und n8n Datenschutz?</IntroBox.Headline>
          <IntroBox.Paragraph>
            n8n ist eine open source Workflow Engine, die Sie vollständig selbst
            betreiben können. Keine Vendor Lock-ins, keine Execution-Limits,
            keine versteckten Kosten. Mit n8n Hosting Deutschland behalten Sie
            die vollständige Kontrolle über Ihre Daten.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="gap-8">
          {features.map((feature, index) => (
            <SimpleCard key={index}>
              <SimpleCard.Icon
                src={feature.iconSrc}
                alt={feature.title}
                color="primary-gradient"
              />
              <Typo.H3 className="mb-3 text-xl">{feature.title}</Typo.H3>
              <Typo.Paragraph className="text-gray-600 text-sm">
                {feature.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      {/* Client Logos */}
      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      {/* Deployment Options */}
      <ContentWrapper colorScheme="gradient-primary-alt">
        <IntroBox dark>
          <IntroBox.Headline>n8n Hosting Deutschland: Deployment-Optionen und n8n-Vorlagen</IntroBox.Headline>
          <IntroBox.Paragraph>
            Flexible Lösungen für Ihr n8n Hosting Deutschland – inklusive
            fertiger n8n-Vorlagen für den schnellen Start. Jedes n8n Beispiel
            aus unserer Praxis zeigt, wie Sie die open source Workflow Engine
            optimal einsetzen.
          </IntroBox.Paragraph>
        </IntroBox>

        <div className="space-y-8">
          {deploymentOptions.map((option, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 1 ? "bg-gray-50" : "bg-white"
              } rounded-lg p-8`}
            >
              <SimpleGrid cols={2} className="items-center gap-12">
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <Typo.H3 className="mb-4">{option.title}</Typo.H3>
                      <Typo.Paragraph className="text-gray-600 mb-6">
                        {option.description}
                      </Typo.Paragraph>
                      <ul className="space-y-3">
                        {option.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span className="text-primary-600 mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative aspect-video">
                      <Image
                        src={option.icon}
                        alt={option.title}
                        fill
                        className="object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative aspect-video">
                      <Image
                        src={option.icon}
                        alt={option.title}
                        fill
                        className="object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div>
                      <Typo.H3 className="mb-4">{option.title}</Typo.H3>
                      <Typo.Paragraph className="text-gray-600 mb-6">
                        {option.description}
                      </Typo.Paragraph>
                      <ul className="space-y-3">
                        {option.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span className="text-primary-600 mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </SimpleGrid>
            </div>
          ))}
        </div>
      </ContentWrapper>

      {/* Technical Highlights */}
      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <Typo.H2 className="mb-6">Technische Highlights: open source Workflow Engine im Einsatz</Typo.H2>
            <div className="space-y-6">
              <div>
                <Typo.H4 disableMargin>
                  Container-Orchestrierung
                </Typo.H4>
                <p className="text-gray-600">
                  Docker Compose für einfache Setups, Kubernetes für
                  Enterprise-Deployments mit High Availability.
                </p>
              </div>
              <div>
                <Typo.H4 disableMargin>
                  PostgreSQL Datenbank
                </Typo.H4>
                <p className="text-gray-600">
                  Production-ready Datenbank mit Streaming Replication und
                  automatischem Failover.
                </p>
              </div>
              <div>
                <Typo.H4 disableMargin>
                  Queue Mode mit Redis
                </Typo.H4>
                <p className="text-gray-600">
                  Horizontale Skalierung für High-Volume Workloads. Bis zu 162
                  Executions pro Sekunde.
                </p>
              </div>
              <div>
                <Typo.H4 disableMargin>
                  Monitoring & Alerting
                </Typo.H4>
                <p className="text-gray-600">
                  Prometheus & Grafana für vollständige Observability Ihrer
                  n8n-Instanz. Jedes n8n Beispiel aus unserer Praxis enthält
                  vorkonfigurierte n8n-Vorlagen für das Monitoring.
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/web-development.jpg"
              alt="n8n Architektur"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      {/* Contact CTA */}
      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
