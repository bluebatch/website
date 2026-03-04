"use client";

import { useState } from "react";
import {
  tools,
  criteria,
  comparisonData,
  defaultToolSets,
  type ToolSlug,
} from "@/lib/tool-comparison-data";

interface ToolComparisonTableProps {
  currentTool: ToolSlug;
  defaultTools?: ToolSlug[];
}

export default function ToolComparisonTable({
  currentTool,
  defaultTools,
}: ToolComparisonTableProps) {
  const initialTools = defaultTools ?? defaultToolSets[currentTool] ?? [currentTool, "n8n"];
  const [activeTools, setActiveTools] = useState<ToolSlug[]>(initialTools);

  const toggleTool = (slug: ToolSlug) => {
    if (slug === currentTool) return;
    setActiveTools((prev) =>
      prev.includes(slug)
        ? prev.filter((t) => t !== slug)
        : [...prev, slug],
    );
  };

  const toolNames = Object.fromEntries(tools.map((t) => [t.slug, t.name]));

  return (
    <div>
      {/* Toggle bar */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tools.map((tool) => {
          const isActive = activeTools.includes(tool.slug);
          const isCurrent = tool.slug === currentTool;

          if (isCurrent) {
            return (
              <span
                key={tool.slug}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-primary-800 text-white"
              >
                {tool.name}
              </span>
            );
          }

          if (isActive) {
            return (
              <button
                key={tool.slug}
                onClick={() => toggleTool(tool.slug)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-primary-100 text-primary-800 hover:bg-primary-200 transition-colors"
              >
                {tool.name}
                <svg
                  className="size-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            );
          }

          return (
            <button
              key={tool.slug}
              onClick={() => toggleTool(tool.slug)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors"
            >
              <svg
                className="size-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              {tool.name}
            </button>
          );
        })}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-sm">
        <table className="w-full border-collapse bg-white text-sm">
          <thead>
            <tr>
              <th className="px-5 py-4 text-left font-semibold bg-gray-800 text-white sticky left-0 z-10 min-w-[160px]">
                Kriterium
              </th>
              {activeTools.map((slug) => (
                <th
                  key={slug}
                  className={`px-5 py-4 text-left font-semibold min-w-[180px] ${
                    slug === currentTool
                      ? "bg-primary-900 text-white"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  {toolNames[slug]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {criteria.map((criterion, index) => (
              <tr
                key={criterion.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-5 py-3 font-semibold text-gray-900 sticky left-0 z-10 bg-inherit">
                  {criterion.label}
                </td>
                {activeTools.map((slug) => (
                  <td
                    key={slug}
                    className={`px-5 py-3 text-gray-700 ${
                      slug === currentTool ? "bg-primary-50" : ""
                    }`}
                  >
                    {comparisonData[slug][criterion.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
