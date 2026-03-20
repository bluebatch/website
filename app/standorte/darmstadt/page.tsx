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
      source: "/ai-workflows-darmstadt",
      preHeadline: "AI Workflows Darmstadt",
      headline: "AI Workflows & Automatisierung in Darmstadt",
      metaTitle: "AI Workflows Darmstadt - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Darmstadt. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Darmstadt",
        "KI Automatisierung Darmstadt",
        "Workflow Automatisierung Darmstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-darmstadt",
      preHeadline: "n8n Automation Darmstadt",
      headline: "n8n Automation in Darmstadt - Workflows automatisieren",
      metaTitle: "n8n Automation Darmstadt | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Darmstadt. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Darmstadt",
        "n8n Darmstadt",
        "Workflow Automation Darmstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-darmstadt",
      preHeadline: "n8n Darmstadt",
      headline: "n8n Agentur in Darmstadt",
      metaTitle: "n8n Darmstadt - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Darmstadt. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Darmstadt und Umgebung.",
      keywords: [
        "n8n Darmstadt",
        "n8n Agentur Darmstadt",
        "n8n Beratung Darmstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-darmstadt",
      preHeadline: "Automation Darmstadt",
      headline: "Automation & Prozessoptimierung in Darmstadt",
      metaTitle: "Automation Darmstadt - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Darmstadt. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Darmstadt",
        "Prozessautomatisierung Darmstadt",
        "Workflow Automation Darmstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-darmstadt",
      preHeadline: "IT Dienstleister Darmstadt",
      headline: "IT Dienstleister in Darmstadt - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Darmstadt - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Darmstadt. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Darmstadt.",
      keywords: [
        "IT Dienstleister Darmstadt",
        "IT Service Darmstadt",
        "Digitalisierung Darmstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-darmstadt",
      preHeadline: "KI Beratung Darmstadt",
      headline: "KI Beratung in Darmstadt - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Darmstadt - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Darmstadt. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Darmstadt",
        "KI Lösungen Darmstadt",
        "Künstliche Intelligenz Darmstadt",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Darmstadt",
  slug: "darmstadt",
  bundesland: "Hessen",
  publish: false,
  nearbySmall: [
    "Rüsselsheim am Main",
    "Langen",
    "Dreieich",
    "Rodgau",
    "Bensheim",
    "Pfungstadt",
    "Dieburg",
    "Groß-Gerau",
  ],
  crossReference: [
    { name: "Frankfurt am Main", slug: "frankfurt-am-main" },
    { name: "Offenbach am Main", slug: "offenbach-am-main" },
    { name: "Mannheim", slug: "mannheim" },
    { name: "Heidelberg", slug: "heidelberg" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/darmstadt",
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
