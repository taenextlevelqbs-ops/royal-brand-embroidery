import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Royal Brand Embroidery | Custom Embroidery & Apparel",
  description:
    "Custom embroidery and heat transfer for hats, shirts, jackets, bags and more. Explore Royal Brand Embroidery services and prepare a project quote brief.",
  applicationName: "Royal Brand Embroidery",
  openGraph: {
    title: "Royal Brand Embroidery | Custom Embroidery & Apparel",
    description:
      "Custom embroidery and heat transfer for hats, shirts, jackets, bags and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Royal Brand Embroidery | Custom Embroidery & Apparel",
    description:
      "Custom embroidery and heat transfer for hats, shirts, jackets, bags and more.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
