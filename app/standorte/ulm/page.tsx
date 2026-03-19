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
      source: "/ai-workflows-ulm",
      preHeadline: "AI Workflows Ulm",
      headline: "AI Workflows & Automatisierung in Ulm",
      metaTitle: "AI Workflows Ulm – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Ulm. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Ulm",
        "KI Automatisierung Ulm",
        "Workflow Automatisierung Ulm",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-ulm",
      preHeadline: "n8n Automation Ulm",
      headline: "n8n Automation in Ulm – Workflows automatisieren",
      metaTitle: "n8n Automation Ulm | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Ulm. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Ulm",
        "n8n Ulm",
        "Workflow Automation Ulm",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-ulm",
      preHeadline: "n8n Ulm",
      headline: "n8n Agentur in Ulm",
      metaTitle: "n8n Ulm – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Ulm. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Ulm und Umgebung.",
      keywords: [
        "n8n Ulm",
        "n8n Agentur Ulm",
        "n8n Beratung Ulm",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-ulm",
      preHeadline: "Automation Ulm",
      headline: "Automation & Prozessoptimierung in Ulm",
      metaTitle: "Automation Ulm – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Ulm. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Ulm",
        "Prozessautomatisierung Ulm",
        "Workflow Automation Ulm",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-ulm",
      preHeadline: "IT Dienstleister Ulm",
      headline: "IT Dienstleister in Ulm – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Ulm – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Ulm. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Ulm.",
      keywords: [
        "IT Dienstleister Ulm",
        "IT Service Ulm",
        "Digitalisierung Ulm",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-ulm",
      preHeadline: "KI Beratung Ulm",
      headline: "KI Beratung in Ulm – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Ulm – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Ulm. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Ulm",
        "KI Lösungen Ulm",
        "Künstliche Intelligenz Ulm",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Ulm",
  slug: "ulm",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Neu-Ulm",
    "Ehingen",
    "Blaubeuren",
    "Laupheim",
    "Biberach an der Riß",
    "Geislingen an der Steige",
  ],
  crossReference: [
    { name: "Stuttgart", slug: "stuttgart" },
    { name: "Augsburg", slug: "augsburg" },
    { name: "Reutlingen", slug: "reutlingen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/ulm",
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
