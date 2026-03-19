import { test, expect } from "@playwright/test";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const CANONICAL_ORIGIN = "https://bluebatch.io";

test("each sitemap URL has correct metadata", async ({ page }) => {
  test.setTimeout(600_000);

  // Block external tracking/analytics scripts that cause hangs
  await page.route("**/*", (route) => {
    const url = route.request().url();
    if (
      url.includes("googletagmanager") ||
      url.includes("google-analytics") ||
      url.includes("hsforms") ||
      url.includes("hubspot") ||
      url.includes("posthog") ||
      url.includes("calendly")
    ) {
      return route.abort();
    }
    return route.continue();
  });

  // 1. Fetch sitemap
  console.log(`\nFetching sitemap from ${BASE_URL}/sitemap.xml\n`);
  const res = await page.request.get(`${BASE_URL}/sitemap.xml`);
  expect(res.ok(), `Sitemap not accessible at ${BASE_URL}/sitemap.xml`).toBeTruthy();

  const xml = await res.text();
  const urls = (xml.match(/<loc>([^<]+)<\/loc>/g) ?? []).map((m) =>
    m.replace("<loc>", "").replace("</loc>", "").replace(CANONICAL_ORIGIN, BASE_URL),
  );

  console.log(`Found ${urls.length} URLs\n`);
  expect(urls.length).toBeGreaterThan(0);

  // 2. Check each URL
  const failed: string[] = [];

  for (const url of urls) {
    const pathname = new URL(url).pathname || "/";
    const errors: string[] = [];

    try {
      const response = await page.goto(url, {
        waitUntil: "commit",
        timeout: 10_000,
      });
      await page.waitForSelector("head > title", { timeout: 3_000 }).catch(() => {});

      const status = response?.status() ?? 0;
      const finalPathname = new URL(page.url()).pathname;

      if (finalPathname !== pathname) errors.push(`redirects → ${finalPathname}`);
      if (status >= 400) errors.push(`HTTP ${status}`);

      if (status < 400 && finalPathname === pathname) {
        if (!(await page.title())?.trim()) errors.push("no <title>");

        const desc = await page.locator('meta[name="description"]').first().getAttribute("content").catch(() => null);
        if (!desc?.trim()) errors.push("no meta description");

        const canonical = await page.locator('link[rel="canonical"]').first().getAttribute("href").catch(() => null);
        if (!canonical) {
          errors.push("no canonical");
        } else {
          try {
            const cp = new URL(canonical, CANONICAL_ORIGIN).pathname.replace(/\/$/, "") || "/";
            const ep = pathname.replace(/\/$/, "") || "/";
            if (cp !== ep) errors.push(`canonical="${cp}" ≠ "${ep}"`);
          } catch {
            errors.push(`bad canonical: ${canonical}`);
          }
        }

        const h1 = await page.locator("h1").count();
        if (h1 === 0) errors.push("no <h1>");
        if (h1 > 1) errors.push(`${h1}x <h1>`);

        if (!(await page.locator('meta[property="og:title"]').first().getAttribute("content").catch(() => null)))
          errors.push("no og:title");
        if (!(await page.locator('meta[property="og:description"]').first().getAttribute("content").catch(() => null)))
          errors.push("no og:description");
      }
    } catch (err) {
      errors.push(`load failed: ${err instanceof Error ? err.message : err}`);
    }

    if (errors.length > 0) {
      console.log(`  ✗ ${pathname} — ${errors.join(", ")}`);
      failed.push(`${pathname}: ${errors.join(", ")}`);
    } else {
      console.log(`  ✓ ${pathname}`);
    }
  }

  if (failed.length > 0) {
    console.log(`\n--- ${failed.length} FAILED ---`);
    failed.forEach((f) => console.log(`  ${f}`));
  }

  expect(failed, "Pages with metadata issues").toHaveLength(0);
});
