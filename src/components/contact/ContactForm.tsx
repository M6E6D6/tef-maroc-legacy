"use client";

import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";

type Props = {
  /** Bare form fields only (e.g. inside a styled card on the contact page). */
  bare?: boolean;
};

export function ContactForm({ bare = false }: Props) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const { t } = useI18n();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  const shell = bare
    ? "rounded-none border-0 bg-transparent p-0 shadow-none"
    : "rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8";

  return (
    <form
      onSubmit={handleSubmit}
      className={shell}
      aria-label={t.contact.formAriaLabel}
      noValidate
    >
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-firstname" className="block text-sm font-medium text-[var(--tef-navy)]">
              {t.contact.formFirstName} <span className="text-red-600">*</span>
            </label>
            <input
              id="contact-firstname"
              name="firstname"
              type="text"
              required
              autoComplete="given-name"
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="contact-lastname" className="block text-sm font-medium text-[var(--tef-navy)]">
              {t.contact.formLastName} <span className="text-red-600">*</span>
            </label>
            <input
              id="contact-lastname"
              name="lastname"
              type="text"
              required
              autoComplete="family-name"
              className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
              aria-required="true"
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--tef-navy)]">
            {t.contact.formEmail} <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className="block text-sm font-medium text-[var(--tef-navy)]">
            {t.contact.formSubject} <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            required
            className="mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--tef-navy)]">
            {t.contact.formMessage} <span className="text-red-600">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="mt-2 w-full resize-y rounded-lg border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
            aria-required="true"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-[var(--tef-navy)] px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#003875] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
        >
          {t.contact.formSubmit}
        </button>
      </div>
      {status === "sent" ? (
        <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-800" role="status">
          {t.contact.formSuccess}
        </p>
      ) : null}
    </form>
  );
}
