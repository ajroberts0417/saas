import { Office, Scoreboard, Shop } from "../../data/orgchart";
import Announcements from "./Announcements";
import OfficeComponent from "./Office";
import ShopComponent from "./Shop";
import Tooltip from "./Tooltip";

interface OrgchartLayoutProps {
  office?: Office;
  shop?: Shop;
  scoreboard: Scoreboard;
  announcements: string[];
  tooltip: string[];
}

const OrgchartLayout = ({
  office,
  shop,
  scoreboard,
  announcements,
  tooltip,
}: OrgchartLayoutProps) => {
  // Add ability

  return (
    <div>
      {/* Office or Shop */}
      {office && <OfficeComponent office={office} />}
      {shop && <ShopComponent />}

      {/* Scoreboard */}

      {/* Announcements */}
      <Announcements />

      {/* Tooltip */}
      <Tooltip />
    </div>
  );
};

export default OrgchartLayout;
