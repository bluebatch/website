import pageLastmod from "./page-lastmod.json";

/**
 * Letztes Aenderungsdatum einer Route (YYYY-MM-DD) aus der eingecheckten
 * lib/page-lastmod.json — erzeugt von scripts/generate-page-lastmod.mjs aus
 * dem letzten Commit an der page.tsx. Gemeinsame Quelle fuer die Sitemap
 * (lastModified) und das Article-Schema (dateModified), damit beide dasselbe
 * Datum melden.
 *
 * Nie `new Date()` als Ersatz: ein Datum, das bei jedem Build springt oder
 * fuer alle URLs gleich ist, ignoriert Google dokumentiert — und genau so
 * stand die Site bis 2026-09-16 da (210 URLs, eine lastmod).
 */
const table: Record<string, string> = pageLastmod;

export function getPageLastmod(routePath: string): string | undefined {
  const key = routePath === "" ? "/" : routePath.replace(/\/+$/, "") || "/";
  return table[key];
}

/**
 * dateModified darf nie vor datePublished liegen: eine Seite, die im Staging
 * gebaut und spaeter per Rename veroeffentlicht wurde, traegt als letzten
 * Commit den Rename — der liegt auf dem Publish-Tag, nicht davor. Fuer den
 * Fall alter Zeilen ohne Eintrag faellt es auf datePublished zurueck.
 */
export function resolveDateModified(
  datePublished: string,
  routePath: string,
  updated?: string,
): string {
  const candidate = updated ?? getPageLastmod(routePath) ?? datePublished;
  return candidate < datePublished ? datePublished : candidate;
}
