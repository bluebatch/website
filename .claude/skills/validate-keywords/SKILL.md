# Validate Keywords

Validate keyword implementation across all pages that have keywords assigned in `keywords.md`. Score each page 0–100 and update the file with results.

## Input

Optional: `$ARGUMENTS` can be a specific section name (e.g., "Services", "Blog") or a specific page path (e.g., "/services/custom-nodes") to validate only that section/page. If no argument is given, validate ALL pages that have keywords assigned.

## Step 1: Parse keywords.md

Read `/workspaces/website_blue_batch/keywords.md` and extract all pages that have a **non-empty Haupt-Keyword**. Skip pages with empty Haupt-Keyword — they have no keywords to validate, so no score, no review date.

For each page, collect:

- `route` — the URL path (e.g., `/services/custom-nodes`)
- `hauptKeyword` — the main keyword (e.g., `n8n node`)
- `keywords` — comma-separated list of additional keywords

## Step 2: Resolve page file

Convert the route to a file path. The mapping follows Next.js App Router conventions:

- `/` → `app/page.tsx`
- `/services` → `app/services/page.tsx`
- `/services/custom-nodes` → `app/services/custom-nodes/page.tsx`
- `/blog/some-slug` → look in `app/blog/**/some-slug/page.tsx` (may be in a route group like `(grosshandel)`)
- `/standorte/berlin` → `app/standorte/berlin/page.tsx`
- `/tools/n8n` → `app/tools/(automation-tools)/n8n/page.tsx` (route groups!)
- `/tools/easybill` → `app/tools/(grosshandel)/easybill/page.tsx`

If the file doesn't exist, check for route groups: `(automation-tools)`, `(grosshandel)`, `(grosshandel)`, `(pdl)`, etc.

Read the full `page.tsx` file.

## Step 3: Score each page

For each page, calculate a score out of 100 based on these criteria:

### CRITICAL: Exact Match Definition

The keyword MUST appear EXACTLY as written to count as an exact match. This is the most important rule:

- **"n8n schulung"** does NOT match "n8n Schulungen" (plural is different!)
- **"n8n schulung"** does NOT match "n8n Schulungen & Workshops" (additions are different!)
- **"ki agentur"** does NOT match "KI-Agentur" (hyphen vs space is different!)
- **"n8n automatisierung"** DOES match "n8n Automatisierung" (only case difference = exact)

**Exact match** = the keyword string appears verbatim in the text, allowing ONLY case differences. Nothing else. No plural forms, no hyphens instead of spaces, no extra words inserted, no word reordering.

**Variant match** = the keyword words are all present but with ANY modification: plural ("Schulung" → "Schulungen"), hyphenation ("ki agentur" → "KI-Agentur"), extra words added ("n8n Schulungen & Workshops"), different word order.

**Partial match** = only SOME words of the keyword are found.

### A. Hero / H1 — Main Keyword (max 35 points)

Check the Hero headline (H1) for the **Haupt-Keyword**.

- **Exact match** (keyword appears verbatim, only case may differ): **35 points**
- **Variant match** (all words present but modified): **18 points**
- **Partial match** (only some keyword words found in H1): **8 points**
- **Not found in H1**: Check `metadata.title` — if found there: **5 points**
- **Not found anywhere**: **0 points**

Look in this priority order:
1. `Hero2ColumnHeadline` or `BlogHero.Headline` content (this is the H1)
2. Any `Typo.H1` content
3. `metadata.title` field (fallback, low score)

### B. H2/H3 Headings — Keywords (max 25 points)

Check all H2 elements (`Typo.H2`, `IntroBox.Headline`) and H3 elements (`Typo.H3`) for the Haupt-Keyword AND additional keywords.

**Haupt-Keyword in H2** (max 10pts):
- Exact in at least 1 H2: 10pts
- Variant in H2: 5pts
- Not in any H2: 0pts

**Secondary keywords in H2/H3** (max 15pts):
- For each secondary keyword: exact in H2/H3 = 1, variant = 0.5
- Score: `(found / total_secondary_keywords) * 15`, rounded
- Secondary keywords should appear mainly in H3s, sparingly in H2s

### C. Body Text — Keyword Density (max 25 points)

#### C1. Haupt-Keyword density (max 15pts)

Target density: **0.5–1.5%** of total visible text.

Count exact matches of Haupt-Keyword in body text (paragraphs, descriptions, list items — NOT headings or metadata):
- Density 0.5–1.5%: **15 points**
- Density 0.3–0.5% or 1.5–2.0%: **10 points** (slightly under/over)
- Density 0.1–0.3% or 2.0–3.0%: **5 points** (too sparse or stuffed)
- Density <0.1% or >3.0%: **0 points**

Rough heuristic: For a typical page with ~1000 words, 0.5-1.5% means the keyword appears **5-15 times** in body text.

#### C2. Secondary keywords density (max 10pts)

Each secondary keyword should appear **1-2 times** per text passage, mainly in body text and H3 subheadings.

- 50%+ of secondary keywords present (1-2 times each): **10 points**
- 25-50% present: **5 points**
- <25% present: **2 points**
- None present: **0 points**

### D. First 100 Characters (max 15 points)

Check if the Haupt-Keyword appears in the first meaningful text content on the page (the Hero description or first paragraph).

- **Exact match** in first 100 chars of visible text: **15 points**
- **Exact match** in first 300 chars: **8 points**
- **Variant** in first 300 chars: **3 points**
- Not found: **0 points**

### Total Score

`Score = A + B + C1 + C2 + D` (0–100)

## Step 4: Output results

For each validated page, print a summary:

```
Page: /services/schulungen
Haupt-Keyword: "n8n schulung"
Keywords: "ki dsgvo schulung", "ki workshop buchen", "ki accelerator"

  Hero/H1:       35/35  — exact "n8n Schulung" in H1
  H2/H3:        20/25  — haupt in 1 H2 (10/10), 2/3 secondary in H3s (10/15)
  Body density:  15/15  — haupt appears 7x in ~1000 words = 0.7% (optimal)
  Secondary kw:   8/10  — 2/3 secondary keywords present 1-2x each
  First 100ch:   15/15  — exact in hero description

  SCORE: 93/100
```

## Step 5: Update keywords.md

After scoring all pages, update `keywords.md`:

1. Set the **Score** column to the numeric score: `93`
2. Set the **Review** column to today's date

Only update rows for pages that were actually validated (have keywords). Do NOT touch rows without keywords.

## Important Rules

- **Exact match = ONLY case differences allowed.** "schulung" ≠ "schulungen". "agentur" ≠ "Agentur" with hyphen before it. This is the #1 most important rule.
- Case-insensitive: "n8n Automatisierung" = "n8n automatisierung" (exact match)
- Plural is NOT exact: "Schulung" ≠ "Schulungen" (variant)
- Hyphen vs space is NOT exact: "ki agentur" ≠ "KI-Agentur" (variant)
- Extra words is NOT exact: "n8n Schulungen & Workshops" ≠ "n8n schulung" (variant at best)
- JSX string content is the source of truth — look at what renders, not comments or variable names
- If `$ARGUMENTS` specifies a section or page, only validate that subset
- Always print the summary to the user before updating the file
- Use subagents if validating more than 5 pages, to speed things up
- Secondary keywords belong mainly in H3s and body text, sparingly in H2s
