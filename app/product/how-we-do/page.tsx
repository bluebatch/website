import Link from "next/link";
import ContentWrapper from "@/components/ContentWrapper";

export default function HowWeDoPage() {
  const processes = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We begin by understanding your needs and objectives to create a tailored strategy.",
    },
    {
      step: "2",
      title: "Design & Development",
      description: "Our team designs and develops solutions using cutting-edge technology and best practices.",
    },
    {
      step: "3",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures reliability, performance, and security at every stage.",
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing support to ensure continued success.",
    },
  ];

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
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
          How We Do It
        </h1>
        <p className="text-xl text-gray-600">
          Our proven methodology combines innovation, expertise, and customer collaboration.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Process</h2>
        <div className="space-y-8">
          {processes.map((process) => (
            <div
              key={process.step}
              className="flex gap-6 items-start bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                {process.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer-Centric</h3>
            <p className="text-gray-600">
              We put our customers at the heart of everything we do, ensuring their success is our success.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation-Driven</h3>
            <p className="text-gray-600">
              We continuously explore new technologies and approaches to deliver cutting-edge solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality-Focused</h3>
            <p className="text-gray-600">
              We maintain the highest standards of quality in every aspect of our work.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technology Stack</h2>
        <p className="text-gray-600 mb-6">
          We leverage modern, proven technologies to build robust and scalable solutions:
        </p>
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </ContentWrapper>
  );
}
