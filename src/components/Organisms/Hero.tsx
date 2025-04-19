import React from "react";
import HeroButton from "../Atoms/HeroButton";
import ScrollToView from "../Atoms/ScrollToView";

function Hero() {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-screen"
      style={{
        backgroundImage: "url('/backgroundDarkToLight.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="flex flex-col items-center justify-center text-[80px] text-[var(--color-secondary)] uppercase font-thin">
        <h2 className="font-thin">L&apos;agence créative</h2>
        <div className="flex items-center justify-center gap-[42px]">
          <h2>Pour</h2>
          <HeroButton />
          <h2>Vous</h2>
        </div>
      </div>
      <ScrollToView />
    </div>
  );
}

export default Hero;
