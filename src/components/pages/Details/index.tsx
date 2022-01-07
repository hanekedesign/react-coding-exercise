import { FC } from "react";
import BackButton from "../../common/BackButton";
import Button from "../../common/Button";
import "./index.scss";
import { useParams } from "react-router-dom";
import { createBrowserHistory } from "history";
import { gql, useQuery } from "@apollo/react-hooks";

const LAUNCH = gql`
  query GetLaunch($id: ID!) {
    launch(id: $id) {
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      launch_year
    }
  }
`;
const history = createBrowserHistory();

const Details = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(LAUNCH, {
    variables: {
      id,
    },
  });

  const goBack = () => {
    history.back();
  };
  const launch = data && data.launch;
  return (
    <div className="app-container">
      <div className="app-container__content app-container__content--details">
        <div className="details">
          <BackButton onClick={goBack} className="details-back-button" />
          {loading && (
            <div className="details-error-wrapper">
              <div className="loader"></div>
            </div>
          )}
          {error && (
            <div className="details-error-wrapper">
              <p className="details-error-text">Error</p>
            </div>
          )}
          {data && launch && (
            <>
              <div className="details-main">
                <label className="details-main__label">MISSION NAME</label>
                <h2 className="details-main__h2">{launch.mission_name}</h2>
                <div className="details-main__rocket-info-wrapper">
                  <div className="details-main__rocket-info">
                    <label className="details-main__label">ROCKET NAME</label>
                    <p className="details-main__p">
                      {launch.rocket.rocket_name}
                    </p>
                  </div>
                  <div className="details-main__rocket-info">
                    <label className="details-main__label">ROCKET TYPE</label>
                    <p className="details-main__p">
                      {launch.rocket.rocket_type}
                    </p>
                  </div>
                </div>
              </div>
              <div className="details-launch">
                <div className="details-launch__label">LAUNCH YEAR</div>
                <div className="details-launch__p">{launch.launch_year}</div>
              </div>
              <div className="details-print">
                <Button onClick={() => {}}>PRINT TICKET</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
