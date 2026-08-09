import { footer } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="flex flex-wrap justify-between gap-2 border-hairline border-t px-5.5 py-5.5 font-mono text-[11.5px] text-ghost lg:px-16">
      <span>{footer.left}</span>
      <span>{footer.right}</span>
    </footer>
  );
}
