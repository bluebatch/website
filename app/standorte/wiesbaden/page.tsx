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
      source: "/ai-workflows-wiesbaden",
      preHeadline: "AI Workflows Wiesbaden",
      headline: "AI Workflows & Automatisierung in Wiesbaden",
      metaTitle: "AI Workflows Wiesbaden - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Wiesbaden. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Wiesbaden",
        "KI Automatisierung Wiesbaden",
        "Workflow Automatisierung Wiesbaden",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-wiesbaden",
      preHeadline: "n8n Automation Wiesbaden",
      headline: "n8n Automation in Wiesbaden - Workflows automatisieren",
      metaTitle: "n8n Automation Wiesbaden | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Wiesbaden. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Wiesbaden",
        "n8n Wiesbaden",
        "Workflow Automation Wiesbaden",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-wiesbaden",
      preHeadline: "n8n Wiesbaden",
      headline: "n8n Agentur in Wiesbaden",
      metaTitle: "n8n Wiesbaden - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Wiesbaden. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Wiesbaden und Umgebung.",
      keywords: [
        "n8n Wiesbaden",
        "n8n Agentur Wiesbaden",
        "n8n Beratung Wiesbaden",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-wiesbaden",
      preHeadline: "Automation Wiesbaden",
      headline: "Automation & Prozessoptimierung in Wiesbaden",
      metaTitle: "Automation Wiesbaden - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Wiesbaden. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Wiesbaden",
        "Prozessautomatisierung Wiesbaden",
        "Workflow Automation Wiesbaden",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-wiesbaden",
      preHeadline: "IT Dienstleister Wiesbaden",
      headline: "IT Dienstleister in Wiesbaden - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Wiesbaden - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Wiesbaden. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Wiesbaden.",
      keywords: [
        "IT Dienstleister Wiesbaden",
        "IT Service Wiesbaden",
        "Digitalisierung Wiesbaden",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-wiesbaden",
      preHeadline: "KI Beratung Wiesbaden",
      headline: "KI Beratung in Wiesbaden - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Wiesbaden - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Wiesbaden. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Wiesbaden",
        "KI Lösungen Wiesbaden",
        "Künstliche Intelligenz Wiesbaden",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Wiesbaden",
  slug: "wiesbaden",
  bundesland: "Hessen",
  publish: false,
  nearbySmall: [
    "Hofheim am Taunus",
    "Rüsselsheim am Main",
    "Bad Homburg vor der Höhe",
    "Oberursel",
    "Taunusstein",
    "Eltville am Rhein",
    "Ingelheim am Rhein",
    "Bingen am Rhein",
  ],
  crossReference: [
    { name: "Frankfurt am Main", slug: "frankfurt-am-main" },
    { name: "Mainz", slug: "mainz" },
    { name: "Darmstadt", slug: "darmstadt" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/wiesbaden",
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
