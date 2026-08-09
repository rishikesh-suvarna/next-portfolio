"use client";

import { useState } from "react";
import { navItems, profile, socialLinks } from "@/lib/content";
import { SHELL } from "@/lib/layout";

export function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-hairline border-b bg-ink lg:hidden">
      <div
        className={`${SHELL} flex items-center justify-between px-5.5 py-4.5`}
      >
        <a className="flex items-center gap-2.5" href="#top">
          <span className="grid size-7 place-items-center border border-line-strong font-mono font-bold text-[11px] text-accent">
            {profile.initials}
          </span>
          <span className="font-semibold text-[14.5px]">{profile.name}</span>
        </a>

        <button
          aria-controls="mobile-nav"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex flex-col gap-[5px] p-1"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span
            className={`h-px w-[18px] bg-dim-2 transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-[18px] bg-dim-2 transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open ? (
        <nav
          className={`${SHELL} flex flex-col border-hairline border-t px-5.5 py-4 font-mono text-[13px]`}
          id="mobile-nav"
        >
          {navItems.map((item, index) => (
            <a
              className="flex gap-3 py-2.5 text-fg"
              href={`#${item.id}`}
              key={item.id}
              onClick={() => setOpen(false)}
            >
              <span className="text-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          ))}
          <div className="mt-2 flex gap-5 border-hairline border-t pt-4 text-[11.5px] text-dim-2">
            {socialLinks.map((link) => (
              <a
                href={link.href}
                key={link.label}
                rel={link.external ? "noreferrer" : undefined}
                target={link.external ? "_blank" : undefined}
              >
                {link.label} {link.glyph}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
