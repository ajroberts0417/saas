import { createContext, useContext, useState, ReactNode } from "react";
import { EmployeeID, Game, OfficeEmployee } from "../data/types";
import { initialGame } from "../data/game";

interface GameContextType {
  getEmployee: (id: EmployeeID) => OfficeEmployee;
  game: Game;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const useGame = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }

  return context;
};

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [game, setGame] = useState<Game>(initialGame);
  function getEmployee(id: EmployeeID) {
    return game.orgchart[id];
  }

  return <GameContext.Provider value={{ getEmployee, game }}>{children}</GameContext.Provider>;
};
