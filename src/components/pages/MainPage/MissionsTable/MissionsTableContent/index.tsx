import { Dispatch, FC, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { DataArrayInterface } from "../../../../../interfaces-and-types";
import "./index.scss";
interface MissionsTableContentProps {
  data: DataArrayInterface;
}

const MissionsTableContent: FC<MissionsTableContentProps> = ({ data }) => {
  return (
    <>
      {data.map((el: any) => {
        return (
          <Link className="mission-table-link" to={"/details/" + el.id} key={el.id}>
            <div className="missions-table-content-row">
              <div className="missions-table-content-item missions-table-content-item--first">
                <div className="missions-table-content-item__text">
                  {el.mission_name}
                </div>
              </div>
              <div className="missions-table-content-item missions-table-content-item--second">
                <div className="missions-table-content-item__text">
                  {el.rocket.rocket_name}
                </div>
              </div>
              <div className="missions-table-content-item missions-table-content-item--third">
                <div className="missions-table-content-item__text missions-table-content-item__text--centered">
                  {el.rocket.rocket_type}
                </div>
              </div>
              <div className="missions-table-content-item missions-table-content-item--fourth">
                <div className="missions-table-content-item__text missions-table-content-item__text--centered">
                  {el.launch_year}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default MissionsTableContent;