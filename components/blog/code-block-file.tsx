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
  // Read file from the blog post directory
  const filePath = path.join(process.cwd(), "app/blog", src);
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
