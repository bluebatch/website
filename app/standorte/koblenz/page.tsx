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
      source: "/ai-workflows-koblenz",
      preHeadline: "AI Workflows Koblenz",
      headline: "AI Workflows & Automatisierung in Koblenz",
      metaTitle: "AI Workflows Koblenz - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Koblenz. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Koblenz",
        "KI Automatisierung Koblenz",
        "Workflow Automatisierung Koblenz",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-koblenz",
      preHeadline: "n8n Automation Koblenz",
      headline: "n8n Automation in Koblenz - Workflows automatisieren",
      metaTitle: "n8n Automation Koblenz | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Koblenz. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Koblenz",
        "n8n Koblenz",
        "Workflow Automation Koblenz",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-koblenz",
      preHeadline: "n8n Koblenz",
      headline: "n8n Agentur in Koblenz",
      metaTitle: "n8n Koblenz - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Koblenz. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Koblenz und Umgebung.",
      keywords: [
        "n8n Koblenz",
        "n8n Agentur Koblenz",
        "n8n Beratung Koblenz",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-koblenz",
      preHeadline: "Automation Koblenz",
      headline: "Automation & Prozessoptimierung in Koblenz",
      metaTitle: "Automation Koblenz - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Koblenz. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Koblenz",
        "Prozessautomatisierung Koblenz",
        "Workflow Automation Koblenz",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-koblenz",
      preHeadline: "IT Dienstleister Koblenz",
      headline: "IT Dienstleister in Koblenz - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Koblenz - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Koblenz. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Koblenz.",
      keywords: [
        "IT Dienstleister Koblenz",
        "IT Service Koblenz",
        "Digitalisierung Koblenz",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-koblenz",
      preHeadline: "KI Beratung Koblenz",
      headline: "KI Beratung in Koblenz - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Koblenz - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Koblenz. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Koblenz",
        "KI Lösungen Koblenz",
        "Künstliche Intelligenz Koblenz",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Koblenz",
  slug: "koblenz",
  bundesland: "Rheinland-Pfalz",
  publish: false,
  nearbySmall: [
    "Neuwied",
    "Andernach",
    "Bendorf",
    "Lahnstein",
    "Mayen",
    "Montabaur",
  ],
  crossReference: [
    { name: "Bonn", slug: "bonn" },
    { name: "Mainz", slug: "mainz" },
    { name: "Trier", slug: "trier" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/koblenz",
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
