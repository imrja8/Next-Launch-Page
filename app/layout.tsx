import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { siteConfig } from "@/config/site";
import "@/app/globals.css";

export const dynamic = "force-dynamic";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name || "",
    template: `%s | ${siteConfig.name || ""}`,
  },
  description: siteConfig.description || "",
  icons: {
    icon: siteConfig.favicon || "",
  },
  openGraph: {
    title: siteConfig.name || "",
    description: siteConfig.description || "",
    siteName: siteConfig.name || "",
    images: [siteConfig.ogImage || ""],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name || "",
    description: siteConfig.description || "",
    images: [siteConfig.ogImage || ""],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" className="dark" data-theme={process.env.APP_THEME || "blue"} data-corner={process.env.APP_CORNER || "normal"}>
      <head />
      <body
        className={`${inter.variable} min-h-screen bg-background font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
