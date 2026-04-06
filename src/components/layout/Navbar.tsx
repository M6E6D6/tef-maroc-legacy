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

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [menuBarHidden, setMenuBarHidden] = useState(false);
  const lastScrollY = useRef(0);
  const { locale, t } = useI18n();
  const pathWithoutLocale = stripLocaleFromPathname(pathname);

  useEffect(() => {
    setMenuBarHidden(false);
    lastScrollY.current = typeof window !== "undefined" ? window.scrollY : 0;
  }, [pathname]);

  useEffect(() => {
    const root = document.documentElement;
    if (menuBarHidden) root.setAttribute("data-nav-condensed", "");
    else root.removeAttribute("data-nav-condensed");
    return () => root.removeAttribute("data-nav-condensed");
  }, [menuBarHidden]);

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
    { href: "/contact", label: t.nav.contact },
  ];

  const linkClass = (active: boolean) =>
    `rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
      active
        ? "bg-[var(--color-brand-blue)]/12 text-[var(--color-navy)] ring-1 ring-[var(--color-morocco-green)]/35"
        : "text-[var(--foreground)]/80 hover:bg-[var(--color-brand-blue)]/8 hover:text-[var(--color-navy)]"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-[var(--color-brand-blue)]/15 bg-white/95 shadow-sm shadow-[var(--color-navy)]/5 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--color-navy)] focus:px-4 focus:py-2 focus:text-white rtl:focus:left-auto rtl:focus:right-4"
      >
        {t.nav.skipToMain}
      </a>

      <div className="mx-auto flex max-w-6xl flex-col px-4 pt-4 pb-0 sm:px-6 lg:px-8">
        {/* Row 1: centered logo; language / menu at the inline end */}
        <div className="relative flex justify-center px-2 pb-3 pt-1 sm:px-4">
          <Link
            href={withLocale(locale, "/")}
            className="inline-flex max-w-[min(24rem,calc(100vw-7.5rem))] justify-center sm:max-w-md md:max-w-lg lg:max-w-xl"
            aria-label={`${siteConfig.name} — ${t.nav.home}`}
          >
            <Image
              src={siteConfig.logoPath}
              alt=""
              width={400}
              height={138}
              className="h-14 w-auto max-w-full object-contain object-center sm:h-[4.25rem] md:h-[4.75rem] lg:h-20"
              priority
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 400px"
            />
          </Link>

          <div className="absolute end-2 top-1/2 z-10 flex -translate-y-1/2 items-center gap-2 sm:end-4">
            <label className="sr-only" htmlFor="language-select">
              {t.languageLabel}
            </label>
            <select
              id="language-select"
              className="max-w-[min(100%,11rem)] rounded-lg border border-[var(--color-brand-blue)]/25 bg-white px-2.5 py-2 text-sm font-medium text-[var(--color-navy)] shadow-sm focus:border-[var(--color-brand-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-blue)]/25"
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
              className="inline-flex items-center justify-center rounded-lg border border-[var(--color-brand-blue)]/25 bg-white p-2.5 text-[var(--color-navy)] md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            >
              {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>
          </div>
        </div>

        {/* Row 2: desktop menu bar under logo — hides while scrolling down */}
        <nav
          className={`hidden overflow-hidden border-t border-[var(--color-brand-blue)]/18 transition-[max-height,opacity,padding,border-color] duration-300 ease-out md:block ${
            menuBarHidden
              ? "md:!max-h-0 md:border-transparent md:py-0 md:opacity-0 md:pointer-events-none"
              : "md:max-h-[6rem] md:opacity-100"
          }`}
          aria-label={t.nav.primaryNavigation}
          aria-hidden={menuBarHidden || undefined}
        >
          <ul className="flex flex-wrap items-center justify-center gap-1 py-3.5 sm:gap-2">
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
