"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import ArrowPawens from "@/assets/icons/ArrowPawens.svg";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/utils/serverTranslations";
import AnimatedButton from "@/components/Atoms/client/AnimatedButton";

type Project = {
  id: number;
  Title: string;
  Images: Array<{ url: string }>;
  Description?: string;
  features?: Array<{ Name: string }>;
  stacks?: Array<{ Name: string }>;
  videoUrl?: string;
};

interface ProjectPopupProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectPopup({
  project,
  isOpen,
  onClose,
}: ProjectPopupProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { language } = useLanguage();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousemove", handleMouseMove);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isOpen]);

  if (!project || !isOpen) {
    return null;
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handlePopupClick = () => {
    onClose();
  };

  const popupContent = (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
        backgroundColor: "var(--color-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "45px 90px",
        cursor: "none",
      }}
      onClick={handlePopupClick}
    >
      {/* Custom cursor - just the ArrowPawens icon */}
      <div
        style={{
          position: "fixed",
          left: mousePosition.x - 6,
          top: mousePosition.y - 6,
          zIndex: 1000000,
          pointerEvents: "none",
        }}
      >
        <ArrowPawens
          style={{
            fill: "var(--color-secondary)",
            width: "12px",
            height: "12px",
            transform: "rotate(90deg)",
          }}
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          gap: "125px",
        }}
      >
        {/* Left Part */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            paddingTop: "100px",
          }}
        >
          <h1
            style={{
              color: "var(--color-secondary)",
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "uppercase",
              lineHeight: "1.1",
              margin: 0,
            }}
          >
            {project.Title}
          </h1>

          {project.Description && (
            <p
              style={{
                color: "var(--color-secondary)",
                fontSize: "18px",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              {project.Description}
            </p>
          )}

          <div>
            <h3
              style={{
                color: "var(--color-secondary)",
                fontSize: "12px",
                fontWeight: "bold",
                textTransform: "uppercase",
                margin: "0 0 16px 0",
              }}
            >
              {t(language, "projects.features")}
            </h3>
            <p
              style={{
                color: "var(--color-secondary)",
                fontSize: "16px",
                lineHeight: "1.5",
                margin: 0,
              }}
            >
              {project.features && project.features.length > 0
                ? project.features.map((f) => f.Name).join(", ")
                : "No features available"}
            </p>
          </div>

          <div>
            <h3
              style={{
                color: "var(--color-secondary)",
                fontSize: "12px",
                fontWeight: "bold",
                textTransform: "uppercase",
                margin: "0 0 16px 0",
              }}
            >
              {t(language, "projects.techs")}
            </h3>
            <p
              style={{
                color: "var(--color-secondary)",
                fontSize: "16px",
                lineHeight: "1.5",
                margin: 0,
              }}
            >
              {project.stacks && project.stacks.length > 0
                ? project.stacks.map((s) => s.Name).join(", ")
                : "No technologies available"}
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <AnimatedButton text={t(language, "projects.visitWebsite")} />
          </div>
        </div>

        {/* Right Part - Placeholder for now */}
        <div
          style={{
            flex: 1,
            backgroundColor: "rgba(214, 246, 253, 0.1)",
            borderRadius: "8px",
          }}
        >
          {/* This will be filled in the next step */}
        </div>
      </div>

      <style jsx>{`
        div {
          cursor: url("data:text/plain;charset=utf-8,Close") 16 16, pointer;
        }
      `}</style>
    </div>
  );

  return createPortal(popupContent, document.body);
}
