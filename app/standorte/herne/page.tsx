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
      source: "/ai-workflows-herne",
      preHeadline: "AI Workflows Herne",
      headline: "AI Workflows & Automatisierung in Herne",
      metaTitle: "AI Workflows Herne – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Herne. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Herne",
        "KI Automatisierung Herne",
        "Workflow Automatisierung Herne",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-herne",
      preHeadline: "n8n Automation Herne",
      headline: "n8n Automation in Herne – Workflows automatisieren",
      metaTitle: "n8n Automation Herne | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Herne. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Herne",
        "n8n Herne",
        "Workflow Automation Herne",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-herne",
      preHeadline: "n8n Herne",
      headline: "n8n Agentur in Herne",
      metaTitle: "n8n Herne – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Herne. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Herne und Umgebung.",
      keywords: [
        "n8n Herne",
        "n8n Agentur Herne",
        "n8n Beratung Herne",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-herne",
      preHeadline: "Automation Herne",
      headline: "Automation & Prozessoptimierung in Herne",
      metaTitle: "Automation Herne – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Herne. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Herne",
        "Prozessautomatisierung Herne",
        "Workflow Automation Herne",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-herne",
      preHeadline: "IT Dienstleister Herne",
      headline: "IT Dienstleister in Herne – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Herne – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Herne. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Herne.",
      keywords: [
        "IT Dienstleister Herne",
        "IT Service Herne",
        "Digitalisierung Herne",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-herne",
      preHeadline: "KI Beratung Herne",
      headline: "KI Beratung in Herne – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Herne – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Herne. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Herne",
        "KI Lösungen Herne",
        "Künstliche Intelligenz Herne",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Herne",
  slug: "herne",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Herten",
    "Castrop-Rauxel",
  ],
  crossReference: [
    { name: "Bochum", slug: "bochum" },
    { name: "Gelsenkirchen", slug: "gelsenkirchen" },
    { name: "Dortmund", slug: "dortmund" },
    { name: "Recklinghausen", slug: "recklinghausen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/herne",
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
