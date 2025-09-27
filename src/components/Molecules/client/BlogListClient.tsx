"use client";

import { useState, useMemo } from "react";
import BlogCardClient from "@/components/Atoms/client/BlogCardClient";
import type { BlogListProps } from "@/utils/BlogTypes";
import { getBlogTranslations } from "@/utils/blogUtils";

type SortOption = "newest" | "oldest" | "alphabetical";

interface BlogListClientProps extends BlogListProps {
  showSearch?: boolean;
  showSort?: boolean;
  itemsPerPage?: number;
}

export default function BlogListClient({
  articles,
  language,
  showSearch = true,
  showSort = true,
  itemsPerPage = 6,
}: BlogListClientProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const translations = getBlogTranslations(language);

  const filteredAndSortedArticles = useMemo(() => {
    let filtered = articles;

    // Filter by search term
    if (searchTerm) {
      filtered = articles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort articles
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
          );
        case "oldest":
          return (
            new Date(a.publishedAt).getTime() -
            new Date(b.publishedAt).getTime()
          );
        case "alphabetical":
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [articles, searchTerm, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedArticles.length / itemsPerPage);
  const paginatedArticles = filteredAndSortedArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const [featuredArticle, ...regularArticles] =
    currentPage === 1 ? paginatedArticles : [null, ...paginatedArticles];

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

  return (
    <div className="blog-list-client">
      {(showSearch || showSort) && (
        <div className="blog-controls flex flex-col sm:flex-row gap-4 mb-8">
          {showSearch && (
            <div className="flex-1">
              <input
                type="text"
                placeholder={
                  language === "Fr"
                    ? "Rechercher des articles..."
                    : "Search articles..."
                }
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          )}
          {showSort && (
            <div className="sm:w-48">
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value as SortOption);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">
                  {language === "Fr" ? "Plus récents" : "Newest"}
                </option>
                <option value="oldest">
                  {language === "Fr" ? "Plus anciens" : "Oldest"}
                </option>
                <option value="alphabetical">
                  {language === "Fr" ? "Alphabétique" : "Alphabetical"}
                </option>
              </select>
            </div>
          )}
        </div>
      )}

      <div className="blog-list-container">
        {featuredArticle && currentPage === 1 && (
          <div className="featured-article mb-12">
            <BlogCardClient
              article={featuredArticle}
              language={language}
              variant="featured"
            />
          </div>
        )}

        {regularArticles.length > 0 && (
          <div className="regular-articles grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularArticles
              .filter((article) => article !== null)
              .map((article) => (
                <BlogCardClient
                  key={article.id}
                  article={article}
                  language={language}
                  variant="default"
                />
              ))}
          </div>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination flex justify-center items-center gap-2 mt-12">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            {language === "Fr" ? "Précédent" : "Previous"}
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                page === currentPage
                  ? "bg-blue-600 text-white"
                  : "border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
          >
            {language === "Fr" ? "Suivant" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}
