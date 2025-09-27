import BlogCard from "@/components/Atoms/server/BlogCard";
import type { BlogListProps } from "@/utils/BlogTypes";
import { getBlogTranslations } from "@/utils/blogUtils";

export default function BlogList({ articles, language }: BlogListProps) {
  const translations = getBlogTranslations(language);

  if (!articles || articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
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
        <h3 className="text-xl font-medium text-gray-900 mb-2">
          {translations.noArticles}
        </h3>
      </div>
    );
  }

  const featuredArticle = articles[articles.length - 1];
  const regularArticles = articles.slice(0, -1);

  return (
    <div className="blog-list-container">
      {featuredArticle && (
        <div className="featured-article mb-[48px]">
          <BlogCard
            article={featuredArticle}
            language={language}
            variant="featured"
          />
        </div>
      )}

      {regularArticles.length > 0 && (
        <div className="grid grid-cols-3 gap-[24px]">
          {regularArticles.map((article) => (
            <BlogCard
              key={article.id}
              article={article}
              language={language}
              variant="default"
            />
          ))}
        </div>
      )}
    </div>
  );
}
