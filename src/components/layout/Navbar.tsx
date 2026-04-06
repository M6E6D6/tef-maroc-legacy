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
  const [menuBarHidden, setMenuBarHidden] = useState(false);
  const lastScrollY = useRef(0);
  const { locale, t } = useI18n();
  const pathWithoutLocale = stripLocaleFromPathname(pathname);

  useEffect(() => {
    lastScrollY.current = typeof window !== "undefined" ? window.scrollY : 0;
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const y = window.scrollY;
        const delta = y - lastScrollY.current;
        lastScrollY.current = y;

        if (y < 40) {
          setMenuBarHidden(false);
        } else if (delta > 6) {
          setMenuBarHidden(true);
        } else if (delta < -6) {
          setMenuBarHidden(false);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  const barDir = locale === "ar" ? "rtl" : "ltr";

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-[var(--color-brand-blue)]/15 bg-white/95 shadow-sm shadow-[var(--color-navy)]/5 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--color-navy)] focus:px-4 focus:py-2 focus:text-white rtl:focus:left-auto rtl:focus:right-4"
      >
        {t.nav.skipToMain}
      </a>

      <div className="mx-auto max-w-6xl px-4 pt-4 pb-3 sm:px-6 lg:px-8">
        {/*
          One row: menu at inline-start, language at inline-end, logo centered.
          Arabic uses dir="rtl" so the menu sits on the right and the language control on the left.
        */}
        <div
          className="relative flex min-h-[3.75rem] items-center gap-2 sm:min-h-[4rem]"
          dir={barDir}
        >
          {/* Inline-start: hamburger (mobile) + primary nav (desktop) */}
          <div className="relative z-20 flex min-w-0 flex-1 items-center justify-start">
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

            <nav
              className={`ms-1 hidden min-w-0 max-w-[min(100%,22rem)] overflow-hidden transition-[opacity,visibility] duration-300 ease-out sm:max-w-[min(100%,26rem)] md:ms-2 md:block md:max-w-[min(100%,32rem)] lg:max-w-[min(100%,40rem)] ${
                menuBarHidden
                  ? "md:invisible md:pointer-events-none md:opacity-0"
                  : "md:opacity-100"
              }`}
              aria-label={t.nav.primaryNavigation}
              aria-hidden={menuBarHidden || undefined}
            >
              <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
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

          {/* Center: logo */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[min(100%,calc(100vw-10.5rem))] max-w-[28rem] -translate-x-1/2 -translate-y-1/2 sm:w-[min(100%,calc(100vw-12rem))] sm:max-w-xl md:max-w-2xl lg:max-w-[42rem]">
            <Link
              href={withLocale(locale, "/")}
              className="pointer-events-auto inline-flex w-full justify-center"
              aria-label={`${siteConfig.name} — ${t.nav.home}`}
            >
              <Image
                src={siteConfig.logoPath}
                alt=""
                width={430}
                height={149}
                className="h-16 w-auto max-w-full object-contain object-center sm:h-[4.75rem] md:h-[5.125rem] lg:h-[5.75rem]"
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 430px"
              />
            </Link>
          </div>

          {/* Inline-end: language (select stays LTR so FR/EN/AR read predictably) */}
          <div className="relative z-20 flex min-w-0 flex-1 items-center justify-end">
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
