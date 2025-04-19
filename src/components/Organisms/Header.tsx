import React from "react";
import PawensLogotype from "../Molecules/PawensLogotype";
import NavBar from "../Molecules/NavBar";
import LanguageSelector from "../Atoms/LanguageSelector";

function Header() {
  return (
    <div className="flex items-center justify-between pt-[64px] px-[92px] pb-[32px] bg-white">
      <PawensLogotype />
      <div className="flex items-center gap-[120px]">
        <NavBar />
        <LanguageSelector />
      </div>
    </div>
  );
}

export default Header;
