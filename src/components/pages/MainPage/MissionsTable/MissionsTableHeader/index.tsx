import { FC } from "react";
import "./index.scss";
import arrow from "./arrow-up.svg";
interface MissionsTableHeaderProps {}

const MissionsTableHeader: FC<MissionsTableHeaderProps> = () => {
  return (
    <div className="missions-table-header">
      <div className="missions-table-header-column missions-table-header-column--first missions-table-header-column--selected">
        <h3 className="missions-table-header-column__heading">MISSION NAME</h3>
        <img
          src={arrow}
          alt="arrow"
          className="missions-table-header-column__arrow"
        ></img>
      </div>
      <div className="missions-table-header-column missions-table-header-column--second">
        <h3 className="missions-table-header-column__heading">ROCKET NAME</h3>
        <img
          src={arrow}
          alt="arrow"
          className="missions-table-header-column__arrow"
        ></img>
      </div>
      <div className="missions-table-header-column missions-table-header-column--third">
        <h3 className="missions-table-header-column__heading">ROCKET TYPE</h3>
        <img
          src={arrow}
          alt="arrow"
          className="missions-table-header-column__arrow"
        ></img>
      </div>
      <div className="missions-table-header-column missions-table-header-column--fourth">
        <h3 className="missions-table-header-column__heading">LAUNCH YEAR</h3>
        <img
          src={arrow}
          alt="arrow"
          className="missions-table-header-column__arrow"
        ></img>
      </div>
    </div>
  );
};

export default MissionsTableHeader;
