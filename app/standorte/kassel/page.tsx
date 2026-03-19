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
      source: "/ai-workflows-kassel",
      preHeadline: "AI Workflows Kassel",
      headline: "AI Workflows & Automatisierung in Kassel",
      metaTitle: "AI Workflows Kassel – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Kassel. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Kassel",
        "KI Automatisierung Kassel",
        "Workflow Automatisierung Kassel",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-kassel",
      preHeadline: "n8n Automation Kassel",
      headline: "n8n Automation in Kassel – Workflows automatisieren",
      metaTitle: "n8n Automation Kassel | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Kassel. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Kassel",
        "n8n Kassel",
        "Workflow Automation Kassel",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-kassel",
      preHeadline: "n8n Kassel",
      headline: "n8n Agentur in Kassel",
      metaTitle: "n8n Kassel – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Kassel. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Kassel und Umgebung.",
      keywords: [
        "n8n Kassel",
        "n8n Agentur Kassel",
        "n8n Beratung Kassel",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-kassel",
      preHeadline: "Automation Kassel",
      headline: "Automation & Prozessoptimierung in Kassel",
      metaTitle: "Automation Kassel – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Kassel. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Kassel",
        "Prozessautomatisierung Kassel",
        "Workflow Automation Kassel",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-kassel",
      preHeadline: "IT Dienstleister Kassel",
      headline: "IT Dienstleister in Kassel – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Kassel – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Kassel. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Kassel.",
      keywords: [
        "IT Dienstleister Kassel",
        "IT Service Kassel",
        "Digitalisierung Kassel",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-kassel",
      preHeadline: "KI Beratung Kassel",
      headline: "KI Beratung in Kassel – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Kassel – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Kassel. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Kassel",
        "KI Lösungen Kassel",
        "Künstliche Intelligenz Kassel",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Kassel",
  slug: "kassel",
  bundesland: "Hessen",
  publish: false,
  nearbySmall: [
    "Baunatal",
    "Vellmar",
    "Hofgeismar",
    "Melsungen",
  ],
  crossReference: [
    { name: "Göttingen", slug: "goettingen" },
    { name: "Hannover", slug: "hannover" },
    { name: "Frankfurt am Main", slug: "frankfurt-am-main" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/kassel",
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
