import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { caseStudies } from "@/content/case-studies";
import { posts } from "@/content/posts";
import { legalPages } from "@/content/legal";

// Every public page. The thank-you page is left out on purpose (it is noindex).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly" = "monthly", lastModified: Date = now) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/services/", 0.9),
    ...services.map((s) => page(`/services/${s.slug}/`, 0.9)),
    page("/pricing/", 0.8),
    page("/free-growth-plan/", 0.8),
    page("/work/", 0.8),
    page("/case-studies/", 0.8),
    ...caseStudies.map((c) => page(`/case-studies/${c.slug}/`, 0.7)),
    page("/about/", 0.7),
    page("/team/", 0.6),
    page("/contact/", 0.8),
    page("/faq/", 0.7),
    page("/blog/", 0.7, "weekly"),
    ...posts.map((p) => page(`/blog/${p.slug}/`, 0.6, "monthly", new Date(`${p.updated}T12:00:00Z`))),
    ...legalPages.map((l) => page(`/${l.slug}/`, 0.2, "yearly")),
  ];
}
