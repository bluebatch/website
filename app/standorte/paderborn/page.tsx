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
      source: "/ai-workflows-paderborn",
      preHeadline: "AI Workflows Paderborn",
      headline: "AI Workflows & Automatisierung in Paderborn",
      metaTitle: "AI Workflows Paderborn – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Paderborn. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Paderborn",
        "KI Automatisierung Paderborn",
        "Workflow Automatisierung Paderborn",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-paderborn",
      preHeadline: "n8n Automation Paderborn",
      headline: "n8n Automation in Paderborn – Workflows automatisieren",
      metaTitle: "n8n Automation Paderborn | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Paderborn. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Paderborn",
        "n8n Paderborn",
        "Workflow Automation Paderborn",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-paderborn",
      preHeadline: "n8n Paderborn",
      headline: "n8n Agentur in Paderborn",
      metaTitle: "n8n Paderborn – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Paderborn. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Paderborn und Umgebung.",
      keywords: [
        "n8n Paderborn",
        "n8n Agentur Paderborn",
        "n8n Beratung Paderborn",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-paderborn",
      preHeadline: "Automation Paderborn",
      headline: "Automation & Prozessoptimierung in Paderborn",
      metaTitle: "Automation Paderborn – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Paderborn. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Paderborn",
        "Prozessautomatisierung Paderborn",
        "Workflow Automation Paderborn",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-paderborn",
      preHeadline: "IT Dienstleister Paderborn",
      headline: "IT Dienstleister in Paderborn – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Paderborn – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Paderborn. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Paderborn.",
      keywords: [
        "IT Dienstleister Paderborn",
        "IT Service Paderborn",
        "Digitalisierung Paderborn",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-paderborn",
      preHeadline: "KI Beratung Paderborn",
      headline: "KI Beratung in Paderborn – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Paderborn – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Paderborn. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Paderborn",
        "KI Lösungen Paderborn",
        "Künstliche Intelligenz Paderborn",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Paderborn",
  slug: "paderborn",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Gütersloh",
    "Detmold",
    "Bad Lippspringe",
    "Delbrück",
    "Salzkotten",
    "Lippstadt",
    "Höxter",
    "Warburg",
    "Büren",
  ],
  crossReference: [
    { name: "Bielefeld", slug: "bielefeld" },
    { name: "Hamm", slug: "hamm" },
    { name: "Kassel", slug: "kassel" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/paderborn",
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
