import type { BlogMetaProps } from "@/utils/BlogTypes";
import { formatBlogDate, getBlogTranslations } from "@/utils/blogUtils";

export default function BlogMeta({
  publishedAt,
  updatedAt,
  language,
}: BlogMetaProps) {
  const publishedDate = formatBlogDate(publishedAt, language);
  const updatedDate = formatBlogDate(updatedAt, language);
  const translations = getBlogTranslations(language);
  const isUpdated = publishedAt !== updatedAt;

  return (
    <div className="blog-meta flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
      <div className="flex items-center gap-2">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <time dateTime={publishedAt}>
          {translations.publishedOn} {publishedDate}
        </time>
      </div>

      {isUpdated && (
        <>
          <span className="text-gray-400">•</span>
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <time dateTime={updatedAt}>
              {translations.updatedOn} {updatedDate}
            </time>
          </div>
        </>
      )}
    </div>
  );
}
