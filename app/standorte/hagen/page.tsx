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
      source: "/ai-workflows-hagen",
      preHeadline: "AI Workflows Hagen",
      headline: "AI Workflows & Automatisierung in Hagen",
      metaTitle: "AI Workflows Hagen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Hagen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Hagen",
        "KI Automatisierung Hagen",
        "Workflow Automatisierung Hagen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-hagen",
      preHeadline: "n8n Automation Hagen",
      headline: "n8n Automation in Hagen - Workflows automatisieren",
      metaTitle: "n8n Automation Hagen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Hagen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Hagen",
        "n8n Hagen",
        "Workflow Automation Hagen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-hagen",
      preHeadline: "n8n Hagen",
      headline: "n8n Agentur in Hagen",
      metaTitle: "n8n Hagen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Hagen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Hagen und Umgebung.",
      keywords: [
        "n8n Hagen",
        "n8n Agentur Hagen",
        "n8n Beratung Hagen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-hagen",
      preHeadline: "Automation Hagen",
      headline: "Automation & Prozessoptimierung in Hagen",
      metaTitle: "Automation Hagen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Hagen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Hagen",
        "Prozessautomatisierung Hagen",
        "Workflow Automation Hagen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-hagen",
      preHeadline: "IT Dienstleister Hagen",
      headline: "IT Dienstleister in Hagen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Hagen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Hagen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Hagen.",
      keywords: [
        "IT Dienstleister Hagen",
        "IT Service Hagen",
        "Digitalisierung Hagen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-hagen",
      preHeadline: "KI Beratung Hagen",
      headline: "KI Beratung in Hagen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Hagen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Hagen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Hagen",
        "KI Lösungen Hagen",
        "Künstliche Intelligenz Hagen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Hagen",
  slug: "hagen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Iserlohn",
    "Schwelm",
    "Ennepetal",
    "Gevelsberg",
    "Herdecke",
    "Witten",
    "Wetter (Ruhr)",
    "Lüdenscheid",
    "Schwerte",
  ],
  crossReference: [
    { name: "Dortmund", slug: "dortmund" },
    { name: "Wuppertal", slug: "wuppertal" },
    { name: "Bochum", slug: "bochum" },
    { name: "Hamm", slug: "hamm" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/hagen",
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
