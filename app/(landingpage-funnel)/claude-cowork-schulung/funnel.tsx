"use client";

import FunnelWizard from "../_engine/funnel-wizard";
import { claudeCoworkFunnel } from "./funnel-config";

export default function ClaudeCoworkFunnel() {
  return <FunnelWizard config={claudeCoworkFunnel} />;
}
