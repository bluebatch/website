import { PostHog } from "posthog-node";

export default function PostHogClient() {
  const posthogClient = new PostHog(
    "phc_CjXmLjzJx35L4T1YCkOwhYHx1Wk5viB67lndKnehi8N",
    {
      host: "https://eu.i.posthog.com",
      flushAt: 1,
      flushInterval: 0,
    },
  );

  return posthogClient;
}
