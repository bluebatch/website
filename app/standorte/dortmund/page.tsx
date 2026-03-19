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
      source: "/ai-workflows-dortmund",
      preHeadline: "AI Workflows Dortmund",
      headline: "AI Workflows & Automatisierung in Dortmund",
      metaTitle: "AI Workflows Dortmund – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Dortmund. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Dortmund",
        "KI Automatisierung Dortmund",
        "Workflow Automatisierung Dortmund",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-dortmund",
      preHeadline: "n8n Automation Dortmund",
      headline: "n8n Automation in Dortmund – Workflows automatisieren",
      metaTitle: "n8n Automation Dortmund | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Dortmund. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Dortmund",
        "n8n Dortmund",
        "Workflow Automation Dortmund",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-dortmund",
      preHeadline: "n8n Dortmund",
      headline: "n8n Agentur in Dortmund",
      metaTitle: "n8n Dortmund – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Dortmund. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Dortmund und Umgebung.",
      keywords: [
        "n8n Dortmund",
        "n8n Agentur Dortmund",
        "n8n Beratung Dortmund",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-dortmund",
      preHeadline: "Automation Dortmund",
      headline: "Automation & Prozessoptimierung in Dortmund",
      metaTitle: "Automation Dortmund – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Dortmund. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Dortmund",
        "Prozessautomatisierung Dortmund",
        "Workflow Automation Dortmund",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-dortmund",
      preHeadline: "IT Dienstleister Dortmund",
      headline: "IT Dienstleister in Dortmund – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Dortmund – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Dortmund. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Dortmund.",
      keywords: [
        "IT Dienstleister Dortmund",
        "IT Service Dortmund",
        "Digitalisierung Dortmund",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-dortmund",
      preHeadline: "KI Beratung Dortmund",
      headline: "KI Beratung in Dortmund – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Dortmund – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Dortmund. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Dortmund",
        "KI Lösungen Dortmund",
        "Künstliche Intelligenz Dortmund",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Dortmund",
  slug: "dortmund",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Witten",
    "Lünen",
    "Unna",
    "Schwerte",
    "Castrop-Rauxel",
    "Kamen",
    "Werne",
    "Iserlohn",
    "Bergkamen",
    "Herdecke",
    "Wetter (Ruhr)",
    "Selm",
    "Waltrop",
  ],
  crossReference: [
    { name: "Bochum", slug: "bochum" },
    { name: "Essen", slug: "essen" },
    { name: "Hagen", slug: "hagen" },
    { name: "Hamm", slug: "hamm" },
    { name: "Herne", slug: "herne" },
    { name: "Recklinghausen", slug: "recklinghausen" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/dortmund",
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
