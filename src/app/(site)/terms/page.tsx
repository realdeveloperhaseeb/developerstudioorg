import type { Metadata } from "next";
import { terms } from "@/content/legal";
import { LegalTemplate } from "@/components/LegalTemplate";

export const metadata: Metadata = {
  title: terms.metaTitle,
  description: terms.description,
  alternates: { canonical: "/terms/" },
};

export default function Page() {
  return <LegalTemplate page={terms} />;
}
