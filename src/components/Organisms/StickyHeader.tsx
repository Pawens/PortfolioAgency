"use client";

import { useEffect, useState } from "react";
import Header from "./Header";

export default function StickyHeader() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const delta = 5;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 100) return setVisible(true);
      if (y > lastY + delta) setVisible(false);
      else if (y < lastY - delta) setVisible(true);
      setLastY(y);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 h-[136px] transition-transform duration-300 will-change-transform ${
        visible ? "translate-y-0" : "-translate-y-[136px]"
      } bg-[var(--color-primary)]`}
    >
      <Header />
    </header>
  );
}
