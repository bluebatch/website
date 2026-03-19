import { test, expect } from "@playwright/test";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";
const CANONICAL_ORIGIN = "https://bluebatch.io";

function getMeta(html: string, name: string): string | null {
  const match = html.match(new RegExp(`<meta\\s+name="${name}"\\s+content="([^"]*)"`, "i"))
    ?? html.match(new RegExp(`<meta\\s+content="([^"]*)"\\s+name="${name}"`, "i"));
  return match?.[1] ?? null;
}

function getOg(html: string, property: string): string | null {
  const match = html.match(new RegExp(`<meta\\s+property="${property}"\\s+content="([^"]*)"`, "i"))
    ?? html.match(new RegExp(`<meta\\s+content="([^"]*)"\\s+property="${property}"`, "i"));
  return match?.[1] ?? null;
}

function getCanonical(html: string): string | null {
  const match = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i);
  return match?.[1] ?? null;
}

function getTitle(html: string): string | null {
  const match = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  return match?.[1] ?? null;
}

function countH1(html: string): number {
  return (html.match(/<h1[\s>]/gi) ?? []).length;
}

test("each sitemap URL has correct metadata", async ({ request }) => {
  test.setTimeout(300_000);

  // Fetch sitemap
  console.log(`\nFetching ${BASE_URL}/sitemap.xml\n`);
  const sitemapRes = await request.get(`${BASE_URL}/sitemap.xml`);
  expect(sitemapRes.ok(), "Sitemap not accessible").toBeTruthy();

  const xml = await sitemapRes.text();
  const urls = (xml.match(/<loc>([^<]+)<\/loc>/g) ?? []).map((m) =>
    m.replace("<loc>", "").replace("</loc>", "").replace(CANONICAL_ORIGIN, BASE_URL),
  );
  console.log(`Found ${urls.length} URLs\n`);

  const failed: string[] = [];

  for (const url of urls) {
    const pathname = new URL(url).pathname || "/";
    const errors: string[] = [];

    try {
      const res = await request.get(url, {
        maxRedirects: 0,
      });

      const status = res.status();

      // Should not redirect — sitemap URLs must be canonical
      if (status >= 300 && status < 400) {
        const location = res.headers()["location"] ?? "unknown";
        errors.push(`redirects → ${location}`);
      } else if (status >= 400) {
        errors.push(`HTTP ${status}`);
      } else {
        const html = await res.text();
        const head = html.split("</head>")[0] ?? html;

        const title = getTitle(head);
        if (!title?.trim()) errors.push("no <title>");

        const desc = getMeta(head, "description");
        if (!desc?.trim()) errors.push("no meta description");

        const canonical = getCanonical(head);
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

        const h1Count = countH1(html);
        if (h1Count === 0) errors.push("no <h1>");
        if (h1Count > 1) errors.push(`${h1Count}x <h1>`);

        if (!getOg(head, "og:title")) errors.push("no og:title");
        if (!getOg(head, "og:description")) errors.push("no og:description");
      }
    } catch (err) {
      errors.push(`fetch failed: ${err instanceof Error ? err.message : err}`);
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
