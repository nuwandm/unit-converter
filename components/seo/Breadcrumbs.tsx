import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Converter } from "@/types/converter";
import { Category } from "@/types/category";

interface BreadcrumbsProps {
  category: Category;
  converter: Converter;
}

export function Breadcrumbs({ category, converter }: BreadcrumbsProps) {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://bestconverts.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: category.name,
        item: `https://bestconverts.com/converters/${category.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: converter.name,
        item: `https://bestconverts.com/converters/${category.slug}/${converter.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-2 text-sm text-muted-foreground mb-4"
      >
        <Link
          href="/"
          className="flex items-center hover:text-foreground transition-colors"
        >
          <Home className="h-4 w-4" />
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-muted-foreground">{category.name}</span>
        <ChevronRight className="h-4 w-4" />
        <span className="text-foreground font-medium">{converter.name}</span>
      </nav>
    </>
  );
}
