import Link from "next/link";
import { getAllUseCases } from "@/data/use-cases";
import ContentWrapper from "@/components/content-wrapper";

export default function UseCasesPage() {
  const useCases = getAllUseCases();

  return (
    <ContentWrapper>
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Use Cases
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          See how different organizations use our product to achieve their goals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {useCases.map((useCase) => (
          <Link
            key={useCase.slug}
            href={`/use-cases/${useCase.slug}`}
            className="group block bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
          >
            <div className="p-6">
              <div className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">
                {useCase.category}
              </div>
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 mb-3">
                {useCase.title}
              </h2>
              <p className="text-gray-600 mb-4">{useCase.description}</p>
              <span className="text-sm font-medium text-primary-600 group-hover:underline">
                View case study →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </ContentWrapper>
  );
}
