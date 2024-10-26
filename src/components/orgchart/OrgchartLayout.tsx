import { Office, Scoreboard, Shop } from "../../data/orgchart";
import Announcements from "./Announcements";
import OfficeComponent from "./Office";
import ScoreboardComponent from "./Scoreboard";
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
    <div className="flex">
      {/* Office or Shop */}
      {office && <OfficeComponent office={office} />}
      {/* {shop && !office && <ShopComponent shop={shop} />} */}

      {/* Scoreboard */}
      <ScoreboardComponent scoreboard={scoreboard} />

      {/* Announcements */}
      <Announcements />

      {/* Tooltip */}
      <Tooltip />
    </div>
  );
};

export default OrgchartLayout;
