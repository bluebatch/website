import fs from "fs";
import path from "path";

export interface CityEntry {
  name: string;
  slug: string;
  bundesland: string;
  publish: boolean;
}

/**
 * Reads all city page.tsx files at build/request time and extracts
 * metaCustom fields (name, slug, bundesland, publish) via regex.
 *
 * This avoids importing 80+ page modules and keeps each city's
 * page.tsx as the single source of truth for publish status.
 */
export function getAllCities(): CityEntry[] {
  const standorteDir = path.join(process.cwd(), "app/standorte");
  const entries: CityEntry[] = [];

  for (const dir of fs.readdirSync(standorteDir, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;

    const pagePath = path.join(standorteDir, dir.name, "page.tsx");
    if (!fs.existsSync(pagePath)) continue;

    const content = fs.readFileSync(pagePath, "utf-8");

    // Extract metaCustom fields
    const nameMatch = content.match(/name:\s*"([^"]+)"/);
    const bundeslandMatch = content.match(/bundesland:\s*"([^"]+)"/);
    const publishMatch = content.match(/publish:\s*(true|false)/);

    if (!nameMatch || !bundeslandMatch || !publishMatch) continue;

    entries.push({
      name: nameMatch[1],
      slug: dir.name,
      bundesland: bundeslandMatch[1],
      publish: publishMatch[1] === "true",
    });
  }

  return entries.sort((a, b) => a.name.localeCompare(b.name, "de"));
}

export function getPublishedCities(): CityEntry[] {
  return getAllCities().filter((c) => c.publish);
}

export function getCitiesByBundesland(publishedOnly = true) {
  const cities = publishedOnly ? getPublishedCities() : getAllCities();
  const grouped: Record<string, CityEntry[]> = {};

  for (const city of cities) {
    if (!grouped[city.bundesland]) grouped[city.bundesland] = [];
    grouped[city.bundesland].push(city);
  }

  // Sort bundesland keys alphabetically
  return Object.fromEntries(
    Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b, "de"))
  );
}
