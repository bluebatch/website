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
      source: "/ai-workflows-bottrop",
      preHeadline: "AI Workflows Bottrop",
      headline: "AI Workflows & Automatisierung in Bottrop",
      metaTitle: "AI Workflows Bottrop - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Bottrop. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Bottrop",
        "KI Automatisierung Bottrop",
        "Workflow Automatisierung Bottrop",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-bottrop",
      preHeadline: "n8n Automation Bottrop",
      headline: "n8n Automation in Bottrop - Workflows automatisieren",
      metaTitle: "n8n Automation Bottrop | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Bottrop. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Bottrop",
        "n8n Bottrop",
        "Workflow Automation Bottrop",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-bottrop",
      preHeadline: "n8n Bottrop",
      headline: "n8n Agentur in Bottrop",
      metaTitle: "n8n Bottrop - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Bottrop. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Bottrop und Umgebung.",
      keywords: [
        "n8n Bottrop",
        "n8n Agentur Bottrop",
        "n8n Beratung Bottrop",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-bottrop",
      preHeadline: "Automation Bottrop",
      headline: "Automation & Prozessoptimierung in Bottrop",
      metaTitle: "Automation Bottrop - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Bottrop. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Bottrop",
        "Prozessautomatisierung Bottrop",
        "Workflow Automation Bottrop",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-bottrop",
      preHeadline: "IT Dienstleister Bottrop",
      headline: "IT Dienstleister in Bottrop - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Bottrop - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Bottrop. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Bottrop.",
      keywords: [
        "IT Dienstleister Bottrop",
        "IT Service Bottrop",
        "Digitalisierung Bottrop",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-bottrop",
      preHeadline: "KI Beratung Bottrop",
      headline: "KI Beratung in Bottrop - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Bottrop - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Bottrop. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Bottrop",
        "KI Lösungen Bottrop",
        "Künstliche Intelligenz Bottrop",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Bottrop",
  slug: "bottrop",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Gladbeck",
    "Dorsten",
    "Marl",
    "Dinslaken",
  ],
  crossReference: [
    { name: "Essen", slug: "essen" },
    { name: "Gelsenkirchen", slug: "gelsenkirchen" },
    { name: "Oberhausen", slug: "oberhausen" },
    { name: "Recklinghausen", slug: "recklinghausen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/bottrop",
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
