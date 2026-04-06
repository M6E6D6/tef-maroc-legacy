import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { BreadcrumbJsonLd } from "@/components/seo/BreadcrumbJsonLd";
import { OrganizationJsonLd } from "@/components/seo/OrganizationJsonLd";
import { WebSiteJsonLd } from "@/components/seo/WebSiteJsonLd";
import { siteConfig } from "@/data/site";
import { I18nProvider } from "@/i18n/I18nProvider";
import { locales, type Locale } from "@/i18n/translations";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: l } = await params;
  if (!locales.includes(l as Locale)) {
    return {};
  }
  return {
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: l } = await params;
  if (!locales.includes(l as Locale)) {
    notFound();
  }
  const locale = l as Locale;

  return (
    <I18nProvider locale={locale}>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <BreadcrumbJsonLd />
      <Navbar />
      <main
        id="main-content"
        className="flex-1"
        style={{
          paddingTop: "var(--app-header-pad)",
          scrollMarginTop: "var(--app-header-pad)",
        }}
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </I18nProvider>
  );
}
