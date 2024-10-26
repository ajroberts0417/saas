import AnimatedCircularProgressBar from "../ui/animated-circular-progress-bar";
import type { Scoreboard } from "../../data/orgchart/types";

interface ScoreboardComponentProps {
  scoreboard: Scoreboard;
}

const ScoreboardComponent = ({ scoreboard }: ScoreboardComponentProps) => {
  console.log("test");
  return (
    <div>
      <div>Cash</div>
      <AnimatedCircularProgressBar
        max={100}
        min={0}
        value={scoreboard.roundNumber}
        gaugePrimaryColor="rgb(79 70 229)"
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
      />
      <div>Cash</div>
      <AnimatedCircularProgressBar
        max={100}
        min={0}
        value={scoreboard.cash}
        gaugePrimaryColor="rgb(79 70 229)"
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
      />
      <div>Cash</div>
      <AnimatedCircularProgressBar
        max={100}
        min={0}
        value={scoreboard.popularityScore}
        gaugePrimaryColor="rgb(79 70 229)"
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
      />
    </div>
  );
};

export default ScoreboardComponent;
