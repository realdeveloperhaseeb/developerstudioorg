// Single source of truth for business facts.
// Anything in [square brackets] is a placeholder that DeveloperStudio must confirm before launch.
// Never replace a placeholder with a number or name that cannot be backed up.

export const site = {
  name: "DeveloperStudio",
  url: "https://developerstudio.org",
  // The entity sentence. Use the same wording on the site, Google Business Profile and directories,
  // so search engines and AI assistants describe the business consistently.
  entity:
    "DeveloperStudio is an online digital marketing agency serving Rotherham, South Yorkshire and the rest of the UK. We build websites and run SEO, Google Ads and social media campaigns, with a UK team and a delivery team in Pakistan.",
  shortEntity: "Online digital marketing agency serving Rotherham and the UK",
  areaLine: "Online agency serving Rotherham, South Yorkshire and the UK",
  serviceAreas: ["Rotherham", "Sheffield", "Doncaster", "Barnsley", "South Yorkshire", "Across the UK"],
  phones: {
    uk: { label: "UK team", display: "07988 563005", intl: "+44 7988 563005", tel: "+447988563005" },
    pk: { label: "PK team", display: "+92 346 4147423", intl: "+92 346 4147423", tel: "+923464147423" },
  },
  whatsapp: "https://wa.me/447988563005",
  whatsappNumber: "447988563005",
  email: "ceo@developerstudio.org",
  hours: "Phone and WhatsApp 24/7 across our UK and PK teams",
  replyPromise: "We reply within one working day",
  // Taken from the footer of the previous developerstudio.org (October 2026).
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/developerstudio.org" },
    { name: "Instagram", href: "https://www.instagram.com/developerstudio_org/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/developer-studio-org/" },
    { name: "X", href: "https://x.com/developerstudio" },
    { name: "YouTube", href: "https://www.youtube.com/@developerstudio" },
  ],
  googleProfile: "[Google Business Profile review link]",
} as const;

// Proof numbers. Each value must be backed by records before launch; delete any you cannot prove.
export const stats = [
  { value: "[5+]", label: "Years building websites and campaigns" },
  { value: "[120+]", label: "Projects delivered" },
  { value: "[X]", label: "Active monthly clients" },
  { value: "24/7", label: "Phone and WhatsApp cover, UK and PK teams" },
];

export const nav = [
  { label: "Services", href: "/services/" },
  { label: "Work", href: "/work/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "About", href: "/about/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Cookie Policy", href: "/cookie-policy/" },
  { label: "Terms & Conditions", href: "/terms/" },
  { label: "Payment & Refund Policy", href: "/payment-policy/" },
];

// Short, quotable reasons. Only keep the ones that are true for how you work.
export const whyUs = [
  {
    title: "One team for everything",
    body: "Your website, SEO, ads and social media sit with one team, so nothing gets lost between agencies.",
  },
  {
    title: "You own every account",
    body: "Your domain, website code, Google Ads, Analytics and Meta accounts are in your name. Leave whenever you like and take it all with you.",
  },
  {
    title: "Ad spend goes straight to Google and Meta",
    body: "You pay the ad platforms directly. Our fee is separate and fixed, so you always see what you spend.",
  },
  {
    title: "Plain-English monthly reports",
    body: "Each month you get the enquiries, calls and sales your marketing produced, not a page of jargon.",
  },
];

// Analytics and advertising tags. Leave enabled: false until GA4 or the Meta Pixel is set up.
// When enabled, the cookie banner appears and the tags load only after the visitor clicks Accept (UK PECR).
export const analytics = {
  enabled: false,
  ga4Id: "",
  metaPixelId: "",
};
