import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old WooCommerce URLs
      { source: "/shop", destination: "/the-four-judgments", permanent: true },
      { source: "/shop-2", destination: "/the-four-judgments", permanent: true },
      { source: "/designs", destination: "/archive", permanent: true },
      { source: "/stories", destination: "/", permanent: true },
      { source: "/custom-printing", destination: "/contact", permanent: true },
      { source: "/contact-page", destination: "/contact", permanent: true },
      { source: "/shipping-policy", destination: "/shipping", permanent: true },
      // Old Four Judgments path (in case it was different)
      { source: "/the-four-judgments/", destination: "/the-four-judgments", permanent: true },
    ];
  },
};

export default nextConfig;
