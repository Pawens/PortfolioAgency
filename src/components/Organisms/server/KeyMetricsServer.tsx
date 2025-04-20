import React from "react";
import KeyMetricsClient from "../client/KeyMetricsClient";
import AnimatedText from "@/components/Atoms/client/AnimatedText";

export default function KeyMetricsServer() {
  return (
    <section className="flex flex-col items-center justify-center gap-[32px] py-[120px] bg-[var(--color-white)]">
      <div className="max-w-[900px] flex flex-col gap-[22px] items-center justify-center">
        <KeyMetricsClient />
        <div className="flex flex-col items-center justify-center text-center gap-[22px] text-[32px] text-[var(--color-black)] font-[450]">
          <h2>
            "On accompagne les entreprises dans leur transformation digitale, de
            la phase de conception à la mise en ligne."
          </h2>
          <h2 className="flex align-center justify-center gap-[8px]">
            Notre objectif :
            <AnimatedText text="transformer vos idées en réalité." />
          </h2>
        </div>
      </div>
    </section>
  );
}
