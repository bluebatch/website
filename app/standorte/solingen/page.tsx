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
      source: "/ai-workflows-solingen",
      preHeadline: "AI Workflows Solingen",
      headline: "AI Workflows & Automatisierung in Solingen",
      metaTitle: "AI Workflows Solingen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Solingen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Solingen",
        "KI Automatisierung Solingen",
        "Workflow Automatisierung Solingen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-solingen",
      preHeadline: "n8n Automation Solingen",
      headline: "n8n Automation in Solingen - Workflows automatisieren",
      metaTitle: "n8n Automation Solingen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Solingen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Solingen",
        "n8n Solingen",
        "Workflow Automation Solingen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-solingen",
      preHeadline: "n8n Solingen",
      headline: "n8n Agentur in Solingen",
      metaTitle: "n8n Solingen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Solingen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Solingen und Umgebung.",
      keywords: [
        "n8n Solingen",
        "n8n Agentur Solingen",
        "n8n Beratung Solingen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-solingen",
      preHeadline: "Automation Solingen",
      headline: "Automation & Prozessoptimierung in Solingen",
      metaTitle: "Automation Solingen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Solingen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Solingen",
        "Prozessautomatisierung Solingen",
        "Workflow Automation Solingen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-solingen",
      preHeadline: "IT Dienstleister Solingen",
      headline: "IT Dienstleister in Solingen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Solingen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Solingen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Solingen.",
      keywords: [
        "IT Dienstleister Solingen",
        "IT Service Solingen",
        "Digitalisierung Solingen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-solingen",
      preHeadline: "KI Beratung Solingen",
      headline: "KI Beratung in Solingen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Solingen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Solingen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Solingen",
        "KI Lösungen Solingen",
        "Künstliche Intelligenz Solingen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Solingen",
  slug: "solingen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Hilden",
    "Haan",
    "Langenfeld",
    "Leichlingen",
    "Wermelskirchen",
    "Erkrath",
  ],
  crossReference: [
    { name: "Wuppertal", slug: "wuppertal" },
    { name: "Remscheid", slug: "remscheid" },
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Leverkusen", slug: "leverkusen" },
    { name: "Köln", slug: "koeln" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/solingen",
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
