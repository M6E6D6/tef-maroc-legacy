"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import { withLocale } from "@/i18n/routing";

export function Footer() {
  const year = new Date().getFullYear();
  const { locale, t } = useI18n();
  const footerLinks = [
    { href: "/about", label: t.nav.about },
    { href: "/trainings", label: t.nav.trainings },
    { href: "/services", label: t.nav.services },
    { href: "/contact", label: t.nav.contact },
  ];
  return (
    <footer className="border-t border-slate-200 bg-[var(--color-navy)] text-slate-200" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="relative h-12 w-[240px] max-w-full sm:h-14 sm:w-[280px]">
              <Image
                src={siteConfig.logoPath}
                alt={siteConfig.name}
                fill
                className="object-contain object-left"
                sizes="200px"
              />
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
              {t.footer.description}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
              {t.footer.quickLinks}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={withLocale(locale, l.href)}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
              {t.footer.contact}
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]" aria-hidden />
                <span>
                  {siteConfig.contact.addressLine1}
                  <br />
                  {siteConfig.contact.postalCode} {siteConfig.contact.city}, {siteConfig.contact.country}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-[var(--color-gold)]" aria-hidden />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-[var(--color-gold)]" aria-hidden />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. {t.footer.rights}
          </p>
          <p className="text-slate-500">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
