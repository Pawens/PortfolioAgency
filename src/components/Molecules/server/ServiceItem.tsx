import React from "react";

type ServiceItemProps = {
  title: string;
  isFirst?: boolean;
  index?: number;
};

const ServiceItem = ({ title, isFirst, index }: ServiceItemProps) => {
  return (
    <div
      data-index={index}
      className={`service-item opacity-0 overflow-hidden transition-all duration-300 ease-in-out text-[var(--color-secondary)]
        border-b border-b-[1px] border-[var(--color-secondary)] 
        ${isFirst ? "border-t border-t-[1px]" : ""}`}
    >
      <div className="flex items-center justify-between group">
        <div className="flex items-center justify-between w-full py-[40px]">
          <p className="service-item-title text-[20px] pl-[60px]">
            {String((index ?? 0) + 1).padStart(2, "0")}/
          </p>
          <p className="service-item-title text-[20px] uppercase">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
