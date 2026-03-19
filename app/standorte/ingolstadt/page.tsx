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
      source: "/ai-workflows-ingolstadt",
      preHeadline: "AI Workflows Ingolstadt",
      headline: "AI Workflows & Automatisierung in Ingolstadt",
      metaTitle: "AI Workflows Ingolstadt – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Ingolstadt. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Ingolstadt",
        "KI Automatisierung Ingolstadt",
        "Workflow Automatisierung Ingolstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-ingolstadt",
      preHeadline: "n8n Automation Ingolstadt",
      headline: "n8n Automation in Ingolstadt – Workflows automatisieren",
      metaTitle: "n8n Automation Ingolstadt | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Ingolstadt. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Ingolstadt",
        "n8n Ingolstadt",
        "Workflow Automation Ingolstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-ingolstadt",
      preHeadline: "n8n Ingolstadt",
      headline: "n8n Agentur in Ingolstadt",
      metaTitle: "n8n Ingolstadt – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Ingolstadt. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Ingolstadt und Umgebung.",
      keywords: [
        "n8n Ingolstadt",
        "n8n Agentur Ingolstadt",
        "n8n Beratung Ingolstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-ingolstadt",
      preHeadline: "Automation Ingolstadt",
      headline: "Automation & Prozessoptimierung in Ingolstadt",
      metaTitle: "Automation Ingolstadt – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Ingolstadt. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Ingolstadt",
        "Prozessautomatisierung Ingolstadt",
        "Workflow Automation Ingolstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-ingolstadt",
      preHeadline: "IT Dienstleister Ingolstadt",
      headline: "IT Dienstleister in Ingolstadt – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Ingolstadt – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Ingolstadt. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Ingolstadt.",
      keywords: [
        "IT Dienstleister Ingolstadt",
        "IT Service Ingolstadt",
        "Digitalisierung Ingolstadt",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-ingolstadt",
      preHeadline: "KI Beratung Ingolstadt",
      headline: "KI Beratung in Ingolstadt – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Ingolstadt – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Ingolstadt. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Ingolstadt",
        "KI Lösungen Ingolstadt",
        "Künstliche Intelligenz Ingolstadt",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Ingolstadt",
  slug: "ingolstadt",
  bundesland: "Bayern",
  publish: false,
  nearbySmall: [
    "Neuburg an der Donau",
    "Pfaffenhofen an der Ilm",
    "Eichstätt",
    "Schrobenhausen",
  ],
  crossReference: [
    { name: "München", slug: "muenchen" },
    { name: "Augsburg", slug: "augsburg" },
    { name: "Nürnberg", slug: "nuernberg" },
    { name: "Regensburg", slug: "regensburg" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/ingolstadt",
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
