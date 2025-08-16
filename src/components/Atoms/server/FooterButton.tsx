import React from "react";
import ArrowPawensBig from "@/assets/icons/ArrowPawensBig.svg";

function FooterButton() {
  return (
    <button className="relative w-[100px] h-[100px] border border-[var(--color-secondary)] bg-transparent overflow-hidden transition-[width] duration-[0.33s] ease-in-out cursor-pointer">
      <ArrowPawensBig className="inline-block transition-[transform,fill] duration-[0.33s] ease-linear delay-[0.33s] fill-[var(--color-secondary)]" />
    </button>
  );
}

export default FooterButton;
