import { gql, useQuery } from "@apollo/react-hooks";
import { useEffect, useState } from "react";
import {
  SortingInterface,
  FilteringInterface,
} from "../../../interfaces-and-types";
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
  const [filters, setFilters] = useState<FilteringInterface>({
    pageOffset: 0,
    missionName: "",
  });
  const [sorting, setSorting] = useState<SortingInterface>({
    sortingColumn: "launch_year",
    order: "DESC",
  });


  const { loading, error, data, refetch } = useQuery(LAUNCHES, {
    variables: {
      pageOffset: filters.pageOffset,
      missionName: filters.missionName,
      sortingColumn: sorting.sortingColumn,
      order: sorting.order,
    },
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
              <SearchBanner filters={filters} setFilters={setFilters} />
              <MissionsTable
                filters={filters}
                setFilters={setFilters}
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
