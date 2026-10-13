import Link from "next/link";
import { ArrowRight, Check, FileText } from "lucide-react";
import { legalPages, type LegalBlock, type LegalPage } from "@/content/legal";
import { Breadcrumbs } from "./Breadcrumbs";
import { LegalToc } from "./LegalToc";

function Block({ block }: { block: LegalBlock }) {
  if (typeof block === "string") return <p className="text-[17px] leading-[1.75] text-zinc-700">{block}</p>;
  if ("list" in block)
    return (
      <ul className="grid gap-2.5">
        {block.list.map((item) => (
          <li key={item} className="flex items-start gap-3 text-[17px] leading-[1.7] text-zinc-700">
            <span aria-hidden className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-brand-dark" />
            {item}
          </li>
        ))}
      </ul>
    );
  return (
    <div className="overflow-x-auto rounded-2xl ring-1 ring-zinc-200">
      <table className="w-full min-w-[520px] text-left text-[15px]">
        <thead>
          <tr className="bg-mist">
            {block.table.head.map((h) => (
              <th key={h} scope="col" className="px-5 py-3.5 font-bold text-ink">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.table.rows.map((row) => (
            <tr key={row[0]} className="border-t border-zinc-200">
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

export function LegalTemplate({ page }: { page: LegalPage }) {
  const others = legalPages.filter((p) => p.slug !== page.slug);
  return (
    <main id="main">
      {/* Hero */}
      <section className="relative overflow-clip bg-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="dot-grid absolute inset-0" />
          <div className="drift-a absolute top-[-20%] right-[-10%] h-[520px] w-[520px] rounded-full bg-brand/15 blur-[110px]" />
        </div>
        <div className="relative mx-auto grid max-w-[1200px] items-end gap-10 px-4 pt-8 pb-14 sm:px-6 sm:pt-10 lg:grid-cols-[1fr_1fr] lg:pb-16">
          <div>
            <Breadcrumbs
              className="hero-in"
              items={[
                { name: "Home", href: "/" },
                { name: page.title, href: `/${page.slug}/` },
              ]}
            />
            <h1 className="hero-in mt-8 text-[2.6rem] leading-[1.04] font-extrabold tracking-[-0.035em] text-ink [animation-delay:80ms] sm:text-6xl">
              {page.title}
            </h1>
            <p className="hero-in mt-5 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-zinc-600 ring-1 ring-zinc-200 [animation-delay:160ms]">
              <FileText aria-hidden className="size-4 text-brand-dark" />
              Last updated <time>{page.updated}</time>
            </p>
          </div>
          {/* Plain-English summary */}
          <div className="hero-in rounded-3xl bg-ink p-7 text-white [animation-delay:220ms]">
            <p className="text-[12px] font-bold tracking-[0.16em] text-brand-light uppercase">The short version</p>
            <ul className="mt-4 grid gap-3">
              {page.summary.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[16px] leading-relaxed text-zinc-200">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-dark text-white">
                    <Check aria-hidden className="size-3" strokeWidth={4} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Body: contents pinned beside the longer article */}
      <section className="border-t border-zinc-200 bg-white py-14 sm:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:gap-16">
          <div className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
            <LegalToc items={page.sections.map((s) => ({ id: s.id, heading: s.heading }))} />
          </div>
          <article id="legal-article" className="grid max-w-[760px] gap-12">
            {page.sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="flex items-baseline gap-3 text-2xl font-extrabold tracking-tight text-ink sm:text-[1.7rem]">
                  <span className="text-[15px] font-bold text-brand-dark tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </h2>
                <div className="mt-4 grid gap-4">
                  {s.body.map((b, j) => (
                    <Block key={j} block={b} />
                  ))}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>

      {/* Other policies */}
      <section className="bg-mist py-14">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <h2 className="text-xl font-extrabold text-ink">Our other policies</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link
                  href={`/${o.slug}/`}
                  className="group flex h-full items-center justify-between gap-4 rounded-2xl bg-white p-5 ring-1 ring-brand transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-20px_rgb(4_120_87/0.5)]"
                >
                  <span className="font-bold text-ink">{o.title}</span>
                  <ArrowRight aria-hidden className="size-4 shrink-0 text-brand-dark transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
