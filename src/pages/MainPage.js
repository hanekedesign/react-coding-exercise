import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import GetLaunchesPast from "../components/GetLaunchesPast";
import spacetours from "../images/spacetours.svg";
import rocketship from "../images/rocketship.svg";
import "../styles/MainPage.css";
import { useLazyQuery } from "@apollo/react-hooks";

const GET_LAUNCHES = gql`
  query {
    launchesPast(limit: 6, offset: 0) {
      id
      mission_name
      launch_year
      rocket {
        rocket_name
        rocket_type
      }
    }
  }
`;

const SEARCH_QUERY = (query) => {
  return gql`
    query {
      launchesPast(limit: 6, find: {mission_name: "${query}"}) {
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

function MainPage() {
  const { data, loading } = useQuery(GET_LAUNCHES);
  const [searchQuery, setSearchQuery] = useState("");
  const [search, searchQueryResults] = useLazyQuery(SEARCH_QUERY(searchQuery));
  // use lazy query
  const [launches, setLaunches] = useState([]);
  useEffect(() => {
    data && setLaunches(data.launchesPast);
    if (searchQueryResults.data)
      setLaunches(searchQueryResults.data.launchesPast);
  }, [data, searchQueryResults.data]);
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };

  return (
    <div className="MainPage">
      <div className="page-content">
        <div className="header">
          <div className="title-container">
            <img className="title" src={spacetours} alt="cruises in luxury to exotic space tours" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <img src={rocketship} alt="" />
              <input
                type="text"
                name="search"
                value={searchQuery}
                placeholder="Search for flights"
                onChange={handleChange}
              />
            </div>
            <button className="search-btn">SEARCH</button>
          </form>
        </div>
        <div className="columns">
          <h5 className="column-title" id="mission-name">
            MISSION NAME
          </h5>
          <h5 className="column-title" id="rocket-name">
            ROCKET NAME
          </h5>
          <h5 className="column-title" id="rocket-type">
            ROCKET TYPE
          </h5>
          <h5 className="column-title" id="launch-year">
            LAUNCH YEAR
          </h5>
        </div>
        <GetLaunchesPast loading={loading} launches={launches} />
        <span className="page">6 of 45</span>
        <button className="pagination-btn">LOAD MORE</button>
      </div>
    </div>
  );
}

export default MainPage;
