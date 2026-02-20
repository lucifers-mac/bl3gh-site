import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BL3GH — Heavy Culture Product Studio",
    template: "%s | BL3GH",
  },
  description: "Limited drops rooted in metalcore, hardcore, and the underground. Manufactured in-house. This is serialized mythology — not merch.",
  keywords: ["bl3gh", "heavy culture", "metalcore", "hardcore", "limited drops", "apparel", "underground"],
  authors: [{ name: "House of BL3GH, LLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bl3gh.com",
    siteName: "BL3GH",
    title: "BL3GH — Heavy Culture Product Studio",
    description: "Limited drops rooted in metalcore, hardcore, and the underground. Manufactured in-house.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BL3GH — Heavy Culture Product Studio",
    description: "Limited drops rooted in metalcore, hardcore, and the underground.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,400;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css"
        />
      </head>
      <body className="antialiased noise-overlay">
        <Header />
        <main className="pt-14">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
        <Analytics />
        
        {/* Snipcart */}
        <div
          hidden
          id="snipcart"
          data-api-key={process.env.NEXT_PUBLIC_SNIPCART_API_KEY}
          data-config-modal-style="side"
          data-config-add-product-behavior="none"
          data-currency="usd"
        />
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              window.SnipcartSettings = {
                publicApiKey: "${process.env.NEXT_PUBLIC_SNIPCART_API_KEY}",
                loadStrategy: "on-user-interaction",
                addProductBehavior: "none",
                modalStyle: "side",
                currency: "usd"
              };
              console.log("Snipcart API Key:", "${process.env.NEXT_PUBLIC_SNIPCART_API_KEY}");
            `
          }}
        />
        <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
      </body>
    </html>
  );
}
