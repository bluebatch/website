import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getRewriteOverrides } from "@/lib/get-rewrites";
import { rewriteSiteConfig } from "./rewrite.site";
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

const defaultMeta = {
  title: "n8n Workflow-Automatisierung | Bluebatch",
  description:
    "n8n ist die Open-Source Workflow-Automatisierungsplattform mit 1.200+ Integrationen. Erfahren Sie, wie Bluebatch n8n für Ihr Unternehmen einsetzt.",
  ogDescription:
    "Die Open-Source Automatisierungsplattform für Enterprise-Workflows. Self-hosted, flexibel, skalierbar.",
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
    "n8n",
    "n8n Automatisierung",
    "Workflow Automatisierung",
    "Open Source Automation",
    "n8n Integrationen",
    "Self-Hosted Automation",
    "n8n Workflow Builder",
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
      canonical: "/tools/automation-tools/n8n",
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
    title: "Self-Hosted Option",
    description:
      "Hosten Sie n8n auf Ihrer eigenen Infrastruktur. Volle Datenkontrolle, DSGVO-konform und keine Execution-Limits.",
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
    href: "/services/n8n-hosting",
  },
  {
    icon: "🔧",
    title: "Workflow-Wartung",
    description:
      "24/7 Monitoring, proaktive Updates und 99,9% Uptime SLA für Ihre n8n-Instanz.",
    href: "/services/workflow-wartung",
  },
  {
    icon: "💻",
    title: "Custom Nodes",
    description:
      "Maßgeschneiderte n8n Nodes für jede API und jedes System – professionell entwickelt.",
    href: "/services/custom-nodes",
  },
];

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
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
                "n8n – Die Open-Source Workflow-Automatisierung"}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              n8n verbindet visuelle Prozessgestaltung mit der Flexibilität von
              Code. Mit über 1.200 Integrationen automatisieren Sie komplexe
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
          <IntroBox.Headline>Warum n8n?</IntroBox.Headline>
          <IntroBox.Paragraph>
            n8n ist die führende Open-Source Alternative zu Zapier und Make –
            mit voller Datenkontrolle und unbegrenzten Möglichkeiten.
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
              Was kann man mit n8n automatisieren?
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

      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
