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
      source: "/ai-workflows-neuss",
      preHeadline: "AI Workflows Neuss",
      headline: "AI Workflows & Automatisierung in Neuss",
      metaTitle: "AI Workflows Neuss – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Neuss. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Neuss",
        "KI Automatisierung Neuss",
        "Workflow Automatisierung Neuss",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-neuss",
      preHeadline: "n8n Automation Neuss",
      headline: "n8n Automation in Neuss – Workflows automatisieren",
      metaTitle: "n8n Automation Neuss | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Neuss. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Neuss",
        "n8n Neuss",
        "Workflow Automation Neuss",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-neuss",
      preHeadline: "n8n Neuss",
      headline: "n8n Agentur in Neuss",
      metaTitle: "n8n Neuss – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Neuss. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Neuss und Umgebung.",
      keywords: [
        "n8n Neuss",
        "n8n Agentur Neuss",
        "n8n Beratung Neuss",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-neuss",
      preHeadline: "Automation Neuss",
      headline: "Automation & Prozessoptimierung in Neuss",
      metaTitle: "Automation Neuss – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Neuss. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Neuss",
        "Prozessautomatisierung Neuss",
        "Workflow Automation Neuss",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-neuss",
      preHeadline: "IT Dienstleister Neuss",
      headline: "IT Dienstleister in Neuss – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Neuss – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Neuss. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Neuss.",
      keywords: [
        "IT Dienstleister Neuss",
        "IT Service Neuss",
        "Digitalisierung Neuss",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-neuss",
      preHeadline: "KI Beratung Neuss",
      headline: "KI Beratung in Neuss – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Neuss – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Neuss. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Neuss",
        "KI Lösungen Neuss",
        "Künstliche Intelligenz Neuss",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Neuss",
  slug: "neuss",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Dormagen",
    "Grevenbroich",
    "Kaarst",
    "Meerbusch",
    "Korschenbroich",
    "Jüchen",
  ],
  crossReference: [
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Köln", slug: "koeln" },
    { name: "Krefeld", slug: "krefeld" },
    { name: "Mönchengladbach", slug: "moenchengladbach" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/neuss",
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
