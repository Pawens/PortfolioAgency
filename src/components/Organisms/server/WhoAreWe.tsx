"use client";

import React, { useEffect, useState } from "react";
import MemberCard from "@/components/Molecules/server/MemberCard";
import ScrollingText from "@/components/Atoms/client/ScrollingText";
import { fetchTeamMembers } from "@/utils/clientCache";
import { useLanguage } from "@/context/LanguageContext";

type TeamMember = {
  id: number;
  FullName: string;
  JobTitle?: string;
  JobPosition?: string;
  ProfilePicture?: any;
  linkedInUrl?: string;
};

export default function WhoAreWe() {
  const { language } = useLanguage();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchTeamMembers(language.toLowerCase())
      .then((resp) => {
        const data = resp?.data || [];
        setTeamMembers(data);
      })
      .catch((err) => {
        console.error("WhoAreWe: fetchTeamMembers failed", err);
        setTeamMembers([]);
      })
      .finally(() => setLoading(false));
  }, [language]);

  if (loading) return <p>Chargement…</p>;

  return (
    <section className="flex py-[128px]">
      <div className="team-members-container flex flex-row flex-wrap justify-around items-center w-full gap-[32px]">
        {teamMembers.length === 0 ? (
          <p>Try to refresh the page.</p>
        ) : (
          teamMembers.map((m) => {
            const profile = (m as any).ProfilePicture || {};
            const thumb =
              profile?.formats?.medium?.url ||
              profile?.formats?.small?.url ||
              profile?.url ||
              profile?.formats?.thumbnail?.url;
            const name = (m as any).FullName || "";
            const role = (m as any).JobTitle || "";
            const job = (m as any).JobPosition || "";
            const LinkedinUrl = (m as any).LinkedinUrl || "";
            return (
              <MemberCard
                key={(m as any).id}
                name={name}
                role={role}
                job={job}
                imageUrl={thumb}
                linkedInUrl={LinkedinUrl}
              />
            );
          })
        )}
      </div>
    </section>
  );
}
