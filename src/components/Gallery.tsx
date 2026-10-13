"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";

type Shot = { src: string; alt: string; w: number; h: number };

// Screenshot gallery: click any image to open it full size in a lightbox.
// Uses the native <dialog> element, so Escape and focus handling come built in.
export function Gallery({ images, cols = 2, showCaptions = true }: { images: (Shot & { title?: string; tag?: string })[]; cols?: 2 | 3; showCaptions?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState<Shot | null>(null);

  const open = (img: Shot) => {
    setCurrent(img);
    dialog.current?.showModal();
  };

  return (
    <>
      <ul className={`grid gap-5 sm:grid-cols-2 ${cols === 3 ? "lg:grid-cols-3" : ""}`}>
        {images.map((img, i) => (
          <li key={img.src} className={cols === 2 && images.length % 2 === 1 && i === 0 ? "sm:col-span-2" : ""}>
            <button
              type="button"
              onClick={() => open(img)}
              className="group relative block w-full overflow-hidden rounded-2xl bg-white p-3 text-left ring-1 ring-brand transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgb(4_120_87/0.5)]"
            >
              <span className="sheen block overflow-hidden rounded-xl ring-1 ring-zinc-200">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  sizes="(min-width: 768px) 560px, 92vw"
                  className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </span>
              <span className="absolute top-5 right-5 flex size-9 items-center justify-center rounded-full bg-black/70 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <Maximize2 aria-hidden className="size-4" />
              </span>
              <span className="sr-only">Open full size: </span>
              {img.title ? (
                <span className="mt-3 flex items-center justify-between gap-3 px-1">
                  <span className="text-[16px] font-bold text-ink">{img.title}</span>
                  {img.tag && <span className="shrink-0 rounded-full bg-mist px-2.5 py-1 text-[12px] font-medium text-zinc-600">{img.tag}</span>}
                </span>
              ) : (
                showCaptions && <span className="mt-3 block px-1 text-[13px] leading-snug text-zinc-500">{img.alt}</span>
              )}
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => setCurrent(null)}
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current?.close();
        }}
        aria-label={current?.alt ?? "Screenshot"}
        className="lightbox m-auto max-h-[92vh] w-[min(1200px,94vw)] overflow-visible bg-transparent p-0 backdrop:bg-black/85 backdrop:backdrop-blur-sm"
      >
        {current && (
          <figure className="relative">
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              aria-label="Close"
              className="absolute -top-12 right-0 flex size-10 items-center justify-center rounded-full bg-white text-ink transition-transform hover:rotate-90"
            >
              <X className="size-5" />
            </button>
            <Image src={current.src} alt={current.alt} width={current.w} height={current.h} sizes="94vw" className="h-auto max-h-[82vh] w-full rounded-xl bg-white object-contain" />
            <figcaption className="mt-3 text-center text-[14px] text-zinc-300">{current.alt}</figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
