"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import type { ArticlePageProps } from "@/utils/BlogTypes";
import { estimateReadingTime, getBlogTranslations } from "@/utils/blogUtils";
import "@/assets/styles/articleContent.css";

interface TocItem {
  id: string;
  title: string;
}

export default function ArticleDetailClient({
  article,
  language,
}: ArticlePageProps) {
  const [mounted, setMounted] = useState(false);
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [parsedContent, setParsedContent] = useState<string>("");
  const { data: articleData } = article;
  const readingTime = estimateReadingTime(articleData.content);
  const translations = getBlogTranslations(language);

  const generateSlug = (text: string): string => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    setMounted(true);

    if (articleData.content) {
      const parseContentEffect = (content: string) => {
        if (!content) return { html: "", toc: [] };

        let processedContent = content;
        const toc: TocItem[] = [];

        processedContent = processedContent.replace(
          /\*\*([^*]+?)\*\*/g,
          "<strong>$1</strong>"
        );

        processedContent = processedContent.replace(
          /_([^_<>\n]+?)_/g,
          "<em>$1</em>"
        );

        processedContent = processedContent.replace(
          /\*([^*<>\n]+?)\*/g,
          "<em>$1</em>"
        );

        processedContent = processedContent.replace(
          /~~([^~]+?)~~/g,
          "<del>$1</del>"
        );

        const paragraphs = processedContent
          .split(/\n\s*\n/)
          .filter((p) => p.trim());

        const result = paragraphs
          .map((p) => {
            const content = p.trim().replace(/\n/g, "<br>");

            const headerMatch = content.match(/^(#{1,6}) (.+)/);
            if (headerMatch) {
              const level = headerMatch[1].length;
              const text = headerMatch[2];

              const slug = generateSlug(text);
              const id = `heading-${slug}`;

              if (level === 2) {
                toc.push({ id, title: text });
              }

              let fontSize;
              switch (level) {
                case 1:
                  fontSize = 2.5;
                  break;
                case 2:
                  fontSize = 2.0;
                  break;
                case 3:
                  fontSize = 1.6;
                  break;
                case 4:
                  fontSize = 1.4;
                  break;
                case 5:
                  fontSize = 1.25;
                  break;
                case 6:
                  fontSize = 1.1;
                  break;
                default:
                  fontSize = 1.1;
              }

              const marginTop =
                level === 1 ? "40px" : level === 2 ? "32px" : "24px";
              const marginBottom = level <= 2 ? "20px" : "16px";
              return `<h${level} id="${id}" style="font-size: ${fontSize}rem; font-weight: 600; margin: ${marginTop} 0 ${marginBottom} 0; color: var(--color-secondary);">${text}</h${level}>`;
            }

            return `<p>${content}</p>`;
          })
          .join("");

        return { html: result, toc };
      };

      const { html, toc } = parseContentEffect(articleData.content);
      setParsedContent(html);
      setTocItems(toc);
    }
  }, [articleData.content]);

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
      <div
        className="relative"
        style={{ maxWidth: "1400px", margin: "0 auto" }}
      >
        {tocItems.length > 0 && (
          <div
            className="toc-sidebar fixed"
            style={{
              width: "250px",
              left: "32px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: "10",
            }}
          >
            <div
              style={{
                maxHeight: "70vh",
                overflowY: "auto",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(8px)",
                borderRadius: "8px",
                padding: "24px",
                border: "none",
              }}
            >
              <h2
                className="text-[var(--color-secondary)] font-semibold"
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "16px",
                }}
              >
                {translations.tableOfContents}
              </h2>
              <nav>
                <ul>
                  {tocItems.map((item, index) => (
                    <li key={index} style={{ marginBottom: "12px" }}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-[var(--color-secondary)] hover:text-white transition-colors"
                        style={{
                          fontSize: "0.85rem",
                          lineHeight: "1.4",
                          textAlign: "left",
                          width: "100%",
                          opacity: "0.8",
                          border: "none",
                          background: "none",
                          cursor: "pointer",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.opacity = "1")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.opacity = "0.8")
                        }
                      >
                        {item.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}

        <style jsx>{`
          .toc-sidebar {
            display: block;
          }

          @media (max-width: 1023px) {
            .toc-sidebar {
              display: none;
            }
          }
        `}</style>

        <div className="w-full">
          <div style={{ padding: "24px 24px 0 24px" }}>
            <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
              <button
                onClick={() => window.history.back()}
                className="mt-[150px] flex items-center text-[var(--color-secondary)] hover:text-white transition-colors"
                style={{ fontSize: "0.875rem", opacity: "0.9" }}
              >
                <span style={{ marginRight: "8px" }}>←</span>
                {translations.backToBlog}
              </button>
            </div>
          </div>

          <div style={{ padding: "64px 24px 48px 24px" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
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
                  __html: parsedContent,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
