import BlogPage from "@/components/Pages/BlogPage";
import StickyHeader from "@/components/Organisms/client/StickyHeader";
import StructuredData from "@/components/Atoms/server/StructuredData";
import { LanguageProvider } from "@/context/LanguageContext";
import { getBlogArticlesData } from "@/utils/StrapiCallsUtils";
import { getLanguageFromSearchParams } from "@/utils/serverTranslations";
import { generateBlogSEO, generateBlogStructuredData } from "@/utils/BlogSEO";
import type { Metadata } from "next";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const language = getLanguageFromSearchParams(searchParams);
  const langParam = language !== "Fr" ? `?lang=${language.toLowerCase()}` : "";
  const canonical = `https://pawens.com/blog${langParam}`;

  return generateBlogSEO(language, {
    canonical,
    title:
      language === "Fr"
        ? "Blog - Pawens | Articles Développement Web & Design"
        : "Blog - Pawens | Web Development & Design Articles",
  });
}

export default async function BlogListPage({ searchParams }: Props) {
  const language = getLanguageFromSearchParams(searchParams);

  try {
    const articles = await getBlogArticlesData(language.toLowerCase());

    if (!articles || !articles.data) {
      return <div>No articles found</div>;
    }

    return (
      <LanguageProvider initialLanguage={language}>
        <StructuredData
          data={generateBlogStructuredData(articles.data, language)}
        />
        <StickyHeader />
        <BlogPage articles={articles} language={language} />
      </LanguageProvider>
    );
  } catch (error) {
    console.error("Error fetching articles:", error);
    return <div>Error loading articles</div>;
  }
}
