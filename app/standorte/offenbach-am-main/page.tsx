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
      source: "/ai-workflows-offenbach-am-main",
      preHeadline: "AI Workflows Offenbach am Main",
      headline: "AI Workflows & Automatisierung in Offenbach am Main",
      metaTitle: "AI Workflows Offenbach am Main - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Offenbach am Main. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Offenbach am Main",
        "KI Automatisierung Offenbach am Main",
        "Workflow Automatisierung Offenbach am Main",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-offenbach-am-main",
      preHeadline: "n8n Automation Offenbach am Main",
      headline: "n8n Automation in Offenbach am Main - Workflows automatisieren",
      metaTitle: "n8n Automation Offenbach am Main | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Offenbach am Main. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Offenbach am Main",
        "n8n Offenbach am Main",
        "Workflow Automation Offenbach am Main",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-offenbach-am-main",
      preHeadline: "n8n Offenbach am Main",
      headline: "n8n Agentur in Offenbach am Main",
      metaTitle: "n8n Offenbach am Main - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Offenbach am Main. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Offenbach am Main und Umgebung.",
      keywords: [
        "n8n Offenbach am Main",
        "n8n Agentur Offenbach am Main",
        "n8n Beratung Offenbach am Main",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-offenbach-am-main",
      preHeadline: "Automation Offenbach am Main",
      headline: "Automation & Prozessoptimierung in Offenbach am Main",
      metaTitle: "Automation Offenbach am Main - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Offenbach am Main. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Offenbach am Main",
        "Prozessautomatisierung Offenbach am Main",
        "Workflow Automation Offenbach am Main",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-offenbach-am-main",
      preHeadline: "IT Dienstleister Offenbach am Main",
      headline: "IT Dienstleister in Offenbach am Main - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Offenbach am Main - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Offenbach am Main. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Offenbach am Main.",
      keywords: [
        "IT Dienstleister Offenbach am Main",
        "IT Service Offenbach am Main",
        "Digitalisierung Offenbach am Main",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-offenbach-am-main",
      preHeadline: "KI Beratung Offenbach am Main",
      headline: "KI Beratung in Offenbach am Main - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Offenbach am Main - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Offenbach am Main. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Offenbach am Main",
        "KI Lösungen Offenbach am Main",
        "Künstliche Intelligenz Offenbach am Main",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Offenbach am Main",
  slug: "offenbach-am-main",
  bundesland: "Hessen",
  publish: false,
  nearbySmall: [
    "Hanau",
    "Langen",
    "Dreieich",
    "Rodgau",
    "Dietzenbach",
    "Neu-Isenburg",
    "Maintal",
    "Mühlheim am Main",
    "Obertshausen",
  ],
  crossReference: [
    { name: "Frankfurt am Main", slug: "frankfurt-am-main" },
    { name: "Darmstadt", slug: "darmstadt" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/offenbach-am-main",
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
