"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const { t } = useI18n();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
      aria-label={t.contact.formAriaLabel}
      noValidate
    >
      <div className="grid gap-6">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-navy)]">
            {t.contact.formName} <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-navy)]">
            {t.contact.formEmail} <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--color-navy)]">
            {t.contact.formMessage} <span className="text-red-600">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="mt-2 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30"
            aria-required="true"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-navy)] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[var(--color-navy-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
        >
          <Send className="h-4 w-4" aria-hidden />
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
