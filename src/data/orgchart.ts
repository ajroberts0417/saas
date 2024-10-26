// you are running a hybrid-remote SaaS company in NYC.
// your employees don't all come in every day, because it's hybrid, so they can choose to come into work or not.
// every round there is a work day, where employees come into the office one at a time and get work done.
// after every round there is a "recruiting" round, where you can hire new employees and "improve the morale" of the company.
// then the next work day happens.

// there are employees who are "unethical" and will do anything to get ahead.
// if you draw 3 of them in the office, the NYT will write a scandal piece and you're slammed in the news.
// you gain nothing for that work day.

// there are 25 rounds in the game, you start with 8 employees in the deck.
// and you start with 4 slots at the office.

// your goal is to grow your company and IPO.

// if you have too much trouble... you get shut down by the New York Times! haha
// SCANDAL: BREAKING: <SAAS> slammed for unethical practices

// you spend money to increase headcount

// okay so you never make money (lol), you just gain either customers
// or you gain reputation
export const allEmployees: AllEmployees = {};

export type AllEmployees = Record<string, Employee>;

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

// e.g.
// {
//     normie: {
//         ...allEmployees.normie
//         cost: 100,
//         numberRemaining: 4,
//     },
//     unethical: {
//         cost: 100,
//         numberRemaining: 4,
//     },
// ...
// }
export type Shop = Record<EmployeeType, PotentialHire>;

export interface Ability {
  name: string;
  type: "active" | "enter" | "onScore";
  description: string;
  effect: (employee: Employee, gameState: GameState) => GameState;
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
};

export type Office = {
  employees: Employee[];
  scoreboard: Scoreboard;
};

/*
units have:
- popularity (number)
- cash (number)
- trouble (bool)
- passive ability
- active ability
- score ability
- on enter ability

on enter ability:
- permanently increase this units score by 1
- invite another guest
- invite another 2 guests

passive abilities:
- reduce trouble

score abilities:
- gain 2 popularity for each trouble
- gain 1 popularity for each normie

active abilities are:
- boot a guest
- look at the next guest (scry)
- let the next guest in and score them
- score another guest (photographer)
- refresh all abilities
- increase 

*/
