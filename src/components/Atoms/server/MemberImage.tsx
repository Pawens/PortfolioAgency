import React from 'react';
import Image from 'next/image';

interface MemberImageProps {
  src: string;
  alt: string;
}

function MemberImage({ src, alt }: MemberImageProps) {
  return (
    <div className="w-[400px] overflow-hidden rounded-md">
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
