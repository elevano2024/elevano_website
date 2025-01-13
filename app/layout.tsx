import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { JsonLd } from "./components/JsonLd";
import { Navbar } from "./components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elevano.com"),
  title: {
    default: "Elevano | Digital Innovation & Technology Solutions",
    template: "%s | Elevano",
  },
  description:
    "Elevano delivers cutting-edge digital solutions, AI integration, and cloud services to transform businesses through innovative technology solutions.",
  keywords: [
    "software development",
    "AI solutions",
    "cloud services",
    "digital transformation",
    "web development",
    "mobile apps",
    "enterprise solutions",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Elevano | Digital Innovation & Technology Solutions",
    description: "Transform your business with cutting-edge digital solutions.",
    url: "https://elevano.com",
    siteName: "Elevano",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo-white.svg",
        width: 1200,
        height: 630,
        alt: "Elevano - Digital Innovation & Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevano | Digital Innovation & Technology Solutions",
    description: "Transform your business with cutting-edge digital solutions.",
    images: ["/logo-white.svg"],
  },
  alternates: {
    canonical: "https://elevano.com",
    languages: {
      "en-US": "https://elevano.com",
    },
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    // other search engine verifications
  },
  authors: [{ name: "Elevano" }],
  creator: "Elevano",
  publisher: "Elevano",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <JsonLd />
        <Navbar />
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
