import { PotentialHire, Shop } from "../../data/orgchart";
import PotentialHireComponent from "./PotentialHire";

interface ShopComponentProps {
  shop: Shop;
}

const ShopComponent = ({ shop }: ShopComponentProps) => {
  const potentialHires: PotentialHire[] = Object.entries(shop).map(([key, value]) => ({
    key,
    ...value,
  }));
  return (
    <div className="w-full flex justify-center space-x-2 p-6">
      {potentialHires.map((hire, key) => (
        <PotentialHireComponent key={key} potentialHire={hire} />
      ))}
    </div>
  );
};

export default ShopComponent;
