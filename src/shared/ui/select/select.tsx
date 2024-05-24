import { getClasses } from "./styles/get-classes";
import { withLoadingSkeleton } from "../../helpers/with-loading-skeleton/with-loading-skeleton";
import { DataHandler } from "../data-handler/data-handler";
import { SelectItem } from "../select-item/select-item";

export interface SelectProps {
  className?: string;
  tags?: string[];
  currentTag?: string;
}

export const Select = withLoadingSkeleton(
  ({ className, tags, currentTag }: SelectProps) => {
    const { cnRoot } = getClasses({ className });

    return (
      <DataHandler data={tags}>
        <div className={cnRoot}>
          {tags?.map((tag) => (
            <SelectItem tag={tag} isActive={tag === currentTag} />
          ))}
        </div>
      </DataHandler>
    );
  }
);
