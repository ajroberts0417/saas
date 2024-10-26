import { useState, useEffect } from "react";
import {
  startWave,
  Game,
  initialGameState,
  updateGame,
} from "../data/salespipeline/salespipeline";

const TILE_SIZE = 64;

export function SalesPipeline() {
  const [game, setGame] = useState<Game>(initialGameState);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      setGame((prevGame) => updateGame(prevGame));
    }, 1000); // Update every second

    return () => clearInterval(gameLoop);
  }, []);

  const handleStartWave = () => {
    setGame((prevGame) => startWave(prevGame));
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "lightblue",
        padding: "20px",
      }}
    >
      <button
        onClick={handleStartWave}
        style={{
          backgroundColor: "lightgreen",
          borderRadius: "5px",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        Start Wave
      </button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: `${11 * TILE_SIZE}px`,
        }}
      >
        {game.map.tiles.map((tile, index) => (
          <div
            key={index}
            style={{
              width: `${TILE_SIZE}px`,
              height: `${TILE_SIZE}px`,
              backgroundColor: tile.type === "path" ? "tan" : "green",
              border: "1px solid black",
              position: "relative",
            }}
          >
            {game.map.towers.find((tower) => tower.position === index) && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "gray",
                  borderRadius: "50%",
                }}
              />
            )}
            {game.map.activeLeads.find((lead) => {
              const pathIndex = Math.floor(lead.pathPosition);
              return (
                pathIndex >= 0 &&
                pathIndex < game.map.path.length &&
                game.map.path[pathIndex] === index
              );
            }) && (
              <div
                style={{
                  width: "50%",
                  height: "50%",
                  backgroundColor: "red",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "25%",
                  left: "25%",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SalesPipeline;
