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
      source: "/ai-workflows-kiel",
      preHeadline: "AI Workflows Kiel",
      headline: "AI Workflows & Automatisierung in Kiel",
      metaTitle: "AI Workflows Kiel - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Kiel. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Kiel",
        "KI Automatisierung Kiel",
        "Workflow Automatisierung Kiel",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-kiel",
      preHeadline: "n8n Automation Kiel",
      headline: "n8n Automation in Kiel - Workflows automatisieren",
      metaTitle: "n8n Automation Kiel | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Kiel. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Kiel",
        "n8n Kiel",
        "Workflow Automation Kiel",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-kiel",
      preHeadline: "n8n Kiel",
      headline: "n8n Agentur in Kiel",
      metaTitle: "n8n Kiel - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Kiel. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Kiel und Umgebung.",
      keywords: [
        "n8n Kiel",
        "n8n Agentur Kiel",
        "n8n Beratung Kiel",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-kiel",
      preHeadline: "Automation Kiel",
      headline: "Automation & Prozessoptimierung in Kiel",
      metaTitle: "Automation Kiel - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Kiel. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Kiel",
        "Prozessautomatisierung Kiel",
        "Workflow Automation Kiel",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-kiel",
      preHeadline: "IT Dienstleister Kiel",
      headline: "IT Dienstleister in Kiel - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Kiel - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Kiel. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Kiel.",
      keywords: [
        "IT Dienstleister Kiel",
        "IT Service Kiel",
        "Digitalisierung Kiel",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-kiel",
      preHeadline: "KI Beratung Kiel",
      headline: "KI Beratung in Kiel - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Kiel - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Kiel. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Kiel",
        "KI Lösungen Kiel",
        "Künstliche Intelligenz Kiel",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Kiel",
  slug: "kiel",
  bundesland: "Schleswig-Holstein",
  publish: false,
  nearbySmall: [
    "Neumünster",
    "Rendsburg",
    "Eckernförde",
    "Preetz",
    "Plön",
  ],
  crossReference: [
    { name: "Hamburg", slug: "hamburg" },
    { name: "Lübeck", slug: "luebeck" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/kiel",
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
