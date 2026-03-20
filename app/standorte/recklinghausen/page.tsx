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
      source: "/ai-workflows-recklinghausen",
      preHeadline: "AI Workflows Recklinghausen",
      headline: "AI Workflows & Automatisierung in Recklinghausen",
      metaTitle: "AI Workflows Recklinghausen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Recklinghausen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Recklinghausen",
        "KI Automatisierung Recklinghausen",
        "Workflow Automatisierung Recklinghausen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-recklinghausen",
      preHeadline: "n8n Automation Recklinghausen",
      headline: "n8n Automation in Recklinghausen - Workflows automatisieren",
      metaTitle: "n8n Automation Recklinghausen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Recklinghausen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Recklinghausen",
        "n8n Recklinghausen",
        "Workflow Automation Recklinghausen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-recklinghausen",
      preHeadline: "n8n Recklinghausen",
      headline: "n8n Agentur in Recklinghausen",
      metaTitle: "n8n Recklinghausen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Recklinghausen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Recklinghausen und Umgebung.",
      keywords: [
        "n8n Recklinghausen",
        "n8n Agentur Recklinghausen",
        "n8n Beratung Recklinghausen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-recklinghausen",
      preHeadline: "Automation Recklinghausen",
      headline: "Automation & Prozessoptimierung in Recklinghausen",
      metaTitle: "Automation Recklinghausen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Recklinghausen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Recklinghausen",
        "Prozessautomatisierung Recklinghausen",
        "Workflow Automation Recklinghausen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-recklinghausen",
      preHeadline: "IT Dienstleister Recklinghausen",
      headline: "IT Dienstleister in Recklinghausen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Recklinghausen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Recklinghausen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Recklinghausen.",
      keywords: [
        "IT Dienstleister Recklinghausen",
        "IT Service Recklinghausen",
        "Digitalisierung Recklinghausen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-recklinghausen",
      preHeadline: "KI Beratung Recklinghausen",
      headline: "KI Beratung in Recklinghausen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Recklinghausen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Recklinghausen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Recklinghausen",
        "KI Lösungen Recklinghausen",
        "Künstliche Intelligenz Recklinghausen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Recklinghausen",
  slug: "recklinghausen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Herten",
    "Marl",
    "Castrop-Rauxel",
    "Gladbeck",
    "Oer-Erkenschwick",
    "Haltern am See",
    "Dorsten",
    "Waltrop",
    "Datteln",
  ],
  crossReference: [
    { name: "Gelsenkirchen", slug: "gelsenkirchen" },
    { name: "Herne", slug: "herne" },
    { name: "Dortmund", slug: "dortmund" },
    { name: "Bochum", slug: "bochum" },
    { name: "Essen", slug: "essen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/recklinghausen",
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
