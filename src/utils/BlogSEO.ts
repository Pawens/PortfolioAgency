import type { Metadata } from "next";
import type { Language } from "./serverTranslations";
import type { BlogArticle } from "./BlogTypes";

/**
 * Generate comprehensive SEO metadata for blog pages
 */
export function generateBlogSEO(
  language: Language,
  options: {
    title?: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
    noindex?: boolean;
  } = {}
): Metadata {
  const isEnglish = language === "En";
  const locale = language === "Fr" ? "fr_FR" : "en_US";

  const defaultTitle = isEnglish
    ? "Blog - Pawens | Web Development & Design Articles"
    : "Blog - Pawens | Articles Développement Web & Design";

  const defaultDescription = isEnglish
    ? "Discover our latest articles about web development, design trends, and technology insights. Expert tips and tutorials for modern web development."
    : "Découvrez nos derniers articles sur le développement web, les tendances design et les insights technologiques. Conseils d'experts et tutoriels pour le développement web moderne.";

  const defaultKeywords = isEnglish
    ? [
        "web development",
        "web design",
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "CSS",
        "HTML",
        "UI/UX",
        "frontend development",
        "backend development",
        "responsive design",
        "SEO",
        "performance optimization",
      ]
    : [
        "développement web",
        "design web",
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "CSS",
        "HTML",
        "UI/UX",
        "développement frontend",
        "développement backend",
        "design responsive",
        "SEO",
        "optimisation performance",
      ];

  return {
    title: options.title || defaultTitle,
    description: options.description || defaultDescription,
    keywords: options.keywords || defaultKeywords,
    authors: [{ name: "Pawens", url: "https://pawens.com" }],
    creator: "Pawens",
    publisher: "Pawens",
    robots: {
      index: !options.noindex,
      follow: true,
      googleBot: {
        index: !options.noindex,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: options.canonical,
      languages: {
        fr: "/blog",
        en: "/blog?lang=en",
      },
    },
    openGraph: {
      type: "website",
      locale,
      title: options.title || defaultTitle,
      description: options.description || defaultDescription,
      siteName: "Pawens",
      url: options.canonical || "https://pawens.com/blog",
      images: [
        {
          url: "https://pawens.com/openGraphImagePawens.webp",
          width: 1200,
          height: 630,
          alt: isEnglish ? "Pawens Blog" : "Blog Pawens",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@pawens",
      creator: "@pawens",
      title: options.title || defaultTitle,
      description: options.description || defaultDescription,
      images: ["https://pawens.com/openGraphImagePawens.webp"],
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    category: isEnglish ? "Technology" : "Technologie",
  };
}

/**
 * Generate SEO metadata for individual blog articles
 */
export function generateArticleSEO(
  article: BlogArticle,
  language: Language,
  canonical?: string
): Metadata {
  const isEnglish = language === "En";
  const locale = language === "Fr" ? "fr_FR" : "en_US";

  const title = `${article.title} - Pawens Blog`;
  const description = stripHtmlTags(article.content).substring(0, 160);
  const imageUrl = article.image
    ? `${process.env.NEXT_PUBLIC_BASE_URL || "https://pawens.com"}${
        article.image.url
      }`
    : "https://pawens.com/openGraphImagePawens.webp";

  // Extract keywords from content (simple approach)
  const contentWords = stripHtmlTags(article.content).toLowerCase();
  const techKeywords = isEnglish
    ? [
        "react",
        "nextjs",
        "typescript",
        "javascript",
        "css",
        "html",
        "web development",
        "design",
      ]
    : [
        "react",
        "nextjs",
        "typescript",
        "javascript",
        "css",
        "html",
        "développement web",
        "design",
      ];

  const keywords = techKeywords.filter((keyword) =>
    contentWords.includes(keyword.toLowerCase())
  );

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: [{ name: "Pawens", url: "https://pawens.com" }],
    creator: "Pawens",
    publisher: "Pawens",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical,
      languages: {
        fr: `/blog/${article.documentId}`,
        en: `/blog/${article.documentId}?lang=en`,
      },
    },
    openGraph: {
      type: "article",
      locale,
      title: article.title,
      description,
      siteName: "Pawens",
      url: canonical || `https://pawens.com/blog/${article.documentId}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: ["Pawens"],
      section: isEnglish ? "Technology" : "Technologie",
    },
    twitter: {
      card: "summary_large_image",
      site: "@pawens",
      creator: "@pawens",
      title: article.title,
      description,
      images: [imageUrl],
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
    },
    category: isEnglish ? "Technology" : "Technologie",
  };
}

/**
 * Generate JSON-LD structured data for blog articles
 */
export function generateArticleStructuredData(
  article: BlogArticle,
  language: Language
): string {
  const isEnglish = language === "En";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pawens.com";
  const articleUrl = `${baseUrl}/blog/${article.documentId}`;
  const imageUrl = article.image
    ? `${baseUrl}${article.image.url}`
    : `${baseUrl}/openGraphImagePawens.webp`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: stripHtmlTags(article.content).substring(0, 160),
    image: {
      "@type": "ImageObject",
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Organization",
      name: "Pawens",
      url: "https://pawens.com",
      logo: {
        "@type": "ImageObject",
        url: "https://pawens.com/PawensLogo.png",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "Pawens",
      url: "https://pawens.com",
      logo: {
        "@type": "ImageObject",
        url: "https://pawens.com/PawensLogo.png",
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    articleSection: isEnglish ? "Technology" : "Technologie",
    inLanguage: language === "Fr" ? "fr-FR" : "en-US",
    url: articleUrl,
  };

  return JSON.stringify(structuredData);
}

/**
 * Generate JSON-LD structured data for blog listing page
 */
export function generateBlogStructuredData(
  articles: BlogArticle[],
  language: Language
): string {
  const isEnglish = language === "En";
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pawens.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: isEnglish ? "Pawens Blog" : "Blog Pawens",
    description: isEnglish
      ? "Web development and design articles by Pawens"
      : "Articles sur le développement web et le design par Pawens",
    url: `${baseUrl}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Pawens",
      url: "https://pawens.com",
      logo: {
        "@type": "ImageObject",
        url: "https://pawens.com/PawensLogo.png",
      },
    },
    blogPost: articles.slice(0, 10).map((article) => ({
      "@type": "BlogPosting",
      headline: article.title,
      description: stripHtmlTags(article.content).substring(0, 160),
      url: `${baseUrl}/blog/${article.documentId}`,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      author: {
        "@type": "Organization",
        name: "Pawens",
      },
    })),
    inLanguage: language === "Fr" ? "fr-FR" : "en-US",
  };

  return JSON.stringify(structuredData);
}

/**
 * Helper function to strip HTML tags
 */
function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}
