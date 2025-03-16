"use client";

import React, { useRef } from "react";
import useSWR from "swr";
import { motion, useInView } from "framer-motion";
import "./TeamPresentation.css";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import translations from "@/translation";
import { getTeamMembersData } from "@/utils/StrapiCallsUtils";

interface ProfilePicture {
  id: number;
  url: string;
}

interface TeamMember {
  id: number;
  FullName: string;
  LinkedinUrl: string;
  ProfilePicture?: ProfilePicture;
}

export default function TeamPresentation() {
  const { selectedLanguage } = useLanguage();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, {
    margin: "-20% 0px -20% 0px",
    once: true,
  });

  // ✅ Use SWR to fetch team members with 24h caching
  const fetcher = async () => {
    console.log(`Fetching team members`);
    const response = await getTeamMembersData();
    return response.data;
  };

  const { data: teamMembers = [] } = useSWR(
    [`teamMembers`, selectedLanguage],
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );

  return (
    <motion.div
      ref={containerRef}
      className="teamPresentation"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {teamMembers.map((member: TeamMember, index: number) => (
        <motion.div
          key={member.id}
          className="teamPresentationMember"
          onClick={() =>
            window.open(member.LinkedinUrl, "_blank", "noopener,noreferrer")
          }
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
          style={{ cursor: "pointer", pointerEvents: "auto" }}
        >
          <Image
            className="teamPresentationImage"
            src={member.ProfilePicture?.url || "none"}
            alt={member.FullName || "Team Member"}
            width={150}
            height={150}
          />
          <h3>{member.FullName}</h3>
          <p>{translations[selectedLanguage].team.jobTitle}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
