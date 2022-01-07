import { Dispatch, FC, SetStateAction } from "react";
import "./index.scss";
import MissionsTableContent from "./MissionsTableContent";
import MissionsTableHeader from "./MissionsTableHeader";
import MissionsTablePagination from "./MissionsTablePagination";

interface MissionsTableProps {
  data: any;
  pageOffset: number;
  setPageOffset: Dispatch<SetStateAction<number>>;
}

const MissionsTable: FC<MissionsTableProps> = ({
  data,
  pageOffset,
  setPageOffset,
}) => {
  return (
    <>
      <MissionsTableHeader />
      {data && data.length === 0 ? (
        <p className="mission-table-error">No records for searching query</p>
      ) : (
        <>
          <MissionsTableContent data={data} />
          <MissionsTablePagination
            pageOffset={pageOffset}
            setPageOffset={setPageOffset}
          />
        </>
      )}
    </>
  );
};

export default MissionsTable;
