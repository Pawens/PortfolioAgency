import React from "react";
import GoogleLogo from "@/assets/icons/GoogleLogo.svg";
import ButtonDefault from "@/components/Atoms/server/ButtonDefault";
import TestimonialsSlider, {
  Testimonial,
} from "@/components/Molecules/client/TestimonialsSlider";
import { Language, t } from "@/utils/serverTranslations";
import { getTestimonialsData } from "@/utils/StrapiCallsUtils";

async function Reviews({ language }: { language: Language }) {
  let testimonials: Testimonial[] = [];
  try {
    const resp: any = await getTestimonialsData(language.toLowerCase());
    testimonials = resp?.data || [];
  } catch (e) {
    console.error("Reviews: failed to fetch testimonials", e);
  }

  return (
    <section className="review-section text-[var(--color-secondary)] pt-[176px]">
      {/* Option 1 (box-content) à nouveau: padding interne + largeur de contenu restaurée */}
      <div className="reviews-container box-content flex flex-col items-center justify-center gap-[88px] max-w-[760px] mx-auto px-[128px]">
        <div>
          <h2 className="review-title text-[46px] italic">
            {t(language, "review.title")}
          </h2>
        </div>

        <div className="reviews-slider w-full">
          {testimonials.length > 0 ? (
            <TestimonialsSlider
              testimonials={testimonials}
              language={language}
            />
          ) : (
            <p className="text-sm opacity-70">No testimonials available.</p>
          )}
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
