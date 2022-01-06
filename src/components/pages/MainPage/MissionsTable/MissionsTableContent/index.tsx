import { FC } from "react";
import "./index.scss";
interface MissionsTableContentProps {
  data: any;
}

const MissionsTableContent: FC<MissionsTableContentProps> = ({ data }) => {
  return (
    <>
      {data.map((el: any) => {
        return (
          <div className="missions-table-content-row" key={el.id}>
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
        );
      })}
    </>
  );
};

export default MissionsTableContent;
