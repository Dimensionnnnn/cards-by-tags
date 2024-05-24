import { FC, useEffect } from "react";
import { getClasses } from "./styles/get-classes";
import { getCourses } from "../../shared/api/get-courses";
import { getUniqueTags } from "../../shared/helpers/get-unique-tags/get-unique-tags";
import { useCardsContext } from "../../shared/cards-context/use-cards-context";
import { Select } from "../../entities/select/select";
import { CardsList } from "../../entities/cards-list/cards-list";

export interface MainProps {
  className?: string;
}

export const Main: FC<MainProps> = ({ className }) => {
  const { cnRoot } = getClasses({ className });

  const context = useCardsContext();

  useEffect(() => {
    (async () => {
      context.setLoading(true);

      const data = await getCourses();
      context.setCards(data);

      context.setLoading(false);

      const uniqueTags = getUniqueTags(data);
      context.setTags(uniqueTags);
    })();
  });

  return (
    <div className={cnRoot}>
      <Select />
      <CardsList />
    </div>
  );
};
