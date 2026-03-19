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
      source: "/ai-workflows-oldenburg",
      preHeadline: "AI Workflows Oldenburg",
      headline: "AI Workflows & Automatisierung in Oldenburg",
      metaTitle: "AI Workflows Oldenburg – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Oldenburg. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Oldenburg",
        "KI Automatisierung Oldenburg",
        "Workflow Automatisierung Oldenburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-oldenburg",
      preHeadline: "n8n Automation Oldenburg",
      headline: "n8n Automation in Oldenburg – Workflows automatisieren",
      metaTitle: "n8n Automation Oldenburg | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Oldenburg. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Oldenburg",
        "n8n Oldenburg",
        "Workflow Automation Oldenburg",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-oldenburg",
      preHeadline: "n8n Oldenburg",
      headline: "n8n Agentur in Oldenburg",
      metaTitle: "n8n Oldenburg – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Oldenburg. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Oldenburg und Umgebung.",
      keywords: [
        "n8n Oldenburg",
        "n8n Agentur Oldenburg",
        "n8n Beratung Oldenburg",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-oldenburg",
      preHeadline: "Automation Oldenburg",
      headline: "Automation & Prozessoptimierung in Oldenburg",
      metaTitle: "Automation Oldenburg – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Oldenburg. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Oldenburg",
        "Prozessautomatisierung Oldenburg",
        "Workflow Automation Oldenburg",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-oldenburg",
      preHeadline: "IT Dienstleister Oldenburg",
      headline: "IT Dienstleister in Oldenburg – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Oldenburg – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Oldenburg. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Oldenburg.",
      keywords: [
        "IT Dienstleister Oldenburg",
        "IT Service Oldenburg",
        "Digitalisierung Oldenburg",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-oldenburg",
      preHeadline: "KI Beratung Oldenburg",
      headline: "KI Beratung in Oldenburg – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Oldenburg – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Oldenburg. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Oldenburg",
        "KI Lösungen Oldenburg",
        "Künstliche Intelligenz Oldenburg",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Oldenburg",
  slug: "oldenburg",
  bundesland: "Niedersachsen",
  publish: false,
  nearbySmall: [
    "Delmenhorst",
    "Cloppenburg",
    "Westerstede",
    "Rastede",
    "Ganderkesee",
    "Bad Zwischenahn",
  ],
  crossReference: [
    { name: "Bremen", slug: "bremen" },
    { name: "Osnabrück", slug: "osnabrueck" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/oldenburg",
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
