"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { WhatsAppIcon } from "./icons";

// Frontend-only enquiry form. With no backend yet, sending opens WhatsApp to the UK team with
// the enquiry pre-filled. Swap `send` for a POST to the form endpoint or CRM when it exists.
//   variant "short": name, phone or email, website, service (home page)
//   variant "plan":  name, email, phone, website (free growth plan landing page)
//   variant "contact": name, phone or email, service, message (contact page)
// With redirectTo, the visitor goes to that page after sending instead of seeing the inline message.
export function LeadForm({
  source = "home",
  variant = "short",
  redirectTo,
  submitLabel = "Get my free growth plan",
}: {
  source?: string;
  variant?: "short" | "plan" | "contact";
  redirectTo?: string;
  submitLabel?: string;
}) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const contact = variant === "plan" ? get("email") || get("phone") : get("contact");
    if (!get("name") || !contact) {
      setError("Please add your name and a phone number or email so we can reply.");
      return;
    }
    setError("");
    const text = [
      `New enquiry from developerstudio.org (${source})`,
      `Name: ${get("name")}`,
      get("contact") && `Contact: ${get("contact")}`,
      get("email") && `Email: ${get("email")}`,
      get("phone") && `Phone: ${get("phone")}`,
      get("website") && `Website: ${get("website")}`,
      get("service") && `Interested in: ${get("service")}`,
      get("message") && `Message: ${get("message")}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    if (redirectTo) router.push(redirectTo);
    else setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="flex min-h-[420px] flex-col items-center justify-center text-center">
        <span className="success-pop flex size-16 items-center justify-center rounded-sm bg-brand-dark text-white">
          <Check aria-hidden className="size-8" strokeWidth={3} />
        </span>
        <p className="mt-6 text-2xl font-extrabold text-ink">Thanks, nearly done</p>
        <p className="mt-2 max-w-sm text-[16px] leading-relaxed text-zinc-600">
          WhatsApp has opened with your message ready. Press send and we will reply within one working day.
        </p>
        <p className="mt-4 text-[15px] text-zinc-600">
          WhatsApp didn&apos;t open? Call{" "}
          <a href={`tel:${site.phones.uk.tel}`} className="font-bold text-brand-dark underline underline-offset-2">
            {site.phones.uk.display}
          </a>
        </p>
      </div>
    );
  }

  const field =
    "peer w-full rounded-xl border border-zinc-300 bg-white px-4 pt-6 pb-2 text-[16px] text-ink outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-transparent focus:border-brand-dark focus:ring-4 focus:ring-brand/15";
  const label =
    "pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[16px] text-zinc-500 transition-all duration-200 peer-focus:top-3.5 peer-focus:text-[12px] peer-focus:font-semibold peer-focus:text-brand-dark peer-[:not(:placeholder-shown)]:top-3.5 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:font-semibold";

  return (
    <form onSubmit={send} noValidate className="grid gap-4">
      {/* Floating labels: the label shrinks into the top of the field when it has focus or a value. */}
      <div className="relative">
        <input id={`${source}-name`} name="name" autoComplete="name" required placeholder="Your name" className={field} />
        <label htmlFor={`${source}-name`} className={label}>
          Your name
        </label>
      </div>
      {variant === "plan" ? (
        <>
          <div className="relative">
            <input id={`${source}-email`} name="email" type="email" autoComplete="email" placeholder="Email" className={field} />
            <label htmlFor={`${source}-email`} className={label}>
              Email
            </label>
          </div>
          <div className="relative">
            <input id={`${source}-phone`} name="phone" type="tel" autoComplete="tel" placeholder="Phone" className={field} />
            <label htmlFor={`${source}-phone`} className={label}>
              Phone
            </label>
          </div>
        </>
      ) : (
        <div className="relative">
          <input id={`${source}-contact`} name="contact" autoComplete="email" required placeholder="Phone or email" className={field} />
          <label htmlFor={`${source}-contact`} className={label}>
            Phone or email
          </label>
        </div>
      )}
      {variant !== "contact" && (
        <div className="relative">
          <input id={`${source}-website`} name="website" type="url" inputMode="url" placeholder="Your website" className={field} />
          <label htmlFor={`${source}-website`} className={label}>
            Your website (optional)
          </label>
        </div>
      )}
      {variant !== "plan" && (
      <div className="relative">
        <select
          id={`${source}-service`}
          name="service"
          defaultValue=""
          className="w-full appearance-none rounded-xl border border-zinc-300 bg-white px-4 py-4 text-[16px] text-ink outline-none transition-[border-color,box-shadow] duration-200 focus:border-brand-dark focus:ring-4 focus:ring-brand/15"
          aria-label="What do you need?"
        >
          <option value="" disabled>
            What do you need?
          </option>
          {services.map((s) => (
            <option key={s.slug}>{s.name}</option>
          ))}
          <option>Not sure yet</option>
        </select>
        <span aria-hidden className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-zinc-400">
          ▾
        </span>
      </div>
      )}
      {variant === "contact" && (
        <div className="relative">
          <textarea
            id={`${source}-message`}
            name="message"
            rows={4}
            placeholder="Message"
            className={`${field} resize-y pt-7`}
          />
          <label htmlFor={`${source}-message`} className={label.replace("top-1/2", "top-7")}>
            Tell us about your business (optional)
          </label>
        </div>
      )}

      {error && (
        <p role="alert" className="text-[15px] font-semibold text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="btn-shine group mt-1 inline-flex h-14 items-center justify-center gap-2 rounded-sm bg-brand-dark px-7 text-[16px] font-bold text-white transition-colors hover:bg-brand-deeper"
      >
        {submitLabel}
        <ArrowRight aria-hidden className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
      <p className="flex items-start gap-2 text-[13px] leading-snug text-zinc-500">
        <WhatsAppIcon className="mt-0.5 size-4 shrink-0 text-[#25D366]" />
        <span>
          Sending opens WhatsApp with your message ready. {site.replyPromise}. We only use your details to reply, as set out in
          our{" "}
          <Link href="/privacy-policy/" className="underline underline-offset-2">
            privacy policy
          </Link>
          .
        </span>
      </p>
    </form>
  );
}
