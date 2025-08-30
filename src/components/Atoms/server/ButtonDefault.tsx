import React from "react";
import "../../../assets/styles/buttonDefault.css";

type ButtonDefaultProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "backToTop";
  variant?: "default" | "footer" | "review";
  ariaLabel?: string; // Accessible name for icon-only buttons/links
};

function ButtonDefault({
  href,
  children,
  className = "",
  type = "button",
  variant = "default",
  ariaLabel,
}: ButtonDefaultProps) {
  const baseClasses =
    "button-default relative overflow-hidden border border-[var(--color-secondary)] text-[var(--color-secondary)] group";

  const variantClasses = {
    default: "p-[12px] text-[12px]",
    footer:
      "footer-variant w-[88px] h-[88px] bg-transparent transition-[width] duration-[0.33s] ease-in-out cursor-pointer flex items-center justify-center",
    review:
      "flex items-center justify-center gap-[16px] p-[12px] text-[14px] border border-[var(--color-secondary)] text-[var(--color-secondary)] [&_svg]:fill-[var(--color-secondary)] transition-colors duration-300 group-hover:text-[var(--color-primary)] group [&_svg]:transition-colors [&_svg]:duration-300 group-hover:[&_svg]:fill-[var(--color-primary)]",
  };

  const computedAriaLabel =
    ariaLabel || (type === "backToTop" ? "Back to top" : undefined);

  if (type === "backToTop" && href) {
    return (
      <a
        href={href}
        className={`${baseClasses} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)] ${className} ${variantClasses[variant]}`}
        aria-label={computedAriaLabel}
      >
        <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--color-primary)]">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      type={type === "backToTop" ? "button" : type}
      aria-label={computedAriaLabel}
      className={`${baseClasses} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)] ${className} ${
        variant !== "review" ? variantClasses[variant] : ""
      }`}
    >
      {href && variant !== "review" ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 z-20 block w-full h-full"
          aria-label="Open link in new tab"
        />
      ) : null}

      {variant === "footer" || variant === "review" ? (
        <div className={variantClasses[variant] + " relative z-50"}>
          {href && variant === "review" ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 block w-full h-full"
              aria-label="View all reviews on Google Maps"
            />
          ) : null}
          {children}
        </div>
      ) : (
        <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--color-primary)]">
          {children}
        </span>
      )}
    </button>
  );
}

export default ButtonDefault;
