import { defineConfig } from "@playwright/test";

// 4000 kollidiert mit anderen Apps im Devcontainer (z.B. Kundenprojekt-Server);
// Playwright bricht dann vor dem ersten Test ab. Daher ein unüblicher Port.
const PORT = 4311;
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

export default defineConfig({
  testDir: "./tests",
  retries: 0,
  fullyParallel: true,
  reporter: [
    ["list"],
    ["./tests/reporters/markdown-reporter.ts"],
    ["./tests/reporters/csv-reporter.ts"],
  ],
  use: {
    baseURL: BASE_URL,
    ignoreHTTPSErrors: true,
  },

  /* Build & start production server before tests, stop after */
  webServer: {
    command: `pnpm run build && PORT=${PORT} pnpm run start`,
    port: PORT,
    reuseExistingServer: !!process.env.BASE_URL,
    timeout: 120_000,
  },

  projects: [
    {
      name: "technical",
      testMatch: /\/technical\/.+\.spec\.ts$/,
      timeout: 600_000,
      workers: 4,
      use: { browserName: "chromium" },
    },
    {
      name: "seo-audit",
      testMatch: /\/seo\/.+\.spec\.ts$/,
      // 600s wie im technical-Projekt. Die SEO-Specs crawlen die komplette
      // Seite und besuchen sie danach ein zweites Mal; bei 190 Seiten und
      // gleichzeitig laufenden technical-Workern reichten 300s nicht mehr.
      // Ein Test, der in den Timeout laeuft, liefert gar kein Signal.
      timeout: 600_000,
      workers: 1,
      use: { browserName: "chromium" },
    },
  ],
});
