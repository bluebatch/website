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
      source: "/ai-workflows-duesseldorf",
      preHeadline: "AI Workflows Düsseldorf",
      headline: "AI Workflows & Automatisierung in Düsseldorf",
      metaTitle: "AI Workflows Düsseldorf - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Düsseldorf. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Düsseldorf",
        "KI Automatisierung Düsseldorf",
        "Workflow Automatisierung Düsseldorf",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-duesseldorf",
      preHeadline: "n8n Automation Düsseldorf",
      headline: "n8n Automation in Düsseldorf - Workflows automatisieren",
      metaTitle: "n8n Automation Düsseldorf | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Düsseldorf. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Düsseldorf",
        "n8n Düsseldorf",
        "Workflow Automation Düsseldorf",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-duesseldorf",
      preHeadline: "n8n Düsseldorf",
      headline: "n8n Agentur in Düsseldorf",
      metaTitle: "n8n Düsseldorf - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Düsseldorf. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Düsseldorf und Umgebung.",
      keywords: [
        "n8n Düsseldorf",
        "n8n Agentur Düsseldorf",
        "n8n Beratung Düsseldorf",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-duesseldorf",
      preHeadline: "Automation Düsseldorf",
      headline: "Automation & Prozessoptimierung in Düsseldorf",
      metaTitle: "Automation Düsseldorf - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Düsseldorf. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Düsseldorf",
        "Prozessautomatisierung Düsseldorf",
        "Workflow Automation Düsseldorf",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-duesseldorf",
      preHeadline: "IT Dienstleister Düsseldorf",
      headline: "IT Dienstleister in Düsseldorf - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Düsseldorf - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Düsseldorf. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Düsseldorf.",
      keywords: [
        "IT Dienstleister Düsseldorf",
        "IT Service Düsseldorf",
        "Digitalisierung Düsseldorf",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-duesseldorf",
      preHeadline: "KI Beratung Düsseldorf",
      headline: "KI Beratung in Düsseldorf - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Düsseldorf - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Düsseldorf. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Düsseldorf",
        "KI Lösungen Düsseldorf",
        "Künstliche Intelligenz Düsseldorf",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Düsseldorf",
  slug: "duesseldorf",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Meerbusch",
    "Ratingen",
    "Hilden",
    "Langenfeld",
    "Erkrath",
    "Dormagen",
    "Grevenbroich",
    "Monheim am Rhein",
    "Mettmann",
    "Haan",
    "Velbert",
    "Kaarst",
  ],
  crossReference: [
    { name: "Köln", slug: "koeln" },
    { name: "Essen", slug: "essen" },
    { name: "Duisburg", slug: "duisburg" },
    { name: "Wuppertal", slug: "wuppertal" },
    { name: "Krefeld", slug: "krefeld" },
    { name: "Mönchengladbach", slug: "moenchengladbach" },
    { name: "Neuss", slug: "neuss" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/duesseldorf",
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
