"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import "./ProjectCard.css";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translation";
import { CustomButton } from "../CustomButton/CustomButton";
import Typography from "@mui/material/Typography/Typography";

interface Stack {
  id: number;
  Name: string;
}

interface Feature {
  id: number;
  Name: string;
}

interface ImageData {
  id: number;
  url: string;
}

interface ProjectCardProps {
  documentId: string;
  name: string;
  imageUrl?: string;
  features?: Feature[];
  stack?: Stack[];
  images?: ImageData[];
  websiteUrl?: string;
}

function ProjectCard({
  documentId,
  name,
  imageUrl,
  websiteUrl,
}: ProjectCardProps) {
  const placeholderImage =
    "https://res.cloudinary.com/dslwin8c8/image/upload/v1741967934/placeholder_ghychn.webp";

  const cardRef = useRef(null);
  const isInView = useInView(cardRef, {
    margin: "-30% 0px -30% 0px",
    once: true,
  });

  const { selectedLanguage } = useLanguage();

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="projectCard"
    >
      <Link href={`/projects/${documentId}`} prefetch>
        <div className="imageContainer">
          <Image
            src={imageUrl || placeholderImage}
            alt={name}
            width={400}
            height={300}
            loading="lazy"
            style={{
              objectFit: "cover",
              objectPosition: "top",
              cursor: "pointer",
            }}
          />
        </div>
      </Link>

      <div className="projectContent">
        <h4>{name}</h4>

        <Link href={`/projects/${documentId}`} prefetch>
          <CustomButton
            value={translations[selectedLanguage].projects.viewProject}
            variant="small"
            sx={{ width: "fit-content" }}
          />
        </Link>

        {websiteUrl ? (
          <CustomButton
            value={translations[selectedLanguage].projects.visitWebsite}
            onClick={() =>
              window.open(websiteUrl, "_blank", "noopener,noreferrer")
            }
            variant="small"
            sx={{ width: "fit-content" }}
            styleType="none"
          />
        ) : (
          <Typography
            variant="body2"
            sx={{ color: "gray", fontSize: "12px", marginTop: "8px" }}
          >
            {translations[selectedLanguage].projects.notHostedMessage}
          </Typography>
        )}
      </div>
    </motion.div>
  );
}

export default ProjectCard;
