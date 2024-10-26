import { createContext, useContext, useState, ReactNode } from "react";

interface GameContextType {
  getEmployee: () => void;
  game: string;
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
  const [game, setGame] = useState("example game");
  const getEmployee = () => {};

  return <GameContext.Provider value={{ getEmployee, game }}>{children}</GameContext.Provider>;
};
