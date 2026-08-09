import { ImageResponse } from "next/og";
import { brand, profile } from "@/lib/content";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon: the sidebar mark, bordered as it appears on the site. */
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: brand.ink,
      }}
    >
      <div
        style={{
          display: "flex",
          width: 116,
          height: 116,
          alignItems: "center",
          justifyContent: "center",
          border: `4px solid ${brand.lineStrong}`,
          color: brand.accent,
          fontSize: 54,
          fontWeight: 700,
          letterSpacing: "-0.05em",
        }}
      >
        {profile.initials}
      </div>
    </div>,
    size,
  );
}
