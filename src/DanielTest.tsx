import OrgchartLayout from "./components/orgchart/OrgchartLayout";

import { initialGame } from "./data/orgchart/game";

const DanielTest = () => {
  return (
    <div>
      <OrgchartLayout game={initialGame} />
    </div>
  );
};

export default DanielTest;
