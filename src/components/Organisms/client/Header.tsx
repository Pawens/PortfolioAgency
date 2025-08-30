"use client";

import { useEffect, useRef, useState } from "react";
import BurgerMenu from "../../Atoms/client/BurgerMenu";
import LanguageSelector from "../../Atoms/client/LanguageSelector";
import PawensLogotype from "../../Atoms/client/PawensLogotype";
import NavBar from "../../Molecules/server/NavBar";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      // Animation de fermeture
      setIsAnimating(true);
      setTimeout(() => {
        setIsMobileMenuOpen(false);
        setIsAnimating(false);
      }, 300); // Durée de l'animation en ms
    } else {
      // Animation d'ouverture
      setIsMobileMenuOpen(true);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        if (isMobileMenuOpen) {
          setIsAnimating(true);
          setTimeout(() => {
            setIsMobileMenuOpen(false);
            setIsAnimating(false);
          }, 300);
        }
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close menu on window resize if screen becomes large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setIsAnimating(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="header-container flex items-center justify-between pt-[64px] px-[64px] pb-[32px] bg-white relative"
      ref={menuRef}
    >
      <PawensLogotype />

      {/* Desktop Navigation */}
      <div className="desktop-navigation flex items-center gap-[120px]">
        <NavBar />
        <LanguageSelector />
      </div>

      {/* Mobile Burger Menu */}
      <BurgerMenu isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />

      {/* Mobile Navigation Menu */}
      {(isMobileMenuOpen || isAnimating) && (
        <div
          className={`mobile-menu-dropdown absolute bg-[var(--color-primary)] flex flex-col items-center z-50 top-[0px] right-[0px] h-screen w-[40vw] ${
            isAnimating ? "mobile-menu-closing" : "mobile-menu-overlay"
          }`}
        >
          {/* mt calc 12px + 32px + 24px */}
          <div className="flex flex-col items-center gap-[24px] mt-[68px]">
            <NavBar />
            <LanguageSelector />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
