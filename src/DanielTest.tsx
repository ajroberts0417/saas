import OrgchartLayout from "./components/orgchart/OrgchartLayout";
import {
  dummyAnnouncements,
  dummyOffice,
  dummyScoreboard,
  dummyShop,
  dummyTooltip,
} from "./dummyData";

const DanielTest = () => {
  return (
    <div>
      <OrgchartLayout
        office={dummyOffice}
        shop={dummyShop}
        scoreboard={dummyScoreboard}
        announcements={dummyAnnouncements}
        tooltip={dummyTooltip}
      />
    </div>
  );
};

export default DanielTest;
