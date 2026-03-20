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
      source: "/ai-workflows-aachen",
      preHeadline: "AI Workflows Aachen",
      headline: "AI Workflows & Automatisierung in Aachen",
      metaTitle: "AI Workflows Aachen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Aachen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Aachen",
        "KI Automatisierung Aachen",
        "Workflow Automatisierung Aachen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-aachen",
      preHeadline: "n8n Automation Aachen",
      headline: "n8n Automation in Aachen - Workflows automatisieren",
      metaTitle: "n8n Automation Aachen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Aachen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Aachen",
        "n8n Aachen",
        "Workflow Automation Aachen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-aachen",
      preHeadline: "n8n Aachen",
      headline: "n8n Agentur in Aachen",
      metaTitle: "n8n Aachen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Aachen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Aachen und Umgebung.",
      keywords: [
        "n8n Aachen",
        "n8n Agentur Aachen",
        "n8n Beratung Aachen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-aachen",
      preHeadline: "Automation Aachen",
      headline: "Automation & Prozessoptimierung in Aachen",
      metaTitle: "Automation Aachen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Aachen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Aachen",
        "Prozessautomatisierung Aachen",
        "Workflow Automation Aachen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-aachen",
      preHeadline: "IT Dienstleister Aachen",
      headline: "IT Dienstleister in Aachen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Aachen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Aachen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Aachen.",
      keywords: [
        "IT Dienstleister Aachen",
        "IT Service Aachen",
        "Digitalisierung Aachen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-aachen",
      preHeadline: "KI Beratung Aachen",
      headline: "KI Beratung in Aachen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Aachen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Aachen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Aachen",
        "KI Lösungen Aachen",
        "Künstliche Intelligenz Aachen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Aachen",
  slug: "aachen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Stolberg",
    "Eschweiler",
    "Herzogenrath",
    "Würselen",
    "Alsdorf",
    "Baesweiler",
    "Düren",
    "Jülich",
  ],
  crossReference: [
    { name: "Köln", slug: "koeln" },
    { name: "Mönchengladbach", slug: "moenchengladbach" },
    { name: "Düsseldorf", slug: "duesseldorf" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/aachen",
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
