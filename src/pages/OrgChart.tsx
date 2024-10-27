import Game from "../orgchart/components/Game";
<<<<<<< HEAD
import { GameProvider } from "../orgchart/hooks/GameProvider";
=======
>>>>>>> main

export function OrgChart() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-background">
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
}
