import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContentWrapper from "@/components/layout/content-wrapper";
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
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Tools im Überblick | Bluebatch",
  description:
    "Alle Tools im Überblick: n8n, Make, Zapier, Power Automate, Workato, UiPath, Navision, Easybill, microtech ERP und Freshworks. Beratung, Migration und Integration durch Bluebatch.",
  openGraph: {
    title: "Tools im Überblick | Bluebatch",
    description:
      "Automatisierungs-Tools und Großhandel-Tools – wir beraten, migrieren und automatisieren.",
    type: "website",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "/images/bluebatch-social-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Bluebatch Tools & Integrationen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tools im Überblick | Bluebatch",
    description:
      "Automatisierungs-Tools und Großhandel-Tools – Beratung und Migration.",
    images: ["/images/bluebatch-social-cover.jpg"],
  },
  alternates: {
    canonical: "/tools",
  },
};

const automationTools = [
  {
    slug: "n8n",
    title: "n8n",
    description: "Open-Source Workflow-Automatisierung mit 1.200+ Integrationen.",
    image: "/tools/N8n-logo.png",
  },
  {
    slug: "make",
    title: "Make",
    description: "Visueller Szenario-Builder mit 3.000+ Integrationen.",
    image: "/tools/make.svg",
  },
  {
    slug: "zapier",
    title: "Zapier",
    description: "No-Code-Plattform mit 8.000+ App-Verbindungen.",
    image: "/tools/zapier.svg",
  },
  {
    slug: "power-automate",
    title: "Power Automate",
    description: "Microsofts Automatisierung mit 1.000+ Konnektoren und RPA.",
    image: "/tools/power-automate.svg",
  },
  {
    slug: "workato",
    title: "Workato",
    description: "Enterprise iPaaS mit 1.200+ Konnektoren und KI-Copilot.",
    image: "/tools/workato.svg",
  },
  {
    slug: "uipath",
    title: "UiPath",
    description: "Marktführer für RPA mit Desktop-Automatisierung.",
    image: "/tools/uipath.svg",
  },
  {
    slug: "tray-io",
    title: "Tray.io",
    description: "Enterprise Automation Cloud mit Merlin AI.",
    image: "/tools/tray-io.svg",
  },
  {
    slug: "activepieces",
    title: "Activepieces",
    description: "MIT-lizenzierte Open-Source-Alternative mit 560+ Integrationen.",
    image: "/tools/activepieces.svg",
  },
  {
    slug: "pipedream",
    title: "Pipedream",
    description: "Code-native Plattform mit 2.800+ Integrationen.",
    image: "/tools/pipedream.svg",
  },
];

const grosshandelTools = [
  {
    slug: "navision",
    title: "Navision",
    description: "Microsoft Dynamics NAV / Business Central – ERP für den Mittelstand.",
    image: "/tools/ms-dynamics-nav.png",
  },
  {
    slug: "easybill",
    title: "Easybill",
    description: "Deutsche Cloud-Rechnungssoftware mit ZUGFeRD und DATEV.",
    image: "/tools/easybill.png",
  },
  {
    slug: "microtech-bueroplus",
    title: "microtech ERP",
    description: "ERP für den deutschen Mittelstand mit GraphQL API.",
    image: "/tools/microtech.svg",
  },
  {
    slug: "freshworks",
    title: "Freshworks",
    description: "Freshdesk, Freshsales, Freshservice – Helpdesk, CRM & ITSM.",
    image: "/tools/freshworks.png",
  },
];

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Tools</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Unsere Tools im Überblick
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Von n8n über Make und Zapier bis Navision und Freshworks – wir
              kennen alle Plattformen und beraten Sie unabhängig. Migration,
              Integration und Optimierung aus einer Hand.
            </Hero2ColumnDescription>
            <Hero2ColumnCallToAction>
              <ContactButton icon="chat">Beratung anfragen</ContactButton>
            </Hero2ColumnCallToAction>
            <Hero2ColumnSubtext>
              n8n • Make • Zapier • Navision • Easybill • microtech • Freshworks
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

      <ContentWrapper noPadding bodyWidth="full">
        <Customer />
      </ContentWrapper>

      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Automatisierung</IntroBox.PreHeadline>
          <IntroBox.Headline>Automatisierungs-Tools</IntroBox.Headline>
          <IntroBox.Subline>
            Workflow-Plattformen, iPaaS und RPA – wir beraten, migrieren und
            integrieren.
          </IntroBox.Subline>
        </IntroBox>

        <div className="divide-y divide-gray-100">
          {automationTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group flex items-center gap-5 py-5 transition-colors hover:bg-gray-50 -mx-4 px-4 rounded-lg"
            >
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {tool.title}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {tool.description}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </ContentWrapper>

      <ContentWrapper colorScheme="gray-light">
        <IntroBox>
          <IntroBox.PreHeadline>Großhandel & Business</IntroBox.PreHeadline>
          <IntroBox.Headline>Großhandel-Tools</IntroBox.Headline>
          <IntroBox.Subline>
            ERP, Rechnungssoftware, Helpdesk und CRM – wir integrieren Ihre
            bestehenden Systeme in automatisierte Workflows.
          </IntroBox.Subline>
        </IntroBox>

        <div className="divide-y divide-gray-200">
          {grosshandelTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group flex items-center gap-5 py-5 transition-colors hover:bg-gray-100 -mx-4 px-4 rounded-lg"
            >
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src={tool.image}
                  alt={tool.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {tool.title}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {tool.description}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
