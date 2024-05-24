import classNames from "classnames/bind";

import { CardsProps } from "../cards";
import classes from "./cards.module.scss";

const cn = classNames.bind(classes);

type ClassesArgs = Pick<CardsProps, "className">;

export const getClasses = ({ className }: ClassesArgs) => {
  const cnRoot = cn("cards", className);

  return {
    cnRoot,
  };
};
