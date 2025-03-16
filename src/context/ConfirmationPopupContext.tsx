"use client";

import React, { createContext, useContext, useReducer, ReactNode } from "react";

// ✅ Define the action types for the reducer
type FormAction =
  | { type: "SET_MESSAGE"; payload: string }
  | { type: "SHOW_CONFIRMATION"; payload: boolean }
  | { type: "SHOW_ERROR"; payload: boolean };

// ✅ Define the initial state
const initialState = {
  submittedMessage: "",
  showPopupConfirmation: false,
  showPopupError: false,
};

// ✅ Reducer function to manage all state updates
function formReducer(state: typeof initialState, action: FormAction) {
  switch (action.type) {
    case "SET_MESSAGE":
      return { ...state, submittedMessage: action.payload };
    case "SHOW_CONFIRMATION":
      return { ...state, showPopupConfirmation: action.payload };
    case "SHOW_ERROR":
      return { ...state, showPopupError: action.payload };
    default:
      return state;
  }
}

// ✅ Define the context type
interface FormContextType {
  submittedMessage: string;
  showPopupConfirmation: boolean;
  showPopupError: boolean;
  setSubmittedMessage: (message: string) => void;
  setShowPopupConfirmation: (show: boolean) => void;
  setShowPopupError: (show: boolean) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  // ✅ Define dispatch functions
  const setSubmittedMessage = (message: string) =>
    dispatch({ type: "SET_MESSAGE", payload: message });

  const setShowPopupConfirmation = (show: boolean) =>
    dispatch({ type: "SHOW_CONFIRMATION", payload: show });

  const setShowPopupError = (show: boolean) =>
    dispatch({ type: "SHOW_ERROR", payload: show });

  return (
    <FormContext.Provider
      value={{
        submittedMessage: state.submittedMessage,
        showPopupConfirmation: state.showPopupConfirmation,
        showPopupError: state.showPopupError,
        setSubmittedMessage,
        setShowPopupConfirmation,
        setShowPopupError,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
}
