import type { Metadata } from "next";
import Link from "next/link";
import ContentWrapper from "@/components/layout/content-wrapper";
import Hero2Column, {
  Hero2ColumnTextColumn,
  Hero2ColumnHeadline,
  Hero2ColumnDescription,
  Hero2ColumnPreHeadline,
} from "@/components/heroes/hero-2-column";
import ConsultationCtaDefault from "@/components/sections/consultation-cta-default";
import IntroBox from "@/components/ui/intro-box";
import TabGroup, {
  TabNavigation,
  TabItem,
  TabContent,
} from "@/components/ui/tab-group";
import { getCitiesByBundesland, getPublishedCities } from "@/lib/get-city-metas";

export const metadata: Metadata = {
  title: "Automatisierungs Agentur — Workflow-Automatisierung in ganz Deutschland | Bluebatch",
  description:
    "Bluebatch ist Ihre Automatisierungs Agentur für Unternehmen in ganz Deutschland. Finden Sie Ihren Standort — von Berlin bis München.",
  alternates: {
    canonical: "/standorte",
  },
};

export default function StandortePage() {
  const citiesByBundesland = getCitiesByBundesland();
  const allPublished = getPublishedCities();

  return (
    <>
      <ContentWrapper isFirstSection>
        <Hero2Column>
          <Hero2ColumnTextColumn>
            <Hero2ColumnPreHeadline>Standorte</Hero2ColumnPreHeadline>
            <Hero2ColumnHeadline>
              Ihre Automatisierungs Agentur in ganz Deutschland
            </Hero2ColumnHeadline>
            <Hero2ColumnDescription>
              Als erfahrene Automatisierungs Agentur unterstützt Bluebatch
              Unternehmen in über 80 deutschen Städten bei der Automatisierung
              ihrer Geschäftsprozesse. Remote-first, aber immer nah an Ihnen.
            </Hero2ColumnDescription>
          </Hero2ColumnTextColumn>
        </Hero2Column>
      </ContentWrapper>

      {/* All Cities by Bundesland */}
      <ContentWrapper>
        <IntroBox>
          <IntroBox.PreHeadline>Alle Standorte</IntroBox.PreHeadline>
          <IntroBox.Headline>Ihre Automatisierungs Agentur — alle Städte nach Bundesland</IntroBox.Headline>
          <IntroBox.Subline>
            Finden Sie Ihren Standort — als Automatisierungs Agentur sind wir
            in jeder deutschen Großstadt für Sie da. Ob n8n-Workflows,
            KI-Integrationen oder Prozessoptimierung: Bluebatch ist die
            Automatisierungs Agentur, die Ihre Geschäftsprozesse effizient
            digitalisiert. Vertrauen Sie auf eine spezialisierte
            Automatisierungs Agentur mit Erfahrung in über 80 Städten.
          </IntroBox.Subline>
        </IntroBox>

        <div className="mt-12">
          <TabGroup defaultValue="alle">
            <TabNavigation className="flex-wrap gap-1">
              <TabItem value="alle">Alle</TabItem>
              {Object.keys(citiesByBundesland).map((bl) => (
                <TabItem key={bl} value={bl}>
                  {bl}
                </TabItem>
              ))}
            </TabNavigation>

            <TabContent value="alle">
              <div className="grid grid-cols-2 gap-x-8 gap-y-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {allPublished.map((city) => (
                  <Link
                    key={city.slug}
                    href={`/standorte/${city.slug}`}
                    className="py-1 text-sm text-primary-600 hover:text-primary-800 hover:underline"
                  >
                    {city.name}
                  </Link>
                ))}
              </div>
            </TabContent>

            {Object.entries(citiesByBundesland).map(
              ([bundesland, cities]) => (
                <TabContent key={bundesland} value={bundesland}>
                  <div className="grid grid-cols-2 gap-x-8 gap-y-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/standorte/${city.slug}`}
                        className="py-1 text-sm text-primary-600 hover:text-primary-800 hover:underline"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </TabContent>
              ),
            )}
          </TabGroup>
        </div>
      </ContentWrapper>

      <ContentWrapper noPadding bodyWidth="full">
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
