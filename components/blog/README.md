# Blog Components

## CodeBlock

Syntax-highlighted code blocks with VSCode-like themes.

### Basic Usage

```tsx
import CodeBlock from "@/components/blog/code-block";

<CodeBlock language="typescript">
  {`const hello = "world";`}
</CodeBlock>
```

### Props

- `children` (string, required): The code to display
- `language` (string, optional): Programming language for syntax highlighting
  - Default: `"typescript"`
  - Supported: `typescript`, `javascript`, `jsx`, `tsx`, `json`, `bash`, `shell`, `yaml`, `docker`, `markdown`, `css`, `html`, `python`, `go`, `rust`, and many more
- `showLineNumbers` (boolean, optional): Show line numbers on the left
  - Default: `false`
- `fileName` (string, optional): Display a filename header above the code block

### Examples

#### TypeScript with line numbers
```tsx
<CodeBlock language="typescript" showLineNumbers>
  {`interface User {
  name: string;
  email: string;
}`}
</CodeBlock>
```

#### JSON with filename
```tsx
<CodeBlock language="json" fileName="package.json">
  {`{
  "name": "my-app",
  "version": "1.0.0"
}`}
</CodeBlock>
```

#### Bash commands
```tsx
<CodeBlock language="bash">
  {`npm install
npm run build
npm start`}
</CodeBlock>
```

#### YAML
```tsx
<CodeBlock language="yaml" fileName="docker-compose.yml">
  {`version: "3.8"
services:
  web:
    image: nginx:latest`}
</CodeBlock>
```

## BlogImage

Responsive image component with captions, alignment, and sizing options.

### Basic Usage

```tsx
import BlogImage from "@/components/blog/blog-image";

<BlogImage
  src="/path/to/image.png"
  alt="Description"
  caption="Optional caption"
  size="lg"
  border={true}
/>
```

### Props

- `src` (string, required): Image path
- `alt` (string, required): Alt text for accessibility
- `caption` (string, optional): Caption displayed below the image
- `align` (string, optional): `"left"` | `"center"` | `"right"` (default: `"center"`)
- `size` (string, optional): `"full"` | `"half"` | `"lg"` | `"md"` | `"sm"` (default: `"full"`)
- `border` (boolean, optional): Add shadow and border (default: `false`)
- `width` (number, optional): Image width in pixels (default: `1200`)
- `height` (number, optional): Image height in pixels (default: `800`)
