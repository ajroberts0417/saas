// this should be the bottom right, floating tooltip that tells us what's going on in the game.

import { TooltipInfo } from "../data/types";

interface TooltipComponentProps {
  tooltip: TooltipInfo;
}

const TooltipComponent = ({ tooltip }: TooltipComponentProps) => {
  return (
    <div>
      {tooltip.description.map((gameText, key) => (
        <p key={key}>{gameText.text}</p>
      ))}
    </div>
  );
};

export default TooltipComponent;
