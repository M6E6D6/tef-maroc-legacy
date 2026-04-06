"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionImage } from "@/components/ui/SectionImage";
import { BLOG_SLUGS, blogImageIndex, getBlogPost } from "@/data/blog-posts";
import { marketingImages } from "@/data/marketing-images";
import { useI18n } from "@/i18n/I18nProvider";
import { withLocale } from "@/i18n/routing";

export default function BlogPage() {
  const { locale, t } = useI18n();
  const posts = BLOG_SLUGS.map((slug) => {
    const post = getBlogPost(slug);
    if (!post) return null;
    return { slug, post };
  }).filter((x): x is { slug: (typeof BLOG_SLUGS)[number]; post: NonNullable<ReturnType<typeof getBlogPost>> } => x !== null);

  const photoAlts = [t.mediaAlt.blogGuestExcellence, t.mediaAlt.blogFoodSafety] as const;

  return (
    <div className="bg-white">
      <section className="border-b border-slate-100 bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold tracking-tight text-[var(--color-navy)] sm:text-5xl">
            {t.blogPage.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">{t.blogPage.intro}</p>
        </div>
      </section>

      <section className="py-16 sm:py-24" aria-labelledby="blog-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            id="blog-heading"
            eyebrow={t.blogPage.eyebrow}
            title={t.blogPage.articlesTitle}
            subtitle={t.blogPage.subtitle}
          />
          <ul className="mt-12 grid gap-8 lg:grid-cols-2">
            {posts.map((item, i) => {
              const href = withLocale(locale, `/blog/${item.slug}`);
              const imgIdx = blogImageIndex[item.slug];
              return (
                <li key={item.slug}>
                  <FadeIn delay={i * 0.06}>
                    <Link
                      href={href}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm outline-none ring-offset-2 transition hover:shadow-md focus-visible:ring-2 focus-visible:ring-[var(--color-navy)]"
                    >
                      <SectionImage
                        src={marketingImages.blog[imgIdx]!}
                        alt={photoAlts[imgIdx]!}
                        aspect="wide"
                        className="rounded-none border-0 shadow-none"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="flex flex-1 flex-col p-6 sm:p-8">
                        <h2 className="font-heading text-xl font-semibold text-[var(--color-navy)] group-hover:underline">
                          {item.post.meta.title[locale]}
                        </h2>
                        <p className="mt-4 flex-1 text-slate-600">{item.post.excerpt[locale]}</p>
                        <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-navy)]">
                          {t.common.viewDetails}
                          <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                        </span>
                      </div>
                    </Link>
                  </FadeIn>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
