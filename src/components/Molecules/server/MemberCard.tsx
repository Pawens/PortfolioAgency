import React from 'react';
import AnimatedButton from '@/components/Atoms/client/AnimatedButton';
import MemberImage from '@/components/Atoms/server/MemberImage';
import MemberText from '@/components/Atoms/server/MemberText';

interface MemberCardProps {
  name: string;
  role: string;
  job: string;
  imageUrl: string;
}

function MemberCard({ name, role, job, imageUrl }: MemberCardProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <AnimatedButton text={name} />
      <MemberImage src={imageUrl} alt={name} />
      <div className="flex justify-between w-full px-4">
        <MemberText>{role}</MemberText>
        <MemberText>{job}</MemberText>
      </div>
    </div>
  );
}

export default MemberCard;
