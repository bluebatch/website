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
      source: "/ai-workflows-mainz",
      preHeadline: "AI Workflows Mainz",
      headline: "AI Workflows & Automatisierung in Mainz",
      metaTitle: "AI Workflows Mainz – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Mainz. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Mainz",
        "KI Automatisierung Mainz",
        "Workflow Automatisierung Mainz",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-mainz",
      preHeadline: "n8n Automation Mainz",
      headline: "n8n Automation in Mainz – Workflows automatisieren",
      metaTitle: "n8n Automation Mainz | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Mainz. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Mainz",
        "n8n Mainz",
        "Workflow Automation Mainz",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-mainz",
      preHeadline: "n8n Mainz",
      headline: "n8n Agentur in Mainz",
      metaTitle: "n8n Mainz – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Mainz. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Mainz und Umgebung.",
      keywords: [
        "n8n Mainz",
        "n8n Agentur Mainz",
        "n8n Beratung Mainz",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-mainz",
      preHeadline: "Automation Mainz",
      headline: "Automation & Prozessoptimierung in Mainz",
      metaTitle: "Automation Mainz – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Mainz. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Mainz",
        "Prozessautomatisierung Mainz",
        "Workflow Automation Mainz",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-mainz",
      preHeadline: "IT Dienstleister Mainz",
      headline: "IT Dienstleister in Mainz – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Mainz – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Mainz. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Mainz.",
      keywords: [
        "IT Dienstleister Mainz",
        "IT Service Mainz",
        "Digitalisierung Mainz",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-mainz",
      preHeadline: "KI Beratung Mainz",
      headline: "KI Beratung in Mainz – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Mainz – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Mainz. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Mainz",
        "KI Lösungen Mainz",
        "Künstliche Intelligenz Mainz",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Mainz",
  slug: "mainz",
  bundesland: "Rheinland-Pfalz",
  publish: false,
  nearbySmall: [
    "Ingelheim am Rhein",
    "Bingen am Rhein",
    "Rüsselsheim am Main",
    "Neu-Isenburg",
    "Langen",
    "Alzey",
  ],
  crossReference: [
    { name: "Wiesbaden", slug: "wiesbaden" },
    { name: "Frankfurt am Main", slug: "frankfurt-am-main" },
    { name: "Darmstadt", slug: "darmstadt" },
    { name: "Koblenz", slug: "koblenz" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/mainz",
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
