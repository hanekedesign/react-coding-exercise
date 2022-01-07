import { Dispatch, FC, SetStateAction, useState } from "react";
import Button from "../../../common/Button";
import SearchField from "../../../common/SearchField";
import "./index.scss";
import tours from "./tours.png";
import rocket from "./rocket.svg";
import { FilteringInterface } from "../../../../interfaces-and-types";
interface SearchBannerProps {
  filters: FilteringInterface;
  setFilters: Dispatch<SetStateAction<FilteringInterface>>;
}

const SearchBanner: FC<SearchBannerProps> = ({ filters, setFilters }) => {
  const [searchFieldState, setSearchFieldState] = useState<string>("");

  const handleChangeInputValue = (e: { target: { value: string } }) => {
    const targetValue = e.target.value;
    setSearchFieldState(targetValue);
  };

  return (
    <div className="search-banner">
      <img className="search-banner__logo" src={tours} alt="space tours" />
      <div className="search-banner__search-field-wrapper">
        <SearchField
          onChange={handleChangeInputValue}
          value={searchFieldState}
          icon={rocket}
        />
      </div>
      <div className="search-banner__search-button-wrapper">
        <Button
          onClick={() => {
            setFilters({ pageOffset: 0, missionName: searchFieldState });
          }}
        >
          SEARCH
        </Button>
      </div>
    </div>
  );
};

export default SearchBanner;
