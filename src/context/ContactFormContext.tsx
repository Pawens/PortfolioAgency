"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

interface ContactFormContextType {
  prefilledMessage: string;
  setPrefilledMessage: (
    price: string,
    planName: string,
    originalPrice?: string,
    aidPercentage?: number
  ) => void;
  clearMessage: () => void;
  startTypewriterAnimation: () => void;
  isAnimationReady: boolean;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(
  undefined
);

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (context === undefined) {
    throw new Error("useContactForm must be used within a ContactFormProvider");
  }
  return context;
};

interface ContactFormProviderProps {
  children: ReactNode;
}

export const ContactFormProvider = ({ children }: ContactFormProviderProps) => {
  const [prefilledMessage, setPrefilledMessageState] = useState<string>("");
  const [isAnimationReady, setIsAnimationReady] = useState<boolean>(false);

  const setPrefilledMessage = useCallback(
    (
      price: string,
      planName: string,
      originalPrice?: string,
      aidPercentage?: number
    ) => {
      let message: string;

      if (originalPrice && aidPercentage && aidPercentage > 0) {
        // Message avec aide régionale
        message = `Bonjour, je serais intéressé par votre offre d'abonnement "${planName}" au prix de ${originalPrice}€. J'ai vu qu'avec l'aide régionale, le tarif serait de ${price}€ (soit ${aidPercentage}% de réduction). Pourriez-vous m'expliquer comment bénéficier de cette aide régionale et me donner plus d'informations sur cette offre ? Merci !`;
      } else {
        // Message standard sans aide
        message = `Bonjour, je serais intéressé par votre offre d'abonnement "${planName}" à ${price}€. Pourriez-vous me donner plus d'informations ? Merci !`;
      }

      setPrefilledMessageState(message);
      setIsAnimationReady(false); // Reset animation state
    },
    []
  );

  const clearMessage = useCallback(() => {
    setPrefilledMessageState("");
    setIsAnimationReady(false);
  }, []);

  const startTypewriterAnimation = useCallback(() => {
    setIsAnimationReady(true);
  }, []);

  const value = {
    prefilledMessage,
    setPrefilledMessage,
    clearMessage,
    startTypewriterAnimation,
    isAnimationReady,
  };

  return (
    <ContactFormContext.Provider value={value}>
      {children}
    </ContactFormContext.Provider>
  );
};
