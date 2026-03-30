import { test as base } from "@playwright/test";
import { execSync } from "child_process";
import path from "path";

export interface GA4PageData {
  sessions: number;
  bounceRate: number;
  engagementRate: number;
  conversions: number;
}

export type GA4Data = Map<string, GA4PageData>;

let _cachedGA4Data: GA4Data | null = null;

/**
 * Fetch GA4 landing page data by calling the Python bridge script.
 * Returns a Map keyed by page path (e.g. "/ki-implementierung").
 * Gracefully returns empty map if GA4 is unavailable.
 */
function fetchGA4Data(days: number = 28): GA4Data {
  if (_cachedGA4Data) return _cachedGA4Data;

  const map = new Map<string, GA4PageData>();
  const scriptPath = path.resolve(
    process.cwd(),
    "../tools/ga4-seo-analyzer/landing-pages-json.py",
  );

  try {
    const output = execSync(
      `python ${scriptPath} --days ${days}`,
      {
        encoding: "utf-8",
        timeout: 30_000,
        cwd: path.dirname(scriptPath),
      },
    );

    const rows: {
      page: string;
      sessions: number;
      bounceRate: number;
      engagementRate: number;
      conversions: number;
    }[] = JSON.parse(output);

    for (const row of rows) {
      // Normalize: strip trailing slash, keep leading slash
      let pagePath = row.page;
      if (pagePath !== "/" && pagePath.endsWith("/")) {
        pagePath = pagePath.slice(0, -1);
      }
      map.set(pagePath, {
        sessions: row.sessions,
        bounceRate: row.bounceRate,
        engagementRate: row.engagementRate,
        conversions: row.conversions,
      });
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn(`[SEO Tests] GA4 data unavailable: ${message}`);
    console.warn("[SEO Tests] Tests will run without GA4 weighting.");
  }

  _cachedGA4Data = map;
  return map;
}

/**
 * Extended Playwright test with GA4 data fixture.
 * GA4 data is fetched once and shared across all tests in the suite.
 */
export const test = base.extend<{ ga4Data: GA4Data }>({
  ga4Data: async ({}, use) => {
    const data = fetchGA4Data();
    await use(data);
  },
});

export { expect } from "@playwright/test";
