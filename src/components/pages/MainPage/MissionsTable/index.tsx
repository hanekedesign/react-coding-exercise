import { Dispatch, FC, SetStateAction } from "react";
import {
  DataArrayInterface,
  FilteringInterface,
  SortingInterface,
} from "../../../../interfaces-and-types";
import "./index.scss";
import MissionsTableContent from "./MissionsTableContent";
import MissionsTableHeader from "./MissionsTableHeader";
import MissionsTablePagination from "./MissionsTablePagination";

interface MissionsTableProps {
  data: DataArrayInterface;
  filters: FilteringInterface;
  setFilters: Dispatch<SetStateAction<FilteringInterface>>;
  sorting: SortingInterface;
  setSorting: Dispatch<SetStateAction<SortingInterface>>;
}

const MissionsTable: FC<MissionsTableProps> = ({
  data,
  filters,
  setFilters,
  sorting,
  setSorting,
}) => {
  return (
    <>
      <MissionsTableHeader sorting={sorting} setSorting={setSorting} />
      {data && data.length === 0 ? (
        <p className="mission-table-error">No records for searching query</p>
      ) : (
        <>
          <MissionsTableContent data={data} />
          <MissionsTablePagination filters={filters} setFilters={setFilters} />
        </>
      )}
    </>
  );
};

export default MissionsTable;
