'use client';

import React from 'react';
import '@/assets/styles/backToTopButton.css';
import ArrowPawens from '@/assets/icons/ArrowPawens.svg';

function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button className="back-to-top-button group" onClick={scrollToTop}>
      <ArrowPawens className="back-to-top-icon" />
    </button>
  );
}

export default BackToTopButton;
