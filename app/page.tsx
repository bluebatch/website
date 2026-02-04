"use client";

import Button from "@/components/button";
import ContentWrapper from "@/components/content-wrapper";
import VideoBackgroundHero from "@/components/hero-components/video-background-hero";
import SectionHeader from "@/components/section-header";
import VideoBoxContainer from "@/components/video-box-container";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <ContentWrapper isFirstSection noPadding>
          <VideoBackgroundHero
            videoSrc="/videos/ki_workflow.mp4"
            overlayOpacity={0.9}
            opacityBackground="white"
          >
            <VideoBackgroundHero.TopLabel>
              Next Generation AI
            </VideoBackgroundHero.TopLabel>
            <VideoBackgroundHero.Headline>
              Build Powerful AI Agents with
              <VideoBackgroundHero.Highlight>
                bluebatch
              </VideoBackgroundHero.Highlight>
            </VideoBackgroundHero.Headline>

            <VideoBackgroundHero.Description>
              Transform your business with intelligent automation and AI-powered
              workflows.
            </VideoBackgroundHero.Description>

            <VideoBackgroundHero.CallToAction>
              <Button variant="primary" href="/demo">
                Start Free Trial
              </Button>
              <Button variant="secondary" href="/learn-more">
                Learn More
              </Button>
            </VideoBackgroundHero.CallToAction>

            <VideoBackgroundHero.Stats>
              <VideoBackgroundHero.Stat value="10k+" label="Active Users" />
              <VideoBackgroundHero.Stat value="500+" label="Enterprises" />
              <VideoBackgroundHero.Stat value="99.9%" label="Uptime" />
            </VideoBackgroundHero.Stats>
          </VideoBackgroundHero>
        </ContentWrapper>

        {/* Hero Section - 2 Column Grid with Text and Video */}
        <ContentWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Section Header Text */}
            <div>
              <SectionHeader
                smallHeadline="bluebatch AI agent builder"
                largeHeadline="Build AI agents that work predictably in prod"
                description="Source availability, 500+ integrations, and support for code give you the flexibility to connect AI models to your business systems at scale. Human-in-the-loop guardrails and the ability to add pre-defined logic give you the confidence they won't fail."
                subtext="*14-day free trial. No credit card needed"
                showButton={true}
                align="left"
              />
            </div>

            {/* Right Column - Video */}
            <div>
              <VideoBoxContainer
                borderColor="border-primary-500"
                cornerSize={25}
              >
                <video
                  className="w-full rounded-lg"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/ki_workflow.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </VideoBoxContainer>
            </div>
          </div>
        </ContentWrapper>

        {/* Features Section - Light variant */}
        <ContentWrapper>
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
              <p className="text-gray-600">
                Placeholder for feature description
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
              <p className="text-gray-600">
                Placeholder for feature description
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
              <p className="text-gray-600">
                Placeholder for feature description
              </p>
            </div>
          </div>
        </ContentWrapper>

        {/* CTA Section - Dark variant with fullscreen */}
        <ContentWrapper variant="dark" fullscreen noPadding>
          <div className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl text-center">
              <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
              <p className="mt-4 text-lg text-gray-300">
                Join us today and experience the difference
              </p>
              <button className="mt-8 rounded-md bg-gradient-to-r from-secondary-600 to-primary-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:from-secondary-700 hover:to-primary-700">
                Sign Up Now
              </button>
            </div>
          </div>
        </ContentWrapper>
      </main>
    </div>
  );
}
