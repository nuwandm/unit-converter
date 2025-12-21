import { MetadataRoute } from "next";
import { getAllConverterPaths } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://bestconverts.com";

  // Homepage
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  // All converter pages
  const converterPaths = getAllConverterPaths();
  const converterRoutes: MetadataRoute.Sitemap = converterPaths.map((path) => ({
    url: `${baseUrl}/converters/${path.category}/${path.converter}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...routes, ...converterRoutes];
}
