import OrgchartLayout from "../layout/OrgchartLayout";
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
  );
};

export default Game;
