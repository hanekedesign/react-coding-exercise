import { FC } from "react";
import "./index.scss";

interface SearchFieldProps {
  icon: any;
}

const SearchField: FC<SearchFieldProps> = ({ icon }) => {
  return (
    <div className="search-field">
      <img className="search-field__icon" src={icon}></img>
      <input
        placeholder="Search for flights"
        className="search-field__input"
      />
    </div>
  );
};

export default SearchField;
