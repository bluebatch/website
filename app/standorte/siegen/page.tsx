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
      source: "/ai-workflows-siegen",
      preHeadline: "AI Workflows Siegen",
      headline: "AI Workflows & Automatisierung in Siegen",
      metaTitle: "AI Workflows Siegen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Siegen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Siegen",
        "KI Automatisierung Siegen",
        "Workflow Automatisierung Siegen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-siegen",
      preHeadline: "n8n Automation Siegen",
      headline: "n8n Automation in Siegen - Workflows automatisieren",
      metaTitle: "n8n Automation Siegen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Siegen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Siegen",
        "n8n Siegen",
        "Workflow Automation Siegen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-siegen",
      preHeadline: "n8n Siegen",
      headline: "n8n Agentur in Siegen",
      metaTitle: "n8n Siegen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Siegen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Siegen und Umgebung.",
      keywords: [
        "n8n Siegen",
        "n8n Agentur Siegen",
        "n8n Beratung Siegen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-siegen",
      preHeadline: "Automation Siegen",
      headline: "Automation & Prozessoptimierung in Siegen",
      metaTitle: "Automation Siegen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Siegen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Siegen",
        "Prozessautomatisierung Siegen",
        "Workflow Automation Siegen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-siegen",
      preHeadline: "IT Dienstleister Siegen",
      headline: "IT Dienstleister in Siegen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Siegen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Siegen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Siegen.",
      keywords: [
        "IT Dienstleister Siegen",
        "IT Service Siegen",
        "Digitalisierung Siegen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-siegen",
      preHeadline: "KI Beratung Siegen",
      headline: "KI Beratung in Siegen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Siegen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Siegen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Siegen",
        "KI Lösungen Siegen",
        "Künstliche Intelligenz Siegen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Siegen",
  slug: "siegen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Kreuztal",
    "Netphen",
    "Freudenberg",
    "Olpe",
    "Betzdorf",
    "Attendorn",
  ],
  crossReference: [
    { name: "Bonn", slug: "bonn" },
    { name: "Hagen", slug: "hagen" },
    { name: "Koblenz", slug: "koblenz" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/siegen",
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
