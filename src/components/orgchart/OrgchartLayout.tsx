import { Game } from "../../data/orgchart/types";
import Announcement from "./Announcement";
import OfficeComponent from "./Office";
import ScoreboardComponent from "./Scoreboard";

import TooltipComponent from "./Tooltip";

interface OrgchartLayoutProps {
  game: Game;
}

const OrgchartLayout = ({ game }: OrgchartLayoutProps) => {
  // Add ability

  return (
    <div className="flex flex-col">
      <div className="flex">
        {/* Office or Shop */}
        {game.office && <OfficeComponent office={game.office} />}
        {/* {shop && !office && <ShopComponent shop={shop} />} */}

        {/* Scoreboard */}
        <ScoreboardComponent scoreboard={game.scoreboard} />
      </div>
      <div className="flex">
        {/* Announcements */}
        <Announcement announcement={game.announcement} />

        {/* Tooltip */}
        <TooltipComponent tooltip={game.tooltip} />
      </div>
    </div>
  );
};

export default OrgchartLayout;
