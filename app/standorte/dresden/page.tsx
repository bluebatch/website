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
      source: "/ai-workflows-dresden",
      preHeadline: "AI Workflows Dresden",
      headline: "AI Workflows & Automatisierung in Dresden",
      metaTitle: "AI Workflows Dresden - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Dresden. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Dresden",
        "KI Automatisierung Dresden",
        "Workflow Automatisierung Dresden",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-dresden",
      preHeadline: "n8n Automation Dresden",
      headline: "n8n Automation in Dresden - Workflows automatisieren",
      metaTitle: "n8n Automation Dresden | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Dresden. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Dresden",
        "n8n Dresden",
        "Workflow Automation Dresden",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-dresden",
      preHeadline: "n8n Dresden",
      headline: "n8n Agentur in Dresden",
      metaTitle: "n8n Dresden - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Dresden. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Dresden und Umgebung.",
      keywords: [
        "n8n Dresden",
        "n8n Agentur Dresden",
        "n8n Beratung Dresden",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-dresden",
      preHeadline: "Automation Dresden",
      headline: "Automation & Prozessoptimierung in Dresden",
      metaTitle: "Automation Dresden - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Dresden. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Dresden",
        "Prozessautomatisierung Dresden",
        "Workflow Automation Dresden",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-dresden",
      preHeadline: "IT Dienstleister Dresden",
      headline: "IT Dienstleister in Dresden - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Dresden - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Dresden. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Dresden.",
      keywords: [
        "IT Dienstleister Dresden",
        "IT Service Dresden",
        "Digitalisierung Dresden",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-dresden",
      preHeadline: "KI Beratung Dresden",
      headline: "KI Beratung in Dresden - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Dresden - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Dresden. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Dresden",
        "KI Lösungen Dresden",
        "Künstliche Intelligenz Dresden",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Dresden",
  slug: "dresden",
  bundesland: "Sachsen",
  publish: false,
  nearbySmall: [
    "Freital",
    "Radebeul",
    "Pirna",
    "Meißen",
    "Coswig",
    "Heidenau",
    "Radeberg",
    "Bautzen",
  ],
  crossReference: [
    { name: "Leipzig", slug: "leipzig" },
    { name: "Chemnitz", slug: "chemnitz" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/dresden",
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
