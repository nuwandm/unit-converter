import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getConverter, getAllConverterPaths, getCategory } from "@/lib/data";
import { ConverterInterface } from "@/components/converter/ConverterInterface";
import { StructuredData } from "@/components/seo/StructuredData";
import { AdSenseUnit } from "@/components/ads/AdSenseUnit";

type PageProps = {
  params: Promise<{
    category: string;
    converter: string;
  }>;
};

// Generate static params for all converters
export async function generateStaticParams() {
  const paths = getAllConverterPaths();
  return paths.map((path) => ({
    category: path.category,
    converter: path.converter,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, converter: converterSlug } = await params;
  const converterData = getConverter(category, converterSlug);
  const categoryData = getCategory(category);

  if (!converterData || !categoryData) {
    return {
      title: "Converter Not Found",
      description: "The requested converter could not be found.",
    };
  }

  const title =
    converterData.metaTitle || `${converterData.name} - Free Online Tool`;
  const description =
    converterData.metaDescription || converterData.description;
  const canonicalUrl = `https://bestconverts.com/converters/${category}/${converterSlug}`;

  return {
    title,
    description,
    keywords: converterData.keywords.join(", "),
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Best Converter Pro",
      type: "website",
      images: [
        {
          url: `/og-images/${category}-${converterSlug}.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/og-images/${category}-${converterSlug}.png`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function ConverterPage({ params }: PageProps) {
  const { category, converter: converterSlug } = await params;
  const converterData = getConverter(category, converterSlug);
  const categoryData = getCategory(category);

  if (!converterData || !categoryData) {
    notFound();
  }

  return (
    <>
      <StructuredData converter={converterData} category={category} />

      <div className="space-y-6">
        <ConverterInterface converter={converterData} />

        <AdSenseUnit slot="bottom-rectangle" format="rectangle" />
      </div>
    </>
  );
}
