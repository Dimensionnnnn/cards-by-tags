import { Card } from "../../api/types";
import { firstTag } from "../../libs/constants";

export const getCardsByUniqueTag = (cards: Card[], tag?: string) => {
  if (!tag || tag === firstTag) {
    return cards;
  }

  return cards.filter((card) => card.tags?.includes(tag));
};
