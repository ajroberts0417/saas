// THIS SHOULD BE A TOAST!!!
// using shadcn/ui toast

import { GameText } from "../../data/orgchart/types";

interface AnnoucementProps {
  announcement: GameText;
}

const Announcement = ({ announcement }: AnnoucementProps) => {
  return <div>{announcement.text}</div>;
};

export default Announcement;
