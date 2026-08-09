import { ImageResponse } from "next/og";
import { brand, profile, seo } from "@/lib/content";
import { loadGoogleFont } from "@/lib/og-fonts";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SANS = "Space Grotesk";
const MONO = "JetBrains Mono";

const roleLine = `${profile.role.toLowerCase()} · ${profile.company.toLowerCase()} · ${profile.location.toLowerCase()}`;
const monoText = `${profile.initials}${roleLine}${seo.ogTagline}`;

export default async function OpengraphImage() {
  const [sansData, monoData] = await Promise.all([
    loadGoogleFont({ family: SANS, weight: 600, text: profile.name }),
    loadGoogleFont({ family: MONO, weight: 400, text: monoText }),
  ]);

  // Omitted entirely when both fetches fail — ImageResponse then uses its default.
  const fonts = [
    sansData && { name: SANS, data: sansData, weight: 600 as const },
    monoData && { name: MONO, data: monoData, weight: 400 as const },
  ].filter((font) => font !== null);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: brand.ink,
        color: brand.fg,
        padding: 80,
        fontFamily: fonts.length > 0 ? SANS : undefined,
      }}
    >
      <div
        style={{
          display: "flex",
          width: 84,
          height: 84,
          alignItems: "center",
          justifyContent: "center",
          border: `2px solid ${brand.lineStrong}`,
          color: brand.accent,
          fontFamily: monoData ? MONO : undefined,
          fontSize: 34,
        }}
      >
        {profile.initials}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{ fontSize: 82, letterSpacing: "-0.03em", lineHeight: 1.1 }}
        >
          {profile.name}
        </div>
        <div
          style={{
            fontFamily: monoData ? MONO : undefined,
            fontSize: 28,
            color: brand.dim2,
          }}
        >
          {roleLine}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          borderTop: `2px solid ${brand.hairline}`,
          paddingTop: 32,
          fontFamily: monoData ? MONO : undefined,
          fontSize: 24,
          color: brand.meta,
        }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: 6,
            background: brand.accent,
          }}
        />
        {seo.ogTagline}
      </div>
    </div>,
    { ...size, ...(fonts.length > 0 ? { fonts } : {}) },
  );
}
