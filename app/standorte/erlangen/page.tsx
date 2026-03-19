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
      source: "/ai-workflows-erlangen",
      preHeadline: "AI Workflows Erlangen",
      headline: "AI Workflows & Automatisierung in Erlangen",
      metaTitle: "AI Workflows Erlangen – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Erlangen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Erlangen",
        "KI Automatisierung Erlangen",
        "Workflow Automatisierung Erlangen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-erlangen",
      preHeadline: "n8n Automation Erlangen",
      headline: "n8n Automation in Erlangen – Workflows automatisieren",
      metaTitle: "n8n Automation Erlangen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Erlangen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Erlangen",
        "n8n Erlangen",
        "Workflow Automation Erlangen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-erlangen",
      preHeadline: "n8n Erlangen",
      headline: "n8n Agentur in Erlangen",
      metaTitle: "n8n Erlangen – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Erlangen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Erlangen und Umgebung.",
      keywords: [
        "n8n Erlangen",
        "n8n Agentur Erlangen",
        "n8n Beratung Erlangen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-erlangen",
      preHeadline: "Automation Erlangen",
      headline: "Automation & Prozessoptimierung in Erlangen",
      metaTitle: "Automation Erlangen – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Erlangen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Erlangen",
        "Prozessautomatisierung Erlangen",
        "Workflow Automation Erlangen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-erlangen",
      preHeadline: "IT Dienstleister Erlangen",
      headline: "IT Dienstleister in Erlangen – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Erlangen – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Erlangen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Erlangen.",
      keywords: [
        "IT Dienstleister Erlangen",
        "IT Service Erlangen",
        "Digitalisierung Erlangen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-erlangen",
      preHeadline: "KI Beratung Erlangen",
      headline: "KI Beratung in Erlangen – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Erlangen – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Erlangen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Erlangen",
        "KI Lösungen Erlangen",
        "Künstliche Intelligenz Erlangen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Erlangen",
  slug: "erlangen",
  bundesland: "Bayern",
  publish: false,
  nearbySmall: [
    "Herzogenaurach",
    "Forchheim",
    "Bamberg",
    "Höchstadt an der Aisch",
  ],
  crossReference: [
    { name: "Nürnberg", slug: "nuernberg" },
    { name: "Fürth", slug: "fuerth" },
    { name: "Bamberg", slug: "bamberg" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/erlangen",
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
