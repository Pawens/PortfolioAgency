"use client";

import { useState, useEffect } from "react";
import ArticleDetailClient from "@/components/Organisms/client/ArticleDetailClient";
import type { ArticlePageProps } from "@/utils/BlogTypes";
import "@/assets/styles/animation.css";
import "@/assets/styles/blogContent.css";
import "@/assets/styles/blogResponsive.css";
import "@/assets/styles/blogAnimations.css";

export default function ArticlePage({ article, language }: ArticlePageProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="article-page min-h-screen bg-gradient-to-b from-[#193345] to-[var(--color-black)]"
        style={{
          backgroundImage: "url('/backgroundDarkToLight.webp')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        <div
          className="animate-pulse"
          style={{
            paddingTop: "64px",
            paddingBottom: "64px",
            paddingLeft: "24px",
            paddingRight: "24px",
            maxWidth: "896px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            className="bg-gray-600 rounded"
            style={{ height: "32px", marginBottom: "32px" }}
          ></div>
          <div
            className="bg-gray-600 rounded"
            style={{ height: "48px", marginBottom: "24px" }}
          ></div>
          <div
            className="bg-gray-600 rounded"
            style={{ height: "16px", marginBottom: "8px" }}
          ></div>
          <div
            className="bg-gray-600 rounded"
            style={{ height: "16px", marginBottom: "32px" }}
          ></div>
          <div
            className="bg-gray-600 rounded"
            style={{ height: "256px" }}
          ></div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="article-page min-h-screen bg-gradient-to-b from-[#193345] to-[var(--color-black)]"
      style={{
        backgroundImage: "url('/backgroundDarkToLight.webp')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <ArticleDetailClient article={article} language={language} />
    </div>
  );
}
