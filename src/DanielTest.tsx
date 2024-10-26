import Shop from "./components/orgchart/Shop";
import { Employee, PotentialHire } from "./data/orgchart";

export const employees: Employee[] = [
  {
    name: "Alice Smith",
    type: "normie",
    cash: 3000,
    culture: 50,
    trouble: false,
  },
  {
    name: "Bob Johnson",
    type: "unethical",
    cash: 5000,
    culture: 20,
    trouble: true,
  },
  {
    name: "Charlie Rivera",
    type: "techbro",
    cash: 10000,
    culture: 70,
    trouble: false,
  },
  {
    name: "Daisy Lee",
    type: "hipster",
    cash: 2000,
    culture: 80,
    trouble: false,
  },
  {
    name: "Evan Kim",
    type: "hipsterTechbro",
    cash: 8000,
    culture: 90,
    trouble: true,
  },
];

export const potentialHires: PotentialHire[] = [
  {
    name: "Zane Wilder",
    type: "normie",
    cash: 2000,
    culture: 40,
    trouble: false,
    cost: 1000,
    numberRemaining: 5,
  },
  {
    name: "Olivia Black",
    type: "unethical",
    cash: 3500,
    culture: 15,
    trouble: true,
    cost: 1500,
    numberRemaining: 2,
  },
  {
    name: "Liam Torres",
    type: "techbro",
    cash: 6000,
    culture: 65,
    trouble: false,
    cost: 3000,
    numberRemaining: 3,
  },
  {
    name: "Amelia White",
    type: "hipster",
    cash: 2500,
    culture: 85,
    trouble: false,
    cost: 1200,
    numberRemaining: 4,
  },
  {
    name: "Miles Young",
    type: "hipsterTechbro",
    cash: 7000,
    culture: 90,
    trouble: true,
    cost: 4500,
    numberRemaining: 1,
  },
  {
    name: "Samantha Gray",
    type: "CEO",
    cash: 12000,
    culture: 60,
    trouble: false,
    cost: 8000,
    numberRemaining: 2,
  },
  {
    name: "Harper Lee",
    type: "HR",
    cash: 4000,
    culture: 75,
    trouble: false,
    cost: 2000,
    numberRemaining: 6,
  },
];

const DanielTest = () => {
  return (
    <div>
      <Shop potentialHires={potentialHires} />
    </div>
  );
};

export default DanielTest;
