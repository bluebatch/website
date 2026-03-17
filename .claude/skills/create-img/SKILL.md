Base directory for this skill: /workspaces/website_blue_batch/.claude/skills/create-img

# Create Image

Generate images using Google Gemini Imagen 4 API. Images are saved to the correct `public/` folder and referenced in code automatically.

## Input

The user provides a context string via the argument. Examples:
- `/create-img blogpost automatische-angebotserstellung-grosshandel`
- `/create-img page standorte/berlin hero`
- `/create-img topic "KI-Workflow Architektur" for blog xyz`

If no argument is given, ask what image(s) to generate and where to place them.

## Prerequisites

- Environment variable `GOOGLE_GEMINI_API_KEY` must be set
- Generation script: `.claude/skills/create-img/generate.py`
- Style references: `img-templates/*.json` (read-only guidance, NOT injected into prompts)

## Step 1: Understand the Context

Read the target page or blog post to understand:
- What images are needed (look for placeholder `BlogImage` with stock photos, or `<!-- BILD: -->` comments in content.md)
- The content/topic around each image position
- The image alt text (often describes what the image should show)

## Step 2: Choose a Visual Style

Read `img-templates/*.json` for style inspiration. Templates are **guidance documents** — they describe a visual direction but are NOT automatically injected into prompts. You must bake the style naturally into each prompt yourself.

For each batch of images, pick a consistent style (max 2 per blog post, hero can differ). Suggest to the user and confirm before generating.

## Step 3: Craft Prompts

This is the critical step. The prompt you write is sent DIRECTLY to Imagen with ZERO modifications. Everything the model needs must be in the prompt.

### Prompt Rules

1. **Describe the SCENE, not a chart.** Imagen generates images, not data visualizations. Instead of "bar chart showing 70% admin time", write "office worker buried under paperwork while a small clock shows most of the day gone".
2. **Bake style into the prompt naturally.** Don't list style properties. Write it as a scene description: "clean isometric 3D illustration on white background" not "style: isometric, background: white, shadows: soft".
3. **Keep prompts short and visual.** Under 80 words. Pure visual description. No metadata, no hex codes, no CSS-like properties.
4. **Minimize text in images.** Imagen is bad at rendering text. Avoid labels, numbers, percentages. If text is absolutely needed, keep it to 1-3 very short German words max.
5. **No structured data in prompts.** No bullet lists, no key-value pairs, no JSON-like syntax. Write natural English sentences.
6. **Any visible text MUST be in German.**

### Prompt Template

```
[Scene description in 1-2 sentences]. [Key visual elements]. [Style in natural words, e.g. "clean isometric 3D illustration with blue and white tones on a light background"].
```

### Example: GOOD vs BAD

BAD (will render instructions as text):
```
Horizontal bar chart showing time distribution, 30% Verkaufen in blue, 70% Admin in gray, clean infographic style, modern sans-serif typography, white background, no photorealism, vector-art look
```

GOOD (visual scene, style baked in):
```
An office desk split in two halves, the small left side is clean and organized with a handshake icon, the large right side is cluttered with paperwork and screens. Clean isometric 3D illustration with blue and white tones on a light background.
```

## Step 4: Generate Images

```bash
python3 .claude/skills/create-img/generate.py \
  --prompt "PROMPT_HERE" \
  --output public/PATH/FILENAME.png \
  --aspect 16:9
```

Note: `--template` flag has been removed. Style goes in the prompt.

### File naming rules:
- **Blog images**: `public/blog/{slug}/{descriptive-name}.png`
- **Page images**: `public/images/{descriptive-name}.png` or `public/images/{section}/{name}.png`
- Names must be kebab-case, descriptive of content

### Aspect ratios:
- Blog content images: `16:9` (default)
- Hero images: `16:9`
- Square cards/icons: `1:1`
- Tall infographics: `3:4` or `9:16`

## Step 5: Place and Reference

After generating each image:

1. **Verify** the file was created and check its size with `ls -lh`
2. **Update code references** — replace placeholder image paths in `page.tsx`
3. **For new images**, add the `BlogImage` component at the right position

## Step 6: Verify

Run `npm run build` to make sure all image references are valid and the page compiles.

## Error Handling

- If `GOOGLE_GEMINI_API_KEY` is not set, tell the user to set it: `export GOOGLE_GEMINI_API_KEY=your-key`
- If the API returns an error, show the error message and suggest adjusting the prompt
- If an image is too large (>500KB), note it for the user
- If the API blocks a prompt (safety filter), rephrase and retry

## Important Rules

- Always ask user to confirm style/template choices before generating
- Use descriptive kebab-case filenames
- Always update code references after placing images
- Generate one image at a time (API rate limits)
- Prompts in English (Imagen works best with English), but any visible text in German
- Blog images go in `public/blog/{slug}/`, NOT in `public/images/`
- NEVER put style metadata, hex codes, or structured properties in prompts
- Imagen CANNOT generate accurate charts, graphs, or data visualizations — use conceptual illustrations instead
- Run build check after all images are placed
