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
      source: "/ai-workflows-stuttgart",
      preHeadline: "AI Workflows Stuttgart",
      headline: "AI Workflows & Automatisierung in Stuttgart",
      metaTitle: "AI Workflows Stuttgart – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Stuttgart. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Stuttgart",
        "KI Automatisierung Stuttgart",
        "Workflow Automatisierung Stuttgart",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-stuttgart",
      preHeadline: "n8n Automation Stuttgart",
      headline: "n8n Automation in Stuttgart – Workflows automatisieren",
      metaTitle: "n8n Automation Stuttgart | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Stuttgart. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Stuttgart",
        "n8n Stuttgart",
        "Workflow Automation Stuttgart",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-stuttgart",
      preHeadline: "n8n Stuttgart",
      headline: "n8n Agentur in Stuttgart",
      metaTitle: "n8n Stuttgart – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Stuttgart. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Stuttgart und Umgebung.",
      keywords: [
        "n8n Stuttgart",
        "n8n Agentur Stuttgart",
        "n8n Beratung Stuttgart",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-stuttgart",
      preHeadline: "Automation Stuttgart",
      headline: "Automation & Prozessoptimierung in Stuttgart",
      metaTitle: "Automation Stuttgart – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Stuttgart. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Stuttgart",
        "Prozessautomatisierung Stuttgart",
        "Workflow Automation Stuttgart",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-stuttgart",
      preHeadline: "IT Dienstleister Stuttgart",
      headline: "IT Dienstleister in Stuttgart – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Stuttgart – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Stuttgart. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Stuttgart.",
      keywords: [
        "IT Dienstleister Stuttgart",
        "IT Service Stuttgart",
        "Digitalisierung Stuttgart",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-stuttgart",
      preHeadline: "KI Beratung Stuttgart",
      headline: "KI Beratung in Stuttgart – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Stuttgart – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Stuttgart. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Stuttgart",
        "KI Lösungen Stuttgart",
        "Künstliche Intelligenz Stuttgart",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Stuttgart",
  slug: "stuttgart",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Waiblingen",
    "Fellbach",
    "Leonberg",
    "Filderstadt",
    "Backnang",
    "Schorndorf",
    "Kornwestheim",
  ],
  crossReference: [
    { name: "Karlsruhe", slug: "karlsruhe" },
    { name: "Pforzheim", slug: "pforzheim" },
    { name: "Heilbronn", slug: "heilbronn" },
    { name: "Reutlingen", slug: "reutlingen" },
    { name: "Tübingen", slug: "tuebingen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/stuttgart",
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
