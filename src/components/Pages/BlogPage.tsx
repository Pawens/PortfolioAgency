import BlogSection from "@/components/Organisms/server/BlogSection";
import type { BlogPageProps } from "@/utils/BlogTypes";
import { getBlogTranslations } from "@/utils/blogUtils";
import "@/assets/styles/animation.css";
import "@/assets/styles/blogResponsive.css";
import "@/assets/styles/blogAnimations.css";

export default function BlogPage({ articles, language }: BlogPageProps) {
  const translations = getBlogTranslations(language);

  // No articles state
  if (!articles?.data || articles.data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="text-gray-400 mb-4">
          <svg
            className="w-16 h-16 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3v9m4-9v9m-4-9h4"
            />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {translations.noArticles}
        </h2>
      </div>
    );
  }

  return <BlogSection articles={articles} language={language} />;
}
