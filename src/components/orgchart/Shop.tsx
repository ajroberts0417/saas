import { PotentialHire } from "../../data/orgchart";
import PotentialHireComponent from "./PotentialHire";

interface ShopComponentProps {
  potentialHires: PotentialHire[];
}

const ShopComponent = ({ potentialHires }: ShopComponentProps) => {
  return (
    <div className="w-full flex justify-center space-x-2 p-6">
      {potentialHires.map((hire, key) => (
        <PotentialHireComponent key={key} potentialHire={hire} />
      ))}
    </div>
  );
};

export default ShopComponent;
