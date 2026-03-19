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
      source: "/ai-workflows-bochum",
      preHeadline: "AI Workflows Bochum",
      headline: "AI Workflows & Automatisierung in Bochum",
      metaTitle: "AI Workflows Bochum – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Bochum. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Bochum",
        "KI Automatisierung Bochum",
        "Workflow Automatisierung Bochum",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-bochum",
      preHeadline: "n8n Automation Bochum",
      headline: "n8n Automation in Bochum – Workflows automatisieren",
      metaTitle: "n8n Automation Bochum | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Bochum. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Bochum",
        "n8n Bochum",
        "Workflow Automation Bochum",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-bochum",
      preHeadline: "n8n Bochum",
      headline: "n8n Agentur in Bochum",
      metaTitle: "n8n Bochum – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Bochum. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Bochum und Umgebung.",
      keywords: [
        "n8n Bochum",
        "n8n Agentur Bochum",
        "n8n Beratung Bochum",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-bochum",
      preHeadline: "Automation Bochum",
      headline: "Automation & Prozessoptimierung in Bochum",
      metaTitle: "Automation Bochum – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Bochum. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Bochum",
        "Prozessautomatisierung Bochum",
        "Workflow Automation Bochum",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-bochum",
      preHeadline: "IT Dienstleister Bochum",
      headline: "IT Dienstleister in Bochum – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Bochum – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Bochum. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Bochum.",
      keywords: [
        "IT Dienstleister Bochum",
        "IT Service Bochum",
        "Digitalisierung Bochum",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-bochum",
      preHeadline: "KI Beratung Bochum",
      headline: "KI Beratung in Bochum – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Bochum – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Bochum. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Bochum",
        "KI Lösungen Bochum",
        "Künstliche Intelligenz Bochum",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Bochum",
  slug: "bochum",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Witten",
    "Hattingen",
    "Castrop-Rauxel",
    "Wetter (Ruhr)",
    "Herdecke",
    "Sprockhövel",
    "Gladbeck",
  ],
  crossReference: [
    { name: "Dortmund", slug: "dortmund" },
    { name: "Essen", slug: "essen" },
    { name: "Herne", slug: "herne" },
    { name: "Gelsenkirchen", slug: "gelsenkirchen" },
    { name: "Hagen", slug: "hagen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/bochum",
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
