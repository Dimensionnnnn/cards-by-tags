import { FC, ReactNode, useState } from "react";
import { Card } from "../api/types";
import { CardsContext } from "./cards-context";

interface CardsProviderProps {
  children: ReactNode;
}

export const CardsProvider: FC<CardsProviderProps> = ({
  children,
}: CardsProviderProps) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setTagsState = (newTags: string[]) => {
    setTags(newTags);
  };

  const setCurrentTagState = (newTag: string) => {
    setCurrentTag(newTag);
  };

  const setCardsState = (newCards: Card[]) => {
    setCards(newCards);
  };

  const setLoadingState = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <CardsContext.Provider
      value={{
        cards,
        tags,
        currentTag,
        isLoading,
        setCurrentTag: setCurrentTagState,
        setTags: setTagsState,
        setCards: setCardsState,
        setLoading: setLoadingState,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
};
