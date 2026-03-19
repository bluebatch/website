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
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import type { CityMeta } from "@/lib/meta-custom";

import type { RewriteSiteConfig } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-cottbus",
      preHeadline: "AI Workflows Cottbus",
      headline: "AI Workflows & Automatisierung in Cottbus",
      metaTitle: "AI Workflows Cottbus – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Cottbus. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Cottbus",
        "KI Automatisierung Cottbus",
        "Workflow Automatisierung Cottbus",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-cottbus",
      preHeadline: "n8n Automation Cottbus",
      headline: "n8n Automation in Cottbus – Workflows automatisieren",
      metaTitle: "n8n Automation Cottbus | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Cottbus. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Cottbus",
        "n8n Cottbus",
        "Workflow Automation Cottbus",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-cottbus",
      preHeadline: "n8n Cottbus",
      headline: "n8n Agentur in Cottbus",
      metaTitle: "n8n Cottbus – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Cottbus. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Cottbus und Umgebung.",
      keywords: [
        "n8n Cottbus",
        "n8n Agentur Cottbus",
        "n8n Beratung Cottbus",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-cottbus",
      preHeadline: "Automation Cottbus",
      headline: "Automation & Prozessoptimierung in Cottbus",
      metaTitle: "Automation Cottbus – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Cottbus. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Cottbus",
        "Prozessautomatisierung Cottbus",
        "Workflow Automation Cottbus",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-cottbus",
      preHeadline: "IT Dienstleister Cottbus",
      headline: "IT Dienstleister in Cottbus – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Cottbus – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Cottbus. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Cottbus.",
      keywords: [
        "IT Dienstleister Cottbus",
        "IT Service Cottbus",
        "Digitalisierung Cottbus",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-cottbus",
      preHeadline: "KI Beratung Cottbus",
      headline: "KI Beratung in Cottbus – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Cottbus – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Cottbus. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Cottbus",
        "KI Lösungen Cottbus",
        "Künstliche Intelligenz Cottbus",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Cottbus",
  slug: "cottbus",
  bundesland: "Brandenburg",
  publish: false,
  nearbySmall: [
    "Spremberg",
    "Forst (Lausitz)",
    "Senftenberg",
    "Guben",
  ],
  crossReference: [
    { name: "Berlin", slug: "berlin" },
    { name: "Dresden", slug: "dresden" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/cottbus",
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

      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
