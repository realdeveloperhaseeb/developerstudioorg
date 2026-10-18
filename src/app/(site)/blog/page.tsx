import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { posts, type Post } from "@/content/posts";
import { site } from "@/content/site";
import { Breadcrumbs, JsonLd } from "@/components/Breadcrumbs";
import { BlogGrid } from "@/components/BlogGrid";
import { PostCover } from "@/components/PostCover";
import { CtaSection } from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Digital Marketing Blog | DeveloperStudio",
  description:
    "Practical advice on websites, SEO and online advertising for UK small businesses, from the DeveloperStudio team.",
  alternates: { canonical: "/blog/" },
};

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

const sorted = [...posts].sort((a, b) => b.published.localeCompare(a.published));
const [featured, ...rest] = sorted;

function Meta({ post, light }: { post: Post; light?: boolean }) {
  return (
    <p className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] ${light ? "text-zinc-400" : "text-zinc-500"}`}>
      <time dateTime={post.published}>{formatDate(post.published)}</time>
      <span aria-hidden>·</span>
      <span className="inline-flex items-center gap-1">
        <Clock aria-hidden className="size-3.5" />
        {post.readMins} min read
      </span>
    </p>
  );
}

function Card({ post }: { post: Post }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-brand transition duration-500 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#047857] hover:ring-2">
      <PostCover post={post} className="aspect-[16/10]" />
      <div className="flex flex-1 flex-col p-6">
        <Meta post={post} />
        <h3 className="mt-3 text-xl leading-snug font-extrabold tracking-tight text-ink">
          <Link href={`/blog/${post.slug}/`} className="after:absolute after:inset-0 after:rounded-3xl">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{post.description}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[15px] font-bold text-brand-dark">
          Read the guide
          <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  );
}

export default function BlogPage() {
  return (
    <main id="main">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "DeveloperStudio digital marketing blog",
          url: `${site.url}/blog/`,
          publisher: { "@type": "Organization", name: site.name, url: site.url },
          blogPost: sorted.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${site.url}/blog/${p.slug}/`,
            datePublished: p.published,
            author: { "@type": "Person", name: p.author.name },
          })),
        }}
      />

      {/* Hero */}
      <section className="relative overflow-clip bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="dot-grid absolute inset-0" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-4 pt-8 pb-12 sm:px-6 sm:pt-10 sm:pb-16">
          <Breadcrumbs
            className="hero-in"
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog/" },
            ]}
          />
          <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <h1 className="hero-in text-[2.6rem] leading-[1.04] font-extrabold tracking-[-0.02em] text-ink [animation-delay:80ms] sm:text-6xl">
                Digital marketing,{" "}
                <span className="relative isolate whitespace-nowrap text-brand-dark">
                  <span aria-hidden className="marker absolute inset-x-0 bottom-[0.08em] -z-10 h-[0.3em] rounded-sm bg-brand/20" />
                  explained plainly
                </span>
              </h1>
              <p className="hero-in mt-6 max-w-[620px] text-lg leading-relaxed text-zinc-600 [animation-delay:160ms] sm:text-xl">
                Practical guides on websites, SEO and online advertising for UK small businesses. Straight answers, real prices,
                no jargon.
              </p>
            </div>
            <div className="hero-in flex items-center gap-4 rounded-3xl bg-white p-5 ring-1 ring-zinc-200 [animation-delay:240ms]">
              <Image
                src={featured.author.photo}
                alt={featured.author.name}
                width={64}
                height={64}
                className="size-14 shrink-0 rounded-sm object-cover object-top ring-2 ring-brand"
              />
              <p className="text-[14px] leading-snug text-zinc-600">
                Written by the team that builds the websites and runs the campaigns, led by{" "}
                <strong className="text-ink">{featured.author.name}</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-white pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <article className="hero-in group relative grid overflow-hidden rounded-3xl bg-ink text-white ring-1 ring-brand [animation-delay:300ms] lg:grid-cols-[1.1fr_0.9fr]">
            <PostCover post={featured} className="aspect-[16/10] lg:aspect-auto lg:min-h-[380px]" />
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <span className="self-start rounded-sm bg-brand-dark px-3 py-1 text-[12px] font-bold">Featured guide</span>
              <h2 className="mt-5 text-3xl leading-tight font-extrabold tracking-tight sm:text-4xl">
                <Link href={`/blog/${featured.slug}/`} className="after:absolute after:inset-0">
                  {featured.title}
                </Link>
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-zinc-300">{featured.description}</p>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <Meta post={featured} light />
                <span className="inline-flex items-center gap-1.5 text-[15px] font-bold text-brand-light">
                  Read the guide
                  <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* All guides with topic filter */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold tracking-[-0.015em] text-ink sm:text-4xl">All guides</h2>
          <div className="mt-8">
            <BlogGrid items={rest.map((p) => ({ category: p.category, node: <Card post={p} /> }))} />
          </div>
        </div>
      </section>

      <CtaSection title="Want advice for your own business?" source="blog" />
    </main>
  );
}
