import Link from "next/link";
import IntroBox from "@/components/ui/intro-box";
import SimpleGrid from "@/components/layout/simple-grid";
import GlassCard from "@/components/cards/glass-card";
import {
  GlassCardTitle,
  GlassCardDescription,
} from "@/components/cards/glass-card";
import { getPublishedCities } from "@/lib/get-city-metas";

interface CityLinksFromMetaProps {
  crossReference: { name: string; slug: string }[];
  nearbySmall: string[];
}

export function CityLinksFromMeta({
  crossReference,
  nearbySmall,
}: CityLinksFromMetaProps) {
  const publishedSlugs = new Set(getPublishedCities().map((c) => c.slug));
  const publishedCrossRef = crossReference.filter((c) =>
    publishedSlugs.has(c.slug)
  );

  return (
    <div>
      <IntroBox dark>
        <IntroBox.PreHeadline>Weitere Standorte</IntroBox.PreHeadline>
        <IntroBox.Headline>Standorte in der Nähe</IntroBox.Headline>
      </IntroBox>

      {publishedCrossRef.length > 0 && (
        <SimpleGrid cols={3} className="mt-10">
          {publishedCrossRef.map((city) => (
            <Link
              key={city.slug}
              href={`/standorte/${city.slug}`}
              className="group"
            >
              <GlassCard className="h-full">
                <GlassCardTitle className="text-xl sm:text-2xl">
                  {city.name}
                </GlassCardTitle>
                <GlassCardDescription>
                  Workflow-Automatisierung in {city.name}
                </GlassCardDescription>
              </GlassCard>
            </Link>
          ))}
        </SimpleGrid>
      )}

      {nearbySmall.length > 0 && (
        <div className="mt-10">
          <p className="text-sm font-medium uppercase tracking-widest text-blue-200/60 mb-4">
            Einzugsgebiet
          </p>
          <div className="flex flex-wrap gap-2">
            {nearbySmall.map((name) => (
              <span
                key={name}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-blue-100/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
