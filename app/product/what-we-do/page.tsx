import Link from "next/link";
import ContentWrapper from "@/components/ContentWrapper";

export default function WhatWeDoPage() {
  const features = [
    {
      title: "Feature 1",
      description: "Placeholder description for feature 1. Replace with actual feature details.",
    },
    {
      title: "Feature 2",
      description: "Placeholder description for feature 2. Replace with actual feature details.",
    },
    {
      title: "Feature 3",
      description: "Placeholder description for feature 3. Replace with actual feature details.",
    },
    {
      title: "Feature 4",
      description: "Placeholder description for feature 4. Replace with actual feature details.",
    },
  ];

  return (
    <ContentWrapper>
      <Link
        href="/product"
        className="text-sm font-medium text-primary-600 hover:underline mb-8 inline-block"
      >
        ← Back to Product
      </Link>

      <div className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          What We Do
        </h1>
        <p className="text-xl text-gray-600">
          We provide innovative solutions that help businesses grow and succeed in the digital age.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-primary-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our mission is to empower businesses with the tools and technology they need to thrive.
          We are committed to delivering exceptional value through innovation, reliability, and
          customer-focused solutions.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Benefits</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-3">✓</span>
            <span className="text-gray-700">Increase operational efficiency and productivity</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-3">✓</span>
            <span className="text-gray-700">Reduce costs through automation and optimization</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-3">✓</span>
            <span className="text-gray-700">Scale your business without scaling complexity</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-6 w-6 text-primary-600 mr-3">✓</span>
            <span className="text-gray-700">Access real-time insights and analytics</span>
          </li>
        </ul>
      </section>
    </ContentWrapper>
  );
}
