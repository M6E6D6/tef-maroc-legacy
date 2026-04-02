"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { translations, type Locale } from "@/i18n/translations";

type I18nContextValue = {
  locale: Locale;
  t: (typeof translations)[Locale];
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<I18nContextValue | null>(null);

type I18nProviderProps = {
  children: React.ReactNode;
  locale: Locale;
};

export function I18nProvider({ children, locale }: I18nProviderProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
  }, [locale]);

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      t: translations[locale],
      dir: locale === "ar" ? "rtl" : "ltr",
    }),
    [locale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return context;
}
