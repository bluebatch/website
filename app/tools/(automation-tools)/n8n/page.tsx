import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import type { RewriteSiteConfig } from "@/lib/get-rewrites";
import { getRewriteOverrides } from "@/lib/get-rewrites";
import { enforceMainRewrite } from "@/lib/enforce-main-rewrite";
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
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import IntroBox from "@/components/ui/intro-box";
import SimpleCard from "@/components/cards/simple-card";
import { InternalLinkLabel } from "@/components/buttons/internal-link";

export const rewriteSiteConfig: RewriteSiteConfig = {
  mainRewrite: "/was-ist-n8n",
  rewrites: [
    {
      source: "/n8n-automation",
      preHeadline: "n8n Automation",
      headline: "n8n Automation – Workflows automatisieren mit Open Source",
      metaTitle: "n8n Automation – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Automation für Ihr Unternehmen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation",
        "n8n Workflow Automation",
        "Open Source Automation Tool",
        "n8n Enterprise",
        "Workflow Automation Platform",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automations",
      preHeadline: "n8n Automations",
      headline: "n8n Automations – Geschäftsprozesse automatisieren",
      metaTitle: "n8n Automations – Prozessautomatisierung | Bluebatch",
      metaDescription:
        "n8n Automations für komplexe Geschäftsprozesse. 1.200+ Integrationen, Visual Workflow Builder, self-hosted.",
      keywords: [
        "n8n Automations",
        "n8n Business Automations",
        "n8n Prozessautomatisierung",
        "n8n Integrationen",
        "Geschäftsprozesse automatisieren",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-workflow-automation",
      preHeadline: "n8n Workflow Automation",
      headline: "n8n Workflow Automation für den Mittelstand",
      metaTitle: "n8n Workflow Automation – Mittelstand | Bluebatch",
      metaDescription:
        "n8n Workflow Automation für den Mittelstand. Komplexe Geschäftsprozesse visuell automatisieren – auf Ihrer eigenen Infrastruktur.",
      keywords: [
        "n8n Workflow Automation",
        "Workflow Automation Mittelstand",
        "n8n Visual Builder",
        "Self-Hosted Workflow Automation",
        "n8n Drag and Drop",
        "Bluebatch",
      ],
    },
    {
      source: "/workflow-automatisierung-n8n",
      preHeadline: "Workflow-Automatisierung mit n8n",
      headline: "Workflow-Automatisierung mit n8n",
      metaTitle: "Workflow-Automatisierung mit n8n | Bluebatch",
      metaDescription:
        "Workflow-Automatisierung mit n8n. Von der ERP-Integration bis zur Dokumentenverarbeitung – alles automatisiert.",
      keywords: [
        "Workflow-Automatisierung n8n",
        "n8n ERP Integration",
        "n8n Dokumentenverarbeitung",
        "Prozessautomatisierung n8n",
        "n8n Agentur",
        "Bluebatch",
      ],
    },
    {
      source: "/was-ist-n8n",
    },
  ],
};

const defaultMeta = {
  title: "Was ist n8n? Die Open-Source Automatisierungsplattform | Bluebatch",
  description:
    "Was ist n8n? Die Open-Source iPaaS-Plattform für Workflow-Automatisierung mit 1.200+ Integrationen. Erfahren Sie, wie Bluebatch n8n als Prozessautomatisierung Software einsetzt.",
  ogDescription:
    "Was ist n8n? Die Open-Source iPaaS-Plattform für Enterprise-Workflows. Self-hosted, flexibel, skalierbar.",
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
  const params = await searchParams;
  const overrides = getRewriteOverrides(rewriteSiteConfig, params);

  const title = overrides?.metaTitle ?? defaultMeta.title;
  const description = overrides?.metaDescription ?? defaultMeta.description;

  const defaultKeywords = [
    "was ist n8n",
    "n8n",
    "iPaaS",
    "iPaaS RPA",
    "iPaaS Cloud Integration",
    "iPaaS Integration",
    "Prozessautomatisierung Software",
    "Workflow Automatisierung",
    "Open Source Automation",
    "Bluebatch",
  ];

  return {
    title,
    description,
    keywords: overrides?.keywords ?? defaultKeywords,
    openGraph: {
      title,
      description: overrides?.metaDescription ?? defaultMeta.ogDescription,
      type: "website",
      locale: "de_DE",
      siteName: "Bluebatch",
      images: [
        {
          url: "/images/bluebatch-social-cover.jpg",
          width: 1200,
          height: 630,
          alt: "Bluebatch n8n Automatisierung",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: overrides?.metaDescription ?? defaultMeta.ogDescription,
      images: ["/images/bluebatch-social-cover.jpg"],
    },
    alternates: {
      canonical: "/was-ist-n8n",
    },
  };
}

const features = [
  {
    icon: "🎨",
    title: "Visual Workflow Builder",
    description:
      "Erstellen Sie komplexe Workflows per Drag & Drop. Keine Programmierkenntnisse nötig – aber möglich, wenn gewünscht.",
  },
  {
    icon: "🔗",
    title: "1.200+ Integrationen",
    description:
      "Verbinden Sie Hunderte von Apps und Services – von Slack und Teams über Salesforce bis zu beliebigen REST-APIs.",
  },
  {
    icon: "🏠",
    title: "Self-Hosted oder iPaaS Cloud Integration",
    description:
      "Hosten Sie n8n auf Ihrer eigenen Infrastruktur oder nutzen Sie die iPaaS Cloud Integration. Volle Datenkontrolle, DSGVO-konform und keine Execution-Limits.",
  },
  {
    icon: "💻",
    title: "JavaScript & Python",
    description:
      "Erweitern Sie Workflows mit Custom Code. Schreiben Sie JavaScript oder Python direkt in Ihren Automatisierungen.",
  },
  {
    icon: "🏢",
    title: "Enterprise Features",
    description:
      "SSO-Integration, rollenbasierte Zugriffskontrolle, Audit-Logging und verschlüsselte Credentials für Unternehmen.",
  },
  {
    icon: "📖",
    title: "Open Source",
    description:
      "Fair-Code lizenziert mit aktivem Community-Ökosystem. Über 45.000 Nutzer und 600+ vorgefertigte Workflow-Templates.",
  },
];

const useCases = [
  {
    title: "ERP-Integration",
    description:
      "Verbinden Sie Navision, SAP oder andere ERP-Systeme mit Ihren Geschäftsanwendungen.",
  },
  {
    title: "Dokumentenverarbeitung",
    description:
      "Automatisieren Sie die Verarbeitung von Rechnungen, Verträgen und Formularen mit KI.",
  },
  {
    title: "E-Commerce-Automatisierung",
    description:
      "Synchronisieren Sie Bestellungen, Lagerbestände und Kundendaten zwischen Shops und Systemen.",
  },
  {
    title: "Kommunikation & Benachrichtigungen",
    description:
      "Automatisierte E-Mails, Slack-Nachrichten und Benachrichtigungen basierend auf Geschäftsereignissen.",
  },
];

const bluebatchServices = [
  {
    icon: "🏢",
    title: "n8n Hosting",
    description:
      "Professionelles Hosting auf Ihrer Infrastruktur – OnPrem oder Cloud, DSGVO-konform.",
    href: "/n8n-hosting-deutschland",
  },
  {
    icon: "🔧",
    title: "Workflow-Wartung",
    description:
      "24/7 Monitoring, proaktive Updates und 99,9% Uptime SLA für Ihre n8n-Instanz.",
    href: "/workflow-wartung",
  },
  {
    icon: "💻",
    title: "Custom Nodes",
    description:
      "Maßgeschneiderte n8n Nodes für jede API und jedes System – professionell entwickelt.",
    href: "/n8n-node",
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await enforceMainRewrite(rewriteSiteConfig, searchParams);

  const params = await searchParams;
  const overrides = getRewriteOverrides(rewriteSiteConfig, params);

  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              {overrides?.preHeadline ?? "Tools"}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              {overrides?.headline ??
                "Was ist n8n? Die Open-Source Plattform für Prozessautomatisierung"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Was ist n8n? Eine leistungsstarke iPaaS-Plattform, die visuelle
              Prozessgestaltung mit der Flexibilität von Code verbindet. Mit
              über 1.200 Integrationen automatisieren Sie komplexe
              Geschäftsprozesse – auf Ihrer eigenen Infrastruktur oder in der
              Cloud.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">n8n Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              Open Source • 1.200+ Integrationen • Self-Hosted
            </Hero2ColumnSubtext>
          </Hero2ColumnTextColumn>
          <Hero2ColumnMediaColumn>
            <Hero2ColumnImage
              src="/images/digital-workflow.jpg"
              type="image"
            />
          </Hero2ColumnMediaColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Features</IntroBox.PreHeadline>
          <IntroBox.Headline>Warum n8n als iPaaS-Lösung?</IntroBox.Headline>
          <IntroBox.Paragraph>
            n8n ist die führende Open-Source Prozessautomatisierung Software und
            eine echte Alternative zu Zapier und Make – mit voller
            Datenkontrolle und unbegrenzten Möglichkeiten für iPaaS Integration.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="gap-8">
          {features.map((feature, index) => (
            <SimpleCard key={index}>
              <SimpleCard.Icon>
                <>{feature.icon}</>
              </SimpleCard.Icon>
              <Typo.H3 className="mb-3 text-xl">{feature.title}</Typo.H3>
              <Typo.Paragraph textColor="muted" size="sm">
                {feature.description}
              </Typo.Paragraph>
            </SimpleCard>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper>
        <SimpleGrid cols={2} className="items-center gap-12">
          <div>
            <Typo.H2 className="mb-6">
              iPaaS RPA: Was kann man mit n8n automatisieren?
            </Typo.H2>
            <div className="space-y-6">
              {useCases.map((useCase, index) => (
                <div key={index}>
                  <Typo.H4 disableMargin>
                    {useCase.title}
                  </Typo.H4>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/process-automation.jpg"
              alt="n8n Workflow-Automatisierung"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper colorScheme="primary-darker">
        <IntroBox dark>
          <IntroBox.PreHeadline>Unsere Services</IntroBox.PreHeadline>
          <IntroBox.Headline>Bluebatch + n8n</IntroBox.Headline>
          <IntroBox.Paragraph>
            Als n8n-Experten bieten wir Ihnen das Komplettpaket – vom Hosting
            über Wartung bis zur individuellen Entwicklung.
          </IntroBox.Paragraph>
        </IntroBox>

        <SimpleGrid cols={3} className="gap-8">
          {bluebatchServices.map((service, index) => (
            <Link key={index} href={service.href} className="block group">
              <SimpleCard colorScheme="white">
                <SimpleCard.Icon>
                  <div className="text-4xl">{service.icon}</div>
                </SimpleCard.Icon>
                <Typo.H3 className="mb-3 text-lg group-hover:text-primary-600 transition-colors">
                  {service.title}
                </Typo.H3>
                <Typo.Paragraph textColor="muted" size="sm">
                  {service.description}
                </Typo.Paragraph>
                <SimpleCard.Footer>
                  <InternalLinkLabel>Mehr erfahren</InternalLinkLabel>
                </SimpleCard.Footer>
              </SimpleCard>
            </Link>
          ))}
        </SimpleGrid>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
