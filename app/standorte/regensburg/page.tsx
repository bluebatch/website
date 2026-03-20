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
      source: "/ai-workflows-regensburg",
      preHeadline: "AI Workflows Regensburg",
      headline: "AI Workflows & Automatisierung in Regensburg",
      metaTitle: "AI Workflows Regensburg - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Regensburg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Regensburg",
        "KI Automatisierung Regensburg",
        "Workflow Automatisierung Regensburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-regensburg",
      preHeadline: "n8n Automation Regensburg",
      headline: "n8n Automation in Regensburg - Workflows automatisieren",
      metaTitle: "n8n Automation Regensburg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Regensburg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Regensburg",
        "n8n Regensburg",
        "Workflow Automation Regensburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-regensburg",
      preHeadline: "n8n Regensburg",
      headline: "n8n Agentur in Regensburg",
      metaTitle: "n8n Regensburg - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Regensburg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Regensburg und Umgebung.",
      keywords: [
        "n8n Regensburg",
        "n8n Agentur Regensburg",
        "n8n Beratung Regensburg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-regensburg",
      preHeadline: "Automation Regensburg",
      headline: "Automation & Prozessoptimierung in Regensburg",
      metaTitle: "Automation Regensburg - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Regensburg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Regensburg",
        "Prozessautomatisierung Regensburg",
        "Workflow Automation Regensburg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-regensburg",
      preHeadline: "IT Dienstleister Regensburg",
      headline: "IT Dienstleister in Regensburg - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Regensburg - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Regensburg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Regensburg.",
      keywords: [
        "IT Dienstleister Regensburg",
        "IT Service Regensburg",
        "Digitalisierung Regensburg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-regensburg",
      preHeadline: "KI Beratung Regensburg",
      headline: "KI Beratung in Regensburg - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Regensburg - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Regensburg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Regensburg",
        "KI Lösungen Regensburg",
        "Künstliche Intelligenz Regensburg",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Regensburg",
  slug: "regensburg",
  bundesland: "Bayern",
  publish: false,
  nearbySmall: [
    "Neutraubling",
    "Kelheim",
    "Straubing",
    "Neumarkt in der Oberpfalz",
    "Schwandorf",
  ],
  crossReference: [
    { name: "Nürnberg", slug: "nuernberg" },
    { name: "München", slug: "muenchen" },
    { name: "Ingolstadt", slug: "ingolstadt" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/regensburg",
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
