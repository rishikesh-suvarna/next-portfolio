import { roles } from "@/lib/content";

export function Experience() {
  return (
    <section
      className="flex flex-col gap-5.5 border-hairline border-b px-5.5 py-9 lg:gap-9 lg:px-16 lg:py-18"
      id="experience"
    >
      <h2 className="font-medium text-[26px] tracking-[-0.02em] lg:text-[32px]">
        Experience
      </h2>

      <div className="flex flex-col">
        {roles.map((role) => (
          <article
            className="grid gap-1.5 border-hairline border-b py-7 first:pt-0 last:border-b-0 last:pb-0 lg:grid-cols-[150px_1fr] lg:gap-8"
            key={`${role.company}-${role.start}`}
          >
            <div className="font-mono text-[11.5px] text-accent lg:pt-1 lg:text-[12px]">
              <span className="lg:hidden">
                {role.start} — {role.end}
              </span>
              <span className="hidden lg:inline">
                {role.start} —<br />
                {role.end}
              </span>
            </div>

            <div className="flex flex-col gap-1.5 lg:gap-2">
              <div className="font-semibold text-[17px] lg:text-[18.5px]">
                {role.title}
              </div>
              <div className="font-mono text-[12px] text-dim-2 lg:text-[12.5px]">
                {role.location
                  ? `${role.company} · ${role.location}`
                  : role.company}
              </div>
              <p className="max-w-[62ch] text-pretty text-[14.5px] text-dim leading-[1.7] lg:text-[15px] lg:leading-[1.75]">
                {role.summary}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
