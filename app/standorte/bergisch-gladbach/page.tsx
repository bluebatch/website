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
      source: "/ai-workflows-bergisch-gladbach",
      preHeadline: "AI Workflows Bergisch Gladbach",
      headline: "AI Workflows & Automatisierung in Bergisch Gladbach",
      metaTitle: "AI Workflows Bergisch Gladbach – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Bergisch Gladbach. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Bergisch Gladbach",
        "KI Automatisierung Bergisch Gladbach",
        "Workflow Automatisierung Bergisch Gladbach",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-bergisch-gladbach",
      preHeadline: "n8n Automation Bergisch Gladbach",
      headline: "n8n Automation in Bergisch Gladbach – Workflows automatisieren",
      metaTitle: "n8n Automation Bergisch Gladbach | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Bergisch Gladbach. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Bergisch Gladbach",
        "n8n Bergisch Gladbach",
        "Workflow Automation Bergisch Gladbach",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-bergisch-gladbach",
      preHeadline: "n8n Bergisch Gladbach",
      headline: "n8n Agentur in Bergisch Gladbach",
      metaTitle: "n8n Bergisch Gladbach – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Bergisch Gladbach. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Bergisch Gladbach und Umgebung.",
      keywords: [
        "n8n Bergisch Gladbach",
        "n8n Agentur Bergisch Gladbach",
        "n8n Beratung Bergisch Gladbach",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-bergisch-gladbach",
      preHeadline: "Automation Bergisch Gladbach",
      headline: "Automation & Prozessoptimierung in Bergisch Gladbach",
      metaTitle: "Automation Bergisch Gladbach – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Bergisch Gladbach. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Bergisch Gladbach",
        "Prozessautomatisierung Bergisch Gladbach",
        "Workflow Automation Bergisch Gladbach",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-bergisch-gladbach",
      preHeadline: "IT Dienstleister Bergisch Gladbach",
      headline: "IT Dienstleister in Bergisch Gladbach – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Bergisch Gladbach – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Bergisch Gladbach. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Bergisch Gladbach.",
      keywords: [
        "IT Dienstleister Bergisch Gladbach",
        "IT Service Bergisch Gladbach",
        "Digitalisierung Bergisch Gladbach",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-bergisch-gladbach",
      preHeadline: "KI Beratung Bergisch Gladbach",
      headline: "KI Beratung in Bergisch Gladbach – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Bergisch Gladbach – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Bergisch Gladbach. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Bergisch Gladbach",
        "KI Lösungen Bergisch Gladbach",
        "Künstliche Intelligenz Bergisch Gladbach",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Bergisch Gladbach",
  slug: "bergisch-gladbach",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Overath",
    "Rösrath",
    "Wermelskirchen",
    "Burscheid",
  ],
  crossReference: [
    { name: "Köln", slug: "koeln" },
    { name: "Leverkusen", slug: "leverkusen" },
    { name: "Solingen", slug: "solingen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/bergisch-gladbach",
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
