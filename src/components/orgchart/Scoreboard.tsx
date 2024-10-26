export type Scoreboard = {
  cash: number;
  popularityScore: number;
  roundNumber: number;
};

interface ScoreboardComponentProps {
  scoreboard: Scoreboard;
}

const ScoreboardComponent = ({ scoreboard }: ScoreboardComponentProps) => {
  console.log("test");
  return (
    <div>
      {/* <AnimatedCircularProgressBar
        max={100}
        min={0}
        value={value}
        gaugePrimaryColor="rgb(79 70 229)"
        gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
      /> */}
    </div>
  );
};

export default ScoreboardComponent;
