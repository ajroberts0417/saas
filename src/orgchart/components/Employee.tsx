// Employee Component.

import type { Employee } from "../data/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { GlareCard } from "../../components/ui/glare-card";

interface EmployeeComponentProps {
  employee: Employee;
}

const EmployeeComponent = ({ employee }: EmployeeComponentProps) => {
  const { name, type, cash, avatarUrl, culture, trouble } = employee;
  return (
    <GlareCard width={250} className="flex flex-col items-center justify-center text-white">
      <div className="card w-full shadow-xl">
        <figure>
          <Avatar className="w-20 h-20">
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{type}</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-primary">Cash: ${cash}</div>
            <div className="badge badge-secondary">Culture: {culture}</div>
            <div className="badge badge-accent">Trouble: {trouble.toString()}</div>
          </div>
        </div>
      </div>
    </GlareCard>
  );
};

export default EmployeeComponent;
