import classNames from "classnames/bind";

import { WithLoadingSkeletonProps } from "../with-loading-skeleton";
import classes from "./with-loading-skeleton.module.scss";

const cn = classNames.bind(classes);

type ClassesArgs = Pick<WithLoadingSkeletonProps, "className">;

export const getClasses = ({ className }: ClassesArgs) => {
  const cnRoot = cn("with-loading-skeleton", className);

  return {
    cnRoot,
  };
};
