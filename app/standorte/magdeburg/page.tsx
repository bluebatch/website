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
      source: "/ai-workflows-magdeburg",
      preHeadline: "AI Workflows Magdeburg",
      headline: "AI Workflows & Automatisierung in Magdeburg",
      metaTitle: "AI Workflows Magdeburg – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Magdeburg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Magdeburg",
        "KI Automatisierung Magdeburg",
        "Workflow Automatisierung Magdeburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-magdeburg",
      preHeadline: "n8n Automation Magdeburg",
      headline: "n8n Automation in Magdeburg – Workflows automatisieren",
      metaTitle: "n8n Automation Magdeburg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Magdeburg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Magdeburg",
        "n8n Magdeburg",
        "Workflow Automation Magdeburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-magdeburg",
      preHeadline: "n8n Magdeburg",
      headline: "n8n Agentur in Magdeburg",
      metaTitle: "n8n Magdeburg – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Magdeburg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Magdeburg und Umgebung.",
      keywords: [
        "n8n Magdeburg",
        "n8n Agentur Magdeburg",
        "n8n Beratung Magdeburg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-magdeburg",
      preHeadline: "Automation Magdeburg",
      headline: "Automation & Prozessoptimierung in Magdeburg",
      metaTitle: "Automation Magdeburg – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Magdeburg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Magdeburg",
        "Prozessautomatisierung Magdeburg",
        "Workflow Automation Magdeburg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-magdeburg",
      preHeadline: "IT Dienstleister Magdeburg",
      headline: "IT Dienstleister in Magdeburg – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Magdeburg – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Magdeburg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Magdeburg.",
      keywords: [
        "IT Dienstleister Magdeburg",
        "IT Service Magdeburg",
        "Digitalisierung Magdeburg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-magdeburg",
      preHeadline: "KI Beratung Magdeburg",
      headline: "KI Beratung in Magdeburg – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Magdeburg – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Magdeburg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Magdeburg",
        "KI Lösungen Magdeburg",
        "Künstliche Intelligenz Magdeburg",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Magdeburg",
  slug: "magdeburg",
  bundesland: "Sachsen-Anhalt",
  publish: false,
  nearbySmall: [
    "Schönebeck (Elbe)",
    "Halberstadt",
    "Bernburg (Saale)",
    "Stendal",
    "Staßfurt",
    "Aschersleben",
    "Wernigerode",
  ],
  crossReference: [
    { name: "Halle (Saale)", slug: "halle-saale" },
    { name: "Braunschweig", slug: "braunschweig" },
    { name: "Wolfsburg", slug: "wolfsburg" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/magdeburg",
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
