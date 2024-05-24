import { FC } from "react";
import { getClasses } from "./styles/get-classes";
import { useCardsContext } from "../../cards-context/use-cards-context";

export interface SelectItemProps {
  className?: string;
  isActive?: boolean;
  tag: string;
}

export const SelectItem: FC<SelectItemProps> = ({
  className,
  isActive,
  tag,
}) => {
  const { cnRoot } = getClasses({ className, isActive });
  const context = useCardsContext();

  const handleClick = (tag: string) => {
    context.setCurrentTag(tag);
  };

  return (
    <button className={cnRoot} onClick={() => handleClick(tag)} id={tag}>
      <span>{tag}</span>
    </button>
  );
};
