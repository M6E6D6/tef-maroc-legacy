"use client";

import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/data/site";
import { useI18n } from "@/i18n/I18nProvider";

const mapEmbedUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212813.7182007677!2d-7.7640437!3d33.5731104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d378d31fce9%3A0x327f3c5e3e0e0e0e!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sma!4v1700000000000!5m2!1sen!2sma";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <div className="bg-world-dots min-h-[60vh]">
      <section className="py-14 sm:py-20" aria-labelledby="contact-page-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
            <div className="border-l-4 border-[var(--tef-navy)] pl-6 sm:pl-8">
              <h1
                id="contact-page-heading"
                className="font-heading text-3xl font-bold tracking-tight text-[var(--tef-navy)] sm:text-4xl lg:text-[2.25rem] lg:leading-tight"
              >
                {t.contact.title}
              </h1>
              <p className="mt-6 leading-relaxed text-slate-600">{t.contact.intro}</p>
              <p className="mt-4 leading-relaxed text-slate-600">{t.footer.description}</p>
            </div>
            <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xl sm:p-8">
              <p className="font-script-accent text-lg text-[var(--tef-navy)]">{t.contact.cardKicker}</p>
              <h2 className="font-heading mt-1 text-2xl font-bold text-[var(--tef-navy)] sm:text-3xl">
                {t.contact.cardHeading}
              </h2>
              <p className="mt-2 text-sm text-slate-500">{t.contact.requiredFields}</p>
              <div className="mt-6">
                <ContactForm bare />
              </div>
              <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 shadow-inner">
                <iframe
                  title={`Google Maps — ${siteConfig.contact.city}`}
                  src={mapEmbedUrl}
                  className="h-[240px] w-full sm:h-[280px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <p className="mt-2 text-center text-xs text-slate-500">
                {t.contact.mapText
                  .replace("{city}", siteConfig.contact.city)
                  .replace("{country}", siteConfig.contact.country)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
