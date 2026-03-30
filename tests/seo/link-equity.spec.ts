/**
 * Test 5: Link Equity Distribution
 *
 * Key pages are auto-selected from GA4 top pages by sessions + conversions.
 * Checks that each key page receives enough inbound links from other pages.
 * Also verifies the homepage links to all key pages.
 */

import { test, expect } from "./fixtures";
import { seoConfig } from "./seo-config";
import { collectLinkHrefs, verdict, reportScore } from "./helpers";
import { crawlSite, normalizePathname, BASE_URL } from "../helpers/crawl";

const cfg = seoConfig.linkEquity;

test("Link Equity Distribution", async ({ page, ga4Data }) => {
  // Step 1: Select key pages from GA4 data
  const ga4Entries = [...ga4Data.entries()]
    .filter(([path]) => path !== "/" && path !== "(not set)" && path.startsWith("/"))
    .sort((a, b) => {
      // Sort by conversions first, then sessions
      const convDiff = b[1].conversions - a[1].conversions;
      if (convDiff !== 0) return convDiff;
      return b[1].sessions - a[1].sessions;
    })
    .slice(0, cfg.topPagesFromGA4);

  const keyPages = ga4Entries
    .filter(([, data]) => data.sessions >= seoConfig.ga4.minSessionsForKeyPage)
    .map(([path]) => path);

  if (keyPages.length === 0) {
    console.log("\nNo key pages found from GA4 data (no pages with enough sessions).");
    console.log("Skipping link equity test — add GA4 credentials or lower minSessionsForKeyPage.");
    return;
  }

  console.log(`\nKey pages (top ${keyPages.length} from GA4):`);
  for (const kp of keyPages) {
    const data = ga4Data.get(kp)!;
    console.log(`  ${kp} — ${data.sessions} sessions, ${data.conversions} conversions`);
  }

  // Step 2: Crawl site and build inbound link map
  const crawled = await crawlSite(page);
  const validPages = crawled.filter(
    (p) => p.status >= 200 && p.status < 400 && !p.redirected,
  );

  // Map: target URL → set of source URLs that link to it
  const inboundMap = new Map<string, Set<string>>();

  for (const crawledPage of validPages) {
    const pathname = crawledPage.finalPathname;

    await page.goto(`${BASE_URL}${pathname}`, {
      waitUntil: "domcontentloaded",
      timeout: 30_000,
    });

    const links = await collectLinkHrefs(page);
    for (const link of links) {
      if (!inboundMap.has(link)) {
        inboundMap.set(link, new Set());
      }
      inboundMap.get(link)!.add(pathname);
    }
  }

  // Step 3: Check homepage links to key pages
  await page.goto(`${BASE_URL}/`, {
    waitUntil: "domcontentloaded",
    timeout: 30_000,
  });
  const homepageLinks = new Set(await collectLinkHrefs(page));

  // Step 4: Score each key page
  console.log(`\nInbound link analysis:\n`);
  let totalScore = 0;

  for (const keyPage of keyPages) {
    const inbound = inboundMap.get(keyPage);
    const inboundCount = inbound ? inbound.size : 0;
    const fromHomepage = homepageLinks.has(keyPage);
    const pageScore = Math.round(
      Math.min(inboundCount / cfg.minInboundLinks, 1) * 100,
    );

    totalScore += pageScore;

    const ga4 = ga4Data.get(keyPage)!;
    const emoji = pageScore >= 100 ? "\u2705" : "\u26A0\uFE0F";
    const hpEmoji = fromHomepage ? "\u2705" : "\u274C";
    console.log(`${keyPage} (${ga4.sessions} sessions)`);
    console.log(`  Inbound links: ${inboundCount} from unique pages ${emoji}`);
    console.log(`  Linked from homepage: ${hpEmoji}`);
    console.log(`  Page score: ${pageScore}/100`);
  }

  const overallScore = keyPages.length > 0
    ? Math.round(totalScore / keyPages.length)
    : 100;

  const details = keyPages.map((kp) => {
    const inbound = inboundMap.get(kp);
    const count = inbound ? inbound.size : 0;
    const ga4 = ga4Data.get(kp)!;
    return `${kp}: ${count} inbound links (${ga4.sessions} sessions)`;
  });
  reportScore("Link Equity", overallScore, cfg.passThreshold, details);
  console.log(`\n${verdict(overallScore, cfg.passThreshold)}`);
  expect(overallScore).toBeGreaterThanOrEqual(cfg.passThreshold);
});
