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
      source: "/ai-workflows-osnabrueck",
      preHeadline: "AI Workflows Osnabrück",
      headline: "AI Workflows & Automatisierung in Osnabrück",
      metaTitle: "AI Workflows Osnabrück - KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Osnabrück. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Osnabrück",
        "KI Automatisierung Osnabrück",
        "Workflow Automatisierung Osnabrück",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-osnabrueck",
      preHeadline: "n8n Automation Osnabrück",
      headline: "n8n Automation in Osnabrück - Workflows automatisieren",
      metaTitle: "n8n Automation Osnabrück | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Osnabrück. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen - self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Osnabrück",
        "n8n Osnabrück",
        "Workflow Automation Osnabrück",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-osnabrueck",
      preHeadline: "n8n Osnabrück",
      headline: "n8n Agentur in Osnabrück",
      metaTitle: "n8n Osnabrück - Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Osnabrück. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Osnabrück und Umgebung.",
      keywords: [
        "n8n Osnabrück",
        "n8n Agentur Osnabrück",
        "n8n Beratung Osnabrück",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-osnabrueck",
      preHeadline: "Automation Osnabrück",
      headline: "Automation & Prozessoptimierung in Osnabrück",
      metaTitle: "Automation Osnabrück - Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Osnabrück. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Osnabrück",
        "Prozessautomatisierung Osnabrück",
        "Workflow Automation Osnabrück",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-osnabrueck",
      preHeadline: "IT Dienstleister Osnabrück",
      headline: "IT Dienstleister in Osnabrück - Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Osnabrück - Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Osnabrück. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Osnabrück.",
      keywords: [
        "IT Dienstleister Osnabrück",
        "IT Service Osnabrück",
        "Digitalisierung Osnabrück",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-osnabrueck",
      preHeadline: "KI Beratung Osnabrück",
      headline: "KI Beratung in Osnabrück - Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Osnabrück - KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Osnabrück. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Osnabrück",
        "KI Lösungen Osnabrück",
        "Künstliche Intelligenz Osnabrück",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Osnabrück",
  slug: "osnabrueck",
  bundesland: "Niedersachsen",
  publish: false,
  nearbySmall: [
    "Melle",
    "Ibbenbüren",
    "Georgsmarienhütte",
    "Rheine",
    "Lengerich",
    "Bad Oeynhausen",
  ],
  crossReference: [
    { name: "Münster", slug: "muenster" },
    { name: "Bielefeld", slug: "bielefeld" },
    { name: "Oldenburg", slug: "oldenburg" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/osnabrueck",
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
