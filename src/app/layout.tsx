import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Digital Marketing Agency Rotherham | DeveloperStudio",
  description:
    "Rotherham digital marketing agency building websites, SEO and ad campaigns that bring in enquiries. UK & Pakistan team. Get your free growth plan.",
};

// Root layout: document shell only. The main site and the landing pages add their own
// header and footer through the (site) and (landing) route groups.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" id="top" className={inter.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Lets scroll-reveal styles apply only when JavaScript runs, so content is never hidden without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-dvh font-sans antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
