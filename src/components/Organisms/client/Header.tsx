"use client";

import React, { useState, useEffect, useRef } from "react";
import NavBar from "../../Molecules/server/NavBar";
import LanguageSelector from "../../Atoms/client/LanguageSelector";
import PawensLogotype from "../../Atoms/client/PawensLogotype";
import BurgerMenu from "../../Atoms/client/BurgerMenu";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
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
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="header-container flex items-center justify-between pt-[64px] px-[92px] pb-[32px] bg-white relative"
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
      {isMobileMenuOpen && (
        <div className="mobile-menu-dropdown absolute top-full right-0 bg-[var(--color-primary)] flex flex-col items-center z-50 mobile-menu-overlay top-px right-px">
          <div className="flex flex-col items-center gap-[32px]">
            <NavBar />
            <LanguageSelector />
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
