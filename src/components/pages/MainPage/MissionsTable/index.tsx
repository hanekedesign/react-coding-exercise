import { Dispatch, FC, SetStateAction } from "react";
import MissionsTableContent from "./MissionsTableContent";
import MissionsTableHeader from "./MissionsTableHeader";
import MissionsTablePagination from "./MissionsTablePagination";

interface MissionsTableProps {
  data: any;
  pageOffset: number;
  setPageOffset: Dispatch<SetStateAction<number>>;
}

const MissionsTable: FC<MissionsTableProps> = ({ data, pageOffset, setPageOffset}) => {
  return (
    <>
      <MissionsTableHeader />
      <MissionsTableContent data={data} />
      <MissionsTablePagination pageOffset={pageOffset} setPageOffset={setPageOffset}  />
    </>
  );
};

export default MissionsTable;
