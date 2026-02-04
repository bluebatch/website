import { useCase1 } from "./use-case-1";
import { useCase2 } from "./use-case-2";
import { useCase3 } from "./use-case-3";

export interface UseCase {
  slug: string;
  title: string;
  description: string;
  category: string;
  company: string;
  challenge: string;
  solution: string;
  results: string[];
}

export const useCases: UseCase[] = [useCase1, useCase2, useCase3];

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find((useCase) => useCase.slug === slug);
}

export function getAllUseCases(): UseCase[] {
  return useCases;
}
