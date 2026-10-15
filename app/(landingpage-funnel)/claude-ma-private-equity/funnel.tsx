"use client";

import CheckFunnel from "../_engine/check-funnel";
import { maPrivateEquityCheck } from "./funnel-config";

export default function MaPrivateEquityFunnel() {
  return <CheckFunnel config={maPrivateEquityCheck} />;
}
