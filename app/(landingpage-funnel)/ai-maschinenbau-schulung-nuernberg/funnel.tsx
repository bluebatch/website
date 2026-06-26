"use client";

import FunnelWizard from "../_engine/funnel-wizard";
import { maschinenbauNuernbergFunnel } from "./funnel-config";

export default function MaschinenbauNuernbergFunnel() {
  return <FunnelWizard config={maschinenbauNuernbergFunnel} />;
}
