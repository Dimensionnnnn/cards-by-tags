import classNames from "classnames/bind";

import { CardProps } from "../card";
import classes from "./card.module.scss";

const cn = classNames.bind(classes);

type ClassesArgs = Pick<CardProps, "className">;

export const getClasses = ({ className }: ClassesArgs) => {
  const cnRoot = cn("card", className);

  const cnCardImageContainer = cn("card__image-container");

  const cnCardText = cn("card__text");

  const cnCardImage = cn("card__image");

  return {
    cnRoot,
    cnCardImageContainer,
    cnCardText,
    cnCardImage,
  };
};
