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
      source: "/ai-workflows-krefeld",
      preHeadline: "AI Workflows Krefeld",
      headline: "AI Workflows & Automatisierung in Krefeld",
      metaTitle: "AI Workflows Krefeld - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Krefeld. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Krefeld",
        "KI Automatisierung Krefeld",
        "Workflow Automatisierung Krefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-krefeld",
      preHeadline: "n8n Automation Krefeld",
      headline: "n8n Automation in Krefeld - Workflows automatisieren",
      metaTitle: "n8n Automation Krefeld | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Krefeld. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Krefeld",
        "n8n Krefeld",
        "Workflow Automation Krefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-krefeld",
      preHeadline: "n8n Krefeld",
      headline: "n8n Agentur in Krefeld",
      metaTitle: "n8n Krefeld - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Krefeld. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Krefeld und Umgebung.",
      keywords: [
        "n8n Krefeld",
        "n8n Agentur Krefeld",
        "n8n Beratung Krefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-krefeld",
      preHeadline: "Automation Krefeld",
      headline: "Automation & Prozessoptimierung in Krefeld",
      metaTitle: "Automation Krefeld - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Krefeld. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Krefeld",
        "Prozessautomatisierung Krefeld",
        "Workflow Automation Krefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-krefeld",
      preHeadline: "IT Dienstleister Krefeld",
      headline: "IT Dienstleister in Krefeld - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Krefeld - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Krefeld. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Krefeld.",
      keywords: [
        "IT Dienstleister Krefeld",
        "IT Service Krefeld",
        "Digitalisierung Krefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-krefeld",
      preHeadline: "KI Beratung Krefeld",
      headline: "KI Beratung in Krefeld - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Krefeld - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Krefeld. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Krefeld",
        "KI Lösungen Krefeld",
        "Künstliche Intelligenz Krefeld",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Krefeld",
  slug: "krefeld",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Viersen",
    "Meerbusch",
    "Willich",
    "Kempen",
    "Kamp-Lintfort",
    "Tönisvorst",
  ],
  crossReference: [
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Duisburg", slug: "duisburg" },
    { name: "Mönchengladbach", slug: "moenchengladbach" },
    { name: "Neuss", slug: "neuss" },
    { name: "Moers", slug: "moers" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/krefeld",
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
