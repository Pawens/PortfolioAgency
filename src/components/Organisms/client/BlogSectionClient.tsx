"use client";

import BlogListClient from "@/components/Molecules/client/BlogListClient";
import BlogNavigation from "@/components/Molecules/server/BlogNavigation";
import type { BlogPageProps } from "@/utils/BlogTypes";

interface BlogSectionClientProps extends BlogPageProps {
  showFilters?: boolean;
  showSearch?: boolean;
  itemsPerPage?: number;
}

export default function BlogSectionClient({
  articles,
  language,
  showFilters = true,
  showSearch = true,
  itemsPerPage = 9,
}: BlogSectionClientProps) {
  return (
    <section className=" py-16 px-6 max-w-7xl mx-auto">
      {/* Navigation */}
      <BlogNavigation language={language} showBreadcrumbs={true} />

      {/* Header */}
      <div className="blog-header text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-down">
          Nos articles
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
          {language === "Fr"
            ? "Découvrez nos derniers articles sur le développement web, le design et les tendances technologiques."
            : "Discover our latest articles about web development, design and technology trends."}
        </p>
      </div>

      {/* Interactive Articles List */}
      <BlogListClient
        articles={articles.data}
        language={language}
        showSearch={showSearch}
        showSort={showFilters}
        itemsPerPage={itemsPerPage}
      />
    </section>
  );
}
