import type { Faq } from "./services";

// Grouped FAQ for the FAQ page. Answers lead with the direct answer so AI Overviews and
// assistants can quote them, and only state terms that appear elsewhere on the site.
export const faqGroups: { group: string; items: Faq[] }[] = [
  {
    group: "Pricing",
    items: [
      {
        q: "How much does a digital marketing agency cost per month?",
        a: "Most UK small businesses pay between £500 and £2,500 a month for ongoing digital marketing, depending on the services. We give you a fixed written quote after a free call, so you know the price before any work starts. Ad spend is separate and paid directly to Google or Meta.",
      },
      {
        q: "How much does a website cost?",
        a: "It depends on the number of pages, features such as booking or an online shop, and whether we write the copy. A UK small business website typically costs £1,000 to £6,000 from an agency. You get a fixed quote from us after a free discovery call.",
      },
      {
        q: "What is not included in your prices?",
        a: "Ad spend, paid plugins or software licences, stock photos beyond the agreed number, and your domain renewal. We list every third-party cost in your quote before you agree to anything.",
      },
      {
        q: "Do you take a percentage of my ad spend?",
        a: "No. Our fee is quoted separately and you pay Google and Meta directly from your own account, so you always see exactly what is spent.",
      },
    ],
  },
  {
    group: "Websites",
    items: [
      {
        q: "How long does it take to build a website?",
        a: "Most small business websites take 4 to 6 weeks from the discovery call to launch. Online shops and custom features take longer. Quick feedback and ready content are the biggest factors in speed.",
      },
      {
        q: "Who owns the website?",
        a: "You do. Once the final invoice is paid, the design, code, domain and hosting are yours. We set accounts up in your name from day one, so you can leave at any time and take everything with you.",
      },
      {
        q: "What do you need from me to start?",
        a: "A 30-minute discovery call, your logo, access to your current website and domain if you have one, and photos of your work. We can write the copy for you or edit what you provide.",
      },
      {
        q: "Do you support the site after launch?",
        a: "Yes. We fix anything that is not working after launch, and you can choose ongoing help with updates, backups and security, or manage the site yourself.",
      },
      {
        q: "Will a new website hurt my Google rankings?",
        a: "Not if it is handled properly. We map every old page to its new address with permanent redirects, keep the content that ranks, and check Search Console after launch.",
      },
    ],
  },
  {
    group: "SEO and ads",
    items: [
      {
        q: "How long does SEO take to show results?",
        a: "Expect early movement in 6 to 12 weeks and steady results in 3 to 6 months. Competitive keywords take longer. Google Ads can bring enquiries within days if you need leads sooner.",
      },
      {
        q: "How much should I spend on Google Ads?",
        a: "Many UK small businesses start with £500 to £1,500 a month in ad spend. We work out a budget from your cost per click, the number of enquiries you need and what a customer is worth to you.",
      },
      {
        q: "How do you report results?",
        a: "You get a plain-English report every month showing enquiries, calls, sales and costs, plus what we did and what comes next. We use Google Analytics 4, Search Console and the ad platforms' own data.",
      },
      {
        q: "Can you help my business appear in ChatGPT and Google AI answers?",
        a: "Yes. AI assistants draw on pages that answer questions clearly and describe a business consistently. We write direct answers to the questions your customers ask, keep your business details identical everywhere and add structured data so your business is easy to describe.",
      },
      {
        q: "What is the 70/20/10 rule in digital marketing?",
        a: "It is a way to split a marketing budget: 70% on channels that already bring customers, 20% on growing what is starting to work, and 10% on new experiments. It protects your core results while leaving room to test new ideas.",
      },
      {
        q: "Is digital marketing still worth it in 2026?",
        a: "Yes, when it is measured on enquiries and sales. Most customers search on Google or ask an AI assistant before they buy, so a fast website, good local SEO and well-tracked ads put you in front of them at that moment.",
      },
    ],
  },
  {
    group: "Working with us",
    items: [
      {
        q: "Are you based in Rotherham?",
        a: "DeveloperStudio is an online agency. We work with businesses in Rotherham, Sheffield, Doncaster, Barnsley and across the UK by phone, WhatsApp and video call, which keeps our costs and your prices lower than an agency with a big office.",
      },
      {
        q: "Who will actually do the work?",
        a: "A named team. Our UK team is your point of contact, and our team in Pakistan designs, builds and runs campaigns during UK working hours. You always know who is working on your project.",
      },
      {
        q: "Do I have to sign a long contract?",
        a: "No. Ongoing services such as SEO, ads and social media run on rolling monthly agreements. Website projects have a fixed scope and a fixed price agreed before we start.",
      },
      {
        q: "What happens if I want to leave?",
        a: "You keep everything. Your domain, website, Google Ads, Analytics and Meta accounts are in your name from day one, so leaving is simple and nothing is held back.",
      },
      {
        q: "Do you work with businesses outside Rotherham?",
        a: "Yes. We are an online agency, so we work with businesses across South Yorkshire and the rest of the UK, by phone, WhatsApp and video call.",
      },
      {
        q: "How do we get started?",
        a: "Ask for a free growth plan, call 07988 563005 or message us on WhatsApp. We will review your website and Google visibility and send a plain-English plan with prices.",
      },
    ],
  },
];

// Home page FAQ: questions people search for ("People also ask") and the worries buyers raise.
// Answers lead with the direct answer and avoid figures that are not confirmed yet.
export const homeFaqs: Faq[] = [
  {
    q: "How much does a digital marketing agency cost per month?",
    a: "Most UK small businesses pay between £500 and £2,500 a month for ongoing digital marketing, depending on the services. We give you a fixed written quote after a free call, so you know the price before any work starts. Ad spend is separate and paid directly to Google or Meta.",
  },
  {
    q: "How long does it take to build a website?",
    a: "Most small business websites take 4 to 6 weeks from the discovery call to launch. Online shops and custom features take longer. Quick feedback and ready content are the biggest factors in speed.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "Expect early movement in 6 to 12 weeks and steady results in 3 to 6 months. Competitive keywords take longer. If you need enquiries sooner, Google Ads can start bringing calls within days while SEO builds.",
  },
  {
    q: "Who owns the website and ad accounts?",
    a: "You do. Your domain, website, Google Ads, Analytics and Meta accounts are set up in your name from day one, with us added as managers. If you ever leave, everything stays with you.",
  },
  {
    q: "Do I have to sign a long contract?",
    a: "No. Ongoing services such as SEO, ads and social media run on rolling monthly agreements. Website projects have a fixed scope and a fixed price agreed before we start.",
  },
  {
    q: "Who will actually do the work?",
    a: "A named team. Our UK team is your point of contact, and our team in Pakistan designs, builds and runs campaigns during UK working hours. You always know who is working on your project.",
  },
  {
    q: "Is digital marketing still worth it in 2026?",
    a: "Yes, when it is measured on enquiries and sales. Most customers search on Google or ask an AI assistant before they buy. A fast website, good local SEO and well-tracked ads put you in front of them at that moment.",
  },
  {
    q: "How do we get started?",
    a: "Ask for a free growth plan, call 07988 563005 or message us on WhatsApp. We review your website and Google visibility and send a plain-English plan with a fixed price.",
  },
];
