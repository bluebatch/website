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
      source: "/ai-workflows-wolfsburg",
      preHeadline: "AI Workflows Wolfsburg",
      headline: "AI Workflows & Automatisierung in Wolfsburg",
      metaTitle: "AI Workflows Wolfsburg - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Wolfsburg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Wolfsburg",
        "KI Automatisierung Wolfsburg",
        "Workflow Automatisierung Wolfsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-wolfsburg",
      preHeadline: "n8n Automation Wolfsburg",
      headline: "n8n Automation in Wolfsburg - Workflows automatisieren",
      metaTitle: "n8n Automation Wolfsburg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Wolfsburg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Wolfsburg",
        "n8n Wolfsburg",
        "Workflow Automation Wolfsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-wolfsburg",
      preHeadline: "n8n Wolfsburg",
      headline: "n8n Agentur in Wolfsburg",
      metaTitle: "n8n Wolfsburg - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Wolfsburg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Wolfsburg und Umgebung.",
      keywords: [
        "n8n Wolfsburg",
        "n8n Agentur Wolfsburg",
        "n8n Beratung Wolfsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-wolfsburg",
      preHeadline: "Automation Wolfsburg",
      headline: "Automation & Prozessoptimierung in Wolfsburg",
      metaTitle: "Automation Wolfsburg - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Wolfsburg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Wolfsburg",
        "Prozessautomatisierung Wolfsburg",
        "Workflow Automation Wolfsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-wolfsburg",
      preHeadline: "IT Dienstleister Wolfsburg",
      headline: "IT Dienstleister in Wolfsburg - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Wolfsburg - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Wolfsburg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Wolfsburg.",
      keywords: [
        "IT Dienstleister Wolfsburg",
        "IT Service Wolfsburg",
        "Digitalisierung Wolfsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-wolfsburg",
      preHeadline: "KI Beratung Wolfsburg",
      headline: "KI Beratung in Wolfsburg - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Wolfsburg - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Wolfsburg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Wolfsburg",
        "KI Lösungen Wolfsburg",
        "Künstliche Intelligenz Wolfsburg",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Wolfsburg",
  slug: "wolfsburg",
  bundesland: "Niedersachsen",
  publish: false,
  nearbySmall: [
    "Gifhorn",
    "Helmstedt",
    "Wolfenbüttel",
    "Peine",
  ],
  crossReference: [
    { name: "Braunschweig", slug: "braunschweig" },
    { name: "Hannover", slug: "hannover" },
    { name: "Magdeburg", slug: "magdeburg" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/wolfsburg",
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
