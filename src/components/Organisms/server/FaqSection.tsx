import React from "react";
import Count from "@/components/Atoms/client/Count";
import FaqItem from "@/components/Molecules/client/FaqItem";
import { faqData } from "../../../utils/MocksFaq";

const FaqSection = () => {
  return (
    <section className="pt-[40px] pb-[100px] px-4 py-20 text-[var(--color-secondary)]">
      <div className="max-w-6xl mx-auto flex flex-row gap-24">
        <div className="w-[25%] flex items-start gap-[10px]">
          <h2 className="ml-[60px] text-[48px] italic">FAQ</h2>
          <Count manualCount={faqData.length} />
        </div>

        <div className="w-[75%] flex flex-col pr-[60px]">
          {faqData.map((item, index) => (
            <FaqItem
              key={index}
              question={item.question}
              answer={item.answer}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
