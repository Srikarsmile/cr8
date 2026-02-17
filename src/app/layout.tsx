import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "CRE8 Pathways - Build Skills. Access Opportunities. Create Your Path.",
  description:
    "CRE8 Pathways is a youth-focused careers platform supporting 18-24-year-olds to access digital, creative, beauty, construction and entrepreneurship careers.",
  keywords: [
    "youth careers",
    "apprenticeships",
    "digital careers",
    "beauty careers",
    "construction careers",
    "entrepreneurship",
    "young people",
    "employability",
    "soft skills",
  ],
  openGraph: {
    title: "CRE8 Pathways",
    description: "Build skills. Access opportunities. Create your path.",
    type: "website",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
