import { FC } from "react";
import { unstable_HistoryRouter } from "react-router-dom";
import BackButton from "../../common/BackButton";
import Button from "../../common/Button";
import "./index.scss";
import { useParams } from "react-router-dom";
import { createBrowserHistory } from "history";

interface DetailsProps {}

const Details: FC<DetailsProps> = () => {
  const { id } = useParams();
  const history = createBrowserHistory();

  const goBack = () => {
    history.back();
  };
  return (
    <div className="app-container">
      <div className="app-container__content app-container__content--details">
        <div className="details">
          <BackButton onClick={goBack} className="details-back-button" />
          <div className="details-main">
            <label className="details-main__label">MISSION NAME</label>
            <h2 className="details-main__h2">To The Moon And Back</h2>
            <div className="details-main__rocket-info-wrapper">
              <div className="details-main__rocket-info">
                <label className="details-main__label">ROCKET NAME</label>
                <p className="details-main__p">To the moon and back</p>
              </div>
              <div className="details-main__rocket-info">
                <label className="details-main__label">ROCKET TYPE</label>
                <p className="details-main__p">To the moon and back</p>
              </div>
            </div>
          </div>
          <div className="details-launch">
            <div className="details-launch__label">LAUNCH YEAR</div>
            <div className="details-launch__p">2007</div>
          </div>
          <div className="details-print">
            <Button onClick={() => {}}>PRINT TICKET</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
