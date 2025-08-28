"use client";

import React, { useState } from "react";
import { Language } from "@/context/LanguageContext";
import { t } from "@/utils/serverTranslations";
import Link from "next/link";
import Image from "next/image";
import "@/assets/styles/projectDetailResponsive.css";

type ProjectDetailProps = {
  project: any;
  language: Language;
};

export default function ProjectDetailPage({
  project,
  language,
}: ProjectDetailProps) {
  const projectData = project.data;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!projectData) {
    return <div>Project not found</div>;
  }

  // Helper function to convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split("/").pop()?.split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <main className="min-h-screen bg-[var(--color-black)] text-[var(--color-secondary)]">
      {/* Container with margins and top spacing */}
      <div className="mx-[90px] pt-[70px] project-detail-container">
        {/* Split Layout */}
        <div className="flex gap-[120px] mt-[80px] pb-[120px] items-center project-detail-layout">
          {/* Left Side - Project Info */}
          <div className="flex-1 flex flex-col project-detail-info">
            {/* Back Link */}
            <Link
              href={`/?lang=${language.toLowerCase()}#projects`}
              className="text-[var(--color-accent)] hover:underline mb-[32px] inline-block"
            >
              ← {t(language, "projects.backToProjects")}
            </Link>

            <div className="flex items-center justify-center flex-1">
              <div className="max-h-[400px] overflow-y-auto pr-[20px] scrollbar-custom project-detail-info-content">
                {/* Project Title */}
                <h1 className="text-[24px] font-bold mb-[20px] uppercase project-detail-title">
                  {projectData.Title}
                </h1>

                {/* Project Description */}
                {projectData.Description && (
                  <div className="mb-[32px]">
                    <div className="text-[16px] leading-relaxed project-detail-description">
                      {projectData.Description.split("\n").map(
                        (paragraph: string, index: number) => (
                          <p key={index} className="mb-[16px]">
                            {paragraph}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* Project Features */}
                {projectData.features && projectData.features.length > 0 && (
                  <div className="mb-[32px]">
                    <h2 className="text-[16px] font-semibold mb-[16px] uppercase project-detail-section-title">
                      {t(language, "projects.features")}
                    </h2>
                    <div className="text-[16px] project-detail-features">
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
                  <div className="mb-[32px]">
                    <h2 className="text-[16px] font-semibold mb-[16px] uppercase project-detail-section-title">
                      {t(language, "projects.technologies")}
                    </h2>
                    <div className="text-[16px] project-detail-stacks">
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

                {/* Project Links */}
                <div className="flex gap-[16px] flex-wrap">
                  {projectData.websiteUrl && (
                    <a
                      href={projectData.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[var(--color-accent)] text-[var(--color-black)] px-[24px] py-[12px] rounded-lg font-medium hover:opacity-90 transition-opacity project-detail-button"
                    >
                      {t(language, "projects.viewLive")}
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery - Only show if no video and has images */}
            {!projectData.videoUrl &&
              projectData.Images &&
              projectData.Images.length > 0 && (
                <div className="flex gap-[12px] mt-[32px] flex-wrap project-detail-thumbnail-gallery">
                  {projectData.Images.map((image: any, index: number) => (
                    <div
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`${
                        activeImageIndex === index
                          ? "w-[90px] active"
                          : "w-[72px]"
                      } h-[50px] cursor-pointer rounded-lg overflow-hidden border-2 transition-all project-detail-thumbnail ${
                        activeImageIndex === index
                          ? "border-[var(--color-accent)]"
                          : "border-transparent hover:border-[var(--color-accent)] hover:opacity-80"
                      }`}
                    >
                      <Image
                        src={image.url}
                        alt={`${projectData.Title} thumbnail ${index + 1}`}
                        width={activeImageIndex === index ? 90 : 72}
                        height={activeImageIndex === index ? 65 : 50}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                  ))}
                </div>
              )}
          </div>

          {/* Right Side - YouTube Video or Image */}
          <div className="flex-1 project-detail-media">
            {projectData.videoUrl ? (
              <div className="w-full aspect-square">
                <iframe
                  src={getYouTubeEmbedUrl(projectData.videoUrl)}
                  title={projectData.Title}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            ) : (
              projectData.Images &&
              projectData.Images.length > 0 && (
                <div className="w-full aspect-[3/4] overflow-y-auto scrollbar-custom rounded-lg">
                  <Image
                    src={projectData.Images[activeImageIndex].url}
                    alt={projectData.Title}
                    width={projectData.Images[activeImageIndex].width}
                    height={projectData.Images[activeImageIndex].height}
                    className="w-full h-auto object-top rounded-lg"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
