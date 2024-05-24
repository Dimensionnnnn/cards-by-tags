import classNames from "classnames/bind";

import classes from "./select.module.scss";

const cn = classNames.bind(classes);

export const getClasses = () => {
  const cnRoot = cn("select");

  return {
    cnRoot,
  };
};
