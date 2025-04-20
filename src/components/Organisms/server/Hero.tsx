import React from "react";
import HeroButton from "../../Atoms/client/HeroButton";
import ScrollToView from "../../Atoms/client/ScrollToView";
import "../../../assets/styles/animation.css";

function Hero() {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-screen"
      style={{
        backgroundImage: "url('/backgroundDarkToLight.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="flex flex-col items-center justify-center text-[80px] text-[var(--color-secondary)] uppercase font-thin">
        <h2
          className="font-thin opacity-0 animate-fade-in-down"
          style={{ animationDelay: "0.2s" }}
        >
          L&apos;agence créative
        </h2>
        <div className="flex items-center justify-center gap-[42px] mt-[20px]">
          <h2
            className="opacity-0 animate-fade-in-left"
            style={{ animationDelay: "0.4s" }}
          >
            Pour
          </h2>
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <HeroButton />
          </div>
          <h2
            className="opacity-0 animate-fade-in-right"
            style={{ animationDelay: "0.4s" }}
          >
            Vous
          </h2>
        </div>
      </div>
      <ScrollToView />
    </div>
  );
}

export default Hero;
