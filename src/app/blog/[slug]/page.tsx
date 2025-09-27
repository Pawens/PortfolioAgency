import ArticlePage from "@/components/Pages/ArticlePage";
import StickyHeader from "@/components/Organisms/client/StickyHeader";
import StructuredData from "@/components/Atoms/server/StructuredData";
import { LanguageProvider } from "@/context/LanguageContext";
import { getBlogArticleData } from "@/utils/StrapiCallsUtils";
import { getLanguageFromSearchParams } from "@/utils/serverTranslations";
import {
  generateArticleSEO,
  generateArticleStructuredData,
} from "@/utils/BlogSEO";
import type { Metadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const language = getLanguageFromSearchParams(searchParams);
  const langParam = language !== "Fr" ? `?lang=${language.toLowerCase()}` : "";
  const canonical = `https://pawens.com/blog/${params.slug}${langParam}`;

  try {
    const article = await getBlogArticleData(
      params.slug,
      language.toLowerCase()
    );

    if (!article?.data) {
      return {
        title: "Article not found - Pawens",
        robots: { index: false, follow: false },
      };
    }

    return generateArticleSEO(article.data, language, canonical);
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Article - Pawens",
      robots: { index: false, follow: false },
    };
  }
}

export default async function BlogArticlePage({ params, searchParams }: Props) {
  const language = getLanguageFromSearchParams(searchParams);

  try {
    const article = await getBlogArticleData(
      params.slug,
      language.toLowerCase()
    );

    if (!article || !article.data) {
      return <div>Article not found</div>;
    }

    return (
      <LanguageProvider initialLanguage={language}>
        <StructuredData
          data={generateArticleStructuredData(article.data, language)}
        />
        <StickyHeader />
        <ArticlePage article={article} language={language} />
      </LanguageProvider>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return <div>Error loading article</div>;
  }
}
