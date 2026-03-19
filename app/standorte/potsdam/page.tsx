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
import { CityLinksFromMeta } from "@/components/standorte/city-links";
import type { CityMeta } from "@/lib/meta-custom";

import type { RewriteSiteConfig } from "@/lib/get-rewrites";

export const rewriteSiteConfig: RewriteSiteConfig = {
  rewrites: [
    {
      source: "/ai-workflows-potsdam",
      preHeadline: "AI Workflows Potsdam",
      headline: "AI Workflows & Automatisierung in Potsdam",
      metaTitle: "AI Workflows Potsdam – KI-Automatisierung | Bluebatch",
      metaDescription:
        "AI Workflows für Unternehmen in Potsdam. KI-gestützte Automatisierung, intelligente Prozesse und Workflow-Optimierung von Bluebatch.",
      keywords: [
        "AI Workflows Potsdam",
        "KI Automatisierung Potsdam",
        "Workflow Automatisierung Potsdam",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-automation-potsdam",
      preHeadline: "n8n Automation Potsdam",
      headline: "n8n Automation in Potsdam – Workflows automatisieren",
      metaTitle: "n8n Automation Potsdam | Bluebatch",
      metaDescription:
        "n8n Automation für Unternehmen in Potsdam. Open-Source Workflow-Automatisierung mit 1.200+ Integrationen – self-hosted und DSGVO-konform.",
      keywords: [
        "n8n Automation Potsdam",
        "n8n Potsdam",
        "Workflow Automation Potsdam",
        "Bluebatch",
      ],
    },
    {
      source: "/n8n-potsdam",
      preHeadline: "n8n Potsdam",
      headline: "n8n Agentur in Potsdam",
      metaTitle: "n8n Potsdam – Workflow-Automatisierung | Bluebatch",
      metaDescription:
        "n8n Experten in Potsdam. Workflow-Automatisierung, API-Integrationen und Prozessoptimierung für Unternehmen in Potsdam und Umgebung.",
      keywords: [
        "n8n Potsdam",
        "n8n Agentur Potsdam",
        "n8n Beratung Potsdam",
        "Bluebatch",
      ],
    },
    {
      source: "/automation-potsdam",
      preHeadline: "Automation Potsdam",
      headline: "Automation & Prozessoptimierung in Potsdam",
      metaTitle: "Automation Potsdam – Prozessoptimierung | Bluebatch",
      metaDescription:
        "Automation für Unternehmen in Potsdam. Geschäftsprozesse automatisieren, Effizienz steigern und Kosten senken mit Bluebatch.",
      keywords: [
        "Automation Potsdam",
        "Prozessautomatisierung Potsdam",
        "Workflow Automation Potsdam",
        "Bluebatch",
      ],
    },
    {
      source: "/it-dienstleister-potsdam",
      preHeadline: "IT Dienstleister Potsdam",
      headline: "IT Dienstleister in Potsdam – Automatisierung & Digitalisierung",
      metaTitle: "IT Dienstleister Potsdam – Automatisierung | Bluebatch",
      metaDescription:
        "Ihr IT Dienstleister in Potsdam. Workflow-Automatisierung, Systemintegration und digitale Prozessoptimierung für Unternehmen in Potsdam.",
      keywords: [
        "IT Dienstleister Potsdam",
        "IT Service Potsdam",
        "Digitalisierung Potsdam",
        "Bluebatch",
      ],
    },
    {
      source: "/ki-beratung-potsdam",
      preHeadline: "KI Beratung Potsdam",
      headline: "KI Beratung in Potsdam – Künstliche Intelligenz für Ihr Unternehmen",
      metaTitle: "KI Beratung Potsdam – KI-Lösungen | Bluebatch",
      metaDescription:
        "KI Beratung für Unternehmen in Potsdam. Künstliche Intelligenz, AI Agents und intelligente Automatisierung von Bluebatch.",
      keywords: [
        "KI Beratung Potsdam",
        "KI Lösungen Potsdam",
        "Künstliche Intelligenz Potsdam",
        "Bluebatch",
      ],
    },
  ],
};

export const metaCustom: CityMeta = {
  name: "Potsdam",
  slug: "potsdam",
  bundesland: "Brandenburg",
  publish: false,
  nearbySmall: [
    "Teltow",
    "Werder (Havel)",
    "Ludwigsfelde",
    "Falkensee",
    "Brandenburg an der Havel",
    "Beelitz",
  ],
  crossReference: [
    { name: "Berlin", slug: "berlin" },
  ],
};

export const metadata: Metadata = {
  title: `Workflow-Automatisierung ${metaCustom.name} | Bluebatch`,
  description: `Bluebatch ist Ihr Partner für Workflow-Automatisierung und KI-Lösungen in ${metaCustom.name}. n8n-Workflows, API-Integrationen und Prozessoptimierung für Unternehmen in ${metaCustom.name} und Umgebung.`,
  alternates: {
    canonical: "/standorte/potsdam",
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

      <ContentWrapper colorScheme="gradient-night">
        <CityLinksFromMeta
          crossReference={metaCustom.crossReference}
          nearbySmall={metaCustom.nearbySmall}
        />
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
