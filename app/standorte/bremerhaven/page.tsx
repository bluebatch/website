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
      source: "/ai-workflows-bremerhaven",
      preHeadline: "AI Workflows Bremerhaven",
      headline: "AI Workflows & Automatisierung in Bremerhaven",
      metaTitle: "AI Workflows Bremerhaven - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Bremerhaven. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Bremerhaven",
        "KI Automatisierung Bremerhaven",
        "Workflow Automatisierung Bremerhaven",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-bremerhaven",
      preHeadline: "n8n Automation Bremerhaven",
      headline: "n8n Automation in Bremerhaven - Workflows automatisieren",
      metaTitle: "n8n Automation Bremerhaven | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Bremerhaven. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Bremerhaven",
        "n8n Bremerhaven",
        "Workflow Automation Bremerhaven",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-bremerhaven",
      preHeadline: "n8n Bremerhaven",
      headline: "n8n Agentur in Bremerhaven",
      metaTitle: "n8n Bremerhaven - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Bremerhaven. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Bremerhaven und Umgebung.",
      keywords: [
        "n8n Bremerhaven",
        "n8n Agentur Bremerhaven",
        "n8n Beratung Bremerhaven",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-bremerhaven",
      preHeadline: "Automation Bremerhaven",
      headline: "Automation & Prozessoptimierung in Bremerhaven",
      metaTitle: "Automation Bremerhaven - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Bremerhaven. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Bremerhaven",
        "Prozessautomatisierung Bremerhaven",
        "Workflow Automation Bremerhaven",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-bremerhaven",
      preHeadline: "IT Dienstleister Bremerhaven",
      headline: "IT Dienstleister in Bremerhaven - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Bremerhaven - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Bremerhaven. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Bremerhaven.",
      keywords: [
        "IT Dienstleister Bremerhaven",
        "IT Service Bremerhaven",
        "Digitalisierung Bremerhaven",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-bremerhaven",
      preHeadline: "KI Beratung Bremerhaven",
      headline: "KI Beratung in Bremerhaven - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Bremerhaven - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Bremerhaven. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Bremerhaven",
        "KI Lösungen Bremerhaven",
        "Künstliche Intelligenz Bremerhaven",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Bremerhaven",
  slug: "bremerhaven",
  bundesland: "Bremen",
  publish: false,
  nearbySmall: [
    "Cuxhaven",
    "Nordenham",
  ],
  crossReference: [
    { name: "Bremen", slug: "bremen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/bremerhaven",
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
