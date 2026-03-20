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
      source: "/ai-workflows-chemnitz",
      preHeadline: "AI Workflows Chemnitz",
      headline: "AI Workflows & Automatisierung in Chemnitz",
      metaTitle: "AI Workflows Chemnitz - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Chemnitz. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Chemnitz",
        "KI Automatisierung Chemnitz",
        "Workflow Automatisierung Chemnitz",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-chemnitz",
      preHeadline: "n8n Automation Chemnitz",
      headline: "n8n Automation in Chemnitz - Workflows automatisieren",
      metaTitle: "n8n Automation Chemnitz | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Chemnitz. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Chemnitz",
        "n8n Chemnitz",
        "Workflow Automation Chemnitz",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-chemnitz",
      preHeadline: "n8n Chemnitz",
      headline: "n8n Agentur in Chemnitz",
      metaTitle: "n8n Chemnitz - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Chemnitz. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Chemnitz und Umgebung.",
      keywords: [
        "n8n Chemnitz",
        "n8n Agentur Chemnitz",
        "n8n Beratung Chemnitz",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-chemnitz",
      preHeadline: "Automation Chemnitz",
      headline: "Automation & Prozessoptimierung in Chemnitz",
      metaTitle: "Automation Chemnitz - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Chemnitz. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Chemnitz",
        "Prozessautomatisierung Chemnitz",
        "Workflow Automation Chemnitz",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-chemnitz",
      preHeadline: "IT Dienstleister Chemnitz",
      headline: "IT Dienstleister in Chemnitz - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Chemnitz - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Chemnitz. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Chemnitz.",
      keywords: [
        "IT Dienstleister Chemnitz",
        "IT Service Chemnitz",
        "Digitalisierung Chemnitz",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-chemnitz",
      preHeadline: "KI Beratung Chemnitz",
      headline: "KI Beratung in Chemnitz - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Chemnitz - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Chemnitz. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Chemnitz",
        "KI Lösungen Chemnitz",
        "Künstliche Intelligenz Chemnitz",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Chemnitz",
  slug: "chemnitz",
  bundesland: "Sachsen",
  publish: false,
  nearbySmall: [
    "Zwickau",
    "Freiberg",
    "Limbach-Oberfrohna",
    "Glauchau",
    "Mittweida",
    "Flöha",
    "Döbeln",
  ],
  crossReference: [
    { name: "Dresden", slug: "dresden" },
    { name: "Leipzig", slug: "leipzig" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/chemnitz",
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
