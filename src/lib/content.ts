/**
 * Single source of truth for every string on the page.
 *
 * Fields marked PLACEHOLDER came from the design mock and still need real
 * values — the design bundle flagged the projects, the two earlier roles and
 * the email address as unfinished.
 */

export const PLACEHOLDER_LINK = "#";
export const PLACEHOLDER_EMAIL_LABEL = "add address";
export const COPYRIGHT_YEAR = 2026;
export const CLOCK_TIMEZONE = "Europe/London";
export const CLOCK_LOCALE = "en-GB";
export const CLOCK_REFRESH_MS = 30_000;

export interface Profile {
  name: string;
  initials: string;
  role: string;
  company: string;
  location: string;
  availability: string;
  headline: string;
  intro: string;
}

export const profile: Profile = {
  name: "Rishikesh Suvarna",
  initials: "rs",
  role: "Senior Software Engineer",
  company: "Wakeflow",
  location: "London",
  availability: "available for senior roles — london / remote",
  headline: "I build backends that stay quiet and frontends that stay fast.",
  intro:
    "Five-plus years of production TypeScript, React and Node. Currently senior engineer at Wakeflow, where I own the surface customer teams touch every day.",
};

/** Brand palette mirrored from globals.css, for contexts that can't read CSS
 *  (the OG image and icons are rendered by Satori, not the browser). */
export const brand = {
  ink: "#000000",
  hairline: "#17171b",
  lineStrong: "#2a2a31",
  fg: "#e8e8ea",
  dim2: "#8e8e98",
  meta: "#6b6b75",
  accent: "#7dd3a0",
} as const;

export const seo = {
  siteName: `${profile.name} — Portfolio`,
  /** Under 160 characters so search engines don't truncate it. */
  description: profile.intro,
  keywords: [
    "Rishikesh Suvarna",
    "senior software engineer",
    "software engineer London",
    "TypeScript developer",
    "React developer",
    "Node.js developer",
    "Next.js",
    "full-stack engineer",
    "backend engineer",
    "portfolio",
  ],
  locale: "en_GB",
  /** Rendered on the social share card. */
  ogTagline: "typescript · react · node · python · go",
};

export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "work", label: "work" },
  { id: "experience", label: "experience" },
  { id: "stack", label: "stack" },
  { id: "contact", label: "contact" },
];

export interface SocialLink {
  label: string;
  href: string;
  /** Trailing glyph: ↗ for external, ↓ for download. */
  glyph: string;
  external: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    label: "github",
    href: "https://github.com/rishikesh-suvarna",
    glyph: "↗",
    external: true,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/rishikesh-suvarna/",
    glyph: "↗",
    external: true,
  },
  // PLACEHOLDER: drop the real CV in /public and point this at it.
  { label: "cv.pdf", href: PLACEHOLDER_LINK, glyph: "↓", external: false },
];

export const contactLinks: SocialLink[] = [
  socialLinks[0] as SocialLink,
  socialLinks[1] as SocialLink,
  // PLACEHOLDER: swap for mailto:you@domain.com
  {
    label: "email",
    href: PLACEHOLDER_LINK,
    glyph: PLACEHOLDER_EMAIL_LABEL,
    external: false,
  },
  socialLinks[2] as SocialLink,
];

/* -------------------------------------------------------------------------- */
/* Code block                                                                  */
/* -------------------------------------------------------------------------- */

export type CodeTone =
  | "keyword"
  | "prop"
  | "string"
  | "number"
  | "accent"
  | "plain";

export interface CodeToken {
  text: string;
  tone?: CodeTone;
}

export interface CodeLine {
  indent?: boolean;
  tokens: CodeToken[];
  /** Renders the blinking terminal caret after the tokens. */
  caret?: boolean;
}

const OPENING_LINE: CodeLine = {
  tokens: [
    { text: "const ", tone: "keyword" },
    { text: "rishikesh", tone: "accent" },
    { text: " = {" },
  ],
};

const CLOSING_LINE: CodeLine = { tokens: [{ text: "}" }], caret: true };

const property = (name: string, value: CodeToken[]): CodeLine => ({
  indent: true,
  tokens: [{ text: name, tone: "prop" }, { text: ": " }, ...value],
});

const string = (value: string): CodeToken => ({
  text: `'${value}'`,
  tone: "string",
});

export const codeLinesDesktop: CodeLine[] = [
  OPENING_LINE,
  property("role", [string("senior software engineer"), { text: "," }]),
  property("base", [string("london, uk"), { text: "," }]),
  property("years", [{ text: "5", tone: "number" }, { text: "," }]),
  property("stack", [
    { text: "[" },
    string("typescript"),
    { text: ", " },
    string("react"),
    { text: ", " },
    string("node"),
    { text: ", " },
    string("python"),
    { text: "]," },
  ]),
  property("learning", [string("go"), { text: "," }]),
  property("openToWork", [{ text: "true", tone: "number" }, { text: "," }]),
  CLOSING_LINE,
];

export const codeLinesMobile: CodeLine[] = [
  OPENING_LINE,
  property("role", [string("senior swe"), { text: "," }]),
  property("base", [string("london, uk"), { text: "," }]),
  property("years", [{ text: "5", tone: "number" }, { text: "," }]),
  property("learning", [string("go"), { text: "," }]),
  CLOSING_LINE,
];

/* -------------------------------------------------------------------------- */
/* Work                                                                        */
/* -------------------------------------------------------------------------- */

export interface Project {
  name: string;
  year: string;
  description: string;
  tags: string[];
  caseStudyHref: string | null;
  /** Featured projects get the wide two-column treatment. */
  featured: boolean;
}

// PLACEHOLDER: all four projects are from the design mock.
export const projects: Project[] = [
  {
    name: "Ledgerline",
    year: "2025",
    description:
      "Realtime reconciliation dashboard for finance operations. Streams over two million ledger events a day into a React front end that never blocks, with a Node ingestion layer that backfills without downtime.",
    tags: ["typescript", "react", "node", "postgres"],
    caseStudyHref: PLACEHOLDER_LINK,
    featured: true,
  },
  {
    name: "Relay Queue",
    year: "2025",
    description:
      "A small, dependency-light job runner in Go. At-least-once delivery, a replay console for failed work, and a deliberately boring operational story — the kind of service you forget is running.",
    tags: ["go", "redis", "docker"],
    caseStudyHref: PLACEHOLDER_LINK,
    featured: true,
  },
  {
    name: "Fieldnote",
    year: "2024",
    description:
      "Offline-first note capture for site engineers — local-first sync, real conflict resolution, and a PWA that survives bad signal.",
    tags: ["react", "indexeddb", "node"],
    caseStudyHref: null,
    featured: false,
  },
  {
    name: "Pipeline Radar",
    year: "2024",
    description:
      "A Python service watching CI runs, posting a daily digest of what's flaky, what's slow, and what to fix first.",
    tags: ["python", "fastapi", "aws"],
    caseStudyHref: null,
    featured: false,
  },
];

/* -------------------------------------------------------------------------- */
/* Experience                                                                  */
/* -------------------------------------------------------------------------- */

export interface Role {
  start: string;
  end: string;
  title: string;
  company: string;
  location: string;
  summary: string;
}

export const roles: Role[] = [
  {
    start: "2024",
    end: "present",
    title: "Senior Software Engineer",
    company: "Wakeflow",
    location: "London",
    summary:
      "Own the core product surface end to end — TypeScript across the stack, a React app used daily by customer teams, and the Node services behind it. Led the move to a typed API contract that cut integration bugs to near zero.",
  },
  {
    start: "2022",
    end: "2024",
    title: "Software Engineer",
    // PLACEHOLDER
    company: "Company — add name",
    location: "",
    summary:
      "Built and shipped customer-facing features on a React/Node stack; rebuilt the data layer on Postgres and took p95 page loads from seconds to milliseconds.",
  },
  {
    start: "2020",
    end: "2022",
    title: "Full-stack Developer",
    // PLACEHOLDER
    company: "Company — add name",
    location: "",
    summary:
      "First engineering role. Shipped across the stack in a small team and learned what maintainable actually costs.",
  },
];

/* -------------------------------------------------------------------------- */
/* Stack                                                                       */
/* -------------------------------------------------------------------------- */

export interface StackEntry {
  label: string;
  /** Rendered as a dimmed trailing `// comment`. */
  note?: string;
}

export interface StackGroup {
  title: string;
  entries: StackEntry[];
}

export const stackGroups: StackGroup[] = [
  {
    title: "languages",
    entries: [
      { label: "typescript" },
      { label: "javascript" },
      { label: "python" },
      { label: "go", note: "learning" },
    ],
  },
  {
    title: "frameworks",
    entries: [
      { label: "react" },
      { label: "next.js" },
      { label: "node · express" },
      { label: "fastapi" },
    ],
  },
  {
    title: "platform",
    entries: [
      { label: "postgresql · redis" },
      { label: "docker · ci/cd" },
      { label: "aws" },
      { label: "graphql" },
    ],
  },
];

export const stackNote = {
  lead: "I like problems where the hard part isn't the code — it's deciding what the system should be honest about.",
  body: "Small teams, tight feedback loops, code other people have to maintain. Outside work: long walks around south London and too many half-finished side projects.",
};

/* -------------------------------------------------------------------------- */
/* Contact                                                                     */
/* -------------------------------------------------------------------------- */

export const contact = {
  prompt: '$ echo "let\'s talk"',
  heading: "Got something worth building?",
  body: "Contract, full-time, or just a good technical argument — I'm happy to hear about it. I reply to everything.",
  ctaLabel: "email me",
  // PLACEHOLDER: swap for mailto:you@domain.com
  ctaHref: PLACEHOLDER_LINK,
};

export const footer = {
  left: `© ${COPYRIGHT_YEAR} rishikesh suvarna`,
  right: "built with too much coffee",
};
