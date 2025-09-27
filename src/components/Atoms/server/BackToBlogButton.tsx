import Link from "next/link";
import type { Language } from "@/utils/serverTranslations";
import { generateBlogListUrl, getBlogTranslations } from "@/utils/blogUtils";

type BackToBlogButtonProps = {
  language: Language;
  className?: string;
};

export default function BackToBlogButton({
  language,
  className = "",
}: BackToBlogButtonProps) {
  const blogListUrl = generateBlogListUrl(language);
  const translations = getBlogTranslations(language);

  return (
    <Link
      href={blogListUrl}
      className={`inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 font-medium ${className}`}
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
      {translations.backToBlog}
    </Link>
  );
}
