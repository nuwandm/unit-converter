"use client";

import Link from "next/link";
import { MobileSidebar } from "./MobileSidebar";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-4">
          <MobileSidebar />
          <Link href="/" className="font-bold text-lg text-gray-900 dark:text-gray-50 hover:text-gray-700 dark:hover:text-gray-200 tracking-tight">
            Unit Converter Pro
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
