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
      source: "/ai-workflows-halle-saale",
      preHeadline: "AI Workflows Halle (Saale)",
      headline: "AI Workflows & Automatisierung in Halle (Saale)",
      metaTitle: "AI Workflows Halle (Saale) - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Halle (Saale). KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Halle (Saale)",
        "KI Automatisierung Halle (Saale)",
        "Workflow Automatisierung Halle (Saale)",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-halle-saale",
      preHeadline: "n8n Automation Halle (Saale)",
      headline: "n8n Automation in Halle (Saale) - Workflows automatisieren",
      metaTitle: "n8n Automation Halle (Saale) | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Halle (Saale). Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Halle (Saale)",
        "n8n Halle (Saale)",
        "Workflow Automation Halle (Saale)",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-halle-saale",
      preHeadline: "n8n Halle (Saale)",
      headline: "n8n Agentur in Halle (Saale)",
      metaTitle: "n8n Halle (Saale) - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Halle (Saale). Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Halle (Saale) und Umgebung.",
      keywords: [
        "n8n Halle (Saale)",
        "n8n Agentur Halle (Saale)",
        "n8n Beratung Halle (Saale)",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-halle-saale",
      preHeadline: "Automation Halle (Saale)",
      headline: "Automation & Prozessoptimierung in Halle (Saale)",
      metaTitle: "Automation Halle (Saale) - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Halle (Saale). Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Halle (Saale)",
        "Prozessautomatisierung Halle (Saale)",
        "Workflow Automation Halle (Saale)",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-halle-saale",
      preHeadline: "IT Dienstleister Halle (Saale)",
      headline: "IT Dienstleister in Halle (Saale) - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Halle (Saale) - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Halle (Saale). Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Halle (Saale).",
      keywords: [
        "IT Dienstleister Halle (Saale)",
        "IT Service Halle (Saale)",
        "Digitalisierung Halle (Saale)",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-halle-saale",
      preHeadline: "KI Beratung Halle (Saale)",
      headline: "KI Beratung in Halle (Saale) - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Halle (Saale) - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Halle (Saale). Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Halle (Saale)",
        "KI Lösungen Halle (Saale)",
        "Künstliche Intelligenz Halle (Saale)",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Halle (Saale)",
  slug: "halle-saale",
  bundesland: "Sachsen-Anhalt",
  publish: false,
  nearbySmall: [
    "Merseburg",
    "Weißenfels",
    "Bernburg (Saale)",
    "Naumburg (Saale)",
    "Bitterfeld-Wolfen",
    "Schkopau",
    "Dessau-Roßlau",
    "Delitzsch",
  ],
  crossReference: [
    { name: "Leipzig", slug: "leipzig" },
    { name: "Magdeburg", slug: "magdeburg" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/halle-saale",
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
