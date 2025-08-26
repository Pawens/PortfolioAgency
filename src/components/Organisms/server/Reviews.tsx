import React from "react";
import ArrowPawensBig from "@/assets/icons/ArrowPawensBig.svg";
import GoogleLogo from "@/assets/icons/GoogleLogo.svg";
import ButtonDefault from "@/components/Atoms/server/ButtonDefault";
import TestimonialsSlider from "@/components/Molecules/client/TestimonialsSlider";
import { Language, t } from "@/utils/serverTranslations";

function Reviews({ language }: { language: Language }) {
  return (
    <section className="review-section text-[var(--color-secondary)] pt-[176px]">
      <div className="reviews-container flex flex-col items-center justify-center gap-[88px] max-w-[760px] mx-auto px-[128px]">
        <div>
          <h2 className="review-title text-[46px] italic">
            {t(language, "review.title")}
          </h2>
        </div>

        <div className="reviews-slider">
          <TestimonialsSlider />
        </div>

        <ButtonDefault
          href="https://www.google.com/maps/place/Romain+PARISOT+-+D%C3%A9veloppeur+de+Site+web/@48.8699,2.2994481,17z/data=!4m8!3m7!1s0x47e66fda7ad072ad:0xed632ea01a15ed35!8m2!3d48.8698965!4d2.302023!9m1!1b1!16s%2Fg%2F11m59sq5wx?hl=fr&entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
          variant="review"
          className="w-[300px]"
        >
          <p>{t(language, "review.seeGoogleReview")}</p>
          <GoogleLogo />
        </ButtonDefault>
      </div>
    </section>
  );
}

export default Reviews;
