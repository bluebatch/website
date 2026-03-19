import { test, expect } from "@playwright/test";
import { crawlSite, BASE_URL } from "./helpers/crawl";

/** Known mainRewrite prefixes — these redirect to flat URLs by design */
const KNOWN_REDIRECT_PREFIXES = [
  "/standorte/",
  "/use-cases/",
  "/tools/",
  "/blog/",
];

test("every page is reachable (no 4xx/5xx)", async ({ page }) => {
  test.setTimeout(600_000);

  const unreachable: string[] = [];

  const results = await crawlSite(page, (crawled) => {
    console.log(
      `[${crawled.status}] ${crawled.pathname}${crawled.redirected ? ` → ${crawled.finalPathname}` : ""}`,
    );
    if (crawled.status >= 400) {
      unreachable.push(`${crawled.pathname} → HTTP ${crawled.status}`);
    }
  });

  console.log(`\nTotal pages crawled: ${results.length}`);
  console.log(`Unreachable: ${unreachable.length}`);

  expect(unreachable, "Unreachable pages found").toHaveLength(0);
});

test("no unexpected redirects", async ({ page }) => {
  test.setTimeout(600_000);

  const unexpected: string[] = [];

  const results = await crawlSite(page, (crawled) => {
    if (!crawled.redirected) return;

    const isExpected = KNOWN_REDIRECT_PREFIXES.some((prefix) =>
      crawled.pathname.startsWith(prefix),
    );

    if (!isExpected) {
      unexpected.push(`${crawled.pathname} → ${crawled.finalPathname}`);
      console.log(`  UNEXPECTED REDIRECT: ${crawled.pathname} → ${crawled.finalPathname}`);
    }
  });

  console.log(`\nTotal pages: ${results.length}`);
  console.log(`Redirected pages: ${results.filter((r) => r.redirected).length}`);
  console.log(`Unexpected redirects: ${unexpected.length}`);

  expect(unexpected, "Unexpected redirects found").toHaveLength(0);
});

test("main navigation links work", async ({ page }) => {
  test.setTimeout(120_000);

  await page.goto(BASE_URL, { waitUntil: "domcontentloaded" });

  // Get all nav links
  const navLinks = await page.locator("nav a[href]").all();
  const hrefs: string[] = [];

  for (const link of navLinks) {
    const href = await link.getAttribute("href");
    if (!href) continue;
    if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) continue;

    try {
      const url = new URL(href, BASE_URL);
      if (url.origin === new URL(BASE_URL).origin) {
        hrefs.push(url.pathname);
      }
    } catch {
      continue;
    }
  }

  const uniqueHrefs = [...new Set(hrefs)];
  console.log(`Found ${uniqueHrefs.length} unique nav links`);

  const broken: string[] = [];

  for (const href of uniqueHrefs) {
    const response = await page.goto(`${BASE_URL}${href}`, {
      waitUntil: "domcontentloaded",
      timeout: 30_000,
    });

    const status = response?.status() ?? 0;
    console.log(`  [${status}] ${href}`);

    if (status >= 400) {
      broken.push(`${href} → HTTP ${status}`);
    }
  }

  expect(broken, "Broken navigation links").toHaveLength(0);
});
