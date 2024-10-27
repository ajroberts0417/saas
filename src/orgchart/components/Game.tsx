import OrgchartLayout from "../layout/OrgchartLayout";
<<<<<<< HEAD
import { useGame } from "../hooks/GameProvider";
import ShopComponent from "./Shop";

const Game = () => {
  const { game } = useGame();
  const { scoreboard, announcement, tooltip, shop } = game;
  return (
    <OrgchartLayout scoreboard={scoreboard} announcement={announcement} tooltip={tooltip}>
      <ShopComponent shop={shop} />
    </OrgchartLayout>
=======
import { initialGame } from "../data/game";
import EmployeeComponent from "./Employee";

const game = initialGame;

const Game = () => {
  const { scoreboard, announcement, tooltip } = game;
  console.log(game.orgchart[0]);
  console.log(game)
  return (
    <div>
      <EmployeeComponent employee={game.orgchart.normie1} />
      {/* <OrgchartLayout scoreboard={scoreboard} announcement={announcement} tooltip={tooltip}>
        <div>Hello World</div>
      </OrgchartLayout> */}
    </div>
>>>>>>> main
  );
};

export default Game;
