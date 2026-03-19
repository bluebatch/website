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
      source: "/ai-workflows-mannheim",
      preHeadline: "AI Workflows Mannheim",
      headline: "AI Workflows & Automatisierung in Mannheim",
      metaTitle: "AI Workflows Mannheim – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Mannheim. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Mannheim",
        "KI Automatisierung Mannheim",
        "Workflow Automatisierung Mannheim",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-mannheim",
      preHeadline: "n8n Automation Mannheim",
      headline: "n8n Automation in Mannheim – Workflows automatisieren",
      metaTitle: "n8n Automation Mannheim | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Mannheim. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Mannheim",
        "n8n Mannheim",
        "Workflow Automation Mannheim",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-mannheim",
      preHeadline: "n8n Mannheim",
      headline: "n8n Agentur in Mannheim",
      metaTitle: "n8n Mannheim – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Mannheim. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Mannheim und Umgebung.",
      keywords: [
        "n8n Mannheim",
        "n8n Agentur Mannheim",
        "n8n Beratung Mannheim",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-mannheim",
      preHeadline: "Automation Mannheim",
      headline: "Automation & Prozessoptimierung in Mannheim",
      metaTitle: "Automation Mannheim – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Mannheim. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Mannheim",
        "Prozessautomatisierung Mannheim",
        "Workflow Automation Mannheim",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-mannheim",
      preHeadline: "IT Dienstleister Mannheim",
      headline: "IT Dienstleister in Mannheim – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Mannheim – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Mannheim. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Mannheim.",
      keywords: [
        "IT Dienstleister Mannheim",
        "IT Service Mannheim",
        "Digitalisierung Mannheim",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-mannheim",
      preHeadline: "KI Beratung Mannheim",
      headline: "KI Beratung in Mannheim – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Mannheim – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Mannheim. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Mannheim",
        "KI Lösungen Mannheim",
        "Künstliche Intelligenz Mannheim",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Mannheim",
  slug: "mannheim",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Weinheim",
    "Viernheim",
    "Schwetzingen",
    "Frankenthal",
    "Speyer",
    "Worms",
    "Hockenheim",
    "Lampertheim",
    "Bensheim",
    "Sinsheim",
    "Leimen",
    "Wiesloch",
  ],
  crossReference: [
    { name: "Heidelberg", slug: "heidelberg" },
    { name: "Ludwigshafen am Rhein", slug: "ludwigshafen-am-rhein" },
    { name: "Darmstadt", slug: "darmstadt" },
    { name: "Frankfurt am Main", slug: "frankfurt-am-main" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/mannheim",
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
