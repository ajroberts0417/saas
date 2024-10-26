import type { Employee } from "../data/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

interface EmployeeComponentProps {
  employee: Employee;
}

const EmployeeComponent = ({ employee }: EmployeeComponentProps) => {
  const { name, type, cash, culture, trouble } = employee;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{type}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>IMAGE</p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-col justify-center">
          <p>Cash: ${cash}</p>
          <p>Culture: {culture}</p>
          <p>Trouble: {trouble.toString()}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EmployeeComponent;