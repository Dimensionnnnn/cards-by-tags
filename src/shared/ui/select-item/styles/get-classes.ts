import classNames from "classnames/bind";

import { SelectItemProps } from "../select-item";
import classes from "./select-item.module.scss";

const cn = classNames.bind(classes);

type ClassesArgs = Pick<SelectItemProps, "className" | "isActive">;

export const getClasses = ({ className, isActive }: ClassesArgs) => {
  const cnRoot = cn(
    "select-item",
    { "select-item--active": isActive },
    className
  );

  return {
    cnRoot,
  };
};
