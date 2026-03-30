/**
 * Test 4: Anchor Text Quality
 *
 * Collects all internal link anchor texts across the site.
 * Flags generic/banned anchors and empty anchors (image-only without alt).
 * No GA4 dependency — purely structural.
 */

import { test, expect } from "./fixtures";
import { seoConfig } from "./seo-config";
import { collectPageLinks, verdict, reportScore } from "./helpers";
import { crawlSite, BASE_URL } from "../helpers/crawl";

const cfg = seoConfig.anchorText;

interface AnchorIssue {
  page: string;
  href: string;
  text: string;
  reason: "generic" | "empty";
}

test("Anchor Text Quality", async ({ page }) => {
  // Crawl site
  const crawled = await crawlSite(page);
  const pages = crawled.filter(
    (p) => p.status >= 200 && p.status < 400 && !p.redirected,
  );

  console.log(`\nChecking anchor texts on ${pages.length} pages:\n`);

  let totalAnchors = 0;
  const issues: AnchorIssue[] = [];
  const bannedSet = new Set(cfg.bannedAnchors.map((a) => a.toLowerCase()));

  for (const crawledPage of pages) {
    const pathname = crawledPage.finalPathname;

    await page.goto(`${BASE_URL}${pathname}`, {
      waitUntil: "domcontentloaded",
      timeout: 30_000,
    });

    const links = await collectPageLinks(page);

    for (const link of links) {
      totalAnchors++;
      const textLower = link.text.toLowerCase().trim();

      if (!textLower) {
        issues.push({
          page: pathname,
          href: link.href,
          text: "(empty)",
          reason: "empty",
        });
      } else if (bannedSet.has(textLower)) {
        issues.push({
          page: pathname,
          href: link.href,
          text: link.text,
          reason: "generic",
        });
      }
    }
  }

  // Score
  const goodAnchors = totalAnchors - issues.length;
  const score = totalAnchors > 0
    ? Math.round((goodAnchors / totalAnchors) * 100)
    : 100;

  // Log issues
  const genericIssues = issues.filter((i) => i.reason === "generic");
  const emptyIssues = issues.filter((i) => i.reason === "empty");

  console.log(`Total internal anchors: ${totalAnchors}`);

  if (genericIssues.length > 0) {
    console.log(`\nGeneric anchors: ${genericIssues.length} (${((genericIssues.length / totalAnchors) * 100).toFixed(1)}%)`);
    for (const issue of genericIssues.slice(0, 15)) {
      console.log(`  "${issue.text}" on ${issue.page} -> ${issue.href}`);
    }
    if (genericIssues.length > 15) {
      console.log(`  ... and ${genericIssues.length - 15} more`);
    }
  }

  if (emptyIssues.length > 0) {
    console.log(`\nEmpty anchors: ${emptyIssues.length} (${((emptyIssues.length / totalAnchors) * 100).toFixed(1)}%)`);
    for (const issue of emptyIssues.slice(0, 15)) {
      console.log(`  ${issue.page} -> ${issue.href}`);
    }
    if (emptyIssues.length > 15) {
      console.log(`  ... and ${emptyIssues.length - 15} more`);
    }
  }

  const details = issues.map((i) =>
    i.reason === "generic"
      ? `Generic: "${i.text}" on ${i.page} -> ${i.href}`
      : `Empty anchor: ${i.page} -> ${i.href}`,
  );
  reportScore("Anchor Text", score, cfg.passThreshold, details);
  console.log(`\n${verdict(score, cfg.passThreshold)}`);
  expect(score).toBeGreaterThanOrEqual(cfg.passThreshold);
});
