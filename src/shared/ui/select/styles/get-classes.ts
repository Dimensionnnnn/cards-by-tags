import classNames from "classnames/bind";

import { SelectProps } from "../select";
import classes from "./select.module.scss";

const cn = classNames.bind(classes);

type ClassesArgs = Pick<SelectProps, "className">;

export const getClasses = ({ className }: ClassesArgs) => {
  const cnRoot = cn("select", className);

  return {
    cnRoot,
  };
};
