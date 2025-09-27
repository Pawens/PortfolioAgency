import Image from "next/image";
import Link from "next/link";
import type { BlogCardProps } from "@/utils/BlogTypes";
import {
  formatBlogDate,
  createExcerpt,
  generateBlogUrl,
  estimateReadingTime,
} from "@/utils/blogUtils";

const VARIANT_STYLES = {
  default: {
    containerClass:
      "bg-[var(--color-secondary)] rounded-[12px] border border-[var(--color-primary)] overflow-hidden cursor-pointer transition-all duration-[300ms] hover:-translate-y-[4px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] shadow-[0_1px_3px_rgba(0,0,0,0.1)] h-[380px] flex flex-col",
    imageWidth: 280,
    imageHeight: 160,
  },
  featured: {
    containerClass:
      "bg-[var(--color-secondary)] rounded-[12px] border border-[var(--color-primary)] overflow-hidden cursor-pointer transition-all duration-[300ms] hover:-translate-y-[4px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] shadow-[0_1px_3px_rgba(0,0,0,0.1)]",
    imageWidth: 600,
    imageHeight: 338,
  },
  compact: {
    containerClass:
      "bg-[var(--color-secondary)] rounded-[12px] border border-[var(--color-primary)] overflow-hidden cursor-pointer transition-all duration-[300ms] hover:-translate-y-[4px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] shadow-[0_1px_3px_rgba(0,0,0,0.1)]",
    imageWidth: 280,
    imageHeight: 160,
  },
};

export default function BlogCard({
  article,
  language,
  variant = "default",
}: BlogCardProps) {
  const { containerClass, imageWidth, imageHeight } = VARIANT_STYLES[variant];
  const blogUrl = generateBlogUrl(article.documentId, language);
  const excerpt = createExcerpt(article.content, 120);
  const readingTime = estimateReadingTime(article.content);
  const publishedDate = formatBlogDate(article.publishedAt, language);

  return (
    <Link href={blogUrl}>
      <article className={containerClass}>
        {/* Image avec overlay gradient */}
        <div className="relative overflow-hidden">
          <Image
            src={
              article.image
                ? `${process.env.NEXT_PUBLIC_BASE_URL || ""}${
                    article.image.url
                  }`
                : "/backgroundCard.webp"
            }
            alt={article.title}
            width={imageWidth}
            height={imageHeight}
            className="w-full h-[160px] object-cover transition-transform duration-[300ms] group-hover:scale-[1.05]"
            priority={variant === "featured"}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[300ms]"></div>

          {/* Badge temps de lecture */}
          <div className="absolute top-[12px] right-[12px] bg-[rgba(255,255,255,0.9)] backdrop-blur-sm px-[12px] py-[4px] rounded-[20px] text-[12px] font-semibold text-[#374151]">
            {readingTime} min
          </div>
        </div>

        {/* Contenu */}
        <div className="p-[16px] flex flex-col flex-1 justify-between">
          <div className="flex-1">
            {/* Date avec icône */}
            <div className="flex items-center gap-[6px] mb-[10px]">
              <div className="w-[6px] h-[6px] bg-[var(--color-primary)] rounded-full"></div>
              <time className="text-[11px] font-medium text-[var(--color-primary)] uppercase tracking-wide">
                {publishedDate}
              </time>
            </div>

            {/* Titre */}
            <h3 className="text-[16px] font-bold text-[var(--color-primary)] mb-[10px] leading-[1.4] line-clamp-2 hover:opacity-80 transition-all duration-[300ms]">
              {article.title}
            </h3>

            {/* Excerpt */}
            <p className="text-[13px] text-[var(--color-primary)] mb-[12px] leading-[1.4] line-clamp-3 opacity-80">
              {excerpt}
            </p>
          </div>

          {/* CTA avec flèche */}
          <div className="flex items-center text-[var(--color-primary)] font-medium text-[13px] hover:opacity-80 transition-all duration-[300ms]">
            <span className="mr-[6px]">
              {language === "Fr" ? "Lire l'article" : "Read more"}
            </span>
            <svg
              className="w-[14px] h-[14px] transition-transform duration-[300ms] group-hover:translate-x-[3px]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
