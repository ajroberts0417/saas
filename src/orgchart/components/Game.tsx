import OrgchartLayout from "../layout/OrgchartLayout";
import { useGame } from "../hooks/GameProvider";
import ShopComponent from "./Shop";
import EmployeeComponent from "./Employee";

const Game = () => {
  const { game } = useGame();
  const { scoreboard, announcement, tooltip, shop } = game;
  return (
    <OrgchartLayout scoreboard={scoreboard} announcement={announcement} tooltip={tooltip}>
      <div>
        <ShopComponent shop={shop} />
        <EmployeeComponent employee={game.orgchart.normie1} />
      </div>
    </OrgchartLayout>
  );
};

export default Game;
