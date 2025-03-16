"use client";

import dynamic from "next/dynamic";

const LanguageSelector = dynamic(
  () => import("@/components/LanguageSelector/LanguageSelector"),
  { ssr: false }
);

export default function DynamicLanguageSelector() {
  return <LanguageSelector />;
}
