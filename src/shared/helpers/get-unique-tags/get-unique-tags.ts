import { Card } from "../../api/types";
import { firstTag } from "../../libs/constants";

export const getUniqueTags = (cards: Card[]): string[] => {
  const tags = new Set(cards.flatMap((card) => card.tags ?? []));
  return [firstTag as string, ...tags];
};
