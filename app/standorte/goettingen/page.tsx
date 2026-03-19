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
      source: "/ai-workflows-goettingen",
      preHeadline: "AI Workflows Göttingen",
      headline: "AI Workflows & Automatisierung in Göttingen",
      metaTitle: "AI Workflows Göttingen – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Göttingen. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Göttingen",
        "KI Automatisierung Göttingen",
        "Workflow Automatisierung Göttingen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-goettingen",
      preHeadline: "n8n Automation Göttingen",
      headline: "n8n Automation in Göttingen – Workflows automatisieren",
      metaTitle: "n8n Automation Göttingen | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Göttingen. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Göttingen",
        "n8n Göttingen",
        "Workflow Automation Göttingen",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-goettingen",
      preHeadline: "n8n Göttingen",
      headline: "n8n Agentur in Göttingen",
      metaTitle: "n8n Göttingen – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Göttingen. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Göttingen und Umgebung.",
      keywords: [
        "n8n Göttingen",
        "n8n Agentur Göttingen",
        "n8n Beratung Göttingen",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-goettingen",
      preHeadline: "Automation Göttingen",
      headline: "Automation & Prozessoptimierung in Göttingen",
      metaTitle: "Automation Göttingen – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Göttingen. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Göttingen",
        "Prozessautomatisierung Göttingen",
        "Workflow Automation Göttingen",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-goettingen",
      preHeadline: "IT Dienstleister Göttingen",
      headline: "IT Dienstleister in Göttingen – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Göttingen – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Göttingen. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Göttingen.",
      keywords: [
        "IT Dienstleister Göttingen",
        "IT Service Göttingen",
        "Digitalisierung Göttingen",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-goettingen",
      preHeadline: "KI Beratung Göttingen",
      headline: "KI Beratung in Göttingen – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Göttingen – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Göttingen. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Göttingen",
        "KI Lösungen Göttingen",
        "Künstliche Intelligenz Göttingen",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Göttingen",
  slug: "goettingen",
  bundesland: "Niedersachsen",
  publish: false,
  nearbySmall: [
    "Northeim",
    "Einbeck",
    "Duderstadt",
    "Hann. Münden",
  ],
  crossReference: [
    { name: "Kassel", slug: "kassel" },
    { name: "Hannover", slug: "hannover" },
    { name: "Braunschweig", slug: "braunschweig" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/goettingen",
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
