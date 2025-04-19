import React from "react";
import "../../assets/styles/ButtonDefault.css";

type ButtonDefaultProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
};

function ButtonDefault({ href, children, className = "" }: ButtonDefaultProps) {
  return (
    <button
      className={`button-default relative overflow-hidden p-[12px] border border-[var(--color-secondary)] text-[var(--color-secondary)] text-[12px] group ${className}`}
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 block w-full h-full"
        />
      ) : null}

      <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--color-primary)]">
        {children}
      </span>
    </button>
  );
}

export default ButtonDefault;
