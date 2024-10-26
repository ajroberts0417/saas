
interface Tower {
    id: string;
    name: string;
    position: Tile;
    attackRange: number;
    damage: number;
    attackSpeed: number;
}

interface RangedTower extends Tower {

}

interface Game {
    tiles: Tile[]; // 144 tiles
    salesReps: Tower[];
}


interface Tile {
    id: string;
    type: TileType;
    occupied: boolean;
}

enum TileType {
    path = "path",
    terrain = "terrain",
    open = "open",
}