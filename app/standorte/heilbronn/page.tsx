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
      source: "/ai-workflows-heilbronn",
      preHeadline: "AI Workflows Heilbronn",
      headline: "AI Workflows & Automatisierung in Heilbronn",
      metaTitle: "AI Workflows Heilbronn - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Heilbronn. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Heilbronn",
        "KI Automatisierung Heilbronn",
        "Workflow Automatisierung Heilbronn",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-heilbronn",
      preHeadline: "n8n Automation Heilbronn",
      headline: "n8n Automation in Heilbronn - Workflows automatisieren",
      metaTitle: "n8n Automation Heilbronn | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Heilbronn. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Heilbronn",
        "n8n Heilbronn",
        "Workflow Automation Heilbronn",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-heilbronn",
      preHeadline: "n8n Heilbronn",
      headline: "n8n Agentur in Heilbronn",
      metaTitle: "n8n Heilbronn - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Heilbronn. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Heilbronn und Umgebung.",
      keywords: [
        "n8n Heilbronn",
        "n8n Agentur Heilbronn",
        "n8n Beratung Heilbronn",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-heilbronn",
      preHeadline: "Automation Heilbronn",
      headline: "Automation & Prozessoptimierung in Heilbronn",
      metaTitle: "Automation Heilbronn - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Heilbronn. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Heilbronn",
        "Prozessautomatisierung Heilbronn",
        "Workflow Automation Heilbronn",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-heilbronn",
      preHeadline: "IT Dienstleister Heilbronn",
      headline: "IT Dienstleister in Heilbronn - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Heilbronn - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Heilbronn. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Heilbronn.",
      keywords: [
        "IT Dienstleister Heilbronn",
        "IT Service Heilbronn",
        "Digitalisierung Heilbronn",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-heilbronn",
      preHeadline: "KI Beratung Heilbronn",
      headline: "KI Beratung in Heilbronn - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Heilbronn - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Heilbronn. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Heilbronn",
        "KI Lösungen Heilbronn",
        "Künstliche Intelligenz Heilbronn",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Heilbronn",
  slug: "heilbronn",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Neckarsulm",
    "Öhringen",
    "Weinsberg",
    "Bad Friedrichshall",
    "Mosbach",
    "Eppingen",
    "Lauffen am Neckar",
    "Sinsheim",
  ],
  crossReference: [
    { name: "Stuttgart", slug: "stuttgart" },
    { name: "Karlsruhe", slug: "karlsruhe" },
    { name: "Ludwigsburg", slug: "ludwigsburg" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/heilbronn",
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
