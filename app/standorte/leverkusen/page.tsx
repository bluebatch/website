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
      source: "/ai-workflows-leverkusen",
      preHeadline: "AI Workflows Leverkusen",
      headline: "AI Workflows & Automatisierung in Leverkusen",
      metaTitle: "AI Workflows Leverkusen – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Leverkusen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Leverkusen",
        "KI Automatisierung Leverkusen",
        "Workflow Automatisierung Leverkusen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-leverkusen",
      preHeadline: "n8n Automation Leverkusen",
      headline: "n8n Automation in Leverkusen – Workflows automatisieren",
      metaTitle: "n8n Automation Leverkusen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Leverkusen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Leverkusen",
        "n8n Leverkusen",
        "Workflow Automation Leverkusen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-leverkusen",
      preHeadline: "n8n Leverkusen",
      headline: "n8n Agentur in Leverkusen",
      metaTitle: "n8n Leverkusen – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Leverkusen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Leverkusen und Umgebung.",
      keywords: [
        "n8n Leverkusen",
        "n8n Agentur Leverkusen",
        "n8n Beratung Leverkusen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-leverkusen",
      preHeadline: "Automation Leverkusen",
      headline: "Automation & Prozessoptimierung in Leverkusen",
      metaTitle: "Automation Leverkusen – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Leverkusen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Leverkusen",
        "Prozessautomatisierung Leverkusen",
        "Workflow Automation Leverkusen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-leverkusen",
      preHeadline: "IT Dienstleister Leverkusen",
      headline: "IT Dienstleister in Leverkusen – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Leverkusen – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Leverkusen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Leverkusen.",
      keywords: [
        "IT Dienstleister Leverkusen",
        "IT Service Leverkusen",
        "Digitalisierung Leverkusen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-leverkusen",
      preHeadline: "KI Beratung Leverkusen",
      headline: "KI Beratung in Leverkusen – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Leverkusen – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Leverkusen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Leverkusen",
        "KI Lösungen Leverkusen",
        "Künstliche Intelligenz Leverkusen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Leverkusen",
  slug: "leverkusen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Langenfeld",
    "Monheim am Rhein",
    "Burscheid",
    "Leichlingen",
    "Wermelskirchen",
  ],
  crossReference: [
    { name: "Köln", slug: "koeln" },
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Bergisch Gladbach", slug: "bergisch-gladbach" },
    { name: "Solingen", slug: "solingen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/leverkusen",
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
