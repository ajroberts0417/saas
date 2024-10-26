import { Employee } from "../../data/orgchart";
import EmployeeComponent from "./Employee";
import ScoreboardComponent, { Scoreboard } from "./Scoreboard";

type Office = {
  employees: Employee[];
  scoreboard: Scoreboard;
};

interface OfficeComponents {
  office: Office;
}

const OfficeComponent = ({ office }: OfficeComponents) => {
  return (
    <div>
      <div className="w-full flex justify-center space-x-2 p-6">
        {office.employees.map((employee, key) => (
          <EmployeeComponent key={key} employee={employee} />
        ))}
      </div>
      <ScoreboardComponent scoreboard={office.scoreboard} />
    </div>
  );
};

export default OfficeComponent;
