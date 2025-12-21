import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unit Converter - Fast & Accurate Conversion Tool",
  description: "Professional unit converter for engineering, scientific, and everyday conversions. Convert length, area, volume, temperature, pressure, energy, and more.",
  keywords: ["unit converter", "conversion calculator", "engineering converter", "metric conversion", "imperial conversion"],
  openGraph: {
    title: "Unit Converter - Fast & Accurate Conversion Tool",
    description: "Professional unit converter for engineering, scientific, and everyday conversions.",
    type: "website",
    siteName: "Unit Converter Pro",
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
