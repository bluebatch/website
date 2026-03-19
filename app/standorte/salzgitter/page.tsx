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
      source: "/ai-workflows-salzgitter",
      preHeadline: "AI Workflows Salzgitter",
      headline: "AI Workflows & Automatisierung in Salzgitter",
      metaTitle: "AI Workflows Salzgitter – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Salzgitter. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Salzgitter",
        "KI Automatisierung Salzgitter",
        "Workflow Automatisierung Salzgitter",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-salzgitter",
      preHeadline: "n8n Automation Salzgitter",
      headline: "n8n Automation in Salzgitter – Workflows automatisieren",
      metaTitle: "n8n Automation Salzgitter | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Salzgitter. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Salzgitter",
        "n8n Salzgitter",
        "Workflow Automation Salzgitter",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-salzgitter",
      preHeadline: "n8n Salzgitter",
      headline: "n8n Agentur in Salzgitter",
      metaTitle: "n8n Salzgitter – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Salzgitter. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Salzgitter und Umgebung.",
      keywords: [
        "n8n Salzgitter",
        "n8n Agentur Salzgitter",
        "n8n Beratung Salzgitter",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-salzgitter",
      preHeadline: "Automation Salzgitter",
      headline: "Automation & Prozessoptimierung in Salzgitter",
      metaTitle: "Automation Salzgitter – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Salzgitter. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Salzgitter",
        "Prozessautomatisierung Salzgitter",
        "Workflow Automation Salzgitter",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-salzgitter",
      preHeadline: "IT Dienstleister Salzgitter",
      headline: "IT Dienstleister in Salzgitter – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Salzgitter – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Salzgitter. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Salzgitter.",
      keywords: [
        "IT Dienstleister Salzgitter",
        "IT Service Salzgitter",
        "Digitalisierung Salzgitter",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-salzgitter",
      preHeadline: "KI Beratung Salzgitter",
      headline: "KI Beratung in Salzgitter – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Salzgitter – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Salzgitter. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Salzgitter",
        "KI Lösungen Salzgitter",
        "Künstliche Intelligenz Salzgitter",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Salzgitter",
  slug: "salzgitter",
  bundesland: "Niedersachsen",
  publish: false,
  nearbySmall: [
    "Wolfenbüttel",
    "Goslar",
    "Peine",
  ],
  crossReference: [
    { name: "Braunschweig", slug: "braunschweig" },
    { name: "Hildesheim", slug: "hildesheim" },
    { name: "Wolfsburg", slug: "wolfsburg" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/salzgitter",
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
