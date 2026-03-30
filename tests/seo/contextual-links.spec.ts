/**
 * Test 2: Contextual Links (Body vs Nav)
 *
 * Checks that pages have real internal links inside <main>/<article>,
 * not just nav/footer links. High-traffic pages (via GA4) need more.
 */

import { test, expect } from "./fixtures";
import { seoConfig } from "./seo-config";
import { collectPageLinks, verdict, reportScore } from "./helpers";
import { crawlSite, normalizePathname, BASE_URL } from "../helpers/crawl";

const cfg = seoConfig.contextualLinks;

test("Contextual Links — body links per page", async ({ page, ga4Data }) => {
  // Crawl site to get all pages
  const crawled = await crawlSite(page);
  const pages = crawled.filter(
    (p) => p.status >= 200 && p.status < 400 && !p.redirected,
  );

  console.log(`\nChecking ${pages.length} pages for contextual links:\n`);

  let passing = 0;
  let total = 0;
  const failures: { url: string; bodyLinks: number; required: number }[] = [];

  for (const crawledPage of pages) {
    const pathname = crawledPage.finalPathname;

    await page.goto(`${BASE_URL}${pathname}`, {
      waitUntil: "domcontentloaded",
      timeout: 30_000,
    });

    const links = await collectPageLinks(page);
    const bodyLinks = links.filter((l) => l.location === "body");
    const bodyLinkCount = bodyLinks.length;

    // Determine required threshold based on GA4 traffic
    const ga4 = ga4Data.get(pathname);
    const isHighTraffic = ga4 && ga4.sessions >= seoConfig.ga4.highTrafficThreshold;
    const required = isHighTraffic ? cfg.minLinksHighTrafficPage : cfg.minLinksPerPage;

    total++;
    if (bodyLinkCount >= required) {
      passing++;
    } else {
      failures.push({ url: pathname, bodyLinks: bodyLinkCount, required });
    }
  }

  // Log failures
  if (failures.length > 0) {
    console.log("Pages below threshold:");
    for (const f of failures.slice(0, 20)) {
      const ga4 = ga4Data.get(f.url);
      const traffic = ga4 ? ` (${ga4.sessions} sessions)` : "";
      console.log(`  ${f.url}: ${f.bodyLinks} body links, need ${f.required}${traffic}`);
    }
    if (failures.length > 20) {
      console.log(`  ... and ${failures.length - 20} more`);
    }
    console.log();
  }

  const score = total > 0 ? Math.round((passing / total) * 100) : 100;

  const details = failures.map((f) => `${f.url}: ${f.bodyLinks} body links, need ${f.required}`);
  reportScore("Contextual Links", score, cfg.passThreshold, details);
  console.log(`Pages passing: ${passing}/${total}`);
  console.log(verdict(score, cfg.passThreshold));
  expect(score).toBeGreaterThanOrEqual(cfg.passThreshold);
});
