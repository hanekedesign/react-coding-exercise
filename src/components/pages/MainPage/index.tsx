import { gql, useQuery } from "@apollo/react-hooks";
import { useEffect, useState } from "react";
import Button from "../../common/Button";
import "./index.scss";
import MissionsTable from "./MissionsTable";
import SearchBanner from "./SearchBanner/index";

const LAUNCHES = gql`
  query GetLaunches(
    $pageOffset: Int!
    $missionName: String
    $sortingColumn: String
    $order: String
  ) {
    launchesPast(
      limit: 6
      offset: $pageOffset
      find: { mission_name: $missionName }
      order: $order
      sort: $sortingColumn
    ) {
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
  const [sorting, setSorting] = useState<{
    sortingColumn: string;
    order: string;
  }>({ sortingColumn: "launch_year", order: "DESC" });

  useEffect(() => {
    setPageOffset(0);
  }, [missionName]);

  const { loading, error, data, refetch } = useQuery(LAUNCHES, {
    variables: {
      pageOffset,
      missionName,
      sortingColumn: sorting.sortingColumn,
      order: sorting.order,
    },
    skip: missionName && pageOffset ? true : false,
  });

  return (
    <div className="app-container">
      <div className="app-container__content app-container__content--main-page">
        <div className="main-page-content">
          {loading && (
            <div className="main-page-loader-error">
              <div className="loader"></div>
            </div>
          )}
          {error && (
            <div className="main-page-loader-error main-page-loader-error--error">
              <p className="main-page-loader-error__text">
                Error...{" "}
                {error.graphQLErrors.map(
                  (el: { message: string }) => el.message
                )}
              </p>
              <div className="main-page-loader-error__btn-wrapper">
                <Button onClick={() => refetch()}>RETRY</Button>
              </div>
            </div>
          )}
          {data && (
            <>
              <SearchBanner
                missionName={missionName}
                setMissionName={setMissionName}
              />
              <MissionsTable
                pageOffset={pageOffset}
                setPageOffset={setPageOffset}
                sorting={sorting}
                setSorting={setSorting}
                data={data.launchesPast}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
