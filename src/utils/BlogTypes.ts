import type { Language } from "./serverTranslations";

export interface BlogImageFormat {
  url: string;
}

export interface BlogImageFormats {
  thumbnail: BlogImageFormat;
  small?: BlogImageFormat;
  medium?: BlogImageFormat;
  large?: BlogImageFormat;
}

export interface BlogImage {
  id: number;
  name: string;
  url: string;
  formats: BlogImageFormats;
}

export interface BlogArticle {
  id: number;
  documentId: string;
  title: string;
  content: string;
  image: BlogImage;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface BlogArticlesResponse {
  data: BlogArticle[];
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface BlogArticleResponse {
  data: BlogArticle;
  meta?: Record<string, unknown>;
}

// Types pour les composants
export interface BlogCardProps {
  article: BlogArticle;
  language: Language;
  variant?: "default" | "featured" | "compact";
}

export interface BlogListProps {
  articles: BlogArticle[];
  language: Language;
}

export interface BlogPageProps {
  articles: BlogArticlesResponse;
  language: Language;
}

export interface ArticlePageProps {
  article: BlogArticleResponse;
  language: Language;
}

export interface BlogMetaProps {
  publishedAt: string;
  updatedAt: string;
  language: Language;
}

export interface BlogContentProps {
  content: string;
  className?: string;
}

export interface RelatedArticlesProps {
  currentArticleId: number;
  language: Language;
  maxResults?: number;
}
