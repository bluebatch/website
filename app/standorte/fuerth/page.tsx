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
      source: "/ai-workflows-fuerth",
      preHeadline: "AI Workflows Fürth",
      headline: "AI Workflows & Automatisierung in Fürth",
      metaTitle: "AI Workflows Fürth – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Fürth. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Fürth",
        "KI Automatisierung Fürth",
        "Workflow Automatisierung Fürth",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-fuerth",
      preHeadline: "n8n Automation Fürth",
      headline: "n8n Automation in Fürth – Workflows automatisieren",
      metaTitle: "n8n Automation Fürth | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Fürth. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Fürth",
        "n8n Fürth",
        "Workflow Automation Fürth",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-fuerth",
      preHeadline: "n8n Fürth",
      headline: "n8n Agentur in Fürth",
      metaTitle: "n8n Fürth – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Fürth. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Fürth und Umgebung.",
      keywords: [
        "n8n Fürth",
        "n8n Agentur Fürth",
        "n8n Beratung Fürth",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-fuerth",
      preHeadline: "Automation Fürth",
      headline: "Automation & Prozessoptimierung in Fürth",
      metaTitle: "Automation Fürth – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Fürth. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Fürth",
        "Prozessautomatisierung Fürth",
        "Workflow Automation Fürth",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-fuerth",
      preHeadline: "IT Dienstleister Fürth",
      headline: "IT Dienstleister in Fürth – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Fürth – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Fürth. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Fürth.",
      keywords: [
        "IT Dienstleister Fürth",
        "IT Service Fürth",
        "Digitalisierung Fürth",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-fuerth",
      preHeadline: "KI Beratung Fürth",
      headline: "KI Beratung in Fürth – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Fürth – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Fürth. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Fürth",
        "KI Lösungen Fürth",
        "Künstliche Intelligenz Fürth",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Fürth",
  slug: "fuerth",
  bundesland: "Bayern",
  publish: false,
  nearbySmall: [
    "Zirndorf",
    "Schwabach",
    "Oberasbach",
    "Langenzenn",
    "Herzogenaurach",
    "Stein",
  ],
  crossReference: [
    { name: "Nürnberg", slug: "nuernberg" },
    { name: "Erlangen", slug: "erlangen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/fuerth",
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
