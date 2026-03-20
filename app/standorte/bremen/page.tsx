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
      source: "/ai-workflows-bremen",
      preHeadline: "AI Workflows Bremen",
      headline: "AI Workflows & Automatisierung in Bremen",
      metaTitle: "AI Workflows Bremen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Bremen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Bremen",
        "KI Automatisierung Bremen",
        "Workflow Automatisierung Bremen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-bremen",
      preHeadline: "n8n Automation Bremen",
      headline: "n8n Automation in Bremen - Workflows automatisieren",
      metaTitle: "n8n Automation Bremen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Bremen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Bremen",
        "n8n Bremen",
        "Workflow Automation Bremen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-bremen",
      preHeadline: "n8n Bremen",
      headline: "n8n Agentur in Bremen",
      metaTitle: "n8n Bremen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Bremen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Bremen und Umgebung.",
      keywords: [
        "n8n Bremen",
        "n8n Agentur Bremen",
        "n8n Beratung Bremen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-bremen",
      preHeadline: "Automation Bremen",
      headline: "Automation & Prozessoptimierung in Bremen",
      metaTitle: "Automation Bremen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Bremen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Bremen",
        "Prozessautomatisierung Bremen",
        "Workflow Automation Bremen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-bremen",
      preHeadline: "IT Dienstleister Bremen",
      headline: "IT Dienstleister in Bremen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Bremen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Bremen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Bremen.",
      keywords: [
        "IT Dienstleister Bremen",
        "IT Service Bremen",
        "Digitalisierung Bremen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-bremen",
      preHeadline: "KI Beratung Bremen",
      headline: "KI Beratung in Bremen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Bremen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Bremen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Bremen",
        "KI Lösungen Bremen",
        "Künstliche Intelligenz Bremen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Bremen",
  slug: "bremen",
  bundesland: "Bremen",
  publish: false,
  nearbySmall: [
    "Delmenhorst",
    "Achim",
    "Verden",
    "Osterholz-Scharmbeck",
    "Stuhr",
    "Weyhe",
    "Syke",
  ],
  crossReference: [
    { name: "Oldenburg", slug: "oldenburg" },
    { name: "Bremerhaven", slug: "bremerhaven" },
    { name: "Hannover", slug: "hannover" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/bremen",
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
