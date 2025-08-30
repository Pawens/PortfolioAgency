import Image from "next/image";
import Link from "next/link";

type ProjectBoxProps = {
  number: number;
  title: string;
  imageUrl: string;
  variant: 1 | 2 | 3 | 4;
  documentId: string;
  language: string;
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
  documentId,
  language,
}: ProjectBoxProps) {
  const { width } = SIZE_MAP[variant];

  return (
    <Link href={`/projects/${documentId}?lang=${language}`}>
      <div
        className="project-box flex flex-col gap-[20px] cursor-pointer hover:scale-105 transition-transform duration-300"
        style={{ width: `${width}px` }}
      >
        <Image
          src={imageUrl}
          alt={title}
          width={width}
          height={Math.floor(width * (9 / 16))}
          className="project-image object-cover object-top w-full"
        />

        <div className="text-[var(--color-secondary)] text-[16px] flex items-center justify-between">
          <p>{title}</p>
          <p>/0{number}</p>
        </div>
      </div>
    </Link>
  );
}
