"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";

export function ContactInfoBar() {
  const { t } = useI18n();
  const telHref = `tel:${siteConfig.contact.phone.replace(/\s/g, "")}`;

  return (
    <section
      className="relative overflow-hidden border-y border-slate-300/40 bg-[#d1d5db]/45 py-10 sm:py-12"
      aria-label={t.contact.details}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30c15-8 45 8 60 0' fill='none' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <li className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/80 text-[var(--tef-navy)] shadow-sm">
              <Clock className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <p className="font-heading text-sm font-bold text-[var(--tef-navy)]">{t.home.infoBarClockLabel}</p>
              <p className="mt-1 text-sm text-slate-600">{t.home.infoBarClockValue}</p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/80 text-[var(--tef-navy)] shadow-sm">
              <MapPin className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <p className="font-heading text-sm font-bold text-[var(--tef-navy)]">
                {siteConfig.contact.city}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {siteConfig.contact.addressLine1}
                <br />
                {siteConfig.contact.postalCode} {siteConfig.contact.city}, {siteConfig.contact.country}
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/80 text-[var(--tef-navy)] shadow-sm">
              <Phone className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <p className="font-heading text-sm font-bold text-[var(--tef-navy)]">{t.contact.phone}</p>
              <a href={telHref} className="mt-1 block text-sm text-slate-600 hover:text-[var(--tef-navy)]">
                {siteConfig.contact.phone}
              </a>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/80 text-[var(--tef-navy)] shadow-sm">
              <Mail className="h-6 w-6" aria-hidden />
            </span>
            <div>
              <p className="font-heading text-sm font-bold text-[var(--tef-navy)]">{t.contact.email}</p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="mt-1 block break-all text-sm text-slate-600 hover:text-[var(--tef-navy)]"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
