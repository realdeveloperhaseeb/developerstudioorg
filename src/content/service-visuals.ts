// A real screenshot for each service, so the visual is proof rather than decoration.
// Used on the home page services section and on each service page.
export type ServiceVisual = {
  src: string;
  alt: string;
  w: number;
  h: number;
  caption: string;
  frame: "browser" | "plain";
};

export const serviceVisuals: Record<string, ServiceVisual> = {
  "web-design-development": {
    src: "/images/work/stayright-desktop.webp",
    alt: "StayRight website designed and built by DeveloperStudio",
    w: 1200,
    h: 5000,
    caption: "StayRight, a UK short-let management site we built",
    frame: "browser",
  },
  seo: {
    src: "/images/projects/TheLittleCRM.png",
    alt: "Google Search Console report for TheLittleCRM showing 324 clicks, 865 impressions and 37.5% click-through rate",
    w: 1014,
    h: 325,
    caption: "Search Console for TheLittleCRM: 324 clicks at a 37.5% click-through rate",
    frame: "plain",
  },
  "google-ads": {
    src: "/images/case-studies/roadside-hero-google-ads-peak-season.webp",
    alt: "Google Ads peak season view for Roadside Hero: 1.55k clicks, 26.4k impressions, 359 conversions",
    w: 1069,
    h: 384,
    caption: "Roadside Hero, peak season: 359 conversions from Google Ads",
    frame: "plain",
  },
  "social-media-marketing": {
    src: "/images/case-studies/blanche-meta-whatsapp-overview.webp",
    alt: "Meta Ads overview for Blanche Beauty Bar: 184 WhatsApp conversations in 17 days",
    w: 1600,
    h: 582,
    caption: "Blanche Beauty Bar: 184 WhatsApp conversations from Meta ads in 17 days",
    frame: "plain",
  },
};
