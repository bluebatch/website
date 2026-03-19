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
      source: "/ai-workflows-essen",
      preHeadline: "AI Workflows Essen",
      headline: "AI Workflows & Automatisierung in Essen",
      metaTitle: "AI Workflows Essen – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Essen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Essen",
        "KI Automatisierung Essen",
        "Workflow Automatisierung Essen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-essen",
      preHeadline: "n8n Automation Essen",
      headline: "n8n Automation in Essen – Workflows automatisieren",
      metaTitle: "n8n Automation Essen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Essen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Essen",
        "n8n Essen",
        "Workflow Automation Essen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-essen",
      preHeadline: "n8n Essen",
      headline: "n8n Agentur in Essen",
      metaTitle: "n8n Essen – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Essen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Essen und Umgebung.",
      keywords: [
        "n8n Essen",
        "n8n Agentur Essen",
        "n8n Beratung Essen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-essen",
      preHeadline: "Automation Essen",
      headline: "Automation & Prozessoptimierung in Essen",
      metaTitle: "Automation Essen – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Essen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Essen",
        "Prozessautomatisierung Essen",
        "Workflow Automation Essen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-essen",
      preHeadline: "IT Dienstleister Essen",
      headline: "IT Dienstleister in Essen – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Essen – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Essen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Essen.",
      keywords: [
        "IT Dienstleister Essen",
        "IT Service Essen",
        "Digitalisierung Essen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-essen",
      preHeadline: "KI Beratung Essen",
      headline: "KI Beratung in Essen – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Essen – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Essen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Essen",
        "KI Lösungen Essen",
        "Künstliche Intelligenz Essen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Essen",
  slug: "essen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Hattingen",
    "Velbert",
    "Gladbeck",
    "Ratingen",
    "Heiligenhaus",
    "Witten",
    "Herten",
  ],
  crossReference: [
    { name: "Dortmund", slug: "dortmund" },
    { name: "Duisburg", slug: "duisburg" },
    { name: "Bochum", slug: "bochum" },
    { name: "Gelsenkirchen", slug: "gelsenkirchen" },
    { name: "Oberhausen", slug: "oberhausen" },
    { name: "Düsseldorf", slug: "duesseldorf" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/essen",
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
