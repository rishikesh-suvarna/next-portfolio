import { CodeBlock } from "@/components/CodeBlock";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { MobileHeader } from "@/components/MobileHeader";
import { Sidebar } from "@/components/Sidebar";
import { SiteFooter } from "@/components/SiteFooter";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/Work";
import { SHELL } from "@/lib/layout";

export default function Home() {
  return (
    <>
      {/* Kept outside the grid so `position: sticky` isn't trapped in one row. */}
      <MobileHeader />

      <div
        className={`${SHELL} grid border-hairline lg:grid-cols-[232px_1fr] lg:border-x`}
      >
        <aside className="hidden border-hairline border-r lg:block">
          <Sidebar />
        </aside>

        <main className="flex min-w-0 flex-col">
          <Hero />
          <CodeBlock />
          <Work />
          <Experience />
          <Stack />
          <Contact />
          <SiteFooter />
        </main>
      </div>
    </>
  );
}
