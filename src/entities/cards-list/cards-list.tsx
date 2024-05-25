import { Cards } from "../../shared/ui/cards/cards";
import { useCardsContext } from "../../shared/cards-context/use-cards-context";
import { getCardsByUniqueTag } from "../../shared/helpers/get-cards-by-unique-tag/get-cards-by-unique-tag";

export const CardsList = () => {
  const context = useCardsContext();

  const filteredCards = getCardsByUniqueTag(context.cards, context.currentTag);

  return <Cards cards={filteredCards} isLoading={context.isLoading} />;
};
