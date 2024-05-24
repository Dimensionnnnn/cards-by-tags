import { FC } from "react";
import { emptyMessage } from "./libs/constants";
import { getClasses } from "./styles/get-classes";

export interface ListEmptyProps {
  className?: string;
}

export const ListEmpty: FC<ListEmptyProps> = ({ className }) => {
  const { cnRoot, cnMessage } = getClasses({ className });

  return (
    <div className={cnRoot}>
      <h2 className={cnMessage}>{emptyMessage}</h2>
    </div>
  );
};
