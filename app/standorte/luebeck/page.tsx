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
      source: "/ai-workflows-luebeck",
      preHeadline: "AI Workflows Lübeck",
      headline: "AI Workflows & Automatisierung in Lübeck",
      metaTitle: "AI Workflows Lübeck – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Lübeck. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Lübeck",
        "KI Automatisierung Lübeck",
        "Workflow Automatisierung Lübeck",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-luebeck",
      preHeadline: "n8n Automation Lübeck",
      headline: "n8n Automation in Lübeck – Workflows automatisieren",
      metaTitle: "n8n Automation Lübeck | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Lübeck. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Lübeck",
        "n8n Lübeck",
        "Workflow Automation Lübeck",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-luebeck",
      preHeadline: "n8n Lübeck",
      headline: "n8n Agentur in Lübeck",
      metaTitle: "n8n Lübeck – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Lübeck. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Lübeck und Umgebung.",
      keywords: [
        "n8n Lübeck",
        "n8n Agentur Lübeck",
        "n8n Beratung Lübeck",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-luebeck",
      preHeadline: "Automation Lübeck",
      headline: "Automation & Prozessoptimierung in Lübeck",
      metaTitle: "Automation Lübeck – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Lübeck. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Lübeck",
        "Prozessautomatisierung Lübeck",
        "Workflow Automation Lübeck",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-luebeck",
      preHeadline: "IT Dienstleister Lübeck",
      headline: "IT Dienstleister in Lübeck – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Lübeck – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Lübeck. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Lübeck.",
      keywords: [
        "IT Dienstleister Lübeck",
        "IT Service Lübeck",
        "Digitalisierung Lübeck",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-luebeck",
      preHeadline: "KI Beratung Lübeck",
      headline: "KI Beratung in Lübeck – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Lübeck – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Lübeck. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Lübeck",
        "KI Lösungen Lübeck",
        "Künstliche Intelligenz Lübeck",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Lübeck",
  slug: "luebeck",
  bundesland: "Schleswig-Holstein",
  publish: false,
  nearbySmall: [
    "Bad Oldesloe",
    "Ahrensburg",
    "Bad Schwartau",
    "Eutin",
    "Ratzeburg",
    "Wismar",
  ],
  crossReference: [
    { name: "Hamburg", slug: "hamburg" },
    { name: "Kiel", slug: "kiel" },
    { name: "Rostock", slug: "rostock" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/luebeck",
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
