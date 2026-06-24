import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.url),
  title: {
    default: `${siteConfig.brand.name} | Online Shopping for Electronics, Books, Stationery, and Garments`,
    template: `%s | ${siteConfig.brand.name}`,
  },
  description:
    "Supreme Cart is India's trusted store for electronics, books, stationery, and garments. Enjoy honest prices, fast delivery, and support made for Indian shoppers.",
  applicationName: siteConfig.brand.name,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
