import React from "react";
import Image from "next/image";
import "../../../assets/styles/projectHover.css";

type ProjectBoxProps = {
  number: number;
  title: string;
  imageUrl: string;
  variant: 1 | 2 | 3 | 4;
};

const SIZE_MAP = {
  1: { width: 714 },
  2: { width: 822 },
  3: { width: 822 },
  4: { width: 714 },
};

export default function ProjectBox({
  number,
  title,
  imageUrl,
  variant,
}: ProjectBoxProps) {
  const { width } = SIZE_MAP[variant];

  return (
    <div
      className="project-box flex flex-col gap-[20px]"
      style={{ width: `${width}px` }}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={width}
        height={Math.floor(width * (9 / 16))}
        className="object-cover object-top w-full"
      />

      <div className="text-[var(--color-secondary)] text-[16px] flex items-center justify-between">
        <p>{title}</p>
        <p>/0{number}</p>
      </div>
    </div>
  );
}
