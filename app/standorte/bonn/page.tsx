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
      source: "/ai-workflows-bonn",
      preHeadline: "AI Workflows Bonn",
      headline: "AI Workflows & Automatisierung in Bonn",
      metaTitle: "AI Workflows Bonn - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Bonn. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Bonn",
        "KI Automatisierung Bonn",
        "Workflow Automatisierung Bonn",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-bonn",
      preHeadline: "n8n Automation Bonn",
      headline: "n8n Automation in Bonn - Workflows automatisieren",
      metaTitle: "n8n Automation Bonn | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Bonn. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Bonn",
        "n8n Bonn",
        "Workflow Automation Bonn",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-bonn",
      preHeadline: "n8n Bonn",
      headline: "n8n Agentur in Bonn",
      metaTitle: "n8n Bonn - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Bonn. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Bonn und Umgebung.",
      keywords: [
        "n8n Bonn",
        "n8n Agentur Bonn",
        "n8n Beratung Bonn",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-bonn",
      preHeadline: "Automation Bonn",
      headline: "Automation & Prozessoptimierung in Bonn",
      metaTitle: "Automation Bonn - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Bonn. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Bonn",
        "Prozessautomatisierung Bonn",
        "Workflow Automation Bonn",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-bonn",
      preHeadline: "IT Dienstleister Bonn",
      headline: "IT Dienstleister in Bonn - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Bonn - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Bonn. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Bonn.",
      keywords: [
        "IT Dienstleister Bonn",
        "IT Service Bonn",
        "Digitalisierung Bonn",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-bonn",
      preHeadline: "KI Beratung Bonn",
      headline: "KI Beratung in Bonn - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Bonn - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Bonn. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Bonn",
        "KI Lösungen Bonn",
        "Künstliche Intelligenz Bonn",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Bonn",
  slug: "bonn",
  bundesland: "Nordrhein-Westfalen",
  publish: false,
  nearbySmall: [
    "Troisdorf",
    "Sankt Augustin",
    "Siegburg",
    "Königswinter",
    "Bornheim",
    "Bad Honnef",
    "Hennef (Sieg)",
    "Meckenheim",
    "Niederkassel",
    "Lohmar",
    "Rheinbach",
    "Wesseling",
    "Brühl",
  ],
  crossReference: [
    { name: "Köln", slug: "koeln" },
    { name: "Leverkusen", slug: "leverkusen" },
    { name: "Koblenz", slug: "koblenz" },
    { name: "Siegburg", slug: "siegburg" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/bonn",
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
