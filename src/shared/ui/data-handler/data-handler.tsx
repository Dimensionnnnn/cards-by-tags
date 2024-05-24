import { FC } from "react";
import { ListEmpty } from "../list-empty/list-empty";

export interface DataHandlerProps {
  data?: unknown[];
  children?: React.ReactNode;
}

export const DataHandler: FC<DataHandlerProps> = ({ data, children }) => {
  if (!data?.length) {
    return <ListEmpty />;
  }

  return children;
};
