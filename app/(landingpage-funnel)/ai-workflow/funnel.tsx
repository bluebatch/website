"use client";

import FunnelWizard from "../_engine/funnel-wizard";
import { aiWorkflowFunnel } from "./funnel-config";

export default function AiWorkflowFunnel() {
  return <FunnelWizard config={aiWorkflowFunnel} />;
}
