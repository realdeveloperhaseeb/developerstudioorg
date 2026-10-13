import type { Metadata } from "next";
import { cookiePolicy } from "@/content/legal";
import { LegalTemplate } from "@/components/LegalTemplate";

export const metadata: Metadata = {
  title: cookiePolicy.metaTitle,
  description: cookiePolicy.description,
  alternates: { canonical: "/cookie-policy/" },
};

export default function Page() {
  return <LegalTemplate page={cookiePolicy} />;
}
