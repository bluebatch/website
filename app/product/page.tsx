import Link from "next/link";
import ContentWrapper from "@/components/ContentWrapper";

export default function ProductPage() {
  return (
    <ContentWrapper>
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Our Product
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover what we do and how we do it
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Link
          href="/product/what-we-do"
          className="group block bg-gradient-to-br from-primary-50 to-primary-100 border border-primary-200 rounded-lg shadow-sm hover:shadow-md transition-all p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 mb-4">
            What We Do
          </h2>
          <p className="text-gray-700 mb-4">
            Learn about our product features, capabilities, and the value we deliver to our customers.
          </p>
          <span className="text-sm font-medium text-primary-600 group-hover:underline">
            Learn more →
          </span>
        </Link>

        <Link
          href="/product/how-we-do"
          className="group block bg-gradient-to-br from-secondary-50 to-secondary-100 border border-secondary-200 rounded-lg shadow-sm hover:shadow-md transition-all p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 group-hover:text-secondary-600 mb-4">
            How We Do It
          </h2>
          <p className="text-gray-700 mb-4">
            Discover our methodology, technology stack, and the process behind our product development.
          </p>
          <span className="text-sm font-medium text-secondary-600 group-hover:underline">
            Learn more →
          </span>
        </Link>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Product Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-primary-600 mb-2">99%</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Uptime</h3>
            <p className="text-gray-600">Reliable service you can count on</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
            <p className="text-gray-600">Always here when you need us</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-primary-600 mb-2">10k+</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Customers</h3>
            <p className="text-gray-600">Trusted by businesses worldwide</p>
          </div>
        </div>
      </section>
    </ContentWrapper>
  );
}
