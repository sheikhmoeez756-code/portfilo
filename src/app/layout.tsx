import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { SITE_URL } from "@config";
import { t } from "@i18n";
import { CONTACT_EMAIL, LINKS } from "@constants";
import { CommandPalette, Footer, Navbar, Providers, ScrollProgress } from "@components";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${SITE_URL}/`),
  title: t.meta.title,
  description: t.meta.description,
  authors: [{ name: "Abdul Moeez Hassan", url: LINKS.GITHUB }],
  keywords: [
    "Abdul Moeez Hassan", "React Developer", "Next.js Developer", "TypeScript", "Tailwind CSS",
    "Vitest", "Playwright", "Frontend Developer Lahore", "E-commerce Developer",
  ],
  alternates: { canonical: "./" },
  openGraph: {
    type: "website",
    url: "./",
    title: t.meta.ogTitle,
    description: t.meta.ogDescription,
    images: [{ url: "images/leafora.jpg", width: 1000, height: 672 }],
  },
  twitter: { card: "summary_large_image", title: t.meta.ogTitle, description: t.meta.ogDescription },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
    { media: "(prefers-color-scheme: light)", color: "#fafaf9" },
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdul Moeez Hassan",
  jobTitle: "React & Next.js Developer",
  email: `mailto:${CONTACT_EMAIL}`,
  address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
  url: SITE_URL,
  sameAs: [LINKS.GITHUB, LINKS.LINKEDIN, LINKS.UPWORK],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body className="grain min-h-full">
        <script
          type="application/ld+json"
          // Static object defined above — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <Providers>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CommandPalette />
        </Providers>
      </body>
    </html>
  );
}
