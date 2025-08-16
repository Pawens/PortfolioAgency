import ButtonDefault from "@/components/Atoms/server/ButtonDefault";
import ArrowPawensBig from "@/assets/icons/ArrowPawensBig.svg";

import React from "react";

function Footer() {
  return (
    <div className="flex flex-col justify-between gap-[32px] bg-[var(--color-primary)] px-[88px] pb-[32px]">
      <div className="flex self-end">
        <ButtonDefault variant="footer" type="backToTop" href="#">
          <ArrowPawensBig />
        </ButtonDefault>
      </div>
      <span className="w-full h-[1px] bg-[var(--color-secondary)]" />
      <div className="flex items-center justify-between">
        <p className="text-[var(--color-secondary)]">Copyright. Pawens @2025</p>
        <p className="text-[var(--color-secondary)]">
          Parisot Romain, Simon Adam
        </p>
      </div>
    </div>
  );
}

export default Footer;
