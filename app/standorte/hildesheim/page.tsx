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
      source: "/ai-workflows-hildesheim",
      preHeadline: "AI Workflows Hildesheim",
      headline: "AI Workflows & Automatisierung in Hildesheim",
      metaTitle: "AI Workflows Hildesheim - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Hildesheim. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Hildesheim",
        "KI Automatisierung Hildesheim",
        "Workflow Automatisierung Hildesheim",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-hildesheim",
      preHeadline: "n8n Automation Hildesheim",
      headline: "n8n Automation in Hildesheim - Workflows automatisieren",
      metaTitle: "n8n Automation Hildesheim | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Hildesheim. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Hildesheim",
        "n8n Hildesheim",
        "Workflow Automation Hildesheim",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-hildesheim",
      preHeadline: "n8n Hildesheim",
      headline: "n8n Agentur in Hildesheim",
      metaTitle: "n8n Hildesheim - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Hildesheim. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Hildesheim und Umgebung.",
      keywords: [
        "n8n Hildesheim",
        "n8n Agentur Hildesheim",
        "n8n Beratung Hildesheim",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-hildesheim",
      preHeadline: "Automation Hildesheim",
      headline: "Automation & Prozessoptimierung in Hildesheim",
      metaTitle: "Automation Hildesheim - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Hildesheim. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Hildesheim",
        "Prozessautomatisierung Hildesheim",
        "Workflow Automation Hildesheim",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-hildesheim",
      preHeadline: "IT Dienstleister Hildesheim",
      headline: "IT Dienstleister in Hildesheim - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Hildesheim - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Hildesheim. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Hildesheim.",
      keywords: [
        "IT Dienstleister Hildesheim",
        "IT Service Hildesheim",
        "Digitalisierung Hildesheim",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-hildesheim",
      preHeadline: "KI Beratung Hildesheim",
      headline: "KI Beratung in Hildesheim - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Hildesheim - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Hildesheim. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Hildesheim",
        "KI Lösungen Hildesheim",
        "Künstliche Intelligenz Hildesheim",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Hildesheim",
  slug: "hildesheim",
  bundesland: "Niedersachsen",
  publish: false,
  nearbySmall: [
    "Peine",
    "Sarstedt",
    "Alfeld",
    "Bad Salzdetfurth",
  ],
  crossReference: [
    { name: "Hannover", slug: "hannover" },
    { name: "Braunschweig", slug: "braunschweig" },
    { name: "Salzgitter", slug: "salzgitter" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/hildesheim",
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
