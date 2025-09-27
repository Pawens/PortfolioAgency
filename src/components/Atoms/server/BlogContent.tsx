import type { BlogContentProps } from "@/utils/BlogTypes";

export default function BlogContent({
  content,
  className = "",
}: BlogContentProps) {
  return (
    <div
      className={`blog-content prose prose-lg max-w-none 
        prose-headings:font-bold 
        prose-h1:text-3xl prose-h1:mb-6 
        prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8
        prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6
        prose-p:mb-4 prose-p:leading-relaxed
        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
        prose-strong:font-bold prose-strong:text-gray-900
        prose-em:italic
        prose-ul:mb-4 prose-ol:mb-4
        prose-li:mb-1
        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-4 prose-blockquote:italic
        prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg
        prose-img:rounded-lg prose-img:shadow-md
        ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
