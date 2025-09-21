"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  startDelay?: number;
  onComplete?: () => void;
  enabled?: boolean;
}

interface UseTypewriterReturn {
  displayText: string;
  isTyping: boolean;
  startTyping: () => void;
  resetTyping: () => void;
  isComplete: boolean;
}

export const useTypewriter = ({
  text,
  speed = 50,
  startDelay = 300,
  onComplete,
  enabled = true,
}: UseTypewriterOptions): UseTypewriterReturn => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const speedRef = useRef(speed);
  const textRef = useRef(text);
  const onCompleteRef = useRef(onComplete);

  // Mettre à jour les refs quand les props changent
  useEffect(() => {
    speedRef.current = speed;
    textRef.current = text;
    onCompleteRef.current = onComplete;
  }, [speed, text, onComplete]);

  const resetTyping = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDisplayText("");
    setIsTyping(false);
    setIsComplete(false);
  }, []);

  const typeCharacters = useCallback(() => {
    let currentIndex = 0;
    const currentText = textRef.current;

    const typeNextCharacter = () => {
      if (currentIndex >= currentText.length) {
        setIsTyping(false);
        setIsComplete(true);
        onCompleteRef.current?.();
        return;
      }

      setDisplayText(currentText.slice(0, currentIndex + 1));
      currentIndex += 1;

      // Vitesse variable selon le caractère (ponctuation plus lente)
      const currentChar = currentText[currentIndex - 1];
      const isSpeedChar = [".", ",", "!", "?", ":"].includes(currentChar);
      const currentSpeed = isSpeedChar
        ? speedRef.current * 3
        : speedRef.current;

      timeoutRef.current = setTimeout(typeNextCharacter, currentSpeed);
    };

    typeNextCharacter();
  }, []);

  const startTyping = useCallback(() => {
    if (!enabled || !text) return;

    resetTyping();

    // Délai avant de commencer l'animation
    timeoutRef.current = setTimeout(() => {
      setIsTyping(true);
      typeCharacters();
    }, startDelay);
  }, [enabled, text, startDelay, resetTyping, typeCharacters]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Reset when text changes
  useEffect(() => {
    resetTyping();
  }, [text, resetTyping]);

  return {
    displayText,
    isTyping,
    startTyping,
    resetTyping,
    isComplete,
  };
};
