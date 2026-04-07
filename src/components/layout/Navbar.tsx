"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";
import { stripLocaleFromPathname, withLocale } from "@/i18n/routing";
import type { Locale } from "@/i18n/translations";

const LOCALE_CODES: Record<Locale, string> = { fr: "FR", en: "EN", ar: "AR" };

export function Navbar() {
  const pathname = usePathname();
  return <NavbarInner key={pathname} />;
}

function NavbarInner() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrollHidden, setScrollHidden] = useState(false);
  const lastScrollY = useRef(0);
  const { locale, t } = useI18n();
  const pathWithoutLocale = stripLocaleFromPathname(pathname);

  /** Mobile drawer open: keep bar visible; otherwise follow scroll hide/show. */
  const headerHidden = open ? false : scrollHidden;

  useEffect(() => {
    lastScrollY.current = typeof window !== "undefined" ? window.scrollY : 0;
  }, []);

  useEffect(() => {
    if (open) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const y = window.scrollY;
        const delta = y - lastScrollY.current;
        lastScrollY.current = y;

        if (y < 48) {
          setScrollHidden(false);
        } else if (delta > 8) {
          setScrollHidden(true);
        } else if (delta < -8) {
          setScrollHidden(false);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/trainings", label: t.nav.trainings },
    { href: "/services", label: t.nav.services },
    { href: "/blog", label: t.nav.blog },
    { href: "/contact", label: t.nav.contact },
  ];

  const linkClass = (active: boolean) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
      active
        ? "bg-[var(--color-brand-blue)]/12 text-[var(--color-navy)] ring-1 ring-[var(--color-morocco-green)]/35"
        : "text-[var(--foreground)]/80 hover:bg-[var(--color-brand-blue)]/8 hover:text-[var(--color-navy)]"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full border-b border-[var(--color-brand-blue)]/15 bg-white/95 shadow-sm shadow-[var(--color-navy)]/5 backdrop-blur-md transition-transform duration-300 ease-out motion-reduce:transition-none ${
        headerHidden ? "-translate-y-[calc(100%+1px)]" : "translate-y-0"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--color-navy)] focus:px-4 focus:py-2 focus:text-white rtl:focus:left-auto rtl:focus:right-4"
      >
        {t.nav.skipToMain}
      </a>

      <div className="mx-auto max-w-6xl px-4 pt-5 pb-4 sm:px-6 lg:px-8">
        {/*
          Mobile: [ burger | logo | lang ]. Desktop: [ logo | centered nav | lang ].
          dir="ltr" keeps column order (logo left on desktop) stable for all locales; page text direction follows html[lang].
        */}
        <div
          className="relative grid min-h-[5.25rem] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 sm:gap-3 md:gap-6"
          dir="ltr"
        >
          {/* Left: hamburger (mobile) / logo (desktop) */}
          <div className="relative z-20 flex min-w-0 shrink-0 items-center justify-start">
            <button
              type="button"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-[var(--color-brand-blue)]/25 bg-white p-2.5 text-[var(--color-navy)] md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            >
              {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>
            <Link
              href={withLocale(locale, "/")}
              className="navbar-desktop-only-inline max-w-[7rem] shrink-0"
              aria-label={`${siteConfig.name} — ${t.nav.home}`}
            >
              <Image
                src={siteConfig.logoPath}
                alt={siteConfig.name}
                width={siteConfig.logoWidth}
                height={siteConfig.logoHeight}
                className="h-[5.25rem] w-auto max-h-[5.25rem] max-w-[6rem] shrink-0 object-contain object-left"
                priority
                quality={75}
                sizes="112px"
              />
            </Link>
          </div>

          {/* Center: logo (mobile) / primary nav (desktop, centered) */}
          <div className="relative z-10 flex min-h-[5.25rem] min-w-0 items-center justify-center overflow-visible">
            <Link
              href={withLocale(locale, "/")}
              className="navbar-mobile-only shrink-0"
              aria-label={`${siteConfig.name} — ${t.nav.home}`}
            >
              <Image
                src={siteConfig.logoPath}
                alt={siteConfig.name}
                width={siteConfig.logoWidth}
                height={siteConfig.logoHeight}
                className="h-[5.25rem] w-auto max-h-[5.25rem] max-w-[6rem] shrink-0 object-contain object-center"
                priority
                quality={75}
                sizes="112px"
              />
            </Link>

            <nav
              className="navbar-desktop-only-flex"
              aria-label={t.nav.primaryNavigation}
            >
              <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
                {navLinks.map((link) => {
                  const href = withLocale(locale, link.href);
                  const active = pathname === href;
                  return (
                    <li key={link.href}>
                      <Link href={href} className={linkClass(active)} aria-current={active ? "page" : undefined}>
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Right: language */}
          <div className="relative z-20 flex min-w-0 shrink-0 items-center justify-end">
            <label className="sr-only" htmlFor="language-select">
              {t.languageLabel}
            </label>
            <select
              id="language-select"
              dir="ltr"
              className="min-w-[4.25rem] rounded-lg border border-[var(--color-brand-blue)]/25 bg-white px-2 py-2 text-center text-sm font-semibold uppercase tracking-wide text-[var(--color-navy)] shadow-sm focus:border-[var(--color-brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]/25"
              value={locale}
              onChange={(e) => {
                const next = e.target.value as Locale;
                router.push(withLocale(next, pathWithoutLocale));
              }}
              aria-label={t.languageLabel}
            >
              <option value="fr" title={t.languages.fr}>
                {LOCALE_CODES.fr}
              </option>
              <option value="en" title={t.languages.en}>
                {LOCALE_CODES.en}
              </option>
              <option value="ar" title={t.languages.ar}>
                {LOCALE_CODES.ar}
              </option>
            </select>
          </div>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--color-brand-blue)]/15 bg-white px-4 py-4 md:hidden"
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
                    className={`block rounded-lg px-3 py-3 text-base font-semibold ${
                      active
                        ? "bg-[var(--color-brand-blue)]/12 text-[var(--color-navy)] ring-1 ring-[var(--color-morocco-green)]/35"
                        : "text-[var(--foreground)] hover:bg-[var(--color-brand-blue)]/8"
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
