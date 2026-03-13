import fs from "fs";
import path from "path";
import CodeBlock from "./code-block";

type CodeBlockFileProps = {
  src: string;
  language?: string;
  showLineNumbers?: boolean;
  fileName?: string;
};

export default function CodeBlockFile({
  src,
  language,
  showLineNumbers,
  fileName,
}: CodeBlockFileProps) {
  // Read file from the blog post directory (supports route groups)
  const blogDir = path.join(process.cwd(), "app/blog");
  let filePath = path.join(blogDir, src);

  if (!fs.existsSync(filePath)) {
    // Search inside route groups like (technical), (pdl), etc.
    const groups = fs
      .readdirSync(blogDir, { withFileTypes: true })
      .filter((e) => e.isDirectory() && e.name.startsWith("("));
    for (const group of groups) {
      const candidate = path.join(blogDir, group.name, src);
      if (fs.existsSync(candidate)) {
        filePath = candidate;
        break;
      }
    }
  }

  const code = fs.readFileSync(filePath, "utf-8");

  return (
    <CodeBlock
      language={language}
      showLineNumbers={showLineNumbers}
      fileName={fileName}
    >
      {code}
    </CodeBlock>
  );
}
