"use client";

import "@/assets/styles/animation.css";
import "@/assets/styles/projectDetailResponsive.css";
import { Language } from "@/context/LanguageContext";
import { t } from "@/utils/serverTranslations";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ArrowPawens from "../../assets/icons/ArrowPawens.svg";

type ProjectDetailProps = {
  project: any;
  language: Language;
};

export default function ProjectDetailPage({
  project,
  language,
}: ProjectDetailProps) {
  const projectData = project.data;
  // Index of image currently visible to user
  const [displayedImageIndex, setDisplayedImageIndex] = useState(0);
  // Index of image currently being loaded (Next.js optimized request), null if none
  const [pendingImageIndex, setPendingImageIndex] = useState<number | null>(
    null
  );
  // Whether we're in a transition waiting for the new optimized image
  const [isImageLoading, setIsImageLoading] = useState(false);

  const handleImageChange = (index: number) => {
    if (index === displayedImageIndex || index === pendingImageIndex) return;
    if (!projectData?.Images?.[index]) return;
    // Start transition: keep current image visible, start loading next
    setPendingImageIndex(index);
    setIsImageLoading(true);
  };

  if (!projectData) {
    return <div>Project not found</div>;
  }

  // Helper function to convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split("/").pop()?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <main className="bg-[var(--color-black)] text-[var(--color-secondary)] min-h-screen">
      {/* Container with margins and top spacing */}
      <div className="px-[64px] pt-[148px] h-full project-detail-container">
        {/* Split Layout */}
        <div className="flex gap-[124px] h-full project-detail-layout">
          {/* Left Side - Project Info */}
          <div className="w-[50%] h-full flex flex-col project-detail-info">
            {/* Back Link */}

            <div className="flex items-center gap-[8px] pb-[4px] project-back-link-container z-51">
              <ArrowPawens
                className={`project-back-link-arrow flex items-center justify-center fill-current`}
              />
              <Link
                href={`/?lang=${language.toLowerCase()}#projects`}
                className="text-[var(--color-accent)] hover:underline project-back-link w-fit"
              >
                {t(language, "projects.backToProjects")}
              </Link>
            </div>

            <div className="flex flex-col flex-1 justify-center pt-[28px]">
              <div className="scrollbar-custom project-detail-info-content flex flex-col justify-between">
                <div>
                  <div className="flex flex-col gap-[24px]">
                    {/* Project Title */}
                    <h2 className="text-[20px] font-bold uppercase project-detail-title font-[600]">
                      {projectData.Title}
                    </h2>

                    {/* Project Description */}
                    {projectData.Description && (
                      <div>
                        <div className="flex flex-col gap-[16px] text-[16px] leading-relaxed project-detail-description">
                          {projectData.Description.split("\n").map(
                            (paragraph: string, index: number) => (
                              <p className="opacity-75" key={index}>
                                {paragraph}
                              </p>
                            )
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Project Features */}
                  {projectData.features && projectData.features.length > 0 && (
                    <div className="flex flex-col gap-[24px] pt-[32px]">
                      <h2 className="text-[20px] font-semibold uppercase project-detail-section-title font-[600]">
                        {t(language, "projects.features")}
                      </h2>
                      <div className="text-[16px] project-detail-features opacity-75">
                        {projectData.features.map(
                          (feature: any, index: number) => (
                            <span key={index}>
                              {feature.Name}
                              {index < projectData.features.length - 1 && (
                                <span className="text-[var(--color-secondary)]">
                                  ,{" "}
                                </span>
                              )}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}

                  {/* Project Stacks */}
                  {projectData.stacks && projectData.stacks.length > 0 && (
                    <div className="flex flex-col gap-[24px] pt-[32px]">
                      <h2 className="text-[20px] font-semibold uppercase project-detail-section-title font-[600]">
                        {t(language, "projects.technologies")}
                      </h2>
                      <div className="text-[16px] project-detail-stacks opacity-75">
                        {projectData.stacks.map((stack: any, index: number) => (
                          <span key={index}>
                            {stack.Name}
                            {index < projectData.stacks.length - 1 && (
                              <span className="mx-[5px] text-[var(--color-accent)]">
                                |
                              </span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Links */}
                <div className="flex gap-[16px] py-[32px] flex-wrap w-full justify-end">
                  <div className="flex gap-[16px] justify-end items-center project-link-container">
                    <ArrowPawens
                      className={`project-link-arrow flex items-center justify-center fill-current`}
                    />
                    {projectData.websiteUrl && (
                      <a
                        href={projectData.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-[4px] rounded-lg font-medium hover:opacity-90 transition-opacity project-detail-button project-link-text"
                      >
                        {t(language, "projects.viewLive")}
                      </a>
                    )}
                  </div>
                </div>

                {/* Thumbnail Gallery - Only show if no video and has images */}
                {!projectData.videoUrl &&
                  projectData.Images &&
                  projectData.Images.length > 0 && (
                    <div className="flex gap-[12px] flex-wrap project-detail-thumbnail-gallery">
                      {projectData.Images.map((image: any, index: number) => {
                        const isActive = index === displayedImageIndex;
                        const isPending = index === pendingImageIndex;
                        return (
                          <div
                            key={index}
                            onClick={() => handleImageChange(index)}
                            className={`${
                              isActive || isPending
                                ? "w-[90px] active"
                                : "w-[72px]"
                            } h-[50px] cursor-pointer rounded-lg overflow-hidden border-2 transition-all project-detail-thumbnail ${
                              isActive || isPending
                                ? "border-[var(--color-accent)]"
                                : "border-transparent hover:border-[var(--color-accent)] hover:opacity-80"
                            }`}
                          >
                            <Image
                              src={image.url}
                              alt={`${projectData.Title} thumbnail ${
                                index + 1
                              }`}
                              width={isActive || isPending ? 90 : 72}
                              height={isActive || isPending ? 65 : 50}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                        );
                      })}
                    </div>
                  )}
              </div>
            </div>
          </div>

          {/* Right Side - YouTube Video or Image */}
          <div className="w-[50%] project-detail-media max-h-[calc(100vh-12px-148px)] pb-[12px]">
            {projectData.videoUrl ? (
              <div className="w-full h-full project-detail-video">
                <iframe
                  src={getYouTubeEmbedUrl(projectData.videoUrl)}
                  title={projectData.Title}
                  className="w-full h-full"
                  allowFullScreen
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            ) : (
              projectData.Images &&
              projectData.Images.length > 0 && (
                <div
                  className={`w-full h-full aspect-[3/4] overflow-y-auto scrollbar-custom relative flex ${
                    isImageLoading
                      ? "items-center justify-center"
                      : "items-start justify-start"
                  }`}
                >
                  {/* Currently displayed image */}
                  <Image
                    key={`displayed-${displayedImageIndex}`}
                    src={projectData.Images[displayedImageIndex].url}
                    alt={projectData.Title}
                    width={projectData.Images[displayedImageIndex].width}
                    height={projectData.Images[displayedImageIndex].height}
                    className={`w-full h-auto object-top transition-opacity duration-300 ${
                      pendingImageIndex !== null ? "opacity-60" : "opacity-100"
                    }`}
                    priority={displayedImageIndex === 0}
                  />

                  {/* Incoming image (hidden until loaded) */}
                  {pendingImageIndex !== null && (
                    <Image
                      key={`pending-${pendingImageIndex}`}
                      src={projectData.Images[pendingImageIndex].url}
                      alt={projectData.Title}
                      width={projectData.Images[pendingImageIndex].width}
                      height={projectData.Images[pendingImageIndex].height}
                      className="w-full h-auto object-top absolute top-0 left-0 opacity-0"
                      onLoadingComplete={() => {
                        // Swap now that Next optimized image fully loaded
                        setDisplayedImageIndex(pendingImageIndex);
                        setPendingImageIndex(null);
                        setIsImageLoading(false);
                      }}
                      // Ensure no pointer events before visible
                      priority={pendingImageIndex === 0}
                    />
                  )}

                  {isImageLoading && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-[16px] pointer-events-none bg-[var(--color-black)]/40">
                      <div className="w-[32px] h-[32px] border-2 border-[var(--color-secondary)] border-t-transparent rounded-full loader-spin" />
                      <span className="text-[var(--color-secondary)] text-[14px]">
                        Loading...
                      </span>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
