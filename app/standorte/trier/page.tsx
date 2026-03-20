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
      source: "/ai-workflows-trier",
      preHeadline: "AI Workflows Trier",
      headline: "AI Workflows & Automatisierung in Trier",
      metaTitle: "AI Workflows Trier - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Trier. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Trier",
        "KI Automatisierung Trier",
        "Workflow Automatisierung Trier",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-trier",
      preHeadline: "n8n Automation Trier",
      headline: "n8n Automation in Trier - Workflows automatisieren",
      metaTitle: "n8n Automation Trier | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Trier. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Trier",
        "n8n Trier",
        "Workflow Automation Trier",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-trier",
      preHeadline: "n8n Trier",
      headline: "n8n Agentur in Trier",
      metaTitle: "n8n Trier - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Trier. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Trier und Umgebung.",
      keywords: [
        "n8n Trier",
        "n8n Agentur Trier",
        "n8n Beratung Trier",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-trier",
      preHeadline: "Automation Trier",
      headline: "Automation & Prozessoptimierung in Trier",
      metaTitle: "Automation Trier - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Trier. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Trier",
        "Prozessautomatisierung Trier",
        "Workflow Automation Trier",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-trier",
      preHeadline: "IT Dienstleister Trier",
      headline: "IT Dienstleister in Trier - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Trier - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Trier. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Trier.",
      keywords: [
        "IT Dienstleister Trier",
        "IT Service Trier",
        "Digitalisierung Trier",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-trier",
      preHeadline: "KI Beratung Trier",
      headline: "KI Beratung in Trier - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Trier - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Trier. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Trier",
        "KI Lösungen Trier",
        "Künstliche Intelligenz Trier",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Trier",
  slug: "trier",
  bundesland: "Rheinland-Pfalz",
  publish: false,
  nearbySmall: [
    "Konz",
    "Schweich",
    "Merzig",
    "Wittlich",
    "Saarburg",
  ],
  crossReference: [
    { name: "Saarbrücken", slug: "saarbruecken" },
    { name: "Koblenz", slug: "koblenz" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/trier",
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
