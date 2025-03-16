"use client";

import React, { useState, useMemo } from "react";
import { useParams } from "next/navigation";
import useSWR from "swr";
import Image from "next/image";
import ReactPlayer from "react-player/youtube";
import { CustomButton } from "@/components/CustomButton/CustomButton";
import { useLanguage } from "@/context/LanguageContext";
import { getProjectData } from "@/utils/StrapiCallsUtils";
import ClipLoader from "react-spinners/ClipLoader";
import Chip from "@mui/material/Chip";
import "./projectSinglePage.css";
import Link from "next/link";
import translations from "@/translation";

interface ImageData {
  id: number;
  url: string;
}

interface Feature {
  id: number;
  Name: string;
}

interface Stack {
  id: number;
  Name: string;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const documentId = params?.id;
  const { selectedLanguage } = useLanguage();

  const [activeImage, setActiveImage] = useState<string | undefined>();
  const [isImageLoading, setIsImageLoading] = useState<boolean>(false);

  const fetchProject = useMemo(
    () => async () => {
      if (!documentId) return null;
      console.log(
        `✅ Fetching project details for ${documentId} in ${selectedLanguage}`
      );
      const response = await getProjectData(
        Array.isArray(documentId) ? documentId[0] : documentId,
        selectedLanguage
      );
      return response.data || null;
    },
    [documentId, selectedLanguage]
  );

  const {
    data: project,
    error,
    isLoading,
  } = useSWR(
    documentId ? [`project`, documentId, selectedLanguage] : null,
    fetchProject,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  if (error)
    return <div className="error">❌ Failed to load project. Try again.</div>;

  if (isLoading)
    return (
      <div className="loading-container">
        <ClipLoader color="#fff" size={60} />
      </div>
    );

  if (!project)
    return (
      <div className="error">❌ No project found. Please check the ID.</div>
    );

  const defaultImage =
    project.Images?.[0]?.url ||
    "https://res.cloudinary.com/dslwin8c8/image/upload/v1741967934/placeholder_ghychn.webp";

  const handleImageClick = (imgUrl: string) => {
    setIsImageLoading(true);
    setActiveImage(imgUrl);
  };

  return (
    <div className="project-container">
      <div className="back-button">
        <Link href="/#projects" prefetch>
          <CustomButton value="← Back" variant="small" />
        </Link>
      </div>

      <div className="project-content">
        {/* Left: Project Info */}
        <section className="project-info">
          <h1>{project.Title}</h1>
          <p style={{ paddingRight: "64px" }}>
            {project.Description || "No description available."}
          </p>

          {project.features?.length > 0 && (
            <div className="features">
              <h3>{translations[selectedLanguage].projects.features}</h3>
              <ul>
                {project.features.map((feat: Feature) => (
                  <li key={feat.id}>{feat.Name}</li>
                ))}
              </ul>
            </div>
          )}

          {project.stacks?.length > 0 && (
            <div className="tech-stack">
              <h3>{translations[selectedLanguage].projects.stack}</h3>
              <div className="chip-container">
                {project.stacks.map((tech: Stack) => (
                  <Chip key={tech.id} label={tech.Name} className="chip" />
                ))}
              </div>
            </div>
          )}

          {!project.videoUrl && project.Images?.length > 1 && (
            <div className="image-gallery">
              {project.Images.map((img: ImageData) => (
                <Image
                  key={img.id}
                  src={img.url}
                  alt={project.Title}
                  width={120}
                  height={80}
                  className="gallery-thumbnail"
                  onClick={() => handleImageClick(img.url)}
                />
              ))}
            </div>
          )}

          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomButton value="Visit Website" variant="small" />
            </a>
          )}
        </section>

        {/* Right: Media (Video or Image Gallery) */}
        <section className="project-media">
          {project.videoUrl ? (
            <ReactPlayer
              url={project.videoUrl}
              controls
              width="100%"
              height="100%"
            />
          ) : (
            <div className="image-scroll-container">
              {isImageLoading && (
                <div className="image-loading-overlay">
                  <ClipLoader color="#fff" size={60} />
                </div>
              )}
              <Image
                src={activeImage || defaultImage}
                alt={project.Title}
                width={800}
                height={500}
                className={`project-main-image ${
                  isImageLoading ? "hidden" : "visible"
                }`}
                onLoad={() => setIsImageLoading(false)}
              />
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
