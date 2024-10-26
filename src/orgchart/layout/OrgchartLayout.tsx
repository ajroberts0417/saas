import { GameText, Scoreboard, TooltipInfo } from "../data/types";
import Announcement from "../components/Announcement";
import ScoreboardComponent from "../components/Scoreboard";

import TooltipComponent from "../components/Tooltip";
import { ReactElement } from "react";

interface OrgchartLayoutProps {
  scoreboard: Scoreboard;
  announcement: GameText;
  tooltip: TooltipInfo;
  children: ReactElement;
}

const OrgchartLayout = ({ scoreboard, announcement, tooltip, children }: OrgchartLayoutProps) => {
  // Add ability

  return (
    <div className="flex flex-col">
      <div className="flex">
        {/* Office or Shop */}
        {children}
        {/* {shop && !office && <ShopComponent shop={shop} />} */}

        {/* Scoreboard */}
        <ScoreboardComponent scoreboard={scoreboard} />
      </div>
      <div className="flex">
        {/* Announcements */}
        <Announcement announcement={announcement} />

        {/* Tooltip */}
        <TooltipComponent tooltip={tooltip} />
      </div>
    </div>
  );
};

export default OrgchartLayout;
