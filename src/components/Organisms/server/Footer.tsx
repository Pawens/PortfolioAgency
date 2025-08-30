import ArrowPawensBig from "@/assets/icons/ArrowPawensBig.svg";
import ButtonDefault from "@/components/Atoms/server/ButtonDefault";
import Link from "next/link";

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
        <p className="footer-text footer-text-right text-[var(--color-secondary)] text-right ">
          <Link
            href="/mentions-legales"
            className="hover:underline hover:opacity-80 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-secondary)] focus-visible:ring-offset-[var(--color-black)] rounded-sm"
            aria-label="Accéder aux mentions légales"
          >
            Mentions légales
          </Link>
          <span className="pl-[4px] pr-[4px]"> | </span>
          <Link
            href="/politique-de-confidentialite"
            className="hover:underline hover:opacity-80 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-secondary)] focus-visible:ring-offset-[var(--color-black)] rounded-sm"
            aria-label="Accéder à la politique de confidentialité"
          >
            Politique de confidentialité
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
