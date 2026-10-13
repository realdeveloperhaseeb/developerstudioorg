export type Faq = { q: string; a: string };

export type Evidence = { src: string; alt: string; caption: string; w: number; h: number };

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: "code" | "search" | "target" | "share";
  title: string;
  description: string;
  h1: string;
  outcome: string;
  card: string;
  // Answer-first passage: a direct 40-60 word answer that AI Overviews and assistants can quote.
  quickAnswer: { q: string; a: string };
  forWho: string;
  problems: { title: string; body: string }[];
  included: string[];
  process: { title: string; body: string; time: string }[];
  price: { from: string; unit: string; note: string };
  priceFactors: string[];
  faqs: Faq[];
  work: string[];
  evidence?: Evidence[];
  // Slugs from case-studies.ts shown as proof on the service page.
  caseStudies?: string[];
  extra?: { heading: string; body: string };
  keywords: string[];
};

const seoEvidence: Evidence[] = [
  {
    src: "/images/projects/TheLittleCRM.png",
    alt: "Google Search Console report for TheLittleCRM showing 324 clicks, 865 impressions and 37.5% click-through rate",
    caption: "Search Console for TheLittleCRM: 324 clicks at a 37.5% click-through rate.",
    w: 1014,
    h: 325,
  },
  {
    src: "/images/projects/seo-results.png",
    alt: "Google Search Console report showing impressions climbing to 141k with 1.7k clicks",
    caption: "Search Console for a client site: impressions climbing steadily to 141k.",
    w: 552,
    h: 310,
  },
];


export const services: Service[] = [
  {
    slug: "web-design-development",
    name: "Web Design & Development",
    short: "Web design",
    icon: "code",
    title: "Web Design & Development Rotherham | DeveloperStudio",
    description:
      "Fast, mobile-first websites built to turn visitors into enquiries. Custom design and development for Rotherham and UK businesses. Get a quote.",
    h1: "Web Design & Development in Rotherham",
    outcome: "Fast, mobile-first websites that turn visitors into calls, WhatsApp messages and enquiries.",
    card: "Custom websites that load fast, work on every phone and make it easy to get in touch.",
    keywords: ["web design Rotherham", "website developer Rotherham", "ecommerce website"],
    quickAnswer: {
      q: "What does a web design agency in Rotherham do?",
      a: "A web design agency plans, designs and builds your website so it loads fast, works on phones and turns visitors into enquiries. DeveloperStudio works online with Rotherham and UK businesses. We handle the design, build, page structure, contact forms, tracking and launch, and you own the finished site.",
    },
    forWho:
      "For businesses whose website looks dated, loads slowly on phones, or gets visitors who never get in touch. It also suits new businesses that need a professional site quickly, and companies moving off a template builder they have outgrown.",
    problems: [
      { title: "Slow on phones", body: "Most visitors arrive on a phone. We build mobile-first and test speed before launch." },
      { title: "Visitors don't get in touch", body: "Clear calls to action, tap-to-call, WhatsApp and short forms on every key page." },
      { title: "Hard to update", body: "A simple editor or a care plan, so changes never wait weeks." },
    ],
    included: [
      "Discovery call and a written site plan before any design starts",
      "Custom design for desktop and mobile, with two rounds of revisions",
      "Development with modern frameworks such as Next.js, or WordPress when you want to edit it yourself",
      "Enquiry, quote or booking forms, tap-to-call and WhatsApp buttons",
      "On-page SEO basics: titles, descriptions, headings, image alt text, sitemap and schema",
      "Speed work aimed at Google's Core Web Vitals targets",
      "Google Analytics 4 and Search Console set up, with enquiry tracking",
      "Domain, hosting and code handed over in your name",
    ],
    process: [
      { title: "Discover", body: "We learn your services, customers and goals, and audit your current site.", time: "Week 1" },
      { title: "Plan and design", body: "Site map, page structure and designs for you to review.", time: "Weeks 1-3" },
      { title: "Build and test", body: "Development, content entry, speed and device testing.", time: "Weeks 3-5" },
      { title: "Launch and hand over", body: "Redirects, tracking checks, training and handover of every login.", time: "Week 6" },
    ],
    price: { from: "£99", unit: "one-off", note: "Typical small business sites take 4 to 6 weeks." },
    priceFactors: [
      "Number of pages and unique page designs",
      "Online shop, booking system or other integrations",
      "Whether we write the copy or you supply it",
      "Moving content and redirects from an old site",
    ],
    faqs: [
      {
        q: "How long does a new website take?",
        a: "Most small business websites take 4 to 6 weeks from the discovery call to launch. Larger sites with an online shop or custom features take longer. The biggest factor is how quickly content and feedback come back to us.",
      },
      {
        q: "Who owns the website when it is finished?",
        a: "You do. Once the final invoice is paid, the design, code, domain and hosting accounts are yours. We set them up in your name from the start, so you are never locked in.",
      },
      {
        q: "Can I update the site myself?",
        a: "Yes, if you want to. We can build on a content management system you can edit, and we show you how to use it. If you prefer, a monthly care plan covers updates for you.",
      },
      {
        q: "Will a redesign hurt my Google rankings?",
        a: "Not if it is handled properly. We map every old URL to its new page with permanent redirects, keep the content that ranks, and check Search Console after launch.",
      },
      {
        q: "Do you build mobile apps?",
        a: "We focus on websites and web apps. If you need a mobile app, talk to us first and we will tell you honestly whether we are the right fit.",
      },
    ],
    work: ["stayright", "formula-drive"],
    extra: {
      heading: "Web apps and custom tools",
      body: "Alongside marketing websites we build web apps such as calculators, client portals and booking tools. StayRight's earnings calculator is one example. We only recommend custom development when a standard tool will not do the job.",
    },
  },
  {
    slug: "seo",
    name: "SEO",
    short: "SEO",
    icon: "search",
    title: "SEO Services Rotherham | DeveloperStudio",
    description:
      "Local and technical SEO to get your business found on Google in Rotherham and across the UK. Clear monthly reports. Free audit available.",
    h1: "SEO Services in Rotherham",
    outcome: "Get found on Google, in the map results and in AI answers when local customers search for what you do.",
    card: "Local and technical SEO that gets you found on Google and in AI answers.",
    keywords: ["SEO Rotherham", "local SEO", "SEO agency Rotherham"],
    quickAnswer: {
      q: "How long does SEO take to work?",
      a: "Most businesses see early movement in 6 to 12 weeks and steady results in 3 to 6 months. The timing depends on competition, the state of your website and how much content you need. We report queries, rankings and enquiries every month, so you can see the progress.",
    },
    forWho:
      "For local and UK-wide businesses that rely on Google for new customers but rarely show on page one, or whose rankings dropped after a redesign. It also suits businesses that want to be named when people ask AI assistants for a recommendation.",
    problems: [
      { title: "Not on page one", body: "We find the searches your customers use and build pages that answer them." },
      { title: "Missing from the map", body: "Google Business Profile set-up, categories, reviews and consistent listings." },
      { title: "Technical problems", body: "Speed, indexing, broken links and duplicate pages fixed at the source." },
    ],
    included: [
      "Full audit of your site, rankings and competitors",
      "Keyword research based on real searches in Rotherham, South Yorkshire and the UK",
      "On-page work: titles, headings, internal links and content improvements",
      "Technical SEO: speed, crawling, indexing, schema and site structure",
      "Google Business Profile optimisation and a review plan",
      "Local listings on directories such as Yell, Bing Places and Apple Business Connect",
      "Content that answers customer questions, structured so AI assistants can quote it",
      "Monthly plain-English report with rankings, traffic and enquiries",
    ],
    process: [
      { title: "Audit", body: "Technical crawl, keyword gaps and the competitors outranking you.", time: "Weeks 1-2" },
      { title: "Fix foundations", body: "Technical fixes, page titles, structure and Google Business Profile.", time: "Month 1" },
      { title: "Build content and links", body: "New pages and articles, local listings and genuine links.", time: "Months 2-6" },
      { title: "Measure and refine", body: "Monthly reports and a plan for the month ahead.", time: "Monthly" },
    ],
    price: { from: "£299", unit: "per month", note: "Rolling monthly agreement." },
    priceFactors: [
      "How competitive your keywords are",
      "Local only, or national as well",
      "How much new content is needed each month",
      "The technical state of your current site",
    ],
    faqs: [
      {
        q: "What is local SEO?",
        a: "Local SEO helps your business appear when people nearby search for your service, including the Google map results. It covers your Google Business Profile, reviews, consistent business listings and location-relevant content on your site.",
      },
      {
        q: "Can you guarantee first place on Google?",
        a: "No honest agency can. Google decides rankings, and a guaranteed position is a warning sign. We commit to the work, the reporting and clear targets based on your market.",
      },
      {
        q: "How do you help us appear in AI answers?",
        a: "AI Overviews and assistants such as ChatGPT draw on pages that answer questions clearly and consistently. We write direct answers, keep your business details identical everywhere and add structured data so your business is easy to describe.",
      },
      {
        q: "Do I need SEO if I run Google Ads?",
        a: "They work well together. Ads bring enquiries straight away, while SEO builds traffic you do not pay for per click. Many clients start with ads and add SEO for the longer term.",
      },
    ],
    work: ["nat-berman", "stayright"],
    evidence: seoEvidence,
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    short: "Google Ads",
    icon: "target",
    title: "Google Ads Management Rotherham | DeveloperStudio",
    description:
      "Google Ads management focused on cost per enquiry, not clicks. Set-up, tracking and monthly reporting for UK businesses. Free account review.",
    h1: "Google Ads Management in Rotherham",
    outcome: "Paid search and shopping campaigns measured on cost per enquiry and sale, not clicks.",
    card: "Google Ads managed on cost per enquiry, with tracking set up first.",
    keywords: ["PPC agency Rotherham", "Google Ads management", "Google Ads agency Rotherham"],
    quickAnswer: {
      q: "How much should a small business spend on Google Ads?",
      a: "Many UK small businesses start with £500 to £1,500 a month in ad spend, plus a management fee. The right figure depends on your cost per click, how many enquiries you need and what each customer is worth. We work it out from your numbers before you spend anything.",
    },
    forWho:
      "For businesses that need enquiries now, owners who have tried Google Ads and wasted budget, and online shops that want shopping campaigns to pay for themselves.",
    problems: [
      { title: "Spend with no enquiries", body: "Conversion tracking first, so every pound is tied to a call, form or sale." },
      { title: "Clicks from the wrong people", body: "Tight keywords, negative lists and location targeting around your service area." },
      { title: "No idea what works", body: "A monthly report with cost per enquiry by campaign and clear next steps." },
    ],
    included: [
      "Account audit, or a new account set up in your name",
      "Conversion tracking for calls, forms, WhatsApp and purchases",
      "Search, Performance Max and Shopping campaigns where they fit",
      "Keyword research, negative keywords and ad copy testing",
      "Landing page recommendations, or a landing page built by us",
      "Budget and bid management against a target cost per enquiry",
      "Meta (Facebook and Instagram) ads when they suit your audience",
      "Monthly report and review call",
    ],
    process: [
      { title: "Review", body: "We look at your account, website and numbers and agree a target cost per enquiry.", time: "Week 1" },
      { title: "Track", body: "Conversion tracking set up and tested before campaigns go live.", time: "Weeks 1-2" },
      { title: "Launch", body: "Campaigns built, approved and launched on a controlled budget.", time: "Week 2" },
      { title: "Optimise", body: "Weekly checks, monthly reports and budget moved to what works.", time: "Ongoing" },
    ],
    price: { from: "£349", unit: "per month", note: "Ad spend is paid by you directly to Google or Meta, with no markup." },
    priceFactors: ["Monthly ad spend", "Number of campaigns and platforms", "Shopping feeds and ecommerce tracking", "Landing pages needed"],
    faqs: [
      {
        q: "Do you take a percentage of my ad spend?",
        a: "Our management fee is quoted separately from your ad spend. You pay Google and Meta directly from your own account, so you always see exactly what is spent.",
      },
      {
        q: "How quickly will Google Ads bring enquiries?",
        a: "Campaigns can bring enquiries within days of launch. The first 4 to 8 weeks are about learning which keywords and ads convert, then we cut waste and scale what works.",
      },
      {
        q: "What is a good cost per lead on Google Ads?",
        a: "It depends on your industry and what a customer is worth. A trades business might accept £20 to £60 per enquiry, while a high-value service can justify much more. We set a target from your margins.",
      },
      {
        q: "Who owns the ad account?",
        a: "You do. Accounts are created in your name and we are added as managers. If you leave, the account and all its history stay with you.",
      },
    ],
    work: ["apex-roofing", "formula-drive"],
    caseStudies: ["roadside-hero-google-ads", "excite-property-meta-leads"],
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    short: "Social media",
    icon: "share",
    title: "Social Media Marketing Rotherham | DeveloperStudio",
    description:
      "Social media marketing for UK businesses: content, paid campaigns and reporting that link to real enquiries. Talk to our team.",
    h1: "Social Media Marketing in Rotherham",
    outcome: "Content and paid social campaigns tied to enquiries and sales, not just likes.",
    card: "Content, paid social and reporting that ties posts to enquiries.",
    keywords: ["social media marketing Rotherham", "social media agency Rotherham"],
    quickAnswer: {
      q: "Is social media marketing worth it for a small business?",
      a: "Yes, when it is tied to a clear goal such as enquiries, bookings or sales. Regular posting builds trust with people who already know you. Paid social on Facebook and Instagram reaches new local customers quickly. We report results in enquiries, not likes.",
    },
    forWho:
      "For businesses that post without a plan, have no time to create content, or have boosted posts that brought likes but no customers.",
    problems: [
      { title: "No time to post", body: "A monthly content calendar planned, written and designed for you." },
      { title: "Likes, not customers", body: "Paid campaigns with lead forms, WhatsApp and website tracking." },
      { title: "Inconsistent brand", body: "Templates and a tone of voice that match your website." },
    ],
    included: [
      "Social media audit and a plan for the platforms your customers use",
      "Monthly content calendar with designed posts, reels and captions",
      "Scheduling and replies to comments",
      "Facebook and Instagram ads with lead forms or WhatsApp",
      "LinkedIn content for B2B businesses",
      "Meta Pixel and conversion tracking",
      "Monthly report linking social activity to enquiries",
    ],
    process: [
      { title: "Audit", body: "Your current channels, competitors and audience.", time: "Week 1" },
      { title: "Plan", body: "Content themes, calendar and ad plan for your approval.", time: "Week 2" },
      { title: "Create and launch", body: "Posts designed and scheduled, campaigns launched.", time: "Weeks 3-4" },
      { title: "Report", body: "Monthly results and the next month's plan.", time: "Monthly" },
    ],
    price: { from: "£149", unit: "per month", note: "Ad spend is paid directly to Meta or LinkedIn." },
    priceFactors: ["Number of platforms", "Posts and videos per month", "Paid campaign management", "Photo or video shoots"],
    faqs: [
      {
        q: "Which platforms should my business be on?",
        a: "The ones your customers use. For most local consumer businesses that means Facebook and Instagram. B2B companies usually do better on LinkedIn. We recommend platforms after the audit, not before.",
      },
      {
        q: "Do you create the content?",
        a: "Yes. We plan, write and design the posts and short videos. You approve the calendar before anything goes live.",
      },
      {
        q: "How do you measure social media results?",
        a: "We track enquiries, WhatsApp chats, website visits and sales from social, using the Meta Pixel and tracked links. Reach and engagement are reported, but they are not the goal.",
      },
    ],
    work: ["nat-berman", "adorned-by-ifra"],
    caseStudies: ["blanche-beauty-whatsapp-leads", "aswora-travels-whatsapp-leads", "excite-property-meta-leads"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
