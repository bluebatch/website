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
      source: "/ai-workflows-pforzheim",
      preHeadline: "AI Workflows Pforzheim",
      headline: "AI Workflows & Automatisierung in Pforzheim",
      metaTitle: "AI Workflows Pforzheim – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Pforzheim. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Pforzheim",
        "KI Automatisierung Pforzheim",
        "Workflow Automatisierung Pforzheim",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-pforzheim",
      preHeadline: "n8n Automation Pforzheim",
      headline: "n8n Automation in Pforzheim – Workflows automatisieren",
      metaTitle: "n8n Automation Pforzheim | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Pforzheim. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Pforzheim",
        "n8n Pforzheim",
        "Workflow Automation Pforzheim",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-pforzheim",
      preHeadline: "n8n Pforzheim",
      headline: "n8n Agentur in Pforzheim",
      metaTitle: "n8n Pforzheim – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Pforzheim. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Pforzheim und Umgebung.",
      keywords: [
        "n8n Pforzheim",
        "n8n Agentur Pforzheim",
        "n8n Beratung Pforzheim",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-pforzheim",
      preHeadline: "Automation Pforzheim",
      headline: "Automation & Prozessoptimierung in Pforzheim",
      metaTitle: "Automation Pforzheim – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Pforzheim. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Pforzheim",
        "Prozessautomatisierung Pforzheim",
        "Workflow Automation Pforzheim",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-pforzheim",
      preHeadline: "IT Dienstleister Pforzheim",
      headline: "IT Dienstleister in Pforzheim – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Pforzheim – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Pforzheim. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Pforzheim.",
      keywords: [
        "IT Dienstleister Pforzheim",
        "IT Service Pforzheim",
        "Digitalisierung Pforzheim",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-pforzheim",
      preHeadline: "KI Beratung Pforzheim",
      headline: "KI Beratung in Pforzheim – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Pforzheim – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Pforzheim. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Pforzheim",
        "KI Lösungen Pforzheim",
        "Künstliche Intelligenz Pforzheim",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Pforzheim",
  slug: "pforzheim",
  bundesland: "Baden-Württemberg",
  publish: false,
  nearbySmall: [
    "Mühlacker",
    "Bretten",
    "Vaihingen an der Enz",
    "Calw",
    "Bruchsal",
    "Ettlingen",
    "Remchingen",
  ],
  crossReference: [
    { name: "Karlsruhe", slug: "karlsruhe" },
    { name: "Stuttgart", slug: "stuttgart" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/pforzheim",
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
