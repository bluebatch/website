import type { ToolSlug } from "@/lib/tool-comparison-data";
import { toolSchemaData } from "@/lib/tool-schema-data";

const SITE_ORIGIN = "https://bluebatch.io";

type SoftwareApplicationSchemaProps = {
  /** Slug der Tool-Seite; alles Weitere kommt aus lib/tool-schema-data.ts */
  slug: ToolSlug;
};

/**
 * SoftwareApplication-JSON-LD für die Tool-Seiten unter /services/tools/.
 *
 * Die Seite braucht nur den Slug zu nennen, Inhalt und Pflege liegen zentral
 * in `lib/tool-schema-data.ts` — sonst hängt die Auszeichnung wie früher die
 * GeoSummary jahrelang bei einem Teil der Seiten.
 *
 * Nur für Seiten, deren beschriebene Hauptentität das Produkt selbst ist
 * (die neun Seiten unter `(automation-tools)`). Die Seiten unter
 * `(grosshandel)` beschreiben unsere Automatisierungsleistung für ein
 * Fremdsystem, nicht das Fremdsystem — dort wäre die Auszeichnung eine
 * falsche Aussage.
 */
export default function SoftwareApplicationSchema({
  slug,
}: SoftwareApplicationSchemaProps) {
  const entry = toolSchemaData[slug];
  if (!entry) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: entry.name,
    description: entry.description,
    applicationCategory: entry.applicationCategory,
    operatingSystem: entry.operatingSystem,
    url: `${SITE_ORIGIN}/services/tools/${slug}`,
    provider: {
      "@type": "Organization",
      name: entry.provider.name,
      url: entry.provider.url,
    },
    ...(entry.lowPrice
      ? {
          offers: {
            "@type": "Offer",
            price: entry.lowPrice.price,
            priceCurrency: entry.lowPrice.currency,
          },
        }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
