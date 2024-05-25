import { useCardsContext } from "../../shared/cards-context/use-cards-context";
import { Select as UISelect } from "../../shared/ui/select/select";
import { getClasses } from "./styles/get-classes";

export const Select = () => {
  const context = useCardsContext();

  const { cnRoot } = getClasses();

  return (
    <UISelect
      className={cnRoot}
      tags={context.tags}
      currentTag={context.currentTag}
      isLoading={context.isLoading}
    />
  );
};
