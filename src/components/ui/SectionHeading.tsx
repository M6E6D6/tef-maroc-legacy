import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  variant?: "default" | "inverse";
  children?: ReactNode;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
  variant = "default",
  children,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor =
    variant === "inverse" ? "text-white" : "text-[var(--color-navy)]";
  const subtitleColor = variant === "inverse" ? "text-slate-300" : "text-slate-600";
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-gold)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`font-heading mt-2 text-3xl font-semibold tracking-tight sm:text-4xl ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle ? <p className={`mt-3 text-lg ${subtitleColor}`}>{subtitle}</p> : null}
      {children}
    </div>
  );
}
