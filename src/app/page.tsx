import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/translations";

/** Fallback si la requête atteint la racine sans redirection middleware (évite GET / → 404 + erreur d’hydratation). */
export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
