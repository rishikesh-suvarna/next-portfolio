import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section
      className="flex flex-col gap-5 border-hairline border-b px-5.5 pt-10 pb-9 lg:gap-[30px] lg:px-16 lg:pt-19 lg:pb-17"
      id="top"
    >
      <div className="inline-flex items-center gap-2 self-start border border-accent-line bg-accent-bg px-3 py-1.5 font-mono text-[11px] text-accent lg:gap-[9px] lg:px-3.5 lg:py-[7px] lg:text-[11.5px]">
        <span className="size-1.5 rounded-full bg-accent" />
        <span>{profile.availability}</span>
      </div>

      <h1 className="text-pretty font-medium text-[36px] leading-[1.1] tracking-[-0.03em] lg:max-w-[16ch] lg:text-[62px] lg:leading-[1.06] lg:tracking-[-0.035em]">
        {profile.headline}
      </h1>

      <p className="max-w-[56ch] text-pretty text-[15px] text-dim leading-[1.7] lg:text-[17.5px]">
        {profile.intro}
      </p>

      <div className="flex flex-col gap-2.5 font-mono text-[13px] lg:flex-row lg:items-center lg:gap-[22px] lg:pt-1.5">
        <a
          className="bg-accent px-[22px] py-[15px] text-center font-medium text-accent-ink transition-opacity hover:opacity-90 lg:py-[13px]"
          href="#work"
        >
          view work
        </a>
        <a
          className="border border-line-strong px-[22px] py-[15px] text-center text-fg transition-colors hover:border-accent hover:text-accent lg:py-[13px]"
          href="#contact"
        >
          get in touch
        </a>
      </div>
    </section>
  );
}
