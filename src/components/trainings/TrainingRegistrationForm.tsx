"use client";

import { UserPlus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/i18n/I18nProvider";
import { withLocale } from "@/i18n/routing";

const inputClass =
  "mt-2 w-full rounded-lg border border-slate-200 px-4 py-3 text-slate-900 outline-none transition focus:border-[var(--color-gold)] focus:ring-2 focus:ring-[var(--color-gold)]/30";

type Props = {
  trainingTitle: string;
};

export function TrainingRegistrationForm({ trainingTitle }: Props) {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [validationError, setValidationError] = useState<string | null>(null);
  const { locale, t } = useI18n();
  const td = t.trainingsDetailPage;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setValidationError(t.contact.formFillRequired);
      setStatus("idle");
      form.querySelector<HTMLElement>(":invalid")?.focus();
      return;
    }
    setValidationError(null);
    setStatus("sent");
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2
        id="training-registration-heading"
        className="font-heading text-xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-2xl"
      >
        {td.registrationHeading}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{td.registrationIntro}</p>
      <p className="mt-4 text-sm text-slate-500">{t.contact.requiredFields}</p>

      <form
        onSubmit={handleSubmit}
        onInput={() => setValidationError(null)}
        className="mt-6"
        aria-labelledby="training-registration-heading"
        aria-label={td.registrationAriaLabel}
        noValidate
      >
        <div className="grid gap-5">
          <div>
            <label htmlFor="training-reg-course" className="block text-sm font-medium text-[var(--tef-navy)]">
              {td.registrationTraining}
            </label>
            <input
              id="training-reg-course"
              name="training"
              type="text"
              readOnly
              value={trainingTitle}
              tabIndex={-1}
              className={`${inputClass} bg-slate-50 text-slate-700`}
              aria-readonly="true"
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="training-reg-firstname" className="block text-sm font-medium text-[var(--tef-navy)]">
                {t.contact.formFirstName} <span className="text-red-600">*</span>
              </label>
              <input
                id="training-reg-firstname"
                name="firstname"
                type="text"
                required
                autoComplete="given-name"
                className={inputClass}
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="training-reg-lastname" className="block text-sm font-medium text-[var(--tef-navy)]">
                {t.contact.formLastName} <span className="text-red-600">*</span>
              </label>
              <input
                id="training-reg-lastname"
                name="lastname"
                type="text"
                required
                autoComplete="family-name"
                className={inputClass}
                aria-required="true"
              />
            </div>
          </div>
          <div>
            <label htmlFor="training-reg-email" className="block text-sm font-medium text-[var(--tef-navy)]">
              {t.contact.formEmail} <span className="text-red-600">*</span>
            </label>
            <input
              id="training-reg-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="training-reg-phone" className="block text-sm font-medium text-[var(--tef-navy)]">
              {td.registrationPhone}
            </label>
            <input
              id="training-reg-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="training-reg-company" className="block text-sm font-medium text-[var(--tef-navy)]">
              {td.registrationCompany}
            </label>
            <input
              id="training-reg-company"
              name="company"
              type="text"
              autoComplete="organization"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="training-reg-notes" className="block text-sm font-medium text-[var(--tef-navy)]">
              {td.registrationNotes}
            </label>
            <textarea
              id="training-reg-notes"
              name="notes"
              rows={4}
              className={`${inputClass} resize-y`}
            />
          </div>
        </div>

        {validationError ? (
          <p
            className="mt-6 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800"
            role="alert"
            aria-live="polite"
          >
            {validationError}
          </p>
        ) : null}

        <div className="mt-8 border-t border-slate-200 pt-8">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-navy)] px-6 py-4 text-base font-semibold text-white shadow-sm transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]"
          >
            <UserPlus className="h-5 w-5 shrink-0" aria-hidden />
            {td.registrationSubmit}
          </button>
        </div>
        {status === "sent" ? (
          <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-800" role="status">
            {td.registrationSuccess}
          </p>
        ) : null}
      </form>

      <p className="mt-6 text-center text-sm text-slate-600">
        <Link
          href={withLocale(locale, "/contact")}
          className="font-medium text-[var(--color-navy)] underline decoration-slate-300 underline-offset-2 hover:decoration-[var(--color-gold)]"
        >
          {td.registrationOtherRequests}
        </Link>
      </p>
    </div>
  );
}
