"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { fetchProjects } from "@/utils/clientCache";
import { motion, useInView } from "framer-motion";
import ButtonDefaultClient from "@/components/Atoms/client/ButtonDefaultClient";
import ProjectBox from "@/components/Atoms/server/ProjectBox";
import ProjectPopup from "./ProjectPopup";
import { t } from "@/utils/serverTranslations";

type RawProject = {
  id: number;
  Title: string;
  Images: Array<{ url: string }>;
  Description?: string;
  features?: Array<{ Name: string }>;
  stacks?: Array<{ Name: string }>;
  videoUrl?: string;
};

export default function ProjectsList() {
  const { language } = useLanguage();
  const [projects, setProjects] = useState<RawProject[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [selectedProject, setSelectedProject] = useState<RawProject | null>(
    null
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    fetchProjects(language.toLowerCase())
      .then((resp) => setProjects(resp.data || []))
      .catch(console.error);
  }, [language]);

  const total = projects.length;
  const loadMore = () => setVisibleCount((v) => Math.min(v + 2, total));

  const handleProjectClick = (project: RawProject) => {
    console.log("Project clicked:", project);
    console.log("Setting selectedProject to:", project);
    console.log("Setting isPopupOpen to: true");
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    console.log("Closing popup");
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  console.log(
    "ProjectsList render - isPopupOpen:",
    isPopupOpen,
    "selectedProject:",
    selectedProject
  );

  return (
    <>
      <div className="flex flex-wrap mt-[-5px] px-[88px] gap-[32px]">
        {projects.slice(0, visibleCount).map((p, i) => {
          const imageUrl = p.Images[0]?.url ?? "";
          const variant = ((i % 4) + 1) as 1 | 2 | 3 | 4;
          const align = variant % 2 === 1 ? "left" : "right";

          return (
            <div
              key={p.id}
              className={`w-full sm:w-1/2 lg:w-1/4 flex ${
                align === "left" ? "justify-start" : "justify-end"
              }`}
            >
              <ProjectListItem
                project={p}
                index={i}
                variant={variant}
                align={align}
                onProjectClick={handleProjectClick}
              />
            </div>
          );
        })}
      </div>

      {visibleCount < total && (
        <div className="w-full text-center pt-[88px]">
          <ButtonDefaultClient onClick={loadMore}>
            {t(language, "projects.seeMore")}
          </ButtonDefaultClient>
        </div>
      )}

      {console.log("About to render ProjectPopup with:", {
        selectedProject,
        isPopupOpen,
      })}
      <ProjectPopup
        project={selectedProject}
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
    </>
  );
}

interface ProjectListItemProps {
  project: RawProject;
  index: number;
  variant: 1 | 2 | 3 | 4;
  align: "left" | "right";
  onProjectClick: (project: RawProject) => void;
}

function ProjectListItem({
  project,
  index,
  variant,
  align,
  onProjectClick,
}: ProjectListItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-50% 0px -50% 0px",
  });

  const number = index + 1;
  const title = project.Title;
  const imageUrl = project.Images[0]?.url ?? "";

  const handleClick = () => {
    console.log("ProjectBox clicked, calling onProjectClick"); // Debug log
    onProjectClick(project);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{
        duration: 0.6,
      }}
    >
      <ProjectBox
        number={number}
        title={title}
        imageUrl={imageUrl}
        variant={variant}
        onClick={handleClick}
      />
    </motion.div>
  );
}
