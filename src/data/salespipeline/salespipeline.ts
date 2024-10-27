type TowerName = "vpSales" | "accountExec" | "salesManager" | "sdr" | "bdr";

interface TowerBase {
  name: TowerName;
  avatarUrl: string;
  attackRange: number;
  damage: number;
  attackSpeed: number;
}

interface ShopTower extends TowerBase {
  cost: number;
}

interface PlacedTower extends TowerBase {
  id: string;
  position: number;
}

interface Lead {
  id: string;
  name: string;
  pathPosition: number;
  hp: number; // 100
  speed: number; // 1
  payment: number; // 10
}

export interface Game {
  map: {
    tiles: Tile[]; // 144 tiles
    towers: PlacedTower[];
    activeLeads: Lead[];
    path: number[]; // this is a memo that makes it easy and fast to calculate the next position in the path.
  };
  waves: Wave[];
  currentWave: number;
  //shop: Record<TowerName, ShopTower>;
}

interface Wave {
  id: string;
  incomingLeads: Lead[];
  salesQuota: number;
}

// the position of the tile in the array
interface Tile {
  index: number;
  type: "path" | "terrain" | "open";
}

const TILE_SIZE = 64; // number of pixels for each tile
const MAP_WIDTH = 11;
const MAP_HEIGHT = 11;

// good example path is horizontally from left to right
// in the center of the map
const startTile = 0 + Math.floor(MAP_HEIGHT / 2) * MAP_WIDTH;

// in the center row:
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const examplePath = Array.from({ length: MAP_WIDTH }, (_, i) => startTile + i);
const waves: Wave[] = [
  {
    id: "wave1",
    incomingLeads: [
      {
        id: "lead1",
        name: "John Doe",
        pathPosition: -5,
        hp: 100,
        speed: 1,
        payment: 10,
      },
      {
        id: "lead2",
        name: "Jane Smith",
        pathPosition: -1,
        hp: 100,
        speed: 1,
        payment: 10,
      },
      {
        id: "lead3",
        name: "Bob Johnson",
        pathPosition: 0,
        hp: 100,
        speed: 1,
        payment: 10,
      },
    ],
    salesQuota: 30,
  },
  {
    id: "wave2",
    incomingLeads: [
      {
        id: "lead4",
        name: "Alice Brown",
        pathPosition: 0,
        hp: 150,
        speed: 1,
        payment: 15,
      },
      {
        id: "lead5",
        name: "Charlie Davis",
        pathPosition: 0,
        hp: 150,
        speed: 1,
        payment: 15,
      },
      {
        id: "lead6",
        name: "Eva White",
        pathPosition: 0,
        hp: 150,
        speed: 1,
        payment: 15,
      },
      {
        id: "lead7",
        name: "Frank Miller",
        pathPosition: 0,
        hp: 150,
        speed: 1,
        payment: 15,
      },
    ],
    salesQuota: 60,
  },
  {
    id: "wave3",
    incomingLeads: [
      {
        id: "lead8",
        name: "Grace Lee",
        pathPosition: 0,
        hp: 200,
        speed: 1,
        payment: 20,
      },
      {
        id: "lead9",
        name: "Henry Wilson",
        pathPosition: 0,
        hp: 200,
        speed: 1,
        payment: 20,
      },
      {
        id: "lead10",
        name: "Ivy Taylor",
        pathPosition: 0,
        hp: 200,
        speed: 1,
        payment: 20,
      },
      {
        id: "lead11",
        name: "Jack Anderson",
        pathPosition: 0,
        hp: 200,
        speed: 1,
        payment: 20,
      },
      {
        id: "lead12",
        name: "Karen Martin",
        pathPosition: 0,
        hp: 200,
        speed: 1,
        payment: 20,
      },
    ],
    salesQuota: 100,
  },
];

export const initialGameState: Game = {
  map: {
    tiles: Array.from({ length: MAP_WIDTH * MAP_HEIGHT }, (_, index) => ({
      index,
      type: examplePath.includes(index) ? "path" : "open",
    })),
    towers: [],
    activeLeads: [],
    path: examplePath,
  },
  waves: waves,
  currentWave: 0,
};
//Starts a new wave by loading the incoming leads into the active leads and incrementing the current wave
export function startWave(game: Game): Game {
  // Deep copy the incoming leads
  const newActiveLeads = game.waves[game.currentWave].incomingLeads.map(
    (lead) => ({ ...lead })
  );
  //Do all the leads become active right away?
  game.map.activeLeads = newActiveLeads;

  return {
    ...game,
    map: {
      ...game.map,
      activeLeads: newActiveLeads,
    },
    currentWave: game.currentWave + 1,
  };
}

//need to stagger the leads so they come in one at a time
function moveLeads(game: Game): Game {
  const updatedLeads = game.map.activeLeads.map((lead) => ({
    ...lead,
    pathPosition: lead.pathPosition + lead.speed,
  }));

  const remainingLeads = updatedLeads.filter(
    (lead) => lead.pathPosition < game.map.path.length
  );

  return {
    ...game,
    map: {
      ...game.map,
      activeLeads: remainingLeads,
    },
  };
}

// Updates the game by moving the leads and checking if any leads have reached the end of the path
export function updateGame(game: Game): Game {
  return moveLeads(game);
}

//TODO:
// - Add towers
// - Add logic to check if leads have reached the end of the path
// - Add logic to check if leads have been converted
// - Add logic to check if leads have been lost
// - Add logic to check if wave is complete
