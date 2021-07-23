import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "@reach/router";
import "../styles/DetailPage.css";
import backBtn from "../images/back.svg";

const GET_TICKET = (missionName) => {
  // escape from parenthese
  const formatted = missionName.replace(/[\(\)]/g, (c) => {
    return "\\\\" + c;
  });
  return gql`
  query {
    launchesPast(find: {mission_name: "${formatted}"}) {
      id
      mission_name
      launch_year
      rocket {
        rocket_name
        rocket_type
      }
    }
  }`;
};

function DetailPage(props) {
  const { data, loading } = useQuery(GET_TICKET(props.missionName));
  return (
    <div className="detail-page">
      <Link to="/">
        <img className="backbtn" alt="back arrow" src={backBtn} />
      </Link>
      <div className="ticket-area">
        <div className="ticket">
          <div className="ticket-mission-content">
            <p className="ticket-subtitle">MISSION NAME</p>
            <p id="mission-ticket-name">
              {loading ? "loading" : data.launchesPast[0].mission_name}
            </p>
            <div className="rocket-info-container">
              <div className="rocket-info">
                <p className="ticket-subtitle">ROCKET NAME</p>
                <p className="rocket-data-text">
                  {loading
                    ? "loading"
                    : data.launchesPast[0].rocket.rocket_name}
                </p>
              </div>
              <div className="rocket-info">
                <p className="ticket-subtitle">ROCKET TYPE</p>
                <p className="rocket-data-text">
                  {loading
                    ? "loading"
                    : data.launchesPast[0].rocket.rocket_type}
                </p>
              </div>
            </div>
          </div>
          <div className="ticket-launch-year-content">
            <h6 id="launch-year-ticket-title">LAUNCH YEAR</h6>
            <p id="ticket-launch-year">
              {loading ? "loading" : data.launchesPast[0].launch_year}
            </p>
          </div>
        </div>
        <button id="print-btn">PRINT TICKET</button>
      </div>
    </div>
  );
}

export default DetailPage;
