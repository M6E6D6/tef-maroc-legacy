import { ImageIcon } from "lucide-react";
import type { ReactNode } from "react";

type PlaceholderImageProps = {
  label: string;
  aspect?: "video" | "square" | "wide";
  className?: string;
  icon?: ReactNode;
};

export function PlaceholderImage({
  label,
  aspect = "video",
  className = "",
  icon,
}: PlaceholderImageProps) {
  const aspectClass =
    aspect === "square" ? "aspect-square" : aspect === "wide" ? "aspect-[21/9]" : "aspect-video";
  return (
    <div
      className={`relative flex overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-100 via-white to-slate-100 ${aspectClass} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-gold)]/10 via-transparent to-transparent" />
      <div className="relative m-auto flex flex-col items-center gap-2 px-6 text-center">
        <span className="rounded-full bg-[var(--color-navy)]/10 p-3 text-[var(--color-navy)]">
          {icon ?? <ImageIcon className="h-8 w-8" aria-hidden />}
        </span>
        <span className="text-sm font-medium text-slate-600">{label}</span>
      </div>
    </div>
  );
}
