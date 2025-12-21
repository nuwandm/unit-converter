import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best Converter",
  description:
    "Professional Best Converter for engineering, scientific, and everyday conversions. Convert length, area, volume, temperature, pressure, energy, and more.",
  keywords: [
    "Best Converter",
    "conversion calculator",
    "engineering converter",
    "metric conversion",
    "imperial conversion",
  ],
  openGraph: {
    title: "Best Converter",
    description:
      "Professional Best Converter for engineering, scientific, and everyday conversions.",
    type: "website",
    siteName: "Best Converter Pro",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
        {children}
      </body>
    </html>
  );
}
