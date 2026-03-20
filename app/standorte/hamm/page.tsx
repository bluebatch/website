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
      source: "/ai-workflows-hamm",
      preHeadline: "AI Workflows Hamm",
      headline: "AI Workflows & Automatisierung in Hamm",
      metaTitle: "AI Workflows Hamm - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Hamm. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Hamm",
        "KI Automatisierung Hamm",
        "Workflow Automatisierung Hamm",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-hamm",
      preHeadline: "n8n Automation Hamm",
      headline: "n8n Automation in Hamm - Workflows automatisieren",
      metaTitle: "n8n Automation Hamm | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Hamm. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Hamm",
        "n8n Hamm",
        "Workflow Automation Hamm",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-hamm",
      preHeadline: "n8n Hamm",
      headline: "n8n Agentur in Hamm",
      metaTitle: "n8n Hamm - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Hamm. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Hamm und Umgebung.",
      keywords: [
        "n8n Hamm",
        "n8n Agentur Hamm",
        "n8n Beratung Hamm",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-hamm",
      preHeadline: "Automation Hamm",
      headline: "Automation & Prozessoptimierung in Hamm",
      metaTitle: "Automation Hamm - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Hamm. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Hamm",
        "Prozessautomatisierung Hamm",
        "Workflow Automation Hamm",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-hamm",
      preHeadline: "IT Dienstleister Hamm",
      headline: "IT Dienstleister in Hamm - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Hamm - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Hamm. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Hamm.",
      keywords: [
        "IT Dienstleister Hamm",
        "IT Service Hamm",
        "Digitalisierung Hamm",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-hamm",
      preHeadline: "KI Beratung Hamm",
      headline: "KI Beratung in Hamm - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Hamm - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Hamm. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Hamm",
        "KI Lösungen Hamm",
        "Künstliche Intelligenz Hamm",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Hamm",
  slug: "hamm",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Unna",
    "Kamen",
    "Bergkamen",
    "Lünen",
    "Ahlen",
    "Beckum",
    "Soest",
    "Lippstadt",
    "Werne",
    "Selm",
  ],
  crossReference: [
    { name: "Dortmund", slug: "dortmund" },
    { name: "Münster", slug: "muenster" },
    { name: "Bielefeld", slug: "bielefeld" },
    { name: "Hagen", slug: "hagen" },
    { name: "Paderborn", slug: "paderborn" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/hamm",
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
