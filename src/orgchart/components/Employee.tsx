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
    <GlareCard width={256} className="flex flex-col items-center justify-center text-white">
      <div className="card w-full h-[256px] shadow-xl">
        <figure className="w-full h-1/2 overflow-hidden flex-shrink-0">
          <img src={avatarUrl} alt={name} className="absolute top-0 left-0 w-full object-cover" />
        </figure>
        <div className="card-body z-50 bg-black bg-opacity-50">
          <h2 className="card-title">
            {type}
          </h2>
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
