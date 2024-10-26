import { useGame } from "../hooks/GameProvider";
import { Office } from "../data/types";
import EmployeeComponent from "./Employee";

interface OfficeComponentProps {
  office: Office;
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
