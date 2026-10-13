import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Open to search engines and to AI assistants' crawlers, so DeveloperStudio can be
// found on Google and cited in AI answers. Only the post-form thank-you page is kept out.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/thank-you/" },
      { userAgent: aiCrawlers, allow: "/", disallow: "/thank-you/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
