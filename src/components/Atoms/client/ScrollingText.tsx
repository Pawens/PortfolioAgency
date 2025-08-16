'use client';

import React, { useEffect, useState } from 'react';
import '@/assets/styles/scrollingText.css';

function ScrollingText() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scrolling-text-wrapper">
      <div
        className="scrolling-text"
        style={{ transform: `translateX(${-offset}px)` }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i}>PAWENS - AGENCE WEB CREATIVE - </span>
        ))}
      </div>
    </div>
  );
}

export default ScrollingText;
