import { gql, useQuery } from "@apollo/react-hooks";
import { useState } from "react";
import "./index.scss";
import MissionsTable from "./MissionsTable";
import SearchBanner from "./SearchBanner/index";

const LAUNCHES = gql`
  query GetLaunches {
    launchesPast(limit: 6, offset: 0) {
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
  const { loading, error, data } = useQuery(LAUNCHES, {
    variables: { offset: pageOffset },
  });

  return (
    <div className="app-container">
      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {data && (
        <div className="app-container__content app-container__content--main-page">
          <div className="main-page-content">
            <SearchBanner />
            <MissionsTable data={data.launchesPast} />
            
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;
