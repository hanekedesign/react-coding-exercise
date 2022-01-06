import { FC } from "react";
import MissionsTableContent from "./MissionsTableContent";
import MissionsTableHeader from "./MissionsTableHeader";

interface MissionsTableProps {
  data: any;
}

const MissionsTable: FC<MissionsTableProps> = ({data}) => {
  return (
    <>
      <MissionsTableHeader />
      <MissionsTableContent data={data}/>
    </>
  );
};

export default MissionsTable;
