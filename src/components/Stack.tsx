import { stackGroups, stackNote } from "@/lib/content";

const allEntries = stackGroups.flatMap((group) => group.entries);

export function Stack() {
  return (
    <section
      className="flex flex-col gap-4.5 border-hairline border-b px-5.5 py-9 lg:gap-8.5 lg:px-16 lg:py-18"
      id="stack"
    >
      <h2 className="font-medium text-[26px] tracking-[-0.02em] lg:text-[32px]">
        Stack
      </h2>

      {/* Mobile: one flat chip cloud. */}
      <div className="flex flex-wrap gap-2 font-mono text-[11.5px] text-code lg:hidden">
        {allEntries.map((entry) => (
          <span className="border border-chip px-2.75 py-1.5" key={entry.label}>
            {entry.label}
          </span>
        ))}
      </div>

      {/* Desktop: grouped columns. */}
      <div className="hidden gap-8 lg:grid lg:grid-cols-3">
        {stackGroups.map((group) => (
          <div className="flex flex-col gap-3" key={group.title}>
            <div className="font-mono text-[11px] text-label uppercase tracking-[0.16em]">
              {group.title}
            </div>
            <div className="flex flex-col gap-2 font-mono text-[13.5px] text-code">
              {group.entries.map((entry) => (
                <span key={entry.label}>
                  {entry.label}
                  {entry.note ? (
                    <span className="text-label">{` // ${entry.note}`}</span>
                  ) : null}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex max-w-[64ch] flex-col gap-3.5 border-hairline border-t pt-6 lg:pt-7.5">
        <p className="text-pretty font-medium text-[18px] leading-[1.55] tracking-[-0.015em] lg:text-[21px]">
          {stackNote.lead}
        </p>
        <p className="text-pretty text-[14.5px] text-dim leading-[1.75] lg:text-[15.5px]">
          {stackNote.body}
        </p>
      </div>
    </section>
  );
}
