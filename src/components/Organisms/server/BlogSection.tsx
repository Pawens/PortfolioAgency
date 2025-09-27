import BlogList from "@/components/Molecules/server/BlogList";
import BlogNavigation from "@/components/Molecules/server/BlogNavigation";
import type { BlogPageProps } from "@/utils/BlogTypes";
import { getTranslations } from "@/utils/serverTranslations";

export default function BlogSection({ articles, language }: BlogPageProps) {
  const translations = getTranslations(language);
  
  return (
    <section className="blog-section py-[64px] px-[24px] mx-auto bg-[var(--color-primary)]">
      {/* Navigation */}
      <BlogNavigation language={language} showBreadcrumbs={true} />

      {/* Header */}
      <div className="blog-header text-center mb-[48px] mt-[32px]">
        <h1 className="text-[48px] font-bold text-[var(--color-secondary)] mb-[16px] leading-[1.2]">
          {translations.blogSection.title}
        </h1>
        <p className="text-[20px] text-[var(--color-secondary)] mx-auto leading-[1.6] opacity-90">
          {translations.blogSection.description}
        </p>
      </div>

      {/* Articles List */}
      <BlogList articles={articles.data} language={language} />
    </section>
  );
}
