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
      source: "/ai-workflows-braunschweig",
      preHeadline: "AI Workflows Braunschweig",
      headline: "AI Workflows & Automatisierung in Braunschweig",
      metaTitle: "AI Workflows Braunschweig - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Braunschweig. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Braunschweig",
        "KI Automatisierung Braunschweig",
        "Workflow Automatisierung Braunschweig",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-braunschweig",
      preHeadline: "n8n Automation Braunschweig",
      headline: "n8n Automation in Braunschweig - Workflows automatisieren",
      metaTitle: "n8n Automation Braunschweig | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Braunschweig. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Braunschweig",
        "n8n Braunschweig",
        "Workflow Automation Braunschweig",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-braunschweig",
      preHeadline: "n8n Braunschweig",
      headline: "n8n Agentur in Braunschweig",
      metaTitle: "n8n Braunschweig - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Braunschweig. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Braunschweig und Umgebung.",
      keywords: [
        "n8n Braunschweig",
        "n8n Agentur Braunschweig",
        "n8n Beratung Braunschweig",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-braunschweig",
      preHeadline: "Automation Braunschweig",
      headline: "Automation & Prozessoptimierung in Braunschweig",
      metaTitle: "Automation Braunschweig - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Braunschweig. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Braunschweig",
        "Prozessautomatisierung Braunschweig",
        "Workflow Automation Braunschweig",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-braunschweig",
      preHeadline: "IT Dienstleister Braunschweig",
      headline: "IT Dienstleister in Braunschweig - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Braunschweig - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Braunschweig. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Braunschweig.",
      keywords: [
        "IT Dienstleister Braunschweig",
        "IT Service Braunschweig",
        "Digitalisierung Braunschweig",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-braunschweig",
      preHeadline: "KI Beratung Braunschweig",
      headline: "KI Beratung in Braunschweig - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Braunschweig - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Braunschweig. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Braunschweig",
        "KI Lösungen Braunschweig",
        "Künstliche Intelligenz Braunschweig",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Braunschweig",
  slug: "braunschweig",
  bundesland: "Niedersachsen",
  publish: false,
  nearbySmall: [
    "Wolfenbüttel",
    "Peine",
    "Gifhorn",
    "Helmstedt",
    "Goslar",
  ],
  crossReference: [
    { name: "Wolfsburg", slug: "wolfsburg" },
    { name: "Salzgitter", slug: "salzgitter" },
    { name: "Hannover", slug: "hannover" },
    { name: "Hildesheim", slug: "hildesheim" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/braunschweig",
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
