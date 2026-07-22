/**
 * Guard: Funnel-Landingpages sind isolierte Sackgassen.
 *
 * Die Seiten unter app/(landingpage-funnel)/ sind reine Ads-Einstiege
 * (siehe .claude/rules/landingpage-funnel.md). Dieser Test stellt sicher:
 *   1. Jede Funnel-Seite hat robots noindex (Quelltext UND gerendertes Meta-Tag).
 *   2. Keine Funnel-Seite steht in der Sitemap — die Orphan-Detection in
 *      tests/seo/orphan-pages.spec.ts sieht sie deshalb nie. Die Isolation ist
 *      gewollt und wird hier explizit geprüft, nicht implizit toleriert.
 *   3. Funnel-Seiten haben keine ausgehenden internen Links. Erlaubt sind nur
 *      Impressum + Datenschutz (Rechtspflicht, kommen aus dem Funnel-Layout),
 *      Anker auf derselben Seite und Datei-Downloads (z.B. Sample-PDFs).
 */

import fs from "fs";
import path from "path";
import { test, expect } from "@playwright/test";
import { BASE_URL } from "../helpers/crawl";

const FUNNEL_DIR = path.join(process.cwd(), "app", "(landingpage-funnel)");

/** Alle Funnel-Routen (Ordner mit page.tsx, ohne _engine etc.) */
function funnelRoutes(): { route: string; pageFile: string }[] {
  return fs
    .readdirSync(FUNNEL_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !e.name.startsWith("_"))
    .map((e) => ({
      route: `/${e.name}`,
      pageFile: path.join(FUNNEL_DIR, e.name, "page.tsx"),
    }))
    .filter((e) => fs.existsSync(e.pageFile));
}

const ALLOWED_INTERNAL_PATHS = new Set([
  "/impressum-funnel",
  "/datenschutz-funnel",
]);
const FILE_DOWNLOAD_REGEX = /\.(pdf|zip|csv|xlsx|docx|png|jpg|jpeg|svg|webp)$/i;

test("jede Funnel-Seite hat robots noindex im Quelltext", () => {
  const routes = funnelRoutes();
  expect(routes.length, "keine Funnel-Seiten gefunden").toBeGreaterThan(0);

  const missing = routes.filter(
    ({ pageFile }) => !/index:\s*false/.test(fs.readFileSync(pageFile, "utf-8")),
  );
  expect(
    missing.map((m) => m.route),
    "Funnel-Seiten ohne `robots: { index: false }` in der Metadata",
  ).toEqual([]);
});

test("keine Funnel-Seite steht in der Sitemap", async ({ page }) => {
  const response = await page.goto(`${BASE_URL}/sitemap.xml`, {
    waitUntil: "domcontentloaded",
  });
  const xml = (await response?.text()) ?? "";
  expect(xml.length, "Sitemap leer oder nicht erreichbar").toBeGreaterThan(0);

  const leaked = funnelRoutes()
    .map(({ route }) => route)
    .filter((route) => xml.includes(`${route}</loc>`) || xml.includes(`${route}/</loc>`));
  expect(
    leaked,
    "Funnel-Seiten dürfen nicht in der Sitemap stehen (noindex + Sitemap = Widerspruch, Orphan-Fehlalarm)",
  ).toEqual([]);
});

test("Funnel-Seiten: gerendertes noindex + keine ausgehenden Links", async ({
  page,
}) => {
  test.setTimeout(120_000);

  for (const { route } of funnelRoutes()) {
    // 1. Server-gerendertes robots-Meta muss noindex enthalten. Bewusst gegen
    // das rohe HTML geprüft (das sehen Crawler), nicht gegen den DOM — React
    // bewegt Metadaten während der Hydration, das macht DOM-Checks flaky.
    const html = await (
      await page.request.get(`${BASE_URL}${route}`)
    ).text();
    expect(
      /<meta name="robots" content="[^"]*noindex/.test(html),
      `${route}: robots-Meta fehlt oder ohne noindex im Server-HTML`,
    ).toBe(true);

    await page.goto(`${BASE_URL}${route}`, { waitUntil: "domcontentloaded" });

    // 2. Alle Links einsammeln und gegen die Allowlist prüfen
    const hrefs = await page
      .locator("a[href]")
      .evaluateAll((anchors) => anchors.map((a) => a.getAttribute("href") ?? ""));

    const violations = hrefs.filter((href) => {
      if (href === "" || href.startsWith("#")) return false; // Anker
      if (href.startsWith("mailto:") || href.startsWith("tel:")) return false;

      let pathname: string;
      try {
        const url = new URL(href, BASE_URL);
        if (url.origin !== new URL(BASE_URL).origin) return true; // extern
        pathname = url.pathname;
      } catch {
        return true;
      }

      if (pathname === route) return false; // Self-Link / Anker auf selbe Seite
      if (ALLOWED_INTERNAL_PATHS.has(pathname.replace(/\/$/, ""))) return false;
      if (FILE_DOWNLOAD_REGEX.test(pathname)) return false; // Datei-Download

      return true; // alles andere ist ein Ausstieg aus dem Funnel
    });

    expect(
      violations,
      `${route}: ausgehende Links verletzen das Sackgassen-Prinzip (erlaubt: Impressum, Datenschutz, Anker, Downloads)`,
    ).toEqual([]);
  }
});
