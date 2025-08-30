"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import React from "react";
import PawensLogo from "../../../assets/icons/PawensLogo.svg";
import "../../../assets/styles/animation.css";
import "../../../assets/styles/pawensLogoType.css";

const letters = ["P", "A", "W", "E", "N", "S"];

function PawensLogotype() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language } = useLanguage();

  const handleClick = () => {
    const currentLang = (searchParams.get("lang") || language).toLowerCase();
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push(`/?lang=${currentLang}`);
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
