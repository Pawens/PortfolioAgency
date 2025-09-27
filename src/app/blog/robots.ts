import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pawens.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog/", "/blog/sitemap.xml"],
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/private/",
          "/*.json$",
          "/blog/*?*", // Disallow URL parameters except for lang
        ],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", "/blog/", "/blog/sitemap.xml"],
        disallow: ["/api/", "/_next/", "/admin/", "/private/", "/*.json$"],
      },
    ],
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/blog/sitemap.xml`],
    host: baseUrl,
  };
}
