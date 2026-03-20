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
      source: "/ai-workflows-gelsenkirchen",
      preHeadline: "AI Workflows Gelsenkirchen",
      headline: "AI Workflows & Automatisierung in Gelsenkirchen",
      metaTitle: "AI Workflows Gelsenkirchen - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Gelsenkirchen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Gelsenkirchen",
        "KI Automatisierung Gelsenkirchen",
        "Workflow Automatisierung Gelsenkirchen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-gelsenkirchen",
      preHeadline: "n8n Automation Gelsenkirchen",
      headline: "n8n Automation in Gelsenkirchen - Workflows automatisieren",
      metaTitle: "n8n Automation Gelsenkirchen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Gelsenkirchen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Gelsenkirchen",
        "n8n Gelsenkirchen",
        "Workflow Automation Gelsenkirchen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-gelsenkirchen",
      preHeadline: "n8n Gelsenkirchen",
      headline: "n8n Agentur in Gelsenkirchen",
      metaTitle: "n8n Gelsenkirchen - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Gelsenkirchen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Gelsenkirchen und Umgebung.",
      keywords: [
        "n8n Gelsenkirchen",
        "n8n Agentur Gelsenkirchen",
        "n8n Beratung Gelsenkirchen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-gelsenkirchen",
      preHeadline: "Automation Gelsenkirchen",
      headline: "Automation & Prozessoptimierung in Gelsenkirchen",
      metaTitle: "Automation Gelsenkirchen - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Gelsenkirchen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Gelsenkirchen",
        "Prozessautomatisierung Gelsenkirchen",
        "Workflow Automation Gelsenkirchen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-gelsenkirchen",
      preHeadline: "IT Dienstleister Gelsenkirchen",
      headline: "IT Dienstleister in Gelsenkirchen - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Gelsenkirchen - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Gelsenkirchen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Gelsenkirchen.",
      keywords: [
        "IT Dienstleister Gelsenkirchen",
        "IT Service Gelsenkirchen",
        "Digitalisierung Gelsenkirchen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-gelsenkirchen",
      preHeadline: "KI Beratung Gelsenkirchen",
      headline: "KI Beratung in Gelsenkirchen - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Gelsenkirchen - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Gelsenkirchen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Gelsenkirchen",
        "KI Lösungen Gelsenkirchen",
        "Künstliche Intelligenz Gelsenkirchen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Gelsenkirchen",
  slug: "gelsenkirchen",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Gladbeck",
    "Herten",
    "Marl",
    "Oer-Erkenschwick",
    "Castrop-Rauxel",
    "Dorsten",
    "Haltern am See",
  ],
  crossReference: [
    { name: "Essen", slug: "essen" },
    { name: "Bochum", slug: "bochum" },
    { name: "Herne", slug: "herne" },
    { name: "Dortmund", slug: "dortmund" },
    { name: "Bottrop", slug: "bottrop" },
    { name: "Recklinghausen", slug: "recklinghausen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/gelsenkirchen",
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
