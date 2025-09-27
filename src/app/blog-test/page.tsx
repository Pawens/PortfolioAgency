import BlogTestComponent from "@/components/Pages/BlogTestPage";
import StickyHeader from "@/components/Organisms/client/StickyHeader";
import { LanguageProvider } from "@/context/LanguageContext";
import { getLanguageFromSearchParams } from "@/utils/serverTranslations";
import type { Metadata } from "next";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export const metadata: Metadata = {
  title: "Blog Test Page - Pawens",
  description: "Test page for blog components integration",
  robots: { index: false, follow: false },
};

export default async function BlogTestPage({ searchParams }: Props) {
  const language = getLanguageFromSearchParams(searchParams);

  return (
    <LanguageProvider initialLanguage={language}>
      <StickyHeader />
      <main className="pt-24">
        <BlogTestComponent language={language} />
      </main>
    </LanguageProvider>
  );
}
