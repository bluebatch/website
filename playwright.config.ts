import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  retries: 0,
  workers: 1,
  fullyParallel: false,
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3000",
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: "site-audit",
      use: { browserName: "chromium" },
    },
  ],
});
