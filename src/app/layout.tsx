import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Manrope } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif",
  weight: ["400"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#70421F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pradeeptrading.in"),
  title: {
    default: "Pradeep Trading Company | Benchmark Groundnut & Peanut Exporter India",
    template: "%s | Pradeep Trading Company",
  },
  description:
    "Pradeep Trading Company connects premium agricultural commodities from India with 35+ global markets. 65+ years farming heritage, 4 MT/hour double-sortex processing in Shivpuri, MP.",
  keywords: [
    "Pradeep Trading Company",
    "Pradeep Trading",
    "Groundnut Exporter India",
    "Peanut Exporter India",
    "Bold Peanuts 38/42 40/50",
    "Java Peanuts 50/60",
    "Singdana Exporter",
    "Shivpuri Mandi Peanuts",
    "Double Sortex Peanuts",
    "In-shell Groundnuts",
    "Agro Export India",
    "Blanched Peanuts",
  ],
  authors: [{ name: "Pradeep Trading Company" }],
  creator: "Pradeep Trading Company",
  publisher: "Pradeep Trading Company",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pradeeptrading.in",
    siteName: "Pradeep Trading Company",
    title: "Pradeep Trading Company | Benchmark Groundnut & Peanut Exporter India",
    description:
      "65+ years of Indian farming heritage combined with 4 MT/hour double-sortex processing to supply premium peanuts across 35+ global destinations.",
    images: [
      {
        url: "/images/hero-field.webp",
        width: 1200,
        height: 630,
        alt: "Pradeep Trading Company - From Indian Soil, To The World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradeep Trading Company | Benchmark Groundnut & Peanut Exporter India",
    description:
      "65+ years of Indian farming heritage combined with 4 MT/hour double-sortex processing to supply premium peanuts across 35+ global destinations.",
    images: ["/images/hero-field.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#FFFDF9] text-[#26180E] antialiased selection:bg-[#5A3218] selection:text-[#FFFDF9]">
        {/* Lenis Smooth Scroll */}
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
