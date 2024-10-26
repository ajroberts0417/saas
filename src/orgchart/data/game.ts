// you are running a hybrid-remote SaaS company in NYC.
// your employees don't all come in every day, because it's hybrid, so they can choose to come into work or not.
// every round there is a work day, where employees come into the office one at a time and get work done.
// after every round there is a "recruiting" round, where you can hire new employees and "improve the morale" of the company.
// then the next work day happens.
import { AllEmployees, Game, GameElement, GameText, OfficeEmployee, Shop } from "./types";
import techBroAvatar from "../assets/techbro.png";
import normieAvatar from "../assets/normie.png";

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

export const allEmployees: AllEmployees = {
  normie: {
    name: "Sarah",
    avatarUrl: normieAvatar,
    type: "normie",
    cash: 0,
    culture: 1,
    trouble: false,
    tooltipInfo: {
      title: "Normie",
      description: [{ color: "yellow", text: "+1 Culture" }],
    },
  },
  unethical: {
    name: "John",
    avatarUrl: normieAvatar,
    type: "unethical",
    cash: 1,
    culture: 2,
    trouble: true,
    tooltipInfo: {
      title: "Unethical",
      description: [
        { color: "white", text: "trouble" },
        { color: "green", text: "+1 Cash" },
        { color: "yellow", text: "+2 Culture" },
      ],
    },
  },
  techbro: {
    name: "Jim",
    avatarUrl: techBroAvatar,
    type: "techbro",
    cash: 1,
    culture: 0,
    trouble: false,
    tooltipInfo: {
      title: "Techbro",
      description: [{ color: "green", text: "+1 Cash" }],
    },
  },
  hipster: {
    name: "Jill",
    avatarUrl: normieAvatar,
    type: "hipster",
    cash: 1,
    culture: 2,
    trouble: true,
    tooltipInfo: {
      title: "Hipster",
      description: [
        { color: "white", text: "trouble" },
        { color: "green", text: "+1 Cash" },
        { color: "yellow", text: "+2 Culture" },
      ],
    },
  },
  hipsterTechbro: {
    name: "Hank",
    avatarUrl: techBroAvatar,
    type: "hipsterTechbro",
    cash: 1,
    culture: 2,
    trouble: true,
    tooltipInfo: {
      title: "Hipster Techbro",
      description: [
        { color: "white", text: "trouble" },
        { color: "green", text: "+1 Cash" },
        { color: "yellow", text: "+2 Culture" },
      ],
    },
  },
  CEO: {
    name: "Catherine",
    avatarUrl: normieAvatar,
    type: "CEO",
    cash: 1,
    culture: 2,
    trouble: true,
    tooltipInfo: {
      title: "CEO",
      description: [
        { color: "white", text: "trouble" },
        { color: "green", text: "+1 Cash" },
        { color: "yellow", text: "+2 Culture" },
      ],
    },
  },
  HR: {
    name: "Frank",
    avatarUrl: techBroAvatar,
    type: "HR",
    cash: 1,
    culture: 2,
    trouble: true,
    tooltipInfo: {
      title: "HR",
      description: [
        { color: "white", text: "trouble" },
        { color: "green", text: "+1 Cash" },
        { color: "yellow", text: "+2 Culture" },
      ],
    },
  },
};

export const initialShop: Shop = {
  normie: {
    ...allEmployees.normie,
    cost: 100,
    numberRemaining: 4,
  },
  unethical: {
    ...allEmployees.unethical,
    cost: 100,
    numberRemaining: 4,
  },
  techbro: {
    ...allEmployees.techbro,
    cost: 100,
    numberRemaining: 4,
  },
  hipster: {
    ...allEmployees.hipster,
    cost: 100,
    numberRemaining: 4,
  },
  hipsterTechbro: {
    ...allEmployees.hipsterTechbro,
    cost: 100,
    numberRemaining: 4,
  },
  CEO: {
    ...allEmployees.CEO,
    cost: 100,
    numberRemaining: 4,
  },
  HR: {
    ...allEmployees.HR,
    cost: 100,
    numberRemaining: 4,
  },
};

const initialOrgchart: Record<string, OfficeEmployee> = {
  normie1: {
    id: "normie1",
    ...allEmployees.normie,
  },
  normie2: {
    id: "normie2",
    ...allEmployees.normie,
  },
  normie3: {
    id: "normie3",
    ...allEmployees.normie,
  },
  unethical1: {
    id: "unethical1",
    ...allEmployees.unethical,
  },
  unethical2: {
    id: "unethical2",
    ...allEmployees.unethical,
  },
  unethical3: {
    id: "unethical3",
    ...allEmployees.unethical,
  },
  techbro1: {
    id: "techbro1",
    ...allEmployees.techbro,
  },
  techbro2: {
    id: "techbro2",
    ...allEmployees.techbro,
  },
  techbro3: {
    id: "techbro3",
    ...allEmployees.techbro,
  },
};

export const initialText: GameText = { color: "white", text: "Test Announcement!" };

export const initialGame: Game = {
  shop: initialShop,
  orgchart: initialOrgchart,
  phase: "shop",
  office: { employeesAtOffice: [], employeesAtHome: [...Object.keys(initialOrgchart)] },
  scoreboard: { cash: 0, popularityScore: 0, roundNumber: 0, stars: 0 },
  selectedElement: null,
  announcement: initialText,
  tooltip: { title: "Tooltip Title", description: [initialText] },
};

export function selectElement(gameElement: GameElement, game: Game): Game {
  return {
    ...game,
    selectedElement: gameElement,
    tooltip: gameElement.tooltipInfo,
  };
}

export function updateAnnouncement(announcement: GameText, game: Game): Game {
  return {
    ...game,
    announcement,
  };
}
