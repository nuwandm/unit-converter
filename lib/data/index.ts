import { categories } from "./categories";
import { commonConverters } from "./converters/common";
import { engineeringConverters } from "./converters/engineering";
import { heatConverters } from "./converters/heat";
import { fluidsConverters } from "./converters/fluids";
import { lightConverters } from "./converters/light";
import { electricityConverters } from "./converters/electricity";
import { magnetismConverters } from "./converters/magnetism";
import { radiologyConverters } from "./converters/radiology";
import { unitSystemsConverters } from "./converters/unit-systems";
import { Category } from "@/types/category";
import { Converter } from "@/types/converter";

// Aggregate all converters
const allConverters: Converter[] = [
  ...commonConverters,
  ...engineeringConverters,
  ...heatConverters,
  ...fluidsConverters,
  ...lightConverters,
  ...electricityConverters,
  ...magnetismConverters,
  ...radiologyConverters,
  ...unitSystemsConverters,
];

/**
 * Get all categories
 */
export function getCategories(): Category[] {
  return categories;
}

/**
 * Get a single category by slug
 */
export function getCategory(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

/**
 * Get all converters
 */
export function getAllConverters(): Converter[] {
  return allConverters;
}

/**
 * Get a specific converter by category and slug
 */
export function getConverter(categorySlug: string, converterSlug: string): Converter | undefined {
  return allConverters.find(
    (conv) => conv.category === categorySlug && conv.slug === converterSlug
  );
}

/**
 * Get all converters for a specific category
 */
export function getConvertersByCategory(categorySlug: string): Converter[] {
  return allConverters.filter((conv) => conv.category === categorySlug);
}

/**
 * Get converter by ID
 */
export function getConverterById(id: string): Converter | undefined {
  return allConverters.find((conv) => conv.id === id);
}

/**
 * Search converters by keyword
 */
export function searchConverters(query: string): Converter[] {
  const lowercaseQuery = query.toLowerCase();
  return allConverters.filter(
    (conv) =>
      conv.name.toLowerCase().includes(lowercaseQuery) ||
      conv.description.toLowerCase().includes(lowercaseQuery) ||
      conv.keywords.some((keyword) => keyword.toLowerCase().includes(lowercaseQuery))
  );
}

/**
 * Get all unique category-converter combinations for static generation
 */
export function getAllConverterPaths(): Array<{ category: string; converter: string }> {
  return allConverters.map((conv) => ({
    category: conv.category,
    converter: conv.slug,
  }));
}

/**
 * Get featured converters for homepage
 */
export function getFeaturedConverters(limit: number = 6): Converter[] {
  // Return most commonly used converters
  const featuredIds = ["length", "temperature", "weight", "volume", "pressure", "energy"];
  return featuredIds
    .map((id) => allConverters.find((conv) => conv.id === id))
    .filter((conv): conv is Converter => conv !== undefined)
    .slice(0, limit);
}
