"use client";

import CheckFunnel from "../_engine/check-funnel";
import { sensitivAi2Check } from "./funnel-config";

export default function SensitivAi2Funnel() {
  return <CheckFunnel config={sensitivAi2Check} />;
}
