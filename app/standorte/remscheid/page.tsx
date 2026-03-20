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
      source: "/ai-workflows-remscheid",
      preHeadline: "AI Workflows Remscheid",
      headline: "AI Workflows & Automatisierung in Remscheid",
      metaTitle: "AI Workflows Remscheid - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Remscheid. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Remscheid",
        "KI Automatisierung Remscheid",
        "Workflow Automatisierung Remscheid",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-remscheid",
      preHeadline: "n8n Automation Remscheid",
      headline: "n8n Automation in Remscheid - Workflows automatisieren",
      metaTitle: "n8n Automation Remscheid | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Remscheid. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Remscheid",
        "n8n Remscheid",
        "Workflow Automation Remscheid",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-remscheid",
      preHeadline: "n8n Remscheid",
      headline: "n8n Agentur in Remscheid",
      metaTitle: "n8n Remscheid - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Remscheid. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Remscheid und Umgebung.",
      keywords: [
        "n8n Remscheid",
        "n8n Agentur Remscheid",
        "n8n Beratung Remscheid",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-remscheid",
      preHeadline: "Automation Remscheid",
      headline: "Automation & Prozessoptimierung in Remscheid",
      metaTitle: "Automation Remscheid - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Remscheid. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Remscheid",
        "Prozessautomatisierung Remscheid",
        "Workflow Automation Remscheid",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-remscheid",
      preHeadline: "IT Dienstleister Remscheid",
      headline: "IT Dienstleister in Remscheid - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Remscheid - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Remscheid. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Remscheid.",
      keywords: [
        "IT Dienstleister Remscheid",
        "IT Service Remscheid",
        "Digitalisierung Remscheid",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-remscheid",
      preHeadline: "KI Beratung Remscheid",
      headline: "KI Beratung in Remscheid - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Remscheid - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Remscheid. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Remscheid",
        "KI Lösungen Remscheid",
        "Künstliche Intelligenz Remscheid",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Remscheid",
  slug: "remscheid",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Hückeswagen",
    "Radevormwald",
    "Wermelskirchen",
  ],
  crossReference: [
    { name: "Wuppertal", slug: "wuppertal" },
    { name: "Solingen", slug: "solingen" },
    { name: "Leverkusen", slug: "leverkusen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/remscheid",
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
