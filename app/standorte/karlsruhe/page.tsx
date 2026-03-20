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
      source: "/ai-workflows-karlsruhe",
      preHeadline: "AI Workflows Karlsruhe",
      headline: "AI Workflows & Automatisierung in Karlsruhe",
      metaTitle: "AI Workflows Karlsruhe - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Karlsruhe. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Karlsruhe",
        "KI Automatisierung Karlsruhe",
        "Workflow Automatisierung Karlsruhe",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-karlsruhe",
      preHeadline: "n8n Automation Karlsruhe",
      headline: "n8n Automation in Karlsruhe - Workflows automatisieren",
      metaTitle: "n8n Automation Karlsruhe | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Karlsruhe. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Karlsruhe",
        "n8n Karlsruhe",
        "Workflow Automation Karlsruhe",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-karlsruhe",
      preHeadline: "n8n Karlsruhe",
      headline: "n8n Agentur in Karlsruhe",
      metaTitle: "n8n Karlsruhe - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Karlsruhe. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Karlsruhe und Umgebung.",
      keywords: [
        "n8n Karlsruhe",
        "n8n Agentur Karlsruhe",
        "n8n Beratung Karlsruhe",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-karlsruhe",
      preHeadline: "Automation Karlsruhe",
      headline: "Automation & Prozessoptimierung in Karlsruhe",
      metaTitle: "Automation Karlsruhe - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Karlsruhe. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Karlsruhe",
        "Prozessautomatisierung Karlsruhe",
        "Workflow Automation Karlsruhe",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-karlsruhe",
      preHeadline: "IT Dienstleister Karlsruhe",
      headline: "IT Dienstleister in Karlsruhe - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Karlsruhe - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Karlsruhe. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Karlsruhe.",
      keywords: [
        "IT Dienstleister Karlsruhe",
        "IT Service Karlsruhe",
        "Digitalisierung Karlsruhe",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-karlsruhe",
      preHeadline: "KI Beratung Karlsruhe",
      headline: "KI Beratung in Karlsruhe - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Karlsruhe - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Karlsruhe. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Karlsruhe",
        "KI Lösungen Karlsruhe",
        "Künstliche Intelligenz Karlsruhe",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Karlsruhe",
  slug: "karlsruhe",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Ettlingen",
    "Bruchsal",
    "Rastatt",
    "Baden-Baden",
    "Rheinstetten",
    "Stutensee",
    "Gaggenau",
  ],
  crossReference: [
    { name: "Stuttgart", slug: "stuttgart" },
    { name: "Pforzheim", slug: "pforzheim" },
    { name: "Heidelberg", slug: "heidelberg" },
    { name: "Mannheim", slug: "mannheim" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/karlsruhe",
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
