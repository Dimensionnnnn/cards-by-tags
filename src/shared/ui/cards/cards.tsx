import { getClasses } from "./styles/get-classes";
import { Card as CardType } from "../../api/types";
import { withLoadingSkeleton } from "../../helpers/with-loading-skeleton/with-loading-skeleton";
import { DataHandler } from "../data-handler/data-handler";
import { Card } from "../card/card";

export interface CardsProps {
  className?: string;
  cards?: CardType[];
}

export const Cards = withLoadingSkeleton(({ className, cards }: CardsProps) => {
  const { cnRoot } = getClasses({ className });

  return (
    <DataHandler data={cards}>
      <div className={cnRoot}>
        {cards?.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </DataHandler>
  );
});
