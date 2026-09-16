#!/usr/bin/env node
/**
 * Erzeugt lib/page-lastmod.json: Route-Pfad -> Datum des letzten Commits an
 * der zugehoerigen page.tsx (YYYY-MM-DD). Die Datei wird EINGECHECKT und von
 * app/sitemap.ts (lastModified) sowie components/blog/blog-layout.tsx
 * (Article.dateModified) gelesen.
 *
 * Warum eingecheckt statt zur Build-Zeit ermittelt: Vercel baut aus einem
 * flachen Clone, `git log` liefert dort fuer alle aelteren Dateien dieselbe
 * Grenze — genau das "alle lastmod identisch", das Google dokumentiert
 * ignoriert. fs.stat scheidet ebenfalls aus (mtime = Clone-Zeit).
 *
 * Dirty-Regel: Ist eine page.tsx im Arbeitsbaum geaendert oder neu (git
 * status), traegt sie das heutige Datum — so kann die JSON im selben Commit
 * wie die Seitenaenderung aktualisiert werden.
 *
 * Aufruf (aus website/):  node scripts/generate-page-lastmod.mjs
 *          nur pruefen:   node scripts/generate-page-lastmod.mjs --check
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const appDir = path.join(root, "app");
const outFile = path.join(root, "lib", "page-lastmod.json");
const check = process.argv.includes("--check");

function git(args) {
  return execFileSync("git", args, { cwd: root, encoding: "utf8" }).trim();
}

const dirty = new Set(
  git(["status", "--porcelain", "--untracked-files=all", "--", "app"])
    .split("\n")
    .filter(Boolean)
    .map((line) => line.slice(3).trim().replace(/^"|"$/g, "")),
);

function collectRoutes(dir, basePath = "") {
  const routes = [];
  // page.tsx direkt in diesem Verzeichnis (app/ selbst oder eine Route
  // Group wie app/(site)/): Route ist der bisherige Pfad, an der Wurzel "/".
  const ownPage = path.join(dir, "page.tsx");
  if (fs.existsSync(ownPage)) routes.push({ routePath: basePath || "/", pagePath: ownPage });
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    if (entry.name.startsWith("_")) continue; // Staging / private
    const fullPath = path.join(dir, entry.name);
    if (entry.name.startsWith("(")) {
      routes.push(...collectRoutes(fullPath, basePath));
      continue;
    }
    const routePath = `${basePath}/${entry.name}`;
    const pagePath = path.join(fullPath, "page.tsx");
    if (fs.existsSync(pagePath)) routes.push({ routePath, pagePath });
    routes.push(...collectRoutes(fullPath, routePath));
  }
  return routes;
}

const today = new Date().toISOString().slice(0, 10);

// Ein einziger Durchlauf durch die Historie (neueste zuerst): der erste
// Treffer je Datei ist ihr letzter Commit. Renames folgen dem neuen Pfad,
// also traegt eine per `git mv` veroeffentlichte Staging-Seite ihr
// Publish-Datum. Einzelne `git log -1`-Aufrufe je Datei waeren ~0,5 s pro
// Route und damit bei >250 Routen zu langsam.
const lastCommitDate = new Map();
{
  let current = "";
  for (const line of git(["log", "--format=@%cs", "--name-only", "--", "app"]).split("\n")) {
    if (line.startsWith("@")) current = line.slice(1);
    else if (line && !lastCommitDate.has(line)) lastCommitDate.set(line, current);
  }
}

function lastModFor(pagePath) {
  const rel = path.relative(root, pagePath);
  if (dirty.has(rel)) return today;
  return lastCommitDate.get(rel) ?? today; // untracked ohne status-Eintrag: heute
}

const routes = collectRoutes(appDir);

const result = {};
for (const { routePath, pagePath } of routes) {
  if (!fs.existsSync(pagePath)) continue;
  result[routePath] = lastModFor(pagePath);
}
const sorted = Object.fromEntries(
  Object.entries(result).sort(([a], [b]) => a.localeCompare(b)),
);
const json = JSON.stringify(sorted, null, 2) + "\n";

if (check) {
  const current = fs.existsSync(outFile) ? fs.readFileSync(outFile, "utf8") : "";
  if (current !== json) {
    const cur = current ? JSON.parse(current) : {};
    const diffs = Object.keys({ ...cur, ...sorted }).filter((k) => cur[k] !== sorted[k]);
    console.error(`page-lastmod.json ist veraltet (${diffs.length} Routen abweichend):`);
    for (const k of diffs.slice(0, 20)) console.error(`  ${k}: ${cur[k] ?? "-"} -> ${sorted[k] ?? "-"}`);
    process.exit(1);
  }
  console.log(`page-lastmod.json aktuell (${Object.keys(sorted).length} Routen)`);
  process.exit(0);
}

fs.writeFileSync(outFile, json);
const distinct = new Set(Object.values(sorted)).size;
console.log(`${Object.keys(sorted).length} Routen, ${distinct} verschiedene Daten -> lib/page-lastmod.json`);
