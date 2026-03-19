import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/layout/content-wrapper";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnPreHeadline,
} from "@/components/heroes/hero-2-column";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import Typo from "@/components/ui/typo";
import type { CityMeta } from "@/lib/meta-custom";

import type { RewriteSiteConfig } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-oberhausen",
      preHeadline: "AI Workflows Oberhausen",
      headline: "AI Workflows & Automatisierung in Oberhausen",
      metaTitle: "AI Workflows Oberhausen – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Oberhausen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Oberhausen",
        "KI Automatisierung Oberhausen",
        "Workflow Automatisierung Oberhausen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-oberhausen",
      preHeadline: "n8n Automation Oberhausen",
      headline: "n8n Automation in Oberhausen – Workflows automatisieren",
      metaTitle: "n8n Automation Oberhausen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Oberhausen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Oberhausen",
        "n8n Oberhausen",
        "Workflow Automation Oberhausen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-oberhausen",
      preHeadline: "n8n Oberhausen",
      headline: "n8n Agentur in Oberhausen",
      metaTitle: "n8n Oberhausen – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Oberhausen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Oberhausen und Umgebung.",
      keywords: [
        "n8n Oberhausen",
        "n8n Agentur Oberhausen",
        "n8n Beratung Oberhausen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-oberhausen",
      preHeadline: "Automation Oberhausen",
      headline: "Automation & Prozessoptimierung in Oberhausen",
      metaTitle: "Automation Oberhausen – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Oberhausen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Oberhausen",
        "Prozessautomatisierung Oberhausen",
        "Workflow Automation Oberhausen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-oberhausen",
      preHeadline: "IT Dienstleister Oberhausen",
      headline: "IT Dienstleister in Oberhausen – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Oberhausen – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Oberhausen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Oberhausen.",
      keywords: [
        "IT Dienstleister Oberhausen",
        "IT Service Oberhausen",
        "Digitalisierung Oberhausen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-oberhausen",
      preHeadline: "KI Beratung Oberhausen",
      headline: "KI Beratung in Oberhausen – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Oberhausen – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Oberhausen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Oberhausen",
        "KI Lösungen Oberhausen",
        "Künstliche Intelligenz Oberhausen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Oberhausen",
  slug: "oberhausen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Gladbeck",
    "Dinslaken",
  ],
  crossReference: [
    { name: "Essen", slug: "essen" },
    { name: "Duisburg", slug: "duisburg" },
    { name: "Bottrop", slug: "bottrop" },
    { name: "Mülheim an der Ruhr", slug: "muelheim-an-der-ruhr" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/oberhausen",
  },
};

export default function Page() {
  if (!metaCustom.publish) notFound();
  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>
              Standort {metaCustom.name}
            </Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Workflow-Automatisierung in {metaCustom.name}
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Ihr Partner für intelligente Automatisierung und KI-gestützte
              Workflows in {metaCustom.name} und {metaCustom.bundesland}.
            </Hero2ColumnDescription>
          </Hero2ColumnTextColumn>
        </Hero2Column>
      </ContentWrapper>

      <ContentWrapper>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Typo.H2>Unsere Services in {metaCustom.name}</Typo.H2>
            <Typo.Paragraph>
              Als Experten für Workflow-Automatisierung unterstützen wir
              Unternehmen in {metaCustom.name} und Umgebung bei der
              Digitalisierung und Optimierung ihrer Geschäftsprozesse.
            </Typo.Paragraph>
          </div>
          <div>
            <Typo.H2>Auch in Ihrer Nähe</Typo.H2>
            <Typo.Paragraph>
              Wir betreuen Kunden in der gesamten Region — auch in den
              umliegenden Städten.
            </Typo.Paragraph>
          </div>
        </div>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
