/**
 * Fetches TrueType font data for Satori (the renderer behind next/og), which
 * cannot read woff2. Requesting the CSS without a modern User-Agent makes
 * Google serve a `format('truetype')` source.
 */

const GOOGLE_FONT_CSS_ENDPOINT = "https://fonts.googleapis.com/css2";
const TRUETYPE_SRC_PATTERN =
  /src:\s*url\((https:\/\/[^)]+)\)\s*format\('truetype'\)/;

export interface GoogleFontRequest {
  family: string;
  weight: number;
  /** Only these characters are fetched, keeping the download tiny. */
  text: string;
}

/** Returns null on any failure so ImageResponse can fall back to its default font. */
export async function loadGoogleFont({
  family,
  weight,
  text,
}: GoogleFontRequest): Promise<ArrayBuffer | null> {
  const url = `${GOOGLE_FONT_CSS_ENDPOINT}?family=${encodeURIComponent(
    family,
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;

  try {
    const cssResponse = await fetch(url);
    if (!cssResponse.ok) return null;

    const source = (await cssResponse.text()).match(TRUETYPE_SRC_PATTERN)?.[1];
    if (!source) return null;

    const fontResponse = await fetch(source);
    if (!fontResponse.ok) return null;

    return await fontResponse.arrayBuffer();
  } catch {
    return null;
  }
}
