// Norman's Game: Sales Pipeline

const TILE_SIZE = 64; // number of pixels for each tile
const MAP_WIDTH = 11;
const MAP_HEIGHT = 11;

type OtherTowerNames = "Sales Engineer" | "Call Center";

type TowerName = "VP Sales" | "Account Exec" | "Sales Manager" | "SDR" | "BDR";

const promotionCosts: Record<TowerName, number> = {
    "SDR": 0,
    "BDR": 10,
    "Account Exec": 20,
    "Sales Manager": 30,
    "VP Sales": 40,
}

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
    position: TileIndex;
}

interface RangedTower extends Tower {

}

interface Lead {
    id: string;
    name: string;
    pathPosition: PathIndex; // maybe just the tileIndex
    hp: number; // 100
    speed: number; // 1
    payment: number; // 10
}

type PathIndex = number;

// the path goes from one side of the screen to the other, and when they leave they are LOST
type Path = TileIndex[];

// good example path is horizontally from left to right
// in the center of the map
const startTile = 0 + Math.floor(MAP_HEIGHT / 2) * MAP_WIDTH;

// in the center row:
// [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const examplePath = Array.from({ length: MAP_WIDTH }, (_, i) => startTile + i);

interface Game {
    map: {
        tiles: Tile[]; // 144 tiles
        towers: PlacedTower[];
        leads: Lead[];
        path: Path; // this is a memo that makes it easy and fast to calculate the next position in the path.
    }
    salesQuota: number; // sales quota must be met each wave, and if you fail then you lose.
    wave: number; // starts at 1
    shop: Record<TowerName, ShopTower>;
}

type TileIndex = number;

// the position of the tile in the array
interface Tile {
    index: TileIndex;
    type: "path" | "terrain" | "open";
}

// return the next game state; this happens every single tick and is the main game loop.
function tick(game: Game): Game {
    return game;
}

// is TileAvailable tells us if any particular tile is available to be placed.
function isTileAvailable(tileIndex: TileIndex, game: Game): boolean {
    const tile = game.map.tiles[tileIndex];
    if (tile.type === "path" || tile.type === "terrain") return false
    // Check if any tower is occupying the tile
    for (const tower of game.map.towers) {
        if (tower.position === tileIndex) {
            return false;
        }
    }
    return true;
}


// returns the next position in the path or if the end of the path is reached, it returns -1
function getNextPosition(currentPathPosition: PathIndex, game: Game): TileIndex {
    if (currentPathPosition === game.map.path.length - 1) {
        return -1
    }
    return game.map.path[currentPathPosition + 1];
}


// functions for managing turns:
function getNextWave(game: Game): Game {
    return {
        ...game,
        wave: game.wave + 1,
    }
}