import EmployeeComponent from "./components/orgchart/Employee";
import { Employee } from "./data/orgchart";

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

const DanielTest = () => {
  return (
    <div className="max-w-96">
      {employees.map((employee, key) => (
        <EmployeeComponent key={key} employee={employee} />
      ))}
    </div>
  );
};

export default DanielTest;
