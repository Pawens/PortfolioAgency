import ArrowPawensBig from "@/assets/icons/ArrowPawensBig.svg";
import ButtonDefault from "@/components/Atoms/server/ButtonDefault";

function Footer() {
  return (
    <div className="footer-container flex flex-col justify-between gap-[32px] px-[88px] pb-[32px]">
      <div className="footer-button-backtotop flex self-end">
        <ButtonDefault
          ariaLabel="Back to top"
          variant="footer"
          type="backToTop"
          href="#"
        >
          <ArrowPawensBig />
        </ButtonDefault>
      </div>
      <span className="w-full h-[1px] bg-[var(--color-secondary)]" />
      <div className="flex items-center justify-between">
        <p className="footer-text text-[var(--color-secondary)]">
          Copyright. Pawens @2025
        </p>
        <p className="footer-text text-[var(--color-secondary)]">
          Parisot Romain, Simon Adam
        </p>
      </div>
    </div>
  );
}

export default Footer;
