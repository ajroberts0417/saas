import { useContext } from "react";
import { Office } from "../data/types";
import EmployeeComponent from "./Employee";

interface OfficeComponentProps {
  office: Office;
}

function useGame() {
  const context = useContext(GameContext);
  const { getEmployee, game } = context;

  return { getEmployee, game };
}

const OfficeComponent = ({ office }: OfficeComponentProps) => {
  const { getEmployee } = useGame();

  return (
    <div className="w-full flex justify-center space-x-2 p-6">
      {office.employeesAtOffice.map((employeeId, key) => (
        <EmployeeComponent key={key} employee={getEmployee(employeeId)} />
      ))}
    </div>
  );
};

export default OfficeComponent;
