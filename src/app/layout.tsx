import type { Metadata, Viewport } from "next";
import { Inter, Noto_Sans_Arabic, Poppins } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { searchEngineVerification } from "@/i18n/metadata";
import { defaultLocale, locales, type Locale } from "@/i18n/translations";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f3566",
};

const verification = searchEngineVerification();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: siteConfig.documentTitle.fr,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Tamuda Hospitality Academy",
    "Tamuda",
    "formation Maroc",
    "formation professionnelle Casablanca",
    "formation hôtellerie Maroc",
    "école restauration Maroc",
    "formation restauration Maroc",
    "service de luxe formation",
    "académie hôtelière Maroc",
    "HACCP formation Maroc",
    "coaching managérial Maroc",
    "école hôtelière Maroc",
    "training Morocco",
    "hospitality training Casablanca",
    "luxury hospitality Morocco",
    "professional training Morocco",
    "تكوين مهني المغرب",
    "تكوين الضيافة المضيق",
    "أكاديمية تامودا",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  ...(verification ? { verification } : {}),
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — formation au Maroc`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "";
  const first = pathname.split("/").filter(Boolean)[0];
  const htmlLocale: Locale =
    first && locales.includes(first as Locale) ? (first as Locale) : defaultLocale;
  const dir = htmlLocale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={htmlLocale}
      dir={dir}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} ${notoSansArabic.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
