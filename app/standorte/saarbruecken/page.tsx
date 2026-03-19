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
      source: "/ai-workflows-saarbruecken",
      preHeadline: "AI Workflows Saarbrücken",
      headline: "AI Workflows & Automatisierung in Saarbrücken",
      metaTitle: "AI Workflows Saarbrücken – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Saarbrücken. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Saarbrücken",
        "KI Automatisierung Saarbrücken",
        "Workflow Automatisierung Saarbrücken",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-saarbruecken",
      preHeadline: "n8n Automation Saarbrücken",
      headline: "n8n Automation in Saarbrücken – Workflows automatisieren",
      metaTitle: "n8n Automation Saarbrücken | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Saarbrücken. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Saarbrücken",
        "n8n Saarbrücken",
        "Workflow Automation Saarbrücken",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-saarbruecken",
      preHeadline: "n8n Saarbrücken",
      headline: "n8n Agentur in Saarbrücken",
      metaTitle: "n8n Saarbrücken – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Saarbrücken. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Saarbrücken und Umgebung.",
      keywords: [
        "n8n Saarbrücken",
        "n8n Agentur Saarbrücken",
        "n8n Beratung Saarbrücken",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-saarbruecken",
      preHeadline: "Automation Saarbrücken",
      headline: "Automation & Prozessoptimierung in Saarbrücken",
      metaTitle: "Automation Saarbrücken – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Saarbrücken. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Saarbrücken",
        "Prozessautomatisierung Saarbrücken",
        "Workflow Automation Saarbrücken",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-saarbruecken",
      preHeadline: "IT Dienstleister Saarbrücken",
      headline: "IT Dienstleister in Saarbrücken – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Saarbrücken – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Saarbrücken. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Saarbrücken.",
      keywords: [
        "IT Dienstleister Saarbrücken",
        "IT Service Saarbrücken",
        "Digitalisierung Saarbrücken",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-saarbruecken",
      preHeadline: "KI Beratung Saarbrücken",
      headline: "KI Beratung in Saarbrücken – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Saarbrücken – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Saarbrücken. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Saarbrücken",
        "KI Lösungen Saarbrücken",
        "Künstliche Intelligenz Saarbrücken",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Saarbrücken",
  slug: "saarbruecken",
  bundesland: "Saarland",
  publish: false,
  nearbySmall: [
    "Völklingen",
    "Saarlouis",
    "St. Ingbert",
    "Neunkirchen",
    "Homburg",
    "Dillingen",
    "Merzig",
  ],
  crossReference: [
    { name: "Trier", slug: "trier" },
    { name: "Kaiserslautern", slug: "kaiserslautern" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/saarbruecken",
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
