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
      source: "/ai-workflows-jena",
      preHeadline: "AI Workflows Jena",
      headline: "AI Workflows & Automatisierung in Jena",
      metaTitle: "AI Workflows Jena - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Jena. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Jena",
        "KI Automatisierung Jena",
        "Workflow Automatisierung Jena",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-jena",
      preHeadline: "n8n Automation Jena",
      headline: "n8n Automation in Jena - Workflows automatisieren",
      metaTitle: "n8n Automation Jena | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Jena. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Jena",
        "n8n Jena",
        "Workflow Automation Jena",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-jena",
      preHeadline: "n8n Jena",
      headline: "n8n Agentur in Jena",
      metaTitle: "n8n Jena - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Jena. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Jena und Umgebung.",
      keywords: [
        "n8n Jena",
        "n8n Agentur Jena",
        "n8n Beratung Jena",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-jena",
      preHeadline: "Automation Jena",
      headline: "Automation & Prozessoptimierung in Jena",
      metaTitle: "Automation Jena - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Jena. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Jena",
        "Prozessautomatisierung Jena",
        "Workflow Automation Jena",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-jena",
      preHeadline: "IT Dienstleister Jena",
      headline: "IT Dienstleister in Jena - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Jena - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Jena. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Jena.",
      keywords: [
        "IT Dienstleister Jena",
        "IT Service Jena",
        "Digitalisierung Jena",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-jena",
      preHeadline: "KI Beratung Jena",
      headline: "KI Beratung in Jena - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Jena - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Jena. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Jena",
        "KI Lösungen Jena",
        "Künstliche Intelligenz Jena",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Jena",
  slug: "jena",
  bundesland: "Thüringen",
  publish: false,
  nearbySmall: [
    "Weimar",
    "Gera",
    "Apolda",
    "Naumburg (Saale)",
    "Eisenberg",
  ],
  crossReference: [
    { name: "Erfurt", slug: "erfurt" },
    { name: "Leipzig", slug: "leipzig" },
    { name: "Halle (Saale)", slug: "halle-saale" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/jena",
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
