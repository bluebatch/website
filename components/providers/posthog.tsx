"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";

const POSTHOG_KEY = "phc_CjXmLjzJx35L4T1YCkOwhYHx1Wk5viB67lndKnehi8N";
const POSTHOG_HOST = "/ingest";
const POSTHOG_UI_HOST = "https://eu.posthog.com";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      ui_host: POSTHOG_UI_HOST,
      capture_pageview: true,
      capture_pageleave: true,
      capture_exceptions: true,
      persistence: "localStorage",
    });
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
