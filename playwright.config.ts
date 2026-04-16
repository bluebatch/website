import { defineConfig } from "@playwright/test";

const PORT = 4000;
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
      timeout: 300_000,
      workers: 1,
      use: { browserName: "chromium" },
    },
  ],
});
