import classNames from "classnames/bind";

import { ListEmptyProps } from "../list-empty";
import classes from "./list-empty.module.scss";

const cn = classNames.bind(classes);

type ClassesArgs = Pick<ListEmptyProps, "className">;

export const getClasses = ({ className }: ClassesArgs) => {
  const cnRoot = cn("list-empty", className);

  const cnMessage = cn("list-empty__message");

  return {
    cnRoot,
    cnMessage,
  };
};
