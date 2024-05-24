import { createContext } from "react";
import { Card } from "../api/types";

interface CardsContextProps {
  cards: Card[];
  tags: string[];
  currentTag: string;
  isLoading: boolean;
  setCurrentTag: (tag: string) => void;
  setTags: (tags: string[]) => void;
  setCards: (cards: Card[]) => void;
  setLoading: (loading: boolean) => void;
}

export const CardsContext = createContext<CardsContextProps | undefined>(
  undefined
);
