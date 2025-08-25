"use client";

import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { fetchProjects } from "@/utils/clientCache";
import { motion, useInView } from "motion/react";
import ButtonDefaultClient from "@/components/Atoms/client/ButtonDefaultClient";
import ProjectBox from "@/components/Atoms/server/ProjectBox";
import { t } from "@/utils/serverTranslations";

type RawProject = {
  id: number;
  Title: string;
  Images: Array<{ url: string }>;
};

export default function ProjectsList() {
  const { language } = useLanguage();
  const [projects, setProjects] = useState<RawProject[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    fetchProjects(language.toLowerCase())
      .then((resp) => setProjects(resp.data || []))
      .catch(console.error);
  }, [language]);

  const total = projects.length;
  const loadMore = () => setVisibleCount((v) => Math.min(v + 2, total));

  return (
    <>
      <div className="project-list-container flex flex-wrap mt-[-5px] px-[88px] gap-[32px]">
        {projects.slice(0, visibleCount).map((p, i) => {
          const imageUrl = p.Images[0]?.url ?? "";
          const variant = ((i % 4) + 1) as 1 | 2 | 3 | 4;
          const align = variant % 2 === 1 ? "left" : "right";

          return (
            <div
              key={p.id}
              className={`project-wrapper w-full sm:w-1/2 lg:w-1/4 flex ${
                align === "left" ? "justify-start" : "justify-end"
              }`}
            >
              <ProjectListItem
                project={p}
                index={i}
                variant={variant}
                align={align}
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
    </>
  );
}

interface ProjectListItemProps {
  project: RawProject;
  index: number;
  variant: 1 | 2 | 3 | 4;
  align: "left" | "right";
}

function ProjectListItem({
  project,
  index,
  variant,
  align,
}: ProjectListItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-50% 0px -50% 0px",
  });

  const number = index + 1;
  const title = project.Title;
  const imageUrl = project.Images[0]?.url ?? "";

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
      />
    </motion.div>
  );
}
