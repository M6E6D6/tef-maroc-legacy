"use client";

import Image from "next/image";

type SectionImageProps = {
  src: string;
  alt: string;
  aspect?: "video" | "square" | "wide";
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function SectionImage({
  src,
  alt,
  aspect = "video",
  className = "",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 560px",
}: SectionImageProps) {
  const aspectClass =
    aspect === "square" ? "aspect-square" : aspect === "wide" ? "aspect-[21/9]" : "aspect-video";
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm ${aspectClass} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
