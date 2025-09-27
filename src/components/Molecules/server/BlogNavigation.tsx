import Link from "next/link";
import type { Language } from "@/utils/serverTranslations";
import { generateBlogListUrl } from "@/utils/blogUtils";

type BlogNavigationProps = {
  language: Language;
  currentArticleTitle?: string;
  showBreadcrumbs?: boolean;
};

export default function BlogNavigation({
  language,
  currentArticleTitle,
  showBreadcrumbs = true,
}: BlogNavigationProps) {
  const blogListUrl = generateBlogListUrl(language);
  const homeUrl = language !== "Fr" ? `/?lang=${language.toLowerCase()}` : "/";

  if (!showBreadcrumbs) {
    return null;
  }

  return (
    <nav className="blog-navigation mb-8" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        <li>
          <Link
            href={homeUrl}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            {language === "Fr" ? "Accueil" : "Home"}
          </Link>
        </li>

        <li className="flex items-center">
          <svg
            className="w-4 h-4 mx-2 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <Link
            href={blogListUrl}
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Blog
          </Link>
        </li>

        {currentArticleTitle && (
          <li className="flex items-center">
            <svg
              className="w-4 h-4 mx-2 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-900 font-medium truncate max-w-xs">
              {currentArticleTitle}
            </span>
          </li>
        )}
      </ol>
    </nav>
  );
}
