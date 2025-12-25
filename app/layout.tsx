import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const font = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  // MetadataBase - Replace with your actual domain when deployed
  metadataBase: new URL('https://soniyathapa.com.np'),
  
  // Basic SEO
  title: "Soniya Thapa - Backend Developer | Node.js & Express Specialist",
  description: "Backend Developer specializing in Node.js, Express, PostgreSQL, and MySQL. Currently expanding into full-stack development with React and Next.js. Based in Bhaktapur, Nepal.",
  
  // Keywords for search engines
  keywords: [
    "Soniya Thapa",
    "Backend Developer",
    "Node.js Developer",
    "Express.js",
    "PostgreSQL",
    "MySQL",
    "Full Stack Developer",
    "Web Developer Nepal",
    "Bhaktapur Developer",
    "API Development",
    "REST API",
    "JWT Authentication",
    "React Developer",
    "Next.js Developer"
  ],
  
  // Author and creator
  authors: [{ name: "Soniya Thapa" }],
  creator: "Soniya Thapa",
  
  // Open Graph metadata for social media sharing
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soniyathapa.com.np", // Replace with your actual domain
    siteName: "Soniya Thapa Portfolio",
    title: "Soniya Thapa - Backend Developer | Node.js & Express Specialist",
    description: "Backend Developer specializing in Node.js, Express, PostgreSQL, and MySQL. Currently expanding into full-stack development with React and Next.js.",
    images: [
      {
        url: "/images/soniya1.png", // Your profile image
        width: 1200,
        height: 630,
        alt: "Soniya Thapa - Backend Developer",
      }
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Soniya Thapa - Backend Developer",
    description: "Backend Developer specializing in Node.js, Express, PostgreSQL, and MySQL.",
    images: ["/images/soniya1.png"],
    creator: "@yourtwitter", // Add your Twitter handle
  },
  
  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Additional metadata
  applicationName: "Soniya Thapa Portfolio",
  referrer: "origin-when-cross-origin",
  category: "Technology",
  
  // Verification (add these when you have them)
  // verification: {
  //   google: "your-google-site-verification-code",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Canonical URL - Replace with your actual domain */}
        <link rel="canonical" href="https://soniyathapa.com.np" />
        
        {/* Additional SEO tags */}
        <meta name="theme-color" content="#0a0a2e" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body
        className={`${font.className} antialiased bg-gradient-to-b from-[#0d0d1f] to-[#0b1227]`}
      >
        <GoogleAnalytics />
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}