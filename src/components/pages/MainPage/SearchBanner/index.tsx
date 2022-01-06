import { FC } from "react";
import Button from "../../../common/Button";
import SearchField from "../../../common/SearchField";
import "./index.scss";
import tours from "./tours.png";
import rocket from "./rocket.svg";

interface SearchBannerProps {}

const SearchBanner: FC<SearchBannerProps> = () => {
  return (
    <div className="search-banner">
      <img className="search-banner__logo" src={tours} alt="space tours" />
      <div className="search-banner__search-field-wrapper">
        <SearchField icon={rocket} />
      </div>
      <div className="search-banner__search-button-wrapper">
        <Button>SEARCH</Button>
      </div>
    </div>
  );
};

export default SearchBanner;
