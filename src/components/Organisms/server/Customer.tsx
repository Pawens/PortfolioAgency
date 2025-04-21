import Count from "@/components/Atoms/client/Count";
import CustomerSlider from "@/components/Molecules/client/CustomerSlider";
import React from "react";

export default function Customer() {
  return (
    <section className="pt-[80px] pb-[96px] ">
      <div>
        <div className="flex justify-between items-center px-[88px] pb-[48px]">
          <div className="flex items-top justify-center gap-[8px]">
            <h2 className="text-[46px] italic font-[450]">NOS CLIENTS</h2>
            <Count />
          </div>
          <div>
            <p> Notre savoir‑faire au cœur des plus grandes réussites:</p>
            <p>
              <strong className="font-[550] italic">
                notre expertise au service de vos ambitions.
              </strong>
            </p>
          </div>
        </div>

        <CustomerSlider />
      </div>
    </section>
  );
}
