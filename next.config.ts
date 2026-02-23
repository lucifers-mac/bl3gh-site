import type { NextConfig } from "next";

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.stripe.com https://va.vercel-scripts.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: blob: https://*.stripe.com;
  font-src 'self';
  connect-src 'self' https://api.stripe.com https://*.stripe.com https://*.stripe.network https://vitals.vercel-insights.com;
  frame-src https://js.stripe.com https://hooks.stripe.com https://*.stripe.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
`.replace(/\n/g, " ").trim();

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(self https://js.stripe.com)",
  },
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy,
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },

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
