import fs from "fs";
import path from "path";
import type {
  Reporter,
  FullConfig,
  Suite,
  TestCase,
  TestResult,
  FullResult,
} from "@playwright/test/reporter";

const RESULTS_DIR = path.join(__dirname, "..", "results");

interface TestEntry {
  title: string;
  file: string;
  project: string;
  status: "passed" | "failed" | "timedOut" | "skipped" | "interrupted";
  duration: number;
  error?: string;
}

export default class MarkdownReporter implements Reporter {
  private results: TestEntry[] = [];

  onTestEnd(test: TestCase, result: TestResult) {
    this.results.push({
      title: test.title,
      file: test.location.file.replace(/.*tests\//, ""),
      project: test.parent.project()?.name ?? "unknown",
      status: result.status,
      duration: result.duration,
      error: result.errors?.[0]?.message?.split("\n")[0],
    });
  }

  onEnd(result: FullResult) {
    fs.mkdirSync(RESULTS_DIR, { recursive: true });

    // Group by project
    const technical = this.results.filter((r) => r.project === "technical");
    const seo = this.results.filter((r) => r.project === "seo-audit");

    if (technical.length > 0) {
      this.writeTechnicalReport(technical);
    }

    // Write combined summary
    this.writeSummary(technical, seo, result);
  }

  private writeTechnicalReport(tests: TestEntry[]) {
    const passed = tests.filter((t) => t.status === "passed").length;
    const failed = tests.filter((t) => t.status !== "passed").length;
    const allPassed = failed === 0;
    const now = new Date().toISOString().slice(0, 16).replace("T", " ");

    let md = `# Technical Audit Results\n\n`;
    md += `**Date:** ${now}  \n`;
    md += `**Result:** ${passed}/${tests.length} passed ${allPassed ? "\u2705" : "\u274C"}\n\n`;

    md += `| # | Test | Status | Duration |\n`;
    md += `|---|------|--------|----------|\n`;
    tests.forEach((t, i) => {
      const emoji = t.status === "passed" ? "\u2705" : "\u274C";
      const dur = `${(t.duration / 1000).toFixed(1)}s`;
      md += `| ${i + 1} | ${t.title} | ${emoji} | ${dur} |\n`;
    });

    const failures = tests.filter((t) => t.status !== "passed");
    if (failures.length > 0) {
      md += `\n## Failures\n\n`;
      for (const f of failures) {
        md += `### ${f.title}\n\n`;
        md += `- **File:** ${f.file}\n`;
        if (f.error) {
          md += `- **Error:** ${f.error}\n`;
        }
        md += `\n`;
      }
    }

    fs.writeFileSync(path.join(RESULTS_DIR, "technical-report.md"), md);
  }

  private writeSummary(
    technical: TestEntry[],
    seo: TestEntry[],
    result: FullResult,
  ) {
    const now = new Date().toISOString().slice(0, 16).replace("T", " ");
    const dur = `${(result.duration / 1000).toFixed(0)}s`;

    const techPassed = technical.filter((t) => t.status === "passed").length;
    const seoPassed = seo.filter((t) => t.status === "passed").length;

    let md = `# Test Suite Summary\n\n`;
    md += `**Date:** ${now}  \n`;
    md += `**Duration:** ${dur}  \n`;
    md += `**Status:** ${result.status}\n\n`;

    md += `| Suite | Passed | Failed | Total |\n`;
    md += `|-------|--------|--------|-------|\n`;

    if (technical.length > 0) {
      const techFailed = technical.length - techPassed;
      const techEmoji = techFailed === 0 ? "\u2705" : "\u274C";
      md += `| Technical ${techEmoji} | ${techPassed} | ${techFailed} | ${technical.length} |\n`;
    }
    if (seo.length > 0) {
      const seoFailed = seo.length - seoPassed;
      const seoEmoji = seoFailed === 0 ? "\u2705" : "\u274C";
      md += `| SEO Audit ${seoEmoji} | ${seoPassed} | ${seoFailed} | ${seo.length} |\n`;
    }

    const totalPassed = techPassed + seoPassed;
    const totalTests = technical.length + seo.length;
    md += `| **Total** | **${totalPassed}** | **${totalTests - totalPassed}** | **${totalTests}** |\n`;

    md += `\n**Details:**\n`;
    md += `- [Technical Report](technical-report.md)\n`;
    md += `- [SEO Report](seo-report.md)\n`;

    fs.writeFileSync(path.join(RESULTS_DIR, "summary.md"), md);
  }
}
