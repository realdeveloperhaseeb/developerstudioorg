import type { Metadata } from "next";
import { privacyPolicy } from "@/content/legal";
import { LegalTemplate } from "@/components/LegalTemplate";

export const metadata: Metadata = {
  title: privacyPolicy.metaTitle,
  description: privacyPolicy.description,
  alternates: { canonical: "/privacy-policy/" },
};

export default function Page() {
  return <LegalTemplate page={privacyPolicy} />;
}
