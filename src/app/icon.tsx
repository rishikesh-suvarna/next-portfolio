import { ImageResponse } from "next/og";
import { brand, profile } from "@/lib/content";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** The `rs` mark from the sidebar, sized for a browser tab. */
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: brand.ink,
        color: brand.accent,
        fontSize: 18,
        fontWeight: 700,
        letterSpacing: "-0.05em",
      }}
    >
      {profile.initials}
    </div>,
    size,
  );
}
