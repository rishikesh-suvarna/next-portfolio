"use client";

import { useEffect, useState } from "react";

const STACK = [
  { label: "TypeScript", years: "5+" },
  { label: "React", years: "5+" },
  { label: "Node.js", years: "5+" },
  { label: "Go", years: "learning" },
];

const LINES = [
  "$ whoami",
  "> Rishikesh Suvarna",
  "$ cat skills.txt",
  "> TypeScript · React · Node.js · Go (learning)",
  "$ ls projects/",
  "> coming soon...",
  "$ ./build portfolio --production",
  "> [████████░░] 80% — hang tight",
];

export default function Home() {
  const [visible, setVisible] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (visible >= LINES.length) return;
    const delay = LINES[visible].startsWith("$") ? 600 : 300;
    const t = setTimeout(() => setVisible((v) => v + 1), delay);
    return () => clearTimeout(t);
  }, [visible]);

  useEffect(() => {
    const t = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e2e8f0] flex flex-col items-center justify-center px-6 py-16 font-mono selection:bg-emerald-500/30">
      {/* Status badge */}
      <div className="mb-10 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs text-emerald-400 tracking-widest uppercase">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        Under Construction
      </div>

      {/* Terminal window */}
      <div className="w-full max-w-xl rounded-xl border border-white/10 bg-[#111] shadow-2xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#1a1a1a] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-3 text-xs text-white/30 tracking-wide">portfolio — zsh</span>
        </div>

        {/* Terminal body */}
        <div className="p-6 space-y-1.5 text-sm leading-relaxed min-h-60">
          {LINES.slice(0, visible).map((line, i) => (
            <div
              key={i}
              className={
                line.startsWith("$")
                  ? "text-emerald-400"
                  : "text-white/60 pl-2"
              }
            >
              {line}
            </div>
          ))}
          {visible < LINES.length && (
            <span className="text-emerald-400">
              $ <span className={blink ? "opacity-100" : "opacity-0"}>▋</span>
            </span>
          )}
          {visible >= LINES.length && (
            <span className="text-white/30">
              $ <span className={blink ? "opacity-100" : "opacity-0"}>▋</span>
            </span>
          )}
        </div>
      </div>

      {/* Name + tagline */}
      <div className="mt-10 text-center space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Rishikesh Suvarna
        </h1>
        <p className="text-sm text-white/40 tracking-wide">
          Software Engineer · 5+ years
        </p>
      </div>

      {/* Stack pills */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {STACK.map(({ label, years }) => (
          <span
            key={label}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors"
          >
            {label}
            <span className="ml-1.5 text-white/25">{years}</span>
          </span>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-12 text-xs text-white/20 tracking-widest uppercase">
        Something great is on the way
      </p>
    </div>
  );
}
