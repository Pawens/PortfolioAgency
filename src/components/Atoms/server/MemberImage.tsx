import React from "react";
import Image from "next/image";

interface MemberImageProps {
  src: string;
  alt: string;
}

function MemberImage({ src, alt }: MemberImageProps) {
  return (
    <div className="w-[400px] overflow-hidden rounded-md relative">
      <div className="absolute inset-0 bg-[#00000040] w-full h-full" />
      <Image
        src={src}
        alt={alt}
        width={400}
        height={1000}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

export default MemberImage;
