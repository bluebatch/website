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
      source: "/ai-workflows-reutlingen",
      preHeadline: "AI Workflows Reutlingen",
      headline: "AI Workflows & Automatisierung in Reutlingen",
      metaTitle: "AI Workflows Reutlingen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Reutlingen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Reutlingen",
        "KI Automatisierung Reutlingen",
        "Workflow Automatisierung Reutlingen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-reutlingen",
      preHeadline: "n8n Automation Reutlingen",
      headline: "n8n Automation in Reutlingen - Workflows automatisieren",
      metaTitle: "n8n Automation Reutlingen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Reutlingen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Reutlingen",
        "n8n Reutlingen",
        "Workflow Automation Reutlingen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-reutlingen",
      preHeadline: "n8n Reutlingen",
      headline: "n8n Agentur in Reutlingen",
      metaTitle: "n8n Reutlingen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Reutlingen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Reutlingen und Umgebung.",
      keywords: [
        "n8n Reutlingen",
        "n8n Agentur Reutlingen",
        "n8n Beratung Reutlingen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-reutlingen",
      preHeadline: "Automation Reutlingen",
      headline: "Automation & Prozessoptimierung in Reutlingen",
      metaTitle: "Automation Reutlingen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Reutlingen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Reutlingen",
        "Prozessautomatisierung Reutlingen",
        "Workflow Automation Reutlingen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-reutlingen",
      preHeadline: "IT Dienstleister Reutlingen",
      headline: "IT Dienstleister in Reutlingen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Reutlingen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Reutlingen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Reutlingen.",
      keywords: [
        "IT Dienstleister Reutlingen",
        "IT Service Reutlingen",
        "Digitalisierung Reutlingen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-reutlingen",
      preHeadline: "KI Beratung Reutlingen",
      headline: "KI Beratung in Reutlingen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Reutlingen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Reutlingen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Reutlingen",
        "KI Lösungen Reutlingen",
        "Künstliche Intelligenz Reutlingen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Reutlingen",
  slug: "reutlingen",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Tübingen",
    "Metzingen",
    "Bad Urach",
    "Rottenburg am Neckar",
    "Nürtingen",
    "Filderstadt",
  ],
  crossReference: [
    { name: "Stuttgart", slug: "stuttgart" },
    { name: "Tübingen", slug: "tuebingen" },
    { name: "Ulm", slug: "ulm" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/reutlingen",
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
