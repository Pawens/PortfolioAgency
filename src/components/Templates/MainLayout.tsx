"use client";

import { useState } from "react";
import GlobalPreloader from "@/components/Organisms/GlobalPreloader";

interface MainLayoutProps {
  children: React.ReactNode;
  criticalImages?: string[];
  allImages?: string[];
  projectData?: any[];
  teamMembers?: any[];
}

export default function MainLayout({
  children,
  criticalImages = [],
  allImages = [],
  projectData = [],
  teamMembers = [],
}: MainLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadComplete = () => {
    setIsLoading(false);
    // Small delay for smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  // Combine all images for preloading
  const allImagesToLoad = [...criticalImages, ...allImages];

  return (
    <>
      {isLoading && (
        <GlobalPreloader
          onLoadComplete={handleLoadComplete}
          allImages={allImagesToLoad}
          projectData={projectData}
          teamMembers={teamMembers}
        />
      )}

      <div
        className={`transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
