import classNames from "classnames/bind";

import { MainProps } from "../main";
import classes from "./main.module.scss";

const cn = classNames.bind(classes);

type ClassesArgs = Pick<MainProps, "className">;

export const getClasses = ({ className }: ClassesArgs) => {
  const cnRoot = cn("main", className);

  return {
    cnRoot,
  };
};
