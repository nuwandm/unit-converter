"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCategories, getConvertersByCategory } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Search, X } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const categories = getCategories();
  const [searchQuery, setSearchQuery] = useState("");

  // Extract current category from pathname
  const currentCategory = pathname.split("/")[2];

  // Get all converters with their categories for search
  const allConverters = useMemo(() => {
    const converters: {
      converter: ReturnType<typeof getConvertersByCategory>[0];
      category: (typeof categories)[0];
    }[] = [];

    categories.forEach((category) => {
      const categoryConverters = getConvertersByCategory(category.slug);
      categoryConverters.forEach((converter) => {
        converters.push({ converter, category });
      });
    });

    return converters;
  }, [categories]);

  // Filter converters based on search query
  const filteredConverters = useMemo(() => {
    if (!searchQuery.trim()) return null;

    const query = searchQuery.toLowerCase();
    return allConverters.filter(
      ({ converter }) =>
        converter.name.toLowerCase().includes(query) ||
        converter.slug.toLowerCase().includes(query) ||
        converter.description?.toLowerCase().includes(query)
    );
  }, [searchQuery, allConverters]);

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <aside className="hidden lg:block w-64 border-r border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 h-screen">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-900 dark:text-gray-50 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
        >
          <h2 className="text-lg font-bold tracking-tight">Best Converter</h2>
        </Link>
      </div>

      {/* Search Input */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search converters..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-9 py-2 text-sm rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <ScrollArea className="h-[calc(100vh-8.5rem)]">
        <div className="p-4">
          {/* Search Results */}
          {filteredConverters !== null ? (
            <div className="space-y-1">
              {filteredConverters.length > 0 ? (
                <>
                  <p className="text-xs text-muted-foreground mb-3 px-2">
                    {filteredConverters.length} result
                    {filteredConverters.length !== 1 ? "s" : ""} found
                  </p>
                  {filteredConverters.map(({ converter, category }) => {
                    const href = `/converters/${category.slug}/${converter.slug}`;
                    const isActive = pathname === href;

                    return (
                      <Link
                        key={converter.id}
                        href={href}
                        onClick={clearSearch}
                        className={cn(
                          "block text-sm py-2.5 px-3 rounded-lg transition-colors font-medium",
                          isActive
                            ? "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-semibold"
                            : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200"
                        )}
                      >
                        <span>{converter.name.replace(" Converter", "")}</span>
                        <span className="block text-xs text-muted-foreground mt-0.5">
                          {category.name}
                        </span>
                      </Link>
                    );
                  })}
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-sm text-muted-foreground">
                    No converters found for &ldquo;{searchQuery}&rdquo;
                  </p>
                  <button
                    onClick={clearSearch}
                    className="text-sm text-primary hover:underline mt-2"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Category Accordion Navigation */
            <Accordion
              type="single"
              collapsible
              defaultValue={currentCategory}
              className="w-full"
            >
              {categories.map((category) => {
                const converters = getConvertersByCategory(category.slug);

                return (
                  <AccordionItem
                    key={category.id}
                    value={category.slug}
                    className="border-gray-200 dark:border-gray-800"
                  >
                    <AccordionTrigger className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 hover:no-underline">
                      {category.name}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col gap-1 pl-2">
                        {converters.map((converter) => {
                          const href = `/converters/${category.slug}/${converter.slug}`;
                          const isActive = pathname === href;

                          return (
                            <Link
                              key={converter.id}
                              href={href}
                              className={cn(
                                "text-sm py-2 px-3 rounded-md transition-colors font-medium",
                                isActive
                                  ? "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-semibold"
                                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200"
                              )}
                            >
                              {converter.name.replace(" Converter", "")}
                            </Link>
                          );
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          )}
        </div>
      </ScrollArea>
    </aside>
  );
}
