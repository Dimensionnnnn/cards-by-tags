import { FC } from "react";
import { getClasses } from "./styles/get-classes";
import { Card as CardType } from "../../api/types";

export interface CardProps {
  className?: string;
  card: CardType;
}

export const Card: FC<CardProps> = ({ className, card }) => {
  const { cnRoot, cnCardImageContainer, cnCardImage, cnCardText } = getClasses({
    className,
  });

  return (
    <div className={cnRoot} id={card.id}>
      <div
        className={cnCardImageContainer}
        style={{ backgroundColor: card.bgColor }}
      >
        <img src={card.image} alt={card.name} className={cnCardImage} />
      </div>
      <p className={cnCardText}>{card.name}</p>
    </div>
  );
};
