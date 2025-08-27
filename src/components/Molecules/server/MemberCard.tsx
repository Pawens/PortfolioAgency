import React from "react";
import AnimatedButton from "@/components/Atoms/client/AnimatedButton";
import MemberImage from "@/components/Atoms/server/MemberImage";
import MemberText from "@/components/Atoms/server/MemberText";

interface MemberCardProps {
  name: string;
  role: string;
  job: string;
  imageUrl: string;
  linkedInUrl?: string;
}

function MemberCard({
  name,
  role,
  job,
  imageUrl,
  linkedInUrl,
}: MemberCardProps) {
  const handleClick = () => {
    if (linkedInUrl) {
      window.open(linkedInUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="flex flex-col items-center gap-4 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 group team-member-card"
      onClick={handleClick}
    >
      <AnimatedButton text={name} />
      <MemberImage src={imageUrl} alt={name} />
      <div
        className={`flex pt-[8px] w-full px-4 ${
          job && role ? "justify-between" : "justify-center"
        }`}
      >
        {job && <MemberText>{job}</MemberText>}
        {role && <MemberText>{role}</MemberText>}
      </div>
    </div>
  );
}

export default MemberCard;
