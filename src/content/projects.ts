// Projects built by DeveloperStudio. Screenshots are captured from the live preview URLs
// with scripts/shoot.mjs. Results and client quotes stay as [placeholders] until the
// client confirms them in writing.

export type Project = {
  slug: string;
  client: string;
  headline: string;
  sector: string;
  location: string;
  services: ("Web design" | "SEO" | "Google Ads" | "Social media")[];
  url: string;
  summary: string;
  brief: string;
  built: string[];
  result: string;
  resultSource: string;
  quote: { text: string; name: string; role: string } | null;
  desktop: string;
  mobile: string;
  desktopHeight: number;
  accent: string;
  uk: boolean;
};

export const projects: Project[] = [
  {
    slug: "stayright",
    client: "StayRight",
    headline: "A lead-generating website for a UK short-let management company",
    sector: "Property management",
    location: "Cardiff and South Wales, UK-wide",
    services: ["Web design", "SEO"],
    url: "https://stayright-two.vercel.app/",
    summary: "Airbnb and short-let management site with an earnings calculator that turns property owners into enquiries.",
    brief:
      "StayRight manages short-term rentals for property owners across the UK. They needed a site that explains the service clearly and gives owners a reason to get in touch. [Confirm the original brief with the client]",
    built: [
      "Earnings calculator that gives owners a personalised income estimate",
      "Owner enquiry form placed after the estimate, when interest is highest",
      "Property showcase, service and set-up information",
      "Owner and guest reviews, team profiles and an FAQ",
      "Mobile-first layout and on-page SEO for UK searches",
    ],
    result: "[Add a measurable result, such as enquiries per month or PageSpeed score]",
    resultSource: "[Source: Search Console, Analytics or client confirmation]",
    quote: null,
    desktop: "/images/work/stayright-desktop.webp",
    mobile: "/images/work/stayright-mobile.webp",
    desktopHeight: 0,
    accent: "#1d4ed8",
    uk: true,
  },
  {
    slug: "formula-drive",
    client: "Formula Unu Driving School",
    headline: "A booking-focused website for a London driving school",
    sector: "Driving school",
    location: "Hendon, North West London and Hertfordshire",
    services: ["Web design", "SEO"],
    url: "https://formula-drive.vercel.app/",
    summary: "DVSA-approved driving school site built around lesson packages, local areas and fast callback requests.",
    brief:
      "Formula Unu teaches automatic and manual lessons across North West London and Hertfordshire. Learners compare schools on price, pass rates and areas covered, so the site had to answer those questions fast. [Confirm the original brief with the client]",
    built: [
      "Lesson types in tabs: automatic, manual, intensive, refresher and Pass Plus",
      "Package pricing with door-to-door pickup explained",
      "Area pages content for Hendon, Kingsbury, Stanmore, Harrow and nearby towns",
      "Callback form, tap-to-call and WhatsApp on every screen",
      "Learner stories, FAQ and Instagram link",
    ],
    result: "[Add a measurable result, such as callback requests per month]",
    resultSource: "[Source: Search Console, Analytics or client confirmation]",
    quote: null,
    desktop: "/images/work/formula-drive-desktop.webp",
    mobile: "/images/work/formula-drive-mobile.webp",
    desktopHeight: 0,
    accent: "#dc2626",
    uk: true,
  },
  {
    slug: "nat-berman",
    client: "Nat Berman",
    headline: "A personal brand website for a business coach and speaker",
    sector: "Coaching and speaking",
    location: "Online",
    services: ["Web design", "SEO", "Social media"],
    url: "https://nat-ui-improved.vercel.app/",
    summary: "Coaching and speaker brand site that books discovery calls and grows a paid community.",
    brief:
      "Nat Berman coaches founders and speaks at events. The site needed to turn LinkedIn visitors into booked calls, speaker enquiries and community members. [Confirm the original brief with the client]",
    built: [
      "Free call booking as the main action on every page",
      "1:1 coaching page and a speaker kit for keynotes and workshops",
      "Paid community sign-up and a free playbook newsletter",
      "Client testimonials and FAQ",
      "Brand design carried across social media assets",
    ],
    result: "[Add a measurable result, such as calls booked per month]",
    resultSource: "[Source: booking tool, Analytics or client confirmation]",
    quote: null,
    desktop: "/images/work/nat-berman-desktop.webp",
    mobile: "/images/work/nat-berman-mobile.webp",
    desktopHeight: 0,
    accent: "#7c3aed",
    uk: false,
  },
  {
    slug: "apex-roofing",
    client: "Apex Roofing Co.",
    headline: "A lead-generation website for a roofing contractor",
    sector: "Roofing",
    location: "Tampa Bay, Florida, USA",
    services: ["Web design", "Google Ads"],
    url: "https://roofing-services.vercel.app/",
    summary: "Roofing lead-generation page with free inspection requests, financing and storm-damage messaging.",
    brief:
      "A roofing contractor serving the Gulf Coast needed a page that converts storm-season searches and paid traffic into inspection requests. [Confirm whether this is a client project or a concept build]",
    built: [
      "Free inspection and estimate buttons above the fold",
      "Click-to-call and WhatsApp for urgent jobs",
      "Package pricing tiers and 0% financing section",
      "Project gallery, reviews and FAQ",
      "Landing page structure suited to Google Ads traffic",
    ],
    result: "[Add a measurable result, or label this project as a concept]",
    resultSource: "[Source]",
    quote: null,
    desktop: "/images/work/apex-roofing-desktop.webp",
    mobile: "/images/work/apex-roofing-mobile.webp",
    desktopHeight: 0,
    accent: "#f97316",
    uk: false,
  },
  {
    slug: "adorned-by-ifra",
    client: "Adorned by Ifra",
    headline: "An online catalogue for a handmade gift and keepsake shop",
    sector: "Gifts and ecommerce",
    location: "Pakistan",
    services: ["Web design", "Social media"],
    url: "https://adorned-by-ifra.vercel.app/",
    summary: "Gift shop catalogue with occasion-based browsing and order enquiries through WhatsApp and Instagram.",
    brief:
      "Adorned by Ifra sells keepsakes and gift sets for birthdays, weddings and parties, with orders coming mostly through social media. The site gives customers a catalogue to browse before they order. [Confirm the original brief with the client]",
    built: [
      "Product catalogue with detail pages",
      "Browse by occasion: birthdays, weddings and parties",
      "Order and contact buttons linked to WhatsApp",
      "Gifting guide, reviews and FAQ",
      "Instagram and Facebook integration",
    ],
    result: "[Add a measurable result, such as orders or enquiries per month]",
    resultSource: "[Source]",
    quote: null,
    desktop: "/images/work/adorned-by-ifra-desktop.webp",
    mobile: "/images/work/adorned-by-ifra-mobile.webp",
    desktopHeight: 0,
    accent: "#db2777",
    uk: false,
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

// Earlier builds, shown as a gallery. These images already include device mockups.
export const moreWork = [
  { title: "Petroff", tag: "Law firm", src: "/images/projects/petroff-law-firm-website-design.png", w: 1280, h: 720 },
  { title: "London Motor Sports", tag: "Automotive ecommerce", src: "/images/projects/london-motor-sports-ecommerce-website.png", w: 1280, h: 720 },
  { title: "Roadside Hero", tag: "Auto repair and towing", src: "/images/projects/auto-repair-shop-website-design.png", w: 1280, h: 720 },
  { title: "French chateau estate", tag: "Real estate", src: "/images/projects/french-chateau-real-estate-website.png", w: 1280, h: 720 },
  { title: "Posting Workers to France", tag: "Business services and SEO", src: "/images/projects/posting-workers-france-website-seo.webp", w: 1280, h: 720 },
  { title: "Village Dogs", tag: "Charity", src: "/images/projects/village-dog-brand-website-design.png", w: 1280, h: 720 },
  { title: "Ani Filipova", tag: "Coaching", src: "/images/projects/ani-filipova-website.png", w: 1672, h: 941 },
  { title: "LinkedIn authority coach", tag: "Personal brand", src: "/images/projects/methew-website.png", w: 1672, h: 941 },
];
