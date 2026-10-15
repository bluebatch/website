"use client";

import CheckFunnel from "../_engine/check-funnel";
import { insolvenzverwalterCheck } from "./funnel-config";

export default function InsolvenzverwalterFunnel() {
  return <CheckFunnel config={insolvenzverwalterCheck} />;
}
