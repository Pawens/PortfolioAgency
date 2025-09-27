import { getBlogArticlesData } from "@/utils/StrapiCallsUtils";
import type { BlogArticle } from "@/utils/BlogTypes";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pawens.com";

  // Static blog pages
  const staticPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog?lang=en`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  try {
    // Get articles for French
    const articlesFr = await getBlogArticlesData("fr");
    const articlesEn = await getBlogArticlesData("en");

    // Generate sitemap entries for French articles
    const frenchArticles =
      articlesFr?.data?.map((article: BlogArticle) => ({
        url: `${baseUrl}/blog/${article.documentId}`,
        lastModified: new Date(article.updatedAt),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })) || [];

    // Generate sitemap entries for English articles
    const englishArticles =
      articlesEn?.data?.map((article: BlogArticle) => ({
        url: `${baseUrl}/blog/${article.documentId}?lang=en`,
        lastModified: new Date(article.updatedAt),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })) || [];

    return [...staticPages, ...frenchArticles, ...englishArticles];
  } catch (error) {
    console.error("Error generating blog sitemap:", error);
    return staticPages;
  }
}
