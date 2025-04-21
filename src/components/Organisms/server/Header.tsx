import React from "react";
import NavBar from "../../Molecules/server/NavBar";
import LanguageSelector from "../../Atoms/client/LanguageSelector";
import PawensLogotype from "../../Atoms/client/PawensLogotype";

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
