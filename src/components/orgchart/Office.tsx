import { Office } from "../../data/orgchart";
import EmployeeComponent from "./Employee";

interface OfficeComponents {
  office: Office;
}

const OfficeComponent = ({ office }: OfficeComponents) => {
  return (
    <div className="w-full flex justify-center space-x-2 p-6">
      {office.employees.map((employee, key) => (
        <EmployeeComponent key={key} employee={employee} />
      ))}
    </div>
  );
};

export default OfficeComponent;
