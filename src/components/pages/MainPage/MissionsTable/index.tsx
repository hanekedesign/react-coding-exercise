import { Dispatch, FC, SetStateAction } from "react";
import { DataArrayInterface, SortingInterface } from "../../../../interfaces-and-types";
import "./index.scss";
import MissionsTableContent from "./MissionsTableContent";
import MissionsTableHeader from "./MissionsTableHeader";
import MissionsTablePagination from "./MissionsTablePagination";

interface MissionsTableProps {
  data: DataArrayInterface;
  pageOffset: number;
  setPageOffset: Dispatch<SetStateAction<number>>;
  sorting: SortingInterface;
  setSorting: Dispatch<
    SetStateAction<SortingInterface>
  >;
}

const MissionsTable: FC<MissionsTableProps> = ({
  data,
  pageOffset,
  setPageOffset,
  sorting, 
  setSorting
}) => {
  return (
    <>
      <MissionsTableHeader sorting={sorting} setSorting={setSorting} />
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
