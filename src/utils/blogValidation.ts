/**
 * Blog Integration Test
 * Quick validation script to check if blog components are working
 */

import fs from "fs";
import path from "path";

const PROJECT_ROOT = process.cwd();
const SRC_DIR = path.join(PROJECT_ROOT, "src");

export async function validateBlogIntegration() {
  const results: {
    success: string[];
    warnings: string[];
    errors: string[];
  } = {
    success: [],
    warnings: [],
    errors: [],
  };

  // Check if key blog files exist
  const keyFiles = [
    "utils/BlogTypes.ts",
    "utils/BlogUtils.ts",
    "components/Pages/BlogPage.tsx",
    "app/blog/page.tsx",
    "app/blog/[slug]/page.tsx",
  ];

  keyFiles.forEach((file) => {
    const fullPath = path.join(SRC_DIR, file);
    if (fs.existsSync(fullPath)) {
      results.success.push(`✅ ${file}`);
    } else {
      results.errors.push(`❌ Missing: ${file}`);
    }
  });

  return results;
}

if (typeof window === "undefined") {
  // Only run in Node.js environment
  validateBlogIntegration().then((results) => {
    console.log("Blog Integration Status:");
    console.log("Success:", results.success.length);
    console.log("Warnings:", results.warnings.length);
    console.log("Errors:", results.errors.length);
  });
}
