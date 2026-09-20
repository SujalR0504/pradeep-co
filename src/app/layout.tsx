import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Preloader from "@/components/ui/Preloader";
import CustomCursor from "@/components/ui/CustomCursor";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#70421F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://balajiexports.in"),
  title: {
    default: "Balaji Exports | Benchmark Groundnut & Peanut Exporter India",
    template: "%s | Balaji Exports",
  },
  description:
    "Balaji Exports connects premium agricultural commodities from India with 35+ global markets. 65+ years farming heritage, 4 MT/hour double-sortex processing in Shivpuri, MP.",
  keywords: [
    "Balaji Exports",
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
  authors: [{ name: "Balaji Exports" }],
  creator: "Balaji Exports",
  publisher: "Balaji Exports",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://balajiexports.in",
    siteName: "Balaji Exports",
    title: "Balaji Exports | Benchmark Groundnut & Peanut Exporter India",
    description:
      "65+ years of Indian farming heritage combined with 4 MT/hour double-sortex processing to supply premium peanuts across 35+ global destinations.",
    images: [
      {
        url: "/images/hero-field.webp",
        width: 1200,
        height: 630,
        alt: "Balaji Exports - From Indian Soil, To The World",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Balaji Exports | Benchmark Groundnut & Peanut Exporter India",
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
      className={`${cormorant.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#FBF8F2] text-[#2E2117] antialiased selection:bg-[#70421F] selection:text-[#FBF8F2]">
        {/* Minimal 1-Second Preloader */}
        <Preloader />

        {/* Subtle Desktop Interactive Custom Cursor */}
        <CustomCursor />

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
