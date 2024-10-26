import OrgchartLayout from "../layout/OrgchartLayout";
import { initialGame } from "../data/game";

const game = initialGame;

const Game = () => {
  const { scoreboard, announcement, tooltip } = game;
  return (
    <OrgchartLayout scoreboard={scoreboard} announcement={announcement} tooltip={tooltip}>
      <div>Hello World</div>
    </OrgchartLayout>
  );
};

export default Game;
