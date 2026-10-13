// Starting prices from DeveloperStudio (13 October 2026). Every project gets a custom offer.
// Billing is assumed: website and Google Business Profile work are one-off, the rest are monthly.
// Change `billing` here if that is not right; the pricing page, package builder and FAQ follow it.

export type Plan = {
  slug: string;
  name: string;
  short: string;
  from: number;
  billing: "one-off" | "monthly";
  icon: "code" | "search" | "target" | "share" | "map";
  summary: string;
  includes: string[];
  factors: string[];
  href?: string;
};

export const plans: Plan[] = [
  {
    slug: "web-design-development",
    name: "Web Design & Development",
    short: "Website",
    from: 99,
    billing: "one-off",
    icon: "code",
    summary: "A fast, mobile-first website built to turn visitors into calls, WhatsApp messages and enquiries.",
    includes: [
      "Custom design for desktop and mobile",
      "Enquiry, quote or booking forms",
      "Tap-to-call and WhatsApp buttons",
      "On-page SEO basics and sitemap",
      "Google Analytics and Search Console set up",
      "Domain, hosting and code in your name",
    ],
    factors: ["Number of pages and layouts", "Online shop, booking or other integrations", "Copywriting", "Moving content from an old site"],
    href: "/services/web-design-development/",
  },
  {
    slug: "seo",
    name: "SEO",
    short: "SEO",
    from: 299,
    billing: "monthly",
    icon: "search",
    summary: "Local and technical SEO to get you found on Google, in the map results and in AI answers.",
    includes: [
      "Audit of your site, rankings and competitors",
      "Keyword research for your area",
      "On-page and technical fixes",
      "Content that answers customer questions",
      "Local listings and links",
      "Plain-English monthly report",
    ],
    factors: ["How competitive your keywords are", "Local only, or national too", "Content needed each month", "The state of your current site"],
    href: "/services/seo/",
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    short: "Google Ads",
    from: 349,
    billing: "monthly",
    icon: "target",
    summary: "Search and call campaigns managed on cost per enquiry, with tracking set up before anything goes live.",
    includes: [
      "Account set up or audit, in your name",
      "Conversion tracking for calls, forms and WhatsApp",
      "Keyword research and negative keywords",
      "Ad copy testing",
      "Budget and bid management",
      "Monthly report and review call",
    ],
    factors: ["Monthly ad spend", "Number of campaigns", "Shopping feeds and ecommerce tracking", "Landing pages needed"],
    href: "/services/google-ads/",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media & Meta Ads",
    short: "Social media",
    from: 149,
    billing: "monthly",
    icon: "share",
    summary: "Facebook and Instagram campaigns and content that bring WhatsApp chats, leads and bookings.",
    includes: [
      "Meta ads with lead forms or WhatsApp",
      "Audience testing, including Advantage+",
      "Meta Pixel and conversion tracking",
      "Designed posts and ad creative",
      "Monthly report on enquiries and cost",
    ],
    factors: ["Number of platforms", "Posts and videos per month", "Number of campaigns", "Photo or video shoots"],
    href: "/services/social-media-marketing/",
  },
  {
    slug: "google-business-profile",
    name: "Google Business Profile",
    short: "Business Profile",
    from: 49,
    billing: "one-off",
    icon: "map",
    summary: "Your Google Business Profile set up and optimised so you show up properly in local searches and maps.",
    includes: [
      "Profile audit and set-up as a service-area business",
      "Categories, services and description",
      "Photos and opening hours",
      "Matching name, phone and website everywhere",
      "Review link and a plan to get more reviews",
    ],
    factors: ["New profile or existing one", "Number of services and areas", "Verification help needed"],
  },
];

export const priceLabel = (p: Plan) => `£${p.from}`;
export const billingLabel = (p: Plan) => (p.billing === "monthly" ? "per month" : "one-off");
