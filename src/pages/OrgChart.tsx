import { MarqueeDemo } from "./components/orgchart/OrgMarquee";
import Game from "../orgchart/components/Game";
import OrgchartLayout from "../orgchart/layout/OrgchartLayout";

export function OrgChart() {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-background">
      <Game />
    </div>
  );
}
