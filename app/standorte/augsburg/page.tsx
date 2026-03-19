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
      source: "/ai-workflows-augsburg",
      preHeadline: "AI Workflows Augsburg",
      headline: "AI Workflows & Automatisierung in Augsburg",
      metaTitle: "AI Workflows Augsburg – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Augsburg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Augsburg",
        "KI Automatisierung Augsburg",
        "Workflow Automatisierung Augsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-augsburg",
      preHeadline: "n8n Automation Augsburg",
      headline: "n8n Automation in Augsburg – Workflows automatisieren",
      metaTitle: "n8n Automation Augsburg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Augsburg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Augsburg",
        "n8n Augsburg",
        "Workflow Automation Augsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-augsburg",
      preHeadline: "n8n Augsburg",
      headline: "n8n Agentur in Augsburg",
      metaTitle: "n8n Augsburg – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Augsburg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Augsburg und Umgebung.",
      keywords: [
        "n8n Augsburg",
        "n8n Agentur Augsburg",
        "n8n Beratung Augsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-augsburg",
      preHeadline: "Automation Augsburg",
      headline: "Automation & Prozessoptimierung in Augsburg",
      metaTitle: "Automation Augsburg – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Augsburg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Augsburg",
        "Prozessautomatisierung Augsburg",
        "Workflow Automation Augsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-augsburg",
      preHeadline: "IT Dienstleister Augsburg",
      headline: "IT Dienstleister in Augsburg – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Augsburg – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Augsburg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Augsburg.",
      keywords: [
        "IT Dienstleister Augsburg",
        "IT Service Augsburg",
        "Digitalisierung Augsburg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-augsburg",
      preHeadline: "KI Beratung Augsburg",
      headline: "KI Beratung in Augsburg – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Augsburg – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Augsburg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Augsburg",
        "KI Lösungen Augsburg",
        "Künstliche Intelligenz Augsburg",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Augsburg",
  slug: "augsburg",
  bundesland: "Bayern",
  publish: false,
  nearbySmall: [
    "Friedberg",
    "Gersthofen",
    "Neusäß",
    "Königsbrunn",
    "Stadtbergen",
    "Bobingen",
    "Schwabmünchen",
    "Kaufering",
    "Landsberg am Lech",
    "Dachau",
  ],
  crossReference: [
    { name: "München", slug: "muenchen" },
    { name: "Ulm", slug: "ulm" },
    { name: "Ingolstadt", slug: "ingolstadt" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/augsburg",
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
