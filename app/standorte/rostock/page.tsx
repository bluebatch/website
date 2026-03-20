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
      source: "/ai-workflows-rostock",
      preHeadline: "AI Workflows Rostock",
      headline: "AI Workflows & Automatisierung in Rostock",
      metaTitle: "AI Workflows Rostock - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Rostock. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Rostock",
        "KI Automatisierung Rostock",
        "Workflow Automatisierung Rostock",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-rostock",
      preHeadline: "n8n Automation Rostock",
      headline: "n8n Automation in Rostock - Workflows automatisieren",
      metaTitle: "n8n Automation Rostock | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Rostock. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Rostock",
        "n8n Rostock",
        "Workflow Automation Rostock",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-rostock",
      preHeadline: "n8n Rostock",
      headline: "n8n Agentur in Rostock",
      metaTitle: "n8n Rostock - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Rostock. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Rostock und Umgebung.",
      keywords: [
        "n8n Rostock",
        "n8n Agentur Rostock",
        "n8n Beratung Rostock",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-rostock",
      preHeadline: "Automation Rostock",
      headline: "Automation & Prozessoptimierung in Rostock",
      metaTitle: "Automation Rostock - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Rostock. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Rostock",
        "Prozessautomatisierung Rostock",
        "Workflow Automation Rostock",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-rostock",
      preHeadline: "IT Dienstleister Rostock",
      headline: "IT Dienstleister in Rostock - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Rostock - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Rostock. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Rostock.",
      keywords: [
        "IT Dienstleister Rostock",
        "IT Service Rostock",
        "Digitalisierung Rostock",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-rostock",
      preHeadline: "KI Beratung Rostock",
      headline: "KI Beratung in Rostock - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Rostock - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Rostock. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Rostock",
        "KI Lösungen Rostock",
        "Künstliche Intelligenz Rostock",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Rostock",
  slug: "rostock",
  bundesland: "Mecklenburg-Vorpommern",
  publish: false,
  nearbySmall: [
    "Wismar",
    "Güstrow",
    "Bad Doberan",
  ],
  crossReference: [
    { name: "Schwerin", slug: "schwerin" },
    { name: "Lübeck", slug: "luebeck" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/rostock",
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
