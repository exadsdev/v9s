// src/app/layout.jsx
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VisitorTracker from "@/components/VisitorTracker";
import siteConfig from "@/config/site";

import Script from "next/script";
import { unstable_noStore as noStore } from "next/cache";
import fs from "fs/promises";
import path from "path";

export const metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords:
    "มือถือมือสอง, โทรศัพท์มือสอง, มือถือหลุดจำนำ, iPhone มือสอง, มือถือราคาถูก, ผ่อนมือถือ, ร้านมือถือสกลนคร, PG Mobile, ส่งฟรี, มือถือสภาพนางฟ้า",
  authors: [{ name: siteConfig.company.nameTh, url: siteConfig.baseUrl }],
  creator: siteConfig.company.nameTh,
  publisher: siteConfig.company.nameTh,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.images.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [siteConfig.images.ogImage],
  },
  icons: {
    icon: siteConfig.images.favicon,
    apple: siteConfig.images.logo,
  },
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
};

async function readGoogleTagIdFromSettings() {
  try {
    const SETTINGS_FILE = path.join(process.cwd(), "src", "data", "settings.json");
    const raw = await fs.readFile(SETTINGS_FILE, "utf8");
    const settings = JSON.parse(raw);
    return String(settings?.googleTagId || "").trim();
  } catch {
    return "";
  }
}

export default async function RootLayout({ children }) {
  noStore();
  const googleTagId = (await readGoogleTagIdFromSettings()) || siteConfig.googleTagId || "";

  // Advanced JSON-LD @graph for better Entity Connection and E-A-T
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.baseUrl}/#organization`,
        "name": siteConfig.company.nameTh,
        "alternateName": siteConfig.name,
        "url": siteConfig.baseUrl,
        "logo": {
          "@type": "ImageObject",
          "@id": `${siteConfig.baseUrl}/#logo`,
          "url": `${siteConfig.baseUrl}${siteConfig.images.logo}`,
          "contentUrl": `${siteConfig.baseUrl}${siteConfig.images.logo}`,
          "width": 512,
          "height": 512,
          "caption": siteConfig.name
        },
        "image": { "@id": `${siteConfig.baseUrl}/#logo` },
        "sameAs": [
          siteConfig.social.facebook,
          siteConfig.social.facebookPage,
          siteConfig.social.line
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": `+66-${siteConfig.company.phone.replace(/-/g, "")}`,
          "contactType": "customer service",
          "areaServed": "TH",
          "availableLanguage": "Thai"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "183 หมู่ที่ 1 ตำบลคำตากล้า",
          "addressLocality": "อำเภอคำตากล้า",
          "addressRegion": "สกลนคร",
          "postalCode": "47250",
          "addressCountry": "TH"
        },
        "taxID": siteConfig.company.registration
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.baseUrl}/#website`,
        "url": siteConfig.baseUrl,
        "name": siteConfig.name,
        "description": siteConfig.description,
        "publisher": { "@id": `${siteConfig.baseUrl}/#organization` },
        "inLanguage": "th-TH"
      }
    ]
  };

  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google.com" />

        {/* Security Meta Fallback */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body suppressHydrationWarning>
        {googleTagId && (
          <>
            <Script
              id="google-tag-loader"
              src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(googleTagId)}`}
              strategy="afterInteractive"
            />
            <Script id="google-tag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleTagId}', { send_page_view: true });
              `}
            </Script>
          </>
        )}

        <VisitorTracker />

        <a href="#main-content" className="skip-link">ข้ามไปยังเนื้อหาหลัก</a>

        <Header />
        <main id="main-content" role="main" aria-label="Main content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
