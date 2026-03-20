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
      source: "/ai-workflows-erfurt",
      preHeadline: "AI Workflows Erfurt",
      headline: "AI Workflows & Automatisierung in Erfurt",
      metaTitle: "AI Workflows Erfurt - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Erfurt. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Erfurt",
        "KI Automatisierung Erfurt",
        "Workflow Automatisierung Erfurt",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-erfurt",
      preHeadline: "n8n Automation Erfurt",
      headline: "n8n Automation in Erfurt - Workflows automatisieren",
      metaTitle: "n8n Automation Erfurt | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Erfurt. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Erfurt",
        "n8n Erfurt",
        "Workflow Automation Erfurt",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-erfurt",
      preHeadline: "n8n Erfurt",
      headline: "n8n Agentur in Erfurt",
      metaTitle: "n8n Erfurt - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Erfurt. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Erfurt und Umgebung.",
      keywords: [
        "n8n Erfurt",
        "n8n Agentur Erfurt",
        "n8n Beratung Erfurt",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-erfurt",
      preHeadline: "Automation Erfurt",
      headline: "Automation & Prozessoptimierung in Erfurt",
      metaTitle: "Automation Erfurt - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Erfurt. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Erfurt",
        "Prozessautomatisierung Erfurt",
        "Workflow Automation Erfurt",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-erfurt",
      preHeadline: "IT Dienstleister Erfurt",
      headline: "IT Dienstleister in Erfurt - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Erfurt - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Erfurt. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Erfurt.",
      keywords: [
        "IT Dienstleister Erfurt",
        "IT Service Erfurt",
        "Digitalisierung Erfurt",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-erfurt",
      preHeadline: "KI Beratung Erfurt",
      headline: "KI Beratung in Erfurt - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Erfurt - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Erfurt. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Erfurt",
        "KI Lösungen Erfurt",
        "Künstliche Intelligenz Erfurt",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Erfurt",
  slug: "erfurt",
  bundesland: "Thüringen",
  publish: false,
  nearbySmall: [
    "Weimar",
    "Gotha",
    "Arnstadt",
    "Sömmerda",
    "Ilmenau",
  ],
  crossReference: [
    { name: "Jena", slug: "jena" },
    { name: "Leipzig", slug: "leipzig" },
    { name: "Kassel", slug: "kassel" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/erfurt",
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
