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
      source: "/ai-workflows-leipzig",
      preHeadline: "AI Workflows Leipzig",
      headline: "AI Workflows & Automatisierung in Leipzig",
      metaTitle: "AI Workflows Leipzig – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Leipzig. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Leipzig",
        "KI Automatisierung Leipzig",
        "Workflow Automatisierung Leipzig",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-leipzig",
      preHeadline: "n8n Automation Leipzig",
      headline: "n8n Automation in Leipzig – Workflows automatisieren",
      metaTitle: "n8n Automation Leipzig | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Leipzig. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Leipzig",
        "n8n Leipzig",
        "Workflow Automation Leipzig",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-leipzig",
      preHeadline: "n8n Leipzig",
      headline: "n8n Agentur in Leipzig",
      metaTitle: "n8n Leipzig – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Leipzig. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Leipzig und Umgebung.",
      keywords: [
        "n8n Leipzig",
        "n8n Agentur Leipzig",
        "n8n Beratung Leipzig",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-leipzig",
      preHeadline: "Automation Leipzig",
      headline: "Automation & Prozessoptimierung in Leipzig",
      metaTitle: "Automation Leipzig – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Leipzig. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Leipzig",
        "Prozessautomatisierung Leipzig",
        "Workflow Automation Leipzig",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-leipzig",
      preHeadline: "IT Dienstleister Leipzig",
      headline: "IT Dienstleister in Leipzig – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Leipzig – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Leipzig. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Leipzig.",
      keywords: [
        "IT Dienstleister Leipzig",
        "IT Service Leipzig",
        "Digitalisierung Leipzig",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-leipzig",
      preHeadline: "KI Beratung Leipzig",
      headline: "KI Beratung in Leipzig – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Leipzig – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Leipzig. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Leipzig",
        "KI Lösungen Leipzig",
        "Künstliche Intelligenz Leipzig",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Leipzig",
  slug: "leipzig",
  bundesland: "Sachsen",
  publish: false,
  nearbySmall: [
    "Markkleeberg",
    "Delitzsch",
    "Schkeuditz",
    "Borna",
    "Merseburg",
    "Grimma",
    "Naumburg (Saale)",
  ],
  crossReference: [
    { name: "Dresden", slug: "dresden" },
    { name: "Halle (Saale)", slug: "halle-saale" },
    { name: "Chemnitz", slug: "chemnitz" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/leipzig",
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
