import { Dispatch, FC, MouseEventHandler, SetStateAction } from "react";
import "./index.scss";
import arrow from "./arrow-up.svg";
interface MissionsTableHeaderProps {
  sorting: { sortingColumn: string; order: string };
  setSorting: Dispatch<
    SetStateAction<{ sortingColumn: string; order: string }>
  >;
}

const MissionsTableHeader: FC<MissionsTableHeaderProps> = ({
  sorting,
  setSorting,
}) => {
  const arrowPositionString = `missions-table-header-column__arrow ${
    sorting.order === "DESC" ? "missions-table-header-column__arrow--down" : ""
  }`;

  const handleSort = (columnName: string) => {
    if (sorting.order === "DESC" && columnName === sorting.sortingColumn) {
      setSorting({ sortingColumn: columnName, order: "ASC" });
    } else {
      setSorting({ sortingColumn: columnName, order: "DESC" });
    }
  };

  return (
    <div className="missions-table-header">
      <div
        className={`missions-table-header-column missions-table-header-column--first ${
          sorting.sortingColumn === "mission_name"
            ? "missions-table-header-column--selected"
            : ""
        }`}
        onClick={() => handleSort("mission_name")}
      >
        <h3 className="missions-table-header-column__heading">MISSION NAME</h3>
        {sorting.sortingColumn === "mission_name" && (
          <img src={arrow} alt="arrow" className={arrowPositionString}></img>
        )}
      </div>
      <div
        className={`missions-table-header-column missions-table-header-column--second ${
          sorting.sortingColumn === "rocket_name"
            ? "missions-table-header-column--selected"
            : ""
        }`}
        onClick={() => handleSort("rocket_name")}
      >
        {" "}
        <h3 className="missions-table-header-column__heading">ROCKET NAME</h3>
        {sorting.sortingColumn === "rocket_name" && (
          <img src={arrow} alt="arrow" className={arrowPositionString}></img>
        )}
      </div>
      <div
        className={`missions-table-header-column missions-table-header-column--third ${
          sorting.sortingColumn === "rocket_type"
            ? "missions-table-header-column--selected"
            : ""
        }`}
        onClick={() => handleSort("rocket_type")}
      >
        {" "}
        <h3 className="missions-table-header-column__heading">ROCKET TYPE</h3>
        {sorting.sortingColumn === "rocket_type" && (
          <img
            src={arrow}
            alt="arrow"
            className={arrowPositionString}
            onClick={() => handleSort("rocket_type")}
          ></img>
        )}
      </div>
      <div
        className={`missions-table-header-column missions-table-header-column--fourth ${
          sorting.sortingColumn === "launch_year"
            ? "missions-table-header-column--selected"
            : ""
        }`}
        onClick={() => handleSort("launch_year")}
      >
        {" "}
        <h3 className="missions-table-header-column__heading">LAUNCH YEAR</h3>
        {sorting.sortingColumn === "launch_year" && (
          <img src={arrow} alt="arrow" className={arrowPositionString}></img>
        )}
      </div>
    </div>
  );
};

export default MissionsTableHeader;
