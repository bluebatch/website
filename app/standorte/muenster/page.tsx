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
      source: "/ai-workflows-muenster",
      preHeadline: "AI Workflows Münster",
      headline: "AI Workflows & Automatisierung in Münster",
      metaTitle: "AI Workflows Münster – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Münster. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Münster",
        "KI Automatisierung Münster",
        "Workflow Automatisierung Münster",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-muenster",
      preHeadline: "n8n Automation Münster",
      headline: "n8n Automation in Münster – Workflows automatisieren",
      metaTitle: "n8n Automation Münster | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Münster. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Münster",
        "n8n Münster",
        "Workflow Automation Münster",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-muenster",
      preHeadline: "n8n Münster",
      headline: "n8n Agentur in Münster",
      metaTitle: "n8n Münster – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Münster. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Münster und Umgebung.",
      keywords: [
        "n8n Münster",
        "n8n Agentur Münster",
        "n8n Beratung Münster",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-muenster",
      preHeadline: "Automation Münster",
      headline: "Automation & Prozessoptimierung in Münster",
      metaTitle: "Automation Münster – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Münster. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Münster",
        "Prozessautomatisierung Münster",
        "Workflow Automation Münster",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-muenster",
      preHeadline: "IT Dienstleister Münster",
      headline: "IT Dienstleister in Münster – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Münster – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Münster. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Münster.",
      keywords: [
        "IT Dienstleister Münster",
        "IT Service Münster",
        "Digitalisierung Münster",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-muenster",
      preHeadline: "KI Beratung Münster",
      headline: "KI Beratung in Münster – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Münster – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Münster. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Münster",
        "KI Lösungen Münster",
        "Künstliche Intelligenz Münster",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Münster",
  slug: "muenster",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Greven",
    "Emsdetten",
    "Steinfurt",
    "Warendorf",
    "Coesfeld",
    "Dülmen",
    "Ahlen",
    "Rheine",
    "Ibbenbüren",
    "Telgte",
  ],
  crossReference: [
    { name: "Bielefeld", slug: "bielefeld" },
    { name: "Osnabrück", slug: "osnabrueck" },
    { name: "Dortmund", slug: "dortmund" },
    { name: "Hamm", slug: "hamm" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/muenster",
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
