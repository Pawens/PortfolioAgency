"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

interface BlogAnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

export function useBlogAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      const url =
        pathname +
        (searchParams.toString() ? `?${searchParams.toString()}` : "");

      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
        page_path: url,
        page_title: document.title,
      });

      // Track blog-specific events
      if (pathname.startsWith("/blog")) {
        trackEvent({
          action: "page_view",
          category: "blog",
          label: pathname,
        });
      }
    }
  }, [pathname, searchParams]);

  const trackEvent = ({
    action,
    category,
    label,
    value,
  }: BlogAnalyticsEvent) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
        custom_map: {
          custom_dimension_1: "blog_section",
        },
      });
    }
  };

  const trackArticleView = (articleId: string, title: string) => {
    trackEvent({
      action: "article_view",
      category: "blog",
      label: `${articleId}: ${title}`,
    });
  };

  const trackSearchUsage = (searchTerm: string, resultsCount: number) => {
    trackEvent({
      action: "blog_search",
      category: "blog",
      label: searchTerm,
      value: resultsCount,
    });
  };

  return {
    trackEvent,
    trackArticleView,
    trackSearchUsage,
  };
}
