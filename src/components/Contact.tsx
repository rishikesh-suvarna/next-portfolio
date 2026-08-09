import { contact, contactLinks } from "@/lib/content";

export function Contact() {
  return (
    <section
      className="grid gap-8 px-5.5 pt-10 pb-9 lg:grid-cols-[1fr_320px] lg:items-start lg:gap-14 lg:px-16 lg:py-21"
      id="contact"
    >
      <div className="flex flex-col gap-4 lg:gap-4.5">
        <div className="font-mono text-[11.5px] text-accent lg:text-[12px]">
          {contact.prompt}
        </div>
        <h2 className="text-pretty font-medium text-[30px] leading-[1.12] tracking-[-0.03em] lg:max-w-[15ch] lg:text-[44px] lg:leading-[1.1]">
          {contact.heading}
        </h2>
        <p className="max-w-[48ch] text-pretty text-[14.5px] text-dim leading-[1.7] lg:text-[16.5px]">
          {contact.body}
        </p>
        <a
          className="mt-2 self-start bg-accent px-6 py-3.5 font-mono font-medium text-[13px] text-accent-ink transition-opacity hover:opacity-90"
          href={contact.ctaHref}
        >
          {contact.ctaLabel}
        </a>
      </div>

      <div className="flex flex-col font-mono text-[13px]">
        {contactLinks.map((link) => (
          <a
            className="flex justify-between border-hairline border-t py-4 last:border-b transition-colors hover:text-accent"
            href={link.href}
            key={link.label}
            rel={link.external ? "noreferrer" : undefined}
            target={link.external ? "_blank" : undefined}
          >
            <span>{link.label}</span>
            <span className="text-meta">{link.glyph}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
