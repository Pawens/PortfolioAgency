import React from "react";
import Image from "next/image";

interface CustomerBoxProps {
  title: string;
  iconUrl: string;
  alt?: string;
}

export default function CustomerBox({
  title,
  iconUrl,
  alt = title,
}: CustomerBoxProps) {
  return (
    // I added pr-1 to not have a width diff bcs of the left border
    <div className="flex flex-col items-center justify-center border-l border-[var(--color-primary)] pr-[1px]">
      <Image
        src={iconUrl}
        alt={alt}
        width={140}
        height={60}
        className="mt-[120px] mb-[86px] mx-[80px] object-contain"
      />
      <h3 className="pb-[12px] text-center">{title}</h3>
    </div>
  );
}
