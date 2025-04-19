"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import PawensLogo from "../../assets/icons/PawensLogo.svg";

function PawensLogotype() {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (pathname === "/") {
      // Scroll animé vers le top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      // Redirection vers la home
      router.push("/");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-[12px] cursor-pointer"
      style={{ color: "var(--color-secondary)" }}
    >
      <PawensLogo className="block fill-current" />
      <div className="flex">
        <h3>P</h3>
        <h3>A</h3>
        <h3>W</h3>
        <h3>E</h3>
        <h3>N</h3>
        <h3>S</h3>
      </div>
    </div>
  );
}

export default PawensLogotype;
