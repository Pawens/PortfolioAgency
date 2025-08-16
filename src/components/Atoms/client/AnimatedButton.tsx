'use client';

import React from 'react';
import '@/assets/styles/animatedButton.css';
import ArrowPawens from '@/assets/icons/ArrowPawens.svg';

interface AnimatedButtonProps {
  text: string;
}

function AnimatedButton({ text }: AnimatedButtonProps) {
  return (
    <button className="animated-button group">
      <span className="animated-background" />
      <span className="animated-content">
        <ArrowPawens className="animated-icon-left" />
        <span className="animated-text-wrapper">
          <span className="animated-text">{text}</span>
        </span>
        <ArrowPawens className="animated-icon-right" />
      </span>
    </button>
  );
}

export default AnimatedButton;
