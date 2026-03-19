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
      source: "/ai-workflows-bielefeld",
      preHeadline: "AI Workflows Bielefeld",
      headline: "AI Workflows & Automatisierung in Bielefeld",
      metaTitle: "AI Workflows Bielefeld – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Bielefeld. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Bielefeld",
        "KI Automatisierung Bielefeld",
        "Workflow Automatisierung Bielefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-bielefeld",
      preHeadline: "n8n Automation Bielefeld",
      headline: "n8n Automation in Bielefeld – Workflows automatisieren",
      metaTitle: "n8n Automation Bielefeld | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Bielefeld. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Bielefeld",
        "n8n Bielefeld",
        "Workflow Automation Bielefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-bielefeld",
      preHeadline: "n8n Bielefeld",
      headline: "n8n Agentur in Bielefeld",
      metaTitle: "n8n Bielefeld – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Bielefeld. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Bielefeld und Umgebung.",
      keywords: [
        "n8n Bielefeld",
        "n8n Agentur Bielefeld",
        "n8n Beratung Bielefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-bielefeld",
      preHeadline: "Automation Bielefeld",
      headline: "Automation & Prozessoptimierung in Bielefeld",
      metaTitle: "Automation Bielefeld – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Bielefeld. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Bielefeld",
        "Prozessautomatisierung Bielefeld",
        "Workflow Automation Bielefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-bielefeld",
      preHeadline: "IT Dienstleister Bielefeld",
      headline: "IT Dienstleister in Bielefeld – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Bielefeld – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Bielefeld. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Bielefeld.",
      keywords: [
        "IT Dienstleister Bielefeld",
        "IT Service Bielefeld",
        "Digitalisierung Bielefeld",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-bielefeld",
      preHeadline: "KI Beratung Bielefeld",
      headline: "KI Beratung in Bielefeld – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Bielefeld – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Bielefeld. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Bielefeld",
        "KI Lösungen Bielefeld",
        "Künstliche Intelligenz Bielefeld",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Bielefeld",
  slug: "bielefeld",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Gütersloh",
    "Herford",
    "Detmold",
    "Minden",
    "Bad Salzuflen",
    "Lemgo",
    "Bünde",
    "Löhne",
    "Lage",
    "Enger",
    "Halle (Westfalen)",
    "Rheda-Wiedenbrück",
    "Schloß Holte-Stukenbrock",
    "Versmold",
  ],
  crossReference: [
    { name: "Münster", slug: "muenster" },
    { name: "Paderborn", slug: "paderborn" },
    { name: "Osnabrück", slug: "osnabrueck" },
    { name: "Hannover", slug: "hannover" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/bielefeld",
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
