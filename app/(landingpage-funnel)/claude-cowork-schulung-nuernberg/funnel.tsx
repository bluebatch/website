"use client";

import FunnelWizard from "../_engine/funnel-wizard";
import { claudeCoworkNuernbergFunnel } from "./funnel-config";

export default function ClaudeCoworkNuernbergFunnel() {
  return <FunnelWizard config={claudeCoworkNuernbergFunnel} />;
}
