"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark as style } from "react-syntax-highlighter/dist/esm/styles/prism";

// Dunkles Editor-/Terminal-Fenster für Code-Beispiele auf Angebotsseiten
// (API-Aufruf, Konfiguration). Für Blog-Code gibt es components/blog/code-block.

interface CodeWindowProps {
  children: string;
  language?: string;
  /** Dateiname oder Titel in der Fensterleiste */
  title?: string;
  className?: string;
}

export default function CodeWindow({
  children,
  language = "bash",
  title,
  className = "",
}: CodeWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl bg-[#1e2127] shadow-2xl shadow-primary-900/30 ring-1 ring-white/10 ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        {title && (
          <span className="font-mono text-xs text-gray-400">{title}</span>
        )}
      </div>
      <SyntaxHighlighter
        language={language}
        style={style}
        wrapLongLines
        customStyle={{
          margin: 0,
          padding: "1.25rem 1.5rem",
          background: "transparent",
          fontSize: "0.8125rem",
          lineHeight: "1.6",
        }}
        codeTagProps={{
          style: {
            fontFamily:
              'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
          },
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
