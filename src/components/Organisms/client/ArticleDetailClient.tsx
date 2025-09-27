"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { ArticlePageProps } from "@/utils/BlogTypes";
import { estimateReadingTime, getBlogTranslations } from "@/utils/blogUtils";
import "@/assets/styles/articleContent.css";

export default function ArticleDetailClient({
  article,
  language,
}: ArticlePageProps) {
  const [mounted, setMounted] = useState(false);
  const { data: articleData } = article;
  const readingTime = estimateReadingTime(articleData.content);
  const translations = getBlogTranslations(language);

  const parseContent = (content: string) => {
    if (!content) return "";

    const step1 = content.replace(/\*\*([^*]+?)\*\*/g, "<strong>$1</strong>");

    const step2 = step1.replace(/\*([^*<>\n]+?)\*/g, "<em>$1</em>");

    const paragraphs = step2.split(/\n\s*\n/).filter((p) => p.trim());

    const result = paragraphs
      .map((p) => `<p>${p.trim().replace(/\n/g, "<br>")}</p>`)
      .join("");

    return result;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="min-h-screen bg-gradient-to-b from-[#193345] to-[var(--color-black)]"
        style={{
          backgroundColor: "var(--color-primary)",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="animate-pulse" style={{ padding: "48px 24px" }}>
          <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
            <div
              className="bg-gray-600 rounded-2xl"
              style={{ height: "200px" }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#193345] to-[var(--color-black)]"
      style={{
        backgroundColor: "var(--color-primary)",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Bouton retour en haut */}
      <div style={{ padding: "24px 24px 0 24px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-[var(--color-secondary)] hover:text-white transition-colors"
            style={{ fontSize: "0.875rem", opacity: "0.9" }}
          >
            <span style={{ marginRight: "8px" }}>←</span>
            {translations.backToBlog}
          </button>
        </div>
      </div>

      {/* Header Style SEO.fr - Ultra Clean */}
      <div style={{ padding: "64px 24px 48px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {/* Titre principal - Style éditorial */}
          <h1
            className="font-bold text-[var(--color-secondary)] leading-tight text-center"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              marginBottom: "32px",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
            }}
          >
            {articleData.title}
          </h1>

          {/* Métadonnées minimalistes - Style journal */}
          <div
            className="text-center"
            style={{
              fontSize: "0.95rem",
              color: "var(--color-secondary)",
              opacity: "0.75",
              marginBottom: articleData.image ? "48px" : "64px",
              fontWeight: "300",
            }}
          >
            <span>
              {new Date(articleData.publishedAt).toLocaleDateString(
                language === "Fr" ? "fr-FR" : "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}
            </span>
            <span style={{ margin: "0 16px", opacity: "0.5" }}>•</span>
            <span>
              {readingTime} {translations.readingTime}
            </span>
          </div>

          {/* Image éditoriale - Pas trop grande */}
          {articleData.image && (
            <div
              className="relative rounded-lg overflow-hidden"
              style={{
                height: "320px",
                marginBottom: "24px",
                boxShadow: "0 4px 24px rgba(0, 0, 0, 0.15)",
              }}
            >
              <Image
                src={articleData.image.url}
                alt={articleData.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>

      {/* Contenu de l'article - Style éditorial */}
      <div style={{ padding: "0 24px 64px 24px" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div
            className="article-content text-[var(--color-secondary)]"
            style={{
              fontSize: "1.1rem",
              lineHeight: "1.75",
              fontWeight: "300",
              letterSpacing: "0.01em",
            }}
            dangerouslySetInnerHTML={{
              __html: parseContent(articleData.content || ""),
            }}
          />
        </div>
      </div>
    </div>
  );
}
