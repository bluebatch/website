/**
 * Guard: Vorschau-Seiten der SEO-Pipeline (/dateien/website/seo-pipeline).
 *
 * Eine neue Seite geht zuerst als Vorschau live: erreichbar für Gate 9/10,
 * aber nicht indexierbar und nicht in der Sitemap. Markiert wird sie im
 * page.tsx mit dem Kommentar `SEO-VORSCHAU` direkt an der robots-Zeile:
 *
 *   robots: { index: false, follow: true }, // SEO-VORSCHAU: <slug>
 *
 * Nach GO aus Gate 10 werden robots-Zeile und Marker entfernt, dann nimmt
 * app/sitemap.ts die Seite automatisch auf. Dieser Test prüft für jede
 * markierte Seite: noindex im Quelltext UND im Server-HTML, nicht in der Sitemap.
 * Ohne markierte Seiten wird er übersprungen.
 */

import fs from "fs";
import path from "path";
import { test, expect } from "@playwright/test";
import { BASE_URL } from "../helpers/crawl";

const APP_DIR = path.join(process.cwd(), "app");

/** Alle page.tsx mit SEO-VORSCHAU-Marker, Route ohne Route-Groups */
function previewRoutes(dir = APP_DIR, base = ""): { route: string; pageFile: string }[] {
  const out: { route: string; pageFile: string }[] = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!e.isDirectory() || e.name.startsWith("_") || e.name.startsWith("[")) continue;
    const full = path.join(dir, e.name);
    const route = e.name.startsWith("(") ? base : `${base}/${e.name}`;
    const pageFile = path.join(full, "page.tsx");
    if (fs.existsSync(pageFile) && fs.readFileSync(pageFile, "utf-8").includes("SEO-VORSCHAU")) {
      out.push({ route: route || "/", pageFile });
    }
    out.push(...previewRoutes(full, route));
  }
  return out;
}

const routes = previewRoutes();

test.describe("SEO-Vorschau-Seiten", () => {
  test.skip(routes.length === 0, "keine Seite mit SEO-VORSCHAU-Marker");

  test("noindex im Quelltext", () => {
    const missing = routes.filter(
      ({ pageFile }) => !/index:\s*false/.test(fs.readFileSync(pageFile, "utf-8")),
    );
    expect(
      missing.map((m) => m.route),
      "Vorschau-Seiten ohne `robots: { index: false }`",
    ).toEqual([]);
  });

  test("nicht in der Sitemap", async ({ page }) => {
    const xml = (await (await page.request.get(`${BASE_URL}/sitemap.xml`)).text()) ?? "";
    expect(xml.length, "Sitemap leer oder nicht erreichbar").toBeGreaterThan(0);
    const leaked = routes
      .map(({ route }) => route)
      .filter((r) => xml.includes(`${r}</loc>`) || xml.includes(`${r}/</loc>`));
    expect(leaked, "Vorschau-Seiten dürfen nicht in der Sitemap stehen").toEqual([]);
  });

  test("erreichbar (200) mit noindex im Server-HTML", async ({ page }) => {
    for (const { route } of routes) {
      const res = await page.request.get(`${BASE_URL}${route}`);
      expect(res.status(), `${route}: Status`).toBe(200);
      expect(
        /<meta name="robots" content="[^"]*noindex/.test(await res.text()),
        `${route}: robots-Meta ohne noindex im Server-HTML`,
      ).toBe(true);
    }
  });
});
