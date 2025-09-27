import Image from "next/image";
import BlogContent from "@/components/Atoms/server/BlogContent";
import BlogMeta from "@/components/Atoms/server/BlogMeta";
import BackToBlogButton from "@/components/Atoms/server/BackToBlogButton";
import BlogNavigation from "@/components/Molecules/server/BlogNavigation";
import RelatedArticles from "@/components/Molecules/server/RelatedArticles";
import type { ArticlePageProps } from "@/utils/BlogTypes";
import { estimateReadingTime, getBlogTranslations } from "@/utils/blogUtils";

export default function ArticleDetail({ article, language }: ArticlePageProps) {
  const { data: articleData } = article;
  const readingTime = estimateReadingTime(articleData.content);
  const translations = getBlogTranslations(language);

  return (
    <div className="article-detail py-16 px-6 max-w-4xl mx-auto">
      {/* Navigation */}
      <BlogNavigation
        language={language}
        currentArticleTitle={articleData.title}
        showBreadcrumbs={true}
      />

      {/* Back to Blog Button */}
      <BackToBlogButton language={language} className="mb-8" />

      {/* Article Header */}
      <header className="article-header mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {articleData.title}
        </h1>

        {/* Article Meta */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <BlogMeta
            publishedAt={articleData.publishedAt}
            updatedAt={articleData.updatedAt}
            language={language}
          />
          <div className="text-sm text-gray-600">
            {readingTime} {translations.readingTime}
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {articleData.image && (
        <div className="article-image mb-8">
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_URL || ""}${
              articleData.image.url
            }`}
            alt={articleData.title}
            width={800}
            height={450}
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </div>
      )}

      {/* Article Content */}
      <main className="article-content">
        <BlogContent content={articleData.content} className="mb-12" />
      </main>

      {/* Related Articles */}
      <RelatedArticles
        currentArticleId={articleData.id}
        language={language}
        maxResults={3}
      />

      {/* Bottom Navigation */}
      <div className="article-footer mt-16 pt-8 border-t border-gray-200">
        <BackToBlogButton language={language} />
      </div>
    </div>
  );
}
