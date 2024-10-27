import Game from "../orgchart/components/Game";
import { GameProvider } from "../orgchart/hooks/GameProvider";

export function OrgChart() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-background">
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
}
