export interface SortingInterface {
  sortingColumn: string;
  order: string;
}
export interface DataInterface {
  mission_name: string;
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
  launch_year: string;
  id: string;
}

export type DataArrayInterface = DataInterface[];

export interface FilteringInterface {
  pageOffset: number;
  missionName: string;
}
