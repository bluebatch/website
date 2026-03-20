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
      source: "/ai-workflows-muelheim-an-der-ruhr",
      preHeadline: "AI Workflows Mülheim an der Ruhr",
      headline: "AI Workflows & Automatisierung in Mülheim an der Ruhr",
      metaTitle: "AI Workflows Mülheim an der Ruhr - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Mülheim an der Ruhr. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Mülheim an der Ruhr",
        "KI Automatisierung Mülheim an der Ruhr",
        "Workflow Automatisierung Mülheim an der Ruhr",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-muelheim-an-der-ruhr",
      preHeadline: "n8n Automation Mülheim an der Ruhr",
      headline: "n8n Automation in Mülheim an der Ruhr - Workflows automatisieren",
      metaTitle: "n8n Automation Mülheim an der Ruhr | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Mülheim an der Ruhr. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Mülheim an der Ruhr",
        "n8n Mülheim an der Ruhr",
        "Workflow Automation Mülheim an der Ruhr",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-muelheim-an-der-ruhr",
      preHeadline: "n8n Mülheim an der Ruhr",
      headline: "n8n Agentur in Mülheim an der Ruhr",
      metaTitle: "n8n Mülheim an der Ruhr - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Mülheim an der Ruhr. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Mülheim an der Ruhr und Umgebung.",
      keywords: [
        "n8n Mülheim an der Ruhr",
        "n8n Agentur Mülheim an der Ruhr",
        "n8n Beratung Mülheim an der Ruhr",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-muelheim-an-der-ruhr",
      preHeadline: "Automation Mülheim an der Ruhr",
      headline: "Automation & Prozessoptimierung in Mülheim an der Ruhr",
      metaTitle: "Automation Mülheim an der Ruhr - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Mülheim an der Ruhr. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Mülheim an der Ruhr",
        "Prozessautomatisierung Mülheim an der Ruhr",
        "Workflow Automation Mülheim an der Ruhr",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-muelheim-an-der-ruhr",
      preHeadline: "IT Dienstleister Mülheim an der Ruhr",
      headline: "IT Dienstleister in Mülheim an der Ruhr - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Mülheim an der Ruhr - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Mülheim an der Ruhr. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Mülheim an der Ruhr.",
      keywords: [
        "IT Dienstleister Mülheim an der Ruhr",
        "IT Service Mülheim an der Ruhr",
        "Digitalisierung Mülheim an der Ruhr",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-muelheim-an-der-ruhr",
      preHeadline: "KI Beratung Mülheim an der Ruhr",
      headline: "KI Beratung in Mülheim an der Ruhr - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Mülheim an der Ruhr - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Mülheim an der Ruhr. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Mülheim an der Ruhr",
        "KI Lösungen Mülheim an der Ruhr",
        "Künstliche Intelligenz Mülheim an der Ruhr",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Mülheim an der Ruhr",
  slug: "muelheim-an-der-ruhr",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Ratingen",
    "Dinslaken",
  ],
  crossReference: [
    { name: "Essen", slug: "essen" },
    { name: "Duisburg", slug: "duisburg" },
    { name: "Oberhausen", slug: "oberhausen" },
    { name: "Düsseldorf", slug: "duesseldorf" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/muelheim-an-der-ruhr",
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
