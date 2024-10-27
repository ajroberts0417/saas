import OrgchartLayout from "../layout/OrgchartLayout";
import { useGame } from "../hooks/GameProvider";
import ShopComponent from "./Shop";

const Game = () => {
  const { game } = useGame();
  const { scoreboard, announcement, tooltip, shop } = game;
  return (
    <OrgchartLayout scoreboard={scoreboard} announcement={announcement} tooltip={tooltip}>
      <ShopComponent shop={shop} />
    </OrgchartLayout>
  );
};

export default Game;
