import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { AdSenseUnit } from "@/components/ads/AdSenseUnit";

export default function ConvertersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 lg:p-8">
          <div className="max-w-6xl mx-auto flex gap-8">
            <div className="flex-1 min-w-0">
              {children}
            </div>
            {/* Right sidebar ad - desktop only */}
            <aside className="hidden xl:block w-[300px] flex-shrink-0">
              <div className="sticky top-4">
                <AdSenseUnit slot="right-sidebar" format="vertical" />
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
