export type AllEmployees = Record<EmployeeType, Employee>;

export type OrgChart = Employee[];

export type EmployeeType =
    | "normie"
    | "unethical"
    | "techbro"
    | "hipster"
    | "hipsterTechbro"
    | "CEO"
    | "HR";

export interface Employee {
    name: string;
    avatarUrl: string;
    type: EmployeeType;
    cash: number;
    culture: number; //
    trouble: boolean;
    activeAbility?: ActiveAbility;
    enterAbility?: EnterAbility;
    onScoreAbility?: OnScoreAbility;
}

// Potential Hires show up in the shop NOT in the game.
export interface PotentialHire extends Employee {
    cost: number; // cost to hire this employee in dollars
    numberRemaining: number; // how many of this employee are left in the shop
}

export interface OfficeEmployee extends Employee {
    id: string;
}

export interface Ability {
    name: string;
    type: "active" | "enter" | "onScore";
    description: string;
    effect: (employee: Employee, game: Game) => Game;
}

export type EnterAbilities =
    | "permanentIncreaseScore"
    | "reduceTrouble"
    | "inviteGuest"
    | "inviteTwoGuests";

export interface EnterAbility extends Ability {
    name: EnterAbilities;
    type: "enter";
}

export type ActiveAbilities =
    | "bootGuest"
    | "scry"
    | "letGuestIn"
    | "scoreGuest"
    | "refreshAbilities"
    | "increaseCulture";

export interface ActiveAbility extends Ability {
    name: ActiveAbilities;
    type: "active";
}

export type OnScoreAbilities = "gainPopularityForTrouble" | "gainPopularityForNormie";

export interface OnScoreAbility extends Ability {
    name: OnScoreAbilities;
    type: "onScore";
}

export type Scoreboard = {
    cash: number;
    popularityScore: number;
    roundNumber: number;
    stars: number; // could be 0 1 2 3 or 4
};
// if you ever get 4 stars and end the party, you win!!

export type Office = {
    employees: Employee[];
};

export type GameText = {
    color: "white" | "green" | "yellow";
    text: string;
};

export type TooltipInfo = {
    title: string;
    description: GameText[]; // array of game text to be rendered line by line.
};

export interface GameElement {
    tooltipInfo: TooltipInfo;
}


export type Shop = Record<EmployeeType, PotentialHire>;
export type Game = {
    shop: Shop;
    office: Office;
    scoreboard: Scoreboard;
    selectedElement: GameElement | null;
    announcement: GameText;
    tooltip: TooltipInfo;
};