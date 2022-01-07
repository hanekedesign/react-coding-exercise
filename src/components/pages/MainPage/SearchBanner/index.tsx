import { Dispatch, FC, SetStateAction, useState } from "react";
import Button from "../../../common/Button";
import SearchField from "../../../common/SearchField";
import "./index.scss";
import tours from "./tours.png";
import rocket from "./rocket.svg";
interface SearchBannerProps {
  missionName: string;
  setMissionName: Dispatch<SetStateAction<string>>;
}

const SearchBanner: FC<SearchBannerProps> = ({
  missionName,
  setMissionName,
}) => {
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
            setMissionName(searchFieldState);
          }}
        >
          SEARCH
        </Button>
      </div>
    </div>
  );
};

export default SearchBanner;
