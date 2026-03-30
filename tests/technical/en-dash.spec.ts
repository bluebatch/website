import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

/**
 * Find all page.tsx files and check for en-dash "–" (U+2013).
 * Reports every file + line where it appears.
 */

function findPages(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".next") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findPages(full));
    } else if (entry.name === "page.tsx") {
      results.push(full);
    }
  }
  return results;
}

test("no en-dash (–) in page files", async () => {
  const appDir = path.join(process.cwd(), "app");
  const pages = findPages(appDir);
  const errors: string[] = [];

  for (const file of pages) {
    const content = fs.readFileSync(file, "utf-8");
    const lines = content.split("\n");

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes("–")) {
        const rel = path.relative(process.cwd(), file);
        errors.push(`${rel}:${i + 1}: ${lines[i].trim().substring(0, 100)}`);
      }
    }
  }

  if (errors.length > 0) {
    console.log(`\n--- ${errors.length} en-dash occurrences ---`);
    errors.forEach((e) => console.log(`  ${e}`));
  }

  expect(errors, "En-dash (–) found in page files").toHaveLength(0);
});
