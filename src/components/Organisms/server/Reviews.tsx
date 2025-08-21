import React from "react";
import ArrowPawensBig from "@/assets/icons/ArrowPawensBig.svg";
import GoogleLogo from "@/assets/icons/GoogleLogo.svg";
import ButtonDefault from "@/components/Atoms/server/ButtonDefault";
import TestimonialsSlider from "@/components/Molecules/client/TestimonialsSlider";

function Reviews() {
  return (
    <section className="text-[var(--color-secondary)] bg-[var(--color-primary)] pt-[176px]">
      <div className="flex flex-col items-center justify-center gap-[88px] max-w-[760px] mx-auto">
        <div>
          <h2 className="text-[46px] italic">ILS PARLENT DE NOUS</h2>
        </div>

        <div>
          <TestimonialsSlider />
        </div>

        <ButtonDefault variant="review" className="w-[300px]">
          <p>VOIR TOUT LES AVIS</p>
          <GoogleLogo />
        </ButtonDefault>
      </div>
    </section>
  );
}

export default Reviews;
