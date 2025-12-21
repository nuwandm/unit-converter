"use client";

import Link from "next/link";
import { MobileSidebar } from "./MobileSidebar";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-3 md:gap-4">
          <MobileSidebar />
          <Link
            href="/"
            className="font-bold text-lg md:text-xl text-gray-900 dark:text-gray-50 hover:text-blue-600 dark:hover:text-blue-400 tracking-tight transition-colors"
          >
            Best Converter Pro
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
