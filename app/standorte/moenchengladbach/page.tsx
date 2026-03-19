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
      source: "/ai-workflows-moenchengladbach",
      preHeadline: "AI Workflows Mönchengladbach",
      headline: "AI Workflows & Automatisierung in Mönchengladbach",
      metaTitle: "AI Workflows Mönchengladbach – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Mönchengladbach. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Mönchengladbach",
        "KI Automatisierung Mönchengladbach",
        "Workflow Automatisierung Mönchengladbach",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-moenchengladbach",
      preHeadline: "n8n Automation Mönchengladbach",
      headline: "n8n Automation in Mönchengladbach – Workflows automatisieren",
      metaTitle: "n8n Automation Mönchengladbach | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Mönchengladbach. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Mönchengladbach",
        "n8n Mönchengladbach",
        "Workflow Automation Mönchengladbach",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-moenchengladbach",
      preHeadline: "n8n Mönchengladbach",
      headline: "n8n Agentur in Mönchengladbach",
      metaTitle: "n8n Mönchengladbach – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Mönchengladbach. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Mönchengladbach und Umgebung.",
      keywords: [
        "n8n Mönchengladbach",
        "n8n Agentur Mönchengladbach",
        "n8n Beratung Mönchengladbach",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-moenchengladbach",
      preHeadline: "Automation Mönchengladbach",
      headline: "Automation & Prozessoptimierung in Mönchengladbach",
      metaTitle: "Automation Mönchengladbach – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Mönchengladbach. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Mönchengladbach",
        "Prozessautomatisierung Mönchengladbach",
        "Workflow Automation Mönchengladbach",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-moenchengladbach",
      preHeadline: "IT Dienstleister Mönchengladbach",
      headline: "IT Dienstleister in Mönchengladbach – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Mönchengladbach – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Mönchengladbach. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Mönchengladbach.",
      keywords: [
        "IT Dienstleister Mönchengladbach",
        "IT Service Mönchengladbach",
        "Digitalisierung Mönchengladbach",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-moenchengladbach",
      preHeadline: "KI Beratung Mönchengladbach",
      headline: "KI Beratung in Mönchengladbach – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Mönchengladbach – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Mönchengladbach. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Mönchengladbach",
        "KI Lösungen Mönchengladbach",
        "Künstliche Intelligenz Mönchengladbach",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Mönchengladbach",
  slug: "moenchengladbach",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Viersen",
    "Korschenbroich",
    "Jüchen",
    "Grevenbroich",
    "Erkelenz",
    "Kaarst",
    "Willich",
  ],
  crossReference: [
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Krefeld", slug: "krefeld" },
    { name: "Aachen", slug: "aachen" },
    { name: "Neuss", slug: "neuss" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/moenchengladbach",
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
