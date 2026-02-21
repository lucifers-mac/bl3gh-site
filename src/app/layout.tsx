import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";
import { EmailPopup } from "@/components/EmailPopup";
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
    url: "https://bl3gh.co",
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
      </head>
      <body className="antialiased noise-overlay">
        <CartProvider>
          <Header />
          <main className="pt-14">
            {children}
          </main>
          <Footer />
          <EmailPopup />
        </CartProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
