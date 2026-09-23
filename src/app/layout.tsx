import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/navigation/Header';
import Footer from '@/components/navigation/Footer';
import QuoteModal from '@/components/ui/QuoteModal';

export const viewport: Viewport = {
  themeColor: '#5C341B',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Pradeep Trading Company - Benchmark Indian Peanut & Groundnut Exporter',
  description: 'M/s Pradeep Trading Company - Sourcing, processing, and exporting double-sortex Bold, Java, Blanched, and In-Shell peanuts from Shivpuri, Madhya Pradesh, India.',
  icons: {
    icon: '/images/logo/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <link rel="stylesheet" href="/makks-assets/bootstrap.min.css" />
        <link rel="stylesheet" href="/makks-assets/style.css" />
        <link rel="stylesheet" href="/makks-assets/responsive.css" />
      </head>
      <body className="bg-white antialiased text-[#2D241D]">
        <Header />
        <main>{children}</main>
        <Footer />
        <QuoteModal />
        {/* Global Responsive Floating WhatsApp Button */}
        <a
          href="https://wa.me/919589790997?text=Hello%20Pradeep%20Trading%20Company,%20I%20would%20like%20to%20inquire%20about%20peanut%20export%20specifications."
          target="_blank"
          rel="noopener noreferrer"
          className="floating-whatsapp-btn"
          aria-label="Chat with Export Desk on WhatsApp"
        >
          <i className="fab fa-whatsapp"></i>
          <span className="floating-whatsapp-text">Chat with Export Desk</span>
        </a>
      </body>
    </html>
  );
}
