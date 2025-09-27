import BlogCard from "@/components/Atoms/server/BlogCard";
import { getBlogArticlesData } from "@/utils/StrapiCallsUtils";
import type { RelatedArticlesProps, BlogArticle } from "@/utils/BlogTypes";
import { getBlogTranslations } from "@/utils/blogUtils";

export default async function RelatedArticles({
  currentArticleId,
  language,
  maxResults = 3,
}: RelatedArticlesProps) {
  const translations = getBlogTranslations(language);

  try {
    const articlesResponse = await getBlogArticlesData(language.toLowerCase());

    if (!articlesResponse?.data) {
      return null;
    }

    // Filter out current article and limit results
    const relatedArticles = articlesResponse.data
      .filter((article: BlogArticle) => article.id !== currentArticleId)
      .slice(0, maxResults);

    if (relatedArticles.length === 0) {
      return null;
    }

    return (
      <section className="related-articles mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-bold mb-8 text-center">
          {translations.relatedArticles}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedArticles.map((article: BlogArticle) => (
            <BlogCard
              key={article.id}
              article={article}
              language={language}
              variant="compact"
            />
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching related articles:", error);
    return null;
  }
}
