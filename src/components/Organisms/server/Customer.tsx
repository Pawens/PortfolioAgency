import Count from "@/components/Atoms/client/Count";
import CustomerSlider from "@/components/Molecules/client/CustomerSlider";
import { Language } from "@/context/LanguageContext";
import { t } from "@/utils/serverTranslations";
import React from "react";

export default function Customer({ language }: { language: Language }) {
  return (
    <section className="pt-[80px] pb-[96px] ">
      <div>
        <div className="flex justify-between items-center px-[88px] pb-[48px]">
          <div className="flex items-top justify-center gap-[8px]">
            <h2 className="text-[46px] italic font-[450]">
              {t(language, "customer.ourClients")}
            </h2>
            <Count />
          </div>
          <div>
            <p>{t(language, "customer.description1")}</p>
            <p>
              <strong className="font-[550] italic">
                {t(language, "customer.description2")}
              </strong>
            </p>
          </div>
        </div>

        <CustomerSlider />
      </div>
    </section>
  );
}
