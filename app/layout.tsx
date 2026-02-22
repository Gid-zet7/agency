import React from "react";
import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import localFont from "next/font/local";
import ModernFooter from "@/components/home/ModernFooter";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title:
    "Billo Empire | Bridging Talent and Opportunity for a Brighter Future.",
  description: "Ghana's leading recruitment agency specializing in matching exceptional talent with premier employers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4NHZHM5F58"
        ></Script>
        <Script id="google-analytics">
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', 'G-4NHZHM5F58');`}
        </Script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7263804468706453"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="site-verification"
          content="3b55a4501575f916e26ac2b3da471f4e"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-slate-900`}
      >
        {children}
        <Analytics />
        <ModernFooter />
      </body>
    </html>
  );
}
