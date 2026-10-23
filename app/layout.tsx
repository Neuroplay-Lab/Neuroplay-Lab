import "./styles/globals.css";
import localFont from "next/font/local";
import { Alegreya } from "next/font/google";
import type { Metadata, Viewport } from "next";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import { site } from "./content/site";

// Body: Eudoxus Sans (already in the repo, OFL licence)
const body = localFont({
  src: [
    { path: "./fonts/Eudoxus-Sans-font/EudoxusSans-Regular.woff2", weight: "400" },
    { path: "./fonts/Eudoxus-Sans-font/EudoxusSans-Medium.woff2", weight: "500" },
    { path: "./fonts/Eudoxus-Sans-font/EudoxusSans-Bold.woff2", weight: "700" },
    { path: "./fonts/Eudoxus-Sans-font/EudoxusSans-ExtraBold.woff2", weight: "800" },
  ],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

// Headings: a warm serif chosen to sit beside the hand-lettered wordmark.
// ASSUMPTION: the business cards use a similar humanist serif; swap in the real face if known.
const display = Alegreya({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#F4EEDF" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Neuroplay Lab | Board games and Neurodivergence", template: "%s | Neuroplay Lab" },
  description: site.description,
  icons: { icon: "/icon.png" },
  openGraph: {
    siteName: site.name,
    description: site.description,
    images: ["/brand/logo-tagline.webp"], // TODO: replace with a 1200x630 share image
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:border-2 focus:border-ink focus:bg-paper focus:px-4 focus:py-2 focus:font-bold"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
