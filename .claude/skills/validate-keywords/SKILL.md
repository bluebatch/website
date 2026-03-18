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

If the file doesn't exist, check for route groups: `app/blog/(grosshandel)/slug/page.tsx`, `app/blog/(pdl)/slug/page.tsx`, etc.

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

### A. Hero / H1 — Main Keyword (max 40 points)

Check the Hero headline (H1) for the **Haupt-Keyword**. The H1 is the MOST important element for SEO — it must contain the keyword as close to exact as possible.

- **Exact match** (keyword appears verbatim, only case may differ): **40 points**
- **Variant match** (all words present but modified — plural, hyphen, extra words, reordered): **20 points**
- **Partial match** (only some keyword words found in H1): **10 points**
- **Not found in H1**: Check `metadata.title` — if found there: **5 points**
- **Not found anywhere**: **0 points**

Look in this priority order:

1. `Hero2ColumnHeadline` or `BlogHero.Headline` content (this is the H1)
2. Any `Typo.H1` content
3. `metadata.title` field (fallback, low score)

### B. H2 Headings — All Keywords (max 30 points)

Check all H2 elements (`Typo.H2`, `IntroBox.Headline`) for the Haupt-Keyword AND additional keywords.

For each keyword, check if it appears in ANY H2:

- Exact match in H2: counts as **found**
- Variant match in H2: counts as **half-found** (0.5)
- Not found: 0

Score: `(found / total_keywords) * 30`, rounded

### C. Body Text — Keyword Density (max 20 points)

Count occurrences of the **Haupt-Keyword** in paragraph text (`Typo.Paragraph`, `Hero2ColumnDescription`, plain `<p>` tags, list items).

Only count **exact matches** (keyword verbatim, case-insensitive):

- 5+ exact occurrences: **20 points**
- 3-4 exact occurrences: **15 points**
- 1-2 exact occurrences: **8 points**
- 0 exact occurrences but variants present: **4 points**
- Nothing found: **0 points**

### D. First 100 Characters (max 10 points)

Check if the Haupt-Keyword appears in the first meaningful text content on the page (the Hero description or first paragraph).

- **Exact match** in first 100 chars of visible text: **10 points**
- **Exact match** in first 300 chars: **5 points**
- **Variant** in first 300 chars: **2 points**
- Not found: **0 points**

### Total Score

`Score = A + B + C + D` (0–100)

## Step 4: Output results

For each validated page, print a summary:

```
Page: /services/schulungen
Haupt-Keyword: "n8n schulung"
Keywords: (none)

  Hero/H1:     20/40  — variant: H1 is "n8n Schulungen & Workshops" (plural + extra words ≠ "n8n schulung")
  H2s:         15/30  — variant found in 1 H2 ("Warum professionelle Schulung?" — singular but with extra words)
  Body density: 15/20  — 3 exact "n8n Schulung" in body, plus many variants
  First 100ch:  2/10   — variant "n8n Schulungen" in first 60 chars, not exact

  SCORE: 52/100
```

## Step 5: Update keywords.md

After scoring all pages, update `keywords.md`:

1. Set the **Score** column to the numeric score: `52`
2. Set the **Review** column to today's date: `2026-03-18`

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
