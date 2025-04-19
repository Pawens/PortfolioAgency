import React from "react";
import HeroButton from "../Atoms/HeroButton";

function Hero() {
  return (
    <div
      className="flex flex-col items-center justify-center text-[80px] text-[var(--color-secondary)] uppercase font-thin"
      style={{
        backgroundImage: "url('/backgroundDarkToLight.png')",
        backgroundSize: "100% 100%", // ← étire sur toute la div
        backgroundPosition: "top", // ou "center" selon ton besoin
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2 className="font-thin">L&apos;agence créative</h2>
      <div className="flex items-center justify-center gap-[42px]">
        <h2>Pour</h2>
        <HeroButton />
        <h2>Vous</h2>
      </div>
    </div>
  );
}

export default Hero;
