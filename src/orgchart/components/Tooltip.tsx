// this should be the bottom right, floating tooltip that tells us what's going on in the game.
import { toast } from "sonner";
import { TooltipInfo } from "../data/types";

interface TooltipComponentProps {
  tooltip: TooltipInfo;
}

const TooltipComponent = ({ tooltip }: TooltipComponentProps) => {
  function render() {
    tooltip.description.map((gameText) => {
      toast("Announcement", {
        description: gameText,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    });
  }
  return (
    <div>
      <button onClick={() => render()}></button>
    </div>
  );
};

export default TooltipComponent;
