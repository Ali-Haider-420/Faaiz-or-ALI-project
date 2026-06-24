// In app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ======== ADD THESE IMPORTS ========
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
// ====================================

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Powerlink Electrical Services",
    // ======== THIS IS THE ONLY LINE I CHANGED ========
    default: "Powerlink Electrical Services", 
    // =================================================
  },
  description: "Professional electrical services specializing in building setup and bank winding solutions.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: "website",
    url: "https://www.respk.com/",
    title: "Starlink Electrical Services | Professional Electrical Services",
    description: "Professional electrical services specializing in building setup and bank winding solutions.",
    images: [
      {
        url: "https://www.respk.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Powerlink Electrical Services - Electrical Services",
      },
    ],
    siteName: "Powerlink Electrical Services",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        {/* ======== ADD THESE TWO COMPONENTS HERE ======== */}
        <SpeedInsights />
        <Analytics />
        {/* ============================================= */}
      </body>
    </html>
  );
}