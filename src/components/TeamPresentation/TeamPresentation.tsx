"use client";

import React, { useEffect, useState } from "react";
import "./TeamPresentation.css";
import Image from "next/image";

const BASE_URL = "https://portfolioagencystrapi-production.up.railway.app";

// Define TypeScript Interfaces
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

const fetchMembers = async (): Promise<TeamMember[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/team-members?populate=*`
    );
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const result = await response.json();
    console.log("Fetched Team Members:", result);

    return result.data || [];
  } catch (error) {
    console.error("Error fetching team members:", error);
    return [];
  }
};

const TeamPresentation: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetchMembers().then(setTeamMembers);
  }, []);

  return (
    <div className="teamPresentation">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="teamPresentationMember"
          onClick={() => window.open(member.LinkedinUrl, "_blank", "noopener,noreferrer")}
        >
          <Image
            className="teamPresentationImage"
            src={member.ProfilePicture?.url ? `${BASE_URL}${member.ProfilePicture.url}` : "/default-profile.webp"}
            alt={member.FullName || "Team Member"}
            width={150}
            height={150}
          />
          <h3>{member.FullName}</h3>
          <p>Développeur Fullstack</p>
        </div>
      ))}
    </div>
  );
};

export default TeamPresentation;
