import Link from "next/link";
import { getUseCaseBySlug, getAllUseCases } from "@/data/use-cases";
import { notFound } from "next/navigation";
import ContentWrapper from "@/components/content-wrapper";

interface UseCasePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all use cases at build time
export async function generateStaticParams() {
  const useCases = getAllUseCases();
  return useCases.map((useCase) => ({
    slug: useCase.slug,
  }));
}

export default async function UseCasePage({ params }: UseCasePageProps) {
  const { slug } = await params;

  const useCase = getUseCaseBySlug(slug);

  if (!useCase) {
    notFound();
  }

  return (
    <ContentWrapper>
      <Link
        href="/use-cases"
        className="text-sm font-medium text-primary-600 hover:underline mb-8 inline-block"
      >
        ← Back to Use Cases
      </Link>

      <article>
        <div className="mb-8">
          <div className="text-xs font-semibold text-primary-600 uppercase tracking-wide mb-2">
            {useCase.category}
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            {useCase.title}
          </h1>
          <p className="text-lg text-gray-600">{useCase.company}</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700">{useCase.description}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
            <p className="text-gray-700">{useCase.challenge}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h2>
            <p className="text-gray-700">{useCase.solution}</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
            <ul className="space-y-2">
              {useCase.results.map((result, index) => (
                <li key={index} className="text-gray-700">{result}</li>
              ))}
            </ul>
          </section>
        </div>
      </article>
    </ContentWrapper>
  );
}
