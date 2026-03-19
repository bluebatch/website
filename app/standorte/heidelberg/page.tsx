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
      source: "/ai-workflows-heidelberg",
      preHeadline: "AI Workflows Heidelberg",
      headline: "AI Workflows & Automatisierung in Heidelberg",
      metaTitle: "AI Workflows Heidelberg – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Heidelberg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Heidelberg",
        "KI Automatisierung Heidelberg",
        "Workflow Automatisierung Heidelberg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-heidelberg",
      preHeadline: "n8n Automation Heidelberg",
      headline: "n8n Automation in Heidelberg – Workflows automatisieren",
      metaTitle: "n8n Automation Heidelberg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Heidelberg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Heidelberg",
        "n8n Heidelberg",
        "Workflow Automation Heidelberg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-heidelberg",
      preHeadline: "n8n Heidelberg",
      headline: "n8n Agentur in Heidelberg",
      metaTitle: "n8n Heidelberg – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Heidelberg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Heidelberg und Umgebung.",
      keywords: [
        "n8n Heidelberg",
        "n8n Agentur Heidelberg",
        "n8n Beratung Heidelberg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-heidelberg",
      preHeadline: "Automation Heidelberg",
      headline: "Automation & Prozessoptimierung in Heidelberg",
      metaTitle: "Automation Heidelberg – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Heidelberg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Heidelberg",
        "Prozessautomatisierung Heidelberg",
        "Workflow Automation Heidelberg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-heidelberg",
      preHeadline: "IT Dienstleister Heidelberg",
      headline: "IT Dienstleister in Heidelberg – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Heidelberg – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Heidelberg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Heidelberg.",
      keywords: [
        "IT Dienstleister Heidelberg",
        "IT Service Heidelberg",
        "Digitalisierung Heidelberg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-heidelberg",
      preHeadline: "KI Beratung Heidelberg",
      headline: "KI Beratung in Heidelberg – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Heidelberg – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Heidelberg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Heidelberg",
        "KI Lösungen Heidelberg",
        "Künstliche Intelligenz Heidelberg",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Heidelberg",
  slug: "heidelberg",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Weinheim",
    "Schwetzingen",
    "Leimen",
    "Wiesloch",
    "Sinsheim",
    "Neckargemünd",
    "Walldorf",
    "Eppelheim",
    "Sandhausen",
    "Dossenheim",
  ],
  crossReference: [
    { name: "Mannheim", slug: "mannheim" },
    { name: "Ludwigshafen am Rhein", slug: "ludwigshafen-am-rhein" },
    { name: "Darmstadt", slug: "darmstadt" },
    { name: "Karlsruhe", slug: "karlsruhe" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/heidelberg",
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
