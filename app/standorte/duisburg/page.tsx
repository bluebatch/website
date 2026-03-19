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
      source: "/ai-workflows-duisburg",
      preHeadline: "AI Workflows Duisburg",
      headline: "AI Workflows & Automatisierung in Duisburg",
      metaTitle: "AI Workflows Duisburg – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Duisburg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Duisburg",
        "KI Automatisierung Duisburg",
        "Workflow Automatisierung Duisburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-duisburg",
      preHeadline: "n8n Automation Duisburg",
      headline: "n8n Automation in Duisburg – Workflows automatisieren",
      metaTitle: "n8n Automation Duisburg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Duisburg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Duisburg",
        "n8n Duisburg",
        "Workflow Automation Duisburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-duisburg",
      preHeadline: "n8n Duisburg",
      headline: "n8n Agentur in Duisburg",
      metaTitle: "n8n Duisburg – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Duisburg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Duisburg und Umgebung.",
      keywords: [
        "n8n Duisburg",
        "n8n Agentur Duisburg",
        "n8n Beratung Duisburg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-duisburg",
      preHeadline: "Automation Duisburg",
      headline: "Automation & Prozessoptimierung in Duisburg",
      metaTitle: "Automation Duisburg – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Duisburg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Duisburg",
        "Prozessautomatisierung Duisburg",
        "Workflow Automation Duisburg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-duisburg",
      preHeadline: "IT Dienstleister Duisburg",
      headline: "IT Dienstleister in Duisburg – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Duisburg – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Duisburg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Duisburg.",
      keywords: [
        "IT Dienstleister Duisburg",
        "IT Service Duisburg",
        "Digitalisierung Duisburg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-duisburg",
      preHeadline: "KI Beratung Duisburg",
      headline: "KI Beratung in Duisburg – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Duisburg – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Duisburg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Duisburg",
        "KI Lösungen Duisburg",
        "Künstliche Intelligenz Duisburg",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Duisburg",
  slug: "duisburg",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Dinslaken",
    "Ratingen",
    "Kamp-Lintfort",
    "Voerde",
    "Wesel",
    "Rheinberg",
  ],
  crossReference: [
    { name: "Essen", slug: "essen" },
    { name: "Düsseldorf", slug: "duesseldorf" },
    { name: "Oberhausen", slug: "oberhausen" },
    { name: "Krefeld", slug: "krefeld" },
    { name: "Moers", slug: "moers" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/duisburg",
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
