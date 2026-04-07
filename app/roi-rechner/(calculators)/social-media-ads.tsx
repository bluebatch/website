"use client";

import { useState, useMemo } from "react";
import { Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import config from "../config.json";
import ContactButton from "@/components/buttons/contact-button";
import {
  formatEur,
  formatDecimal,
  paramNum,
  StackedBar,
  ResultMetric,
  Slider,
  ServiceToggle,
  CalculatorShell,
  useUrlSync,
} from "../shared";

const cat = config.categories["social-media-ads"];

export default function SocialMediaAdsCalculator({
  initialParams,
}: {
  initialParams: Record<string, string | undefined>;
}) {
  const { defaults, sliders } = cat;

  const [postsPlanned, setPostsPlanned] = useState(paramNum(initialParams, "posts", defaults.postsPlanned));
  const [minPerPost, setMinPerPost] = useState(paramNum(initialParams, "before", defaults.minutesPerPost));
  const [minPerPostAfter, setMinPerPostAfter] = useState(paramNum(initialParams, "after", defaults.minutesPerPostAfter));
  const [hourlyCost, setHourlyCost] = useState(paramNum(initialParams, "hourly", defaults.hourlyCostEur));
  const [serviceEnabled, setServiceEnabled] = useState(initialParams.service !== "0");

  const activeMrr = serviceEnabled ? defaults.mrrEur : defaults.mrrBaseEur;

  useUrlSync("/roi-rechner/social-media-ads", {
    posts: postsPlanned,
    before: minPerPost,
    after: minPerPostAfter,
    hourly: hourlyCost,
    service: serviceEnabled,
  });

  const results = useMemo(() => {
    const timeSavedPerPost = minPerPost - minPerPostAfter;
    const totalHoursSaved = (postsPlanned * timeSavedPerPost) / 60;

    const costWithoutAi = (postsPlanned * minPerPost / 60) * hourlyCost;
    const costWithAi = (postsPlanned * minPerPostAfter / 60) * hourlyCost;

    const grossSavings = costWithoutAi;
    const netSavings = costWithoutAi - costWithAi - activeMrr;
    const amortMonths = netSavings > 0 ? defaults.setupCostEur / netSavings : Infinity;
    const netYear1 = netSavings * 12 - defaults.setupCostEur;
    const roiYear1 = defaults.setupCostEur > 0 ? (netYear1 / defaults.setupCostEur) * 100 : 0;
    const netYear2 = netSavings * 12;
    const roiYear2 = (activeMrr * 12) > 0 ? (netYear2 / (activeMrr * 12)) * 100 : 0;

    return {
      totalHoursSaved,
      grossSavings,
      costWithoutAi,
      costWithAi,
      netSavings,
      amortMonths,
      netYear1,
      roiYear1,
      netYear2,
      roiYear2,
      timeSavedPerPost,
    };
  }, [postsPlanned, minPerPost, minPerPostAfter, hourlyCost, activeMrr, defaults]);

  const isPositive = results.netSavings > 0;

  const maOhneAiYear = results.costWithoutAi * 12;
  const maMitAiYear = results.costWithAi * 12;
  const serviceYear = activeMrr * 12;
  const setupYear1 = defaults.setupCostEur;
  const chartMax = Math.max(maOhneAiYear, maMitAiYear + serviceYear + setupYear1);

  return (
    <CalculatorShell
      icon={<Megaphone className="w-6 h-6 text-white" />}
      label={cat.label}
      description={cat.description}
    >
      {/* Row 1: Konditionen | Auf den Punkt */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col justify-center">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
            Bluebatch Konditionen
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400">Setup (einmalig)</p>
              <p className="text-lg font-bold text-gray-900">{formatEur(defaults.setupCostEur)}</p>
            </div>
            <ServiceToggle
              enabled={serviceEnabled}
              onToggle={() => setServiceEnabled(!serviceEnabled)}
              activeMrr={activeMrr}
            />
          </div>
        </div>

        {isPositive ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-2xl p-6 text-white flex flex-col justify-center"
          >
            <p className="text-sm text-primary-200 mb-2">Auf den Punkt</p>
            <p className="text-lg font-semibold leading-relaxed">
              {postsPlanned} Posts/Monat mit je {results.timeSavedPerPost} Min.
              Ersparnis bringen euch{" "}
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
              Erhöhe die geplante Postanzahl oder die Zeitersparnis pro Post.
            </p>
          </div>
        )}
      </div>

      {/* Row 2: Eure Zahlen | Calculation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 space-y-8 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Eure Zahlen</h3>
          <Slider label={sliders.postsPlanned.label} value={postsPlanned} onChange={setPostsPlanned} min={sliders.postsPlanned.min} max={sliders.postsPlanned.max} step={sliders.postsPlanned.step} />
          <Slider label={sliders.minutesPerPost.label} value={minPerPost} onChange={(v) => { setMinPerPost(v); if (v <= minPerPostAfter) setMinPerPostAfter(Math.max(sliders.minutesPerPostAfter.min, v - 5)); }} min={sliders.minutesPerPost.min} max={sliders.minutesPerPost.max} step={sliders.minutesPerPost.step} unit="Min." />
          <Slider label={sliders.minutesPerPostAfter.label} value={minPerPostAfter} onChange={(v) => setMinPerPostAfter(Math.min(v, minPerPost - 5))} min={sliders.minutesPerPostAfter.min} max={Math.max(sliders.minutesPerPostAfter.min, minPerPost - 5)} step={sliders.minutesPerPostAfter.step} unit="Min." />
          <Slider label={sliders.hourlyCostEur.label} value={hourlyCost} onChange={setHourlyCost} min={sliders.hourlyCostEur.min} max={sliders.hourlyCostEur.max} step={sliders.hourlyCostEur.step} unit={sliders.hourlyCostEur.unit} />
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            <ResultMetric
              label="MA-Kosten ohne AI / Monat"
              value={formatEur(results.costWithoutAi)}
              sub={`${formatDecimal(results.costWithoutAi / hourlyCost)} Std. für diesen Prozess`}
              variant="default"
            />
            <ResultMetric
              label="MA-Kosten mit AI / Monat"
              value={formatEur(results.costWithAi)}
              sub={`${formatDecimal(results.costWithAi / hourlyCost)} Std. mit KI-Workflow`}
              variant="success"
            />
            <ResultMetric
              label="Netto-Ersparnis / Monat"
              value={formatEur(results.netSavings)}
              sub={`${formatDecimal(results.totalHoursSaved)} Stunden gespart`}
              variant={isPositive ? "success" : "danger"}
            />
            <ResultMetric
              label="Amortisation"
              value={results.amortMonths === Infinity ? "n/a" : `${formatDecimal(results.amortMonths)} Monate`}
              sub={isPositive ? "bis Break-even" : "kein ROI bei aktuellen Werten"}
              variant={results.amortMonths <= 6 ? "success" : results.amortMonths <= 12 ? "default" : "danger"}
            />
            <ResultMetric
              label="Gewinn Jahr 1"
              value={formatEur(results.netYear1)}
              sub={`ROI ${Math.round(results.roiYear1)} %`}
              variant={results.netYear1 > 0 ? "highlight" : "danger"}
            />
            <ResultMetric
              label="Gewinn Jahr 2"
              value={formatEur(results.netYear2)}
              sub={`ROI ${Math.round(results.roiYear2)} %`}
              variant={results.netYear2 > 0 ? "highlight" : "danger"}
            />
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
