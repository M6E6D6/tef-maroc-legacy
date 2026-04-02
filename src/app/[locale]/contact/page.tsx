"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/ContactForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212813.7182007677!2d-7.7640437!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d378d31fce9%3A0x327f3c5e3e0e0e0e!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="bg-white">
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            {t.contact.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            {t.contact.intro}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="contact-form-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 id="contact-form-heading" className="font-heading text-2xl font-semibold text-[var(--color-navy)]">
                {t.contact.sendMessage}
              </h2>
              <p className="mt-2 text-slate-600">
                {t.contact.requiredFields}
              </p>
              <FadeIn>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </FadeIn>
            </div>
            <aside className="lg:pl-4" aria-labelledby="contact-details-heading">
              <h2 id="contact-details-heading" className="font-heading text-2xl font-semibold text-[var(--color-navy)]">
                {t.contact.details}
              </h2>
              <ul className="mt-8 flex flex-col gap-6 text-slate-600">
                <li className="flex gap-3">
                  <MapPin className="h-6 w-6 shrink-0 text-[var(--color-gold)]" aria-hidden />
                  <div>
                    <p className="font-medium text-[var(--color-navy)]">{t.contact.address}</p>
                    <p>
                      {siteConfig.contact.addressLine1}
                      <br />
                      {siteConfig.contact.postalCode} {siteConfig.contact.city}
                      <br />
                      {siteConfig.contact.country}
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-6 w-6 shrink-0 text-[var(--color-gold)]" aria-hidden />
                  <div>
                    <p className="font-medium text-[var(--color-navy)]">{t.contact.phone}</p>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                      className="hover:text-[var(--color-navy)]"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-6 w-6 shrink-0 text-[var(--color-gold)]" aria-hidden />
                  <div>
                    <p className="font-medium text-[var(--color-navy)]">{t.contact.email}</p>
                    <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[var(--color-navy)]">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </li>
              </ul>
            </aside>
          </div>

          <div className="mt-16">
            <h2 className="font-heading text-2xl font-semibold text-[var(--color-navy)]">
              {t.contact.location}
            </h2>
            <p className="mt-2 text-slate-600">
              {t.contact.mapText
                .replace("{city}", siteConfig.contact.city)
                .replace("{country}", siteConfig.contact.country)}
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <iframe
                title="Google Maps — Casablanca, Morocco"
                src={mapEmbedUrl}
                className="h-[320px] w-full sm:h-[400px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
