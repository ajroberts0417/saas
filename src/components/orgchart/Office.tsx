import { Office, Scoreboard } from "../../data/orgchart/types";
import EmployeeComponent from "./Employee";
import ScoreboardComponent from "./Scoreboard";

interface OfficeComponents {
    office: Office;
    scoreboard: Scoreboard;
}

const OfficeComponent = ({ office, scoreboard }: OfficeComponents) => {
    return (
        <div>
            <div className="w-full flex justify-center space-x-2 p-6">
                {office.employees.map((employee, key) => (
                    <EmployeeComponent key={key} employee={employee} />
                ))}
            </div>
            <ScoreboardComponent scoreboard={scoreboard} />
        </div>
    );
};

export default OfficeComponent;
