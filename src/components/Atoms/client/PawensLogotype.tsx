"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import PawensLogo from "../../../assets/icons/PawensLogo.svg";
import "../../../assets/styles/pawensLogotype.css";
import "../../../assets/styles/animation.css";

const letters = ["P", "A", "W", "E", "N", "S"];

function PawensLogotype() {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center gap-[12px] cursor-pointer group"
      style={{ color: "var(--color-secondary)" }}
    >
      <PawensLogo className="block fill-current transition-transform duration-300 group-hover:translate-x-[4px] opacity-0 animate-fade-in-left" />
      <div className="flex">
        {letters.map((letter, i) => (
          <h3
            key={i}
            className="logotype-letter"
            style={{ "--i": i } as React.CSSProperties}
          >
            {letter}
          </h3>
        ))}
      </div>
    </div>
  );
}

export default PawensLogotype;
