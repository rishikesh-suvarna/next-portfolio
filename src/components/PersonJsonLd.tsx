import { profile, socialLinks, stackGroups } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

/**
 * Schema.org Person markup — this is what search engines and AI crawlers read
 * to build a knowledge-panel entry, so it mirrors the visible page content.
 */
export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    description: profile.intro,
    url: SITE_URL.toString(),
    worksFor: {
      "@type": "Organization",
      name: profile.company,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
      addressCountry: "GB",
    },
    // Labels like "node · express" are one visual row but two distinct skills.
    knowsAbout: stackGroups.flatMap((group) =>
      group.entries.flatMap((entry) =>
        entry.label.split("·").map((skill) => skill.trim()),
      ),
    ),
    sameAs: socialLinks
      .filter((link) => link.external)
      .map((link) => link.href),
  };

  // A "</script>" inside any value would close the tag early; escaping "<" prevents it.
  const json = JSON.stringify(schema).replace(/</g, "\\u003c");

  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: the documented Next.js pattern for JSON-LD; content is static and escaped above
      dangerouslySetInnerHTML={{ __html: json }}
      type="application/ld+json"
    />
  );
}
