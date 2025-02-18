import { createContext, useContext } from "react";

export const BubbleContext = createContext<boolean>(false);
export const useBubbleHover = () => useContext(BubbleContext);
