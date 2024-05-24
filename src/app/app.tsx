import { Main } from "../pages/main/main";
import { CardsProvider } from "../shared/cards-context/cards-provider";

export const App = () => {
  return (
    <CardsProvider>
      <Main />
    </CardsProvider>
  );
};
