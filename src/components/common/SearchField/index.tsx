import { FC } from "react";
import "./index.scss";

interface SearchFieldProps {
  icon: any;
  value: string;
  onChange: (e: { target: { value: string } }) => void;
}

const SearchField: FC<SearchFieldProps> = ({ icon, onChange, value }) => {
  return (
    <div className="search-field">
      <img className="search-field__icon" src={icon}></img>
      <input
        onChange={onChange}
        value={value}
        placeholder="Search for flights"
        className="search-field__input"
      />
    </div>
  );
};

export default SearchField;
