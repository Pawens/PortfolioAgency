import React from "react";
import Count from "@/components/Atoms/client/Count";
import { servicesData } from "../../../utils/MocksServices";
import ServiceItem from "@/components/Molecules/server/ServiceItem";
import AnimateListObserver from "@/components/Molecules/client/AnimateListObserver";

const Services = () => {
  return (
    <section className="text-[var(--color-secondary)]">
      <div className="px-[88px]">
        <div className="flex justify-between items-center pb-[64px]">
          <div className="flex items-top justify-center gap-[8px]">
            <h2 className="text-[46px] italic">SERVICES</h2>
            <Count manualCount={7} />
          </div>

          <div className="max-w-[400px] ml-auto">
            <p className="text-[14px]" style={{ textAlign: "justify" }}>
              Nous livrons des sites sur‑mesure, guidés par nos KPI* (
              <em>Key Performance Indicators</em>) : expérience client fluide,
              architecture évolutive adaptée à vos besoins métier, optimisation
              SEO (<em>pour générer plus de trafic</em>) et sécurité renforcée.
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {servicesData.map((item, index) => (
            <ServiceItem
              key={index}
              title={item.title}
              isFirst={index === 0}
              index={index}
            />
          ))}
        </div>
        <AnimateListObserver selector=".service-item" stagger={120} />
      </div>
    </section>
  );
};

export default Services;
