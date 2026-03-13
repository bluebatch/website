# Create Blog Post

You are a blog post generator for the Bluebatch website. You take a markdown file as input and create a complete blog post page with all required wiring.

## Input

The user provides a path to a `.md` file via `$ARGUMENTS`. If no argument is given, ask for the file path.

## Step 1: Read and Parse the Markdown File

Read the provided `.md` file. It MUST have YAML frontmatter delimited by `---`:

```markdown
---
slug: my-blog-post-slug
title: "The Blog Post Title"
description: "SEO description for the post"
author: "Author Name"  # Must match a key in lib/blog-authors.ts
date: "2026-02-27"
image: "/blog/my-blog-post-slug/hero.png"
readTime: "8 Min. Lesezeit"
tags:
  - ki
  - automatisierung
---

## First Section Title

Paragraph text here...
```

**Validate** that all required frontmatter fields are present: `slug`, `title`, `description`, `author`, `date`, `image`, `readTime`, `tags`. If any are missing, stop and ask the user to add them.

## Step 2: Parse Markdown Body into JSX

Convert the markdown body (everything after the second `---`) into JSX using the blog component system. Follow these exact conversion rules:

### Headings
- `## Heading Text` becomes `<Typo.H2 id="kebab-case-id">Heading Text</Typo.H2>` — these are the main sections that also appear in the sidebar navigation
- `### Subheading` becomes `<Typo.H3>Subheading</Typo.H3>`
- `#### Subheading` becomes `<Typo.H4>Subheading</Typo.H4>`

### Text
- Paragraphs become `<Typo.Paragraph>text</Typo.Paragraph>`
- `**bold text**` becomes `<strong>bold text</strong>`
- When bold text is in the middle of a paragraph, use `{" "}` for proper JSX spacing around it:
  ```tsx
  <Typo.Paragraph>
    Regular text{" "}
    <strong>bold text</strong>{" "}
    more regular text.
  </Typo.Paragraph>
  ```

### Lists
- Bullet lists become:
  ```tsx
  <Typo.List>
    <Typo.ListItem>Item text</Typo.ListItem>
    <Typo.ListItem><strong>Bold prefix</strong> rest of text</Typo.ListItem>
  </Typo.List>
  ```

### Blockquotes / Callout Boxes
- `> **Kernaussage:** text` becomes:
  ```tsx
  <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6">
    <p className="text-sm font-medium">
      <strong>Kernaussage:</strong> text
    </p>
  </div>
  ```

### Images
- `![alt text](path)` becomes:
  ```tsx
  <BlogImage
    src="/blog/{slug}/image-name.png"
    alt="alt text"
    width={1200}
    height={800}
  />
  ```
  Note: Image paths from the markdown should be translated to `/blog/{slug}/filename`. If the markdown uses relative paths like `img/something.png`, map them to `/blog/{slug}/something.png`.

### Horizontal Rules / Separators
- `---` between sections becomes `<Separator />`

### Tables
- Markdown tables become HTML `<table>` with Tailwind classes:
  ```tsx
  <div className="overflow-x-auto my-6">
    <table className="min-w-full text-sm border border-gray-200">
      <thead>
        <tr className="bg-gray-50">
          <th className="px-4 py-3 text-left font-semibold border-b border-gray-200">Header</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b border-gray-100">
          <td className="px-4 py-3">Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
  ```

### Code Blocks
- Fenced code blocks become:
  ```tsx
  <CodeBlock language="typescript" showLineNumbers>
    {`code here`}
  </CodeBlock>
  ```
- If a code block file is referenced (e.g., `@code-blocks/filename.ts`), use:
  ```tsx
  <CodeBlockFile
    language="typescript"
    src="{slug}/code-blocks/filename.ts"
    showLineNumbers
  />
  ```

### Section Structure
Each `##` heading starts a new section. Wrap each section in a `<div>` and separate sections with `<Separator />`:

```tsx
<div>
  <Typo.H2 id="section-id">Section Title</Typo.H2>
  {/* section content */}
</div>

<Separator />

<div>
  <Typo.H2 id="next-section">Next Section</Typo.H2>
  {/* next section content */}
</div>
```

The very first section (introduction before any `##`) should be wrapped in `<div className="prose prose-lg">`.

## Step 3: Generate the page.tsx File

Create the file at `app/blog/{slug}/page.tsx` with this structure:

```tsx
import type { Metadata } from "next";
import Typo from "@/components/ui/typo";
import { BlogImage, Separator, BlogLayout, BlogHero } from "@/components/blog";
// Add CodeBlock/CodeBlockFile imports only if the post uses code blocks

export const metadata: Metadata = {
  title: "{title} | Bluebatch",
  description: "{description}",
  openGraph: {
    title: "{title}",
    description: "{description}",
    type: "article",
    locale: "de_DE",
    siteName: "Bluebatch",
    images: [
      {
        url: "{image}",
        width: 1200,
        height: 630,
        alt: "{title}",
      },
    ],
  },
  alternates: {
    canonical: "/blog/{slug}",
  },
};

export default function Page() {
  return (
    <>
      <BlogHero>
        <BlogHero.Headline>{title}</BlogHero.Headline>
        <BlogHero.Meta>
          <BlogHero.Author
            image="{authorImage or omit}"
            linkedIn="{authorLinkedIn or omit}"
          >
            {author}
          </BlogHero.Author>
          <BlogHero.ReadTime>{readTime}</BlogHero.ReadTime>
          <BlogHero.Date dateTime="{date}">{formatted date}</BlogHero.Date>
        </BlogHero.Meta>
        <BlogHero.Image src="{image}" alt="{title}" />
      </BlogHero>

      <BlogLayout>
        <BlogLayout.Content>
          {/* Generated JSX content sections here */}
        </BlogLayout.Content>

        <BlogLayout.Navigation>
          {/* One NavigationItem per ## heading */}
          <BlogLayout.NavigationItem idLink="section-id">
            Section Title
          </BlogLayout.NavigationItem>
        </BlogLayout.Navigation>
      </BlogLayout>
    </>
  );
}
```

### Date Formatting
Format the `date` field (e.g., `2026-02-27`) as German date text: `27. Februar 2026`.

German month names: Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember.

## Step 4: Copy the Markdown Source

Copy the original `.md` file to `app/blog/{slug}/content.md` as a reference copy.

## Step 5: Update Blog Post Registry

Read `lib/blog-posts.ts` and add the new post as the **first entry** in the `blogPosts` array (newest first):

```typescript
{
  slug: "{slug}",
  title: "{title}",
  description: "{description}",
  author: "{author}",
  date: "{date}",
  image: "{image}",
  tags: ["tag1", "tag2"],
},
```

## Step 6: Update Blog Tags

Read `lib/blog-tags.ts`. For each tag in the post's `tags` array, check if it already exists in `blogTags`. If a tag is new, add it to the array with a sensible `label` (capitalized/formatted version of the ID).

## Step 7: Image Audit — Rename and Compress

After the page is created, audit all images in the blog post directory (`public/blog/{slug}/` or referenced in the post).

### Rename images
- Image filenames must be **descriptive and kebab-case** — they should reflect the content/purpose of the image, not be generic.
- **Bad names:** `IMG_2847.png`, `screenshot-1.png`, `image.jpg`, `hero.png` (if non-descriptive), `Untitled.png`
- **Good names:** `bewerbungsprozess-zeitstrahl.png`, `n8n-workflow-kandidaten-matching.png`, `time-to-hire-vergleich.jpg`
- If you rename a file, update all references in `page.tsx` (BlogImage src, BlogHero.Image src, metaCustom.image) and `content.md`.

### Compress images
- Check file sizes using `ls -lh`. Images over **300 KB** should be compressed.
- Use system tools to compress: `npx sharp-cli` or `convert` (ImageMagick) if available, or `pnpm exec` tools.
- Target: JPEG quality 80, PNG → convert to WebP if over 500 KB, max width 1600px.
- If no compression tool is available, flag the large images to the user with their sizes.

### Verify
- Ensure all image paths in `page.tsx` still resolve correctly after renames.
- List any images renamed and their old → new names in the summary.

## Step 8: Verify

Run `npm run build` to verify the new page compiles without errors. If there are errors, fix them.

## Summary

After completion, output:
- The blog post URL: `/blog/{slug}`
- Number of sections created
- Any new tags added
- Whether the build passed

## Important Rules

- Use ONLY the existing blog components: `BlogHero`, `BlogLayout`, `BlogImage`, `Separator`, `CodeBlock`, `CodeBlockFile`, `Typo.*`
- Follow the exact sub-component patterns shown in existing blog posts
- Keep the page.tsx as a server component (no "use client")
- All IDs on `<Typo.H2>` elements must be kebab-case
- The `BlogLayout.NavigationItem` entries must match the `id` attributes on the `<Typo.H2>` elements exactly
- Do not add any extra dependencies or components
