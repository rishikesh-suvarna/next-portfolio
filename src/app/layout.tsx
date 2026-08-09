import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { PersonJsonLd } from "@/components/PersonJsonLd";
import { brand, profile, seo } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  // Makes every relative URL below (canonical, OG image) resolve absolutely.
  metadataBase: SITE_URL,
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  applicationName: seo.siteName,
  authors: [{ name: profile.name, url: SITE_URL.toString() }],
  creator: profile.name,
  publisher: profile.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: "Rishikesh",
    lastName: "Suvarna",
    url: "/",
    siteName: seo.siteName,
    title,
    description: seo.description,
    locale: seo.locale,
    // og:image comes from opengraph-image.tsx via the file convention.
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: brand.ink,
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="bg-ink" lang="en-GB">
      <body
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} bg-ink text-fg antialiased`}
      >
        {children}
        <PersonJsonLd />
      </body>
    </html>
  );
}
