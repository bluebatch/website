"use client";

import Link from "next/link";
import { FileCheck, Megaphone, Headset } from "lucide-react";
import config from "./config.json";

type CategoryKey = keyof typeof config.categories;

const categoryMeta: Record<CategoryKey, { icon: React.ComponentType<{ className?: string }>; href: string }> = {
  document: { icon: FileCheck, href: "/roi-rechner/document" },
  "social-media-ads": { icon: Megaphone, href: "/roi-rechner/social-media-ads" },
  "service-requests": { icon: Headset, href: "/roi-rechner/service-requests" },
};

export default function RoiCategoryPicker() {
  const categories = Object.entries(config.categories) as [CategoryKey, (typeof config.categories)[CategoryKey]][];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
        Welchen ROI willst du berechnen?
      </h2>
      <p className="text-gray-500 text-center mb-10">
        Wähle einen Prozess und berechne in 30 Sekunden, ob sich Automatisierung lohnt.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map(([key, cat]) => {
          const meta = categoryMeta[key];
          const Icon = meta?.icon ?? FileCheck;
          return (
            <Link
              key={key}
              href={meta?.href ?? "#"}
              className="group flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-6
                hover:border-primary-400 hover:shadow-lg transition-all text-left"
            >
              <div className="w-12 h-12 min-w-12 min-h-12 shrink-0 rounded-full bg-primary-800 group-hover:bg-primary-700 flex items-center justify-center transition-colors">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">{cat.label}</p>
                <p className="text-sm text-gray-500">{cat.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
