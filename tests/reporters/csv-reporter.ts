import fs from "fs";
import path from "path";
import type {
  Reporter,
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

interface SeoScore {
  test: string;
  score: number;
  threshold: number;
  passed: boolean;
  details: string[];
  timestamp: string;
}

export default class CsvReporter implements Reporter {
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

    const today = new Date().toISOString().slice(0, 10);

    this.writeSummary(today, result);
    this.writeTechnicalDetails(today);
    this.writeSeoDetails(today);
  }

  private writeSummary(today: string, result: FullResult) {
    const projects = [...new Set(this.results.map((r) => r.project))];
    const header = "date,project,passed,failed,total,duration_s";
    const rows = projects.map((proj) => {
      const tests = this.results.filter((r) => r.project === proj);
      const passed = tests.filter((t) => t.status === "passed").length;
      const failed = tests.length - passed;
      const dur = (
        tests.reduce((sum, t) => sum + t.duration, 0) / 1000
      ).toFixed(0);
      return `${today},${proj},${passed},${failed},${tests.length},${dur}`;
    });
    const totalPassed = this.results.filter(
      (t) => t.status === "passed",
    ).length;
    const totalFailed = this.results.length - totalPassed;
    rows.push(
      `${today},total,${totalPassed},${totalFailed},${this.results.length},${(result.duration / 1000).toFixed(0)}`,
    );
    fs.writeFileSync(
      path.join(RESULTS_DIR, "test-summary.csv"),
      [header, ...rows].join("\n") + "\n",
    );
  }

  private writeTechnicalDetails(today: string) {
    const technical = this.results.filter((r) => r.project === "technical");
    if (technical.length === 0) return;

    const header = "date,test,status,duration_ms,error";
    const rows = technical.map((t) => {
      const error = (t.error ?? "").replace(/"/g, '""');
      return `${today},"${t.title}",${t.status},${t.duration},"${error}"`;
    });
    fs.writeFileSync(
      path.join(RESULTS_DIR, "technical-details.csv"),
      [header, ...rows].join("\n") + "\n",
    );
  }

  private writeSeoDetails(today: string) {
    const scoresPath = path.join(RESULTS_DIR, "seo-scores.json");
    if (!fs.existsSync(scoresPath)) return;

    const scores: SeoScore[] = JSON.parse(
      fs.readFileSync(scoresPath, "utf-8"),
    );

    // SEO scores summary
    const scoreHeader =
      "date,test,score,threshold,passed,issues_count";
    const scoreRows = scores.map(
      (s) =>
        `${today},"${s.test}",${s.score},${s.threshold},${s.passed},${s.details.length}`,
    );
    fs.writeFileSync(
      path.join(RESULTS_DIR, "seo-details.csv"),
      [scoreHeader, ...scoreRows].join("\n") + "\n",
    );

    // Per-test structured detail files
    for (const s of scores) {
      if (s.details.length === 0) continue;
      const slug = s.test.toLowerCase().replace(/\s+/g, "-");
      this.writeStructuredDetail(today, slug, s.test, s.details);
    }
  }

  private writeStructuredDetail(
    today: string,
    slug: string,
    testName: string,
    details: string[],
  ) {
    const filePath = path.join(RESULTS_DIR, `${slug}-details.csv`);

    switch (slug) {
      case "content-hubs": {
        // "/blog-workflow: 9 children" → page, children
        const header = "date,page,children";
        const rows = details.map((d) => {
          const match = d.match(/^(\/\S+):\s*(\d+)\s*children$/);
          if (match) return `${today},${match[1]},${match[2]}`;
          return `${today},"${d.replace(/"/g, '""')}",`;
        });
        fs.writeFileSync(filePath, [header, ...rows].join("\n") + "\n");
        break;
      }

      case "contextual-links": {
        // "/n8n-sicherheit: 0 body links, need 2" → page, current, required
        const header = "date,page,body_links,required";
        const rows = details.map((d) => {
          const match = d.match(
            /^(\/\S+):\s*(\d+)\s*body links,\s*need\s*(\d+)$/,
          );
          if (match) return `${today},${match[1]},${match[2]},${match[3]}`;
          return `${today},"${d.replace(/"/g, '""')}",,`;
        });
        fs.writeFileSync(filePath, [header, ...rows].join("\n") + "\n");
        break;
      }

      case "link-equity": {
        // "/blog/speed-to-hire: 1 inbound links (10 sessions)" → page, inbound_links, sessions
        const header = "date,page,inbound_links,sessions";
        const rows = details.map((d) => {
          const match = d.match(
            /^(\/\S+):\s*(\d+)\s*inbound links?\s*\((\d+)\s*sessions?\)/,
          );
          if (match)
            return `${today},${match[1]},${match[2]},${match[3]}`;
          return `${today},"${d.replace(/"/g, '""')}",,`;
        });
        fs.writeFileSync(filePath, [header, ...rows].join("\n") + "\n");
        break;
      }

      case "orphan-pages": {
        // Just page paths
        const header = "date,page";
        const rows = details.map((d) => `${today},${d.trim()}`);
        fs.writeFileSync(filePath, [header, ...rows].join("\n") + "\n");
        break;
      }

      case "link-depth": {
        // "/some-page: depth 4" → page, depth
        const header = "date,page,depth";
        const rows = details.map((d) => {
          const match = d.match(/^(\/\S+):\s*depth\s*(\d+)$/);
          if (match) return `${today},${match[1]},${match[2]}`;
          return `${today},"${d.replace(/"/g, '""')}",`;
        });
        fs.writeFileSync(filePath, [header, ...rows].join("\n") + "\n");
        break;
      }

      case "anchor-text": {
        // Generic: just the detail string
        const header = "date,issue";
        const rows = details.map(
          (d) => `${today},"${d.replace(/"/g, '""')}"`,
        );
        fs.writeFileSync(filePath, [header, ...rows].join("\n") + "\n");
        break;
      }

      default: {
        const header = "date,detail";
        const rows = details.map(
          (d) => `${today},"${d.replace(/"/g, '""')}"`,
        );
        fs.writeFileSync(filePath, [header, ...rows].join("\n") + "\n");
      }
    }
  }
}
