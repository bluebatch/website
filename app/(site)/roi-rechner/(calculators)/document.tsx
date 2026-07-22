"use client";

import { useState, useMemo } from "react";
import { FileCheck } from "lucide-react";
import { motion } from "framer-motion";
import config from "../config.json";
import ContactButton from "@/components/buttons/contact-button";
import {
  formatEur,
  formatDecimal,
  formatMinutes,
  paramNum,
  StackedBar,
  ResultMetric,
  Slider,
  TierSelector,
  RangeSlider,
  CalculatorShell,
  useUrlSync,
  detectTier,
  clampToTier,
  type Tier,
  type TierOption,
} from "../shared";

const cat = config.categories.document;

const TIER_OPTIONS: TierOption[] = [
  {
    key: "small",
    label: "Small",
    description: "1 Use-Case, einfache Workflow-Integration",
  },
  {
    key: "medium",
    label: "Medium",
    description: "Mehrere Use-Cases, KI + 3–5 Integrationen",
  },
  {
    key: "large",
    label: "Large",
    description: "Enterprise, Multi-System & komplexe KI-Agents",
  },
];

const SETUP_TIERS: Tier[] = [
  { key: "small", label: "Small", min: 2000, max: 4000 },
  { key: "medium", label: "Medium", min: 4000, max: 12000 },
  { key: "large", label: "Large", min: 12000, max: 30000 },
];

const MAINTENANCE_TIERS: Tier[] = [
  { key: "small", label: "Small", min: 50, max: 500 },
  { key: "medium", label: "Medium", min: 500, max: 2000 },
  { key: "large", label: "Large", min: 2000, max: 5000 },
];

function findTier(tiers: Tier[], key: string): Tier {
  return tiers.find((t) => t.key === key) ?? tiers[0];
}

function midOfTier(t: Tier, step: number): number {
  return Math.round((t.min + t.max) / 2 / step) * step;
}

export default function DocumentCalculator({
  initialParams,
}: {
  initialParams: Record<string, string | undefined>;
}) {
  const { defaults, sliders } = cat;

  const [docsPerMonth, setDocsPerMonth] = useState(paramNum(initialParams, "docs", defaults.documentsPerMonth));
  const [minBefore, setMinBefore] = useState(paramNum(initialParams, "before", defaults.minutesBefore));
  const [minAfter, setMinAfter] = useState(paramNum(initialParams, "after", defaults.minutesAfter));
  const [hourlyCost, setHourlyCost] = useState(paramNum(initialParams, "hourly", defaults.hourlyCostEur));
  const [setupCost, setSetupCost] = useState(paramNum(initialParams, "setup", defaults.setupCostEur));
  const [maintenanceCost, setMaintenanceCost] = useState(paramNum(initialParams, "maint", defaults.mrrEur));

  // Tier is shared between Setup and Maintenance. URL `tier=` wins; otherwise
  // derive from setupCost on first render.
  const [tierKey, setTierKey] = useState(() => {
    const urlTier = initialParams.tier;
    if (urlTier && TIER_OPTIONS.some((o) => o.key === urlTier)) return urlTier;
    return detectTier(
      paramNum(initialParams, "setup", defaults.setupCostEur),
      SETUP_TIERS,
    ).key;
  });

  const setupTier = findTier(SETUP_TIERS, tierKey);
  const maintTier = findTier(MAINTENANCE_TIERS, tierKey);

  const handleTierSelect = (newKey: string) => {
    setTierKey(newKey);
    const newSetup = findTier(SETUP_TIERS, newKey);
    const newMaint = findTier(MAINTENANCE_TIERS, newKey);
    setSetupCost(midOfTier(newSetup, 100));
    setMaintenanceCost(midOfTier(newMaint, 50));
  };

  useUrlSync("/roi-rechner/document", {
    docs: docsPerMonth,
    before: minBefore,
    after: minAfter,
    hourly: hourlyCost,
    tier: tierKey,
    setup: setupCost,
    maint: maintenanceCost,
  });

  const results = useMemo(() => {
    const timeSavedPerDoc = minBefore - minAfter;
    const totalHoursSaved = (docsPerMonth * timeSavedPerDoc) / 60;

    // MA-Kosten ohne AI
    const costWithoutAi = (docsPerMonth * minBefore / 60) * hourlyCost;
    // MA-Kosten mit AI
    const costWithAi = (docsPerMonth * minAfter / 60) * hourlyCost;

    const grossSavings = costWithoutAi;
    const netSavings = costWithoutAi - costWithAi - maintenanceCost;
    const amortMonths = netSavings > 0 ? setupCost / netSavings : Infinity;
    const netYear1 = netSavings * 12 - setupCost;
    const roiYear1 = setupCost > 0 ? (netYear1 / setupCost) * 100 : 0;
    const netYear2 = netSavings * 12;
    const roiYear2 = (maintenanceCost * 12) > 0 ? (netYear2 / (maintenanceCost * 12)) * 100 : 0;
    return { timeSavedPerDoc, totalHoursSaved, grossSavings, costWithoutAi, costWithAi, netSavings, amortMonths, netYear1, roiYear1, netYear2, roiYear2 };
  }, [docsPerMonth, minBefore, minAfter, hourlyCost, maintenanceCost, setupCost]);

  const isPositive = results.netSavings > 0;

  // Chart: ohne AI vs. mit AI (pro Jahr)
  const maOhneAiYear = results.costWithoutAi * 12;
  const maMitAiYear = results.costWithAi * 12;
  const serviceYear = maintenanceCost * 12;
  const setupYear1 = setupCost;
  const chartMax = Math.max(maOhneAiYear, maMitAiYear + serviceYear + setupYear1);

  return (
    <CalculatorShell
      icon={<FileCheck className="w-6 h-6 text-white" />}
      label={cat.label}
      description={cat.description}
    >
      {/* Row 1: Konditionen | Auf den Punkt */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 space-y-5">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Bluebatch Konditionen
          </h3>
          <TierSelector
            options={TIER_OPTIONS}
            activeKey={tierKey}
            onSelect={handleTierSelect}
          />
          <RangeSlider
            label="Projektsetup (einmalig)"
            value={setupCost}
            onChange={(v) => setSetupCost(clampToTier(v, setupTier))}
            tier={setupTier}
            step={100}
          />
          <RangeSlider
            label="Wartung & Monitoring / Monat"
            value={maintenanceCost}
            onChange={(v) => setMaintenanceCost(clampToTier(v, maintTier))}
            tier={maintTier}
            step={50}
          />
        </div>

        {isPositive ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl p-6 text-white flex flex-col justify-center"
          >
            <p className="text-sm text-primary-200 mb-2">Auf den Punkt</p>
            <p className="text-lg font-semibold leading-relaxed">
              {docsPerMonth.toLocaleString("de-DE")} Dokumente/Monat mit je{" "}
              {results.timeSavedPerDoc} Min. Ersparnis bringen euch{" "}
              <span className="text-secondary-400">{formatEur(results.netYear1)} im ersten Jahr</span>
              {" "}und danach{" "}
              <span className="text-secondary-400">{formatEur(results.netYear2)} pro Jahr</span>.
            </p>
            <div className="mt-4">
              <ContactButton icon="calendar" size="sm">Case besprechen</ContactButton>
            </div>
          </motion.div>
        ) : (
          <div className="bg-red-50 rounded-2xl p-6 flex flex-col justify-center">
            <p className="text-sm text-red-400 mb-2">Auf den Punkt</p>
            <p className="text-lg font-semibold text-red-700 leading-relaxed">
              Bei den aktuellen Werten übersteigen die Kosten die Ersparnis.
              Erhöhe das Dokumentenvolumen oder die Zeitersparnis pro Dokument.
            </p>
          </div>
        )}
      </div>

      {/* Row 2: Eure Zahlen | Calculation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 space-y-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Eure Zahlen</h3>
          <Slider label={sliders.documentsPerMonth.label} value={docsPerMonth} onChange={setDocsPerMonth} min={sliders.documentsPerMonth.min} max={sliders.documentsPerMonth.max} step={sliders.documentsPerMonth.step} />
          <Slider label={sliders.minutesBefore.label} value={minBefore} onChange={(v) => { setMinBefore(v); if (v <= minAfter) setMinAfter(Math.max(sliders.minutesAfter.min, v - 1)); }} min={sliders.minutesBefore.min} max={sliders.minutesBefore.max} step={sliders.minutesBefore.step} format={formatMinutes} />
          <Slider label={sliders.minutesAfter.label} value={minAfter} onChange={(v) => setMinAfter(Math.min(v, minBefore - 1))} min={sliders.minutesAfter.min} max={Math.min(sliders.minutesAfter.max, minBefore - 1)} step={sliders.minutesAfter.step} format={formatMinutes} />
          <Slider label={sliders.hourlyCostEur.label} value={hourlyCost} onChange={setHourlyCost} min={sliders.hourlyCostEur.min} max={sliders.hourlyCostEur.max} step={sliders.hourlyCostEur.step} unit={sliders.hourlyCostEur.unit} />
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <ResultMetric label="MA-Kosten ohne AI / Monat" value={formatEur(results.costWithoutAi)} sub={`${formatDecimal(results.costWithoutAi / hourlyCost)} Std. für diesen Prozess`} variant="default" />
            <ResultMetric label="MA-Kosten mit AI / Monat" value={formatEur(results.costWithAi)} sub={`${formatDecimal(results.costWithAi / hourlyCost)} Std. mit KI-Workflow`} variant="success" />
            <ResultMetric label="Netto-Ersparnis / Monat" value={formatEur(results.netSavings)} sub={`${formatDecimal(results.totalHoursSaved)} Stunden gespart`} variant={isPositive ? "success" : "danger"} />
            <ResultMetric label="Amortisation" value={results.amortMonths === Infinity ? "n/a" : `${formatDecimal(results.amortMonths)} Monate`} sub={isPositive ? "bis Break-even" : "kein ROI bei aktuellen Werten"} variant={results.amortMonths <= 6 ? "success" : results.amortMonths <= 12 ? "default" : "danger"} />
            <ResultMetric label="Gewinn Jahr 1" value={formatEur(results.netYear1)} sub={`ROI ${Math.round(results.roiYear1)} %`} variant={results.netYear1 > 0 ? "highlight" : "danger"} />
            <ResultMetric label="Gewinn Jahr 2" value={formatEur(results.netYear2)} sub={`ROI ${Math.round(results.roiYear2)} %`} variant={results.netYear2 > 0 ? "highlight" : "danger"} />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Ohne AI vs. mit AI</h3>
            <div className="space-y-5">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Jahr 1</p>
                <div className="space-y-2">
                  <StackedBar segments={[{ label: "MA ohne AI", value: maOhneAiYear, color: "bg-gray-500" }]} maxValue={chartMax} />
                  <StackedBar segments={[{ label: "MA mit AI", value: maMitAiYear, color: "bg-green-500" }, { label: "Wartung & Workflow", value: serviceYear, color: "bg-orange-400" }, { label: "Setup", value: setupYear1, color: "bg-red-400" }]} maxValue={chartMax} />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Jahr 2</p>
                <div className="space-y-2">
                  <StackedBar segments={[{ label: "MA ohne AI", value: maOhneAiYear, color: "bg-gray-500" }]} maxValue={chartMax} />
                  <StackedBar segments={[{ label: "MA mit AI", value: maMitAiYear, color: "bg-green-500" }, { label: "Wartung & Workflow", value: serviceYear, color: "bg-orange-400" }]} maxValue={chartMax} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CalculatorShell>
  );
}
