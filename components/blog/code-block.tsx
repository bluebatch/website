"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { base16AteliersulphurpoolLight as style } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  children: string;
  language?: string;
  showLineNumbers?: boolean;
  fileName?: string;
};

export default function CodeBlock({
  children,
  language = "typescript",
  showLineNumbers = false,
  fileName,
}: CodeBlockProps) {
  return (
    <div className="my-6 rounded-lg overflow-hidden shadow-lg border border-gray-200">
      {fileName && (
        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
          <span className="text-sm text-gray-300 font-mono">{fileName}</span>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={style}
        showLineNumbers={showLineNumbers}
        customStyle={{
          margin: 0,
          padding: "1.5rem",
          fontSize: "0.875rem",
          lineHeight: "1.5",
        }}
        codeTagProps={{
          style: {
            fontFamily:
              'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
          },
        }}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
