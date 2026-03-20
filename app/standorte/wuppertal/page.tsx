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
      source: "/ai-workflows-wuppertal",
      preHeadline: "AI Workflows Wuppertal",
      headline: "AI Workflows & Automatisierung in Wuppertal",
      metaTitle: "AI Workflows Wuppertal - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Wuppertal. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Wuppertal",
        "KI Automatisierung Wuppertal",
        "Workflow Automatisierung Wuppertal",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-wuppertal",
      preHeadline: "n8n Automation Wuppertal",
      headline: "n8n Automation in Wuppertal - Workflows automatisieren",
      metaTitle: "n8n Automation Wuppertal | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Wuppertal. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Wuppertal",
        "n8n Wuppertal",
        "Workflow Automation Wuppertal",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-wuppertal",
      preHeadline: "n8n Wuppertal",
      headline: "n8n Agentur in Wuppertal",
      metaTitle: "n8n Wuppertal - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Wuppertal. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Wuppertal und Umgebung.",
      keywords: [
        "n8n Wuppertal",
        "n8n Agentur Wuppertal",
        "n8n Beratung Wuppertal",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-wuppertal",
      preHeadline: "Automation Wuppertal",
      headline: "Automation & Prozessoptimierung in Wuppertal",
      metaTitle: "Automation Wuppertal - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Wuppertal. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Wuppertal",
        "Prozessautomatisierung Wuppertal",
        "Workflow Automation Wuppertal",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-wuppertal",
      preHeadline: "IT Dienstleister Wuppertal",
      headline: "IT Dienstleister in Wuppertal - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Wuppertal - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Wuppertal. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Wuppertal.",
      keywords: [
        "IT Dienstleister Wuppertal",
        "IT Service Wuppertal",
        "Digitalisierung Wuppertal",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-wuppertal",
      preHeadline: "KI Beratung Wuppertal",
      headline: "KI Beratung in Wuppertal - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Wuppertal - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Wuppertal. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Wuppertal",
        "KI Lösungen Wuppertal",
        "Künstliche Intelligenz Wuppertal",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Wuppertal",
  slug: "wuppertal",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Velbert",
    "Schwelm",
    "Haan",
    "Mettmann",
    "Ennepetal",
    "Gevelsberg",
    "Sprockhövel",
    "Radevormwald",
    "Wülfrath",
    "Hilden",
    "Erkrath",
  ],
  crossReference: [
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Solingen", slug: "solingen" },
    { name: "Remscheid", slug: "remscheid" },
    { name: "Hagen", slug: "hagen" },
    { name: "Essen", slug: "essen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/wuppertal",
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
