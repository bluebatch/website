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
      source: "/ai-workflows-wuerzburg",
      preHeadline: "AI Workflows Würzburg",
      headline: "AI Workflows & Automatisierung in Würzburg",
      metaTitle: "AI Workflows Würzburg – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Würzburg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Würzburg",
        "KI Automatisierung Würzburg",
        "Workflow Automatisierung Würzburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-wuerzburg",
      preHeadline: "n8n Automation Würzburg",
      headline: "n8n Automation in Würzburg – Workflows automatisieren",
      metaTitle: "n8n Automation Würzburg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Würzburg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Würzburg",
        "n8n Würzburg",
        "Workflow Automation Würzburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-wuerzburg",
      preHeadline: "n8n Würzburg",
      headline: "n8n Agentur in Würzburg",
      metaTitle: "n8n Würzburg – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Würzburg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Würzburg und Umgebung.",
      keywords: [
        "n8n Würzburg",
        "n8n Agentur Würzburg",
        "n8n Beratung Würzburg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-wuerzburg",
      preHeadline: "Automation Würzburg",
      headline: "Automation & Prozessoptimierung in Würzburg",
      metaTitle: "Automation Würzburg – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Würzburg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Würzburg",
        "Prozessautomatisierung Würzburg",
        "Workflow Automation Würzburg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-wuerzburg",
      preHeadline: "IT Dienstleister Würzburg",
      headline: "IT Dienstleister in Würzburg – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Würzburg – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Würzburg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Würzburg.",
      keywords: [
        "IT Dienstleister Würzburg",
        "IT Service Würzburg",
        "Digitalisierung Würzburg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-wuerzburg",
      preHeadline: "KI Beratung Würzburg",
      headline: "KI Beratung in Würzburg – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Würzburg – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Würzburg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Würzburg",
        "KI Lösungen Würzburg",
        "Künstliche Intelligenz Würzburg",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Würzburg",
  slug: "wuerzburg",
  bundesland: "Bayern",
  publish: false,
  nearbySmall: [
    "Schweinfurt",
    "Kitzingen",
    "Ochsenfurt",
    "Karlstadt",
  ],
  crossReference: [
    { name: "Nürnberg", slug: "nuernberg" },
    { name: "Frankfurt am Main", slug: "frankfurt-am-main" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/wuerzburg",
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
