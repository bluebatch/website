#!/usr/bin/env node
// Zielbild der Website: liest den Seitenbaum aus docs/site-structure/zielbild.md,
// gleicht jeden Knoten mit app/ ab und schreibt den echten Status zurück in die
// Markdown-Datei. Erzeugt außerdem die Mindmap docs/site-structure/zielbild.html.
//
//   node scripts/generate-zielbild.mjs          Status schreiben, HTML erzeugen
//   node scripts/generate-zielbild.mjs --check  nur prüfen, Exit 1 bei Abweichung
//
// Status je Seite: live (Route existiert, veröffentlicht), live, noindex,
// unveröffentlicht (Ordner mit _ oder publish: false), geplant (keine Route).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const APP_DIR = path.join(ROOT, "app");
const DOC_DIR = path.join(ROOT, "docs", "site-structure");
const MD_FILE = path.join(DOC_DIR, "zielbild.md");
const HTML_FILE = path.join(DOC_DIR, "zielbild.html");
const TEMPLATE_FILE = path.join(ROOT, "scripts", "zielbild-template.html");

const CHECK = process.argv.includes("--check");
const TYPES = ["HUB", "MONEY", "LANDING", "CONTENT", "TOOL", "SYS", "ORDNER"];
const FLAGS = ["eingefroren", "future"];
const SKIP_TOP = new Set(["api", "og"]);

// ── Routen aus app/ ────────────────────────────────────────────────────────

function scanRoutes(dir, parts = [], routes = new Map()) {
  const page = path.join(dir, "page.tsx");
  if (fs.existsSync(page)) {
    const urlPath = "/" + parts.map((p) => p.replace(/^_/, "")).join("/");
    const src = fs.readFileSync(page, "utf8");
    const title = src.match(/title:\s*["'`]([^"'`]+)["'`]/);
    routes.set(urlPath, {
      file: path.relative(ROOT, page),
      private: parts.some((p) => p.startsWith("_")),
      unpublished: src.includes("metaCustom") && /publish:\s*false/.test(src),
      noindex: /index:\s*false/.test(src),
      title: title ? title[1].replace(/\s*\|\s*Bluebatch$/, "") : undefined,
    });
  }
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    if (parts.length === 0 && SKIP_TOP.has(name)) continue;
    if (name.startsWith("[")) continue;
    const child = path.join(dir, name);
    if (name.startsWith("(")) scanRoutes(child, parts, routes);
    else scanRoutes(child, [...parts, name], routes);
  }
  return routes;
}

function statusOf(route, type) {
  if (!route) return type === "ORDNER" ? "nur Ordner" : "geplant";
  if (route.private || route.unpublished) return "unveröffentlicht";
  return route.noindex ? "live, noindex" : "live";
}

function statusKey(status) {
  if (status.startsWith("live")) return "live";
  if (status === "unveröffentlicht") return "unveroeffentlicht";
  if (status === "geplant") return "geplant";
  return null;
}

// ── Markdown parsen ────────────────────────────────────────────────────────

const NODE_RE = /^`([^`]+)` ([A-ZÄÖÜ]+) · (.*)$/;

function parse(lines) {
  const start = lines.indexOf("<!-- zielbild:start -->");
  const end = lines.indexOf("<!-- zielbild:end -->");
  if (start < 0 || end < 0) throw new Error("Marker zielbild:start/end fehlen in zielbild.md");

  const root = { label: "bluebatch.io", root: true, children: [] };
  const errors = [];
  let section = null;
  let stack = [];

  for (let i = start + 1; i < end; i++) {
    const line = lines[i];
    const h2 = line.match(/^## (.+)$/);
    if (h2) {
      section = { label: h2[1].trim(), group: true, section: true, children: [] };
      root.children.push(section);
      stack = [];
      continue;
    }
    const li = line.match(/^( *)- (.*)$/);
    if (!li) continue;
    if (!section) {
      errors.push(`Zeile ${i + 1}: Listeneintrag vor der ersten ##-Überschrift`);
      continue;
    }
    if (li[1].length % 2) errors.push(`Zeile ${i + 1}: Einrückung muss ein Vielfaches von 2 sein`);
    const depth = li[1].length / 2;
    if (depth > stack.length) {
      errors.push(`Zeile ${i + 1}: Einrückung springt um mehr als eine Ebene`);
      continue;
    }
    const parent = depth === 0 ? section : stack[depth - 1];
    const text = li[2].trim();
    let node;

    const group = text.match(/^_(.+)_$/);
    if (group) {
      node = { label: group[1], group: true, children: [] };
    } else {
      const m = text.match(NODE_RE);
      if (!m) {
        errors.push(`Zeile ${i + 1}: Format \`segment\` TYP · status · Beschreibung erwartet`);
        continue;
      }
      const [, seg, type, rest] = m;
      if (!TYPES.includes(type)) errors.push(`Zeile ${i + 1}: unbekannter Typ ${type}`);
      const cut = rest.indexOf(" · ");
      let desc = cut < 0 ? "" : rest.slice(cut + 3);
      const flags = FLAGS.filter((f) => desc.includes(`#${f}`));
      for (const f of flags) desc = desc.replace(new RegExp(`\\s*#${f}\\b`), "");
      node = {
        seg: seg.replace(/\/$/, ""),
        type,
        desc: desc.trim(),
        flags,
        line: i,
        children: [],
      };
    }
    parent.children.push(node);
    stack = stack.slice(0, depth);
    stack[depth] = node;
  }
  return { root, errors };
}

// ── Pfade und Status auflösen ──────────────────────────────────────────────

function resolve(root, routes) {
  const placed = new Set();
  const collections = [];

  (function walk(node, base) {
    for (const child of node.children) {
      if (child.group) {
        walk(child, base);
        continue;
      }
      if (child.seg === "*") {
        child.collection = true;
        child.base = base;
        collections.push(child);
        continue;
      }
      child.path = child.seg === "/" ? "/" : `${base}/${child.seg}`.replace(/^\/\//, "/");
      placed.add(child.path);
      const route = routes.get(child.path);
      child.status = statusOf(route, child.type);
      if (route) {
        child.file = route.file;
        child.title = route.title;
      }
      walk(child, child.path === "/" ? "" : child.path);
    }
  })(root, "");

  // `*` steht für alle Unterseiten des Ordners, die nicht einzeln im Baum stehen
  for (const col of collections) {
    const prefix = `${col.base}/`;
    const items = [...routes.entries()]
      .filter(([p]) => p.startsWith(prefix) && !p.slice(prefix.length).includes("/") && !placed.has(p))
      .sort(([a], [b]) => a.localeCompare(b));
    col.children = items.map(([p, route]) => {
      placed.add(p);
      return {
        seg: p.slice(prefix.length),
        path: p,
        type: col.type,
        status: statusOf(route, col.type),
        file: route.file,
        title: route.title,
        flags: [],
        desc: "",
        children: [],
      };
    });
    const count = {};
    for (const c of col.children) count[c.status] = (count[c.status] || 0) + 1;
    col.status = Object.entries(count)
      .sort((a, b) => b[1] - a[1])
      .map(([s, n]) => `${n} ${s}`)
      .join(", ") || "keine Seiten";
  }

  const unplaced = [...routes.entries()]
    .filter(([p]) => !placed.has(p))
    .map(([p, route]) => ({ path: p, status: statusOf(route, "CONTENT"), file: route.file, title: route.title }))
    .sort((a, b) => a.path.localeCompare(b.path));

  return { unplaced };
}

function summarize(root) {
  const sum = { live: 0, unveroeffentlicht: 0, geplant: 0 };
  (function walk(node) {
    for (const c of node.children) {
      if (c.status && !c.collection) {
        const k = statusKey(c.status);
        if (k) sum[k]++;
      }
      walk(c);
    }
  })(root);
  sum.gesamt = sum.live + sum.unveroeffentlicht + sum.geplant;
  return sum;
}

// ── Markdown zurückschreiben ───────────────────────────────────────────────

function updateMarkdown(lines, root, sum, unplaced, stand) {
  const out = [...lines];
  const changes = [];
  (function walk(node) {
    for (const c of node.children) {
      if (c.line !== undefined) {
        const old = out[c.line];
        const updated = old.replace(/^( *- `[^`]+` [A-ZÄÖÜ]+ · )([^·]*?)( · .*)?$/, (_, a, s, rest) => {
          if (s.trim() !== c.status) changes.push(`${c.path || c.base + "/*"}: ${s.trim()} → ${c.status}`);
          return `${a}${c.status}${rest || ""}`;
        });
        out[c.line] = updated;
      }
      walk(c);
    }
  })(root);

  const from = out.indexOf("<!-- zielbild:stand -->");
  const to = out.indexOf("<!-- /zielbild:stand -->");
  if (from >= 0 && to > from) {
    const text =
      `**Stand ${stand}:** ${sum.gesamt} Seiten im Baum, davon ${sum.live} live, ` +
      `${sum.unveroeffentlicht} unveröffentlicht und ${sum.geplant} geplant.` +
      (unplaced.length ? ` ${unplaced.length} Seiten in \`app/\` fehlen im Baum.` : "");
    out.splice(from + 1, to - from - 1, text);
  }
  return { out, changes };
}

// ── HTML ───────────────────────────────────────────────────────────────────

function toData(node) {
  const n = { label: node.group ? node.label : node.seg };
  for (const k of ["path", "type", "status", "desc", "title", "file"]) if (node[k]) n[k] = node[k];
  if (node.root) n.root = true;
  if (node.group) n.group = true;
  if (node.section) n.section = true;
  if (node.collection) n.collection = true;
  if (node.flags?.length) n.flags = node.flags;
  if (node.children.length) n.children = node.children.map(toData);
  return n;
}

// Die Startseite ist die Mitte der Mindmap, die übrigen Abschnitte hängen an ihr
function mindmapRoot(root) {
  const home = root.children.flatMap((s) => s.children).find((c) => c.path === "/");
  const sections = root.children.filter((s) => !s.children.every((c) => c.path === "/"));
  return { ...home, root: true, seg: "bluebatch.io", children: sections };
}

const stripStand = (s) => s.replace(/\*\*Stand \d{4}-\d{2}-\d{2}:\*\*/, "").replace(/"stand":"[^"]*"/, "");

// ── Ablauf ─────────────────────────────────────────────────────────────────

const routes = scanRoutes(APP_DIR);
const mdText = fs.readFileSync(MD_FILE, "utf8");
const lines = mdText.split("\n");
const { root, errors } = parse(lines);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
const { unplaced } = resolve(root, routes);
const sum = summarize(root);
const stand = new Date().toISOString().slice(0, 10);
const { out, changes } = updateMarkdown(lines, root, sum, unplaced, stand);
const newMd = out.join("\n");
const mdChanged = stripStand(newMd) !== stripStand(mdText);

const data = { stand, summary: sum, tree: toData(mindmapRoot(root)), unplaced };
const json = JSON.stringify(data).replace(/</g, "\\u003c");
const html = fs.readFileSync(TEMPLATE_FILE, "utf8").replace("/*__ZIELBILD_DATA__*/null", json);
const oldHtml = fs.existsSync(HTML_FILE) ? fs.readFileSync(HTML_FILE, "utf8") : "";
const htmlChanged = stripStand(html) !== stripStand(oldHtml);

console.log(
  `Zielbild: ${sum.gesamt} Seiten, ${sum.live} live, ${sum.unveroeffentlicht} unveröffentlicht, ${sum.geplant} geplant`,
);
if (changes.length) console.log(`\nStatus geändert (${changes.length}):\n  ${changes.join("\n  ")}`);
if (unplaced.length) {
  console.log(`\nIn app/, aber nicht im Zielbild (${unplaced.length}):`);
  for (const u of unplaced) console.log(`  ${u.path}  (${u.status}, ${u.file})`);
}

if (CHECK) {
  const stale = mdChanged || htmlChanged;
  if (stale) console.log("\nzielbild.md oder zielbild.html ist veraltet: node scripts/generate-zielbild.mjs");
  process.exit(stale || unplaced.length ? 1 : 0);
}

if (mdChanged) fs.writeFileSync(MD_FILE, newMd);
if (htmlChanged) fs.writeFileSync(HTML_FILE, html);
console.log(
  `\n${mdChanged ? "zielbild.md aktualisiert" : "zielbild.md unverändert"}, ` +
    `${htmlChanged ? "zielbild.html neu erzeugt" : "zielbild.html unverändert"}`,
);
