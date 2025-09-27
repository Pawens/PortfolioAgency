// Blog Integration Test Component
// This component can be used to validate all blog components are working correctly

import BlogCard from "@/components/Atoms/server/BlogCard";
import BlogContent from "@/components/Atoms/server/BlogContent";
import BlogMeta from "@/components/Atoms/server/BlogMeta";
import BackToBlogButton from "@/components/Atoms/server/BackToBlogButton";
import type { Language } from "@/utils/serverTranslations";
import type { BlogArticle } from "@/utils/BlogTypes";

// Mock article data for testing
const mockArticle: BlogArticle = {
  id: 1,
  documentId: "test-article-123",
  title: "Test Article: Building Modern Web Applications",
  content: `
    <p>This is a test article to validate our blog components are working correctly.</p>
    <h2>Key Features</h2>
    <ul>
      <li>React components with TypeScript</li>
      <li>Next.js 14 with App Router</li>
      <li>Tailwind CSS for styling</li>
      <li>Strapi CMS integration</li>
    </ul>
    <blockquote>
      "The best way to test components is to see them in action!"
    </blockquote>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  `,
  image: {
    id: 1,
    name: "test-image.jpg",
    url: "/backgroundCard.webp",
    formats: {
      thumbnail: { url: "/backgroundCard.webp" },
      small: { url: "/backgroundCard.webp" },
      medium: { url: "/backgroundCard.webp" },
      large: { url: "/backgroundCard.webp" },
    },
  },
  createdAt: "2025-09-27T10:00:00.000Z",
  updatedAt: "2025-09-27T12:00:00.000Z",
  publishedAt: "2025-09-27T10:00:00.000Z",
  locale: "fr",
};

interface BlogTestComponentProps {
  language: Language;
}

export default function BlogTestComponent({
  language,
}: BlogTestComponentProps) {
  return (
    <div className="blog-test-container max-w-6xl mx-auto p-8 space-y-12">
      <div className="test-section">
        <h1 className="text-3xl font-bold mb-6">Blog Components Test Page</h1>
        <p className="text-gray-600 mb-8">
          This page tests all blog components to ensure they work correctly.
          Language: <strong>{language}</strong>
        </p>
      </div>

      {/* Test BackToBlogButton */}
      <div className="test-section border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Back to Blog Button</h2>
        <BackToBlogButton language={language} />
      </div>

      {/* Test BlogMeta */}
      <div className="test-section border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Blog Meta Component</h2>
        <BlogMeta
          publishedAt={mockArticle.publishedAt}
          updatedAt={mockArticle.updatedAt}
          language={language}
        />
      </div>

      {/* Test BlogCard variants */}
      <div className="test-section border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Blog Cards (Server)</h2>
        <div className="grid gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Default Variant</h3>
            <BlogCard
              article={mockArticle}
              language={language}
              variant="default"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Featured Variant</h3>
            <BlogCard
              article={mockArticle}
              language={language}
              variant="featured"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Compact Variant</h3>
            <BlogCard
              article={mockArticle}
              language={language}
              variant="compact"
            />
          </div>
        </div>
      </div>

      {/* Test BlogContent */}
      <div className="test-section border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Blog Content Rendering</h2>
        <BlogContent content={mockArticle.content} />
      </div>

      {/* CSS Classes Test */}
      <div className="test-section border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">CSS Classes Test</h2>
        <div className="space-y-4">
          <div className="line-clamp-2 bg-gray-100 p-3 rounded">
            This text should be clamped to 2 lines. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </div>
          <div className="line-clamp-3 bg-gray-100 p-3 rounded">
            This text should be clamped to 3 lines. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit.
          </div>
        </div>
      </div>

      {/* Animation Test */}
      <div className="test-section border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Animation Classes Test</h2>
        <div className="space-y-4">
          <div className="animate-blog-fade-in-up bg-blue-100 p-3 rounded">
            Fade in up animation
          </div>
          <div className="animate-blog-fade-in-down bg-green-100 p-3 rounded">
            Fade in down animation
          </div>
          <div className="hover-lift bg-purple-100 p-3 rounded cursor-pointer">
            Hover to see lift effect
          </div>
        </div>
      </div>

      {/* Responsive Test */}
      <div className="test-section border rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Responsive Test</h2>
        <div className="regular-articles grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="bg-gray-100 p-4 rounded">
              Card {i + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
