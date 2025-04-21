import React from "react";
import TypeWritterAnimation from "../client/TypeWritterAnimation";

export default function ProjectsTitle() {
  return (
    <div
      className="flex flex-col items-center"
      style={{
        backgroundImage: "url('/backgroundLightToDark.png')",
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "70vh",
      }}
    >
      <h2
        className="text-[400px] font-bold uppercase pt-[64px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(45, 83, 111, 0.99) 0%, rgba(124, 164, 192, 1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          lineHeight: 1,
        }}
      >
        <TypeWritterAnimation text="PROJETS" speed={120} />
      </h2>
    </div>
  );
}
