import { gql, useQuery } from "@apollo/react-hooks";
import { useState } from "react";
import "./index.scss";
import MissionsTable from "./MissionsTable";
import SearchBanner from "./SearchBanner/index";

const LAUNCHES = gql`
  query GetLaunches($pageOffset: Int!, $missionName: String) {
    launchesPast(limit: 6, offset: $pageOffset, find: {mission_name: $missionName}) {
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      launch_year
      id
    }
  }
`;

const MainPage = () => {
  const [pageOffset, setPageOffset] = useState<number>(0);
  const [missionName, setMissionName] = useState<string>("");
  const { loading, error, data } = useQuery(LAUNCHES, {
    variables: { pageOffset, missionName },
  });
  console.log(pageOffset);

  return (
    <div className="app-container">
      <div className="app-container__content app-container__content--main-page">
        {loading && <div className="loader"></div>}
        {error && <p>Error...</p>}
        {data && (
          <div className="main-page-content">
            <SearchBanner missionName={missionName} setMissionName={setMissionName} />
            <MissionsTable
              pageOffset={pageOffset}
              setPageOffset={setPageOffset}
              data={data.launchesPast}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPage;
