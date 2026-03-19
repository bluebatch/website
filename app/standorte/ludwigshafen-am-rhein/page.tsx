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
      source: "/ai-workflows-ludwigshafen-am-rhein",
      preHeadline: "AI Workflows Ludwigshafen am Rhein",
      headline: "AI Workflows & Automatisierung in Ludwigshafen am Rhein",
      metaTitle: "AI Workflows Ludwigshafen am Rhein – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Ludwigshafen am Rhein. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Ludwigshafen am Rhein",
        "KI Automatisierung Ludwigshafen am Rhein",
        "Workflow Automatisierung Ludwigshafen am Rhein",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-ludwigshafen-am-rhein",
      preHeadline: "n8n Automation Ludwigshafen am Rhein",
      headline: "n8n Automation in Ludwigshafen am Rhein – Workflows automatisieren",
      metaTitle: "n8n Automation Ludwigshafen am Rhein | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Ludwigshafen am Rhein. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Ludwigshafen am Rhein",
        "n8n Ludwigshafen am Rhein",
        "Workflow Automation Ludwigshafen am Rhein",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-ludwigshafen-am-rhein",
      preHeadline: "n8n Ludwigshafen am Rhein",
      headline: "n8n Agentur in Ludwigshafen am Rhein",
      metaTitle: "n8n Ludwigshafen am Rhein – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Ludwigshafen am Rhein. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Ludwigshafen am Rhein und Umgebung.",
      keywords: [
        "n8n Ludwigshafen am Rhein",
        "n8n Agentur Ludwigshafen am Rhein",
        "n8n Beratung Ludwigshafen am Rhein",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-ludwigshafen-am-rhein",
      preHeadline: "Automation Ludwigshafen am Rhein",
      headline: "Automation & Prozessoptimierung in Ludwigshafen am Rhein",
      metaTitle: "Automation Ludwigshafen am Rhein – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Ludwigshafen am Rhein. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Ludwigshafen am Rhein",
        "Prozessautomatisierung Ludwigshafen am Rhein",
        "Workflow Automation Ludwigshafen am Rhein",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-ludwigshafen-am-rhein",
      preHeadline: "IT Dienstleister Ludwigshafen am Rhein",
      headline: "IT Dienstleister in Ludwigshafen am Rhein – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Ludwigshafen am Rhein – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Ludwigshafen am Rhein. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Ludwigshafen am Rhein.",
      keywords: [
        "IT Dienstleister Ludwigshafen am Rhein",
        "IT Service Ludwigshafen am Rhein",
        "Digitalisierung Ludwigshafen am Rhein",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-ludwigshafen-am-rhein",
      preHeadline: "KI Beratung Ludwigshafen am Rhein",
      headline: "KI Beratung in Ludwigshafen am Rhein – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Ludwigshafen am Rhein – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Ludwigshafen am Rhein. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Ludwigshafen am Rhein",
        "KI Lösungen Ludwigshafen am Rhein",
        "Künstliche Intelligenz Ludwigshafen am Rhein",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Ludwigshafen am Rhein",
  slug: "ludwigshafen-am-rhein",
  bundesland: "Rheinland-Pfalz",
  publish: false,
  nearbySmall: [
    "Frankenthal",
    "Speyer",
    "Worms",
    "Neustadt an der Weinstraße",
    "Schwetzingen",
    "Schifferstadt",
    "Mutterstadt",
    "Lampertheim",
  ],
  crossReference: [
    { name: "Mannheim", slug: "mannheim" },
    { name: "Heidelberg", slug: "heidelberg" },
    { name: "Karlsruhe", slug: "karlsruhe" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/ludwigshafen-am-rhein",
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
