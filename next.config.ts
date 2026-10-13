import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Trailing slashes and the old-URL redirects are handled together in src/proxy.ts,
  // so an old address reaches its new page in a single 301 instead of two hops.
  skipTrailingSlashRedirect: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
