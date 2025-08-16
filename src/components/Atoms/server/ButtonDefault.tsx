import React from "react";
import "../../../assets/styles/ButtonDefault.css";

type ButtonDefaultProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "backToTop";
  variant?: "default" | "footer";
};

function ButtonDefault({
  href,
  children,
  className = "",
  type = "button",
  variant = "default",
}: ButtonDefaultProps) {
  const baseClasses =
    "button-default relative overflow-hidden border border-[var(--color-secondary)] text-[var(--color-secondary)] group";

  const variantClasses = {
    default: "p-[12px] text-[12px]",
    footer:
      "footer-variant w-[88px] h-[88px] bg-transparent transition-[width] duration-[0.33s] ease-in-out cursor-pointer flex items-center justify-center",
  };

  return (
    <button
      type={type === "backToTop" ? "button" : type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {href && type !== "backToTop" ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 block w-full h-full"
        />
      ) : href && type === "backToTop" ? (
        <a href={href} className="absolute inset-0 z-20 block w-full h-full" />
      ) : null}

      {variant === "footer" ? (
        <div className="relative z-50">{children}</div>
      ) : (
        <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--color-primary)]">
          {children}
        </span>
      )}
    </button>
  );
}

export default ButtonDefault;
