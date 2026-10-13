import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { ArrowRight, Clock, Phone, RefreshCw } from "lucide-react";
import { getPost, posts, type Block } from "@/content/posts";
import { site } from "@/content/site";
import { Breadcrumbs, JsonLd } from "@/components/Breadcrumbs";
import { InView } from "@/components/InView";
import { LegalToc } from "@/components/LegalToc";
import { PostCover } from "@/components/PostCover";
import { ReadingProgress } from "@/components/ReadingProgress";
import { CtaSection } from "@/components/CtaSection";
import { WhatsAppIcon } from "@/components/icons";

export const dynamicParams = false;

// Search titles kept under about 60 characters so Google shows them in full.
const metaTitles: Record<string, string> = {
  "digital-marketing-agency-cost-uk": "Digital Marketing Agency Cost per Month (UK, 2026)",
  "how-to-choose-digital-marketing-agency-rotherham": "How to Choose a Digital Marketing Agency in Rotherham",
  "70-20-10-rule-digital-marketing": "The 70/20/10 Rule in Digital Marketing | DeveloperStudio",
  "how-much-does-a-website-cost-uk": "How Much Does a Website Cost in the UK? (2026 Guide)",
};

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return {
    title: metaTitles[p.slug] ?? `${p.title} | DeveloperStudio`,
    description: p.description,
    alternates: { canonical: `/blog/${p.slug}/` },
    openGraph: { type: "article", publishedTime: p.published, modifiedTime: p.updated, authors: [p.author.name] },
  };
}

const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

function PostBlock({ block }: { block: Block }) {
  if (block.type === "p") return <p className="text-[18px] leading-[1.8] text-zinc-700">{block.text}</p>;
  if (block.type === "list")
    return (
      <ul className="grid gap-3">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[18px] leading-[1.7] text-zinc-700">
            <span aria-hidden className="mt-[0.72em] size-2 shrink-0 rounded-sm bg-brand-dark" />
            {item}
          </li>
        ))}
      </ul>
    );
  return (
    <div className="overflow-x-auto rounded-2xl ring-1 ring-brand">
      <table className="w-full min-w-[520px] text-left text-[15px]">
        <thead>
          <tr className="bg-brand-dark text-white">
            {block.head.map((h) => (
              <th key={h} scope="col" className="px-5 py-3.5 text-[13px] font-bold tracking-wide uppercase">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr key={row[0]} className="border-t border-zinc-200 transition-colors hover:bg-brand/[0.04]">
              {row.map((cell, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="px-5 py-3.5 align-top font-semibold text-ink">
                    {cell}
                  </th>
                ) : (
                  <td key={j} className="px-5 py-3.5 align-top text-zinc-700">
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const toc = post.sections.map((s) => ({ id: slugify(s.h), heading: s.h.replace(/^\d+\.\s*/, "") }));
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const midpoint = Math.min(2, post.sections.length - 1);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.updated,
    url: `${site.url}/blog/${post.slug}/`,
    author: { "@type": "Person", name: post.author.name, jobTitle: post.author.role, image: `${site.url}${post.author.photo}` },
    publisher: { "@type": "Organization", name: site.name, url: site.url, logo: { "@type": "ImageObject", url: `${site.url}/images/developer-studio-logo.png` } },
    mainEntityOfPage: `${site.url}/blog/${post.slug}/`,
  };

  return (
    <main id="main">
      <JsonLd data={schema} />
      <ReadingProgress targetId="post-body" />

      {/* Hero */}
      <section className="relative overflow-clip bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="dot-grid absolute inset-0" />
          <div className="drift-a absolute top-[-15%] right-[-10%] h-[560px] w-[560px] rounded-full bg-brand/15 blur-[110px]" />
        </div>
        <div className="relative mx-auto max-w-[1200px] px-4 pt-8 pb-12 sm:px-6 sm:pt-10">
          <Breadcrumbs
            className="hero-in"
            items={[
              { name: "Home", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: post.category, href: `/blog/${post.slug}/` },
            ]}
          />
          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div>
              <span className="hero-in inline-flex rounded-full bg-brand/10 px-3 py-1 text-[13px] font-bold text-brand-dark [animation-delay:60ms]">
                {post.category}
              </span>
              <h1 className="hero-in mt-5 text-[2.3rem] leading-[1.08] font-extrabold tracking-[-0.03em] text-ink [animation-delay:120ms] sm:text-5xl">
                {post.title}
              </h1>
              <p className="hero-in mt-5 text-lg leading-relaxed text-zinc-600 [animation-delay:180ms]">{post.description}</p>
              <div className="hero-in mt-7 flex flex-wrap items-center gap-x-6 gap-y-4 [animation-delay:240ms]">
                <div className="flex items-center gap-3">
                  <Image src={post.author.photo} alt={post.author.name} width={56} height={56} className="size-12 rounded-full object-cover object-top ring-2 ring-brand" />
                  <div className="text-[14px] leading-tight">
                    <p className="font-bold text-ink">{post.author.name}</p>
                    <p className="text-zinc-500">{post.author.role}</p>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-zinc-500">
                  <time dateTime={post.published}>Published {formatDate(post.published)}</time>
                  {post.updated !== post.published && (
                    <span className="inline-flex items-center gap-1">
                      <RefreshCw aria-hidden className="size-3.5" />
                      Updated {formatDate(post.updated)}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1">
                    <Clock aria-hidden className="size-3.5" />
                    {post.readMins} min read
                  </span>
                </div>
              </div>
            </div>
            <div className="hero-in group [animation-delay:200ms]">
              <PostCover post={post} className="aspect-[16/10] rounded-3xl shadow-[0_30px_70px_-25px_rgb(10_10_10/0.45)] ring-1 ring-brand" />
            </div>
          </div>
        </div>
      </section>

      {/* Body: contents pinned beside the article */}
      <section className="border-t border-zinc-200 bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[260px_1fr] lg:gap-16">
          <div className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
            <LegalToc items={toc} articleId="post-body" />
            <div className="mt-4 rounded-3xl bg-ink p-5 text-white">
              <p className="text-[15px] font-bold">Need help with this?</p>
              <a href={`tel:${site.phones.uk.tel}`} className="mt-3 flex items-center gap-2 text-[14px] text-zinc-300 hover:text-white">
                <Phone aria-hidden className="size-4 text-brand-light" />
                {site.phones.uk.display}
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener" className="mt-2 flex items-center gap-2 text-[14px] text-zinc-300 hover:text-white">
                <WhatsAppIcon className="size-4 text-brand-light" />
                WhatsApp us
              </a>
            </div>
          </div>

          <article id="post-body" className="max-w-[740px]">
            {/* Answer first, for readers and for AI Overviews */}
            <div className="rounded-3xl border-l-4 border-brand-dark bg-mist p-6 sm:p-8">
              <p className="text-[12px] font-bold tracking-[0.16em] text-brand-dark uppercase">Short answer</p>
              <p className="mt-3 text-[19px] leading-[1.7] font-medium text-ink">{post.answer}</p>
            </div>

            <div className="mt-12 grid gap-12">
              {post.sections.map((s, i) => (
                <div key={s.h} className="grid gap-12">
                  <section id={toc[i].id} className="scroll-mt-28">
                    <h2 className="text-[1.75rem] leading-tight font-extrabold tracking-tight text-ink sm:text-3xl">{s.h}</h2>
                    <div className="mt-5 grid gap-5">
                      {s.blocks.map((b, j) => (
                        <PostBlock key={j} block={b} />
                      ))}
                    </div>
                  </section>

                  {/* Mid-article offer */}
                  {i === midpoint - 1 && (
                    <aside className="relative overflow-hidden rounded-3xl bg-brand-dark p-7 text-white sm:p-8">
                      <div aria-hidden className="cta-grid absolute inset-0" />
                      <div className="relative">
                        <p className="text-xl font-extrabold sm:text-2xl">Want to know where your business stands?</p>
                        <p className="mt-2 text-[16px] text-white/85">Get a free review of your website and Google visibility, with a custom offer.</p>
                        <Link
                          href="/free-growth-plan/"
                          className="btn-shine group mt-5 inline-flex h-12 items-center gap-2 rounded-full bg-black px-6 text-[15px] font-bold text-white"
                        >
                          Get your free growth plan
                          <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </aside>
                  )}
                </div>
              ))}
            </div>

            {/* End of article: next step and author */}
            <div className="mt-14 flex flex-col gap-4 rounded-3xl p-6 ring-1 ring-brand sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <p className="text-lg font-bold text-ink">Ready to take the next step?</p>
              <Link
                href={post.service.href}
                className="btn-shine group inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-brand-dark px-6 text-[15px] font-bold text-white transition-colors hover:bg-brand-deeper"
              >
                {post.service.label}
                <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-6 flex items-start gap-5 rounded-3xl bg-mist p-6 sm:p-8">
              <Image src={post.author.photo} alt={post.author.name} width={80} height={80} className="size-16 shrink-0 rounded-2xl object-cover object-top" />
              <div>
                <p className="text-[12px] font-bold tracking-[0.16em] text-brand-dark uppercase">About the author</p>
                <p className="mt-1 text-lg font-bold text-ink">{post.author.name}</p>
                <p className="text-[14px] text-zinc-500">{post.author.role}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">
                  Haseeb founded DeveloperStudio and leads strategy and client work across websites, SEO and paid ads.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Related guides */}
      <section className="bg-mist py-16 sm:py-20">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <InView className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="reveal-up text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">Keep reading</h2>
            <Link href="/blog/" className="reveal-up group inline-flex items-center gap-2 text-[15px] font-bold text-brand-dark">
              All guides
              <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </InView>
          <InView as="ul" className="mt-8 grid gap-6 md:grid-cols-3" threshold={0.15}>
            {related.map((r, i) => (
              <li key={r.slug} className="reveal-up" style={{ "--d": `${0.08 + i * 0.1}s` } as CSSProperties}>
                <Link
                  href={`/blog/${r.slug}/`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-brand transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgb(4_120_87/0.45)]"
                >
                  <PostCover post={r} className="aspect-[16/9]" />
                  <span className="p-6">
                    <span className="block text-[13px] text-zinc-500">{r.readMins} min read</span>
                    <span className="mt-2 block text-lg leading-snug font-extrabold text-ink">{r.title}</span>
                  </span>
                </Link>
              </li>
            ))}
          </InView>
        </div>
      </section>

      <CtaSection title="Want this done for your business?" source={`blog-${post.slug}`} />
    </main>
  );
}
