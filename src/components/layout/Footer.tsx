"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getServiceArticle, SERVICE_SLUGS } from "@/data/services-detail";
import { useI18n } from "@/i18n/I18nProvider";
import { withLocale } from "@/i18n/routing";

export function Footer() {
  const year = new Date().getFullYear();
  const { locale, t } = useI18n();
  const telHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  const infoLinks = [
    { href: "/about", label: t.nav.about },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="text-slate-200" role="contentinfo">
      <div className="bg-[#020c1b] py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            <div>
              <div className="flex h-16 w-full max-w-[9rem] items-center sm:h-20 sm:max-w-[10rem]">
                <Image
                  src={siteConfig.footerLogoPath}
                  alt={siteConfig.name}
                  width={siteConfig.logoWidth}
                  height={siteConfig.logoHeight}
                  className="h-full w-auto max-h-full max-w-full object-contain object-left"
                  quality={95}
                  sizes="160px"
                />
              </div>
              <p className="mt-3 text-sm font-medium text-sky-300/90">{t.footer.columnAbout}</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-400">{t.footer.description}</p>
            </div>
            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">
                {t.footer.columnServices}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {SERVICE_SLUGS.map((slug) => {
                  const article = getServiceArticle(slug);
                  if (!article) return null;
                  return (
                    <li key={slug}>
                      <Link
                        href={withLocale(locale, `/services/${slug}`)}
                        className="text-sm uppercase tracking-wide text-slate-300 transition hover:text-white"
                      >
                        {article.meta.title[locale]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">
                {t.footer.columnInfo}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {infoLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={withLocale(locale, l.href)}
                      className="text-sm text-slate-300 transition hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={withLocale(locale, "/trainings")}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {t.nav.trainings}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-wide text-white">
                {t.footer.columnContact}
              </p>
              <ul className="mt-4 flex flex-col gap-4 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-brand-blue)]" aria-hidden />
                  <span>
                    {siteConfig.contact.addressLine1}
                    <br />
                    {siteConfig.contact.postalCode} {siteConfig.contact.city}
                    <br />
                    {siteConfig.contact.country}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[var(--color-brand-blue)]" aria-hidden />
                  <a href={telHref} className="transition hover:text-white">
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[var(--color-brand-blue)]" aria-hidden />
                  <a href={`mailto:${siteConfig.contact.email}`} className="break-all transition hover:text-white">
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
              {siteConfig.social.linkedin ? (
                <div className="mt-5">
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-brand-blue)]/25 text-[var(--color-brand-blue)] transition hover:bg-[var(--color-brand-blue)]/40 hover:text-white"
                    aria-label="LinkedIn"
                  >
                    <span className="text-xs font-bold">in</span>
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-black bg-black py-4">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-center text-xs text-slate-500 sm:flex-row sm:text-left sm:px-6 lg:px-8">
          <p className="text-slate-400">
            © {year} {siteConfig.name}. {t.footer.rights}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {infoLinks.map((l) => (
              <Link
                key={l.href}
                href={withLocale(locale, l.href)}
                className="text-slate-500 transition hover:text-slate-300"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
