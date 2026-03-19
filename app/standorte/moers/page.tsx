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
      source: "/ai-workflows-moers",
      preHeadline: "AI Workflows Moers",
      headline: "AI Workflows & Automatisierung in Moers",
      metaTitle: "AI Workflows Moers – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Moers. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Moers",
        "KI Automatisierung Moers",
        "Workflow Automatisierung Moers",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-moers",
      preHeadline: "n8n Automation Moers",
      headline: "n8n Automation in Moers – Workflows automatisieren",
      metaTitle: "n8n Automation Moers | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Moers. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Moers",
        "n8n Moers",
        "Workflow Automation Moers",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-moers",
      preHeadline: "n8n Moers",
      headline: "n8n Agentur in Moers",
      metaTitle: "n8n Moers – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Moers. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Moers und Umgebung.",
      keywords: [
        "n8n Moers",
        "n8n Agentur Moers",
        "n8n Beratung Moers",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-moers",
      preHeadline: "Automation Moers",
      headline: "Automation & Prozessoptimierung in Moers",
      metaTitle: "Automation Moers – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Moers. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Moers",
        "Prozessautomatisierung Moers",
        "Workflow Automation Moers",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-moers",
      preHeadline: "IT Dienstleister Moers",
      headline: "IT Dienstleister in Moers – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Moers – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Moers. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Moers.",
      keywords: [
        "IT Dienstleister Moers",
        "IT Service Moers",
        "Digitalisierung Moers",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-moers",
      preHeadline: "KI Beratung Moers",
      headline: "KI Beratung in Moers – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Moers – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Moers. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Moers",
        "KI Lösungen Moers",
        "Künstliche Intelligenz Moers",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Moers",
  slug: "moers",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Kamp-Lintfort",
    "Neukirchen-Vluyn",
    "Rheinberg",
    "Dinslaken",
    "Wesel",
    "Voerde",
  ],
  crossReference: [
    { name: "Duisburg", slug: "duisburg" },
    { name: "Krefeld", slug: "krefeld" },
    { name: "Oberhausen", slug: "oberhausen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/moers",
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
