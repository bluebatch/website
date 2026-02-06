"use client";

import Button from "@/components/button";
import ConsultationCtaDefault from "@/components/consultation-cta-default";
import ContentWrapper from "@/components/content-wrapper";
import VideoBackgroundHero from "@/components/hero-components/video-background-hero";

export default function Page() {
  return (
    <>
      <ContentWrapper isFirstSection noPadding>
        <VideoBackgroundHero
          videoSrc="/videos/ki_workflow.mp4"
          overlayOpacity={0.9}
          opacityBackground="white"
        >
          <VideoBackgroundHero.TopLabel>
            Next Generation Workflows
          </VideoBackgroundHero.TopLabel>
          <VideoBackgroundHero.Headline>
            Powerful AI Workflows mit
            <VideoBackgroundHero.Highlight>
              bluebatch
            </VideoBackgroundHero.Highlight>
          </VideoBackgroundHero.Headline>

          <VideoBackgroundHero.Description>
            Verwandeln Sie Ihr Unternehmen mit intelligenter Automatisierung und
            KI-gestützten Workflows.
          </VideoBackgroundHero.Description>
        </VideoBackgroundHero>
      </ContentWrapper>
      <ContentWrapper>
        {/* <!-- Calendly inline widget begin --> */}
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/max-oseven/30min"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        ></script>
        {/* <!-- Calendly inline widget end --> */}
      </ContentWrapper>

      <ContentWrapper noPadding>
        <ConsultationCtaDefault />
      </ContentWrapper>
    </>
  );
}
