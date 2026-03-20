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
      source: "/ai-workflows-nuernberg",
      preHeadline: "AI Workflows Nürnberg",
      headline: "AI Workflows & Automatisierung in Nürnberg",
      metaTitle: "AI Workflows Nürnberg - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Nürnberg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Nürnberg",
        "KI Automatisierung Nürnberg",
        "Workflow Automatisierung Nürnberg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-nuernberg",
      preHeadline: "n8n Automation Nürnberg",
      headline: "n8n Automation in Nürnberg - Workflows automatisieren",
      metaTitle: "n8n Automation Nürnberg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Nürnberg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Nürnberg",
        "n8n Nürnberg",
        "Workflow Automation Nürnberg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-nuernberg",
      preHeadline: "n8n Nürnberg",
      headline: "n8n Agentur in Nürnberg",
      metaTitle: "n8n Nürnberg - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Nürnberg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Nürnberg und Umgebung.",
      keywords: [
        "n8n Nürnberg",
        "n8n Agentur Nürnberg",
        "n8n Beratung Nürnberg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-nuernberg",
      preHeadline: "Automation Nürnberg",
      headline: "Automation & Prozessoptimierung in Nürnberg",
      metaTitle: "Automation Nürnberg - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Nürnberg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Nürnberg",
        "Prozessautomatisierung Nürnberg",
        "Workflow Automation Nürnberg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-nuernberg",
      preHeadline: "IT Dienstleister Nürnberg",
      headline: "IT Dienstleister in Nürnberg - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Nürnberg - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Nürnberg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Nürnberg.",
      keywords: [
        "IT Dienstleister Nürnberg",
        "IT Service Nürnberg",
        "Digitalisierung Nürnberg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-nuernberg",
      preHeadline: "KI Beratung Nürnberg",
      headline: "KI Beratung in Nürnberg - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Nürnberg - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Nürnberg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Nürnberg",
        "KI Lösungen Nürnberg",
        "Künstliche Intelligenz Nürnberg",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Nürnberg",
  slug: "nuernberg",
  bundesland: "Bayern",
  publish: false,
  nearbySmall: [
    "Schwabach",
    "Zirndorf",
    "Lauf an der Pegnitz",
    "Herzogenaurach",
    "Roth",
    "Forchheim",
    "Neumarkt in der Oberpfalz",
    "Ansbach",
  ],
  crossReference: [
    { name: "Fürth", slug: "fuerth" },
    { name: "Erlangen", slug: "erlangen" },
    { name: "Regensburg", slug: "regensburg" },
    { name: "München", slug: "muenchen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/nuernberg",
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
