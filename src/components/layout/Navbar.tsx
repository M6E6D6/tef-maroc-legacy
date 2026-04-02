"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import { stripLocaleFromPathname, withLocale } from "@/i18n/routing";
import type { Locale } from "@/i18n/translations";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const { locale, t } = useI18n();
  const pathWithoutLocale = stripLocaleFromPathname(pathname);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/trainings", label: t.nav.trainings },
    { href: "/services", label: t.nav.services },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--color-navy)] focus:px-4 focus:py-2 focus:text-white"
      >
        {t.nav.skipToMain}
      </a>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href={withLocale(locale, "/")}
          className="min-w-0 shrink font-heading text-xl font-semibold tracking-tight text-[var(--color-navy)] transition-colors hover:text-[var(--color-navy-light)]"
          aria-label={`${siteConfig.name} — ${t.nav.home}`}
        >
          <span className="text-[var(--color-gold)]">TEF</span> Maroc Legacy
        </Link>

        <div className="flex flex-1 flex-wrap items-center justify-end gap-2 md:min-w-0 md:flex-none md:justify-end">
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label={t.nav.primaryNavigation}
          >
            {navLinks.map((link) => {
              const href = withLocale(locale, link.href);
              const active = pathname === href;
              return (
                <Link
                  key={link.href}
                  href={href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-[var(--color-navy)]/10 text-[var(--color-navy)]"
                      : "text-slate-600 hover:bg-slate-100 hover:text-[var(--color-navy)]"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <label className="sr-only" htmlFor="language-select">
              {t.languageLabel}
            </label>
            <select
              id="language-select"
              className="max-w-[min(100%,11rem)] shrink-0 rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-sm text-[var(--color-navy)]"
              value={locale}
              onChange={(e) => {
                const next = e.target.value as Locale;
                router.push(withLocale(next, pathWithoutLocale));
              }}
              aria-label={t.languageLabel}
            >
              <option value="fr">{t.languages.fr}</option>
              <option value="en">{t.languages.en}</option>
              <option value="ar">{t.languages.ar}</option>
            </select>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-[var(--color-navy)] md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            >
              {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-slate-100 bg-white px-4 py-4 md:hidden"
          aria-label={t.nav.mobileNavigation}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const href = withLocale(locale, link.href);
              const active = pathname === href;
              return (
                <li key={link.href}>
                  <Link
                    href={href}
                    className={`block rounded-lg px-3 py-3 text-base font-medium ${
                      active
                        ? "bg-[var(--color-navy)]/10 text-[var(--color-navy)]"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
