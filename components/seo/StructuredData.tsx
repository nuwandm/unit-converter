import { Converter } from "@/types/converter";

interface StructuredDataProps {
  converter: Converter;
  category: string;
}

export function StructuredData({ converter, category }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: converter.name,
    description: converter.description,
    url: `https://bestconverts.com/converters/${category}/${converter.slug}`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1250",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
