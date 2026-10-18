import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { CookieConsent } from "@/components/CookieConsent";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Digital Marketing Agency Rotherham | DeveloperStudio",
  description:
    "Rotherham digital marketing agency building websites, SEO and ad campaigns that bring in enquiries. UK & Pakistan team. Get your free growth plan.",
};

// Site-wide business markup. No street address: DeveloperStudio is an online agency,
// so it lists the areas it serves. sameAs links the social profiles to the business.
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/developer-studio-logo.png`,
  image: `${site.url}/icon.png`,
  description: site.entity,
  telephone: site.phones.uk.tel,
  email: site.email,
  priceRange: "££",
  founder: { "@type": "Person", name: "Haseeb Ahmad" },
  areaServed: [
    { "@type": "City", name: "Rotherham" },
    { "@type": "City", name: "Sheffield" },
    { "@type": "City", name: "Doncaster" },
    { "@type": "City", name: "Barnsley" },
    { "@type": "AdministrativeArea", name: "South Yorkshire" },
    { "@type": "Country", name: "United Kingdom" },
  ],
  contactPoint: [
    { "@type": "ContactPoint", contactType: "sales", name: "UK team", telephone: site.phones.uk.tel, areaServed: "GB", availableLanguage: "en" },
    { "@type": "ContactPoint", contactType: "customer support", name: "PK team", telephone: site.phones.pk.tel, availableLanguage: ["en", "ur"] },
  ],
  sameAs: site.socials.map((s) => s.href),
};

// Root layout: document shell only. The main site and the landing pages add their own
// header and footer through the (site) and (landing) route groups.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" id="top" className={poppins.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Lets scroll-reveal styles apply only when JavaScript runs, so content is never hidden without it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="min-h-dvh font-sans antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
