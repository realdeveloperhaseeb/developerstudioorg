import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Old developerstudio.org URLs (from the old sitemap.xml) and their closest new page.
// Each goes to its destination in one permanent 301, with no redirect chains.
const oldUrls: [RegExp, string][] = [
  [/^\/projects$/, "/work/"],
  [/^\/privacy$/, "/privacy-policy/"],
  [/^\/locations$/, "/"],
  [/^\/locations\/[^/]+$/, "/"],
  [/^\/locations\/[^/]+\/(web-development|app-development)$/, "/services/web-design-development/"],
  [/^\/locations\/[^/]+\/seo$/, "/services/seo/"],
  [/^\/locations\/[^/]+\/social-media-marketing$/, "/services/social-media-marketing/"],
  [/^\/locations\/[^/]+\/google-ads$/, "/services/google-ads/"],
  [/^\/locations\/[^/]+\/digital-marketing$/, "/services/"],
  [/^\/landing-pages$/, "/"],
  [/^\/website-development-services-for-roofing-companies$/, "/services/web-design-development/"],
  [/^\/team\/[^/]+$/, "/team/"],
  [/^\/digital-marketing-agency-(dubai|abu-dhabi)$/, "/"],
];

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  // 1. Old URLs: one permanent redirect straight to the new page.
  for (const [pattern, destination] of oldUrls) {
    if (pattern.test(path)) {
      return NextResponse.redirect(new URL(destination + search, request.url), 301);
    }
  }

  // 2. Everything else: add the trailing slash the site uses (trailingSlash: true).
  if (!pathname.endsWith("/")) {
    return NextResponse.redirect(new URL(`${pathname}/${search}`, request.url), 308);
  }

  return NextResponse.next();
}

// Skip Next.js internals and any file with an extension (images, robots.txt, sitemap.xml).
export const config = {
  matcher: ["/((?!_next/|api/|.*\\..*).*)"],
};
