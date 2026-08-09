"use client";

import { useEffect, useState } from "react";
import {
  CLOCK_LOCALE,
  CLOCK_REFRESH_MS,
  CLOCK_TIMEZONE,
  navItems,
  profile,
  socialLinks,
} from "@/lib/content";

/** Section that reads as active before the reader has scrolled anywhere. */
const DEFAULT_SECTION = navItems[0]?.id ?? "";

/** A section becomes active once its top crosses this fraction of the viewport. */
const ACTIVE_LINE_RATIO = 0.3;

/** Slack for fractional scroll heights when testing for bottom-of-page. */
const BOTTOM_EPSILON_PX = 2;

const clockFormatter = new Intl.DateTimeFormat(CLOCK_LOCALE, {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: CLOCK_TIMEZONE,
  timeZoneName: "short",
});

function useLocalClock(): string | null {
  const [clock, setClock] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setClock(clockFormatter.format(new Date()));
    tick();
    const timer = setInterval(tick, CLOCK_REFRESH_MS);
    return () => clearInterval(timer);
  }, []);

  return clock;
}

function useActiveSection(): string {
  const [activeId, setActiveId] = useState(DEFAULT_SECTION);

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;

      // The final section is shorter than the scroll runway below the line, so
      // its top never reaches it — resting at the bottom has to select it.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - BOTTOM_EPSILON_PX;

      const line = window.innerHeight * ACTIVE_LINE_RATIO;
      // Otherwise the last section to have crossed the line wins.
      const current = atBottom
        ? sections.at(-1)
        : (sections
            .filter((s) => s.getBoundingClientRect().top <= line)
            .at(-1) ?? sections[0]);

      if (current) setActiveId(current.id);
    };

    const schedule = () => {
      if (frame === 0) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame !== 0) cancelAnimationFrame(frame);
    };
  }, []);

  return activeId;
}

export function Sidebar() {
  const clock = useLocalClock();
  const activeId = useActiveSection();

  return (
    <div className="sticky top-0 flex h-screen flex-col justify-between overflow-y-auto px-7 py-10">
      <div className="flex flex-col gap-11">
        <div className="flex flex-col gap-2.5">
          <div className="grid size-[42px] place-items-center border border-line-strong font-mono font-bold text-[15px] text-accent">
            {profile.initials}
          </div>
          <div className="pt-1.5 font-semibold text-[16px] tracking-[-0.01em]">
            {profile.name}
          </div>
          <div className="font-mono text-[11.5px] text-meta leading-[1.7]">
            {profile.role}
            <br />
            {profile.company} · {profile.location}
          </div>
        </div>

        <nav className="flex flex-col gap-0.5 font-mono text-[12.5px]">
          {navItems.map((item, index) => (
            <a
              className={`flex gap-3 py-2 transition-colors hover:text-accent ${
                activeId === item.id ? "text-fg" : "text-dim-2"
              }`}
              href={`#${item.id}`}
              key={item.id}
            >
              <span className="text-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-2.5 font-mono text-[11.5px]">
        {socialLinks.map((link) => (
          <a
            className="text-dim-2 transition-colors hover:text-accent"
            href={link.href}
            key={link.label}
            rel={link.external ? "noreferrer" : undefined}
            target={link.external ? "_blank" : undefined}
          >
            {link.label} {link.glyph}
          </a>
        ))}
        <div className="pt-3 text-ghost tabular-nums">{clock ?? " "}</div>
      </div>
    </div>
  );
}
